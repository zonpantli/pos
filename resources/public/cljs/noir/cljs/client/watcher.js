goog.provide('noir.cljs.client.watcher');
goog.require('cljs.core');
goog.require('crate.tags');
goog.require('jayq.core');
goog.require('fetch.core');
goog.require('crate.core');
goog.require('cljs.reader');
noir.cljs.client.watcher.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
noir.cljs.client.watcher.$body = jayq.core.$.call(null,"\uFDD0'body");
noir.cljs.client.watcher.callbacks = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));
noir.cljs.client.watcher.cur_mode = cljs.core.atom.call(null,"\uFDD0'simple");
noir.cljs.client.watcher.poll = (function poll(){
return noir.cljs.client.watcher.wait.call(null,100,(function (){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'get","/noir-cljs-get-updated"]),cljs.core.ObjMap.fromObject([],{}),(function (data){
if(cljs.core.truth_((function (){var and__3546__auto____10257 = data;

if(cljs.core.truth_(and__3546__auto____10257))
{return cljs.core.not_EQ_.call(null,data,"");
} else
{return and__3546__auto____10257;
}
})()))
{eval.call(null,data);
var G__10258__10259 = cljs.core.seq.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.callbacks));

if(cljs.core.truth_(G__10258__10259))
{var cur__10260 = cljs.core.first.call(null,G__10258__10259);
var G__10258__10261 = G__10258__10259;

while(true){
cur__10260.call(null,data);
var temp__3698__auto____10262 = cljs.core.next.call(null,G__10258__10261);

if(cljs.core.truth_(temp__3698__auto____10262))
{var G__10258__10263 = temp__3698__auto____10262;

{
var G__10264 = cljs.core.first.call(null,G__10258__10263);
var G__10265 = G__10258__10263;
cur__10260 = G__10264;
G__10258__10261 = G__10265;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.cur_mode),"\uFDD0'interactive")))
{return poll.call(null);
} else
{return null;
}
}));
}));
});
noir.cljs.client.watcher.on_update = (function on_update(func){
return cljs.core.swap_BANG_.call(null,noir.cljs.client.watcher.callbacks,cljs.core.conj,func);
});
noir.cljs.client.watcher.set_mode = (function set_mode(m){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'post","/noir-cljs-mode"]),cljs.core.ObjMap.fromObject(["\uFDD0'm"],{"\uFDD0'm":m}),(function (){
cljs.core.reset_BANG_.call(null,noir.cljs.client.watcher.cur_mode,m);
if(cljs.core.truth_(cljs.core._EQ_.call(null,m,"\uFDD0'interactive")))
{return noir.cljs.client.watcher.poll.call(null);
} else
{return null;
}
}));
});
noir.cljs.client.watcher.get_mode = (function get_mode(callback){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'get","/noir-cljs-mode"]),cljs.core.ObjMap.fromObject([],{}),(function (x){
return callback.call(null,cljs.reader.read_string.call(null,x));
}));
});
noir.cljs.client.watcher.buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'advanced","\uFDD0'label":"A"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'simple","\uFDD0'label":"S"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'interactive","\uFDD0'label":"I"})]);
var group__6197__auto____10267 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

/**
* @param {...*} var_args
*/
noir.cljs.client.watcher.selector_button = (function() { 
var selector_button__delegate = function (p__10268,p__10269){
var map__10270__10272 = p__10268;
var map__10270__10273 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10270__10272))?cljs.core.apply.call(null,cljs.core.hash_map,map__10270__10272):map__10270__10272);
var label__10274 = cljs.core.get.call(null,map__10270__10273,"\uFDD0'label");
var mode__10275 = cljs.core.get.call(null,map__10270__10273,"\uFDD0'mode");
var vec__10271__10276 = p__10269;
var m__10277 = cljs.core.nth.call(null,vec__10271__10276,0,null);

var elem__6198__auto____10279 = crate.core.html.call(null,(function (){var klass__10278 = cljs.core.str.call(null,"noir-cljs-button ",(cljs.core.truth_(cljs.core._EQ_.call(null,mode__10275,m__10277))?"active":null));

return cljs.core.PersistentVector.fromArray(["\uFDD0'li",crate.tags.link_to.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'class","\uFDD0'data-mode"],{"\uFDD0'class":klass__10278,"\uFDD0'data-mode":mode__10275}),"#",label__10274)]);
})());

elem__6198__auto____10279.setAttribute("crateGroup",group__6197__auto____10267);
return elem__6198__auto____10279;
};
var selector_button = function (p__10268,var_args){
var p__10269 = null;
if (goog.isDef(var_args)) {
  p__10269 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return selector_button__delegate.call(this, p__10268, p__10269);
};
selector_button.cljs$lang$maxFixedArity = 1;
selector_button.cljs$lang$applyTo = (function (arglist__10280){
var p__10268 = cljs.core.first(arglist__10280);
var p__10269 = cljs.core.rest(arglist__10280);
return selector_button__delegate.call(this, p__10268, p__10269);
});
return selector_button;
})()
;
noir.cljs.client.watcher.selector_button.prototype._crateGroup = group__6197__auto____10267;
var group__6197__auto____10281 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

noir.cljs.client.watcher.selector = (function selector(m){
var elem__6198__auto____10282 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'style",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text/css"}),"#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }\n     #noir-cljs-selector li {}\n     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }\n     #noir-cljs-selector a:hover {background:#99f;}\n     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "]),cljs.core.PersistentVector.fromArray(["\uFDD0'ul#noir-cljs-selector",cljs.core.map.call(null,(function (p1__10266_SHARP_){
return noir.cljs.client.watcher.selector_button.call(null,p1__10266_SHARP_,m);
}),noir.cljs.client.watcher.buttons)])]));

elem__6198__auto____10282.setAttribute("crateGroup",group__6197__auto____10281);
return elem__6198__auto____10282;
});
noir.cljs.client.watcher.selector.prototype._crateGroup = group__6197__auto____10281;
jayq.core.delegate.call(null,noir.cljs.client.watcher.$body,"\uFDD0'.noir-cljs-button","\uFDD0'click",(function (e){
e.preventDefault();
jayq.core.remove_class.call(null,jayq.core.find.call(null,jayq.core.$.call(null,noir.cljs.client.watcher.selector),"\uFDD0'.noir-cljs-button"),"\uFDD0'active");
var me__10283 = this;

var $me__10284 = jayq.core.$.call(null,me__10283);
var mode__10285 = jayq.core.data.call(null,$me__10284,"\uFDD0'mode");

jayq.core.add_class.call(null,$me__10284,"\uFDD0'active");
return noir.cljs.client.watcher.set_mode.call(null,mode__10285);
}));
noir.cljs.client.watcher.init = (function init(){
return noir.cljs.client.watcher.get_mode.call(null,(function (m){
return jayq.core.append.call(null,noir.cljs.client.watcher.$body,noir.cljs.client.watcher.selector.call(null,m));
}));
});
