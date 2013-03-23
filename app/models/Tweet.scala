package models

import play.api.libs.json._
import play.api.libs.ws.WS
import play.api.libs.oauth._
import play.api.libs.iteratee._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.functional.syntax._
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers._
import org.joda.time.DateTime
import play.api.libs.json.Reads.jodaDateReads
import akka.actor.{ Actor, ActorSystem, DeadLetter, Props }
import Implicits._

case class Tweet(screen_name: String, text: String, created_at: DateTime, id: Option[BSONObjectID])
case class TweetState(tweetList: List[Tweet], wordMap: Map[String, Int])

object Tweet {
  
  val subscriber = ActorStage.actorSystem.actorOf(Props(new Actor {
    def receive = {
      case t: Tweet => {
        tweets.insert(t)
      }
    }
  }))
  ActorStage.actorSystem.eventStream.subscribe(subscriber, classOf[Tweet])

  val connection = MongoConnection(List("localhost:27017"))
  val db = connection("PlayTest")
  val tweets = db("tweets")

  val consumerKey = ConsumerKey("bvomH8pSmg0DAMcuS5bNg", "ZD82oUkvsdiSoGlmA13aEQ5l5vZihvqYWW9o98dL4")
  val accessToken = RequestToken("327071779-yRrGaHvpsCCcqIk4Z1V4lwSWixbNN2HPAEYibWEL", "MoGJdMvU9peJzSvZg1g7QT2nZLkcnIYvRqtZiuap0")

  val tweetIteratee = Iteratee.foreach[Array[Byte]] { chunk =>
    val chunkString = new String(chunk, "UTF-8")
    val json = Json.parse(chunkString)
    TweetReads.reads(json) match {
      case JsSuccess(tweet: Tweet, _) => {
        ActorStage.actorSystem.eventStream.publish(tweet)
      }
      case JsError(_) => println _
    }
  }

  def listen() = {
    // WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=hamburg%2Cschnee%2Ctomtom%2Camsterdam").withTimeout(-1)
    WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=obama").withTimeout(-1)
      .sign(OAuthCalculator(consumerKey, accessToken))
      .get(_ => tweetIteratee)
  }
}