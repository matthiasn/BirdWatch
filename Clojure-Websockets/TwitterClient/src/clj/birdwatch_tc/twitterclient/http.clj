(ns birdwatch-tc.twitterclient.http
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]
   [twitter.api.streaming :as tas]
   [twitter.oauth :as oauth]
   [clj-time.core :as t]
   [twitter.callbacks.handlers :as tch]
   [clojure.core.async :as async :refer [>!! <! timeout go-loop]])
  (:import (twitter.callbacks.protocols AsyncStreamingCallback)))

(defn- creds [config] (oauth/make-oauth-creds (:consumer-key config) (:consumer-secret config)
                                              (:user-access-token config) (:user-access-token-secret config)))

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

(defn run-watch-loop
  "run loop watching the twitter client and restarting it if necessary"
  [conf conn chunk-chan last-received watch-active]
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
