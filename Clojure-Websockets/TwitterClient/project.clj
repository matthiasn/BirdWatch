(defproject birdwatch-tc "0.2.0-SNAPSHOT"
  :description "Twitter client part of the BirdWatch system"
  :url "https://github.com/matthiasn/Birdwatch"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [twitter-api "0.7.8"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [clojurewerkz/elastisch "2.2.0-beta2"]
                 [org.clojure/tools.logging "0.3.1"]
                 [com.matthiasnehlsen/inspect "0.1.13"]
                 [matthiasn/systems-toolbox "0.1.23-SNAPSHOT"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [clj-time "0.9.0"]
                 [clj-pid "0.1.1"]
                 [com.taoensso/carmine "2.9.2" :exclusions [com.taoensso/encore]]
                 [metrics-clojure "2.4.0"]]

  :source-paths ["src/clj/"]

  :main ^:skip-aot birdwatch-tc.main
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :plugins [[quickie "0.3.5" :exclusions [org.clojure/clojure org.codehaus.plexus/plexus-utils]]])
