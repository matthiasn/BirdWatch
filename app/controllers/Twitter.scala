package controllers

import play.api.libs.json.{JsValue, JsError, JsSuccess, Json}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.Enumeratee
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
  def tweetList = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetList", 200)
      Ok(views.html.twitter.tweets(TwitterClient.topics))
    }
  }
  
  /** Enumeratee: Tweet to JsValue adapter */
  val tweetToJson: Enumeratee[Tweet, JsValue] = Enumeratee.map[Tweet] { t => Json.toJson(t) }

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
    * @param n number of results to return
    */
  def rawTweetsJson(n: Int) = Action {
    implicit request => Async {
      Tweet.jsonLatestN(n).map {
        tweets => Ok(Json.toJson(tweets))
      }
    }
  }

  def tweetsJson(n: Int) = Action {
    implicit request => Async {
      Tweet.jsonLatestN(n).map {
        rawTweets => {
          val tweets = rawTweets.map {
            x => TweetReads.reads(x) match {
              case JsSuccess(t: Tweet, _) => Some(t)
              case _ => None
            }
          }
          Ok(Json.toJson(tweets))
        }
      }
    }
  }

  /** Controller Action replaying the specified number of tweets from
    * the specified time in millis forward.
    * @param n number of results to return
    * @param delayMS milliseconds of delay between replayed tweets
    */
  def tweetReplay(n: Int, delayMS: Int) = Action {
    implicit req => {
      RequestLogger.log(req, "/tweets/replay/" + n, 200)
      Async {
        println("replay " + n)
        Tweet.jsonLatestN(n).map {
          tweets => tweets.reverse.foreach {
            x => {
              TweetReads.reads(x) match {
                case JsSuccess(t: Tweet, _) => TwitterClient.tweetChannel.push(WordCount.wordsChars(t)); Thread.sleep(delayMS)
                case JsError(msg) =>
              }
            }
          }
            Ok(Json.toJson(tweets))
        }
      }
    }
  }
  
}