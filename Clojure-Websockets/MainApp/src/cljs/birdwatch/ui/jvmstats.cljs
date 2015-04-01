(ns birdwatch.ui.jvmstats
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.ui.util :as util]
            [reagent.core :as r :refer [atom]]
            [cljs.core.match :refer-macros [match]]
            [matthiasn.systems-toolbox.component :as comp]
            [goog.string :as gstring]
            [goog.string.format]))

(defn bar
  "Renders a vertical bar."
  [x y h w]
  [:rect {:x x :y (- y h) :fill "steelblue" :width w :height h}])

(defn reading-view
  "View for displaying a JVM stats reading. In the case of the average system load, there's also a sparkline chart
  for showing how the average load develops over time.
  CAVEAT: this is not as useful as it could be. The JVM's system load average is an average over the last minute,
  hence the slow response of the value, and more visibly, the sparkline. For more timely values, one could for
  example call 'top' on the shell for the current PID at any useful interval and parse the text.
  However, there are likely platform-specific differences to take into account.
  TODO: refactoring, pulling out sparkline function, among other things."
  [app]
  (let [state @app
        fmt #(gstring/format %1 %2)
        floor #(Math/floor %)
        readings (:readings state)
        cpu-loads (map :system-load-avg readings)
        last-n (take-last 60 cpu-loads)
        mx 8 ; workaround for some problem with actual mx function, only accurate on quadcore machine with HT
        indexed (vec (map-indexed vector last-n))
        latest (last readings)
        sys-load-avg (:system-load-avg latest)
        available-cpus (:available-cpus latest)
        uptime (:uptime latest)
        m 60000 s 1000          ; minutes and seconds in milliseconds for uptime calculation
        w 3 gap 1               ; bar width and gap between bars
        chart-w 400 chart-h 16] ; chart dimensions
    [:div
     [:div.pure-g
      [:div.pure-u-1.pure-u-sm-5-12.pure-u-lg-5-12
       {:style {:padding-top 3 :padding-left 6}}
       [:strong "Sys Load Avg: "]
       (fmt "%.2f" (-> sys-load-avg (/ available-cpus) (* 100))) "%"]
      [:div.pure-u-1.pure-u-sm-7-12.pure-u-lg-7-12
       [:svg {:width chart-w :height chart-h}
        [:g
         (for [[idx v] indexed]
           ^{:key (str idx v)} [bar (* idx w) chart-h (* (/ v mx) chart-h) (- w gap)])]]]]
     [:hr]
     [:div.pure-g
      {:style {:padding-top 3}}
      [:div.pure-u-1.pure-u-sm-1-2.pure-u-lg-1-2
       {:style {:padding-left 6}}
       [:strong "CPUs: "] available-cpus]
      [:div.pure-u-1.pure-u-sm-1-2.pure-u-lg-1-2
       [:strong "Uptime: "] (floor (/ uptime m)) "m" (floor (/ (rem uptime m) s)) "s"]]
     [:hr]]))

(defn mk-state
  "Return clean initial component state atom."
  [put-fn]
  (let [app (atom {:readings []})]
    (r/render-component [reading-view app] (util/by-id "jvm-stats-frame"))
    app))

(defn recv-jvm-stats
  ""
  [app stats]
  (swap! app assoc :readings (conj (:readings @app) stats)))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:stats/jvm stats] (recv-jvm-stats app stats)
         :else (println "Unmatched event:" msg)))

(defn component
  [cmp-id]
  (comp/make-component cmp-id mk-state in-handler nil))
