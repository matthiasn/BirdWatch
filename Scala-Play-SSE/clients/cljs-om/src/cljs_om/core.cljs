(ns cljs-om.core
  (:require-macros [cljs.core.async.macros :refer [go-loop alt!]])
  (:require [om.core :as om :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.tweets :as tweets]
            [cljs-om.wordcount :as wc]
            [cljs-om.ui :as ui]
            [cljs.core.async :as async :refer [<! chan put! alts! timeout]]))

;;;; Main file of the BirdWatch application written in ClojureScript

;;; Application state in a single atom
;;; Will be initialized with the map returned by util/initial-state.
;;; Reset to a new clean slate when a new search is started.
(def app-state (atom (util/initial-state)))

;;; Om components for the application are initialized here. Their implementation lives in the ui namespace.
(om/root ui/tweets-view       app-state {:target (. js/document (getElementById "tweet-frame"))})
(om/root ui/count-view        app-state {:target (. js/document (getElementById "tweet-count"))})
(om/root ui/search-view       app-state {:target (. js/document (getElementById "search"))})
(om/root ui/sort-buttons-view app-state {:target (. js/document (getElementById "sort-buttons"))})
(om/root ui/pagination-view   app-state {:target (. js/document (getElementById "pagination"))})

(defn append-search-text [s]
  (swap! app-state assoc :search-text (str (:search-text @app-state) " " s)))

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 append-search-text "#wordCloud"))

;;; refresh BarChart and time series chart occasionally (could potentially be more elegant)
(js/setInterval #(ts/update ts/graph-with-legend app-state) 2500)
(js/setInterval #(.updateBarchart js/BirdWatch (clj->js (wc/get-words app-state 25))) 1000)

;;; Channels for handling information flow in the application.
(def tweets-chan (chan 10000))
(def prev-tweets-chan (chan 10000))

(go-loop []
 (let [[t chan] (alts! [tweets-chan prev-tweets-chan] :priority)]
   (tweets/add-tweet t app-state word-cloud)
   (recur)))

;;; The app starts with the search string encoded in the URI location hash.
(defn start-search [] (tweets/start-search app-state tweets-chan))

(swap! app-state assoc :search-text (util/search-hash))
(start-search)
