package utilities

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{JsValue, JsArray, Json}
import play.api.libs.ws.WS
import play.api.Logger

import org.joda.time.{DateTimeZone, DateTime}
import org.joda.time.format.{DateTimeFormat, ISODateTimeFormat}
import java.net.URLEncoder

object LogstashLogger {
  val elasticLogURL = Conf.get("elastic.LogURL")
  val instanceID = Conf.getOrEmpty("application.instanceID")

  val dtFormat = ISODateTimeFormat.dateTime()
  val indexFmt = DateTimeFormat.forPattern("yyyy.MM.dd")

  /** LogStash-format logger, allows passing anything that can be expressed as a JsValue in addition to standard fields
    * @param sourcePath  source path of event 
    * @param msg         event message   
    * @param eventType   event type
    * @param fields      arbitrary data as JsValue
    **/
  def log(sourcePath: String, msg: String, eventType: String, fields: Option[JsValue]) {
    val now = new DateTime(DateTimeZone.UTC)
    Logger.info(s"$sourcePath - $msg")
    Logger.debug(s"$sourcePath - $msg - $fields")
    val logItem = Json.obj(
      "@source" -> instanceID,
      "@tags" -> JsArray(),
      "@fields" -> fields,
      "@timestamp" -> dtFormat.print(now),
      "@source_host" -> "mn.local",
      "@source_path" -> sourcePath,
      "@message" -> msg,
      "@type" -> eventType
    )
    WS.url(elasticLogURL + indexFmt.print(now) + "/play").post(logItem)
  }

  /** Simple request logger, logs request including Geo Data if available. Uses LogStash-style logger above.
    * @param req       request 
    * @param msg       event message
    * @param httpCode  HTTP code of connection (e.g. 200 or 404)
    * @param duration  duration of connection in milliseconds                
    **/
  def logRequest(req: Request[AnyContent], msg: String, httpCode: Int, duration: Long) {
    val userAgent = req.headers.get("User-Agent").getOrElse("")

    /** basic request log item */
    val logItem = Json.obj(
      "ip" -> req.remoteAddress,
      "instanceID" -> instanceID,
      "request" -> req.toString(),
      "requestID" -> req.id,
      "user-agent" -> userAgent,
      "httpCode" -> httpCode,
      "duration_ms" -> duration
    )

    /** freegeoip needs IPv4 addresses, ignore local requests with IPv6 addresses for logging and only use first address
      * if multiple exist in comma separated string */
    if (!req.remoteAddress.contains(":")) {
      val geoRequest =
        WS.url("http://freegeoip.net/json/" + URLEncoder.encode(req.remoteAddress.split(",")(0), "UTF-8"))
          .withRequestTimeout(2000)
          .get()

      /** log with geo data if service accessible */
      geoRequest.onSuccess {
        case res => {
          val geoLogItem = logItem ++ Json.obj(
            "country_code" -> res.json \ "country_code",
            "country" -> res.json \ "country_name",
            "region_code" -> res.json \ "region_code",
            "region" -> res.json \ "region_name",
            "city" -> res.json \ "city",
            "long" -> res.json \ "longitude",
            "lat" -> res.json \ "latitude")
          log(req.toString(), msg, "INFO", Some(geoLogItem))
        }
      }

      /** log without geo data in case of failure such as connection timeout */
      geoRequest.onFailure { case _ => log(req.toString(), msg, "INFO", Some(logItem)) }
    }
    else { log(req.toString(), msg, "INFO", Some(logItem)) }
  }
}
