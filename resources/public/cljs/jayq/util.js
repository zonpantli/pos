goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9364 = cljs.core.js_obj.call(null);

var G__9365__9366 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9365__9366))
{var G__9368__9370 = cljs.core.first.call(null,G__9365__9366);
var vec__9369__9371 = G__9368__9370;
var k__9372 = cljs.core.nth.call(null,vec__9369__9371,0,null);
var v__9373 = cljs.core.nth.call(null,vec__9369__9371,1,null);
var G__9365__9374 = G__9365__9366;

var G__9368__9375 = G__9368__9370;
var G__9365__9376 = G__9365__9374;

while(true){
var vec__9377__9378 = G__9368__9375;
var k__9379 = cljs.core.nth.call(null,vec__9377__9378,0,null);
var v__9380 = cljs.core.nth.call(null,vec__9377__9378,1,null);
var G__9365__9381 = G__9365__9376;

(out__9364[cljs.core.name.call(null,k__9379)] = v__9380);
var temp__3698__auto____9382 = cljs.core.next.call(null,G__9365__9381);

if(cljs.core.truth_(temp__3698__auto____9382))
{var G__9365__9383 = temp__3698__auto____9382;

{
var G__9384 = cljs.core.first.call(null,G__9365__9383);
var G__9385 = G__9365__9383;
G__9368__9375 = G__9384;
G__9365__9376 = G__9385;
continue;
}
} else
{}
break;
}
} else
{}
return out__9364;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9386 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9386);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9387){
var v = cljs.core.first(arglist__9387);
var text = cljs.core.rest(arglist__9387);
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
{return cljs.core.reduce.call(null,(function (m,p__9388){
var vec__9389__9390 = p__9388;
var k__9391 = cljs.core.nth.call(null,vec__9389__9390,0,null);
var v__9392 = cljs.core.nth.call(null,vec__9389__9390,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9391),clj__GT_js.call(null,v__9392));
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
