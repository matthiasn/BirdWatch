package birdwatchUtils

import play.api.libs.concurrent.Execution.Implicits.defaultContext

import reactivemongo.api.MongoDriver
import reactivemongo.api.gridfs.GridFS
import play.api.libs.json.JsValue

import play.modules.reactivemongo.json.collection.JSONCollection

/** Mongo connection object */
object Mongo {

  val driver = new MongoDriver

  /** Connection to MongoDB */
  val connection = driver.connection(List("localhost:27017"))
  
  /** Representation of BirdWatch database in MongoDB */
  val db = connection("BirdWatch")
  
  /** Representation of tweets collection in BirdWatch database */
  def tweets: JSONCollection = db.collection[JSONCollection]("tweets")

  def accessLog: JSONCollection = db.collection[JSONCollection]("accessLog")

  def rawTweets: JSONCollection = db.collection[JSONCollection]("rawTweets")
  def insertRawTweet(json: JsValue) = rawTweets.insert[JsValue](json)
  
  val imagesGridFS = new GridFS(db, "images")
}