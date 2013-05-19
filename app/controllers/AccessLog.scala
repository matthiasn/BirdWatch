package controllers

import play.api.mvc._
import utilities.{Conf, RequestLogger}
import play.api.libs.concurrent.Execution.Implicits.defaultContext

object AccessLog extends Controller {
  
  val accessToken = Conf.getOrEmpty("admin.accessToken")

  def index(token: String) = Action {
    implicit req => {
      if (token == accessToken) {
        RequestLogger.log(req, "/accessLog", 200)
        Async { RequestLogger.latestVisitors(500).map { 
          visitors => Ok(views.html.accesslog(visitors.filter(x => !(x \ "request").as[String].contains("accessLog")))) }   
        }
      }
      else {
        RequestLogger.log(req, "/accessLog", 401)
        Unauthorized("Sorry, but no.")
      }
    }
  }
  
}