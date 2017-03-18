(ns birdwatch.util
  (:require [clojure.string :as s]))

(defn by-id
  "Get DOM element by specified ID."
  [id]
  #?(:cljs (.getElementById js/document id)))

(defn elem-width
  "Get width of specified DOM element."
  [elem]
  #?(:cljs (if elem (aget elem "offsetWidth") 100)))

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

(def twitter-url "https://twitter.com/")

(defn a-blank
  "Creates HTML string for a link that opens in a new tab in the browser."
  [url text]
  (str "<a href='" url "' target='_blank'>" text "</a>"))

(defn- url-replacer
  "Replaces URL occurrences in tweet texts with HTML (including links)."
  [acc entity]
  (s/replace acc (:url entity) (a-blank (:url entity) (:display_url entity))))

(defn- hashtags-replacer
  "Replaces hashtags in tweet text with HTML (including links)."
  [acc entity]
  (let [hashtag (:text entity)
        f-hashtag (str "#" hashtag)]
    (s/replace acc f-hashtag (a-blank (str twitter-url "search?q=%23" hashtag) f-hashtag))))

(defn- mentions-replacer
  "Replaces user mentions in tweet text with HTML (including links)."
  [acc entity]
  (let [screen-name (:screen_name entity)
        f-screen-name (str "@" screen-name)]
    (s/replace acc f-screen-name (a-blank (str twitter-url screen-name) f-screen-name))))

(defn- reducer
  "Generic reducer, allows calling specified function for each item in the collection."
  [text coll fun]
  (reduce fun text coll))

(defn format-tweet
  "Formats tweet text for display by running multiple reducers."
  [tweet]
  (let [{:keys [urls media user_mentions hashtags]} (:entities tweet)]
    (assoc tweet :html-text
                 (-> (:text tweet)
                     (reducer urls url-replacer)
                     (reducer media url-replacer)
                     (reducer user_mentions mentions-replacer)
                     (reducer hashtags hashtags-replacer)
                     (s/replace "RT " "<strong>RT </strong>")))))