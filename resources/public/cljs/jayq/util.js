goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9089 = cljs.core.js_obj.call(null);

var G__9090__9091 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9090__9091))
{var G__9093__9095 = cljs.core.first.call(null,G__9090__9091);
var vec__9094__9096 = G__9093__9095;
var k__9097 = cljs.core.nth.call(null,vec__9094__9096,0,null);
var v__9098 = cljs.core.nth.call(null,vec__9094__9096,1,null);
var G__9090__9099 = G__9090__9091;

var G__9093__9100 = G__9093__9095;
var G__9090__9101 = G__9090__9099;

while(true){
var vec__9102__9103 = G__9093__9100;
var k__9104 = cljs.core.nth.call(null,vec__9102__9103,0,null);
var v__9105 = cljs.core.nth.call(null,vec__9102__9103,1,null);
var G__9090__9106 = G__9090__9101;

(out__9089[cljs.core.name.call(null,k__9104)] = v__9105);
var temp__3698__auto____9107 = cljs.core.next.call(null,G__9090__9106);

if(cljs.core.truth_(temp__3698__auto____9107))
{var G__9090__9108 = temp__3698__auto____9107;

{
var G__9109 = cljs.core.first.call(null,G__9090__9108);
var G__9110 = G__9090__9108;
G__9093__9100 = G__9109;
G__9090__9101 = G__9110;
continue;
}
} else
{}
break;
}
} else
{}
return out__9089;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9111 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9111);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9112){
var v = cljs.core.first(arglist__9112);
var text = cljs.core.rest(arglist__9112);
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
{return cljs.core.reduce.call(null,(function (m,p__9113){
var vec__9114__9115 = p__9113;
var k__9116 = cljs.core.nth.call(null,vec__9114__9115,0,null);
var v__9117 = cljs.core.nth.call(null,vec__9114__9115,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9116),clj__GT_js.call(null,v__9117));
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
