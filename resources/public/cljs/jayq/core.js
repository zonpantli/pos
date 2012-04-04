goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____8986 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____8986))
{var cm__8987 = temp__3695__auto____8986;

return cljs.core.str.call(null,"[crateGroup=",cm__8987,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__8988){
var vec__8989__8990 = p__8988;
var context__8991 = cljs.core.nth.call(null,vec__8989__8990,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__8991)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__8991);
}
};
var $ = function (sel,var_args){
var p__8988 = null;
if (goog.isDef(var_args)) {
  p__8988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__8988);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__8992){
var sel = cljs.core.first(arglist__8992);
var p__8988 = cljs.core.rest(arglist__8992);
return $__delegate.call(this, sel, p__8988);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8994 = null;
var G__8994__8995 = (function (this$,k){
var or__3548__auto____8993 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____8993))
{return or__3548__auto____8993;
} else
{return null;
}
});
var G__8994__8996 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__8994 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__8994__8995.call(this,this$,k);
case  3 :
return G__8994__8996.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8994;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__8998 = null;
var G__8998__8999 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8998__9000 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8998 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8998__8999.call(this,_,k);
case  3 :
return G__8998__9000.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8998;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__9002){
var vec__9003__9004 = p__9002;
var v__9005 = cljs.core.nth.call(null,vec__9003__9004,0,null);

var a__9006 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9005)))
{return $elem.attr(a__9006);
} else
{return $elem.attr(a__9006,v__9005);
}
};
var attr = function ($elem,a,var_args){
var p__9002 = null;
if (goog.isDef(var_args)) {
  p__9002 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9002);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9007){
var $elem = cljs.core.first(arglist__9007);
var a = cljs.core.first(cljs.core.next(arglist__9007));
var p__9002 = cljs.core.rest(cljs.core.next(arglist__9007));
return attr__delegate.call(this, $elem, a, p__9002);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9008){
var vec__9009__9010 = p__9008;
var v__9011 = cljs.core.nth.call(null,vec__9009__9010,0,null);

var k__9012 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9011)))
{return $elem.data(k__9012);
} else
{return $elem.data(k__9012,v__9011);
}
};
var data = function ($elem,k,var_args){
var p__9008 = null;
if (goog.isDef(var_args)) {
  p__9008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9008);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9013){
var $elem = cljs.core.first(arglist__9013);
var k = cljs.core.first(cljs.core.next(arglist__9013));
var p__9008 = cljs.core.rest(cljs.core.next(arglist__9013));
return data__delegate.call(this, $elem, k, p__9008);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9014 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9014);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9015 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9015);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__9016){
var vec__9017__9018 = p__9016;
var speed__9019 = cljs.core.nth.call(null,vec__9017__9018,0,null);
var on_finish__9020 = cljs.core.nth.call(null,vec__9017__9018,1,null);

return $elem.hide(speed__9019,on_finish__9020);
};
var hide = function ($elem,var_args){
var p__9016 = null;
if (goog.isDef(var_args)) {
  p__9016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9016);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9021){
var $elem = cljs.core.first(arglist__9021);
var p__9016 = cljs.core.rest(arglist__9021);
return hide__delegate.call(this, $elem, p__9016);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9022){
var vec__9023__9024 = p__9022;
var speed__9025 = cljs.core.nth.call(null,vec__9023__9024,0,null);
var on_finish__9026 = cljs.core.nth.call(null,vec__9023__9024,1,null);

return $elem.show(speed__9025,on_finish__9026);
};
var show = function ($elem,var_args){
var p__9022 = null;
if (goog.isDef(var_args)) {
  p__9022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9022);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9027){
var $elem = cljs.core.first(arglist__9027);
var p__9022 = cljs.core.rest(arglist__9027);
return show__delegate.call(this, $elem, p__9022);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9028){
var vec__9029__9030 = p__9028;
var speed__9031 = cljs.core.nth.call(null,vec__9029__9030,0,null);
var on_finish__9032 = cljs.core.nth.call(null,vec__9029__9030,1,null);

return $elem.toggle(speed__9031,on_finish__9032);
};
var toggle = function ($elem,var_args){
var p__9028 = null;
if (goog.isDef(var_args)) {
  p__9028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9028);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9033){
var $elem = cljs.core.first(arglist__9033);
var p__9028 = cljs.core.rest(arglist__9033);
return toggle__delegate.call(this, $elem, p__9028);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9034){
var vec__9035__9036 = p__9034;
var speed__9037 = cljs.core.nth.call(null,vec__9035__9036,0,null);
var on_finish__9038 = cljs.core.nth.call(null,vec__9035__9036,1,null);

return $elem.fadeOut(speed__9037,on_finish__9038);
};
var fade_out = function ($elem,var_args){
var p__9034 = null;
if (goog.isDef(var_args)) {
  p__9034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9034);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9039){
var $elem = cljs.core.first(arglist__9039);
var p__9034 = cljs.core.rest(arglist__9039);
return fade_out__delegate.call(this, $elem, p__9034);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9040){
var vec__9041__9042 = p__9040;
var speed__9043 = cljs.core.nth.call(null,vec__9041__9042,0,null);
var on_finish__9044 = cljs.core.nth.call(null,vec__9041__9042,1,null);

return $elem.fadeIn(speed__9043,on_finish__9044);
};
var fade_in = function ($elem,var_args){
var p__9040 = null;
if (goog.isDef(var_args)) {
  p__9040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9040);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9045){
var $elem = cljs.core.first(arglist__9045);
var p__9040 = cljs.core.rest(arglist__9045);
return fade_in__delegate.call(this, $elem, p__9040);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9046){
var vec__9047__9048 = p__9046;
var speed__9049 = cljs.core.nth.call(null,vec__9047__9048,0,null);
var on_finish__9050 = cljs.core.nth.call(null,vec__9047__9048,1,null);

return $elem.slideUp(speed__9049,on_finish__9050);
};
var slide_up = function ($elem,var_args){
var p__9046 = null;
if (goog.isDef(var_args)) {
  p__9046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9046);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9051){
var $elem = cljs.core.first(arglist__9051);
var p__9046 = cljs.core.rest(arglist__9051);
return slide_up__delegate.call(this, $elem, p__9046);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9052){
var vec__9053__9054 = p__9052;
var speed__9055 = cljs.core.nth.call(null,vec__9053__9054,0,null);
var on_finish__9056 = cljs.core.nth.call(null,vec__9053__9054,1,null);

return $elem.slideDown(speed__9055,on_finish__9056);
};
var slide_down = function ($elem,var_args){
var p__9052 = null;
if (goog.isDef(var_args)) {
  p__9052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9052);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9057){
var $elem = cljs.core.first(arglist__9057);
var p__9052 = cljs.core.rest(arglist__9057);
return slide_down__delegate.call(this, $elem, p__9052);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__9058){
var vec__9059__9060 = p__9058;
var v__9061 = cljs.core.nth.call(null,vec__9059__9060,0,null);

if(cljs.core.truth_(v__9061))
{return $elem.val(v__9061);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9058 = null;
if (goog.isDef(var_args)) {
  p__9058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9058);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9062){
var $elem = cljs.core.first(arglist__9062);
var p__9058 = cljs.core.rest(arglist__9062);
return val__delegate.call(this, $elem, p__9058);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__9063,content,callback){
var vec__9064__9065 = p__9063;
var method__9066 = cljs.core.nth.call(null,vec__9064__9065,0,null);
var uri__9067 = cljs.core.nth.call(null,vec__9064__9065,1,null);

var params__9068 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9066)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9067,params__9068);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__9069){
var vec__9070__9071 = p__9069;
var sel__9072 = cljs.core.nth.call(null,vec__9070__9071,0,null);
var data__9073 = cljs.core.nth.call(null,vec__9070__9071,1,null);
var handler__9074 = cljs.core.nth.call(null,vec__9070__9071,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9072),data__9073,handler__9074);
};
var on = function ($elem,events,var_args){
var p__9069 = null;
if (goog.isDef(var_args)) {
  p__9069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9069);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9075){
var $elem = cljs.core.first(arglist__9075);
var events = cljs.core.first(cljs.core.next(arglist__9075));
var p__9069 = cljs.core.rest(cljs.core.next(arglist__9075));
return on__delegate.call(this, $elem, events, p__9069);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9076){
var vec__9077__9078 = p__9076;
var sel__9079 = cljs.core.nth.call(null,vec__9077__9078,0,null);
var data__9080 = cljs.core.nth.call(null,vec__9077__9078,1,null);
var handler__9081 = cljs.core.nth.call(null,vec__9077__9078,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9079),data__9080,handler__9081);
};
var one = function ($elem,events,var_args){
var p__9076 = null;
if (goog.isDef(var_args)) {
  p__9076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9076);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9082){
var $elem = cljs.core.first(arglist__9082);
var events = cljs.core.first(cljs.core.next(arglist__9082));
var p__9076 = cljs.core.rest(cljs.core.next(arglist__9082));
return one__delegate.call(this, $elem, events, p__9076);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9083){
var vec__9084__9085 = p__9083;
var sel__9086 = cljs.core.nth.call(null,vec__9084__9085,0,null);
var handler__9087 = cljs.core.nth.call(null,vec__9084__9085,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9086),handler__9087);
};
var off = function ($elem,events,var_args){
var p__9083 = null;
if (goog.isDef(var_args)) {
  p__9083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9083);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9088){
var $elem = cljs.core.first(arglist__9088);
var events = cljs.core.first(cljs.core.next(arglist__9088));
var p__9083 = cljs.core.rest(cljs.core.next(arglist__9088));
return off__delegate.call(this, $elem, events, p__9083);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
