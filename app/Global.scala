import actors.TwitterClient.AddTopic
import play.api.GlobalSettings
import actors.ActorStage

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    /** setting up TwitterClient with interesting search words 
      * the should be UI for this, the REST endpoints exist */
    ActorStage.tweetClientSupervisor ! AddTopic("daft punk")
  } 
   
}
