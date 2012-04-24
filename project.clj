(defproject pos "0.1.0-SNAPSHOT"
  :description "Prototype of Kovalo POS system"
  :url "http://kovalo-pos.herokuapp.com"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.3.0" :exclusions [jayq org.clojure/clojurescript]]
                 [jayq "0.1.0-alpha3"]
                 [enlive "1.0.0"]
                 [org.clojure/clojurescript "0.0-1011"]
                 [clj-pusher "0.3.0"]
                 [clj-http "0.3.5"]
                 [crate "0.1.0-alpha3"]]
  :dev-dependencies [[ring-serve "0.1.1"]
                     [lein-marginalia "0.7.0"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :cljsbuild {:builds [{}]}
  :ring {:handler pos.server/handler}
  :extra-classpath-dirs ["templates"]
  :main ^{:skip-aot true} pos.server)
