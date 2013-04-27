package models

import birdwatchUtils.Mongo
import org.joda.time.DateTime
import scala.concurrent.Future
import play.api.libs.json._
import reactivemongo.api.Cursor
import models.TweetImplicits._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.modules.reactivemongo.json.collection.JSONCollection
import play.modules.reactivemongo.json.collection.JSONCollection
import play.api.libs.json.JsObject

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
  created_at: DateTime//,
  //id: Option[BSONObjectID]
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

/** Companion object for */
object Tweet {
  def rawTweets: JSONCollection = Mongo.db.collection[JSONCollection]("rawTweets")
  def insertJson(json: JsValue) = rawTweets.insert[JsValue](json)

  /** Query latest tweets (lazily evaluated stream, result could be of arbitrary size) */
  def jsonLatestN(n: Int): Future[List[JsObject]] = {
    val cursor: Cursor[JsObject] = rawTweets.find(Json.obj()).sort(Json.obj("_id" -> -1)).cursor[JsObject]
    cursor.toList(n)
  }
}