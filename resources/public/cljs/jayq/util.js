goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9847 = cljs.core.js_obj.call(null);

var G__9848__9849 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9848__9849))
{var G__9851__9853 = cljs.core.first.call(null,G__9848__9849);
var vec__9852__9854 = G__9851__9853;
var k__9855 = cljs.core.nth.call(null,vec__9852__9854,0,null);
var v__9856 = cljs.core.nth.call(null,vec__9852__9854,1,null);
var G__9848__9857 = G__9848__9849;

var G__9851__9858 = G__9851__9853;
var G__9848__9859 = G__9848__9857;

while(true){
var vec__9860__9861 = G__9851__9858;
var k__9862 = cljs.core.nth.call(null,vec__9860__9861,0,null);
var v__9863 = cljs.core.nth.call(null,vec__9860__9861,1,null);
var G__9848__9864 = G__9848__9859;

(out__9847[cljs.core.name.call(null,k__9862)] = v__9863);
var temp__3698__auto____9865 = cljs.core.next.call(null,G__9848__9864);

if(cljs.core.truth_(temp__3698__auto____9865))
{var G__9848__9866 = temp__3698__auto____9865;

{
var G__9867 = cljs.core.first.call(null,G__9848__9866);
var G__9868 = G__9848__9866;
G__9851__9858 = G__9867;
G__9848__9859 = G__9868;
continue;
}
} else
{}
break;
}
} else
{}
return out__9847;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9869 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9869);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9870){
var v = cljs.core.first(arglist__9870);
var text = cljs.core.rest(arglist__9870);
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
{return cljs.core.reduce.call(null,(function (m,p__9871){
var vec__9872__9873 = p__9871;
var k__9874 = cljs.core.nth.call(null,vec__9872__9873,0,null);
var v__9875 = cljs.core.nth.call(null,vec__9872__9873,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9874),clj__GT_js.call(null,v__9875));
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
