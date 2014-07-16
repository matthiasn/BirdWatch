(ns cljs-om.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]))

(enable-console-print!)

(defn count-view [app owner]
  "rendering tweet counter"
  (reify
    om/IRender
    (render [this]
      (dom/span nil (:count app)))))

(def find-tweets {:by-id (util/tweets-by-order :tweets-map :by-id)
                  :by-followers (util/tweets-by-order :tweets-map :by-followers)
                  :by-retweets (util/tweets-by-order :retweets :by-retweets)
                  :by-favorites (util/tweets-by-order :retweets :by-favorites)
                  :by-rt-since-startup (util/tweets-by-order :retweets :by-rt-since-startup)})

(defn sort-button-js [app key]
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
                     (dom/button (sort-button-js app :by-favorites) "favorites")))))

(defn handle-search-change [e app]
  (swap! cljs-om.core/app-state assoc :search-text (.. e -target -value)))

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
                                     :onKeyPress #(when (== (.-keyCode %) 13) (cljs-om.core/start-search))
                                     :onChange #(handle-search-change % app)})
                     (dom/span #js {:className "input-group-btn"}
                               (dom/button #js {:className "btn btn-primary" :onClick #(cljs-om.core/start-search)}
                                           (dom/span #js {:className "glyphicon glyphicon-search"})))))))

(defn tweet-view [tweet owner]
  "rendering single tweet card"
  (reify
    om/IRender
    (render [this]
      (let [user (:user tweet)
            screen-name (:screen_name user)
            href (str "http://www.twitter.com/" screen-name)]
        (dom/div #js {:className "tweet"}
                 (dom/span nil (dom/a #js {:href href :target "_blank"}
                                      (dom/img #js {:className "thumbnail" :src (:profile_image_url user)})))
                 (dom/a #js {:href href :target "_blank"}
                        (dom/span #js {:className "username" :src (:profile_image_url user)} (:name user)))
                 (dom/span #js {:className "username_screen"} (str " @" screen-name))
                 (dom/div #js {:className "pull-right timeInterval"} (util/from-now (:created_at tweet)))
                 (dom/div  #js {:className "tweettext"}
                           (dom/div #js {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}})
                           (dom/div #js {:className "pull-left timeInterval"}
                                   (str (util/number-format (:followers_count user)) " followers"))
                           (dom/div #js {:className "pull-right timeInterval"}
                                    (str (util/rt-count-since-startup tweet)
                                         (util/rt-count tweet)
                                         (util/fav-count tweet)))))))))

(defn tweets-view [app owner]
  "rendering tweet list"
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (apply dom/div nil (om/build-all tweet-view (((:sorted app) find-tweets) app (:n app))))))))
