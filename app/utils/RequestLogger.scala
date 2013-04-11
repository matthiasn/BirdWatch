package utils

import play.api.mvc.{Request, AnyContent}
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import play.api.libs.json.Json
import org.joda.time.DateTime

import play.modules.reactivemongo.PlayBsonImplicits.JsValueWriter

object RequestLogger {

 /** Simple access logger, stores IP-Address, User-Agent, request and timestamp 
  *  @param    request
  *  */
  def log(request: Request[AnyContent]) {
    /** simple access logging*/
    val userAgent = request.headers.get("User-Agent").getOrElse("")
    Mongo.accessLog.insert(Json.obj(
      "address" -> request.remoteAddress,
      "request" -> request.toString(),
      "user-agent" -> userAgent,
      "created" -> DateTime.now()
    ))
  }
  
}
