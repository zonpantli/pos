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
{var vec__9209__9210 = route;
var m__9211 = cljs.core.nth.call(null,vec__9209__9210,0,null);
var u__9212 = cljs.core.nth.call(null,vec__9209__9210,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__9211),u__9212]);
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
var cur__9213 = fetch.util.clj__GT_js.call(null,d);
var query__9214 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__9213)));

return cljs.core.str.call(null,query__9214);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__9215 = req.getResponseText();

return callback.call(null,data__9215);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__9216){
var vec__9217__9218 = p__9216;
var opts__9219 = cljs.core.nth.call(null,vec__9217__9218,0,null);

var req__9221 = (new goog.net.XhrIo());
var vec__9220__9222 = fetch.core.parse_route.call(null,route);
var method__9223 = cljs.core.nth.call(null,vec__9220__9222,0,null);
var uri__9224 = cljs.core.nth.call(null,vec__9220__9222,1,null);
var data__9225 = fetch.core.__GT_data.call(null,content);
var callback__9226 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__9226))
{goog.events.listen.call(null,req__9221,goog.net.EventType.COMPLETE,(function (){
return callback__9226.call(null,req__9221);
}));
} else
{}
return req__9221.send(uri__9224,method__9223,data__9225,(cljs.core.truth_(opts__9219)?fetch.util.clj__GT_js.call(null,opts__9219):null));
};
var xhr = function (route,content,callback,var_args){
var p__9216 = null;
if (goog.isDef(var_args)) {
  p__9216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__9216);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__9227){
var route = cljs.core.first(arglist__9227);
var content = cljs.core.first(cljs.core.next(arglist__9227));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9227)));
var p__9216 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9227)));
return xhr__delegate.call(this, route, content, callback, p__9216);
});
return xhr;
})()
;
