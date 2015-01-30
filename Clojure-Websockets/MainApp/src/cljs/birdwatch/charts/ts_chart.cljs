(ns birdwatch.charts.ts-chart
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [birdwatch.stats.timeseries :as ts]
            [reagent.core :as r :refer [atom]]
            [cljs.core.async :as async :refer [chan sub timeout sliding-buffer]]))

(def bars-atom (atom []))
(def label (atom {}))

(def ts-elem (util/by-id "timeseries1"))
(def ts-w (aget ts-elem "offsetWidth"))
(def ts-h 100)

(defn bar
  "Renders a vertical bar. Enables showing a label when the mouse is
   positioned above the bar."
  [x y h w idx]
  [:rect {:x x :y (- y h) :fill "steelblue" :width w :height h
          :on-mouse-enter #(reset! label {:idx idx})
          :on-mouse-leave #(reset! label {})}])

(defn barchart
  "Renders a bar chart, making use of the bar function above. Returns
   entire SVG element."
  [indexed mx cnt w]
  (let [gap (/ (/ ts-w 20) cnt)]
    [:svg {:width ts-w :height ts-h}
     [:g
      (for [[idx [k v]] indexed]
        ^{:key k} [bar (* idx w) ts-h (* (/ v mx) ts-h) (- w gap) idx])]]))

(defn labels
  "Renders a label for a bar chart. Makes use of Rickshaw's CSS."
  [bars mx cnt w]
  (when-not (empty? @label)
    (let [idx (:idx @label)
          [k v] (get bars idx)
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
  []
  (let [bars @bars-atom
        indexed (vec (map-indexed vector bars))
        mx (apply max (map (fn [[k v]] v) bars))
        cnt (count bars)
        w (/ ts-w cnt)]
    [:div.rickshaw_graph
     [barchart indexed mx cnt w]
     [labels bars mx cnt w]]))

(defn mount-ts-chart
  "Mount timeseries chart and subscribe to specified pub for state changes.
   The wait time until re-render is specified in the configuration map."
  [state-pub {:keys [every-ms]}]
  (r/render-component [ts-chart] ts-elem)
  (let [state-chan (chan (sliding-buffer 1))]
    (go-loop []
             (let [[_ state] (<! state-chan)]
               (reset! bars-atom (ts/ts-data state))
               (<! (timeout every-ms))
               (recur)))
    (sub state-pub :app-state state-chan)))

