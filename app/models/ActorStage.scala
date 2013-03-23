package models

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import akka.event.ActorEventBus
import akka.event.LookupClassification

object ActorStage {
  val actorSystem = ActorSystem("BirdWatch")
}

case class MessageEvent(channel: String, msg: Tweet)

class TweetEventBus extends ActorEventBus with LookupClassification {
  type Event = MessageEvent
  type Classifier = String

  protected def mapSize(): Int = { 10 }

  protected def classify(event: Event): Classifier = { event.channel }

  protected def publish(event: Event, subscriber: Subscriber): Unit = {
    subscriber ! event
  }
}
