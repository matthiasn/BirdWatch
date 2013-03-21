package test

import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen
import scala.collection.mutable.Stack
import org.scalatest.prop.TableDrivenPropertyChecks

import utils._

class WordCountSpec extends FeatureSpec with GivenWhenThen {

  val testString = "a b c d e f g h a b c d e f g a b c d e f a b c d e a b c d a b c a b a " // 8*a 7*b 6*c 5*d 4*e 3*f 2*g 1*h
  val wordMap = WordCount.countWords(testString, Map[String, Int]())

  feature("WordCount.countWords") {
    info("Ensure that countWords correctly counts the occurences of words in a string")

    scenario ("counted 8 a")        { assert (wordMap("a")  ===  8) }
    scenario ("counted 7 b")        { assert (wordMap("b")  ===  7) }
    scenario ("counted 6 c")        { assert (wordMap("c")  ===  6) }
    scenario ("counted 5 d")        { assert (wordMap("d")  ===  5) }
    scenario ("counted 4 e")        { assert (wordMap("e")  ===  4) }
    scenario ("counted 3 f")        { assert (wordMap("f")  ===  3) }
    scenario ("counted 2 g")        { assert (wordMap("g")  ===  2) }
    scenario ("counted 1 h")        { assert (wordMap("h")  ===  1) }
  }
  
  feature("WordCount.topN") {
    info("Ensure that topN gets the N-most often counted words")

    val topThree = WordCount.topN(wordMap, 3) 
    
    scenario ("topThree contains 3 elements")   { assert (topThree.size  ===  3) }
    
    scenario ("first element a -> 8")       { assert (topThree.toList(0)  ===  ("a",8)) }
    scenario ("first element b -> 7")       { assert (topThree.toList(1)  ===  ("b",7)) }
    scenario ("first element c -> 6")       { assert (topThree.toList(2)  ===  ("c",6)) }
  }
}

