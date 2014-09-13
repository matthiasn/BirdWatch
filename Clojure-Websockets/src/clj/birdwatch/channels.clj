(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! mult tap timeout go go-loop]]))

(def tweet-missing-chan (chan)) ; channel for requesting missing tweet
(def missing-tweet-found-chan (chan)) ; channel for responding to missing request
(def percolation-matches-chan (chan))
(def query-chan (chan))
(def query-results-chan (chan))

(defrecord Channels []
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (log/info "Starting Channels")
         ;; In the 'start' method, initialize this component
         ;; and start it running. For example, connect to a
         ;; database, create thread pools, or initialize shared
         ;; state.
         (let [tweets (chan)
               tweet-missing (chan) ; channel for requesting missing tweet
               missing-tweet-found (chan); channel for responding to missing request
               persistence (chan)
               rt-persistence (chan)
               percolation (chan)
               percolation-matches (chan 10000)
               query (chan)
               query-results (chan)
               tweets-mult (mult tweets)]

           ;; fan tweet out into multiple channels (through tweets-mult created above)
           (tap tweets-mult percolation)
           (tap tweets-mult persistence)
           (tap tweets-mult rt-persistence)

           ;; temporary plumbing until communicator is componentized
           (go-loop [] (put! query (<! query-chan)) (recur))
           (go-loop [] (put! query-results-chan (<! query-results)) (recur))
           (go-loop [] (put! percolation-matches-chan (<! percolation-matches)) (recur))

           (assoc component
             :tweets tweets
             :tweet-missing tweet-missing
             :missing-tweet-found missing-tweet-found
             :persistence persistence
             :rt-persistence rt-persistence
             :percolation percolation
             :percolation-matches percolation-matches
             :query query
             :query-results query-results
             :tweets-mult tweets-mult)))

  (stop [component]
        (log/info "stop connection to Twitter Streaming API")
        ;; In the 'stop' method, shut down the running
        ;; component and release any external resources it has
        ;; acquired.
        ;; Return the component, optionally modified. Remember that if you
        ;; dissoc one of a record's base fields, you get a plain map.
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

(defn new-channels []
  (map->Channels {}))

(def channels (new-channels))

(defn start-channels! []
  "start channels component"
  (alter-var-root #'channels component/start))

(defn stop-channels! []
  "stop channels component"
  (alter-var-root #'channels component/stop))
