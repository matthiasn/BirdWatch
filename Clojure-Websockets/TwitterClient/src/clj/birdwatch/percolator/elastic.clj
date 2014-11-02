(ns birdwatch.percolator.elastic
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! put! go-loop]]))

(defn run-percolation-loop
  "loop for finding percolation matches and delivering those on the appropriate socket"
  [percolation-chan percolation-matches-chan conn]
  (go-loop [] (let [t (<! percolation-chan)
                    response (perc/percolate conn "percolator" "tweet" :doc t)
                    matches (set (map :_id (esrsp/matches-from response)))] ;; set with SHAs
                (put! percolation-matches-chan [t matches])
                (recur))))
