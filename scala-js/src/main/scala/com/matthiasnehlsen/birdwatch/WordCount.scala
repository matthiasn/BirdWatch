package com.matthiasnehlsen.birdwatch

import scala.collection.immutable._
import PrioExecQueue._

object WordCount {
  /** orderings for indices modeled as TreeMaps below*/
  private val reverseIntOrdering = Ordering.fromLessThan[Int](_ > _)

  /** application state modeled as immutable maps in vars (not shared with other application parts) */
  private var wordsMap: TreeMap[String, Int] = TreeMap[String, Int]()
  private var wordCountMap: TreeMap[Int, TreeSet[String]] = TreeMap.empty(reverseIntOrdering)

  private def addToSortingMap(id: Int, w: String, map: TreeMap[Int, TreeSet[String]]): TreeMap[Int, TreeSet[String]] = {
    map + (id -> (map.getOrElse(id, TreeSet[String]()) + w))
  }

  private def removeFromSortingMap(id: Int, w: String, map: TreeMap[Int, TreeSet[String]]): TreeMap[Int, TreeSet[String]] = {
    map + (id -> (map.getOrElse(id, TreeSet[String]()) - w))
  }

  def countWord(word: String)(): Unit = {
    /** if previous version exists: remove from map and sets first */
    val prevCount: Int = wordsMap.getOrElse(word, 0)
    wordsMap = wordsMap + (word -> (prevCount + 1))
    if (prevCount > 0) { wordCountMap = removeFromSortingMap(prevCount, word, wordCountMap) }
    wordCountMap = addToSortingMap(prevCount + 1, word, wordCountMap)
  }

  /** adds word to wordsMap and wordsCountMap if it fulfils certain conditions */
  def addWord(word: String): Unit = {
    val lowerCaseWord = word.toLowerCase
    if (!stopWords.contains(lowerCaseWord) && lowerCaseWord.length > 2) {
      addToPQueue(Exec(Some(countWord(lowerCaseWord)_), 0, 20))
    }
  }

  def wordsByCountDescLazy(n: Int): Iterator[(String, Int)] = {
    wordCountMap.toIterator.map {
      case (count: Int, words: Set[String]) => words.toIterator.map { word: String => (word, count) }
    }.toIterator.flatten.toIterator.take(n)
  }

  def empty(): Unit = {
    wordsMap = TreeMap[String, Int]()
    wordCountMap = TreeMap.empty(reverseIntOrdering)
  }

  // Insignificant stopWords (from Jason Davies' beautiful word cloud implementation, http://www.jasondavies.com/wordcloud)
  val stopWords = Set("i", "me", "my", "myself", "we", "us", "our", "ours", "ourselves", "you", "your", "yours",
    "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself",
    "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "whose", "this", "that", "these",
    "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does",
    "did", "doing", "will", "would", "should", "can", "could", "ought", "im", "youre", "hes", "shes", "its", "were",
    "theyre", "ive", "youve", "weve", "theyve", "id", "youd", "hed", "shed", "wed", "theyd", "ill", "youll", "hell",
    "well", "theyll", "isnt", "arent", "wasnt", "werent", "hasnt", "havent", "hadnt", "doesnt", "dont", "didnt",
    "wont", "wouldnt", "shant", "shouldnt", "cant", "cannot", "couldnt", "mustnt", "lets", "thats", "whos", "whats",
    "heres", "theres", "whens", "wheres", "whys", "hows", "a", "an", "the", "and", "but", "if", "or", "because", "as",
    "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during",
    "before", "after", "above", "below", "to", "from", "up", "upon", "down", "in", "out", "on", "off", "over", "under",
    "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each",
    "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too",
    "very", "say", "says", "said", "shall", "rt", "amp", "isn", "new", "via")
}
