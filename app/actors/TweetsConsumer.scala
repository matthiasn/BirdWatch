package actors

import akka.actor._
import play.api.libs.iteratee.Concurrent
import play.api.libs.json.{JsError, JsValue, Json}

import scala.language.postfixOps

import models._
import models.TweetImplicits._
import akka.zeromq._
import play.api.libs.json.JsSuccess
import akka.zeromq.Connect
import akka.zeromq.Listener

/** Consumes Tweets from a ZeroMQ topic */
object TweetsConsumer {
  /** system-wide channels / enumerators for attaching SSE streams to clients */
  val (tweetsOut, tweetChannel) = Concurrent.broadcast[Tweet]
  val (rawTweetsOut, rawTweetsChannel) = Concurrent.broadcast[JsValue]
  val (countOut, countChannel) = Concurrent.broadcast[String]

  /** Actor system for listeners and sockets */
  val system = ActorSystem("BirdwatchConsumer")

  /** Actor listening to Tweets socket */
  class TweetsListener extends Actor {
    def receive: Receive = {
      case m: ZMQMessage => {
        val chunkString = new String(m.payload(1), "UTF-8")    // payload is Array[Byte], make String
        val json = Json.parse(chunkString)                     // parse into JSON

        TweetReads.reads(json) match {                         // read into Tweet case class representation 
          case JsSuccess(t: Tweet, _) => tweetChannel.push(t)  // push onto channel
          case e: JsError => println(chunkString)              
        }
      }
      case _ => 
    }
  }

  /** Simple actor listening to countSocket and pushing received data onto countChannel */
  class CountListener extends Actor {
    def receive: Receive = {
      case m: ZMQMessage => countChannel.push(new String(m.payload(1), "UTF-8"))
      case _ =>
    }
  }

  /** Socket with attached listener */
  val tweetsListener = system.actorOf(Props(new TweetsListener()), "TweetsListener")
  val tweetsSocket = ZeroMQExtension(system).newSocket(SocketType.Sub, Listener(tweetsListener),
    Connect("tcp://127.0.0.1:21231"), Subscribe("birdwatch.tweets"))

  val countListener = system.actorOf(Props(new CountListener()), "CountListener")
  val countSocket = ZeroMQExtension(system).newSocket(SocketType.Sub, Listener(countListener),
    Connect("tcp://127.0.0.1:21231"), Subscribe("birdwatch.count"))
}