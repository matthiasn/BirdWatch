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

  def tweetList() = Action { implicit request => Ok(views.html.twitterrest.tweetlist2(Seq[Tweet]())) }

  def tweetFeed() = WebSocket.using[String] { implicit request =>
    val in = Iteratee.ignore[String] // ignore incoming messages on websocket

    // PushEnumerator. Deprected, should be replaced
    val out = Enumerator.imperative[String]()

    def interceptTweetList(tweetList: List[Tweet]) { 
      val tweetState = TweetState(tweetList.take(50), WordCount.topN(tweetList, 50))
      out.push(Json.stringify(Json.toJson(tweetState)))
    }
    
    val (enumerator, tweetChannel) = Concurrent.broadcast[Tweet]
    
    val tweetListIteratee = WordCount.tweetListIteratee(interceptTweetList)
    enumerator |>>> tweetListIteratee

    // Actor for subscribing to eventStream. Pushes received data onto enumerator
    val subscriber = ActorStage.actorSystem.actorOf(Props(new Actor {
      def receive = {
        case t: Tweet => {
          tweetChannel.push(t) // push received tweet into Concurrent.Channel[Tweet]
        }
      }
    }))
    ActorStage.actorSystem.eventStream.subscribe(subscriber, classOf[Tweet])

    (in, out) // websocket has in and out "channels"
  }
}