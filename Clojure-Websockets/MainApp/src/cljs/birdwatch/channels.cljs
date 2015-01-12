(ns birdwatch.channels
  (:require [cljs.core.async :as async :refer [chan]]))

;;; Channels for handling information flow in the application.
(def stats-chan (chan))
(def data-chan (chan))
(def qry-chan (chan))

(def tweet-missing-chan (chan))
