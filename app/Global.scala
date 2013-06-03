import actors.TweetsPublisher.{Start, AddTopic}
import play.api.GlobalSettings
import actors.{TweetsConsumer, TweetsPublisher}

object Global extends GlobalSettings {

  override def onStart(application: play.api.Application) {
    /** setting up TwitterClient with interesting search words 
      * there should be UI for this, the REST endpoints exist */
    TweetsPublisher.tweetClientSupervisor ! AddTopic("champions league")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("dortmund")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("borussia")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("münchen")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("munich")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("bayern")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("wembley")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("soccer")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("bvb")
    TweetsPublisher.tweetClientSupervisor ! AddTopic("uefa")
    TweetsPublisher.tweetClientSupervisor ! Start 
  }

  override def onStop(application: play.api.Application) { TweetsPublisher.system.shutdown() }
  
}
