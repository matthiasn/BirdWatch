(ns birdwatch.ui.ui
  (:require [reagent.core :as rc]
            [re-frame.core :refer [reg-sub subscribe]]
            [re-frame.db :as rdb]
            [birdwatch.ui.tweets :as t]
            [birdwatch.charts.ts-chart :as tsc]
            [birdwatch.charts.cloud-chart :as cloud]
            [birdwatch.charts.wordcount-chart :as wc-c]
            [birdwatch.ui.search :as search]))

(reg-sub :cfg (fn [db _] (:cfg db)))
(reg-sub :search-text (fn [db _] (:search-text db)))
(reg-sub :count (fn [db _] (:count db)))
(reg-sub :page (fn [db _] (:page db)))
(reg-sub :n (fn [db _] (:n db)))
(reg-sub :sorted (fn [db _] (:sorted db)))
(reg-sub :live (fn [db _] (:live db)))
(reg-sub :app (fn [db _] db))
(reg-sub :ts-data (fn [db _] (:ts-data db)))
(reg-sub :users-count (fn [db _] (:users-count db)))
(reg-sub :total-tweet-count (fn [db _] (:total-tweet-count db)))
(reg-sub :words-counts (fn [db _] (:words-sorted-by-count db)))

(defn footer-view
  []
  (let [users-count (subscribe [:users-count])
        count (subscribe [:count])
        total-tweet-count (subscribe [:total-tweet-count])]
    (fn footer-view []
      [:div.footer
       [:div "Indexed: " [:strong @total-tweet-count] " tweets"]
       [:div (let [users @users-count]
               [:span "Connected: " [:strong users]
                (if (= users 1) " user" " users")])]
       [:div "Tweets: " [:span @count]]])))

(defn birdwatch-ui
  "Main view component"
  [put-fn]
  [:div.grid
   [:div.menu
    [:h1 {:href ""} "Birdwatch"]
    [:div [:a {:href   "https://github.com/matthiasn/Birdwatch"
               :target "_blank"} "GitHub"]]
    [:div [:a {:href   "https://leanpub.com/building-a-system-in-clojure"
               :target "_blank"}
           "About"]]]
   [search/header-view put-fn]
   [:div.left
    [t/tweets-view put-fn]]
   [:div.right
    [tsc/ts-chart2]
    [cloud/cloud-view put-fn]
    [wc-c/wordcount-barchart put-fn]]
   [footer-view]])

(defn state-fn
  "Renders main view component and wires the central re-frame app-db as the
   observed component state, which will then be updated whenever the store-cmp
   changes."
  [put-fn]
  (rc/render [birdwatch-ui put-fn] (.getElementById js/document "ui"))
  {:observed rdb/app-db})

(defn cmp-map
  [cmp-id]
  {:cmp-id   cmp-id
   :state-fn state-fn})
