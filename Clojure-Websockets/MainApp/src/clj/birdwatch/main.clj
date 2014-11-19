(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.communicator.component :as comm]
   [birdwatch.persistence.component :as p]
   [birdwatch.percolator.component :as perc]
   [birdwatch.interop.component :as iop]
   [birdwatch.http.component :as http]
   [birdwatch.switchboard :as sw]
   [com.matthiasnehlsen.inspect :as inspect]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clojure.tools.namespace.repl :refer (refresh)]
   [clj-pid.core :as pid]
   [com.stuartsierra.component :as component]))

(def conf (edn/read-string (slurp "conf.edn")))

(defn get-system
  "Create system by wiring individual components so that component/start
   will bring up the individual components in the correct order."
  [conf]
  (component/system-map
   :comm-channels          (comm/new-communicator-channels)
   :persistence-channels   (p/new-persistence-channels)
   :percolation-channels   (perc/new-percolation-channels)
   :interop-channels       (iop/new-interop-channels)
   :comm          (component/using (comm/new-communicator)     {:channels   :comm-channels})
   :interop       (component/using (iop/new-interop conf)      {:channels   :interop-channels})
   :persistence   (component/using (p/new-persistence conf)    {:channels   :persistence-channels})
   :percolator    (component/using (perc/new-percolator conf)  {:channels   :percolation-channels})
   :http          (component/using (http/new-http-server conf) {:comm       :comm})
   :switchboard   (component/using (sw/new-switchboard)        {:comm-chans :comm-channels
                                                                :pers-chans :persistence-channels
                                                                :perc-chans :percolation-channels
                                                                :iop-chans  :interop-channels})))
(def system (get-system conf))

(inspect/configure {:port (:inspect-port conf)})

(defn start [] (alter-var-root #'system component/start))
(defn stop [] (alter-var-root #'system component/stop))
(defn reload [] (stop) (refresh) (start))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (inspect/start)
  (start))
