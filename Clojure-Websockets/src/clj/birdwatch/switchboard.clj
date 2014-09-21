(ns birdwatch.switchboard
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult tap pipe]]))

;; This component is the central switchboard for information flow in this application.
;; The individual channel components come together like wiring harnesses in a car. One for the engine,
;; one for the AC, one for the soundsystem and so on.

(defrecord Switchboard [comm-chans tc-chans pers-chans perc-chans]
  component/Lifecycle
  (start [component] (log/info "Starting Switchboard Component")
         (let [tweets-mult (mult (:tweets tc-chans))]
           (tap tweets-mult (:percolation perc-chans))   ; Tweets are distributed to multiple channels
           (tap tweets-mult (:persistence pers-chans))   ; through tapping the mult created above
           (tap tweets-mult (:rt-persistence pers-chans))
           ;; connect channels 1 on 1. here, it would be easy to add message logging
           (pipe (:tweet-count pers-chans) (:tweet-count comm-chans))
           (pipe (:register-percolation comm-chans) (:register-percolation perc-chans))
           (pipe (:percolation-matches perc-chans) (:percolation-matches comm-chans))
           (pipe (:tweet-missing comm-chans) (:tweet-missing pers-chans))
           (pipe (:missing-tweet-found pers-chans) (:missing-tweet-found comm-chans))
           (pipe (:query comm-chans) (:query pers-chans))
           (pipe (:query-results pers-chans) (:query-results comm-chans))))
  (stop [component] (log/info "Stop Switchboard Component")))

(defn new-switchboard [] (map->Switchboard {}))
