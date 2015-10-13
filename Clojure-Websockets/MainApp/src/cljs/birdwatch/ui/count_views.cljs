(ns birdwatch.ui.count-views
  (:require [matthiasn.systems-toolbox.reagent :as r]))

(defn- count-view
  [{:keys [observed]}]
  [:span (:count @observed)])

(defn- users-count-view
  [{:keys [observed]}]
  (let [users (:users-count @observed)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn- total-count-view
  [{:keys [observed]}]
  [:span "Indexed: " [:strong (:total-tweet-count @observed)] " tweets"])

(defn count-cmp-map
  [cmp-id]
  (r/cmp-map {:cmp-id  cmp-id
              :view-fn count-view
              :dom-id  "tweet-count"}))

(defn users-cmp-map
  [cmp-id]
  (r/cmp-map {:cmp-id  cmp-id
              :view-fn users-count-view
              :dom-id  "users-count"}))

(defn total-cmp-map
  [cmp-id]
  (r/cmp-map {:cmp-id  cmp-id
              :view-fn total-count-view
              :dom-id  "total-tweet-count"}))
