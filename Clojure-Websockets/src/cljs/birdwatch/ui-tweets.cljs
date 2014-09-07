(ns birdwatch.ui-tweets
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [birdwatch.util :as util]
            [birdwatch.channels :as c]
            [birdwatch.communicator :as comm]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [<! chan put! timeout]]))

(enable-console-print!)

(defn twitter-intent [tweet intent icon]
  "generate link with button customized for specific tweet and intent"
  (dom/a #js {:href (str "https://twitter.com/intent/" intent (:id_str tweet))}
         (dom/img #js {:src (str "/images/" icon)})))

(defn tweet-view [raw-tweet owner]
  "rendering single tweet card"
  (reify
    om/IRender
    (render [this]
            (if (:user raw-tweet)
              (let [tweet (util/format-tweet raw-tweet)
                    user (:user tweet)
                    screen-name (:screen_name user)
                    href (str "http://www.twitter.com/" screen-name)
                    media (:media (:entities tweet))]
                (dom/div #js {:className "tweet"}
                         (dom/span nil (dom/a #js {:href href :target "_blank"}
                                              (dom/img #js {:className "thumbnail" :src (:profile_image_url user)})))
                         (dom/a #js {:href href :target "_blank"}
                                (dom/span #js {:className "username" :src (:profile_image_url user)} (:name user)))
                         (dom/span #js {:className "username_screen"} (str " @" screen-name))
                         (dom/div #js {:className "pull-right timeInterval"} (util/from-now (:created_at tweet)))
                         (dom/div #js {:className "tweettext"}
                                  (dom/div #js {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}})
                                  (dom/div #js {:className "pull-left timeInterval"}
                                           (str (util/number-format (:followers_count user)) " followers"))
                                  (dom/div #js {:className "pull-right timeInterval"}
                                           (str (util/rt-count-since-startup tweet)
                                                (util/rt-count tweet)
                                                (util/fav-count tweet))))
                         (when (> (count media) 0)
                           (dom/div #js {:className "tweet-image"}
                                    (dom/a #js {:href (:url (get media 0)) :target "_blank"}
                                           (dom/img #js {:src (str (:media_url (get media 0)) ":small")}))))
                         (dom/div #js {:className "intent"}
                                  (twitter-intent tweet "tweet?in_reply_to=" "reply.png")
                                  (twitter-intent tweet "retweet?tweet_id=" "retweet.png")
                                  (twitter-intent tweet "favorite?tweet_id=" "favorite.png"))))
              (do
                (put! c/tweet-missing-chan (:id_str raw-tweet))
                (print "retrieving tweet" (:id_str raw-tweet))
                (dom/div #js {:className "tweet"} "loading..." (:id_str raw-tweet)))))))

(defn tweets-view [app owner]
  "rendering tweet list"
  (reify
    om/IRender
    (render [this]
            (let [tweets (util/tweets-by-order2 (:sorted app) app (:n app) (- (:page app) 1))]
              (apply dom/div nil (om/build-all tweet-view tweets))))))
