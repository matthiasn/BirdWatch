(ns birdwatch.percolator.elastic
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [com.matthiasnehlsen.inspect :as inspect :refer [inspect]]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! put! go-loop]]))

(defn start-percolator
  "register percolation search with ID based on hash of the query"
  [{:keys [query uid]} conn subscriptions]
  (let [sha (sha1 (str query))]
    (swap! subscriptions assoc uid sha)
    (perc/register-query conn "percolator" sha :query query)
    (inspect :perc/start-percolator {:query query :sha sha})))

(defn run-percolation-register-loop
  "loop for finding percolation matches and delivering those on the appropriate socket"
  [register-percolation-chan conn subscriptions]
  (go-loop [] (let [params (<! register-percolation-chan)]
                (inspect :perc/params params)
                (start-percolator params conn subscriptions)
                (recur))))

(defn percolation-xf
  "create transducer for adding de-ref'd subscription to percolation result"
  [subscriptions]
  (map (fn [[t matches]] [t matches @subscriptions])))
