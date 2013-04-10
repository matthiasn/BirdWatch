package utils

import play.api.libs.iteratee.Iteratee
import scala.collection.immutable.ListMap

import models._

/** Helper object providing useful methods for statistics on word frequency */
object WordCount {
  
  def splitTweet(s: String): Array[String] = s.toLowerCase.replaceAll("—", " ").replaceAll("[^a-zA-Z# ]", "")
    .replaceAll("( )+", " ").split(" ")

  /** Counts words in string, using specified Map[String, Int] as accumulator.
   *  @param    s String with words. Case-insensitive, ignores non-letters
   *  @param    wordMap Map[String, Int] with word counts
   *  @return   Map[String, Int] with word counts
   */
  def countWords(s: String, wordMap: Map[String, Int]): Map[String, Int] = splitTweet(s).foldLeft(wordMap) {
      case (acc, el) => acc + ((el, acc.getOrElse(el, 0) + 1))
    }
 
 /** Counts words in List[Tweet], returning Map[String, Int] with wordMap filtered by regular expression
  *  and not containing any word from the stopWords set
  *  @param    tweetList List[Tweet] to count words in
  *  @return   Map[String, Int] with word counts
  */
  def countTweetWords(tweetList: Seq[Tweet]): Map[String, Int] =
    tweetList.foldLeft(Map[String, Int]()) {
      case (wordMap, tweet) => splitTweet(tweet.text).filter{ w => !stopWords.contains(w) }.foldLeft(wordMap) {
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

  /** Generates ListMap with Top n most popular words in a wordmap
   *  @param    wordMap Map[String, Int] with word counts
   *  @param    n number highest ranking words to return
   *  @return   sorted ListMap with top n words in descending order of count 
   */
  def topN(wordMap: Map[String, Int], n: Int): ListMap[String, Int] =
    ListMap[String, Int](removeShortWords(wordMap).toList.sortBy(_._2).reverse.take(n): _*)

 /** Generates ListMap with Top n most popular words in a tweetList
  *  @param    tweetList List[Tweet]
  *  @param    n number highest ranking words to return
  *  @return   sorted ListMap with top n words in descending order of count 
  */
  def topN(tweetList: Seq[Tweet], n: Int): ListMap[String, Int] = {
    val wordMap = countTweetWords(tweetList)
    ListMap[String, Int](removeShortWords(wordMap).toList.sortBy(_._2).reverse.take(n): _*)
  }
    
 /** Creates Iteratee which successively updates an initially empty Map[String,Int] from a stream of tweets. 
  *  Allows passing in a "side-effecting" function f, e.g. for testing or pushing data to WebSocket
  *  or EventStream. Having f return unit instead of modifying the accumulator guarantees that f
  *  cannot alter newAcc in unintended ways.
  *  @param    f "side-effecting" function (List[Tweet] => Unit)
  *  @return   Iteratee[Tweet, Map[String, Int]], accumulating word frequency map
  */
  def wordCountIteratee(f: Map[String, Int] => Unit): Iteratee[Tweet, Map[String, Int]] =
    Iteratee.fold[Tweet, Map[String, Int]](Map[String, Int]()) {
      case (acc, tweet) => {
        val newAcc = countWords(tweet.text, acc)
        f(newAcc) // purely for side-effects such as println, pushing to WebSocket / eventStream or testing
        newAcc
      }
    }
    
 /** Creates Iteratee which holds a List[Tweet] of length up to n as its state in each step, based on the 
  *  provided tweetList. The newest element is found in the head of the list.
  *  Allows passing in a "side-effecting" function f, e.g. for testing or pushing data to WebSocket
  *  or EventStream. Having f return unit instead of modifying the accumulator guarantees that f
  *  cannot alter newAcc in unintended ways.
  *  Attach to Channel[Tweet] for better decoupling within application.
  *  @param    f "side-effecting" function (List[Tweet] => Unit)
  *  @param    tweetList List[Tweet] to use as the accumulator
  *  @param    n max length of list to keep as iteratee state
  *  @return   Iteratee[Tweet, List[Tweet]], accumulating tweetList from tweetChannel
  */
  def tweetListIteratee(f: List[Tweet] => Unit, tweetList: List[Tweet], n: Int): Iteratee[Tweet, List[Tweet]]  = 
    Iteratee.fold[Tweet, List[Tweet]] (tweetList) {
      case (xs, x) => {
       val newTweetList = (x :: xs) take n
       f(newTweetList)
       newTweetList
      }
    }
  
  def wordsChars(t: Tweet) = t.copy(charCount = t.text.length(), wordCount = t.text.replaceAll("[^a-zA-Z# ]", "").split(" ").length)

  // Insignificant stopWords (from Jason Davies' beautiful word cloud implementation, http://www.jasondavies.com/wordcloud)
  val stopWords = Set("i", "me", "my", "myself", "we", "us", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves",
    "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves",
    "what", "which", "who", "whom", "whose", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have",
    "has", "had", "having", "do", "does", "did", "doing", "will", "would", "should", "can", "could", "ought", "im", "youre", "hes", "shes",
    "its", "were", "theyre", "ive", "youve", "weve", "theyve", "id", "youd", "hed", "shed", "wed", "theyd", "ill", "youll", "hell", "shell",
    "well", "theyll", "isnt", "arent", "wasnt", "werent", "hasnt", "havent", "hadnt", "doesnt", "dont", "didnt", "wont", "wouldnt", "shant",
    "shouldnt", "cant", "cannot", "couldnt", "mustnt", "lets", "thats", "whos", "whats", "heres", "theres", "whens", "wheres", "whys", "hows",
    "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against",
    "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "upon", "down", "in", "out", "on", "off",
    "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few",
    "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "say", "says", "said", "shall")
    
}
