(ns birdwatch.ui.pagination
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [cljs.core.async :refer [put! pipe chan sub timeout sliding-buffer]]
            [reagent.core :as r :refer [atom]]))

(defn- pag-item [idx app put-fn]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= idx (:page @app)) " pure-button-primary")
    :on-click #(put-fn [:set-current-page idx])} idx])

(defn- pag-size-item [n app put-fn]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= n (:n @app)) " pure-button-primary")
    :on-click #(put-fn [:set-page-size n])} n])

(defn- pagination-view [app put-fn]
  [:div
   [:button.pure-button.not-rounded.button-xsmall [:strong "Page:"]]
   (for [idx (take 15 (range 1 (Math/floor (/ (:count @app) (:n @app)))))]
     ^{:key idx} [pag-item idx app put-fn])
   [:button.pure-button.not-rounded.button-xsmall [:strong "per Page:"]]
   (for [n [5 10 25 100]]
     ^{:key (str "pag-size" n)} [pag-size-item n app put-fn])])

(defn init-component
  "Mounts pagination-view component. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom {})]
    (r/render-component [pagination-view app put-fn] (util/by-id "pagination"))
    (fn [[_ state-snapshot]]
      (reset! app state-snapshot))))