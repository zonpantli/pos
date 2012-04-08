goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_arr_by_id = (function from_arr_by_id(arr,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7942_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7942_SHARP_),id);
}),arr));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____7943 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7944 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7945 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7946 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7947 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____7947,method_table__3162__auto____7943,prefer_table__3163__auto____7944,method_cache__3164__auto____7945,cached_hierarchy__3165__auto____7946));
})();
cljs.core._add_method.call(null,pos.client.util.default_variant,true,(function (xs){
return cljs.core.first.call(null,xs);
}));
cljs.core._add_method.call(null,pos.client.util.default_variant,false,(function (x){
return x;
}));
/**
* Return item map where coll values are replaced by the first item in
* collection. E.g. return item where {:size [M L XL]} would be {:size
* M}
*/
pos.client.util.default_variant_of_item = (function default_variant_of_item(item){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,item),cljs.core.map.call(null,pos.client.util.default_variant,cljs.core.vals.call(null,item)));
});
/**
* Get/set value of input element
*/
pos.client.util.value = (function() {
var value = null;
var value__7948 = (function (el){
return el.attr("value");
});
var value__7949 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7948.call(this,el);
case  2 :
return value__7949.call(this,el,val);
}
throw('Invalid arity: ' + arguments.length);
};
return value;
})()
;
pos.client.util.background_image = (function background_image(el,url){
return pos.client.util.css.call(null,el,cljs.core.ObjMap.fromObject(["\uFDD0'background-image"],{"\uFDD0'background-image":cljs.core.str.call(null,"url(",url,")")}));
});
pos.client.util.get_formatted_datetime = (function get_formatted_datetime(){
var d__7951 = (new goog.date.DateTime());
var dtf__7952 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__7952.format(d__7951);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__7953 = (new goog.Timer(1000));

t__7953.start();
return goog.events.listen(t__7953,goog.Timer.TICK,cb);
});
