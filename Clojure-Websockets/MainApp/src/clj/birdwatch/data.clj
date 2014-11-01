(ns birdwatch.data
  (:gen-class)
  (require [clojure.pprint :as pp]))

(defn- rt-status-reducer
  "returns function that gets map with all items that contain a :retweeted_status. key :id_str value sym called on elem"
  [sym]
  (fn [acc val]
    (let [rt  (:retweeted_status val)
          cnt (sym rt)]
      (if (and rt (> cnt (get acc (keyword (:id_str rt)) 0)))
        (assoc acc (keyword (:id_str rt)) (sym rt))
        acc))))

(defn- reduce-res
  "reduce result vector with reducer function f, acc and elem into map"
  [f acc coll]
  (reduce f acc coll))

(defn retweets
  "get map with key :id_str and value :retweet_count"
  [coll acc]
  (reduce-res (rt-status-reducer :retweet_count) acc coll))

(defn favorites
  "get map with key :id_str and value :favorite_count"
  [coll acc]
  (reduce-res (rt-status-reducer :favorite_count) acc coll))

