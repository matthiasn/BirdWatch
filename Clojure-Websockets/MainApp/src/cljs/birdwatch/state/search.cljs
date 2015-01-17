(ns birdwatch.state.search
  (:require [birdwatch.util :as util]
            [cljs.core.async :as async :refer [put!]]))

(defn append-search-text [app s]
  (swap! app assoc :search-text (str (:search-text @app) " " s)))

(defn- load-prev
  "load previous tweets matching the current search"
  [app qry-chan]
  (let [chunks-to-load 10
        chunk-size 500
        prev-chunks-loaded (:prev-chunks-loaded @app)]
    (when (< prev-chunks-loaded chunks-to-load)
      (put! qry-chan [:cmd/query {:query (util/query-string @app)
                                  :n chunk-size
                                  :from (* chunk-size prev-chunks-loaded)}])
      (swap! app update-in [:prev-chunks-loaded] inc))))

(defn- start-percolator
  "trigger starting of percolation matching of new tweets"
  [app qry-chan]
  (put! qry-chan [:cmd/percolate {:query (util/query-string @app)}]))

(defn start-search
  "Initiate new search"
  [app initial-state qry-chan]
  (let [search (:search-text @app)
        s (if (= search "") "*" search)]
    (reset! app initial-state)
    (swap! app assoc :search-text search)
    (swap! app assoc :search s)
    (aset js/window "location" "hash" (js/encodeURIComponent s))
    (start-percolator app qry-chan)
    (dotimes [n 2] (load-prev app qry-chan))))
