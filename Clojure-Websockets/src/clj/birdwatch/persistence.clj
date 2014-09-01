(ns birdwatch.persistence
  (:gen-class)
  (:use [birdwatch.conf])
  (:require
   [birdwatch.channels :as c]
   [birdwatch.atoms :as a]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.document    :as esd]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.query            :as q]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]]))

(def conn (esr/connect (:es-address conf)))

;; loop for persisting tweets
(go
 (while true
   (let [t (<! c/persistence-chan)]
     (try
       (esd/put conn (:es-index conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))

(defn query [params]
  "run a query on previous matching tweets"
  (let [conn (esr/connect (:es-address conf))
        q (:query params)
        res  (esd/search conn (:es-index conf) "tweet" :query q :size (:n params) :from (:from params) :sort {:id "desc"})
        n    (esrsp/total-hits res)
        hits (esrsp/hits-from res)]
    (log/info "Total hits:" n "Retrieved:" (count hits))
    hits))

(defn start-percolator [params]
  "register percolation search with ID based on hash of the query"
  (let [q (:query params)
        sha (sha1 (str q))
        uid (:uid params)]
    (swap! a/subscriptions assoc uid sha)
    (perc/register-query conn "percolator" sha :query q)
    (log/info "Percolation registered for query" q "with SHA1" sha)))

;; loop for finding percolation matches and delivering those on the appropriate socket
(go
 (while true
   (let [t (<! c/percolation-chan)
         response (perc/percolate conn "percolator" "tweet" :doc t)
         matches (into #{} (map #(:_id %1) (esrsp/matches-from response)))]
     (put! c/percolation-matches-chan [t matches]))))
