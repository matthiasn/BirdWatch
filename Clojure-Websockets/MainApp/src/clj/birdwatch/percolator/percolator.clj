(ns birdwatch.percolator.percolator
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [pandect.core :refer [sha1]]
    [matthiasn.systems-toolbox.component :as comp]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.percolation :as perc]))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "Percolator component started with ES connection to" es-address)
      (put-fn [:log/info (str "Percolator component started with ES connection to " es-address)])
      (atom {:conf conf :conn conn :subscriptions {}}))))

(defn start-percolator
  "register percolation search with ID based on hash of the query"
  [app {:keys [query uid]}]
  (let [sha (sha1 (str query))]
    (swap! app assoc-in [:subscriptions uid] sha)
    (perc/register-query (:conn @app) "percolator" sha :query query)))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:redis/matches m]    (put-fn [:tweet/new (first m)])
         [:cmd/percolate perc] (start-percolator app perc)
         :else (println "Unmatched event received by percolator:" msg)))

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler nil))
