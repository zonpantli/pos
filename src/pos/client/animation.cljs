(ns pos.client.animation
  (:require [lib.dispatch :as dispatch])
  (:use [jayq.core :only [$ anim attr css]]
        [pos.client.util :only [log]]))

;;== swap customer and item icons ==
(defn slide-in-icon [type url]
  (let [ in-el  ($ (keyword (str "#" type "-slider-icon")))]
    (do
      (attr in-el "src" url)
      (anim in-el {"height" "32px"}))))

(defn slide-in-customer-icon [url]
  (slide-in-icon "customer" url))

(defn slide-in-item-icon [url]
  (slide-in-icon "item" url))

(defn reset-icon [type]
  (let [out-el  ($ (keyword (str "#" type "-slider-icon")))]
    (css out-el {"height" "0px"})))

(defn reset-customer-icon [] (reset-icon "customer"))

(defn reset-item-icon [] (reset-icon "item"))