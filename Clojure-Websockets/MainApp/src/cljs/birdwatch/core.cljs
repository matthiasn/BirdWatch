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
            [matthiasn.systems-toolbox.switchboard :as toolbox-sw]
            [cljs.core.async :refer [sub tap put!]]))

(enable-console-print!)

;;;; Main file of the BirdWatch client-side application.

(def switchboard (toolbox-sw/component))

(def cmds
  [[:cmd/make-ws-comp]
   [:cmd/make-comp {:cmp-id :state-comp :mk-state-fn c/mk-state :handler-fn c/handle-incoming}]
   [:cmd/make-comp {:cmp-id :tweets-comp :mk-state-fn tw/make-state :state-pub-handler-fn tw/state-pub-handler}]
   [:cmd/make-comp {:cmp-id :cloud-comp :mk-state-fn cloud/mk-state :state-pub-handler-fn cloud/state-pub-handler
                    :opts {:throttle-ms 5000}}]
   [:cmd/make-comp {:cmp-id :wc-c-comp :mk-state-fn wc-c/mk-state :state-pub-handler-fn wc-c/state-pub-handler
                    :opts {:throttle-ms 1000}}]
   [:cmd/make-comp {:cmp-id :ts-comp :mk-state-fn ts-c/mk-state :state-pub-handler-fn ts-c/state-pub-handler
                    :opts {:throttle-ms 500}}]

   [:cmd/make-r-comp {:cmp-id :count-comp :view-fn cv/count-view :dom-id "tweet-count"}]
   [:cmd/make-r-comp {:cmp-id :users-count-comp :view-fn cv/users-count-view :dom-id "users-count"}]
   [:cmd/make-r-comp {:cmp-id :tt-count-comp :view-fn cv/total-count-view :dom-id "total-tweet-count"}]
   [:cmd/make-r-comp {:cmp-id :search-comp :view-fn sv/search-view :dom-id "search"}]
   [:cmd/make-r-comp {:cmp-id :sort-comp :view-fn st/sort-view :dom-id "sort-buttons"}]
   [:cmd/make-r-comp {:cmp-id :pag-comp :view-fn pag/pagination-view :dom-id "pagination"}]

   [:cmd/tap-comp {:mult-comp :ws :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :state-comp :tap-comp :ws}]
   [:cmd/tap-comp {:mult-comp :tweets-comp :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :search-comp :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :sort-comp :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :pag-comp :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :cloud-comp :tap-comp :state-comp}]
   [:cmd/tap-comp {:mult-comp :wc-c-comp :tap-comp :state-comp}]

   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :tweets-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :cloud-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :wc-c-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :ts-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :search-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :sort-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :pag-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :count-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :users-count-comp}]
   [:cmd/sub-comp {:pub-comp :state-comp :sub-comp :tt-count-comp}]])

(doseq [cmd cmds] (put! (:in-chan switchboard) cmd))
