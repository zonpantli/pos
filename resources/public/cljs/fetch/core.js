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
{var vec__8842__8843 = route;
var m__8844 = cljs.core.nth.call(null,vec__8842__8843,0,null);
var u__8845 = cljs.core.nth.call(null,vec__8842__8843,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__8844),u__8845]);
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
var cur__8846 = fetch.util.clj__GT_js.call(null,d);
var query__8847 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__8846)));

return cljs.core.str.call(null,query__8847);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__8848 = req.getResponseText();

return callback.call(null,data__8848);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__8849){
var vec__8850__8851 = p__8849;
var opts__8852 = cljs.core.nth.call(null,vec__8850__8851,0,null);

var req__8854 = (new goog.net.XhrIo());
var vec__8853__8855 = fetch.core.parse_route.call(null,route);
var method__8856 = cljs.core.nth.call(null,vec__8853__8855,0,null);
var uri__8857 = cljs.core.nth.call(null,vec__8853__8855,1,null);
var data__8858 = fetch.core.__GT_data.call(null,content);
var callback__8859 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__8859))
{goog.events.listen.call(null,req__8854,goog.net.EventType.COMPLETE,(function (){
return callback__8859.call(null,req__8854);
}));
} else
{}
return req__8854.send(uri__8857,method__8856,data__8858,(cljs.core.truth_(opts__8852)?fetch.util.clj__GT_js.call(null,opts__8852):null));
};
var xhr = function (route,content,callback,var_args){
var p__8849 = null;
if (goog.isDef(var_args)) {
  p__8849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__8849);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__8860){
var route = cljs.core.first(arglist__8860);
var content = cljs.core.first(cljs.core.next(arglist__8860));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8860)));
var p__8849 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8860)));
return xhr__delegate.call(this, route, content, callback, p__8849);
});
return xhr;
})()
;
