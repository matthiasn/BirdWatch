(ns cljs-om.util
  (:require [clojure.string :as s]))

(defn number-format [number]
  "formats a number for display, e.g. 1.7K, 122K or 1.5M followers"
  (cond
    (< number 1000) (str number)
    (< number 100000) (str (/ (.round js/Math (/ number 100))10) "K")
    (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
    :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn url-replacer [acc entity]
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

(defn rt-count [tweet]
  (-> (if (contains? tweet :retweeted_status)
        (:retweet_count (:retweeted_status tweet))
        (:retweet_count tweet))
      (number-format ,)
      (str , " RT")))

(defn fav-count [tweet]
  (-> (if (contains? tweet :retweeted_status)
        (:favorite_count (:retweeted_status tweet))
        (:favorite_count tweet))
      (number-format ,)
      (str , " fav ")))
