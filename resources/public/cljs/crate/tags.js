goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__10290__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__10286__10287 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__10288 = cljs.core.nth.call(null,vec__10286__10287,0,null);
var body__10289 = cljs.core.nthnext.call(null,vec__10286__10287,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__10289))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__10288,cljs.core.merge.call(null,cljs.core.first.call(null,body__10289),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__10289));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__10288,cljs.core.first.call(null,args),body__10289);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__10290 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10290__delegate.call(this, args);
};
G__10290.cljs$lang$maxFixedArity = 0;
G__10290.cljs$lang$applyTo = (function (arglist__10291){
var args = cljs.core.seq( arglist__10291 );;
return G__10290__delegate.call(this, args);
});
return G__10290;
})()
;
});
var func__6210__auto____10297 = (function() { 
var G__10298__delegate = function (p__10292,content){
var vec__10293__10294 = p__10292;
var method__10295 = cljs.core.nth.call(null,vec__10293__10294,0,null);
var action__10296 = cljs.core.nth.call(null,vec__10293__10294,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__10295),"\uFDD0'action":action__10296}),content]);
};
var G__10298 = function (p__10292,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10298__delegate.call(this, p__10292, content);
};
G__10298.cljs$lang$maxFixedArity = 1;
G__10298.cljs$lang$applyTo = (function (arglist__10299){
var p__10292 = cljs.core.first(arglist__10299);
var content = cljs.core.rest(arglist__10299);
return G__10298__delegate.call(this, p__10292, content);
});
return G__10298;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6210__auto____10297);
var func__6210__auto____10303 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____10300 = nme;

if(cljs.core.truth_(or__3548__auto____10300))
{return or__3548__auto____10300;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____10301 = nme;

if(cljs.core.truth_(or__3548__auto____10301))
{return or__3548__auto____10301;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____10302 = value;

if(cljs.core.truth_(or__3548__auto____10302))
{return or__3548__auto____10302;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10303);
var func__6210__auto____10304 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10304);
var func__6210__auto____10305 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10305);
var func__6210__auto____10306 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6210__auto____10306);
var func__6210__auto____10307 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6210__auto____10307);
var func__6210__auto____10308 = (function() { 
var G__10309__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__10309 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10309__delegate.call(this, url, content);
};
G__10309.cljs$lang$maxFixedArity = 1;
G__10309.cljs$lang$applyTo = (function (arglist__10310){
var url = cljs.core.first(arglist__10310);
var content = cljs.core.rest(arglist__10310);
return G__10309__delegate.call(this, url, content);
});
return G__10309;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6210__auto____10308);
