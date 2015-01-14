(ns birdwatch.channels
  (:require [cljs.core.async :as async :refer [chan sliding-buffer mult pub]]))

;;;; Channels for handling information flow in the application.

;;; Channel for stats from server, e.g. total tweets, connected users.
(def stats-chan (chan))

;;; Channel for data from server, e.g. new tweets and previous chunks.
(def data-chan (chan))

;;; Channel for queries that will be forwarded to the server.
(def qry-chan (chan))

;;; Channel for command web-client internal command messages (e.g. state modification).
(def cmd-chan (chan))

;;; Channel and mult for publishing state changes.
(def state-chan (chan (sliding-buffer 1)))
(def state-mult (mult state-chan))

(def state-pub-chan (chan))
(def state-pub (pub state-pub-chan #(first %)))


