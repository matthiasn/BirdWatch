(ns birdwatch-tc.twitterclient.processing
  (:gen-class)
  (:require
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.tools.logging :as log]))

(defn- log-count
  "Stateful transducer, counts processed items and updating last-received atom. Logs progress every 1000 items."
  [last-received]
  (fn [step]
    (let [cnt (atom 0)]
      (fn
        ([r] (step r))
        ([r x]
         (swap! cnt inc)
         (when (zero? (mod @cnt 1000)) (log/info "processed" @cnt "since startup"))
         (reset! last-received (t/now))
         (step r x))))))

(defn- insert-newline
  "inserts missing line breaks after end of tweet"
  [s]
  (str/replace s #"\}\{" "}\r\n{"))

(defn- streaming-buffer []
  (fn [step]
    (let [buff (atom "")]
      (fn
        ([r] (step r))
        ([r x]
         (let [json-lines (-> (str @buff x)
                              (insert-newline)
                              (str/split-lines))
               to-process (butlast json-lines)]
           (reset! buff (last json-lines))
           (if to-process (reduce step r to-process) r)))))))

(defn- tweet?
  "Checks if data is a tweet. If so, pass on, otherwise log error."
  [data]
  (if-let [text (:text data)]
    text
    (when data (log/error "error-msg" data))))

(defn parse-json
  [chunk]
  (try
    (json/read-json chunk)
    (catch Exception ex (log/error "Exception while parsing JSON" ex "\n" chunk))))

(defn process-chunk
  "Creates composite transducer for processing tweet chunks. Last-received atom passed in for updates."
  [last-received]
  (comp
   (streaming-buffer)
   (map parse-json)
   (filter tweet?)
   (log-count last-received)))

(defn ex-handler [ex]
  (log/error "Exception while processing chunk" ex))
