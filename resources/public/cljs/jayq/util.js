goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9167 = cljs.core.js_obj.call(null);

var G__9168__9169 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9168__9169))
{var G__9171__9173 = cljs.core.first.call(null,G__9168__9169);
var vec__9172__9174 = G__9171__9173;
var k__9175 = cljs.core.nth.call(null,vec__9172__9174,0,null);
var v__9176 = cljs.core.nth.call(null,vec__9172__9174,1,null);
var G__9168__9177 = G__9168__9169;

var G__9171__9178 = G__9171__9173;
var G__9168__9179 = G__9168__9177;

while(true){
var vec__9180__9181 = G__9171__9178;
var k__9182 = cljs.core.nth.call(null,vec__9180__9181,0,null);
var v__9183 = cljs.core.nth.call(null,vec__9180__9181,1,null);
var G__9168__9184 = G__9168__9179;

(out__9167[cljs.core.name.call(null,k__9182)] = v__9183);
var temp__3698__auto____9185 = cljs.core.next.call(null,G__9168__9184);

if(cljs.core.truth_(temp__3698__auto____9185))
{var G__9168__9186 = temp__3698__auto____9185;

{
var G__9187 = cljs.core.first.call(null,G__9168__9186);
var G__9188 = G__9168__9186;
G__9171__9178 = G__9187;
G__9168__9179 = G__9188;
continue;
}
} else
{}
break;
}
} else
{}
return out__9167;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9189 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9189);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9190){
var v = cljs.core.first(arglist__9190);
var text = cljs.core.rest(arglist__9190);
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
{return cljs.core.reduce.call(null,(function (m,p__9191){
var vec__9192__9193 = p__9191;
var k__9194 = cljs.core.nth.call(null,vec__9192__9193,0,null);
var v__9195 = cljs.core.nth.call(null,vec__9192__9193,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9194),clj__GT_js.call(null,v__9195));
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
