(defproject birdwatch "0.2.0-SNAPSHOT"
  :description "Main part of the BirdWatch system (without TwitterClient)"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/tools.reader "1.0.0-alpha2"]
                 [org.clojure/clojurescript "1.7.228"]
                 [clojurewerkz/elastisch "2.2.1"]
                 [com.rpl/specter "0.9.2"]
                 [org.clojure/tools.logging "0.3.1"]
                 [com.taoensso/timbre "4.3.1" :exclusions [io.aviso/pretty]]
                 [com.taoensso/encore "2.42.0"]
                 [com.taoensso/carmine "2.12.2"]
                 [matthiasn/systems-toolbox "0.5.14"]
                 [matthiasn/systems-toolbox-sente "0.5.12"]
                 [matthiasn/systems-toolbox-ui "0.5.5"]
                 [matthiasn/systems-toolbox-metrics "0.5.2"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [ch.qos.logback/logback-classic "1.1.6"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]
                 [clj-time "0.11.0"]
                 [pandect "0.5.4"]
                 [amalloy/ring-gzip-middleware "0.1.3"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [org.clojure/data.priority-map "0.0.7"]
                 [reagent "0.5.1"]
                 [cljsjs/moment "2.10.6-3"]
                 [clj-pid "0.1.2"]
                 [ring/ring-ssl "0.2.1" :exclusions [ring/ring-core]]
                 [metrics-clojure "2.6.1"]]

  :source-paths ["src/clj/"]

  :jvm-opts ["-Xmx1G" "-server" "-Djdk.tls.ephemeralDHKeySize=2048"
             "-Djava.security.properties=TLS/birdwatch.security"]

  :main ^:skip-aot birdwatch.main
  :target-path "target/%s"

  :profiles {:uberjar {:aot :all}
             :http2   {:jvm-opts ["-Xbootclasspath/p:TLS/alpn-boot-8.1.7.v20160121.jar"]}}

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.0-6" :exclusions [org.clojure/clojure
                                                  org.clojure/clojurescript
                                                  org.clojure/tools.reader
                                                  org.clojure/google-closure-library
                                                  commons-fileupload
                                                  ring/ring-core
                                                  org.codehaus.plexus/plexus-utils]]
            [quickie "0.4.1" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]
            [codox "0.9.4" :exclusions [org.clojure/tools.reader org.clojure/tools.namespace]]]


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
