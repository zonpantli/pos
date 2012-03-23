(ns pos.views.main
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html]]))

;;*********************************************************
;; Partials
;;*********************************************************

(defpartial header []
  [:div#header
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
    [:div.span4.offset1
     [:input#customer-dropdown {:placeholder "Customer name"}]
     [:a {:id          "customer-dropdown-button"
          :class       "btn dropdown-toggle"
          :data-toggle "dropdown"
          :href        "#"}
      [:span.caret]]
     [:ul.dropdown-menu
      [:li "foo"]
      [:li "bar"]]]]
   [:div.row
    [:div.span4.offset1
      [:input#item-dropdown {:placeholder "Product name"}]
      [:a {:id          "item-dropdown-button"
           :class       "btn dropdown-toggle"
           :data-toggle "dropdown"
           :href        "#"}
       [:span.caret]]
      [:ul.dropdown-menu
       [:li "foo"]
       [:li "bar"]]]]])


(defpage "/" []
         (common/layout
          [:div#content
           (header)
           (selects)
           ]))
