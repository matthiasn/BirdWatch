(defproject birdwatch "0.1.0-SNAPSHOT"
  :description "Twitter Streaming Client"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha2"]
                 [twitter-api "0.7.6" :exclusions [org.clojure/clojure org.clojure/data.json]]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [clojurewerkz/elastisch "2.1.0-beta9" :exclusions [com.fasterxml.jackson.core/jackson-core]]
                 [org.clojure/tools.logging "0.3.0"]
                 [ch.qos.logback/logback-classic "1.1.1"]
                 [com.taoensso/sente "1.2.0" :exclusions [org.clojure/clojure]]
                 [org.clojure/core.match "0.2.1"]
                 [http-kit "2.1.19"]
                 [compojure "1.2.1"]
                 [ring "1.3.1"]
                 [ring/ring-defaults "0.1.1"]
                 [clj-time "0.8.0"]
                 [pandect "0.4.1"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [org.clojure/data.priority-map "0.0.5"]
                 [om "0.8.0-alpha1"]
                 [com.cognitect/transit-clj  "0.8.259"]
                 [com.cognitect/transit-cljs "0.8.188"]
                 [clj-pid "0.1.1"]
                 [com.stuartsierra/component "0.2.2"]
                 [com.taoensso/carmine "2.7.1"]]

  :source-paths ["src/clj/"]

  :main ^:skip-aot birdwatch.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/clojurescript.test "0.3.1"]
            [quickie "0.3.5" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/build/birdwatch.js"
                                   :output-dir "resources/public/js/build/out"
                                   :optimizations :simple
                                   :source-map "resources/public/js/build/birdwatch.js.map"}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/build/birdwatch-opt.js"
                                   :optimizations :advanced
                                   ;:preamble ["react/react.min.js"]
                                   :externs ["externs/react.js" "externs/misc.js"]
                                   }}
                       {:id "test"
                        :source-paths ["src/cljs" "test/cljs"]
                        :compiler {:output-to "test-out/birdwatch.js"
                                   :output-dir "test-out/"
                                   :optimizations :simple
                                   :externs ["externs/react.js" "externs/misc.js"]}}]

              :test-commands {"unit-tests" ["phantomjs" :runner
                                            "resources/public/bower_components/react/react.js"
                                            "resources/public/bower_components/momentjs/moment.js"
                                            "test-out/birdwatch.js"]}})
