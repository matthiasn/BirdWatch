import actors.TwitterClient.{Start, AddTopic}
import play.api.GlobalSettings
import actors.TwitterClient

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    /** setting up TwitterClient with interesting search words 
      * there should be UI for this, the REST endpoints exist */
    TwitterClient.tweetClientSupervisor ! AddTopic("champions league")
    TwitterClient.tweetClientSupervisor ! AddTopic("dortmund")
    TwitterClient.tweetClientSupervisor ! AddTopic("borussia")
    TwitterClient.tweetClientSupervisor ! AddTopic("münchen")
    TwitterClient.tweetClientSupervisor ! AddTopic("munich")
    TwitterClient.tweetClientSupervisor ! AddTopic("bayern")
    TwitterClient.tweetClientSupervisor ! AddTopic("wembley")
    TwitterClient.tweetClientSupervisor ! AddTopic("soccer")
    TwitterClient.tweetClientSupervisor ! AddTopic("bvb")
    TwitterClient.tweetClientSupervisor ! AddTopic("uefa")
    TwitterClient.tweetClientSupervisor ! Start 
  }

  override def onStop(application: play.api.Application) { TwitterClient.system.shutdown() }
  
}
