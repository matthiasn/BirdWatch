package utils

import play.api.libs.concurrent.Execution.Implicits._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import reactivemongo.api.gridfs._

/** Mongo connection object */
object Mongo {
  
  /** Connection to MongoDB */
  val connection = MongoConnection(List("localhost:27017"))
  
  /** Representation of BirdWatch database in MongoDB */
  val db = connection("BirdWatch")
  
  /** Representation of tweets collection in BirdWatch database */
  val tweets = db("tweets")
  
  val imagesGridFS = new GridFS(db, "images")
  
}