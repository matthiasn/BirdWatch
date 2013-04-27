package birdwatchUtils

import play.api.libs.concurrent.Execution.Implicits.defaultContext

import reactivemongo.api.MongoDriver
import reactivemongo.api.gridfs.GridFS
import play.modules.reactivemongo.json.collection.JSONCollection

/** Mongo connection object */
object Mongo {
  val driver = new MongoDriver
  val connection = driver.connection(List("localhost:27017"))
  val db = connection("BirdWatch")

  def accessLog: JSONCollection = db.collection[JSONCollection]("accessLog")

  val imagesGridFS = new GridFS(db, "images")
}