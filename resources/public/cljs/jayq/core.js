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
{var temp__3695__auto____9876 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9876))
{var cm__9877 = temp__3695__auto____9876;

return cljs.core.str.call(null,"[crateGroup=",cm__9877,"]");
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
var $__delegate = function (sel,p__9878){
var vec__9879__9880 = p__9878;
var context__9881 = cljs.core.nth.call(null,vec__9879__9880,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9881)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9881);
}
};
var $ = function (sel,var_args){
var p__9878 = null;
if (goog.isDef(var_args)) {
  p__9878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9878);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9882){
var sel = cljs.core.first(arglist__9882);
var p__9878 = cljs.core.rest(arglist__9882);
return $__delegate.call(this, sel, p__9878);
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
var G__9884 = null;
var G__9884__9885 = (function (this$,k){
var or__3548__auto____9883 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9883))
{return or__3548__auto____9883;
} else
{return null;
}
});
var G__9884__9886 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9884 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9884__9885.call(this,this$,k);
case  3 :
return G__9884__9886.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9884;
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
var G__9888 = null;
var G__9888__9889 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9888__9890 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9888 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9888__9889.call(this,_,k);
case  3 :
return G__9888__9890.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9888;
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
var attr__delegate = function ($elem,a,p__9892){
var vec__9893__9894 = p__9892;
var v__9895 = cljs.core.nth.call(null,vec__9893__9894,0,null);

var a__9896 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9895)))
{return $elem.attr(a__9896);
} else
{return $elem.attr(a__9896,v__9895);
}
};
var attr = function ($elem,a,var_args){
var p__9892 = null;
if (goog.isDef(var_args)) {
  p__9892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9892);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9897){
var $elem = cljs.core.first(arglist__9897);
var a = cljs.core.first(cljs.core.next(arglist__9897));
var p__9892 = cljs.core.rest(cljs.core.next(arglist__9897));
return attr__delegate.call(this, $elem, a, p__9892);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9898){
var vec__9899__9900 = p__9898;
var v__9901 = cljs.core.nth.call(null,vec__9899__9900,0,null);

var k__9902 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9901)))
{return $elem.data(k__9902);
} else
{return $elem.data(k__9902,v__9901);
}
};
var data = function ($elem,k,var_args){
var p__9898 = null;
if (goog.isDef(var_args)) {
  p__9898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9898);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9903){
var $elem = cljs.core.first(arglist__9903);
var k = cljs.core.first(cljs.core.next(arglist__9903));
var p__9898 = cljs.core.rest(cljs.core.next(arglist__9903));
return data__delegate.call(this, $elem, k, p__9898);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9904 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9904);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9905 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9905);
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
var hide__delegate = function ($elem,p__9906){
var vec__9907__9908 = p__9906;
var speed__9909 = cljs.core.nth.call(null,vec__9907__9908,0,null);
var on_finish__9910 = cljs.core.nth.call(null,vec__9907__9908,1,null);

return $elem.hide(speed__9909,on_finish__9910);
};
var hide = function ($elem,var_args){
var p__9906 = null;
if (goog.isDef(var_args)) {
  p__9906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9906);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9911){
var $elem = cljs.core.first(arglist__9911);
var p__9906 = cljs.core.rest(arglist__9911);
return hide__delegate.call(this, $elem, p__9906);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9912){
var vec__9913__9914 = p__9912;
var speed__9915 = cljs.core.nth.call(null,vec__9913__9914,0,null);
var on_finish__9916 = cljs.core.nth.call(null,vec__9913__9914,1,null);

return $elem.show(speed__9915,on_finish__9916);
};
var show = function ($elem,var_args){
var p__9912 = null;
if (goog.isDef(var_args)) {
  p__9912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9912);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9917){
var $elem = cljs.core.first(arglist__9917);
var p__9912 = cljs.core.rest(arglist__9917);
return show__delegate.call(this, $elem, p__9912);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9918){
var vec__9919__9920 = p__9918;
var speed__9921 = cljs.core.nth.call(null,vec__9919__9920,0,null);
var on_finish__9922 = cljs.core.nth.call(null,vec__9919__9920,1,null);

return $elem.toggle(speed__9921,on_finish__9922);
};
var toggle = function ($elem,var_args){
var p__9918 = null;
if (goog.isDef(var_args)) {
  p__9918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9918);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9923){
var $elem = cljs.core.first(arglist__9923);
var p__9918 = cljs.core.rest(arglist__9923);
return toggle__delegate.call(this, $elem, p__9918);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9924){
var vec__9925__9926 = p__9924;
var speed__9927 = cljs.core.nth.call(null,vec__9925__9926,0,null);
var on_finish__9928 = cljs.core.nth.call(null,vec__9925__9926,1,null);

return $elem.fadeOut(speed__9927,on_finish__9928);
};
var fade_out = function ($elem,var_args){
var p__9924 = null;
if (goog.isDef(var_args)) {
  p__9924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9924);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9929){
var $elem = cljs.core.first(arglist__9929);
var p__9924 = cljs.core.rest(arglist__9929);
return fade_out__delegate.call(this, $elem, p__9924);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9930){
var vec__9931__9932 = p__9930;
var speed__9933 = cljs.core.nth.call(null,vec__9931__9932,0,null);
var on_finish__9934 = cljs.core.nth.call(null,vec__9931__9932,1,null);

return $elem.fadeIn(speed__9933,on_finish__9934);
};
var fade_in = function ($elem,var_args){
var p__9930 = null;
if (goog.isDef(var_args)) {
  p__9930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9930);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9935){
var $elem = cljs.core.first(arglist__9935);
var p__9930 = cljs.core.rest(arglist__9935);
return fade_in__delegate.call(this, $elem, p__9930);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9936){
var vec__9937__9938 = p__9936;
var speed__9939 = cljs.core.nth.call(null,vec__9937__9938,0,null);
var on_finish__9940 = cljs.core.nth.call(null,vec__9937__9938,1,null);

return $elem.slideUp(speed__9939,on_finish__9940);
};
var slide_up = function ($elem,var_args){
var p__9936 = null;
if (goog.isDef(var_args)) {
  p__9936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9936);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9941){
var $elem = cljs.core.first(arglist__9941);
var p__9936 = cljs.core.rest(arglist__9941);
return slide_up__delegate.call(this, $elem, p__9936);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9942){
var vec__9943__9944 = p__9942;
var speed__9945 = cljs.core.nth.call(null,vec__9943__9944,0,null);
var on_finish__9946 = cljs.core.nth.call(null,vec__9943__9944,1,null);

return $elem.slideDown(speed__9945,on_finish__9946);
};
var slide_down = function ($elem,var_args){
var p__9942 = null;
if (goog.isDef(var_args)) {
  p__9942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9942);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9947){
var $elem = cljs.core.first(arglist__9947);
var p__9942 = cljs.core.rest(arglist__9947);
return slide_down__delegate.call(this, $elem, p__9942);
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
var val__delegate = function ($elem,p__9948){
var vec__9949__9950 = p__9948;
var v__9951 = cljs.core.nth.call(null,vec__9949__9950,0,null);

if(cljs.core.truth_(v__9951))
{return $elem.val(v__9951);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9948 = null;
if (goog.isDef(var_args)) {
  p__9948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9948);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9952){
var $elem = cljs.core.first(arglist__9952);
var p__9948 = cljs.core.rest(arglist__9952);
return val__delegate.call(this, $elem, p__9948);
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
jayq.core.xhr = (function xhr(p__9953,content,callback){
var vec__9954__9955 = p__9953;
var method__9956 = cljs.core.nth.call(null,vec__9954__9955,0,null);
var uri__9957 = cljs.core.nth.call(null,vec__9954__9955,1,null);

var params__9958 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9956)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9957,params__9958);
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
var on__delegate = function ($elem,events,p__9959){
var vec__9960__9961 = p__9959;
var sel__9962 = cljs.core.nth.call(null,vec__9960__9961,0,null);
var data__9963 = cljs.core.nth.call(null,vec__9960__9961,1,null);
var handler__9964 = cljs.core.nth.call(null,vec__9960__9961,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9962),data__9963,handler__9964);
};
var on = function ($elem,events,var_args){
var p__9959 = null;
if (goog.isDef(var_args)) {
  p__9959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9959);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9965){
var $elem = cljs.core.first(arglist__9965);
var events = cljs.core.first(cljs.core.next(arglist__9965));
var p__9959 = cljs.core.rest(cljs.core.next(arglist__9965));
return on__delegate.call(this, $elem, events, p__9959);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9966){
var vec__9967__9968 = p__9966;
var sel__9969 = cljs.core.nth.call(null,vec__9967__9968,0,null);
var data__9970 = cljs.core.nth.call(null,vec__9967__9968,1,null);
var handler__9971 = cljs.core.nth.call(null,vec__9967__9968,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9969),data__9970,handler__9971);
};
var one = function ($elem,events,var_args){
var p__9966 = null;
if (goog.isDef(var_args)) {
  p__9966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9966);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9972){
var $elem = cljs.core.first(arglist__9972);
var events = cljs.core.first(cljs.core.next(arglist__9972));
var p__9966 = cljs.core.rest(cljs.core.next(arglist__9972));
return one__delegate.call(this, $elem, events, p__9966);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9973){
var vec__9974__9975 = p__9973;
var sel__9976 = cljs.core.nth.call(null,vec__9974__9975,0,null);
var handler__9977 = cljs.core.nth.call(null,vec__9974__9975,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9976),handler__9977);
};
var off = function ($elem,events,var_args){
var p__9973 = null;
if (goog.isDef(var_args)) {
  p__9973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9973);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9978){
var $elem = cljs.core.first(arglist__9978);
var events = cljs.core.first(cljs.core.next(arglist__9978));
var p__9973 = cljs.core.rest(cljs.core.next(arglist__9978));
return off__delegate.call(this, $elem, events, p__9973);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
