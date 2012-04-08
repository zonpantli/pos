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
pos.client.view.render_location = (function render_location(p__10695){
var map__10696__10697 = p__10695;
var map__10696__10698 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10696__10697))?cljs.core.apply.call(null,cljs.core.hash_map,map__10696__10697):map__10696__10697);
var id__10699 = cljs.core.get.call(null,map__10696__10698,"\uFDD0'id");

var temp__3695__auto____10700 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10699);

if(cljs.core.truth_(temp__3695__auto____10700))
{var location__10701 = temp__3695__auto____10700;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__10701));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__10702){
var map__10703__10704 = p__10702;
var map__10703__10705 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10703__10704))?cljs.core.apply.call(null,cljs.core.hash_map,map__10703__10704):map__10703__10704);
var id__10706 = cljs.core.get.call(null,map__10703__10705,"\uFDD0'id");

var temp__3695__auto____10707 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10706);

if(cljs.core.truth_(temp__3695__auto____10707))
{var employee__10708 = temp__3695__auto____10707;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__10708));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__10709 = pos.client.util.get_formatted_datetime.call(null);
var el__10710 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__10710,t__10709);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__10711_SHARP_){
return cljs.core.merge.call(null,p1__10711_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__10711_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__10712_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__10712_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__10713_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__10713_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__10714 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__10714,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__10714));
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
var group__6008__auto____10715 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__10716){
var map__10717__10718 = p__10716;
var map__10717__10719 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10717__10718))?cljs.core.apply.call(null,cljs.core.hash_map,map__10717__10718):map__10717__10718);
var name__10720 = cljs.core.get.call(null,map__10717__10719,"\uFDD0'name");
var id__10721 = cljs.core.get.call(null,map__10717__10719,"\uFDD0'id");

var elem__6009__auto____10722 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__10721}),name__10720])]));

elem__6009__auto____10722.setAttribute("crateGroup",group__6008__auto____10715);
return elem__6009__auto____10722;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____10715;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__10723__10724 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__10723__10724))
{var loc__10725 = cljs.core.first.call(null,G__10723__10724);
var G__10723__10726 = G__10723__10724;

while(true){
var el__10727 = pos.client.view.dropdown_row.call(null,loc__10725);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__10727);
jayq.core.bind.call(null,jayq.core.$.call(null,el__10727),"click",((function (loc__10725,G__10723__10726,el__10727){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__10725));
});})(loc__10725,G__10723__10726,el__10727))
);
var temp__3698__auto____10728 = cljs.core.next.call(null,G__10723__10726);

if(cljs.core.truth_(temp__3698__auto____10728))
{var G__10723__10729 = temp__3698__auto____10728;

{
var G__10737 = cljs.core.first.call(null,G__10723__10729);
var G__10738 = G__10723__10729;
loc__10725 = G__10737;
G__10723__10726 = G__10738;
continue;
}
} else
{}
break;
}
} else
{}
var G__10730__10731 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__10730__10731))
{var empl__10732 = cljs.core.first.call(null,G__10730__10731);
var G__10730__10733 = G__10730__10731;

while(true){
var el__10734 = pos.client.view.dropdown_row.call(null,empl__10732);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__10734);
jayq.core.bind.call(null,jayq.core.$.call(null,el__10734),"click",((function (empl__10732,G__10730__10733,el__10734){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__10732));
});})(empl__10732,G__10730__10733,el__10734))
);
var temp__3698__auto____10735 = cljs.core.next.call(null,G__10730__10733);

if(cljs.core.truth_(temp__3698__auto____10735))
{var G__10730__10736 = temp__3698__auto____10735;

{
var G__10739 = cljs.core.first.call(null,G__10730__10736);
var G__10740 = G__10730__10736;
empl__10732 = G__10739;
G__10730__10733 = G__10740;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____10741 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10742 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10743 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10744 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10745 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____10745,method_table__3162__auto____10741,prefer_table__3163__auto____10742,method_cache__3164__auto____10743,cached_hierarchy__3165__auto____10744));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__10746){
var map__10747__10748 = p__10746;
var map__10747__10749 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10747__10748))?cljs.core.apply.call(null,cljs.core.hash_map,map__10747__10748):map__10747__10748);
var id__10750 = cljs.core.get.call(null,map__10747__10749,"\uFDD0'id");

var customer__10751 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10750);
var el__10752 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__10752,"\uFDD0'name".call(null,customer__10751));
pos.client.animation.flash_input_border.call(null,el__10752);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__10751));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__10753 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__10753,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____10754 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____10754))
{var id__10755 = temp__3695__auto____10754;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____10756 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10757 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10758 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10759 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10760 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____10760,method_table__3162__auto____10756,prefer_table__3163__auto____10757,method_cache__3164__auto____10758,cached_hierarchy__3165__auto____10759));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__10761){
var map__10762__10763 = p__10761;
var map__10762__10764 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10762__10763))?cljs.core.apply.call(null,cljs.core.hash_map,map__10762__10763):map__10762__10763);
var id__10765 = cljs.core.get.call(null,map__10762__10764,"\uFDD0'id");

var item__10766 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__10765);
var el__10767 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__10767,"\uFDD0'name".call(null,item__10766));
pos.client.animation.flash_input_border.call(null,el__10767);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__10768 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__10768,null);
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
var group__6008__auto____10769 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__10770){
var map__10771__10772 = p__10770;
var map__10771__10773 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10771__10772))?cljs.core.apply.call(null,cljs.core.hash_map,map__10771__10772):map__10771__10772);
var price__10774 = cljs.core.get.call(null,map__10771__10773,"\uFDD0'price");
var size__10775 = cljs.core.get.call(null,map__10771__10773,"\uFDD0'size");
var color__10776 = cljs.core.get.call(null,map__10771__10773,"\uFDD0'color");
var name__10777 = cljs.core.get.call(null,map__10771__10773,"\uFDD0'name");
var id__10778 = cljs.core.get.call(null,map__10771__10773,"\uFDD0'id");

var elem__6009__auto____10779 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__10778}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",name__10777]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",id__10778]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",size__10775]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",color__10776]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":1})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__10774})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":0})]),"%"]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.str.call(null,price__10774)]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])]));

elem__6009__auto____10779.setAttribute("crateGroup",group__6008__auto____10769);
return elem__6009__auto____10779;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____10769;
pos.client.view.render_basket = (function (){var method_table__3162__auto____10780 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____10781 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____10782 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____10783 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____10784 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____10784,method_table__3162__auto____10780,prefer_table__3163__auto____10781,method_cache__3164__auto____10782,cached_hierarchy__3165__auto____10783));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add",(function (p__10785){
var map__10786__10787 = p__10785;
var map__10786__10788 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__10786__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10786__10787):map__10786__10787);
var item__10789 = cljs.core.get.call(null,map__10786__10788,"\uFDD0'item");

var el__10790 = pos.client.view.basket_item.call(null,item__10789);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),el__10790);
return jayq.core.bind.call(null,jayq.core.find.call(null,jayq.core.$.call(null,el__10790),".qty > input"),"click",(function (){
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
