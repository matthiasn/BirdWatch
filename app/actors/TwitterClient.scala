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

import models._
import utilities._
import models.TweetImplicits._

/** Actors related to image processing */
object TwitterClient {

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
          ActorStage.tweetClientSupervisor ! TweetReceived
          tweetChannel.push(WordCount.wordsChars(stripImageUrl(t)))
          rawTweetsChannel.push(json)
        }
        case _ => println(chunkString)
      }
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

    val twitterClient = context.actorOf(Props(new TwitterClient()), "TwitterClient")

    var lastTweetReceived: Long = 0L
    var tweetCount = 0L
    var lastCountSent = 0L
    Tweet.count.map(c => tweetCount += c) // only ask MongoDB for collection size once

    /** Receives control messages for starting / restarting supervised client and adding or removing topics */
    def receive = {

      case AddTopic(topic)  => {
        topics.add(topic)
        twitterClient ! Kill
      }

      case RemoveTopic(topic) => {
        topics.remove(topic)
        twitterClient ! Kill
      }

      case TweetReceived => {
        val now = DateTime.now.getMillis 
        lastTweetReceived = now
        tweetCount += 1
        if (now - lastCountSent > 10000) {
          countChannel.push(tweetCount.toString)
          lastCountSent = now
        }
      }

      case CheckStatus => {
        if ((DateTime.now.getMillis - lastTweetReceived) > 15000) {
          twitterClient ! Kill
        }
      }
    }

    /** Image retrieval actor, receives Tweets, retrieves the Twitter profile images for each user and passes them on to
      * conversion actor. */
    class TwitterClient() extends Actor with ActorLogging {
      override val log = Logging(context.system, this)

      override def preStart() {
        println("Starting TwitterClient actor for topics: " + topics)
      }

      override def preRestart(reason: Throwable, message: Option[Any]) {
        log.error(reason, "Restarting due to [{}] when processing [{}]", reason.getMessage, message.getOrElse(""))
      }

      val url = "https://stream.twitter.com/1.1/statuses/filter.json?track="
      val conn = WS.url(url + TwitterClient.topics.mkString("%2C").replace(" ", "%20"))
        .withTimeout(-1)
        .sign(OAuthCalculator(consumerKey, accessToken))
        .get(_ => TwitterClient.tweetIteratee)

      /** Connects to Twitter Streaming API and retrieve a stream of Tweets for the specified search word or words.
        * Passes received chunks of data into tweetIteratee */
      def receive = {
        case _ =>
      }
    }
  }
}