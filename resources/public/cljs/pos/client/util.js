goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_coll_by_id = (function from_coll_by_id(xs,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7853_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7853_SHARP_),id);
}),xs));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____7854 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7855 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7856 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7857 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7858 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____7858,method_table__3162__auto____7854,prefer_table__3163__auto____7855,method_cache__3164__auto____7856,cached_hierarchy__3165__auto____7857));
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
pos.client.util.item_total_price = (function item_total_price(p__7860){
var map__7861__7862 = p__7860;
var map__7861__7863 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7861__7862))?cljs.core.apply.call(null,cljs.core.hash_map,map__7861__7862):map__7861__7862);
var price__7864 = cljs.core.get.call(null,map__7861__7863,"\uFDD0'price");
var qty__7865 = cljs.core.get.call(null,map__7861__7863,"\uFDD0'qty");

var total__7866 = (qty__7865 * price__7864);

return clojure.string.replace.call(null,total__7866.toFixed(2),".",",");
});
pos.client.util.basket_total = (function basket_total(basket){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7859_SHARP_){
return ("\uFDD0'price".call(null,p1__7859_SHARP_) * "\uFDD0'qty".call(null,p1__7859_SHARP_));
}),basket));
});
/**
* Parse value from dom input field to num
*/
pos.client.util.field_value_as_num = (function field_value_as_num(v){
return parseFloat.call(null,clojure.string.replace.call(null,v,",","."));
});
/**
* Format number to a price shown in an input field. Return empty
* string for nil
*/
pos.client.util.num_as_field_value = (function num_as_field_value(v){
if(cljs.core.truth_((v === null)))
{return "";
} else
{return clojure.string.replace.call(null,v.toFixed(2),".",",");
}
});
/**
* Get/set value of input element
*/
pos.client.util.value = (function() {
var value = null;
var value__7867 = (function (el){
return el.attr("value");
});
var value__7868 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7867.call(this,el);
case  2 :
return value__7868.call(this,el,val);
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
var d__7870 = (new goog.date.DateTime());
var dtf__7871 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__7871.format(d__7870);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__7872 = (new goog.Timer(1000));

t__7872.start();
return goog.events.listen(t__7872,goog.Timer.TICK,cb);
});
