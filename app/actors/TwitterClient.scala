package actors

import akka.actor.SupervisorStrategy.Restart
import akka.actor._
import akka.event.Logging
import akka.actor.OneForOneStrategy


import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.Iteratee
import play.api.libs.ws.WS
import play.api.libs.oauth.{RequestToken, ConsumerKey, OAuthCalculator}
import play.api.libs.json.{JsError, JsSuccess, JsValue, Json}

import play.modules.reactivemongo.PlayBsonImplicits.JsValueWriter

import org.joda.time.DateTime
import scala.concurrent.duration._

import models._
import utils._
import models.TweetImplicits._

/** Actors related to image processing */
object TwitterClient {

  /** OAuth consumer key and secret for Twitter Streaming API */
  val consumerKey = ConsumerKey(Conf.get("twitter.consumer.key"), Conf.get("twitter.consumer.secret"))
  /** OAuth request key and secret for Twitter Streaming API */
  val accessToken = RequestToken(Conf.get("twitter.accessToken.key"), Conf.get("twitter.accessToken.secret"))

  def stripImageUrl(t: Tweet) = t.copy(profile_image_url = t.profile_image_url.replaceAll("http://", "").replaceAll("_normal", ""))

  /** Protocol for Twitter Client actors */
  case class AddTopic(topic: String)
  case class RemoveTopic(topic: String)
  case object StartListening
  case object CheckStatus
  case object RestartListening

  var lastTweetReceived: DateTime = new DateTime(0L)
  val topics: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()

  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
    * as Tweet instances and publishes them to eventStream. */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] { chunk =>
      lastTweetReceived = DateTime.now()

      val chunkString = new String(chunk, "UTF-8")
      val json = Json.parse(chunkString)

      // inserting raw Tweet
      // TODO: make this the only representation within MongoDB, rehydrate Tweets from this representation 
      Mongo.rawTweets.insert[JsValue](json)

      TweetReads.reads(json) match {
        case JsSuccess(t: Tweet, _) => {
          ActorStage.imgSupervisor ! WordCount.wordsChars(stripImageUrl(t))
        }
        case JsError(msg) => println(chunkString)
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

    /** Checking status of Twitter Streaming API connection every 5 seconds */
    context.system.scheduler.schedule(10 seconds, 15 seconds, self, CheckStatus )
    
    /** Receives control messages for starting / restarting supervised client and adding or removing topics */
    def receive = {
      case StartListening     => twitterClient ! StartListening
      case RestartListening   => twitterClient ! Kill
        
      case AddTopic(topic)    => topics.add(topic)
      case RemoveTopic(topic) => topics.remove(topic)
        
      case CheckStatus => {
        if ((DateTime.now.getMillis - lastTweetReceived.getMillis) > 15000) {
          twitterClient ! Kill
          twitterClient ! StartListening
        }
      }
    }

   /** Image retrieval actor, receives Tweets, retrieves the Twitter profile images for each user and passes them on to 
    *  conversion actor. */
    class TwitterClient() extends Actor with ActorLogging {
      override val log = Logging(context.system, this)
      override def preStart() { println("Starting TwitterClient actor") }

      override def preRestart(reason: Throwable, message: Option[Any]) {
        log.error(reason, "Restarting due to [{}] when processing [{}]", reason.getMessage, message.getOrElse(""))
      }

     /** Connects to Twitter Streaming API and retrieve a stream of Tweets for the specified search word or words. 
      * Passes received chunks of data into tweetIteratee */
      def receive = {
        case StartListening => {
          println("Starting WS connection to Twitter")
          WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=" + TwitterClient.topics.mkString("%2C")).withTimeout(-1)
            .sign(OAuthCalculator(consumerKey, accessToken))
            .get(_ => TwitterClient.tweetIteratee)
        }
      }
    }
  }
}
