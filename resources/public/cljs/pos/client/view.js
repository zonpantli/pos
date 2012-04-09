goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.core');
goog.require('pos.client.util');
goog.require('jayq.util');
goog.require('lib.dispatch');
goog.require('crate.core');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('pos.client.model');
goog.require('pos.client.animation');
pos.client.view.render_location = (function render_location(p__8402){
var map__8403__8404 = p__8402;
var map__8403__8405 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8403__8404))?cljs.core.apply.call(null,cljs.core.hash_map,map__8403__8404):map__8403__8404);
var id__8406 = cljs.core.get.call(null,map__8403__8405,"\uFDD0'id");

var temp__3695__auto____8407 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8406);

if(cljs.core.truth_(temp__3695__auto____8407))
{var location__8408 = temp__3695__auto____8407;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__8408));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__8409){
var map__8410__8411 = p__8409;
var map__8410__8412 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8410__8411))?cljs.core.apply.call(null,cljs.core.hash_map,map__8410__8411):map__8410__8411);
var id__8413 = cljs.core.get.call(null,map__8410__8412,"\uFDD0'id");

var temp__3695__auto____8414 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8413);

if(cljs.core.truth_(temp__3695__auto____8414))
{var employee__8415 = temp__3695__auto____8414;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__8415));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__8416 = pos.client.util.get_formatted_datetime.call(null);
var el__8417 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__8417,t__8416);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__8418_SHARP_){
return cljs.core.merge.call(null,p1__8418_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__8418_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__8419_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__8419_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__8420_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__8420_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__8421 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__8421,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__8421));
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
var group__6008__auto____8422 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__8423){
var map__8424__8425 = p__8423;
var map__8424__8426 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8424__8425))?cljs.core.apply.call(null,cljs.core.hash_map,map__8424__8425):map__8424__8425);
var name__8427 = cljs.core.get.call(null,map__8424__8426,"\uFDD0'name");
var id__8428 = cljs.core.get.call(null,map__8424__8426,"\uFDD0'id");

var elem__6009__auto____8429 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__8428}),name__8427])]));

elem__6009__auto____8429.setAttribute("crateGroup",group__6008__auto____8422);
return elem__6009__auto____8429;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____8422;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__8430__8431 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__8430__8431))
{var loc__8432 = cljs.core.first.call(null,G__8430__8431);
var G__8430__8433 = G__8430__8431;

while(true){
var el__8434 = pos.client.view.dropdown_row.call(null,loc__8432);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__8434);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8434),"click",((function (loc__8432,G__8430__8433,el__8434){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__8432));
});})(loc__8432,G__8430__8433,el__8434))
);
var temp__3698__auto____8435 = cljs.core.next.call(null,G__8430__8433);

if(cljs.core.truth_(temp__3698__auto____8435))
{var G__8430__8436 = temp__3698__auto____8435;

{
var G__8444 = cljs.core.first.call(null,G__8430__8436);
var G__8445 = G__8430__8436;
loc__8432 = G__8444;
G__8430__8433 = G__8445;
continue;
}
} else
{}
break;
}
} else
{}
var G__8437__8438 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__8437__8438))
{var empl__8439 = cljs.core.first.call(null,G__8437__8438);
var G__8437__8440 = G__8437__8438;

while(true){
var el__8441 = pos.client.view.dropdown_row.call(null,empl__8439);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__8441);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8441),"click",((function (empl__8439,G__8437__8440,el__8441){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__8439));
});})(empl__8439,G__8437__8440,el__8441))
);
var temp__3698__auto____8442 = cljs.core.next.call(null,G__8437__8440);

if(cljs.core.truth_(temp__3698__auto____8442))
{var G__8437__8443 = temp__3698__auto____8442;

{
var G__8446 = cljs.core.first.call(null,G__8437__8443);
var G__8447 = G__8437__8443;
empl__8439 = G__8446;
G__8437__8440 = G__8447;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____8448 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8449 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8450 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8451 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8452 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8452,method_table__3162__auto____8448,prefer_table__3163__auto____8449,method_cache__3164__auto____8450,cached_hierarchy__3165__auto____8451));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__8453){
var map__8454__8455 = p__8453;
var map__8454__8456 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8454__8455))?cljs.core.apply.call(null,cljs.core.hash_map,map__8454__8455):map__8454__8455);
var id__8457 = cljs.core.get.call(null,map__8454__8456,"\uFDD0'id");

var customer__8458 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8457);
var el__8459 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8459,"\uFDD0'name".call(null,customer__8458));
pos.client.animation.flash_input_border.call(null,el__8459);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__8458));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__8460 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8460,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____8461 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____8461))
{var id__8462 = temp__3695__auto____8461;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____8463 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8464 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8465 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8466 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8467 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8467,method_table__3162__auto____8463,prefer_table__3163__auto____8464,method_cache__3164__auto____8465,cached_hierarchy__3165__auto____8466));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__8468){
var map__8469__8470 = p__8468;
var map__8469__8471 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8469__8470))?cljs.core.apply.call(null,cljs.core.hash_map,map__8469__8470):map__8469__8470);
var id__8472 = cljs.core.get.call(null,map__8469__8471,"\uFDD0'id");

var item__8473 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8472);
var el__8474 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__8474,"\uFDD0'name".call(null,item__8473));
pos.client.animation.flash_input_border.call(null,el__8474);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__8475 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__8475,null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'item-clear","\uFDD0'item-select"]),(function (t,d){
if(cljs.core.truth_(d))
{pos.client.view.basket_add_item.call(null,d);
} else
{}
return pos.client.view.render_item.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":t,"\uFDD0'id":d}));
}));
pos.client.view.basket_add_item = (function basket_add_item(id){
return lib.dispatch.fire.call(null,"\uFDD0'basket-add",id);
});
var group__6008__auto____8476 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__8477){
var map__8478__8479 = p__8477;
var map__8478__8480 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8478__8479))?cljs.core.apply.call(null,cljs.core.hash_map,map__8478__8479):map__8478__8479);
var discount__8481 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'discount");
var qty__8482 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'qty");
var price__8483 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'price");
var size__8484 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'size");
var color__8485 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'color");
var name__8486 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'name");
var id__8487 = cljs.core.get.call(null,map__8478__8480,"\uFDD0'id");

var elem__6009__auto____8488 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__8487}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__8486])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__8487])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__8484])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__8485])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__8482})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__8483})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__8481})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__8483)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6009__auto____8488.setAttribute("crateGroup",group__6008__auto____8476);
return elem__6009__auto____8488;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____8476;
pos.client.view.render_basket = (function (){var method_table__3162__auto____8489 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8490 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8491 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8492 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8493 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____8493,method_table__3162__auto____8489,prefer_table__3163__auto____8490,method_cache__3164__auto____8491,cached_hierarchy__3165__auto____8492));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__8494){
var map__8495__8496 = p__8494;
var map__8495__8497 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8495__8496))?cljs.core.apply.call(null,cljs.core.hash_map,map__8495__8496):map__8495__8496);
var item__8498 = cljs.core.get.call(null,map__8495__8497,"\uFDD0'item");
var item__8499 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8498))?cljs.core.apply.call(null,cljs.core.hash_map,item__8498):item__8498);
var id__8500 = cljs.core.get.call(null,item__8499,"\uFDD0'id");

var $el__8501 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__8499));
var $qty__8502 = jayq.core.find.call(null,$el__8501,".qty > div > input");
var $price__8503 = jayq.core.find.call(null,$el__8501,".price > div > input");
var $discount__8504 = jayq.core.find.call(null,$el__8501,".discount > div > input");
var $close__8505 = jayq.core.find.call(null,$el__8501,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__8501);
pos.client.animation.slide_in_table_row.call(null,$el__8501);
jayq.core.bind.call(null,$qty__8502,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8500,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__8502)}));
}));
jayq.core.bind.call(null,$price__8503,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8500,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__8503)}));
}));
jayq.core.bind.call(null,$discount__8504,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8500,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__8504)}));
}));
return jayq.core.bind.call(null,$close__8505,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__8500);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__8506){
var map__8507__8508 = p__8506;
var map__8507__8509 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8507__8508))?cljs.core.apply.call(null,cljs.core.hash_map,map__8507__8508):map__8507__8508);
var id__8510 = cljs.core.get.call(null,map__8507__8509,"\uFDD0'id");

var el__8511 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8510));

return pos.client.animation.slide_out_table_row.call(null,el__8511);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__8512){
var map__8513__8514 = p__8512;
var map__8513__8515 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8513__8514))?cljs.core.apply.call(null,cljs.core.hash_map,map__8513__8514):map__8513__8514);
var item__8516 = cljs.core.get.call(null,map__8513__8515,"\uFDD0'item");
var item__8517 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8516))?cljs.core.apply.call(null,cljs.core.hash_map,item__8516):item__8516);
var discount__8518 = cljs.core.get.call(null,item__8517,"\uFDD0'discount");
var qty__8519 = cljs.core.get.call(null,item__8517,"\uFDD0'qty");
var price__8520 = cljs.core.get.call(null,item__8517,"\uFDD0'price");
var id__8521 = cljs.core.get.call(null,item__8517,"\uFDD0'id");

var el__8522 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8521));

pos.client.util.value.call(null,jayq.core.find.call(null,el__8522,"td.qty > div input"),qty__8519);
pos.client.util.value.call(null,jayq.core.find.call(null,el__8522,"td.price > div input"),price__8520.toFixed(2));
pos.client.util.value.call(null,jayq.core.find.call(null,el__8522,"td.discount > div input"),discount__8518.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__8522,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__8517)));
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
