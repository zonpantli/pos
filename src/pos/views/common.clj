(ns pos.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "KovaLOPOS"]
;               (include-css "/css/reset.css")
;               (include-css "/css/default.css")
               (include-css "css/bootstrap.css")
               ]
              [:body
               [:div#wrapper
                content]
               (cljs/include-scripts :with-jquery)]))
