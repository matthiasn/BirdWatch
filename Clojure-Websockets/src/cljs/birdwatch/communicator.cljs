(ns birdwatch.communicator
  (:require-macros [cljs.core.match.macros :refer (match)])
  (:require [birdwatch.channels :as c]
            [birdwatch.util :as util]
            [birdwatch.state :as state]
            [cljs.core.match]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))  ; Watchable, read-only atom

(def prev-chunks-loaded (atom 0))

(defn query-string []
  "format and modify query string"
  {:query_string {:default_field "text"
                  :default_operator "AND"
                  :query (str "(" (:search @state/app) ") AND lang:en")}})

(defn start-percolator []
  "trigger starting of percolation matching of new tweets"
  (chsk-send! [:cmd/percolate {:query (query-string)
                               :uid (:uid @chsk-state)}]))

(defn load-prev []
  "load previous tweets matching the current search"
  (let [chunks-to-load 10
        chunk-size 500]
    (when (< @prev-chunks-loaded chunks-to-load)
      (chsk-send! [:cmd/query {:query (query-string)
                               :n chunk-size
                               :uid (:uid @chsk-state)
                               :from (* chunk-size @prev-chunks-loaded)}])
      (swap! prev-chunks-loaded inc))))

(defn start-search []
  "initiate new search by starting SSE stream"
  (let [search (:search-text @state/app)
        s (if (= search "") "*" search)]
    (reset! state/app (state/initial-state))
    (reset! prev-chunks-loaded 0)
    (swap! state/app assoc :search-text search)
    (swap! state/app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (start-percolator)
    (load-prev)))

(defn- event-handler [[id data :as ev] _]
  (match [id data]
         [:chsk/state {:first-open? true}] (do (print "Socket established!") (start-search))
         [:chsk/state new-state]           (print "Chsk state change:" new-state)
         [:chsk/recv  payload]
         (let [[msg-type msg] payload]
           (match [msg-type msg]
                  [:tweet/new             tweet] (put! c/tweets-chan tweet)
                  [:tweet/prev-chunk prev-chunk] (do (put! c/prev-chunks-chan prev-chunk) (load-prev))
                  [:stats/users-count        uc] (put! c/user-count-chan uc)
                  [:stats/total-tweet-count ttc] (put! c/total-tweets-count-chan ttc)))
         :else (print "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))
