(ns birdwatch.util)

(defn by-id [id] (.getElementById js/document id))
(defn elem-width [elem] (aget elem "offsetWidth"))

(defn search-hash []
  (subs (js/decodeURIComponent (aget js/window "location" "hash")) 1))

(defn tweets-by-order
  "Find top n tweets by specified order."
  [tweets-map order]
  (fn [app n skip]
    (vec (map (fn [m] ((keyword (first m)) (tweets-map app)))
              (take n (drop (* n skip) (order app)))))))

(defn query-string
  "format and modify query string"
  [state]
  {:query_string {:default_field "text"
                  :default_operator "AND"
                  :query (str "(" (:search state) ") AND lang:en")}})
