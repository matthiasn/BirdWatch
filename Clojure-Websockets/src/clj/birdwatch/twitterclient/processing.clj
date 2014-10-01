(ns birdwatch.twitterclient.processing
  (:gen-class)
  (:require
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.tools.logging :as log]))

(defn- log-count [last-received]
  "Stateful transducer, counts processed items and updating last-received atom. Logs progress every 1000 items."
  (fn [step]
    (let [cnt (atom 0)]
      (fn [r x]
        (swap! cnt inc)
        (when (zero? (mod @cnt 1000)) (log/info "processed" @cnt "since startup"))
        (reset! last-received (t/now))
        (step r x)))))

(defn- insert-newline [s]
  "inserts missing line breaks after end of tweet"
  (str/replace s #"\}\{" "}\r\n{"))

(defn- streaming-buffer []
  (fn [step]
    (let [buff (atom "")]
      (fn [r x]
        (let [json-lines (-> (str @buff x) (insert-newline) (str/split-lines))
              to-process (butlast json-lines)]
          (reset! buff (last json-lines))
          (if to-process (reduce step r to-process) r))))))

(defn- tweet? [data]
  "Checks if data is a tweet. If so, pass on, otherwise log error."
  (let [text (:text data)]
    (when-not text (log/error "error-msg" data))
    text))

(defn process-chunk [last-received]
  "Creates composite transducer for processing tweet chunks. Last-received atom passed in for updates."
  (comp
   (streaming-buffer)
   (map json/read-json)
   (filter tweet?)
   (log-count last-received)))

#_(defn- json->map [jstr]
    "parse JSON string"
    (try (json/read-str jstr :key-fn clojure.core/keyword)
      (catch Exception e {:exception (str e) :jstr jstr})))

(defn ex-handler [ex]
  (log/error "Exception while processing chunk" ex))
