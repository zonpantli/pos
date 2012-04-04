goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9028 = cljs.core.js_obj.call(null);

var G__9029__9030 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9029__9030))
{var G__9032__9034 = cljs.core.first.call(null,G__9029__9030);
var vec__9033__9035 = G__9032__9034;
var k__9036 = cljs.core.nth.call(null,vec__9033__9035,0,null);
var v__9037 = cljs.core.nth.call(null,vec__9033__9035,1,null);
var G__9029__9038 = G__9029__9030;

var G__9032__9039 = G__9032__9034;
var G__9029__9040 = G__9029__9038;

while(true){
var vec__9041__9042 = G__9032__9039;
var k__9043 = cljs.core.nth.call(null,vec__9041__9042,0,null);
var v__9044 = cljs.core.nth.call(null,vec__9041__9042,1,null);
var G__9029__9045 = G__9029__9040;

(out__9028[cljs.core.name.call(null,k__9043)] = v__9044);
var temp__3698__auto____9046 = cljs.core.next.call(null,G__9029__9045);

if(cljs.core.truth_(temp__3698__auto____9046))
{var G__9029__9047 = temp__3698__auto____9046;

{
var G__9048 = cljs.core.first.call(null,G__9029__9047);
var G__9049 = G__9029__9047;
G__9032__9039 = G__9048;
G__9029__9040 = G__9049;
continue;
}
} else
{}
break;
}
} else
{}
return out__9028;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9050 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9050);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9051){
var v = cljs.core.first(arglist__9051);
var text = cljs.core.rest(arglist__9051);
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
{return cljs.core.reduce.call(null,(function (m,p__9052){
var vec__9053__9054 = p__9052;
var k__9055 = cljs.core.nth.call(null,vec__9053__9054,0,null);
var v__9056 = cljs.core.nth.call(null,vec__9053__9054,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9055),clj__GT_js.call(null,v__9056));
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
