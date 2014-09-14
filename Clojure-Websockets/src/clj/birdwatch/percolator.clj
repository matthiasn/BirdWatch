(ns birdwatch.percolator
  (:gen-class)
  (:require
   [birdwatch.atoms :as a] ;; TOD: should be local
   [birdwatch.data :as d]
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop close!]]))

(defn start-percolator [{:keys [query uid]} conn]
  "register percolation search with ID based on hash of the query"
  (let [sha (sha1 (str query))]
    (swap! a/subscriptions assoc uid sha)
    (perc/register-query conn "percolator" sha :query query)
    (log/info "Percolation registered for query" query "with SHA1" sha)))

;; loop for finding percolation matches and delivering those on the appropriate socket
(defn- run-percolation-register-loop [register-percolation-chan conn]
  (go-loop [] (let [params (<! register-percolation-chan)]
                (start-percolator params conn)
                (recur))))

;; loop for finding percolation matches and delivering those on the appropriate socket
(defn- run-percolation-loop [percolation-chan percolation-matches-chan conn]
  (go-loop [] (let [t (<! percolation-chan)
                    response (perc/percolate conn "percolator" "tweet" :doc t)
                    matches (into #{} (map #(:_id %1) (esrsp/matches-from response)))]
                (put! percolation-matches-chan [t matches])
                (recur))))

(defrecord Percolator [conf channels conn]
  component/Lifecycle
  (start [component]
         (log/info "Starting Percolator Component")
         (let [conn (esr/connect (:es-address conf))]
           (run-percolation-register-loop (:register-percolation channels) conn)
           (run-percolation-loop (:percolation channels) (:percolation-matches channels) conn)
           (assoc component :conn conn)))
  (stop [component] ;; TODO: proper teardown of resources
        (log/info "Stopping Percolator Component")
        (assoc component :conn nil)))

(defn new-percolator [conf] (map->Percolator {:conf conf}))
