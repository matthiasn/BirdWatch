package controllers

import play.api.libs.json.{JsValue, Json}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Concurrent, Enumeratee}
import play.api.mvc.{Action, Controller}
import play.api.libs.EventSource
import play.api.libs.ws.WS

import scala.language.reflectiveCalls

import actors.TwitterClient
import utilities.{Conf, Logger}
import org.joda.time.format.ISODateTimeFormat
import org.joda.time.{DateTimeZone, DateTime}
import java.security.MessageDigest
import models.Matches

/** Controller for serving main BirdWatch page including the SSE connection */
object BirdWatch extends Controller {
  val elasticTweetURL = Conf.get("elastic.TweetURL")
  val elasticPercolatorURL = Conf.get("elastic.PercolatorURL")

  val dtFormat = ISODateTimeFormat.dateTime()
  val queryDefaults = "&default_field:text$default_operator:AND&sort=id:desc"

  /** Controller action serving single page application */
  def index = Action { Ok(views.html.index("Birdwatch")) }

  /** Controller Action serving Tweets as JSON going backwards in time. Query passed in as JSON */
  def search =  Action(parse.json) {
    implicit req => Async {
      val url =  elasticTweetURL + "_search"      
      WS.url(url).post(req.body).map { res => Ok(res.body) }
    }
  }

  /** Filtering Enumeratee applying containsAll function */
  def matchesFilter(qID: String) = Enumeratee.filter[Matches] { pm => pm.matches.contains(qID) }

  /** Enumeratee: TweetMatches to Tweet adapter */
  val matchesToJson: Enumeratee[Matches, JsValue] = Enumeratee.map[Matches] { pm => pm.json }

  /** Serves Tweets as Server Sent Events over HTTP connection TODO: change to POST */
  def tweetFeed(q: String) = Action {
    implicit req => Async {
      Logger.logRequest(req, "/tweetFeed?q=" + q, 200)

      val query = Json.obj(
        "query" -> Json.obj("query_string" -> Json.obj("default_field" -> "text", 
          "default_operator" -> "AND", "query" -> ("(" + q + ") AND lang:en"))), 
        "timestamp" -> dtFormat.print(new DateTime(DateTimeZone.UTC))
      )

      /** identify queries by hash, only store unique queries once */
      val md = MessageDigest.getInstance("SHA-256")
      val queryID = md.digest(q.getBytes).map("%02x".format(_)).mkString

      WS.url(elasticPercolatorURL + queryID).post(query).map {
        res => Ok.feed(TwitterClient.jsonTweetsOut     
          &> matchesFilter(queryID)  
          &> Concurrent.buffer(100)
          &> matchesToJson
          &> EventSource()).as("text/event-stream")       
      }
    }
  }  
  
}