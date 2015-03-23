(ns birdwatch.persistence.persistence
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.document :as esd]
    [clojurewerkz.elastisch.rest.response :as esrsp]
    [birdwatch.persistence.tools :as pt]))

(defn mk-state
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "ElasticSearch connection started to" es-address)
      (put-fn [:log/info (str "ElasticSearch connection started to " es-address)])
      {:conf conf
       :conn conn})))

(defn mk-query
  "run a query on previous matching tweets"
  [{:keys [query n from]} conf conn]
  (let [search (esd/search conn (:es-index conf) "tweet" :query query :size n :from from :sort {:id :desc})
        hits (esrsp/hits-from search)
        source (pt/get-source hits)
        res (vec source)]
    res))

(defn es-query
  ""
  [app put-fn query]
  (let [conf (:conf app)
        conn (:conn app)]
    (put-fn [:tweet/prev-chunk {:uid (:uid query) :result (mk-query query conf conn)}])
    (put-fn [:log/info [:persistence-cmp query]])))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:cmd/query query] (es-query app put-fn query)
         :else (println "Unmatched event:" msg)))

(defn component
  ""
  [cmp-id conf]
  (comp/make-component cmp-id (mk-state conf) in-handler nil))

