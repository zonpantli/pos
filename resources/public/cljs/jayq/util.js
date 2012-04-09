goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9476 = cljs.core.js_obj.call(null);

var G__9477__9478 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9477__9478))
{var G__9480__9482 = cljs.core.first.call(null,G__9477__9478);
var vec__9481__9483 = G__9480__9482;
var k__9484 = cljs.core.nth.call(null,vec__9481__9483,0,null);
var v__9485 = cljs.core.nth.call(null,vec__9481__9483,1,null);
var G__9477__9486 = G__9477__9478;

var G__9480__9487 = G__9480__9482;
var G__9477__9488 = G__9477__9486;

while(true){
var vec__9489__9490 = G__9480__9487;
var k__9491 = cljs.core.nth.call(null,vec__9489__9490,0,null);
var v__9492 = cljs.core.nth.call(null,vec__9489__9490,1,null);
var G__9477__9493 = G__9477__9488;

(out__9476[cljs.core.name.call(null,k__9491)] = v__9492);
var temp__3698__auto____9494 = cljs.core.next.call(null,G__9477__9493);

if(cljs.core.truth_(temp__3698__auto____9494))
{var G__9477__9495 = temp__3698__auto____9494;

{
var G__9496 = cljs.core.first.call(null,G__9477__9495);
var G__9497 = G__9477__9495;
G__9480__9487 = G__9496;
G__9477__9488 = G__9497;
continue;
}
} else
{}
break;
}
} else
{}
return out__9476;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9498 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9498);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9499){
var v = cljs.core.first(arglist__9499);
var text = cljs.core.rest(arglist__9499);
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
{return cljs.core.reduce.call(null,(function (m,p__9500){
var vec__9501__9502 = p__9500;
var k__9503 = cljs.core.nth.call(null,vec__9501__9502,0,null);
var v__9504 = cljs.core.nth.call(null,vec__9501__9502,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9503),clj__GT_js.call(null,v__9504));
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
