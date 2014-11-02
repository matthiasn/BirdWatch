(ns birdwatch-tc.persistence.component
  (:gen-class)
  (:require
   [birdwatch-tc.persistence.tools :as pt]
   [birdwatch-tc.persistence.elastic :as es]
   [clojure.tools.logging :as log]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest             :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! chan go-loop tap]]))

(defrecord Persistence [conf channels conn native-conn]
  component/Lifecycle
  (start [component]
         (log/info "Starting Persistence Component")
         (let [conn (esr/connect (:es-address conf))]
           (es/run-persistence-loop (:persistence channels) conf conn)
           (es/run-rt-persistence-loop (:rt-persistence channels) (:persistence channels))
           (assoc component :conn conn :native-conn native-conn)))
  (stop [component] ;; TODO: proper teardown of resources
        (log/info "Stopping Persistence Component")
        (assoc component :conn nil :native-conn nil)))

(defn new-persistence [conf] (map->Persistence {:conf conf}))

(defrecord Persistence-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Persistence Channels Component")
         (assoc component
           :persistence (chan)
           :rt-persistence (chan)))
  (stop [component] (log/info "Stop Persistence Channels Component")
        (assoc component :persistence nil :rt-persistence nil)))

(defn new-persistence-channels [] (map->Persistence-Channels {}))
