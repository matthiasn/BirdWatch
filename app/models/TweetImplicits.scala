package models

import org.joda.time.DateTime

import play.api.libs.functional.syntax._
import play.api.libs.json._
import play.api.libs.json.Reads.jodaDateReads

import utilities.TimeInterval

object TweetImplicits {
  implicit val DefaultJodaDateReads = jodaDateReads("EEE MMM dd HH:mm:ss Z YYYY")

  // Fields specified because of hierarchical json. Otherwise:
  // implicit val TweetReads = Json.reads[Tweet]
  implicit val TweetReads: Reads[Tweet] = (
    (__ \ "id").read[Long] and
    (__ \ "user" \ "screen_name").read[String] and
    (__ \ "text").read[String] and
    (__ \ "user" \ "followers_count").read[Int] and
    (__ \ "user" \ "profile_image_url").read[String] and
    (__ \ "created_at").read[DateTime])(Tweet(_, _, _, _, 0, 0, _, _))

  implicit val TweetJsonWriter = new Writes[Tweet] {
    def writes(t: Tweet): JsValue = {
      Json.obj(
        "tweet_id" -> t.tweet_id,
        "img_url" ->  t.profile_image_url,
        "screen_name" -> t.screen_name,
        "text" -> t.text,
        "followers" -> t.followers,
        "words" -> t.wordCount,
        "chars" -> t.charCount,
        "timestamp" -> t.created_at,
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
  
}