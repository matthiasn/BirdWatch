(ns birdwatch.ui.sort
  (:require [re-frame.core :refer [subscribe]]))

(def sort-orders {:by-id               "latest"
                  :by-followers        "followers"
                  :by-retweets         "retweets"
                  :by-rt-since-startup "retweets2"
                  :by-reach            "reach"
                  :by-favorites        "favorites"})

(defn- btn-class? [p] (if p " pure-button-primary" " sort-button"))

(defn sort-view
  "Reagent view function for rendering the sort view."
  [put-fn]
  (let [sorted (subscribe [:sorted])
        live (subscribe [:live])]
    (fn sort-render [put-fn]
      (let [curr-order @sorted]
        [:div
         [:button.pure-button.not-rounded
          {:class (btn-class? @live) :on-click #(put-fn [:cmd/toggle-live])} "Live"]
         [:button.pure-button.not-rounded.sort-button "Sort by:"]
         (for [[k text] sort-orders]
           (let [btn-class (btn-class? (= k curr-order))]
             ^{:key text}
             [:button.pure-button.not-rounded
              {:class btn-class :on-click #(put-fn [:cmd/set-sort-order k])} text]))]))))
