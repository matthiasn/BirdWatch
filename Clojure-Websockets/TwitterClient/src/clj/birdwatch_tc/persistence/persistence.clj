(ns birdwatch-tc.persistence.persistence
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
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
      (atom {:conf conf :conn conn}))))

(defn- save-tweet
  "Persist tweet into configured ElasticSearch index."
  [{:keys [cmp-state put-fn msg-payload]}]
  (try
    (esd/put (:conn @cmp-state) (:es-index (:conf @cmp-state)) "tweet" (:id_str msg-payload) msg-payload)
    (catch Exception ex (put-fn [:exception/persistence ex]))))

(defn cmp-map
  [cmp-id conf]
  {:cmp-id      cmp-id
   :state-fn    (mk-state conf)
   :handler-map {:tweet/new save-tweet}})
