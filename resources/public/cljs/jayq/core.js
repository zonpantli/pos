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
{var temp__3695__auto____9393 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9393))
{var cm__9394 = temp__3695__auto____9393;

return cljs.core.str.call(null,"[crateGroup=",cm__9394,"]");
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
var $__delegate = function (sel,p__9395){
var vec__9396__9397 = p__9395;
var context__9398 = cljs.core.nth.call(null,vec__9396__9397,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9398)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9398);
}
};
var $ = function (sel,var_args){
var p__9395 = null;
if (goog.isDef(var_args)) {
  p__9395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9395);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9399){
var sel = cljs.core.first(arglist__9399);
var p__9395 = cljs.core.rest(arglist__9399);
return $__delegate.call(this, sel, p__9395);
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
var G__9401 = null;
var G__9401__9402 = (function (this$,k){
var or__3548__auto____9400 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9400))
{return or__3548__auto____9400;
} else
{return null;
}
});
var G__9401__9403 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9401 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9401__9402.call(this,this$,k);
case  3 :
return G__9401__9403.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9401;
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
var G__9405 = null;
var G__9405__9406 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9405__9407 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9405 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9405__9406.call(this,_,k);
case  3 :
return G__9405__9407.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9405;
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
var attr__delegate = function ($elem,a,p__9409){
var vec__9410__9411 = p__9409;
var v__9412 = cljs.core.nth.call(null,vec__9410__9411,0,null);

var a__9413 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9412)))
{return $elem.attr(a__9413);
} else
{return $elem.attr(a__9413,v__9412);
}
};
var attr = function ($elem,a,var_args){
var p__9409 = null;
if (goog.isDef(var_args)) {
  p__9409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9409);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9414){
var $elem = cljs.core.first(arglist__9414);
var a = cljs.core.first(cljs.core.next(arglist__9414));
var p__9409 = cljs.core.rest(cljs.core.next(arglist__9414));
return attr__delegate.call(this, $elem, a, p__9409);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9415){
var vec__9416__9417 = p__9415;
var v__9418 = cljs.core.nth.call(null,vec__9416__9417,0,null);

var k__9419 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9418)))
{return $elem.data(k__9419);
} else
{return $elem.data(k__9419,v__9418);
}
};
var data = function ($elem,k,var_args){
var p__9415 = null;
if (goog.isDef(var_args)) {
  p__9415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9415);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9420){
var $elem = cljs.core.first(arglist__9420);
var k = cljs.core.first(cljs.core.next(arglist__9420));
var p__9415 = cljs.core.rest(cljs.core.next(arglist__9420));
return data__delegate.call(this, $elem, k, p__9415);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9421 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9421);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9422 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9422);
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
var hide__delegate = function ($elem,p__9423){
var vec__9424__9425 = p__9423;
var speed__9426 = cljs.core.nth.call(null,vec__9424__9425,0,null);
var on_finish__9427 = cljs.core.nth.call(null,vec__9424__9425,1,null);

return $elem.hide(speed__9426,on_finish__9427);
};
var hide = function ($elem,var_args){
var p__9423 = null;
if (goog.isDef(var_args)) {
  p__9423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9423);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9428){
var $elem = cljs.core.first(arglist__9428);
var p__9423 = cljs.core.rest(arglist__9428);
return hide__delegate.call(this, $elem, p__9423);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9429){
var vec__9430__9431 = p__9429;
var speed__9432 = cljs.core.nth.call(null,vec__9430__9431,0,null);
var on_finish__9433 = cljs.core.nth.call(null,vec__9430__9431,1,null);

return $elem.show(speed__9432,on_finish__9433);
};
var show = function ($elem,var_args){
var p__9429 = null;
if (goog.isDef(var_args)) {
  p__9429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9429);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9434){
var $elem = cljs.core.first(arglist__9434);
var p__9429 = cljs.core.rest(arglist__9434);
return show__delegate.call(this, $elem, p__9429);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9435){
var vec__9436__9437 = p__9435;
var speed__9438 = cljs.core.nth.call(null,vec__9436__9437,0,null);
var on_finish__9439 = cljs.core.nth.call(null,vec__9436__9437,1,null);

return $elem.toggle(speed__9438,on_finish__9439);
};
var toggle = function ($elem,var_args){
var p__9435 = null;
if (goog.isDef(var_args)) {
  p__9435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9435);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9440){
var $elem = cljs.core.first(arglist__9440);
var p__9435 = cljs.core.rest(arglist__9440);
return toggle__delegate.call(this, $elem, p__9435);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9441){
var vec__9442__9443 = p__9441;
var speed__9444 = cljs.core.nth.call(null,vec__9442__9443,0,null);
var on_finish__9445 = cljs.core.nth.call(null,vec__9442__9443,1,null);

return $elem.fadeOut(speed__9444,on_finish__9445);
};
var fade_out = function ($elem,var_args){
var p__9441 = null;
if (goog.isDef(var_args)) {
  p__9441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9441);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9446){
var $elem = cljs.core.first(arglist__9446);
var p__9441 = cljs.core.rest(arglist__9446);
return fade_out__delegate.call(this, $elem, p__9441);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9447){
var vec__9448__9449 = p__9447;
var speed__9450 = cljs.core.nth.call(null,vec__9448__9449,0,null);
var on_finish__9451 = cljs.core.nth.call(null,vec__9448__9449,1,null);

return $elem.fadeIn(speed__9450,on_finish__9451);
};
var fade_in = function ($elem,var_args){
var p__9447 = null;
if (goog.isDef(var_args)) {
  p__9447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9447);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9452){
var $elem = cljs.core.first(arglist__9452);
var p__9447 = cljs.core.rest(arglist__9452);
return fade_in__delegate.call(this, $elem, p__9447);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9453){
var vec__9454__9455 = p__9453;
var speed__9456 = cljs.core.nth.call(null,vec__9454__9455,0,null);
var on_finish__9457 = cljs.core.nth.call(null,vec__9454__9455,1,null);

return $elem.slideUp(speed__9456,on_finish__9457);
};
var slide_up = function ($elem,var_args){
var p__9453 = null;
if (goog.isDef(var_args)) {
  p__9453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9453);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9458){
var $elem = cljs.core.first(arglist__9458);
var p__9453 = cljs.core.rest(arglist__9458);
return slide_up__delegate.call(this, $elem, p__9453);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9459){
var vec__9460__9461 = p__9459;
var speed__9462 = cljs.core.nth.call(null,vec__9460__9461,0,null);
var on_finish__9463 = cljs.core.nth.call(null,vec__9460__9461,1,null);

return $elem.slideDown(speed__9462,on_finish__9463);
};
var slide_down = function ($elem,var_args){
var p__9459 = null;
if (goog.isDef(var_args)) {
  p__9459 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9459);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9464){
var $elem = cljs.core.first(arglist__9464);
var p__9459 = cljs.core.rest(arglist__9464);
return slide_down__delegate.call(this, $elem, p__9459);
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
var val__delegate = function ($elem,p__9465){
var vec__9466__9467 = p__9465;
var v__9468 = cljs.core.nth.call(null,vec__9466__9467,0,null);

if(cljs.core.truth_(v__9468))
{return $elem.val(v__9468);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9465 = null;
if (goog.isDef(var_args)) {
  p__9465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9465);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9469){
var $elem = cljs.core.first(arglist__9469);
var p__9465 = cljs.core.rest(arglist__9469);
return val__delegate.call(this, $elem, p__9465);
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
jayq.core.xhr = (function xhr(p__9470,content,callback){
var vec__9471__9472 = p__9470;
var method__9473 = cljs.core.nth.call(null,vec__9471__9472,0,null);
var uri__9474 = cljs.core.nth.call(null,vec__9471__9472,1,null);

var params__9475 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9473)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9474,params__9475);
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
var on__delegate = function ($elem,events,p__9476){
var vec__9477__9478 = p__9476;
var sel__9479 = cljs.core.nth.call(null,vec__9477__9478,0,null);
var data__9480 = cljs.core.nth.call(null,vec__9477__9478,1,null);
var handler__9481 = cljs.core.nth.call(null,vec__9477__9478,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9479),data__9480,handler__9481);
};
var on = function ($elem,events,var_args){
var p__9476 = null;
if (goog.isDef(var_args)) {
  p__9476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9476);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9482){
var $elem = cljs.core.first(arglist__9482);
var events = cljs.core.first(cljs.core.next(arglist__9482));
var p__9476 = cljs.core.rest(cljs.core.next(arglist__9482));
return on__delegate.call(this, $elem, events, p__9476);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9483){
var vec__9484__9485 = p__9483;
var sel__9486 = cljs.core.nth.call(null,vec__9484__9485,0,null);
var data__9487 = cljs.core.nth.call(null,vec__9484__9485,1,null);
var handler__9488 = cljs.core.nth.call(null,vec__9484__9485,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9486),data__9487,handler__9488);
};
var one = function ($elem,events,var_args){
var p__9483 = null;
if (goog.isDef(var_args)) {
  p__9483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9483);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9489){
var $elem = cljs.core.first(arglist__9489);
var events = cljs.core.first(cljs.core.next(arglist__9489));
var p__9483 = cljs.core.rest(cljs.core.next(arglist__9489));
return one__delegate.call(this, $elem, events, p__9483);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9490){
var vec__9491__9492 = p__9490;
var sel__9493 = cljs.core.nth.call(null,vec__9491__9492,0,null);
var handler__9494 = cljs.core.nth.call(null,vec__9491__9492,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9493),handler__9494);
};
var off = function ($elem,events,var_args){
var p__9490 = null;
if (goog.isDef(var_args)) {
  p__9490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9490);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9495){
var $elem = cljs.core.first(arglist__9495);
var events = cljs.core.first(cljs.core.next(arglist__9495));
var p__9490 = cljs.core.rest(cljs.core.next(arglist__9495));
return off__delegate.call(this, $elem, events, p__9490);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
