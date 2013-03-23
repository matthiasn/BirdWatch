package models

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }

/** "Singleton" object for BirdWatch actor system */
object ActorStage {
  
  /** BirdWatch actor system */
  val actorSystem = ActorSystem("BirdWatch")
  
  /** eventStream of BirdWatch actor system */
  val eventStream = actorSystem.eventStream
}
