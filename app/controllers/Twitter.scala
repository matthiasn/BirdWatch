package controllers

import akka.actor.{Actor, Props}

import org.joda.time.DateTime

import reactivemongo.bson

import play.api.libs.json.{JsError, JsSuccess, JsValue, Json}


import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Iteratee, Concurrent}
import play.api.libs.json.{Writes, Reads, JsObject, Json}
import play.api.mvc.{Action, Controller, WebSocket}

import play.modules.reactivemongo.{ReactiveMongoPlugin, MongoController}
import play.modules.reactivemongo.json.collection.JSONCollection
import play.modules.reactivemongo.json.collection.JSONQueryBuilder


import reactivemongo.api._
import reactivemongo.bson._
import org.codehaus.jackson.annotate.JsonValue
import reactivemongo.api.collections.GenericQueryBuilder

//import reactivemongo.bson.handlers.DefaultBSONHandlers.DefaultBSONReaderHandler

import reactivemongo.bson.BSONDateTime

//import reactivemongo.api.QueryBuilder


import actors._
import models._
import models.TweetImplicits._
import birdwatchUtils._
import models.TweetState
import scala.concurrent.Future

/** Controller for serving main BirdWatch page including the WebSocket connection */
object Twitter extends Controller {

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def tweetList() = Action {
    implicit req => {
      RequestLogger.log(req); Ok(views.html.twitter.tweets(TwitterClient.topics))
    }
  }

  /** Serves WebSocket connection updating the UI */
  def tweetFeed = WebSocket.using[String] {
    implicit request =>

    /** Iteratee for incoming messages on WebSocket connection, currently ignored */
      val in = Iteratee.ignore[String]

      /** Creates enumerator and channel for Strings through Concurrent factory object
        * for pushing data through the WebSocket */
      val (out, wsOutChannel) = Concurrent.broadcast[String]

      /** "side-effecting" function to do something with the accumulator without possibly mutating it
        * e.g. push some computation to a WebSocket enumerator or to log file
        * @param    tweetList accumulator inside the Iteratee
        * @return   Unit, cannot interfere with the accumulator inside the Iteratee
        */
      def interceptTweetList(tweetList: List[Tweet]) {

        val (charCountMean, charCountStdDev) = Calc.stdDev(tweetList.map(t => t.charCount))
        val (wordCountMean, wordCountStdDev) = Calc.stdDev(tweetList.map(t => t.wordCount))

        val tweetState = TweetState(tweetList.take(1), WordCount.topN(tweetList, 250), charCountMean, charCountStdDev,
          wordCountMean, wordCountStdDev, tweetList.size)

        wsOutChannel.push(Json.stringify(Json.toJson(tweetState)))
      }

      /** Creates enumerator and channel for Tweets through Concurrent factory object */
      val (enumerator, tweetChannel) = Concurrent.broadcast[Tweet]

      /** Iteratee processing Tweets from tweetChannel, accumulating a rolling window of tweets */
      val tweetListIteratee = WordCount.tweetListIteratee(interceptTweetList, List[Tweet](), 1000)
      enumerator |>>> tweetListIteratee // attach tweetListIteratee to enumerator

      /** Actor for subscribing to eventStream. Pushes received tweets into TweetChannel for
        * consumption through iteratee (and potentially other consumers, decoupled)  */
      val subscriber = ActorStage.system.actorOf(Props(new Actor {
        def receive = {
          case t: Tweet => tweetChannel.push(t)
        }
      }))
      ActorStage.system.eventStream.subscribe(subscriber, classOf[Tweet]) // subscribe to incoming tweets

      /** Pre-load the last 500 tweets through WebSocket connection  */
      //latestTweetQuery(500).map {
      //  tweets => tweets.reverse.foreach(t => tweetChannel.push(t)) // push last 500 tweets
      //}

      val cursor: Cursor[JsObject] = Mongo.rawTweets.
        // find all people with name `name`
        find(Json.obj()).
        // sort them by creation date
        sort(Json.obj("_id" -> -1)).
        // perform the query and get a cursor of JsObject
        cursor[JsObject]

      // gather all the JsObjects in a list
      val futureList: Future[List[JsObject]] = cursor.toList(1000)

      futureList.map {
        list => list.map {
          x => {
            TweetReads.reads(x) match {
              case JsSuccess(t: Tweet, _) => println(t); tweetChannel.push(t)
              case JsError(msg) => println(x)
            }
          }
        }
      }

      (in, out) // in and out channels for WebSocket connection
  }


  /** Query latest tweets (lazily evaluated stream, result could be od arbitrary size) */
//  def latestTweetQuery(n: Int): Future[List[Tweet]] = {
//    implicit val tweetFormat = Json.format[Tweet]
//
//    val cursor: JSONQueryBuilder[Tweet] = Mongo.tweets.
//      //find(Json.obj("created_at" -> Json.obj("$lte" -> DateTime.now.getMillis))).
//      find(Json.obj("wordCount" -> 20)).
//      sort(Json.obj("created_at" -> -1))
//      // perform the query and get a cursor of JsObject
//      cursor[Tweet]
//
//    //cursor.toList(10)
//  }

  /** Controller Action serving Tweets as JSON going backwards in time from the
    * specified time in milliseconds from epoch
    * @param  millis time in millis
    * @param  results number of results to return
    */
//  def tweetsJson(millis: Long, results: Int) = Action {
//    implicit request => Async {
//      latestTweetQuery(results).map {
//        tweets => Ok(content = Json.toJson(tweets))
//      }
//    }
//  }

  /** Controller Action serving Tweets as JSON going backwards in time from when
    * the action is called
    * @param    results number of results to return
    */
  //def tweetsJsonLatest(results: Int) = tweetsJson(DateTime.now.getMillis, results)

  /** Controller Action replaying the specified number of tweets from
    * the specified time in millis forward.
    * @param  minutesAgo time in minutes
    * @param  results number of results to return
    * @param  delayMS milliseconds of delay between replayed tweets
    */
  def tweetReplay(minutesAgo: Long, results: Int, delayMS: Int) = Action {
    implicit request =>
    //      Async {
    //        val query = QueryBuilder().query(BSONDocument("created_at" ->
    //          BSONDocument("$gte" -> BSONDateTime(DateTime.now.getMillis - (minutesAgo * 60 * 1000)))))
    //          .sort("created_at" -> SortOrder.Ascending)
    //
    //        Mongo.tweets.find(query).toList(results).map {
    //          tweets => tweets.foreach { t => ActorStage.system.eventStream.publish(t); Thread.sleep(delayMS) }
    //          Ok(Json.toJson(tweets))
    //        }
    //
    //      }

      Ok("")
  }

}