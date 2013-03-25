package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props, ActorRef }
import play.api.libs.concurrent.Execution.Implicits._

import models.TweetImplicits._
import utils._
import models._

/** Actors related to database persistence */
object Persistence {

  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  class TweetWriteActor(next: Option[ActorRef]) extends Actor {
    def receive = {
      case t: Tweet => {
        Mongo.tweets.insert(t)
                
        // send Tweet for retrieving image 
        next match {
          case Some(actor) => actor ! t
          case None => 
        }
      }
    }
  }
  
  
  /** Actor for subscribing to eventStream. Pushes received tweets into TweetChannel for
   *  consumption through iteratee (and potentially other consumers, decoupled)  */
   class PushActor extends Actor {
     def receive = {
       case t: Tweet => {
         //tweetChannel.push(t) // push received tweet into Concurrent.Channel[Tweet]
       }
     }
   }
  
}
