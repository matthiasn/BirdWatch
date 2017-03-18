(ns birdwatch.charts.cloud-chart
  (:require [birdwatch.util :as util]
            [re-frame.core :refer [subscribe]]
            [birdwatch.stats.wordcount :as wc]
            [reagent.core :as r]))

(def n 250)

(defn inner-cloud-view [_ put-fn]
  "Renders div with id wordCloud, which is then used by D3 word cloud.
   When data updates, calls redraw on word cloud."
  (let [on-click #(put-fn [:cmd/append-search-text %])
        local (atom {:word-cloud nil})
        render-fn (fn [] [:div#wordCloud.cloud])
        did-mount (fn []
                    (let [elem (util/by-id "wordCloud")
                          w (util/elem-width elem)
                          c (.WordCloud js/BirdWatch w (* w 0.7) n on-click elem)]
                      (swap! local assoc-in [:word-cloud] c)))
        did-update (fn [this]
                     (let [[_ data] (r/argv this)
                           words (wc/get-words data n)]
                       (.redraw (:word-cloud @local) (clj->js words))))]
    (r/create-class
      {:reagent-render       render-fn
       :component-did-mount  did-mount
       :component-did-update did-update
       :display-name         "cloud-chart"})))

(defn cloud-view
  "Subscribe to words and re-render inner view when data changes.
   Adapted from: http://zachcp.org/blog/2015/reagent-d3/"
  [_put-fn]
  (let [words (subscribe [:words-counts])]
    (fn [put-fn]
      [inner-cloud-view @words put-fn])))

