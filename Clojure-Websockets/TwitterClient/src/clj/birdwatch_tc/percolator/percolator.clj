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
  [app t]
  (let [response (perc/percolate (:conn @app) "percolator" "tweet" :doc t)
        matches (set (map :_id (esrsp/matches-from response)))] ;; set with SHAs
    [t matches]))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "Percolator component started with ES connection to" es-address)
      (put-fn [:log/info (str "Percolator component started with ES connection to " es-address)])
      (atom {:conf conf :conn conn}))))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:tweet/new t] (put-fn [:perc/matches (percolate app t)])
         :else (println "Unmatched event received by percolator:" msg)))

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler nil))
