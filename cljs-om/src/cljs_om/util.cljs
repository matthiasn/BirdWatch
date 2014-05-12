(ns cljs-om.util
  (:require [clojure.string :as s]))

(defn number-format [number]
  "formats a number for display, e.g. 1.7K, 122K or 1.5M followers"
  (cond
    (< number 1000) (str number)
    (< number 100000) (str (/ (.round js/Math (/ number 100))10) "K")
    (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
    :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn from-now [date]
  "format date using the external moment.js library"
  (let [time-string (. (js/moment. date) (fromNow true))]
    (if (= time-string "a few seconds")
      "just now"
      time-string)))

(defn url-replacer [acc entity]
  "replace URL occurences in tweet texts with HTML (including links)"
  (s/replace acc (:url entity)
             (str "<a href='" (:url entity) "' target='_blank'>" (:display_url entity) "</a>")))

(defn hashtags-replacer [acc entity]
  "replace hashtags in tweet text with HTML (including links)"
  (let [hashtag (:text entity)]
    (s/replace acc (str "#" hashtag)
                         (str "<a href='https://twitter.com/search?q=%23" hashtag "' target='_blank'>#" hashtag "</a>"))))

(defn mentions-replacer [acc entity]
  "replace user mentions in tweet text with HTML (including links)"
  (let [screen-name (:screen_name entity)]
    (s/replace acc (str "@" screen-name)
               (str "<a href='http://www.twitter.com/" screen-name "' target='_blank'>@" screen-name "</a>"))))

(defn reducer [text coll fun]
  "generic reducer, allowing to call specified function for each item in collection"
  (reduce fun text coll))

(defn format-tweet [tweet]
  "format tweet text for display"
  (assoc tweet :html-text
    (-> (:text tweet)
        (reducer , (:urls (:entities tweet)) url-replacer)
        (reducer , (:user_mentions (:entities tweet)) mentions-replacer)
        (reducer , (:hashtags (:entities tweet)) hashtags-replacer)
        (s/replace , "RT " "<strong>RT </strong>"))))

(defn entity-count [tweet sym s]
  "gets count of specified entity from either tweet, or, when exists, original (retweeted) tweet"
  (-> (if (contains? tweet :retweeted_status)
        (sym (:retweeted_status tweet))
        (sym tweet))
      (number-format ,)
      (str , s)))

(defn rt-count [tweet] (entity-count tweet :retweet_count " RT | "))
(defn fav-count [tweet] (entity-count tweet :favorite_count " fav"))

(defn rt-count-since-startup [tweet]
  "gets RT count since startup for tweet, if exists returns formatted string"
  (let [t (if (contains? tweet :retweeted_status)
            (:retweeted_status tweet)
            tweet)
        count ((keyword (:id_str t)) (:rt-since-startup @cljs-om.core/app-state))]
    (if (> count 0)
      (str (number-format count) " RT since startup | ")
      "")))
