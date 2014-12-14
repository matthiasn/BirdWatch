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

(def arrows
  {:RIGHT      ["#428bca" "-600,100 200,100 -200,500 100,500 600,0 100,-500 -200,-500 200,-100 -600,-100 "]
   :UP         ["#45cc40" "100,600 100,-200 500,200 500,-100 0,-600 -500,-100 -500,200 -100,-200 -100,600"]
   :DOWN       ["#dc322f" "100,-600 100,200 500,-200 500,100 0,600 -500,100 -500,-200 -100,200 -100,-600"]
   :RIGHT-UP   ["#45cc40" "400,-400 -200,-400 -350,-250 125,-250 -400,275 -275,400 250,-125 250,350 400,200"]
   :RIGHT-DOWN ["#dc322f" "400,400 -200,400 -350,250 125,250 -400,-275 -275,-400 250,125 250,-350 400,-200"]})

(defn arrow [x y dir]
  (let [[color points] (dir arrows)
        arrowTrans (str "translate(" x ", " (+ y 7) ") scale(0.01) ")]
    [:polygon {:transform arrowTrans :stroke "none" :fill color :points points}]))

(defn bar [text cnt y h w idx]
  [:g
   [:text {:y (+ y 8) :x 138 :stroke "none" :fill "black" :dy ".35em" :textAnchor "end"} text]
   [arrow 146 y :RIGHT-UP]
   [arrow 160 y :RIGHT]
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

