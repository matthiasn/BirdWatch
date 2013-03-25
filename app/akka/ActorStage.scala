package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import akka.routing.RoundRobinRouter

import models._

/** "Singleton" object for BirdWatch actor system (name ActorSystem already taken). 
 *   Well, actors perform on stages...  */
object ActorStage {
  
  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")
  
  /** eventStream of BirdWatch actor system */
  val eventStream = system.eventStream
  
  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  val tweetStreamSubscriber = system.actorOf(Props(new Persistence.TweetWriteActor()), "TweetWriter")
  
  // attach tweetStreamSubscriber to eventStream
  eventStream.subscribe(tweetStreamSubscriber, classOf[Tweet])
  
  /** Supervisor for Image Retrieval / Image Processing */
  val imgSupervisor = system.actorOf(Props(new ImageProc.Supervisor()), "ImgSupervisor")
  eventStream.subscribe(imgSupervisor, classOf[Tweet]) // subscribe to stream of Tweets
  
}
