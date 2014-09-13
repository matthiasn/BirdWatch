(ns birdwatch.twitter-client
  (:gen-class)
  (:use
   [twitter.callbacks]
   [twitter.callbacks.handlers]
   [twitter.api.streaming])
  (:require
   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [http.async.client :as ac]
   [twitter.oauth :as oauth]
   [twitter-streaming-client.core :as client]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go go-loop close!]]
   [com.stuartsierra.component :as component])
  (:import
   (twitter.callbacks.protocols AsyncStreamingCallback)))

(defn- creds [config] (oauth/make-oauth-creds (:consumer-key config) (:consumer-secret config)
                                              (:user-access-token config) (:user-access-token-secret config)))

;; channels
(def ^:private chunk-chan (chan))
(def ^:private msg-chan (chan))

;; atoms for keeping track of counts, incomplete chunk and last received timestamp
(def ^:private last-received (atom (t/epoch)))
(def ^:private chunk-buff (atom ""))
(def ^:private counter (atom 0))

(defn- parse [jstr tweets-chan]
  (try
    (let [c @counter
          json (json/read-json jstr)]
      (when (== (mod c 1000) 0) (log/info "processed" c "since startup"))
      (if (:text json)
        (>!! tweets-chan json)
        (>!! msg-chan json))
      (swap! counter inc))
    (catch Exception ex (log/error ex "JSON parsing" jstr))))

;; loop for logging messages from Streaming API other than tweets
(go-loop []
         (let [m (<! msg-chan)]
           (log/error "msg-chan" m))
         (recur))

(defn- tweet-chunk-callback []
  (AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                           (comp println response-return-everything)
                           exception-print))

;; loop for processing chunks from Streaming API
(defn- processing-loop [tweets-chan]
  (go-loop []
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
                     (parse ts tweets-chan)))
                 (reset! chunk-buff last-chunk))
               (reset! chunk-buff combined)))
           (recur)))

(defrecord Twitterclient [conf channels connection]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (log/info "Starting Twitterclient")
         ;; In the 'start' method, initialize this component
         ;; and start it running. For example, connect to a
         ;; database, create thread pools, or initialize shared
         ;; state.
         (let [conn (statuses-filter :params {:track (:track conf)}
                                     :oauth-creds (creds conf)
                                     :callbacks (tweet-chunk-callback))]
           (reset! chunk-buff "")
           (processing-loop (:tweets channels))
           ;; Return an updated version of the component with
           ;; the run-time state assoc'd in.
           (assoc component :connection conn)))

  (stop [component]
        (log/info "stop connection to Twitter Streaming API")
        ;; In the 'stop' method, shut down the running
        ;; component and release any external resources it has
        ;; acquired.
        (let [m (meta connection)]
          (when m
            ((:cancel m))
            (reset! chunk-buff "")))
        ;; Return the component, optionally modified. Remember that if you
        ;; dissoc one of a record's base fields, you get a plain map.
        (assoc component :connection nil)))

(defn new-twitterclient [conf]
  "create new twitter client component"
  (map->Twitterclient {:conf conf}))

;; loop watching the twitter client and restarting it if necessary
#_(defn watch-twitter-conn! []
  "monitor twitter component, restart when necessary"
  (go
   (while true
     (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
     (let [now (t/now)
           since-last-sec (t/in-seconds (t/interval @last-received now))]
       (when (> since-last-sec (:tw-check-interval-sec conf))
         (do
           (log/error since-last-sec "seconds since last tweet received")
           (alter-var-root #'twitter-client component/stop)
           (<! (timeout (* (:tw-check-interval-sec conf) 1000)))
           (alter-var-root #'twitter-client component/start)))))))
