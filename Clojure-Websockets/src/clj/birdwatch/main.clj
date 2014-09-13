(ns birdwatch.main
  (:gen-class)
  (:use [birdwatch.conf])
  (:require
   [birdwatch.twitter-client :as tc]
   [birdwatch.channels :as c]
   [birdwatch.communicator :as comm]
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
   [clojure.core.async :as async :refer [<! <!! >! >!! chan put! alts! timeout go]]
   [clj-pid.core :as pid]
   [com.stuartsierra.component :as component]))

(defroutes my-routes
  (GET  "/" [] (content-type
                (resource-response "index.html" {:root "public"})
                "text/html"))
  (GET  "/dev" [] (content-type
                (resource-response "index-dev.html" {:root "public"})
                "text/html"))
  (GET  "/chsk"  req (comm/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk"  req (comm/ring-ajax-post                req))
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

(def pid-file "birdwatch.pid")

(defn -main
  [& args]
  (pid/save pid-file)
  (pid/delete-on-shutdown! pid-file)
  (log/info "Application started, PID" (pid/current))
  (tc/start-twitter-conn!)
  (tc/watch-twitter-conn!)
  (start-http-server!))
