(ns birdwatch.tweets
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]])
  (:require [birdwatch.channels :as c]
            [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.wordcount :as wc]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

(enable-console-print!)

(defn add-to-tweets-map!
  "adds tweet to tweets-map"
  [app tweets-map tweet]
  (swap! app
         assoc-in [tweets-map (keyword (:id_str tweet))]
         tweet))

(defn swap-when-larger
  "swaps item in priority-map when new value is larger than old value"
  [app priority-map rt-id n]
  (when (> n (rt-id (priority-map @app))) (util/swap-pmap app priority-map rt-id n)))

(defn add-rt-status!
  "handles original, retweeted tweet"
  [app tweet]
  (if (contains? tweet :retweeted_status)
    (let [state @app
          rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)]
      (swap-when-larger app :by-retweets rt-id rt-count)
      (swap-when-larger app :by-favorites rt-id (:favorite_count rt))
      (util/swap-pmap app :by-rt-since-startup rt-id (inc (get (:by-rt-since-startup state) rt-id 0)))
      (util/swap-pmap app :by-reach rt-id (+ (get (:by-reach state) rt-id 0) (:followers_count (:user tweet))))
      (when (> rt-count (:retweet_count (rt-id (:tweets-map state)))) (add-to-tweets-map! app :tweets-map rt)))))

(defn add-tweet!
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  [tweet app]
  (let [state @app
        id-str (:id_str tweet)
        id-key (keyword id-str)]
    (swap! app assoc :count (inc (:count state)))
    (add-to-tweets-map! app :tweets-map tweet)
    (util/swap-pmap app :by-followers (keyword id-str) (:followers_count (:user tweet)))
    (util/swap-pmap app :by-id (keyword id-str) id-str)
    (util/swap-pmap app :by-reach id-key (+ (get (:by-reach state) id-key 0) (:followers_count (:user tweet))))
    (add-rt-status! app tweet)
    (wc/process-tweet app (:text tweet))))

(go-loop [] (let [t (<! c/tweets-chan)]
              (add-tweet! t state/app)
              (recur)))

(go-loop [] (let [t (<! c/prev-tweets-chan)]
              (add-tweet! t state/app)
              (recur)))

(go-loop []
 (let [mt (<! c/missing-tweet-found-chan)]
   (add-to-tweets-map! state/app :tweets-map mt)
   (recur)))

(go-loop []
         (let [chunk (<! c/prev-chunks-chan)]
           (doseq [t chunk] (put! c/prev-tweets-chan t))
           (<! (timeout 50))
           (recur)))
