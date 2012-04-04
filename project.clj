(defproject pos "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.3.0" :exclusions [jayq]]
                 [jayq "0.1.0-alpha3"]
                 [enlive "1.0.0"]
                                        ;                 [org.clojure/clojurescript "0.0-1011"]
                                        ;                 [clj-pusher "0.2.0"]
                 [clj-http "0.3.5"]
                 ]
  :dev-dependencies [[ring-serve "0.1.1"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :cljsbuild {:builds [{}]}
  :ring {:handler pos.server/handler}
  :extra-classpath-dirs ["templates"]
  :main ^{:skip-aot true} pos.server)
