package birdwatchUtils

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.JsValue

import reactivemongo.api.MongoDriver
import reactivemongo.api.gridfs.GridFS
import play.modules.reactivemongo.json.collection.JSONCollection

/** Mongo connection object */
object Mongo {

  /** Connection to BirdWatch database inMongoDB */
  val driver = new MongoDriver
  val connection = driver.connection(List("localhost:27017"))
  val db = connection("BirdWatch")

  def rawTweets: JSONCollection = db.collection[JSONCollection]("rawTweets")
  def insertRawTweet(json: JsValue) = rawTweets.insert[JsValue](json)

  def accessLog: JSONCollection = db.collection[JSONCollection]("accessLog")

  val imagesGridFS = new GridFS(db, "images")
}