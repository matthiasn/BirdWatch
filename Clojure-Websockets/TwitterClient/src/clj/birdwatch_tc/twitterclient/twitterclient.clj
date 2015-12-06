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

(defn- start-t-conn!
  "Start connection to Twitter Streaming API."
  [conf callback]
  (log/info "Starting Twitter client.")
  (tas/statuses-filter :params {:track (:track conf)}
                       :oauth-creds (creds conf)
                       :callbacks callback))

(defn tc-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [put-fn]
    (let [app (atom {:last-received (t/epoch) :conf conf})
          received-now (fn [] (swap! app assoc :last-received (t/now)))
          chunk-chan (chan 1 (processing/process-chunk received-now) processing/ex-handler)
          callback (tas/AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                                                (comp println tch/response-return-everything)
                                                tch/exception-print)]
      (swap! app assoc :callback callback)
      (swap! app assoc :conn (start-t-conn! conf callback))
      (go-loop [] (let [t (<! chunk-chan)]
                    (put-fn [:tweet/new t])
                    (recur)))
      (log/info "TwitterClient component started.")
      {:state app})))

(defn t-conn-alive?
  "Check if connection to Twitter is alive. If not, restart."
  [{:keys [cmp-state]}]
  (let [state-snapshot @cmp-state
        conf (:conf state-snapshot)
        since-last-sec (t/in-seconds (t/interval (:last-received state-snapshot) (t/now)))
        m (meta (:conn state-snapshot))]
    (when (> since-last-sec (:tw-check-interval-sec conf))
      (log/error since-last-sec "seconds since last tweet received")
      (if m
        (do
          (log/info "Stopping Twitter client.")
          ((:cancel m))
          (swap! cmp-state assoc :conn {}))
        (swap! cmp-state assoc :conn (start-t-conn! conf (:callback state-snapshot)))))))

(defn component
  "Initiate TwitterClient subsystem."
  [cmp-id conf]
  (comp/make-component {:cmp-id      cmp-id
                        :state-fn    (tc-state-fn conf)
                        :handler-map {:schedule/t-conn-alive? t-conn-alive?}}))