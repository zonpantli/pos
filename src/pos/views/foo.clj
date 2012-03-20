(ns pos.views.foo
  (:require [pos.views.common :as common])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.core :only [html]]))


(defpage [:get "/foo/:id"] {:keys [id s]}
  (str "You fooed " id " and strred " s))

