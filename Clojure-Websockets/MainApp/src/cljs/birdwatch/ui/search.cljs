(ns birdwatch.ui.search
  (:require [matthiasn.systems-toolbox.reagent :as r]))

(defn- search-view
  [{:keys [observed put-fn]}]
  [:form.pure-form
   [:fieldset
    [:input {:type "text" :value (:search-text @observed)
             :on-key-press #(when (== (.-keyCode %) 13) (put-fn [:start-search]))
             :on-change #(put-fn [:set-search-text (.. % -target -value)])
             :placeholder "Example search: java (job OR jobs OR hiring)"}]
    [:button.pure-button.pure-button-primary {:on-click #(put-fn [:start-search])}
     [:span {:class "glyphicon glyphicon-search"}]]]])

(defn component
  [cmp-id]
  (r/component {:cmp-id  cmp-id
                :view-fn search-view
                :dom-id  "search"}))
