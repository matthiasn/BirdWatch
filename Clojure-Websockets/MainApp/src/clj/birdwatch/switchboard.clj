(ns birdwatch.switchboard
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [birdwatch.metrics.tools :as mt]
   [com.stuartsierra.component :as component]
   [clojure.core.async :refer [chan mult tap pipe]]))

;;;; This component is the central switchboard for information flow in this application.
;;;; The individual channel components come together like wiring harnesses in a car.

(defrecord Switchboard [comm-chans pers-chans perc-chans iop-chans metrics-chans]
  component/Lifecycle
  (start [component] (log/info "Starting Switchboard Component")
         (let [tweets-mult (chan)
               pipe-w-metric (mt/pipe-w-metric (:events metrics-chans))
               perc          [(:receive iop-chans)             (:percolation perc-chans)]

               ;register-perc [(:register-perc comm-chans)      (:register-percolation perc-chans)]
               ;tweet-count   [(:tweet-count pers-chans)        (:tweet-count comm-chans)]
               ;perc-matches  [(:percolation-matches perc-chans)(:perc-matches comm-chans)]
               ;tweet-missing [(:tweet-missing comm-chans)      (:tweet-missing pers-chans)]
               ;missing-found [(:missing-tweet-found pers-chans)(:missing-tweet-found comm-chans)]
               ;query         [(:query comm-chans)              (:query pers-chans)]
               ;query-result  [(:query-results pers-chans)      (:query-results comm-chans)]

               ]
           ;(pipe-w-metric tweet-count :meters/sb-tweet-count)
           ;(pipe-w-metric register-perc :meters/sb-register-perc)
           (pipe-w-metric perc :meters/sb-redis-received)
           ;(pipe-w-metric perc-matches :meters/sb-perc-matches)
           ;(pipe-w-metric tweet-missing :meters/sb-missing-t)
           ;(pipe-w-metric missing-found :meters/sb-tm-found)
           ;(pipe-w-metric query :meters/sb-query)
           ;(pipe-w-metric query-result :meters/sb-query-res)
           (assoc component :tweets-mult tweets-mult)))

  (stop [component] (log/info "Stopping Switchboard Component")
        (assoc component :tweets-mult nil)))

(defn new-switchboard [] (map->Switchboard {}))
