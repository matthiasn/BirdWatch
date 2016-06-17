(ns birdwatch.charts.cloud-chart
  (:require [birdwatch.util :as util]
            [birdwatch.stats.wordcount :as wc]))

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (util/by-id "wordCloud"))
(def w (util/elem-width cloud-elem))
(def n 250)

(defn cloud-chart-state-fn
  "Return clean initial component state atom."
  [put-fn]
  (let [on-click #(put-fn [:cmd/append-search-text %])
        word-cloud (.WordCloud js/BirdWatch w (* w 0.7) n on-click cloud-elem)]
    {:state (atom {:word-cloud word-cloud})}))

(defn state-pub-handler
  "Handle incoming messages: process / add to application state."
  [{:keys [cmp-state msg-payload]}]
  (.redraw (:word-cloud @cmp-state) (clj->js (wc/get-words msg-payload n))))

(defn cmp-map
  [cmp-id throttle-ms]
  {:cmp-id            cmp-id
   :state-fn          cloud-chart-state-fn
   :state-pub-handler state-pub-handler
   :opts              {:throttle-ms throttle-ms}})
