(ns birdwatch.conf.observer)

(def cfg-map
  {:dom-id "observer"
   :switchbrd-id :client/switchboard
   :width         1000
   :height        1000
   :fixed-nodes   {:client/ws-cmp           {:x 100 :y 500}
                   :client/observer-cmp     {:x 500 :y 900}
                   :client/log-cmp          {:x 200 :y 900}
                   :client/switchboard      {:x 360 :y 680}
                   :client/tweets-cmp       {:x 800 :y 100}
                   :client/count-cmp        {:x 800 :y 200}
                   :client/users-count-cmp  {:x 800 :y 300}
                   :client/tt-count-cmp     {:x 800 :y 400}
                   :client/search-cmp       {:x 800 :y 500}
                   :client/sort-cmp         {:x 800 :y 600}
                   :client/pag-cmp          {:x 800 :y 700}
                   :client/cloud-cmp        {:x 800 :y 800}
                   :client/wc-c-cmp         {:x 750 :y 900}
                   :client/ts-cmp           {:x 650 :y 100}
                   :client/jvmstats-cmp     {:x 100 :y 700}
                   :client/state-cmp        {:x 360 :y 350}}})
