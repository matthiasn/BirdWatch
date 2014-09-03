(ns birdwatch.atoms
  (:gen-class)
  (:require
   [clojure.tools.logging :as log]))

(def subscriptions (atom {}))
