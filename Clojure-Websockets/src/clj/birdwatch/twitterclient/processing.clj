(ns birdwatch.twitterclient.processing
  (:gen-class)
  (:require
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clj-time.core :as t]
   [clojure.tools.logging :as log]))

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
    (let [cnt (atom 0)]
      (fn [r x]
        (when (zero? (mod @cnt 1000)) (log/info "processed" @cnt "since startup"))
        (swap! cnt inc)
        (reset! last-received (t/now))
        (step r x)))))

(defn- streaming-buffer []
  (fn [step]
    (let [buff (atom "")]
      (fn [r x]
        (let [json-lines (str/split-lines (str/replace (str @buff x) #"\}\{" "}\r\n{"))
              to-process (butlast json-lines)]
          (reset! buff (last json-lines))
          (if to-process (step r to-process) r))))))

(defn- tweet? [data]
  (let [text (:text data)]
    (when-not text (log/error "error-msg" data))
    text))

(defn- json->map [jstr]
  "parse JSON string"
  (try (json/read-str jstr :key-fn clojure.core/keyword)
    (catch Exception e {:exception e :jstr jstr})))

(defn process-chunk [last-received]
  (comp
   (streaming-buffer)
   (flattening)
   (mapping json->map)
   (filtering tweet?)
   (log-count last-received)))
