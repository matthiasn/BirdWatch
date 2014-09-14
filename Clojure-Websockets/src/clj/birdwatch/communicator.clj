(ns birdwatch.communicator
  (:gen-class)
  (:require
   [birdwatch.atoms :as a]
   [birdwatch.persistence :as p]
   [clojure.data.json :as json]
   [clojure.core.match :as match :refer (match)]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [taoensso.sente     :as sente]
   [taoensso.sente.packers.transit :as sente-transit]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop]]))

(def packer
  "Defines our packing (serialization) format for client<->server comms."
  (sente-transit/get-flexi-packer :json))

(defn- user-id-fn [req]
  "generates unique ID for request"
  (let [uid (str (java.util.UUID/randomUUID))]
    (log/info "Connected:" (:remote-addr req) uid)
    uid))

(defn- make-event-msg-handler [query-chan tweet-missing-chan register-percolation-chan]
  (fn [{:as ev-msg :keys [event ?reply-fn]}]
    (match event
           [:cmd/percolate params] (put! register-percolation-chan params)
           [:cmd/query params]     (do (log/info "Received query:" params)
                                     (put! query-chan params))
           [:cmd/missing params]   (put! tweet-missing-chan params)
           [:chsk/ws-ping]         () ; currently just do nothing with ping (no logging either)
           :else                   (log/info "Unmatched event:" (pp/pprint event)))))

;; loop for matching connected clients with percolation matches and delivering those on the appropriate socket
(defn- run-percolation-matches-loop [percolation-matches-chan chsk-send! connected-uids]
  (go-loop []
           (let [[t matches] (<! percolation-matches-chan)]
             (doseq [uid (:any @connected-uids)]
               (when (contains? matches (get @a/subscriptions uid))
                 (chsk-send! uid [:tweet/new t]))))
           (recur)))

;; loop sending stats about number of connected users to all connected clients
(defn- run-users-count-loop [chsk-send! connected-uids]
  (go-loop []
           (<! (timeout 2000))
           (let [uids (:any @connected-uids)]
             (doseq [uid uids] (chsk-send! uid [:stats/users-count (count uids)])))
           (recur)))

;; loop sending stats about number of indexed tweets to all connected clients
(defn- run-tweet-stats-loop [chsk-send! connected-uids]
  (go-loop []
           (<! (timeout 3000))
           (let [uids (:any @connected-uids)
                 total-tweet-count (format "%,15d" (:count (p/total-tweet-count)))]
             (doseq [uid uids]
               (chsk-send! uid [:stats/total-tweet-count total-tweet-count])))
           (recur)))

;; loop for sending missing tweet back to client
(defn- run-missing-tweet-loop [missing-tweet-found-chan chsk-send!]
  (go-loop [] (let [msg (<! missing-tweet-found-chan)]
                (chsk-send! (:uid msg) [:tweet/missing-tweet (:tweet msg)]))
           (recur)))

;; loop for sending query result chunks back to client
(defn- run-query-results-loop [query-results-chan chsk-send!]
  (go-loop []
           (let [res (<! query-results-chan)]
             (chsk-send! (:uid res) [:tweet/prev-chunk (:result res)]))
           (recur)))

(defrecord Communicator [channels]
  component/Lifecycle
  (start [component]
         (log/info "Starting Communicator Component")
         (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
               (sente/make-channel-socket! {:packer packer :user-id-fn user-id-fn})
               event-msg-handler (make-event-msg-handler (:query channels)
                                                         (:tweet-missing channels)
                                                         (:register-percolation channels))
               chsk-router (sente/start-chsk-router! ch-recv event-msg-handler)]
           (run-percolation-matches-loop (:percolation-matches channels) send-fn connected-uids)
           (run-users-count-loop send-fn connected-uids)
           (run-tweet-stats-loop  send-fn connected-uids)
           (run-missing-tweet-loop (:missing-tweet-found channels) send-fn)
           (run-query-results-loop (:query-results channels) send-fn)
           (assoc component :ajax-post-fn ajax-post-fn :ajax-get-or-ws-handshake-fn ajax-get-or-ws-handshake-fn)))
  (stop [component]
        (log/info "Stopping Persistence Component"))) ;; TODO: teardown

(defn new-communicator [] (map->Communicator {}))
