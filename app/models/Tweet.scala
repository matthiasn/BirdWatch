package models

import play.api.libs.json._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import org.joda.time.DateTime
import play.api.libs.concurrent.Execution.Implicits._

import reactivemongo.bson._
import play.modules.reactivemongo.PlayBsonImplicits._

import models.TweetImplicits._
import utils._
import actors._

/** Simple Tweet representation */
case class Tweet(
  tweet_id: Long,
  screen_name: String,
  text: String,
  wordCount: Int,
  charCount: Int,
  location: String,
  profile_image_url: String,
  geo: Option[String],
  created_at: DateTime,
  id: Option[BSONObjectID]
)

/** holds the state for GUI updates (list of recent tweets and a word frequency map), used for Json serialization */
case class TweetState(
  tweetList: List[Tweet],
  wordMap: Map[String, Int],
  charCountMean: Double,
  charCountStdDev: Double,
  wordCountMean: Double,
  wordCountStdDev: Double,
  n: Int
)

/** Companion object for case class Tweet, takes care of retrieving Tweets from
 *  Twitter using the Streaming API and publishing them on the akka eventStream  */
object Tweet {

  def stripImageUrl(t: Tweet) = t.copy(profile_image_url = t.profile_image_url.replaceAll("http://", "").replaceAll("_normal", ""))
    
  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
   *  as Tweet instances and publishes them to eventStream.
   */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] { chunk =>
    val chunkString = new String(chunk, "UTF-8")
    //println(chunkString)
    val json = Json.parse(chunkString)

    // inserting raw Tweet
    // TODO: make this the only representation within MongoDB, rehydrate Tweets from this representation 
    Mongo.rawTweets.insert[JsValue](json)

    TweetReads.reads(json) match {
      case JsSuccess(t: Tweet, _) => { ActorStage.imgSupervisor ! WordCount.wordsChars(stripImageUrl(t))
        //ActorStage.system.eventStream.publish(WordCount.wordsChars(stripImageUrl(t)))
      }
      case JsError(msg) => println(msg)
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