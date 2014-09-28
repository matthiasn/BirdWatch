(ns birdwatch.percolator.component
  (:gen-class)
  (:require
   [birdwatch.percolator.elastic :as es]
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan tap]]))

(defrecord Percolator [conf channels conn subscriptions]
  component/Lifecycle
  (start [component] (log/info "Starting Percolator Component")
         (let [conn (esr/connect (:es-address conf))
               subscriptions (atom {})]
           (es/run-percolation-register-loop (:register-percolation channels) conn subscriptions)
           (es/run-percolation-loop (:percolation channels) (:percolation-matches channels) conn subscriptions)
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
