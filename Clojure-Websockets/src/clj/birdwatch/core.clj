(ns birdwatch.core
  (:use
   [twitter.callbacks]
   [twitter.callbacks.handlers]
   [twitter.api.streaming]
   [clojure.pprint])
  (:require
   [clojure.edn :as edn]
   [clojure.data.json :as json]
   [clojure.core.match :as match :refer (match)]

   [http.async.client :as ac]
   [twitter.oauth :as oauth]
   [twitter-streaming-client.core :as client]

   [org.httpkit.server :as http-kit-server]
   [ring.middleware.defaults]
   [ring.util.response :refer [resource-response response content-type]]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.route    :as route]
   [taoensso.sente     :as sente]

   [clojurewerkz.elastisch.rest          :as esr]
   [clojurewerkz.elastisch.rest.document :as esd]
   [clojurewerkz.elastisch.query         :as q]
   [clojurewerkz.elastisch.rest.response :as esrsp]

   [clojure.pprint :as pp]

   [clojure.tools.logging :as log]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]])
  (:import
   (twitter.callbacks.protocols AsyncStreamingCallback)))

(def twitter-conf (edn/read-string (slurp "twitterconf.edn")))
(def creds (oauth/make-oauth-creds (:consumer-key twitter-conf) (:consumer-secret twitter-conf)
                                   (:user-access-token twitter-conf) (:user-access-token-secret twitter-conf)))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
      (sente/make-channel-socket! {:user-id-fn (fn [req] (let [uid (str (java.util.UUID/randomUUID))] (log/info "Connected:" (:remote-addr req) uid) uid))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom


(defn query [params]
  (let [conn (esr/connect (:es-address twitter-conf))
        res  (esd/search conn (:es-index twitter-conf)
                         "tweet"
                         :query {:query_string {:default_field "text"
                                                :default_operator "AND"
                                                :query (str "("(:query params)") AND lang:en")}}
                         :size (:n params)
                         :from (:from params)
                         :sort {:id "desc"}
                         )
        n    (esrsp/total-hits res)
        hits (esrsp/hits-from res)]
    (log/info "Total hits:" n "Retrieved:" (count hits))
    hits))

(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        [id data :as ev] event]

    (match [id data]
           ;; TODO: Match your events here, reply when appropriate <...>

           [:cmd/query params]
           (do
             (log/info "Received query:" params)
             (let [res (query params)]
                ;(doseq [t res]
                ;   (chsk-send! (:uid params) [:some/tweet (:_source t)]))

                (chsk-send! (:uid params) [:tweet/prev-chunk res])))

           :else
           (do (log/info "Unmatched event:" ev)
             (when-not (:dummy-reply-fn? (meta ?reply-fn))
               (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

(defonce chsk-router (sente/start-chsk-router-loop! event-msg-handler ch-chsk))


(defroutes my-routes
  (GET  "/" [] (content-type
                (resource-response "index.html" {:root "public"})
                "text/html"))

  (GET  "/dev" [] (content-type
                (resource-response "index-dev.html" {:root "public"})
                "text/html"))

  (GET  "/chsk"  req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk"  req (ring-ajax-post                req))

  (route/resources "/") ; Static files, notably public/main.js (our cljs target)
  (route/not-found "Page not found"))

(def my-ring-handler
  (let [ring-defaults-config
        (assoc-in ring.middleware.defaults/site-defaults [:security :anti-forgery]
          {:read-token (fn [req] (-> req :params :csrf-token))})]
   (ring.middleware.defaults/wrap-defaults my-routes ring-defaults-config)))

(defonce http-server_ (atom nil))

(defn stop-http-server! []
  (when-let [current-server @http-server_]
    (current-server :timeout 100)))

(defn start-http-server! []
  (let [s   (http-kit-server/run-server (var my-ring-handler) {:port 8888})
        uri (format "http://localhost:%s/" (:local-port (meta s)))]
    (stop-http-server!)
    (log/info "Http-kit server is running at" uri)
    (reset! http-server_ s)))


;; channels
(def chunk-chan (chan 10000))
(def buffer-chan (chan 1))
(>!! buffer-chan "")
(def tweets-chan (chan))
(def msg-chan (chan))

(def counter-chan (chan 1))
(>!! counter-chan 0)

(defn parse [str]
  (try
    (let [c (inc (<!! counter-chan))
          json (json/read-json str)]
      (when (== (mod c 1000) 0) (log/info "processed" c "since startup, index " (:es-index twitter-conf)))
      (if (:text json)
        (>!! tweets-chan json)
        (>!! msg-chan json))
      (>!! counter-chan c))
    (catch Exception ex (log/error ex "JSON parsing"))))

(go (while true
      (let [chunk (<! chunk-chan)
            buff (<! buffer-chan)
            combined (str buff chunk)]
        (if (and (.endsWith combined "\r\n") (.startsWith combined "{"))
          (do
            (parse combined)
            (>! buffer-chan ""))
            (>! buffer-chan combined)))))

(def conn (esr/connect (:es-address twitter-conf)))

(go
 (while true
   (let [t (<! tweets-chan)]

     (doseq [uid (:any @connected-uids)]
       (chsk-send! uid [:tweet/new t]))

     (try
       (esd/put conn (:es-index twitter-conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))

(go
 (while true
   (let [m (<! msg-chan)]
     (log/info "msg-chan" m))))

(def ^:dynamic *custom-streaming-callback*
  (AsyncStreamingCallback. #(>!! chunk-chan (str %2)) (comp println response-return-everything) exception-print))


;; streaming connection with Twitter stored in an Atom, can be started and stopped using
;; using the start-twitter-conn! and stop-twitter-conn! functions
(def twitter-conn (atom {}))

(defn stop-twitter-conn! []
  "stop connection to Twitter Streaming API"
  (let [m (meta @twitter-conn)]
    (when m ((:cancel m)))))

(defn start-twitter-conn! []
  "start connection to Twitter Streaming API"
  (stop-twitter-conn!)
  (reset! twitter-conn (statuses-filter :params {:track (:track twitter-conf)}
                                        :oauth-creds creds
                                        :callbacks *custom-streaming-callback* )))


(defn -main
  [& args]
  (start-http-server!)
  (start-twitter-conn!))
