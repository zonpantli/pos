goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__8904__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__8900__8901 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__8902 = cljs.core.nth.call(null,vec__8900__8901,0,null);
var body__8903 = cljs.core.nthnext.call(null,vec__8900__8901,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__8903))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__8902,cljs.core.merge.call(null,cljs.core.first.call(null,body__8903),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__8903));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__8902,cljs.core.first.call(null,args),body__8903);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8904 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8904__delegate.call(this, args);
};
G__8904.cljs$lang$maxFixedArity = 0;
G__8904.cljs$lang$applyTo = (function (arglist__8905){
var args = cljs.core.seq( arglist__8905 );;
return G__8904__delegate.call(this, args);
});
return G__8904;
})()
;
});
var func__5732__auto____8911 = (function() { 
var G__8912__delegate = function (p__8906,content){
var vec__8907__8908 = p__8906;
var method__8909 = cljs.core.nth.call(null,vec__8907__8908,0,null);
var action__8910 = cljs.core.nth.call(null,vec__8907__8908,1,null);

return cljs.core.Vector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__8909),"\uFDD0'action":action__8910}),content]);
};
var G__8912 = function (p__8906,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8912__delegate.call(this, p__8906, content);
};
G__8912.cljs$lang$maxFixedArity = 1;
G__8912.cljs$lang$applyTo = (function (arglist__8913){
var p__8906 = cljs.core.first(arglist__8913);
var content = cljs.core.rest(arglist__8913);
return G__8912__delegate.call(this, p__8906, content);
});
return G__8912;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__5732__auto____8911);
var func__5732__auto____8917 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____8914 = nme;

if(cljs.core.truth_(or__3548__auto____8914))
{return or__3548__auto____8914;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____8915 = nme;

if(cljs.core.truth_(or__3548__auto____8915))
{return or__3548__auto____8915;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____8916 = value;

if(cljs.core.truth_(or__3548__auto____8916))
{return or__3548__auto____8916;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8917);
var func__5732__auto____8918 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8918);
var func__5732__auto____8919 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__5732__auto____8919);
var func__5732__auto____8920 = (function (for$,text){
return cljs.core.Vector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__5732__auto____8920);
var func__5732__auto____8921 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__5732__auto____8921);
var func__5732__auto____8922 = (function() { 
var G__8923__delegate = function (url,content){
return cljs.core.Vector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__8923 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8923__delegate.call(this, url, content);
};
G__8923.cljs$lang$maxFixedArity = 1;
G__8923.cljs$lang$applyTo = (function (arglist__8924){
var url = cljs.core.first(arglist__8924);
var content = cljs.core.rest(arglist__8924);
return G__8923__delegate.call(this, url, content);
});
return G__8923;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__5732__auto____8922);
