(ns birdwatch.charts.cloud-chart
  (:require [birdwatch.util :as util]
            [birdwatch.wordcount :as wc]
            [cljs.core.async :as async :refer [put! chan pipe]]))

(enable-console-print!)

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (util/by-id "wordCloud"))
(def w (util/elem-width cloud-elem))

(def cmd-chan (chan))
(defn connect-cmd-chan [channel] (pipe cmd-chan channel))

(def word-cloud
  (.WordCloud js/BirdWatch w (* w 0.7) 250 #(put! cmd-chan [:append-search-text %]) cloud-elem))

(defn redraw [data] (.redraw word-cloud (clj->js data)))
