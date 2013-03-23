package utils

import play.api.Play.current

object Conf {
  
  def get(key: String) = current.configuration.getString(key).getOrElse("")

}