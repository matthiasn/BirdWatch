import actors.TwitterClient.{Start, AddTopic}
import play.api.GlobalSettings
import actors.TwitterClient
import utilities.Conf

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    Conf.get("application.topics").split(",").foreach(s => TwitterClient.supervisor ! AddTopic(s))   
    TwitterClient.supervisor ! Start 
  }

  override def onStop(application: play.api.Application) { TwitterClient.system.shutdown() } 
}
