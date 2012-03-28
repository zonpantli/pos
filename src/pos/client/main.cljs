(ns pos.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate]
            [fetch.remotes :as fm])
  (:use [jayq.core :only [$ append]]
        [fetch.util :only [clj->js]])
  (:use-macros [crate.macros :only [defpartial]])
  (:require-macros [fetch.macros :as fm]
                   [jayq.macros :as jq]))

;;************************************************
;; Dev stuff
;;************************************************

;; watcher interface to switch between compilation modes
;; (watcher/init)

;; Browser connected repl, run clojure in inferior-lisp
(repl/connect "http://localhost:9000/repl")

(def $content ($ :#content))
(def $typeahead-test ($ :#typeahead-test))


(defpartial up-and-running []
  [:p.alert "CLJS is compiled and active... Time to build something!"])

(append $content (up-and-running))

;;************************************************
;; Code
;;************************************************

;; etusivu kenttien leiska
;; hae kaikki data pos.client.model
;; kiinnitä data dropdowneihin
;; kuuntelijat droppeihin (vaihtuu, mätsää johonkin modelin kenttään)
;; google comboBox ?

;; typeahead

(jq/ready
 (do
   (def $typeahead-test ($ :#typeahead-test))
   (.typeahead $typeahead-test (clj->js
                                {:source ["foo" "bar" "fofo"]}))))





;; fetch remote examples
(defn shout [msg]
  (fm/remote (shouter msg) [res]
             (js/alert res)))
