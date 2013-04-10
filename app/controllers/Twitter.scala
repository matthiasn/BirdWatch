package controllers

import akka.actor.{ Actor, Props }

import org.joda.time.DateTime

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{ Iteratee, Concurrent }
import play.api.libs.json.Json
import play.api.mvc.{ Action, Controller, WebSocket }

import reactivemongo.api._
import reactivemongo.bson.{ BSONDocument, BSONDateTime }
import reactivemongo.bson.handlers.DefaultBSONHandlers.DefaultBSONReaderHandler

import actors._
import models._
import models.TweetImplicits._
import utils._

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
    def interceptTweetList(tweetList: List[Tweet]) {
      
      val (charCountMean, charCountStdDev) = Calc.stdDev(tweetList.map(t => t.charCount))
      val (wordCountMean, wordCountStdDev) = Calc.stdDev(tweetList.map(t => t.wordCount))
      
      val tweetState = TweetState(tweetList.take(50), WordCount.topN(tweetList, 250), charCountMean, charCountStdDev, 
        wordCountMean, wordCountStdDev, tweetList.size)
      
     wsOutChannel.push(Json.stringify(Json.toJson(tweetState)))      
    }
    
   /** Creates enumerator and channel for Tweets through Concurrent factory object */
    val (enumerator, tweetChannel) = Concurrent.broadcast[Tweet]
    
    /** Iteratee processing Tweets from tweetChannel, accumulating a rolling window of tweets */
    val tweetListIteratee = WordCount.tweetListIteratee(interceptTweetList, List[Tweet](), 1000)
    enumerator |>>> tweetListIteratee // attach tweetListIteratee to enumerator

   /** Actor for subscribing to eventStream. Pushes received tweets into TweetChannel for
    *  consumption through iteratee (and potentially other consumers, decoupled)  */
    val subscriber = ActorStage.system.actorOf(Props(new Actor {
      def receive = {
        case t: Tweet => tweetChannel.push(t) // push received tweet into Concurrent.Channel[Tweet] 
      }
    }))
    ActorStage.system.eventStream.subscribe(subscriber, classOf[Tweet])

    (in, out) // in and out channels for WebSocket connection
  }
  
 /** Controller Action serving Tweets as JSON going backwards in time from the 
  *  specified time in milliseconds from epoch
  *  @param    millis time in millis
  *  @param    results number of results to return 
  */  
  def tweetsJson(millis: Long, results: Int) = Action { implicit request => 
    Async {      
      val query = QueryBuilder().query(BSONDocument("created_at" -> BSONDocument("$lte" -> BSONDateTime(millis))))
        .sort("created_at" -> SortOrder.Descending)
      
      // run this query over the collection
      val cursor = Mongo.tweets.find(query)
      
      // got the list of documents (in a fully non-blocking way)
      cursor.toList.map { tweets => Ok(Json.toJson(tweets.take(results))) }     
    }
  }
  
 /** Controller Action serving Tweets as JSON going backwards in time from when
  *  the action is called
  *  @param    results number of results to return 
  */
  def tweetsJsonLatest(results: Int) = tweetsJson(DateTime.now.getMillis, results)
  
  /** Controller Action replaying the specified number of tweets from 
   *  the specified time in millis forward.
   *  @param    minutesAgo time in minutes
   *  @param    results number of results to return 
   */  
   def tweetReplay(minutesAgo: Long, results: Int) = Action { implicit request => 
     Async {      
       val query = QueryBuilder().query(BSONDocument("created_at" -> 
         BSONDocument("$gte" -> BSONDateTime(DateTime.now.getMillis - (minutesAgo * 60 * 1000)))))
         .sort("created_at" -> SortOrder.Ascending)

       // run this query over the collection
       val cursor = Mongo.tweets.find(query)

       // got the list of documents (in a fully non-blocking way)
       cursor.toList.map { tweets =>
         tweets.take(results).foreach { 
           t => ActorStage.system.eventStream.publish(t) 
           Thread.sleep(250)
         }
         Ok(Json.toJson(tweets.take(results)))
       }     
     }
   }
  
}