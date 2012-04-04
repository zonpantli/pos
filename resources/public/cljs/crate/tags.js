goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__9332__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__9328__9329 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__9330 = cljs.core.nth.call(null,vec__9328__9329,0,null);
var body__9331 = cljs.core.nthnext.call(null,vec__9328__9329,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__9331))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__9330,cljs.core.merge.call(null,cljs.core.first.call(null,body__9331),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__9331));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__9330,cljs.core.first.call(null,args),body__9331);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9332 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9332__delegate.call(this, args);
};
G__9332.cljs$lang$maxFixedArity = 0;
G__9332.cljs$lang$applyTo = (function (arglist__9333){
var args = cljs.core.seq( arglist__9333 );;
return G__9332__delegate.call(this, args);
});
return G__9332;
})()
;
});
var func__5986__auto____9339 = (function() { 
var G__9340__delegate = function (p__9334,content){
var vec__9335__9336 = p__9334;
var method__9337 = cljs.core.nth.call(null,vec__9335__9336,0,null);
var action__9338 = cljs.core.nth.call(null,vec__9335__9336,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__9337),"\uFDD0'action":action__9338}),content]);
};
var G__9340 = function (p__9334,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9340__delegate.call(this, p__9334, content);
};
G__9340.cljs$lang$maxFixedArity = 1;
G__9340.cljs$lang$applyTo = (function (arglist__9341){
var p__9334 = cljs.core.first(arglist__9341);
var content = cljs.core.rest(arglist__9341);
return G__9340__delegate.call(this, p__9334, content);
});
return G__9340;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__5986__auto____9339);
var func__5986__auto____9345 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____9342 = nme;

if(cljs.core.truth_(or__3548__auto____9342))
{return or__3548__auto____9342;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____9343 = nme;

if(cljs.core.truth_(or__3548__auto____9343))
{return or__3548__auto____9343;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____9344 = value;

if(cljs.core.truth_(or__3548__auto____9344))
{return or__3548__auto____9344;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__5986__auto____9345);
var func__5986__auto____9346 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__5986__auto____9346);
var func__5986__auto____9347 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__5986__auto____9347);
var func__5986__auto____9348 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__5986__auto____9348);
var func__5986__auto____9349 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__5986__auto____9349);
var func__5986__auto____9350 = (function() { 
var G__9351__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__9351 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9351__delegate.call(this, url, content);
};
G__9351.cljs$lang$maxFixedArity = 1;
G__9351.cljs$lang$applyTo = (function (arglist__9352){
var url = cljs.core.first(arglist__9352);
var content = cljs.core.rest(arglist__9352);
return G__9351__delegate.call(this, url, content);
});
return G__9351;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__5986__auto____9350);
