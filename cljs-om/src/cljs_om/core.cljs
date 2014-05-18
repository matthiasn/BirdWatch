(ns cljs-om.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.ajax :as ajax]
            [cljs-om.ui :as ui]
            [goog.events :as events]
            [cljs-om.wordcount :as wc]
            [cljs.core.async :as async
             :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def app-state (atom (util/initial-state)))

(om/root ui/tweets-view       app-state {:target (. js/document (getElementById "tweet-frame"))})
(om/root ui/count-view        app-state {:target (. js/document (getElementById "tweet-count"))})
(om/root ui/search-view       app-state {:target (. js/document (getElementById "search"))})
(om/root ui/sort-buttons-view app-state {:target (. js/document (getElementById "sort-buttons"))})

(defn add-to-tweets-map [tweets-map tweet]
  (swap! app-state assoc-in [tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn mod-sort-set [app-key fun set-key val rt]
  (swap! app-state assoc app-key (fun (app-key @app-state) {set-key val :id (:id_str rt)})))

(defn add-rt-status [tweet]
  "handles original, retweeted tweet"
  (if (contains? tweet :retweeted_status)
    (let [state @app-state
          rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          prev (rt-id (:retweets state))
          prev-rt-count (rt-id (:rt-since-startup state))]
      (when (not (nil? prev))
          (mod-sort-set :by-retweets disj :retweet_count (:retweet_count prev) rt)
          (mod-sort-set :by-favorites disj :favorite_count (:favorite_count prev) rt))
      (if (not (nil? prev-rt-count))
        (mod-sort-set :by-rt-since-startup disj :count prev-rt-count rt))
      (swap! app-state assoc-in [:rt-since-startup rt-id]
             (inc prev-rt-count))
      (mod-sort-set :by-rt-since-startup conj :count (inc prev-rt-count) rt)
      (if (> (:retweet_count rt) (:retweet_count prev))
        (swap! app-state assoc-in [:retweets (keyword (:id_str rt))] (util/format-tweet rt))
        (swap! app-state assoc-in [:retweets :latest] rt)
        )
      (mod-sort-set :by-retweets conj :retweet_count (:retweet_count rt) rt)
      (mod-sort-set :by-favorites conj :favorite_count (:favorite_count rt) rt))))

(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 (fn [e]) "#wordCloud"))

(js/setInterval #(ts/update ts/graph-with-legend) 5000)

(defn add-tweet [tweet]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (let [state @app-state]
    (swap! app-state assoc :count (inc (:count state)))
    (add-to-tweets-map :tweets-map tweet)
    (add-rt-status tweet)
    (wc/process-tweet app-state (:text tweet))
    (swap! app-state assoc :by-followers (conj (:by-followers state)
                                               {:followers_count (:followers_count (:user tweet))
                                                :id (:id_str tweet)}))
    (swap! app-state assoc :by-id (conj (:by-id state) (:id_str tweet)))
    (. word-cloud (redraw (clj->js (take 250 (:words-sorted-by-count state)))))
   ; (.updateBarchart js/BirdWatch (clj->js (take 25 (:words-sorted-by-count state))))
    ))

(def tweets-chan (chan 100000))
(def prev-tweets-chan (chan 100000))
(def combined-tweets-chan (chan 1))


(go-loop []
         (put! combined-tweets-chan (<! tweets-chan))
         (<! (timeout 0))
         (recur))

(go-loop []
         (put! combined-tweets-chan (<! prev-tweets-chan))
         (<! (timeout 10))
         (recur))

(go-loop []
         (add-tweet (<! combined-tweets-chan))
         (recur))

(def ajax-results-chan (chan))
(go-loop []
         (let [parsed (js->clj (JSON/parse (<! ajax-results-chan)) :keywordize-keys true)]
           (doseq [t (:hits (:hits parsed))]
             (put! prev-tweets-chan (:_source t)))
           (<! (timeout 1000))
           (recur)))

(defn receive-sse [e]
  "callback, called for each item (tweet) received by SSE stream"
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (put! tweets-chan tweet)))

(defn start-search [search]
  "initiate new search by starting SSE stream"
  (let [s (if (= search "") "*" search)]
    (if (not (nil? (:stream @app-state))) (.close (:stream @app-state)))
    (reset! app-state (util/initial-state))
    (swap! app-state assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (swap! app-state assoc :stream (js/EventSource. (str "/tweetFeed?q=" s)))
    (.addEventListener (:stream @app-state) "message" (fn [e] (receive-sse e)) false)
    (ajax/prev-search "*" 500 0 ajax-results-chan)
    (ajax/prev-search "*" 500 500 ajax-results-chan)
    (ajax/prev-search "*" 500 1000 ajax-results-chan)
    (ajax/prev-search "*" 500 1500 ajax-results-chan)
    (ajax/prev-search "*" 500 2000 ajax-results-chan)
    ))

(start-search (util/search-hash))

