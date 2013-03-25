package utils

object Calc {
  
 /** Calculate standard deviation from TraversableOnce[Int]
  *  @param    xs collection of Int
  *  @return   Double with standard deviation
  */
  def stdDev(xs: TraversableOnce[Int]): Double = {
    val (sum, n) = xs.foldLeft((0.0, 0)) { case ((sum, n), x: Int) => (sum + x, n + 1) }
    val mean = sum / n
    Math.sqrt( xs.foldLeft(0.0) { case (acc, x) => acc + (x-mean) * (x-mean) } / n )
  }

}

                                       

