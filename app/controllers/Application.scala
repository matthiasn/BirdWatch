package controllers

import models._
import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Redirect(routes.Twitter.tweetList())
  }

}