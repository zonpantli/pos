(ns pos.views.main
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html]]
        [net.cgrand.enlive-html]))

;;*********************************************************
;; Partials
;;*********************************************************

(defpartial header []
  [:div#pos-header
   [:div.btn-group.offset1
    [:a {:class       "btn dropdown-toggle"
         :data-toggle "dropdown"
         :href        "#"}
     "Employee"
     [:span.caret]]
    [:ul.dropdown-menu
     [:li "foo"]
     [:li "bar"]]]])

(comment (defpartial weather []
   ))

(defpartial selects []
  [:div#selects
   [:div.row
    [:div.offset1
     [:input#customer-dropdown {:placeholder  "Customer name"
                                :type         "text"
                                :data-provide "typeahead"}]
     [:a {:id          "customer-dropdown-button"
          :class       "btn dropdown-toggle"
          :data-toggle "dropdown"
          :href        "#"}
      [:span.caret]]
     [:ul.dropdown-menu
      [:li "foo"]
      [:li "bar"]]]]
   [:div.row
    [:div.offset1
     [:input#item-dropdown {:placeholder  "Product name"
                            :type         "text"
                            :data-provide "typeahead"}]
      [:a {:id          "item-dropdown-button"
           :class       "btn dropdown-toggle"
           :data-toggle "dropdown"
           :href        "#"}
       [:span.caret]]
      [:ul.dropdown-menu
       [:li "foo"]
       [:li "bar"]]]]])


(defpage "/hiccup" []
  (common/layout
   [:div#content
    (header)
    (selects)
    ]))

