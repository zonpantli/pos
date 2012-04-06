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
{var vec__9177__9178 = route;
var m__9179 = cljs.core.nth.call(null,vec__9177__9178,0,null);
var u__9180 = cljs.core.nth.call(null,vec__9177__9178,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__9179),u__9180]);
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
var cur__9181 = fetch.util.clj__GT_js.call(null,d);
var query__9182 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__9181)));

return cljs.core.str.call(null,query__9182);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__9183 = req.getResponseText();

return callback.call(null,data__9183);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__9184){
var vec__9185__9186 = p__9184;
var opts__9187 = cljs.core.nth.call(null,vec__9185__9186,0,null);

var req__9189 = (new goog.net.XhrIo());
var vec__9188__9190 = fetch.core.parse_route.call(null,route);
var method__9191 = cljs.core.nth.call(null,vec__9188__9190,0,null);
var uri__9192 = cljs.core.nth.call(null,vec__9188__9190,1,null);
var data__9193 = fetch.core.__GT_data.call(null,content);
var callback__9194 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__9194))
{goog.events.listen.call(null,req__9189,goog.net.EventType.COMPLETE,(function (){
return callback__9194.call(null,req__9189);
}));
} else
{}
return req__9189.send(uri__9192,method__9191,data__9193,(cljs.core.truth_(opts__9187)?fetch.util.clj__GT_js.call(null,opts__9187):null));
};
var xhr = function (route,content,callback,var_args){
var p__9184 = null;
if (goog.isDef(var_args)) {
  p__9184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__9184);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__9195){
var route = cljs.core.first(arglist__9195);
var content = cljs.core.first(cljs.core.next(arglist__9195));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9195)));
var p__9184 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9195)));
return xhr__delegate.call(this, route, content, callback, p__9184);
});
return xhr;
})()
;
