import models.Tweet
import play.api.GlobalSettings

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    Tweet.listen()
  }

}
