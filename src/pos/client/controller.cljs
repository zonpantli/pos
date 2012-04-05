(ns pos.client.controller
  (:require [fetch.remotes :as fm]
            [lib.dispatch :as dispatch]
            [pos.client.model :as model]
            [pos.client.view :as view])
  (:use [fetch.util :only [clj->js]]
        [pos.client.util :only [log]])
  (:require-macros [fetch.macros :as fm]))


(defn fetch-client-data
  "Fetch inventory and user data"
  []
  (fm/letrem [res (get-db)]
             (do
               (swap! model/data merge res)
               (dispatch/fire :init-data-done))))

;; == Pusher websockets ========================================
(defn bind-pusher-listener []
  (do
    (let [pusher (js/Pusher. "a32696b95bcc47185377")
          channel (.subscribe pusher "kovalo-pos")]
      (.bind channel "customer-nfc" #(dispatch/fire :pusher-customer-nfc %1)))))


;;== init app =================================================
(defn init []
  (do
    (fetch-client-data)
    (bind-pusher-listener)
    (view/prepare-ui)))
