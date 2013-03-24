package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props, ActorRef }
import play.api.libs.ws.WS
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.iteratee._
import reactivemongo.api.gridfs._
import reactivemongo.api.gridfs.Implicits._

import models._
import utils._

/** Actors related to image processing */
object ImageProc {

  /** Image retrieval actor, receives Tweets, retrieves the Twitter profile images for each user and passes them on to conversion actor. */
  class RetrievalActor(next: Option[ActorRef]) extends Actor {
    def receive = {
      case t: Tweet => {
        
        WS.url("http://" + t.profile_image_url).get().map { r =>
          val body = r.getAHCResponse.getResponseBodyAsBytes // body as byte array
          
          next match {
            case Some(actor) => actor ! (t, body)
            case None => 
          }
        }
      }
    }
  }
  
  /** Image conversion actor, receives (Tweet, Array[Byte]), converts images and saves them into MongoDB. */
  class ConversionActor(next: Option[ActorRef]) extends Actor {
    def receive = {
      case (t: Tweet, data: Array[Byte]) => {
        val contentType = "image/jpeg"

        // create Enumerator from body of WS request
        val enumerator = Enumerator(data)

        // saves content of enumerator into GridFS
        Mongo.imagesGridFS.save(enumerator, DefaultFileToSave(t.profile_image_url, Some(contentType), None))
        
        next match {
          case Some(actor) => actor ! t
          case None => 
        }
      }
    }
  }
  
}
