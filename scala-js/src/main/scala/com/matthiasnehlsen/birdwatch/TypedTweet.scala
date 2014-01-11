package com.matthiasnehlsen.birdwatch

/** typed Tweet, immutable */
case class TypedTweet( created_at: String,
                       id: Long,
                       text: String,
                       screen_name: String,
                       name: String,
                       profile_image_url: String,
                       followers_count: Int,
                       retweet_count: Int,
                       favorite_count: Int)
