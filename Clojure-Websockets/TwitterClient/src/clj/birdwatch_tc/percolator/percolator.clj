(ns birdwatch-tc.percolator.percolator
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.response :as esrsp]
    [clojurewerkz.elastisch.rest.percolation :as perc]))

(defn percolate
  "Find percolation matches for given tweet."
  [{:keys [cmp-state put-fn msg-payload]}]
  (let [response (perc/percolate (:conn @cmp-state) "percolator" "tweet" :doc msg-payload)
        matches (set (map :_id (esrsp/matches-from response)))] ;; set with SHAs
    (put-fn [:perc/matches [msg-payload matches]])))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "Percolator component started with ES connection to" es-address)
      (put-fn [:log/info (str "Percolator component started with ES connection to " es-address)])
      (atom {:conf conf :conn conn}))))

(defn component
  [cmp-id conf]
  (comp/make-component {:cmp-id      cmp-id
                        :state-fn    (mk-state conf)
                        :handler-map {:tweet/new percolate}}))
