import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "BirdWatch"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    "org.reactivemongo" %% "reactivemongo" % "0.8",
    "org.reactivemongo" %% "play2-reactivemongo" % "0.8",
    "org.scalatest" % "scalatest_2.10" % "1.9.1" % "test",       
    "timeinterval" % "timeinterval_2.10" % "0.1"
  )


  val main = play.Project(appName, appVersion, appDependencies).settings(
    resolvers += "Local Play Repository" at "file://usr/local/Cellar/play/2.1.0/libexec/repository/local"
  )

}
