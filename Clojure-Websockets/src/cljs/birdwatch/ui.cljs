(ns birdwatch.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [birdwatch.util :as util]
            [birdwatch.channels :as c]
            [birdwatch.communicator :as comm]
            [birdwatch.state :as state]
            [cljs.core.async :as async :refer [<! chan put!]]))

(enable-console-print!)

(defn count-view [app owner]
  "rendering tweet counter"
  (reify
    om/IRender
    (render [this] (dom/span nil (:count app)))))

(defn users-count-view [app owner]
  "rendering users counter"
  (reify
    om/IRender
    (render [this]
            (let [users (:users-count app)]
              (dom/span nil "Connected: " (dom/strong nil users) (if (> users 1) " users" " user"))))))

(defn total-count-view [app owner]
  "rendering total tweets counter"
  (reify
    om/IRender
    (render [this]
            (dom/span nil "Indexed: " (dom/strong nil (:total-tweet-count app)) " tweets"))))

(defn sort-button-js [app key]
  "generates JS for sort button for both updating sort order and showing active button"
  #js {:onClick (fn [e] (om/update! app [:sorted] key))
       :className (str "btn " (if (= key (:sorted app)) "btn-primary"))})

(defn sort-buttons-view [app owner]
  "rendering sort buttons"
  (reify
    om/IRender
    (render [this]
            (dom/div #js {:className "btn-group"}
                     (dom/button #js {:className "btn"} "Sort by")
                     (dom/button (sort-button-js app :by-id) "latest")
                     (dom/button (sort-button-js app :by-followers) "followers")
                     (dom/button (sort-button-js app :by-retweets) "retweets")
                     (dom/button (sort-button-js app :by-rt-since-startup) "retweets2")
                     (dom/button (sort-button-js app :by-reach) "reach")
                     (dom/button (sort-button-js app :by-favorites) "favorites")))))

(defn handle-search-change [e app]
  (swap! state/app assoc :search-text (.. e -target -value)))

(defn search-view [app owner]
  "rendering search bar"
  (reify
    om/IRender
    (render [this]
            (dom/div #js {:className "input-group"}
                     (dom/input #js {:className "form-control"
                                     :type "text" :ref "new-contact"
                                     :value (:search-text (om/get-props owner))
                                     :placeholder "Example search: java (job OR jobs OR hiring)"
                                     :onKeyPress #(when (== (.-keyCode %) 13) (comm/start-search))
                                     :onChange #(handle-search-change % app)})
                     (dom/span #js {:className "input-group-btn"}
                               (dom/button #js {:className "btn btn-primary" :onClick #(comm/start-search)}
                                           (dom/span #js {:className "glyphicon glyphicon-search"})))))))

(defn pag-items [app page-change-chan]
  "function creating pagination items"
  (map #(dom/li #js {:className (if (= % (:page app)) "active" "") :onClick (fn [e] (put! page-change-chan %))}
                (dom/a nil %))
       (take 25 (range 1 (Math/floor (/ (:count app) (:n app)))))))

(defn pagination-view [app owner]
  "rendering pagination list"
  (reify
    om/IInitState
    (init-state [_]
      {:page-change (chan)})
    om/IWillMount
    (will-mount [_]
      (let [page-change (om/get-state owner :page-change)]
        (go (loop []
          (let [page (<! page-change)]
            (om/update! app :page page)
            (recur))))))
    om/IRenderState
    (render-state [this {:keys [page-change]}]
                  (apply dom/ul #js {:className "pagination-mini"}
                         (flatten [(dom/li nil (dom/a nil "Page"))
                                   (pag-items app page-change)])))))
