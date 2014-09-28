(ns birdwatch.communicator.websockets
  (:gen-class)
  (:require
   [clojure.core.match :as match :refer (match)]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [taoensso.sente :as sente]
   [clojure.core.async :as async :refer [<! >! put! timeout go-loop]]))

(defn user-id-fn [req]
  "generates unique ID for request"
  (let [uid (str (java.util.UUID/randomUUID))]
    (log/info "Connected:" (:remote-addr req) uid)
    uid))

(defn make-event-handler [query-chan tweet-missing-chan register-percolation-chan]
  "creates event handler function for the websocket connection"
  (fn [{:as ev-msg :keys [event ?reply-fn]}]
    (match event
           [:cmd/percolate params] (put! register-percolation-chan params)
           [:cmd/query params]     (put! query-chan params)
           [:cmd/missing params]   (put! tweet-missing-chan params)
           [:chsk/ws-ping]         () ; currently just do nothing with ping (no logging either)
           :else                   (log/debug "Unmatched event:" (pp/pprint event)))))

(defn run-percolation-matches-loop [percolation-matches-chan chsk-send! connected-uids]
  "runs loop for delivering percolation matches to interested clients"
  (go-loop []
           (let [[t matches subscriptions] (<! percolation-matches-chan)]
             (doseq [uid (:any @connected-uids)]
               (when (contains? matches (get subscriptions uid))
                 (chsk-send! uid [:tweet/new t]))))
           (recur)))

(defn run-users-count-loop [chsk-send! connected-uids]
  "runs loop for sending stats about number of connected users to all connected clients"
  (go-loop []
           (<! (timeout 2000))
           (let [uids (:any @connected-uids)]
             (doseq [uid uids] (chsk-send! uid [:stats/users-count (count uids)])))
           (recur)))

(defn run-tweet-stats-loop [chsk-send! uids tweet-count-chan]
  "runs loop for sending stats about number of indexed tweets to all connected clients"
  (go-loop []
           (let [tweet-count (<! tweet-count-chan)]
             (doseq [uid (:any @uids)] (chsk-send! uid [:stats/total-tweet-count tweet-count])))
           (recur)))

(defn run-missing-tweet-loop [missing-tweet-found-chan chsk-send!]
  "runs loop for sending missing tweet back to client"
  (go-loop [] (let [msg (<! missing-tweet-found-chan)]
                (chsk-send! (:uid msg) [:tweet/missing-tweet (:tweet msg)]))
           (recur)))

(defn run-query-results-loop [query-results-chan chsk-send!]
  "runs loop for sending query result chunks back to client"
  (go-loop []
           (let [res (<! query-results-chan)]
             (chsk-send! (:uid res) [:tweet/prev-chunk (:result res)]))
           (recur)))
