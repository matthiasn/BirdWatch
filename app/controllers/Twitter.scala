package controllers

import akka.actor.{Actor, Props}

import play.api.libs.json.{JsError, JsSuccess, Json}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Iteratee, Concurrent}
import play.api.mvc.{Action, Controller, WebSocket}

import actors._
import birdwatchUtils._
import models._
import models.TweetImplicits._

/** Controller for serving main BirdWatch page including the WebSocket connection */
object Twitter extends Controller {

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def tweetList() = Action {
    implicit req => RequestLogger.log(req); Ok(views.html.twitter.tweets(TwitterClient.topics))
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
      Tweet.jsonLatestN(500).map {
        tweets => tweets.reverse.foreach {
          x => TweetReads.reads(x) match {
            case JsSuccess(t: Tweet, _) => tweetChannel.push(WordCount.wordsChars(t)) // word and char count for each t
            case JsError(msg) => println(x)
          }
        }
      }
      (in, out) // in and out channels for WebSocket connection
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

  /** Controller Action replaying the specified number of tweets from
    * the specified time in millis forward.
    * @param  results number of results to return
    * @param  delayMS milliseconds of delay between replayed tweets
    */
  def tweetReplay(results: Int, delayMS: Int) = Action {
    implicit request =>
      Async {
        /** Pre-load the last 500 tweets through WebSocket connection  */
        Tweet.jsonLatestN(results).map {

          tweets => tweets.reverse.foreach {
            x => {
              TweetReads.reads(x) match {
                case JsSuccess(t: Tweet, _) => ActorStage.system.eventStream.publish(t); Thread.sleep(delayMS)
                case JsError(msg) =>
              }
            }
          }
          Ok(Json.toJson(tweets))
        }
      }
  }

}