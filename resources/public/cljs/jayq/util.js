goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9456 = cljs.core.js_obj.call(null);

var G__9457__9458 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9457__9458))
{var G__9460__9462 = cljs.core.first.call(null,G__9457__9458);
var vec__9461__9463 = G__9460__9462;
var k__9464 = cljs.core.nth.call(null,vec__9461__9463,0,null);
var v__9465 = cljs.core.nth.call(null,vec__9461__9463,1,null);
var G__9457__9466 = G__9457__9458;

var G__9460__9467 = G__9460__9462;
var G__9457__9468 = G__9457__9466;

while(true){
var vec__9469__9470 = G__9460__9467;
var k__9471 = cljs.core.nth.call(null,vec__9469__9470,0,null);
var v__9472 = cljs.core.nth.call(null,vec__9469__9470,1,null);
var G__9457__9473 = G__9457__9468;

(out__9456[cljs.core.name.call(null,k__9471)] = v__9472);
var temp__3698__auto____9474 = cljs.core.next.call(null,G__9457__9473);

if(cljs.core.truth_(temp__3698__auto____9474))
{var G__9457__9475 = temp__3698__auto____9474;

{
var G__9476 = cljs.core.first.call(null,G__9457__9475);
var G__9477 = G__9457__9475;
G__9460__9467 = G__9476;
G__9457__9468 = G__9477;
continue;
}
} else
{}
break;
}
} else
{}
return out__9456;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9478 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9478);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9479){
var v = cljs.core.first(arglist__9479);
var text = cljs.core.rest(arglist__9479);
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
{return cljs.core.reduce.call(null,(function (m,p__9480){
var vec__9481__9482 = p__9480;
var k__9483 = cljs.core.nth.call(null,vec__9481__9482,0,null);
var v__9484 = cljs.core.nth.call(null,vec__9481__9482,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9483),clj__GT_js.call(null,v__9484));
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
