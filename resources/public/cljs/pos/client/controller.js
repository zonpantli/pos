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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____8568 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8569 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8570 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8571 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8572 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____8572,method_table__3162__auto____8568,prefer_table__3163__auto____8569,method_cache__3164__auto____8570,cached_hierarchy__3165__auto____8571));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__8573){
var map__8574__8575 = p__8573;
var map__8574__8576 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8574__8575))?cljs.core.apply.call(null,cljs.core.hash_map,map__8574__8575):map__8574__8575);
var new_val__8577 = cljs.core.get.call(null,map__8574__8576,"\uFDD0'new-val");
var id__8578 = cljs.core.get.call(null,map__8574__8576,"\uFDD0'id");

var item__8579 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8578);
var new_as_num__8580 = pos.client.util.field_value_as_num.call(null,new_val__8577);

if(cljs.core.truth_((function (){var and__3546__auto____8581 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8580));

if(cljs.core.truth_(and__3546__auto____8581))
{return cljs.core.not_EQ_.call(null,new_as_num__8580,"\uFDD0'qty".call(null,item__8579));
} else
{return and__3546__auto____8581;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8579,cljs.core.merge.call(null,item__8579,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__8580})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__8582){
var map__8583__8584 = p__8582;
var map__8583__8585 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8583__8584))?cljs.core.apply.call(null,cljs.core.hash_map,map__8583__8584):map__8583__8584);
var new_val__8586 = cljs.core.get.call(null,map__8583__8585,"\uFDD0'new-val");
var id__8587 = cljs.core.get.call(null,map__8583__8585,"\uFDD0'id");

var item__8588 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8587);
var new_as_num__8589 = pos.client.util.field_value_as_num.call(null,new_val__8586);

if(cljs.core.truth_((function (){var and__3546__auto____8590 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8589));

if(cljs.core.truth_(and__3546__auto____8590))
{return cljs.core.not_EQ_.call(null,new_as_num__8589,"\uFDD0'price".call(null,item__8588));
} else
{return and__3546__auto____8590;
}
})()))
{var default_price__8591 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8587));
var discount__8592 = (100 * ((default_price__8591 - new_as_num__8589) / default_price__8591));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8588,cljs.core.merge.call(null,item__8588,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__8589,"\uFDD0'discount":discount__8592})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__8593){
var map__8594__8595 = p__8593;
var map__8594__8596 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8594__8595))?cljs.core.apply.call(null,cljs.core.hash_map,map__8594__8595):map__8594__8595);
var new_val__8597 = cljs.core.get.call(null,map__8594__8596,"\uFDD0'new-val");
var id__8598 = cljs.core.get.call(null,map__8594__8596,"\uFDD0'id");

var item__8599 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8598);
var new_as_num__8600 = pos.client.util.field_value_as_num.call(null,new_val__8597);

if(cljs.core.truth_((function (){var and__3546__auto____8601 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8600));

if(cljs.core.truth_(and__3546__auto____8601))
{return cljs.core.not_EQ_.call(null,new_as_num__8600,"\uFDD0'discount".call(null,item__8599));
} else
{return and__3546__auto____8601;
}
})()))
{var default_price__8602 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8598));
var price__8603 = (default_price__8602 - ((new_as_num__8600 / 100) * default_price__8602));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8599,cljs.core.merge.call(null,item__8599,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__8600,"\uFDD0'price":price__8603})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__8604){
var d__8605 = p__8604;
var d__8606 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__8605))?cljs.core.apply.call(null,cljs.core.hash_map,d__8605):d__8605);
var new_val__8607 = cljs.core.get.call(null,d__8606,"\uFDD0'new-val");
var changed_attr__8608 = cljs.core.get.call(null,d__8606,"\uFDD0'changed-attr");
var id__8609 = cljs.core.get.call(null,d__8606,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__8606);
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
var pusher__8611 = (new Pusher("a32696b95bcc47185377"));
var channel__8612 = pusher__8611.subscribe("kovalo-pos");

return channel__8612.bind("customer-nfc",(function (p1__8610_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__8610_SHARP_);
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
