(ns birdwatch.ui.sort
  (:require [matthiasn.systems-toolbox-ui.reagent :as r]))

(def sort-orders {:by-id               "latest"
                  :by-followers        "followers"
                  :by-retweets         "retweets"
                  :by-rt-since-startup "retweets2"
                  :by-reach            "reach"
                  :by-favorites        "favorites"})

(defn- btn-class? [p] (if p " pure-button-primary" " sort-button"))

(defn sort-view
  "Reagent view function for rendering the sort view."
  [{:keys [observed put-fn]}]
  (let [curr-order (:sorted @observed)]
    [:div
     [:button.pure-button.not-rounded
      {:class (btn-class? (:live @observed)) :on-click #(put-fn [:cmd/toggle-live])} "Live"]
     [:button.pure-button.not-rounded.sort-button "Sort by:"]
     (for [[k text] sort-orders]
       (let [btn-class (btn-class? (= k curr-order))]
         ^{:key text}
         [:button.pure-button.not-rounded
          {:class btn-class :on-click #(put-fn [:cmd/set-sort-order k])} text]))]))

(defn cmp-map
  [cmp-id]
  (r/cmp-map {:cmp-id  cmp-id
              :view-fn sort-view
              :dom-id  "sort-buttons"}))
