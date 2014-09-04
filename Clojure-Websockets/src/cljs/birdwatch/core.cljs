(ns birdwatch.core
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]]
                   [cljs.core.match.macros :refer (match)])
  (:require [om.core :as om :include-macros true]
            [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.tweets :as tweets]
            [birdwatch.wordcount :as wc]
            [birdwatch.ui :as ui]
            [birdwatch.state :as state]
            [cljs.core.match]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

;;;; Main file of the BirdWatch application written in ClojureScript

;;; Application state in a single atom
;;; Will be initialized with the map returned by util/initial-state.
;;; Reset to a new clean slate when a new search is started.
(reset! state/app (util/initial-state))

;(def app-state state/app)

;;; Om components for the application are initialized here. Their implementation lives in the ui namespace.
(om/root ui/tweets-view       state/app {:target (. js/document (getElementById "tweet-frame"))})
(om/root ui/count-view        state/app {:target (. js/document (getElementById "tweet-count"))})
(om/root ui/users-count-view  state/app {:target (. js/document (getElementById "users-count"))})
(om/root ui/total-count-view  state/app {:target (. js/document (getElementById "total-tweet-count"))})
(om/root ui/search-view       state/app {:target (. js/document (getElementById "search"))})
(om/root ui/sort-buttons-view state/app {:target (. js/document (getElementById "sort-buttons"))})
(om/root ui/pagination-view   state/app {:target (. js/document (getElementById "pagination"))})

(defn ^:export append-search-text [s]
  (swap! state/app assoc :search-text (str (:search-text @state/app) " " s)))

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 append-search-text "#wordCloud"))

;;; refresh BarChart and time series chart occasionally (could potentially be more elegant)
(js/setInterval #(ts/update ts/graph-with-legend state/app) 2500)
(js/setInterval #(.updateBarchart js/BirdWatch (clj->js (wc/get-words state/app 25))) 1000)

;;; The app starts with the search string encoded in the URI location hash.
;(defn start-search [] (tweets/start-search state/app tweets-chan))

(swap! state/app assoc :search-text (util/search-hash))



