package utils

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.Json
import org.joda.time.DateTime

import play.modules.reactivemongo.PlayBsonImplicits.JsValueWriter
import play.api.libs.ws.WS

object RequestLogger {

  /** Simple request logger, stores IP-Address, User-Agent, request, geo data and timestamp 
    * @param request
    * */
  def log(request: Request[AnyContent]) {

    /** IPv6 address for localhost replaced */
    val remoteAddress = request.remoteAddress.replace("0:0:0:0:0:0:0:1%0", "127.0.0.1")

    val logItem = Json.obj(
      "ip" -> remoteAddress,
      "request" -> request.toString(),
      "user-agent" -> request.headers.get("User-Agent").getOrElse(""),
      "created" -> DateTime.now()
    )

    val geoRequest = WS.url("http://freegeoip.net/json/" + remoteAddress).withTimeout(2000).get

    /** log with geo data if service accessible */
    geoRequest.onSuccess {
      case response => {
        Mongo.accessLog.insert(logItem ++ Json.obj(
          "country_code" -> response.json \ "country_code",
          "country" -> response.json \ "country_name",
          "city" -> response.json \ "city",
          "long" -> response.json \ "longitude",
          "lat" -> response.json \ "latitude"
        ))
      }
    }

    /** log without geo data in case of failure such as connection timeout */
    geoRequest.onFailure { case _ => Mongo.accessLog.insert(logItem) }
  }
}
