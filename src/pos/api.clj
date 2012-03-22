(ns pos.api
  (:use [noir.fetch.remotes])
  (:require [clojure.string :only [upper-case]]
            [pos.models.item :as item]
            [pos.models.customer :as customer]))

;; mock database ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce ^:dynamic *database* (atom {:items     []
                                     :customers []
                                     :employees []}))

(defn init-database []
  (do 
    (swap! *database* #(update-in %1 [:items] into %2) item/fake-data)
    (swap! *database* #(update-in %1 [:customers] into %2) customer/fake-data)))

(defn clean-database []
  (do
    (swap! *database* #(update-in %1 [:items] replace []))
    (swap! *database* #(update-in %1 [:customers] replace []))))

;; remote endpoints for accessing database
(defremote shouter [message]
           (clojure.string/upper-case message))