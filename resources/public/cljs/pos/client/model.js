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
if(cljs.core.truth_((function (){var or__3548__auto____7937 = ("\uFDD0'id".call(null,n) === null);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
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
var G__7938__delegate = function (_){
return cljs.core.swap_BANG_.call(null,pos.client.model.customer,cljs.core.assoc,"\uFDD0'id",null);
};
var G__7938 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7938__delegate.call(this, _);
};
G__7938.cljs$lang$maxFixedArity = 0;
G__7938.cljs$lang$applyTo = (function (arglist__7939){
var _ = cljs.core.seq( arglist__7939 );;
return G__7938__delegate.call(this, _);
});
return G__7938;
})()
);
/**
* Atom containing selected item and related reactors
* controlling the item typeahead
*/
pos.client.model.item = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":null}));
/**
* Atom containing state of the shopping basket
*/
pos.client.model.basket = cljs.core.atom.call(null,cljs.core.set([]));
cljs.core.add_watch.call(null,pos.client.model.basket,"\uFDD0'basket-change-key",(function (k,r,o,n){
if(cljs.core.truth_((cljs.core.count.call(null,n) > cljs.core.count.call(null,o))))
{return lib.dispatch.fire.call(null,"\uFDD0'basket-change",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'item"],{"\uFDD0'type":"\uFDD0'add","\uFDD0'item":cljs.core.first.call(null,clojure.set.difference.call(null,n,o))}));
} else
{return null;
}
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-add"]),(function (_,d){
var i__7940 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),d);
var item__7941 = pos.client.util.default_variant_of_item.call(null,i__7940);

jayq.util.log.call(null,item__7941);
return cljs.core.swap_BANG_.call(null,pos.client.model.basket,cljs.core.conj,item__7941);
}));
