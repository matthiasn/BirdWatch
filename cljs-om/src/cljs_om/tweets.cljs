(ns cljs-om.tweets
  (:require [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.ajax :as ajax]
            [cljs-om.ui :as ui]
            [cljs-om.wordcount :as wc]
            [cljs.core.async :as async :refer [put!]]
            [tailrecursion.priority-map :refer [priority-map priority-map-by]]))

(enable-console-print!)

(defn add-to-tweets-map [app tweets-map tweet]
  "adds tweet to tweets-map"
  (swap! app assoc-in [tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn swap-pmap [app priority-map id n]
  "swaps item in priority-map"
  (swap! app assoc priority-map (assoc (priority-map @app) id n)))

(defn swap-when-larger [app priority-map rt-id n]
  "swaps item in priority-map when new value is larger than old value"
  (when (> n (rt-id (priority-map @app))) (swap-pmap app priority-map rt-id n)))

(defn add-rt-status [app tweet]
  "handles original, retweeted tweet"
  (if (contains? tweet :retweeted_status)
    (let [state @app
          rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)]
      (swap-when-larger app :by-retweets rt-id rt-count)
      (swap-when-larger app :by-favorites rt-id (:favorite_count rt))
      (swap-pmap app :by-rt-since-startup rt-id (inc (get (:by-rt-since-startup state) rt-id 0)))
      (when (> rt-count (rt-id (:retweets state))) (add-to-tweets-map app :retweets rt)))))

(defn add-tweet [tweet app word-cloud]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (let [state @app]
    (swap! app assoc :count (inc (:count state)))
    (add-to-tweets-map app :tweets-map (util/format-tweet tweet))
    (swap-pmap app :by-followers (keyword (:id_str tweet)) (:followers_count (:user tweet)))
    (swap-pmap app :by-id (keyword (:id_str tweet)) (:id tweet))
    (add-rt-status app tweet)
    (wc/process-tweet app (:text tweet))
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
    (doall (for [x (range 25)] (ajax/prev-search search 200 (* 200 x))))))
