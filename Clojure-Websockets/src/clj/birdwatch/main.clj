(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.twitter-client :as tc]
   [birdwatch.channels :as c]
   [birdwatch.communicator :as comm]
   [birdwatch.persistence :as p]
   [birdwatch.percolator :as perc]
   [birdwatch.http :as http]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [clj-pid.core :as pid]
   [com.stuartsierra.component :as component]))

(def conf (edn/read-string (slurp "twitterconf.edn")))

(defn get-system [conf]
  (component/system-map
   :channels (c/new-channels)
   :communicator  (component/using (comm/new-communicator)     {:channels :channels})
   :twitterclient (component/using (tc/new-twitterclient conf) {:channels :channels})
   :persistence   (component/using (p/new-persistence conf)    {:channels :channels})
   :percolator    (component/using (perc/new-percolator conf)  {:channels :channels})
   :http          (component/using (http/new-http-server conf) {:communicator :communicator})))

(def system (get-system conf))

(defn -main [& args]
  (pid/save (:pidfile-name conf))
  (pid/delete-on-shutdown! (:pidfile-name conf))
  (log/info "Application started, PID" (pid/current))
  (alter-var-root #'system component/start))
