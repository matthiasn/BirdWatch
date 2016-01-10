(ns birdwatch.http.markup
  (:require [hiccup.core :refer [html]]
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

(defn index-page-fn
  "Renders Index page."
  [dev?]
  (html
    [:html {:lang "en"}
     [:head
      [:meta {:content "initial-scale=1.0, user-scalable=no, width=device-width" :name "viewport"}]
      [:title "BirdWatch"]
      (when dev? [:link {:href "/bower_components/pure/pure.css" :media "screen" :rel "stylesheet"}])
      (when dev? [:link {:href "/bower_components/pure/grids-responsive.css" :media "screen" :rel "stylesheet"}])
      (when dev? [:link {:href "/css/birdwatch.css" :media "screen" :rel "stylesheet"}])
      (when-not dev? [:link {:href "/css/birdwatch.min.css" :media "screen" :rel "stylesheet"}])
      [:style (index-css dev?)]
      [:link {:href "http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" :rel "stylesheet" :type "text/css"}]
      [:link {:href "/images/favicon.png" :rel "shortcut icon" :type "image/png"}]]
     [:body
      [:div.header
       [:div.home-menu.pure-menu.pure-menu-open.pure-menu-horizontal.pure-menu-fixed
        [:a.pure-menu-heading {:href ""} "Birdwatch"]
        [:ul [:li [:a {:href "https://github.com/matthiasn/Birdwatch" :target "_blank"} "GitHub"]]
         [:li [:a {:href "https://leanpub.com/building-a-system-in-clojure" :target "_blank"} "About"]]]]]
      [:div.content-wrapper
       [:div.l-box
        [:div#count "Tweets: " [:span#tweet-count]]
        [:div#search]
        [:div#pagination]
        [:div#sort-buttons]]
       [:div.pure-g
        [:div.pure-u-1.pure-u-sm-1-2.pure-u-lg-5-12.l-box [:div#tweet-frame]]
        [:div.pure-u-1.pure-u-sm-1-2.pure-u-lg-7-12.l-box
         [:div#timeseries1.timeseries]
         [:hr]
         [:div#wordCloud.cloud]
         [:hr]
         [:h5 "word frequency"]
         [:div#wordcount-barchart.barchart]
         [:hr]
         [:div#users-count]
         [:div#total-tweet-count]
         [:hr]
         [:br] [:br] [:br] [:br] [:br] [:br] [:br]
         [:div#jvm-stats-frame]
         [:br] [:br] [:br] [:br] [:br]
         [:div#observer]]]]
      (when dev? [:script {:src "/bower_components/d3/d3.js"}])
      (if dev? [:script {:src "/js/wordcloud.js"}]      ; uncompressed file contains d3 cloud and BirdWatch wordcloud
               [:script {:src "/js/wordcloud.min.js"}]) ; minified file contains d3, d3 cloud and BirdWatch wordcloud
      [:script {:src "/js/build/birdwatch.js"}]
      ; Google Analytics for tracking demo page: Todo: edit ID or remove in your own project.
      [:script {:async "" :src "//www.google-analytics.com/analytics.js"}]
      (analytics "'UA-40261983-4'")]]))

(def ssl-keystore (get (System/getenv) "SSL_KEYSTORE"))
(def key-password (get (System/getenv) "SSL_KEYSTORE_PW"))

(def sente-map
  {:index-page-fn index-page-fn
   :undertow-cfg  (when (and ssl-keystore key-password)
                    {:ssl-port     (get (System/getenv) "SSL_PORT" 8443)
                     :keystore     ssl-keystore
                     :key-password key-password})})
