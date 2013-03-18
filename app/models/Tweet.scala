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
import akka.event.ActorEventBus

case class Tweet(screen_name: String, text: String, created_at: DateTime, id: Option[BSONObjectID])


object Tweet {
  
  val system = ActorSystem("TweetStage")
  
   val subscriber = system.actorOf(Props(new Actor {
     def receive = { 
       case t: Tweet => {
         play.api.Logger.info(t.created_at + ": " + t.screen_name + " - " + t.text)
         tweets.insert(t)
       }
     }
   }))  

  system.eventStream.subscribe(subscriber, classOf[Tweet])
  system.eventStream.publish(Tweet("XXXXXXX", "123456789123456789123456789", DateTime.now, None))
  
  
  implicit val DefaultJodaDateReads = jodaDateReads("EEE MMM dd HH:mm:ss Z YYYY")

  // Fields specified because of hierarchical json. Otherwise:
  // implicit val streamTweetReads = Json.reads[StreamTweet]
  implicit val tweetReads = (
    (__ \ "user" \ "screen_name").read[String] and
    (__ \ "text").read[String] and
    (__ \ "created_at").read[DateTime])(Tweet(_, _, _, None))

  implicit object TweetBSONWriter extends BSONWriter[Tweet] {
    def toBSON(tweet: Tweet) = {
      BSONDocument(
        "_id" -> tweet.id.getOrElse(BSONObjectID.generate),
        "screen_name" -> BSONString(tweet.screen_name),
        "text" -> BSONString(tweet.text),
        "created_at" -> BSONDateTime(tweet.created_at.getMillis))
    }
  }

  val connection = MongoConnection(List("localhost:27017"))
  val db = connection("PlayTest")
  val tweets = db("tweets")

  val consumerKey = ConsumerKey("bvomH8pSmg0DAMcuS5bNg", "ZD82oUkvsdiSoGlmA13aEQ5l5vZihvqYWW9o98dL4")
  val accessToken = RequestToken("327071779-yRrGaHvpsCCcqIk4Z1V4lwSWixbNN2HPAEYibWEL", "MoGJdMvU9peJzSvZg1g7QT2nZLkcnIYvRqtZiuap0")

  val tweetIteratee = Iteratee.foreach[Array[Byte]] { chunk =>
    val chunkString = new String(chunk, "UTF-8")
    //println(chunkString)
    val json = Json.parse(chunkString)
    tweetReads.reads(json) match {
      case JsSuccess(tweet: Tweet, _) => {
        system.eventStream.publish(tweet)
      }
      case JsError(_) => println _
    }
  }

  def listen() = {
    // WS.url("https://stream.twitter.com/1.1/statuses/sample.json")
    // 	  .sign(OAuthCalculator(consumerKey, accessToken))
    // 	  .get(_ => tweetIteratee)

    WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=hamburg%2Cschnee%2Ctomtom%2Camsterdam").withTimeout(-1)
      .sign(OAuthCalculator(consumerKey, accessToken))
      .get(_ => tweetIteratee)

    //val filter = "track=twitter,hamburg,schnee"

    //WS.url("https://stream.twitter.com/1.1/statuses/filter.json?track=hamburg%2Cschnee")
    //WS.url("http://localhost:8081/1/statuses/filter.json")
    //	.sign(OAuthCalculator(consumerKey, accessToken))
    //	.postAndRetrieveStream(filter)(tweets => tweetIteratee)
  }

}