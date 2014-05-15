(ns cljs-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.ui :as ui]
            [cljs-om.wordcount :as wc]))

(enable-console-print!)

(defn sort-by [key-a key-b]
  "sorting function, initially comparing specified key and, if equal, favors higher ID"
  (fn [x y]
    (if (not (= (key-a x) (key-a y)))
      (> (key-a x) (key-a y))
      (> (key-b x) (key-b y)))))

(def initial-state {:count 0        :n 10
                    :tweets-map {}  :rt-since-startup {}
                    :search "*"     :stream nil
                    :sorted :by-followers
                    :by-followers (sorted-set-by (sort-by :followers_count :id))
                    :by-retweets (sorted-set-by (sort-by :retweet_count :id))
                    :by-rt-since-startup (sorted-set-by (sort-by :count :id))
                    :by-favorites (sorted-set-by (sort-by :favorite_count :id))
                    :by-id (sorted-set-by >)
                    :words {}
                    :words-sorted-by-count (sorted-set-by (sort-by :value :key))})

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

(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 (fn [e]) "#wordCloud"))

(def ts-elem (. js/document (getElementById "timeseries1")))
(def ts-w (aget ts-elem "offsetWidth"))

#_(def ts-chart (js/Rickshaw.Graph.
                      (clj->js {:element ts-elem
                                :renderer "bar"
                                :width ts-w
                                :height 100
                                :series [{:color "steelblue"
                                          :name "Tweets"
                                          :data [{:x 100 :y 10} {:x 100 :y 110}]}]})))

#_(Rickshaw.Graph.Axis.Time. (clj->js {:graph ts-chart}))
#_(.render ts-chart)
#_(def hover-detail (Rickshaw.Graph.HoverDetail. (clj->js {:graph ts-chart})))

(defn random-data [] (let [series-data (array (array))
      random (Rickshaw.Fixtures.RandomData. 150)]
         (dotimes [i 100] (.addData random series-data))
         series-data))

;; https://gist.github.com/msgodf/8495781
(def graph-with-legend
  (let [series-data (array (array))
        random (Rickshaw.Fixtures.RandomData. 150)]
    (dotimes [i 10] (.addData random series-data))
    (doto
      (Rickshaw.Graph. (clj->js {:element ts-elem
                                     :renderer "bar"
                                     :width ts-w
                                     :height 100
                                     :series [{:color "steelblue"
                                               :data (nth series-data 0)
                                               :name "Tweets"}]}))
      (.render))))

(defn update [chart]
  (aset graph-with-legend "series" "0" "data" (nth (random-data) 0))
  (.update chart))

(js/setInterval #(update graph-with-legend) 5000)

(defn add-tweet [tweet]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (swap! app-state assoc :count (inc (:count @app-state)))
  (add-to-tweets-map tweet)
  (add-rt-status tweet)
  (wc/process-tweet app-state (:text tweet))
  (swap! app-state assoc :by-followers (conj (:by-followers @app-state)
                                             {:followers_count (:followers_count (:user tweet))
                                              :id (:id_str tweet)}))
  (swap! app-state assoc :by-id (conj (:by-id @app-state) (:id_str tweet)))
  (. word-cloud (redraw (clj->js (take 250 (:words-sorted-by-count @app-state)))))
  (.updateBarchart js/BirdWatch (clj->js (take 25 (:words-sorted-by-count @app-state)))))

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
