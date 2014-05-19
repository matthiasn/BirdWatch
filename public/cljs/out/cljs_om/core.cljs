(ns cljs-om.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [om.core :as om :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.tweets :as tweets]
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


;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 (fn [e]) "#wordCloud"))

;;; refresh BarChart and time series chart occasionally (could potentially be more elegant)
(js/setInterval #(ts/update ts/graph-with-legend) 5000)
(js/setInterval #(.updateBarchart js/BirdWatch (clj->js (take 25 (:words-sorted-by-count @app-state)))) 1000)

;;; Channels for handling information flow in the application.
(def tweets-chan (chan 10000))
(def prev-tweets-chan (chan 100000))
(def combined-tweets-chan (chan 1))

(defn fwd [from to ms]
  "helper for forwarding message from one channel to another with the specified timeout"
  (go-loop []
           (put! to (<! from))
           (<! (timeout ms))
           (recur)))

;;; tweets-chan and prev-tweets-chan forward all messages to combined-tweets-chan, with
;;; messages from prev-tweets-chan having a delay so that messages from tweets-chan are
;;; always prioritized (tried alt! with :priority but couldn't make it work)
(fwd tweets-chan combined-tweets-chan 0)
(fwd prev-tweets-chan combined-tweets-chan 10)

;;; loop taking messages off of combined-tweets-chan and adding each into app state.
(go-loop [] (tweets/add-tweet (<! combined-tweets-chan) app-state word-cloud) (recur))

;;; The app starts with the search string encoded in the URI location hash.
(defn start-search [search] (tweets/start-search app-state search tweets-chan))
(start-search (util/search-hash))
