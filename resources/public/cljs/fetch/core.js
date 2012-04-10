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
{var vec__13301__13302 = route;
var m__13303 = cljs.core.nth.call(null,vec__13301__13302,0,null);
var u__13304 = cljs.core.nth.call(null,vec__13301__13302,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13303),u__13304]);
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
var cur__13305 = fetch.util.clj__GT_js.call(null,d);
var query__13306 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__13305)));

return cljs.core.str.call(null,query__13306);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13307 = req.getResponseText();

return callback.call(null,data__13307);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13308){
var vec__13309__13310 = p__13308;
var opts__13311 = cljs.core.nth.call(null,vec__13309__13310,0,null);

var req__13313 = (new goog.net.XhrIo());
var vec__13312__13314 = fetch.core.parse_route.call(null,route);
var method__13315 = cljs.core.nth.call(null,vec__13312__13314,0,null);
var uri__13316 = cljs.core.nth.call(null,vec__13312__13314,1,null);
var data__13317 = fetch.core.__GT_data.call(null,content);
var callback__13318 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__13318))
{goog.events.listen.call(null,req__13313,goog.net.EventType.COMPLETE,(function (){
return callback__13318.call(null,req__13313);
}));
} else
{}
return req__13313.send(uri__13316,method__13315,data__13317,(cljs.core.truth_(opts__13311)?fetch.util.clj__GT_js.call(null,opts__13311):null));
};
var xhr = function (route,content,callback,var_args){
var p__13308 = null;
if (goog.isDef(var_args)) {
  p__13308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13308);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13319){
var route = cljs.core.first(arglist__13319);
var content = cljs.core.first(cljs.core.next(arglist__13319));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13319)));
var p__13308 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13319)));
return xhr__delegate.call(this, route, content, callback, p__13308);
});
return xhr;
})()
;
