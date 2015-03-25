(ns birdwatch-tc.twitterclient.twitterclient
  (:gen-class)
  (:require
    [clojure.core.match :refer [match]]
    [clojure.tools.logging :as log]
    [matthiasn.systems-toolbox.component :as comp]
    [clj-time.core :as t]
    [twitter.api.streaming :as tas]
    [twitter.oauth :as oauth]
    [twitter.callbacks.handlers :as tch]
    [clojure.core.async :refer [chan go-loop >!! <!]]
    [birdwatch-tc.twitterclient.processing :as processing])
  (:import (twitter.callbacks.protocols AsyncStreamingCallback)))

(defn- creds
  "Create OAuth credentials for the given config."
  [config]
  (oauth/make-oauth-creds (:consumer-key config)
                          (:consumer-secret config)
                          (:user-access-token config)
                          (:user-access-token-secret config)))

(defn- start-conn
  [conf callback]
  (tas/statuses-filter :params {:track (:track conf)}
                       :oauth-creds (creds conf)
                       :callbacks callback))

(defn mk-state
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [app (atom {})
          last-received (atom (t/epoch))
          chunk-chan (chan 1 (processing/process-chunk last-received) processing/ex-handler)
          callback (tas/AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                                                (comp println tch/response-return-everything)
                                                tch/exception-print)
          conn (start-conn conf callback)]
      (go-loop [] (let [t (<! chunk-chan)]
                    (put-fn [:tweet/new t])
                    (recur)))
      (swap! app assoc :conf conf)
      (swap! app assoc :conn conn)
      (log/info "TwitterClient component started." @app)
      app)))

(defn in-handler
  "Handle incoming messages: process / add to application state."
  [app put-fn msg]
  (match msg
         :else (println "Unmatched event received by percolator:" msg)))

(defn component
  "Initiate TwitterClient subsystem."
  [cmp-id conf]
  (comp/make-component cmp-id (mk-state conf) in-handler nil))
