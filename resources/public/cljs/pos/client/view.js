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
pos.client.view.render_location = (function render_location(p__14738){
var map__14739__14740 = p__14738;
var map__14739__14741 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14739__14740))?cljs.core.apply.call(null,cljs.core.hash_map,map__14739__14740):map__14739__14740);
var id__14742 = cljs.core.get.call(null,map__14739__14741,"\uFDD0'id");

var temp__3695__auto____14743 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14742);

if(cljs.core.truth_(temp__3695__auto____14743))
{var location__14744 = temp__3695__auto____14743;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__14744));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__14745){
var map__14746__14747 = p__14745;
var map__14746__14748 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14746__14747))?cljs.core.apply.call(null,cljs.core.hash_map,map__14746__14747):map__14746__14747);
var id__14749 = cljs.core.get.call(null,map__14746__14748,"\uFDD0'id");

var temp__3695__auto____14750 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14749);

if(cljs.core.truth_(temp__3695__auto____14750))
{var employee__14751 = temp__3695__auto____14750;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__14751));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__14752 = pos.client.util.get_formatted_datetime.call(null);
var el__14753 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__14753,t__14752);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__14754_SHARP_){
return cljs.core.merge.call(null,p1__14754_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__14754_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__14755_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__14755_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__14756_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__14756_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__14757 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__14757,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__14757));
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
var group__6106__auto____14758 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__14759){
var map__14760__14761 = p__14759;
var map__14760__14762 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14760__14761))?cljs.core.apply.call(null,cljs.core.hash_map,map__14760__14761):map__14760__14761);
var name__14763 = cljs.core.get.call(null,map__14760__14762,"\uFDD0'name");
var id__14764 = cljs.core.get.call(null,map__14760__14762,"\uFDD0'id");

var elem__6107__auto____14765 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__14764}),name__14763])]));

elem__6107__auto____14765.setAttribute("crateGroup",group__6106__auto____14758);
return elem__6107__auto____14765;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6106__auto____14758;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__14766__14767 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__14766__14767))
{var loc__14768 = cljs.core.first.call(null,G__14766__14767);
var G__14766__14769 = G__14766__14767;

while(true){
var el__14770 = pos.client.view.dropdown_row.call(null,loc__14768);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__14770);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14770),"click",((function (loc__14768,G__14766__14769,el__14770){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__14768));
});})(loc__14768,G__14766__14769,el__14770))
);
var temp__3698__auto____14771 = cljs.core.next.call(null,G__14766__14769);

if(cljs.core.truth_(temp__3698__auto____14771))
{var G__14766__14772 = temp__3698__auto____14771;

{
var G__14780 = cljs.core.first.call(null,G__14766__14772);
var G__14781 = G__14766__14772;
loc__14768 = G__14780;
G__14766__14769 = G__14781;
continue;
}
} else
{}
break;
}
} else
{}
var G__14773__14774 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__14773__14774))
{var empl__14775 = cljs.core.first.call(null,G__14773__14774);
var G__14773__14776 = G__14773__14774;

while(true){
var el__14777 = pos.client.view.dropdown_row.call(null,empl__14775);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__14777);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14777),"click",((function (empl__14775,G__14773__14776,el__14777){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__14775));
});})(empl__14775,G__14773__14776,el__14777))
);
var temp__3698__auto____14778 = cljs.core.next.call(null,G__14773__14776);

if(cljs.core.truth_(temp__3698__auto____14778))
{var G__14773__14779 = temp__3698__auto____14778;

{
var G__14782 = cljs.core.first.call(null,G__14773__14779);
var G__14783 = G__14773__14779;
empl__14775 = G__14782;
G__14773__14776 = G__14783;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____14784 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14785 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14786 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14787 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14788 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14788,method_table__3162__auto____14784,prefer_table__3163__auto____14785,method_cache__3164__auto____14786,cached_hierarchy__3165__auto____14787));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__14789){
var map__14790__14791 = p__14789;
var map__14790__14792 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14790__14791))?cljs.core.apply.call(null,cljs.core.hash_map,map__14790__14791):map__14790__14791);
var id__14793 = cljs.core.get.call(null,map__14790__14792,"\uFDD0'id");

var customer__14794 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14793);
var el__14795 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14795,"\uFDD0'name".call(null,customer__14794));
pos.client.animation.flash_input_border.call(null,el__14795);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__14794));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__14796 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14796,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____14797 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____14797))
{var id__14798 = temp__3695__auto____14797;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____14799 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14800 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14801 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14802 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14803 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14803,method_table__3162__auto____14799,prefer_table__3163__auto____14800,method_cache__3164__auto____14801,cached_hierarchy__3165__auto____14802));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__14804){
var map__14805__14806 = p__14804;
var map__14805__14807 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14805__14806))?cljs.core.apply.call(null,cljs.core.hash_map,map__14805__14806):map__14805__14806);
var id__14808 = cljs.core.get.call(null,map__14805__14807,"\uFDD0'id");

var item__14809 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14808);
var el__14810 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__14810,"\uFDD0'name".call(null,item__14809));
pos.client.animation.flash_input_border.call(null,el__14810);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__14811 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__14811,null);
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
var group__6106__auto____14812 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__14813){
var map__14814__14815 = p__14813;
var map__14814__14816 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14814__14815))?cljs.core.apply.call(null,cljs.core.hash_map,map__14814__14815):map__14814__14815);
var discount__14817 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'discount");
var qty__14818 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'qty");
var price__14819 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'price");
var size__14820 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'size");
var color__14821 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'color");
var name__14822 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'name");
var id__14823 = cljs.core.get.call(null,map__14814__14816,"\uFDD0'id");

var elem__6107__auto____14824 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14823}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__14822])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__14823])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__14820])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__14821])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__14818})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__14819})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__14817})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__14819)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6107__auto____14824.setAttribute("crateGroup",group__6106__auto____14812);
return elem__6107__auto____14824;
});
pos.client.view.basket_item.prototype._crateGroup = group__6106__auto____14812;
pos.client.view.render_basket = (function (){var method_table__3162__auto____14825 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14826 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14827 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14828 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14829 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____14829,method_table__3162__auto____14825,prefer_table__3163__auto____14826,method_cache__3164__auto____14827,cached_hierarchy__3165__auto____14828));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__14830){
var map__14831__14832 = p__14830;
var map__14831__14833 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14831__14832))?cljs.core.apply.call(null,cljs.core.hash_map,map__14831__14832):map__14831__14832);
var item__14834 = cljs.core.get.call(null,map__14831__14833,"\uFDD0'item");
var item__14835 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14834))?cljs.core.apply.call(null,cljs.core.hash_map,item__14834):item__14834);
var id__14836 = cljs.core.get.call(null,item__14835,"\uFDD0'id");

var $el__14837 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__14835));
var $qty__14838 = jayq.core.find.call(null,$el__14837,".qty > div > input");
var $price__14839 = jayq.core.find.call(null,$el__14837,".price > div > input");
var $discount__14840 = jayq.core.find.call(null,$el__14837,".discount > div > input");
var $close__14841 = jayq.core.find.call(null,$el__14837,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__14837);
pos.client.animation.slide_in_table_row.call(null,$el__14837);
jayq.core.bind.call(null,$qty__14838,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14836,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__14838)}));
}));
jayq.core.bind.call(null,$price__14839,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14836,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__14839)}));
}));
jayq.core.bind.call(null,$discount__14840,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14836,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__14840)}));
}));
return jayq.core.bind.call(null,$close__14841,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__14836);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__14842){
var map__14843__14844 = p__14842;
var map__14843__14845 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14843__14844))?cljs.core.apply.call(null,cljs.core.hash_map,map__14843__14844):map__14843__14844);
var id__14846 = cljs.core.get.call(null,map__14843__14845,"\uFDD0'id");

var el__14847 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14846));

return pos.client.animation.slide_out_table_row.call(null,el__14847);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__14848){
var map__14849__14850 = p__14848;
var map__14849__14851 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14849__14850))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849__14850):map__14849__14850);
var item__14852 = cljs.core.get.call(null,map__14849__14851,"\uFDD0'item");
var item__14853 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14852))?cljs.core.apply.call(null,cljs.core.hash_map,item__14852):item__14852);
var discount__14854 = cljs.core.get.call(null,item__14853,"\uFDD0'discount");
var qty__14855 = cljs.core.get.call(null,item__14853,"\uFDD0'qty");
var price__14856 = cljs.core.get.call(null,item__14853,"\uFDD0'price");
var id__14857 = cljs.core.get.call(null,item__14853,"\uFDD0'id");

var el__14858 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14857));

pos.client.util.value.call(null,jayq.core.find.call(null,el__14858,"td.qty > div input"),qty__14855);
pos.client.util.value.call(null,jayq.core.find.call(null,el__14858,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__14856));
pos.client.util.value.call(null,jayq.core.find.call(null,el__14858,"td.discount > div input"),discount__14854.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__14858,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__14853)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__14859){
var map__14860__14861 = p__14859;
var map__14860__14862 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14860__14861))?cljs.core.apply.call(null,cljs.core.hash_map,map__14860__14861):map__14860__14861);
var discount__14863 = cljs.core.get.call(null,map__14860__14862,"\uFDD0'discount");
var vat__14864 = cljs.core.get.call(null,map__14860__14862,"\uFDD0'vat");
var tot__14865 = cljs.core.get.call(null,map__14860__14862,"\uFDD0'tot");

var $tot__14866 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__14867 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__14868 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__14866,pos.client.util.num_as_field_value.call(null,tot__14865));
jayq.core.inner.call(null,$vat__14867,pos.client.util.num_as_field_value.call(null,vat__14864));
return jayq.core.inner.call(null,$discount__14868,pos.client.util.num_as_field_value.call(null,discount__14863));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var $proceed__14869 = jayq.core.$.call(null,"\uFDD0'#proceed-tender-button");
var $cancel__14870 = jayq.core.$.call(null,"\uFDD0'#cancel-tender-button");

jayq.core.bind.call(null,$proceed__14869,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'proceed-tender");
}));
return jayq.core.bind.call(null,$cancel__14870,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'cancel-tender");
}));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'render-tender"]),(function (_,d){
return jayq.util.log.call(null,"TODO: update tender views");
}));
pos.client.view.render = (function (){var method_table__3162__auto____14871 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14872 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14873 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14874 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14875 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____14875,method_table__3162__auto____14871,prefer_table__3163__auto____14872,method_cache__3164__auto____14873,cached_hierarchy__3165__auto____14874));
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
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
