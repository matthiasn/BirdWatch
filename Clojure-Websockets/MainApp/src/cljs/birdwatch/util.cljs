(ns birdwatch.util
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [clojure.string :as s]
            [birdwatch.state :as state]
            [tailrecursion.priority-map :refer [priority-map-by]]
            [cljs.core.async :as async :refer [timeout]]))

(defn by-id [id] (.getElementById js/document id))
(defn elem-width [elem] (aget elem "offsetWidth"))

(defn update-loop
  "run a loop that calls f every t milliseconds"
  [f t]
  (go-loop [] (<! (timeout t))
           (f)
           (recur)))

(defn search-hash []
  (subs (js/decodeURIComponent (aget js/window "location" "hash")) 1))

(defn tweets-by-order
  "find top n tweets by specified order"
  [tweets-map order]
  (fn [app n skip]
    (vec (map (fn [m] ((keyword (first m))(tweets-map app))) (take n (drop (* n skip) (order app)))))))

