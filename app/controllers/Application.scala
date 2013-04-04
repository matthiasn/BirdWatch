package controllers

import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Redirect(routes.Twitter.tweetList())
  }

}