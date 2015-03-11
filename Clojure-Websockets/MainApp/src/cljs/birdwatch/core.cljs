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
(def wc-comp (toolbox/make-component cloud/make-state nil cloud/state-pub-handler {:sliding-in-timeout 5000}))
(def wc-c-comp (toolbox/make-component wc-c/make-state nil wc-c/state-pub-handler {:sliding-in-timeout 1000}))
(def ts-comp (toolbox/make-component ts-c/make-state nil ts-c/state-pub-handler {:sliding-in-timeout 1000}))
(def ws-comp (toolbox-ws/component))
(def count-comp (toolbox-r/component cv/count-view "tweet-count"))
(def users-count-comp (toolbox-r/component cv/users-count-view "users-count"))
(def search-comp (toolbox-r/component sv/search-view "search"))
(def sort-comp (toolbox-r/component st/sort-view "sort-buttons"))
(def pag-comp (toolbox-r/component pag/pagination-view "pagination"))
(def ttc-comp (toolbox-r/component cv/total-count-view "total-tweet-count"))

(def tweets-comp (toolbox/single-in-single-out tw/init-component))

(sub (:state-pub state-comp) :app-state (:sliding-in-chan wc-c-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan ts-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan wc-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan count-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan users-count-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan search-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan sort-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan pag-comp))
(sub (:state-pub state-comp) :app-state (:sliding-in-chan ttc-comp))

(sub (:state-pub state-comp) :app-state (:in-chan tweets-comp))

(pipe (:out-chan wc-c-comp)   (:in-chan state-comp))
(pipe (:out-chan wc-comp)     (:in-chan state-comp))
(pipe (:out-chan state-comp)  (:in-chan ws-comp))
(pipe (:out-chan ws-comp)     (:in-chan state-comp))
(pipe (:out-chan tweets-comp) (:in-chan state-comp))
