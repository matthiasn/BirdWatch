(defproject cljs-om "0.1.0-SNAPSHOT"
  :description "BirdWatch UI written in ClojureScript using Om"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.2"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "../public/cljs/cljs_om.js"
                                   :output-dir "../public/cljs/out"
                                   :optimizations :none
                                   :source-map true
                                   :externs ["om/externs/react.js" "externs.js"]}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {:output-to "../public/cljs-opt/cljs_om.js"
                                   :optimizations :advanced
                                   :pretty-print true
                                   ;:preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js" "externs.js"]}}]})
