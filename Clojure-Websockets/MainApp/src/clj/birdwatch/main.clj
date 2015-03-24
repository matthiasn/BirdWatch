(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.communicator.component :as comm]
   [birdwatch.persistence.component :as p]
   [birdwatch.persistence.persistence :as pc]
   [birdwatch.metrics.component :as m]
   [birdwatch.percolator.component :as perc]
   [birdwatch.percolator.percolator :as perc-cmp]
   [birdwatch.interop.component :as iop]
   [birdwatch.interop.interop :as iop-cmp]
   [birdwatch.http.component :as http]

   [birdwatch.http.markup :as markup]
   [birdwatch.switchboard :as sw]
   [com.matthiasnehlsen.inspect :as inspect]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clojure.tools.namespace.repl :refer (refresh)]
   [clj-pid.core :as pid]

   [matthiasn.systems-toolbox.switchboard :as sb]
   [matthiasn.systems-toolbox.sente :as sente]

   [com.stuartsierra.component :as component]))

(def conf (edn/read-string (slurp "conf.edn")))

(log/info "Application starting.")

(def switchboard (sb/component))
(sb/send-mult-cmd
  switchboard
  [[:cmd/wire-comp (sente/component markup/index 8888)]
   [:cmd/tap-comp [:ws-cmp :log-cmp]]

   [:cmd/wire-comp (pc/component :persistence-cmp conf)]
   [:cmd/sub-comp [:ws-cmp :cmd/query :persistence-cmp]]
   [:cmd/sub-comp [:ws-cmp :cmd/missing :persistence-cmp]]
   [:cmd/sub-comp [:persistence-cmp :tweet/prev-chunk :ws-cmp]]
   [:cmd/sub-comp [:persistence-cmp :tweet/missing-tweet :ws-cmp]]
   [:cmd/sub-comp [:persistence-cmp :log/info :log-cmp]]

   [:cmd/wire-comp (iop-cmp/component :interop-cmp conf)]
   [:cmd/wire-comp (perc-cmp/component :percolator-cmp conf)]
   [:cmd/sub-comp [:interop-cmp :redis/matches :percolator-cmp]]
   [:cmd/sub-comp [:ws-cmp :cmd/percolate :percolator-cmp]]
   [:cmd/sub-comp [:percolator-cmp :tweet/new :ws-cmp]]

   ])

(defn get-system
  "Create system by wiring individual components so that component/start
   will bring up the individual components in the correct order."
  [conf]
  (component/system-map
   ;:comm-channels          (comm/new-communicator-channels)
   :persistence-channels   (p/new-persistence-channels)
   :percolation-channels   (perc/new-percolation-channels)
   :interop-channels       (iop/new-interop-channels)
   :metrics-channels       (m/new-metrics-channels)
   ;:comm          (component/using (comm/new-communicator)     {:channels :comm-channels})
   :interop       (component/using (iop/new-interop conf)      {:channels :interop-channels})
   :persistence   (component/using (p/new-persistence conf)    {:channels :persistence-channels})
   :percolator    (component/using (perc/new-percolator conf)  {:channels :percolation-channels})
   ;:http          (component/using (http/new-http-server conf) {:comm     :comm})
   :metrics       (component/using (m/new-metrics)             {:channels :metrics-channels})
   ;:switchboard   (component/using (sw/new-switchboard)        {;:comm-chans    :comm-channels
   ;                                                             :pers-chans    :persistence-channels
   ;                                                             :perc-chans    :percolation-channels
   ;                                                             :iop-chans     :interop-channels
;                                                                :metrics-chans :metrics-channels }
;)
  ))
(def system (get-system conf))

(inspect/configure {:port (:inspect-port conf) 
                    :title "Inspect: BirdWatch MainApp" 
                    :header "BirdWatch - MainApp"})

(defn start [] (alter-var-root #'system component/start))
(defn stop [] (alter-var-root #'system component/stop))
(defn reload [] (stop) (refresh) (start))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (inspect/start)
  (start))
