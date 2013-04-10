package utils

object Calc {
  
 /** Calculate standard deviation from TraversableOnce[Int]
  *  @param    xs collection of Int
  *  @return   (mean: Double, stdDev: Double)
  */
  def stdDev(xs: TraversableOnce[Int]): (Double, Double) = {
    val n = xs.size
    val total = xs.foldLeft(0.0) { case (sum, x: Int) => sum + x }
    val mean = total / n
    val stdDev = Math.sqrt( xs.foldLeft(0.0) { case (acc, x) => acc + (x-mean) * (x-mean) } / n )
    (mean, stdDev)
  }

}
