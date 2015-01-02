(ns birdwatch.charts.cloud-chart
  (:require [birdwatch.util :as util]
            [birdwatch.wordcount :as wc]
            [birdwatch.state :as state]))

(enable-console-print!)

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (util/by-id "wordCloud"))
(def w (util/elem-width cloud-elem))
(def word-cloud
  (.WordCloud js/BirdWatch w (* w 0.7) 250 state/append-search-text cloud-elem))

(defn redraw []
  (.redraw word-cloud (clj->js (wc/get-words state/app 250))))
