(defproject cljs-om "0.1.0-SNAPSHOT"
  :description "BirdWatch UI written in ClojureScript using Om"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [om "0.6.4"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "../public/cljs/cljs_om.js"
                                   :output-dir "../public/cljs/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {:output-to "../public/cljs-opt/cljs_om.js"
                                   :optimizations :advanced
                                   ;:preamble ["react/react.min.js"]
                                   :externs ["externs/react.js" "externs/misc.js"]}}]})
