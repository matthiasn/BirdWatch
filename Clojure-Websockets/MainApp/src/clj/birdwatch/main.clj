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
   [matthiasn.systems-toolbox.scheduler :as sched]))

(def conf (edn/read-string (slurp "conf.edn")))

(defn start
  []
  (let [switchboard (sb/component)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (sente/component :ws-cmp markup/index 8888)]
       [:cmd/wire-comp (sched/component :scheduler-cmp)]
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]
       [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]
       [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]

       [:cmd/tap-comp [:ws-cmp :log-cmp]]   ; :ws-cmp ==>> :log-cmp
                                            ; Sends all incoming messages to implicitly instantiated logging component
                                            ; Only used for development purposes.

       [:cmd/sub-comp [:persistence-cmp :cmd/schedule-new :scheduler-cmp]]
       [:cmd/sub-comp [:scheduler-cmp :schedule/count :persistence-cmp]]
       [:cmd/sub-comp [:ws-cmp :cmd/query :persistence-cmp]]
       [:cmd/sub-comp [:ws-cmp :cmd/missing :persistence-cmp]]
       [:cmd/sub-comp [:persistence-cmp :tweet/prev-chunk :ws-cmp]]
       [:cmd/sub-comp [:persistence-cmp :tweet/missing-tweet :ws-cmp]]
       [:cmd/sub-comp [:persistence-cmp :log/info :log-cmp]]
       [:cmd/sub-comp [:interop-cmp :redis/matches :percolator-cmp]]
       [:cmd/sub-comp [:ws-cmp :cmd/percolate :percolator-cmp]]
       [:cmd/sub-comp [:percolator-cmp :tweet/new :ws-cmp]]

       [:cmd/sub-comp-state [:ws-cmp :percolator-cmp]]]))) ; percolator component needs connected uids

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
