(ns birdwatch.main
  (:require [birdwatch.persistence.persistence :as pc]
            [birdwatch.percolator.percolator :as perc]
            [birdwatch.interop.interop :as iop]
            [birdwatch.http.markup :as markup]
            [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [io.aviso.logging :as pretty]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clj-pid.core :as pid]
            [matthiasn.systems-toolbox.switchboard :as sb]
            [matthiasn.systems-toolbox.scheduler :as sched]
            [matthiasn.systems-toolbox-sente.server :as sente]
            [matthiasn.systems-toolbox-metrics.metrics :as metrics]))

(pretty/install-pretty-logging)
(pretty/install-uncaught-exception-handler)

(def conf (edn/read-string (slurp "conf.edn")))

;;; This is the main namespace of the server side of BirdWatch. It is written in Clojure and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(defn restart!
  "Starts (or restarts) a system built out of the specified subsystems. The switchboard will
  then fire up subsystems according to the blueprint maps, which are in passed in the second
  position of the :cmd/init-comp vectors. These subsystems are then wired to provide the
  communication paths required by the application.
  The system can be restarted on the REPL. For example, say we modify the
  birdwatch.percolator.percolator namespace. Then, we can reload it:

    (require '[birdwatch.percolator.percolator :as perc] :reload)

  Then, calling this function again will restart the system while maintaining the state of
  the individual subsystems."
  []
  (let [switchboard (sb/component :switchboard)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/init-comp (sente/cmp-map :ws-cmp markup/sente-map)] ; WebSockets component for client interaction
       [:cmd/init-comp (sched/cmp-map :scheduler-cmp)]           ; Scheduler component for task orchestration
       [:cmd/init-comp (pc/cmp-map :persistence-cmp conf)]       ; Persistence-related component
       [:cmd/init-comp (iop/cmp-map :interop-cmp conf)]          ; Interoperability between JVMs over Redis PubSub
       [:cmd/init-comp (perc/cmp-map :percolator-cmp conf)]      ; Component for matching tweets with searches.
       [:cmd/init-comp (metrics/cmp-map :metrics-cmp)]           ; Component for metrics and stats.

       ;; :persistence-cmp services data-related requests.
       [:cmd/route {:from [:scheduler-cmp :ws-cmp] :to :persistence-cmp}]

       ;; :ws-comp subscribes to messages that are forwarded to clients over WebSockets.
       [:cmd/route-all {:from [:persistence-cmp :percolator-cmp :metrics-cmp] :to :ws-cmp}]

       ;; :percolator-cmp responds to percolation matches, registration requests and request to connected users.
       [:cmd/route {:from [:interop-cmp :ws-cmp :scheduler-cmp] :to :percolator-cmp}]

       ;; :percolator-cmp needs the websocker client UIDs for delivery of percolation matches.
       [:cmd/observe-state {:from :ws-cmp :to :percolator-cmp}]

       ;; :scheduler-cmp sends msgs to :metrics-cmp
       [:cmd/route {:from :scheduler-cmp :to :metrics-cmp}]

       [:cmd/send {:to  :scheduler-cmp
                   :msg [:cmd/schedule-new {:timeout 5000
                                            :id      :schedule/count-indexed
                                            :message [:schedule/count-indexed]
                                            :repeat  true}]}]
       [:cmd/send {:to  :scheduler-cmp
                   :msg [:cmd/schedule-new {:timeout 3000
                                            :id      :schedule/count-users
                                            :message [:schedule/count-users]
                                            :repeat  true}]}]
       [:cmd/send {:to  :scheduler-cmp
                   :msg [:cmd/schedule-new {:timeout 5000
                                            :id      :cmd/get-jvm-stats
                                            :message (with-meta [:cmd/get-jvm-stats] {:sente-uid :broadcast})
                                            :repeat  true}]}]])))

(defn -main
  "Starts the application from command line. Also saves and logs process ID. The system that is fired up when
  start! is called proceeds in core.async's thread pool. Since we don't want the application to exit when
  just because the current thread is out of work, we just put it to sleep."
  [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (restart!)
  (Thread/sleep Long/MAX_VALUE))
