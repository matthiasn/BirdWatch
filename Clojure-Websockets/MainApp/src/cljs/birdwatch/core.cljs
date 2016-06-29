(ns birdwatch.core
  "This is the main namespace of the client side of BirdWatch. It is written in ClojureScript and
   makes use of the systems-toolbox library (https://github.com/matthiasn/BirdWatch) for building
   and wiring components. Below, a switchboard is created, which is a specialized component for
   wiring components together so that messages flow through a system as desired."
  (:require [matthiasn.birdwatch-specs.specs]
            [birdwatch.charts.ts-chart :as ts-c]
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

(defonce switchboard (sb/component :client/switchboard))

(defn init
  "Initialize components and wire communication between them."
  []
  (sb/send-mult-cmd
    switchboard
    [[:cmd/init-comp
      #{(sente/cmp-map :client/ws-cmp {:relay-types #{:cmd/query :cmd/percolate}}) ; WebSockets cmp
        (jvmstats/cmp-map :client/jvmstats-cmp {:dom-id "jvm-stats-frame"})        ; JVM stats
        (state/cmp-map :client/state-cmp)           ; client-side application state component
        (tw/cmp-map :client/tweets-cmp)             ; UI component: list of tweets
        (cv/count-cmp-map :client/count-cmp)        ; UI component: tweet count
        (cv/users-cmp-map :client/users-count-cmp)  ; UI component: users count
        (cv/total-cmp-map :client/tt-count-cmp)     ; UI component: total tweet count
        (sv/cmp-map :client/search-cmp)             ; UI component: search bar
        (st/cmp-map :client/sort-cmp)               ; UI component: sort orders
        (pag/cmp-map :client/pag-cmp)               ; UI component: pagination
        (cloud/cmp-map :client/cloud-cmp 5000)      ; Chart: word cloud (D3.js)
        (wc-c/cmp-map :client/wc-c-cmp 2500)        ; Chart: wordcloud (Reagent, SVG)
        (ts-c/cmp-map :client/ts-cmp 2000)}]        ; Chart: timeseries (Reagent, SVG)

     [:cmd/route {:from :client/state-cmp
                  :to   :client/ws-cmp}]

     [:cmd/route {:from #{:client/ws-cmp
                          :client/tweets-cmp
                          :client/search-cmp
                          :client/sort-cmp
                          :client/pag-cmp
                          :client/cloud-cmp
                          :client/wc-c-cmp}
                  :to   :client/state-cmp}]

     [:cmd/route {:from :client/ws-cmp
                  :to   :client/jvmstats-cmp}]

     [:cmd/observe-state
      {:from :client/state-cmp
       :to   #{:client/tweets-cmp
               :client/cloud-cmp
               :client/wc-c-cmp
               :client/ts-cmp
               :client/search-cmp
               :client/sort-cmp
               :client/pag-cmp
               :client/count-cmp
               :client/users-count-cmp
               :client/tt-count-cmp}}]]))

(init)
