goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_coll_by_id = (function from_coll_by_id(xs,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7819_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7819_SHARP_),id);
}),xs));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____7820 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7821 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7822 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7823 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7824 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____7824,method_table__3162__auto____7820,prefer_table__3163__auto____7821,method_cache__3164__auto____7822,cached_hierarchy__3165__auto____7823));
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
pos.client.util.item_total_price = (function item_total_price(p__7826){
var map__7827__7828 = p__7826;
var map__7827__7829 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7827__7828))?cljs.core.apply.call(null,cljs.core.hash_map,map__7827__7828):map__7827__7828);
var price__7830 = cljs.core.get.call(null,map__7827__7829,"\uFDD0'price");
var qty__7831 = cljs.core.get.call(null,map__7827__7829,"\uFDD0'qty");

var total__7832 = (qty__7831 * price__7830);

return clojure.string.replace.call(null,total__7832.toFixed(2),".",",");
});
pos.client.util.basket_total = (function basket_total(basket){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7825_SHARP_){
return ("\uFDD0'price".call(null,p1__7825_SHARP_) * "\uFDD0'qty".call(null,p1__7825_SHARP_));
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
var value__7833 = (function (el){
return el.attr("value");
});
var value__7834 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7833.call(this,el);
case  2 :
return value__7834.call(this,el,val);
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
var d__7836 = (new goog.date.DateTime());
var dtf__7837 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__7837.format(d__7836);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__7838 = (new goog.Timer(1000));

t__7838.start();
return goog.events.listen(t__7838,goog.Timer.TICK,cb);
});
