(ns ^{:doc "Contains client side state. Use atom for every element
    with state and add watchers to dispatch event when state changes.
    Validators would go here too, i we ever decide to write them"}
    pos.client.model
      (:require [lib.dispatch :as dispatch])
      (:use [jayq.util :only [log]]))


(def ^{:doc "Atom containing data fetched from back-end. Customers,
items, eployees and locations"}
  data (atom {}))


(def ^{:doc "Atom containing selected customer and related reactors
controlling the customer typeahead"}
  customer (atom {:id nil}))

(add-watch customer :customer-change-key
           (fn [k r o n]
             (when (or (nil? (:id n)) (not= o n))
               (dispatch/fire :customer-change n))))

;; select random customer when using nfc
(dispatch/react-to #{:pusher-customer-nfc}
                   (fn [_ d]
                     (swap! customer assoc :id (:id (rand-nth (:customers @data))))))

(dispatch/react-to #{:customer-field-changed}
                   (fn [_ d]
                     (when (:id @customer)
                       (dispatch/fire :customer-clear))))

(dispatch/react-to #{:customer-select}
                   (fn [_ d]
                     (swap! customer assoc :id d)))

(dispatch/react-to #{:customer-clear}
                   (fn [& _]
                     (swap! customer assoc :id nil)))

(def ^{:doc "Atom containing selected location"}
  location (atom {:id nil}))

(add-watch location :location-change-key
           (fn [k r o n]
              (when (not= o n)
                (dispatch/fire :location-change n))))

(dispatch/react-to #{:location-select}
                   (fn [_ d]
                     (swap! location assoc :id d)))