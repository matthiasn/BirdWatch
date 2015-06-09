(ns birdwatch.state.comp
  (:require [birdwatch.state.search :as s]
            [birdwatch.state.initial :as i]
            [birdwatch.state.proc :as p]
            [cljs.core.match :refer-macros [match]]
            [matthiasn.systems-toolbox.component :as comp]))

;;;; Channels processing namespace. Here, messages are taken from channels and processed.

(defn mk-state
  "Return clean initial component state atom. put-fn argument not used."
  [_]
  (atom (i/initial-state)))

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

(defn component
  [cmp-id]
  (comp/make-component
    {:cmp-id      cmp-id
     :state-fn    mk-state
     :handler-map handler-map}))
