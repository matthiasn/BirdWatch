(ns birdwatch.twitterclient
  (:gen-class)
  (:use
   [twitter.callbacks]
   [twitter.callbacks.handlers]
   [twitter.api.streaming]
   [birdwatch.conf])
  (:require
   [birdwatch.channels :as c]
   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [http.async.client :as ac]
   [twitter.oauth :as oauth]
   [twitter-streaming-client.core :as client]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]])
  (:import
   (twitter.callbacks.protocols AsyncStreamingCallback)))

(def creds (oauth/make-oauth-creds (:consumer-key conf) (:consumer-secret conf)
                                   (:user-access-token conf) (:user-access-token-secret conf)))

;; channels
(def ^:private chunk-chan (chan 10000))
(def ^:private msg-chan (chan))

;; atoms for keeping track of counts, incomplete chunk and last received timestamp
(def ^:private last-received (atom (t/epoch)))
(def ^:private chunk-buff (atom ""))
(def ^:private counter (atom 0))

(defn- parse [str]
  (try
    (let [c @counter
          json (json/read-json str)]
      (when (== (mod c 1000) 0) (log/info "processed" c "since startup, index" (:es-index conf)))
      (if (:text json)
        (>!! c/tweets-chan json)
        (>!! msg-chan json))
      (swap! counter inc))
    (catch Exception ex (log/error ex "JSON parsing"))))

;; loop for processing chunks from Streaming API
(go
 (while true
   (let [ch (<! chunk-chan)
         buff @chunk-buff
         combined (str buff ch)
         tweet-strings (str/split-lines combined)
         to-process (butlast tweet-strings)
         last-chunk (last tweet-strings)]
     (reset! last-received (t/now))
     (if (> (count to-process) 0)
       (do
         (doseq [ts to-process]
           (when (not (str/blank? ts))
             (parse ts)))
         (reset! chunk-buff last-chunk))
       (reset! chunk-buff combined)))))

;; loop for logging messages from Streaming API other than tweets
(go
 (while true
   (let [m (<! msg-chan)]
     (log/info "msg-chan" m))))

(def ^:dynamic *custom-streaming-callback*
  (AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                           (comp println response-return-everything)
                           exception-print))

;; streaming connection with Twitter stored in an Atom, can be started and stopped using
;; using the start-twitter-conn! and stop-twitter-conn! functions
(def ^:private twitter-conn (atom {}))

(defn- stop-twitter-conn! []
  "stop connection to Twitter Streaming API"
  (let [m (meta @twitter-conn)]
    (when m
      (log/info "Stopping Twitter client.")
      ((:cancel m))
      (reset! chunk-buff ""))))

(defn start-twitter-conn! []
  "start connection to Twitter Streaming API"
  (log/info "Starting Twitter client.")
  (reset! twitter-conn (statuses-filter :params {:track (:track conf)}
                                        :oauth-creds creds
                                        :callbacks *custom-streaming-callback* )))

;; loop watching the twitter client and restarting it if necessary
(defn watch-twitter-conn! []
  (go
   (while true
     (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
     (let [now (t/now)
           since-last-sec (t/in-seconds (t/interval @last-received now))]
       (when (> since-last-sec (:tw-check-interval-sec conf))
         (do
           (log/error since-last-sec "seconds since last tweet received")
           (stop-twitter-conn!)
           (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
           (start-twitter-conn!)))))))
