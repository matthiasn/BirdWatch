package test

import akka.testkit._
import org.scalatest._
import org.scalatest.matchers._
import org.joda.time.DateTime
import akka.actor._

import actors._
import models._

class ImageProcSpec(_system: ActorSystem) extends TestKit(_system) with ImplicitSender
  with WordSpec with MustMatchers with BeforeAndAfterAll {
 
  def this() = this(ActorSystem("ImageProcSpec"))
  
  override def afterAll {
    system.shutdown()
  }

  val testTweet = Tweet(5L, "User","a a a #accb accb", 0, 0, "", "", None, DateTime.now, None)

  " ImageProc Supervisor acknowledges message receipt" must {

    "send back Proc(t)" in {
      val supervisor = system.actorOf(Props(new ImageProc.Supervisor(system.eventStream)))
      supervisor ! testTweet
      expectMsg(ImageProc.Proc(testTweet))
    }
 
  }
}
