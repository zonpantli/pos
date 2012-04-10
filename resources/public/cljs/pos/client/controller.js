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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____7750 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7751 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7752 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7753 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7754 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____7754,method_table__3162__auto____7750,prefer_table__3163__auto____7751,method_cache__3164__auto____7752,cached_hierarchy__3165__auto____7753));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__7755){
var map__7756__7757 = p__7755;
var map__7756__7758 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7756__7757))?cljs.core.apply.call(null,cljs.core.hash_map,map__7756__7757):map__7756__7757);
var new_val__7759 = cljs.core.get.call(null,map__7756__7758,"\uFDD0'new-val");
var id__7760 = cljs.core.get.call(null,map__7756__7758,"\uFDD0'id");

var item__7761 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7760);
var new_as_num__7762 = pos.client.util.field_value_as_num.call(null,new_val__7759);

if(cljs.core.truth_((function (){var and__3546__auto____7763 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7762));

if(cljs.core.truth_(and__3546__auto____7763))
{return cljs.core.not_EQ_.call(null,new_as_num__7762,"\uFDD0'qty".call(null,item__7761));
} else
{return and__3546__auto____7763;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7761,cljs.core.merge.call(null,item__7761,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__7762})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__7764){
var map__7765__7766 = p__7764;
var map__7765__7767 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7765__7766))?cljs.core.apply.call(null,cljs.core.hash_map,map__7765__7766):map__7765__7766);
var new_val__7768 = cljs.core.get.call(null,map__7765__7767,"\uFDD0'new-val");
var id__7769 = cljs.core.get.call(null,map__7765__7767,"\uFDD0'id");

var item__7770 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7769);
var new_as_num__7771 = pos.client.util.field_value_as_num.call(null,new_val__7768);

if(cljs.core.truth_((function (){var and__3546__auto____7772 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7771));

if(cljs.core.truth_(and__3546__auto____7772))
{return cljs.core.not_EQ_.call(null,new_as_num__7771,"\uFDD0'price".call(null,item__7770));
} else
{return and__3546__auto____7772;
}
})()))
{var default_price__7773 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7769));
var discount__7774 = (100 * ((default_price__7773 - new_as_num__7771) / default_price__7773));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7770,cljs.core.merge.call(null,item__7770,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__7771,"\uFDD0'discount":discount__7774})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__7775){
var map__7776__7777 = p__7775;
var map__7776__7778 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7776__7777))?cljs.core.apply.call(null,cljs.core.hash_map,map__7776__7777):map__7776__7777);
var new_val__7779 = cljs.core.get.call(null,map__7776__7778,"\uFDD0'new-val");
var id__7780 = cljs.core.get.call(null,map__7776__7778,"\uFDD0'id");

var item__7781 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7780);
var new_as_num__7782 = pos.client.util.field_value_as_num.call(null,new_val__7779);

if(cljs.core.truth_((function (){var and__3546__auto____7783 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7782));

if(cljs.core.truth_(and__3546__auto____7783))
{return cljs.core.not_EQ_.call(null,new_as_num__7782,"\uFDD0'discount".call(null,item__7781));
} else
{return and__3546__auto____7783;
}
})()))
{var default_price__7784 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7780));
var price__7785 = (default_price__7784 - ((new_as_num__7782 / 100) * default_price__7784));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7781,cljs.core.merge.call(null,item__7781,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__7782,"\uFDD0'price":price__7785})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__7787){
var d__7788 = p__7787;
var d__7789 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__7788))?cljs.core.apply.call(null,cljs.core.hash_map,d__7788):d__7788);
var new_val__7790 = cljs.core.get.call(null,d__7789,"\uFDD0'new-val");
var changed_attr__7791 = cljs.core.get.call(null,d__7789,"\uFDD0'changed-attr");
var id__7792 = cljs.core.get.call(null,d__7789,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__7789);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__7797__delegate = function (_){
var tot__7793 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__7794 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7786_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__7786_SHARP_))) * "\uFDD0'qty".call(null,p1__7786_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__7795 = (0.22 * tot__7793);
var discount__7796 = (tot_norm__7794 - tot__7793);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__7793,"\uFDD0'vat":vat__7795,"\uFDD0'discount":discount__7796}));
};
var G__7797 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7797__delegate.call(this, _);
};
G__7797.cljs$lang$maxFixedArity = 0;
G__7797.cljs$lang$applyTo = (function (arglist__7798){
var _ = cljs.core.seq( arglist__7798 );;
return G__7797__delegate.call(this, _);
});
return G__7797;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____7799 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7800 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7801 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7802 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7803 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7803,method_table__3162__auto____7799,prefer_table__3163__auto____7800,method_cache__3164__auto____7801,cached_hierarchy__3165__auto____7802));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____7804))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____7804;
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
var pusher__7806 = (new Pusher("a32696b95bcc47185377"));
var channel__7807 = pusher__7806.subscribe("kovalo-pos");

return channel__7807.bind("customer-nfc",(function (p1__7805_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__7805_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
