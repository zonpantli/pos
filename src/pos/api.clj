(ns pos.api
  (:use [noir.fetch.remotes]
        [noir.core :only [defpage]]
        [pusher])
  (:require [noir.response :as response]
            [clj-http.client :as client]
            [pos.models.item :as item]
            [pos.models.customer :as customer])
  (:import [java.io BufferedReader InputStreamReader]))

;; helpers
(defn cmd [p] (.. Runtime getRuntime (exec (str p)))) 
(defn cmdout [o] 
  (let [r (BufferedReader. 
             (InputStreamReader. 
               (.getInputStream o)))] 
    (dorun (map println (line-seq r))))) 



;; mock database ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce ^:dynamic *database* (atom {:items     []
                                     :customers []
                                     :employees []
                                     :locations []}))

(defn init-database []
  (do 
    (swap! *database* #(update-in %1 [:items] into %2) item/fake-data)
    (swap! *database* #(update-in %1 [:customers] into %2) customer/fake-data)))

(defn clean-database []
  (do
    (swap! *database* #(update-in %1 [:items] replace []))
    (swap! *database* #(update-in %1 [:customers] replace []))))

;; remote endpoints for accessing database
(defremote get-db []
  @*database*)


;; endpoints for Kovalo Merch NFC reader
(defpage "/nfc/customer/:id" {:keys [id]}
  (do
    (println (str "Customer Id: " id))
    (with-pusher-auth ["17901" "a32696b95bcc47185377" "919327202b26cfbf512a"]
      (with-pusher-channel "kovalo-pos"
        (trigger "customer-nfc" {:data id})))
    (response/json {:success true})))

