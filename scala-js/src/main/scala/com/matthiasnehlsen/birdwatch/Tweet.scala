package com.matthiasnehlsen.birdwatch

import scala.scalajs.js

/** trait Tweet is used for parsing incoming js.Objects */
trait TweetTrait extends js.Object {
  var created_at: js.String = ???
  var id: js.Number = ???
  var text: js.String = ???
  var screen_name: js.String = ???
  var name: js.String = ???
  var profile_image_url: js.String = ???
  var retweet_count: js.Number = ???
  var followers_count: js.Number = ???
  var favorite_count: js.Number = ???
}

trait WordCountObj extends js.Object {
  var text: js.String = ???
  var value: js.Number = ???
}

/** class Tweet allows instantiating trait above */
class Tweet(created_at: String,
            id: Long,
            text: String,
            screen_name: String,
            name: String,
            profile_image_url: String,
            followers_count: Int,
            retweet_count: Int,
            favorite_count: Int) extends TweetTrait {

}
