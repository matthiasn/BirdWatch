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


(defn replace-screenname [acc entity]

  )

(defn replace-entity [text coll]
  (reduce (fn [acc mention]
            (let [screen-name (:screen_name mention)]
              (s/replace acc screen-name (str screen-name screen-name))))
          text
          coll))

(defn format-tweet [tweet]
  (->
    (s/replace (:text tweet) "RT " "<strong>RT </strong>")
    (replace-entity , (:user_mentions (:entities tweet)))
    (s/replace , "@" "<strong>@</strong>") ))

(def app-state (atom {}))


(defn tweet-view [tweet owner]
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
                          (dom/div #js {:dangerouslySetInnerHTML #js {:__html (format-tweet tweet)}}
                                   )
                          (dom/div #js {:className "pull-left timeInterval"}
                                   (str (number-format (:followers_count user)) " followers")) ))))))

(defn tweets-view [app owner]
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

(defn print-some [tweet]
  (if
    (> (:followers_count (:user tweet)) 1000)
    (do
      (swap! app-state assoc :tweet tweet)
      (swap! app-state assoc :tweets (conj (:tweets @app-state) tweet)))))

(defn receive-sse [e]
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (print-some tweet)))

(def stream (js/EventSource. "/tweetFeed?q=*"))

(.addEventListener stream
                   "message"
                   (fn [e] (receive-sse e))
                   false)
