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
{var temp__3695__auto____9505 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9505))
{var cm__9506 = temp__3695__auto____9505;

return cljs.core.str.call(null,"[crateGroup=",cm__9506,"]");
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
var $__delegate = function (sel,p__9507){
var vec__9508__9509 = p__9507;
var context__9510 = cljs.core.nth.call(null,vec__9508__9509,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9510)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9510);
}
};
var $ = function (sel,var_args){
var p__9507 = null;
if (goog.isDef(var_args)) {
  p__9507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9507);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9511){
var sel = cljs.core.first(arglist__9511);
var p__9507 = cljs.core.rest(arglist__9511);
return $__delegate.call(this, sel, p__9507);
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
var G__9513 = null;
var G__9513__9514 = (function (this$,k){
var or__3548__auto____9512 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9512))
{return or__3548__auto____9512;
} else
{return null;
}
});
var G__9513__9515 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9513 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9513__9514.call(this,this$,k);
case  3 :
return G__9513__9515.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9513;
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
var G__9517 = null;
var G__9517__9518 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9517__9519 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9517 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9517__9518.call(this,_,k);
case  3 :
return G__9517__9519.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9517;
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
var attr__delegate = function ($elem,a,p__9521){
var vec__9522__9523 = p__9521;
var v__9524 = cljs.core.nth.call(null,vec__9522__9523,0,null);

var a__9525 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9524)))
{return $elem.attr(a__9525);
} else
{return $elem.attr(a__9525,v__9524);
}
};
var attr = function ($elem,a,var_args){
var p__9521 = null;
if (goog.isDef(var_args)) {
  p__9521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9521);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9526){
var $elem = cljs.core.first(arglist__9526);
var a = cljs.core.first(cljs.core.next(arglist__9526));
var p__9521 = cljs.core.rest(cljs.core.next(arglist__9526));
return attr__delegate.call(this, $elem, a, p__9521);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9527){
var vec__9528__9529 = p__9527;
var v__9530 = cljs.core.nth.call(null,vec__9528__9529,0,null);

var k__9531 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9530)))
{return $elem.data(k__9531);
} else
{return $elem.data(k__9531,v__9530);
}
};
var data = function ($elem,k,var_args){
var p__9527 = null;
if (goog.isDef(var_args)) {
  p__9527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9527);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9532){
var $elem = cljs.core.first(arglist__9532);
var k = cljs.core.first(cljs.core.next(arglist__9532));
var p__9527 = cljs.core.rest(cljs.core.next(arglist__9532));
return data__delegate.call(this, $elem, k, p__9527);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9533 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9533);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9534 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9534);
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
var hide__delegate = function ($elem,p__9535){
var vec__9536__9537 = p__9535;
var speed__9538 = cljs.core.nth.call(null,vec__9536__9537,0,null);
var on_finish__9539 = cljs.core.nth.call(null,vec__9536__9537,1,null);

return $elem.hide(speed__9538,on_finish__9539);
};
var hide = function ($elem,var_args){
var p__9535 = null;
if (goog.isDef(var_args)) {
  p__9535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9535);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9540){
var $elem = cljs.core.first(arglist__9540);
var p__9535 = cljs.core.rest(arglist__9540);
return hide__delegate.call(this, $elem, p__9535);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9541){
var vec__9542__9543 = p__9541;
var speed__9544 = cljs.core.nth.call(null,vec__9542__9543,0,null);
var on_finish__9545 = cljs.core.nth.call(null,vec__9542__9543,1,null);

return $elem.show(speed__9544,on_finish__9545);
};
var show = function ($elem,var_args){
var p__9541 = null;
if (goog.isDef(var_args)) {
  p__9541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9541);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9546){
var $elem = cljs.core.first(arglist__9546);
var p__9541 = cljs.core.rest(arglist__9546);
return show__delegate.call(this, $elem, p__9541);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9547){
var vec__9548__9549 = p__9547;
var speed__9550 = cljs.core.nth.call(null,vec__9548__9549,0,null);
var on_finish__9551 = cljs.core.nth.call(null,vec__9548__9549,1,null);

return $elem.toggle(speed__9550,on_finish__9551);
};
var toggle = function ($elem,var_args){
var p__9547 = null;
if (goog.isDef(var_args)) {
  p__9547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9547);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9552){
var $elem = cljs.core.first(arglist__9552);
var p__9547 = cljs.core.rest(arglist__9552);
return toggle__delegate.call(this, $elem, p__9547);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9553){
var vec__9554__9555 = p__9553;
var speed__9556 = cljs.core.nth.call(null,vec__9554__9555,0,null);
var on_finish__9557 = cljs.core.nth.call(null,vec__9554__9555,1,null);

return $elem.fadeOut(speed__9556,on_finish__9557);
};
var fade_out = function ($elem,var_args){
var p__9553 = null;
if (goog.isDef(var_args)) {
  p__9553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9553);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9558){
var $elem = cljs.core.first(arglist__9558);
var p__9553 = cljs.core.rest(arglist__9558);
return fade_out__delegate.call(this, $elem, p__9553);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9559){
var vec__9560__9561 = p__9559;
var speed__9562 = cljs.core.nth.call(null,vec__9560__9561,0,null);
var on_finish__9563 = cljs.core.nth.call(null,vec__9560__9561,1,null);

return $elem.fadeIn(speed__9562,on_finish__9563);
};
var fade_in = function ($elem,var_args){
var p__9559 = null;
if (goog.isDef(var_args)) {
  p__9559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9559);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9564){
var $elem = cljs.core.first(arglist__9564);
var p__9559 = cljs.core.rest(arglist__9564);
return fade_in__delegate.call(this, $elem, p__9559);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9565){
var vec__9566__9567 = p__9565;
var speed__9568 = cljs.core.nth.call(null,vec__9566__9567,0,null);
var on_finish__9569 = cljs.core.nth.call(null,vec__9566__9567,1,null);

return $elem.slideUp(speed__9568,on_finish__9569);
};
var slide_up = function ($elem,var_args){
var p__9565 = null;
if (goog.isDef(var_args)) {
  p__9565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9565);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9570){
var $elem = cljs.core.first(arglist__9570);
var p__9565 = cljs.core.rest(arglist__9570);
return slide_up__delegate.call(this, $elem, p__9565);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9571){
var vec__9572__9573 = p__9571;
var speed__9574 = cljs.core.nth.call(null,vec__9572__9573,0,null);
var on_finish__9575 = cljs.core.nth.call(null,vec__9572__9573,1,null);

return $elem.slideDown(speed__9574,on_finish__9575);
};
var slide_down = function ($elem,var_args){
var p__9571 = null;
if (goog.isDef(var_args)) {
  p__9571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9571);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9576){
var $elem = cljs.core.first(arglist__9576);
var p__9571 = cljs.core.rest(arglist__9576);
return slide_down__delegate.call(this, $elem, p__9571);
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
var val__delegate = function ($elem,p__9577){
var vec__9578__9579 = p__9577;
var v__9580 = cljs.core.nth.call(null,vec__9578__9579,0,null);

if(cljs.core.truth_(v__9580))
{return $elem.val(v__9580);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9577 = null;
if (goog.isDef(var_args)) {
  p__9577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9577);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9581){
var $elem = cljs.core.first(arglist__9581);
var p__9577 = cljs.core.rest(arglist__9581);
return val__delegate.call(this, $elem, p__9577);
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
jayq.core.xhr = (function xhr(p__9582,content,callback){
var vec__9583__9584 = p__9582;
var method__9585 = cljs.core.nth.call(null,vec__9583__9584,0,null);
var uri__9586 = cljs.core.nth.call(null,vec__9583__9584,1,null);

var params__9587 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9585)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9586,params__9587);
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
var on__delegate = function ($elem,events,p__9588){
var vec__9589__9590 = p__9588;
var sel__9591 = cljs.core.nth.call(null,vec__9589__9590,0,null);
var data__9592 = cljs.core.nth.call(null,vec__9589__9590,1,null);
var handler__9593 = cljs.core.nth.call(null,vec__9589__9590,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9591),data__9592,handler__9593);
};
var on = function ($elem,events,var_args){
var p__9588 = null;
if (goog.isDef(var_args)) {
  p__9588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9588);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9594){
var $elem = cljs.core.first(arglist__9594);
var events = cljs.core.first(cljs.core.next(arglist__9594));
var p__9588 = cljs.core.rest(cljs.core.next(arglist__9594));
return on__delegate.call(this, $elem, events, p__9588);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9595){
var vec__9596__9597 = p__9595;
var sel__9598 = cljs.core.nth.call(null,vec__9596__9597,0,null);
var data__9599 = cljs.core.nth.call(null,vec__9596__9597,1,null);
var handler__9600 = cljs.core.nth.call(null,vec__9596__9597,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9598),data__9599,handler__9600);
};
var one = function ($elem,events,var_args){
var p__9595 = null;
if (goog.isDef(var_args)) {
  p__9595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9595);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9601){
var $elem = cljs.core.first(arglist__9601);
var events = cljs.core.first(cljs.core.next(arglist__9601));
var p__9595 = cljs.core.rest(cljs.core.next(arglist__9601));
return one__delegate.call(this, $elem, events, p__9595);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9602){
var vec__9603__9604 = p__9602;
var sel__9605 = cljs.core.nth.call(null,vec__9603__9604,0,null);
var handler__9606 = cljs.core.nth.call(null,vec__9603__9604,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9605),handler__9606);
};
var off = function ($elem,events,var_args){
var p__9602 = null;
if (goog.isDef(var_args)) {
  p__9602 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9602);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9607){
var $elem = cljs.core.first(arglist__9607);
var events = cljs.core.first(cljs.core.next(arglist__9607));
var p__9602 = cljs.core.rest(cljs.core.next(arglist__9607));
return off__delegate.call(this, $elem, events, p__9602);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
