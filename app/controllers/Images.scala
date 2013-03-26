package controllers

import play.api.mvc.{ Action, Controller }

import play.modules.reactivemongo._
import reactivemongo.bson._
import reactivemongo.bson.handlers.DefaultBSONHandlers.DefaultBSONDocumentWriter
import reactivemongo.api.gridfs.Implicits.DefaultReadFileReader
import play.api.Logger

import utils._

/** Controller for serving locally cached twitter profile images */
object Images extends Controller with MongoController{
  
 

 /** Serves images connection updating the UI 
  *  CAUTION: reactivemongo marks file CONTENT_DISPOSITION as attachment (why???) 
  *  @param filename name of the image to serve
  */
  def getImage(filename: String) = Action {
    Async {
      Logger.debug("Images Controller serving: " + filename)
      
      // find the matching attachment, if any, and streams it to the client
      val file = Mongo.imagesGridFS.find(BSONDocument("filename" -> new BSONString(filename)))
      serve(Mongo.imagesGridFS, file)
    }
  }
  
}