(ns birdwatch.switchboard
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [birdwatch.metrics.tools :as mt]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [chan mult tap pipe]]))

;;;; This component is the central switchboard for information flow in this application.
;;;; The individual channel components come together like wiring harnesses in a car.

(defrecord Switchboard [comm-chans pers-chans perc-chans iop-chans metrics-chans]
  component/Lifecycle
  (start [component] (log/info "Starting Switchboard Component")
         (let [tweets-mult (chan)
               perc-in (:receive iop-chans)
               perc-out (:percolation perc-chans)
               pipe-w-metric (mt/pipe-w-metric (:events metrics-chans))
               register-perc-in (:register-perc comm-chans)
               register-perc-out (:register-percolation perc-chans)
               tweet-count-in (:tweet-count pers-chans)
               tweet-count-out (:tweet-count comm-chans)
               perc-m-in (:percolation-matches perc-chans)
               perc-m-out (:perc-matches comm-chans)
               tweet-m-in (:tweet-missing comm-chans)
               tweet-m-out (:tweet-missing pers-chans)
               mt-found-in (:missing-tweet-found pers-chans)
               mt-found-out (:missing-tweet-found comm-chans)
               query-in (:query comm-chans)
               query-out (:query pers-chans)
               query-res-in (:query-results pers-chans)
               query-res-out (:query-results comm-chans)]
           (pipe-w-metric tweet-count-in tweet-count-out :stats/tweet-count)
           (pipe-w-metric register-perc-in register-perc-out :stats/register-perc)
           (pipe-w-metric perc-in perc-out :stats/redis-received)
           (pipe-w-metric perc-m-in perc-m-out :stats/perc-matches)
           (pipe-w-metric tweet-m-in tweet-m-out :stats/missing-t)
           (pipe-w-metric mt-found-in mt-found-out :stats/tm-found)
           (pipe-w-metric query-in query-out :stats/query)
           (pipe-w-metric query-res-in query-res-out :stats/query-res)
           (assoc component :tweets-mult tweets-mult)))

  (stop [component] (log/info "Stopping Switchboard Component")
        (assoc component :tweets-mult nil)))

(defn new-switchboard [] (map->Switchboard {}))
