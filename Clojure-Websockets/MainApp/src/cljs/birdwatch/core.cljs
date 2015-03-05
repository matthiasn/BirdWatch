(ns birdwatch.core
  (:require [birdwatch.charts.ts-chart :as ts-c]
            [birdwatch.communicator :as comm]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.tweets :as tw]
            [birdwatch.ui.search :as sv]
            [birdwatch.ui.sort :as st]
            [birdwatch.ui.count-views :as cv]
            [birdwatch.ui.pagination :as pag]
            [birdwatch.state.data :as state]
            [com.matthiasnehlsen.systems-toolbox.component :as comp]
            [com.matthiasnehlsen.systems-toolbox.reagent :as r]
            [cljs.core.async :refer [chan pub sub buffer sliding-buffer pipe]]))

(enable-console-print!)

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
(wc-c/mount-wc-chart   state-pub cmd-chan {:bars 25 :every-ms 1000})
(cloud/mount-wordcloud state-pub cmd-chan {:n 250 :every-ms 5000})
(ts-c/mount-ts-chart   state-pub {:every-ms 1000})

(def tweets-comp (comp/component-with-channels tw/init-component (sliding-buffer 1) (buffer 1)))
(sub state-pub :app-state (:in-chan tweets-comp))
(pipe (:out-chan tweets-comp) cmd-chan)

(r/wrap-component cv/count-view state-pub cmd-chan "tweet-count")
(r/wrap-component cv/users-count-view state-pub cmd-chan "users-count")
(r/wrap-component cv/total-count-view state-pub cmd-chan "total-tweet-count")
(r/wrap-component pag/pagination-view state-pub cmd-chan "pagination")
(r/wrap-component sv/search-view state-pub cmd-chan "search")
(r/wrap-component st/sort-view state-pub cmd-chan "sort-buttons")
