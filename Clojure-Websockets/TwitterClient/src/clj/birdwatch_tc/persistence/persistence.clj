(ns birdwatch-tc.persistence.persistence
  (:require [clojure.core.match :refer [match]]
            [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojure.tools.logging :as log]))

(defn persistence-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [_put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (log/info "ElasticSearch connection started to" es-address)
      {:state (atom {:conf conf
                     :conn conn})})))

(defn- save-tweet
  "Persist tweet into configured ElasticSearch index."
  [{:keys [current-state msg-payload]}]
  (try (esd/put (:conn current-state)
                (:es-index (:conf current-state))
                "tweet"
                (:id_str msg-payload)
                msg-payload)
       (catch Exception ex (log/error "Exception when persisting tweet:" ex))))

(defn cmp-map
  [cmp-id conf]
  {:cmp-id      cmp-id
   :state-fn    (persistence-state-fn conf)
   :handler-map {:tweet/new save-tweet}})
