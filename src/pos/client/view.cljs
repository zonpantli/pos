(ns pos.client.view
  (:require [lib.dispatch :as dispatch]
            [pos.client.model :as model]
            [pos.client.animation :as animation])
  (:use [jayq.core :only [$ css append bind]]
        [jayq.util :only [log]]
        [fetch.util :only [clj->js]]
        [pos.client.util :only [from-arr-by-id]])
  (:require-macros [jayq.macros :as jq]))

(defn value
  "Get/set value of input element"
  ([el]
     (.attr el "value"))
  ([el val]
     (.attr el "value" val)))

(defn background-image [el url]
  (css el {:background-image (str "url(" url ")")}))


;;== populate typeaheads and dropdowns ======================
(defn get-dropdown-data [data-key data]
  (map #(merge % {:value (:name %)}) (data-key data)))

(defn prepare-typeaheads
  "Attach data to typeahead fields for customer and item selcetion"
  [data]
  (do
    (.typeahead ($ :#customer-dropdown) (clj->js
                                         {:source (get-dropdown-data :customers data)
                                          :onselect #(dispatch/fire :customer-select (.-id %1))}))
    (.typeahead ($ :#item-dropdown) (clj->js
                                     {:source (get-dropdown-data :items data)}))))

(defn attach-typeahead-event-listeners []
  (let [el ($ :#customer-dropdown)]
    (bind el
         "keyup"
         #(dispatch/fire :customer-field-changed (value el)))))

(defn attach-typeahead-clear-event-listeners []
  (bind ($ :#customer-clear)
        "click"
        #(dispatch/fire :customer-clear))
  (bind ($ :#item-clear)
        "click"
        #(dispatch/fire :item-clear)))


(defn prepare-dropdowns []
  (do
    (.dropdown ($ :#location-dropdown-list))
    (.dropdown ($ :#employee-dropdown-list))))

(dispatch/react-to #{:init-data-done}
                   (fn [t d]
                     (do
                       (prepare-typeaheads @model/data)
                       (prepare-dropdowns))))


;;== populate info box ======================================
(defn pie-data []
  (clj->js
   [{:label "" :data 33 :color "#5bb75b"}
    {:label "" :data 67 :color "#52c5c8"}]))

(defn draw-pie []
  (.plot js/$ ($ :#pie)
         (pie-data)
         (clj->js {:series {:pie {:show true
                                  :stroke {:color "#2b2b2b"
                                           :width 0}}}})))


;;== customer dropdown =====================================


(defmulti render-customer :event)

(defmethod render-customer :customer-selected [{:keys [id]}]
  (let [ customer  (from-arr-by-id (:customers @model/data) id)
        el        ($ :#customer-dropdown)]
    (do
      (value el (:name customer))
      (animation/flash-input-border el)
      (animation/slide-in-customer-icon (:image customer)))))

(defmethod render-customer :customer-deselected [_]
  (let [el ($ :#customer-dropdown)]
    (value el nil)
    (animation/reset-customer-icon)))

(dispatch/react-to #{:customer-change}
                   (fn [_ d]
                     (if-let [id (:id d)]
                       (render-customer {:event :customer-selected :id (:id d)})
                       (render-customer {:event :customer-deselected}))))


;;== init ui ================================================
(defn prepare-ui []
  (do
    (draw-pie)
    (attach-typeahead-event-listeners)
    (attach-typeahead-clear-event-listeners)))

