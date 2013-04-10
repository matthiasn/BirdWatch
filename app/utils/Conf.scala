package utils

import play.api.Play.current

object Conf {
  
  /** Retrieves a key from the application.conf. Throws exception if key not found.
   *  @param    key String configuration key
   *  @return   String with configuration key
   */
  def get(key: String): String = current.configuration.getString(key)
    .getOrElse(throw new Exception("Couldn't find config for " + key))

}