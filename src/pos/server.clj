(ns pos.server
  (:require [noir.server :as server]
            [noir.cljs.core :as cljs]))

(server/load-views-ns 'pos.views)
(def cljs-options {:advanced {:externs ["externs/jquery.js"]}})

(def handler (server/gen-handler {:mode :dev
                                  :ns 'pos}))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8090"))]
    (cljs/start mode cljs-options)
    (server/start port {:mode mode
                        :ns 'pos})))