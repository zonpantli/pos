goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__8965__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__8961__8962 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__8963 = cljs.core.nth.call(null,vec__8961__8962,0,null);
var body__8964 = cljs.core.nthnext.call(null,vec__8961__8962,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__8964))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__8963,cljs.core.merge.call(null,cljs.core.first.call(null,body__8964),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__8964));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__8963,cljs.core.first.call(null,args),body__8964);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8965 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8965__delegate.call(this, args);
};
G__8965.cljs$lang$maxFixedArity = 0;
G__8965.cljs$lang$applyTo = (function (arglist__8966){
var args = cljs.core.seq( arglist__8966 );;
return G__8965__delegate.call(this, args);
});
return G__8965;
})()
;
});
var func__5732__auto____8972 = (function() { 
var G__8973__delegate = function (p__8967,content){
var vec__8968__8969 = p__8967;
var method__8970 = cljs.core.nth.call(null,vec__8968__8969,0,null);
var action__8971 = cljs.core.nth.call(null,vec__8968__8969,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__8970),"\uFDD0'action":action__8971}),content]);
};
var G__8973 = function (p__8967,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8973__delegate.call(this, p__8967, content);
};
G__8973.cljs$lang$maxFixedArity = 1;
G__8973.cljs$lang$applyTo = (function (arglist__8974){
var p__8967 = cljs.core.first(arglist__8974);
var content = cljs.core.rest(arglist__8974);
return G__8973__delegate.call(this, p__8967, content);
});
return G__8973;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__5732__auto____8972);
var func__5732__auto____8978 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____8975 = nme;

if(cljs.core.truth_(or__3548__auto____8975))
{return or__3548__auto____8975;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____8976 = nme;

if(cljs.core.truth_(or__3548__auto____8976))
{return or__3548__auto____8976;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____8977 = value;

if(cljs.core.truth_(or__3548__auto____8977))
{return or__3548__auto____8977;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8978);
var func__5732__auto____8979 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8979);
var func__5732__auto____8980 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8980);
var func__5732__auto____8981 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__5732__auto____8981);
var func__5732__auto____8982 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__5732__auto____8982);
var func__5732__auto____8983 = (function() { 
var G__8984__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__8984 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8984__delegate.call(this, url, content);
};
G__8984.cljs$lang$maxFixedArity = 1;
G__8984.cljs$lang$applyTo = (function (arglist__8985){
var url = cljs.core.first(arglist__8985);
var content = cljs.core.rest(arglist__8985);
return G__8984__delegate.call(this, url, content);
});
return G__8984;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__5732__auto____8983);
