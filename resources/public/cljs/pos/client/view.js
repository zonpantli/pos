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
pos.client.view.render_location = (function render_location(p__16913){
var map__16914__16915 = p__16913;
var map__16914__16916 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16914__16915))?cljs.core.apply.call(null,cljs.core.hash_map,map__16914__16915):map__16914__16915);
var id__16917 = cljs.core.get.call(null,map__16914__16916,"\uFDD0'id");

var temp__3695__auto____16918 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__16917);

if(cljs.core.truth_(temp__3695__auto____16918))
{var location__16919 = temp__3695__auto____16918;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__16919));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__16920){
var map__16921__16922 = p__16920;
var map__16921__16923 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16921__16922))?cljs.core.apply.call(null,cljs.core.hash_map,map__16921__16922):map__16921__16922);
var id__16924 = cljs.core.get.call(null,map__16921__16923,"\uFDD0'id");

var temp__3695__auto____16925 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__16924);

if(cljs.core.truth_(temp__3695__auto____16925))
{var employee__16926 = temp__3695__auto____16925;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__16926));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__16927 = pos.client.util.get_formatted_datetime.call(null);
var el__16928 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__16928,t__16927);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__16929_SHARP_){
return cljs.core.merge.call(null,p1__16929_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__16929_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__16930_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__16930_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__16931_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__16931_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__16932 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__16932,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__16932));
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
var group__6106__auto____16933 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__16934){
var map__16935__16936 = p__16934;
var map__16935__16937 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16935__16936))?cljs.core.apply.call(null,cljs.core.hash_map,map__16935__16936):map__16935__16936);
var name__16938 = cljs.core.get.call(null,map__16935__16937,"\uFDD0'name");
var id__16939 = cljs.core.get.call(null,map__16935__16937,"\uFDD0'id");

var elem__6107__auto____16940 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__16939}),name__16938])]));

elem__6107__auto____16940.setAttribute("crateGroup",group__6106__auto____16933);
return elem__6107__auto____16940;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6106__auto____16933;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__16941__16942 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__16941__16942))
{var loc__16943 = cljs.core.first.call(null,G__16941__16942);
var G__16941__16944 = G__16941__16942;

while(true){
var el__16945 = pos.client.view.dropdown_row.call(null,loc__16943);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__16945);
jayq.core.bind.call(null,jayq.core.$.call(null,el__16945),"click",((function (loc__16943,G__16941__16944,el__16945){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__16943));
});})(loc__16943,G__16941__16944,el__16945))
);
var temp__3698__auto____16946 = cljs.core.next.call(null,G__16941__16944);

if(cljs.core.truth_(temp__3698__auto____16946))
{var G__16941__16947 = temp__3698__auto____16946;

{
var G__16955 = cljs.core.first.call(null,G__16941__16947);
var G__16956 = G__16941__16947;
loc__16943 = G__16955;
G__16941__16944 = G__16956;
continue;
}
} else
{}
break;
}
} else
{}
var G__16948__16949 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__16948__16949))
{var empl__16950 = cljs.core.first.call(null,G__16948__16949);
var G__16948__16951 = G__16948__16949;

while(true){
var el__16952 = pos.client.view.dropdown_row.call(null,empl__16950);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__16952);
jayq.core.bind.call(null,jayq.core.$.call(null,el__16952),"click",((function (empl__16950,G__16948__16951,el__16952){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__16950));
});})(empl__16950,G__16948__16951,el__16952))
);
var temp__3698__auto____16953 = cljs.core.next.call(null,G__16948__16951);

if(cljs.core.truth_(temp__3698__auto____16953))
{var G__16948__16954 = temp__3698__auto____16953;

{
var G__16957 = cljs.core.first.call(null,G__16948__16954);
var G__16958 = G__16948__16954;
empl__16950 = G__16957;
G__16948__16951 = G__16958;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____16959 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____16960 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____16961 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____16962 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____16963 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____16963,method_table__3162__auto____16959,prefer_table__3163__auto____16960,method_cache__3164__auto____16961,cached_hierarchy__3165__auto____16962));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__16964){
var map__16965__16966 = p__16964;
var map__16965__16967 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16965__16966))?cljs.core.apply.call(null,cljs.core.hash_map,map__16965__16966):map__16965__16966);
var id__16968 = cljs.core.get.call(null,map__16965__16967,"\uFDD0'id");

var customer__16969 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__16968);
var el__16970 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__16970,"\uFDD0'name".call(null,customer__16969));
pos.client.animation.flash_input_border.call(null,el__16970);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__16969));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__16971 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__16971,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____16972 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____16972))
{var id__16973 = temp__3695__auto____16972;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____16974 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____16975 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____16976 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____16977 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____16978 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____16978,method_table__3162__auto____16974,prefer_table__3163__auto____16975,method_cache__3164__auto____16976,cached_hierarchy__3165__auto____16977));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__16979){
var map__16980__16981 = p__16979;
var map__16980__16982 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16980__16981))?cljs.core.apply.call(null,cljs.core.hash_map,map__16980__16981):map__16980__16981);
var id__16983 = cljs.core.get.call(null,map__16980__16982,"\uFDD0'id");

var item__16984 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__16983);
var el__16985 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__16985,"\uFDD0'name".call(null,item__16984));
pos.client.animation.flash_input_border.call(null,el__16985);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__16986 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__16986,null);
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
var group__6106__auto____16987 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__16988){
var map__16989__16990 = p__16988;
var map__16989__16991 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__16989__16990))?cljs.core.apply.call(null,cljs.core.hash_map,map__16989__16990):map__16989__16990);
var discount__16992 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'discount");
var qty__16993 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'qty");
var price__16994 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'price");
var size__16995 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'size");
var color__16996 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'color");
var name__16997 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'name");
var id__16998 = cljs.core.get.call(null,map__16989__16991,"\uFDD0'id");

var elem__6107__auto____16999 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__16998}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__16997])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__16998])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__16995])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__16996])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__16993})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__16994})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__16992})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__16994)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6107__auto____16999.setAttribute("crateGroup",group__6106__auto____16987);
return elem__6107__auto____16999;
});
pos.client.view.basket_item.prototype._crateGroup = group__6106__auto____16987;
pos.client.view.render_basket = (function (){var method_table__3162__auto____17000 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____17001 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____17002 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____17003 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____17004 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____17004,method_table__3162__auto____17000,prefer_table__3163__auto____17001,method_cache__3164__auto____17002,cached_hierarchy__3165__auto____17003));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__17005){
var map__17006__17007 = p__17005;
var map__17006__17008 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__17006__17007))?cljs.core.apply.call(null,cljs.core.hash_map,map__17006__17007):map__17006__17007);
var item__17009 = cljs.core.get.call(null,map__17006__17008,"\uFDD0'item");
var item__17010 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__17009))?cljs.core.apply.call(null,cljs.core.hash_map,item__17009):item__17009);
var id__17011 = cljs.core.get.call(null,item__17010,"\uFDD0'id");

var $el__17012 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__17010));
var $qty__17013 = jayq.core.find.call(null,$el__17012,".qty > div > input");
var $price__17014 = jayq.core.find.call(null,$el__17012,".price > div > input");
var $discount__17015 = jayq.core.find.call(null,$el__17012,".discount > div > input");
var $close__17016 = jayq.core.find.call(null,$el__17012,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__17012);
pos.client.animation.slide_in_table_row.call(null,$el__17012);
jayq.core.bind.call(null,$qty__17013,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__17011,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__17013)}));
}));
jayq.core.bind.call(null,$price__17014,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__17011,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__17014)}));
}));
jayq.core.bind.call(null,$discount__17015,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__17011,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__17015)}));
}));
return jayq.core.bind.call(null,$close__17016,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__17011);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__17017){
var map__17018__17019 = p__17017;
var map__17018__17020 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__17018__17019))?cljs.core.apply.call(null,cljs.core.hash_map,map__17018__17019):map__17018__17019);
var id__17021 = cljs.core.get.call(null,map__17018__17020,"\uFDD0'id");

var el__17022 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__17021));

return pos.client.animation.slide_out_table_row.call(null,el__17022);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__17023){
var map__17024__17025 = p__17023;
var map__17024__17026 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__17024__17025))?cljs.core.apply.call(null,cljs.core.hash_map,map__17024__17025):map__17024__17025);
var item__17027 = cljs.core.get.call(null,map__17024__17026,"\uFDD0'item");
var item__17028 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__17027))?cljs.core.apply.call(null,cljs.core.hash_map,item__17027):item__17027);
var discount__17029 = cljs.core.get.call(null,item__17028,"\uFDD0'discount");
var qty__17030 = cljs.core.get.call(null,item__17028,"\uFDD0'qty");
var price__17031 = cljs.core.get.call(null,item__17028,"\uFDD0'price");
var id__17032 = cljs.core.get.call(null,item__17028,"\uFDD0'id");

var el__17033 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__17032));

pos.client.util.value.call(null,jayq.core.find.call(null,el__17033,"td.qty > div input"),qty__17030);
pos.client.util.value.call(null,jayq.core.find.call(null,el__17033,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__17031));
pos.client.util.value.call(null,jayq.core.find.call(null,el__17033,"td.discount > div input"),discount__17029.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__17033,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__17028)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__17034){
var map__17035__17036 = p__17034;
var map__17035__17037 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__17035__17036))?cljs.core.apply.call(null,cljs.core.hash_map,map__17035__17036):map__17035__17036);
var discount__17038 = cljs.core.get.call(null,map__17035__17037,"\uFDD0'discount");
var vat__17039 = cljs.core.get.call(null,map__17035__17037,"\uFDD0'vat");
var tot__17040 = cljs.core.get.call(null,map__17035__17037,"\uFDD0'tot");

var $tot__17041 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__17042 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__17043 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__17041,pos.client.util.num_as_field_value.call(null,tot__17040));
jayq.core.inner.call(null,$vat__17042,pos.client.util.num_as_field_value.call(null,vat__17039));
return jayq.core.inner.call(null,$discount__17043,pos.client.util.num_as_field_value.call(null,discount__17038));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#proceed-tender-button"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'proceed-tender");
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#cancel-tender-button"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'cancel-tender");
}));
return jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#confirm-tender-button"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'confirm-tender");
}));
});
pos.client.view.render_tender = (function (){var method_table__3162__auto____17044 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____17045 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____17046 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____17047 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____17048 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____17048,method_table__3162__auto____17044,prefer_table__3163__auto____17045,method_cache__3164__auto____17046,cached_hierarchy__3165__auto____17047));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__17049__17050 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__17049__17050))
{var id__17051 = cljs.core.first.call(null,G__17049__17050);
var G__17049__17052 = G__17049__17050;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__17051),null);
var temp__3698__auto____17053 = cljs.core.next.call(null,G__17049__17052);

if(cljs.core.truth_(temp__3698__auto____17053))
{var G__17049__17054 = temp__3698__auto____17053;

{
var G__17055 = cljs.core.first.call(null,G__17049__17054);
var G__17056 = G__17049__17054;
id__17051 = G__17055;
G__17049__17052 = G__17056;
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
var G__17057__17058 = cljs.core.seq.call(null,cljs.core.keys.call(null,tender));

if(cljs.core.truth_(G__17057__17058))
{var key__17059 = cljs.core.first.call(null,G__17057__17058);
var G__17057__17060 = G__17057__17058;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#tender-",cljs.core.name.call(null,key__17059))),pos.client.util.num_as_field_value.call(null,key__17059.call(null,tender)));
var temp__3698__auto____17061 = cljs.core.next.call(null,G__17057__17060);

if(cljs.core.truth_(temp__3698__auto____17061))
{var G__17057__17062 = temp__3698__auto____17061;

{
var G__17063 = cljs.core.first.call(null,G__17057__17062);
var G__17064 = G__17057__17062;
key__17059 = G__17063;
G__17057__17060 = G__17064;
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
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-change"]),(function (_,d){
return pos.client.view.render_tender.call(null,d);
}));
pos.client.view.render = (function (){var method_table__3162__auto____17065 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____17066 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____17067 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____17068 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____17069 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____17069,method_table__3162__auto____17065,prefer_table__3163__auto____17066,method_cache__3164__auto____17067,cached_hierarchy__3165__auto____17068));
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
