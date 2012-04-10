goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__9804 = cljs.core.js_obj.call(null);

var G__9805__9806 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__9805__9806))
{var G__9808__9810 = cljs.core.first.call(null,G__9805__9806);
var vec__9809__9811 = G__9808__9810;
var k__9812 = cljs.core.nth.call(null,vec__9809__9811,0,null);
var v__9813 = cljs.core.nth.call(null,vec__9809__9811,1,null);
var G__9805__9814 = G__9805__9806;

var G__9808__9815 = G__9808__9810;
var G__9805__9816 = G__9805__9814;

while(true){
var vec__9817__9818 = G__9808__9815;
var k__9819 = cljs.core.nth.call(null,vec__9817__9818,0,null);
var v__9820 = cljs.core.nth.call(null,vec__9817__9818,1,null);
var G__9805__9821 = G__9805__9816;

(out__9804[cljs.core.name.call(null,k__9819)] = v__9820);
var temp__3698__auto____9822 = cljs.core.next.call(null,G__9805__9821);

if(cljs.core.truth_(temp__3698__auto____9822))
{var G__9805__9823 = temp__3698__auto____9822;

{
var G__9824 = cljs.core.first.call(null,G__9805__9823);
var G__9825 = G__9805__9823;
G__9808__9815 = G__9824;
G__9805__9816 = G__9825;
continue;
}
} else
{}
break;
}
} else
{}
return out__9804;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__9826 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__9826);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__9827){
var v = cljs.core.first(arglist__9827);
var text = cljs.core.rest(arglist__9827);
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
{return cljs.core.reduce.call(null,(function (m,p__9828){
var vec__9829__9830 = p__9828;
var k__9831 = cljs.core.nth.call(null,vec__9829__9830,0,null);
var v__9832 = cljs.core.nth.call(null,vec__9829__9830,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__9831),clj__GT_js.call(null,v__9832));
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
