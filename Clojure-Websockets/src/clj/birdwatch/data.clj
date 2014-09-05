(ns birdwatch.data
  (:gen-class)
  (require [clojure.pprint :as pp]))

(defn rt-status-reducer [sym]
  (fn [acc val]
    "get map with all items that contain a :retweeted_status. key :id_str value sym called on elem"
    (let [rt  (:retweeted_status val)
          cnt (sym rt)]
      (if (and rt (> cnt (get acc (:id_str rt) 0)))
        (assoc acc (:id_str rt) (sym rt))
        acc))))

(defn reduce-res [f acc coll]
  "reduce result vector with reducer function f, acc and elem into map"
  (reduce f acc coll))

(defn retweets [coll acc]
  "get map with key :id_str and value :retweet_count"
  (reduce-res (rt-status-reducer :retweet_count) acc coll))

(defn favorites [coll acc]
  "get map with key :id_str and value :favorite_count"
  (reduce-res (rt-status-reducer :favorite_count) acc coll))

