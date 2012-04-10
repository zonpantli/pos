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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____15851 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____15852 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____15853 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____15854 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____15855 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____15855,method_table__3162__auto____15851,prefer_table__3163__auto____15852,method_cache__3164__auto____15853,cached_hierarchy__3165__auto____15854));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__15856){
var map__15857__15858 = p__15856;
var map__15857__15859 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15857__15858))?cljs.core.apply.call(null,cljs.core.hash_map,map__15857__15858):map__15857__15858);
var new_val__15860 = cljs.core.get.call(null,map__15857__15859,"\uFDD0'new-val");
var id__15861 = cljs.core.get.call(null,map__15857__15859,"\uFDD0'id");

var item__15862 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__15861);
var new_as_num__15863 = pos.client.util.field_value_as_num.call(null,new_val__15860);

if(cljs.core.truth_((function (){var and__3546__auto____15864 = cljs.core.not.call(null,isNaN.call(null,new_as_num__15863));

if(cljs.core.truth_(and__3546__auto____15864))
{return cljs.core.not_EQ_.call(null,new_as_num__15863,"\uFDD0'qty".call(null,item__15862));
} else
{return and__3546__auto____15864;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__15862,cljs.core.merge.call(null,item__15862,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__15863})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__15865){
var map__15866__15867 = p__15865;
var map__15866__15868 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15866__15867))?cljs.core.apply.call(null,cljs.core.hash_map,map__15866__15867):map__15866__15867);
var new_val__15869 = cljs.core.get.call(null,map__15866__15868,"\uFDD0'new-val");
var id__15870 = cljs.core.get.call(null,map__15866__15868,"\uFDD0'id");

var item__15871 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__15870);
var new_as_num__15872 = pos.client.util.field_value_as_num.call(null,new_val__15869);

if(cljs.core.truth_((function (){var and__3546__auto____15873 = cljs.core.not.call(null,isNaN.call(null,new_as_num__15872));

if(cljs.core.truth_(and__3546__auto____15873))
{return cljs.core.not_EQ_.call(null,new_as_num__15872,"\uFDD0'price".call(null,item__15871));
} else
{return and__3546__auto____15873;
}
})()))
{var default_price__15874 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__15870));
var discount__15875 = (100 * ((default_price__15874 - new_as_num__15872) / default_price__15874));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__15871,cljs.core.merge.call(null,item__15871,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__15872,"\uFDD0'discount":discount__15875})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__15876){
var map__15877__15878 = p__15876;
var map__15877__15879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15877__15878))?cljs.core.apply.call(null,cljs.core.hash_map,map__15877__15878):map__15877__15878);
var new_val__15880 = cljs.core.get.call(null,map__15877__15879,"\uFDD0'new-val");
var id__15881 = cljs.core.get.call(null,map__15877__15879,"\uFDD0'id");

var item__15882 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__15881);
var new_as_num__15883 = pos.client.util.field_value_as_num.call(null,new_val__15880);

if(cljs.core.truth_((function (){var and__3546__auto____15884 = cljs.core.not.call(null,isNaN.call(null,new_as_num__15883));

if(cljs.core.truth_(and__3546__auto____15884))
{return cljs.core.not_EQ_.call(null,new_as_num__15883,"\uFDD0'discount".call(null,item__15882));
} else
{return and__3546__auto____15884;
}
})()))
{var default_price__15885 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__15881));
var price__15886 = (default_price__15885 - ((new_as_num__15883 / 100) * default_price__15885));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__15882,cljs.core.merge.call(null,item__15882,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__15883,"\uFDD0'price":price__15886})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__15888){
var d__15889 = p__15888;
var d__15890 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__15889))?cljs.core.apply.call(null,cljs.core.hash_map,d__15889):d__15889);
var new_val__15891 = cljs.core.get.call(null,d__15890,"\uFDD0'new-val");
var changed_attr__15892 = cljs.core.get.call(null,d__15890,"\uFDD0'changed-attr");
var id__15893 = cljs.core.get.call(null,d__15890,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__15890);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__15898__delegate = function (_){
var tot__15894 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var tot_norm__15895 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__15887_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__15887_SHARP_))) * "\uFDD0'qty".call(null,p1__15887_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__15896 = (0.22 * tot__15894);
var discount__15897 = (tot_norm__15895 - tot__15894);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__15894,"\uFDD0'vat":vat__15896,"\uFDD0'discount":discount__15897}));
};
var G__15898 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15898__delegate.call(this, _);
};
G__15898.cljs$lang$maxFixedArity = 0;
G__15898.cljs$lang$applyTo = (function (arglist__15899){
var _ = cljs.core.seq( arglist__15899 );;
return G__15898__delegate.call(this, _);
});
return G__15898;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____15900 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____15901 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____15902 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____15903 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____15904 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____15904,method_table__3162__auto____15900,prefer_table__3163__auto____15901,method_cache__3164__auto____15902,cached_hierarchy__3165__auto____15903));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed-tender",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____15905 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____15905))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____15905;
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
var pusher__15907 = (new Pusher("a32696b95bcc47185377"));
var channel__15908 = pusher__15907.subscribe("kovalo-pos");

return channel__15908.bind("customer-nfc",(function (p1__15906_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__15906_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
