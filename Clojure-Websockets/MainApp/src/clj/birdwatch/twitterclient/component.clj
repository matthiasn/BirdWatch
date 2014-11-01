(ns birdwatch.twitterclient.component
  (:gen-class)
  (:require
   [clojure.string :as str]
   [birdwatch.twitterclient.http :as http-client]
   [birdwatch.twitterclient.processing :as processing]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [clojure.core.async :as async :refer [chan go-loop pipe]]
   [com.stuartsierra.component :as component]))

(defrecord Twitterclient [conf channels conn chunk-chan watch-active]
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Component")
         (let [last-received (atom (t/epoch))
               chunk-chan (chan 1 (processing/process-chunk last-received) processing/ex-handler)
               conn (atom {})
               watch-active (atom false)]
           (http-client/start-twitter-conn! conf conn chunk-chan)
           (pipe chunk-chan (:tweets channels) false)
           (http-client/run-watch-loop conf conn chunk-chan last-received watch-active)
           (assoc component :conn conn :chunk-chan chunk-chan :watch-active watch-active)))
  (stop [component] (log/info "Stopping Twitterclient Component")
        (reset! watch-active false)
        (http-client/stop-twitter-conn! conn)
        (assoc component :conn nil :chunk-chan nil :watch-active nil)))

(defn new-twitterclient [conf] (map->Twitterclient {:conf conf}))

(defrecord Twitterclient-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Channels Component")
         (assoc component :tweets (chan))) ; channel for new tweets received from streaming API
  (stop [component] (log/info "Stop Twitterclient Channels Component")
        (assoc component :tweets nil)))

(defn new-twitterclient-channels [] (map->Twitterclient-Channels {}))
