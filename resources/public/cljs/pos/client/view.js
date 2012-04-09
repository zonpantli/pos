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
pos.client.view.render_location = (function render_location(p__7555){
var map__7556__7557 = p__7555;
var map__7556__7558 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7556__7557))?cljs.core.apply.call(null,cljs.core.hash_map,map__7556__7557):map__7556__7557);
var id__7559 = cljs.core.get.call(null,map__7556__7558,"\uFDD0'id");

var temp__3695__auto____7560 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7559);

if(cljs.core.truth_(temp__3695__auto____7560))
{var location__7561 = temp__3695__auto____7560;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7561));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7562){
var map__7563__7564 = p__7562;
var map__7563__7565 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7563__7564))?cljs.core.apply.call(null,cljs.core.hash_map,map__7563__7564):map__7563__7564);
var id__7566 = cljs.core.get.call(null,map__7563__7565,"\uFDD0'id");

var temp__3695__auto____7567 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7566);

if(cljs.core.truth_(temp__3695__auto____7567))
{var employee__7568 = temp__3695__auto____7567;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7568));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__7569 = pos.client.util.get_formatted_datetime.call(null);
var el__7570 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__7570,t__7569);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7571_SHARP_){
return cljs.core.merge.call(null,p1__7571_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7571_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7572_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7572_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__7573_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__7573_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7574 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7574,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__7574));
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
var group__6058__auto____7575 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7576){
var map__7577__7578 = p__7576;
var map__7577__7579 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7577__7578))?cljs.core.apply.call(null,cljs.core.hash_map,map__7577__7578):map__7577__7578);
var name__7580 = cljs.core.get.call(null,map__7577__7579,"\uFDD0'name");
var id__7581 = cljs.core.get.call(null,map__7577__7579,"\uFDD0'id");

var elem__6059__auto____7582 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7581}),name__7580])]));

elem__6059__auto____7582.setAttribute("crateGroup",group__6058__auto____7575);
return elem__6059__auto____7582;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6058__auto____7575;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7583__7584 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7583__7584))
{var loc__7585 = cljs.core.first.call(null,G__7583__7584);
var G__7583__7586 = G__7583__7584;

while(true){
var el__7587 = pos.client.view.dropdown_row.call(null,loc__7585);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7587);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7587),"click",((function (loc__7585,G__7583__7586,el__7587){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7585));
});})(loc__7585,G__7583__7586,el__7587))
);
var temp__3698__auto____7588 = cljs.core.next.call(null,G__7583__7586);

if(cljs.core.truth_(temp__3698__auto____7588))
{var G__7583__7589 = temp__3698__auto____7588;

{
var G__7597 = cljs.core.first.call(null,G__7583__7589);
var G__7598 = G__7583__7589;
loc__7585 = G__7597;
G__7583__7586 = G__7598;
continue;
}
} else
{}
break;
}
} else
{}
var G__7590__7591 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7590__7591))
{var empl__7592 = cljs.core.first.call(null,G__7590__7591);
var G__7590__7593 = G__7590__7591;

while(true){
var el__7594 = pos.client.view.dropdown_row.call(null,empl__7592);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7594);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7594),"click",((function (empl__7592,G__7590__7593,el__7594){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7592));
});})(empl__7592,G__7590__7593,el__7594))
);
var temp__3698__auto____7595 = cljs.core.next.call(null,G__7590__7593);

if(cljs.core.truth_(temp__3698__auto____7595))
{var G__7590__7596 = temp__3698__auto____7595;

{
var G__7599 = cljs.core.first.call(null,G__7590__7596);
var G__7600 = G__7590__7596;
empl__7592 = G__7599;
G__7590__7593 = G__7600;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____7601 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7602 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7603 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7604 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7605 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7605,method_table__3162__auto____7601,prefer_table__3163__auto____7602,method_cache__3164__auto____7603,cached_hierarchy__3165__auto____7604));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7606){
var map__7607__7608 = p__7606;
var map__7607__7609 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7607__7608))?cljs.core.apply.call(null,cljs.core.hash_map,map__7607__7608):map__7607__7608);
var id__7610 = cljs.core.get.call(null,map__7607__7609,"\uFDD0'id");

var customer__7611 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7610);
var el__7612 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7612,"\uFDD0'name".call(null,customer__7611));
pos.client.animation.flash_input_border.call(null,el__7612);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7611));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7613 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7613,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7614 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7614))
{var id__7615 = temp__3695__auto____7614;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____7616 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7617 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7618 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7619 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7620 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7620,method_table__3162__auto____7616,prefer_table__3163__auto____7617,method_cache__3164__auto____7618,cached_hierarchy__3165__auto____7619));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__7621){
var map__7622__7623 = p__7621;
var map__7622__7624 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7622__7623))?cljs.core.apply.call(null,cljs.core.hash_map,map__7622__7623):map__7622__7623);
var id__7625 = cljs.core.get.call(null,map__7622__7624,"\uFDD0'id");

var item__7626 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7625);
var el__7627 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__7627,"\uFDD0'name".call(null,item__7626));
pos.client.animation.flash_input_border.call(null,el__7627);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__7628 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__7628,null);
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
var group__6058__auto____7629 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__7630){
var map__7631__7632 = p__7630;
var map__7631__7633 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7631__7632))?cljs.core.apply.call(null,cljs.core.hash_map,map__7631__7632):map__7631__7632);
var discount__7634 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'discount");
var qty__7635 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'qty");
var price__7636 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'price");
var size__7637 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'size");
var color__7638 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'color");
var name__7639 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'name");
var id__7640 = cljs.core.get.call(null,map__7631__7633,"\uFDD0'id");

var elem__6059__auto____7641 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7640}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__7639])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__7640])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__7637])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__7638])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__7635})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__7636})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__7634})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__7636)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6059__auto____7641.setAttribute("crateGroup",group__6058__auto____7629);
return elem__6059__auto____7641;
});
pos.client.view.basket_item.prototype._crateGroup = group__6058__auto____7629;
pos.client.view.render_basket = (function (){var method_table__3162__auto____7642 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7643 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7644 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7645 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7646 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7646,method_table__3162__auto____7642,prefer_table__3163__auto____7643,method_cache__3164__auto____7644,cached_hierarchy__3165__auto____7645));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__7647){
var map__7648__7649 = p__7647;
var map__7648__7650 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7648__7649))?cljs.core.apply.call(null,cljs.core.hash_map,map__7648__7649):map__7648__7649);
var item__7651 = cljs.core.get.call(null,map__7648__7650,"\uFDD0'item");
var item__7652 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7651))?cljs.core.apply.call(null,cljs.core.hash_map,item__7651):item__7651);
var id__7653 = cljs.core.get.call(null,item__7652,"\uFDD0'id");

var $el__7654 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__7652));
var $qty__7655 = jayq.core.find.call(null,$el__7654,".qty > div > input");
var $price__7656 = jayq.core.find.call(null,$el__7654,".price > div > input");
var $discount__7657 = jayq.core.find.call(null,$el__7654,".discount > div > input");
var $close__7658 = jayq.core.find.call(null,$el__7654,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__7654);
pos.client.animation.slide_in_table_row.call(null,$el__7654);
jayq.core.bind.call(null,$qty__7655,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7653,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__7655)}));
}));
jayq.core.bind.call(null,$price__7656,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7653,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__7656)}));
}));
jayq.core.bind.call(null,$discount__7657,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7653,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__7657)}));
}));
return jayq.core.bind.call(null,$close__7658,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__7653);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__7659){
var map__7660__7661 = p__7659;
var map__7660__7662 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7660__7661))?cljs.core.apply.call(null,cljs.core.hash_map,map__7660__7661):map__7660__7661);
var id__7663 = cljs.core.get.call(null,map__7660__7662,"\uFDD0'id");

var el__7664 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7663));

return pos.client.animation.slide_out_table_row.call(null,el__7664);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__7665){
var map__7666__7667 = p__7665;
var map__7666__7668 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7666__7667))?cljs.core.apply.call(null,cljs.core.hash_map,map__7666__7667):map__7666__7667);
var item__7669 = cljs.core.get.call(null,map__7666__7668,"\uFDD0'item");
var item__7670 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7669))?cljs.core.apply.call(null,cljs.core.hash_map,item__7669):item__7669);
var discount__7671 = cljs.core.get.call(null,item__7670,"\uFDD0'discount");
var qty__7672 = cljs.core.get.call(null,item__7670,"\uFDD0'qty");
var price__7673 = cljs.core.get.call(null,item__7670,"\uFDD0'price");
var id__7674 = cljs.core.get.call(null,item__7670,"\uFDD0'id");

var el__7675 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7674));

pos.client.util.value.call(null,jayq.core.find.call(null,el__7675,"td.qty > div input"),qty__7672);
pos.client.util.value.call(null,jayq.core.find.call(null,el__7675,"td.price > div input"),price__7673);
pos.client.util.value.call(null,jayq.core.find.call(null,el__7675,"td.discount > div input"),discount__7671);
return jayq.core.inner.call(null,jayq.core.find.call(null,el__7675,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__7670)));
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
