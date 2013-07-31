import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "BirdWatch"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    "org.webjars" %% "webjars-play" % "2.1.0-2",
    "org.webjars" % "bootstrap" % "2.3.2",
    "org.webjars" % "angularjs" % "1.1.5-1",
    "org.webjars" % "jquery" % "1.9.1",
    "org.webjars" % "knockout" % "2.2.1",
    "org.webjars" % "d3js" % "3.1.5",
    "org.scalatest" % "scalatest_2.10" % "1.9.1" % "test",       
    "com.typesafe.akka" %% "akka-testkit" % "2.1.1"
  )

  val main = play.Project(appName, appVersion, appDependencies).settings(
    resolvers += "Local Play Repository" at "file://usr/local/Cellar/play/2.1.0/libexec/repository/local",
    resolvers += "Sonatype Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/",
    requireJs += "main.js",
    scalacOptions += "-feature"
  )
}