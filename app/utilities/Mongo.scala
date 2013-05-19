package utilities

import play.api.Play.current
import reactivemongo.api.gridfs.GridFS
import play.modules.reactivemongo.json.collection.JSONCollection
import play.modules.reactivemongo.ReactiveMongoPlugin

/** Mongo connection object */
object Mongo {
  def db = ReactiveMongoPlugin.db
  def accessLog: JSONCollection = db.collection[JSONCollection]("accessLog")
  val imagesGridFS = new GridFS(db, "images")
}