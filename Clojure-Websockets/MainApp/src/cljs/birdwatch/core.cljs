(ns birdwatch.core
  "This is the main namespace of the client side of BirdWatch. It is written in
   ClojureScript and makes use of the systems-toolbox library
   (https://github.com/matthiasn/systems-toolbox) for building and wiring
   components. Below, a switchboard is created, which is a specialized component
   for wiring components together so that messages flow through a system."
  (:require [matthiasn.birdwatch-specs.specs]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.ui.ui :as ui]
            [birdwatch.state.comp :as state]
            [matthiasn.systems-toolbox.switchboard :as sb]
            [matthiasn.systems-toolbox-sente.client :as sente]
            [cljsjs.moment]))

(enable-console-print!)

(defonce switchboard (sb/component :client/switchboard))

(defn init
  "Initialize components and wire communication between them."
  []
  (sb/send-mult-cmd
    switchboard
    [[:cmd/init-comp
      #{(sente/cmp-map :client/ws-cmp {:relay-types #{:cmd/query :cmd/percolate}})
        (state/cmp-map :client/state-cmp)
        (ui/cmp-map :client/ui-cmp)
        ;(cloud/cmp-map :client/cloud-cmp 5000) ; Chart: word cloud (D3.js)
        }]

     [:cmd/route {:from #{:client/state-cmp
                          :client/ui-cmp}
                  :to   :client/ws-cmp}]

     [:cmd/route {:from #{:client/ws-cmp
                          :client/ui-cmp
                          ;:client/cloud-cmp
                          }
                  :to   :client/state-cmp}]

     [:cmd/observe-state
      {:from :client/state-cmp
       :to   #{;:client/cloud-cmp
               :client/ui-cmp}}]]))

(init)
