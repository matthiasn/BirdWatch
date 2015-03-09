(ns birdwatch.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.charts.ts-chart :as ts-c]
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
            [com.matthiasnehlsen.systems-toolbox.sente :as toolbox-ws]
            [cljs.core.async :refer [chan pub sub <! >! buffer sliding-buffer pipe]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

;;; Channels for handling information flow in the application.
(def state-in-chan (chan)) ; Data from server, e.g. new tweets and previous chunks.
(def qry-chan   (chan)) ; Queries that will be forwarded to the server.
(def state-pub-chan (chan (sliding-buffer 1))) ; Publication of state changes.
(def state-pub (pub state-pub-chan first)) ; Pub for subscribing to

;;; Initialize Reagent components and inject channels.
(wc-c/mount-wc-chart   state-pub state-in-chan {:bars 25 :every-ms 1000})
(cloud/mount-wordcloud state-pub state-in-chan {:n 250 :every-ms 5000})
(ts-c/mount-ts-chart   state-pub {:every-ms 1000})

(def state-comp (toolbox/component-single-in-mult-out
                  state/init-component
                  {:in-chan [:buffer 1]
                   :out-chans {:state-pub-out [:sliding 1] :qry-out [:buffer 1]}}
                  #(match % [:app-state _] :state-pub-out :else :qry-out)))

(pipe state-in-chan (:in-chan state-comp))
(pipe (-> state-comp :out-chans :qry-out) qry-chan)
(pipe (-> state-comp :out-chans :state-pub-out) state-pub-chan)

;;; Initialization of WebSocket communication.
(def ws-comp (toolbox-ws/component))
(pipe (:out-chan ws-comp) state-in-chan)
(pipe qry-chan (:in-chan ws-comp))

(def tweets-comp (toolbox/component-with-channels tw/init-component (sliding-buffer 1) (buffer 1)))
(sub state-pub :app-state (:in-chan tweets-comp))
(pipe (:out-chan tweets-comp) state-in-chan)

(toolbox-r/init-components state-pub state-in-chan
                           [[cv/count-view "tweet-count"] [cv/users-count-view "users-count"]
                            [cv/total-count-view "total-tweet-count"] [sv/search-view "search"]
                            [pag/pagination-view "pagination"] [st/sort-view "sort-buttons"]])
