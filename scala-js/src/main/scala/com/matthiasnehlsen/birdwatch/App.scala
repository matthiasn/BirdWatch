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
  private val tweetIds: scala.collection.mutable.TreeSet[Long] = scala.collection.mutable.TreeSet.empty(reverseLongOrdering)
  private var followersMap: TreeMap[Int, HashSet[TypedTweet]] = TreeMap.empty(reverseIntOrdering)
  private var rtMap: TreeMap[Int, HashSet[TypedTweet]] = TreeMap.empty(reverseIntOrdering)
  private var favoritesMap: TreeMap[Int, HashSet[TypedTweet]] = TreeMap.empty(reverseIntOrdering)

  private def addToSortingMap[T](id: Int, t: T, map: TreeMap[Int, HashSet[T]]): TreeMap[Int, HashSet[T]] = {
    map + (id -> (map.getOrElse(id, HashSet[T]()) + t))
  }

  def removeFromSortingMap[T](id: Int, t: T, map: TreeMap[Int, HashSet[T]]): TreeMap[Int, HashSet[T]] = {
    map + (id -> (map.getOrElse(id, HashSet[T]()) - t))
  }

  def addTweetImmediately(t: TypedTweet): Unit = {
    tweetIds += t.id
    BirdWatch.setTweetCount(tweetCount)

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

  def addTweet(t: TypedTweet)(): Unit = {
    /** if previous version exists: remove from map and sets first */
    if (!tweetMap.contains(t.id)) {
      tweetMap = tweetMap + (t.id -> t)
      if (t.retweet_count > 0) { rtMap = addToSortingMap(t.retweet_count, t, rtMap) }
      if (t.followers_count > 0) { followersMap = addToSortingMap(t.followers_count, t, followersMap) }
      if (t.favorite_count > 0) { favoritesMap = addToSortingMap(t.favorite_count, t, favoritesMap) }
    }
  }

  def enqueueTweet(t: TypedTweet): Unit = {
    if (!tweetMap.contains(t.id)) {
      tweetIds += t.id
      BirdWatch.setTweetCount(tweetCount)
      if (tweetMap.size < 100) addToPQueue(Exec(Some(addTweet(t)_), 0, 30))
      else                     addToPQueue(Exec(Some(addTweet(t)_), 0, 0))
    }
  }

  def tweetsByIdDesc(n: Int, skip: Int) = tweetMap.values.toIterator.drop(skip).take(n)
  def tweetsByFollowersDesc(n: Int, skip: Int) = followersMap.values.toIterator.flatten.drop(skip).take(n)
  def tweetsByRetweetsDesc(n: Int, skip: Int) = rtMap.values.flatten.toIterator.drop(skip).take(n)
  def tweetsByFavoritesDesc(n: Int, skip: Int) = favoritesMap.values.flatten.toIterator.drop(skip).take(n)
  def tweetCount = tweetIds.size

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
