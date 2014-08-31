(defproject birdwatch "0.1.0-SNAPSHOT"
  :description "Twitter Streaming Client"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [twitter-api "0.7.6"]
                 [org.clojure/core.async "0.1.319.0-6b1aca-alpha"]
                 [twitter-streaming-client "0.3.2"]
                 [clojurewerkz/elastisch "2.1.0-beta4"]
                 [org.clojure/tools.logging "0.3.0"]
                 [com.taoensso/sente "0.15.1" :exclusions [org.clojure/clojure]]
                 [http-kit "2.1.18"]
                 [compojure "1.1.8"]
                 [ring "1.3.1"]
                 [ring/ring-defaults "0.1.1"]
                 [clj-time "0.8.0"]
                 [pandect "0.3.4"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [om "0.7.1"]]

  :source-paths ["src/clj/"]

  :main ^:skip-aot birdwatch.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/clojurescript.test "0.3.1"]]

  :cljsbuild {:builds [{:id "dev"

                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/build/birdwatch.js"
                                   :output-dir "resources/public/js/build/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/build/birdwatch-opt.js"
                                   :optimizations :advanced

                                   ;:preamble ["react/react.min.js"]
                                   ;:externs ["react/externs/react.js" "externs/misc.js"]

                                   ;:preamble ["react/react.min.js"]
                                   :externs ["externs/react.js" "externs/misc.js"]
                                   }}
                       {:id "test"
                        :source-paths ["src/cljs" "test/cljs"]
                        :notify-command ["phantomjs" :cljs.test/runner "js/moment.min.js" "test-out/cljs_om.js"]
                        :compiler {:output-to "test-out/cljs_om.js"
                                   :output-dir "test-out/"
                                   :optimizations :simple
                                   :externs ["externs/react.js" "externs/misc.js"]}}]

              :test-commands {"unit-tests" ["phantomjs" :runner
                                            "js/react.min.js"
                                            "js/moment.min.js"
                                            "test-out/cljs_om.js"]}})
