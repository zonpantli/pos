goog.provide('crate.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__9807__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__9803__9804 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__9805 = cljs.core.nth.call(null,vec__9803__9804,0,null);
var body__9806 = cljs.core.nthnext.call(null,vec__9803__9804,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__9806))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__9805,cljs.core.merge.call(null,cljs.core.first.call(null,body__9806),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__9806));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__9805,cljs.core.first.call(null,args),body__9806);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9807 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9807__delegate.call(this, args);
};
G__9807.cljs$lang$maxFixedArity = 0;
G__9807.cljs$lang$applyTo = (function (arglist__9808){
var args = cljs.core.seq( arglist__9808 );;
return G__9807__delegate.call(this, args);
});
return G__9807;
})()
;
});
var func__6021__auto____9814 = (function() { 
var G__9815__delegate = function (p__9809,content){
var vec__9810__9811 = p__9809;
var method__9812 = cljs.core.nth.call(null,vec__9810__9811,0,null);
var action__9813 = cljs.core.nth.call(null,vec__9810__9811,1,null);

return cljs.core.PersistentVector.fromArray(["\uFDD0'form",cljs.core.ObjMap.fromObject(["\uFDD0'method","\uFDD0'action"],{"\uFDD0'method":cljs.core.name.call(null,method__9812),"\uFDD0'action":action__9813}),content]);
};
var G__9815 = function (p__9809,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9815__delegate.call(this, p__9809, content);
};
G__9815.cljs$lang$maxFixedArity = 1;
G__9815.cljs$lang$applyTo = (function (arglist__9816){
var p__9809 = cljs.core.first(arglist__9816);
var content = cljs.core.rest(arglist__9816);
return G__9815__delegate.call(this, p__9809, content);
});
return G__9815;
})()
;

crate.tags.form_to = crate.tags.add_optional_attrs.call(null,func__6021__auto____9814);
var func__6021__auto____9820 = (function (tpe,nme,value){
return cljs.core.PersistentVector.fromArray(["\uFDD0'input",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'id","\uFDD0'value"],{"\uFDD0'type":tpe,"\uFDD0'name":(function (){var or__3548__auto____9817 = nme;

if(cljs.core.truth_(or__3548__auto____9817))
{return or__3548__auto____9817;
} else
{return null;
}
})(),"\uFDD0'id":(function (){var or__3548__auto____9818 = nme;

if(cljs.core.truth_(or__3548__auto____9818))
{return or__3548__auto____9818;
} else
{return null;
}
})(),"\uFDD0'value":(function (){var or__3548__auto____9819 = value;

if(cljs.core.truth_(or__3548__auto____9819))
{return or__3548__auto____9819;
} else
{return "";
}
})()})]);
});

crate.tags.input_field = crate.tags.add_optional_attrs.call(null,func__6021__auto____9820);
var func__6021__auto____9821 = (function (nme,value){
return crate.tags.input_field.call(null,"text",nme,value);
});

crate.tags.text_field = crate.tags.add_optional_attrs.call(null,func__6021__auto____9821);
var func__6021__auto____9822 = (function (nme,value){
return crate.tags.input_field.call(null,"password",nme,value);
});

crate.tags.password_field = crate.tags.add_optional_attrs.call(null,func__6021__auto____9822);
var func__6021__auto____9823 = (function (for$,text){
return cljs.core.PersistentVector.fromArray(["\uFDD0'label",cljs.core.ObjMap.fromObject(["\uFDD0'for"],{"\uFDD0'for":for$}),text]);
});

crate.tags.label = crate.tags.add_optional_attrs.call(null,func__6021__auto____9823);
var func__6021__auto____9824 = (function (val){
return crate.tags.input_field.call(null,"submit",null,val);
});

crate.tags.submit_button = crate.tags.add_optional_attrs.call(null,func__6021__auto____9824);
var func__6021__auto____9825 = (function() { 
var G__9826__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),content]);
};
var G__9826 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9826__delegate.call(this, url, content);
};
G__9826.cljs$lang$maxFixedArity = 1;
G__9826.cljs$lang$applyTo = (function (arglist__9827){
var url = cljs.core.first(arglist__9827);
var content = cljs.core.rest(arglist__9827);
return G__9826__delegate.call(this, url, content);
});
return G__9826;
})()
;

crate.tags.link_to = crate.tags.add_optional_attrs.call(null,func__6021__auto____9825);
