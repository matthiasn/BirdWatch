(ns birdwatch.percolator.percolator
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [pandect.core :refer [sha1]]
    [clojurewerkz.elastisch.rest :as esr]
    [clojurewerkz.elastisch.rest.percolation :as perc]))

(defn percolator-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (println "Percolator component started with ES connection to" es-address)
      (put-fn [:log/info (str "Percolator component started with ES connection to " es-address)])
      {:state (atom {:conf           conf
                     :conn           conn
                     :subscriptions  {}
                     :connected-uids {}})})))

(defn start-percolator
  "register percolation search with ID based on hash of the query"
  [{:keys [cmp-state msg-payload msg-meta]}]
  (let [query (:query msg-payload)
        sha (sha1 (str query))
        uid (:sente-uid msg-meta)]
    (swap! cmp-state assoc-in [:subscriptions uid] sha)
    (perc/register-query (:conn @cmp-state) "percolator" sha :query query)))

(defn deliver-perc-matches
  "Deliver percolation matches to interested clients by looking clients up in subscriptions and connected-uids."
  [{:keys [cmp-state put-fn msg-payload]}]
  (let [[t matches] msg-payload
        connected-uids (:connected-uids @cmp-state)
        subscriptions (:subscriptions @cmp-state)]
    (doseq [uid (:any connected-uids)]
      (when (contains? matches (get subscriptions uid))
        (put-fn (with-meta [:tweet/new {:tweet t}] {:sente-uid uid}))))))

(defn count-users
  "Count the number of currently connected client (for display in UI)."
  [{:keys [cmp-state put-fn]}]
  (let [connected-uids (:connected-uids @cmp-state)]
    (put-fn (with-meta [:stats/users-count (count (:any connected-uids))] {:sente-uid :broadcast}))))

(defn state-pub-handler
  "Handle incoming messages: process / add to application state."
  [{:keys [cmp-state msg-payload]}]
  (swap! cmp-state assoc-in [:connected-uids] msg-payload))

(defn cmp-map
  "Create component for starting percolation in ElasticSearch and delivering matches."
  [cmp-id conf] {:cmp-id            cmp-id
                 :state-fn          (percolator-state-fn conf)
                 :handler-map       {:redis/matches        deliver-perc-matches
                                     :cmd/percolate        start-percolator
                                     :schedule/count-users count-users}
                 :state-pub-handler state-pub-handler})
