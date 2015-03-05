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
            [com.matthiasnehlsen.systems-toolbox.core :as toolbox]
            [com.matthiasnehlsen.systems-toolbox.reagent :as toolbox-r]
            [cljs.core.async :refer [chan pub sub buffer sliding-buffer pipe]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

;;; Channels for handling information flow in the application.
(def data-chan  (chan)) ; Data from server, e.g. new tweets and previous chunks.
(def qry-chan   (chan)) ; Queries that will be forwarded to the server.
(def state-pub-chan (chan)) ; Publication of state changes.
(def state-pub (pub state-pub-chan first)) ; Pub for subscribing to

;;; Initialize application state (atom in state namespace) and wire channels.
(state/init-state data-chan qry-chan state-pub-chan)

;;; Initialization of WebSocket communication.
(comm/start-communicator data-chan qry-chan)

;;; Initialize Reagent components and inject channels.
(wc-c/mount-wc-chart   state-pub data-chan {:bars 25 :every-ms 1000})
(cloud/mount-wordcloud state-pub data-chan {:n 250 :every-ms 5000})
(ts-c/mount-ts-chart   state-pub {:every-ms 1000})

(def tweets-comp (toolbox/component-with-channels tw/init-component (sliding-buffer 1) (buffer 1)))
(sub state-pub :app-state (:in-chan tweets-comp))
(pipe (:out-chan tweets-comp) data-chan)

(toolbox-r/init-component cv/count-view state-pub data-chan "tweet-count")
(toolbox-r/init-component cv/users-count-view state-pub data-chan "users-count")
(toolbox-r/init-component cv/total-count-view state-pub data-chan "total-tweet-count")
(toolbox-r/init-component pag/pagination-view state-pub data-chan "pagination")
(toolbox-r/init-component sv/search-view state-pub data-chan "search")
(toolbox-r/init-component st/sort-view state-pub data-chan "sort-buttons")
