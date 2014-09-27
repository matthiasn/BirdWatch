(ns birdwatch.twitter-client
  (:gen-class)
  (:require
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clojure.core.reducers :as r]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [twitter.api.streaming :as tas]
   [twitter.oauth :as oauth]
   [twitter.callbacks.handlers :as tch]
   [clojure.core.async :as async :refer [<! <!! >! >!! close! chan put! take! alts! timeout go go-loop pipe]]
   [com.stuartsierra.component :as component])
  (:import (twitter.callbacks.protocols AsyncStreamingCallback)))

(defn- creds [config] (oauth/make-oauth-creds (:consumer-key config) (:consumer-secret config)
                                              (:user-access-token config) (:user-access-token-secret config)))

(defn flattening []
  (fn [step]
    (fn [r x] (reduce step r x))))

(defn mapping [f]
  (fn [step]
    (fn [r x] (step r (f x)))))

(defn filtering [pred]
  (fn [step]
    (fn [r x] (if (pred x) (step r x) r))))

(defn- log-count [last-received]
  (fn [step]
    (let [cnt (volatile! 0)]
      (fn [r x]
        (when (== (mod @cnt 1000) 0) (log/info "processed" @cnt "since startup"))
        (vswap! cnt inc)
        (reset! last-received (t/now))
        (step r x)))))

(defn- streaming-buffer []
  (fn [step]
    (let [buff (volatile! "")]
      (fn [r x]
        (let [json-lines (str/split-lines (str/replace (str @buff x) #"\}\{" "}\r\n{"))
              to-process (butlast json-lines)]
          (vreset! buff (last json-lines))
          (if to-process (step r to-process) r))))))

(defn- tweet? [data]
  (let [text (:text data)]
    (when-not text (log/error "error-msg" data))
    text))

(defn- parse-json [jstr]
  "parse JSON string"
  (try (json/read-str jstr :key-fn clojure.core/keyword)
    (catch Exception e {:exception e :jstr jstr})))

(defn- process-chunk [last-received]
  (comp
   (streaming-buffer)
   (flattening)
   (mapping parse-json)
   (filtering tweet?)
   (log-count last-received)))

(defn- tweet-chunk-callback [chunk-chan]
  (tas/AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                               (comp println tch/response-return-everything)
                               tch/exception-print))

(defn start-twitter-conn! [conf conn chunk-chan]
  (log/info "Starting Twitter client.")
  (reset! conn (tas/statuses-filter
                :params {:track (:track conf)}
                :oauth-creds (creds conf)
                :callbacks (tweet-chunk-callback chunk-chan))))

(defn stop-twitter-conn! [conn]
  (let [m (meta @conn)]
    (when m (log/info "Stopping Twitter client.")
      ((:cancel m)))))

(defn- run-watch-loop [conf conn chunk-chan last-received watch-active]
  "run loop watching the twitter client and restarting it if necessary"
  (reset! watch-active true)
  (go-loop [] (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
           (let [since-last-sec (t/in-seconds (t/interval @last-received (t/now)))
                 active @watch-active]
             (when active
               (when (> since-last-sec (:tw-check-interval-sec conf))
                 (log/error since-last-sec "seconds since last tweet received")
                 (stop-twitter-conn! conn)
                 (<! (timeout (* (:tw-restart-wait conf) 1000)))
                 (start-twitter-conn! conf conn chunk-chan))
               (recur)))))

(defrecord Twitterclient [conf channels conn chunk-chan watch-active]
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Component")
         (let [last-received (atom (t/epoch))
               chunk-chan (chan 1 (process-chunk last-received))
               conn (atom {})
               watch-active (atom false)]

           (def connection conn)
           (def config conf)
           (def channel chunk-chan)

           (start-twitter-conn! conf conn chunk-chan)
           (pipe chunk-chan (:tweets channels) false)
           (run-watch-loop conf conn chunk-chan last-received watch-active)
           (assoc component :conn conn :chunk-chan chunk-chan :watch-active watch-active)))
  (stop [component] (log/info "Stopping Twitterclient Component")
        (reset! watch-active false)
        (stop-twitter-conn! conn)
        (assoc component :conn nil :chunk-chan nil :watch-active nil)))

(defn new-twitterclient [conf] (map->Twitterclient {:conf conf}))

(defrecord Twitterclient-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Channels Component")
         (assoc component :tweets (chan))) ; channel for new tweets received from streaming API
  (stop [component] (log/info "Stop Twitterclient Channels Component")
        (assoc component :tweets nil)))

(defn new-twitterclient-channels [] (map->Twitterclient-Channels {}))
