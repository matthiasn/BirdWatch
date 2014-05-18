(ns cljs-om.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [om.core :as om :include-macros true]
            [cljs-om.util :as util]
            [cljs-om.timeseries :as ts]
            [cljs-om.tweets :as tweets]
            [cljs-om.ui :as ui]
            [cljs.core.async :as async :refer [<! chan put! alts! timeout]]))

(enable-console-print!)

(def app-state (atom (util/initial-state)))

(om/root ui/tweets-view       app-state {:target (. js/document (getElementById "tweet-frame"))})
(om/root ui/count-view        app-state {:target (. js/document (getElementById "tweet-count"))})
(om/root ui/search-view       app-state {:target (. js/document (getElementById "search"))})
(om/root ui/sort-buttons-view app-state {:target (. js/document (getElementById "sort-buttons"))})

(def cloud-elem (. js/document (getElementById "wordCloud")))
(def cloud-w (aget cloud-elem "offsetWidth"))
(def word-cloud (.WordCloud js/BirdWatch cloud-w (* cloud-w 0.7) 250 (fn [e]) "#wordCloud"))

(js/setInterval #(ts/update ts/graph-with-legend) 5000)
(js/setInterval #(.updateBarchart js/BirdWatch (clj->js (take 25 (:words-sorted-by-count @app-state)))) 1000)

(def tweets-chan (chan 10000))
(def prev-tweets-chan (chan 100000))
(def combined-tweets-chan (chan 1))

(defn fwd [from to ms]
  (go-loop []
           (put! to (<! from))
           (<! (timeout ms))
           (recur)))

(fwd tweets-chan combined-tweets-chan 0)
(fwd prev-tweets-chan combined-tweets-chan 10)

(go-loop [] (tweets/add-tweet (<! combined-tweets-chan) app-state word-cloud) (recur))

(def ajax-results-chan (chan))
(go-loop []
         (let [parsed (js->clj (JSON/parse (<! ajax-results-chan)) :keywordize-keys true)]
           (doseq [t (:hits (:hits parsed))]
             (put! prev-tweets-chan (:_source t)))
           (<! (timeout 1000))
           (recur)))

(tweets/start-search app-state (util/search-hash) tweets-chan ajax-results-chan)
