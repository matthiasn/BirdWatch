package models

import org.joda.time.DateTime

import play.api.libs.functional.syntax._
import play.api.libs.json._
import play.api.libs.json.Reads.jodaDateReads

import utilities.TimeInterval

object TweetImplicits {
  implicit val DefaultJodaDateReads = jodaDateReads("EEE MMM dd HH:mm:ss Z YYYY")

  implicit val HashTagReads: Reads[HashTag] = 
    ((__ \ "text").read[String] and (__ \ "indices").read[Seq[Int]])(HashTag(_, _))
  implicit val UserMentionReads: Reads[UserMention] = 
    ((__ \ "screen_name").read[String] and (__ \ "indices").read[Seq[Int]])(UserMention(_, _))
  implicit val UrlReads: Reads[Url] =
    ((__ \ "url").read[String] and (__ \ "expanded_url").read[String] and (__ \ "display_url").read[String])(Url(_, _, _))
  
  // Fields specified because of hierarchical json. Otherwise:
  // implicit val TweetReads = Json.reads[Tweet]
  implicit val TweetReads: Reads[Tweet] = (
    (__ \ "id").read[Long] and
    (__ \ "user" \ "screen_name").read[String] and
    (__ \ "text").read[String] and
    (__ \ "user" \ "followers_count").read[Int] and
    (__ \ "user" \ "profile_image_url").read[String] and
    (__ \ "created_at").read[DateTime] and
    (__ \ "entities" \ "hashtags").read[Seq[HashTag]] and
    (__ \ "entities" \ "user_mentions").read[Seq[UserMention]] and
    (__ \ "entities" \ "urls").read[Seq[Url]]
  )(Tweet(_, _, _, _, 0, 0, _, _, _, _, _))

  implicit val HashTagWriter = Json.writes[HashTag]
  implicit val UserMentionWriter = Json.writes[UserMention]
  implicit val UrlWriter = Json.writes[Url]
  //implicit val TweetJsonWriter = Json.writes[Tweet]
    
  implicit val TweetJsonWriter = new Writes[Tweet] {
    def writes(t: Tweet): JsValue = {
      Json.obj(
        "tweet_id" -> t.tweet_id,
        "img_url" ->  t.profile_image_url,
        "profile_url" -> ("http://twitter.com/" + t.screen_name),
        "screen_name" -> t.screen_name,
        "text" -> t.text,
        "followers" -> t.followers,
        "words" -> t.wordCount,
        "chars" -> t.charCount,
        "timestamp" -> t.created_at,
        "hashtags" -> Json.toJson(t.hashtags),
        "user_mentions" -> Json.toJson(t.user_mentions),
        "urls" -> Json.toJson(t.urls),
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