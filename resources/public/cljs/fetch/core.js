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
{var vec__9638__9639 = route;
var m__9640 = cljs.core.nth.call(null,vec__9638__9639,0,null);
var u__9641 = cljs.core.nth.call(null,vec__9638__9639,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__9640),u__9641]);
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
var cur__9642 = fetch.util.clj__GT_js.call(null,d);
var query__9643 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__9642)));

return cljs.core.str.call(null,query__9643);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__9644 = req.getResponseText();

return callback.call(null,data__9644);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__9645){
var vec__9646__9647 = p__9645;
var opts__9648 = cljs.core.nth.call(null,vec__9646__9647,0,null);

var req__9650 = (new goog.net.XhrIo());
var vec__9649__9651 = fetch.core.parse_route.call(null,route);
var method__9652 = cljs.core.nth.call(null,vec__9649__9651,0,null);
var uri__9653 = cljs.core.nth.call(null,vec__9649__9651,1,null);
var data__9654 = fetch.core.__GT_data.call(null,content);
var callback__9655 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__9655))
{goog.events.listen.call(null,req__9650,goog.net.EventType.COMPLETE,(function (){
return callback__9655.call(null,req__9650);
}));
} else
{}
return req__9650.send(uri__9653,method__9652,data__9654,(cljs.core.truth_(opts__9648)?fetch.util.clj__GT_js.call(null,opts__9648):null));
};
var xhr = function (route,content,callback,var_args){
var p__9645 = null;
if (goog.isDef(var_args)) {
  p__9645 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__9645);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__9656){
var route = cljs.core.first(arglist__9656);
var content = cljs.core.first(cljs.core.next(arglist__9656));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9656)));
var p__9645 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9656)));
return xhr__delegate.call(this, route, content, callback, p__9645);
});
return xhr;
})()
;
