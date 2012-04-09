goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__9919__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__9915__9916 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__9917 = cljs.core.nth.call(null,vec__9915__9916,0,null);
var body__9918 = cljs.core.nthnext.call(null,vec__9915__9916,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__9918))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__9917,cljs.core.merge.call(null,cljs.core.first.call(null,body__9918),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__9918));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__9917,cljs.core.first.call(null,args),body__9918);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9919__delegate.call(this, args);
};
G__9919.cljs$lang$maxFixedArity = 0;
G__9919.cljs$lang$applyTo = (function (arglist__9920){
var args = cljs.core.seq( arglist__9920 );;
return G__9919__delegate.call(this, args);
});
return G__9919;
})()
;
});
var func__6071__auto____9926 = (function() { 
var G__9927__delegate = function (p__9921,content){
var vec__9922__9923 = p__9921;
var method__9924 = cljs.core.nth.call(null,vec__9922__9923,0,null);
var action__9925 = cljs.core.nth.call(null,vec__9922__9923,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__9924),"\uFDD0'action":action__9925}),content]);
};
var G__9927 = function (p__9921,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9927__delegate.call(this, p__9921, content);
};
G__9927.cljs$lang$maxFixedArity = 1;
G__9927.cljs$lang$applyTo = (function (arglist__9928){
var p__9921 = cljs.core.first(arglist__9928);
var content = cljs.core.rest(arglist__9928);
return G__9927__delegate.call(this, p__9921, content);
});
return G__9927;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6071__auto____9926);
var func__6071__auto____9932 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____9929 = nme;

if(cljs.core.truth_(or__3548__auto____9929))
{return or__3548__auto____9929;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____9930 = nme;

if(cljs.core.truth_(or__3548__auto____9930))
{return or__3548__auto____9930;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____9931 = value;

if(cljs.core.truth_(or__3548__auto____9931))
{return or__3548__auto____9931;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6071__auto____9932);
var func__6071__auto____9933 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6071__auto____9933);
var func__6071__auto____9934 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6071__auto____9934);
var func__6071__auto____9935 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6071__auto____9935);
var func__6071__auto____9936 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6071__auto____9936);
var func__6071__auto____9937 = (function() { 
var G__9938__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__9938 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9938__delegate.call(this, url, content);
};
G__9938.cljs$lang$maxFixedArity = 1;
G__9938.cljs$lang$applyTo = (function (arglist__9939){
var url = cljs.core.first(arglist__9939);
var content = cljs.core.rest(arglist__9939);
return G__9938__delegate.call(this, url, content);
});
return G__9938;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6071__auto____9937);
