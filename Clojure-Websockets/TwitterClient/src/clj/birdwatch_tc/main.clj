(ns birdwatch-tc.main
  (:gen-class)
  (:require
    [birdwatch-tc.persistence.persistence :as pc]
    [birdwatch-tc.percolator.percolator :as perc]
    [birdwatch-tc.interop.interop :as iop]
    [birdwatch-tc.twitterclient.twitterclient :as tc]
    [matthiasn.systems-toolbox.switchboard :as sb]
    [matthiasn.systems-toolbox.scheduler :as sched]
    [clojure.edn :as edn]
    [clojure.tools.logging :as log]
    [io.aviso.logging :as pretty]
    [clj-pid.core :as pid]))

(pretty/install-pretty-logging)
(pretty/install-uncaught-exception-handler)

(def conf (edn/read-string (slurp "twitterconf.edn")))

(defn restart!
  "Starts (or restarts) a system built out of the specified subsystems. The switchboard will
  then fire up subsystems according to the blueprint maps, which are in passed in the second
  position of the :cmd/init-comp vectors. These subsystems are then wired to provide the
  communication paths required by the application.
  The system can be restarted on the REPL. For example, say we modify the
  birdwatch.percolator.percolator namespace. Then, we can reload it:

      (require '[birdwatch-tc.percolator.percolator :as perc] :reload)

  Then, calling this function again will restart the system while maintaining the state of
  the individual subsystems."
  []
  (let [switchboard (sb/component :switchboard)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (tc/component :tc-cmp conf)]
       [:cmd/wire-comp (sched/component :scheduler-cmp)]
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]
       [:cmd/wire-comp (iop/component :interop-cmp conf)]
       [:cmd/wire-comp (perc/component :percolator-cmp conf)]

       [:cmd/route {:from :tc-cmp :to :persistence-cmp}]
       [:cmd/route {:from :tc-cmp :to :percolator-cmp}]
       [:cmd/route {:from :percolator-cmp :to :interop-cmp}]
       [:cmd/route {:from :scheduler-cmp :to :tc-cmp}]

       [:cmd/send {:to  :scheduler-cmp
                   :msg [:cmd/schedule-new
                         {:timeout 60000
                          :id      :schedule/t-conn-alive?
                          :message [:schedule/t-conn-alive?]
                          :repeat  true}]}]])))

(defn -main
  "Starts the application from command line. Also saves and logs process ID. The system that is fired up when
  start! is called proceeds in core.async's thread pool. Since we don't want the application to exit when
  just because the current thread is out of work, we just put it to sleep."
  [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (restart!))
