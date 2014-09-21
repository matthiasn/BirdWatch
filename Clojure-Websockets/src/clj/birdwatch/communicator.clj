(ns birdwatch.communicator
  (:gen-class)
  (:require
   [clojure.core.match :as match :refer (match)]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [taoensso.sente     :as sente]
   [taoensso.sente.packers.transit :as sente-transit]
   [com.stuartsierra.component :as component]
   [clojure.core.async :as async :refer [<! >! put! timeout go-loop chan]]))

(def packer (sente-transit/get-flexi-packer :json)) ;; serialization format for client<->server comm

(defn- user-id-fn [req]
  "generates unique ID for request"
  (let [uid (str (java.util.UUID/randomUUID))]
    (log/info "Connected:" (:remote-addr req) uid)
    uid))

(defn- make-event-handler [query-chan tweet-missing-chan register-percolation-chan]
  "creates event handler function for the websocket connection"
  (fn [{:as ev-msg :keys [event ?reply-fn]}]
    (match event
           [:cmd/percolate params] (put! register-percolation-chan params)
           [:cmd/query params]     (put! query-chan params)
           [:cmd/missing params]   (put! tweet-missing-chan params)
           [:chsk/ws-ping]         () ; currently just do nothing with ping (no logging either)
           :else                   (log/debug "Unmatched event:" (pp/pprint event)))))

(defn- run-percolation-matches-loop [percolation-matches-chan chsk-send! connected-uids]
  "runs loop for delivering percolation matches to interested clients"
  (go-loop []
           (let [[t matches subscriptions] (<! percolation-matches-chan)]
             (doseq [uid (:any @connected-uids)]
               (when (contains? matches (get subscriptions uid))
                 (chsk-send! uid [:tweet/new t]))))
           (recur)))

(defn- run-users-count-loop [chsk-send! connected-uids]
  "runs loop for sending stats about number of connected users to all connected clients"
  (go-loop []
           (<! (timeout 2000))
           (let [uids (:any @connected-uids)]
             (doseq [uid uids] (chsk-send! uid [:stats/users-count (count uids)])))
           (recur)))

(defn- run-tweet-stats-loop [chsk-send! uids tweet-count-chan]
  "runs loop for sending stats about number of indexed tweets to all connected clients"
  (go-loop []
           (let [tweet-count (<! tweet-count-chan)]
             (doseq [uid (:any @uids)] (chsk-send! uid [:stats/total-tweet-count tweet-count])))
           (recur)))

(defn- run-missing-tweet-loop [missing-tweet-found-chan chsk-send!]
  "runs loop for sending missing tweet back to client"
  (go-loop [] (let [msg (<! missing-tweet-found-chan)]
                (chsk-send! (:uid msg) [:tweet/missing-tweet (:tweet msg)]))
           (recur)))

(defn- run-query-results-loop [query-results-chan chsk-send!]
  "runs loop for sending query result chunks back to client"
  (go-loop []
           (let [res (<! query-results-chan)]
             (chsk-send! (:uid res) [:tweet/prev-chunk (:result res)]))
           (recur)))

(defrecord Communicator [channels chsk-router]
  component/Lifecycle
  (start [component] (log/info "Starting Communicator Component")
         (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
               (sente/make-channel-socket! {:packer packer :user-id-fn user-id-fn})
               event-handler (make-event-handler (:query channels) (:tweet-missing channels) (:register-percolation channels))
               chsk-router (sente/start-chsk-router! ch-recv event-handler)]
           (run-percolation-matches-loop (:percolation-matches channels) send-fn connected-uids)
           (run-users-count-loop send-fn connected-uids)
           (run-tweet-stats-loop send-fn connected-uids (:tweet-count channels))
           (run-missing-tweet-loop (:missing-tweet-found channels) send-fn)
           (run-query-results-loop (:query-results channels) send-fn)
           (assoc component :ajax-post-fn ajax-post-fn
                            :ajax-get-or-ws-handshake-fn ajax-get-or-ws-handshake-fn
                            :chsk-router chsk-router)))
  (stop [component] (log/info "Stopping Communicator Component")
        (chsk-router) ;; stops router loop
        (assoc component :chsk-router nil)))

(defn new-communicator [] (map->Communicator {}))

(defrecord Communicator-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Communicator Channels Component")
         (assoc component
           :query (chan)
           :query-results (chan)
           :tweet-missing (chan)
           :missing-tweet-found (chan)
           :persistence (chan)
           :rt-persistence (chan)
           :tweet-count (chan)
           :register-percolation (chan)
           :percolation-matches (chan)))
  (stop [component] (log/info "Stop Communicator Channels Component")
        (assoc component :query nil :query-results nil :tweet-missing nil :missing-tweet-found nil
                         :persistence nil :rt-persistence nil :tweet-count nil)))

(defn new-communicator-channels [] (map->Communicator-Channels {}))
