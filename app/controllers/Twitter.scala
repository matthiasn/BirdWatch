package controllers

import play.api.mvc.{ Action, Controller }
import java.lang.management.ManagementFactory
import scala.concurrent.duration.DurationInt
import models._
import play.api.data.Form
import play.api.data.Forms.{ mapping, longNumber, nonEmptyText }
import play.api.i18n.Messages
import play.api.mvc.Flash
import play.api.cache.Cached
import play.api.libs.json._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.Play.current
import play.api.libs.functional.syntax._
import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import play.api.mvc.{ Action, Controller, WebSocket }
import play.api.libs.concurrent.Promise
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import org.joda.time.DateTime
import utils.WordCount
import models.Implicits._

object Twitter extends Controller {

  // Serves single page (static content at the moment, gets updates through websocket)
  def tweetList() = Action { implicit request => Ok(views.html.twitter.tweets(Seq[Tweet]())) }

  // serves websocket connection for each client
  def tweetFeed() = WebSocket.using[String] { implicit request =>
    val in = Iteratee.ignore[String] // ignore incoming messages on websocket
    
    val (out, wsOutChannel) = Concurrent.broadcast[String]
    
    // "side-effecting" function to do something with the accumulator without possibly mutating it
    // e.g. push some computation to a websocket enumerator or to log file
    def interceptTweetList(tweetList: List[Tweet]): Unit = { 
      val tweetState = TweetState(tweetList.take(50), WordCount.topN(tweetList, 250))
      wsOutChannel.push(Json.stringify(Json.toJson(tweetState)))      
    }
    
    // create enumerator and channel through Concurrent factory object, create tweetListIteratee
    // which accumulates a rolling window of tweets and attach iteratee to channel
    val (enumerator, tweetChannel) = Concurrent.broadcast[Tweet]
    val tweetListIteratee = WordCount.tweetListIteratee(interceptTweetList, List[Tweet](), 1000)
    enumerator |>>> tweetListIteratee

    // Actor for subscribing to eventStream. Pushes received tweets into TweetChannel for
    // consumption through iteratee (and potentially other consumers, decoupled) 
    val subscriber = ActorStage.actorSystem.actorOf(Props(new Actor {
      def receive = {
        case t: Tweet => {
          tweetChannel.push(t) // push received tweet into Concurrent.Channel[Tweet]
        }
      }
    }))
    ActorStage.eventStream.subscribe(subscriber, classOf[Tweet])

    (in, out) // websocket has in and out "channels"
  }
}