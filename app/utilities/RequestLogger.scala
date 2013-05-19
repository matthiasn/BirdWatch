package utilities

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{JsValue, Json}
import play.api.libs.ws.WS

import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat
import scala.concurrent.Future
import reactivemongo.api.Cursor

object RequestLogger {

  /** Simple request logger, stores IP-Address, User-Agent, request, geo data and timestamp 
    * @param req request 
    * */
  def log(req: Request[AnyContent], desc: String, httpCode: Int) {
    /** freegeoip needs IPv4 addresses, ignore local requests with IPv6 addresses for logging */
    if (!req.remoteAddress.contains(":")) {
      val userAgent = req.headers.get("User-Agent").getOrElse("")

      /** Joda DateTime not working as shown on https://github.com/zenexity/Play-ReactiveMongo
        *  Workaround: use ISODateTime formatted string  */
      val dtFormat = ISODateTimeFormat.dateTime()

      val logItem = Json.obj(
        "ip" -> req.remoteAddress,
        "request" -> req.toString(),
        "user-agent" -> userAgent,
        "timestamp" -> dtFormat.print(DateTime.now())
      )

      val geoRequest = WS.url("http://freegeoip.net/json/" + req.remoteAddress).withTimeout(2000).get()
      /** log with geo data if service accessible */
      geoRequest.onSuccess {
        case response => {
          Mongo.accessLog.insert[JsValue](logItem ++ Json.obj(
            "country_code" -> response.json \ "country_code",
            "country" -> response.json \ "country_name",
            "region_code" -> response.json \ "region_code",
            "region" -> response.json \ "region_name",
            "city" -> response.json \ "city",
            "long" -> response.json \ "longitude",
            "lat" -> response.json \ "latitude",
            "desc" -> desc,
            "httpCode" -> httpCode
          ))
        }
      }
      /** log without geo data in case of failure such as connection timeout */
      geoRequest.onFailure { case _ => Mongo.accessLog.insert[JsValue](logItem) }
    }
  }

  /** Query latest tweets as List */
  def latestVisitors(n: Int): Future[List[JsValue]] = {
    val cursor: Cursor[JsValue] = Mongo.accessLog
      .find(Json.obj())
      .sort(Json.obj("_id" -> -1))
      .cursor[JsValue]
    cursor.toList(n)
  }
}