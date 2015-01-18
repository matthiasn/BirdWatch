(ns birdwatch.charts.cloud-chart
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [birdwatch.stats.wordcount :as wc]
            [cljs.core.async :as async :refer [put! chan sub sliding-buffer timeout]]))

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (util/by-id "wordCloud"))
(def w (util/elem-width cloud-elem))

(defn mount-wordcloud
  "Mount wordcloud and wire channels for incoming data and outgoing commands."
  [state-pub cmd-chan {:keys [n every-ms]}]
  (let [on-click #(put! cmd-chan [:append-search-text %])
        word-cloud (.WordCloud js/BirdWatch w (* w 0.7) 250 on-click cloud-elem)
        state-chan (chan (sliding-buffer 1))]
    (go-loop []
             (let [[_ state] (<! state-chan)]
               (.redraw word-cloud (clj->js (wc/get-words state n)))
               (<! (timeout every-ms))
               (recur)))
    (sub state-pub :app-state state-chan)))
