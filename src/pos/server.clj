(ns pos.server
  (:use [noir.core :only [defpage]]
        [net.cgrand.enlive-html :only [html-resource emit*]])
  (:require [noir.server :as server]
            [noir.cljs.core :as cljs]
            [pos.api]))

(def cljs-options {:advanced {:externs ["externs/jquery.js"]}})

(def handler (server/gen-handler {:mode :dev
                                  :ns 'pos}))

;; ## init in mem database
(pos.api/init-database)

;; ## serve static html directly from `application.html`
(defpage "/" [] (emit* (html-resource "application.html")))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8090"))]
    (cljs/start mode cljs-options)
    (server/start port {:mode mode
                        :ns 'pos})))
