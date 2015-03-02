(ns birdwatch.metrics.component
  (:gen-class)
  (:require
   [metrics.core :refer [new-registry]]
   [metrics.meters :refer [meter mark! rates]]
   [com.matthiasnehlsen.inspect :refer [inspect]]
   [clojure.core.match :refer (match)]
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :refer [chan go-loop <! put! timeout]]))

(defn get-rates
  "Returns map with the actual rates stored in  metrics-map."
  [metrics-map]
  (into {} (for [[k v] @metrics-map] [k (rates v)])))

(defn print-metrics-loop
  "Print dereferenced metrics with current rates."
  [metrics-map]
  (go-loop [] (<! (timeout 10000))
           (inspect :metrics/meters (get-rates metrics-map))
           (recur)))

(defn metrics-loop
  "run loop, call f with message on channel"
  [metrics-chan reg metrics-map-atom]
  (go-loop []
           (let [[ev-type ev] (<! metrics-chan)
                 ev-type-name (name ev-type)]
             (when-not (contains? @metrics-map-atom ev-type)
               (swap! metrics-map-atom conj [ev-type (meter reg ev-type-name)]))
             (mark! (meter reg ev-type-name))
           (recur))))

(defrecord Metrics [channels chsk-router]
  component/Lifecycle
  (start [component] (log/info "Starting Metrics Component")
         (let [reg (new-registry)
               metrics-map-atom (atom {})
               metrics-chan (:events channels)]
           (metrics-loop metrics-chan reg metrics-map-atom)
           (print-metrics-loop metrics-map-atom)
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
