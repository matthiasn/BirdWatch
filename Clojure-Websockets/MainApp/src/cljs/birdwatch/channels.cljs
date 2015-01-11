(ns birdwatch.channels
  (:require [cljs.core.async :as async :refer [chan]]))

;;; Channels for handling information flow in the application.
(def tweets-chan (chan 1))
(def tweet-missing-chan (chan))
(def prev-tweets-chan (chan 10000))

(def prev-chunks-chan (chan))

(def missing-tweets-chan (chan))
(def missing-tweet-found-chan (chan))

(def stats-chan (chan))
(def data-chan (chan))

(def qry-chan (chan))
(def qry-rsp-chan (chan))

