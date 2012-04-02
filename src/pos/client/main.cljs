(ns pos.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate]
            [fetch.remotes :as fm]
            [lib.dispatch :as dispatch])
  (:use [jayq.core :only [$ append]]
        [fetch.util :only [clj->js]]
        [pos.client.util :only [log]])
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

;; kuuntelijat droppeihin (vaihtuu, mätsää johonkin modelin kenttään)


;;== fetch and bind data  =====================================
(def *data* (atom {:foo "bar"}))

(defn fetch-client-data
  "Fetch inventory and user data"
  []
  (fm/letrem [res (get-db)]
             (do
               (swap! *data* merge res)
               (dispatch/fire :init-data-done))))

(defn get-dropdown-data [data-key data]
  (map #(merge % {:value (:name %)}) (data-key data)))

(defn prepare-typeaheads
  "Attach data to typeahead fields for customer and item selcetion"
  [data]
  (do
    (log "preparing typeaheads")
    (.typeahead ($ :#customer-dropdown) (clj->js
                                         {:source (get-dropdown-data :customers data)}))
    (.typeahead ($ :#item-dropdown) (clj->js
                                        {:source (get-dropdown-data :items data)}))))



;;== init app =========================================
(jq/ready
 (fetch-client-data))

(dispatch/react-to #{:init-data-done}
                   (fn [t d]
                     (do
                       (prepare-typeaheads @*data*))))