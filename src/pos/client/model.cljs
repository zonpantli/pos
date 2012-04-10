(ns ^{:doc "Contains client side state. Use atom for every element
    with state and add watchers to dispatch event when state changes.
    Validators would go here too, i we ever decide to write them"}
    pos.client.model
    (:require [lib.dispatch :as dispatch]
              [clojure.set :as set])
    (:use [jayq.util :only [log]]
          [pos.client.util :only [from-coll-by-id
                                  default-variant-of-item
                                  field-value-as-num]]))

(def ^{:doc "Atom containing the state of application. Dashboad,
hotkeys, tender"}
  state (atom {:state :dashboard}))

(add-watch state :state-change-key
           (fn [k r o n]
             (dispatch/fire :state-change [(:state o) (:state n)])))

(def ^{:doc "Atom containing data fetched from back-end. Customers,
items, eployees and locations"}
  data (atom {}))


(def ^{:doc "Atom containing selected location"}
  location (atom {:id nil}))

(add-watch location :location-change-key
           (fn [k r o n]
              (when (not= o n)
                (dispatch/fire :location-change n))))

(dispatch/react-to #{:location-select}
                   (fn [_ d]
                     (swap! location assoc :id d)))

(def ^{:doc "Atom containing selected employee"}
  employee (atom {:id nil}))

(add-watch employee :employee-change-key
           (fn [k r o n]
              (when (not= o n)
                (dispatch/fire :employee-change n))))

(dispatch/react-to #{:employee-select}
                   (fn [_ d]
                     (swap! employee assoc :id d)))

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

(def ^{:doc "Atom containing state of the shopping basket"}
  basket (atom #{}))

(add-watch basket :basket-change-key
           (fn [k r o n]
             (cond
              (> (count n) (count o))
              (dispatch/fire :basket-change {:type :add-item
                                             :item (first (set/difference n o))})
              (< (count n) (count o))
              (dispatch/fire :basket-change {:type :remove-item
                                             :id (:id (first (set/difference o n)))})
              :else
              (dispatch/fire :basket-change {:type :update-item
                                             :item (first (set/difference n o))}))))

(defn swap-in-basket!
  "Replace old item in basket by new"
  [basket o n]
  (swap! basket #(set (replace {o %2} %1)) n))

(dispatch/react-to #{:basket-add}
                   (fn [_ d]
                     (if-let [item (from-coll-by-id @basket d)]
                       (let [qty      (:qty item)                        ; item in basket, inc qty
                             new-item (update-in item [:qty] inc)]                            
                         (swap-in-basket! basket item new-item))
                       (let [item (default-variant-of-item               ; new item
                                    (from-coll-by-id (:items @data) d))]
                         (swap! basket conj (merge item {:qty 1 :discount 0}))))))

(dispatch/react-to #{:basket-remove}
                   (fn [_ d]
                     (let [item (from-coll-by-id @basket d)]
                       (swap! basket disj item))))

(def ^{:doc "Atom holding the state of current tender transaction"}
  tender (atom {}))

(add-watch tender :tender-change-key
           (fn [k r o n]
             (dispatch/fire :tender-change n)))

(dispatch/react-to #{:tender-update}
                   (fn [_ {:keys [changed-attr new-val]}]
                     (swap! tender assoc changed-attr (field-value-as-num new-val))))