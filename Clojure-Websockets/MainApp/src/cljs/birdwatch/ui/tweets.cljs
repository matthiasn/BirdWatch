(ns birdwatch.ui.tweets
  (:require [birdwatch.ui.util :as util]
            [reagent.core :as r :refer [atom]]
            [matthiasn.systems-toolbox.component :as comp]))

(defn twitter-intent
  "Renders a twitter intent as a clickable image, for example for retweeting directly
   from inside the application."
  [tweet intent icon]
  [:a {:href (str "https://twitter.com/intent/" intent (:id_str tweet))}
   [:img {:src (str "/images/" icon)}]])

(defn twitter-intents
  "Renders the three relevant twitter intents using the component above."
  [tweet]
  [:div.intent
   [twitter-intent tweet "tweet?in_reply_to=" "reply.png"]
   [twitter-intent tweet "retweet?tweet_id=" "retweet.png"]
   [twitter-intent tweet "favorite?tweet_id=" "favorite.png"]])

(defn missing-tweet
  "Renders the view for a missing tweet, which in ideal cases should only
   be shown for fractions of a second until the tweet that should have
   been displayed instead is loaded over the WebSockets connection."
  [tweet put-fn]
  (let [id-str (:id_str tweet)]
    (put-fn [:retrieve-missing id-str])
    [:div.tweet "loading... " (:id_str tweet)]))

(defn tweet-text
  "Renders the text of a tweet including followers count plus retweet,
   favorites and retweeted-within-loaded-tweets count."
  [tweet user state]
  [:div.tweettext
   [:div {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}}]
   [:div.pull-left.time-interval (str (util/number-format (:followers_count user)) " followers")]
   [:div.pull-right.time-interval (str (util/rt-count tweet state) (util/fav-count tweet state))
    [:br] (util/rt-count-since-startup tweet state)]])

(defn image-view
  "Renders the first image inside the media vector as its only argument.
   The assumption is that the interesting image is always contained at
   that position, which appears to be the case."
  [media]
  [:div.tweet-image
   [:a {:href (:url (get media 0)) :target "_blank"}
    [:img.pure-img-responsive {:src (str (:media_url (get media 0)) ":small")}]]])

(defn tweet-view
  "Renders a tweet with all the elements it contains. Takes the raw (unformatted)
   tweet and the dereferenced application state as arguments."
  [raw-tweet state]
  (let [tweet ((memoize util/format-tweet) raw-tweet)
        user (:user tweet)
        screen-name (:screen_name user)
        href (str "http://www.twitter.com/" screen-name)]
    [:div.tweet
     [:span [:a {:href href :target "_blank"} [:img.thumbnail{:src (:profile_image_url user)}]]]
     [:a {:href href :target "_blank"} [:span.username {:src (:profile_image_url user)} (:name user)]]
     [:span.username_screen (str " @" screen-name)]
     [:div.pull-right.time-interval (util/from-now (:created_at tweet))]
     [tweet-text tweet user state]
     (when-let [media (:media (:entities tweet))] (pos? (count media)) [image-view media])
     [twitter-intents tweet]]))

(defn tweets-view
  "Renders a list of tweets. Takes two atoms app and tweets plus the cmd-chan
   as arguments. Dereferences both and passes down dereferenced data structures
   so that so that the tweet-view component and all components down the hierarchy
   can be implemented as pure functions.
   Rerenders the entire list whenever one (or both) of the atoms change."
  [app put-fn]
  (let [state @app
        order (:sorted state)
        n (:n state)
        page (dec (:page state))]
    (when order
      (let [tweets (util/tweets-by-order order state n page)]
        [:div (for [t tweets] (if (:user t)
                                 ^{:key (:id_str t)} [tweet-view t state]
                                 ^{:key (:id_str t)} [missing-tweet t put-fn]))]))))

(defn mk-state
  "Return clean initial component state atom."
  [put-fn]
  (let [app (atom {})]
    (r/render-component [tweets-view app put-fn] (util/by-id "tweet-frame"))
    app))

(defn state-pub-handler
  "Handle incoming messages: process / add to application state."
  [app _ [_ state-snapshot]]
  (when (:live state-snapshot) (reset! app state-snapshot)))

(defn component
  [cmp-id]
  (comp/make-component cmp-id mk-state nil state-pub-handler))
