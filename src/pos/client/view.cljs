(ns pos.client.view
  (:require [lib.dispatch :as dispatch]
            [crate.core :as crate]
            [goog.date.DateTime :as date-time]
            [goog.i18n.DateTimeFormat :as date-time-format]
            [goog.Timer :as timer]
            [goog.events :as events]
            [pos.client.model :as model]
            [pos.client.animation :as animation])
  (:use [jayq.core :only [$ css append bind inner find remove]]
        [jayq.util :only [log wait]]
        [fetch.util :only [clj->js]]
        [pos.client.util :only [from-coll-by-id value start-timer get-formatted-datetime]])
  (:require-macros [jayq.macros :as jq])
  (:use-macros [crate.macros :only [defpartial]]))

;;== location and employee selects =========================
(defn render-location [{id :id}]
  (if-let [location (from-coll-by-id (:locations @model/data) id)]
    (inner ($ :#location-name) (:name location))
    (inner ($ :#location-name) "Location")))

(dispatch/react-to #{:location-change}
                   (fn [_ d]
                     (render-location d)))

(defn render-employee [{id :id}]
  (if-let [employee (from-coll-by-id (:employees @model/data) id)]
    (inner ($ :#employee-name) (:name employee))
    (inner ($ :#employee-name) "Employee")))

(dispatch/react-to #{:employee-change}
                   (fn [_ d]
                     (render-employee d)))

;;== DateTime ===============================================
(defn render-time []
  (let [t (get-formatted-datetime)
        el ($ :#clock)]
    (inner el t)))


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

;;== populate typeaheads and dropdowns ======================
(defn get-dropdown-data [data-key data]
  (map #(merge % {:value (:name %)}) (data-key data)))

(defn prepare-typeaheads
  "Attach data to typeahead fields for customer and item selcetion"
  [data]
  (do
    (.typeahead ($ :#customer-dropdown) (clj->js
                                         {:source (get-dropdown-data :customers data)
                                          :onselect #(dispatch/fire :customer-select (.-id %))
                                          :trigger ($ :#customer-dropdown-toggle)}))
    (.typeahead ($ :#item-dropdown) (clj->js
                                     {:source (get-dropdown-data :items data)
                                      :onselect #(dispatch/fire :item-select (.-id %))
                                      :trigger ($ :#item-dropdown-toggle)}))))

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

(defpartial dropdown-row [{:keys [id name]}]
  [:li
   [:a {:href "#" :value id} name]])

(defn populate-dropdowns [data]
  (doseq [loc (:locations data)]
    (let [el (dropdown-row loc)]
      (do
        (append ($ :#location-dropdown-list) el)
        (bind ($ el) "click" #(dispatch/fire :location-select (:id loc))))))
  (doseq [empl (:employees data)]
    (let [el (dropdown-row empl)]
      (do
        (append ($ :#employee-dropdown-list) el)
        (bind ($ el) "click" #(dispatch/fire :employee-select (:id empl)))))))

(defn prepare-dropdowns []
  (do
    (.dropdown ($ :#location-dropdown-list))
    (.dropdown ($ :#employee-dropdown-list))))

(dispatch/react-to #{:init-data-done}
                   (fn [t d]
                     (do
                       (prepare-typeaheads @model/data)
                       (populate-dropdowns @model/data)
                       (prepare-dropdowns))))


;;== customer dropdown =====================================
(defmulti render-customer :event)

(defmethod render-customer :customer-selected [{:keys [id]}]
  (let [customer  (from-coll-by-id (:customers @model/data) id)
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


;;== item dropdown ======================================
(declare basket-add-item)

(defmulti render-item :event)

(defmethod render-item :item-select [{:keys [id]}]
  (let [item  (from-coll-by-id (:items @model/data) id)
        el        ($ :#item-dropdown)]
    (do
      (value el (:name item))
      (animation/flash-input-border el)
      (wait 500 #(dispatch/fire :item-clear)))))

(defmethod render-item :item-clear [_]
  (let [el ($ :#item-dropdown)]
    (value el nil)))

(dispatch/react-to #{:item-select :item-clear}
                   (fn [t d]
                     (do
                       (when d
                         (basket-add-item d))
                       (render-item {:event t :id d}))))

(defn basket-add-item [id]
  (dispatch/fire :basket-add id))

;;== basket ================================================
(defpartial basket-item [{:keys [id name color size price]}]
  [:tr {:id id}
   [:td.bold [:div name]]
   [:td [:div id]]
   [:td [:div size]]
   [:td [:div color]]
   [:td.qty [:div [:input.num {:value 1}]]]
   [:td.price [:div [:input.price {:value price}]]]
   [:td.discount [:div [:input.num {:value 0}] "%"]]
   [:td.bold.total [:div (str price)]]
   [:td.close-container [:div [:a.close "x"]]]])

(defmulti render-basket :type)

(defmethod render-basket :add [{:keys [item]}]
  (let [el ($ (basket-item item))]
    (do
      (append ($ :#receipt-table) el)
      (animation/slide-in-table-row el)
      (bind (find el ".close-container > div > a")
            "click"
            #(dispatch/fire :basket-remove (:id item))))))

(defmethod render-basket :remove [{:keys [id]}]
  (let [el ($ (str "tr#" id))]
    (animation/slide-out-table-row el)))

(dispatch/react-to #{:basket-change}
                   (fn [_ d]
                     (render-basket d)))


;;== init ui ================================================
(defn prepare-ui []
  (do
    (start-timer render-time)
    (draw-pie)
    (attach-typeahead-event-listeners)
    (attach-typeahead-clear-event-listeners)))

