(ns birdwatch.twitter-client
  (:gen-class)
  (:require
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [twitter.api.streaming :as tas]
   [twitter.oauth :as oauth]
   [twitter.callbacks.handlers :as tch]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop close!]]
   [com.stuartsierra.component :as component])
  (:import (twitter.callbacks.protocols AsyncStreamingCallback)))

(defn- creds [config] (oauth/make-oauth-creds (:consumer-key config) (:consumer-secret config)
                                              (:user-access-token config) (:user-access-token-secret config)))

(defn- parse [jstr tweets-chan msg-chan counter]
  "parse JSON string"
  (try
    (let [c @counter  json (json/read-json jstr)]
      (when (== (mod c 1000) 0) (log/info "processed" c "since startup"))
      (if (:text json)
        (>!! tweets-chan json)
        (>!! msg-chan json))
      (swap! counter inc))
    (catch Exception ex (log/error ex "JSON parsing" jstr))))

(defn- run-msg-loop [msg-chan]
  "loop for logging messages from Streaming API other than tweets"
  (go-loop [] (let [m (<! msg-chan)]
                (log/error "msg-chan" m))
           (recur)))

(defn- run-processing-loop [tweets-chan chunk-chan msg-chan chunk-buff counter last-received]
  "loop for processing chunks from Streaming API"
  (go-loop []
           (let [ch (<! chunk-chan)
                 combined (str @chunk-buff ch)
                 tweet-strings (str/split-lines combined)
                 to-process (butlast tweet-strings)
                 last-chunk (last tweet-strings)]
             (reset! last-received (t/now))
             (if (> (count to-process) 0)
               (do
                 (doseq [ts to-process]
                   (when (not (str/blank? ts))
                     (parse ts tweets-chan msg-chan counter)))
                 (reset! chunk-buff last-chunk))
               (reset! chunk-buff combined)))
           (recur)))

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

(defn- stop-twitter-conn! [conn chunk-buff]
  (let [m (meta @conn)]
    (when m
      (log/info "Stopping Twitter client.")
      ((:cancel m))
      (reset! chunk-buff ""))))

(defn run-watch-loop [conf conn chunk-buff chunk-chan last-received watch-active]
  "run loop watching the twitter client and restarting it if necessary"
  (reset! watch-active true)
  (go-loop [] (<! (timeout 10000)) ;; check connection every 10 seconds
           (let [since-last-sec (t/in-seconds (t/interval @last-received (t/now)))
                 active @watch-active]
             (when active
               (when (> since-last-sec (:tw-check-interval-sec conf))
                 (log/error since-last-sec "seconds since last tweet received")
                 (stop-twitter-conn! conn chunk-buff)
                 (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
                 (start-twitter-conn! conf conn chunk-chan))
               (recur)))))

(defrecord Twitterclient [conf channels connection chunk-buff watch-active]
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Component")
         (let [chunk-chan (chan)
               msg-chan (chan)
               conn (atom {})
               counter (atom 0)
               chunk-buff (atom "")
               last-received (atom (t/epoch))
               watch-active (atom false)]
           (start-twitter-conn! conf conn chunk-chan)
           (run-watch-loop conf conn chunk-buff chunk-chan last-received watch-active)
           (run-processing-loop (:tweets channels) chunk-chan msg-chan chunk-buff counter last-received)
           (run-msg-loop msg-chan)
           (assoc component :connection conn :msg-chan msg-chan :chunk-chan chunk-chan :chunk-buff chunk-buff
             :watch-active watch-active)))
  (stop [component] (log/info "Stopping Twitterclient Component")
        (reset! watch-active false)
        (stop-twitter-conn! connection chunk-buff)
        (assoc component :connection nil :msg-chan nil :chunk-chan nil :chunk-buff nil :watch-active nil)))

(defn new-twitterclient [conf] (map->Twitterclient {:conf conf}))

(defrecord Twitterclient-Channels []
  component/Lifecycle
  (start [component] (log/info "Starting Twitterclient Channels Component")
         (assoc component :tweets (chan))) ; channel for new tweets received from streaming API
  (stop [component] (log/info "Stop Twitterclient Channels Component")
        (assoc component :tweets nil)))

(defn new-twitterclient-channels [] (map->Twitterclient-Channels {}))
