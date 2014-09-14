(ns birdwatch.persistence
  (:gen-class)
  (:use [birdwatch.conf] ;; TODO: remove conf dependency
        [clojure.data.priority-map])
  (:require
   [birdwatch.data :as d]
   [clojure.tools.logging :as log]
   [clojure.pprint :as pp]
   [clojurewerkz.elastisch.native           :as esn]
   [clojurewerkz.elastisch.native.document  :as esnd]
   [clojurewerkz.elastisch.native.response  :as esnrsp]
   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.document    :as esd]
   [clojurewerkz.elastisch.query            :as q]
   [clojurewerkz.elastisch.rest.response    :as esrsp]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop close!]]))

;; TODO: move connection objects into component
(def conn (esr/connect (:es-address conf)))
(def native-conn (esn/connect [(:es-native-address conf)] {"cluster.name" (:es-cluster-name conf)}))

(defn total-tweet-count []
  "get total count of indexed tweets from ElasticSearch"
  (esd/count conn (:es-index conf) "tweet"))

(defn- strip-tweet [t]
  "take only actually needed fields from tweet"
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

(defn- strip-source [val]
  "get tweet stripped down to necessary fields"
  (let [s (:_source val)
        t (strip-tweet s)
        rt (:retweeted_status s)]
    (if rt
      (assoc t :retweeted_status (strip-tweet rt))
      t)))

(defn get-tweet [id]
  "get Tweet for specified ID"
  (esd/get conn (:es-index conf) "tweet" id))

(defn get-source [coll]
  "get vector with :_source of each ElasticSearch result"
  (map strip-source coll))

(defn native-query [{:keys [query n from]}]
  "run a query on previous matching tweets"
  (let [search  (esnd/search native-conn (:es-index conf) "tweet" :query query :size n :from from :sort {:id :desc})
        hits (esnrsp/hits-from search)]
    (log/info "Total hits:" (esnrsp/total-hits search) "Retrieved:" (count hits))
    (get-source hits)))

(defn query [{:keys [query n from]}]
  "run a query on previous matching tweets"
  (let [search (esd/search conn (:es-index conf) "tweet" :query query :size n :from from :sort {:id :desc})
        hits (esrsp/hits-from search)
        res (get-source hits)]
    (log/info "Total hits:" (esrsp/total-hits search) "Retrieved:" (count hits))
    ;(log/info "top retweets in chunk" (pp/pprint (take 10 (into (priority-map-by >) (d/retweets res {})))))
    res))

;; loop for persisting tweets
(defn- run-persistence-loop [persistence-chan]
  (go-loop []
           (let [t (<! persistence-chan)]
             (try
               (esd/put conn (:es-index conf) "tweet" (:id_str t) t)
               (catch Exception ex (log/error ex "esd/put error"))))
           (recur)))

;; loop for persisting retweets
(defn- run-rt-persistence-loop [rt-persistence-chan]
  (go-loop []
           (let [rt (:retweeted_status (<! rt-persistence-chan))]
             (when rt
               (try
                 (esd/put conn (:es-index conf) "tweet" (:id_str rt) rt)
                 (catch Exception ex (log/error ex "esd/put error"))))
             (recur))))

(defn- run-find-missing-loop [tweet-missing-chan missing-tweet-found-chan]
  "starts loop for finding missing tweets, puts result on missing-tweet-found-chan "
  (go-loop []
           (let [req (<! tweet-missing-chan)
                 res (get-tweet (:id_str req))
                 uid (:uid req)]
             (if res
               (put! missing-tweet-found-chan {:tweet (strip-source res) :uid uid})
               (log/info "birdwatch.persistence missing" (:id_str req) res)))
           (recur)))

(defn- run-query-loop [query-chan query-results-chan]
  (go-loop []
           (let [q (<! query-chan)
                 result (native-query q)]
             (put! query-results-chan {:uid (:uid q) :result result}))
           (recur)))

(defrecord Persistence [conf channels conn native-conn]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (log/info "Starting Persistence Component")

         (run-persistence-loop (:persistence channels))
         (run-rt-persistence-loop (:rt-persistence channels))
         (run-find-missing-loop (:tweet-missing channels) (:missing-tweet-found channels))
         (run-query-loop (:query channels) (:query-results channels))

         ;(assoc component :c loops)
         )

(stop [component] ;; TODO: proper teardown of resources
      (log/info "Stopping Persistence Component")

      ;(assoc component :loops nil)
      ))

(defn new-persistence [conf]
  (map->Persistence {:conf conf}))
