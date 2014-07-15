(ns cljs-om.timeseries
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
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

(defn random-data []
  (let [series-data (array (array))
        random (Rickshaw.Fixtures.RandomData. 150)]
    (dotimes [i 100] (.addData random series-data))
    series-data))

;; https://gist.github.com/msgodf/8495781
(def graph-with-legend
  (doto
    (Rickshaw.Graph. (clj->js {:element ts-elem
                               :renderer "bar"
                               :width ts-w
                               :height 100
                               :series [{:color "steelblue"
                                         :data (nth (random-data) 0)
                                         :name "Tweets"}]}))
    (.render)))

(defn floor [x] (Math/floor x))

(defn date-round [s]
  "return function that rounds the provided seconds since epoch down to the nearest time interval s
   e.g. (date-round 60) creates a function that takes seconds t and rounds them to the nearest minute"
  (fn [t] (* s (floor (/ t s)))))

(def m 60)
(def hr (* 60 m))
(def day (* 24 hr))

(defn grouper [newest oldest]
  (cond
   (> (- newest oldest) (* 20 day)) (date-round (* 24 60 60)) ;round by nearest day
   (> (- newest oldest) (* 5 day))  (date-round (* 6 60 60))  ;round by nearest quarter day
   (> (- newest oldest) (* 10 hr))  (date-round (* 60 60))    ;round by nearest hour
   (> (- newest oldest) (* 2 hr))   (date-round (* 15 60))    ;round by nearest quarter hour
   :else                            (date-round 60)))         ;round by nearest minute

(defn ts-data [app]
  (let [state @app
        by-id (util/tweets-by-order :tweets-map :by-id)
        tweets-by-id (by-id state 10000)
        oldest (js/moment. (:created_at (last tweets-by-id)))
        newest (js/moment. (:created_at (first tweets-by-id)))
        rounder (grouper (.unix newest) (.unix oldest))
        ]
    (print "oldest" (.toLocaleString oldest))
    (print "oldest             unix" (.unix oldest))
    (print "oldest min rounded unix" (round-min (.unix oldest)))
    (print "oldest min rounded parsed" (.toLocaleString (.unix js/moment (round-min (.unix oldest)))))
    (print "oldest hr  rounded unix" (round-hr (.unix oldest)))
    (print "oldest hr  rounded parsed" (.toLocaleString (.unix js/moment (round-hr (.unix oldest)))))
    (print "oldest day rounded unix" (round-day (.unix oldest)))
    (print "oldest day rounded parsed" (.toLocaleString (.unix js/moment (round-day (.unix oldest)))))
    (print "oldest     rounded unix" (rounder (.unix oldest)))
    (print "oldest     rounded parsed" (.toLocaleString (.unix js/moment (rounder (.unix oldest)))))
    (print "---")
    (print "newest" (.toLocaleString newest))
    (print "newest" (.unix newest))
    (print "---")
    ))

(defn update [chart app]
  (ts-data app)
  (aset graph-with-legend "series" "0" "data" (nth (random-data) 0))
  (.update chart))
