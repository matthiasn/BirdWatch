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

;;;; Main file of the BirdWatch client-side application.

;;; The application state lives in a single atom in birdwatch.state. Here, it
;;; will be initialized and the search string encoded in the URI location hash
;;; set within the application state.
(state/init)

;;; Reagent components for the application are initialized here.
(ui/init-views)

; The expensive word cloud is updated periodically (every 5 seconds).
(util/update-loop cloud/redraw 5000)

; The cheap charts are updated every second.
(util/update-loop #(ts/update-ts state/app) 1000)
(util/update-loop #(wc-c/update-words (wc/get-words2 state/app 25)) 1000)

;;; Here, the WebSocket communication is initialized. The router handles incoming
;;; messages and the loop handles outgoing messages. The channels for interfacing
;;; with the rest of the application are injected.
(comm/start-router state/start-search c/data-chan c/stats-chan)
(comm/query-loop c/qry-chan)

;;; Here, the loops for processing messages from the server are started. The
;;; required channels for the loops and also the query channel are injected.
(state/stats-loop c/stats-chan)
(state/data-loop c/data-chan)
(state/connect-qry-chan c/qry-chan)
