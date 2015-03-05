(ns birdwatch.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.charts.ts-chart :as ts-c]
            [birdwatch.communicator :as comm]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.tweets :as tw]
            [birdwatch.ui.search :as sv]
            [birdwatch.ui.sort :as st]
            [birdwatch.ui.count-views :as cv]
            [birdwatch.ui.pagination :as pag]
            [cljs.core.match :refer-macros [match]]
            [birdwatch.state.data :as state]
            [com.matthiasnehlsen.systems-toolbox.core :as toolbox]
            [com.matthiasnehlsen.systems-toolbox.reagent :as toolbox-r]
            [cljs.core.async :refer [chan pub sub buffer sliding-buffer pipe]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

;;; Channels for handling information flow in the application.
(def state-in-chan  (chan)) ; Data from server, e.g. new tweets and previous chunks.
(def qry-chan   (chan)) ; Queries that will be forwarded to the server.
(def state-pub-chan (chan (sliding-buffer 1))) ; Publication of state changes.
(def state-pub (pub state-pub-chan first)) ; Pub for subscribing to

;;; Initialize application state (atom in state namespace) and wire channels.
;(state/init-state state-in-chan qry-chan state-pub-chan)

;;; Initialization of WebSocket communication.
(comm/start-communicator state-in-chan qry-chan)

;;; Initialize Reagent components and inject channels.
(wc-c/mount-wc-chart   state-pub state-in-chan {:bars 25 :every-ms 1000})
(cloud/mount-wordcloud state-pub state-in-chan {:n 250 :every-ms 5000})
(ts-c/mount-ts-chart   state-pub {:every-ms 1000})

(def state-comp (toolbox/component-with-channels state/init-component (buffer 10000) (buffer 10000)))
(pipe state-in-chan (:in-chan state-comp))
(go-loop []
         (let [msg (<! (:out-chan state-comp))]
           (match msg
                  [:cmd/query _] (>! qry-chan msg)
                  [:cmd/percolate _] (>! qry-chan msg)
                  [:app-state _] (>! state-pub-chan msg)
                  :else (prn "else" msg)
                  )
           (recur)
           ))

(def tweets-comp (toolbox/component-with-channels tw/init-component (sliding-buffer 1) (buffer 1)))
(sub state-pub :app-state (:in-chan tweets-comp))
(pipe (:out-chan tweets-comp) state-in-chan)

(toolbox-r/init-components state-pub state-in-chan
                           [[cv/count-view "tweet-count"] [cv/users-count-view "users-count"]
                            [cv/total-count-view "total-tweet-count"] [sv/search-view "search"]
                            [pag/pagination-view "pagination"] [st/sort-view "sort-buttons"]])