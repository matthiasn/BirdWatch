(ns birdwatch.ui.jvmstats
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.ui.util :as util]
            [reagent.core :as r :refer [atom]]
            [cljs.core.match :refer-macros [match]]
            [matthiasn.systems-toolbox.component :as comp]
            [goog.string :as gstring]
            [goog.string.format]))

(defn reading-view
  ""
  [app]
  (let [state @app
        fmt #(gstring/format %1 %2)
        floor #(Math/floor %)
        latest (last (:readings state))
        sys-load-avg (:system-load-avg latest)
        available-cpus (:available-cpus latest)
        uptime (:uptime latest)
        m 60000
        s 1000]
    [:div
     [:div [:strong "System Load Average: "] (fmt "%.2f" (-> sys-load-avg (/ available-cpus) (* 100))) "%"]
     [:div [:strong "CPUs: "] available-cpus]
     [:div [:strong "Uptime: "] (floor (/ uptime m)) "m" (floor (/ (rem uptime m) s)) "s"]]))

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
