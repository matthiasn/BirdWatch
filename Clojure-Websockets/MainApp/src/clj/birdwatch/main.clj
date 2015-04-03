(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.persistence.persistence :as pc]
   [birdwatch.percolator.percolator :as perc-cmp]
   [birdwatch.interop.interop :as iop-cmp]
   [birdwatch.http.markup :as markup]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clojure.tools.namespace.repl :refer (refresh)]
   [clj-pid.core :as pid]
   [matthiasn.systems-toolbox.switchboard :as sb]
   [matthiasn.systems-toolbox.sente :as sente]
   [matthiasn.systems-toolbox.scheduler :as sched]
   [matthiasn.systems-toolbox.metrics :as metrics]))

(def conf (edn/read-string (slurp "conf.edn")))

;;; This is the main namespace of the server side of BirdWatch. It is written in Clojure and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(defn start
  []
  (let [switchboard (sb/component)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (sente/component :ws-cmp markup/index 8888)]   ; WebSockets component for client interaction
       [:cmd/wire-comp (sched/component :scheduler-cmp)]              ; Scheduler component for task orchestration
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]          ; Persistence-related component
       [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]         ; Interoperability between JVMs over Redis PubSub
       [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]     ; Component for matching tweets with searches.
       [:cmd/wire-comp (metrics/component :metrics-cmp)]              ; Component for metrics and stats.

       [:cmd/tap-comp
        [:ws-cmp         ;    »───»───»──╢   Routes all incoming messages on WebSockets to the implicitly instantiated
         :log-cmp]]      ; <= «═══«═══«══╝   logging component. Only used for development purposes.

       [:cmd/sub-comp
        [[:persistence-cmp :cmd/schedule-new]]    ;    »───»───»──╢   :scheduler-cmp subscribes to command messages that
        :scheduler-cmp]                           ; <= «═══«═══«══╝   trigger the creation of a new schedule.

       [:cmd/sub-comp
        [[:scheduler-cmp :schedule/count-indexed] ;    »───»───»──╢   :persistence-cmp services data-related requests.
         [:ws-cmp :cmd/query]                     ;    »───»───»──╢
         [:ws-cmp :cmd/missing]]                  ;    »───»───»──╢
        :persistence-cmp]                         ; <= «═══«═══«══╝

       [:cmd/sub-comp
        [[:persistence-cmp :tweet/prev-chunk]        ;    »───»───»──╢   :ws-cmp subscribes to responses from
         [:persistence-cmp :tweet/missing-tweet]     ;    »───»───»──╢   :persistence-cmp and forwards results over
         [:persistence-cmp :stats/total-tweet-count] ;    »───»───»──╢
         [:percolator-cmp :stats/users-count]        ;    »───»───»──╢
         [:metrics-cmp :stats/jvm]                   ;    »───»───»──╢   metrics about JVM / runtime.
         [:percolator-cmp :tweet/new]]               ;    »───»───»──╢   WebSockets (either to specific client or all
        :ws-cmp]                                     ; <= «═══«═══«══╝   connected clients).

       [:cmd/sub-comp
        [[:persistence-cmp :log/info]                 ;    »───»───»──╢   Logging: routing messages based on source
         [:scheduler-cmp :schedule/count-indexed]     ;    »───»───»──╢   and type to : log-cmp
         [:scheduler-cmp :schedule/count-users]       ;    »───»───»──╢
         [:persistence-cmp :stats/total-tweet-count]  ;    »───»───»──╢
         [:metrics-cmp :stats/jvm]]                   ;    »───»───»──╢   metrics about JVM / runtime.
        :log-cmp]                                     ; <= «═══«═══«══╝   TODO: wildcard matches

       [:cmd/sub-comp
        [[:scheduler-cmp :cmd/get-jvm-stats]]     ;    »───»───»──╢
        :metrics-cmp]                             ; <= «═══«═══«══╝

       [:cmd/sub-comp
        [[:interop-cmp :redis/matches]            ;    »───»───»──╢   :percolator-cmp responds to percolation matches,
         [:ws-cmp :cmd/percolate]                 ;    »───»───»──╢   registration requests and request to count the
         [:scheduler-cmp :schedule/count-users]]  ;    »───»───»──╢   number of currently connected users.
        :percolator-cmp]                          ; <= «═══«═══«══╝

       [:cmd/send-to
        [:scheduler-cmp
         [:cmd/schedule-new {:timeout 5000
                             :id :schedule/count-indexed
                             :message [:schedule/count-indexed]
                             :repeat true}]]]

       [:cmd/send-to
        [:scheduler-cmp
         [:cmd/schedule-new {:timeout 3000
                             :id :schedule/count-users
                             :message [:schedule/count-users]
                             :repeat true}]]]

       [:cmd/send-to
        [:scheduler-cmp
         [:cmd/schedule-new {:timeout 5000
                             :id :cmd/get-jvm-stats
                             :message [:cmd/get-jvm-stats]
                             :repeat true}]]]

       [:cmd/sub-comp-state     ;                   :percolator-cmp needs the websocker client UIDs for delivery of
        [:ws-cmp                ; => »═══»═══»══╗   percolation matches. State change snapshots make state easy AND
         :percolator-cmp]]])))  ;    «───«───«──╢   safe to obtain thanks to immutable data structures.

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
