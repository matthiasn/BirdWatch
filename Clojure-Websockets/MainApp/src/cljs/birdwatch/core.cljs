(ns birdwatch.core
  (:require-macros [cljs.core.async.macros :refer [go-loop go alt!]])
  (:require [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.communicator :as comm]
            [birdwatch.wordcount :as wc]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.ui.elements :as ui]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

;;;; Main file of the BirdWatch application written in ClojureScript

;;; The application state lives in a single atom in birdwatch.state and
;;; will be initialized with the map returned by state/initial-state.
(reset! state/app (state/initial-state))

;;; Reagent components for the application are initialized here.
(ui/init-views)

;;; WordCloud element (implemented externally in JavaScript)
(def cloud-elem (.getElementById js/document "wordCloud"))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 state/append-search-text "#wordCloud"))

; update the cheap charts every second
(go-loop [] (<! (timeout 1000))
         (wc-c/update-words (wc/get-words2 state/app 25))
         (ts/update-ts state/app)
         (recur))

; update the expensive word cloud periodically
(go-loop [] (<! (timeout 5000))
         (.redraw word-cloud (clj->js (wc/get-words state/app 250)))
         (recur))

;;; The app starts with the search string encoded in the URI location hash.
(swap! state/app assoc :search-text (util/search-hash))
