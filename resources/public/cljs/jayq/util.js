goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__13139 = cljs.core.js_obj.call(null);

var G__13140__13141 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__13140__13141))
{var G__13143__13145 = cljs.core.first.call(null,G__13140__13141);
var vec__13144__13146 = G__13143__13145;
var k__13147 = cljs.core.nth.call(null,vec__13144__13146,0,null);
var v__13148 = cljs.core.nth.call(null,vec__13144__13146,1,null);
var G__13140__13149 = G__13140__13141;

var G__13143__13150 = G__13143__13145;
var G__13140__13151 = G__13140__13149;

while(true){
var vec__13152__13153 = G__13143__13150;
var k__13154 = cljs.core.nth.call(null,vec__13152__13153,0,null);
var v__13155 = cljs.core.nth.call(null,vec__13152__13153,1,null);
var G__13140__13156 = G__13140__13151;

(out__13139[cljs.core.name.call(null,k__13154)] = v__13155);
var temp__3698__auto____13157 = cljs.core.next.call(null,G__13140__13156);

if(cljs.core.truth_(temp__3698__auto____13157))
{var G__13140__13158 = temp__3698__auto____13157;

{
var G__13159 = cljs.core.first.call(null,G__13140__13158);
var G__13160 = G__13140__13158;
G__13143__13150 = G__13159;
G__13140__13151 = G__13160;
continue;
}
} else
{}
break;
}
} else
{}
return out__13139;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__13161 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__13161);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13162){
var v = cljs.core.first(arglist__13162);
var text = cljs.core.rest(arglist__13162);
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
{return cljs.core.reduce.call(null,(function (m,p__13163){
var vec__13164__13165 = p__13163;
var k__13166 = cljs.core.nth.call(null,vec__13164__13165,0,null);
var v__13167 = cljs.core.nth.call(null,vec__13164__13165,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__13166),clj__GT_js.call(null,v__13167));
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
