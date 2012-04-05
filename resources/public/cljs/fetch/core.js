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
{var vec__8916__8917 = route;
var m__8918 = cljs.core.nth.call(null,vec__8916__8917,0,null);
var u__8919 = cljs.core.nth.call(null,vec__8916__8917,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__8918),u__8919]);
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
var cur__8920 = fetch.util.clj__GT_js.call(null,d);
var query__8921 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__8920)));

return cljs.core.str.call(null,query__8921);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__8922 = req.getResponseText();

return callback.call(null,data__8922);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__8923){
var vec__8924__8925 = p__8923;
var opts__8926 = cljs.core.nth.call(null,vec__8924__8925,0,null);

var req__8928 = (new goog.net.XhrIo());
var vec__8927__8929 = fetch.core.parse_route.call(null,route);
var method__8930 = cljs.core.nth.call(null,vec__8927__8929,0,null);
var uri__8931 = cljs.core.nth.call(null,vec__8927__8929,1,null);
var data__8932 = fetch.core.__GT_data.call(null,content);
var callback__8933 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__8933))
{goog.events.listen.call(null,req__8928,goog.net.EventType.COMPLETE,(function (){
return callback__8933.call(null,req__8928);
}));
} else
{}
return req__8928.send(uri__8931,method__8930,data__8932,(cljs.core.truth_(opts__8926)?fetch.util.clj__GT_js.call(null,opts__8926):null));
};
var xhr = function (route,content,callback,var_args){
var p__8923 = null;
if (goog.isDef(var_args)) {
  p__8923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__8923);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__8934){
var route = cljs.core.first(arglist__8934);
var content = cljs.core.first(cljs.core.next(arglist__8934));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8934)));
var p__8923 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8934)));
return xhr__delegate.call(this, route, content, callback, p__8923);
});
return xhr;
})()
;
