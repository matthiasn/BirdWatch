(ns birdwatch.core
  (:require [birdwatch.util :as util]
            [birdwatch.charts.ts-chart :as ts-c]
            [birdwatch.channels :as c]
            [birdwatch.communicator :as comm]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.tweets :as tw]
            [birdwatch.ui.elements :as ui]
            [birdwatch.state :as state]
            [birdwatch.stats.timeseries :as ts]
            [birdwatch.stats.wordcount :as wc]))

;;;; Main file of the BirdWatch client-side application.

;;; The application state lives in a single atom in birdwatch.state. Here, it
;;; will be initialized and the search string encoded in the URI location hash
;;; set within the application state.
(state/init)

;;; Initialize Reagent components and pass command channel, e.g. for interaction with state.
(ui/init-views c/state-pub c/cmd-chan)
(tw/mount-tweets c/state-pub c/cmd-chan)

(wc-c/mount-wc-chart c/cmd-chan c/state-pub)
(ts-c/mount-ts-chart c/state-pub)
(cloud/mount-wordcloud c/cmd-chan c/state-pub)

;;; Update the expensive word cloud periodically (every 5 seconds).
(util/update-loop c/state-pub-chan :words-cloud #(wc/get-words state/app 250) 3 5)

; The cheap charts are updated every second.
(util/update-loop c/state-pub-chan :ts-data #(ts/ts-data state/app) 1)
(util/update-loop c/state-pub-chan :words-bar #(wc/get-words2 state/app 25) 1)

;;; Here, the WebSocket communication is initialized. The router handles incoming
;;; messages and the loop handles outgoing messages. The channels for interfacing
;;; with the rest of the application are injected.
(comm/start-router c/cmd-chan c/data-chan c/stats-chan)
(comm/query-loop c/qry-chan)

;;; Here, the loops for processing messages from the server are started. The
;;; required channels for the loops and also the query channel are injected.
(state/stats-loop c/stats-chan)
(state/data-loop c/data-chan)
(state/cmd-loop c/cmd-chan)
(state/connect-qry-chan c/qry-chan)
(state/broadcast-state c/state-pub-chan)
