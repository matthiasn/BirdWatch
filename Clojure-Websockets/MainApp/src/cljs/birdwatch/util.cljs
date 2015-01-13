(ns birdwatch.util
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [<! timeout]]))

(defn by-id [id] (.getElementById js/document id))
(defn elem-width [elem] (aget elem "offsetWidth"))

(defn update-loop
  "run a loop that calls f every t milliseconds"
  ([f t1 t2]
   (go-loop []
            (<! (timeout t1))
            (f)
            (<! (timeout t2))
            (recur)))
  ([f t] (update-loop f t 0)))

(defn search-hash []
  (subs (js/decodeURIComponent (aget js/window "location" "hash")) 1))

(defn tweets-by-order
  "find top n tweets by specified order"
  [tweets-map order]
  (fn [app n skip]
    (vec (map (fn [m] ((keyword (first m)) (tweets-map app))) (take n (drop (* n skip) (order app)))))))

(defn query-string
  "format and modify query string"
  [state]
  {:query_string {:default_field "text"
                  :default_operator "AND"
                  :query (str "(" (:search state) ") AND lang:en")}})
