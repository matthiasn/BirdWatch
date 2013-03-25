package models

import play.api.libs.json._
import play.api.libs.functional.syntax._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import org.joda.time.DateTime
import play.api.libs.json.Reads.jodaDateReads

import utils.TimeInterval

object TweetImplicits {
  implicit val DefaultJodaDateReads = jodaDateReads("EEE MMM dd HH:mm:ss Z YYYY")

  // Fields specified because of hierarchical json. Otherwise:
  // implicit val streamTweetReads = Json.reads[StreamTweet]
  implicit val TweetReads = (
    (__ \ "user" \ "screen_name").read[String] and
    (__ \ "text").read[String] and
    (__ \ "user" \ "location").read[String] and
    (__ \ "user" \ "profile_image_url").read[String] and
    (__ \ "geo").read[Option[String]] and
    (__ \ "created_at").read[DateTime])(Tweet(_, _, 0, 0, _, _, _, _, None))

  implicit object TweetBSONWriter extends BSONWriter[Tweet] {
    def toBSON(tweet: Tweet) = {
      BSONDocument(
        "_id" -> tweet.id.getOrElse(BSONObjectID.generate),
        "screen_name" -> BSONString(tweet.screen_name),
        "text" -> BSONString(tweet.text),
        "wordCount" -> BSONInteger(tweet.wordCount),
        "charCount" -> BSONInteger(tweet.charCount),
        "location" -> BSONString(tweet.location),
        "profile_image_url" -> BSONString(tweet.profile_image_url),
        "geo" -> BSONString(tweet.geo.getOrElse("")),
        "created_at" -> BSONDateTime(tweet.created_at.getMillis))
    }
  }

  implicit val TweetJsonWriter = new Writes[Tweet] {
    def writes(t: Tweet): JsValue = {
      Json.obj(
        "screen_name" -> t.screen_name,
        "text" -> t.text,
        "location" -> t.location,
        "timestamp" -> TimeInterval(DateTime.now.getMillis - t.created_at.getMillis).toString)
    }
  }
  
  implicit val stringIntTupleWriter = new Writes[(String, Int)] {
    def writes(tuple: (String, Int)): JsValue = {
      Json.obj(
        "key" -> tuple._1,
        "value"-> tuple._2
      )
    }
  }
  
  implicit val tweetStateJsonWriter = new Writes[TweetState] {
    def writes(ts: TweetState): JsValue = {
      Json.obj(
        "tweetList" -> Json.toJson(ts.tweetList),
        "topWords" -> Json.toJson(ts.wordMap.toList),
        "charCountMean" -> ts.charCountMean,
        "charCountStdDev" -> ts.charCountStdDev,
        "wordCountMean" -> ts.wordCountMean,
        "wordCountStdDev" -> ts.wordCountStdDev,
        "n" -> ts.n
      )
    }
  }
}