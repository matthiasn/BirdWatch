(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult]]))

(defrecord Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Channels Component")
         (let [tweets (chan)
               tweets-mult (mult tweets)]
           (assoc component
             :tweets tweets                 ; channel for new tweets received from streaming API
             :tweets-mult tweets-mult       ; mult for distributing tweets channel to multiple channels
             :tweet-missing (chan)          ; channel for requesting missing tweet
             :missing-tweet-found (chan)    ; channel for responding to missing request
             :register-percolation (chan)   ; channel for registering percolation queries
             :percolation-matches (chan)    ; channel for delivering percolation matches to interested clients
             :query (chan)                  ; channel for queries received from client
             :query-results (chan)          ; channel for sending query results back to client
             :tweet-count (chan))))         ; channel for periodically sending total tweet count
  (stop [component] (log/info "Stop Channels Component")
        (assoc component :tweets nil      :tweet-missing nil  :missing-tweet-found nil :query nil
                         :tweets-mult nil :query-results nil  :percolation-matches nil)))

(defn new-channels [] (map->Channels {}))
