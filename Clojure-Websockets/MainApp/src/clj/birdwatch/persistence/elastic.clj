(ns birdwatch.persistence.elastic
  (:gen-class)
  (:require
   [birdwatch.persistence.tools :as pt]
   [clojure.tools.logging :as log]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.document    :as esd]
   [clojurewerkz.elastisch.query            :as q]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! chan put! timeout go-loop]]))

(defn query
  "run a query on previous matching tweets"
  [{:keys [query n from]} conf conn]
  (let [search (esd/search conn (:es-index conf) "tweet" :query query :size n :from from :sort {:id :desc})
        hits (esrsp/hits-from search)
        res (vec (pt/get-source hits))]
    (log/info "Total hits:" (esrsp/total-hits search) "Retrieved:" (count hits) "Characters:"  (count (str res)))
    res))

(defn run-find-missing-loop
  "starts loop for finding missing tweets, puts result on missing-tweet-found-chan"
  [tweet-missing-chan missing-tweet-found-chan conf conn]
  (go-loop [] (let [req (<! tweet-missing-chan)
                    res (esd/get conn (:es-index conf) "tweet" (:id_str req))]
                (if res
                  (put! missing-tweet-found-chan
                        {:tweet (pt/strip-source res) :uid (:uid req)})
                  (log/debug "birdwatch.persistence missing" (:id_str req) res)))
           (recur)))

(defn run-query-loop
  "run loop for answering queries"
  [query-chan query-results-chan conf conn]
  (go-loop [] (let [q (<! query-chan)
                    result (query q conf conn)]
                (log/debug "Received query:" q)
                (put! query-results-chan {:uid (:uid q) :result result}))
           (recur)))

(defn run-tweet-count-loop
  "run loop for sending stats about total number of indexed tweets"
  [tweet-count-chan conf conn]
  (go-loop [] (<! (timeout 10000))
           (let [cnt (:count (esd/count conn (:es-index conf) "tweet"))]
             (put! tweet-count-chan (format "%,15d" cnt)))
           (recur)))

