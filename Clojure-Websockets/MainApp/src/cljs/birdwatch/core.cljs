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
  [[:cmd/wire-comp [:ws-comp     (sente/component)]]
   [:cmd/wire-comp [:state-comp  (state/component)]]

   [:cmd/wire-comp [:tweets-comp      (tw/component)]]
   [:cmd/wire-comp [:cloud-comp       (cloud/component 5000)]]
   [:cmd/wire-comp [:wc-c-comp        (wc-c/component 1000)]]
   [:cmd/wire-comp [:ts-comp          (ts-c/component 500)]]
   [:cmd/wire-comp [:count-comp       (cv/count-component)]]
   [:cmd/wire-comp [:users-count-comp (cv/users-count-component)]]
   [:cmd/wire-comp [:tt-count-comp    (cv/total-count-component)]]
   [:cmd/wire-comp [:search-comp      (sv/component)]]
   [:cmd/wire-comp [:sort-comp        (st/component)]]
   [:cmd/wire-comp [:pag-comp         (pag/component)]]

   [:cmd/tap-comp [:state-comp :ws-comp]]
   [:cmd/tap-comp
    [[:ws-comp :tweets-comp :search-comp :sort-comp :pag-comp :cloud-comp :wc-c-comp]
     :state-comp]]

   [:cmd/sub-comp-state
    [:state-comp
     [:tweets-comp :cloud-comp :wc-c-comp :ts-comp :search-comp :sort-comp :pag-comp
      :count-comp :users-count-comp :tt-count-comp]]]])
