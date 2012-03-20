(ns pos.views.main
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html]]))

;;*********************************************************
;; Partials
;;*********************************************************

(defpartial header []
  [:div#header
   [:div.btn-group
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
  [:div#selects.row
   [:div.span4.offset1
    [:input#customer-dropdown]
    [:div#customer-dropdown-select.btn-group
     [:a {:class       "btn dropdown-toggle"
          :data-toggle "dropdown"
          :href        "#"}
      [:span.caret]]
     [:ul.dropdown-menu
      [:li "foo"]
      [:li "bar"]]]]
   [:div.span4.offset1
    [:input#product-dropdown]
    [:div.btn-group
     [:a {:class       "btn dropdown-toggle"
          :data-toggle "dropdown"
          :href        "#"}
      [:span.caret]]
     [:ul.dropdown-menu
      [:li "foo"]
      [:li "bar"]]]]])

(defpartial buttons []
  [:div#editor
   [:a.btn "Foo"]])


(defpage "/" []
         (common/layout
          [:div#content
           (header)
           (selects)
           ]))
