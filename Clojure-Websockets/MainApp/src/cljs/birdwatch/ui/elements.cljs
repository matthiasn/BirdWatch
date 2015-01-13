(ns birdwatch.ui.elements
  (:require [birdwatch.util :as util]
            [birdwatch.state :as state]
            [birdwatch.ui.tweets :as ui-tweets]
            [cljs.core.async :as async :refer [put! pipe chan]]
            [reagent.core :as r]))

(enable-console-print!)

(def cmd-out-chan (chan))

(defn count-view [] [:span (:count @state/app)])

(defn users-count-view []
  (let [users (:users-count @state/app)]
    [:span "Connected: " [:strong users] (if (= users 1) " user" " users")]))

(defn total-count-view []
  [:span "Indexed: " [:strong (:total-tweet-count @state/app)] " tweets"])

(def sort-orders [[:by-id "latest"][:by-followers "followers"][:by-retweets "retweets"]
                  [:by-rt-since-startup "retweets2"][:by-reach "reach"][:by-favorites "favorites"]])

(defn sort-view []
  (let [curr-order (:sorted @state/app)]
    [:div
     [:button.pure-button.not-rounded.sort-button "Sort by"]
     (for [[k text] sort-orders :let [btn-class (if (= k curr-order) " pure-button-primary" " sort-button")]]
       ^{:key text} [:button.pure-button.not-rounded
                     {:class btn-class :on-click #(put! cmd-out-chan [:set-sort-order k])} text])]))

(defn search-view []
  [:form.pure-form
   [:fieldset
    [:input {:type "text" :value (:search-text @state/app)
             :on-key-press #(when (== (.-keyCode %) 13) (put! cmd-out-chan [:start-search]))
             :on-change #(put! cmd-out-chan [:set-search-text (.. % -target -value)])
             :placeholder "Example search: java (job OR jobs OR hiring)"}]
    [:button.pure-button.pure-button-primary {:on-click #(put! cmd-out-chan [:start-search])}
     [:span {:class "glyphicon glyphicon-search"}]]]])

(defn pag-item [idx]
  [:button.pure-button.not-rounded.button-xsmall
   {:class (if (= idx (:page @state/app)) " pure-button-primary" "")
    :on-click #(put! cmd-out-chan [:set-current-page idx])} idx])

(defn pagination-view []
  [:div
   [:button.pure-button.not-rounded.button-xsmall "Page"]
   (for [idx (take 15 (range 1 (Math/floor (/ (:count @state/app) (:n @state/app)))))]
     ^{:key idx} [pag-item idx])])

(def views [[count-view "tweet-count"][search-view "search"][total-count-view "total-tweet-count"]
            [users-count-view "users-count"][sort-view "sort-buttons"][pagination-view "pagination"]])

(defn init-views
  "Initialize all views contained in the vector above and connect channel for outgoing command
   messages (e.g. for altering state)"
  [cmd-chan]
  (pipe cmd-out-chan cmd-chan)
  (doseq [[component id] views]
    (r/render-component [component] (util/by-id id)))
  (r/render-component [ui-tweets/tweets-view cmd-chan] (util/by-id "tweet-frame")))
