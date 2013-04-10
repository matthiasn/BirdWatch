package utils

import scala.collection.immutable.ListMap

case class TimeInterval(millis: Long, intervalMap: ListMap[String, Int]) {

  override def toString: String = toString(2)

  def toFullString: String = toString(intervalMap.size)

  def toString(n: Int): String = {
    def formatKeyValue(key: String, value: Int): String = s"$value $key${if(value>1 && key !="ms") "s" else ""} "

    // drop leading zeros, take n, filter zero values
    val significVal = intervalMap.dropWhile(_._2 == 0).take(n).filter(_._2 != 0)
    
    significVal.foldLeft("") { case (res, (k, v)) => res + formatKeyValue(k, v)}.trim + " ago"
  }
}

object TimeInterval {

  /**
   * Constructing tIntervals ListMap with time intervals.
   * The choice of ListMap preserves insertion order, which allows
   * to right fold over the members in the map in the order
   * year, week, day, ...
   */
  val ms = ListMap("ms" -> 1L)
  val sec = ms ++ ListMap("sec" -> ms("ms") * 1000)
  val min = sec ++ ListMap("min" -> sec("sec") * 60)
  val hour = min ++ ListMap("hour" -> min("min") * 60)
  val day = hour ++ ListMap("day" -> hour("hour") * 24)
  val week = day ++ ListMap("week" -> day("day") * 7)
  val tIntervals = week ++ ListMap("year" -> day("day") * 365)

  /**
   * Function: interval
   * Usage: TimeInterval.interval(millis)
   * -----------------------------------------------
   * Creates TimeInterval from milliseconds. 
   * The intervalMap is created by right folding the intervalsInMillis Map
   * (Order: year, week, day, ...) and putting the result of dividing the
   * millis in the accumulator tuple by the current interval.
   * For each subsequent fold, the accumulator tuple consist of the remainder
   * of the division, and the map with the results (e.g.Map(year -> 1, week -> 2). 
   * This map in the accumulator tuple is then used in the resulting TimeInterval.
   *
   * (cName, cVal): name and value of current tIntervals element
   * (rMs, res): accumulator with remaining millis, result map 
   */
  def apply(ms: Long): TimeInterval =
    TimeInterval(ms, tIntervals.foldRight(ms, new ListMap[String, Int]()) {
      case ((cName, cVal), (rMs, res)) =>
        (rMs % cVal, res + (cName -> (rMs / cVal).toInt))
    }._2) // Example: TimeInterval(3660010, ListMap( ..., hour -> 1, min -> 1, sec -> 0, ms -> 10)      
}