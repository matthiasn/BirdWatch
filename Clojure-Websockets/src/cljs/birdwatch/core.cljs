(ns birdwatch.core
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]])
  (:require [om.core :as om :include-macros true]
            [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.communicator :as comm]
            [birdwatch.wordcount :as wc]
            [birdwatch.ui :as ui]
            [birdwatch.ui-tweets :as ui-t]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

;;;; Main file of the BirdWatch application written in ClojureScript

;;; The application state lives in a single atom in birdwatch.state and
;;; will be initialized with the map returned by state/initial-state.
(reset! state/app (state/initial-state))

;;; Om components for the application are initialized here.
(om/root ui-t/tweets-view     state/app {:target (. js/document (getElementById "tweet-frame"))})
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

; update the cheap charts every second
(go-loop [] (<! (timeout 1000))
         (.updateBarchart js/BirdWatch (clj->js (wc/get-words state/app 25)))
         (ts/update ts/graph-with-legend state/app)
         (recur))

; update the expensive word cloud periodically
(go-loop [] (<! (timeout 5000))
         (. word-cloud (redraw (clj->js (wc/get-words state/app 250))))
         (recur))

;;; The app starts with the search string encoded in the URI location hash.
(swap! state/app assoc :search-text (util/search-hash))



