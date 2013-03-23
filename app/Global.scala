import models.Tweet
import play.api.GlobalSettings
import utils.Mongo

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
//    Tweet.listen("hamburg%2Cschnee%2Ctomtom%2Camsterdam")
    Tweet.listen("obama")
  }  
  
  override def onStop(application: play.api.Application) {
    Mongo.connection.close
  }
}
