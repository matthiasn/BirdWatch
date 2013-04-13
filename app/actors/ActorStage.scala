package actors

import akka.actor.{ ActorSystem, Props }
import scala.concurrent.duration._
//import play.api.libs.concurrent.Execution.Implicits.defaultContext
import akka.dispatch.ExecutionContexts.global


/** "Singleton" object for BirdWatch actor system (name ActorSystem already taken). 
 *   Well, actors perform on stages...  */
object ActorStage {
  
  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")
  
  /** Actor for receiving Tweets from eventStream and inserting them into MongoDB. */
  val tweetStreamSubscriber = system.actorOf(Props(new Persistence.TweetWriteActor()), "TweetWriter")
  
  /** Supervisor for Image Retrieval / Image Processing */
  val imgSupervisor = system.actorOf(Props(new ImageProc.Supervisor(system.eventStream)), "ImgSupervisor")

  /** Supervisor for Tweet stream client */
  val tweetClientSupervisor = system.actorOf(Props(new TwitterClient.Supervisor(system.eventStream)), "TweetClientSupervisor")

  /** Checking status of Twitter Streaming API connection every 5 seconds */
  //system.scheduler.schedule(60 seconds, 15 seconds, tweetClientSupervisor, TwitterClient.CheckStatus )
}