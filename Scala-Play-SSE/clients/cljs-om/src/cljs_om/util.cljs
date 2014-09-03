(ns cljs-om.util
  (:require [clojure.string :as s]
            [tailrecursion.priority-map :refer [priority-map-by]]))

(defn search-hash []
  (subs (js/decodeURIComponent (aget js/window "location" "hash")) 1))

(defn number-format [number]
  "formats a number for display, e.g. 1.7K, 122K or 1.5M followers"
  (cond
    (< number 1000) (str number)
    (< number 100000) (str (/ (.round js/Math (/ number 100)) 10) "K")
    (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
    :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn from-now [date]
  "format date using the external moment.js library"
  (let [time-string (. (js/moment. date) (fromNow true))]
    (if (= time-string "a few seconds") "just now" time-string)))

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
  (when ())
  (assoc tweet :html-text
    (-> (:text tweet)
        (reducer , (:urls (:entities tweet)) url-replacer)
        (reducer , (:media (:entities tweet)) url-replacer)
        (reducer , (:user_mentions (:entities tweet)) mentions-replacer)
        (reducer , (:hashtags (:entities tweet)) hashtags-replacer)
        (s/replace , "RT " "<strong>RT </strong>"))))

(defn entity-count [tweet sym s]
  "gets count of specified entity from either tweet, or, when exists, original (retweeted) tweet"
  (let [rt-id (if (contains? tweet :retweeted_status) (:id_str (:retweeted_status tweet)) (:id_str tweet))
        count (sym ((keyword rt-id) (:retweets @cljs-om.core/app-state)))]
    (if (not (nil? count)) (str (number-format count) s) "")))

(defn rt-count [tweet] (entity-count tweet :retweet_count " RT | "))
(defn fav-count [tweet] (entity-count tweet :favorite_count " fav"))

(defn rt-count-since-startup [tweet]
  "gets RT count since startup for tweet, if exists returns formatted string"
  (let [t (if (contains? tweet :retweeted_status) (:retweeted_status tweet) tweet)
        count ((keyword (:id_str t)) (:by-rt-since-startup @cljs-om.core/app-state))]
    (if (> count 0) (str (number-format count) " RTs analyzed | ") "")))

(defn swap-pmap [app priority-map id n]
  "swaps item in priority-map"
  (swap! app assoc priority-map (assoc (priority-map @app) id n)))

(defn initial-state []
  "function returning fresh application state"
  {:count 0        :n 10            :retweets {}
   :tweets-map {}  :search-text ""  :page 1
   :search "*"     :stream nil
   :sorted :by-rt-since-startup
   :by-followers (priority-map-by >)
   :by-retweets (priority-map-by >)
   :by-favorites (priority-map-by >)
   :by-rt-since-startup (priority-map-by >)
   :by-id (priority-map-by >)
   :words-sorted-by-count (priority-map-by >)})

(defn tweets-by-order [tweets-map order]
  "find top n tweets by specified order"
  (fn [app n skip]
      (vec (map (fn [m] ((keyword (first m))(tweets-map app))) (take n (drop (* n skip) (order app)))))))
