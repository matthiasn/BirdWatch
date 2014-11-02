(ns birdwatch-tc.switchboard
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult tap pipe]]))

;;;; This component is the central switchboard for information flow in this application.
;;;; The individual channel components come together like wiring harnesses in a car. One for the engine,
;;;; one for the AC, one for the soundsystem and so on.

(defrecord Switchboard [tc-chans pers-chans perc-chans iop-chans]
  component/Lifecycle
  (start [component] (log/info "Starting Switchboard Component")
         (let [tweets-mult (mult (:tweets tc-chans))]
           (tap tweets-mult (:percolation perc-chans))   ; Tweets are distributed to multiple channels
           (tap tweets-mult (:persistence pers-chans))   ; through tapping the mult created above
           (tap tweets-mult (:rt-persistence pers-chans))
           ;; Connect channels 1 on 1. Here, it would be easy to add message logging.
           (pipe (:percolation-matches perc-chans) (:send iop-chans))))
  (stop [component] (log/info "Stop Switchboard Component")))

(defn new-switchboard [] (map->Switchboard {}))
