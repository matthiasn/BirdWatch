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
            [birdwatch.state.comp :as c]
            [com.matthiasnehlsen.systems-toolbox.core :as toolbox]
            [com.matthiasnehlsen.systems-toolbox.reagent :as toolbox-r]
            [com.matthiasnehlsen.systems-toolbox.sente :as toolbox-ws]
            [cljs.core.async :refer [chan pub sub <! >! buffer sliding-buffer pipe]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

(def state-comp (toolbox/make-component c/make-state c/handle-incoming nil))
(def wc-comp (toolbox/make-component cloud/make-state nil cloud/state-pub-handler))
(def wc-c-comp (toolbox/make-component wc-c/make-state nil wc-c/state-pub-handler))

(def ts-comp (toolbox/single-in-single-out ts-c/init-component
                                           {:in-chan [:sliding 1]
                                            :out-chan [:buffer 1]
                                            :in-timeout 1000}))

(def tweets-comp (toolbox/single-in-single-out tw/init-component))

;;; Initialization of WebSocket communication.
(def ws-comp (toolbox-ws/component))

(sub (:state-pub state-comp) :app-state (:sliding-in-chan wc-c-comp))
(sub (:state-pub state-comp) :app-state (:in-chan ts-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan wc-comp))
(sub (:state-pub state-comp) :app-state (:in-chan tweets-comp))

(pipe (:out-chan wc-c-comp)   (:in-chan state-comp))
(pipe (:out-chan wc-comp)     (:in-chan state-comp))
(pipe (:out-chan state-comp)  (:in-chan ws-comp))
(pipe (:out-chan ws-comp)     (:in-chan state-comp))
(pipe (:out-chan tweets-comp) (:in-chan state-comp))

(toolbox-r/init-components (:state-pub state-comp) (:in-chan state-comp)
                           [[cv/count-view "tweet-count"] [cv/users-count-view "users-count"]
                            [cv/total-count-view "total-tweet-count"] [sv/search-view "search"]
                            [pag/pagination-view "pagination"] [st/sort-view "sort-buttons"]])


