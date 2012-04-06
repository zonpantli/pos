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
{var temp__3695__auto____9010 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9010))
{var cm__9011 = temp__3695__auto____9010;

return cljs.core.str.call(null,"[crateGroup=",cm__9011,"]");
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
var $__delegate = function (sel,p__9012){
var vec__9013__9014 = p__9012;
var context__9015 = cljs.core.nth.call(null,vec__9013__9014,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9015)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9015);
}
};
var $ = function (sel,var_args){
var p__9012 = null;
if (goog.isDef(var_args)) {
  p__9012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9012);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9016){
var sel = cljs.core.first(arglist__9016);
var p__9012 = cljs.core.rest(arglist__9016);
return $__delegate.call(this, sel, p__9012);
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
var G__9018 = null;
var G__9018__9019 = (function (this$,k){
var or__3548__auto____9017 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9017))
{return or__3548__auto____9017;
} else
{return null;
}
});
var G__9018__9020 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9018 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9018__9019.call(this,this$,k);
case  3 :
return G__9018__9020.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9018;
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
var G__9022 = null;
var G__9022__9023 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9022__9024 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9022 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9022__9023.call(this,_,k);
case  3 :
return G__9022__9024.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9022;
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
var attr__delegate = function ($elem,a,p__9026){
var vec__9027__9028 = p__9026;
var v__9029 = cljs.core.nth.call(null,vec__9027__9028,0,null);

var a__9030 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9029)))
{return $elem.attr(a__9030);
} else
{return $elem.attr(a__9030,v__9029);
}
};
var attr = function ($elem,a,var_args){
var p__9026 = null;
if (goog.isDef(var_args)) {
  p__9026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9026);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9031){
var $elem = cljs.core.first(arglist__9031);
var a = cljs.core.first(cljs.core.next(arglist__9031));
var p__9026 = cljs.core.rest(cljs.core.next(arglist__9031));
return attr__delegate.call(this, $elem, a, p__9026);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9032){
var vec__9033__9034 = p__9032;
var v__9035 = cljs.core.nth.call(null,vec__9033__9034,0,null);

var k__9036 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9035)))
{return $elem.data(k__9036);
} else
{return $elem.data(k__9036,v__9035);
}
};
var data = function ($elem,k,var_args){
var p__9032 = null;
if (goog.isDef(var_args)) {
  p__9032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9032);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9037){
var $elem = cljs.core.first(arglist__9037);
var k = cljs.core.first(cljs.core.next(arglist__9037));
var p__9032 = cljs.core.rest(cljs.core.next(arglist__9037));
return data__delegate.call(this, $elem, k, p__9032);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9038 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9038);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9039 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9039);
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
var hide__delegate = function ($elem,p__9040){
var vec__9041__9042 = p__9040;
var speed__9043 = cljs.core.nth.call(null,vec__9041__9042,0,null);
var on_finish__9044 = cljs.core.nth.call(null,vec__9041__9042,1,null);

return $elem.hide(speed__9043,on_finish__9044);
};
var hide = function ($elem,var_args){
var p__9040 = null;
if (goog.isDef(var_args)) {
  p__9040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9040);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9045){
var $elem = cljs.core.first(arglist__9045);
var p__9040 = cljs.core.rest(arglist__9045);
return hide__delegate.call(this, $elem, p__9040);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9046){
var vec__9047__9048 = p__9046;
var speed__9049 = cljs.core.nth.call(null,vec__9047__9048,0,null);
var on_finish__9050 = cljs.core.nth.call(null,vec__9047__9048,1,null);

return $elem.show(speed__9049,on_finish__9050);
};
var show = function ($elem,var_args){
var p__9046 = null;
if (goog.isDef(var_args)) {
  p__9046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9046);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9051){
var $elem = cljs.core.first(arglist__9051);
var p__9046 = cljs.core.rest(arglist__9051);
return show__delegate.call(this, $elem, p__9046);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9052){
var vec__9053__9054 = p__9052;
var speed__9055 = cljs.core.nth.call(null,vec__9053__9054,0,null);
var on_finish__9056 = cljs.core.nth.call(null,vec__9053__9054,1,null);

return $elem.toggle(speed__9055,on_finish__9056);
};
var toggle = function ($elem,var_args){
var p__9052 = null;
if (goog.isDef(var_args)) {
  p__9052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9052);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9057){
var $elem = cljs.core.first(arglist__9057);
var p__9052 = cljs.core.rest(arglist__9057);
return toggle__delegate.call(this, $elem, p__9052);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9058){
var vec__9059__9060 = p__9058;
var speed__9061 = cljs.core.nth.call(null,vec__9059__9060,0,null);
var on_finish__9062 = cljs.core.nth.call(null,vec__9059__9060,1,null);

return $elem.fadeOut(speed__9061,on_finish__9062);
};
var fade_out = function ($elem,var_args){
var p__9058 = null;
if (goog.isDef(var_args)) {
  p__9058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9058);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9063){
var $elem = cljs.core.first(arglist__9063);
var p__9058 = cljs.core.rest(arglist__9063);
return fade_out__delegate.call(this, $elem, p__9058);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9064){
var vec__9065__9066 = p__9064;
var speed__9067 = cljs.core.nth.call(null,vec__9065__9066,0,null);
var on_finish__9068 = cljs.core.nth.call(null,vec__9065__9066,1,null);

return $elem.fadeIn(speed__9067,on_finish__9068);
};
var fade_in = function ($elem,var_args){
var p__9064 = null;
if (goog.isDef(var_args)) {
  p__9064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9064);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9069){
var $elem = cljs.core.first(arglist__9069);
var p__9064 = cljs.core.rest(arglist__9069);
return fade_in__delegate.call(this, $elem, p__9064);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9070){
var vec__9071__9072 = p__9070;
var speed__9073 = cljs.core.nth.call(null,vec__9071__9072,0,null);
var on_finish__9074 = cljs.core.nth.call(null,vec__9071__9072,1,null);

return $elem.slideUp(speed__9073,on_finish__9074);
};
var slide_up = function ($elem,var_args){
var p__9070 = null;
if (goog.isDef(var_args)) {
  p__9070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9070);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9075){
var $elem = cljs.core.first(arglist__9075);
var p__9070 = cljs.core.rest(arglist__9075);
return slide_up__delegate.call(this, $elem, p__9070);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9076){
var vec__9077__9078 = p__9076;
var speed__9079 = cljs.core.nth.call(null,vec__9077__9078,0,null);
var on_finish__9080 = cljs.core.nth.call(null,vec__9077__9078,1,null);

return $elem.slideDown(speed__9079,on_finish__9080);
};
var slide_down = function ($elem,var_args){
var p__9076 = null;
if (goog.isDef(var_args)) {
  p__9076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9076);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9081){
var $elem = cljs.core.first(arglist__9081);
var p__9076 = cljs.core.rest(arglist__9081);
return slide_down__delegate.call(this, $elem, p__9076);
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
var val__delegate = function ($elem,p__9082){
var vec__9083__9084 = p__9082;
var v__9085 = cljs.core.nth.call(null,vec__9083__9084,0,null);

if(cljs.core.truth_(v__9085))
{return $elem.val(v__9085);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9082 = null;
if (goog.isDef(var_args)) {
  p__9082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9082);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9086){
var $elem = cljs.core.first(arglist__9086);
var p__9082 = cljs.core.rest(arglist__9086);
return val__delegate.call(this, $elem, p__9082);
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
jayq.core.xhr = (function xhr(p__9087,content,callback){
var vec__9088__9089 = p__9087;
var method__9090 = cljs.core.nth.call(null,vec__9088__9089,0,null);
var uri__9091 = cljs.core.nth.call(null,vec__9088__9089,1,null);

var params__9092 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9090)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9091,params__9092);
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
var on__delegate = function ($elem,events,p__9093){
var vec__9094__9095 = p__9093;
var sel__9096 = cljs.core.nth.call(null,vec__9094__9095,0,null);
var data__9097 = cljs.core.nth.call(null,vec__9094__9095,1,null);
var handler__9098 = cljs.core.nth.call(null,vec__9094__9095,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9096),data__9097,handler__9098);
};
var on = function ($elem,events,var_args){
var p__9093 = null;
if (goog.isDef(var_args)) {
  p__9093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9093);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9099){
var $elem = cljs.core.first(arglist__9099);
var events = cljs.core.first(cljs.core.next(arglist__9099));
var p__9093 = cljs.core.rest(cljs.core.next(arglist__9099));
return on__delegate.call(this, $elem, events, p__9093);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9100){
var vec__9101__9102 = p__9100;
var sel__9103 = cljs.core.nth.call(null,vec__9101__9102,0,null);
var data__9104 = cljs.core.nth.call(null,vec__9101__9102,1,null);
var handler__9105 = cljs.core.nth.call(null,vec__9101__9102,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9103),data__9104,handler__9105);
};
var one = function ($elem,events,var_args){
var p__9100 = null;
if (goog.isDef(var_args)) {
  p__9100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9100);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9106){
var $elem = cljs.core.first(arglist__9106);
var events = cljs.core.first(cljs.core.next(arglist__9106));
var p__9100 = cljs.core.rest(cljs.core.next(arglist__9106));
return one__delegate.call(this, $elem, events, p__9100);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9107){
var vec__9108__9109 = p__9107;
var sel__9110 = cljs.core.nth.call(null,vec__9108__9109,0,null);
var handler__9111 = cljs.core.nth.call(null,vec__9108__9109,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9110),handler__9111);
};
var off = function ($elem,events,var_args){
var p__9107 = null;
if (goog.isDef(var_args)) {
  p__9107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9107);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9112){
var $elem = cljs.core.first(arglist__9112);
var events = cljs.core.first(cljs.core.next(arglist__9112));
var p__9107 = cljs.core.rest(cljs.core.next(arglist__9112));
return off__delegate.call(this, $elem, events, p__9107);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
