package actors

import akka.actor.Actor
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import models._
import models.TweetImplicits._
import birdwatchUtils._

/** Actors related to database persistence */
object Persistence {

  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  class TweetWriteActor extends Actor {
    def receive = {
   //   case t: Tweet if (t.id == None) => { Mongo.tweets.insert(t) }
      case t: Tweet => { Mongo.tweets.insert(t) }
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
