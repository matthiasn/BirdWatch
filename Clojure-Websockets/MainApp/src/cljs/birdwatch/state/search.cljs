(ns birdwatch.state.search
  (:require [birdwatch.util :as util]
            [cljs.core.async :refer [put!]]))

(defn append-search-text
  "Appends string s to search-text in app, separated by space."
  [app s]
  (swap! app assoc :search-text (str (:search-text @app) " " s)))

(defn- load-prev
  "Loads previous tweets matching the current search. Search is contructed
   by calling the util/query-string function with dereferenced app state."
  [app put-fn]
  (let [chunks-to-load 20
        chunk-size 250
        prev-chunks-loaded (:prev-chunks-loaded @app)]
    (when (< prev-chunks-loaded chunks-to-load)
      (put-fn [:cmd/query {:query (util/query-string @app)
                                  :n chunk-size
                                  :from (* chunk-size prev-chunks-loaded)}])
      (swap! app update-in [:prev-chunks-loaded] inc))))

(defn- start-percolator
  "Triggers percolation matching of new tweets on the server side so that
   future matches will be delivered to the client."
  [app put-fn]
  (put-fn [:cmd/percolate {:query (util/query-string @app)}]))

(defn start-search
  "Initiates a new search."
  [app initial-state put-fn]
  (let [search (:search-text @app)
        s (if (= search "") "*" search)]
    (reset! app initial-state)
    (swap! app assoc :search-text search)
    (swap! app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (start-percolator app put-fn)
    (dotimes [_ 2] (load-prev app put-fn))))
