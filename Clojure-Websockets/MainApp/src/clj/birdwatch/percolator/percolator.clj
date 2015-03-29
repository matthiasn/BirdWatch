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
      (atom {:conf conf :conn conn :subscriptions {} :connected-uids {}}))))

(defn start-percolator
  "register percolation search with ID based on hash of the query"
  [app {:keys [query uid]}]
  (let [sha (sha1 (str query))]
    (swap! app assoc-in [:subscriptions uid] sha)
    (perc/register-query (:conn @app) "percolator" sha :query query)))

(defn deliver-perc-matches
  "Deliver percolation matches to interested clients by looking clients up in subscriptions and connected-uids."
  [app put-fn [t matches]]
    (let [connected-uids (:connected-uids @app)
          subscriptions (:subscriptions @app)]
      (doseq [uid (:any connected-uids)]
        (when (contains? matches (get subscriptions uid))
          (put-fn [:tweet/new {:tweet t :uid uid}])))))

(defn count-users
  "Count the number of currently connected client (for display in UI)."
  [app put-fn]
  (let [connected-uids (:connected-uids @app)]
    (put-fn [:stats/users-count (count (:any connected-uids))])))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:redis/matches t-matches] (deliver-perc-matches app put-fn t-matches)
         [:cmd/percolate      perc] (start-percolator app perc)
         [:schedule/count-users   ] (count-users app put-fn)
         :else (println "Unmatched event received by percolator:" msg)))

(defn state-pub-handler
  "Handle incoming messages: process / add to application state."
  [app _ [_ state-snapshot]]
  (swap! app assoc-in [:connected-uids] state-snapshot))

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler state-pub-handler))
