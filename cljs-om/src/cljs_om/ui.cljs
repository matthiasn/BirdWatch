(ns cljs-om.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs.core.async :as async :refer [<! chan put!]]))

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

(defn twitter-intent [tweet intent icon]
  "generate link with button customized for specific tweet and intent"
  (dom/a #js {:href (str "https://twitter.com/intent/" intent (:id_str tweet))}
         (dom/img #js {:src (str "/assets/images/" icon)})))

(defn tweet-view [tweet owner]
  "rendering single tweet card"
  (reify
    om/IRender
    (render [this]
      (let [user (:user tweet)
            screen-name (:screen_name user)
            href (str "http://www.twitter.com/" screen-name)
            media (:media (:entities tweet))]
        (dom/div #js {:className "tweet"}
                 (dom/span nil (dom/a #js {:href href :target "_blank"}
                                      (dom/img #js {:className "thumbnail" :src (:profile_image_url user)})))
                 (dom/a #js {:href href :target "_blank"}
                        (dom/span #js {:className "username" :src (:profile_image_url user)} (:name user)))
                 (dom/span #js {:className "username_screen"} (str " @" screen-name))
                 (dom/div #js {:className "pull-right timeInterval"} (util/from-now (:created_at tweet)))
                 (dom/div #js {:className "tweettext"}
                           (dom/div #js {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}})
                           (dom/div #js {:className "pull-left timeInterval"}
                                   (str (util/number-format (:followers_count user)) " followers"))
                           (dom/div #js {:className "pull-right timeInterval"}
                                    (str (util/rt-count-since-startup tweet)
                                         (util/rt-count tweet)
                                         (util/fav-count tweet))))
                 (when (> (count media) 0)
                   (dom/div #js {:className "tweet-image"}
                          (dom/a #js {:href (:url (get media 0)) :target "_blank"}
                            (dom/img #js {:src (str (:media_url (get media 0)) ":small")}))))
                 (dom/div #js {:className "intent"}
                          (twitter-intent tweet "tweet?in_reply_to=" "reply.png")
                          (twitter-intent tweet "retweet?tweet_id=" "retweet.png")
                          (twitter-intent tweet "favorite?tweet_id=" "favorite.png")))))))

(defn tweets-view [app owner]
  "rendering tweet list"
  (reify
    om/IRender
    (render [this]
            (apply dom/div nil (om/build-all
                                tweet-view
                                (((:sorted app) find-tweets) app (:n app) (- (:page app) 1)))))))


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
