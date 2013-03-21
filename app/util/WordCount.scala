package utils

import scala.collection.immutable.ListMap

object WordCount {

  // count words using provided wordMap so that computation doesn't start from scratch
  def countWords(s: String, wordMap: Map[String, Int]): Map[String, Int] =
    s.replaceAll("[^a-zA-Z ]", "").split(" ").foldLeft(wordMap) {
      case (acc, el) => acc + ((el.toLowerCase, acc.getOrElse(el.toLowerCase, 0) + 1))
    }

  // take for example the 30 most popular words from the wordMap
  def topN(wordMap: Map[String, Int], n: Int): ListMap[String, Int] =
    ListMap[String, Int](wordMap.toList.sortBy(_._2).reverse.take(n): _*)
}
