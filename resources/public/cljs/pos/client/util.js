goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_coll_by_id = (function from_coll_by_id(xs,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10887_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__10887_SHARP_),id);
}),xs));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____10888 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10889 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10890 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10891 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10892 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____10892,method_table__3162__auto____10888,prefer_table__3163__auto____10889,method_cache__3164__auto____10890,cached_hierarchy__3165__auto____10891));
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
var value__10893 = (function (el){
return el.attr("value");
});
var value__10894 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__10893.call(this,el);
case  2 :
return value__10894.call(this,el,val);
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
var d__10896 = (new goog.date.DateTime());
var dtf__10897 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__10897.format(d__10896);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__10898 = (new goog.Timer(1000));

t__10898.start();
return goog.events.listen(t__10898,goog.Timer.TICK,cb);
});
