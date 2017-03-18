(ns birdwatch.state.proc
  (:require [birdwatch.stats.wordcount :as wc]
            [birdwatch.state.search :as s]
            [birdwatch.stats.timeseries :as ts]
            [com.rpl.specter :as sp]
    #?(:clj
            [clojure.pprint :as pp]
       :cljs [cljs.pprint :as pp])
            [birdwatch.util :as util]))

(defn add-rt-status
  "Process original, retweeted tweet."
  [tweet state]
  (if-let [rt (:retweeted_status tweet)]
    (let [rt (util/format-tweet rt)
          rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)
          newer? #(> rt-count (:retweet_count %))]
      (->> state
           (sp/transform [:by-rt-since-startup rt-id] inc)
           (sp/transform [:by-reach rt-id] #(+ % (:followers_count (:user tweet))))
           (sp/transform [:by-retweets rt-id] #(max % rt-count))
           (sp/transform [:by-favorites rt-id] #(max % (:favorite_count rt)))
           (sp/setval [:tweets-map rt-id newer?] rt)))
    state))

(defn add-words
  "Add words to the words map and the sorted set with the counts (while discarding old entry)."
  [tweet state]
  (reduce (fn [state word]
            (sp/transform [:words-sorted-by-count (sp/keypath word)] inc state))
          state
          (wc/words-in-tweet (:text tweet))))

(defn add-ts
  [tweet state]
  (let [ts (ts/tweet-ts tweet)]
    (-> state
        (update-in [:ts :tweet-timestamps] conj ts)
        (update-in [:ts :oldest] #(if % (min % ts) ts))
        (update-in [:ts :newest] max ts))))

(defn add-tweet
  [state tweet]
  (let [tweet (util/format-tweet tweet)
        id-str (:id_str tweet)
        id-key (keyword id-str)]
    (->> state
         (sp/transform [:count] inc)
         (sp/setval [:tweets-map id-key] tweet)
         (sp/setval [:by-followers id-key] (:followers_count (:user tweet)))
         (sp/setval [:by-id id-key] id-str)
         (sp/transform [:by-reach id-key] #(+ % (:followers_count (:user tweet))))
         (add-rt-status tweet)
         (add-words tweet)
         (add-ts tweet)
         ;(ts/ts-data2 tweet)
         )))

(defn add-tweet!
  [{:keys [current-state msg-payload]}]
  (let [new-state (add-tweet current-state msg-payload)
        with-ts (assoc-in new-state [:ts-data] (ts/ts-data2 new-state msg-payload))]
    {:new-state with-ts}))

(defn handle-prev-chunk
  ""
  [{:keys [current-state msg-payload]}]
  (let [new-state (reduce add-tweet current-state (:result msg-payload))
        ts-data (ts/ts-data new-state)
        w-ts (assoc-in new-state [:ts-data] ts-data)]
    {:new-state    w-ts
     :send-to-self [:tweet/load-prev]}))

(defn load-prev
  "Loads previous tweets matching the current search. Search is constructed
   by calling the util/query-string function with dereferenced app state."
  [{:keys [current-state]}]
  (let [chunks-to-load 20
        chunk-size 250
        prev-chunks-loaded (:prev-chunks-loaded current-state)
        load-more? (< prev-chunks-loaded chunks-to-load)]
    (when load-more?
      {:new-state (update-in current-state [:prev-chunks-loaded] inc)
       :emit-msg [:cmd/query {:query (util/query-string current-state)
                              :n     chunk-size
                              :from  (* chunk-size prev-chunks-loaded)}]})))

