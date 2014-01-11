package com.matthiasnehlsen.birdwatch

object AppImplicits {

  // make Scala aware how to transform js.Object adhering to ChatMsg trait to TypedMsg case classes
  implicit def tweet2typedTweet(t: Tweet) = TypedTweet(
    t.created_at,
    t.id.toLong,
    t.text,
    t.screen_name,
    t.name,
    t.profile_image_url,
    t.followers_count.toInt,
    t.retweet_count.toInt,
    t.favorite_count.toInt
  )

  implicit def typedTweet2Tweet(t: TypedTweet): Tweet = {
    var tweet = new Tweet( t.created_at,
      t.id, t.text, t.screen_name, t.name, t.profile_image_url,
      t.followers_count, t.retweet_count, t.favorite_count)
    tweet
  }

}
