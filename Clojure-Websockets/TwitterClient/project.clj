(defproject birdwatch-tc "0.2.0-SNAPSHOT"
  :description "Twitter client part of the BirdWatch system"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [clj-http "2.1.0"]
                 [twitter-api "0.7.8" :exclusions [org.clojure/data.json]]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [clojurewerkz/elastisch "2.2.1"]
                 [org.clojure/tools.logging "0.3.1"]
                 [matthiasn/systems-toolbox "0.5.15"]
                 [ch.qos.logback/logback-classic "1.1.6"]
                 [clj-time "0.11.0"]
                 [clj-pid "0.1.2"]
                 [com.taoensso/carmine "2.12.2" :exclusions [org.clojure/tools.reader]]]
  :source-paths ["src/clj/"]
  :main ^:skip-aot birdwatch-tc.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :plugins [[quickie "0.4.1" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]])
