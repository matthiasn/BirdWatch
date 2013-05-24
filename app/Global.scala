import actors.TwitterClient.{Start, AddTopic}
import play.api.GlobalSettings
import actors.TwitterClient

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    /** setting up TwitterClient with interesting search words 
      * the should be UI for this, the REST endpoints exist */
    TwitterClient.tweetClientSupervisor ! AddTopic("daft punk")
    TwitterClient.tweetClientSupervisor ! AddTopic("london")
    TwitterClient.tweetClientSupervisor ! AddTopic("champions league")
    TwitterClient.tweetClientSupervisor ! AddTopic("obama")
    TwitterClient.tweetClientSupervisor ! AddTopic("hamburg")
    TwitterClient.tweetClientSupervisor ! AddTopic("amsterdam")
    TwitterClient.tweetClientSupervisor ! Start 
  }

  override def onStop(application: play.api.Application) {
    TwitterClient.system.shutdown()
  }
}
