(ns birdwatch.core
  (:require [birdwatch.util :as util]
            [birdwatch.timeseries :as ts]
            [birdwatch.channels :as c]
            [birdwatch.communicator :as comm]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.elements :as ui]
            [birdwatch.state :as state]
            [birdwatch.wordcount :as wc]))

;;;; Main file of the BirdWatch application written in ClojureScript

;;; The application state lives in a single atom in birdwatch.state and
;;; will be initialized with the map returned by state/initial-state.
(reset! state/app (state/initial-state))

;;; Reagent components for the application are initialized here.
(ui/init-views)

; update the expensive word cloud periodically
(util/update-loop cloud/redraw 5000)

; update the cheap charts every second
(util/update-loop #(ts/update-ts state/app) 1000)
(util/update-loop #(wc-c/update-words (wc/get-words2 state/app 25)) 1000)

;;; The app starts with the search string encoded in the URI location hash.
(swap! state/app assoc :search-text (util/search-hash))

;;; Wire up and start communicator namespace.
(comm/start-router state/start-search c/data-chan c/stats-chan)
(comm/query-loop c/qry-chan)

;;; Wire up and initialize state namespace, inject channels.
(state/stats-loop c/stats-chan)
(state/data-loop c/data-chan)
(state/connect-qry-chan c/qry-chan)
