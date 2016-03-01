(ns birdwatch.state.search
  (:require [birdwatch.util :as util]))

(defn append-search-text
  "Appends string s to search-text in app, separated by space."
  [{:keys [cmp-state msg-payload]}]
  (swap! cmp-state assoc :search-text (str (:search-text @cmp-state) " " msg-payload)))

(defn- load-prev
  "Loads previous tweets matching the current search. Search is contructed
   by calling the util/query-string function with dereferenced app state."
  [app put-fn]
  (let [chunks-to-load 40
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
  [initial-state]
  (fn
    [{:keys [cmp-state put-fn]}]
    (let [search (:search-text @cmp-state)
          s (if (= search "") "*" search)]
      (reset! cmp-state initial-state)
      (swap! cmp-state assoc :search-text search)
      (swap! cmp-state assoc :search s)
      (aset js/window "location" "hash" (js/encodeURIComponent s))
      (start-percolator cmp-state put-fn)
      (dotimes [_ 2] (load-prev cmp-state put-fn)))))

