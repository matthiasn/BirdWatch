package utilities

import play.api.Play.current
import play.modules.reactivemongo.json.collection.JSONCollection
import play.modules.reactivemongo.ReactiveMongoPlugin

/** Mongo connection object */
object Mongo {
  def db = ReactiveMongoPlugin.db
  def accessLog: JSONCollection = db.collection[JSONCollection]("accessLog")
}