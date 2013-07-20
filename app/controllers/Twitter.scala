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
  def tweetList(q: String) = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetList?q=" + q, 200)
      Ok(views.html.twitter.tweets(TwitterClient.topics, q))
    }
  }
  
  /** Enumeratee: Tweet to JsValue adapter */
  val tweetToJson: Enumeratee[Tweet, JsValue] = Enumeratee.map[Tweet] { t => Json.toJson(t) }
  
  /** Tests if all comma-separated words in q are contained in Tweet.text  */
  def containsAll(t: Tweet, q: String): Boolean = {
    val tokens = q.toLowerCase.split(",")
    val matches = tokens.foldLeft(0) {
      case (acc, token) if t.text.toLowerCase.contains(token) =>  acc + 1
      case (acc, token) => acc
    }
    matches == tokens.length 
  }

  /** Filtering Enumeratee applying containsAll function*/
  def textFilter(q: String) = Enumeratee.filter[Tweet] { t: Tweet => containsAll(t, q) }

  /** Serves Tweets as Server Sent Events over HTTP connection */
  def tweetFeed(q: String) = Action {
    implicit req => {
      RequestLogger.log(req, "/tweetFeed", 200)
      Ok.stream(TwitterClient.tweetsOut &> textFilter(q) &> tweetToJson &> EventSource()).as("text/event-stream")
    }
  }
  
  /** Stream informing clients about Tweet collection size */
  def countFeed = Action { Ok.stream(TwitterClient.countOut &> EventSource()).as("text/event-stream") }


  def tweetsJson(n: Int, q: String) = Action {
    implicit request => Async {
      Tweet.jsonLatestN(Math.min(n, 5000)).map {  // sorry, won't let you kill my server with LARGE n
        rawTweets => {
          val tweets = rawTweets.par.map { x => TweetReads.reads(x) }.par.collect { 
            case JsSuccess(t, _) if containsAll(t, q) => t
          }
          Ok(Json.toJson(tweets.toList))
        }
      }
    }
  }
  
}