goog.provide('pos.client.model');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('jayq.util');
goog.require('lib.dispatch');
goog.require('clojure.set');
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
if(cljs.core.truth_((function (){var or__3548__auto____8705 = ("\uFDD0'id".call(null,n) === null);

if(cljs.core.truth_(or__3548__auto____8705))
{return or__3548__auto____8705;
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
var G__8706__delegate = function (_){
return cljs.core.swap_BANG_.call(null,pos.client.model.customer,cljs.core.assoc,"\uFDD0'id",null);
};
var G__8706 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8706__delegate.call(this, _);
};
G__8706.cljs$lang$maxFixedArity = 0;
G__8706.cljs$lang$applyTo = (function (arglist__8707){
var _ = cljs.core.seq( arglist__8707 );;
return G__8706__delegate.call(this, _);
});
return G__8706;
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
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-add"]),(function (_,d){
var temp__3695__auto____8710 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),d);

if(cljs.core.truth_(temp__3695__auto____8710))
{var item__8711 = temp__3695__auto____8710;

var qty__8712 = "\uFDD0'qty".call(null,item__8711);

return cljs.core.swap_BANG_.call(null,pos.client.model.basket,(function (p1__8709_SHARP_,p2__8708_SHARP_){
return cljs.core.set.call(null,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays([item__8711],[p2__8708_SHARP_]),p1__8709_SHARP_));
}),cljs.core.update_in.call(null,item__8711,cljs.core.PersistentVector.fromArray(["\uFDD0'qty"]),cljs.core.inc));
} else
{var item__8713 = pos.client.util.default_variant_of_item.call(null,pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),d));

return cljs.core.swap_BANG_.call(null,pos.client.model.basket,cljs.core.conj,cljs.core.merge.call(null,item__8713,cljs.core.ObjMap.fromObject(["\uFDD0'qty","\uFDD0'discount"],{"\uFDD0'qty":1,"\uFDD0'discount":0})));
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-remove"]),(function (_,d){
var item__8714 = pos.client.util.from_coll_by_id.call(null,cljs.core.deref.call(null,pos.client.model.basket),d);

return cljs.core.swap_BANG_.call(null,pos.client.model.basket,cljs.core.disj,item__8714);
}));
