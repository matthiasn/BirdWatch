(ns birdwatch.state.data
  (:require [birdwatch.state.initial :as i]
            [birdwatch.state.comm :as c]))

(defn init-component
  "Initializes state component. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom (i/initial-state))]
    (add-watch app :watcher (fn [_ _ _ new-state] (put-fn [:app-state new-state])))
    (fn [msg] (c/handle-incoming app put-fn msg))))
