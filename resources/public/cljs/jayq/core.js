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
{var temp__3695__auto____9833 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____9833))
{var cm__9834 = temp__3695__auto____9833;

return cljs.core.str.call(null,"[crateGroup=",cm__9834,"]");
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
var $__delegate = function (sel,p__9835){
var vec__9836__9837 = p__9835;
var context__9838 = cljs.core.nth.call(null,vec__9836__9837,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__9838)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__9838);
}
};
var $ = function (sel,var_args){
var p__9835 = null;
if (goog.isDef(var_args)) {
  p__9835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__9835);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__9839){
var sel = cljs.core.first(arglist__9839);
var p__9835 = cljs.core.rest(arglist__9839);
return $__delegate.call(this, sel, p__9835);
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
var G__9841 = null;
var G__9841__9842 = (function (this$,k){
var or__3548__auto____9840 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____9840))
{return or__3548__auto____9840;
} else
{return null;
}
});
var G__9841__9843 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__9841 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__9841__9842.call(this,this$,k);
case  3 :
return G__9841__9843.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9841;
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
var G__9845 = null;
var G__9845__9846 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__9845__9847 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__9845 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__9845__9846.call(this,_,k);
case  3 :
return G__9845__9847.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9845;
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
var attr__delegate = function ($elem,a,p__9849){
var vec__9850__9851 = p__9849;
var v__9852 = cljs.core.nth.call(null,vec__9850__9851,0,null);

var a__9853 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__9852)))
{return $elem.attr(a__9853);
} else
{return $elem.attr(a__9853,v__9852);
}
};
var attr = function ($elem,a,var_args){
var p__9849 = null;
if (goog.isDef(var_args)) {
  p__9849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__9849);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__9854){
var $elem = cljs.core.first(arglist__9854);
var a = cljs.core.first(cljs.core.next(arglist__9854));
var p__9849 = cljs.core.rest(cljs.core.next(arglist__9854));
return attr__delegate.call(this, $elem, a, p__9849);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__9855){
var vec__9856__9857 = p__9855;
var v__9858 = cljs.core.nth.call(null,vec__9856__9857,0,null);

var k__9859 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__9858)))
{return $elem.data(k__9859);
} else
{return $elem.data(k__9859,v__9858);
}
};
var data = function ($elem,k,var_args){
var p__9855 = null;
if (goog.isDef(var_args)) {
  p__9855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__9855);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__9860){
var $elem = cljs.core.first(arglist__9860);
var k = cljs.core.first(cljs.core.next(arglist__9860));
var p__9855 = cljs.core.rest(cljs.core.next(arglist__9860));
return data__delegate.call(this, $elem, k, p__9855);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__9861 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__9861);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__9862 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__9862);
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
var hide__delegate = function ($elem,p__9863){
var vec__9864__9865 = p__9863;
var speed__9866 = cljs.core.nth.call(null,vec__9864__9865,0,null);
var on_finish__9867 = cljs.core.nth.call(null,vec__9864__9865,1,null);

return $elem.hide(speed__9866,on_finish__9867);
};
var hide = function ($elem,var_args){
var p__9863 = null;
if (goog.isDef(var_args)) {
  p__9863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__9863);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__9868){
var $elem = cljs.core.first(arglist__9868);
var p__9863 = cljs.core.rest(arglist__9868);
return hide__delegate.call(this, $elem, p__9863);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__9869){
var vec__9870__9871 = p__9869;
var speed__9872 = cljs.core.nth.call(null,vec__9870__9871,0,null);
var on_finish__9873 = cljs.core.nth.call(null,vec__9870__9871,1,null);

return $elem.show(speed__9872,on_finish__9873);
};
var show = function ($elem,var_args){
var p__9869 = null;
if (goog.isDef(var_args)) {
  p__9869 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__9869);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__9874){
var $elem = cljs.core.first(arglist__9874);
var p__9869 = cljs.core.rest(arglist__9874);
return show__delegate.call(this, $elem, p__9869);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__9875){
var vec__9876__9877 = p__9875;
var speed__9878 = cljs.core.nth.call(null,vec__9876__9877,0,null);
var on_finish__9879 = cljs.core.nth.call(null,vec__9876__9877,1,null);

return $elem.toggle(speed__9878,on_finish__9879);
};
var toggle = function ($elem,var_args){
var p__9875 = null;
if (goog.isDef(var_args)) {
  p__9875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__9875);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__9880){
var $elem = cljs.core.first(arglist__9880);
var p__9875 = cljs.core.rest(arglist__9880);
return toggle__delegate.call(this, $elem, p__9875);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__9881){
var vec__9882__9883 = p__9881;
var speed__9884 = cljs.core.nth.call(null,vec__9882__9883,0,null);
var on_finish__9885 = cljs.core.nth.call(null,vec__9882__9883,1,null);

return $elem.fadeOut(speed__9884,on_finish__9885);
};
var fade_out = function ($elem,var_args){
var p__9881 = null;
if (goog.isDef(var_args)) {
  p__9881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__9881);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__9886){
var $elem = cljs.core.first(arglist__9886);
var p__9881 = cljs.core.rest(arglist__9886);
return fade_out__delegate.call(this, $elem, p__9881);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__9887){
var vec__9888__9889 = p__9887;
var speed__9890 = cljs.core.nth.call(null,vec__9888__9889,0,null);
var on_finish__9891 = cljs.core.nth.call(null,vec__9888__9889,1,null);

return $elem.fadeIn(speed__9890,on_finish__9891);
};
var fade_in = function ($elem,var_args){
var p__9887 = null;
if (goog.isDef(var_args)) {
  p__9887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__9887);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__9892){
var $elem = cljs.core.first(arglist__9892);
var p__9887 = cljs.core.rest(arglist__9892);
return fade_in__delegate.call(this, $elem, p__9887);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__9893){
var vec__9894__9895 = p__9893;
var speed__9896 = cljs.core.nth.call(null,vec__9894__9895,0,null);
var on_finish__9897 = cljs.core.nth.call(null,vec__9894__9895,1,null);

return $elem.slideUp(speed__9896,on_finish__9897);
};
var slide_up = function ($elem,var_args){
var p__9893 = null;
if (goog.isDef(var_args)) {
  p__9893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__9893);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__9898){
var $elem = cljs.core.first(arglist__9898);
var p__9893 = cljs.core.rest(arglist__9898);
return slide_up__delegate.call(this, $elem, p__9893);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__9899){
var vec__9900__9901 = p__9899;
var speed__9902 = cljs.core.nth.call(null,vec__9900__9901,0,null);
var on_finish__9903 = cljs.core.nth.call(null,vec__9900__9901,1,null);

return $elem.slideDown(speed__9902,on_finish__9903);
};
var slide_down = function ($elem,var_args){
var p__9899 = null;
if (goog.isDef(var_args)) {
  p__9899 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__9899);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__9904){
var $elem = cljs.core.first(arglist__9904);
var p__9899 = cljs.core.rest(arglist__9904);
return slide_down__delegate.call(this, $elem, p__9899);
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
var val__delegate = function ($elem,p__9905){
var vec__9906__9907 = p__9905;
var v__9908 = cljs.core.nth.call(null,vec__9906__9907,0,null);

if(cljs.core.truth_(v__9908))
{return $elem.val(v__9908);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__9905 = null;
if (goog.isDef(var_args)) {
  p__9905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__9905);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__9909){
var $elem = cljs.core.first(arglist__9909);
var p__9905 = cljs.core.rest(arglist__9909);
return val__delegate.call(this, $elem, p__9905);
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
jayq.core.xhr = (function xhr(p__9910,content,callback){
var vec__9911__9912 = p__9910;
var method__9913 = cljs.core.nth.call(null,vec__9911__9912,0,null);
var uri__9914 = cljs.core.nth.call(null,vec__9911__9912,1,null);

var params__9915 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__9913)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__9914,params__9915);
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
var on__delegate = function ($elem,events,p__9916){
var vec__9917__9918 = p__9916;
var sel__9919 = cljs.core.nth.call(null,vec__9917__9918,0,null);
var data__9920 = cljs.core.nth.call(null,vec__9917__9918,1,null);
var handler__9921 = cljs.core.nth.call(null,vec__9917__9918,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9919),data__9920,handler__9921);
};
var on = function ($elem,events,var_args){
var p__9916 = null;
if (goog.isDef(var_args)) {
  p__9916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__9916);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__9922){
var $elem = cljs.core.first(arglist__9922);
var events = cljs.core.first(cljs.core.next(arglist__9922));
var p__9916 = cljs.core.rest(cljs.core.next(arglist__9922));
return on__delegate.call(this, $elem, events, p__9916);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__9923){
var vec__9924__9925 = p__9923;
var sel__9926 = cljs.core.nth.call(null,vec__9924__9925,0,null);
var data__9927 = cljs.core.nth.call(null,vec__9924__9925,1,null);
var handler__9928 = cljs.core.nth.call(null,vec__9924__9925,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9926),data__9927,handler__9928);
};
var one = function ($elem,events,var_args){
var p__9923 = null;
if (goog.isDef(var_args)) {
  p__9923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__9923);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__9929){
var $elem = cljs.core.first(arglist__9929);
var events = cljs.core.first(cljs.core.next(arglist__9929));
var p__9923 = cljs.core.rest(cljs.core.next(arglist__9929));
return one__delegate.call(this, $elem, events, p__9923);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__9930){
var vec__9931__9932 = p__9930;
var sel__9933 = cljs.core.nth.call(null,vec__9931__9932,0,null);
var handler__9934 = cljs.core.nth.call(null,vec__9931__9932,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__9933),handler__9934);
};
var off = function ($elem,events,var_args){
var p__9930 = null;
if (goog.isDef(var_args)) {
  p__9930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__9930);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__9935){
var $elem = cljs.core.first(arglist__9935);
var events = cljs.core.first(cljs.core.next(arglist__9935));
var p__9930 = cljs.core.rest(cljs.core.next(arglist__9935));
return off__delegate.call(this, $elem, events, p__9930);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
