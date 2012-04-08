(ns pos.client.util
  (:use [jayq.util :only [log]]))

;;== data handling  ========================================
(defn from-arr-by-id [arr id]
  (first (filter #(= (:id %1) id) arr)))

(defmulti default-variant coll?)

(defmethod default-variant true [xs] (first xs))

(defmethod default-variant false [x] x)

(defn default-variant-of-item
  "Return item map where coll values are replaced by the first item in
  collection. E.g. return item where {:size [M L XL]} would be {:size
  M}"
  [item]
  (zipmap (keys item) (map default-variant (vals item))))

;;== dom manipulation =====================================
(defn value
  "Get/set value of input element"
  ([el]
     (.attr el "value"))
  ([el val]
     (.attr el "value" val)))

(defn background-image [el url]
  (css el {:background-image (str "url(" url ")")}))

;;== timer ================================================
(defn get-formatted-datetime []
  (let [d (goog.date.DateTime.)
        dtf (goog.i18n.DateTimeFormat. "EEE, MMM d  h:mm a")]
    (.format dtf d)))

(defn start-timer [cb]
  (let [t (goog.Timer. 1000)]
    (.start t)
    (.listen goog.events t goog.Timer.TICK cb)))
