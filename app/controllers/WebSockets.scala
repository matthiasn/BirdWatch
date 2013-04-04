package controllers

import java.lang.management.ManagementFactory
import scala.concurrent.duration.DurationInt
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.concurrent.Promise
import play.api.libs.iteratee.{ Enumerator, Iteratee }
import play.api.mvc.{ Action, Controller, WebSocket }
import scala.language.postfixOps

object WebSockets extends Controller {

  def statusPage() = Action { implicit request => Ok(views.html.websockets.statusPage(request)) }

  def statusFeed() = WebSocket.using[String] { implicit request =>

    def getLoadAverage = "%1.2f".format(100 * ManagementFactory.getOperatingSystemMXBean.getSystemLoadAverage() /
      ManagementFactory.getOperatingSystemMXBean.getAvailableProcessors())

    val in = Iteratee.ignore[String] // ignore incoming messages on websocket

    // generate loadAverage message (String) every second
    val out = Enumerator.generateM { Promise.timeout(Some(getLoadAverage), 1 seconds) }

    (in, out) // websocket has in and out "channels"
  }
}