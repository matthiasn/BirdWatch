(ns birdwatch.ui.pagination
  (:require [matthiasn.systems-toolbox.reagent :as r]))

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

(defn component [cmp-id] (r/component cmp-id pagination-view "pagination" {}))
