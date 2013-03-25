package akka

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import akka.routing.RoundRobinRouter

import models._

/** "Singleton" object for BirdWatch actor system (name ActorSystem already taken). 
 *   Well, actors perform on stages...  */
object ActorStage {
  
  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")
  
  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  val tweetStreamSubscriber = system.actorOf(Props(new Persistence.TweetWriteActor()), "TweetWriter")
  system.eventStream.subscribe(tweetStreamSubscriber, classOf[Tweet])  // subscribe to eventStream for Tweets
  
  /** Supervisor for Image Retrieval / Image Processing */
  val imgSupervisor = system.actorOf(Props(new ImageProc.Supervisor()), "ImgSupervisor")
  system.eventStream.subscribe(imgSupervisor, classOf[Tweet])  // subscribe to eventStream for Tweets
  
}
