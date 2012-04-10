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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____10807 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10808 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10809 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10810 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10811 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____10811,method_table__3162__auto____10807,prefer_table__3163__auto____10808,method_cache__3164__auto____10809,cached_hierarchy__3165__auto____10810));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__10812){
var map__10813__10814 = p__10812;
var map__10813__10815 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10813__10814))?cljs.core.apply.call(null,cljs.core.hash_map,map__10813__10814):map__10813__10814);
var new_val__10816 = cljs.core.get.call(null,map__10813__10815,"\uFDD0'new-val");
var id__10817 = cljs.core.get.call(null,map__10813__10815,"\uFDD0'id");

var item__10818 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__10817);
var new_as_num__10819 = pos.client.util.field_value_as_num.call(null,new_val__10816);

if(cljs.core.truth_((function (){var and__3546__auto____10820 = cljs.core.not.call(null,isNaN.call(null,new_as_num__10819));

if(cljs.core.truth_(and__3546__auto____10820))
{return cljs.core.not_EQ_.call(null,new_as_num__10819,"\uFDD0'qty".call(null,item__10818));
} else
{return and__3546__auto____10820;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__10818,cljs.core.merge.call(null,item__10818,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__10819})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__10821){
var map__10822__10823 = p__10821;
var map__10822__10824 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10822__10823))?cljs.core.apply.call(null,cljs.core.hash_map,map__10822__10823):map__10822__10823);
var new_val__10825 = cljs.core.get.call(null,map__10822__10824,"\uFDD0'new-val");
var id__10826 = cljs.core.get.call(null,map__10822__10824,"\uFDD0'id");

var item__10827 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__10826);
var new_as_num__10828 = pos.client.util.field_value_as_num.call(null,new_val__10825);

if(cljs.core.truth_((function (){var and__3546__auto____10829 = cljs.core.not.call(null,isNaN.call(null,new_as_num__10828));

if(cljs.core.truth_(and__3546__auto____10829))
{return cljs.core.not_EQ_.call(null,new_as_num__10828,"\uFDD0'price".call(null,item__10827));
} else
{return and__3546__auto____10829;
}
})()))
{var default_price__10830 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10826));
var discount__10831 = (100 * ((default_price__10830 - new_as_num__10828) / default_price__10830));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__10827,cljs.core.merge.call(null,item__10827,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__10828,"\uFDD0'discount":discount__10831})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__10832){
var map__10833__10834 = p__10832;
var map__10833__10835 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10833__10834))?cljs.core.apply.call(null,cljs.core.hash_map,map__10833__10834):map__10833__10834);
var new_val__10836 = cljs.core.get.call(null,map__10833__10835,"\uFDD0'new-val");
var id__10837 = cljs.core.get.call(null,map__10833__10835,"\uFDD0'id");

var item__10838 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__10837);
var new_as_num__10839 = pos.client.util.field_value_as_num.call(null,new_val__10836);

if(cljs.core.truth_((function (){var and__3546__auto____10840 = cljs.core.not.call(null,isNaN.call(null,new_as_num__10839));

if(cljs.core.truth_(and__3546__auto____10840))
{return cljs.core.not_EQ_.call(null,new_as_num__10839,"\uFDD0'discount".call(null,item__10838));
} else
{return and__3546__auto____10840;
}
})()))
{var default_price__10841 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10837));
var price__10842 = (default_price__10841 - ((new_as_num__10839 / 100) * default_price__10841));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__10838,cljs.core.merge.call(null,item__10838,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__10839,"\uFDD0'price":price__10842})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__10844){
var d__10845 = p__10844;
var d__10846 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__10845))?cljs.core.apply.call(null,cljs.core.hash_map,d__10845):d__10845);
var new_val__10847 = cljs.core.get.call(null,d__10846,"\uFDD0'new-val");
var changed_attr__10848 = cljs.core.get.call(null,d__10846,"\uFDD0'changed-attr");
var id__10849 = cljs.core.get.call(null,d__10846,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__10846);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__10854__delegate = function (_){
var tot__10850 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__10851 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__10843_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__10843_SHARP_))) * "\uFDD0'qty".call(null,p1__10843_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__10852 = (0.22 * tot__10850);
var discount__10853 = (tot_norm__10851 - tot__10850);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__10850,"\uFDD0'vat":vat__10852,"\uFDD0'discount":discount__10853}));
};
var G__10854 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10854__delegate.call(this, _);
};
G__10854.cljs$lang$maxFixedArity = 0;
G__10854.cljs$lang$applyTo = (function (arglist__10855){
var _ = cljs.core.seq( arglist__10855 );;
return G__10854__delegate.call(this, _);
});
return G__10854;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____10856 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10857 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10858 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10859 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10860 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____10860,method_table__3162__auto____10856,prefer_table__3163__auto____10857,method_cache__3164__auto____10858,cached_hierarchy__3165__auto____10859));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____10861 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____10861))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____10861;
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
var pusher__10863 = (new Pusher("a32696b95bcc47185377"));
var channel__10864 = pusher__10863.subscribe("kovalo-pos");

return channel__10864.bind("customer-nfc",(function (p1__10862_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__10862_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
