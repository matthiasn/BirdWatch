package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props, ActorRef, ActorLogging }
import play.api.libs.ws.WS
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.iteratee._
import reactivemongo.api.gridfs._
import reactivemongo.api.gridfs.Implicits._
import akka.event.Logging


import java.io.File
import java.awt.Image
import java.awt.image.BufferedImage
import javax.imageio.ImageIO
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import javax.imageio.stream.FileImageOutputStream
//FileImageOutputStream
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
  
  /** from: https://gist.github.com/mbbx6spp/3004211
   *  Pass in Image object of the original to here with new dimensions.
   *  Produces other image object that can be saved to disk in the appropriate
   *  folder scheme of your choice.
   */
  def resizeImage(image: BufferedImage, newWidth: Int, newHeight: Int): BufferedImage = {
    // This preserves alpha channel, use BufferedImage.TYPE_INT_ARGB to not preserve alpha
    val newImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_RGB)
    val graphics = newImage.createGraphics
    graphics.drawImage(image, 0, 0, newWidth, newHeight, null)
    graphics.dispose
    newImage
  }
  
  
  /** Image conversion actor, receives (Tweet, Array[Byte]), converts images and saves them into MongoDB. */
  class ConversionActor(next: Option[ActorRef]) extends Actor with ActorLogging {
    
    override val log = Logging(context.system, this)
     
    override def preStart() = {
      log.debug("Starting")
    }
    override def preRestart(reason: Throwable, message: Option[Any]) {
      log.error(reason, "Restarting due to [{}] when processing [{}]", reason.getMessage, message.getOrElse(""))
     }
    
    def receive = {
      case (t: Tweet, data: Array[Byte]) => {
        log.debug("Received Image " + t.profile_image_url)
        val contentType = "image/jpeg"
        val fileName = t.profile_image_url.replaceAll("a0.twimg.com/", "").replaceAll("profile_images/", "").replaceAll("/", "-")

        // create Enumerator from body of WS request
        val enumerator = Enumerator(data)
        // saves content of enumerator into GridFS
        Mongo.imagesGridFS.save(enumerator, DefaultFileToSave(fileName, Some(contentType), None))

        if (!fileName.contains("sticky")){
          val img: BufferedImage = ImageIO.read(new ByteArrayInputStream(data))
          val resizedImg = resizeImage(img, 150, 150)
          ImageIO.write(resizedImg, "jpg", new File( "/Users/mn/imageTemp/" + fileName))          
        }
        
        next match {
          case Some(actor) => actor ! t
          case None => 
        }
      }
    }
  }
  
}
