(ns birdwatch.state.proc
  (:require [birdwatch.stats.wordcount :as wc]
            [birdwatch.state.search :as s]
            [cljs.pprint :as pp]))

(defn swap-pmap
  "swaps item in priority-map"
  [app priority-map id n]
  (swap! app assoc priority-map (assoc (priority-map @app) id n)))

(defn- add-to-tweets-map!
  "adds tweet to tweets-map"
  [app tweets-map tweet]
  (swap! app
         assoc-in [tweets-map (keyword (:id_str tweet))]
         tweet))

(defn- swap-when-larger
  "Swaps item in priority-map when new value is larger than old value."
  [app priority-map rt-id n]
  (when (> n (rt-id (priority-map @app))) (swap-pmap app priority-map rt-id n)))

(defn add-words
  "Add words to the words map and the sorted set with the counts (while discarding old entry)."
  [app words]
  (doseq [word words]
    (swap-pmap app :words-sorted-by-count word (inc (get (:words-sorted-by-count @app) word 0)))))

(defn add-rt-status!
  "Process original, retweeted tweet."
  [app tweet]
  (if (contains? tweet :retweeted_status)
    (let [state @app
          rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)]
      (swap-when-larger app :by-retweets rt-id rt-count)
      (swap-when-larger app :by-favorites rt-id (:favorite_count rt))
      (swap-pmap app :by-rt-since-startup rt-id (inc (get (:by-rt-since-startup state) rt-id 0)))
      (swap-pmap app :by-reach rt-id (+ (get (:by-reach state) rt-id 0) (:followers_count (:user tweet))))
      (when (> rt-count (:retweet_count (rt-id (:tweets-map state))))
        (add-to-tweets-map! app :tweets-map rt)))))

(defn add-tweet!
  "Increment counter, add tweet to tweets map and to sorted sets by id and by followers. Modifies
   application state."
  [{:keys [cmp-state msg-payload]}]
  (let [state @cmp-state
        tweet (:tweet msg-payload)
        id-str (:id_str tweet)
        id-key (keyword id-str)]
    (swap! cmp-state assoc :count (inc (:count state)))
    (add-to-tweets-map! cmp-state :tweets-map tweet)
    (swap-pmap cmp-state :by-followers id-key (:followers_count (:user tweet)))
    (swap-pmap cmp-state :by-id id-key id-str)
    (swap-pmap cmp-state :by-reach id-key (+ (get (:by-reach state) id-key 0) (:followers_count (:user tweet))))
    (add-rt-status! cmp-state tweet)
    (add-words cmp-state (wc/words-in-tweet (:text tweet)))))

(defn update-count
  [k]
  (fn [{:keys [cmp-state msg-payload]}]
    (swap! cmp-state assoc k msg-payload)))

(defn handle-prev-chunk
  "Take messages (vectors of tweets) from prev-chunks-chan, add each tweet to application
   state, then pause to give the event loop back to the application (otherwise, UI becomes
   unresponsive for a short while)."
  [{:keys [cmp-state put-fn msg-payload]}]
  (doseq [t (:result msg-payload)] (add-tweet! {:msg-payload {:tweet t} :cmp-state cmp-state}))
  (s/load-prev cmp-state put-fn))

(defn update-in-cmp
  "Helper for creating a function that updates value in component atom in given path by applying f."
  [path f]
  (fn
    [{:keys [cmp-state]}]
    (swap! cmp-state update-in path f)))

(defn assoc-in-cmp
  "Helper for creating a function that updates value in component atom in given path by applying f."
  [path]
  (fn
    [{:keys [cmp-state msg-payload]}]
    (swap! cmp-state assoc-in path msg-payload)))