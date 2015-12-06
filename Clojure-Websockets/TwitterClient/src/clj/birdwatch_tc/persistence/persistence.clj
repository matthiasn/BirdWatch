(ns birdwatch-tc.persistence.persistence
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.document :as esd]))

(defn persistence-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "ElasticSearch connection started to" es-address)
      (put-fn [:log/info (str "ElasticSearch connection started to " es-address)])
      {:state (atom {:conf conf
                     :conn conn})})))

(defn- save-tweet
  "Persist tweet into configured ElasticSearch index."
  [{:keys [cmp-state put-fn msg-payload]}]
  (try
    (esd/put (:conn @cmp-state) (:es-index (:conf @cmp-state)) "tweet" (:id_str msg-payload) msg-payload)
    (catch Exception ex (put-fn [:exception/persistence ex]))))

(defn component
  [cmp-id conf]
  (comp/make-component {:cmp-id      cmp-id
                        :state-fn    (persistence-state-fn conf)
                        :handler-map {:tweet/new save-tweet}}))