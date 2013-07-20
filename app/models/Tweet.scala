package models

import org.joda.time.DateTime
import scala.concurrent.Future
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{ Json, JsObject, JsValue }

import reactivemongo.api.Cursor
import reactivemongo.core.commands.Count
import play.modules.reactivemongo.json.collection.JSONCollection

import utilities.Mongo
import play.api.libs.iteratee.Enumerator
import scala.collection.immutable.HashSet

/** Simple Tweet representation */
case class Tweet(                  
  tweet_id: Long,
  screen_name: String,
  text: String,
  followers: Int,
  wordCount: Int,
  charCount: Int,
  profile_image_url: String,
  created_at: DateTime,
  hashtags: Seq[HashTag],
  user_mentions: Seq[UserMention],
  urls: Seq[Url]
)

case class Matches(json: JsValue, matches: HashSet[String])

case class Url(url: String, expanded_url: String, display_url: String)
case class HashTag(text: String, indices: Seq[Int])
case class UserMention(screen_name: String, indices: Seq[Int])

/** Data Access Object for Tweets*/
object Tweet {
  def rawTweets: JSONCollection = Mongo.db.collection[JSONCollection]("rawTweets")
  def insertJson(json: JsValue) = rawTweets.insert[JsValue](json)

  /** get collection size from MongoDB (fast) */
  def count: Future[Int] = Mongo.db.command(Count("rawTweets"))

  /** Query latest tweets as List */
  def jsonLatestN(n: Int): Future[List[JsObject]] = rawTweets
    .find(Json.obj("text" -> Json.obj("$exists" -> true))).sort(Json.obj("_id" -> -1)).cursor[JsObject].toList(n)
 

  def jsonMatchingLatestN(q: String, n: Int): Future[List[JsObject]] = rawTweets
      .find(Json.obj("text" -> Json.obj("$exists" -> true))).sort(Json.obj("_id" -> -1)).cursor[JsObject].toList(n)

  /** Enumerate latest Tweets (descending order). Usage example:
    * @param n number of results to enumerate over
    **/
  def enumJsonLatestN(n: Int): Enumerator[JsValue] = rawTweets
    .find(Json.obj("text" -> Json.obj("$exists" -> true))).sort(Json.obj("_id" -> -1)).cursor[JsValue].enumerate(n) 
}