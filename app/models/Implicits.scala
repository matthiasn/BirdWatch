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
    (__ \ "id").read[Long] and
    (__ \ "user" \ "screen_name").read[String] and
    (__ \ "text").read[String] and
    (__ \ "user" \ "location").read[String] and
    (__ \ "user" \ "profile_image_url").read[String] and
    (__ \ "geo").read[Option[String]] and
    (__ \ "created_at").read[DateTime])(Tweet(_, _, _, 0, 0, _, _, _, _, None))

  implicit object TweetBSONWriter extends BSONWriter[Tweet] {
    def toBSON(t: Tweet) = {
      BSONDocument(
        "_id" -> t.id.getOrElse(BSONObjectID.generate),
        "tweet_id" -> BSONLong(t.tweet_id),
        "screen_name" -> BSONString(t.screen_name),
        "text" -> BSONString(t.text),
        "wordCount" -> BSONInteger(t.wordCount),
        "charCount" -> BSONInteger(t.charCount),
        "location" -> BSONString(t.location),
        "profile_image_url" -> BSONString(t.profile_image_url),
        "geo" -> BSONString(t.geo.getOrElse("")),
        "created_at" -> BSONDateTime(t.created_at.getMillis)
      )
    }
  }
  
  implicit object TweetBSONReader extends BSONReader[Tweet] {
    def fromBSON(document: BSONDocument): Tweet = {
      val doc = document.toTraversable
      Tweet(
        doc.getAs[BSONLong]("tweet_id").get.value,
        doc.getAs[BSONString]("screen_name").get.value,
        doc.getAs[BSONString]("text").get.value,
        doc.getAs[BSONInteger]("wordCount").get.value,
        doc.getAs[BSONInteger]("charCount").get.value,
        doc.getAs[BSONString]("location").get.value,
        doc.getAs[BSONString]("profile_image_url").get.value,
        None,
        new DateTime(doc.getAs[BSONDateTime]("created_at").get.value),
        doc.getAs[BSONObjectID]("_id")
      )
    }
  }

  implicit val TweetJsonWriter = new Writes[Tweet] {
    def writes(t: Tweet): JsValue = {
      Json.obj(
        "tweet_id" -> t.tweet_id,
        "screen_name" -> t.screen_name,
        "text" -> t.text,
        "location" -> t.location,
        "timestamp" -> t.created_at.getMillis,
        "timeAgo" -> TimeInterval(DateTime.now.getMillis - t.created_at.getMillis).toString)
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