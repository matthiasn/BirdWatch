(ns birdwatch.ui.sort
  (:require [birdwatch.util :as util]
            [reagent.core :as r :refer [atom]]))

(def sort-orders [[:by-id "latest"][:by-followers "followers"]
                  [:by-retweets "retweets"][:by-rt-since-startup "retweets2"]
                  [:by-reach "reach"][:by-favorites "favorites"]])

(defn- btn-class? [p] (if p " pure-button-primary" " sort-button"))

(defn- sort-view [app put-fn]
  (let [curr-order (:sorted @app)]
    [:div
     [:button.pure-button.not-rounded
      {:class (btn-class? (:live @app)) :on-click #(put-fn [:toggle-live])} "Live"]
     [:button.pure-button.not-rounded.sort-button "Sort by:"]
     (for [[k text] sort-orders :let [btn-class (btn-class? (= k curr-order))]]
       ^{:key text} [:button.pure-button.not-rounded
                     {:class btn-class :on-click #(put-fn [:set-sort-order k])} text])]))

(defn init-component
  "Mounts search-view component. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom {})]
    (r/render-component [sort-view app put-fn] (util/by-id "sort-buttons"))
    (fn [[_ state-snapshot]]
      (reset! app state-snapshot))))