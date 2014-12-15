(ns birdwatch.state
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]])
  (:require [birdwatch.channels :as c]
            [tailrecursion.priority-map :refer [priority-map-by]]
            [cljs.core.async :as async :refer [<!]]
            [reagent.core :as r :refer [atom]]))

;;; Application state in a single atom
;;; Will be initialized with the map returned by util/initial-state.
;;; Reset to a new clean slate when a new search is started.
(def app (atom {}))

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
   :sorted :by-rt-since-startup
   :by-followers (priority-map-by >)
   :by-retweets (priority-map-by >)
   :by-favorites (priority-map-by >)
   :by-rt-since-startup (priority-map-by >)
   :by-reach (priority-map-by >)
   :by-id (priority-map-by >)
   :words-sorted-by-count (priority-map-by >)})

(go-loop []
         (let [uc (<! c/user-count-chan)]
           (swap! app assoc :users-count uc)
           (recur)))

(go-loop []
         (let [ttc (<! c/total-tweets-count-chan)]
           (swap! app assoc :total-tweet-count ttc)
           (recur)))
