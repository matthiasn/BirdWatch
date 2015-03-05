(ns birdwatch.ui.elements
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [cljs.core.async :refer [put! pipe chan sub timeout sliding-buffer]]
            [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(def cmd-chan (chan))
(defn- put-cmd [msg] (put! cmd-chan msg))

(def sort-orders [[:by-id "latest"][:by-followers "followers"]
                  [:by-retweets "retweets"][:by-rt-since-startup "retweets2"]
                  [:by-reach "reach"][:by-favorites "favorites"]])

(defn- btn-class? [p] (if p " pure-button-primary" " sort-button"))

(defn- sort-view [app]
  (let [curr-order (:sorted @app)]
    [:div
     [:button.pure-button.not-rounded
      {:class (btn-class? (:live @app)) :on-click #(put-cmd [:toggle-live])} "Live"]
     [:button.pure-button.not-rounded.sort-button "Sort by:"]
     (for [[k text] sort-orders :let [btn-class (btn-class? (= k curr-order))]]
       ^{:key text} [:button.pure-button.not-rounded
                     {:class btn-class :on-click #(put-cmd [:set-sort-order k])} text])]))

(defn- search-view [app]
  [:form.pure-form
   [:fieldset
    [:input {:type "text" :value (:search-text @app)
             :on-key-press #(when (== (.-keyCode %) 13) (put-cmd [:start-search]))
             :on-change #(put-cmd [:set-search-text (.. % -target -value)])
             :placeholder "Example search: java (job OR jobs OR hiring)"}]
    [:button.pure-button.pure-button-primary {:on-click #(put-cmd [:start-search])}
     [:span {:class "glyphicon glyphicon-search"}]]]])

(def views [[search-view "search"]
            [sort-view "sort-buttons"]])

(defn init-views
  "Initialize all views contained in the vector above and connect channel for
   outgoing command messages (e.g. for altering state)"
  [state-pub cmd-out-chan]
  (let [app (atom {})
        state-chan (chan (sliding-buffer 1))]
    (pipe cmd-chan cmd-out-chan)
    (go-loop []
             (let [[_ state-snapshot] (<! state-chan)]
               (reset! app state-snapshot)
               (<! (timeout 10))
               (recur)))
    (sub state-pub :app-state state-chan)
    (doseq [[component id] views] (r/render-component [component app] (util/by-id id)))))
