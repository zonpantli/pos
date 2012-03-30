(defproject pos "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.2.5" :exclusions [jayq]]
                 [jayq "0.1.0-alpha3"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.1.0-alpha2"]
                 [noir "1.3.0-alpha10"]
                 [enlive "1.0.0"]]
  :dev-dependencies [[ring-serve "0.1.1"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :cljsbuild {:builds [{}]}
  :ring {:handler pos.server/handler}
  :extra-classpath-dirs ["templates"]
  :main ^{:skip-aot true} pos.server)
