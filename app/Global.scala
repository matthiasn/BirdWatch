import actors.TwitterClient.{Start, AddTopic}
import play.api.GlobalSettings
import actors.TwitterClient

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    /** setting up TwitterClient with interesting search words 
      * the should be UI for this, the REST endpoints exist */
    TwitterClient.tweetClientSupervisor ! AddTopic("daft punk")
    TwitterClient.tweetClientSupervisor ! AddTopic("obama")
    TwitterClient.tweetClientSupervisor ! Start 
  } 
   
}
