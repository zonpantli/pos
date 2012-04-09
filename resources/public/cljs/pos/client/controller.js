goog.provide('pos.client.controller');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('jayq.util');
goog.require('fetch.util');
goog.require('fetch.remotes');
goog.require('lib.dispatch');
goog.require('pos.client.view');
goog.require('pos.client.model');
/**
* Called when user edits item in the basket, this
* function updates the basket according the field that was changed
*/
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____9480 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9481 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9482 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9483 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9484 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____9484,method_table__3162__auto____9480,prefer_table__3163__auto____9481,method_cache__3164__auto____9482,cached_hierarchy__3165__auto____9483));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__9485){
var map__9486__9487 = p__9485;
var map__9486__9488 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9486__9487))?cljs.core.apply.call(null,cljs.core.hash_map,map__9486__9487):map__9486__9487);
var new_val__9489 = cljs.core.get.call(null,map__9486__9488,"\uFDD0'new-val");
var id__9490 = cljs.core.get.call(null,map__9486__9488,"\uFDD0'id");

var item__9491 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__9490);
var new_as_num__9492 = pos.client.util.field_value_as_num.call(null,new_val__9489);

if(cljs.core.truth_((function (){var and__3546__auto____9493 = cljs.core.not.call(null,isNaN.call(null,new_as_num__9492));

if(cljs.core.truth_(and__3546__auto____9493))
{return cljs.core.not_EQ_.call(null,new_as_num__9492,"\uFDD0'qty".call(null,item__9491));
} else
{return and__3546__auto____9493;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__9491,cljs.core.merge.call(null,item__9491,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__9492})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__9494){
var map__9495__9496 = p__9494;
var map__9495__9497 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9495__9496))?cljs.core.apply.call(null,cljs.core.hash_map,map__9495__9496):map__9495__9496);
var new_val__9498 = cljs.core.get.call(null,map__9495__9497,"\uFDD0'new-val");
var id__9499 = cljs.core.get.call(null,map__9495__9497,"\uFDD0'id");

var item__9500 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__9499);
var new_as_num__9501 = pos.client.util.field_value_as_num.call(null,new_val__9498);

if(cljs.core.truth_((function (){var and__3546__auto____9502 = cljs.core.not.call(null,isNaN.call(null,new_as_num__9501));

if(cljs.core.truth_(and__3546__auto____9502))
{return cljs.core.not_EQ_.call(null,new_as_num__9501,"\uFDD0'price".call(null,item__9500));
} else
{return and__3546__auto____9502;
}
})()))
{var default_price__9503 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9499));
var discount__9504 = (100 * ((default_price__9503 - new_as_num__9501) / default_price__9503));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__9500,cljs.core.merge.call(null,item__9500,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__9501,"\uFDD0'discount":discount__9504})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__9505){
var map__9506__9507 = p__9505;
var map__9506__9508 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9506__9507))?cljs.core.apply.call(null,cljs.core.hash_map,map__9506__9507):map__9506__9507);
var new_val__9509 = cljs.core.get.call(null,map__9506__9508,"\uFDD0'new-val");
var id__9510 = cljs.core.get.call(null,map__9506__9508,"\uFDD0'id");

var item__9511 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__9510);
var new_as_num__9512 = pos.client.util.field_value_as_num.call(null,new_val__9509);

if(cljs.core.truth_((function (){var and__3546__auto____9513 = cljs.core.not.call(null,isNaN.call(null,new_as_num__9512));

if(cljs.core.truth_(and__3546__auto____9513))
{return cljs.core.not_EQ_.call(null,new_as_num__9512,"\uFDD0'discount".call(null,item__9511));
} else
{return and__3546__auto____9513;
}
})()))
{var default_price__9514 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9510));
var price__9515 = (default_price__9514 - ((new_as_num__9512 / 100) * default_price__9514));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__9511,cljs.core.merge.call(null,item__9511,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__9512,"\uFDD0'price":price__9515})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__9518){
var d__9519 = p__9518;
var d__9520 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__9519))?cljs.core.apply.call(null,cljs.core.hash_map,d__9519):d__9519);
var new_val__9521 = cljs.core.get.call(null,d__9520,"\uFDD0'new-val");
var changed_attr__9522 = cljs.core.get.call(null,d__9520,"\uFDD0'changed-attr");
var id__9523 = cljs.core.get.call(null,d__9520,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__9520);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__9528__delegate = function (_){
var tot__9524 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9516_SHARP_){
return ("\uFDD0'price".call(null,p1__9516_SHARP_) * "\uFDD0'qty".call(null,p1__9516_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var tot_norm__9525 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9517_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__9517_SHARP_))) * "\uFDD0'qty".call(null,p1__9517_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__9526 = (0.22 * tot__9524);
var discount__9527 = (tot_norm__9525 - tot__9524);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__9524,"\uFDD0'vat":vat__9526,"\uFDD0'discount":discount__9527}));
};
var G__9528 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9528__delegate.call(this, _);
};
G__9528.cljs$lang$maxFixedArity = 0;
G__9528.cljs$lang$applyTo = (function (arglist__9529){
var _ = cljs.core.seq( arglist__9529 );;
return G__9528__delegate.call(this, _);
});
return G__9528;
})()
);
/**
* Fetch inventory and user data
*/
pos.client.controller.fetch_client_data = (function fetch_client_data(){
return fetch.remotes.remote_callback.call(null,"get-db",cljs.core.PersistentVector.fromArray([]),(function (res){
cljs.core.swap_BANG_.call(null,pos.client.model.data,cljs.core.merge,res);
return lib.dispatch.fire.call(null,"\uFDD0'init-data-done");
}));
});
/**
* Bind pusher websocket listener for NFC events
*/
pos.client.controller.bind_pusher_listener = (function bind_pusher_listener(){
var pusher__9531 = (new Pusher("a32696b95bcc47185377"));
var channel__9532 = pusher__9531.subscribe("kovalo-pos");

return channel__9532.bind("customer-nfc",(function (p1__9530_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__9530_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
pos.client.controller.bind_pusher_listener.call(null);
return pos.client.view.prepare_ui.call(null);
});
