(defproject
  birdwatch "0.2.0-SNAPSHOT"
  :description "Main part of the BirdWatch system (without TwitterClient)"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [clojurewerkz/elastisch "2.2.0-beta3"]
                 [org.clojure/tools.logging "0.3.1"]
                 [matthiasn/systems-toolbox "0.2.1-SNAPSHOT"]
                 [org.clojure/tools.namespace "0.2.10"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]
                 [clj-time "0.9.0"]
                 [pandect "0.5.1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [org.clojure/data.priority-map "0.0.5"]
                 [reagent "0.5.0"]
                 [clj-pid "0.1.2"]
                 [com.taoensso/carmine "2.11.1"]
                 [metrics-clojure "2.5.1"]]

  :source-paths ["src/clj/"]

  :jvm-opts ^:replace ["-Xmx1G" "-server"]

  :main ^:skip-aot birdwatch.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :plugins [[lein-cljsbuild "1.0.6"]
            [com.cemerick/clojurescript.test "0.3.3"]
            [quickie "0.3.6" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]
            [codox "0.8.10"]]

  :clean-targets ^{:protect false} ["resources/public/js/build/"]

  :cljsbuild {:builds        [{:id           "dev"
                               :source-paths ["src/cljs"]
                               :compiler     {:output-to     "resources/public/js/build/birdwatch.js"
                                              :output-dir    "resources/public/js/build/dev-out"
                                              :optimizations :simple
                                              :externs       ["externs/misc.js"]
                                              ;:source-map    "resources/public/js/build/birdwatch.js.map"
                                              }}
                              {:id           "release"
                               :source-paths ["src/cljs"]
                               :compiler     {:output-to     "resources/public/js/build/birdwatch-opt.js"
                                              :output-dir    "resources/public/js/build/out"
                                              :optimizations :advanced
                                              :externs       ["externs/misc.js"]}}
                              {:id           "test"
                               :source-paths ["src/cljs" "test/cljs"]
                               :compiler     {:output-to     "test-out/birdwatch.js"
                                              :output-dir    "test-out/"
                                              :optimizations :simple
                                              :externs       ["externs/react.js" "externs/misc.js"]}}]

              :test-commands {"unit-tests" ["phantomjs" :runner
                                            "resources/public/bower_components/react/react.js"
                                            "resources/public/bower_components/momentjs/moment.js"
                                            "test-out/birdwatch.js"]}})
