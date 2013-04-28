package models

import org.joda.time.DateTime
import scala.concurrent.Future
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{ Json, JsObject, JsValue }

import reactivemongo.api.Cursor
import reactivemongo.core.commands.Count
import play.modules.reactivemongo.json.collection.JSONCollection

import birdwatchUtils.Mongo

/** Simple Tweet representation */
case class Tweet(
  tweet_id: Long,
  screen_name: String,
  text: String,
  wordCount: Int,
  charCount: Int,
  profile_image_url: String,
  created_at: DateTime
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

/** Data Access Object for Tweets*/
object Tweet {
  def rawTweets: JSONCollection = Mongo.db.collection[JSONCollection]("rawTweets")
  def insertJson(json: JsValue) = rawTweets.insert[JsValue](json)

  /** get collection size from MongoDB (fast) */
  def count: Future[Int] = Mongo.db.command(Count("rawTweets"))

  /** Query latest tweets (lazily evaluated stream, result could be of arbitrary size) */
  def jsonLatestN(n: Int): Future[List[JsObject]] = {
    val cursor: Cursor[JsObject] = rawTweets
      .find(Json.obj("text" -> Json.obj("$exists" -> true)))
      .sort(Json.obj("_id" -> -1))
      .cursor[JsObject]
    cursor.toList(n)
  }
}