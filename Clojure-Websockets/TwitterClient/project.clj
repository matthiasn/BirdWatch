(defproject birdwatch-tc "0.2.0-SNAPSHOT"
  :description "Twitter client part of the BirdWatch system"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "GNU General Public License" :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha15"]
                 [clj-http "3.4.1"]
                 [org.clojure/data.json "0.2.6"]
                 [matthiasn/http.async.client "0.5.4"]
                 [twitter-api "0.7.8" :exclusions [http.async.client]]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [clojurewerkz/elastisch "2.2.2"]
                 [org.clojure/tools.logging "0.3.1"]
                 [matthiasn/systems-toolbox "0.6.6"]
                 [matthiasn/systems-toolbox-redis "0.6.3"]
                 [matthiasn/birdwatch-specs "0.3.1"]
                 [matthiasn/systemd-watchdog "0.1.3"]
                 [ch.qos.logback/logback-classic "1.2.2"]
                 [clj-time "0.13.0"]
                 [clj-pid "0.1.2"]
                 [com.taoensso/carmine "2.15.1"]]
  :source-paths ["src/clj/"]
  :main ^:skip-aot birdwatch-tc.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
