goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__9528__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__9524__9525 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__9526 = cljs.core.nth.call(null,vec__9524__9525,0,null);
var body__9527 = cljs.core.nthnext.call(null,vec__9524__9525,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__9527))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__9526,cljs.core.merge.call(null,cljs.core.first.call(null,body__9527),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__9527));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__9526,cljs.core.first.call(null,args),body__9527);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9528 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9528__delegate.call(this, args);
};
G__9528.cljs$lang$maxFixedArity = 0;
G__9528.cljs$lang$applyTo = (function (arglist__9529){
var args = cljs.core.seq( arglist__9529 );;
return G__9528__delegate.call(this, args);
});
return G__9528;
})()
;
});
var func__6004__auto____9535 = (function() { 
var G__9536__delegate = function (p__9530,content){
var vec__9531__9532 = p__9530;
var method__9533 = cljs.core.nth.call(null,vec__9531__9532,0,null);
var action__9534 = cljs.core.nth.call(null,vec__9531__9532,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__9533),"\uFDD0'action":action__9534}),content]);
};
var G__9536 = function (p__9530,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9536__delegate.call(this, p__9530, content);
};
G__9536.cljs$lang$maxFixedArity = 1;
G__9536.cljs$lang$applyTo = (function (arglist__9537){
var p__9530 = cljs.core.first(arglist__9537);
var content = cljs.core.rest(arglist__9537);
return G__9536__delegate.call(this, p__9530, content);
});
return G__9536;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6004__auto____9535);
var func__6004__auto____9541 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____9538 = nme;

if(cljs.core.truth_(or__3548__auto____9538))
{return or__3548__auto____9538;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____9539 = nme;

if(cljs.core.truth_(or__3548__auto____9539))
{return or__3548__auto____9539;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____9540 = value;

if(cljs.core.truth_(or__3548__auto____9540))
{return or__3548__auto____9540;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6004__auto____9541);
var func__6004__auto____9542 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6004__auto____9542);
var func__6004__auto____9543 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6004__auto____9543);
var func__6004__auto____9544 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6004__auto____9544);
var func__6004__auto____9545 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6004__auto____9545);
var func__6004__auto____9546 = (function() { 
var G__9547__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__9547 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9547__delegate.call(this, url, content);
};
G__9547.cljs$lang$maxFixedArity = 1;
G__9547.cljs$lang$applyTo = (function (arglist__9548){
var url = cljs.core.first(arglist__9548);
var content = cljs.core.rest(arglist__9548);
return G__9547__delegate.call(this, url, content);
});
return G__9547;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6004__auto____9546);
