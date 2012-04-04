(ns pos.api
  (:use [noir.fetch.remotes]
        [noir.core :only [defpage]]
;        [pusher]
        )
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
(defremote get-db []
  @*database*)


;; endpoints for Kovalo Merch NFC reader
(defpage "/nfc/customer/:id" {:keys [id]}
  (do
    (println (str "Customer Id: " id))
    (comment (with-pusher-auth ["17901" "a32696b95bcc47185377" "919327202b26cfbf512a"]
       (with-pusher-channel "pos_client"
         (trigger "customer_received" {:data id}))))
    (cmd "curl -H 'Content-Type: application/json' -d '12345' 'http://api.pusherapp.com/apps/17901/channels/test_channel/events?''name=my_event&''body_md5=827ccb0eea8a706c4c34a16891f84e7b&''auth_version=1.0&''auth_key=a32696b95bcc47185377&''auth_timestamp=1333522712&''auth_signature=706966bde73053aa7ceaf9b997e8d03a42845691e7844f0972a4f64e44fadabd&'")
    (response/json {:success true})))

