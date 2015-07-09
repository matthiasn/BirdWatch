(defproject
  birdwatch-tc "0.2.0-SNAPSHOT"
  :description "Twitter client part of the BirdWatch system"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [twitter-api "0.7.8"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [clojurewerkz/elastisch "2.2.0-beta3"]
                 [org.clojure/tools.logging "0.3.1"]
                 [matthiasn/systems-toolbox "0.2.14"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [clj-time "0.9.0"]
                 [clj-pid "0.1.2"]
                 [com.taoensso/carmine "2.11.1"]
                 [metrics-clojure "2.5.1"]]
  :source-paths ["src/clj/"]
  :main ^:skip-aot birdwatch-tc.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :plugins [[quickie "0.3.5" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]])
