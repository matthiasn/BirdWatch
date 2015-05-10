(ns birdwatch-tc.main
  (:gen-class)
  (:require
   [birdwatch-tc.persistence.persistence :as pc]
   [birdwatch-tc.percolator.percolator :as perc-cmp]
   [birdwatch-tc.interop.interop :as iop-cmp]
   [birdwatch-tc.twitterclient.twitterclient :as tc]
   [matthiasn.systems-toolbox.switchboard :as sb]
   [matthiasn.systems-toolbox.scheduler :as sched]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clj-pid.core :as pid]))

(def conf (edn/read-string (slurp "twitterconf.edn")))

(defn start
  []
  (let [switchboard (sb/component :switchboard)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (tc/component        :tc-cmp conf)]
       [:cmd/wire-comp (sched/component     :scheduler-cmp)]              ; Scheduler component for task orchestration
       [:cmd/wire-comp (pc/component        :persistence-cmp conf)]
       [:cmd/wire-comp (iop-cmp/component   :interop-cmp conf)]
       [:cmd/wire-comp (perc-cmp/component  :percolator-cmp conf)]

       [:cmd/sub-comp     :tc-cmp          :persistence-cmp  :tweet/new]
       [:cmd/sub-comp     :tc-cmp          :percolator-cmp   :tweet/new]
       [:cmd/sub-comp     :percolator-cmp  :interop-cmp      :perc/matches]
       [:cmd/sub-comp     :scheduler-cmp   :tc-cmp           :schedule/t-conn-alive?]

       [:cmd/send-to
        [:scheduler-cmp
         [:cmd/schedule-new {:timeout 60000
                             :id :schedule/t-conn-alive?
                             :message [:schedule/t-conn-alive?]
                             :repeat true}]]]])))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
