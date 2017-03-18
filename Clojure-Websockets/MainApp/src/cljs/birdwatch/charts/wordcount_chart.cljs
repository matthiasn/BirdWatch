(ns birdwatch.charts.wordcount-chart
  (:require [birdwatch.util :as util]
            [birdwatch.stats.wordcount :as wc]
            [birdwatch.stats.regression :as reg]
            [birdwatch.charts.shapes :as s]
            [re-frame.core :refer [subscribe]]
            [reagent.ratom :refer-macros [reaction]]
            [reagent.core :as r :refer [atom]]
            [matthiasn.systems-toolbox.component :as st]))

(def items (atom []))
(def pos-trends (atom {}))
(def pos-items (atom {}))
(def ratio-trends (atom {}))
(def ratio-items (atom {}))

(def text-defaults {:stroke     "none"
                    :fill       "#DDD"
                    :fontWeight 500
                    :fontSize   "0.8em"
                    :dy         ".35em"
                    :textAnchor "end"})

(def opts [[10 "10 tweets"] [100 "100 tweets"] [500 "500 tweets"]
           [1000 "1000 tweets"]])

(defn bar [text cnt y w put-fn]
  (let [pos-slope (get @pos-trends text)
        ratio-slope (get @ratio-trends text)]
    [:g {:on-click #(put-fn [:cmd/append-search-text text])}
     [:text {:y          (+ y 8) :x 138 :stroke "none" :fill "black" :dy ".35em"
             :textAnchor "end"} text]
     [s/arrow 146 y (cond
                      (pos? pos-slope) :UP
                      (neg? pos-slope) :DOWN
                      :else :RIGHT)]
     [s/arrow 160 y (cond
                      (pos? ratio-slope) :RIGHT-UP
                      (neg? ratio-slope) :RIGHT-DOWN
                      :else :RIGHT)]
     [:rect {:y y :x 168 :height 15 :width w :stroke "white" :fill "#428bca"}]
     (if (> w 50)
       [:text (merge text-defaults {:y (+ y 8)
                                    :x (+ w 160)}) cnt]
       [:text (merge text-defaults {:y          (+ y 8)
                                    :x          (+ w 171)
                                    :fill       "#666"
                                    :textAnchor "start"}) cnt])]))

(defn update-words
  "update wordcount chart"
  [words]
  (reset! items (vec (map-indexed vector words)))
  (let [items @items
        total-cnt (apply + (map (fn [[_ [_ cnt]]] cnt) items))]
    (doseq [[idx [text cnt]] items]
      (swap! pos-items update-in [text] conj idx)
      (swap! ratio-items update-in [text] conj (/ total-cnt cnt))
      (swap! pos-trends assoc-in [text]
             (get (reg/linear-regression (take 3 (get @pos-items text))) 1))
      (swap! ratio-trends assoc-in [text]
             (get (reg/linear-regression (take 1000 (get @ratio-items text)))
                  1)))))

(defn wordcount-barchart
  [put-fn]
  (let [word-counts (subscribe [:words-counts])
        words (reaction (vec (take 25 @word-counts)))
        indexed (reaction (vec (map-indexed vector @words)))
        mx (reaction (apply max (map second @words)))
        cnt (reaction (count @indexed))
        last-calc (atom 0)]
    (fn wordcount-render [put-fn]
      (when (> (- (st/now) @last-calc) 2000)
        (time (update-words @words))
        (reset! last-calc (st/now)))
      (let [mx @mx
            wc-w (util/elem-width (r/dom-node (r/current-component)))]
        (when (pos? mx)
          [:div#wordcount-barchart.barchart
           [:svg {:width wc-w :height (+ (* @cnt 15) 5)}
            [:g
             (for [[idx [text cnt]] @indexed]
               ^{:key text}
               [bar text cnt (* idx 15) (* (- wc-w 190) (/ cnt mx)) put-fn])
             [:line
              {:transform "translate(168, 0)" :y 0 :y2 (* @cnt 15) :stroke "black"}]]]
           [:p.legend [:strong "1st trend indicator:"]
            " recent position changes"]
           [:p.legend [:strong "2nd trend indicator:"]
            " ratio change termCount / totalTermsCounted over last "
            [:select {:defaultValue 100}
             (for [[v t] opts] ^{:key v} [:option {:value v} t])]]])))))

