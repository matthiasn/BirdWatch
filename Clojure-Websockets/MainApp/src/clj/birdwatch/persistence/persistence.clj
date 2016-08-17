(ns birdwatch.persistence.persistence
  (:require [clojure.core.match :refer [match]]
            [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [clojure.tools.logging :as log]
            [clojure.string :as s]))

(defn persistence-state-fn
  "Returns function for making state while using provided configuration."
  [conf]
  (fn [_put-fn]
    (let [es-address (:es-address conf)
          conn (esr/connect es-address)]
      (log/info "ElasticSearch connection started to" es-address)
      {:state (atom {:conf conf
                     :conn conn})})))

(defn strip-tweet
  "take only actually needed fields from tweet"
  [t]
  (-> t
      (select-keys [:id_str :id :text :created_at :retweet_count :favorite_count
                    :entities])
      (assoc :user (select-keys (:user t) [:followers_count :name
                                           :profile_image_url :screen_name]))))

(defn strip-source
  "get tweet stripped down to necessary fields"
  [val]
  (let [s (:_source val) t (strip-tweet s) rt (:retweeted_status s)]
    (if rt (assoc t :retweeted_status (strip-tweet rt)) t)))

(defn get-source
  "get vector with :_source of each ElasticSearch result"
  [coll]
  (map strip-source coll))

(defn mk-query
  "Run a query on previous matching tweets."
  [{:keys [query n from]} conf conn]
  (let [search (esd/search conn (:es-index conf) "tweet"
                           :query query :size n :from from :sort {:id :desc})
        hits (esrsp/hits-from search)
        source (get-source hits)]
    (vec source)))

(defn es-query
  "Handler function for previous tweets. Emits message with results of ElasticSearch query."
  [{:keys [current-state msg-payload]}]
  (let [{:keys [conn conf]} current-state]
    {:emit-msg [:tweet/prev-chunk {:result (mk-query msg-payload conf conn)}]}))

(defn es-mt-query
  "Handler function for missing tweets. Uses put-fn for returning results."
  [{:keys [current-state put-fn msg-payload]}]
  (let [{:keys [conn conf]} current-state
        res (esd/get conn (:es-index conf) "tweet" (:id_str msg-payload))]
    {:emit-msg [:tweet/missing-tweet (strip-source res)]}))

(defn total-tweets-indexed
  "Publishes the total tweet count when requested."
  [{:keys [current-state]}]
  (let [cnt (esd/count (:conn current-state) (:es-index (:conf current-state)) "tweet")]
    {:emit-msg (with-meta [:stats/total-tweet-count (s/trim (format "%,15d" (:count cnt)))]
                          {:sente-uid :broadcast})}))

(defn cmp-map
  "Create component for retrieving documents from ElasticSearch"
  [cmp-id conf]
  {:cmp-id      cmp-id
   :state-fn    (persistence-state-fn conf)
   :handler-map {:schedule/count-indexed total-tweets-indexed
                 :cmd/query              es-query
                 :cmd/missing            es-mt-query}})
