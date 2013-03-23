package models

import play.api.Play.current
import play.api.libs.json._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.functional.syntax._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import reactivemongo.api.gridfs._
import reactivemongo.api.gridfs.Implicits._
import org.joda.time.DateTime
import play.api.libs.json.Reads.jodaDateReads
import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import models.TweetImplicits._
import utils._

/** Simple Tweet representation */
case class Tweet(screen_name: String, text: String, location: String, profile_image_url: String, geo: Option[String], created_at: DateTime, id: Option[BSONObjectID])

/** holds the state for GUI updates (list of recent tweets and a word frequency map), used for Json serialization */
case class TweetState(tweetList: List[Tweet], wordMap: Map[String, Int])

/** Companion object for case class Tweet, takes care of both Tweet serialization to MongoDB and retrieving Tweets
 *  from Twitter using the Streaming API. */
object Tweet {
  
  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  val tweetStreamSubscriber = ActorStage.actorSystem.actorOf(Props(new Actor {
    def receive = {
      case t: Tweet => {
        Mongo.tweets.insert(t)
        
        // send Tweet for retrieving image 
        ActorStage.imageRetrievalActor ! t
      }
    }
  }))
  // attach tweetStreamSubscriber to eventStream
  ActorStage.eventStream.subscribe(tweetStreamSubscriber, classOf[Tweet])
  
  def stripImageUrl(t: Tweet) = t.copy(profile_image_url = t.profile_image_url.replaceAll("http://", "").replaceAll("_normal", ""))
  
  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
   *  as Tweet instances and publishes them to eventStream.
   */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] { chunk =>
    val chunkString = new String(chunk, "UTF-8")
    val json = Json.parse(chunkString)
    TweetReads.reads(json) match {
      case JsSuccess(t: Tweet, _) => {
        ActorStage.eventStream.publish(stripImageUrl(t))
      }
      case JsError(_) => println _
    }
  }
  
  /** OAuth consumer key and secret for Twitter Streaming API*/
  val consumerKey = ConsumerKey(Conf.get("twitter.consumer.key"), Conf.get("twitter.consumer.secret"))

  /** OAuth request key and secret for Twitter Streaming API*/  
  val accessToken = RequestToken(Conf.get("twitter.accessToken.key"), Conf.get("twitter.accessToken.secret"))
 
 /** Connect to Twitter Streaming API and retrieve a stream of Tweets for the specified search word or words.
  *  Individual words can be delimited by '%2C', see https://dev.twitter.com/docs/streaming-apis for reference.
  *  @param    track String with search word(s) */
  def listen(track: String) {
    WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=" + track).withTimeout(-1)
      .sign(OAuthCalculator(consumerKey, accessToken))
      .get(_ => tweetIteratee)
  }
}