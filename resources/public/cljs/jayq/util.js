goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9113 = cljs.core.js_obj.call(null);

var G__9114__9115 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9114__9115))
{var G__9117__9119 = cljs.core.first.call(null,G__9114__9115);
var vec__9118__9120 = G__9117__9119;
var k__9121 = cljs.core.nth.call(null,vec__9118__9120,0,null);
var v__9122 = cljs.core.nth.call(null,vec__9118__9120,1,null);
var G__9114__9123 = G__9114__9115;

var G__9117__9124 = G__9117__9119;
var G__9114__9125 = G__9114__9123;

while(true){
var vec__9126__9127 = G__9117__9124;
var k__9128 = cljs.core.nth.call(null,vec__9126__9127,0,null);
var v__9129 = cljs.core.nth.call(null,vec__9126__9127,1,null);
var G__9114__9130 = G__9114__9125;

(out__9113[cljs.core.name.call(null,k__9128)] = v__9129);
var temp__3698__auto____9131 = cljs.core.next.call(null,G__9114__9130);

if(cljs.core.truth_(temp__3698__auto____9131))
{var G__9114__9132 = temp__3698__auto____9131;

{
var G__9133 = cljs.core.first.call(null,G__9114__9132);
var G__9134 = G__9114__9132;
G__9117__9124 = G__9133;
G__9114__9125 = G__9134;
continue;
}
} else
{}
break;
}
} else
{}
return out__9113;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9135 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9135);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9136){
var v = cljs.core.first(arglist__9136);
var text = cljs.core.rest(arglist__9136);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__9137){
var vec__9138__9139 = p__9137;
var k__9140 = cljs.core.nth.call(null,vec__9138__9139,0,null);
var v__9141 = cljs.core.nth.call(null,vec__9138__9139,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9140),clj__GT_js.call(null,v__9141));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
