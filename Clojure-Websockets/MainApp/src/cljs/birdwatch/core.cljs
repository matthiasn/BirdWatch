(ns birdwatch.core
  (:require [birdwatch.util :as util]
            [birdwatch.charts.ts-chart :as ts-c]
            [birdwatch.communicator :as comm]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.tweets :as tw]
            [birdwatch.ui.elements :as ui]
            [birdwatch.state.data :as state]
            [birdwatch.stats.timeseries :as ts]
            [birdwatch.stats.wordcount :as wc]
            [cljs.core.async :as async :refer [chan pub]]))

;;;; Main file of the BirdWatch client-side application.

;;; Channels for handling information flow in the application.
(def stats-chan (chan)) ; Stats from server, e.g. total tweets, connected users.
(def data-chan  (chan)) ; Data from server, e.g. new tweets and previous chunks.
(def qry-chan   (chan)) ; Queries that will be forwarded to the server.
(def cmd-chan   (chan)) ; Web-client internal command messages (e.g. state modification).
(def state-pub-chan (chan)) ; Publication of state changes.
(def state-pub (pub state-pub-chan first)) ; Pub for subscribing to

;;; Initialize application state (atom in state namespace) and wire channels.
(state/init-state data-chan qry-chan stats-chan cmd-chan state-pub-chan)

;;; Initialization of WebSocket communication.
(comm/start-communicator cmd-chan data-chan stats-chan qry-chan)

;;; Initialize Reagent components and inject channels.
(ui/init-views         state-pub cmd-chan)
(tw/mount-tweets       state-pub cmd-chan)
(wc-c/mount-wc-chart   state-pub cmd-chan {:bars 25 :every-ms 1000})
(cloud/mount-wordcloud state-pub cmd-chan {:n 250 :every-ms 5000})
(ts-c/mount-ts-chart   state-pub {:every-ms 1000})
