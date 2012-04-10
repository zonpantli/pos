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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____8911 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8912 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8913 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8914 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8915 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____8915,method_table__3162__auto____8911,prefer_table__3163__auto____8912,method_cache__3164__auto____8913,cached_hierarchy__3165__auto____8914));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__8916){
var map__8917__8918 = p__8916;
var map__8917__8919 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8917__8918))?cljs.core.apply.call(null,cljs.core.hash_map,map__8917__8918):map__8917__8918);
var new_val__8920 = cljs.core.get.call(null,map__8917__8919,"\uFDD0'new-val");
var id__8921 = cljs.core.get.call(null,map__8917__8919,"\uFDD0'id");

var item__8922 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8921);
var new_as_num__8923 = pos.client.util.field_value_as_num.call(null,new_val__8920);

if(cljs.core.truth_((function (){var and__3546__auto____8924 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8923));

if(cljs.core.truth_(and__3546__auto____8924))
{return cljs.core.not_EQ_.call(null,new_as_num__8923,"\uFDD0'qty".call(null,item__8922));
} else
{return and__3546__auto____8924;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8922,cljs.core.merge.call(null,item__8922,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__8923})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__8925){
var map__8926__8927 = p__8925;
var map__8926__8928 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8926__8927))?cljs.core.apply.call(null,cljs.core.hash_map,map__8926__8927):map__8926__8927);
var new_val__8929 = cljs.core.get.call(null,map__8926__8928,"\uFDD0'new-val");
var id__8930 = cljs.core.get.call(null,map__8926__8928,"\uFDD0'id");

var item__8931 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8930);
var new_as_num__8932 = pos.client.util.field_value_as_num.call(null,new_val__8929);

if(cljs.core.truth_((function (){var and__3546__auto____8933 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8932));

if(cljs.core.truth_(and__3546__auto____8933))
{return cljs.core.not_EQ_.call(null,new_as_num__8932,"\uFDD0'price".call(null,item__8931));
} else
{return and__3546__auto____8933;
}
})()))
{var default_price__8934 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8930));
var discount__8935 = (100 * ((default_price__8934 - new_as_num__8932) / default_price__8934));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8931,cljs.core.merge.call(null,item__8931,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__8932,"\uFDD0'discount":discount__8935})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__8936){
var map__8937__8938 = p__8936;
var map__8937__8939 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8937__8938))?cljs.core.apply.call(null,cljs.core.hash_map,map__8937__8938):map__8937__8938);
var new_val__8940 = cljs.core.get.call(null,map__8937__8939,"\uFDD0'new-val");
var id__8941 = cljs.core.get.call(null,map__8937__8939,"\uFDD0'id");

var item__8942 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8941);
var new_as_num__8943 = pos.client.util.field_value_as_num.call(null,new_val__8940);

if(cljs.core.truth_((function (){var and__3546__auto____8944 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8943));

if(cljs.core.truth_(and__3546__auto____8944))
{return cljs.core.not_EQ_.call(null,new_as_num__8943,"\uFDD0'discount".call(null,item__8942));
} else
{return and__3546__auto____8944;
}
})()))
{var default_price__8945 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8941));
var price__8946 = (default_price__8945 - ((new_as_num__8943 / 100) * default_price__8945));

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8942,cljs.core.merge.call(null,item__8942,cljs.core.ObjMap.fromObject(["\uFDD0'discount","\uFDD0'price"],{"\uFDD0'discount":new_as_num__8943,"\uFDD0'price":price__8946})));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__8949){
var d__8950 = p__8949;
var d__8951 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__8950))?cljs.core.apply.call(null,cljs.core.hash_map,d__8950):d__8950);
var new_val__8952 = cljs.core.get.call(null,d__8951,"\uFDD0'new-val");
var changed_attr__8953 = cljs.core.get.call(null,d__8951,"\uFDD0'changed-attr");
var id__8954 = cljs.core.get.call(null,d__8951,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__8951);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function() { 
var G__8959__delegate = function (_){
var tot__8955 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__8947_SHARP_){
return ("\uFDD0'price".call(null,p1__8947_SHARP_) * "\uFDD0'qty".call(null,p1__8947_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var tot_norm__8956 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__8948_SHARP_){
return ("\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),"\uFDD0'id".call(null,p1__8948_SHARP_))) * "\uFDD0'qty".call(null,p1__8948_SHARP_));
}),cljs.core.deref.call(null,pos.client.model.basket)));
var vat__8957 = (0.22 * tot__8955);
var discount__8958 = (tot_norm__8956 - tot__8955);

return lib.dispatch.fire.call(null,"\uFDD0'update-basket-total",cljs.core.ObjMap.fromObject(["\uFDD0'tot","\uFDD0'vat","\uFDD0'discount"],{"\uFDD0'tot":tot__8955,"\uFDD0'vat":vat__8957,"\uFDD0'discount":discount__8958}));
};
var G__8959 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8959__delegate.call(this, _);
};
G__8959.cljs$lang$maxFixedArity = 0;
G__8959.cljs$lang$applyTo = (function (arglist__8960){
var _ = cljs.core.seq( arglist__8960 );;
return G__8959__delegate.call(this, _);
});
return G__8959;
})()
);
/**
* Accepts mat of information about action to be performed
*/
pos.client.controller.action = (function (){var method_table__3162__auto____8961 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8962 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8963 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8964 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8965 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("action","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____8965,method_table__3162__auto____8961,prefer_table__3163__auto____8962,method_cache__3164__auto____8963,cached_hierarchy__3165__auto____8964));
})();
cljs.core._add_method.call(null,pos.client.controller.action,"\uFDD0'proceed",(function (_){
if(cljs.core.truth_((function (){var and__3546__auto____8966 = cljs.core.not_EQ_.call(null,"\uFDD0'state".call(null,cljs.core.deref.call(null,pos.client.model.state)),"\uFDD0'tender");

if(cljs.core.truth_(and__3546__auto____8966))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,pos.client.model.basket)));
} else
{return and__3546__auto____8966;
}
})()))
{return cljs.core.swap_BANG_.call(null,pos.client.model.state,cljs.core.assoc,"\uFDD0'state","\uFDD0'tender");
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'proceed"]),(function (t,d){
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
var pusher__8968 = (new Pusher("a32696b95bcc47185377"));
var channel__8969 = pusher__8968.subscribe("kovalo-pos");

return channel__8969.bind("customer-nfc",(function (p1__8967_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__8967_SHARP_);
}));
});
/**
* Main entry point for the app
*/
pos.client.controller.init = (function init(){
pos.client.controller.fetch_client_data.call(null);
return pos.client.view.prepare_ui.call(null);
});
