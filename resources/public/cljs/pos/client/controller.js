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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____14382 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14383 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14384 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14385 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14386 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____14386,method_table__3162__auto____14382,prefer_table__3163__auto____14383,method_cache__3164__auto____14384,cached_hierarchy__3165__auto____14385));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__14387){
var map__14388__14389 = p__14387;
var map__14388__14390 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14388__14389))?cljs.core.apply.call(null,cljs.core.hash_map,map__14388__14389):map__14388__14389);
var new_val__14391 = cljs.core.get.call(null,map__14388__14390,"\uFDD0'new-val");
var id__14392 = cljs.core.get.call(null,map__14388__14390,"\uFDD0'id");

var item__14393 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__14392);
var new_as_num__14394 = pos.client.util.field_value_as_num.call(null,new_val__14391);

if(cljs.core.truth_((function (){var and__3546__auto____14395 = cljs.core.not.call(null,isNaN.call(null,new_as_num__14394));

if(cljs.core.truth_(and__3546__auto____14395))
{return cljs.core.not_EQ_.call(null,new_as_num__14394,"\uFDD0'qty".call(null,item__14393));
} else
{return and__3546__auto____14395;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__14393,cljs.core.merge.call(null,item__14393,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__14394})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__14396){
var map__14397__14398 = p__14396;
var map__14397__14399 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14397__14398))?cljs.core.apply.call(null,cljs.core.hash_map,map__14397__14398):map__14397__14398);
var new_val__14400 = cljs.core.get.call(null,map__14397__14399,"\uFDD0'new-val");
var id__14401 = cljs.core.get.call(null,map__14397__14399,"\uFDD0'id");

var item__14402 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__14401);
var new_as_num__14403 = pos.client.util.field_value_as_num.call(null,new_val__14400);

if(cljs.core.truth_((function (){var and__3546__auto____14404 = cljs.core.not.call(null,isNaN.call(null,new_as_num__14403));

if(cljs.core.truth_(and__3546__auto____14404))
{return cljs.core.not_EQ_.call(null,new_as_num__14403,"\uFDD0'price".call(null,item__14402));
} else
{return and__3546__auto____14404;
}
})()))
{var default_price__14405 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14401));
var discount__14406 = (100 * ((default_price__14405 - new_as_num__14403) / default_price__14405));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__14402,cljs.core.merge.call(null,item__14402,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__14403,"\uFDD0'discount":discount__14406})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__14407){
var map__14408__14409 = p__14407;
var map__14408__14410 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14408__14409))?cljs.core.apply.call(null,cljs.core.hash_map,map__14408__14409):map__14408__14409);
var new_val__14411 = cljs.core.get.call(null,map__14408__14410,"\uFDD0'new-val");
var id__14412 = cljs.core.get.call(null,map__14408__14410,"\uFDD0'id");

var item__14413 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__14412);
var new_as_num__14414 = pos.client.util.field_value_as_num.call(null,new_val__14411);

if(cljs.core.truth_((function (){var and__3546__auto____14415 = cljs.core.not.call(null,isNaN.call(null,new_as_num__14414));

if(cljs.core.truth_(and__3546__auto____14415))
{return cljs.core.not_EQ_.call(null,new_as_num__14414,"\uFDD0'discount".call(null,item__14413));
} else
{return and__3546__auto____14415;
}
})()))
{var default_price__14416 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14412));
var price__14417 = (default_price__14416 - ((new_as_num__14414 / 100) * default_price__14416));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__14413,cljs.core.merge.call(null,item__14413,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__14414,"\uFDD0'price":price__14417})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__14419){
var d__14420 = p__14419;
var d__14421 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__14420))?cljs.core.apply.call(null,cljs.core.hash_map,d__14420):d__14420);
var new_val__14422 = cljs.core.get.call(null,d__14421,"\uFDD0'new-val");
var changed_attr__14423 = cljs.core.get.call(null,d__14421,"\uFDD0'changed-attr");
var id__14424 = cljs.core.get.call(null,d__14421,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__14421);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__14429__delegate = function (_){
var tot__14425 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__14426 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__14418_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__14418_SHARP_))) * "\uFDD0'qty".call(null,p1__14418_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__14427 = (0.22 * tot__14425);
var discount__14428 = (tot_norm__14426 - tot__14425);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__14425,"\uFDD0'vat":vat__14427,"\uFDD0'discount":discount__14428}));
};
var G__14429 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14429__delegate.call(this, _);
};
G__14429.cljs$lang$maxFixedArity = 0;
G__14429.cljs$lang$applyTo = (function (arglist__14430){
var _ = cljs.core.seq( arglist__14430 );;
return G__14429__delegate.call(this, _);
});
return G__14429;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____14431 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14432 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14433 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14434 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14435 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____14435,method_table__3162__auto____14431,prefer_table__3163__auto____14432,method_cache__3164__auto____14433,cached_hierarchy__3165__auto____14434));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____14436 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____14436))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____14436;
}
})()))
{cljs.core.reset_BANG_.call(null,pos.client.model.tender,cljs.core.ObjMap.fromObject(["\uFDD0'total","\uFDD0'cash","\uFDD0'card","\uFDD0'gift","\uFDD0'change"],{"\uFDD0'total":pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket)),"\uFDD0'cash":null,"\uFDD0'card":null,"\uFDD0'gift":null,"\uFDD0'change":null}));
return cljs.core.swap_BANG_.call(null,pos.client.model.state,cljs.core.assoc,"\uFDD0'state","\uFDD0'tender");
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'cancel-tender",(function (_){
cljs.core.reset_BANG_.call(null,pos.client.model.tender,cljs.core.ObjMap.fromObject([],{}));
return cljs.core.swap_BANG_.call(null,pos.client.model.state,cljs.core.assoc,"\uFDD0'state","\uFDD0'dashboard");
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'cancel-tender","\uFDD0'proceed-tender"]),(function (t,d){
return pos.client.controller.action.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data"],{"\uFDD0'type":t,"\uFDD0'data":d}));
}));
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
var pusher__14438 = (new Pusher("a32696b95bcc47185377"));
var channel__14439 = pusher__14438.subscribe("kovalo-pos");

return channel__14439.bind("customer-nfc",(function (p1__14437_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__14437_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
