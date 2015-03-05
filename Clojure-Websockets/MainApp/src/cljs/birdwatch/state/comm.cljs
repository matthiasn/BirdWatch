(ns birdwatch.state.comm
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [birdwatch.state.search :as s]
            [birdwatch.state.initial :as i]
            [birdwatch.state.proc :as p]
            [cljs.core.async :refer [<! put! pipe timeout chan sliding-buffer]]
            [cljs.core.match :refer-macros [match]]))

;;;; Channels processing namespace. Here, messages are taken from channels and processed.

(defn- prev-chunks-loop
  "Take messages (vectors of tweets) from prev-chunks-chan, add each tweet to application
   state, then pause to give the event loop back to the application (otherwise, UI becomes
   unresponsive for a short while)."
  [prev-chunks-chan app]
  (go-loop []
           (let [chunk (<! prev-chunks-chan)]
             (doseq [t chunk] (p/add-tweet! t app))
             (<! (timeout 50))
             (recur))))

(defn- handle-prev-chunk
  "Take messages (vectors of tweets) from prev-chunks-chan, add each tweet to application
   state, then pause to give the event loop back to the application (otherwise, UI becomes
   unresponsive for a short while)."
  [chunk app]
  (doseq [t chunk] (p/add-tweet! t app)))


(defn handle-incoming
  "Process messages from the data channel and process / add to application state.
   In the case of :tweet/prev-chunk messages: put! on separate channel individual items
   are handled with a lower priority."
  [app put-fn msg]
  (match msg
         [:tweet/new tweet] (p/add-tweet! tweet app)
         [:tweet/missing-tweet tweet] (p/add-to-tweets-map! app :tweets-map tweet)
         ; [:tweet/prev-chunk prev-chunk] (do (put! prev-chunks-chan prev-chunk)
         ;                                (s/load-prev app qry-chan))
         [:tweet/prev-chunk chunk] (do (handle-prev-chunk chunk app) (s/load-prev-2 app put-fn))
         ;[:tweet/prev-chunk prev-chunk] (prn "prev recvd")
         [:stats/users-count n] (swap! app assoc :users-count n)
         [:stats/total-tweet-count n] (swap! app assoc :total-tweet-count n)

         [:toggle-live] (swap! app update :live not)
         [:set-search-text text] (swap! app assoc :search-text text)
         [:set-current-page page] (swap! app assoc :page page)
         [:set-page-size n] (swap! app assoc :n n)
         [:start-search] (s/start-search-2 app (i/initial-state) put-fn)
         [:set-sort-order by-order] (swap! app assoc :sorted by-order)
;         [:retrieve-missing id-str] (put! qry-chan [:cmd/missing {:id_str id-str}])
         [:retrieve-missing id-str] (put-fn [:cmd/missing {:id_str id-str}])
         [:append-search-text text] (s/append-search-text text app)

         :else (prn "unknown msg in data-loop" msg)))

(defn- state-in-loop
  "Process messages from the data channel and process / add to application state.
   In the case of :tweet/prev-chunk messages: put! on separate channel individual items
   are handled with a lower priority."
  [state-in-chan qry-chan app]
  (let [prev-chunks-chan (chan)]
    (prev-chunks-loop prev-chunks-chan app)
    (go-loop []
             (let [msg (<! state-in-chan)]
               (match msg
                      [:tweet/new tweet] (p/add-tweet! tweet app)
                      [:tweet/missing-tweet tweet] (p/add-to-tweets-map! app :tweets-map tweet)
                      [:tweet/prev-chunk prev-chunk] (do
                                                       (put! prev-chunks-chan prev-chunk)
                                                       (s/load-prev app qry-chan))
                      [:stats/users-count n] (swap! app assoc :users-count n)
                      [:stats/total-tweet-count n] (swap! app assoc :total-tweet-count n)

                      [:toggle-live] (swap! app update :live not)
                      [:set-search-text text] (swap! app assoc :search-text text)
                      [:set-current-page page] (swap! app assoc :page page)
                      [:set-page-size n] (swap! app assoc :n n)
                      [:start-search] (s/start-search app (i/initial-state) qry-chan)
                      [:set-sort-order by-order] (swap! app assoc :sorted by-order)
                      [:retrieve-missing id-str] (put! qry-chan [:cmd/missing {:id_str id-str}])
                      [:append-search-text text] (s/append-search-text text app)

                      :else (prn "unknown msg in data-loop" msg))
               (recur)))))

(defn- broadcast-state
  "Broadcast state changes on the specified channel. Internally uses a sliding
   buffer of size one in order to not overwhelm the rest of the system with too
   frequent updates. The only one that matters next is the latest state anyway.
   It doesn't harm to drop older ones on the channel."
  [pub-chan app]
  (let [sliding-chan (chan (sliding-buffer 1))]
    (pipe sliding-chan pub-chan)
    (add-watch app :watcher
               (fn [_ _ _ new-state]
                 (put! sliding-chan [:app-state new-state])))))
