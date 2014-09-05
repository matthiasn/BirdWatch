(ns birdwatch.persistence
  (:gen-class)
  (:use [birdwatch.conf]
        [clojure.data.priority-map])
  (:require
   [birdwatch.channels :as c]
   [birdwatch.atoms :as a]
   [birdwatch.data :as d]
   [clojure.edn :as edn]
   [clojure.tools.logging :as log]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.native           :as esn]
   [clojurewerkz.elastisch.native.document  :as esnd]
   [clojurewerkz.elastisch.native.response  :as esnrsp]
   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.document    :as esd]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.query            :as q]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]]))

(def conn (esr/connect (:es-address conf)))

(defn total-tweet-count []
  "get total count of indexed tweets from ElasticSearch"
  (esd/count conn (:es-index conf) "tweet"))

;; loop for persisting tweets
(go
 (while true
   (let [t (<! c/persistence-chan)]
     (try
       (esd/put conn (:es-index conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))

(defn strip-tweet [t]
  (let [u (:user t)]
    {:id_str (:id_str t)
     :id (:id t)
     :text (:text t)
     :created_at (:created_at t)
     :retweet_count (:retweet_count t)
     :favorite_count (:favorite_count t)
     :entities (:entities t)
     :user {:followers_count (:followers_count u)
            :name (:name u)
            :profile_image_url (:profile_image_url u)
            :screen_name (:screen_name u)}}))

(defn strip-source [val]
  "get tweet stripped down to necessary fields"
  (let [s (:_source val)
        t (strip-tweet s)
        rt (:retweeted_status s)]
    (if rt
      (assoc t :retweeted_status (strip-tweet rt))
      t)))

(defn get-source [coll]
  "get vector with :_source of each ElasticSearch result"
  (map strip-source coll))

(defn native-query [params]
  "run a query on previous matching tweets"
  (let [conn (esn/connect [["127.0.0.1" 9300]] {"cluster.name" "elasticsearch_mn"})
        q (:query params)
        res  (esnd/search conn (:es-index conf) "tweet" :query q :size (:n params) :from (:from params) :sort {:id :desc})
        n    (esnrsp/total-hits res)
        hits (esnrsp/hits-from res)
        res (get-source hits)]
    (log/info "Total hits:" n "Retrieved:" (count hits))
    res))

(defn query [params]
  "run a query on previous matching tweets"
  (let [conn (esr/connect (:es-address conf))
        q (:query params)
        res  (esd/search conn (:es-index conf) "tweet" :query q :size (:n params) :from (:from params) :sort {:id :desc})
        n    (esrsp/total-hits res)
        hits (esrsp/hits-from res)
        res (get-source hits)]
    (log/info "Total hits:" n "Retrieved:" (count hits))
    ;(log/info "top retweets in chunk" (pp/pprint (take 10 (into (priority-map-by >) (d/retweets res {})))))
    res))

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
