(ns birdwatch.main
  (:gen-class)
  (:require
   [birdwatch.twitterclient :as tc]
   [birdwatch.channels :as c]

   [clojure.edn :as edn]
   [clojure.string :as str]
   [clojure.data.json :as json]
   [clojure.core.match :as match :refer (match)]

   [http.async.client :as ac]
   [clj-time.core :as t]
   [pandect.core :refer [sha1]]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]

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

   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]]))

(def twitter-conf (edn/read-string (slurp "twitterconf.edn")))
(def conn (esr/connect (:es-address twitter-conf)))

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

(def subscriptions (atom {}))

(defn start-percolator [params]
  "register percolation search with ID based on hash of the query"
  (let [q (:query params)
        sha (sha1 (str q))
        uid (:uid params)]
    (swap! subscriptions assoc uid sha)
    (log/info (pp/pprint @subscriptions))
    (perc/register-query conn "percolator" sha :query q)
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
               ;(doseq [t res] (chsk-send! (:uid params) [:some/tweet (:_source t)]))
               (chsk-send! (:uid params) [:tweet/prev-chunk res])))

           [:chsk/ws-ping params]
           () ; currently just do nothing with ping (no logging either)

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

;; loop for persisting tweets
#_(go
 (while true
   (let [t (<! c/persistence-chan)]
     (try
       (esd/put conn (:es-index twitter-conf) "tweet" (:id_str t) t)
       (catch Exception ex (log/error ex "esd/put error"))))))

;; loop for finding percolation matches and delivering those on the appropriate socket
(go
 (while true
   (let [t (<! c/percolation-chan)
         response (perc/percolate conn "percolator" "tweet" :doc t)
         matches (into #{} (map #(:_id %1) (esrsp/matches-from response)))]
     (doseq [uid (:any @connected-uids)]
       (when (contains? matches (get @subscriptions uid))
         (chsk-send! uid [:tweet/new t]))))))

(defn -main
  [& args]
  (tc/start-twitter-conn!)
  (start-http-server!))
