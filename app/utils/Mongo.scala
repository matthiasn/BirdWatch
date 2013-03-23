package utils

import play.api.libs.concurrent.Execution.Implicits._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._

/** Companion object for case class Tweet, takes care of both Tweet serialization to MongoDB and retrieving Tweets
 *  from Twitter using the Streaming API. */
object Mongo {
  
  /** Connection to MongoDB */
  val connection = MongoConnection(List("localhost:27017"))
  
  /** Representation of BirdWatch database in MongoDB */
  val db = connection("BirdWatch")
  
  /** Representation of tweets collection in BirdWatch database */
  val tweets = db("tweets")
}