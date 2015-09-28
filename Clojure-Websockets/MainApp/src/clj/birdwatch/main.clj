(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.persistence.persistence :as pc]
   [birdwatch.percolator.percolator :as perc-cmp]
   [birdwatch.interop.interop :as iop-cmp]
   [birdwatch.http.markup :as markup]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [io.aviso.logging :as pretty]
   [clojure.tools.namespace.repl :refer [refresh]]
   [clj-pid.core :as pid]
   [matthiasn.systems-toolbox.switchboard :as sb]
   [matthiasn.systems-toolbox.sente :as sente]
   [matthiasn.systems-toolbox.scheduler :as sched]
   [matthiasn.systems-toolbox.metrics :as metrics]))

(pretty/install-pretty-logging)
(pretty/install-uncaught-exception-handler)

(def conf (edn/read-string (slurp "conf.edn")))

;;; This is the main namespace of the server side of BirdWatch. It is written in Clojure and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(defn start
  []
  (let [switchboard (sb/component :switchboard)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (sente/component :ws-cmp markup/index)]   ; WebSockets component for client interaction
       [:cmd/wire-comp (sched/component :scheduler-cmp)]              ; Scheduler component for task orchestration
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]          ; Persistence-related component
       [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]         ; Interoperability between JVMs over Redis PubSub
       [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]     ; Component for matching tweets with searches.
       [:cmd/wire-comp (metrics/component :metrics-cmp)]              ; Component for metrics and stats.

       ;; :persistence-cmp services data-related requests.
       [:cmd/route {:from :scheduler-cmp :to :persistence-cmp}]
       [:cmd/route {:from :ws-cmp :to :persistence-cmp}]

       ;; :ws-comp subscribes to messages that are forwarded to clients over WebSockets.
       [:cmd/route-all {:from :persistence-cmp :to :ws-cmp}]
       [:cmd/route-all {:from :percolator-cmp :to :ws-cmp}]
       [:cmd/route-all {:from :metrics-cmp :to :ws-cmp}]

       ;; :percolator-cmp responds to percolation matches, registration requests and request to connected users.
       [:cmd/route {:from :interop-cmp :to :percolator-cmp}]
       [:cmd/route {:from :ws-cmp :to :percolator-cmp}]
       [:cmd/route {:from :scheduler-cmp :to :percolator-cmp}]

       ;; :percolator-cmp needs the websocker client UIDs for delivery of percolation matches.
       [:cmd/observe-state {:from :ws-cmp :to :percolator-cmp}]

       ;; :scheduler-cmp sends msgs to :metrics-cmp
       [:cmd/route {:from :scheduler-cmp :to :metrics-cmp}]

       [:cmd/send {:to :scheduler-cmp
                   :msg [:cmd/schedule-new
                         {:timeout 5000 :id :schedule/count-indexed :message [:schedule/count-indexed] :repeat true}]}]
       [:cmd/send {:to :scheduler-cmp
                   :msg [:cmd/schedule-new
                         {:timeout 3000 :id :schedule/count-users :message [:schedule/count-users] :repeat true}]}]
       [:cmd/send {:to :scheduler-cmp
                   :msg [:cmd/schedule-new
                         {:timeout 5000 :id :cmd/get-jvm-stats :message [:cmd/get-jvm-stats] :repeat true}]}]])))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
