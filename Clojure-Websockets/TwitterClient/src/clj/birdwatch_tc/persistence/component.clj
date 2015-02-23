(ns birdwatch-tc.persistence.component
  (:gen-class)
  (:require
   [birdwatch-tc.persistence.elastic :as es]
   [clojure.tools.logging :as log]
   [clojurewerkz.elastisch.rest :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! chan go-loop tap]]))

(defrecord Persistence [conf channels]
  component/Lifecycle
  (start [component]
         (log/info "Starting Persistence Component")
         (let [conn (esr/connect (:es-address conf))]
           (es/run-persistence-loop (:persistence channels) conf conn)
           (assoc component :conn conn)))
  (stop [component] ;; TODO: proper teardown of resources
        (log/info "Stopping Persistence Component")
        (assoc component :conn nil)))

(defn new-persistence [conf] (map->Persistence {:conf conf}))

(defrecord Persistence-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Persistence Channels Component")
         (assoc component :persistence (chan)))
  (stop [component] (log/info "Stop Persistence Channels Component")
        (assoc component :persistence nil)))

(defn new-persistence-channels [] (map->Persistence-Channels {}))
