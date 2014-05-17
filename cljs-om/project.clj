(defproject cljs-om "0.1.0-SNAPSHOT"
  :description "BirdWatch UI written in ClojureScript using Om"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.2"]
                 [cljs-ajax "0.2.3"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-om"
              :source-paths ["src"]
              :compiler {:output-to "../public/cljs/cljs_om.js"
                         :output-dir "../public/cljs/out"
                         :optimizations :none
                         :externs ["externs.js"]
                         :source-map true}}]})
