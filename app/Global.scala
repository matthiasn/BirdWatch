import actors.TwitterClient.{ AddTopic, StartListening }
import play.api.GlobalSettings
import utils.Mongo
import actors.ActorStage

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) { 
    ActorStage.tweetClientSupervisor ! AddTopic("hamburg")
    ActorStage.tweetClientSupervisor ! AddTopic("amsterdam")
    ActorStage.tweetClientSupervisor ! StartListening
  } 
   
  override def onStop(application: play.api.Application) { Mongo.connection.close() }
}
