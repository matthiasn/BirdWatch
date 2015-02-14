(ns birdwatch.metrics.component
  (:gen-class)
  (:require
   [metrics.core :refer [new-registry]]
   [metrics.meters :refer [meter]]
   [clojure.core.match :as match :refer (match)]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan go-loop <! put!]]))

(defn metrics-loop
  "run loop, call f with message on channel"
  [metrics-chan reg]
  (go-loop []
           (let [[ev-type ev] (<! metrics-chan)]
             (pp/pprint ev-type))
           (recur)))

(defrecord Metrics [channels chsk-router]
  component/Lifecycle
  (start [component] (log/info "Starting Metrics Component")
         (let [reg (new-registry)
               redis-received (meter reg "redis-received")
               metrics-chan (:events channels)]
           (metrics-loop metrics-chan reg)
           (assoc component :registry reg)))
  (stop [component] (log/info "Stopping Metrics Component")
        (assoc component :registry nil)))

(defn new-metrics [] (map->Metrics {}))

(defrecord Metrics-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Metrics Channels Component")
         (assoc component :events (chan)))
  (stop [component] (log/info "Stop Metrics Channels Component")
        (assoc component :events nil)))

(defn new-metrics-channels [] (map->Metrics-Channels {}))
