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
            [matthiasn.systems-toolbox-sente.client :as sente]
            [matthiasn.systems-toolbox-metrics.jvmstats :as jvmstats]
            [cljsjs.moment]))

(enable-console-print!)

;;; This is the main namespace of the client side of BirdWatch. It is written in ClojureScript and makes use of
;;; the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building and wiring components. Below,
;;; a switchboard is created, which is a specialized component for wiring components together so that messages flow
;;; through a system as desired.

(defonce switchboard (sb/component :client/switchboard))

(defn init
  []
  (sb/send-mult-cmd
    switchboard
    [[:cmd/init-comp
      [(sente/cmp-map    :client/ws-cmp)          ;  WebSockets communication component from systems-toolbox
       (jvmstats/cmp-map :client/jvmstats-cmp "jvm-stats-frame") ;  UI component: JVM stats
       (state/cmp-map    :client/state-cmp)       ;  Component holding the client-side application state and logic
       (tw/cmp-map       :client/tweets-cmp)      ;  UI component: list of tweets (Reagent, HTML, custom component)
       (cv/count-cmp-map :client/count-cmp)       ;  UI component: tweet count (Reagent, HTML, simple component)
       (cv/users-cmp-map :client/users-count-cmp) ;  UI component: users count (Reagent, HTML, simple component)
       (cv/total-cmp-map :client/tt-count-cmp)    ;  UI component: total tweet count (Reagent, HTML, simple component)
       (sv/cmp-map       :client/search-cmp)      ;  UI component: search bar (Reagent, HTML, simple component)
       (st/cmp-map       :client/sort-cmp)        ;  UI component: sort orders (Reagent, simple component)
       (pag/cmp-map      :client/pag-cmp)         ;  UI component: pagination (Reagent, simple component)
       (cloud/cmp-map    :client/cloud-cmp 5000)  ;  Chart: word cloud (D3.js, custom component)
       (wc-c/cmp-map     :client/wc-c-cmp  2500)  ;  Chart: wordcloud (Reagent, SVG, custom component, regression)
       (ts-c/cmp-map     :client/ts-cmp    2000)  ;  Chart: timeseries (Reagent, SVG, custom component)
       ]]
     [:cmd/route-all {:from :client/state-cmp :to :client/ws-cmp}]
     [:cmd/route {:from [:client/ws-cmp :client/tweets-cmp :client/search-cmp :client/sort-cmp :client/pag-cmp
                         :client/cloud-cmp :client/wc-c-cmp] :to :client/state-cmp}]
     [:cmd/observe-state
      {:from :client/state-cmp
       :to   [:client/tweets-cmp :client/cloud-cmp :client/wc-c-cmp :client/ts-cmp :client/search-cmp
              :client/sort-cmp :client/pag-cmp :client/count-cmp :client/users-count-cmp :client/tt-count-cmp]}]]))

(init)
