(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult tap]]))

(defrecord Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Channels Component")
         (let [tweets (chan)  tweets-mult (mult tweets)
               persistence (chan)  rt-persistence (chan)  percolation (chan)]
           (tap tweets-mult percolation)    ; Above, multiple channels are created for distributing tweets
           (tap tweets-mult persistence)    ; by using a mult, which is a multiplier. Tap then allows
           (tap tweets-mult rt-persistence) ; delivering the data from the mult to multiple channels.
           (assoc component
             :tweets tweets                 ; channel for new tweets received from streaming API
             :tweets-mult tweets-mult       ; mult for distributing tweets channel to multiple channels
             :persistence persistence       ; channel for persistence of new tweets
             :rt-persistence rt-persistence ; channel for persistence of retweets (to update them)
             :tweet-missing (chan)          ; channel for requesting missing tweet
             :missing-tweet-found (chan)    ; channel for responding to missing request
             :register-percolation (chan)   ; channel for registering percolation queries
             :percolation percolation       ; channel for matching new tweets against percolation queries
             :percolation-matches (chan)    ; channel for delivering percolation matches to interested clients
             :query (chan)                  ; channel for queries received from client
             :query-results (chan)          ; channel for sending query results back to client
             :tweet-count (chan))))         ; channel for periodically sending total tweet count
  (stop [component] (log/info "Stop Channels Component")
        (assoc component :tweets nil      :tweet-missing nil  :missing-tweet-found nil
                         :persistence nil :rt-persistence nil :percolation nil  :query nil
                         :tweets-mult nil :query-results nil  :percolation-matches nil)))

(defn new-channels [] (map->Channels {}))
