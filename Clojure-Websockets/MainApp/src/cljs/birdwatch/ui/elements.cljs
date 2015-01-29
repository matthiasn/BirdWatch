(ns birdwatch.ui.elements
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.util :as util]
            [cljs.core.async :as async :refer [put! pipe chan sub timeout sliding-buffer]]
            [reagent.core :as r :refer [atom]]))

(def cmd-chan (chan))
(defn- put-cmd [msg] (put! cmd-chan msg))

(defn- count-view [app] [:span (:count @app)])

(defn- users-count-view [app]
  (let [users (:users-count @app)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn- total-count-view [app]
  [:span "Indexed: " [:strong (:total-tweet-count @app)] " tweets"])

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

(defn- pag-item [idx app]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= idx (:page @app)) " pure-button-primary")
    :on-click #(put-cmd [:set-current-page idx])} idx])

(defn- pag-size-item [n app]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (when (= n (:n @app)) " pure-button-primary")
    :on-click #(put-cmd [:set-page-size n])} n])

(defn- pagination-view [app]
  [:div
   [:button.pure-button.not-rounded.button-xsmall [:strong "Page:"]]
   (for [idx (take 15 (range 1 (Math/floor (/ (:count @app) (:n @app)))))]
     ^{:key idx} [pag-item idx app])
   [:button.pure-button.not-rounded.button-xsmall [:strong "per Page:"]]
   (for [n [5 10 25 100]]
     ^{:key (str "pag-size" n)} [pag-size-item n app])])

(def views [[count-view "tweet-count"][total-count-view "total-tweet-count"]
            [search-view "search"][users-count-view "users-count"]
            [sort-view "sort-buttons"][pagination-view "pagination"]])

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

