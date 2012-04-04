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
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__8781__8782 = route;
var m__8783 = cljs.core.nth.call(null,vec__8781__8782,0,null);
var u__8784 = cljs.core.nth.call(null,vec__8781__8782,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__8783),u__8784]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__8785 = fetch.util.clj__GT_js.call(null,d);
var query__8786 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__8785)));

return cljs.core.str.call(null,query__8786);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__8787 = req.getResponseText();

return callback.call(null,data__8787);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__8788){
var vec__8789__8790 = p__8788;
var opts__8791 = cljs.core.nth.call(null,vec__8789__8790,0,null);

var req__8793 = (new goog.net.XhrIo());
var vec__8792__8794 = fetch.core.parse_route.call(null,route);
var method__8795 = cljs.core.nth.call(null,vec__8792__8794,0,null);
var uri__8796 = cljs.core.nth.call(null,vec__8792__8794,1,null);
var data__8797 = fetch.core.__GT_data.call(null,content);
var callback__8798 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__8798))
{goog.events.listen.call(null,req__8793,goog.net.EventType.COMPLETE,(function (){
return callback__8798.call(null,req__8793);
}));
} else
{}
return req__8793.send(uri__8796,method__8795,data__8797,(cljs.core.truth_(opts__8791)?fetch.util.clj__GT_js.call(null,opts__8791):null));
};
var xhr = function (route,content,callback,var_args){
var p__8788 = null;
if (goog.isDef(var_args)) {
  p__8788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__8788);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__8799){
var route = cljs.core.first(arglist__8799);
var content = cljs.core.first(cljs.core.next(arglist__8799));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8799)));
var p__8788 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8799)));
return xhr__delegate.call(this, route, content, callback, p__8788);
});
return xhr;
})()
;
