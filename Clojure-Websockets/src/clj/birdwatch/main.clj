(ns birdwatch.main
  (:gen-class)
  (:use [birdwatch.conf])
  (:require
   [birdwatch.twitterclient :as tc]
   [birdwatch.channels :as c]
   [birdwatch.atoms :as a]
   [birdwatch.persistence :as p]
   [clojure.edn :as edn]
   [clojure.data.json :as json]
   [clojure.core.match :as match :refer (match)]
   [http.async.client :as ac]
   [clj-time.core :as t]
   [clojure.pprint :as pp]
   [clojure.tools.logging :as log]
   [org.httpkit.server :as http-kit-server]
   [ring.middleware.defaults]
   [ring.util.response :refer [resource-response response content-type]]
   [compojure.core     :as comp :refer (defroutes GET POST)]
   [compojure.route    :as route]
   [taoensso.sente     :as sente]
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
      (sente/make-channel-socket! {:user-id-fn (fn [req]
                                                 (let [uid (str (java.util.UUID/randomUUID))]
                                                   (log/info "Connected:" (:remote-addr req) uid)
                                                   uid))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)         ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn)         ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom

(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        [id data :as ev] event]

    (match [id data]
           ;; TODO: Match your events here, reply when appropriate <...>

           [:cmd/percolate params]
           (p/start-percolator params)

           [:cmd/query params]
           (do
             (log/info "Received query:" params)
             (let [res (p/query params)]
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
  (let [s   (http-kit-server/run-server (var my-ring-handler) {:port (:port conf)})
        uri (format "http://localhost:%s/" (:local-port (meta s)))]
    (stop-http-server!)
    (log/info "Http-kit server is running at" uri)
    (reset! http-server_ s)))

;; loop for matching connected clients with percolation matches and delivering those on the appropriate socket
(go
 (while true
   (let [[t matches] (<! c/percolation-matches-chan)]
     (doseq [uid (:any @connected-uids)]
       (when (contains? matches (get @a/subscriptions uid))
         (chsk-send! uid [:tweet/new t]))))))

;; loop sending stats about number of connected users to all connected clients
(go
 (while true
   (<! (timeout 2000))
   (let [uids (:any @connected-uids)]
     (doseq [uid uids]
       (chsk-send! uid [:stats/users-count (count uids)])))))

;; loop sending stats about number of indexed tweets to all connected clients
(go
 (while true
   (<! (timeout 3000))
   (let [uids (:any @connected-uids)
         total-tweet-count (format "%,15d" (:count (p/total-tweet-count)))]
     (doseq [uid uids]
       (chsk-send! uid [:stats/total-tweet-count total-tweet-count])))))

(defn -main
  [& args]
  (tc/start-twitter-conn!)
  (start-http-server!))
