(ns birdwatch.ui.count-views
  (:require [birdwatch.util :as util]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r :refer [atom]]))

(defn- count-view [app] [:span (:count @app)])

(defn- users-count-view [app]
  (let [users (:users-count @app)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn- total-count-view [app]
  [:span "Indexed: " [:strong (:total-tweet-count @app)] " tweets"])

(defn init-component
  "Mounts count view components. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom {})]
    (r/render-component [count-view app] (util/by-id "tweet-count"))
    (r/render-component [users-count-view app] (util/by-id "users-count"))
    (r/render-component [total-count-view app] (util/by-id "total-tweet-count"))
    (fn [[_ state-snapshot]]
      (reset! app state-snapshot))))
