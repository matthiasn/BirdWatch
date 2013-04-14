package utils

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{JsValue, Json}
import org.joda.time.DateTime

import play.modules.reactivemongo.PlayBsonImplicits.JsValueWriter
import play.api.libs.ws.WS
import org.joda.time.format.ISODateTimeFormat

object RequestLogger {

  /** Simple request logger, stores IP-Address, User-Agent, request, geo data and timestamp 
    * @param req request 
    * */
  def log(req: Request[AnyContent]) {

    /** IPv6 address for localhost replaced */
    val remoteAddress = req.remoteAddress.replace("0:0:0:0:0:0:0:1%0", "127.0.0.1")                           
    val userAgent = req.headers.get("User-Agent").getOrElse("")

   /** Joda DateTime not working as shown on https://github.com/zenexity/Play-ReactiveMongo
    *  Workaround: use ISODateTime formatted string  */
    val dtFormat = ISODateTimeFormat.dateTime()

    val logItem = Json.obj(
      "ip" -> remoteAddress,
      "request" -> req.toString(),
      "user-agent" -> userAgent,
      "timestamp" -> dtFormat.print(DateTime.now())
    )

    val geoRequest = WS.url("http://freegeoip.net/json/" + remoteAddress).withTimeout(2000).get()

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
          "lat" -> response.json \ "latitude"
        ))
      }
    }

    /** log without geo data in case of failure such as connection timeout */
    geoRequest.onFailure { case _ => Mongo.accessLog.insert[JsValue](logItem) }
  }
}
