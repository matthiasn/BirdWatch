(ns birdwatch.percolator.component
  (:gen-class)
  (:require
   [birdwatch.percolator.elastic :as es]
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojurewerkz.elastisch.rest :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :refer [chan tap pipeline]]))

(defrecord Percolator [conf channels]
  component/Lifecycle
  (start [component] (log/info "Starting Percolator Component")
         (let [conn (esr/connect (:es-address conf))
               subscriptions (atom {})
               perc-matches-chan (:percolation-matches channels)
               perc-chan (:percolation channels)]
           (pipeline 1 perc-matches-chan (es/percolation-xf subscriptions) perc-chan)
           (es/run-percolation-register-loop (:register-percolation channels) conn subscriptions)
           (assoc component :conn conn :subscriptions subscriptions)))
  (stop [component] (log/info "Stopping Percolator Component") ;; TODO: proper teardown of resources
        (assoc component :conn nil :subscriptions nil)))

(defn new-percolator [conf] (map->Percolator {:conf conf}))

(defrecord Percolation-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Percolation Channels Component")
         (assoc component :percolation (chan) :register-percolation (chan) :percolation-matches (chan)))
  (stop [component] (log/info "Stop Percolation Channels Component")
        (assoc component :percolation nil :register-percolation nil :percolation-matches nil)))

(defn new-percolation-channels [] (map->Percolation-Channels {}))
