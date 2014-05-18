(ns cljs-om.ajax
  (:require [goog.events :as events]
            [cljs.core.async :as async :refer [put!]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn error-handler [err] (print err))
(defn handler [payload]
  (put! ajax-results-chan payload))

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

(defn prev-search [query-string size from chan]
  (json-xhr
    {:method :post
     :url "/tweets/search"
     :data (query "*" size from)
     :on-complete #(put! chan %)}))
