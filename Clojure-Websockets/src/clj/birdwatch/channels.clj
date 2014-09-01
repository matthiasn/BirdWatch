(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! mult tap timeout go]]))

;; channels
(def tweets-chan (chan))
(def persistence-chan (chan))
(def percolation-chan (chan))
(def percolation-matches-chan (chan))

;; fanning tweets out to separate channels per task
(def tweets-chan-mult (mult tweets-chan))
(tap tweets-chan-mult percolation-chan)
(tap tweets-chan-mult persistence-chan)
