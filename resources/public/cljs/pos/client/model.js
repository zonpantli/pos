goog.provide('pos.client.model');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('jayq.util');
goog.require('lib.dispatch');
goog.require('clojure.set');
/**
* Atom containing the state of application. Dashboad,
* hotkeys, tender
*/
pos.client.model.state = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'state"],{"\uFDD0'state":"\uFDD0'dashboard"}));
cljs.core.add_watch.call(null,pos.client.model.state,"\uFDD0'state-change-key",(function (k,r,o,n){
return lib.dispatch.fire.call(null,"\uFDD0'state-change",cljs.core.PersistentVector.fromArray(["\uFDD0'state".call(null,o),"\uFDD0'state".call(null,n)]));
}));
/**
* Atom containing data fetched from back-end. Customers,
* items, eployees and locations
*/
pos.client.model.data = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Atom containing selected location
*/
pos.client.model.location = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":null}));
cljs.core.add_watch.call(null,pos.client.model.location,"\uFDD0'location-change-key",(function (k,r,o,n){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,o,n)))
{return lib.dispatch.fire.call(null,"\uFDD0'location-change",n);
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-select"]),(function (_,d){
return cljs.core.swap_BANG_.call(null,pos.client.model.location,cljs.core.assoc,"\uFDD0'id",d);
}));
/**
* Atom containing selected employee
*/
pos.client.model.employee = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":null}));
cljs.core.add_watch.call(null,pos.client.model.employee,"\uFDD0'employee-change-key",(function (k,r,o,n){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,o,n)))
{return lib.dispatch.fire.call(null,"\uFDD0'employee-change",n);
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-select"]),(function (_,d){
return cljs.core.swap_BANG_.call(null,pos.client.model.employee,cljs.core.assoc,"\uFDD0'id",d);
}));
/**
* Atom containing selected customer and related reactors
* controlling the customer typeahead
*/
pos.client.model.customer = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":null}));
cljs.core.add_watch.call(null,pos.client.model.customer,"\uFDD0'customer-change-key",(function (k,r,o,n){
if(cljs.core.truth_((function (){var or__3548__auto____7836 = ("\uFDD0'id".call(null,n) === null);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{return cljs.core.not_EQ_.call(null,o,n);
}
})()))
{return lib.dispatch.fire.call(null,"\uFDD0'customer-change",n);
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'pusher-customer-nfc"]),(function (_,d){
return cljs.core.swap_BANG_.call(null,pos.client.model.customer,cljs.core.assoc,"\uFDD0'id","\uFDD0'id".call(null,cljs.core.rand_nth.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)))));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-field-changed"]),(function (_,d){
if(cljs.core.truth_("\uFDD0'id".call(null,cljs.core.deref.call(null,pos.client.model.customer))))
{return lib.dispatch.fire.call(null,"\uFDD0'customer-clear");
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-select"]),(function (_,d){
return cljs.core.swap_BANG_.call(null,pos.client.model.customer,cljs.core.assoc,"\uFDD0'id",d);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-clear"]),(function() { 
var G__7837__delegate = function (_){
return cljs.core.swap_BANG_.call(null,pos.client.model.customer,cljs.core.assoc,"\uFDD0'id",null);
};
var G__7837 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7837__delegate.call(this, _);
};
G__7837.cljs$lang$maxFixedArity = 0;
G__7837.cljs$lang$applyTo = (function (arglist__7838){
var _ = cljs.core.seq( arglist__7838 );;
return G__7837__delegate.call(this, _);
});
return G__7837;
})()
);
/**
* Atom containing state of the shopping basket
*/
pos.client.model.basket = cljs.core.atom.call(null,cljs.core.set([]));
cljs.core.add_watch.call(null,pos.client.model.basket,"\uFDD0'basket-change-key",(function (k,r,o,n){
if(cljs.core.truth_((cljs.core.count.call(null,n) > cljs.core.count.call(null,o))))
{return lib.dispatch.fire.call(null,"\uFDD0'basket-change",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'item"],{"\uFDD0'type":"\uFDD0'add-item","\uFDD0'item":cljs.core.first.call(null,clojure.set.difference.call(null,n,o))}));
} else
{if(cljs.core.truth_((cljs.core.count.call(null,n) < cljs.core.count.call(null,o))))
{return lib.dispatch.fire.call(null,"\uFDD0'basket-change",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'id"],{"\uFDD0'type":"\uFDD0'remove-item","\uFDD0'id":"\uFDD0'id".call(null,cljs.core.first.call(null,clojure.set.difference.call(null,o,n)))}));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return lib.dispatch.fire.call(null,"\uFDD0'basket-change",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'item"],{"\uFDD0'type":"\uFDD0'update-item","\uFDD0'item":cljs.core.first.call(null,clojure.set.difference.call(null,n,o))}));
} else
{return null;
}
}
}
}));
/**
* Replace old item in basket by new
*/
pos.client.model.swap_in_basket_BANG_ = (function swap_in_basket_BANG_(basket,o,n){
return cljs.core.swap_BANG_.call(null,basket,(function (p1__7840_SHARP_,p2__7839_SHARP_){
return cljs.core.set.call(null,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays([o],[p2__7839_SHARP_]),p1__7840_SHARP_));
}),n);
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-add"]),(function (_,d){
var temp__3695__auto____7841 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),d);

if(cljs.core.truth_(temp__3695__auto____7841))
{var item__7842 = temp__3695__auto____7841;

var qty__7843 = "\uFDD0'qty".call(null,item__7842);
var new_item__7844 = cljs.core.update_in.call(null,item__7842,cljs.core.PersistentVector.fromArray(["\uFDD0'qty"]),cljs.core.inc);

return pos.client.model.swap_in_basket_BANG_.call(null,pos.client.model.basket,item__7842,new_item__7844);
} else
{var item__7845 = pos.client.util.default_variant_of_item.call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),d));

return cljs.core.swap_BANG_.call(null,pos.client.model.basket,cljs.core.conj,cljs.core.merge.call(null,item__7845,cljs.core.ObjMap.fromObject(["\uFDD0'qty","\uFDD0'discount"],{"\uFDD0'qty":1,"\uFDD0'discount":0})));
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-remove"]),(function (_,d){
var item__7846 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),d);

return cljs.core.swap_BANG_.call(null,pos.client.model.basket,cljs.core.disj,item__7846);
}));
/**
* Atom holding the state of current tender transaction
*/
pos.client.model.tender = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
cljs.core.add_watch.call(null,pos.client.model.tender,"\uFDD0'tender-change-key",(function (k,r,o,n){
return lib.dispatch.fire.call(null,"\uFDD0'tender-change",n);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-update"]),(function (_,p__7847){
var map__7848__7849 = p__7847;
var map__7848__7850 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7848__7849))?cljs.core.apply.call(null,cljs.core.hash_map,map__7848__7849):map__7848__7849);
var new_val__7851 = cljs.core.get.call(null,map__7848__7850,"\uFDD0'new-val");
var changed_attr__7852 = cljs.core.get.call(null,map__7848__7850,"\uFDD0'changed-attr");

return cljs.core.swap_BANG_.call(null,pos.client.model.tender,cljs.core.assoc,changed_attr__7852,pos.client.util.field_value_as_num.call(null,new_val__7851));
}));
