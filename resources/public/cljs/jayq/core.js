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
{var temp__3695__auto____13168 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____13168))
{var cm__13169 = temp__3695__auto____13168;

return cljs.core.str.call(null,"[crateGroup=",cm__13169,"]");
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
var $__delegate = function (sel,p__13170){
var vec__13171__13172 = p__13170;
var context__13173 = cljs.core.nth.call(null,vec__13171__13172,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__13173)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__13173);
}
};
var $ = function (sel,var_args){
var p__13170 = null;
if (goog.isDef(var_args)) {
  p__13170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__13170);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__13174){
var sel = cljs.core.first(arglist__13174);
var p__13170 = cljs.core.rest(arglist__13174);
return $__delegate.call(this, sel, p__13170);
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
var G__13176 = null;
var G__13176__13177 = (function (this$,k){
var or__3548__auto____13175 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____13175))
{return or__3548__auto____13175;
} else
{return null;
}
});
var G__13176__13178 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__13176 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__13176__13177.call(this,this$,k);
case  3 :
return G__13176__13178.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13176;
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
var G__13180 = null;
var G__13180__13181 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13180__13182 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13180 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__13180__13181.call(this,_,k);
case  3 :
return G__13180__13182.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13180;
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
var attr__delegate = function ($elem,a,p__13184){
var vec__13185__13186 = p__13184;
var v__13187 = cljs.core.nth.call(null,vec__13185__13186,0,null);

var a__13188 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__13187)))
{return $elem.attr(a__13188);
} else
{return $elem.attr(a__13188,v__13187);
}
};
var attr = function ($elem,a,var_args){
var p__13184 = null;
if (goog.isDef(var_args)) {
  p__13184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__13184);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__13189){
var $elem = cljs.core.first(arglist__13189);
var a = cljs.core.first(cljs.core.next(arglist__13189));
var p__13184 = cljs.core.rest(cljs.core.next(arglist__13189));
return attr__delegate.call(this, $elem, a, p__13184);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__13190){
var vec__13191__13192 = p__13190;
var v__13193 = cljs.core.nth.call(null,vec__13191__13192,0,null);

var k__13194 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__13193)))
{return $elem.data(k__13194);
} else
{return $elem.data(k__13194,v__13193);
}
};
var data = function ($elem,k,var_args){
var p__13190 = null;
if (goog.isDef(var_args)) {
  p__13190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__13190);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__13195){
var $elem = cljs.core.first(arglist__13195);
var k = cljs.core.first(cljs.core.next(arglist__13195));
var p__13190 = cljs.core.rest(cljs.core.next(arglist__13195));
return data__delegate.call(this, $elem, k, p__13190);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__13196 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__13196);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__13197 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__13197);
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
var hide__delegate = function ($elem,p__13198){
var vec__13199__13200 = p__13198;
var speed__13201 = cljs.core.nth.call(null,vec__13199__13200,0,null);
var on_finish__13202 = cljs.core.nth.call(null,vec__13199__13200,1,null);

return $elem.hide(speed__13201,on_finish__13202);
};
var hide = function ($elem,var_args){
var p__13198 = null;
if (goog.isDef(var_args)) {
  p__13198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__13198);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__13203){
var $elem = cljs.core.first(arglist__13203);
var p__13198 = cljs.core.rest(arglist__13203);
return hide__delegate.call(this, $elem, p__13198);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__13204){
var vec__13205__13206 = p__13204;
var speed__13207 = cljs.core.nth.call(null,vec__13205__13206,0,null);
var on_finish__13208 = cljs.core.nth.call(null,vec__13205__13206,1,null);

return $elem.show(speed__13207,on_finish__13208);
};
var show = function ($elem,var_args){
var p__13204 = null;
if (goog.isDef(var_args)) {
  p__13204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__13204);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__13209){
var $elem = cljs.core.first(arglist__13209);
var p__13204 = cljs.core.rest(arglist__13209);
return show__delegate.call(this, $elem, p__13204);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__13210){
var vec__13211__13212 = p__13210;
var speed__13213 = cljs.core.nth.call(null,vec__13211__13212,0,null);
var on_finish__13214 = cljs.core.nth.call(null,vec__13211__13212,1,null);

return $elem.toggle(speed__13213,on_finish__13214);
};
var toggle = function ($elem,var_args){
var p__13210 = null;
if (goog.isDef(var_args)) {
  p__13210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__13210);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__13215){
var $elem = cljs.core.first(arglist__13215);
var p__13210 = cljs.core.rest(arglist__13215);
return toggle__delegate.call(this, $elem, p__13210);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__13216){
var vec__13217__13218 = p__13216;
var speed__13219 = cljs.core.nth.call(null,vec__13217__13218,0,null);
var on_finish__13220 = cljs.core.nth.call(null,vec__13217__13218,1,null);

return $elem.fadeOut(speed__13219,on_finish__13220);
};
var fade_out = function ($elem,var_args){
var p__13216 = null;
if (goog.isDef(var_args)) {
  p__13216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__13216);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__13221){
var $elem = cljs.core.first(arglist__13221);
var p__13216 = cljs.core.rest(arglist__13221);
return fade_out__delegate.call(this, $elem, p__13216);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__13222){
var vec__13223__13224 = p__13222;
var speed__13225 = cljs.core.nth.call(null,vec__13223__13224,0,null);
var on_finish__13226 = cljs.core.nth.call(null,vec__13223__13224,1,null);

return $elem.fadeIn(speed__13225,on_finish__13226);
};
var fade_in = function ($elem,var_args){
var p__13222 = null;
if (goog.isDef(var_args)) {
  p__13222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__13222);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__13227){
var $elem = cljs.core.first(arglist__13227);
var p__13222 = cljs.core.rest(arglist__13227);
return fade_in__delegate.call(this, $elem, p__13222);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__13228){
var vec__13229__13230 = p__13228;
var speed__13231 = cljs.core.nth.call(null,vec__13229__13230,0,null);
var on_finish__13232 = cljs.core.nth.call(null,vec__13229__13230,1,null);

return $elem.slideUp(speed__13231,on_finish__13232);
};
var slide_up = function ($elem,var_args){
var p__13228 = null;
if (goog.isDef(var_args)) {
  p__13228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__13228);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__13233){
var $elem = cljs.core.first(arglist__13233);
var p__13228 = cljs.core.rest(arglist__13233);
return slide_up__delegate.call(this, $elem, p__13228);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__13234){
var vec__13235__13236 = p__13234;
var speed__13237 = cljs.core.nth.call(null,vec__13235__13236,0,null);
var on_finish__13238 = cljs.core.nth.call(null,vec__13235__13236,1,null);

return $elem.slideDown(speed__13237,on_finish__13238);
};
var slide_down = function ($elem,var_args){
var p__13234 = null;
if (goog.isDef(var_args)) {
  p__13234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__13234);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__13239){
var $elem = cljs.core.first(arglist__13239);
var p__13234 = cljs.core.rest(arglist__13239);
return slide_down__delegate.call(this, $elem, p__13234);
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
var val__delegate = function ($elem,p__13240){
var vec__13241__13242 = p__13240;
var v__13243 = cljs.core.nth.call(null,vec__13241__13242,0,null);

if(cljs.core.truth_(v__13243))
{return $elem.val(v__13243);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__13240 = null;
if (goog.isDef(var_args)) {
  p__13240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__13240);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__13244){
var $elem = cljs.core.first(arglist__13244);
var p__13240 = cljs.core.rest(arglist__13244);
return val__delegate.call(this, $elem, p__13240);
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
jayq.core.xhr = (function xhr(p__13245,content,callback){
var vec__13246__13247 = p__13245;
var method__13248 = cljs.core.nth.call(null,vec__13246__13247,0,null);
var uri__13249 = cljs.core.nth.call(null,vec__13246__13247,1,null);

var params__13250 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__13248)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__13249,params__13250);
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
var on__delegate = function ($elem,events,p__13251){
var vec__13252__13253 = p__13251;
var sel__13254 = cljs.core.nth.call(null,vec__13252__13253,0,null);
var data__13255 = cljs.core.nth.call(null,vec__13252__13253,1,null);
var handler__13256 = cljs.core.nth.call(null,vec__13252__13253,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13254),data__13255,handler__13256);
};
var on = function ($elem,events,var_args){
var p__13251 = null;
if (goog.isDef(var_args)) {
  p__13251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__13251);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__13257){
var $elem = cljs.core.first(arglist__13257);
var events = cljs.core.first(cljs.core.next(arglist__13257));
var p__13251 = cljs.core.rest(cljs.core.next(arglist__13257));
return on__delegate.call(this, $elem, events, p__13251);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__13258){
var vec__13259__13260 = p__13258;
var sel__13261 = cljs.core.nth.call(null,vec__13259__13260,0,null);
var data__13262 = cljs.core.nth.call(null,vec__13259__13260,1,null);
var handler__13263 = cljs.core.nth.call(null,vec__13259__13260,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13261),data__13262,handler__13263);
};
var one = function ($elem,events,var_args){
var p__13258 = null;
if (goog.isDef(var_args)) {
  p__13258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__13258);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__13264){
var $elem = cljs.core.first(arglist__13264);
var events = cljs.core.first(cljs.core.next(arglist__13264));
var p__13258 = cljs.core.rest(cljs.core.next(arglist__13264));
return one__delegate.call(this, $elem, events, p__13258);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__13265){
var vec__13266__13267 = p__13265;
var sel__13268 = cljs.core.nth.call(null,vec__13266__13267,0,null);
var handler__13269 = cljs.core.nth.call(null,vec__13266__13267,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__13268),handler__13269);
};
var off = function ($elem,events,var_args){
var p__13265 = null;
if (goog.isDef(var_args)) {
  p__13265 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__13265);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__13270){
var $elem = cljs.core.first(arglist__13270);
var events = cljs.core.first(cljs.core.next(arglist__13270));
var p__13265 = cljs.core.rest(cljs.core.next(arglist__13270));
return off__delegate.call(this, $elem, events, p__13265);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
