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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____7724 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7725 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7726 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7727 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7728 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____7728,method_table__3162__auto____7724,prefer_table__3163__auto____7725,method_cache__3164__auto____7726,cached_hierarchy__3165__auto____7727));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__7729){
var map__7730__7731 = p__7729;
var map__7730__7732 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7730__7731))?cljs.core.apply.call(null,cljs.core.hash_map,map__7730__7731):map__7730__7731);
var new_val__7733 = cljs.core.get.call(null,map__7730__7732,"\uFDD0'new-val");
var id__7734 = cljs.core.get.call(null,map__7730__7732,"\uFDD0'id");

var item__7735 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7734);
var new_as_num__7736 = pos.client.util.field_value_as_num.call(null,new_val__7733);

if(cljs.core.truth_((function (){var and__3546__auto____7737 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7736));

if(cljs.core.truth_(and__3546__auto____7737))
{return cljs.core.not_EQ_.call(null,new_as_num__7736,"\uFDD0'qty".call(null,item__7735));
} else
{return and__3546__auto____7737;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7735,cljs.core.merge.call(null,item__7735,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__7736})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__7738){
var map__7739__7740 = p__7738;
var map__7739__7741 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7739__7740))?cljs.core.apply.call(null,cljs.core.hash_map,map__7739__7740):map__7739__7740);
var new_val__7742 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'new-val");
var id__7743 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'id");

var item__7744 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7743);
var new_as_num__7745 = pos.client.util.field_value_as_num.call(null,new_val__7742);

if(cljs.core.truth_((function (){var and__3546__auto____7746 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7745));

if(cljs.core.truth_(and__3546__auto____7746))
{return cljs.core.not_EQ_.call(null,new_as_num__7745,"\uFDD0'price".call(null,item__7744));
} else
{return and__3546__auto____7746;
}
})()))
{var default_price__7747 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7743));
var discount__7748 = (100 * ((default_price__7747 - new_as_num__7745) / default_price__7747));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7744,cljs.core.merge.call(null,item__7744,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__7745,"\uFDD0'discount":discount__7748})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__7749){
var map__7750__7751 = p__7749;
var map__7750__7752 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7750__7751))?cljs.core.apply.call(null,cljs.core.hash_map,map__7750__7751):map__7750__7751);
var new_val__7753 = cljs.core.get.call(null,map__7750__7752,"\uFDD0'new-val");
var id__7754 = cljs.core.get.call(null,map__7750__7752,"\uFDD0'id");

var item__7755 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7754);
var new_as_num__7756 = pos.client.util.field_value_as_num.call(null,new_val__7753);

if(cljs.core.truth_((function (){var and__3546__auto____7757 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7756));

if(cljs.core.truth_(and__3546__auto____7757))
{return cljs.core.not_EQ_.call(null,new_as_num__7756,"\uFDD0'discount".call(null,item__7755));
} else
{return and__3546__auto____7757;
}
})()))
{var default_price__7758 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7754));
var price__7759 = (default_price__7758 - ((new_as_num__7756 / 100) * default_price__7758));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7755,cljs.core.merge.call(null,item__7755,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__7756,"\uFDD0'price":price__7759})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__7761){
var d__7762 = p__7761;
var d__7763 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__7762))?cljs.core.apply.call(null,cljs.core.hash_map,d__7762):d__7762);
var new_val__7764 = cljs.core.get.call(null,d__7763,"\uFDD0'new-val");
var changed_attr__7765 = cljs.core.get.call(null,d__7763,"\uFDD0'changed-attr");
var id__7766 = cljs.core.get.call(null,d__7763,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__7763);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__7771__delegate = function (_){
var tot__7767 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__7768 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7760_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__7760_SHARP_))) * "\uFDD0'qty".call(null,p1__7760_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__7769 = (0.22 * tot__7767);
var discount__7770 = (tot_norm__7768 - tot__7767);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__7767,"\uFDD0'vat":vat__7769,"\uFDD0'discount":discount__7770}));
};
var G__7771 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7771__delegate.call(this, _);
};
G__7771.cljs$lang$maxFixedArity = 0;
G__7771.cljs$lang$applyTo = (function (arglist__7772){
var _ = cljs.core.seq( arglist__7772 );;
return G__7771__delegate.call(this, _);
});
return G__7771;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____7773 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7774 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7775 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7776 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7777 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7777,method_table__3162__auto____7773,prefer_table__3163__auto____7774,method_cache__3164__auto____7775,cached_hierarchy__3165__auto____7776));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____7778 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____7778))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____7778;
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
var pusher__7780 = (new Pusher("a32696b95bcc47185377"));
var channel__7781 = pusher__7780.subscribe("kovalo-pos");

return channel__7781.bind("customer-nfc",(function (p1__7779_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__7779_SHARP_);
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
