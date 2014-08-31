(ns birdwatch.main
  (:gen-class)
  (:use
   [twitter.callbacks]
   [twitter.callbacks.handlers]
   [twitter.api.streaming]
   [clojure.pprint])
  (:require
   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clojure.core.match :as match :refer (match)]

   [http.async.client :as ac]
   [twitter.oauth :as oauth]
   [twitter-streaming-client.core :as client]

   [clj-time.core :as t]
   [pandect.core :refer [sha1]]

   [org.httpkit.server :as http-kit-server]
   [ring.middleware.defaults]
   [ring.util.response :refer [resource-response response content-type]]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.route    :as route]
   [taoensso.sente     :as sente]

   [clojurewerkz.elastisch.rest             :as esr]
   [clojurewerkz.elastisch.rest.document    :as esd]
   [clojurewerkz.elastisch.rest.percolation :as perc]
   [clojurewerkz.elastisch.query            :as q]
   [clojurewerkz.elastisch.rest.response    :as esrsp]

   [clojure.pprint :as pp]

   [clojure.tools.logging :as log]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]])
  (:import
   (twitter.callbacks.protocols AsyncStreamingCallback)))

(def twitter-conf (edn/read-string (slurp "twitterconf.edn")))
(def conn (esr/connect (:es-address twitter-conf)))

(def creds (oauth/make-oauth-creds (:consumer-key twitter-conf) (:consumer-secret twitter-conf)
                                   (:user-access-token twitter-conf) (:user-access-token-secret twitter-conf)))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
      (sente/make-channel-socket! {:user-id-fn (fn [req]
                                                 (let [uid (str (java.util.UUID/randomUUID))]
                                                   (log/info "Connected:" (:remote-addr req) uid)
                                                   uid))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom


(defn start-percolator [params]
  (let [q (:query params)
        sha (sha1 (str q))]
    (perc/register-query conn "percolator" sha :query q) ; register percolation search with ID based on hash of the query
    (log/info "Percolation registered for query" q "with SHA1" sha)))

(defn query [params]
  "run a query on previous matching tweets"
  (let [conn (esr/connect (:es-address twitter-conf))
        q (:query params)
        res  (esd/search conn (:es-index twitter-conf) "tweet"
                         :query q
                         :size (:n params)
                         :from (:from params)
                         :sort {:id "desc"})
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

           [:cmd/percolate params]
           (start-percolator params)

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
(def tweets-chan (chan))
(def msg-chan (chan))

(def counter (atom 0))

;; atoms for keeping track of incomplete chunk and last received timestamp
(def last-received (atom (t/epoch)))
(def chunk-buff (atom ""))

(defn parse [str]
  (try
    (let [c @counter
          json (json/read-json str)]
      (when (== (mod c 1000) 0) (log/info "processed" c "since startup, index" (:es-index twitter-conf)))
      (if (:text json)
        (>!! tweets-chan json)
        (>!! msg-chan json))
      (swap! counter inc))
    (catch Exception ex (log/error ex "JSON parsing"))))

;; loop for processing chunks from Streaming API
(go
 (while true
   (let [ch (<! chunk-chan)
         buff @chunk-buff
         combined (str buff ch)
         tweet-strings (str/split-lines combined)
         to-process (butlast tweet-strings)
         last-chunk (last tweet-strings)]
     (reset! last-received (t/now))
     (if (> (count to-process) 0)
       (do
         (doseq [ts to-process]
           (when (not (str/blank? ts))
             (parse ts)))
         (reset! chunk-buff last-chunk))
       (reset! chunk-buff combined)))))

;; loop processing successfully parsed tweets, currently just fanning out to all connected clients
(go
 (while true
   (let [t (<! tweets-chan)]

     (doseq [uid (:any @connected-uids)]
       (chsk-send! uid [:tweet/new t]))

     (try
       (esd/put conn (:es-index twitter-conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))

;; loop for logging messages from Streaming API other than tweets
(go
 (while true
   (let [m (<! msg-chan)]
     (log/info "msg-chan" m))))

(def ^:dynamic *custom-streaming-callback*
  (AsyncStreamingCallback. #(>!! chunk-chan (str %2))
                           (comp println response-return-everything)
                           exception-print))

;; streaming connection with Twitter stored in an Atom, can be started and stopped using
;; using the start-twitter-conn! and stop-twitter-conn! functions
(def twitter-conn (atom {}))

(defn stop-twitter-conn! []
  "stop connection to Twitter Streaming API"
  (let [m (meta @twitter-conn)]
    (when m
      (log/info "Stopping Twitter client.")
      ((:cancel m))
      (reset! chunk-buff ""))))

(defn start-twitter-conn! []
  "start connection to Twitter Streaming API"
  (log/info "Starting Twitter client.")
  (reset! twitter-conn (statuses-filter :params {:track (:track twitter-conf)}
                                        :oauth-creds creds
                                        :callbacks *custom-streaming-callback* )))

;; loop watching the twitter client and restarting it if necessary
(go
 (while true
   (<! (timeout (* (:tw-check-interval-sec twitter-conf) 1000)))
   (let [now (t/now)
         since-last-sec (t/in-seconds (t/interval @last-received now))]
     (when (> since-last-sec (:tw-check-interval-sec twitter-conf))
       (do
         (log/error since-last-sec "seconds since last tweet received")
         (stop-twitter-conn!)
         (<! (timeout (* (:tw-check-interval-sec twitter-conf) 1000)))
         (start-twitter-conn!))))))

(defn -main
  [& args]
  (start-twitter-conn!)
  (start-http-server!))
