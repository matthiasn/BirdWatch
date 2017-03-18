(ns birdwatch.stats.timeseries
  (:require [birdwatch.util :as util]
            [matthiasn.systems-toolbox.component :as st]))

(defn date-round
  "Returns function that rounds the provided seconds since epoch down to the
   nearest time interval; for example (date-round 60) creates a function that
   takes seconds t and rounds them to the nearest minute."
  [interval]
  (fn [t] (* interval (Math/floor (/ t interval)))))

(def m 60)
(def qhr (* 15 m))
(def hr (* 60 m))
(def qday (* 6 hr))
(def day (* 24 hr))

(defn grouping-interval
  "Determines duration of individual intervals (bars) depending on duration of
   timespan between newest and oldest."
  [newest oldest]
  (cond
    (> (- newest oldest) (* 20 day)) day                    ;round by nearest day
    (> (- newest oldest) (* 5 day)) qday                    ;round by nearest quarter day
    (> (- newest oldest) (* 20 hr)) hr                      ;round by nearest hour
    (> (- newest oldest) (* 4 hr)) qhr                      ;round by nearest quarter hour
    :else m))                                               ;round by nearest minute

(defn empty-ts-map
  "Generates map with all rounded intervals between oldest and newest,
   initialized to a count of 0."
  [newest oldest interval]
  (let [rounder (date-round interval)
        values (range (rounder oldest) (rounder newest) interval)]
    (apply sorted-map-by < (flatten [(interpose 0 values) 0]))))

(defn count-into-map
  "Increments count for time interval."
  [ts-map k]
  (update-in ts-map [k] inc))

(defn tweet-ts
  "Retrieves seconds since epoch from tweet using moment.js."
  [t]
  #?(:cljs (.unix (js/moment. (:created_at t) "ddd MMM DD HH:mm:ss Z YYYY"))))

(defn ts-data
  "Performs time series analysis by counting tweets in even intervals."
  [state]
  (let [tweet-timestamps (:tweet-timestamps (:ts state))
        oldest (:oldest (:ts state))
        newest (:newest (:ts state))
        interval (grouping-interval newest oldest)
        rounder (date-round interval)]
    (reduce count-into-map
            (empty-ts-map newest oldest interval)
            (map #(rounder %) tweet-timestamps))))

(defn ts-data2
  "Performs time series analysis by counting tweets in even intervals."
  [state tweet]
  (let [tweet-timestamps (:tweet-timestamps (:ts state))
        oldest (:oldest (:ts state))
        newest (:newest (:ts state))
        interval (grouping-interval newest oldest)
        rounder (date-round interval)]
    (count-into-map (:ts-data state) (rounder (tweet-ts tweet)))))
