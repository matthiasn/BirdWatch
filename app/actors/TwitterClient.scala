package actors

import akka.actor._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.{Concurrent, Iteratee}
import play.api.libs.ws.WS
import play.api.libs.json.{JsObject, JsArray, JsValue, Json}
import play.api.libs.oauth.OAuthCalculator

import org.joda.time.DateTime

import scala.concurrent.duration._
import scala.language.postfixOps
import scala.collection.immutable.HashSet

import models.Matches
import utilities.Conf

object TwitterClient {
  val twitterURL = Conf.get("twitter.URL")
  val elasticTweetURL = Conf.get("elastic.TweetURL")
  val elasticPercolatorURL = Conf.get("elastic.PercolatorURL")
  val backOffInterval = 60 * 15 * 1000
  val retryInterval = 60 * 1000

  def now = DateTime.now.getMillis

  /** Protocol for Twitter Client actors */
  case class AddTopic(topic: String)
  case class AddUser(user: String)
  case class RemoveTopic(topic: String)
  case object CheckStatus
  case object TweetReceived
  case object Start
  case object BackOff

  /** BirdWatch actor system, supervisor, timer*/
  val system = ActorSystem("BirdWatch")
  val supervisor = system.actorOf(Props(new Supervisor(system.eventStream)), "TweetSupervisor")
  system.scheduler.schedule(60 seconds, 60 seconds, supervisor, CheckStatus )

  /** system-wide channels / enumerators for attaching SSE streams to clients*/
  val (jsonTweetsOut, jsonTweetsChannel) = Concurrent.broadcast[Matches]
  
  /** Subscription topics stored in this MUTABLE collection */
  val topics: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()
  val users: scala.collection.mutable.HashSet[String] = new scala.collection.mutable.HashSet[String]()

  /** ugly fix for problem with Twitter Streaming API where chunks cannot be relied on to include one whole tweet */
  var chunkStringCache = ""
  var chunks = 0

  /** naive check if tweet string contains valid json: curly braces plus ends with LF */
  def isCompleteTweet(ts: String): Boolean =
    ts.charAt(0) == '{' && ts.charAt(ts.length-3) == '}' && ts.charAt(ts.length-1).toInt == 10

  /** parse and persist tweet, push onto channel, catch potential exception */
  def processTweetString(ts: String): Unit = {
    try {
      val json = Json.parse(ts)
      (json \ "id_str").asOpt[String].map { id => WS.url(elasticTweetURL + id).put(json) }
      matchAndPush(json)
      chunkStringCache = ""
      chunks = 0
      supervisor ! TweetReceived
    }
    catch {
      case e: Exception => {
        println(e)
        println(chunkStringCache)
        if (chunks > 3 || chunkStringCache.charAt(0) != '{') {
          chunkStringCache = ""
          chunks = 0
        }
      }
    }

  }

  /** Iteratee for processing each chunk from Twitter stream of Tweets. Parses Json chunks 
    * as Tweet instances and publishes them to eventStream. */
  val tweetIteratee = Iteratee.foreach[Array[Byte]] {
    chunk => {
      val chunkString = new String(chunk, "UTF-8")
      if (chunkString.contains("Easy there, Turbo. Too many requests recently. Enhance your calm.")) {
        supervisor ! BackOff
        println("\n" + chunkString + "\n")
      } else {
        if (chunkStringCache.isEmpty) {
          if (chunkString.charAt(0) == '{') {
            chunkStringCache =  chunkString // concatenate chunk cache and current chunk
            chunks = chunks + 1
          }
        } else {
          chunkStringCache = chunkStringCache + chunkString // concatenate chunk cache and current chunk
          chunks = chunks + 1
        }
        if (isCompleteTweet(chunkStringCache)) {
          processTweetString(chunkStringCache)
        }
      }
    }
  }
  
  /** Starts new WS connection to Twitter Streaming API. Twitter disconnects the previous one automatically.
    * Can this be ended explicitly from here though, without resetting the whole underlying client? */
  def start() {
    println("Starting client for topics " + topics)
    println("Starting client for users " + users)

    chunkStringCache = ""
    chunks = 0

    val topicString = topics.mkString("%2C").replace(" ", "%20")
    val userString = users.mkString("%2C").replace(" ", "%20")
    val url = twitterURL + "track=" + topicString + "&follow=" + userString
    WS.url(url).withRequestTimeout(-1).sign(OAuthCalculator(Conf.consumerKey, Conf.accessToken)).get(_ => tweetIteratee)
  }

  /** Actor taking care of monitoring the WS connection */
  class Supervisor(eventStream: akka.event.EventStream) extends Actor {
    var lastTweetReceived = 0L 
    var lastBackOff = 0L

    /** Receives control messages for starting / restarting supervised client and adding or removing topics */
    def receive = {
      case AddTopic(topic)  => topics.add(topic)
      case AddUser(user)  => users.add(user)
      case RemoveTopic(topic) => topics.remove(topic)
      case Start => start()
      case CheckStatus => if (now - lastTweetReceived > retryInterval && now - lastBackOff > backOffInterval) start()
      case BackOff => lastBackOff = now  
      case TweetReceived => lastTweetReceived = now   
    }
  }

  /** Takes JSON and matches it with percolation queries in ElasticSearch
    * @param json JsValue to match against 
    */
  def matchAndPush(json: JsValue): Unit = {
    WS.url(elasticPercolatorURL).post(Json.obj("doc" -> json)).map {
      res => (Json.parse(res.body) \ "matches").asOpt[List[JsValue]].map {
        matches => {
          val items = matches.map { m => (m \ "_id").as[String] }
          jsonTweetsChannel.push(Matches(json, HashSet.empty[String] ++ items))
        }
      }
    }
  }
}
