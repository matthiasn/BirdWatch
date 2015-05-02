(ns birdwatch.core
  (:require [birdwatch.charts.ts-chart :as ts-c]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.tweets :as tw]
            [birdwatch.ui.search :as sv]
            [birdwatch.ui.sort :as st]
            [birdwatch.ui.count-views :as cv]
            [birdwatch.ui.pagination :as pag]
            [birdwatch.state.comp :as state]
            [matthiasn.systems-toolbox.switchboard :as sb]
            [matthiasn.systems-toolbox.sente :as sente]
            [matthiasn.systems-toolbox.ui.jvmstats :as jvmstats]))

(enable-console-print!)

;;; This is the main namespace of the client side of BirdWatch. It is written in ClojureScript and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(def switchboard (sb/component))

(sb/send-mult-cmd
  switchboard
  [[:cmd/wire-comp     ; :cmd/wire-comp messages pass a vector of instantiated components
    [(sente/component         :ws-cmp)            ;  WebSockets communication component from systems-toolbox
     (state/component         :state-cmp)         ;  Component holding the client-side application state and logic
     (tw/component            :tweets-cmp)        ;  UI component: list of tweets (Reagent, HTML, custom component)
     (cv/count-component      :count-cmp)         ;  UI component: tweet count (Reagent, HTML, simple component)
     (cv/users-cnt-component  :users-count-cmp)   ;  UI component: users count (Reagent, HTML, simple component)
     (cv/total-cnt-component  :tt-count-cmp)      ;  UI component: total tweet count (Reagent, HTML, simple component)
     (sv/component            :search-cmp)        ;  UI component: search bar (Reagent, HTML, simple component)
     (st/component            :sort-cmp)          ;  UI component: sort orders (Reagent, simple component)
     (pag/component           :pag-cmp)           ;  UI component: pagination (Reagent, simple component)
     (cloud/component         :cloud-cmp 5000)    ;  Chart: word cloud (D3.js, custom component)
     (wc-c/component          :wc-c-cmp  1000)    ;  Chart: wordcloud (Reagent, SVG, custom component, regression)
     (ts-c/component          :ts-cmp     500)    ;  Chart: timeseries (Reagent, SVG, custom component)
     (jvmstats/component      :jvmstats-cmp "jvm-stats-frame")]] ;  UI component: JVM stats

   [:cmd/sub-comp  :state-cmp   :ws-cmp      :all]
   [:cmd/sub-comp  :ws-cmp      :state-cmp   :all]
   [:cmd/sub-comp  :tweets-cmp  :state-cmp   :all]
   [:cmd/sub-comp  :search-cmp  :state-cmp   :all]
   [:cmd/sub-comp  :sort-cmp    :state-cmp   :all]
   [:cmd/sub-comp  :pag-cmp     :state-cmp   :all]
   [:cmd/sub-comp  :cloud-cmp   :state-cmp   :all]
   [:cmd/sub-comp  :wc-c-cmp    :state-cmp   :all]
   [:cmd/sub-comp  :sort-cmp    :state-cmp   :all]

   [:cmd/sub-comp  :ws-cmp      :jvmstats-cmp   :stats/jvm]

   [:cmd/sub-comp  :state-cmp   :tweets-cmp      :app-state]
   [:cmd/sub-comp  :state-cmp   :cloud-cmp       :app-state]
   [:cmd/sub-comp  :state-cmp   :wc-c-cmp        :app-state]
   [:cmd/sub-comp  :state-cmp   :ts-cmp          :app-state]
   [:cmd/sub-comp  :state-cmp   :search-cmp      :app-state]
   [:cmd/sub-comp  :state-cmp   :sort-cmp        :app-state]
   [:cmd/sub-comp  :state-cmp   :pag-cmp         :app-state]
   [:cmd/sub-comp  :state-cmp   :count-cmp       :app-state]
   [:cmd/sub-comp  :state-cmp   :users-count-cmp :app-state]
   [:cmd/sub-comp  :state-cmp   :tt-count-cmp    :app-state]])
