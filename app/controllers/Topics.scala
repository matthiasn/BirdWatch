package controllers

import play.api.mvc.{Action, Controller}

import birdwatchUtils.Conf
import actors.ActorStage
import actors.TwitterClient.{RemoveTopic, AddTopic}

object Topics extends Controller {

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def add(topic: String, token: String) = Action {
    implicit req => {
      if (token == Conf.get("topics.accessToken")) {        
        ActorStage.tweetClientSupervisor ! AddTopic(topic)

        Ok("Topic added: " + topic + "\nToken: " + token)
      }
      else Unauthorized("You are not authorized to add topic " + topic)
    }
  }

  /** Serves HTML page (static content at the moment, page gets updates through WebSocket) */
  def remove(topic: String, token: String) = Action {
    implicit req => {
      if (token == Conf.get("topics.accessToken")) {
        ActorStage.tweetClientSupervisor ! RemoveTopic(topic)

        Ok("Topic removed: " + topic + "\nToken: " + token)
      }
      else Unauthorized("You are not authorized to add topic " + topic)
    }
  }
}
