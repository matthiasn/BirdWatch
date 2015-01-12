(ns birdwatch.state
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]])
  (:require [birdwatch.channels :as c]
            [birdwatch.wordcount :as wc]
            [tailrecursion.priority-map :refer [priority-map-by]]
            [cljs.core.async :as async :refer [<! put! timeout chan]]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r :refer [atom]]))

;;; Application state in a single atom
;;; Will be initialized with the map returned by initial-state.
;;; Reset to a new clean slate when a new search is started.
(def app (atom {}))

(defn swap-pmap
  "swaps item in priority-map"
  [app priority-map id n]
  (swap! app assoc priority-map (assoc (priority-map @app) id n)))

(def sort-orders
  {:by-followers (priority-map-by >)
   :by-retweets (priority-map-by >)
   :by-favorites (priority-map-by >)
   :by-rt-since-startup (priority-map-by >)
   :by-reach (priority-map-by >)
   :by-id (priority-map-by >)
   :words-sorted-by-count (priority-map-by >)})

(defn initial-state
  "function returning fresh application state"
  []
  {:count 0
   :n 10
   :tweets-map {}
   :search-text ""
   :page 1
   :search "*"
   :users-count 0
   :total-tweet-count 0
   :sorted :by-id
   :by-followers (priority-map-by >)
   :by-retweets (priority-map-by >)
   :by-favorites (priority-map-by >)
   :by-rt-since-startup (priority-map-by >)
   :by-reach (priority-map-by >)
   :by-id (priority-map-by >)
   :words-sorted-by-count (priority-map-by >)})

(defn append-search-text [s]
  (swap! app assoc :search-text (str (:search-text @app) " " s)))

(defn add-to-tweets-map!
  "adds tweet to tweets-map"
  [app tweets-map tweet]
  (swap! app
         assoc-in [tweets-map (keyword (:id_str tweet))]
         tweet))

(defn swap-when-larger
  "swaps item in priority-map when new value is larger than old value"
  [app priority-map rt-id n]
  (when (> n (rt-id (priority-map @app))) (swap-pmap app priority-map rt-id n)))

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
      (swap-pmap app :by-rt-since-startup rt-id (inc (get (:by-rt-since-startup state) rt-id 0)))
      (swap-pmap app :by-reach rt-id (+ (get (:by-reach state) rt-id 0) (:followers_count (:user tweet))))
      (when (> rt-count (:retweet_count (rt-id (:tweets-map state)))) (add-to-tweets-map! app :tweets-map rt)))))

(defn add-tweet!
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  [tweet app]
  (let [state @app
        id-str (:id_str tweet)
        id-key (keyword id-str)]
    (swap! app assoc :count (inc (:count state)))
    (add-to-tweets-map! app :tweets-map tweet)
    (swap-pmap app :by-followers id-key (:followers_count (:user tweet)))
    (swap-pmap app :by-id id-key id-str)
    (swap-pmap app :by-reach id-key (+ (get (:by-reach state) id-key 0) (:followers_count (:user tweet))))
    (add-rt-status! app tweet)
    (wc/process-tweet app (:text tweet))))


;;; Channels processing section, here messages are taken from channels and processed.

;;; Process messages from the stats channel and update application state accordingly.
(go-loop []
         (let [[msg-type msg] (<! c/stats-chan)]
           (match [msg-type msg]
                  [:stats/users-count       n] (swap! app assoc :users-count n)
                  [:stats/total-tweet-count n] (swap! app assoc :total-tweet-count n))
           (recur)))

;;; Process messages from the data channel and process / add to application state.
;;; In the case of :tweet/prev-chunk messages: put! on separate channel individual items
;;; are handled with a lower priority.
(def prev-chunks-chan (chan))
(go-loop []
         (let [[msg-type msg] (<! c/data-chan)]
           (match [msg-type msg]
                  [:tweet/new             tweet] (add-tweet! tweet app)
                  [:tweet/missing-tweet   tweet] (add-to-tweets-map! app :tweets-map tweet)
                  [:tweet/prev-chunk prev-chunk] (put! prev-chunks-chan prev-chunk)
                  :else ()
                  )
           (recur)))

;;; Take messages (vectors of tweets) from channel, add each tweet to application state, then
;;; pause to give the event loop back to the application (otherwise, UI becomes unresponsive
;;; for a short while).
(go-loop []
         (let [chunk (<! prev-chunks-chan)]
           (doseq [t chunk] (add-tweet! t app))
           (<! (timeout 50))
           (recur)))
