(ns birdwatch.channels
  (:require [cljs.core.async :as async :refer [chan]]))

;;;; Channels for handling information flow in the application.

;;; Channel for stats from server, e.g. total tweets, connected users.
(def stats-chan (chan))

;;; Channel for data from server, e.g. new tweets and previous chunks.
(def data-chan (chan))

;;; Channel fro queries that will be forwarded to the server.
(def qry-chan (chan))
