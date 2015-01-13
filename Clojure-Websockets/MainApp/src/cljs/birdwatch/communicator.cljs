(ns birdwatch.communicator
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [cljs.core.match :refer-macros [match]]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [taoensso.sente.packers.transit :as sente-transit]
            [cljs.core.async :as async :refer [<! chan put!]]))

(enable-console-print!)

(def packer
  "Defines our packing (serialization) format for client<->server comms."
  (sente-transit/get-flexi-packer :json))

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:packer packer :type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))  ; Watchable, read-only atom

(defn make-handler
  "Create handler function for messages from WebSocket connection, wire channels and the
   start-function to call when the socket is established."
  [start-fn data-chan stats-chan]
  (fn [{:keys [event]}]
    (match event
           [:chsk/state {:first-open? true}] (do (print "Socket established!") (start-fn))
           [:chsk/recv  payload]
           (let [[msg-type msg] payload]
             (case (keyword (namespace msg-type))
               :tweet   (put! data-chan payload)
               :stats   (put! stats-chan payload)
               :default (print "unmatched message" payload)))
           :else (print "Unmatched event: %s" event))))

(defn start-router
  "Start router after creating the handler with the provided start-function and channels."
  [start-fn data-chan stats-chan]
  (let [handler (make-handler start-fn data-chan stats-chan)]
    (defonce chsk-router (sente/start-chsk-router! ch-chsk handler))))

(defn query-loop
  "Take command / query message off of channel, enrich payload with :uid of current
   WebSocket connection and send to server. Channel is injected when loop is started."
  [channel]
  (go-loop []
           (let [[cmd-type payload] (<! channel)]
             (chsk-send! [cmd-type (assoc payload :uid (:uid @chsk-state))])
             (recur))))




