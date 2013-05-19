package controllers

import akka.actor.{ Actor, Props}

import play.api.libs.json.{JsValue, JsError, JsSuccess, Json}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Enumeratee, Concurrent}
import play.api.mvc.{Action, Controller}
import scala.language.reflectiveCalls

import actors._
import utilities._
import models._
import models.TweetImplicits._
import play.api.libs.EventSource

/** Controller for serving main BirdWatch page including the WebSocket connection */
object Twitter extends Controller {

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def tweetList() = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetList", 200)
      Ok(views.html.twitter.tweets(TwitterClient.topics))
    }
  }

  /** Serves Server Sent Events over HTTP connection */
  def tweetStateFeed() = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetFeed", 200)
      /** Creates enumerator and channel for Strings through Concurrent factory object
        * for pushing data through the WebSocket */
      val (out, wsOutChannel) = Concurrent.broadcast[JsValue]

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

        wsOutChannel.push(Json.toJson(tweetState))
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
      Tweet.jsonLatestN(500).map {
        tweets => tweets.reverse.foreach {
          x => TweetReads.reads(x) match {
            case JsSuccess(t: Tweet, _) => tweetChannel.push(WordCount.wordsChars(t)) // word and char count for each t
            case JsError(msg) => println(x)
          }
        }
      }
      Ok.feed(out &> EventSource()).as("text/event-stream")
    }
  }
  
  /** Enumeratee: Tweet to JsValue adapter */
  val tweetToJson: Enumeratee[Tweet, JsValue] = Enumeratee.map[Tweet] {
    t => Json.toJson(t)
  }

  /** Serves Tweets as Server Sent Events over HTTP connection */
  def tweetFeed = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetFeed", 200)
      Ok.stream(TwitterClient.tweetsOut &> tweetToJson &> EventSource()).as("text/event-stream")
    }
  }

  /** Serves raw Tweets as Server Sent Events over HTTP connection */
  def rawTweetFeed = Action {
    implicit req => {
      RequestLogger.log(req, "/rawTweetFeed", 200)
      Ok.stream(TwitterClient.rawTweetsOut &> EventSource()).as("text/event-stream")
    }

  }

  /** Controller Action serving Tweets as JSON going backwards in time from the
    * specified time in milliseconds from epoch
    * @param  results number of results to return
    */
  def rawTweetsJson(results: Int) = Action {
    implicit request => Async {
      Tweet.jsonLatestN(results).map {
        tweets => Ok(content = Json.toJson(tweets.reverse))
      }
    }
  }

}