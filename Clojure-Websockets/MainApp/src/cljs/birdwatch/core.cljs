(ns birdwatch.core
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
            [cljs.core.async :refer [sub]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

(def state (toolbox/make-component c/make-state c/handle-incoming nil))
(def wc (toolbox/make-component cloud/make-state nil cloud/state-pub-handler {:sliding-in-timeout 5000}))
(def wc-c (toolbox/make-component wc-c/make-state nil wc-c/state-pub-handler {:sliding-in-timeout 1000}))
(def ts (toolbox/make-component ts-c/make-state nil ts-c/state-pub-handler {:sliding-in-timeout 1000}))
(def ws (toolbox-ws/component))
(def count-c (toolbox-r/component cv/count-view "tweet-count"))
(def users-count (toolbox-r/component cv/users-count-view "users-count"))
(def search (toolbox-r/component sv/search-view "search"))
(def sort-c (toolbox-r/component st/sort-view "sort-buttons"))
(def pag (toolbox-r/component pag/pagination-view "pagination"))
(def ttc (toolbox-r/component cv/total-count-view "total-tweet-count"))

(def tweets-comp (toolbox/single-in-single-out tw/init-component))

(def reagent-comps [wc-c ts wc count-c users-count search sort-c pag ttc])
(toolbox/state-snapshot-subscribe state :app-state reagent-comps)

(sub (:state-pub state) :app-state (:in-chan tweets-comp))

(toolbox/pipe-multiple [[wc-c state] [wc state] [state ws] [ws state] [tweets-comp state]])
