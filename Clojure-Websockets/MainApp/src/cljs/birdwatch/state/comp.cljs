(ns birdwatch.state.comp
  (:require [birdwatch.state.search :as s]
            [birdwatch.state.initial :as i]
            [birdwatch.state.proc :as p]
            [cljs.core.match :refer-macros [match]]))

(defn state-fn
  "Return clean initial component state atom."
  [_put-fn]
  {:state (atom (i/initial-state))})

(def handler-map
  {:tweet/new               p/add-tweet!
   :tweet/missing-tweet     p/add-tweet!
   :stats/users-count       (p/update-count :users-count)
   :stats/total-tweet-count (p/update-count :total-tweet-count)
   :tweet/prev-chunk        p/handle-prev-chunk
   :toggle-live             (p/update-in-cmp [:live] not)
   :set-search-text         (p/assoc-in-cmp [:search-text])
   :set-current-page        (p/assoc-in-cmp [:page])
   :set-page-size           (p/assoc-in-cmp [:n])
   :set-sort-order          (p/assoc-in-cmp [:sorted])
   :retrieve-missing        (fn [{:keys [put-fn msg-payload]}] (put-fn [:cmd/missing {:id_str msg-payload}]))
   :append-search-text      s/append-search-text
   :start-search            (s/start-search (i/initial-state))
   :first-open              (s/start-search (i/initial-state))})

(defn cmp-map
  [cmp-id]
  {:cmp-id      cmp-id
   :state-fn    state-fn
   :handler-map handler-map})
