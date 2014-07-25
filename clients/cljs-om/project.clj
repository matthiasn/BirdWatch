(defproject cljs-om "0.1.0-SNAPSHOT"
  :description "BirdWatch UI written in ClojureScript using Om"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [om "0.6.5"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/clojurescript.test "0.3.1"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "../../public/build/cljs/cljs_om.js"
                                   :output-dir "../../public/build/cljs/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {:output-to "../../public/build/cljs-opt/cljs_om.js"
                                   :optimizations :advanced
                                   ;:preamble ["react/react.min.js"]
                                   :externs ["externs/react.js" "externs/misc.js"]}}
                       {:id "test"
                        :source-paths ["src" "test"]
                        :notify-command ["phantomjs" :cljs.test/runner "js/moment.min.js" "test-out/cljs_om.js"]
                        :compiler {:output-to "test-out/cljs_om.js"
                                   :output-dir "test-out/"
                                   :optimizations :simple
                                   :externs ["externs/react.js" "externs/misc.js"]}}]

              :test-commands {"unit-tests" ["phantomjs" :runner
                                            "js/react.min.js"
                                            "js/moment.min.js"
                                            "test-out/cljs_om.js"]}})
