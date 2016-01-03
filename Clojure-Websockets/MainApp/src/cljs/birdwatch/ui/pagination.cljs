(ns birdwatch.ui.pagination
  (:require [matthiasn.systems-toolbox-ui.reagent :as r]))

(defn- pag-item [idx app put-fn]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= idx (:page @app)) " pure-button-primary")
    :on-click #(put-fn [:set-current-page idx])} idx])

(defn- pag-size-item [n app put-fn]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= n (:n @app)) " pure-button-primary")
    :on-click #(put-fn [:set-page-size n])} n])

(defn- pagination-view
  [{:keys [observed put-fn]}]
  [:div
   [:button.pure-button.not-rounded.button-xsmall [:strong "Page:"]]
   (for [idx (take 15 (range 1 (Math/floor (/ (:count @observed) (:n @observed)))))]
     ^{:key idx} [pag-item idx observed put-fn])
   [:button.pure-button.not-rounded.button-xsmall [:strong "per Page:"]]
   (for [n [5 10 25 100]]
     ^{:key (str "pag-size" n)} [pag-size-item n observed put-fn])])

(defn cmp-map
  [cmp-id]
  (r/cmp-map {:cmp-id  cmp-id
              :view-fn pagination-view
              :dom-id  "pagination"}))
