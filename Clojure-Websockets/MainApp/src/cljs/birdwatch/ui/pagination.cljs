(ns birdwatch.ui.pagination
  (:require [re-frame.core :refer [subscribe]]))

(defn pag-item
  ""
  [idx put-fn]
  (let [page (subscribe [:page])]
    (fn pag-render [idx put-fn]
      [:button.pure-button.not-rounded.button-xsmall
       {:class    (when (= idx @page) " pure-button-primary")
        :on-click #(put-fn [:cmd/set-current-page idx])} idx])))

(defn pag-size-item
  ""
  [p-size put-fn]
  (let [n (subscribe [:n])]
    (fn pag-size-render [p-size put-fn]
      [:button.pure-button.not-rounded.button-xsmall
       {:class    (when (= p-size @n) " pure-button-primary")
        :on-click #(put-fn [:cmd/set-page-size p-size])} p-size])))

(defn pagination-view
  ""
  [put-fn]
  (let [count (subscribe [:count])
        n (subscribe [:n])]
    (fn pagination-render [put-fn]
      [:div
       [:button.pure-button.not-rounded.button-xsmall [:strong "Page:"]]
       (for [idx (take 15 (range 1 (Math/floor (/ @count @n))))]
         ^{:key idx} [pag-item idx put-fn])
       [:button.pure-button.not-rounded.button-xsmall [:strong "per Page:"]]
       (for [p-size [5 10 25 100]]
         ^{:key (str "pag-size" p-size)} [pag-size-item p-size put-fn])])))
