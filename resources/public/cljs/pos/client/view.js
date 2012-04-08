goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('pos.client.util');
goog.require('lib.dispatch');
goog.require('crate.core');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('pos.client.model');
goog.require('pos.client.animation');
pos.client.view.render_location = (function render_location(p__9348){
var map__9349__9350 = p__9348;
var map__9349__9351 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9349__9350))?cljs.core.apply.call(null,cljs.core.hash_map,map__9349__9350):map__9349__9350);
var id__9352 = cljs.core.get.call(null,map__9349__9351,"\uFDD0'id");

var temp__3695__auto____9353 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9352);

if(cljs.core.truth_(temp__3695__auto____9353))
{var location__9354 = temp__3695__auto____9353;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__9354));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__9355){
var map__9356__9357 = p__9355;
var map__9356__9358 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9356__9357))?cljs.core.apply.call(null,cljs.core.hash_map,map__9356__9357):map__9356__9357);
var id__9359 = cljs.core.get.call(null,map__9356__9358,"\uFDD0'id");

var temp__3695__auto____9360 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9359);

if(cljs.core.truth_(temp__3695__auto____9360))
{var employee__9361 = temp__3695__auto____9360;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__9361));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__9362 = pos.client.util.get_formatted_datetime.call(null);
var el__9363 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__9363,t__9362);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__9364_SHARP_){
return cljs.core.merge.call(null,p1__9364_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__9364_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__9365_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__9365_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__9366 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__9366,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__9366));
}));
});
pos.client.view.attach_typeahead_clear_event_listeners = (function attach_typeahead_clear_event_listeners(){
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#customer-clear"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-clear");
}));
return jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#item-clear"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
});
var group__6008__auto____9367 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__9368){
var map__9369__9370 = p__9368;
var map__9369__9371 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9369__9370))?cljs.core.apply.call(null,cljs.core.hash_map,map__9369__9370):map__9369__9370);
var name__9372 = cljs.core.get.call(null,map__9369__9371,"\uFDD0'name");
var id__9373 = cljs.core.get.call(null,map__9369__9371,"\uFDD0'id");

var elem__6009__auto____9374 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__9373}),name__9372])]));

elem__6009__auto____9374.setAttribute("crateGroup",group__6008__auto____9367);
return elem__6009__auto____9374;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____9367;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__9375__9376 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__9375__9376))
{var loc__9377 = cljs.core.first.call(null,G__9375__9376);
var G__9375__9378 = G__9375__9376;

while(true){
var el__9379 = pos.client.view.dropdown_row.call(null,loc__9377);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__9379);
jayq.core.bind.call(null,jayq.core.$.call(null,el__9379),"click",((function (loc__9377,G__9375__9378,el__9379){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__9377));
});})(loc__9377,G__9375__9378,el__9379))
);
var temp__3698__auto____9380 = cljs.core.next.call(null,G__9375__9378);

if(cljs.core.truth_(temp__3698__auto____9380))
{var G__9375__9381 = temp__3698__auto____9380;

{
var G__9389 = cljs.core.first.call(null,G__9375__9381);
var G__9390 = G__9375__9381;
loc__9377 = G__9389;
G__9375__9378 = G__9390;
continue;
}
} else
{}
break;
}
} else
{}
var G__9382__9383 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__9382__9383))
{var empl__9384 = cljs.core.first.call(null,G__9382__9383);
var G__9382__9385 = G__9382__9383;

while(true){
var el__9386 = pos.client.view.dropdown_row.call(null,empl__9384);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__9386);
jayq.core.bind.call(null,jayq.core.$.call(null,el__9386),"click",((function (empl__9384,G__9382__9385,el__9386){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__9384));
});})(empl__9384,G__9382__9385,el__9386))
);
var temp__3698__auto____9387 = cljs.core.next.call(null,G__9382__9385);

if(cljs.core.truth_(temp__3698__auto____9387))
{var G__9382__9388 = temp__3698__auto____9387;

{
var G__9391 = cljs.core.first.call(null,G__9382__9388);
var G__9392 = G__9382__9388;
empl__9384 = G__9391;
G__9382__9385 = G__9392;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
pos.client.view.prepare_dropdowns = (function prepare_dropdowns(){
jayq.core.$.call(null,"\uFDD0'#location-dropdown-list").dropdown();
return jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list").dropdown();
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'init-data-done"]),(function (t,d){
pos.client.view.prepare_typeaheads.call(null,cljs.core.deref.call(null,pos.client.model.data));
pos.client.view.populate_dropdowns.call(null,cljs.core.deref.call(null,pos.client.model.data));
return pos.client.view.prepare_dropdowns.call(null);
}));
pos.client.view.render_customer = (function (){var method_table__3162__auto____9393 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9394 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9395 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9396 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9397 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____9397,method_table__3162__auto____9393,prefer_table__3163__auto____9394,method_cache__3164__auto____9395,cached_hierarchy__3165__auto____9396));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__9398){
var map__9399__9400 = p__9398;
var map__9399__9401 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9399__9400))?cljs.core.apply.call(null,cljs.core.hash_map,map__9399__9400):map__9399__9400);
var id__9402 = cljs.core.get.call(null,map__9399__9401,"\uFDD0'id");

var customer__9403 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9402);
var el__9404 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__9404,"\uFDD0'name".call(null,customer__9403));
pos.client.animation.flash_input_border.call(null,el__9404);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__9403));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__9405 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__9405,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____9406 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____9406))
{var id__9407 = temp__3695__auto____9406;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.add_product = (function add_product(){
return lib.dispatch.fire.call(null,"\uFDD0'basket-add","1234567-456");
});
var group__6008__auto____9408 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__9409){
var map__9410__9411 = p__9409;
var map__9410__9412 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9410__9411))?cljs.core.apply.call(null,cljs.core.hash_map,map__9410__9411):map__9410__9411);
var price__9413 = cljs.core.get.call(null,map__9410__9412,"\uFDD0'price");
var size__9414 = cljs.core.get.call(null,map__9410__9412,"\uFDD0'size");
var color__9415 = cljs.core.get.call(null,map__9410__9412,"\uFDD0'color");
var name__9416 = cljs.core.get.call(null,map__9410__9412,"\uFDD0'name");
var id__9417 = cljs.core.get.call(null,map__9410__9412,"\uFDD0'id");

var elem__6009__auto____9418 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__9417}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",name__9416]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",id__9417]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",size__9414]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",color__9415]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":1})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__9413})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":0})]),"%"]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.str.call(null,price__9413)]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])]));

elem__6009__auto____9418.setAttribute("crateGroup",group__6008__auto____9408);
return elem__6009__auto____9418;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____9408;
pos.client.view.render_basket = (function (){var method_table__3162__auto____9419 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9420 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9421 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9422 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9423 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____9423,method_table__3162__auto____9419,prefer_table__3163__auto____9420,method_cache__3164__auto____9421,cached_hierarchy__3165__auto____9422));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add",(function (p__9424){
var map__9425__9426 = p__9424;
var map__9425__9427 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9425__9426))?cljs.core.apply.call(null,cljs.core.hash_map,map__9425__9426):map__9425__9426);
var item__9428 = cljs.core.get.call(null,map__9425__9427,"\uFDD0'item");

var el__9429 = pos.client.view.basket_item.call(null,item__9428);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),el__9429);
return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,el__9429),".qty > input"),"click",(function (){
return alert.call(null,"qty clicked");
}));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.util.start_timer.call(null,pos.client.view.render_time);
pos.client.view.draw_pie.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
