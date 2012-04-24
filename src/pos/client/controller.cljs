(ns pos.client.controller
  (:require [fetch.remotes :as fm]
            [lib.dispatch :as dispatch]
            [pos.client.view :as view]
            [pos.client.model :as model])
  (:use [fetch.util :only [clj->js]]
        [jayq.util :only [log]]
        [pos.client.util :only [from-coll-by-id field-value-as-num
                                basket-total]])
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
            discount      (* 100 (/ (- default-price new-as-num) default-price))]
          (model/swap-in-basket! model/basket item (merge item {:price new-as-num
                                                                :discount discount}))))))

(defmethod update-basket-item :discount [{:keys [id new-val]}]
  (let [item       (from-coll-by-id @model/basket id)
        new-as-num (field-value-as-num new-val)]
    (when (and
           (not (js/isNaN new-as-num))
           (not= new-as-num (:discount item)))
      (let [default-price (:price (from-coll-by-id (:items @model/data) id))
            price         (- default-price (* (/ new-as-num 100) default-price))]
        (model/swap-in-basket! model/basket item (merge item {:discount new-as-num
                                                              :price price}))))))

(dispatch/react-to #{:basket-update}
                   (fn [_ {:keys [id changed-attr new-val] :as d}]
                     (update-basket-item d)))

;; `total`, `vat` and `discount` of the whole basket are derived quantites
;; that are not stored as state of the model, but are rather
;; recomputed every time that the contents of the basket change
(dispatch/react-to #{:basket-change}
                   (fn [& _]
                     (let [tot      (basket-total @model/basket)
                           tot-norm (apply + (map #(*
                                                    (:price (from-coll-by-id (:items @model/data) (:id %)))
                                                    (:qty %)) @model/basket))
                           vat      (* 0.22 tot)
                           discount (- tot-norm tot)]
                       (dispatch/fire :update-basket-total {:tot      tot
                                                            :vat      vat
                                                            :discount discount}))))

(defmulti action
  "Transfer betveen general states of the app.
   Accepts map of information about action to be performed."
  :type)

(defmethod action :proceed-tender [_]
  (when (and
         (not= (:state @model/state) :tender)
         (not (empty? @model/basket)))
    (do
      (reset! model/tender {:cash   nil
                            :card   nil
                            :gift   nil})
      (swap! model/state assoc :state :tender))))

(defmethod action :cancel-tender [_]
  (do
    (reset! model/tender {})
    (swap! model/state assoc :state :dashboard)))

(dispatch/react-to #{:proceed-tender :cancel-tender}
                   (fn [t d]
                     (action {:type t
                              :data d})))

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