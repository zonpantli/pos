(ns pos.views.foo
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html h]]
        [hiccup.util :only [escape-html]]
        [hiccup.element :only [link-to]]
        [hiccup.page]
        [hiccup.form]
        [noir.fetch.remotes]))


(defpage [:get "/foo/:id"] {:keys [id s]}
  (str "You fooed " id " and strred " s))

;; partials
(defpartial page []
  (html [:p "hola"])
  (link-to {:class "btn"} "http://google.com" "Google"))

(defpartial formel []
  (form-to [:post "/login"]
           (text-field "username")
           (password-field "password")
           (submit-button {:class "btn"} "Login")))

(def items [{:name "Foo" :class "foo"}
            {:name "Bar" :class "bar"}])

(defpartial list-item [{:keys [name class]}]
  [:li.item
   [:h2 {:class class} name]])

(defpartial item-list [items]
  [:ul.items
   (map list-item items)])

(defpage "/hiccup" []
  (common/layout
   [:div#content
    (page)
    (formel)
    (item-list items)
    ]))

;;-- Twitter bootstrap ------------------------------------------

(defpartial autocomplete []
  [:div#content
    [:h2 "Typeahead"]
    [:p "Strato Tpying"]
    [:div
     [:input#typeahead-test {:type "text"
                             :class "span3"
                             :data-provide "typeahead"}]]])

(defpage "/bootstrap" []
  (common/layout
   (autocomplete)))


