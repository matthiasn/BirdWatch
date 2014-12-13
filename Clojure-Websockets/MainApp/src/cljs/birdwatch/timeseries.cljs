(ns birdwatch.timeseries
  (:require [birdwatch.util :as util]
            [reagent.core :as r :refer [atom]]))

(enable-console-print!)
;(.log js/console (pr-str mx))

(defn by-id [id] (.getElementById js/document id))

(def bars (atom []))

(defn bar [{:keys [x y h w]}]
  [:rect {:x x :y (- y h) :fill "steelblue" :width w :height h}])

(def ts-elem2 (by-id "timeseries2"))
(def ts-w2 (aget ts-elem2 "offsetWidth"))
(def ts-h 100)

(defn main []
  [:svg {:width ts-w2 :height ts-h}
   [:g
    (doall (for [[idx itm] (map-indexed vector @bars)]
             (let [bars @bars
                   mx (apply max bars)
                   cnt (count bars)
                   w (/ ts-w2 cnt)
                   gap (/ (/ ts-w2 20) cnt)]
               [bar {:x (* idx w)
                     :y ts-h
                     :h (* (/ itm mx) ts-h)
                     :w (- w gap)}])))]])

(defn run []
  (r/render-component [main] ts-elem2))

(def ts-elem (by-id "timeseries1"))
(def ts-w (aget ts-elem "offsetWidth"))

(def graph-with-legend
  (doto
    (Rickshaw.Graph. (clj->js {:element ts-elem :renderer "bar"
                               :width ts-w      :height 100
                               :series [{:color "steelblue" :data [{:x 1 :y 0}] :name "Tweets"}]}))
    (.render)))

(Rickshaw.Graph.Axis.Time. (clj->js {:graph graph-with-legend}))
(def hover-detail (Rickshaw.Graph.HoverDetail. (clj->js {:graph graph-with-legend :yFormatter #(Math/round %)})))

(defn date-round
  "return function that rounds the provided seconds since epoch down to the nearest time interval s
  e.g. (date-round 60) creates a function that takes seconds t and rounds them to the nearest minute"
  [s]
  (fn [t] (* s (Math/floor (/ t s)))))

(def m 60)
(def qhr (* 15 m))
(def hr (* 60 m))
(def qday (* 6 hr))
(def day (* 24 hr))

(defn grouping-interval
  "determine duration of individual intervals (bars) depending on duration of timespan between newest and oldest"
  [newest oldest]
  (cond
   (> (- newest oldest) (* 20 day)) day  ;round by nearest day
   (> (- newest oldest) (* 5 day))  qday ;round by nearest quarter day
   (> (- newest oldest) (* 20 hr))  hr   ;round by nearest hour
   (> (- newest oldest) (* 4 hr))   qhr  ;round by nearest quarter hour
   :else                            m))  ;round by nearest minute

(defn empty-ts-map
  "generates map with all rounded intervals between oldest and newest, initialized to a count of 0"
  [newest oldest interval]
  (let [rounder (date-round interval)
        values (range (rounder oldest) (rounder newest) interval)]
    (apply sorted-map-by < (flatten [(interpose 0 values) 0]))))

(defn count-into-map
  "increment count for time interval"
  [ts-map k]
  (update-in ts-map [k] inc))

(defn tweet-ts
  "retrieve seconds since epoch from tweet using moment.js"
  [t]
  (.unix (js/moment. (:created_at t))))

(defn ts-data
  "perform time series analysis by counting tweets in even intervals"
  [app]
  (let [tweets-by-id ((util/tweets-by-order :tweets-map :by-id) @app 10000)]
    (if (> (count tweets-by-id) 100)
      (let [oldest (tweet-ts (last tweets-by-id))
            newest (tweet-ts (first tweets-by-id))
            interval (grouping-interval newest oldest)
            rounder (date-round interval)]
        (reduce count-into-map
                (empty-ts-map newest oldest interval)
                (map #(rounder (tweet-ts %)) tweets-by-id)))
      (empty-ts-map 0 0 9))))

(defn ts-map-vec
  "creates a vector of maps required by Rickshaw chart"
  [ts-map]
  (map #(zipmap [:x :y] %) (vec ts-map)))

(defn update-ts
  "update time series chart"
  [chart app]
  (aset graph-with-legend "series" "0" "data" (clj->js (ts-map-vec (ts-data app))))

  (reset! bars (map (fn [[k v]] v) (vec (ts-data app))))

  ;(.log js/console (pr-str (ts-data app)))

  (.update chart))
