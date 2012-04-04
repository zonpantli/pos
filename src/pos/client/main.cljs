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

(comment
 (defpartial up-and-running []
   [:p.alert "CLJS is compiled and active... Time to build something!"])

 (append $content (up-and-running)))

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

(defn pie-data []
  (clj->js
   [{:label "" :data 33 :color "#5bb75b"}
    {:label "" :data 67 :color "#52c5c8"}]))

;; == Pusher websockets ========================================
(defn set-customer [id]
 (js/alert (str "Customer set - id: " (.-data id))))

(defn bind-pusher-listener []
  (do
    (let [pusher (js/Pusher. "a32696b95bcc47185377")
          channel (.subscribe pusher "kovalo-pos")]
      (.bind channel "customer-nfc" set-customer))))


;;== reactors ==================================================
(dispatch/react-to #{:init-data-done}
                   (fn [t d]
                     (do
                       (prepare-typeaheads @*data*))))


;;== ui =======================================================
(defn draw-pie []
  (.plot js/$ ($ :#pie)
         (pie-data)
         (clj->js {:series {:pie {:show true
                                  :stroke {:color "#2b2b2b"
                                           :width 0}}}})))

(defn prepare-ui []
  (do
    (draw-pie)))


;;== init app ==================================================
(jq/ready
 (do
   (fetch-client-data)
   (bind-pusher-listener)
   (prepare-ui)))
