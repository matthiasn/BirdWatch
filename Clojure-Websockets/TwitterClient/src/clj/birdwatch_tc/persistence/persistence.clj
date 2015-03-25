(ns birdwatch-tc.persistence.persistence
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.document :as esd]))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "ElasticSearch connection started to" es-address)
      (put-fn [:log/info (str "ElasticSearch connection started to " es-address)])
      {:conf conf :conn conn})))

(defn- save-tweet
  "Persist tweet into configured ElasticSearch index."
  [app put-fn t]
  (try
    (esd/put (:conn app) (:es-index (:conf app)) "tweet" (:id_str t) t)
    (catch Exception ex (put-fn [:exception/persistence ex]))))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:tweet/new t] (save-tweet app put-fn t)
         :else (put-fn [:in-handler/unmatched "Persistence" msg]))) ; component should know it's own ID

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler nil))
