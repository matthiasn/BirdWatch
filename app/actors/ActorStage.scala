package actors

import akka.actor.{ ActorSystem, Props }
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import scala.concurrent.duration._
import scala.language.postfixOps

/** "Singleton" object for BirdWatch actor system (name ActorSystem already taken). 
 *   Well, actors perform on stages...  */
object ActorStage {
  
  /** BirdWatch actor system */
  val system = ActorSystem("BirdWatch")

  /** Supervisor for Tweet stream client */
  val tweetClientSupervisor = system.actorOf(Props(new TwitterClient.Supervisor(system.eventStream)), "TweetClientSupervisor")

  /** Checking status of Twitter Streaming API connection every 30 seconds */
  system.scheduler.schedule(30 seconds, 30 seconds, tweetClientSupervisor, TwitterClient.CheckStatus )
}