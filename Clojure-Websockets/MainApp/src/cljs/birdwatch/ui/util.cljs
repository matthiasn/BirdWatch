(ns birdwatch.ui.util
  (:require [clojure.string :as s]))

(defn by-id [id] (.getElementById js/document id))

(defn number-format
  "formats a number for display, e.g. 1.7K, 122K or 1.5M followers"
  [number]
  (cond
   (< number 1000) (str number)
   (< number 100000) (str (/ (.round js/Math (/ number 100)) 10) "K")
   (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
   :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn from-now
  "format date using the external moment.js library"
  [date]
  (let [time-string (. (js/moment. date) (fromNow true))]
    (if (= time-string "a few seconds") "just now" time-string)))

(def twitter-url "https://twitter.com/")
(defn a-blank [url text] (str "<a href='" url "' target='_blank'>" text "</a>"))

(defn- url-replacer
  "replace URL occurences in tweet texts with HTML (including links)"
  [acc entity]
  (s/replace acc (:url entity) (a-blank (:url entity) (:display_url entity))))

(defn- hashtags-replacer
  "replace hashtags in tweet text with HTML (including links)"
  [acc entity]
  (let [hashtag (:text entity)
        f-hashtag (str "#" hashtag)]
    (s/replace acc f-hashtag (a-blank (str twitter-url "search?q=%23" hashtag) f-hashtag))))

(defn- mentions-replacer
  "replace user mentions in tweet text with HTML (including links)"
  [acc entity]
  (let [screen-name (:screen_name entity)
        f-screen-name (str "@" screen-name)]
    (s/replace acc f-screen-name (a-blank (str twitter-url screen-name) f-screen-name))))

(defn- reducer
  "generic reducer, allowing to call specified function for each item in collection"
  [text coll fun]
  (reduce fun text coll))

(defn format-tweet
  "format tweet text for display"
  [tweet]
  (let [{:keys [urls media user_mentions hashtags]} (:entities tweet)]
    (assoc tweet :html-text
      (-> (:text tweet)
          (reducer , urls url-replacer)
          (reducer , media url-replacer)
          (reducer , user_mentions mentions-replacer)
          (reducer , hashtags hashtags-replacer)
          (s/replace , "RT " "<strong>RT </strong>")))))

(defn entity-count
  "gets count of specified entity from either tweet, or, when exists, original (retweeted) tweet"
  [tweet app sym s]
  (let [rt-id (if (contains? tweet :retweeted_status) (:id_str (:retweeted_status tweet)) (:id_str tweet))
        count (sym ((keyword rt-id) (:tweets-map app)))]
    (if (not (nil? count)) (str (number-format count) s) "")))

(defn rt-count [tweet app] (entity-count tweet app :retweet_count " RT | "))
(defn fav-count [tweet app] (entity-count tweet app :favorite_count " fav"))

(defn rt-count-since-startup
  "gets RT count since startup for tweet, if exists returns formatted string"
  [tweet app]
  (let [t (if (contains? tweet :retweeted_status) (:retweeted_status tweet) tweet)
        cnt ((keyword (:id_str t)) (:by-rt-since-startup app))
        reach ((keyword (:id_str t)) (:by-reach app))]
    (if (> cnt 0) (str "analyzed: " (number-format cnt) " retweets, reach " (number-format reach)))))

(defn tweets-by-order
  "find top n tweets by specified order"
  [order app n skip]
  (map (fn [[k v]] (get (:tweets-map app) k {:id_str (name k)}))
       (->> (order app)
            (drop (* n skip) ,)
            (take n ,))))
