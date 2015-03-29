(ns birdwatch-tc.main
  (:gen-class)
  (:require
   [birdwatch-tc.persistence.persistence :as pc]
   [birdwatch-tc.percolator.percolator :as perc-cmp]
   [birdwatch-tc.interop.interop :as iop-cmp]
   [birdwatch-tc.twitterclient.twitterclient :as twitterclient]
   [com.matthiasnehlsen.inspect :as inspect]
   [matthiasn.systems-toolbox.switchboard :as sb]
   [matthiasn.systems-toolbox.scheduler :as sched]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clj-pid.core :as pid]))

(def conf (edn/read-string (slurp "twitterconf.edn")))

(defn start
  []
  (let [switchboard (sb/component)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/wire-comp (twitterclient/component :tc-cmp conf)]
       [:cmd/wire-comp (sched/component :scheduler-cmp)]              ; Scheduler component for task orchestration
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]
       [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]
       [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]

       [:cmd/sub-comp
        [[:tc-cmp :tweet/new]]            ;    »───»───»──╢   :persistence-cmp subscribes to new tweets.
        :persistence-cmp]                 ; <= «═══«═══«══╝

       [:cmd/sub-comp
        [[:tc-cmp :tweet/new]]            ;    »───»───»──╢   :percolator-cmp subscribes to new tweets.
        :percolator-cmp]                  ; <= «═══«═══«══╝

       [:cmd/sub-comp
        [[:percolator-cmp :perc/matches]] ;    »───»───»──╢   :interop-cmp subscribes to new percolation messages
        :interop-cmp]                     ; <= «═══«═══«══╝   so that it can relay them over Redis Pub/Sub.

       [:cmd/sub-comp
        [[:scheduler-cmp :schedule/t-conn-alive?]] ;    »───»───»──╢   :scheduler-cmp subscribes to command messages that
        :tc-cmp]                                   ; <= «═══«═══«══╝   trigger the creation of a new schedule.

       [:cmd/send-to
        [:scheduler-cmp
         [:cmd/schedule-new {:timeout 60000
                             :id :schedule/t-conn-alive?
                             :message [:schedule/t-conn-alive?]
                             :repeat true}]]]])))

(inspect/configure
  {:port (:inspect-port conf) :title "Inspect: BirdWatch TwitterClient" :header "BirdWatch - TwitterClient"})

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
