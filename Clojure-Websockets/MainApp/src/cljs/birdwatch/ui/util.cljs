(ns birdwatch.ui.util
  (:require [clojure.string :as s]))

(defn by-id
  "Helper function, gets DOM element by ID."
  [id]
  (.getElementById js/document id))

(defn number-format
  "Formats a number for display, e.g. 1.7K, 122K or 1.5M followers."
  [number]
  (cond
   (< number 1000) (str number)
   (< number 100000) (str (/ (.round js/Math (/ number 100)) 10) "K")
   (< number 1000000) (str (.round js/Math (/ number 1000)) "K")
   :default (str (/ (.round js/Math (/ number 100000)) 10) "M")))

(defn from-now
  "Formats a date using the external moment.js library."
  [date]
  (let [time-string (.fromNow (js/moment. date "ddd MMM DD HH:mm:ss Z YYYY") true)]
    (if (= time-string "a few seconds") "just now" time-string)))

(defn entity-count
  "Gets count of specified entity from either tweet or, if exists, original (retweeted) tweet."
  [tweet state k s]
  (let [rt-id (if (contains? tweet :retweeted_status)
                (:id_str (:retweeted_status tweet))
                (:id_str tweet))
        count (k ((keyword rt-id) (:tweets-map state)))]
    (if count (str (number-format count) s) "")))

(defn rt-count
  "Gets the formatted string for the :retweet_count if exists, otherwise yields empty string."
  [tweet state]
  (entity-count tweet state :retweet_count " RT | "))

(defn fav-count
  "Gets the formatted string for the :favorite_count if exists, otherwise yields empty string."
  [tweet state]
  (entity-count tweet state :favorite_count " fav"))

(defn rt-count-since-startup
  "Gets RT count since startup for tweet, if exists returns formatted string."
  [tweet state]
  (let [t (if (contains? tweet :retweeted_status)
            (:retweeted_status tweet)
            tweet)
        cnt ((keyword (:id_str t)) (:by-rt-since-startup state))
        reach ((keyword (:id_str t)) (:by-reach state))]
    (when (pos? cnt)
      (str "analyzed: " (number-format cnt) " retweets, reach " (number-format reach)))))

(defn tweets-by-order
  "Finds top n tweets by specified order."
  [state]
  (let [order (:sorted state)
        n (:n state)
        skip (dec (:page state))]
    (map (fn [[k _]] (get (:tweets-map state) k {:id_str (name k)}))
         (->> (order state)
              (drop (* n skip))
              (take n)))))
