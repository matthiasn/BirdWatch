(ns birdwatch.ui.count-views
  (:require [matthiasn.systems-toolbox.reagent :as r]))

(defn- count-view [app] [:span (:count @app)])

(defn- users-count-view [app]
  (let [users (:users-count @app)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn- total-count-view [app]
  [:span "Indexed: " [:strong (:total-tweet-count @app)] " tweets"])

(defn count-component     [cmp-id] (r/component cmp-id count-view "tweet-count" {}))
(defn users-cnt-component [cmp-id] (r/component cmp-id users-count-view "users-count" {}))
(defn total-cnt-component [cmp-id] (r/component cmp-id total-count-view "total-tweet-count" {}))
