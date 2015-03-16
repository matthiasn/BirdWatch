(ns birdwatch-tc.percolator.component
  (:gen-class)
  (:require
   [birdwatch-tc.percolator.elastic :as es]
   [clojure.tools.logging :as log]
   [clojurewerkz.elastisch.rest :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :refer [chan tap pipeline-blocking]]))

(defrecord Percolator [conf channels]
  component/Lifecycle
  (start [component] (log/info "Starting Percolator Component")
         (let [conn (esr/connect (:es-address conf))
               perc-matches-chan (:percolation-matches channels)
               perc-chan (:percolation channels)]
           (pipeline-blocking 2 perc-matches-chan (es/percolation-xf conn) perc-chan)
           (assoc component :conn conn)))
  (stop [component] (log/info "Stopping Percolator Component") ;; TODO: proper teardown of resources
        (assoc component :conn nil)))

(defn new-percolator [conf] (map->Percolator {:conf conf}))

(defrecord Percolation-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Percolation Channels Component")
         (assoc component :percolation (chan) :percolation-matches (chan)))
  (stop [component] (log/info "Stop Percolation Channels Component")
        (assoc component :percolation nil :percolation-matches nil)))

(defn new-percolation-channels [] (map->Percolation-Channels {}))
