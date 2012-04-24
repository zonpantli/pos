(ns pos.client.animation
  (:require [lib.dispatch :as dispatch])
  (:use [jayq.core :only [$ anim attr css add-class remove-class find
                          slide-down slide-up remove hide show]]
        [fetch.util :only [clj->js wait]]
        [jayq.util :only [wait log]]))

;; ## customer and item typeaheads
(defn slide-in-icon [type url]
  (let [in-el  ($ (keyword (str "#" type "-slider-icon")))
        out-el ($ (keyword (str "#" type "-icon")))]
    (do
      (attr in-el "src" url)
      (.animate in-el (clj->js {"height" "32px"}) nil nil #(do
                                                 (attr out-el "src" url)
                                                 (css in-el {"height" "0"}))))))

(defn slide-in-customer-icon [url]
  (slide-in-icon "customer" url))

(defn slide-in-item-icon [url]
  (slide-in-icon "item" url))

(defn reset-icon [type]
  (let [in-el  ($ (keyword (str "#" type "-icon")))
        out-el ($ (keyword (str "#" type "-slider-icon")))]
    (attr in-el "src" (str "img/" type "_placeholder.png"))
    (css out-el {"height" "0px"})))

(defn reset-customer-icon [] (reset-icon "customer"))

(defn reset-item-icon [] (reset-icon "item"))

(defn flash-input-border [el]
  (do
    (add-class el "flashing-animation")
    (wait 1000 #(remove-class el "flashing-animation"))))


;; ## basket rows
(defn slide-in-table-row [$tr]
  (slide-down (find $tr "td > div") 400))

(defn slide-out-table-row [$tr]
  (slide-up (find $tr "td > div") 200 #(remove $tr)))

;; ## state transitions
(defn state-transition [{:keys [in out slide-in slide-out]}]
  (do
    (doseq [o slide-out] (slide-up o 200))
    (doseq [i slide-in]  (slide-down i 200))
    (doseq [o out]       (hide o))
    (doseq [i in]        (show i))))