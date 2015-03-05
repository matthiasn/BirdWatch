(ns birdwatch.state.data
  (:require [birdwatch.state.initial :as i]
            [birdwatch.state.comm :as c]))

(defn init-state
  "Init app state and wire all channels required in the state namespace. The app
   atom is held inside the let binding of this function and thus protected from
   outside access / alteration. The only way to interact with it is by sending
   messages on channels, such as the provided data channel for adding new data or
   sending commands on the cmd-chan."
  [state-in-chan qry-chan state-pub-chan]
  (let [app (atom (i/initial-state))]
    (c/state-in-loop state-in-chan qry-chan app)
    (c/broadcast-state state-pub-chan app)))

(defn init-component
  "Mounts tweet component. Takes put-fn as the function that can be called when some message
   needs to be sent back to the switchboard. Returns a function that handles incoming messages."
  [put-fn]
  (let [app (atom (i/initial-state))]
    (add-watch app :watcher (fn [_ _ _ new-state] (put-fn [:app-state new-state])))
    (fn [msg]
      (c/handle-incoming app put-fn msg))))
