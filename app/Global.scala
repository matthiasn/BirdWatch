import actors.TwitterClient.AddTopic
import play.api.GlobalSettings
import birdwatchUtils.Mongo
import actors.ActorStage

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) { 
    ActorStage.tweetClientSupervisor ! AddTopic("daft punk")
  } 
   
  override def onStop(application: play.api.Application) { Mongo.connection.close() }
}
