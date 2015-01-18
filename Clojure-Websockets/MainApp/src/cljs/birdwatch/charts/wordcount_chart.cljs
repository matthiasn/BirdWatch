(ns birdwatch.charts.wordcount-chart
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [birdwatch.stats.wordcount :as wc]
            [birdwatch.stats.regression :as reg]
            [birdwatch.charts.shapes :as s]
            [reagent.core :as r :refer [atom]]
            [cljs.core.async :as async :refer [put! chan sub timeout]]))

(def items (atom []))
(def pos-trends (atom {}))
(def pos-items (atom {}))
(def ratio-trends (atom {}))
(def ratio-items (atom {}))
(def wc-elem (util/by-id "wordcount-barchart"))
(def wc-w (util/elem-width wc-elem))
(def text-defaults {:stroke "none" :fill "#DDD" :fontWeight 500 :fontSize "0.8em" :dy ".35em" :textAnchor "end"})
(def opts [[10 "10 tweets"][100 "100 tweets"][500 "500 tweets"][1000 "1000 tweets"]])

(defn- bar [text cnt y h w idx cmd-chan]
  (let [pos-slope (get @pos-trends text)
        ratio-slope (get @ratio-trends text)]
    [:g {:on-click #(put! cmd-chan [:append-search-text text])}
     [:text {:y (+ y 8) :x 138 :stroke "none" :fill "black" :dy ".35em" :textAnchor "end"} text]
     [s/arrow 146 y (cond (pos? pos-slope)   :UP       (neg? pos-slope )   :DOWN       :else :RIGHT)]
     [s/arrow 160 y (cond (pos? ratio-slope) :RIGHT-UP (neg? ratio-slope ) :RIGHT-DOWN :else :RIGHT)]
     [:rect {:y y :x 168 :height 15 :width w :stroke "white" :fill "#428bca"}]
     (if (> w 50)
       [:text (merge text-defaults {:y (+ y 8) :x (+ w 160)}) cnt]
       [:text (merge text-defaults {:y (+ y 8) :x (+ w 171) :fill "#666" :textAnchor "start"}) cnt])]))

(defn- wordcount-barchart [cmd-chan]
  (let [indexed @items
        mx (apply max (map (fn [[idx [k v]]] v) indexed))
        cnt (count indexed)]
    [:div
     [:svg {:width wc-w :height (+ (* cnt 15) 5)}
      [:g
       (for [[idx [text cnt]] indexed]
         ^{:key text} [bar text cnt (* idx 15) 15 (* (- wc-w 190) (/ cnt mx)) idx cmd-chan])
       [:line {:transform "translate(168, 0)" :y 0 :y2 (* cnt 15) :stroke "black"}]]]
     [:p.legend [:strong "1st trend indicator:"]
      " recent position changes"]
     [:p.legend [:strong "2nd trend indicator:"]
      " ratio change termCount / totalTermsCounted over last "
      [:select {:defaultValue 100}
       (for [[v t] opts] ^{:key v} [:option {:value v} t])]]]))

(defn- update-words
  "update wordcount chart"
  [words]
  (reset! items (vec (map-indexed vector words)))
  (let [items @items
        total-cnt (apply + (map (fn [[_[_ cnt]]] cnt) items))]
    (doseq [[idx [text cnt]] items]
      (swap! pos-items update-in [text] conj idx)
      (swap! ratio-items update-in [text] conj (/ total-cnt cnt))
      (swap! pos-trends assoc-in [text]
             (get (reg/linear-regression (take 3 (get @pos-items text))) 1))
      (swap! ratio-trends assoc-in [text]
             (get (reg/linear-regression (take 1000 (get @ratio-items text))) 1)))))

(defn mount-wc-chart
  "Mount wordcount bar chart and wire channels for incoming data and outgoing commands.
   The number of bars and the wait time until re-render is specified in the configration map."
  [state-pub cmd-chan {:keys [bars every-ms]}]
  (r/render-component [wordcount-barchart cmd-chan] wc-elem)
  (let [state-chan (chan)]
    (go-loop []
             (let [[_ state] (<! state-chan)]
               (update-words (wc/get-words2 state bars))
               (<! (timeout every-ms))
               (recur)))
    (sub state-pub :app-state state-chan)))
