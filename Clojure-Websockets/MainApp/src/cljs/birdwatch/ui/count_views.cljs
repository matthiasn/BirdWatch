(ns birdwatch.ui.count-views
  (:require [matthiasn.systems-toolbox.reagent :as r]))

(defn- count-view [app] [:span (:count @app)])

(defn- users-count-view [app]
  (let [users (:users-count @app)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn- total-count-view [app]
  [:span "Indexed: " [:strong (:total-tweet-count @app)] " tweets"])

(defn count-component       [] (r/component :count-comp count-view "tweet-count" {}))
(defn users-count-component [] (r/component :users-count-comp users-count-view "users-count" {}))
(defn total-count-component [] (r/component :tt-count-comp total-count-view "total-tweet-count" {}))
