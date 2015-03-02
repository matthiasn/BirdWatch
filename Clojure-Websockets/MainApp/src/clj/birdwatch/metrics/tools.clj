(ns birdwatch.metrics.tools
  (:gen-class)
  (:require
   [clojure.core.async :refer [chan mult tap pipe]]))

(defn pipe-w-metric
  "Pipe messages from one channel to another while also sending the msg to the Metrics
   component where e.g. meters can be derived from the data. Channels are passes as a vector:
   [in-chan out-chan]. Puts msg on metrics-chan.
  Also takes the type of the message as a namespaced keyword."
  [metrics-chan]
  (fn
    [[in out] ev-type]
    (let [m (mult in)
          t-chan (chan 1 (map (fn [ev] [ev-type ev])))]
      (tap m out)
      (pipe t-chan metrics-chan)
      (tap m t-chan))))
