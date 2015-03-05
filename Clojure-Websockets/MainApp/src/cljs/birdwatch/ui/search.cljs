(ns birdwatch.ui.search
  (:require [birdwatch.util :as util]
            [reagent.core :as r :refer [atom]]))

(defn- search-view [app put-fn]
  [:form.pure-form
   [:fieldset
    [:input {:type "text" :value (:search-text @app)
             :on-key-press #(when (== (.-keyCode %) 13) (put-fn [:start-search]))
             :on-change #(put-fn [:set-search-text (.. % -target -value)])
             :placeholder "Example search: java (job OR jobs OR hiring)"}]
    [:button.pure-button.pure-button-primary {:on-click #(put-fn [:start-search])}
     [:span {:class "glyphicon glyphicon-search"}]]]])

(defn init-component
  "Mounts search-view component. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom {})]
    (r/render-component [search-view app put-fn] (util/by-id "search"))
    (fn [[_ state-snapshot]]
      (reset! app state-snapshot))))