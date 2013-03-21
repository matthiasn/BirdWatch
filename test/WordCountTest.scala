package test

import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen
import scala.collection.mutable.Stack
import org.scalatest.prop.TableDrivenPropertyChecks
import play.api.libs.iteratee._

import utils._

class WordCountSpec extends FeatureSpec with GivenWhenThen {

  // using four-letter words because words of up to length three are removed automatically
  val testString = "aaaa bBbb cccc dddD Eeee @ffff GggG hhhH aAaa bbbb cccc dDdd eeee fffF Gggg Aaaa Bbbb cCcc dDdd " +
                   "eEeE fFFf! AaaA bBBb. Cccc Dddd Eeee aAaa bBbB cccC dddd aaaA bbBB cCcc aaAa! bBBb aAaa "
                   
  val wordMap = WordCount.countWords(testString, Map[String, Int]())

  feature("WordCount.countWords") {
    info("Correctly counts the occurences of words in a string (case-insensitive), removing non-letters.")

    scenario ("counted 8 aaaa")        { assert (wordMap("aaaa")  ===  8) }
    scenario ("counted 7 bbbb")        { assert (wordMap("bbbb")  ===  7) }
    scenario ("counted 6 cccc")        { assert (wordMap("cccc")  ===  6) }
    scenario ("counted 5 dddd")        { assert (wordMap("dddd")  ===  5) }
    scenario ("counted 4 eeee")        { assert (wordMap("eeee")  ===  4) }
    scenario ("counted 3 ffff")        { assert (wordMap("ffff")  ===  3) }
    scenario ("counted 2 gggg")        { assert (wordMap("gggg")  ===  2) }
    scenario ("counted 1 hhhh")        { assert (wordMap("hhhh")  ===  1) } 
  }

  feature("WordCount.topN") {
    info("Ensure that topN gets the N-most often counted words")

    val topThree = WordCount.topN(wordMap, 3) 
    
    scenario ("topThree contains 3 elements") { assert (topThree.size  ===  3) }
    
    scenario ("first element aaaa -> 8")       { assert (topThree.toList(0)  ===  ("aaaa", 8)) }
    scenario ("first element bbbb -> 7")       { assert (topThree.toList(1)  ===  ("bbbb", 7)) }
    scenario ("first element cccc -> 6")       { assert (topThree.toList(2)  ===  ("cccc", 6)) }
  }
  
  feature("WordCount.wordCountIteratee") {
    info("Ensure correct calculation of wordMap with incremental updates")
    
    // this map will be updated in each step of the iteratee by the function below
    var testMap = Map[String, Int]()
    
    // this function intercepts each step and uses the wordMap to update var testMap
    def interceptStep(wordMap: Map[String, Int]) { testMap = WordCount.topN(wordMap, 3) }

    val (enumerator, testChannel) = Concurrent.broadcast[String]
    val testIteratee = WordCount.wordCountIteratee(interceptStep)
    enumerator |>>> testIteratee
    
    testChannel.push("ABCa abca abca abcd abcd ab a accb")
    testChannel.push("abcA @abca abca abcd abcd ab a accb")
    testChannel.push("abca abca. abca ABCD abcd ab a accb")
    testChannel.push("abca aBca! abca abcd abcd ab a accb")
    testChannel.push("a a a #accb accb")
    
    scenario ("Iteratee wordMap count for 'abca' == 12")   { assert (testMap("abca")   ===  12) }
    scenario ("Iteratee wordMap count for 'abcd' == 8")   { assert (testMap("abcd")  ===  8)  }
    scenario ("Iteratee wordMap count for 'accb' == 5")    { assert (testMap("accb")   ===  5)  }
    scenario ("One-letter word a not contained in top 3") { assert (testMap.contains("a") === false) }
  }
}

