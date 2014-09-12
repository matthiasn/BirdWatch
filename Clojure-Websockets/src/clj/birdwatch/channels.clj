(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! mult tap timeout go]]))

;; channels
(def tweets-chan (chan))
(def tweet-missing-chan (chan)) ; channel for requesting missing tweet
(def missing-tweet-found-chan (chan)) ; channel for responding to missing request
(def persistence-chan (chan))
(def rt-persistence-chan (chan))
(def percolation-chan (chan))
(def percolation-matches-chan (chan))
(def query-chan (chan))
(def query-results-chan (chan))

;; fanning tweets out to separate channels per task
(def tweets-chan-mult (mult tweets-chan))
(tap tweets-chan-mult percolation-chan)
(tap tweets-chan-mult persistence-chan)
(tap tweets-chan-mult rt-persistence-chan)
