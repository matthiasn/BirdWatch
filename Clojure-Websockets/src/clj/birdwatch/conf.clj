(ns birdwatch.conf
  (:gen-class)
  (:require [clojure.edn :as edn]))

(def conf (edn/read-string (slurp "twitterconf.edn")))

