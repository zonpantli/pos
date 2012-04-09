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
pos.client.controller.update_basket_item = (function (){var method_table__3162__auto____7981 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7982 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7983 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7984 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7985 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("update-basket-item","\uFDD0'changed-attr","\uFDD0'default",hierarchy__3166__auto____7985,method_table__3162__auto____7981,prefer_table__3163__auto____7982,method_cache__3164__auto____7983,cached_hierarchy__3165__auto____7984));
})();
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'qty",(function (p__7986){
var map__7987__7988 = p__7986;
var map__7987__7989 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7987__7988))?cljs.core.apply.call(null,cljs.core.hash_map,map__7987__7988):map__7987__7988);
var new_val__7990 = cljs.core.get.call(null,map__7987__7989,"\uFDD0'new-val");
var id__7991 = cljs.core.get.call(null,map__7987__7989,"\uFDD0'id");

var item__7992 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__7991);
var new_as_num__7993 = pos.client.util.field_value_as_num.call(null,new_val__7990);

if(cljs.core.truth_((function (){var and__3546__auto____7994 = cljs.core.not.call(null,isNaN.call(null,new_as_num__7993));

if(cljs.core.truth_(and__3546__auto____7994))
{return cljs.core.not_EQ_.call(null,new_as_num__7993,"\uFDD0'qty".call(null,item__7992));
} else
{return and__3546__auto____7994;
}
})()))
{return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7992,cljs.core.merge.call(null,item__7992,cljs.core.ObjMap.fromObject(["\uFDD0'qty"],{"\uFDD0'qty":new_as_num__7993})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'price",(function (p__7995){
var map__7996__7997 = p__7995;
var map__7996__7998 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7996__7997))?cljs.core.apply.call(null,cljs.core.hash_map,map__7996__7997):map__7996__7997);
var new_val__7999 = cljs.core.get.call(null,map__7996__7998,"\uFDD0'new-val");
var id__8000 = cljs.core.get.call(null,map__7996__7998,"\uFDD0'id");

var item__8001 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),id__8000);
var new_as_num__8002 = pos.client.util.field_value_as_num.call(null,new_val__7999);

if(cljs.core.truth_((function (){var and__3546__auto____8003 = cljs.core.not.call(null,isNaN.call(null,new_as_num__8002));

if(cljs.core.truth_(and__3546__auto____8003))
{return cljs.core.not_EQ_.call(null,new_as_num__8002,"\uFDD0'price".call(null,item__8001));
} else
{return and__3546__auto____8003;
}
})()))
{var default_price__8004 = "\uFDD0'price".call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8000));
var discount__8005 = ((default_price__8004 - new_as_num__8002) / default_price__8004);

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__8001,cljs.core.merge.call(null,item__8001,cljs.core.ObjMap.fromObject(["\uFDD0'price","\uFDD0'discount"],{"\uFDD0'price":new_as_num__8002,"\uFDD0'discount":discount__8005})));
} else
{return null;
}
}));
cljs.core._add_method.call(null,pos.client.controller.update_basket_item,"\uFDD0'discount",(function (p__8006){
var map__8007__8008 = p__8006;
var map__8007__8009 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8007__8008))?cljs.core.apply.call(null,cljs.core.hash_map,map__8007__8008):map__8007__8008);
var new_val__8010 = cljs.core.get.call(null,map__8007__8009,"\uFDD0'new-val");
var id__8011 = cljs.core.get.call(null,map__8007__8009,"\uFDD0'id");

return null;
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-update"]),(function (_,p__8012){
var d__8013 = p__8012;
var d__8014 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,d__8013))?cljs.core.apply.call(null,cljs.core.hash_map,d__8013):d__8013);
var new_val__8015 = cljs.core.get.call(null,d__8014,"\uFDD0'new-val");
var changed_attr__8016 = cljs.core.get.call(null,d__8014,"\uFDD0'changed-attr");
var id__8017 = cljs.core.get.call(null,d__8014,"\uFDD0'id");

return pos.client.controller.update_basket_item.call(null,d__8014);
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
var pusher__8019 = (new Pusher("a32696b95bcc47185377"));
var channel__8020 = pusher__8019.subscribe("kovalo-pos");

return channel__8020.bind("customer-nfc",(function (p1__8018_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'pusher-customer-nfc",p1__8018_SHARP_);
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
