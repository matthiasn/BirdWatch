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

(defn index
  "Renders Index page."
  [dev?]
  (html
    [:html {:lang "en"}
     [:head
      [:meta {:content "initial-scale=1.0, user-scalable=no, width=device-width", :name "viewport"}]
      [:title "BirdWatch"]
      [:link {:href "/css/bootstrap-glyphicons.css", :media "screen", :rel "stylesheet"}]
      [:link {:href "/bower_components/pure/pure.css", :media "screen", :rel "stylesheet"}]
      [:link {:href "/bower_components/pure/grids-responsive.css", :media "screen", :rel "stylesheet"}]
      [:link {:href "/css/birdwatch.css", :media "screen", :rel "stylesheet"}]
      [:style (index-css dev?)]
      [:link {:href "http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" :rel "stylesheet" :type "text/css"}]
      [:link {:href "/images/favicon.png", :rel "shortcut icon", :type "image/png"}]]
     [:body
      [:div.header
       [:div.home-menu.pure-menu.pure-menu-open.pure-menu-horizontal.pure-menu-fixed
        [:a.pure-menu-heading {:href ""} "Birdwatch"]
        [:ul [:li [:a {:href "https://github.com/matthiasn/Birdwatch", :target "_blank"} "GitHub"]]
         [:li [:a {:href "https://leanpub.com/building-a-system-in-clojure", :target "_blank"} "About"]]]]]
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
         [:br] [:br] [:br] [:br] [:br] [:br] [:br] [:br]
         [:div#jvm-stats-frame]]]]
      [:script {:src "/bower_components/d3/d3.min.js"}]
      [:script {:src "/bower_components/momentjs/min/moment.min.js"}]
      [:script {:src "/js/vendor/d3.layout.cloud.js"}]
      [:script {:src "/js/wordcloud.js"}]
      [:script {:src "//platform.twitter.com/widgets.js", :type "text/javascript"}]
      (if dev?
        [:script {:src "/js/build/birdwatch.js"}]
        [:script {:src "/js/build/birdwatch-opt.js"}])
      ; Google Analytics for tracking demo page: Todo: edit ID or remove in your own project.
      (when-not dev? [:script {:async "", :src "//www.google-analytics.com/analytics.js"}])
      (when-not dev? (analytics "'UA-40261983-4'"))]]))
