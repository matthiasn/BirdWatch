(ns birdwatch.state.comp
  (:require [birdwatch.state.search :as s]
            [birdwatch.state.initial :as i]
            [birdwatch.state.proc :as p]
            [matthiasn.systems-toolbox.handler-utils :as hu]
            [cljs.core.match :refer-macros [match]]))

(defn state-fn
  "Return clean initial component state atom."
  [_put-fn]
  {:state (atom (i/initial-state))})

(def handler-map
  {:tweet/new               p/add-tweet!
   :tweet/missing-tweet     p/add-tweet!
   :stats/users-count       (hu/assoc-in-cmp [:users-count])
   :stats/total-tweet-count (hu/assoc-in-cmp [:total-tweet-count])
   :tweet/prev-chunk        p/handle-prev-chunk
   :tweet/load-prev         p/load-prev
   :cmd/toggle-live         (hu/update-in-cmp [:live] not)
   :cmd/set-search-text     (hu/assoc-in-cmp [:search-text])
   :cmd/search-text         (fn [{:keys [msg]}] (prn msg))
   :cmd/set-current-page    (hu/assoc-in-cmp [:page])
   :cmd/set-page-size       (hu/assoc-in-cmp [:n])
   :cmd/set-sort-order      (hu/assoc-in-cmp [:sorted])
   :cmd/retrieve-missing    (fn [{:keys [put-fn msg-payload]}]
                              (put-fn [:cmd/missing {:id_str msg-payload}]))
   :cmd/append-search-text  s/append-search-text
   :cmd/start-search        (s/start-search (i/initial-state))
   :sente/first-open        (s/start-search (i/initial-state))})

(defn cmp-map
  [cmp-id]
  {:cmp-id      cmp-id
   :state-fn    state-fn
   :handler-map handler-map})
