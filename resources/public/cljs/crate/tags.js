goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__9299__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__9295__9296 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__9297 = cljs.core.nth.call(null,vec__9295__9296,0,null);
var body__9298 = cljs.core.nthnext.call(null,vec__9295__9296,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__9298))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__9297,cljs.core.merge.call(null,cljs.core.first.call(null,body__9298),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__9298));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__9297,cljs.core.first.call(null,args),body__9298);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9299 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9299__delegate.call(this, args);
};
G__9299.cljs$lang$maxFixedArity = 0;
G__9299.cljs$lang$applyTo = (function (arglist__9300){
var args = cljs.core.seq( arglist__9300 );;
return G__9299__delegate.call(this, args);
});
return G__9299;
})()
;
});
var func__6001__auto____9306 = (function() { 
var G__9307__delegate = function (p__9301,content){
var vec__9302__9303 = p__9301;
var method__9304 = cljs.core.nth.call(null,vec__9302__9303,0,null);
var action__9305 = cljs.core.nth.call(null,vec__9302__9303,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__9304),"\uFDD0'action":action__9305}),content]);
};
var G__9307 = function (p__9301,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9307__delegate.call(this, p__9301, content);
};
G__9307.cljs$lang$maxFixedArity = 1;
G__9307.cljs$lang$applyTo = (function (arglist__9308){
var p__9301 = cljs.core.first(arglist__9308);
var content = cljs.core.rest(arglist__9308);
return G__9307__delegate.call(this, p__9301, content);
});
return G__9307;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6001__auto____9306);
var func__6001__auto____9312 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____9309 = nme;

if(cljs.core.truth_(or__3548__auto____9309))
{return or__3548__auto____9309;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____9310 = nme;

if(cljs.core.truth_(or__3548__auto____9310))
{return or__3548__auto____9310;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____9311 = value;

if(cljs.core.truth_(or__3548__auto____9311))
{return or__3548__auto____9311;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6001__auto____9312);
var func__6001__auto____9313 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6001__auto____9313);
var func__6001__auto____9314 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6001__auto____9314);
var func__6001__auto____9315 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6001__auto____9315);
var func__6001__auto____9316 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6001__auto____9316);
var func__6001__auto____9317 = (function() { 
var G__9318__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__9318 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9318__delegate.call(this, url, content);
};
G__9318.cljs$lang$maxFixedArity = 1;
G__9318.cljs$lang$applyTo = (function (arglist__9319){
var url = cljs.core.first(arglist__9319);
var content = cljs.core.rest(arglist__9319);
return G__9318__delegate.call(this, url, content);
});
return G__9318;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6001__auto____9317);
