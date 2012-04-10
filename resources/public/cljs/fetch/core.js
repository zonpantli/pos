goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__9966__9967 = route;
var m__9968 = cljs.core.nth.call(null,vec__9966__9967,0,null);
var u__9969 = cljs.core.nth.call(null,vec__9966__9967,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__9968),u__9969]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__9970 = fetch.util.clj__GT_js.call(null,d);
var query__9971 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__9970)));

return cljs.core.str.call(null,query__9971);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__9972 = req.getResponseText();

return callback.call(null,data__9972);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__9973){
var vec__9974__9975 = p__9973;
var opts__9976 = cljs.core.nth.call(null,vec__9974__9975,0,null);

var req__9978 = (new goog.net.XhrIo());
var vec__9977__9979 = fetch.core.parse_route.call(null,route);
var method__9980 = cljs.core.nth.call(null,vec__9977__9979,0,null);
var uri__9981 = cljs.core.nth.call(null,vec__9977__9979,1,null);
var data__9982 = fetch.core.__GT_data.call(null,content);
var callback__9983 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__9983))
{goog.events.listen.call(null,req__9978,goog.net.EventType.COMPLETE,(function (){
return callback__9983.call(null,req__9978);
}));
} else
{}
return req__9978.send(uri__9981,method__9980,data__9982,(cljs.core.truth_(opts__9976)?fetch.util.clj__GT_js.call(null,opts__9976):null));
};
var xhr = function (route,content,callback,var_args){
var p__9973 = null;
if (goog.isDef(var_args)) {
  p__9973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__9973);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__9984){
var route = cljs.core.first(arglist__9984);
var content = cljs.core.first(cljs.core.next(arglist__9984));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9984)));
var p__9973 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9984)));
return xhr__delegate.call(this, route, content, callback, p__9973);
});
return xhr;
})()
;
