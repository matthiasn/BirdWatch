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

;(js/setInterval #(update graph-with-legend) 5000)

