(ns birdwatch.persistence.component
  (:gen-class)
  (:require
   [birdwatch.persistence.tools :as pt]
   [birdwatch.persistence.elastic :as es]
   [clojure.tools.logging :as log]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest :as esr]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! chan go-loop tap pipeline-blocking]]))

(defrecord Persistence [conf channels]
  component/Lifecycle
  (start [component]
         (log/info "Starting Persistence Component")
         (let [conn (esr/connect (:es-address conf))
               q-chan (:query channels)
               q-res-chan (:query-results channels)
               mt-chan (:tweet-missing channels)
               mt-res-chan (:missing-tweet-found channels)]
           (pipeline-blocking 4 q-res-chan (es/query-xf conf conn) q-chan)
           (pipeline-blocking 2 mt-res-chan (es/tweet-query-xf conf conn) mt-chan)
           (es/run-tweet-count-loop (:tweet-count channels) conf conn)
           (assoc component :conn conn)))
  (stop [component] ;; TODO: proper teardown of resources
        (log/info "Stopping Persistence Component")
        (assoc component :conn nil)))

(defn new-persistence [conf] (map->Persistence {:conf conf}))

(defrecord Persistence-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Persistence Channels Component")
         (assoc component
           :query (chan)
           :query-results (chan)
           :tweet-missing (chan)
           :missing-tweet-found (chan)
           :tweet-count (chan)))
  (stop [component] (log/info "Stop Persistence Channels Component")
        (assoc component :query nil :query-results nil :tweet-missing nil :missing-tweet-found nil
                         :tweet-count nil)))

(defn new-persistence-channels [] (map->Persistence-Channels {}))
