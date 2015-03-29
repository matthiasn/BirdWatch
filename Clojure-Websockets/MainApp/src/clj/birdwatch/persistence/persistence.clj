(ns birdwatch.persistence.persistence
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.document :as esd]
    [clojurewerkz.elastisch.rest.response :as esrsp]))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "ElasticSearch connection started to" es-address)
      (put-fn [:log/info (str "ElasticSearch connection started to " es-address)])
      {:conf conf :conn conn})))

(defn- strip-tweet
  "take only actually needed fields from tweet"
  [t]
  (let [u (:user t)]
    {:id_str (:id_str t) :id (:id t) :text (:text t) :created_at (:created_at t)
     :retweet_count (:retweet_count t) :favorite_count (:favorite_count t) :entities (:entities t)
     :user {:followers_count (:followers_count u) :name (:name u) :profile_image_url (:profile_image_url u)
            :screen_name (:screen_name u)}}))

(defn strip-source
  "get tweet stripped down to necessary fields"
  [val]
  (let [s (:_source val) t (strip-tweet s) rt (:retweeted_status s)]
    (if rt (assoc t :retweeted_status (strip-tweet rt)) t)))

(defn get-source
  "get vector with :_source of each ElasticSearch result"
  [coll]
  (map strip-source coll))

(defn mk-query
  "Run a query on previous matching tweets."
  [{:keys [query n from]} conf conn]
  (let [search (esd/search conn (:es-index conf) "tweet" :query query :size n :from from :sort {:id :desc})
        hits (esrsp/hits-from search)
        source (get-source hits)
        res (vec source)]
    res))

(defn es-query
  "Handler function for previous tweets. Uses put-fn for returning results."
  [app put-fn query]
  (let [conf (:conf app)
        conn (:conn app)]
    (put-fn [:tweet/prev-chunk {:uid (:uid query) :result (mk-query query conf conn)}])))

(defn es-mt-query
  "Handler function for missing tweets. Uses put-fn for returning results."
  [app put-fn req]
  (let [conf (:conf app)
        conn (:conn app)
        res (esd/get conn (:es-index conf) "tweet" (:id_str req))]
    (when-not res (put-fn [:log/info [:persistence-cmp "missing tweet:" (:id_str req)]]))
    (put-fn [:tweet/missing-tweet {:tweet (strip-source res) :uid (:uid req)}])))

(defn total-tweets-indexed
  [app put-fn]
  (let [conf (:conf app)
        conn (:conn app)
        cnt (esd/count conn (:es-index conf) "tweet")]
    (put-fn [:stats/total-tweet-count (format "%,15d" (:count cnt))])))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:cmd/query        query] (es-query app put-fn query)
         [:cmd/missing        req] (es-mt-query app put-fn req)
         [:schedule/count-indexed] (total-tweets-indexed app put-fn)
         :else (println "Unmatched event:" msg)))

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler nil))
