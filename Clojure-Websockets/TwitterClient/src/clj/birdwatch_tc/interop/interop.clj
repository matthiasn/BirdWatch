(ns birdwatch-tc.interop.interop
  (:require [clojure.core.match :refer [match]]
            [taoensso.carmine :as car :refer (wcar)]
            [clojure.tools.logging :as log]))

(defn publish
  "Publish tweet with matches on Redis Pub/Sub for specified topic."
  [conn topic msg]
  (car/wcar conn (car/publish topic msg)))

(defn iop-state-fn
  "Returns function for making state of the interop-component while using provided configuration."
  [conf]
  (fn [_put-fn]
    (let [redis-host (:redis-host conf)
          redis-port (:redis-port conf)
          conn {:pool {} :spec {:host redis-host :port redis-port}}]
      (log/info "Redis connection started to" redis-host redis-port)
      {:state (atom {:conf conf
                     :conn conn})})))

(defn publish-perc
  "Publish percolation matches on Redis topic."
  [{:keys [cmp-state msg]}]
  (publish (:conn @cmp-state) "matches" msg))

(defn cmp-map
  "Create component for communicating with Redis."
  [cmp-id conf]
  {:cmp-id      cmp-id
   :state-fn    (iop-state-fn conf)
   :handler-map {:perc/matches publish-perc}})
