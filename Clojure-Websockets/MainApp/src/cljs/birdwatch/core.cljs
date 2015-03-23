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
            [birdwatch.state.comp :as state]
            [matthiasn.systems-toolbox.switchboard :as sb]
            [matthiasn.systems-toolbox.sente :as sente]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

(def switchboard (sb/component))

(sb/send-mult-cmd
  switchboard
  [[:cmd/wire-comp [(sente/component) (state/component) (tw/component)
                    (cloud/component 5000) (wc-c/component 1000) (ts-c/component 500)
                    (cv/count-component) (cv/users-count-component) (cv/total-count-component)
                    (sv/component) (st/component) (pag/component)]]
   [:cmd/tap-comp [:state-comp :ws-comp]]
   [:cmd/tap-comp [[:ws-comp :tweets-comp :search-comp :sort-comp :pag-comp :cloud-comp :wc-c-comp] :state-comp]]
   [:cmd/sub-comp-state [:state-comp [:tweets-comp :cloud-comp :wc-c-comp :ts-comp :search-comp
                                      :sort-comp :pag-comp :count-comp :users-count-comp :tt-count-comp]]]])
