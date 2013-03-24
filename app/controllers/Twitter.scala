package controllers

import play.api.mvc.{ Action, Controller }
import play.api.mvc.{ Action, Controller, WebSocket }
import play.api.libs.iteratee._
import play.api.libs.json._

import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }

import utils.WordCount
import models._
import akka._
import models.TweetImplicits._

/** Controller for serving main BirdWatch page including the websocket connection */
object Twitter extends Controller {

  /** Serves HTML page (static content at the moment, page gets updates through websocket) */
  def tweetList() = Action { implicit request => Ok(views.html.twitter.tweets(Seq[Tweet]())) }

  /** Serves websocket connection updating the UI */
  def tweetFeed() = WebSocket.using[String] { implicit request =>
    
    /** Iteratee for incoming messages on websocket connection, currently ignored */
    val in = Iteratee.ignore[String]
    
   /** Creates enumerator and channel for Strings through Concurrent factory object
    *  for pushing data through the websocket */
    val (out, wsOutChannel) = Concurrent.broadcast[String]
    
   /** "side-effecting" function to do something with the accumulator without possibly mutating it
    *  e.g. push some computation to a websocket enumerator or to log file
    *  @param    tweetList accumulator inside the Iteratee
    *  @return   Unit, cannot interfere with the accumulator inside the Iteratee 
    */
    def interceptTweetList(tweetList: List[Tweet]): Unit = { 
      val tweetState = TweetState(tweetList.take(50), WordCount.topN(tweetList, 250))
      wsOutChannel.push(Json.stringify(Json.toJson(tweetState)))      
    }
    
   /** Creates enumerator and channel for Tweets through Concurrent factory object */
    val (enumerator, tweetChannel) = Concurrent.broadcast[Tweet]
    
    println(tweetChannel)
    
    /** Iteratee processing Tweets from tweetChannel, accumulating a rolling window of tweets */
    val tweetListIteratee = WordCount.tweetListIteratee(interceptTweetList, List[Tweet](), 1000)
    enumerator |>>> tweetListIteratee // attach tweetListIteratee to enumerator

   /** Actor for subscribing to eventStream. Pushes received tweets into TweetChannel for
    *  consumption through iteratee (and potentially other consumers, decoupled)  */
    val subscriber = ActorStage.system.actorOf(Props(new Actor {
      def receive = {
        case t: Tweet => {
          tweetChannel.push(t) // push received tweet into Concurrent.Channel[Tweet]
        }
      }
    }))
    ActorStage.eventStream.subscribe(subscriber, classOf[Tweet])

    (in, out) // in and out channels for websocket
  }
}