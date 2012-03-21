(ns pos.views.foo
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html escape-html h]]
        [hiccup.page-helpers]
        [hiccup.form-helpers]
        [noir.fetch.remotes]))


(defpage [:get "/foo/:id"] {:keys [id s]}
  (str "You fooed " id " and strred " s))

;; partials
(defpartial page []
  (html [:p "hola"])
  (link-to {:class "btn"} "http://google.com" "Google"))

(defpartial formel []
  (form-to [:post "/login"]
           (text-field "Username")
           (password-field "Password")
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

;;;;; remote endpoints

(defremote adder [& nums]
           (apply + nums))

(defremote get-user [id]
           {:username "Miika"
            :age 29})

