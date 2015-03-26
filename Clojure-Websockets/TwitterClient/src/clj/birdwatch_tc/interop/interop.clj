(ns birdwatch-tc.interop.interop
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [matthiasn.systems-toolbox.component :as comp]
    [taoensso.carmine :as car :refer (wcar)]))

(defn publish
  "Publish tweet with matches on Redis Pub/Sub for specified topic."
  [conn topic t-matches]
  (car/wcar conn (car/publish topic t-matches)))

(defn- msg-handler-fn
  "Create handler function for messages from Redis Pub/Sub."
  [put-fn]
  (fn [[msg-type topic payload]]
    (when (= msg-type "message")
      (put-fn [:redis/matches payload]))))

(defn subscribe-topic
  "Subscribe to topic and put items on specified channel."
  [put-fn conn topic]
  (car/with-new-pubsub-listener
    (:spec conn)
    {"matches" (msg-handler-fn put-fn)}
    (car/subscribe topic)))

(defn mk-state
  "Returns function for making state of the interop-component while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [redis-host (:redis-host conf)
          redis-port (:redis-port conf)
          conn {:pool {} :spec {:host redis-host :port redis-port}}
          listener (subscribe-topic put-fn conn "matches")]
      (println "Redis connection started to" redis-host redis-port)
      (put-fn [:log/info (str "Redis connection started to " redis-host redis-port)])
      {:conf conf :conn conn :listener listener})))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         [:perc/matches t-matches] (publish (:conn app) "matches" t-matches)
         :else (println "Unmatched event:" msg)))

(defn component [cmp-id conf] (comp/make-component cmp-id (mk-state conf) in-handler nil))
