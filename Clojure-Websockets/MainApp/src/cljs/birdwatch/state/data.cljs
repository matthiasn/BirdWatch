(ns birdwatch.state.data
  (:require [birdwatch.state.initial :as i]
            [birdwatch.state.comm :as c]))

;;;; Application state in a single atom.
(def app (atom {}))

(defn init-state
  "Init app state and wire all channels required in the state namespace."
  [data-chan qry-chan stats-chan cmd-chan state-pub-chan]
  (i/init app)
  (c/stats-loop stats-chan app)
  (c/data-loop data-chan app)
  (c/cmd-loop cmd-chan state-pub-chan app)
  (c/connect-qry-chan qry-chan)
  (c/broadcast-state state-pub-chan app))
