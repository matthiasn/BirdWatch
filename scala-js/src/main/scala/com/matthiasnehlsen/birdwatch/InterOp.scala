package com.matthiasnehlsen.birdwatch

import scala.scalajs.js
import js.Dynamic.{ global => g }
import scala.collection.immutable.Range

/** Scala representation of SseChatApp JavaScript object holding the JS side of the app */
object BirdWatch extends js.Object {
  def listen(query: String): Unit = ???
  def loadPrevious(q: String, n: Int, chunkSize: Int, offset: Int): Unit = ???
  def setTweetCount(n: Int): Unit = ???
  def setTweetList(tweetList: js.Array[Tweet]): Unit = ???
  def getPrevSize(): js.String = ???
  def getPageSize(): js.String = ???
  def getOffsetSize(): js.String = ???

  def setWordCount(wordList: js.Array[WordCountObj]): Unit = ???
  def setPQueueSize(n: Int): Unit = ???

  def printObject(obj: Any): Unit = ???

  def makeTweet(created_at: String,
                id: Long,
                text: String,
                screen_name: String,
                name: String,
                profile_image_url: String,
                followers_count: Int,
                retweet_count: Int,
                favorite_count: Int): Tweet = ???

  def makeWordCountObj(text: String, value: Int) : WordCountObj = ???

  var triggerReact: js.Function0[Unit] = ???
  var startSearch: js.Function1[js.String, Unit] = ???
  var sortByRetweets: js.Function0[Unit] = ???
  var sortByFollowers: js.Function0[Unit] = ???
  var sortByFavorites: js.Function0[Unit] = ???
  var sortByLatest: js.Function0[Unit] = ???
  var addWords: js.Function1[js.Array[String], Unit] = ???
  var tweetHandler: js.Function1[Tweet, Unit] = ???
  var fastTweetHandler: js.Function1[Tweet, Unit] = ???
  var haltQueue: js.Function0[Unit] = ???
}

object TweetListSorting extends Enumeration {
  type TweetListSorting = Value
  val LATEST, FOLLOWERS, RETWEETS, FAVORITES = Value
}

object InterOp {
  import AppImplicits._
  import TweetListSorting._
  import com.matthiasnehlsen.birdwatch.Tweet
  import com.matthiasnehlsen.birdwatch.TypedTweet
  import com.matthiasnehlsen.birdwatch.WordCountObj

  def addTweet(t: Tweet): Unit = App.enqueueTweet(t)
  def addTweetImmediately(t: Tweet): Unit = App.addTweetImmediately(t)

  private var tweetListSorting = LATEST
  val chunkSize = 500

  def startup(): Unit = {
    /** wiring functions */
    BirdWatch.tweetHandler = addTweet _
    BirdWatch.fastTweetHandler = addTweetImmediately _
    BirdWatch.haltQueue = PrioExecQueue.addIdle _
    BirdWatch.triggerReact = triggerReact _
    BirdWatch.startSearch = startSearch _
    BirdWatch.sortByLatest = sortByLatest _
    BirdWatch.sortByFollowers = sortByFollowers _
    BirdWatch.sortByRetweets = sortByRetweets _
    BirdWatch.sortByFavorites = sortByFavorites _
    BirdWatch.addWords = addWords _

    startSearch("*")
  }

  /** start loading both existing and future tweets */
  def startSearch(query: js.String) = {
    App.empty()
    PrioExecQueue.empty()
    WordCount.empty()
    BirdWatch.listen(query.toString)
    BirdWatch.loadPrevious(query.toString, BirdWatch.getPrevSize().toString.toInt, chunkSize, 0)
  }

  def triggerReactWordcount(): Unit = {
    val wordCountArr = WordCount.wordsByCountDescLazy(200).map {
      case (word: String, count: Int) => BirdWatch.makeWordCountObj(word, count)
    }.toArray[WordCountObj]
    BirdWatch.setWordCount(wordCountArr)
  }

  def triggerReact(): Unit = {
    val n = BirdWatch.getPageSize().toString.toInt
    val page = BirdWatch.getOffsetSize().toString.toInt

    val tweetList = tweetListSorting match {
      case FOLLOWERS => App.tweetsByFollowersDesc(n, page*n)
      case LATEST    => App.tweetsByIdDesc(n, page * n)
      case RETWEETS  => App.tweetsByRetweetsDesc(n, page * n)
      case FAVORITES  => App.tweetsByFavoritesDesc(n, page * n)
    }

    val tweets = tweetList.map {
      t: TypedTweet => BirdWatch.makeTweet( t.created_at, t.id, t.text, t.screen_name, t.name,
                                            t.profile_image_url, t.followers_count, t.retweet_count, t.favorite_count )
    }
    BirdWatch.setTweetList(tweets.toArray[Tweet])

    BirdWatch.setTweetCount(App.tweetCount)
    triggerReactWordcount()
  }

  def sortByFollowers(): Unit = { tweetListSorting = FOLLOWERS; triggerReact() }
  def sortByRetweets(): Unit  = { tweetListSorting = RETWEETS;  triggerReact() }
  def sortByLatest(): Unit    = { tweetListSorting = LATEST;    triggerReact() }
  def sortByFavorites(): Unit = { tweetListSorting = FAVORITES; triggerReact() }

  def addWords(words: js.Array[String]): Unit = words.foreach { word: String => WordCount.addWord(word)}

  def setTimeout(fn: () => Unit, millis: Int): Unit = g.setTimeout(fn, millis)
  def setInterval(fn: () => Unit, millis: Int): Unit = g.setInterval(fn, millis)
}
