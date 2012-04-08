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
pos.client.view.render_location = (function render_location(p__8528){
var map__8529__8530 = p__8528;
var map__8529__8531 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8529__8530))?cljs.core.apply.call(null,cljs.core.hash_map,map__8529__8530):map__8529__8530);
var id__8532 = cljs.core.get.call(null,map__8529__8531,"\uFDD0'id");

var temp__3695__auto____8533 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8532);

if(cljs.core.truth_(temp__3695__auto____8533))
{var location__8534 = temp__3695__auto____8533;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__8534));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__8535){
var map__8536__8537 = p__8535;
var map__8536__8538 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8536__8537))?cljs.core.apply.call(null,cljs.core.hash_map,map__8536__8537):map__8536__8537);
var id__8539 = cljs.core.get.call(null,map__8536__8538,"\uFDD0'id");

var temp__3695__auto____8540 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8539);

if(cljs.core.truth_(temp__3695__auto____8540))
{var employee__8541 = temp__3695__auto____8540;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__8541));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__8542 = pos.client.util.get_formatted_datetime.call(null);
var el__8543 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__8543,t__8542);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__8544_SHARP_){
return cljs.core.merge.call(null,p1__8544_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__8544_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__8545_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__8545_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__8546 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__8546,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__8546));
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
var group__6008__auto____8547 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__8548){
var map__8549__8550 = p__8548;
var map__8549__8551 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8549__8550))?cljs.core.apply.call(null,cljs.core.hash_map,map__8549__8550):map__8549__8550);
var name__8552 = cljs.core.get.call(null,map__8549__8551,"\uFDD0'name");
var id__8553 = cljs.core.get.call(null,map__8549__8551,"\uFDD0'id");

var elem__6009__auto____8554 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__8553}),name__8552])]));

elem__6009__auto____8554.setAttribute("crateGroup",group__6008__auto____8547);
return elem__6009__auto____8554;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____8547;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__8555__8556 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__8555__8556))
{var loc__8557 = cljs.core.first.call(null,G__8555__8556);
var G__8555__8558 = G__8555__8556;

while(true){
var el__8559 = pos.client.view.dropdown_row.call(null,loc__8557);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__8559);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8559),"click",((function (loc__8557,G__8555__8558,el__8559){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__8557));
});})(loc__8557,G__8555__8558,el__8559))
);
var temp__3698__auto____8560 = cljs.core.next.call(null,G__8555__8558);

if(cljs.core.truth_(temp__3698__auto____8560))
{var G__8555__8561 = temp__3698__auto____8560;

{
var G__8569 = cljs.core.first.call(null,G__8555__8561);
var G__8570 = G__8555__8561;
loc__8557 = G__8569;
G__8555__8558 = G__8570;
continue;
}
} else
{}
break;
}
} else
{}
var G__8562__8563 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__8562__8563))
{var empl__8564 = cljs.core.first.call(null,G__8562__8563);
var G__8562__8565 = G__8562__8563;

while(true){
var el__8566 = pos.client.view.dropdown_row.call(null,empl__8564);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__8566);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8566),"click",((function (empl__8564,G__8562__8565,el__8566){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__8564));
});})(empl__8564,G__8562__8565,el__8566))
);
var temp__3698__auto____8567 = cljs.core.next.call(null,G__8562__8565);

if(cljs.core.truth_(temp__3698__auto____8567))
{var G__8562__8568 = temp__3698__auto____8567;

{
var G__8571 = cljs.core.first.call(null,G__8562__8568);
var G__8572 = G__8562__8568;
empl__8564 = G__8571;
G__8562__8565 = G__8572;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____8573 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8574 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8575 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8576 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8577 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8577,method_table__3162__auto____8573,prefer_table__3163__auto____8574,method_cache__3164__auto____8575,cached_hierarchy__3165__auto____8576));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__8578){
var map__8579__8580 = p__8578;
var map__8579__8581 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8579__8580))?cljs.core.apply.call(null,cljs.core.hash_map,map__8579__8580):map__8579__8580);
var id__8582 = cljs.core.get.call(null,map__8579__8581,"\uFDD0'id");

var customer__8583 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8582);
var el__8584 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8584,"\uFDD0'name".call(null,customer__8583));
pos.client.animation.flash_input_border.call(null,el__8584);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__8583));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__8585 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8585,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____8586 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____8586))
{var id__8587 = temp__3695__auto____8586;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.add_product = (function add_product(){
return lib.dispatch.fire.call(null,"\uFDD0'basket-add","1234567-456");
});
var group__6008__auto____8588 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__8589){
var map__8590__8591 = p__8589;
var map__8590__8592 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8590__8591))?cljs.core.apply.call(null,cljs.core.hash_map,map__8590__8591):map__8590__8591);
var price__8593 = cljs.core.get.call(null,map__8590__8592,"\uFDD0'price");
var size__8594 = cljs.core.get.call(null,map__8590__8592,"\uFDD0'size");
var color__8595 = cljs.core.get.call(null,map__8590__8592,"\uFDD0'color");
var name__8596 = cljs.core.get.call(null,map__8590__8592,"\uFDD0'name");
var id__8597 = cljs.core.get.call(null,map__8590__8592,"\uFDD0'id");

var elem__6009__auto____8598 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__8597}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",name__8596]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",id__8597]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",size__8594]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",color__8595]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":1})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__8593})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":0})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__8593})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])]));

elem__6009__auto____8598.setAttribute("crateGroup",group__6008__auto____8588);
return elem__6009__auto____8598;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____8588;
pos.client.view.render_basket = (function (){var method_table__3162__auto____8599 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8600 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8601 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8602 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8603 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____8603,method_table__3162__auto____8599,prefer_table__3163__auto____8600,method_cache__3164__auto____8601,cached_hierarchy__3165__auto____8602));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add",(function (p__8604){
var map__8605__8606 = p__8604;
var map__8605__8607 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8605__8606))?cljs.core.apply.call(null,cljs.core.hash_map,map__8605__8606):map__8605__8606);
var item__8608 = cljs.core.get.call(null,map__8605__8607,"\uFDD0'item");

var el__8609 = pos.client.view.basket_item.call(null,item__8608);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),el__8609);
return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,el__8609),".qty > input"),"click",(function (){
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
