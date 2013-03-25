package controllers

import play.api.mvc.{ Action, Controller }
import play.api.mvc.{ Action, Controller, WebSocket }
import play.api.mvc.SimpleResult
import play.api.mvc.ResponseHeader
import play.api.libs.iteratee._
import play.api.libs.json._
//import play.api.libs.concurrent.Execution.Implicits._
import org.joda.time.DateTime

import play.modules.reactivemongo._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.BSONValue
import reactivemongo.bson.handlers._
import reactivemongo.api.gridfs._
import reactivemongo.bson.handlers.DefaultBSONHandlers.DefaultBSONDocumentWriter
import reactivemongo.bson.handlers.DefaultBSONHandlers.DefaultBSONReaderHandler

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }

import utils._
import models._
import akka._
import models.TweetImplicits._

/** Controller for serving locally cached twitter profile images */
object Images extends Controller with MongoController{

 /** Serves images connection updating the UI 
  *  CAUTION: reactive mongo delivers incorrect mime type and length
  *  @param filename name of the image to serve
  */
  def getImage(filename: String) = Action {
    Async {
      import reactivemongo.api.gridfs.Implicits.DefaultReadFileReader
      // find the matching attachment, if any, and streams it to the client
      val file = Mongo.imagesGridFS.find(BSONDocument("filename" -> new BSONString(filename)))
      serve(Mongo.imagesGridFS, file)
    }
  }
  
}