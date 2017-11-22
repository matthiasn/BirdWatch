(ns birdwatch.main
  "This is the main namespace of the server side of BirdWatch. It is written in
   Clojure and makes use of the systems-toolbox library
   (https://github.com/matthiasn/BirdWatch) for building and wiring components.
   Below, a switchboard is created, which is a specialized component for
   wiring components together so that messages flow through a system as desired."

  (:require [matthiasn.birdwatch-specs.specs]
            [birdwatch.persistence.persistence :as pc]
            [birdwatch.percolator.percolator :as perc]
            [birdwatch.http.markup :as markup]
            [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [io.aviso.logging :as pretty]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clj-pid.core :as pid]
            [matthiasn.systemd-watchdog.core :as wd]
            [matthiasn.systems-toolbox.switchboard :as sb]
            [matthiasn.systems-toolbox.scheduler :as sched]
            [matthiasn.systems-toolbox-kafka.kafka-producer2 :as kp2]
            [matthiasn.systems-toolbox-sente.server :as sente]
            [matthiasn.systems-toolbox-kafka.kafka-consumer :as kc]
            [matthiasn.systems-toolbox-redis.receiver :as redis])
  (:gen-class))

(pretty/install-pretty-logging)
(pretty/install-uncaught-exception-handler)

(defonce switchboard (sb/component :main/switchboard))

(defn make-observable [components]
  (if (System/getenv "OBSERVER")
    (let [cfg {:cfg         {:bootstrap-servers "localhost:9092"
                             :auto-offset-reset "latest"
                             :topic             "firehose"}
               :relay-types #{:firehose/cmp-put
                              :firehose/cmp-publish-state
                              :firehose/cmp-recv}}
          mapper #(assoc-in % [:opts :msgs-on-firehose] true)
          components (set (mapv mapper components))
          firehose-kafka (kp2/cmp-map :main/kafka-firehose cfg)]
      (conj components firehose-kafka))
    components))

(defn restart!
  "Starts (or restarts) a system built out of the specified subsystems. The
   switchboard will then fire up subsystems according to the blueprint maps,
   which are in passed in the second position of the :cmd/init-comp vectors.
   These subsystems are then wired to provide the communication paths required
   by the application.
   The system can be restarted on the REPL. For example, say we modify the
   birdwatch.percolator.percolator namespace. Then, we can reload it:

    (require '[birdwatch.percolator.percolator :as perc] :reload)

   Then, calling this function again will restart the system while maintaining
   the state of the individual subsystems."
  [conf]
  (let [cmps #{(sente/cmp-map :main/ws-cmp markup/sente-map)
               (sched/cmp-map :main/scheduler-cmp)
               (pc/cmp-map :main/persistence-cmp conf)
               (kc/cmp-map :main/kafka-consumer {:cfg (:kafka conf)})
               (perc/cmp-map :main/percolator-cmp conf)}
        cmps (make-observable cmps)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/init-comp cmps]

       [:cmd/route {:from #{:main/scheduler-cmp :main/ws-cmp}
                    :to   :main/persistence-cmp}]

       [:cmd/route {:from #{:main/persistence-cmp
                            :main/percolator-cmp}
                    :to   :main/ws-cmp}]

       [:cmd/route {:from #{:main/kafka-consumer
                            :main/ws-cmp
                            :main/scheduler-cmp}
                    :to   :main/percolator-cmp}]

       [:cmd/observe-state {:from :main/ws-cmp
                            :to   :main/percolator-cmp}]

       [:cmd/send {:to  :main/scheduler-cmp
                   :msg [:cmd/schedule-new {:timeout 5000
                                            :message [:schedule/count-indexed]
                                            :repeat  true}]}]
       [:cmd/send {:to  :main/scheduler-cmp
                   :msg [:cmd/schedule-new {:timeout 3000
                                            :message [:schedule/count-users]
                                            :repeat  true}]}]
       [:cmd/send {:to  :main/scheduler-cmp
                   :msg [:cmd/schedule-new
                         {:timeout 5000
                          :message (with-meta [:cmd/get-jvm-stats]
                                              {:sente-uid :broadcast})
                          :repeat  true}]}]

       (when (System/getenv "OBSERVER")
         [:cmd/attach-to-firehose :main/kafka-firehose])])))

(defn -main
  "Starts the application from command line. Also saves and logs process ID.
   The system that is fired up when start! is called proceeds in core.async's
   thread pool. Since we don't want the application to exit when just because
   the current thread is out of work, we just put it to sleep."
  [& args]
  (let [conf-filepath (get (System/getenv) "CONF_PATH" "conf.edn")
        conf (edn/read-string (slurp conf-filepath))]
    (pid/save (:pidfile-name conf))
    (pid/delete-on-shutdown! (:pidfile-name conf))
    (log/info "Application started, PID" (pid/current))
    (restart! conf)
    (wd/start-watchdog! 5000)
    (Thread/sleep Long/MAX_VALUE)))
