(ns birdwatch-tc.percolator.percolator
  (:require [clojure.core.match :refer [match]]
            [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [clojurewerkz.elastisch.rest.percolation :as perc]
            [clojure.tools.logging :as log]))

(defn percolate
  "Find percolation matches for given tweet."
  [{:keys [current-state msg-payload]}]
  (let [response (perc/percolate (:conn current-state) "percolator" "tweet" :doc msg-payload)
        matches (set (map :_id (esrsp/matches-from response)))] ;; set with SHAs
    {:emit-msg [:perc/matches {:tweet   msg-payload
                               :matches matches}]}))

(defn percolator-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [_put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (log/info "Percolator component started with ES connection to" es-address)
      {:state (atom {:conf conf
                     :conn conn})})))

(defn cmp-map
  [cmp-id conf]
  {:cmp-id      cmp-id
   :state-fn    (percolator-state-fn conf)
   :handler-map {:tweet/new percolate}})
