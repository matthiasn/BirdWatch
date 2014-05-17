(ns ajax.core
  (:require goog.net.EventType
            [goog.net.XhrIo :as xhr]
            [goog.net.XhrManager :as xhrm]
            [goog.Uri :as uri]
            [goog.Uri.QueryData :as query-data]
            [goog.json.Serializer]
            [goog.events :as events]
            [goog.structs :as structs]
            [cljs.reader :as reader]
            [clojure.string :as str]))

(defprotocol AjaxImpl
  "An abstraction for a javascript class that implements
   Ajax calls."
  (-js-ajax-request [this uri method body headers handler opts]
    "Makes an actual ajax request.  All parameters except opts
     are in JS format."))

(extend-type goog.net.XhrIo
  AjaxImpl
  (-js-ajax-request
    [this uri method body headers handler {:keys [timeout]}]
    (doto this
      (events/listen goog.net.EventType/COMPLETE handler)
      (.send uri method body headers timeout))))

(extend-type goog.net.XhrManager
  AjaxImpl
  (-js-ajax-request
    [this uri method body headers handler
     {:keys [id timeout priority max-retries]}]
    (.send this id uri method body headers
           priority handler max-retries)))

(defn success? [status]
  (some #{status} [200 201 202 204 205 206]))

(defn read-edn [xhrio]
  (reader/read-string (.getResponseText xhrio)))

; This code would be a heck of a lot shorter if ClojureScript
; had macros.  As it is, a macro doesn't justify the extra build
; complication
(defn edn-response-format [] {:read read-edn :description "EDN"})
(defn edn-request-format []
  {:write pr-str
   :content-type "application/edn"})

(defn params-to-str [params]
  (if params
    (-> params
        clj->js
        structs/Map.
        query-data/createFromMap
        .toString)))

(defn read-text [xhrio]
  (.getResponseText xhrio))

(defn url-request-format []
  {:write params-to-str
   :content-type "application/x-www-form-urlencoded"})

(defn raw-response-format []
  {:read read-text
   :description "raw text"})

(defn write-json [data]
  (.serialize (goog.json.Serializer.) (clj->js data)))

(defn json-request-format []
  {:write write-json
   :content-type "application/json"})

(defn json-response-format
  "Returns a JSON response format.  Options include
   :keywords? Returns the keys as keywords
   :prefix A prefix that needs to be stripped off.  This is to
   combat JSON hijacking.  If you're using JSON with GET request,
   you should use this.
   http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
   http://haacked.com/archive/2009/06/24/json-hijacking.aspx"
  ([{:keys [prefix keywords?]}]
     {:read (fn read-json [xhrio]
              (let [json (.getResponseJson xhrio prefix)]
                (js->clj json :keywordize-keys keywords?)))
      :description (str "JSON"
                        (if prefix (str " prefix '" prefix "'"))
                        (if keywords? " keywordize"))}))

(defn get-default-format [xhrio]
  (let [ct (.getResponseHeader xhrio "Content-Type")
        format (if (and ct (>= (.indexOf ct "json") 0))
                (json-response-format {})
                (edn-response-format))]
    (update-in format [:description] #(str % " (default)"))))

(defn use-content-type [format]
  (dissoc format :write))

(defn codec [request-format
             {:keys [read description] :as response-format}]
  (assoc request-format
    :read read
    :description description))

(defn get-format [format]
  (cond
   (map? format) format
   (ifn? format) (codec (url-request-format)
                        {:read format :description "custom"})
   :else (throw (js/Error. (str "unrecognized format: " format)))))

(defn exception-response [e status {:keys [description]} xhrio]
  (let [response {:status status
                  :response nil}
        status-text (str (.-message e)
                         "  Format should have been "
                         description)
        parse-error (assoc response
                      :status-text status-text
                      :is-parse-error true
                      :original-text (.getResponseText xhrio))]
    (if (success? status)
      parse-error
      (assoc response
        :status-text (.getStatusText xhrio)
        :parse-error parse-error))))

(defn interpret-response [format response get-default-format]
  (try
    (let [xhrio (.-target response)
          status (.getStatus xhrio)
          format (if (:read format)
                   format
                   (get-default-format xhrio))
          parse  (:read format)]
      (try
        (let [response (parse xhrio)]
          (if (success? status)
            [true response]
            [false {:status status
                    :status-text (.getStatusText xhrio)
                    :response response}]))
        (catch js/Object e
          [false (exception-response e status format xhrio)])))
    (catch js/Object e               ; These errors should never happen
      [false {:status 0
              :status-text (.-message e)
              :response nil}])))

(defn no-format [xhrio]
  (throw (js/Error. "No response format was supplied.")))

(defn uri-with-params [uri params]
  (if params
    (str uri "?" (params-to-str params))
    uri))

(defn process-inputs [uri method
                      {:keys [write content-type] :as format}
                      {:keys [params headers]}]
  (if (= method "GET")
    [(uri-with-params uri params) nil headers]
    (let [{:keys [write content-type]} format body (write params)
          content-type (if content-type
                         {"Content-Type" content-type})
          headers (merge (or headers {}) content-type)]
      [uri body headers])))

(defn normalize-method [method]
  (if (keyword? method)
    (str/upper-case (name method))
    method))

(defn base-handler [format {:keys [handler get-default-format]}]
  (fn [xhrio]
    (handler (interpret-response format xhrio
                                 (or get-default-format no-format)))))

(defn ajax-request
  ([uri method {:keys [format] :as opts} js-ajax]
     (let [format (get-format format)
           method (normalize-method method)
           [uri body headers]
           (process-inputs uri method format opts)
           handler (base-handler format opts)]
       (-js-ajax-request js-ajax uri method body
                         (clj->js headers) handler opts)))
  ([uri method opts]
     (ajax-request uri method opts (new goog.net.XhrIo))))

(defn json-format [format-params]
  (codec (json-request-format)
                 (json-response-format format-params)))

(defn edn-format []
  (codec (edn-request-format) (edn-response-format)))

(defn raw-format []
  (codec (url-request-format) (raw-response-format)))

; "Easy" API beyond this point

(defn keyword-request-format [format format-params]
  (case format
    :json (json-request-format)
    :edn (edn-request-format)
    :raw (url-request-format)
    :url (url-request-format)
    (throw
     (js/Error. (str "unrecognized request format: " format)))))

(defn keyword-response-format [format format-params]
  (case format
    :json (json-response-format format-params)
    :edn (edn-response-format)
    :raw (raw-response-format)
    nil))

(defn transform-handler [{:keys [handler error-handler finally]}]
  (fn easy-handler [[ok result]]
    (if-let [h (if ok handler error-handler)]
      (h result))
    (when (fn? finally)
      (finally))))

(defn transform-format [{:keys [format response-format] :as opts}]
  (let [rf (keyword-response-format response-format opts)]
    (cond (nil? format)
          (codec (edn-request-format) rf)
          (keyword? format)
          (codec (keyword-request-format format opts) rf)
          :else format)))

(defn transform-opts [opts]
  "Note that if you call GET and POST, this function gets called and
   will include JSON and EDN code in your JS.  If you don't want
   this to happen, use ajax-request directly."
  (assoc opts
    :handler (transform-handler opts)
    :format (transform-format opts)
    :get-default-format get-default-format))

(defn GET
  "accepts the URI and an optional map of options, options include:
  :handler - the handler function for successful operation
             should accept a single parameter which is the deserialized
             response
  :error-handler - the handler function for errors, should accept a map
                   with keys :status and :status-text
  :format - the format for the request
  :response-format - the format for the response
  :params - a map of parameters that will be sent with the request"
  [uri & [opts]]
  (ajax-request uri "GET" (transform-opts opts)))

(defn PUT
  "accepts the URI and an optional map of options, options include:
  :handler - the handler function for successful operation
             should accept a single parameter which is the deserialized
             response
  :error-handler - the handler function for errors, should accept a map
                   with keys :status and :status-text
  :format - the format for the request
  :response-format - the format for the response
  :params - a map of parameters that will be sent with the request"
  [uri & [opts]]
  (ajax-request uri "PUT" (transform-opts opts)))

(defn POST
  "accepts the URI and an optional map of options, options include:
  :handler - the handler function for successful operation
             should accept a single parameter which is the deserialized
             response
  :error-handler - the handler function for errors, should accept a map
                   with keys :status and :status-text
  :format - the format for the request
  :response-format - the format for the response
  :params - a map of parameters that will be sent with the request"
  [uri & [opts]]
  (ajax-request uri "POST" (transform-opts opts)))
