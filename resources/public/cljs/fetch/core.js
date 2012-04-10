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
{var vec__10009__10010 = route;
var m__10011 = cljs.core.nth.call(null,vec__10009__10010,0,null);
var u__10012 = cljs.core.nth.call(null,vec__10009__10010,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__10011),u__10012]);
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
var cur__10013 = fetch.util.clj__GT_js.call(null,d);
var query__10014 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__10013)));

return cljs.core.str.call(null,query__10014);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__10015 = req.getResponseText();

return callback.call(null,data__10015);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__10016){
var vec__10017__10018 = p__10016;
var opts__10019 = cljs.core.nth.call(null,vec__10017__10018,0,null);

var req__10021 = (new goog.net.XhrIo());
var vec__10020__10022 = fetch.core.parse_route.call(null,route);
var method__10023 = cljs.core.nth.call(null,vec__10020__10022,0,null);
var uri__10024 = cljs.core.nth.call(null,vec__10020__10022,1,null);
var data__10025 = fetch.core.__GT_data.call(null,content);
var callback__10026 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__10026))
{goog.events.listen.call(null,req__10021,goog.net.EventType.COMPLETE,(function (){
return callback__10026.call(null,req__10021);
}));
} else
{}
return req__10021.send(uri__10024,method__10023,data__10025,(cljs.core.truth_(opts__10019)?fetch.util.clj__GT_js.call(null,opts__10019):null));
};
var xhr = function (route,content,callback,var_args){
var p__10016 = null;
if (goog.isDef(var_args)) {
  p__10016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__10016);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__10027){
var route = cljs.core.first(arglist__10027);
var content = cljs.core.first(cljs.core.next(arglist__10027));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10027)));
var p__10016 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10027)));
return xhr__delegate.call(this, route, content, callback, p__10016);
});
return xhr;
})()
;
