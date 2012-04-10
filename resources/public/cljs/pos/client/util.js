goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_coll_by_id = (function from_coll_by_id(xs,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16265_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__16265_SHARP_),id);
}),xs));
});
pos.client.util.default_variant = (function (){var method_table__3162__auto____16266 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____16267 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____16268 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____16269 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____16270 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("default-variant",cljs.core.coll_QMARK_,"\uFDD0'default",hierarchy__3166__auto____16270,method_table__3162__auto____16266,prefer_table__3163__auto____16267,method_cache__3164__auto____16268,cached_hierarchy__3165__auto____16269));
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
pos.client.util.item_total_price = (function item_total_price(p__16272){
var map__16273__16274 = p__16272;
var map__16273__16275 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16273__16274))?cljs.core.apply.call(null,cljs.core.hash_map,map__16273__16274):map__16273__16274);
var price__16276 = cljs.core.get.call(null,map__16273__16275,"\uFDD0'price");
var qty__16277 = cljs.core.get.call(null,map__16273__16275,"\uFDD0'qty");

var total__16278 = (qty__16277 * price__16276);

return clojure.string.replace.call(null,total__16278.toFixed(2),".",",");
});
pos.client.util.basket_total = (function basket_total(basket){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16271_SHARP_){
return ("\uFDD0'price".call(null,p1__16271_SHARP_) * "\uFDD0'qty".call(null,p1__16271_SHARP_));
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
var value__16279 = (function (el){
return el.attr("value");
});
var value__16280 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__16279.call(this,el);
case  2 :
return value__16280.call(this,el,val);
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
var d__16282 = (new goog.date.DateTime());
var dtf__16283 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__16283.format(d__16282);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__16284 = (new goog.Timer(1000));

t__16284.start();
return goog.events.listen(t__16284,goog.Timer.TICK,cb);
});
