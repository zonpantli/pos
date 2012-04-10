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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____7778 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7779 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7780 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7781 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7782 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____7782,method_table__3162__auto____7778,prefer_table__3163__auto____7779,method_cache__3164__auto____7780,cached_hierarchy__3165__auto____7781));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__7783){
var map__7784__7785 = p__7783;
var map__7784__7786 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7784__7785))?cljs.core.apply.call(null,cljs.core.hash_map,map__7784__7785):map__7784__7785);
var new_val__7787 = cljs.core.get.call(null,map__7784__7786,"\uFDD0'new-val");
var id__7788 = cljs.core.get.call(null,map__7784__7786,"\uFDD0'id");

var item__7789 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7788);
var new_as_num__7790 = pos.client.util.field_value_as_num.call(null,new_val__7787);

if(cljs.core.truth_((function (){var and__3546__auto____7791 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7790));

if(cljs.core.truth_(and__3546__auto____7791))
{return cljs.core.not_EQ_.call(null,new_as_num__7790,"\uFDD0'qty".call(null,item__7789));
} else
{return and__3546__auto____7791;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7789,cljs.core.merge.call(null,item__7789,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__7790})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__7792){
var map__7793__7794 = p__7792;
var map__7793__7795 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7793__7794))?cljs.core.apply.call(null,cljs.core.hash_map,map__7793__7794):map__7793__7794);
var new_val__7796 = cljs.core.get.call(null,map__7793__7795,"\uFDD0'new-val");
var id__7797 = cljs.core.get.call(null,map__7793__7795,"\uFDD0'id");

var item__7798 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7797);
var new_as_num__7799 = pos.client.util.field_value_as_num.call(null,new_val__7796);

if(cljs.core.truth_((function (){var and__3546__auto____7800 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7799));

if(cljs.core.truth_(and__3546__auto____7800))
{return cljs.core.not_EQ_.call(null,new_as_num__7799,"\uFDD0'price".call(null,item__7798));
} else
{return and__3546__auto____7800;
}
})()))
{var default_price__7801 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7797));
var discount__7802 = (100 * ((default_price__7801 - new_as_num__7799) / default_price__7801));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7798,cljs.core.merge.call(null,item__7798,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__7799,"\uFDD0'discount":discount__7802})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__7803){
var map__7804__7805 = p__7803;
var map__7804__7806 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7804__7805))?cljs.core.apply.call(null,cljs.core.hash_map,map__7804__7805):map__7804__7805);
var new_val__7807 = cljs.core.get.call(null,map__7804__7806,"\uFDD0'new-val");
var id__7808 = cljs.core.get.call(null,map__7804__7806,"\uFDD0'id");

var item__7809 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7808);
var new_as_num__7810 = pos.client.util.field_value_as_num.call(null,new_val__7807);

if(cljs.core.truth_((function (){var and__3546__auto____7811 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7810));

if(cljs.core.truth_(and__3546__auto____7811))
{return cljs.core.not_EQ_.call(null,new_as_num__7810,"\uFDD0'discount".call(null,item__7809));
} else
{return and__3546__auto____7811;
}
})()))
{var default_price__7812 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7808));
var price__7813 = (default_price__7812 - ((new_as_num__7810 / 100) * default_price__7812));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7809,cljs.core.merge.call(null,item__7809,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__7810,"\uFDD0'price":price__7813})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__7815){
var d__7816 = p__7815;
var d__7817 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__7816))?cljs.core.apply.call(null,cljs.core.hash_map,d__7816):d__7816);
var new_val__7818 = cljs.core.get.call(null,d__7817,"\uFDD0'new-val");
var changed_attr__7819 = cljs.core.get.call(null,d__7817,"\uFDD0'changed-attr");
var id__7820 = cljs.core.get.call(null,d__7817,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__7817);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__7825__delegate = function (_){
var tot__7821 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__7822 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7814_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__7814_SHARP_))) * "\uFDD0'qty".call(null,p1__7814_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__7823 = (0.22 * tot__7821);
var discount__7824 = (tot_norm__7822 - tot__7821);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__7821,"\uFDD0'vat":vat__7823,"\uFDD0'discount":discount__7824}));
};
var G__7825 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7825__delegate.call(this, _);
};
G__7825.cljs$lang$maxFixedArity = 0;
G__7825.cljs$lang$applyTo = (function (arglist__7826){
var _ = cljs.core.seq( arglist__7826 );;
return G__7825__delegate.call(this, _);
});
return G__7825;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____7827 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7828 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7829 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7830 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7831 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7831,method_table__3162__auto____7827,prefer_table__3163__auto____7828,method_cache__3164__auto____7829,cached_hierarchy__3165__auto____7830));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____7832))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____7832;
}
})()))
{cljs.core.reset_BANG_.call(null,pos.client.model.tender,cljs.core.ObjMap.fromObject(["\uFDD0'cash","\uFDD0'card","\uFDD0'gift"],{"\uFDD0'cash":null,"\uFDD0'card":null,"\uFDD0'gift":null}));
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
var pusher__7834 = (new Pusher("a32696b95bcc47185377"));
var channel__7835 = pusher__7834.subscribe("kovalo-pos");

return channel__7835.bind("customer-nfc",(function (p1__7833_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__7833_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
