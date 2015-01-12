(ns birdwatch.ui.tweets
  (:require [birdwatch.ui.util :as util]
            [birdwatch.channels :as c]
            [birdwatch.communicator :as comm]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [put!]]
            [reagent.core :as r]))

(enable-console-print!)

(defn twitter-intent [tweet intent icon]
  [:a {:href (str "https://twitter.com/intent/" intent (:id_str tweet))}
   [:img {:src (str "/images/" icon)}]])

(defn twitter-intents [tweet]
  [:div.intent
   [twitter-intent tweet "tweet?in_reply_to=" "reply.png"]
   [twitter-intent tweet "retweet?tweet_id=" "retweet.png"]
   [twitter-intent tweet "favorite?tweet_id=" "favorite.png"]])

(defn missing-tweet [tweet]
  (put! c/tweet-missing-chan (:id_str tweet))
  [:div.tweet "loading..." (:id_str tweet)])

(defn tweet-text [tweet user app]
  [:div.tweettext
   [:div {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}}]
   [:div.pull-left.timeInterval (str (util/number-format (:followers_count user)) " followers")]
   [:div.pull-right.timeInterval (str (util/rt-count tweet app) (util/fav-count tweet app))
    [:br] (util/rt-count-since-startup tweet app)]])

(defn image-view [media]
  [:div.tweet-image
   [:a {:href (:url (get media 0)) :target "_blank"}
    [:img.pure-img-responsive {:src (str (:media_url (get media 0)) ":small")}]]])

(defn tweet-view [raw-tweet app]
  (let [tweet ((memoize util/format-tweet) raw-tweet)
        user (:user tweet)
        screen-name (:screen_name user)
        href (str "http://www.twitter.com/" screen-name)]
    [:div.tweet
     [:span [:a {:href href :target "_blank"} [:img.thumbnail{:src (:profile_image_url user)}]]]
     [:a {:href href :target "_blank"} [:span.username {:src (:profile_image_url user)} (:name user)]]
     [:span.username_screen (str " @" screen-name)]
     [:div.pull-right.timeInterval (util/from-now (:created_at tweet))]
     [tweet-text tweet user app]
     (when-let [media (:media (:entities tweet))] (pos? (count media)) [image-view media])
     [twitter-intents tweet]]))

(defn tweets-view []
  (let [app @state/app
        tweets (util/tweets-by-order (:sorted app) app (:n app) (dec (:page app)))]
    [:div (for [t tweets] (if (:user t)
                            ^{:key (:id_str t)} [tweet-view t app]
                            ^{:key (:id_str t)} [missing-tweet t]))]))
