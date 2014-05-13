(ns cljs-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.ui :as ui]))

(enable-console-print!)

(defn sort-by [key]
  "sorting function, initially comparing specified key and, if equal, favors higher ID"
  (fn [x y]
    (if (not (= (key x) (key y)))
      (> (key x) (key y))
      (> (:id x) (:id y)))))

(def initial-state {:count 0
                    :tweets-map {}
                    :rt-since-startup {}
                    :by-followers (sorted-set-by (sort-by :followers_count))
                    :by-retweets (sorted-set-by (sort-by :retweet_count))
                    :by-rt-since-startup (sorted-set-by (sort-by :count))
                    :by-favorites (sorted-set-by (sort-by :favorite_count))
                    :by-id (sorted-set-by >)
                    :n 10
                    :sorted :by-followers
                    :search "*"
                    :stream nil})

(def app-state (atom initial-state))

(om/root ui/tweets-view       app-state {:target (. js/document (getElementById "tweet-frame"))})
(om/root ui/count-view        app-state {:target (. js/document (getElementById "tweet-count"))})
(om/root ui/search-view       app-state {:target (. js/document (getElementById "search"))})
(om/root ui/sort-buttons-view app-state {:target (. js/document (getElementById "sort-buttons"))})

(defn add-to-tweets-map [tweet]
  (swap! app-state assoc-in [:tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn mod-sort-set [app-key fun set-key val rt]
  (swap! app-state assoc app-key (fun (app-key @app-state) {set-key val :id (:id_str rt)})))

(defn add-rt-status [tweet]
  "handles original, retweeted tweet"
  (if (contains? tweet :retweeted_status)
    (let [rt (:retweeted_status tweet)
          rt-id (keyword (:id_str rt))
          prev (rt-id (:tweets-map @app-state))
          prev-rt-count (rt-id (:rt-since-startup @app-state))]
      (if (not (nil? prev))
        (do
          (mod-sort-set :by-retweets disj :retweet_count (:retweet_count prev) rt)
          (mod-sort-set :by-favorites disj :favorite_count (:favorite_count prev) rt)))
      (if (not (nil? rt))
        (do
          (if (not (nil? prev-rt-count))
            (mod-sort-set :by-rt-since-startup disj :count prev-rt-count rt))
          (swap! app-state assoc-in [:rt-since-startup rt-id]
                 (inc (rt-id (:rt-since-startup @app-state))))
          (mod-sort-set :by-rt-since-startup conj :count (rt-id (:rt-since-startup @app-state)) rt)))
      (add-to-tweets-map rt)
      (mod-sort-set :by-retweets conj :retweet_count (:retweet_count rt) rt)
      (mod-sort-set :by-favorites conj :favorite_count (:favorite_count rt) rt))))

(defn add-tweet [tweet]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (swap! app-state assoc :count (inc (:count @app-state)))
  (add-to-tweets-map tweet)
  (add-rt-status tweet)
  (swap! app-state assoc :by-followers (conj (:by-followers @app-state)
                                             {:followers_count (:followers_count (:user tweet))
                                              :id (:id_str tweet)}))
  (swap! app-state assoc :by-id (conj (:by-id @app-state) (:id_str tweet))) )

(defn receive-sse [e]
  "callback, called for each item (tweet) received by SSE stream"
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (add-tweet tweet)))

(defn start-search [search]
  "initiate new search by starting SSE stream"
  (let [s (if (= search "") "*" search)]
    (if (not (nil? (:stream @app-state))) (.close (:stream @app-state)))
    (reset! app-state initial-state)
    (swap! app-state assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (swap! app-state assoc :stream (js/EventSource. (str "/tweetFeed?q=" s)))
    (.addEventListener (:stream @app-state) "message" (fn [e] (receive-sse e)) false)))

(start-search (subs (js/decodeURIComponent (aget js/window "location" "hash")) 2))
