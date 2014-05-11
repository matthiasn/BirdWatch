(defproject cljs-om "0.1.0-SNAPSHOT"
  :description "BirdWatch UI written in ClojureScript using Om"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.2"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-om"
              :source-paths ["src"]
              :compiler {
                :output-to "../public/cljs/cljs_om.js"
                :output-dir "../public/cljs/out"
                :optimizations :none
                :source-map true}}]})
