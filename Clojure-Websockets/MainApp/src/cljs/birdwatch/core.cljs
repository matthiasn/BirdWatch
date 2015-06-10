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
            [matthiasn.systems-toolbox.ui.jvmstats :as jvmstats]
            [matthiasn.systems-toolbox.ui.observer :as obs]))

(enable-console-print!)

;;; This is the main namespace of the client side of BirdWatch. It is written in ClojureScript and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(def switchboard (sb/component :client/switchboard))

(sb/send-mult-cmd
  switchboard
  [[:cmd/wire-comp     ; :cmd/wire-comp messages pass a vector of instantiated components
    [(sente/component         :client/ws-cmp)            ;  WebSockets communication component from systems-toolbox
     (state/component         :client/state-cmp)         ;  Component holding the client-side application state and logic
     (tw/component            :client/tweets-cmp)        ;  UI component: list of tweets (Reagent, HTML, custom component)
     (cv/count-component      :client/count-cmp)         ;  UI component: tweet count (Reagent, HTML, simple component)
     (cv/users-cnt-component  :client/users-count-cmp)   ;  UI component: users count (Reagent, HTML, simple component)
     (cv/total-cnt-component  :client/tt-count-cmp)      ;  UI component: total tweet count (Reagent, HTML, simple component)
     (sv/component            :client/search-cmp)        ;  UI component: search bar (Reagent, HTML, simple component)
     (st/component            :client/sort-cmp)          ;  UI component: sort orders (Reagent, simple component)
     (pag/component           :client/pag-cmp)           ;  UI component: pagination (Reagent, simple component)
     (cloud/component         :client/cloud-cmp 5000)    ;  Chart: word cloud (D3.js, custom component)
     (wc-c/component          :client/wc-c-cmp  1000)    ;  Chart: wordcloud (Reagent, SVG, custom component, regression)
     (ts-c/component          :client/ts-cmp     500)    ;  Chart: timeseries (Reagent, SVG, custom component)
     (obs/component :client/observer-cmp "observer") ; UI component for observing system
     (jvmstats/component      :client/jvmstats-cmp "jvm-stats-frame")]] ;  UI component: JVM stats

   [:cmd/route-all {:from :client/state-cmp :to :client/ws-cmp}]
   [:cmd/route {:from :client/ws-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/tweets-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/search-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/sort-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/pag-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/cloud-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/wc-c-cmp :to :client/state-cmp}]
   [:cmd/route {:from :client/ws-cmp :to :client/jvmstats-cmp}]

   [:cmd/observe-state {:from :client/state-cmp :to :client/tweets-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/cloud-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/wc-c-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/ts-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/search-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/sort-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/pag-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/count-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/users-count-cmp}]
   [:cmd/observe-state {:from :client/state-cmp :to :client/tt-count-cmp}]

   [:cmd/observe-state {:from :client/switchboard :to :client/observer-cmp}]
   [:cmd/attach-to-firehose :client/observer-cmp]])
