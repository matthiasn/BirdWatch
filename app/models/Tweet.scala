package models

import org.joda.time.DateTime
import scala.concurrent.Future
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{ Json, JsObject, JsValue }

import reactivemongo.api.Cursor
import reactivemongo.core.commands.Count
import play.modules.reactivemongo.json.collection.JSONCollection

import birdwatchUtils.Mongo
import play.api.libs.iteratee.Enumerator

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

  /** Query latest tweets as List */
  def jsonLatestN(n: Int): Future[List[JsObject]] = {
    val cursor: Cursor[JsObject] = rawTweets
      .find(Json.obj("text" -> Json.obj("$exists" -> true)))
      .sort(Json.obj("_id" -> -1))
      .cursor[JsObject]
    cursor.toList(n)
  }

  /** Enumerate latest Tweets (descending order). Usage example:
    *
    * val dbTweetIteratee = Iteratee.foreach[JsObject] {
    * json => TweetReads.reads(json) match {
    * case JsSuccess(t: Tweet, _) => tweetChannel.push(WordCount.wordsChars(t)) // word and char count for each t
    * case JsError(msg) => println(json)
    * }
    * }
    * Tweet.enumJsonLatestN(500)(dbTweetIteratee)
    *
    * Not currently usable: enumerates in wrong order, but there is no good way to pick latest n tweets otherwise,
    * without going from newest backwards
    * @param n number of results to enumerate over
    **/
  def enumJsonLatestN(n: Int): Enumerator[JsObject] = {
    val cursor: Cursor[JsObject] = rawTweets
      .find(Json.obj("text" -> Json.obj("$exists" -> true)))
      .sort(Json.obj("_id" -> -1))
      .cursor[JsObject]
    cursor.enumerate(n)
  }
}