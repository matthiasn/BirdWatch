package utilities

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.Json
import play.api.libs.ws.WS

import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat

object Logger {
  val elasticLogURL = Conf.get("elastic.LogURL")
  val instanceID = Conf.getOrEmpty("application.instanceID")

  val dtFormat = ISODateTimeFormat.dateTime()

  def log(origin: String, event: String, desc: String) {
    val logItem = Json.obj(
      "instanceID" -> instanceID,
      "timestamp" -> dtFormat.print(DateTime.now()),
      "millis" -> DateTime.now.getMillis,
      "origin" -> origin,
      "event" -> event,
      "desc" -> desc
    )
    WS.url(elasticLogURL).post(logItem)
  }

  /** Simple request logger, stores IP-Address, User-Agent, request, geo data and timestamp 
    * @param req request 
    * @param desc event description
    * */
  def logRequest(req: Request[AnyContent], desc: String, httpCode: Int) {
    val userAgent = req.headers.get("User-Agent").getOrElse("")

    val logItem = Json.obj(
      "instanceID" -> instanceID,
      "ip" -> req.remoteAddress,
      "request" -> req.toString(),
      "user-agent" -> userAgent,
      "timestamp" -> dtFormat.print(DateTime.now()),
      "millis" -> DateTime.now.getMillis,
      "desc" -> desc,
      "httpCode" -> httpCode
    )

    /** freegeoip needs IPv4 addresses, ignore local requests with IPv6 addresses for logging */
    if (!req.remoteAddress.contains(":")) {
      val geoRequest = WS.url("http://freegeoip.net/json/" + req.remoteAddress).withTimeout(2000).get()
      /** log with geo data if service accessible */
      geoRequest.onSuccess {
        case response => {
          val geoLogItem = logItem ++ Json.obj(
            "country_code" -> response.json \ "country_code",
            "country" -> response.json \ "country_name",
            "region_code" -> response.json \ "region_code",
            "region" -> response.json \ "region_name",
            "city" -> response.json \ "city",
            "long" -> response.json \ "longitude",
            "lat" -> response.json \ "latitude"
          )
          WS.url(elasticLogURL).post(geoLogItem)
        }
      }
      /** log without geo data in case of failure such as connection timeout */
      geoRequest.onFailure {
        case _ => {
          WS.url(elasticLogURL).post(logItem)
        }
      }
    }
    else {
      WS.url(elasticLogURL).post(logItem)
    }
  }
}