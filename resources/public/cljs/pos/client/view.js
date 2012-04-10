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
pos.client.view.render_location = (function render_location(p__7724){
var map__7725__7726 = p__7724;
var map__7725__7727 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7725__7726))?cljs.core.apply.call(null,cljs.core.hash_map,map__7725__7726):map__7725__7726);
var id__7728 = cljs.core.get.call(null,map__7725__7727,"\uFDD0'id");

var temp__3695__auto____7729 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7728);

if(cljs.core.truth_(temp__3695__auto____7729))
{var location__7730 = temp__3695__auto____7729;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7730));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7731){
var map__7732__7733 = p__7731;
var map__7732__7734 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7732__7733))?cljs.core.apply.call(null,cljs.core.hash_map,map__7732__7733):map__7732__7733);
var id__7735 = cljs.core.get.call(null,map__7732__7734,"\uFDD0'id");

var temp__3695__auto____7736 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7735);

if(cljs.core.truth_(temp__3695__auto____7736))
{var employee__7737 = temp__3695__auto____7736;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7737));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__7738 = pos.client.util.get_formatted_datetime.call(null);
var el__7739 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__7739,t__7738);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7740_SHARP_){
return cljs.core.merge.call(null,p1__7740_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7740_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7741_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7741_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__7742_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__7742_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7743 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7743,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__7743));
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
var group__6197__auto____7744 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7745){
var map__7746__7747 = p__7745;
var map__7746__7748 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7746__7747))?cljs.core.apply.call(null,cljs.core.hash_map,map__7746__7747):map__7746__7747);
var name__7749 = cljs.core.get.call(null,map__7746__7748,"\uFDD0'name");
var id__7750 = cljs.core.get.call(null,map__7746__7748,"\uFDD0'id");

var elem__6198__auto____7751 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7750}),name__7749])]));

elem__6198__auto____7751.setAttribute("crateGroup",group__6197__auto____7744);
return elem__6198__auto____7751;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____7744;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7752__7753 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7752__7753))
{var loc__7754 = cljs.core.first.call(null,G__7752__7753);
var G__7752__7755 = G__7752__7753;

while(true){
var el__7756 = pos.client.view.dropdown_row.call(null,loc__7754);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7756);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7756),"click",((function (loc__7754,G__7752__7755,el__7756){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7754));
});})(loc__7754,G__7752__7755,el__7756))
);
var temp__3698__auto____7757 = cljs.core.next.call(null,G__7752__7755);

if(cljs.core.truth_(temp__3698__auto____7757))
{var G__7752__7758 = temp__3698__auto____7757;

{
var G__7766 = cljs.core.first.call(null,G__7752__7758);
var G__7767 = G__7752__7758;
loc__7754 = G__7766;
G__7752__7755 = G__7767;
continue;
}
} else
{}
break;
}
} else
{}
var G__7759__7760 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7759__7760))
{var empl__7761 = cljs.core.first.call(null,G__7759__7760);
var G__7759__7762 = G__7759__7760;

while(true){
var el__7763 = pos.client.view.dropdown_row.call(null,empl__7761);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7763);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7763),"click",((function (empl__7761,G__7759__7762,el__7763){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7761));
});})(empl__7761,G__7759__7762,el__7763))
);
var temp__3698__auto____7764 = cljs.core.next.call(null,G__7759__7762);

if(cljs.core.truth_(temp__3698__auto____7764))
{var G__7759__7765 = temp__3698__auto____7764;

{
var G__7768 = cljs.core.first.call(null,G__7759__7765);
var G__7769 = G__7759__7765;
empl__7761 = G__7768;
G__7759__7762 = G__7769;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____7770 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7771 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7772 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7773 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7774 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7774,method_table__3162__auto____7770,prefer_table__3163__auto____7771,method_cache__3164__auto____7772,cached_hierarchy__3165__auto____7773));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7775){
var map__7776__7777 = p__7775;
var map__7776__7778 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7776__7777))?cljs.core.apply.call(null,cljs.core.hash_map,map__7776__7777):map__7776__7777);
var id__7779 = cljs.core.get.call(null,map__7776__7778,"\uFDD0'id");

var customer__7780 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7779);
var el__7781 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7781,"\uFDD0'name".call(null,customer__7780));
pos.client.animation.flash_input_border.call(null,el__7781);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7780));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7782 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7782,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7783 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7783))
{var id__7784 = temp__3695__auto____7783;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____7785 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7786 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7787 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7788 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7789 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7789,method_table__3162__auto____7785,prefer_table__3163__auto____7786,method_cache__3164__auto____7787,cached_hierarchy__3165__auto____7788));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__7790){
var map__7791__7792 = p__7790;
var map__7791__7793 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7791__7792))?cljs.core.apply.call(null,cljs.core.hash_map,map__7791__7792):map__7791__7792);
var id__7794 = cljs.core.get.call(null,map__7791__7793,"\uFDD0'id");

var item__7795 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7794);
var el__7796 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__7796,"\uFDD0'name".call(null,item__7795));
pos.client.animation.flash_input_border.call(null,el__7796);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__7797 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__7797,null);
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
var group__6197__auto____7798 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__7799){
var map__7800__7801 = p__7799;
var map__7800__7802 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7800__7801))?cljs.core.apply.call(null,cljs.core.hash_map,map__7800__7801):map__7800__7801);
var discount__7803 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'discount");
var qty__7804 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'qty");
var price__7805 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'price");
var size__7806 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'size");
var color__7807 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'color");
var name__7808 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'name");
var id__7809 = cljs.core.get.call(null,map__7800__7802,"\uFDD0'id");

var elem__6198__auto____7810 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7809}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__7808])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__7809])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__7806])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__7807])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__7804})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__7805})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__7803})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__7805)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6198__auto____7810.setAttribute("crateGroup",group__6197__auto____7798);
return elem__6198__auto____7810;
});
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____7798;
pos.client.view.render_basket = (function (){var method_table__3162__auto____7811 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7812 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7813 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7814 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7815 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7815,method_table__3162__auto____7811,prefer_table__3163__auto____7812,method_cache__3164__auto____7813,cached_hierarchy__3165__auto____7814));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__7816){
var map__7817__7818 = p__7816;
var map__7817__7819 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7817__7818))?cljs.core.apply.call(null,cljs.core.hash_map,map__7817__7818):map__7817__7818);
var item__7820 = cljs.core.get.call(null,map__7817__7819,"\uFDD0'item");
var item__7821 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7820))?cljs.core.apply.call(null,cljs.core.hash_map,item__7820):item__7820);
var id__7822 = cljs.core.get.call(null,item__7821,"\uFDD0'id");

var $el__7823 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__7821));
var $qty__7824 = jayq.core.find.call(null,$el__7823,".qty > div > input");
var $price__7825 = jayq.core.find.call(null,$el__7823,".price > div > input");
var $discount__7826 = jayq.core.find.call(null,$el__7823,".discount > div > input");
var $close__7827 = jayq.core.find.call(null,$el__7823,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__7823);
pos.client.animation.slide_in_table_row.call(null,$el__7823);
jayq.core.bind.call(null,$qty__7824,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7822,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__7824)}));
}));
jayq.core.bind.call(null,$price__7825,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7822,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__7825)}));
}));
jayq.core.bind.call(null,$discount__7826,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7822,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__7826)}));
}));
return jayq.core.bind.call(null,$close__7827,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__7822);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__7828){
var map__7829__7830 = p__7828;
var map__7829__7831 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7829__7830))?cljs.core.apply.call(null,cljs.core.hash_map,map__7829__7830):map__7829__7830);
var id__7832 = cljs.core.get.call(null,map__7829__7831,"\uFDD0'id");

var el__7833 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7832));

return pos.client.animation.slide_out_table_row.call(null,el__7833);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__7834){
var map__7835__7836 = p__7834;
var map__7835__7837 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7835__7836))?cljs.core.apply.call(null,cljs.core.hash_map,map__7835__7836):map__7835__7836);
var item__7838 = cljs.core.get.call(null,map__7835__7837,"\uFDD0'item");
var item__7839 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7838))?cljs.core.apply.call(null,cljs.core.hash_map,item__7838):item__7838);
var discount__7840 = cljs.core.get.call(null,item__7839,"\uFDD0'discount");
var qty__7841 = cljs.core.get.call(null,item__7839,"\uFDD0'qty");
var price__7842 = cljs.core.get.call(null,item__7839,"\uFDD0'price");
var id__7843 = cljs.core.get.call(null,item__7839,"\uFDD0'id");

var el__7844 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7843));

pos.client.util.value.call(null,jayq.core.find.call(null,el__7844,"td.qty > div input"),qty__7841);
pos.client.util.value.call(null,jayq.core.find.call(null,el__7844,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__7842));
pos.client.util.value.call(null,jayq.core.find.call(null,el__7844,"td.discount > div input"),discount__7840.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__7844,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__7839)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__7845){
var map__7846__7847 = p__7845;
var map__7846__7848 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7846__7847))?cljs.core.apply.call(null,cljs.core.hash_map,map__7846__7847):map__7846__7847);
var discount__7849 = cljs.core.get.call(null,map__7846__7848,"\uFDD0'discount");
var vat__7850 = cljs.core.get.call(null,map__7846__7848,"\uFDD0'vat");
var tot__7851 = cljs.core.get.call(null,map__7846__7848,"\uFDD0'tot");

var $tot__7852 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__7853 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__7854 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__7852,pos.client.util.num_as_field_value.call(null,tot__7851));
jayq.core.inner.call(null,$vat__7853,pos.client.util.num_as_field_value.call(null,vat__7850));
return jayq.core.inner.call(null,$discount__7854,pos.client.util.num_as_field_value.call(null,discount__7849));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var G__7855__7856 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["proceed-tender","cancel-tender","confirm-tender","transaction-cash","transaction-credit","transaction-gift"]));

if(cljs.core.truth_(G__7855__7856))
{var name__7857 = cljs.core.first.call(null,G__7855__7856);
var G__7855__7858 = G__7855__7856;

while(true){
jayq.core.bind.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#",name__7857,"-button")),"click",((function (name__7857,G__7855__7858){
return (function (){
return lib.dispatch.fire.call(null,cljs.core.keyword.call(null,name__7857));
});})(name__7857,G__7855__7858))
);
var temp__3698__auto____7859 = cljs.core.next.call(null,G__7855__7858);

if(cljs.core.truth_(temp__3698__auto____7859))
{var G__7855__7860 = temp__3698__auto____7859;

{
var G__7861 = cljs.core.first.call(null,G__7855__7860);
var G__7862 = G__7855__7860;
name__7857 = G__7861;
G__7855__7858 = G__7862;
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
pos.client.view.bind_tender_listeners = (function bind_tender_listeners(){
var $cash__7863 = jayq.core.$.call(null,"\uFDD0'#tender-cash");
var $credit__7864 = jayq.core.$.call(null,"\uFDD0'#tender-credit");
var $gift__7865 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

jayq.core.bind.call(null,$cash__7863,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'cash","\uFDD0'new-val":pos.client.util.value.call(null,$cash__7863)}));
}));
jayq.core.bind.call(null,$credit__7864,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'credit","\uFDD0'new-val":pos.client.util.value.call(null,$credit__7864)}));
}));
return jayq.core.bind.call(null,$gift__7865,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'gift","\uFDD0'new-val":pos.client.util.value.call(null,$gift__7865)}));
}));
});
pos.client.view.render_tender = (function (){var method_table__3162__auto____7866 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7867 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7868 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7869 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7870 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____7870,method_table__3162__auto____7866,prefer_table__3163__auto____7867,method_cache__3164__auto____7868,cached_hierarchy__3165__auto____7869));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__7872__7873 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__7872__7873))
{var id__7874 = cljs.core.first.call(null,G__7872__7873);
var G__7872__7875 = G__7872__7873;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__7874),null);
var temp__3698__auto____7876 = cljs.core.next.call(null,G__7872__7875);

if(cljs.core.truth_(temp__3698__auto____7876))
{var G__7872__7877 = temp__3698__auto____7876;

{
var G__7878 = cljs.core.first.call(null,G__7872__7877);
var G__7879 = G__7872__7877;
id__7874 = G__7878;
G__7872__7875 = G__7879;
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
}));
cljs.core._add_method.call(null,pos.client.view.render_tender,false,(function (tender){
var total__7880 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var paid__7882 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7871_SHARP_){
var or__3548__auto____7881 = p1__7871_SHARP_;

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{return 0;
}
}),cljs.core.vals.call(null,tender)));
var change__7883 = (paid__7882 - total__7880);

pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-total"),pos.client.util.num_as_field_value.call(null,total__7880));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-cash"),pos.client.util.num_as_field_value.call(null,"\uFDD0'cash".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-card"),pos.client.util.num_as_field_value.call(null,"\uFDD0'card".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-gift"),pos.client.util.num_as_field_value.call(null,"\uFDD0'gift".call(null,tender)));
return pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-change"),pos.client.util.num_as_field_value.call(null,change__7883));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-change"]),(function (_,d){
return pos.client.view.render_tender.call(null,d);
}));
pos.client.view.focus_tender_field = (function (){var method_table__3162__auto____7884 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7885 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7886 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7887 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7888 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("focus-tender-field",cljs.core.identity,"\uFDD0'default",hierarchy__3166__auto____7888,method_table__3162__auto____7884,prefer_table__3163__auto____7885,method_cache__3164__auto____7886,cached_hierarchy__3165__auto____7887));
})();
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-cash",(function (_){
var $el__7889 = jayq.core.$.call(null,"\uFDD0'#tender-cash");

$el__7889.focus();
return $el__7889.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-credit",(function (_){
var $el__7890 = jayq.core.$.call(null,"\uFDD0'#tender-card");

$el__7890.focus();
return $el__7890.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-gift",(function (_){
var $el__7891 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

$el__7891.focus();
return $el__7891.select();
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'transaction-cash","\uFDD0'transaction-gift","\uFDD0'transaction-credit"]),(function (t,_){
return pos.client.view.focus_tender_field.call(null,t);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'confirm-tender"]),(function() { 
var G__7893__delegate = function (_){
lib.dispatch.fire.call(null,"\uFDD0'cancel-tender");
return jayq.core.$.call(null,"\uFDD0'#tender-success").modal();
};
var G__7893 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7893__delegate.call(this, _);
};
G__7893.cljs$lang$maxFixedArity = 0;
G__7893.cljs$lang$applyTo = (function (arglist__7894){
var _ = cljs.core.seq( arglist__7894 );;
return G__7893__delegate.call(this, _);
});
return G__7893;
})()
);
pos.client.view.render = (function (){var method_table__3162__auto____7895 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7896 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7897 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7898 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7899 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____7899,method_table__3162__auto____7895,prefer_table__3163__auto____7896,method_cache__3164__auto____7897,cached_hierarchy__3165__auto____7898));
})();
cljs.core._add_method.call(null,pos.client.view.render,cljs.core.PersistentVector.fromArray(["\uFDD0'dashboard","\uFDD0'tender"]),(function (_){
return pos.client.animation.state_transition.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'slide-in","\uFDD0'slide-out","\uFDD0'in","\uFDD0'out"],{"\uFDD0'slide-in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#tender")]),"\uFDD0'slide-out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#weather"),jayq.core.$.call(null,"\uFDD0'#item-row")]),"\uFDD0'in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#cancel-tender-button")]),"\uFDD0'out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#proceed-tender-button")])}));
}));
cljs.core._add_method.call(null,pos.client.view.render,cljs.core.PersistentVector.fromArray(["\uFDD0'tender","\uFDD0'dashboard"]),(function (_){
return pos.client.animation.state_transition.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'slide-in","\uFDD0'slide-out","\uFDD0'in","\uFDD0'out"],{"\uFDD0'slide-in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#weather"),jayq.core.$.call(null,"\uFDD0'#item-row")]),"\uFDD0'slide-out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#tender")]),"\uFDD0'in":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#proceed-tender-button")]),"\uFDD0'out":cljs.core.PersistentVector.fromArray([jayq.core.$.call(null,"\uFDD0'#cancel-tender-button")])}));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'state-change"]),(function (_,d){
return pos.client.view.render.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'state"],{"\uFDD0'state":d}));
}));
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.util.start_timer.call(null,pos.client.view.render_time);
pos.client.view.draw_pie.call(null);
pos.client.view.bind_tender_buttons.call(null);
pos.client.view.bind_tender_listeners.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
