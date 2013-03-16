package controllers

import play.api.mvc.{ Action, Controller }
import models._
import play.api.data.Form
import play.api.data.Forms.{ mapping, longNumber, nonEmptyText }
import play.api.i18n.Messages
import play.api.mvc.Flash
import play.api.cache.Cached
import play.api.libs.json._
import play.api.libs.json.util._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.Play.current
import play.api.libs.functional.syntax._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._

case class ParseTweet(from_user_name: String, text: String, created_at: String)

case class StreamTweet(screen_name: String, text: String, created_at: String)

object Twitter extends Controller {
  implicit val tweetReads = Json.reads[ParseTweet]

  def tweetList() = Cached("action-tweets", 5) {
    Action {
      implicit request =>
        Async {
          val results = 10
          val query = """schnee OR hamburg"""

          val responsePromise =
            WS.url("http://search.twitter.com/search.json")
              .withQueryString("q" -> query, "rpp" -> results.toString).get

          responsePromise.map { response =>
            val tweets = Json.parse(response.body).\("results").as[Seq[ParseTweet]]
            Ok(views.html.twitterrest.tweetlist(tweets))
          }
        }
    }
  }
}