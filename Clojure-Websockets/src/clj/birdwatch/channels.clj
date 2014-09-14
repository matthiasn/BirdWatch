(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! mult tap timeout go go-loop]]))

(defrecord Channels []
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (log/info "Starting Channels")

         (let [tweets (chan)
               tweet-missing (chan) ; channel for requesting missing tweet
               missing-tweet-found (chan); channel for responding to missing request
               persistence (chan)
               rt-persistence (chan)
               percolation (chan)
               percolation-matches (chan 10000)
               register-percolation (chan)
               query (chan)
               query-results (chan)
               tweets-mult (mult tweets)]

           ;; fan tweet out into multiple channels (through tweets-mult created above)
           (tap tweets-mult percolation)
           (tap tweets-mult persistence)
           (tap tweets-mult rt-persistence)

           (assoc component
             :tweets tweets
             :tweet-missing tweet-missing
             :missing-tweet-found missing-tweet-found
             :persistence persistence
             :rt-persistence rt-persistence
             :percolation percolation
             :percolation-matches percolation-matches
             :register-percolation register-percolation
             :query query
             :query-results query-results
             :tweets-mult tweets-mult)))

  (stop [component]
        (log/info "stop connection to Twitter Streaming API")

        (assoc component
          :tweets nil
          :tweet-missing nil
          :missing-tweet-found nil
          :persistence nil
          :rt-persistence nil
          :percolation nil
          :percolation-matches nil
          :query nil
          :query-results nil
          :tweets-mult nil)))

(defn new-channels [] (map->Channels {}))


