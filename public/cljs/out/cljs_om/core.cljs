(ns cljs-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.ui :as ui]))

(enable-console-print!)

(defn sort-by [key]
  (fn [x y]
    (if (not (= (key x) (key y)))
      (> (key x) (key y))
      (> (:id x) (:id y)))))

(def app-state (atom {:count 0
                      :tweets-map {}
                      :rt-since-startup {}
                      :by-followers (sorted-set-by (sort-by :followers_count))
                      :by-retweets (sorted-set-by (sort-by :retweet_count))
                      :by-rt-since-startup (sorted-set-by (sort-by :count))
                      :by-favorites (sorted-set-by (sort-by :favorite_count))
                      :by-id (sorted-set-by >)
                      :n 10
                      :sorted :by-followers}))

(om/root
  ui/tweets-view
  app-state
  {:target (. js/document (getElementById "tweet-frame"))})

(om/root
  ui/count-view
  app-state
  {:target (. js/document (getElementById "tweet-count"))})

(om/root
  ui/sort-buttons-view
  app-state
  {:target (. js/document (getElementById "sort-buttons"))})

(defn add-to-tweets-map [tweet]
    (swap! app-state assoc-in [:tweets-map (keyword (:id_str tweet))] (util/format-tweet tweet)))

(defn add-rt-status [tweet]
  (if (contains? tweet :retweeted_status)
    (let [rt (:retweeted_status tweet)
          prev ((keyword (:id_str rt)) (:tweets-map @app-state))
          prev-rt-count ((keyword (:id_str rt)) (:rt-since-startup @app-state))]
      (if (not (nil? prev))
        (do
          (swap! app-state assoc :by-retweets (disj (:by-retweets @app-state)
                                                    {:retweet_count (:retweet_count prev)
                                                     :id (:id_str rt)}))
          (swap! app-state assoc :by-favorites (disj (:by-favorites @app-state)
                                                    {:favorite_count (:favorite_count prev)
                                                     :id (:id_str rt)}))))
      (if (not (nil? rt))
        (do
          (if (not (nil? prev-rt-count))
            (swap! app-state assoc :by-rt-since-startup (disj (:by-rt-since-startup @app-state)
                                                              {:count prev-rt-count
                                                               :id (:id_str rt)})))

          (swap! app-state assoc-in [:rt-since-startup (keyword (:id_str rt))]
                 (inc ((keyword (:id_str rt)) (:rt-since-startup @app-state))))

          (swap! app-state assoc :by-rt-since-startup (conj (:by-rt-since-startup @app-state)
                                             {:count ((keyword (:id_str rt)) (:rt-since-startup @app-state))
                                              :id (:id_str rt)}))))
      (add-to-tweets-map rt)
      (swap! app-state assoc :by-retweets (conj (:by-retweets @app-state)
                                             {:retweet_count (:retweet_count rt)
                                              :id (:id_str rt)}))
      (swap! app-state assoc :by-favorites (conj (:by-favorites @app-state)
                                             {:favorite_count (:favorite_count rt)
                                              :id (:id_str rt)})))))

(defn add-tweet [tweet]
  "increment counter, add tweet to tweets map and to sorted sets by id and by followers"
  (swap! app-state assoc :count (inc (:count @app-state)))
  (add-to-tweets-map tweet)
  (add-rt-status tweet)
  (swap! app-state assoc :by-followers (conj (:by-followers @app-state)
                                             {:followers_count (:followers_count (:user tweet))
                                              :id (:id_str tweet)}))
  (swap! app-state assoc :by-id (conj (:by-id @app-state) (:id_str tweet))) )

(defn receive-sse [e]
  (let [tweet (js->clj (JSON/parse (.-data e)) :keywordize-keys true)]
    (add-tweet tweet)))

(def stream (js/EventSource. "/tweetFeed?q=*"))
(.addEventListener stream
                   "message"
                   (fn [e] (receive-sse e))
                   false)

