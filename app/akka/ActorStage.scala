package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }

import models._

/** "Singleton" object for BirdWatch actor system (name ActorSystem already taken). 
 *   Well, actors perform on stages...  */
object ActorStage {
  
  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")
  
  /** eventStream of BirdWatch actor system */
  val eventStream = system.eventStream
  
  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  val tweetStreamSubscriber = system.actorOf(Props(new Persistence.TweetWriteActor( Some(imageRetrievalActor) )))
  
  // attach tweetStreamSubscriber to eventStream
  eventStream.subscribe(tweetStreamSubscriber, classOf[Tweet])
  
  /** Image conversion actor, receives (Tweet, Array[Byte]), converts images and saves them into MongoDB. */
  val imageConversionActor = system.actorOf(Props(new ImageProc.ConversionActor(None)))
  
 /** Image retrieval actor, receives Tweets, retrieves the Twitter profile images for each user and passes them on to conversion actor. */ 
  val imageRetrievalActor = system.actorOf(Props(new ImageProc.RetrievalActor( Some(imageConversionActor) )))
  
}
