package test

import org.specs2.mutable._

import play.api.test.Helpers._
import play.api.test.TestServer

class IntegrationSpec extends Specification {

  "Application" should {

    "work from within a browser" in {
      running(TestServer(3333), FIREFOX) {
        browser =>
          browser.goTo("http://localhost:3333/")
          browser.pageSource must contain("BirdWatch")
      }
    }
  }
}
