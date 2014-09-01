(ns birdwatch.channels
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [clojure.edn :as edn]
   [clojurewerkz.elastisch.rest          :as esr]
   [clojurewerkz.elastisch.rest.document :as esd]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! mult tap timeout go]]))

;; channels
(def tweets-chan (chan))
(def persistence-chan (chan))
(def percolation-chan (chan))

;; fanning tweets out to separate channels per task
(def tweets-chan-mult (mult tweets-chan))
(tap tweets-chan-mult percolation-chan)
(tap tweets-chan-mult persistence-chan)

(def twitter-conf (edn/read-string (slurp "twitterconf.edn")))
(def conn (esr/connect (:es-address twitter-conf)))

;; loop for persisting tweets
(go
 (while true
   (let [t (<! persistence-chan)]
     (try
       (esd/put conn (:es-index twitter-conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))
