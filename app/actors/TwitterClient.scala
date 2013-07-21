package actors

import akka.actor._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Concurrent, Iteratee}
import play.api.libs.ws.WS
import play.api.libs.json.{JsError, JsValue, Json}
import play.api.libs.json.JsSuccess
import play.api.libs.oauth.OAuthCalculator

import org.joda.time.DateTime

import scala.concurrent.duration._
import scala.language.postfixOps
import scala.collection.immutable.HashSet

import models._
import utilities._
import models.TweetImplicits._

object TwitterClient {
  val url = "https://stream.twitter.com/1.1/statuses/filter.json?track="

  val twitterURL = Conf.get("twitter.URL")
  val elasticURL = Conf.get("elastic.URL")

  /** Protocol for Twitter Client actors */
  case class AddTopic(topic: String)
  case class RemoveTopic(topic: String)
  case object CheckStatus
  case object TweetReceived
  case object Start

  /** BirdWatch actor system, supervisor, timer*/
  val system = ActorSystem("BirdWatch")
  val supervisor = system.actorOf(Props(new Supervisor(system.eventStream)), "TweetSupervisor")
  system.scheduler.schedule(60 seconds, 60 seconds, supervisor, CheckStatus )

  /** system-wide channels / enumerators for attaching SSE streams to clients*/
  val (tweetsOut, tweetChannel) = Concurrent.broadcast[Tweet]
  val (jsonTweetsOut, jsonTweetsChannel) = Concurrent.broadcast[Matches]
  val (countOut, countChannel) = Concurrent.broadcast[String]
  
  /** Subscription topics stored in this MUTABLE collection */
  val topics: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()

  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
    * as Tweet instances and publishes them to eventStream. */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] {
    chunk =>
      val chunkString = new String(chunk, "UTF-8")
      val json = Json.parse(chunkString)

      (json \ "id_str").asOpt[String].map { id => WS.url(elasticURL + "/birdwatch/tweets/" + id).put(json) }
    
      /** persist any valid JSON from Twitter Streaming API */
      Tweet.insertJson(json)
    
      matchAndPush(json)

      TweetReads.reads(json) match {
        case JsSuccess(t: Tweet, _) => {
          supervisor ! TweetReceived
          tweetChannel.push(WordCount.wordsChars(t))
        }
        case e: JsError => println(chunkString)
      }
  }

  /** Starts new WS connection to Twitter Streaming API. Twitter disconnects the previous one automatically.
    * Can this be ended explicitly from here though, without resetting the whole underlying client? */
  def start() {
    println("Starting client for topics " + topics)
    val url = twitterURL + topics.mkString("%2C").replace(" ", "%20")
    println("URL: " + url)

    WS.url(url).withTimeout(-1)
      .sign(OAuthCalculator(Conf.consumerKey, Conf.accessToken))
      .get(_ => tweetIteratee)
  }

  /** Actor taking care of monitoring the WS connection */
  class Supervisor(eventStream: akka.event.EventStream) extends Actor {
    var lastTweetReceived: Long = 0L
    var tweetCount = 0L
    var lastCountSent = 0L
    Tweet.count.map(c => tweetCount += c) // only ask MongoDB for collection size once

    /** Receives control messages for starting / restarting supervised client and adding or removing topics */
    def receive = {
      case AddTopic(topic)  => topics.add(topic)
      case RemoveTopic(topic) => topics.remove(topic)
      case Start => start()
      case CheckStatus => if (DateTime.now.getMillis - lastTweetReceived > 30000) start()

      case TweetReceived => {
        val now = DateTime.now.getMillis 
        lastTweetReceived = now
        tweetCount += 1
        if (now - lastCountSent > 3000) {
          countChannel.push(tweetCount.toString)
          lastCountSent = now
        }
      }
    }
  }

  /** Takes JSON and matches it with percolation queries in ElasticSearch
    * @param json JsValue to match against 
    */
  def matchAndPush(json: JsValue): Unit = {
    WS.url(elasticURL + "/queries/tweets/_percolate").post(Json.obj("doc" -> json)).map {
      res => (Json.parse(res.body) \ "matches").asOpt[Seq[String]].map {
        m => jsonTweetsChannel.push(Matches(json, HashSet.empty[String] ++ m))
      }
    }
  }
}