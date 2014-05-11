(ns cljs-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.ui :as ui]))

(enable-console-print!)

(def app-state (atom {:count 0
                      :tweets-map {}
                      :by-followers (sorted-set-by (fn [x y] (> (:followers_count x) (:followers_count y))))
                      :by-retweets (sorted-set-by (fn [x y] (> (:retweet_count x) (:retweet_count y))))
                      :by-favorites (sorted-set-by (fn [x y] (> (:favorite_count x) (:favorite_count y))))
                      :by-id (sorted-set-by >)
                      :n 5
                      :sorted :by-favorites }))

(om/root
  ui/tweets-view
  app-state
  {:target (. js/document (getElementById "tweet-frame"))})

(om/root
  ui/count-view
  app-state
  {:target (. js/document (getElementById "tweet-count"))})

(defn add-to-tweets-map [tweet]
    (swap! app-state assoc-in [:tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn add-rt-status [tweet]
  (if (contains? tweet :retweeted_status)
    (let [rt (:retweeted_status tweet)]
      (add-to-tweets-map rt)
      (swap! app-state assoc :by-retweets (conj (:by-retweets @app-state)
                                             {:retweet_count (:retweet_count rt)
                                              :id (:id_str rt)}))
      (swap! app-state assoc :by-favorites (conj (:by-favorites @app-state)
                                             {:favorite_count (:favorite_count rt)
                                              :id (:id_str rt)})))))

(defn add-tweet [tweet]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (swap! app-state assoc :count (inc (:count @app-state)))
  (add-to-tweets-map tweet)
  (add-rt-status tweet)
  (swap! app-state assoc :by-followers (conj (:by-followers @app-state)
                                             {:followers_count (:followers_count (:user tweet))
                                              :id (:id_str tweet)}))
  (swap! app-state assoc :by-id (conj (:by-id @app-state) (:id_str tweet))) )

(defn receive-sse [e]
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (add-tweet tweet)))

(def stream (js/EventSource. "/tweetFeed?q=*"))
(.addEventListener stream
                   "message"
                   (fn [e] (receive-sse e))
                   false)

