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
{var vec__9526__9527 = route;
var m__9528 = cljs.core.nth.call(null,vec__9526__9527,0,null);
var u__9529 = cljs.core.nth.call(null,vec__9526__9527,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__9528),u__9529]);
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
var cur__9530 = fetch.util.clj__GT_js.call(null,d);
var query__9531 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__9530)));

return cljs.core.str.call(null,query__9531);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__9532 = req.getResponseText();

return callback.call(null,data__9532);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__9533){
var vec__9534__9535 = p__9533;
var opts__9536 = cljs.core.nth.call(null,vec__9534__9535,0,null);

var req__9538 = (new goog.net.XhrIo());
var vec__9537__9539 = fetch.core.parse_route.call(null,route);
var method__9540 = cljs.core.nth.call(null,vec__9537__9539,0,null);
var uri__9541 = cljs.core.nth.call(null,vec__9537__9539,1,null);
var data__9542 = fetch.core.__GT_data.call(null,content);
var callback__9543 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__9543))
{goog.events.listen.call(null,req__9538,goog.net.EventType.COMPLETE,(function (){
return callback__9543.call(null,req__9538);
}));
} else
{}
return req__9538.send(uri__9541,method__9540,data__9542,(cljs.core.truth_(opts__9536)?fetch.util.clj__GT_js.call(null,opts__9536):null));
};
var xhr = function (route,content,callback,var_args){
var p__9533 = null;
if (goog.isDef(var_args)) {
  p__9533 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__9533);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__9544){
var route = cljs.core.first(arglist__9544);
var content = cljs.core.first(cljs.core.next(arglist__9544));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9544)));
var p__9533 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9544)));
return xhr__delegate.call(this, route, content, callback, p__9533);
});
return xhr;
})()
;
