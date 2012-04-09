(ns pos.client.controller
  (:require [fetch.remotes :as fm]
            [lib.dispatch :as dispatch]
            [pos.client.view :as view]
            [pos.client.model :as model])
  (:use [fetch.util :only [clj->js]]
        [jayq.util :only [log]]
        [pos.client.util :only [from-coll-by-id field-value-as-num]])
  (:require-macros [fetch.macros :as fm]))

(defmulti ^{:doc "Called when user edits item in the basket, this
  function updates the basket according the field that was changed"}
  update-basket-item :changed-attr)

(defmethod update-basket-item :qty [{:keys [id new-val]}]
  (let [item       (from-coll-by-id @model/basket id)
        new-as-num (field-value-as-num new-val)]
    (when (and
           (not (js/isNaN new-as-num))
           (not= new-as-num (:qty item)))
      (model/swap-in-basket! model/basket item (merge item {:qty new-as-num})))))

(defmethod update-basket-item :price [{:keys [id new-val]}]
  (let [item       (from-coll-by-id @model/basket id)
        new-as-num (field-value-as-num new-val)]
    (when (and
           (not (js/isNaN new-as-num))
           (not= new-as-num (:price item)))
      (let [default-price (:price (from-coll-by-id (:items @model/data) id))
            discount      (/ (- default-price new-as-num) default-price)]
          (model/swap-in-basket! model/basket item (merge item {:price new-as-num
                                                                :discount discount}))))))

(defmethod update-basket-item :discount [{:keys [id new-val]}]
  )

(dispatch/react-to #{:basket-update}
                   (fn [_ {:keys [id changed-attr new-val] :as d}]
                     (update-basket-item d)))



(defn fetch-client-data
  "Fetch inventory and user data"
  []
  (fm/letrem [res (get-db)]
             (do
               (swap! model/data merge res)
               (dispatch/fire :init-data-done))))

(defn bind-pusher-listener
  "Bind pusher websocket listener for NFC events"
  []
  (do
    (let [pusher (js/Pusher. "a32696b95bcc47185377")
          channel (.subscribe pusher "kovalo-pos")]
      (.bind channel "customer-nfc" #(dispatch/fire :pusher-customer-nfc %1)))))

(defn init
  "Main entry point for the app"
  []
  (do
    (fetch-client-data)
    (bind-pusher-listener)
    (view/prepare-ui)))