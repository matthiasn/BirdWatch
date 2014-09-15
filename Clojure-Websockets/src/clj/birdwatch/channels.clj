(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult tap]]))

(defrecord Channels []
  component/Lifecycle
  (start [component]
         (log/info "Starting Channels")
         (let [tweets (chan)
               tweets-mult (mult tweets)
               persistence (chan)
               rt-persistence (chan)
               percolation (chan)]
           ;; fan tweet out into multiple channels (through tweets-mult created above)
           (tap tweets-mult percolation)
           (tap tweets-mult persistence)
           (tap tweets-mult rt-persistence)
           (assoc component
             :tweets tweets
             :tweets-mult tweets-mult
             :persistence persistence
             :rt-persistence rt-persistence
             :percolation percolation
             :tweet-missing (chan) ; channel for requesting missing tweet
             :missing-tweet-found (chan); channel for responding to missing request
             :percolation-matches (chan)
             :register-percolation (chan)
             :query (chan)
             :query-results (chan)
             :tweet-count (chan))))
  (stop [component]
        (log/info "stop connection to Twitter Streaming API")
        (assoc component :tweets nil      :tweet-missing nil  :missing-tweet-found nil
                         :persistence nil :rt-persistence nil :percolation nil  :query nil
                         :tweets-mult nil :query-results nil  :percolation-matches nil)))

(defn new-channels [] (map->Channels {}))
