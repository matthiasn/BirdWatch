package utils

import scala.collection.immutable.ListMap
import play.api.libs.iteratee._
import models._

object WordCount {

  /** Counts words in string, using specified Map[String, Int] as accumulator.
   *  @param    s String with words. Case-insensitive, ignores non-letters
   *  @param    wordMap Map[String, Int] with word counts
   *  @return   Map[String, Int] with word counts
   */
  def countWords(s: String, wordMap: Map[String, Int]): Map[String, Int] =
    s.toLowerCase.replaceAll("[^a-zA-Z# ]", "").replaceAll("( )+", " ").split(" ").foldLeft(wordMap) {
      case (acc, el) => acc + ((el, acc.getOrElse(el, 0) + 1))
    }

 /** Counts words in List[Tweet], returning Map[String, Int] with wordMap.
  *  @param    tweetList List[Tweet] to count words in
  *  @return   Map[String, Int] with word counts
  */
  def countTweetWords(tweetList: List[Tweet]): Map[String, Int] =
    tweetList.foldLeft(Map[String, Int]()) {
      case (wordMap, tweet) => tweet.text.toLowerCase.replaceAll("[^a-zA-Z# ]", "")
        .replaceAll("( )+", " ").split(" ").foldLeft(wordMap) {
          case (wordMap, word) => wordMap + ((word, wordMap.getOrElse(word, 0) + 1))
        }
    }

  /** Remove all short words of length one and two plus select three-letter words in wordMap. 
   *  Words starting with '#' are not filtered.
   *  @param    wordMap Map[String, Int] with word counts
   *  @return   Map[String, Int] with word counts
   */
  def removeShortWords(wordMap: Map[String, Int]): Map[String, Int] = {
    wordMap.filter { case (k, v) => (k.length > 3 || k.startsWith("#")) }
  }

  /** Generates ListMap with Top n most popular words in wordmap
   *  @param    wordMap Map[String, Int] with word counts
   *  @param    n number highest ranking words to return
   *  @return   sorted ListMap with top n words in descending order of count 
   */
  def topN(wordMap: Map[String, Int], n: Int): ListMap[String, Int] =
    ListMap[String, Int](removeShortWords(wordMap).toList.sortBy(_._2).reverse.take(n): _*)

  def topN(tweetList: List[Tweet], n: Int): ListMap[String, Int] = {
    val wordMap = countTweetWords(tweetList)
    ListMap[String, Int](removeShortWords(wordMap).toList.sortBy(_._2).reverse.take(n): _*)
  }
    
  /** Generate string from TimeInterval for n significant Interval components (e.g. days and hours).
   *  Allows passing in a side-effecting function f, e.g. for testing or pushing data to websocket
   *  or EventStream. Having f return unit instead of modifying the accumulator guarantees that f
   *  cannot alter newAcc in unintended ways.
   *  @param    n number of siginificant interval components to print
   *  @return   String representation of TimeInterval
   */
  def wordCountIteratee(f: Map[String, Int] => Unit) =
    Iteratee.fold[Tweet, Map[String, Int]](Map[String, Int]()) {
      case (acc, tweet) => {
        val newAcc = countWords(tweet.text, acc)
        f(newAcc) // purely for side-effects such as println, pushing to websocket / eventStream or testing
        newAcc
      }
    }
    
  def tweetListIteratee(f: List[Tweet] => Unit) = 
    Iteratee.fold[Tweet, List[Tweet]] (List[Tweet]()) {
      case (tweetList, tweet) => {
       val newTweetList = (tweet :: tweetList) take 500 
       f(newTweetList)
       newTweetList
      }
    }

}
