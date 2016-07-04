(ns birdwatch.util)

(defn by-id
  "Get DOM element by specified ID."
  [id]
  #?(:cljs (.getElementById js/document id)))

(defn elem-width
  "Get width of specified DOM element."
  [elem]
  #?(:cljs (aget elem "offsetWidth")))

(defn search-hash
  "Get location hash for current page."
  []
  #?(:cljs (subs (js/decodeURIComponent (aget js/window "location" "hash")) 1)))

(defn set-search-hash
  "Set location hash for current page."
  [s]
  #?(:cljs (aset js/window "location" "hash" (js/encodeURIComponent s))))

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
