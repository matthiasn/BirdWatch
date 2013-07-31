package controllers

import play.api.libs.json.{JsValue, Json}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Concurrent, Enumeratee}
import play.api.mvc.{Action, Controller}
import play.api.libs.EventSource
import play.api.libs.ws.WS

import scala.language.reflectiveCalls

import actors._
import utilities._
import org.joda.time.format.ISODateTimeFormat
import org.joda.time.{DateTimeZone, DateTime}
import scala.collection.immutable.HashSet
import java.security.MessageDigest
import models.Matches

/** Controller for serving main BirdWatch page including the SSE connection */
object BirdWatch extends Controller {
  val elasticURL = Conf.get("elastic.URL")
  val dtFormat = ISODateTimeFormat.dateTime()
  val queryDefaults = "&default_field:text$default_operator:AND&sort=id:desc"
  val searchUrl = elasticURL + "/birdwatch/tweets/_search?q=" 

  /** Controller action serving chat page */
  def index = Action { Ok(views.html.index("Birdwatch")) }

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def tweetList(q: String) = Action {
    implicit req => { 
      Ok(views.html.index("BirdWatch"))
    }
  }

  /** Controller Action serving Tweets as JSON going backwards in time. Query passed in as JSON
    */
  def search =  Action(parse.json) {
    implicit req => Async {
      val url =  elasticURL + "/birdwatch/tweets/_search?pretty"      
      WS.url(url).post(req.body).map { res => Ok(res.body) }
    }
  }

  /** Filtering Enumeratee applying containsAll function */
  def matchesFilter(qID: String) = Enumeratee.filter[Matches] { pm => pm.matches.contains(qID) }

  /** Enumeratee: TweetMatches to Tweet adapter */
  val matchesToJson: Enumeratee[Matches, JsValue] = Enumeratee.map[Matches] { pm => pm.json }

  /** Enumeratee for detecting disconnect of SSE stream */
  def connDeathWatch(queryID: String): Enumeratee[Matches, Matches] =
    Enumeratee.onIterateeDone{ () => println(queryID + " closed"); WS.url(elasticURL + "/_percolator/queries/" + queryID).delete() }

  /** Serves Tweets as Server Sent Events over HTTP connection TODO: change to POST */
  def tweetFeed(q: String) = Action {
    implicit req => Async {
      Logger.logRequest(req, "/elasticTweetFeed?q=" + q, 200)

      val query = Json.obj(
        "query" -> Json.obj("query_string" -> Json.obj("default_field" -> "text", 
          "default_operator" -> "AND", "query" -> ("(" + q + ") AND lang:en"))), 
        "timestamp" -> dtFormat.print(new DateTime(DateTimeZone.UTC))
      )

      /** identify queries by hash, only store unique queries once */
      val md = MessageDigest.getInstance("SHA-256")
      val queryID = md.digest(q.getBytes).map("%02x".format(_)).mkString

      WS.url(elasticURL + "/_percolator/queries/" + queryID).post(query).map {
        res => {
          val queryID = (Json.parse(res.body) \ "_id").as[String]
          
          Ok.feed(TwitterClient.jsonTweetsOut
            //&> connDeathWatch(queryID)
            &> matchesFilter(queryID)
            &> Concurrent.buffer(100)
            &> matchesToJson
            &> EventSource()).as("text/event-stream")
        }
      }
    }
  }  
  
}