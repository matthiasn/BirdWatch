package utils

import play.api.libs.concurrent.Execution.Implicits.defaultContext

import reactivemongo.api.MongoConnection
import reactivemongo.api.gridfs.GridFS
import play.api.libs.json.JsValue
import play.modules.reactivemongo.PlayBsonImplicits.JsValueWriter

//TODO: ensure database indices 
/** Mongo connection object */
object Mongo {
  
  /** Connection to MongoDB */
  val connection = MongoConnection(List("localhost:27017"))
  
  /** Representation of BirdWatch database in MongoDB */
  val db = connection("BirdWatch")
  
  /** Representation of tweets collection in BirdWatch database */
  val tweets = db("tweets")
  
  val accessLog = db("accessLog")

  val rawTweets = db("rawTweets")
  
  def insertRawTweet(json: JsValue) = rawTweets.insert[JsValue](json)
  
  val imagesGridFS = new GridFS(db, "images")
  
}