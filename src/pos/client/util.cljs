(ns pos.client.util
  (:use [jayq.util :only [log]]))

(defn from-arr-by-id [arr id]
  (first (filter #(= (:id %1) id) arr)))

(defn value
  "Get/set value of input element"
  ([el]
     (.attr el "value"))
  ([el val]
     (.attr el "value" val)))

(defn background-image [el url]
  (css el {:background-image (str "url(" url ")")}))
