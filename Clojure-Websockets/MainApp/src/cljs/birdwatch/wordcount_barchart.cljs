(ns birdwatch.wordcount-barchart
  (:require [birdwatch.util :as util]
            [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(def items (atom []))
(def ts-elem (util/by-id "wordcount-barchart"))
(def ts-w (aget ts-elem "offsetWidth"))
(def text-defaults {:stroke "none" :fill "#DDD" :fontWeight 500 :fontSize "0.8em" :dy ".35em" :textAnchor "end"})

(def opts1 [[10 "10 seconds"][30 "30 seconds"][60 "1 minute"][300 "5 minutes"][600 "10 minutes"]])
(def opts2 [[10 "10 tweets"][100 "100 tweets"][500 "500 tweets"][1000 "1000 tweets"]])

(defn bar [text cnt y h w idx]
  [:g
   [:text {:y (+ y 8) :x 138 :stroke "none" :fill "black" :dy ".35em" :textAnchor "end"} text]
   [:rect {:y y :x 168 :height 15 :width w :stroke "white" :fill "#428bca"}]
   (if (> w 50)
     [:text (merge text-defaults {:y (+ y 8) :x (+ w 160)}) cnt]
     [:text (merge text-defaults {:y (+ y 8) :x (+ w 171) :fill "#666" :textAnchor "start"}) cnt])])

(defn wordcount-barchart []
  (let [items @items
        indexed (map-indexed vector items)
        mx (apply max (map (fn [[k v]] v) items))
        cnt (count items)]
    [:div
     [:svg {:width ts-w :height (+ (* cnt 15) 5)}
      [:g
        (doall (for [[idx [text cnt]] indexed]
                 [bar text cnt (* idx 15) 15 (* (- ts-w 190) (/ cnt mx)) idx]))
       [:line {:transform "translate(168, 0)" :y 0 :y2 (* cnt 15) :stroke "black"}]]]
     [:p.legend [:strong "1st trend indicator:"] " position changes in last "
      [:select {:defaultValue 300000}
       (for [[v t] opts1] [:option {:value (* v 1000)} t])]]
     [:p.legend [:strong "2nd trend indicator:"] " ratio change termCount / totalTermsCounted over last "
      [:select {:defaultValue 100}
       (for [[v t] opts2] [:option {:value v} t])]]]))

(r/render-component [wordcount-barchart] ts-elem)

(defn update-words
  "update wordcount chart"
  [words]
  (reset! items words))

