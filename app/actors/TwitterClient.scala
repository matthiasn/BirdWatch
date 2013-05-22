package actors

import akka.actor.SupervisorStrategy.Restart
import akka.actor._
import akka.event.Logging
import akka.actor.OneForOneStrategy

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Concurrent, Iteratee}
import play.api.libs.ws.WS
import play.api.libs.oauth.{RequestToken, ConsumerKey, OAuthCalculator}
import play.api.libs.json.{JsValue, JsSuccess, Json}

import org.joda.time.DateTime
import scala.concurrent.duration._
import scala.language.postfixOps

import models._
import utilities._
import models.TweetImplicits._

/** Actors related to image processing */
object TwitterClient {

  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")

  /** Supervisor for Tweet stream client */
  val tweetClientSupervisor = system.actorOf(Props(new TwitterClient.Supervisor(system.eventStream)), "TweetClientSupervisor")

  /** Checking status of Twitter Streaming API connection every 30 seconds */
  system.scheduler.schedule(30 seconds, 30 seconds, tweetClientSupervisor, TwitterClient.CheckStatus )

  /** system-wide channels / enumerators for attaching SSE streams to clients*/
  val (tweetsOut, tweetChannel) = Concurrent.broadcast[Tweet]
  val (rawTweetsOut, rawTweetsChannel) = Concurrent.broadcast[JsValue]
  val (countOut, countChannel) = Concurrent.broadcast[String]

  /** OAuth consumer key and secret for Twitter Streaming API */
  val consumerKey = ConsumerKey(Conf.get("twitter.consumer.key"), Conf.get("twitter.consumer.secret"))
  /** OAuth request key and secret for Twitter Streaming API */
  val accessToken = RequestToken(Conf.get("twitter.accessToken.key"), Conf.get("twitter.accessToken.secret"))

  def stripImageUrl(t: Tweet) = t.copy(profile_image_url = t.profile_image_url.replaceAll("http://", "").replaceAll("_normal", ""))

  /** Protocol for Twitter Client actors */
  case class AddTopic(topic: String)
  case class RemoveTopic(topic: String)
  case object CheckStatus
  case object TweetReceived
  case object Start

  val topics: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()

  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
    * as Tweet instances and publishes them to eventStream. */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] {
    chunk =>
      val chunkString = new String(chunk, "UTF-8")
      val json = Json.parse(chunkString)

      /** persist any valid JSON from Twitter Streaming API */
      Tweet.insertJson(json)

      TweetReads.reads(json) match {
        case JsSuccess(t: Tweet, _) => {
          tweetClientSupervisor ! TweetReceived
          tweetChannel.push(WordCount.wordsChars(stripImageUrl(t)))
          rawTweetsChannel.push(json)
          //println(json)
        }
        case _ => println(chunkString)
      }
  }

  val url = "https://stream.twitter.com/1.1/statuses/filter.json?track="
  def start() {
    WS.url(url + topics.mkString("%2C").replace(" ", "%20"))
      .withTimeout(-1)
      .sign(OAuthCalculator(consumerKey, accessToken))
      .get(_ => tweetIteratee)
  }

  class Supervisor(eventStream: akka.event.EventStream) extends Actor with ActorLogging {
    override val supervisorStrategy = OneForOneStrategy(maxNrOfRetries = 10, withinTimeRange = 1.minute) {
      case _: Exception => Restart
    }
    override val log = Logging(context.system, this)
    override def preStart() { println("TwitterClient Supervisor starting") }
    override def preRestart(reason: Throwable, message: Option[Any]) {
      log.error(reason, "Restarting due to [{}] when processing [{}]", reason.getMessage, message.getOrElse(""))
    }

    var lastTweetReceived: Long = 0L
    var tweetCount = 0L
    var lastCountSent = 0L
    Tweet.count.map(c => tweetCount += c) // only ask MongoDB for collection size once

    /** Receives control messages for starting / restarting supervised client and adding or removing topics */
    def receive = {
      case AddTopic(topic)  => topics.add(topic)
      case RemoveTopic(topic) => topics.remove(topic)
      case Start => start()
      case CheckStatus => if ((DateTime.now.getMillis - lastTweetReceived) > 30000) start()

      case TweetReceived => {
        val now = DateTime.now.getMillis 
        lastTweetReceived = now
        tweetCount += 1
        if (now - lastCountSent > 5000) {
          countChannel.push(tweetCount.toString)
          lastCountSent = now
        }
      }
    }
  }
}