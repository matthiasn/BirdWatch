package test

import org.scalatest.FeatureSpec
import org.scalatest.GivenWhenThen

import utils._

class TimeIntervalSpec extends FeatureSpec with GivenWhenThen {

  val ms = 1L       // time units for testing (Long: year in millis does not fit into Int)
  val s = 1000 * ms // 1000
  val m = 60 * s    // 60000
  val h = 60 * m    // 3600000
  val d = 24 * h    // 86400000
  val w = 7 * d     // 604800000
  val y = 365 * d   // 31536000000

  feature("TimeInterval intervalsInMillis") {
    info("Ensure that TimeIntervals contains correct numbers of milliseconds")

    val intervalsInMillis = TimeInterval.tIntervals

    scenario ("1 sec  = 1000 ms")        { assert (intervalsInMillis("sec")  ===  s) }
    scenario ("1 min  = 60000 ms")       { assert (intervalsInMillis("min")  ===  m) }
    scenario ("1 hour = 360000 ms")      { assert (intervalsInMillis("hour") ===  h) }
    scenario ("1 day  = 86400000 ms")    { assert (intervalsInMillis("day")  ===  d) }
    scenario ("1 week = 604800000 ms")   { assert (intervalsInMillis("week") ===  w) }
    scenario ("1 year = 31536000000 ms") { assert (intervalsInMillis("year") ===  y) }
  }

  feature("TimeInterval from milliseconds") {
    info ("Ensure correct conversion from millis to TimeInterval ")

    scenario ("1y 10w 5d 17h 15m 44s 123ms") {
      val intervalMap = TimeInterval(1*y + 10*w + 5*d + 17*h + 15*m + 44*s + 123*ms).intervalMap
      assert (intervalMap("year") === 1)
      assert (intervalMap("week") === 10)
      assert (intervalMap("day")  === 5)
      assert (intervalMap("hour") === 17)
      assert (intervalMap("min")  === 15)
      assert (intervalMap("sec")  === 44)
      assert (intervalMap("ms")   === 123)
    }
  }

  feature("TimeInterval to String conversion") {
    info ("Ensure correct conversion to String")

    scenario ("3 days 4 hours 3 mins 10 secs") { assert (TimeInterval(3*d + 4*h + 3*m + 10*s).toFullString === "3 days 4 hours 3 mins 10 secs ago") }
    scenario ("1 year 10 weeks") { assert (TimeInterval(1*y + 10*w).toString === "1 year 10 weeks ago") }
  }
}