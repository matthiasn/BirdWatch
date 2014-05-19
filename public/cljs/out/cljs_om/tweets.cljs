(ns cljs-om.tweets
  (:require [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.ajax :as ajax]
            [cljs-om.ui :as ui]
            [cljs-om.wordcount :as wc]
            [cljs.core.async :as async :refer [put!]]))

(enable-console-print!)

(defn add-to-tweets-map [app tweets-map tweet]
  (swap! app assoc-in [tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn mod-sort-set [app app-key fun set-key val rt]
  (swap! app assoc app-key (fun (app-key @app) {set-key val :id (:id_str rt)})))

(defn add-rt-status [app tweet]
  "handles original, retweeted tweet"
  (if (contains? tweet :retweeted_status)
    (let [state @app
          rt (:retweeted_status tweet)   rt-id (keyword (:id_str rt))
          prev (rt-id (:retweets state)) prev-rt-count (rt-id (:rt-since-startup state))]
      (when (not (nil? prev))
          (mod-sort-set app :by-retweets disj :retweet_count (:retweet_count prev) rt)
          (mod-sort-set app :by-favorites disj :favorite_count (:favorite_count prev) rt))
      (if (not (nil? prev-rt-count))
        (mod-sort-set app :by-rt-since-startup disj :count prev-rt-count rt))
      (swap! app assoc-in [:rt-since-startup rt-id]
             (inc prev-rt-count))
      (mod-sort-set app :by-rt-since-startup conj :count (inc prev-rt-count) rt)
      (if (> (:retweet_count rt) (:retweet_count prev))
        (swap! app assoc-in [:retweets (keyword (:id_str rt))] (util/format-tweet rt))
        (swap! app assoc-in [:retweets :latest] rt))
      (mod-sort-set app :by-retweets conj :retweet_count (:retweet_count rt) rt)
      (mod-sort-set app :by-favorites conj :favorite_count (:favorite_count rt) rt))))

(defn add-tweet [tweet app word-cloud]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (let [state @app]
    (swap! app assoc :count (inc (:count state)))
    (add-to-tweets-map app :tweets-map tweet)
    (add-rt-status app tweet)
    (wc/process-tweet app (:text tweet))
    (swap! app assoc :by-followers (conj (:by-followers state)
                                         {:followers_count (:followers_count (:user tweet))
                                          :id (:id_str tweet)}))
    (swap! app assoc :by-id (conj (:by-id state) (:id_str tweet)))
    (. word-cloud (redraw (clj->js (take 250 (:words-sorted-by-count state)))))))

(defn receive-sse [tweets-chan e]
  "callback, called for each item (tweet) received by SSE stream"
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (put! tweets-chan tweet)))

(defn start-search [app search tweets-chan]
  "initiate new search by starting SSE stream"
  (let [s (if (= search "") "*" search)]
    (if (not (nil? (:stream @app))) (.close (:stream @app)))
    (reset! app (util/initial-state))
    (swap! app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (swap! app assoc :stream (js/EventSource. (str "/tweetFeed?q=" s)))
    (.addEventListener (:stream @app) "message" #(receive-sse tweets-chan %) false)
    (doall (for [x (range 5)] (ajax/prev-search "*" 500 (* 500 x))))))
