(ns birdwatch.persistence
  (:gen-class)
  (:use [birdwatch.conf]
        [clojure.data.priority-map])
  (:require
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
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop]]))

(def conn (esr/connect (:es-address conf)))
(def native-conn (esn/connect [["127.0.0.1" 9300]] {"cluster.name" "elasticsearch_mn"}))

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

(defn start-percolator [{:keys [query uid]}]
  "register percolation search with ID based on hash of the query"
  (let [sha (sha1 (str query))]
    (swap! a/subscriptions assoc uid sha)
    (perc/register-query conn "percolator" sha :query query)
    (log/info "Percolation registered for query" query "with SHA1" sha)))

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

;; loop for finding percolation matches and delivering those on the appropriate socket
(defn- run-percolation-loop [percolation-chan percolation-matches-chan]
  (go-loop []
           (let [t (<! percolation-chan)
                 response (perc/percolate conn "percolator" "tweet" :doc t)
                 matches (into #{} (map #(:_id %1) (esrsp/matches-from response)))
                 ]
             (put! percolation-matches-chan [t matches])
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

(defrecord Persistence [conf channels]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (log/info "Starting Persistence Component")
         ;; In the 'start' method, initialize this component
         ;; and start it running. For example, connect to a
         ;; database, create thread pools, or initialize shared
         ;; state.
         (let []
           (run-persistence-loop (:persistence channels))
           (run-rt-persistence-loop (:rt-persistence channels))
           (run-percolation-loop (:percolation channels) (:percolation-matches channels))
           (run-find-missing-loop (:tweet-missing channels) (:missing-tweet-found channels))
           (run-query-loop (:query channels) (:query-results channels))

           ;; Return an updated version of the component with
           ;; the run-time state assoc'd in.
           (assoc component :connection conn)))

  (stop [component]
        (log/info "Stopping Persistence Component")
        ;; In the 'stop' method, shut down the running
        ;; component and release any external resources it has
        ;; acquired.

        ;; Return the component, optionally modified. Remember that if you
        ;; dissoc one of a record's base fields, you get a plain map.
        (assoc component :connection nil)))

(defn new-persistence [conf]
  (map->Persistence {:conf conf}))
