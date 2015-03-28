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

(def switchboard (sb/component))

(sb/send-mult-cmd
  switchboard
  [[:cmd/wire-comp
    [(sente/component         :ws-cmp)
     (state/component         :state-cmp)
     (tw/component            :tweets-cmp)
     (cloud/component         :cloud-cmp    5000)
     (wc-c/component          :wc-c-cmp     1000)
     (ts-c/component          :ts-cmp        500)
     (cv/count-component      :count-cmp)
     (cv/users-cnt-component  :users-count-cmp)
     (cv/total-cnt-component  :tt-count-cmp)
     (sv/component            :search-cmp)
     (st/component            :sort-cmp)
     (pag/component           :pag-cmp)]]

   [:cmd/tap-comp [:state-cmp :ws-cmp]]

   [:cmd/tap-comp
    [[:ws-cmp      ;    »───»───»───»───»───»───»───»┐
      :tweets-cmp  ;    »───»───»───»───»───»───»─┐  │
      :search-cmp  ;    »───»───»───»───»───»──┐  │  │
      :sort-cmp    ;    »───»───»───»───»───┐  │  │  │
      :pag-cmp     ;    »───»───»───»───»┐  │  │  │  │
      :cloud-cmp   ;    »───»───»───»─┐  │  │  │  │  │
      :wc-c-cmp]   ;    »───»───»──┐  │  │  │  │  │  │
                   ;               │  │  │  │  │  │  │
     :state-cmp]]  ; <= «═══«═══«══╧══╧══╧══╧══╧══╧══╛

   [:cmd/sub-comp-state
    [:state-cmp          ; => »═══»═══»══╤══╤══╤══╤══╤══╤══╤══╤══╤══╕
                         ;               │  │  │  │  │  │  │  │  │  │
     [:tweets-cmp        ;    «───«───«──┘  │  │  │  │  │  │  │  │  │
      :cloud-cmp         ;    «───«───«───«─┘  │  │  │  │  │  │  │  │
      :wc-c-cmp          ;    «───«───«───«───«┘  │  │  │  │  │  │  │
      :ts-cmp            ;    «───«───«───«───«───┘  │  │  │  │  │  │
      :search-cmp        ;    «───«───«───«───«───«──┘  │  │  │  │  │
      :sort-cmp          ;    «───«───«───«───«───«───«─┘  │  │  │  │
      :pag-cmp           ;    «───«───«───«───«───«───«───«┘  │  │  │
      :count-cmp         ;    «───«───«───«───«───«───«───«───┘  │  │
      :users-count-cmp   ;    «───«───«───«───«───«───«───«───«──┘  │
      :tt-count-cmp]]]]) ;    «───«───«───«───«───«───«───«───«──«──┘
