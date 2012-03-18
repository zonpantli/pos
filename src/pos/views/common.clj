(ns pos.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "pos"]
               (include-css "/css/reset.css")
               (include-css "/css/default.css")]
              [:body
               [:div#wrapper
                content]
               (cljs/include-scripts :with-jquery)]))
