(ns birdwatch.ui.search
  (:require [re-frame.core :refer [subscribe]]
            [birdwatch.ui.sort :as sv]
            [birdwatch.ui.pagination :as p]))

(def s [:svg {:height "1em" :viewBox "0 0 1200 1200"}
        [:g {:transform "rotate(90 600 600)"}
         [:path {:fill :white :d "M23 693q0 200 142 342t342 142t342 -142t142 -342q0 -142 -78 -261l300 -300q7 -8 7 -18t-7 -18l-109 -109q-8 -7 -18 -7t-18 7l-300 300q-119 -78 -261 -78q-200 0 -342 142t-142 342zM176 693q0 -136 97 -233t234 -97t233.5 96.5t96.5 233.5t-96.5 233.5t-233.5 96.5 t-234 -97t-97 -233z"}]]])

(defn search-view
  [_put-fn]
  (let [search-text (subscribe [:search-text])]
    (fn [put-fn]
      [:div
       [:form.pure-form
        [:fieldset
         [:input {:type         "text"
                  :on-key-press #(when (== (.-keyCode %) 13)
                                   (put-fn [:cmd/start-search]))
                  :on-change    #(put-fn [:cmd/set-search-text
                                          (.. % -target -value)])
                  :value        @search-text
                  :placeholder  "Example search: java (job OR jobs OR hiring)"}]
         [:button.pure-button.pure-button-primary
          {:on-click #(put-fn [:cmd/start-search])}
          [:span s]]]]])))

(defn header-view
  "Renders search/pagination/sort header."
  [put-fn]
  [:div.controls
   [search-view put-fn]
   [p/pagination-view put-fn]
   [sv/sort-view put-fn]])
