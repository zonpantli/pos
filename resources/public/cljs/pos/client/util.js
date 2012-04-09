goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_coll_by_id = (function from_coll_by_id(xs,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9083_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__9083_SHARP_),id);
}),xs));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____9084 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9085 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9086 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9087 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9088 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____9088,method_table__3162__auto____9084,prefer_table__3163__auto____9085,method_cache__3164__auto____9086,cached_hierarchy__3165__auto____9087));
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
pos.client.util.item_total_price = (function item_total_price(p__9089){
var map__9090__9091 = p__9089;
var map__9090__9092 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9090__9091))?cljs.core.apply.call(null,cljs.core.hash_map,map__9090__9091):map__9090__9091);
var price__9093 = cljs.core.get.call(null,map__9090__9092,"\uFDD0'price");
var qty__9094 = cljs.core.get.call(null,map__9090__9092,"\uFDD0'qty");

var total__9095 = (qty__9094 * price__9093);

return clojure.string.replace.call(null,total__9095.toFixed(2),".",",");
});
/**
* Get/set value of input element
*/
pos.client.util.value = (function() {
var value = null;
var value__9096 = (function (el){
return el.attr("value");
});
var value__9097 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__9096.call(this,el);
case  2 :
return value__9097.call(this,el,val);
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
var d__9099 = (new goog.date.DateTime());
var dtf__9100 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__9100.format(d__9099);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__9101 = (new goog.Timer(1000));

t__9101.start();
return goog.events.listen(t__9101,goog.Timer.TICK,cb);
});
