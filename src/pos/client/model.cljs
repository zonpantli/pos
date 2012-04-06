(ns ^{:doc "Contains client side state. Use atom for every element
    with state and add watchers to dispatch event when state changes.
    Validators would go here too, i we ever decide to write them"}
    pos.client.model
      (:require [lib.dispatch :as dispatch])
      (:use [pos.client.util :only [log]]))


(def ^{:doc "Atom containing data fetched from back-end. Customers,
items, eployees and locations"}
  data (atom {}))


(def customer (atom {:id nil}))

(add-watch customer :customer-change-key
           (fn [k r o n]
             (when (not= o n)
               (dispatch/fire :customer-change n))))

(dispatch/react-to #{:pusher-customer-nfc}
                   (fn [_ d]
                     (swap! customer assoc :id (.-id d))))

