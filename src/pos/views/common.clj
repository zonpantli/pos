(ns pos.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "KovaLOPOS"]
               (include-css "css/bootstrap.css")
               (include-css "css/main.css")
               ]
              [:body
               [:div#wrapper
                content]
               (cljs/include-scripts :with-jquery)
               (include-js  "js/bootstrap-typeahead.js")]))

;; use modified version of [bootstrap-typeahead.js](https://gist.github.com/1891669)
