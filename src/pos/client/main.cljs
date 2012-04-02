(ns pos.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate]
            [fetch.remotes :as fm]
            [lib.dispatch :as dispatch])
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

;; datan haun jälkeen eventeillä vasta kiinnitä.
;; kiinnitä data dropdowneihin
;; kuuntelijat droppeihin (vaihtuu, mätsää johonkin modelin kenttään)


;; data model
(defn init-client-data
  "Fetch inventory and user data"
  []
  (fm/remote (get-db) [res]
             res))

;; typeahead
(defn get-dropdown-data [data-key data]
  (map #(merge % {:value (:name %)}) (data-key data)))



;; prepare dropdowns 
(.typeahead ($ :#customer-dropdown) (clj->js
                                     {:source (get-dropdown-data :customers)}))



(jq/ready

 (js/alert (-> data :items first :name))







;; fetch remote examples
(defn shout [msg]
  (fm/remote (shouter msg) [res]
             (js/alert res))))
