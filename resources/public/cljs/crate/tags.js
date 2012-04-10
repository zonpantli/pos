goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__13582__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__13578__13579 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__13580 = cljs.core.nth.call(null,vec__13578__13579,0,null);
var body__13581 = cljs.core.nthnext.call(null,vec__13578__13579,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__13581))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__13580,cljs.core.merge.call(null,cljs.core.first.call(null,body__13581),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__13581));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__13580,cljs.core.first.call(null,args),body__13581);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13582 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13582__delegate.call(this, args);
};
G__13582.cljs$lang$maxFixedArity = 0;
G__13582.cljs$lang$applyTo = (function (arglist__13583){
var args = cljs.core.seq( arglist__13583 );;
return G__13582__delegate.call(this, args);
});
return G__13582;
})()
;
});
var func__6119__auto____13589 = (function() { 
var G__13590__delegate = function (p__13584,content){
var vec__13585__13586 = p__13584;
var method__13587 = cljs.core.nth.call(null,vec__13585__13586,0,null);
var action__13588 = cljs.core.nth.call(null,vec__13585__13586,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__13587),"\uFDD0'action":action__13588}),content]);
};
var G__13590 = function (p__13584,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13590__delegate.call(this, p__13584, content);
};
G__13590.cljs$lang$maxFixedArity = 1;
G__13590.cljs$lang$applyTo = (function (arglist__13591){
var p__13584 = cljs.core.first(arglist__13591);
var content = cljs.core.rest(arglist__13591);
return G__13590__delegate.call(this, p__13584, content);
});
return G__13590;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6119__auto____13589);
var func__6119__auto____13595 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____13592 = nme;

if(cljs.core.truth_(or__3548__auto____13592))
{return or__3548__auto____13592;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____13593 = nme;

if(cljs.core.truth_(or__3548__auto____13593))
{return or__3548__auto____13593;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____13594 = value;

if(cljs.core.truth_(or__3548__auto____13594))
{return or__3548__auto____13594;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6119__auto____13595);
var func__6119__auto____13596 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6119__auto____13596);
var func__6119__auto____13597 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6119__auto____13597);
var func__6119__auto____13598 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6119__auto____13598);
var func__6119__auto____13599 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6119__auto____13599);
var func__6119__auto____13600 = (function() { 
var G__13601__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__13601 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13601__delegate.call(this, url, content);
};
G__13601.cljs$lang$maxFixedArity = 1;
G__13601.cljs$lang$applyTo = (function (arglist__13602){
var url = cljs.core.first(arglist__13602);
var content = cljs.core.rest(arglist__13602);
return G__13601__delegate.call(this, url, content);
});
return G__13601;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6119__auto____13600);
