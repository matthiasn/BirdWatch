(ns birdwatch.http.markup
  (:require [hiccup.core :refer [html]]
            [ring.middleware.ssl :as ssl]
            [ring.middleware.gzip :as gzip]
            [birdwatch.http.css :refer [index-css]]))

(defn analytics
  "Renders Google Analytics script (in order to keep track of visitors to the demo page)."
  [analytics-id]
  [:script (str "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                 ga('create', " analytics-id ", 'auto');
                 ga('send', 'pageview');")])

(def dev? (get (System/getenv) "DEV" false))

(defn stylesheet [href] [:link {:href href :rel "stylesheet"}])
(defn script [src] [:script {:src src}])

(defn index-page-fn
  "Renders Index page."
  [_req]
  (html
    [:html {:lang "en"}
     [:head
      [:meta {:content "initial-scale=1.0, user-scalable=no, width=device-width"
              :name "viewport"}]
      [:title "BirdWatch"]
      (stylesheet "/bower_components/pure/pure.css")
      (stylesheet "/css/birdwatch.css")
      [:style (index-css dev?)]
      (stylesheet
        "https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext")
      [:link {:href "/images/favicon.png"
              :rel  "shortcut icon"
              :type "image/png"}]]
     [:body
      [:div#ui]
      [:div#jvm-stats-frame]
      (script "/webjars/d3/3.5.17/d3.js")
      (script "/webjars/d3-cloud/1.2.1/build/d3.layout.cloud.js")
      (script "/js/wordcloud.js")
      (script "/js/build/birdwatch.js")

      ; Google Analytics for tracking demo page: Todo: edit ID or remove in your own project.
      [:script {:async "" :src "//www.google-analytics.com/analytics.js"}]
      (analytics "'UA-40261983-4'")]]))

(def ssl-keystore (get (System/getenv) "SSL_KEYSTORE"))
(def key-password (get (System/getenv) "SSL_KEYSTORE_PW"))

(def sente-map
  {:index-page-fn index-page-fn
   :middleware    (fn [app] (gzip/wrap-gzip (ssl/wrap-hsts app)))
   :relay-types   #{:tweet/new
                    :tweet/prev-chunk
                    :tweet/missing-tweet
                    :stats/users-count
                    :stats/total-tweet-count
                    :stats/jvm}
   :undertow-cfg  (if (and ssl-keystore key-password)
                    {:ssl-port     (get (System/getenv) "SSL_PORT" 8443)
                     :keystore     ssl-keystore
                     :key-password key-password}
                    {})})
