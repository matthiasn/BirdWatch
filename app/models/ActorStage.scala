package models

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import utils._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import reactivemongo.api.gridfs._
import reactivemongo.api.gridfs.Implicits._
import play.api.libs.concurrent.Execution.Implicits._


/** "Singleton" object for BirdWatch actor system */
object ActorStage {
  
  /** BirdWatch actor system */
  val actorSystem = ActorSystem("BirdWatch")
  
  /** eventStream of BirdWatch actor system */
  val eventStream = actorSystem.eventStream
  
  /** Image retrieval actor, receives Tweets, retrieves the Twitter profile images for each user and inserts them into MongoDB. */
  val imageRetrievalActor = ActorStage.actorSystem.actorOf(Props(new Actor {
    def receive = {
      case t: Tweet => {
        
        WS.url("http://" + t.profile_image_url).get().map { r =>
          val body = r.getAHCResponse.getResponseBodyAsBytes // body as byte array
          val name = t.profile_image_url
          val contentType = "image/jpeg"

          // create Enumerator from body of WS request
          val enumerator = Enumerator(body)

          // saves content of enumerator into GridFS
          Mongo.imagesGridFS.save(enumerator, DefaultFileToSave(name, Some(contentType), None))
        }
      }
    }
  }))
  
}
