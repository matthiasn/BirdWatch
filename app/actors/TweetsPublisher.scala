package actors

import akka.actor._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.Iteratee
import play.api.libs.ws.WS
import play.api.libs.json.{JsError, JsSuccess, Json}

import org.joda.time.DateTime
import scala.concurrent.duration._
import scala.language.postfixOps

import models._
import utilities._
import models.TweetImplicits._
import akka.zeromq._
import play.api.libs.oauth.OAuthCalculator
import akka.zeromq.Bind

object TweetsPublisher {
  val url = "https://stream.twitter.com/1.1/statuses/filter.json?track="

  /** Protocol for Twitter Client actors */
  case class AddTopic(topic: String)

  case class RemoveTopic(topic: String)

  case object CheckStatus

  case object TweetReceived

  case object Start

  /** BirdWatch actor system needed by tweetPubSocket */
  val system = ActorSystem("BirdwatchProducer")

  /** ZeroMQ Publishing Socket (clients attach to this) */
  val tweetPubSocket = ZeroMQExtension(system).newSocket(SocketType.Pub, Bind("tcp://127.0.0.1:21231"))

  /** Supervision Actor, monitors connection (frequently) and restarts when idle for too long */
  val tweetClientSupervisor = system.actorOf(Props(new Supervisor(system.eventStream)), "TweetClientSupervisor")
  system.scheduler.schedule(60 seconds, 60 seconds, tweetClientSupervisor, CheckStatus)

  /** Subscription topics stored in this MUTABLE collection -> move to database? */
  val topics: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()

  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
    * as Tweet instances and publishes them to eventStream. */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] {
    chunk => {
      val chunkString = new String(chunk, "UTF-8") // payload is Array[Byte], make String
      val json = Json.parse(chunkString)           // parse JSON
      Tweet.insertJson(json)                       // persist valid JSON from Twitter Streaming API 

      /** notify supervisor on receipt of valid Tweet, publish on ZeroMQ socket */
      TweetReads.reads(json) match {
        case JsSuccess(t: Tweet, _) => {           
          tweetClientSupervisor ! TweetReceived
          tweetPubSocket ! ZMQMessage(Seq(Frame("birdwatch.tweets"), Frame(json.toString)))
        }
        case e: JsError => println(e)
      }      
    }
  }

  /** Starts new WS connection to Twitter Streaming API. Twitter disconnects the previous one automatically.
    * Can this be ended explicitly from here though, without resetting the whole underlying client? */
  def start() {
    println("Starting client for topics " + topics)
    WS.url(url + topics.mkString("%2C").replace(" ", "%20")).withTimeout(-1)
      .sign(OAuthCalculator(Conf.consumerKey, Conf.accessToken))
      .get(_ => tweetIteratee)             // attach tweetIteratee to handle every chunk of data
  }

  /** Actor taking care of monitoring the WS connection */
  class Supervisor(eventStream: akka.event.EventStream) extends Actor {
    var lastTweetReceived = 0L
    var tweetCount = 0L
    var lastCountSent = 0L
    Tweet.count.map(c => tweetCount += c)  // only ask MongoDB for collection size once

    /** Receives control messages for starting / restarting supervised client and adding or removing topics.
      * Also publishes collection size (at most every 3 seconds) */
    def receive = {
      case AddTopic(topic) => topics.add(topic)
      case RemoveTopic(topic) => topics.remove(topic)
      case Start => start()
      case CheckStatus => if (DateTime.now.getMillis - lastTweetReceived > 30000) start()

      case TweetReceived => {
        val now = DateTime.now.getMillis
        lastTweetReceived = now
        tweetCount += 1
        if (now - lastCountSent > 3000) {
          tweetPubSocket ! ZMQMessage(Seq(Frame("birdwatch.count"), Frame(tweetCount.toString)))
          lastCountSent = now
        }
      }
    }
  }

}