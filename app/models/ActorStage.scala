package models

import play.api.libs.json._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.functional.syntax._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import org.joda.time.DateTime
import play.api.libs.json.Reads.jodaDateReads
import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import akka.event.ActorEventBus
import akka.event.LookupClassification


case class MessageEvent(channel: String, msg: Tweet)

class TweetEventBus extends ActorEventBus with LookupClassification{
  type Event = MessageEvent
  type Classifier = String

  protected def mapSize(): Int = { 10 }
   
  protected def classify(event: Event): Classifier = { event.channel }

  protected def publish(event: Event, subscriber: Subscriber): Unit = {
    subscriber ! event
  }
}
