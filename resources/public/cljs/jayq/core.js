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
{var temp__3695__auto____9353 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9353))
{var cm__9354 = temp__3695__auto____9353;

return cljs.core.str.call(null,"[crateGroup=",cm__9354,"]");
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
var $__delegate = function (sel,p__9355){
var vec__9356__9357 = p__9355;
var context__9358 = cljs.core.nth.call(null,vec__9356__9357,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9358)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9358);
}
};
var $ = function (sel,var_args){
var p__9355 = null;
if (goog.isDef(var_args)) {
  p__9355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9355);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9359){
var sel = cljs.core.first(arglist__9359);
var p__9355 = cljs.core.rest(arglist__9359);
return $__delegate.call(this, sel, p__9355);
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
var G__9361 = null;
var G__9361__9362 = (function (this$,k){
var or__3548__auto____9360 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9360))
{return or__3548__auto____9360;
} else
{return null;
}
});
var G__9361__9363 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9361 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9361__9362.call(this,this$,k);
case  3 :
return G__9361__9363.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9361;
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
var G__9365 = null;
var G__9365__9366 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9365__9367 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9365 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9365__9366.call(this,_,k);
case  3 :
return G__9365__9367.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9365;
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
var attr__delegate = function ($elem,a,p__9369){
var vec__9370__9371 = p__9369;
var v__9372 = cljs.core.nth.call(null,vec__9370__9371,0,null);

var a__9373 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9372)))
{return $elem.attr(a__9373);
} else
{return $elem.attr(a__9373,v__9372);
}
};
var attr = function ($elem,a,var_args){
var p__9369 = null;
if (goog.isDef(var_args)) {
  p__9369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9369);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9374){
var $elem = cljs.core.first(arglist__9374);
var a = cljs.core.first(cljs.core.next(arglist__9374));
var p__9369 = cljs.core.rest(cljs.core.next(arglist__9374));
return attr__delegate.call(this, $elem, a, p__9369);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9375){
var vec__9376__9377 = p__9375;
var v__9378 = cljs.core.nth.call(null,vec__9376__9377,0,null);

var k__9379 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9378)))
{return $elem.data(k__9379);
} else
{return $elem.data(k__9379,v__9378);
}
};
var data = function ($elem,k,var_args){
var p__9375 = null;
if (goog.isDef(var_args)) {
  p__9375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9375);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9380){
var $elem = cljs.core.first(arglist__9380);
var k = cljs.core.first(cljs.core.next(arglist__9380));
var p__9375 = cljs.core.rest(cljs.core.next(arglist__9380));
return data__delegate.call(this, $elem, k, p__9375);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9381 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9381);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9382 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9382);
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
var hide__delegate = function ($elem,p__9383){
var vec__9384__9385 = p__9383;
var speed__9386 = cljs.core.nth.call(null,vec__9384__9385,0,null);
var on_finish__9387 = cljs.core.nth.call(null,vec__9384__9385,1,null);

return $elem.hide(speed__9386,on_finish__9387);
};
var hide = function ($elem,var_args){
var p__9383 = null;
if (goog.isDef(var_args)) {
  p__9383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9383);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9388){
var $elem = cljs.core.first(arglist__9388);
var p__9383 = cljs.core.rest(arglist__9388);
return hide__delegate.call(this, $elem, p__9383);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9389){
var vec__9390__9391 = p__9389;
var speed__9392 = cljs.core.nth.call(null,vec__9390__9391,0,null);
var on_finish__9393 = cljs.core.nth.call(null,vec__9390__9391,1,null);

return $elem.show(speed__9392,on_finish__9393);
};
var show = function ($elem,var_args){
var p__9389 = null;
if (goog.isDef(var_args)) {
  p__9389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9389);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9394){
var $elem = cljs.core.first(arglist__9394);
var p__9389 = cljs.core.rest(arglist__9394);
return show__delegate.call(this, $elem, p__9389);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9395){
var vec__9396__9397 = p__9395;
var speed__9398 = cljs.core.nth.call(null,vec__9396__9397,0,null);
var on_finish__9399 = cljs.core.nth.call(null,vec__9396__9397,1,null);

return $elem.toggle(speed__9398,on_finish__9399);
};
var toggle = function ($elem,var_args){
var p__9395 = null;
if (goog.isDef(var_args)) {
  p__9395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9395);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9400){
var $elem = cljs.core.first(arglist__9400);
var p__9395 = cljs.core.rest(arglist__9400);
return toggle__delegate.call(this, $elem, p__9395);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9401){
var vec__9402__9403 = p__9401;
var speed__9404 = cljs.core.nth.call(null,vec__9402__9403,0,null);
var on_finish__9405 = cljs.core.nth.call(null,vec__9402__9403,1,null);

return $elem.fadeOut(speed__9404,on_finish__9405);
};
var fade_out = function ($elem,var_args){
var p__9401 = null;
if (goog.isDef(var_args)) {
  p__9401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9401);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9406){
var $elem = cljs.core.first(arglist__9406);
var p__9401 = cljs.core.rest(arglist__9406);
return fade_out__delegate.call(this, $elem, p__9401);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9407){
var vec__9408__9409 = p__9407;
var speed__9410 = cljs.core.nth.call(null,vec__9408__9409,0,null);
var on_finish__9411 = cljs.core.nth.call(null,vec__9408__9409,1,null);

return $elem.fadeIn(speed__9410,on_finish__9411);
};
var fade_in = function ($elem,var_args){
var p__9407 = null;
if (goog.isDef(var_args)) {
  p__9407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9407);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9412){
var $elem = cljs.core.first(arglist__9412);
var p__9407 = cljs.core.rest(arglist__9412);
return fade_in__delegate.call(this, $elem, p__9407);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9413){
var vec__9414__9415 = p__9413;
var speed__9416 = cljs.core.nth.call(null,vec__9414__9415,0,null);
var on_finish__9417 = cljs.core.nth.call(null,vec__9414__9415,1,null);

return $elem.slideUp(speed__9416,on_finish__9417);
};
var slide_up = function ($elem,var_args){
var p__9413 = null;
if (goog.isDef(var_args)) {
  p__9413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9413);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9418){
var $elem = cljs.core.first(arglist__9418);
var p__9413 = cljs.core.rest(arglist__9418);
return slide_up__delegate.call(this, $elem, p__9413);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9419){
var vec__9420__9421 = p__9419;
var speed__9422 = cljs.core.nth.call(null,vec__9420__9421,0,null);
var on_finish__9423 = cljs.core.nth.call(null,vec__9420__9421,1,null);

return $elem.slideDown(speed__9422,on_finish__9423);
};
var slide_down = function ($elem,var_args){
var p__9419 = null;
if (goog.isDef(var_args)) {
  p__9419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9419);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9424){
var $elem = cljs.core.first(arglist__9424);
var p__9419 = cljs.core.rest(arglist__9424);
return slide_down__delegate.call(this, $elem, p__9419);
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
var val__delegate = function ($elem,p__9425){
var vec__9426__9427 = p__9425;
var v__9428 = cljs.core.nth.call(null,vec__9426__9427,0,null);

if(cljs.core.truth_(v__9428))
{return $elem.val(v__9428);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9425 = null;
if (goog.isDef(var_args)) {
  p__9425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9425);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9429){
var $elem = cljs.core.first(arglist__9429);
var p__9425 = cljs.core.rest(arglist__9429);
return val__delegate.call(this, $elem, p__9425);
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
jayq.core.xhr = (function xhr(p__9430,content,callback){
var vec__9431__9432 = p__9430;
var method__9433 = cljs.core.nth.call(null,vec__9431__9432,0,null);
var uri__9434 = cljs.core.nth.call(null,vec__9431__9432,1,null);

var params__9435 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9433)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9434,params__9435);
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
var on__delegate = function ($elem,events,p__9436){
var vec__9437__9438 = p__9436;
var sel__9439 = cljs.core.nth.call(null,vec__9437__9438,0,null);
var data__9440 = cljs.core.nth.call(null,vec__9437__9438,1,null);
var handler__9441 = cljs.core.nth.call(null,vec__9437__9438,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9439),data__9440,handler__9441);
};
var on = function ($elem,events,var_args){
var p__9436 = null;
if (goog.isDef(var_args)) {
  p__9436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9436);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9442){
var $elem = cljs.core.first(arglist__9442);
var events = cljs.core.first(cljs.core.next(arglist__9442));
var p__9436 = cljs.core.rest(cljs.core.next(arglist__9442));
return on__delegate.call(this, $elem, events, p__9436);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9443){
var vec__9444__9445 = p__9443;
var sel__9446 = cljs.core.nth.call(null,vec__9444__9445,0,null);
var data__9447 = cljs.core.nth.call(null,vec__9444__9445,1,null);
var handler__9448 = cljs.core.nth.call(null,vec__9444__9445,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9446),data__9447,handler__9448);
};
var one = function ($elem,events,var_args){
var p__9443 = null;
if (goog.isDef(var_args)) {
  p__9443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9443);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9449){
var $elem = cljs.core.first(arglist__9449);
var events = cljs.core.first(cljs.core.next(arglist__9449));
var p__9443 = cljs.core.rest(cljs.core.next(arglist__9449));
return one__delegate.call(this, $elem, events, p__9443);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9450){
var vec__9451__9452 = p__9450;
var sel__9453 = cljs.core.nth.call(null,vec__9451__9452,0,null);
var handler__9454 = cljs.core.nth.call(null,vec__9451__9452,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9453),handler__9454);
};
var off = function ($elem,events,var_args){
var p__9450 = null;
if (goog.isDef(var_args)) {
  p__9450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9450);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9455){
var $elem = cljs.core.first(arglist__9455);
var events = cljs.core.first(cljs.core.next(arglist__9455));
var p__9450 = cljs.core.rest(cljs.core.next(arglist__9455));
return off__delegate.call(this, $elem, events, p__9450);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
