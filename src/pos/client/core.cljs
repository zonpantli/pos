(ns pos.client.core
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [pos.client.controller :as controller])
  (:use [jayq.core :only [$ append]])
  (:use-macros [crate.macros :only [defpartial]])
  (:require-macros [fetch.macros :as fm]
                   [jayq.macros :as jq]))

;; watcher interface to switch between compilation modes
;; (watcher/init)

;; Browser connected repl, run clojure in inferior-lisp
(repl/connect "http://localhost:9000/repl")

(def $content ($ :#content))

(comment
 (defpartial up-and-running []
   [:p.alert "CLJS is compiled and active... Time to build something!"])

 (append $content (up-and-running)))


;;== init app ==================================================
(jq/ready
 (controller/init))
