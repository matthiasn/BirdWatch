(ns birdwatch-tc.main
  (:gen-class)
  (:require
   [birdwatch-tc.twitterclient.component :as tc]
   [birdwatch-tc.persistence.component :as p]
   [birdwatch-tc.percolator.component :as perc]
   [birdwatch-tc.interop.component :as iop]
   [birdwatch-tc.switchboard :as sw]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clj-pid.core :as pid]
   [com.stuartsierra.component :as component]))

(def conf (edn/read-string (slurp "twitterconf.edn")))

(defn get-system
  "Create system by wiring individual components so that component/start
   will bring up the individual components in the correct order."
  [conf]
  (component/system-map
   :twitterclient-channels (tc/new-twitterclient-channels)
   :persistence-channels   (p/new-persistence-channels)
   :percolation-channels   (perc/new-percolation-channels)
   :interop-channels       (iop/new-interop-channels)
   :interop       (component/using (iop/new-interop conf)      {:channels   :interop-channels})
   :twitterclient (component/using (tc/new-twitterclient conf) {:channels   :twitterclient-channels})
   :persistence   (component/using (p/new-persistence conf)    {:channels   :persistence-channels})
   :percolator    (component/using (perc/new-percolator conf)  {:channels   :percolation-channels})
   :switchboard   (component/using (sw/new-switchboard)        {:tc-chans   :twitterclient-channels
                                                                :pers-chans :persistence-channels
                                                                :perc-chans :percolation-channels
                                                                :iop-chans  :interop-channels})))
(def system (get-system conf))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (alter-var-root #'system component/start))
