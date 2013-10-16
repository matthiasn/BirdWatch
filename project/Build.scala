import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "BirdWatch"
  val appVersion      = "0.2-SNAPSHOT"

  val appDependencies = Seq(
    "org.scalatest" % "scalatest_2.10" % "1.9.1" % "test",       
    "com.typesafe.akka" %% "akka-testkit" % "2.2.0"
  )

  val main = play.Project(appName, appVersion, appDependencies).settings(
    scalacOptions += "-feature"
  )
}
