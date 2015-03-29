(ns birdwatch-tc.main
  (:gen-class)
  (:require
   [birdwatch-tc.persistence.persistence :as pc]
   [birdwatch-tc.percolator.percolator :as perc-cmp]
   [birdwatch-tc.interop.interop :as iop-cmp]
   [birdwatch-tc.twitterclient.twitterclient :as twitterclient]
   [com.matthiasnehlsen.inspect :as inspect]
   [matthiasn.systems-toolbox.switchboard :as sb]
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
       [:cmd/wire-comp (pc/component :persistence-cmp conf)]
       [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]
       [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]

       [:cmd/sub-comp
        [[:tc-cmp :tweet/new]]            ;    »───»───»──╢   :scheduler-cmp subscribes to command messages that
        :persistence-cmp]                 ; <= «═══«═══«══╝   trigger the creation of a new schedule.

       [:cmd/sub-comp
        [[:tc-cmp :tweet/new]]            ;    »───»───»──╢   :scheduler-cmp subscribes to command messages that
        :percolator-cmp]                  ; <= «═══«═══«══╝   trigger the creation of a new schedule.

       [:cmd/sub-comp
        [[:percolator-cmp :perc/matches]] ;    »───»───»──╢   :scheduler-cmp subscribes to command messages that
        :interop-cmp]])))                 ; <= «═══«═══«══╝   trigger the creation of a new schedule.

(inspect/configure
  {:port (:inspect-port conf) :title "Inspect: BirdWatch TwitterClient" :header "BirdWatch - TwitterClient"})

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (start))
