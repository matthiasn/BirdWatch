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

(defn tweets-by-followers [app n]
  "find top n tweets by followers of the author in descending order"
  (vec (map (fn [m] ((keyword (:id m))(:tweets-map app))) (take n (:by-followers app)))))

(defn tweets-by-retweets [app n]
  "find top n tweets by retweets in descending order"
  (vec (map (fn [m] ((keyword (:id m)) (:tweets-map app))) (take n (:by-retweets app)))))

(defn tweets-by-rt-since-startup [app n]
  "find top n tweets by retweets in descending order"
  (vec (map (fn [m] ((keyword (:id m)) (:tweets-map app))) (take n (:by-rt-since-startup app)))))

(defn tweets-by-favorites [app n]
  "find top n tweets by retweets in descending order"
  (vec (map (fn [m] ((keyword (:id m))(:tweets-map app))) (take n (:by-favorites app)))))

(defn tweets-by-id [app n]
  "find top n tweets sorted by ID in descending order"
  (vec (map (fn [m] ((keyword m)(:tweets-map app))) (take n (:by-id app)))))

(def find-tweets {:by-id tweets-by-id
                  :by-followers tweets-by-followers
                  :by-retweets tweets-by-retweets
                  :by-favorites tweets-by-favorites
                  :by-rt-since-startup tweets-by-rt-since-startup})

(defn sort-button [app key]
  #js {:onClick (fn [e] (om/update! app [:sorted] key))
       :className (str "btn " (if (= key (:sorted app)) "btn-primary"))})

(defn sort-buttons-view [app owner]
  "rendering sort buttons"
  (reify
    om/IRender
    (render [this]
            (dom/div #js {:className "btn-group"}
                     (dom/button #js {:className "btn"} "Sort by")
                     (dom/button (sort-button app :by-id) "latest")
                     (dom/button (sort-button app :by-followers) "followers")
                     (dom/button (sort-button app :by-retweets) "retweets")
                     (dom/button (sort-button app :by-rt-since-startup) "retweets2")
                     (dom/button (sort-button app :by-favorites) "favorites")))))

(defn tweet-view [tweet owner]
  "rendering single tweet card"
  (reify
    om/IRender
    (render [this]
      (let [user (:user tweet)
            screen-name (:screen_name user)
            href (str "http://www.twitter.com/" screen-name)]
        (dom/div #js {:className "tweet"}
                 (dom/span nil
                           (dom/a #js {:href href :target "_blank"}
                                  (dom/img #js {:className "thumbnail" :src (:profile_image_url user)})))
                 (dom/a #js {:href href :target "_blank"}
                        (dom/span #js {:className "username" :src (:profile_image_url user)} (:name user)))
                 (dom/span #js {:className "username_screen"} (str " @" screen-name))
                 (dom/div #js {:className "pull-right timeInterval"}
                          (util/from-now (:created_at tweet)))
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
               (apply dom/div nil
                      (om/build-all tweet-view (((:sorted app) find-tweets) app (:n app))))))))
