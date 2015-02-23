(ns birdwatch-tc.percolator.elastic
  (:gen-class)
  (:require
   [pandect.core :refer [sha1]]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.rest.response :as esrsp]))

(defn percolation-xf
  "create transducer for performing percolation"
  [conn]
  (map (fn [t]
         (let [response (perc/percolate conn "percolator" "tweet" :doc t)
               matches (set (map :_id (esrsp/matches-from response)))] ;; set with SHAs
           [t matches]))))
