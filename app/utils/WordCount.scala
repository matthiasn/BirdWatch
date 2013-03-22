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
 
 /** Counts words in List[Tweet], returning Map[String, Int] with wordMap.
  *  @param    tweetList List[Tweet] to count words in
  *  @return   Map[String, Int] with word counts
  */
  def countTweetWords(tweetList: List[Tweet]): Map[String, Int] =
    tweetList.foldLeft(Map[String, Int]()) {
      case (wordMap, tweet) => tweet.text.toLowerCase.replaceAll("[-]", " ").replaceAll("[^a-zA-Z# ]", "")
        .replaceAll("( )+", " ").split(" ").filter{ w => !stopWords.contains(w) }.foldLeft(wordMap) {
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
