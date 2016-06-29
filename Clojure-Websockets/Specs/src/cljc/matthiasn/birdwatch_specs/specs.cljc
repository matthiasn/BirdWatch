(ns matthiasn.birdwatch-specs.specs
    (:require
      #?(:clj  [clojure.spec :as s]
         :cljs [cljs.spec :as s])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Query Specs
(s/def :bw.query/n pos-int?)
(s/def :bw.query/from number?)
(s/def :bw.query_string/default_field string?)
(s/def :bw.query_string/default_operator #{"AND" "OR"})
(s/def :bw.query_string/query string?)

(s/def :bw.query/query_string
  (s/keys :req-un [:bw.query_string/default_field
                   :bw.query_string/default_operator
                   :bw.query_string/query]))

(s/def :bw.query/query
  (s/keys :req-un [:bw.query/query_string]))

(s/def :cmd/query
  (s/keys :req-un [:bw.query/n
                   :bw.query/from
                   :bw.query/query]))

(s/def :cmd/percolate
  (s/keys :req-un [:bw.query/query]))

(s/def :stats/users-count #(and (integer? %) (>= % 0)))
(s/def :stats/total-tweet-count string?)

(s/def :cmd/set-page-size pos-int?)
(s/def :cmd/set-current-page pos-int?)
(s/def :cmd/set-sort-order keyword?)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tweet Specs
(s/def :user/name string?)
(s/def :user/screen_name string?)
(s/def :user/profile_image_url string?)
(s/def :user/followers_count integer?)

(s/def :tweet/user
  (s/keys :req-un [:user/followers_count
                   :user/name
                   :user/profile_image_url
                   :user/screen_name]))

(s/def :tweet/entities
  (s/keys :req-un [:entities/hashtags
                   :entities/urls
                   :entities/user_mentions
                   :entities/symbols]))

(s/def :bw/tweet
  (s/keys :req-un [:tweet/user
                   :tweet/text
                   :tweet/entities
                   :tweet/id
                   :tweet/id_str
                   :tweet/created_at
                   :tweet/retweet_count
                   :tweet/favorite_count]
          :opt-un [:tweet/timestamp_ms]))

(s/def :tweet/new :bw/tweet)
(s/def :tweet/missing-tweet  :bw/tweet)

(s/def :iop/tweet :bw/tweet)
(s/def :iop/matches (s/* string?))

(s/def :perc/matches
  (s/keys :req-un [:iop/tweet
                   :iop/matches]))

(s/def :bw.prev/result (s/* :bw/tweet))

(s/def :tweet/prev-chunk
  (s/keys :req-un [:bw.prev/result]))
