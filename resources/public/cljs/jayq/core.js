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
{var temp__3695__auto____8925 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____8925))
{var cm__8926 = temp__3695__auto____8925;

return cljs.core.str.call(null,"[crateGroup=",cm__8926,"]");
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
var $__delegate = function (sel,p__8927){
var vec__8928__8929 = p__8927;
var context__8930 = cljs.core.nth.call(null,vec__8928__8929,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__8930)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__8930);
}
};
var $ = function (sel,var_args){
var p__8927 = null;
if (goog.isDef(var_args)) {
  p__8927 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__8927);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__8931){
var sel = cljs.core.first(arglist__8931);
var p__8927 = cljs.core.rest(arglist__8931);
return $__delegate.call(this, sel, p__8927);
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
var G__8933 = null;
var G__8933__8934 = (function (this$,k){
var or__3548__auto____8932 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____8932))
{return or__3548__auto____8932;
} else
{return null;
}
});
var G__8933__8935 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__8933 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__8933__8934.call(this,this$,k);
case  3 :
return G__8933__8935.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8933;
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
var G__8937 = null;
var G__8937__8938 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8937__8939 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8937 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8937__8938.call(this,_,k);
case  3 :
return G__8937__8939.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8937;
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
var attr__delegate = function ($elem,a,p__8941){
var vec__8942__8943 = p__8941;
var v__8944 = cljs.core.nth.call(null,vec__8942__8943,0,null);

var a__8945 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__8944)))
{return $elem.attr(a__8945);
} else
{return $elem.attr(a__8945,v__8944);
}
};
var attr = function ($elem,a,var_args){
var p__8941 = null;
if (goog.isDef(var_args)) {
  p__8941 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__8941);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__8946){
var $elem = cljs.core.first(arglist__8946);
var a = cljs.core.first(cljs.core.next(arglist__8946));
var p__8941 = cljs.core.rest(cljs.core.next(arglist__8946));
return attr__delegate.call(this, $elem, a, p__8941);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__8947){
var vec__8948__8949 = p__8947;
var v__8950 = cljs.core.nth.call(null,vec__8948__8949,0,null);

var k__8951 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__8950)))
{return $elem.data(k__8951);
} else
{return $elem.data(k__8951,v__8950);
}
};
var data = function ($elem,k,var_args){
var p__8947 = null;
if (goog.isDef(var_args)) {
  p__8947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__8947);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__8952){
var $elem = cljs.core.first(arglist__8952);
var k = cljs.core.first(cljs.core.next(arglist__8952));
var p__8947 = cljs.core.rest(cljs.core.next(arglist__8952));
return data__delegate.call(this, $elem, k, p__8947);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__8953 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__8953);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__8954 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__8954);
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
var hide__delegate = function ($elem,p__8955){
var vec__8956__8957 = p__8955;
var speed__8958 = cljs.core.nth.call(null,vec__8956__8957,0,null);
var on_finish__8959 = cljs.core.nth.call(null,vec__8956__8957,1,null);

return $elem.hide(speed__8958,on_finish__8959);
};
var hide = function ($elem,var_args){
var p__8955 = null;
if (goog.isDef(var_args)) {
  p__8955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__8955);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__8960){
var $elem = cljs.core.first(arglist__8960);
var p__8955 = cljs.core.rest(arglist__8960);
return hide__delegate.call(this, $elem, p__8955);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__8961){
var vec__8962__8963 = p__8961;
var speed__8964 = cljs.core.nth.call(null,vec__8962__8963,0,null);
var on_finish__8965 = cljs.core.nth.call(null,vec__8962__8963,1,null);

return $elem.show(speed__8964,on_finish__8965);
};
var show = function ($elem,var_args){
var p__8961 = null;
if (goog.isDef(var_args)) {
  p__8961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__8961);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__8966){
var $elem = cljs.core.first(arglist__8966);
var p__8961 = cljs.core.rest(arglist__8966);
return show__delegate.call(this, $elem, p__8961);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__8967){
var vec__8968__8969 = p__8967;
var speed__8970 = cljs.core.nth.call(null,vec__8968__8969,0,null);
var on_finish__8971 = cljs.core.nth.call(null,vec__8968__8969,1,null);

return $elem.toggle(speed__8970,on_finish__8971);
};
var toggle = function ($elem,var_args){
var p__8967 = null;
if (goog.isDef(var_args)) {
  p__8967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__8967);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__8972){
var $elem = cljs.core.first(arglist__8972);
var p__8967 = cljs.core.rest(arglist__8972);
return toggle__delegate.call(this, $elem, p__8967);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__8973){
var vec__8974__8975 = p__8973;
var speed__8976 = cljs.core.nth.call(null,vec__8974__8975,0,null);
var on_finish__8977 = cljs.core.nth.call(null,vec__8974__8975,1,null);

return $elem.fadeOut(speed__8976,on_finish__8977);
};
var fade_out = function ($elem,var_args){
var p__8973 = null;
if (goog.isDef(var_args)) {
  p__8973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__8973);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__8978){
var $elem = cljs.core.first(arglist__8978);
var p__8973 = cljs.core.rest(arglist__8978);
return fade_out__delegate.call(this, $elem, p__8973);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__8979){
var vec__8980__8981 = p__8979;
var speed__8982 = cljs.core.nth.call(null,vec__8980__8981,0,null);
var on_finish__8983 = cljs.core.nth.call(null,vec__8980__8981,1,null);

return $elem.fadeIn(speed__8982,on_finish__8983);
};
var fade_in = function ($elem,var_args){
var p__8979 = null;
if (goog.isDef(var_args)) {
  p__8979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__8979);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__8984){
var $elem = cljs.core.first(arglist__8984);
var p__8979 = cljs.core.rest(arglist__8984);
return fade_in__delegate.call(this, $elem, p__8979);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__8985){
var vec__8986__8987 = p__8985;
var speed__8988 = cljs.core.nth.call(null,vec__8986__8987,0,null);
var on_finish__8989 = cljs.core.nth.call(null,vec__8986__8987,1,null);

return $elem.slideUp(speed__8988,on_finish__8989);
};
var slide_up = function ($elem,var_args){
var p__8985 = null;
if (goog.isDef(var_args)) {
  p__8985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__8985);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__8990){
var $elem = cljs.core.first(arglist__8990);
var p__8985 = cljs.core.rest(arglist__8990);
return slide_up__delegate.call(this, $elem, p__8985);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__8991){
var vec__8992__8993 = p__8991;
var speed__8994 = cljs.core.nth.call(null,vec__8992__8993,0,null);
var on_finish__8995 = cljs.core.nth.call(null,vec__8992__8993,1,null);

return $elem.slideDown(speed__8994,on_finish__8995);
};
var slide_down = function ($elem,var_args){
var p__8991 = null;
if (goog.isDef(var_args)) {
  p__8991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__8991);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__8996){
var $elem = cljs.core.first(arglist__8996);
var p__8991 = cljs.core.rest(arglist__8996);
return slide_down__delegate.call(this, $elem, p__8991);
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
var val__delegate = function ($elem,p__8997){
var vec__8998__8999 = p__8997;
var v__9000 = cljs.core.nth.call(null,vec__8998__8999,0,null);

if(cljs.core.truth_(v__9000))
{return $elem.val(v__9000);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__8997 = null;
if (goog.isDef(var_args)) {
  p__8997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__8997);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9001){
var $elem = cljs.core.first(arglist__9001);
var p__8997 = cljs.core.rest(arglist__9001);
return val__delegate.call(this, $elem, p__8997);
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
jayq.core.xhr = (function xhr(p__9002,content,callback){
var vec__9003__9004 = p__9002;
var method__9005 = cljs.core.nth.call(null,vec__9003__9004,0,null);
var uri__9006 = cljs.core.nth.call(null,vec__9003__9004,1,null);

var params__9007 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9005)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9006,params__9007);
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
var on__delegate = function ($elem,events,p__9008){
var vec__9009__9010 = p__9008;
var sel__9011 = cljs.core.nth.call(null,vec__9009__9010,0,null);
var data__9012 = cljs.core.nth.call(null,vec__9009__9010,1,null);
var handler__9013 = cljs.core.nth.call(null,vec__9009__9010,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9011),data__9012,handler__9013);
};
var on = function ($elem,events,var_args){
var p__9008 = null;
if (goog.isDef(var_args)) {
  p__9008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9008);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9014){
var $elem = cljs.core.first(arglist__9014);
var events = cljs.core.first(cljs.core.next(arglist__9014));
var p__9008 = cljs.core.rest(cljs.core.next(arglist__9014));
return on__delegate.call(this, $elem, events, p__9008);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9015){
var vec__9016__9017 = p__9015;
var sel__9018 = cljs.core.nth.call(null,vec__9016__9017,0,null);
var data__9019 = cljs.core.nth.call(null,vec__9016__9017,1,null);
var handler__9020 = cljs.core.nth.call(null,vec__9016__9017,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9018),data__9019,handler__9020);
};
var one = function ($elem,events,var_args){
var p__9015 = null;
if (goog.isDef(var_args)) {
  p__9015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9015);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9021){
var $elem = cljs.core.first(arglist__9021);
var events = cljs.core.first(cljs.core.next(arglist__9021));
var p__9015 = cljs.core.rest(cljs.core.next(arglist__9021));
return one__delegate.call(this, $elem, events, p__9015);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9022){
var vec__9023__9024 = p__9022;
var sel__9025 = cljs.core.nth.call(null,vec__9023__9024,0,null);
var handler__9026 = cljs.core.nth.call(null,vec__9023__9024,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9025),handler__9026);
};
var off = function ($elem,events,var_args){
var p__9022 = null;
if (goog.isDef(var_args)) {
  p__9022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9022);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9027){
var $elem = cljs.core.first(arglist__9027);
var events = cljs.core.first(cljs.core.next(arglist__9027));
var p__9022 = cljs.core.rest(cljs.core.next(arglist__9027));
return off__delegate.call(this, $elem, events, p__9022);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
