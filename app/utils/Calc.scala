package utils

object Calc {
  
 /** Calculate standard deviation from TraversableOnce[Int]
  *  @param    xs collection of Int
  *  @return   (mean: Double, stdDev: Double)
  */
  def stdDev(xs: TraversableOnce[Int]): (Double, Double) = {
    val (sum, n) = xs.foldLeft((0.0, 0)) { case ((sum, n), x: Int) => (sum + x, n + 1) }
    val mean = sum / n
    (mean, Math.sqrt( xs.foldLeft(0.0) { case (acc, x) => acc + (x-mean) * (x-mean) } / n ))
  }

}
