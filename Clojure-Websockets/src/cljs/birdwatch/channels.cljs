(ns birdwatch.channels
  (:require [cljs.core.async :as async :refer [<! >! chan put! alts! timeout]]))

;;; Channels for handling information flow in the application.
(def tweets-chan (chan 1))
(def prev-tweets-chan (chan 10000))
(def user-count-chan (chan))
(def total-tweets-count-chan (chan))
(def prev-chunks-chan (chan))
(def missing-tweets-chan (chan))

