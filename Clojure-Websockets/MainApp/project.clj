(defproject
  birdwatch "0.2.0-SNAPSHOT"
  :description "Main part of the BirdWatch system (without TwitterClient)"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [clojurewerkz/elastisch "2.2.0-beta4"]
                 [org.clojure/tools.logging "0.3.1"]
                 [com.taoensso/timbre "4.1.4"]
                 [com.taoensso/encore "2.20.0"]
                 [com.taoensso/carmine "2.12.0"]
                 [matthiasn/systems-toolbox "0.3.7"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]
                 [clj-time "0.11.0"]
                 [pandect "0.5.4"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [org.clojure/data.priority-map "0.0.7"]
                 [reagent "0.5.1"]
                 [cljsjs/moment "2.10.6-0"]
                 [clj-pid "0.1.2"]
                 [metrics-clojure "2.5.1"]]

  :source-paths ["src/clj/"]

  :jvm-opts ^:replace ["-Xmx1G" "-server"]

  :main ^:skip-aot birdwatch.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]
            [quickie "0.3.6" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]
            [codox "0.8.13"]]

  :figwheel {:server-port 3452
             :css-dirs    ["resources/public/css"]}

  :clean-targets ^{:protect false} ["resources/public/js/build/" "target/"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/cljs" "env/dev/cljs"]
                        :figwheel     true
                        :compiler     {:main          "birdwatch.dev"
                                       :asset-path    "js/build"
                                       :optimizations :none
                                       :output-dir    "resources/public/js/build/"
                                       :output-to     "resources/public/js/build/birdwatch.js"
                                       :source-map    true
                                       :pretty-print  true}}
                       {:id           "release"
                        :source-paths ["src/cljs"]
                        :compiler     {:output-to     "resources/public/js/build/birdwatch.js"
                                       :optimizations :advanced
                                       :externs       ["externs/misc.js"]
                                       :pretty-print  false}}]})
