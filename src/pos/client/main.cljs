(ns pos.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append]])
  (:use-macros [crate.macros :only [defpartial]])
  (:require-macros [fetch.macros :as fm]))

;;************************************************
;; Dev stuff
;;************************************************

;; watcher interface to switch between compilation modes
;; (watcher/init)

;; Browser connected repl, run clojure in inferior-lisp
;; (repl/connect "http://localhost:9000/repl")

;;************************************************
;; Code
;;************************************************

(def $content ($ :#content))

(defpartial up-and-running []
  [:p.alert "CLJS is compiled and active... Time to build something!"])

(append $content (up-and-running))


;; fetch remote examples

(defn adder [a b]
  (fm/remote (adder a b) [result]
             (js/alert result)))

(defn get-user [id]
  (fm/remote (get-user id) [{:keys [username age]}]
             (js/alert (str "Name: " username ", Age: " age))))


(defn shout [msg]
  (fm/remote (shouter msg) [res]
             (js/alert res)))


