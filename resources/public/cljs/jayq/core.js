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
{var temp__3695__auto____9064 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9064))
{var cm__9065 = temp__3695__auto____9064;

return cljs.core.str.call(null,"[crateGroup=",cm__9065,"]");
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
var $__delegate = function (sel,p__9066){
var vec__9067__9068 = p__9066;
var context__9069 = cljs.core.nth.call(null,vec__9067__9068,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9069)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9069);
}
};
var $ = function (sel,var_args){
var p__9066 = null;
if (goog.isDef(var_args)) {
  p__9066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9066);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9070){
var sel = cljs.core.first(arglist__9070);
var p__9066 = cljs.core.rest(arglist__9070);
return $__delegate.call(this, sel, p__9066);
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
var G__9072 = null;
var G__9072__9073 = (function (this$,k){
var or__3548__auto____9071 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9071))
{return or__3548__auto____9071;
} else
{return null;
}
});
var G__9072__9074 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9072 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9072__9073.call(this,this$,k);
case  3 :
return G__9072__9074.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9072;
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
var G__9076 = null;
var G__9076__9077 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9076__9078 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9076 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9076__9077.call(this,_,k);
case  3 :
return G__9076__9078.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9076;
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
var attr__delegate = function ($elem,a,p__9080){
var vec__9081__9082 = p__9080;
var v__9083 = cljs.core.nth.call(null,vec__9081__9082,0,null);

var a__9084 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9083)))
{return $elem.attr(a__9084);
} else
{return $elem.attr(a__9084,v__9083);
}
};
var attr = function ($elem,a,var_args){
var p__9080 = null;
if (goog.isDef(var_args)) {
  p__9080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9080);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9085){
var $elem = cljs.core.first(arglist__9085);
var a = cljs.core.first(cljs.core.next(arglist__9085));
var p__9080 = cljs.core.rest(cljs.core.next(arglist__9085));
return attr__delegate.call(this, $elem, a, p__9080);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9086){
var vec__9087__9088 = p__9086;
var v__9089 = cljs.core.nth.call(null,vec__9087__9088,0,null);

var k__9090 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9089)))
{return $elem.data(k__9090);
} else
{return $elem.data(k__9090,v__9089);
}
};
var data = function ($elem,k,var_args){
var p__9086 = null;
if (goog.isDef(var_args)) {
  p__9086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9086);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9091){
var $elem = cljs.core.first(arglist__9091);
var k = cljs.core.first(cljs.core.next(arglist__9091));
var p__9086 = cljs.core.rest(cljs.core.next(arglist__9091));
return data__delegate.call(this, $elem, k, p__9086);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9092 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9092);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9093 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9093);
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
var hide__delegate = function ($elem,p__9094){
var vec__9095__9096 = p__9094;
var speed__9097 = cljs.core.nth.call(null,vec__9095__9096,0,null);
var on_finish__9098 = cljs.core.nth.call(null,vec__9095__9096,1,null);

return $elem.hide(speed__9097,on_finish__9098);
};
var hide = function ($elem,var_args){
var p__9094 = null;
if (goog.isDef(var_args)) {
  p__9094 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9094);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9099){
var $elem = cljs.core.first(arglist__9099);
var p__9094 = cljs.core.rest(arglist__9099);
return hide__delegate.call(this, $elem, p__9094);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9100){
var vec__9101__9102 = p__9100;
var speed__9103 = cljs.core.nth.call(null,vec__9101__9102,0,null);
var on_finish__9104 = cljs.core.nth.call(null,vec__9101__9102,1,null);

return $elem.show(speed__9103,on_finish__9104);
};
var show = function ($elem,var_args){
var p__9100 = null;
if (goog.isDef(var_args)) {
  p__9100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9100);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9105){
var $elem = cljs.core.first(arglist__9105);
var p__9100 = cljs.core.rest(arglist__9105);
return show__delegate.call(this, $elem, p__9100);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9106){
var vec__9107__9108 = p__9106;
var speed__9109 = cljs.core.nth.call(null,vec__9107__9108,0,null);
var on_finish__9110 = cljs.core.nth.call(null,vec__9107__9108,1,null);

return $elem.toggle(speed__9109,on_finish__9110);
};
var toggle = function ($elem,var_args){
var p__9106 = null;
if (goog.isDef(var_args)) {
  p__9106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9106);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9111){
var $elem = cljs.core.first(arglist__9111);
var p__9106 = cljs.core.rest(arglist__9111);
return toggle__delegate.call(this, $elem, p__9106);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9112){
var vec__9113__9114 = p__9112;
var speed__9115 = cljs.core.nth.call(null,vec__9113__9114,0,null);
var on_finish__9116 = cljs.core.nth.call(null,vec__9113__9114,1,null);

return $elem.fadeOut(speed__9115,on_finish__9116);
};
var fade_out = function ($elem,var_args){
var p__9112 = null;
if (goog.isDef(var_args)) {
  p__9112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9112);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9117){
var $elem = cljs.core.first(arglist__9117);
var p__9112 = cljs.core.rest(arglist__9117);
return fade_out__delegate.call(this, $elem, p__9112);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9118){
var vec__9119__9120 = p__9118;
var speed__9121 = cljs.core.nth.call(null,vec__9119__9120,0,null);
var on_finish__9122 = cljs.core.nth.call(null,vec__9119__9120,1,null);

return $elem.fadeIn(speed__9121,on_finish__9122);
};
var fade_in = function ($elem,var_args){
var p__9118 = null;
if (goog.isDef(var_args)) {
  p__9118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9118);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9123){
var $elem = cljs.core.first(arglist__9123);
var p__9118 = cljs.core.rest(arglist__9123);
return fade_in__delegate.call(this, $elem, p__9118);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9124){
var vec__9125__9126 = p__9124;
var speed__9127 = cljs.core.nth.call(null,vec__9125__9126,0,null);
var on_finish__9128 = cljs.core.nth.call(null,vec__9125__9126,1,null);

return $elem.slideUp(speed__9127,on_finish__9128);
};
var slide_up = function ($elem,var_args){
var p__9124 = null;
if (goog.isDef(var_args)) {
  p__9124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9124);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9129){
var $elem = cljs.core.first(arglist__9129);
var p__9124 = cljs.core.rest(arglist__9129);
return slide_up__delegate.call(this, $elem, p__9124);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9130){
var vec__9131__9132 = p__9130;
var speed__9133 = cljs.core.nth.call(null,vec__9131__9132,0,null);
var on_finish__9134 = cljs.core.nth.call(null,vec__9131__9132,1,null);

return $elem.slideDown(speed__9133,on_finish__9134);
};
var slide_down = function ($elem,var_args){
var p__9130 = null;
if (goog.isDef(var_args)) {
  p__9130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9130);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9135){
var $elem = cljs.core.first(arglist__9135);
var p__9130 = cljs.core.rest(arglist__9135);
return slide_down__delegate.call(this, $elem, p__9130);
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
var val__delegate = function ($elem,p__9136){
var vec__9137__9138 = p__9136;
var v__9139 = cljs.core.nth.call(null,vec__9137__9138,0,null);

if(cljs.core.truth_(v__9139))
{return $elem.val(v__9139);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9136 = null;
if (goog.isDef(var_args)) {
  p__9136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9136);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9140){
var $elem = cljs.core.first(arglist__9140);
var p__9136 = cljs.core.rest(arglist__9140);
return val__delegate.call(this, $elem, p__9136);
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
jayq.core.xhr = (function xhr(p__9141,content,callback){
var vec__9142__9143 = p__9141;
var method__9144 = cljs.core.nth.call(null,vec__9142__9143,0,null);
var uri__9145 = cljs.core.nth.call(null,vec__9142__9143,1,null);

var params__9146 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9144)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9145,params__9146);
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
var on__delegate = function ($elem,events,p__9147){
var vec__9148__9149 = p__9147;
var sel__9150 = cljs.core.nth.call(null,vec__9148__9149,0,null);
var data__9151 = cljs.core.nth.call(null,vec__9148__9149,1,null);
var handler__9152 = cljs.core.nth.call(null,vec__9148__9149,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9150),data__9151,handler__9152);
};
var on = function ($elem,events,var_args){
var p__9147 = null;
if (goog.isDef(var_args)) {
  p__9147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9147);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9153){
var $elem = cljs.core.first(arglist__9153);
var events = cljs.core.first(cljs.core.next(arglist__9153));
var p__9147 = cljs.core.rest(cljs.core.next(arglist__9153));
return on__delegate.call(this, $elem, events, p__9147);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9154){
var vec__9155__9156 = p__9154;
var sel__9157 = cljs.core.nth.call(null,vec__9155__9156,0,null);
var data__9158 = cljs.core.nth.call(null,vec__9155__9156,1,null);
var handler__9159 = cljs.core.nth.call(null,vec__9155__9156,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9157),data__9158,handler__9159);
};
var one = function ($elem,events,var_args){
var p__9154 = null;
if (goog.isDef(var_args)) {
  p__9154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9154);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9160){
var $elem = cljs.core.first(arglist__9160);
var events = cljs.core.first(cljs.core.next(arglist__9160));
var p__9154 = cljs.core.rest(cljs.core.next(arglist__9160));
return one__delegate.call(this, $elem, events, p__9154);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9161){
var vec__9162__9163 = p__9161;
var sel__9164 = cljs.core.nth.call(null,vec__9162__9163,0,null);
var handler__9165 = cljs.core.nth.call(null,vec__9162__9163,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9164),handler__9165);
};
var off = function ($elem,events,var_args){
var p__9161 = null;
if (goog.isDef(var_args)) {
  p__9161 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9161);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9166){
var $elem = cljs.core.first(arglist__9166);
var events = cljs.core.first(cljs.core.next(arglist__9166));
var p__9161 = cljs.core.rest(cljs.core.next(arglist__9166));
return off__delegate.call(this, $elem, events, p__9161);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
