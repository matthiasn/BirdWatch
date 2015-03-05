(ns birdwatch.state.initial
  (:require [birdwatch.util :as util]
            [tailrecursion.priority-map :refer [priority-map-by]]))

(defn initial-state
  "Returns fresh application state, with :search-text from the URI location hash.."
  []
  {:count 0
   :n 10
   :prev-chunks-loaded 0
   :tweets-map {}
   :search-text (util/search-hash)
   :page 1
   :search "*"
   :users-count 0
   :total-tweet-count 0
   :sorted :by-id
   :live true
   :by-followers (priority-map-by >)
   :by-retweets (priority-map-by >)
   :by-favorites (priority-map-by >)
   :by-rt-since-startup (priority-map-by >)
   :by-reach (priority-map-by >)
   :by-id (priority-map-by >)
   :words-sorted-by-count (priority-map-by >)})
