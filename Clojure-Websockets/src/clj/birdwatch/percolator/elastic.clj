(ns birdwatch.percolator.elastic
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! put! go-loop]]))

(defn start-percolator [{:keys [query uid]} conn subscriptions]
  "register percolation search with ID based on hash of the query"
  (let [sha (sha1 (str query))]
    (swap! subscriptions assoc uid sha)
    (perc/register-query conn "percolator" sha :query query)
    (log/debug "Percolation registered for query" query "with SHA1" sha)))

(defn run-percolation-register-loop [register-percolation-chan conn subscriptions]
  "loop for finding percolation matches and delivering those on the appropriate socket"
  (go-loop [] (let [params (<! register-percolation-chan)]
                (start-percolator params conn subscriptions)
                (recur))))

(defn run-percolation-loop [percolation-chan percolation-matches-chan conn subscriptions]
  "loop for finding percolation matches and delivering those on the appropriate socket"
  (go-loop [] (let [t (<! percolation-chan)
                    response (perc/percolate conn "percolator" "tweet" :doc t)
                    matches (into #{} (map #(:_id %1) (esrsp/matches-from response)))] ;; set with SHAs
                (put! percolation-matches-chan [t matches @subscriptions]) ;; send deref'd subscriptions as val
                (recur))))
