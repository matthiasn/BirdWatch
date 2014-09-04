(ns birdwatch.tweets
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]]
                   [cljs.core.match.macros :refer (match)])
  (:require [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.wordcount :as wc]
            [birdwatch.state :as state]
            [cljs.core.match]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

(enable-console-print!)

(defn add-to-tweets-map [app tweets-map tweet]
  "adds tweet to tweets-map"
  (swap! app
         assoc-in [tweets-map (keyword (:id_str tweet))]
         ;(util/format-tweet tweet)
         tweet))

(defn swap-when-larger [app priority-map rt-id n]
  "swaps item in priority-map when new value is larger than old value"
  (when (> n (rt-id (priority-map @app))) (util/swap-pmap app priority-map rt-id n)))

(defn add-rt-status [app tweet]
  "handles original, retweeted tweet"
  (if (contains? tweet :retweeted_status)
    (let [state @app
          rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)]
      (swap-when-larger app :by-retweets rt-id rt-count)
      (swap-when-larger app :by-favorites rt-id (:favorite_count rt))
      (util/swap-pmap app :by-rt-since-startup rt-id (inc (get (:by-rt-since-startup state) rt-id 0)))
      (when (> rt-count (:retweet_count (rt-id (:retweets state)))) (add-to-tweets-map app :retweets rt)))))

(defn add-tweet [tweet app word-cloud]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (let [state @app]
    (swap! app assoc :count (inc (:count state)))
    (add-to-tweets-map app :tweets-map tweet)
    (util/swap-pmap app :by-followers (keyword (:id_str tweet)) (:followers_count (:user tweet)))
    (util/swap-pmap app :by-id (keyword (:id_str tweet)) (:id tweet))
    (add-rt-status app tweet)
    (wc/process-tweet app (:text tweet))
    (. word-cloud (redraw (clj->js (wc/get-words app 250))))))

;;; Channels for handling information flow in the application.
(def tweets-chan (chan 1))
(def prev-tweets-chan (chan 10000))

(go-loop []
 (let [[t chan] (alts! [tweets-chan prev-tweets-chan] {:priority true})]
   (add-tweet t state/app birdwatch.core/word-cloud)
   (recur)))

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:type :auto})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))  ; Watchable, read-only atom

(def prev-chunks-chan (chan))
(go-loop []
         (let [chunk (<! prev-chunks-chan)]
           (doseq [t chunk]
             (when (= 0 (mod (:_id t) 100)) (<! (timeout 0)))
             (put! prev-tweets-chan (:_source t)))
           (<! (timeout 1500))
           (recur)))

(def prev-chunks-loaded (atom 0))
(def chunks-to-load 10)

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
  (when (< @prev-chunks-loaded chunks-to-load)
    (chsk-send! [:cmd/query {:query (query-string)
                             :n 200
                             :uid (:uid @chsk-state)
                             :from (* 200 @prev-chunks-loaded)}])
    (swap! prev-chunks-loaded inc)))

(defn start-search []
  "initiate new search by starting SSE stream"
  (let [search (:search-text @state/app)
        s (if (= search "") "*" search)]
    (reset! state/app (util/initial-state))
    (reset! prev-chunks-loaded 0)
    (swap! state/app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (start-percolator)
    (load-prev)))

(defn- event-handler [[id data :as ev] _]
  (match [id data]

         [:chsk/state {:first-open? true}]
         (do
           (print "Channel socket successfully established!")
           (start-search))

         [:chsk/state new-state]
         (print "Chsk state change:" new-state)

         [:chsk/recv  payload]
         (let [[msg-type msg] payload]
           (match [msg-type msg]

                  [:tweet/new t]
                  (put! tweets-chan t)

                  [:tweet/prev-chunk chunk]
                  (do
                    (put! prev-chunks-chan chunk)
                    (load-prev))

                  [:stats/users-count uc]
                  (swap! state/app assoc :users-count uc)

                  [:stats/total-tweet-count ttc]
                  (swap! state/app assoc :total-tweet-count ttc) ))

         :else (print "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))
