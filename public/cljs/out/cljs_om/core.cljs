(ns cljs-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as s]))

(enable-console-print!)

(defn number-format [number]
  "formats a number for display, e.g. 1.7K, 122K or 1.5M followers"
  (cond
    (< number 1000) (str number)
    (< number 100000) (str (/ (.round js/Math (/ number 100))10) "K")
    (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
    :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn url-replacer [acc entity]
  (print entity)
  (s/replace acc (:url entity)
             (str "<a href='" (:url entity) "' target='_blank'>" (:display_url entity) "</a>")))

(defn hashtags-replacer [acc entity]
  (let [hashtag (:text entity)]
    (s/replace acc (str "#" hashtag)
                         (str "<a href='https://twitter.com/search?q=%23" hashtag "' target='_blank'>#" hashtag "</a>"))))

(defn mentions-replacer [acc entity]
   (let [screen-name (:screen_name entity)]
     (s/replace acc (str "@" screen-name)
                         (str "<a href='http://www.twitter.com/" screen-name "' target='_blank'>@" screen-name "</a>"))))

(defn replacer [text coll fun]
  (reduce fun text coll))

(defn format-tweet [tweet]
  (assoc tweet :html-text
    (-> (:text tweet)
        (replacer , (:urls (:entities tweet)) url-replacer)
        (replacer , (:user_mentions (:entities tweet)) mentions-replacer)
        (replacer , (:hashtags (:entities tweet)) hashtags-replacer)
        (s/replace , "RT " "<strong>RT </strong>"))))


(def app-state (atom {:count 0}))

(defn rt-count [tweet]
  (let [count (:retweet_count (:retweeted_status tweet))]
    (if (> count 0)
      (str (number-format count) " RT"))))

(defn fav-count [tweet]
  (let [count (:favorite_count (:retweeted_status tweet))]
    (if (> count 0)
      (str (number-format count) " fav "))))


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
                 (dom/div  #js {:className "tweettext"}
                           (dom/div #js {:dangerouslySetInnerHTML #js {:__html (:html-text tweet)}})
                           (dom/div #js {:className "pull-left timeInterval"}
                                   (str (number-format (:followers_count user)) " followers"))
                           (dom/div #js {:className "pull-right timeInterval"}
                                    (str (fav-count tweet) (rt-count tweet)))))))))

(defn tweets-view [app owner]
  "rendering tweet list"
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (apply dom/div nil
                      (om/build-all tweet-view (:tweets app)))))))

(om/root
  tweets-view
  app-state
  {:target (. js/document (getElementById "tweet-frame"))})


(defn count-view [app owner]
  "rendering tweet counter"
  (reify
    om/IRender
    (render [this]
      (dom/span nil (:count app)))))

(om/root
  count-view
  app-state
  {:target (. js/document (getElementById "tweet-count"))})

(defn add-tweet2 [tweet]
  (if
    (> (:followers_count (:user tweet)) 1000)
    (do
      (swap! app-state assoc :count (inc (:count @app-state)))
      (swap! app-state assoc :tweets (conj (:tweets @app-state) (format-tweet tweet))))))

(defn add-tweet [tweet]
  (swap! app-state assoc :count (inc (:count @app-state)))
  (swap! app-state assoc :tweets (conj (:tweets @app-state) (format-tweet tweet))))

(defn receive-sse [e]
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (add-tweet tweet)))

(def stream (js/EventSource. "/tweetFeed?q=*"))

(.addEventListener stream
                   "message"
                   (fn [e] (receive-sse e))
                   false)
