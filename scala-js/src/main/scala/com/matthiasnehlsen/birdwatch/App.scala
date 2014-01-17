package com.matthiasnehlsen.birdwatch

import scala.collection.immutable._
import com.matthiasnehlsen.birdwatch.PrioExecQueue._
import scala.Some

object App {
  import com.matthiasnehlsen.birdwatch.TypedTweet

  /** orderings for indices modeled as TreeMaps below*/
  private val reverseLongOrdering = Ordering.fromLessThan[Long](_ > _)
  private val reverseIntOrdering = Ordering.fromLessThan[Int](_ > _)

  /** application state modeled as immutable maps in vars (not shared with other application parts) */
  private var tweetMap: TreeMap[Long, TypedTweet] = TreeMap.empty(reverseLongOrdering)

  /** set for keeping track of number of tweets immediately (so that tweetMap still has previous tweet available
    * when adding to other sorting maps) */
  private val tweetIds: scala.collection.mutable.TreeSet[Long] = scala.collection.mutable.TreeSet.empty(reverseLongOrdering)

  /** maps for keeping followers / retweets / favorites count as key and Set with all matching Tweets as value
    * on update tweet will be removed from old set and inserted into set at new position when updated tweet is received
    * by means of retweets (e.g remove at 100 retweets, insert new tweet representation at 101 retweets) */
  private var followersMap: TreeMap[Int, Set[TypedTweet]] = TreeMap.empty(reverseIntOrdering)
  private var rtMap: TreeMap[Int, Set[TypedTweet]] = TreeMap.empty(reverseIntOrdering)
  private var favoritesMap: TreeMap[Int, Set[TypedTweet]] = TreeMap.empty(reverseIntOrdering)

  /** adding and removing from data structures above -> should probably be refactored into its own class */
  private def addToSortingMap[T](id: Int, t: T, map: TreeMap[Int, Set[T]]): TreeMap[Int, Set[T]] = {
    map + (id -> (map.getOrElse(id, Set[T]()) + t))
  }
  def removeFromSortingMap[T](id: Int, t: T, map: TreeMap[Int, Set[T]]): TreeMap[Int, Set[T]] = {
    map + (id -> (map.getOrElse(id, Set[T]()) - t))
  }

  /** function for adding tweets, only called for previous tweets. previous tweets are loaded backwards in time,
    * therefore updating tweets existing tweets is not necessary (as the previous tweet going back in time will be older) */
  def addTweet(t: TypedTweet)(): Unit = {
    /** if previous version exists: remove from map and sets first */
    if (!tweetMap.contains(t.id)) {
      tweetMap = tweetMap + (t.id -> t)
      if (t.retweet_count > 0) { rtMap = addToSortingMap(t.retweet_count, t, rtMap) }
      if (t.followers_count > 0) { followersMap = addToSortingMap(t.followers_count, t, followersMap) }
      if (t.favorite_count > 0) { favoritesMap = addToSortingMap(t.favorite_count, t, favoritesMap) }
    }
  }

  /** put curried addTweet function call on priority queue in order to be performed later */
  def enqueueTweet(t: TypedTweet): Unit = {
    if (!tweetMap.contains(t.id)) {
      tweetIds += t.id
      BirdWatch.setTweetCount(tweetCount)
      if (tweetMap.size < 100) addToPQueue(Exec(Some(addTweet(t)_), 0, 30))
      else                     addToPQueue(Exec(Some(addTweet(t)_), 0, 0))
    }
  }

  /** add new tweet from SSE stream, needs to update existing tweets as whatever comes in here will be newer
    * (retweeted tweets re-appear in their entirety in the retweet_status property of a tweets JSON representation) */
  def addTweetImmediately(t: TypedTweet): Unit = {
    tweetIds += t.id
    BirdWatch.setTweetCount(tweetCount) // update UI with new count
    tweetMap.get(t.id).map {
      prev => {
        rtMap = removeFromSortingMap(prev.retweet_count, prev, rtMap)
        followersMap = removeFromSortingMap(prev.followers_count, prev, followersMap)
        favoritesMap = removeFromSortingMap(prev.favorite_count, prev, favoritesMap)
      }
    }

    if (t.retweet_count > 0) { rtMap = addToSortingMap(t.retweet_count, t, rtMap) }
    if (t.followers_count > 0) { followersMap = addToSortingMap(t.followers_count, t, followersMap) }
    if (t.favorite_count > 0) { favoritesMap = addToSortingMap(t.favorite_count, t, favoritesMap) }

    tweetMap = tweetMap + (t.id -> t)
  }

  /** lazily evaluate sorted tweets for each sort order */
  def tweetsByIdDesc(n: Int, skip: Int) = tweetMap.values.toIterator.drop(skip).take(n)
  def tweetsByFollowersDesc(n: Int, skip: Int) = followersMap.values.toIterator.flatten.drop(skip).take(n)
  def tweetsByRetweetsDesc(n: Int, skip: Int) = rtMap.values.flatten.toIterator.drop(skip).take(n)
  def tweetsByFavoritesDesc(n: Int, skip: Int) = favoritesMap.values.flatten.toIterator.drop(skip).take(n)
  def tweetCount = tweetIds.size

  /** reset application state when starting new query*/
  def empty(): Unit = {
    tweetMap = TreeMap.empty(reverseLongOrdering)
    followersMap = TreeMap.empty(reverseIntOrdering)
    rtMap = TreeMap.empty(reverseIntOrdering)
    favoritesMap = TreeMap.empty(reverseIntOrdering)
    tweetIds.clear()
  }

  def main(): Unit = InterOp.startup()

  /** Computes the square of an integer.
    *  This demonstrates unit testing.
    */
  def square(x: Int): Int = x*x
}
