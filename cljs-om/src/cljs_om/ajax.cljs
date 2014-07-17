(ns cljs-om.ajax
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [goog.events :as events]
            [cljs.core.async :as async :refer [put! timeout chan]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn error-handler [err] (print err))

(def ajax-results-chan (chan))
(go-loop []
         (let [parsed (js->clj (JSON/parse (<! ajax-results-chan)) :keywordize-keys true)]
           (doseq [t (:hits (:hits parsed))]
             (when (= 0 (mod (:_id t) 200)) (<! (timeout 10)))
             (put! cljs-om.core/prev-tweets-chan (:_source t)))
           (recur)))

(defn query [query-string size from]
  {:size size :from from
   :sort {:id "desc"}
   :query {:query_string {:default_field "text" :default_operator "AND"
                          :query (str "(" query-string ") AND lang:en")}}})

(def ^:private meths {:get "GET" :put "PUT" :post "POST" :delete "DELETE"})

(defn json-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e] (on-complete (.getResponseText xhr))))
    (. xhr
      (send url (meths method) (when data (JSON/stringify (clj->js data)))
        #js {"Content-Type" "application/json"}))))

(defn prev-search [query-string size from]
  (json-xhr
    {:method :post
     :url "/tweets/search"
     :data (query query-string size from)
     :on-complete #(put! ajax-results-chan %)}))
