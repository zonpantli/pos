(ns pos.client.view
  (:require [lib.dispatch :as dispatch]
            [pos.client.model :as model]
            [pos.client.animation :as animation])
  (:use [jayq.core :only [$ css append]]
        [fetch.util :only [clj->js]]
        [pos.client.util :only [log]])
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
                                         {:source (get-dropdown-data :customers data)}))
    (.typeahead ($ :#item-dropdown) (clj->js
                                     {:source (get-dropdown-data :items data)}))))

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


;;== bind events ============================================

;; customer dropdown

(defmulti render-customer :event)

;; TODO - select customer based on id, not first
(defmethod render-customer :customer-change [{:keys [id]}]
  (let [customer (-> (:customers @model/data) first)
        el       ($ :#customer-dropdown)]
    (value el (:name customer))
    (background-image el (:image customer))))

(dispatch/react-to #{:customer-change}
                   (fn [t d]
                     (render-customer {:event t
                                       :id (:id d)})))


;;== init ui ================================================
(defn prepare-ui []
  (do
    (draw-pie)))

