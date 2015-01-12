(ns birdwatch.communicator
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [birdwatch.channels :as c]
            [birdwatch.util :as util]
            [birdwatch.state :as state]
            [cljs.core.match :refer-macros [match]]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [taoensso.sente.packers.transit :as sente-transit]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

(enable-console-print!)

(def packer
  "Defines our packing (serialization) format for client<->server comms."
  (sente-transit/get-flexi-packer :json))

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:packer packer :type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))  ; Watchable, read-only atom

(defn query-string
  "format and modify query string"
  []
  {:query_string {:default_field "text"
                  :default_operator "AND"
                  :query (str "(" (:search @state/app) ") AND lang:en")}})

(defn start-percolator
  "trigger starting of percolation matching of new tweets"
  []
  (chsk-send! [:cmd/percolate {:query (query-string)
                               :uid (:uid @chsk-state)}]))

(def prev-chunks-loaded (atom 0))

(defn load-prev
  "load previous tweets matching the current search"
  []
  (let [chunks-to-load 10
        chunk-size 500]
    (when (< @prev-chunks-loaded chunks-to-load)
      (chsk-send! [:cmd/query {:query (query-string)
                               :n chunk-size
                               :uid (:uid @chsk-state)
                               :from (* chunk-size @prev-chunks-loaded)}])
      (swap! prev-chunks-loaded inc))))

(defn start-search
  "initiate new search"
  []
  (let [search (:search-text @state/app)
        s (if (= search "") "*" search)]
    (reset! state/app (state/initial-state))
    (reset! prev-chunks-loaded 0)
    (swap! state/app assoc :search-text search)
    (swap! state/app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (start-percolator)
    (dotimes [n 4] (load-prev))))

(defn- event-handler [{:keys [event]}]
  (match event
         [:chsk/state {:first-open? true}] (do (print "Socket established!") (start-search))
         [:chsk/recv  payload]
         (let [[msg-type msg] payload]
           (case (keyword (namespace msg-type))
             :stats   (put! c/stats-chan payload)
             :tweet   (put! c/data-chan payload)
             :default (print "unmatched message" payload))
           (match [msg-type msg] [:tweet/prev-chunk prev-chunk] (load-prev) :else ()))
         :else (print "Unmatched event: %s" event)))

(defonce chsk-router (sente/start-chsk-router! ch-chsk event-handler))

; loop for sending messages about missing tweet to server
(go-loop [] (let [tid (<! c/tweet-missing-chan)]
              (chsk-send! [:cmd/missing {:id_str tid :uid (:uid @chsk-state)}])
              (recur)))
