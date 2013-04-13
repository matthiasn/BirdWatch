package models

import org.joda.time.DateTime
import reactivemongo.bson._

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
