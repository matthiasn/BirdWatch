package test

import akka.testkit._
import org.scalatest._
import org.scalatest.matchers._
import org.joda.time.DateTime
import akka.actor._
import scala.concurrent.duration._
import play.api.test._
import play.api.test.Helpers._
import play.api.libs.ws.WS
import reactivemongo.bson._
import play.api.libs.concurrent.Execution.Implicits._

import actors._
import models._
import utils._

class ImageProcSpec(_system: ActorSystem) extends TestKit(_system) with ImplicitSender
  with WordSpec with MustMatchers with BeforeAndAfterAll {

  def this() = this(ActorSystem("ImageProcSpec"))

  override def afterAll {
    system.shutdown()
    Mongo.imagesGridFS.remove(BSONDocument("filename" -> new BSONString("1234567890.png")))
  }

  val testTweet = Tweet(1234567890L, "User", "a a a #accb accb", 0, 0, "", "localhost:3333/assets/images/imageproc-test.jpg", None, DateTime.now, None)

  running(TestServer(3333)) {

    "Supervisor " must {

      val supervisor = system.actorOf(Props(new ImageProc.Supervisor(system.eventStream)))
      supervisor ! testTweet // send testTweet to supervisor hierarchy

      system.eventStream.subscribe(self, classOf[ImageProc.Proc]) // subscribe status messages
      system.eventStream.subscribe(self, classOf[ImageProc.DoneProc])

      expectMsg(ImageProc.Proc(self, testTweet)) // expect Proc stat
      expectMsg(6 seconds, ImageProc.DoneProc(ImageProc.Proc(self, testTweet)))

      Thread.sleep(2000)

      await(WS.url("http://localhost:3333/images/1234567890.png").get).status must equal(OK)
    }
  }
}