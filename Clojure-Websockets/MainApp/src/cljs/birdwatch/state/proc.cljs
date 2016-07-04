(ns birdwatch.state.proc
  (:require-macros [com.rpl.specter.macros :as spm])
  (:require [birdwatch.stats.wordcount :as wc]
            [birdwatch.state.search :as s]
            [com.rpl.specter :as sp]
            [cljs.pprint :as pp]))

(defn add-rt-status
  "Process original, retweeted tweet."
  [tweet state]
  (if-let [rt (:retweeted_status tweet)]
    (let [rt-id (keyword (:id_str rt))
          rt-count (:retweet_count rt)
          newer? #(> rt-count (:retweet_count %))]
      (->> state
           (spm/transform [:by-rt-since-startup rt-id] inc)
           (spm/transform [:by-reach rt-id] #(+ % (:followers_count (:user tweet))))
           (spm/transform [:by-retweets rt-id] #(max % rt-count))
           (spm/transform [:by-favorites rt-id] #(max % (:favorite_count rt)))
           (spm/setval [:tweets-map rt-id newer?] rt)))
    state))

(defn add-words
  "Add words to the words map and the sorted set with the counts (while discarding old entry)."
  [tweet state]
  (reduce (fn [state word]
            (spm/transform [:words-sorted-by-count (sp/keypath word)] inc state))
          state
          (wc/words-in-tweet (:text tweet))))

(defn add-tweet!
  "Increment counter, add tweet to tweets map and to sorted sets by id and by followers. Modifies
   application state."
  [{:keys [current-state msg-payload]}]
  (let [tweet msg-payload
        id-str (:id_str tweet)
        id-key (keyword id-str)]
    (if id-str
      {:new-state (->> current-state
                       (spm/transform [:count] inc)
                       (spm/setval [:tweets-map id-key] tweet)
                       (spm/setval [:by-followers id-key] (:followers_count (:user tweet)))
                       (spm/setval [:by-id id-key] id-str)
                       (spm/transform [:by-reach id-key] #(+ % (:followers_count (:user tweet))))
                       (add-rt-status tweet)
                       (add-words tweet))}
      ;; Oddly, there was an issue where id-str evaluated to nil, despite the pprint looking fine
      ;; upon inspection. This only happened during a single afternoon, so maybe there was something
      ;; wrong/different with tweets intermittently. I do remember seeing the :id key shown as an
      ;; object in the pprint, rather than as the usual long. However, I cannot compare the raw data
      ;; from Twitter at time any longer. Here, it would be very useful to have the raw data available
      ;; for inspection, for example in a Kafka queue, containing byte arrays with the raw JSON.
      ;; For now, enough to watch if problem comes back.
      (pp/pprint [id-str id-key msg-payload]))))

(defn handle-prev-chunk
  "Take messages (vectors of tweets) from prev-chunks-chan, add each tweet to application
   state, then pause to give the event loop back to the application (otherwise, UI becomes
   unresponsive for a short while)."
  [{:keys [cmp-state put-fn msg-payload onto-in-chan]}]
  (onto-in-chan (map (fn [t] [:tweet/new t]) (:result msg-payload)))
  (s/load-prev cmp-state put-fn))
