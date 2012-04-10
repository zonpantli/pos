goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__10247__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__10243__10244 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__10245 = cljs.core.nth.call(null,vec__10243__10244,0,null);
var body__10246 = cljs.core.nthnext.call(null,vec__10243__10244,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__10246))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__10245,cljs.core.merge.call(null,cljs.core.first.call(null,body__10246),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__10246));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__10245,cljs.core.first.call(null,args),body__10246);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__10247 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10247__delegate.call(this, args);
};
G__10247.cljs$lang$maxFixedArity = 0;
G__10247.cljs$lang$applyTo = (function (arglist__10248){
var args = cljs.core.seq( arglist__10248 );;
return G__10247__delegate.call(this, args);
});
return G__10247;
})()
;
});
var func__6210__auto____10254 = (function() { 
var G__10255__delegate = function (p__10249,content){
var vec__10250__10251 = p__10249;
var method__10252 = cljs.core.nth.call(null,vec__10250__10251,0,null);
var action__10253 = cljs.core.nth.call(null,vec__10250__10251,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__10252),"\uFDD0'action":action__10253}),content]);
};
var G__10255 = function (p__10249,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10255__delegate.call(this, p__10249, content);
};
G__10255.cljs$lang$maxFixedArity = 1;
G__10255.cljs$lang$applyTo = (function (arglist__10256){
var p__10249 = cljs.core.first(arglist__10256);
var content = cljs.core.rest(arglist__10256);
return G__10255__delegate.call(this, p__10249, content);
});
return G__10255;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6210__auto____10254);
var func__6210__auto____10260 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____10257 = nme;

if(cljs.core.truth_(or__3548__auto____10257))
{return or__3548__auto____10257;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____10258 = nme;

if(cljs.core.truth_(or__3548__auto____10258))
{return or__3548__auto____10258;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____10259 = value;

if(cljs.core.truth_(or__3548__auto____10259))
{return or__3548__auto____10259;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10260);
var func__6210__auto____10261 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10261);
var func__6210__auto____10262 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6210__auto____10262);
var func__6210__auto____10263 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6210__auto____10263);
var func__6210__auto____10264 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6210__auto____10264);
var func__6210__auto____10265 = (function() { 
var G__10266__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__10266 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10266__delegate.call(this, url, content);
};
G__10266.cljs$lang$maxFixedArity = 1;
G__10266.cljs$lang$applyTo = (function (arglist__10267){
var url = cljs.core.first(arglist__10267);
var content = cljs.core.rest(arglist__10267);
return G__10266__delegate.call(this, url, content);
});
return G__10266;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6210__auto____10265);
