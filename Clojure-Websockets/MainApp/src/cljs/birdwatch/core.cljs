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

(defn make-observable [components]
  (let [mapper #(assoc-in % [:opts :msgs-on-firehose] true)]
    (set (mapv mapper components))))

(defn init []
  (let [ws-cfg {:relay-types #{:cmd/query :cmd/percolate}}
        sente-firehose-cfg {:opts {:in-chan [:buffer 100]}}
        cmps #{(sente/cmp-map :client/ws-cmp ws-cfg)
               (state/cmp-map :client/state-cmp)
               (sente/cmp-map :client/ws-firehose sente-firehose-cfg)
               (ui/cmp-map :client/ui-cmp)}
        cmps (make-observable cmps)]
    (sb/send-mult-cmd
      switchboard
      [[:cmd/init-comp cmps]

       [:cmd/route {:from #{:client/state-cmp
                            :client/ui-cmp}
                    :to   :client/ws-cmp}]

       [:cmd/route {:from #{:client/ws-cmp
                            :client/ui-cmp}
                    :to   :client/state-cmp}]

       [:cmd/observe-state
        {:from :client/state-cmp
         :to   #{:client/ui-cmp}}]

       [:cmd/attach-to-firehose :client/ws-firehose]])))

(init)
