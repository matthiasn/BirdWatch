(ns birdwatch.charts.ts-chart
  (:require [birdwatch.util :as util]
            [birdwatch.stats.timeseries :as ts]
            [reagent.core :as r :refer [atom]]
            [matthiasn.systems-toolbox.component :as comp]))

(def ts-elem (util/by-id "timeseries1"))
(def ts-w (aget ts-elem "offsetWidth"))
(def ts-h 100)

(defn bar
  "Renders a vertical bar. Enables showing a label when the mouse is
   positioned above the bar."
  [x y h w idx app]
  [:rect {:x x :y (- y h) :fill "steelblue" :width w :height h
          :on-mouse-enter #(swap! app assoc :label {:idx idx})
          :on-mouse-leave #(swap! app assoc :label {})}])

(defn barchart
  "Renders a bar chart, making use of the bar function above. Returns
   entire SVG element."
  [indexed mx cnt w app]
  (let [gap (/ (/ ts-w 20) cnt)]
    [:svg {:width ts-w :height ts-h}
     [:g
      (for [[idx [k v]] indexed]
        ^{:key k} [bar (* idx w) ts-h (* (/ v mx) ts-h) (- w gap) idx app])]]))

(defn labels
  "Renders a label for a bar chart. Makes use of Rickshaws CSS."
  [bars mx cnt w label]
  (when-not (empty? label)
    (let [idx (:idx label)
          [k v] (get (vec bars) idx)
          top (- ts-h (* (/ v mx) ts-h))
          lr (if (< (/ idx cnt) 0.6) "left" "right")]
      [:div.detail {:style {:left (* idx w)}}
       [:div.x_label {:class lr} (.toString (.unix js/moment k))]
       [:div.item.active {:class lr :style {:top top}} "Tweets: " v]
       [:div.dot.active {:style {:top top :border-color "steelblue"}}]])))

(defn ts-chart
  "Renders time series chart consisting of SVG for the bars and a label.
   Appearance is similar to the Rickshaw timeseries chart, which this
   component replaced, except for the CSS."
  [app]
  (let [bars (:bars @app)
        indexed (vec (map-indexed vector bars))
        mx (apply max (map (fn [[_ v]] v) bars))
        cnt (count bars)
        w (/ ts-w cnt)]
    [:div.rickshaw_graph
     [barchart indexed mx cnt w app]
     [labels bars mx cnt w (:label @app)]]))

(defn mk-state
  "Return clean initial component state atom."
  [_]
  (let [app (atom {:bars [] :label {}})]
    (r/render-component [ts-chart app] ts-elem)
    app))

(defn state-pub-handler
  "Handle incoming messages: process / add to application state."
  [app _ [_ state-snapshot]]
  (swap! app assoc :bars (ts/ts-data state-snapshot)))

(defn component
  [cmp-id throttle-ms]
  (comp/make-component cmp-id mk-state nil state-pub-handler {:throttle-ms throttle-ms}))
