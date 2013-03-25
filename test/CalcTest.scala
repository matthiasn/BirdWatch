package test

import org.scalatest.FeatureSpec
import utils._

class CalcSpec extends FeatureSpec {

  feature("Standard Deviation") {
    info("Ensure correct result")

    val testList = List(2,4,4,4,5,5,7,9)
    
    scenario ("standard deviation is 2.0") { assert (Calc.stdDev(testList)  ===  2.0) }
  }

}