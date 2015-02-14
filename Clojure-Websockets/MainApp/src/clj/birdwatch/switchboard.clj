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
               pipe-w-metric (mt/pipe-w-metric (:events metrics-chans))
               perc          {:in (:receive iop-chans)
                              :out (:percolation perc-chans)}
               register-perc {:in (:register-perc comm-chans)
                              :out (:register-percolation perc-chans)}
               tweet-count   {:in (:tweet-count pers-chans)
                              :out (:tweet-count comm-chans)}
               perc-matches  {:in (:percolation-matches perc-chans)
                              :out (:perc-matches comm-chans)}
               tweet-missing {:in (:tweet-missing comm-chans)
                              :out (:tweet-missing pers-chans)}
               missing-found {:in (:missing-tweet-found pers-chans)
                              :out (:missing-tweet-found comm-chans)}
               query         {:in (:query comm-chans)
                              :out (:query pers-chans)}
               query-result  {:in (:query-results pers-chans)
                              :out (:query-results comm-chans)}]
           (pipe-w-metric tweet-count :stats/tweet-count)
           (pipe-w-metric register-perc :stats/register-perc)
           (pipe-w-metric perc :stats/redis-received)
           (pipe-w-metric perc-matches :stats/perc-matches)
           (pipe-w-metric tweet-missing :stats/missing-t)
           (pipe-w-metric missing-found :stats/tm-found)
           (pipe-w-metric query :stats/query)
           (pipe-w-metric query-result :stats/query-res)
           (assoc component :tweets-mult tweets-mult)))

  (stop [component] (log/info "Stopping Switchboard Component")
        (assoc component :tweets-mult nil)))

(defn new-switchboard [] (map->Switchboard {}))
