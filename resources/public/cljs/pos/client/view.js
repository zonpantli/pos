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
pos.client.view.render_location = (function render_location(p__7839){
var map__7840__7841 = p__7839;
var map__7840__7842 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7840__7841))?cljs.core.apply.call(null,cljs.core.hash_map,map__7840__7841):map__7840__7841);
var id__7843 = cljs.core.get.call(null,map__7840__7842,"\uFDD0'id");

var temp__3695__auto____7844 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7843);

if(cljs.core.truth_(temp__3695__auto____7844))
{var location__7845 = temp__3695__auto____7844;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7845));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7846){
var map__7847__7848 = p__7846;
var map__7847__7849 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7847__7848))?cljs.core.apply.call(null,cljs.core.hash_map,map__7847__7848):map__7847__7848);
var id__7850 = cljs.core.get.call(null,map__7847__7849,"\uFDD0'id");

var temp__3695__auto____7851 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7850);

if(cljs.core.truth_(temp__3695__auto____7851))
{var employee__7852 = temp__3695__auto____7851;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7852));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__7853 = pos.client.util.get_formatted_datetime.call(null);
var el__7854 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__7854,t__7853);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7855_SHARP_){
return cljs.core.merge.call(null,p1__7855_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7855_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7856_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7856_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__7857_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__7857_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7858 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7858,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__7858));
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
var group__6197__auto____7859 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7860){
var map__7861__7862 = p__7860;
var map__7861__7863 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7861__7862))?cljs.core.apply.call(null,cljs.core.hash_map,map__7861__7862):map__7861__7862);
var name__7864 = cljs.core.get.call(null,map__7861__7863,"\uFDD0'name");
var id__7865 = cljs.core.get.call(null,map__7861__7863,"\uFDD0'id");

var elem__6198__auto____7866 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7865}),name__7864])]));

elem__6198__auto____7866.setAttribute("crateGroup",group__6197__auto____7859);
return elem__6198__auto____7866;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____7859;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7867__7868 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7867__7868))
{var loc__7869 = cljs.core.first.call(null,G__7867__7868);
var G__7867__7870 = G__7867__7868;

while(true){
var el__7871 = pos.client.view.dropdown_row.call(null,loc__7869);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7871);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7871),"click",((function (loc__7869,G__7867__7870,el__7871){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7869));
});})(loc__7869,G__7867__7870,el__7871))
);
var temp__3698__auto____7872 = cljs.core.next.call(null,G__7867__7870);

if(cljs.core.truth_(temp__3698__auto____7872))
{var G__7867__7873 = temp__3698__auto____7872;

{
var G__7881 = cljs.core.first.call(null,G__7867__7873);
var G__7882 = G__7867__7873;
loc__7869 = G__7881;
G__7867__7870 = G__7882;
continue;
}
} else
{}
break;
}
} else
{}
var G__7874__7875 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7874__7875))
{var empl__7876 = cljs.core.first.call(null,G__7874__7875);
var G__7874__7877 = G__7874__7875;

while(true){
var el__7878 = pos.client.view.dropdown_row.call(null,empl__7876);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7878);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7878),"click",((function (empl__7876,G__7874__7877,el__7878){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7876));
});})(empl__7876,G__7874__7877,el__7878))
);
var temp__3698__auto____7879 = cljs.core.next.call(null,G__7874__7877);

if(cljs.core.truth_(temp__3698__auto____7879))
{var G__7874__7880 = temp__3698__auto____7879;

{
var G__7883 = cljs.core.first.call(null,G__7874__7880);
var G__7884 = G__7874__7880;
empl__7876 = G__7883;
G__7874__7877 = G__7884;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____7885 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7886 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7887 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7888 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7889 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7889,method_table__3162__auto____7885,prefer_table__3163__auto____7886,method_cache__3164__auto____7887,cached_hierarchy__3165__auto____7888));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7890){
var map__7891__7892 = p__7890;
var map__7891__7893 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7891__7892))?cljs.core.apply.call(null,cljs.core.hash_map,map__7891__7892):map__7891__7892);
var id__7894 = cljs.core.get.call(null,map__7891__7893,"\uFDD0'id");

var customer__7895 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7894);
var el__7896 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7896,"\uFDD0'name".call(null,customer__7895));
pos.client.animation.flash_input_border.call(null,el__7896);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7895));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7897 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7897,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7898 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7898))
{var id__7899 = temp__3695__auto____7898;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____7900 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7901 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7902 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7903 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7904 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7904,method_table__3162__auto____7900,prefer_table__3163__auto____7901,method_cache__3164__auto____7902,cached_hierarchy__3165__auto____7903));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__7905){
var map__7906__7907 = p__7905;
var map__7906__7908 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7906__7907))?cljs.core.apply.call(null,cljs.core.hash_map,map__7906__7907):map__7906__7907);
var id__7909 = cljs.core.get.call(null,map__7906__7908,"\uFDD0'id");

var item__7910 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7909);
var el__7911 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__7911,"\uFDD0'name".call(null,item__7910));
pos.client.animation.flash_input_border.call(null,el__7911);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__7912 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__7912,null);
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
var group__6197__auto____7913 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__7914){
var map__7915__7916 = p__7914;
var map__7915__7917 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7915__7916))?cljs.core.apply.call(null,cljs.core.hash_map,map__7915__7916):map__7915__7916);
var discount__7918 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'discount");
var qty__7919 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'qty");
var price__7920 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'price");
var size__7921 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'size");
var color__7922 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'color");
var name__7923 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'name");
var id__7924 = cljs.core.get.call(null,map__7915__7917,"\uFDD0'id");

var elem__6198__auto____7925 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7924}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__7923])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__7924])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__7921])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__7922])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__7919})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__7920})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__7918})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__7920)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6198__auto____7925.setAttribute("crateGroup",group__6197__auto____7913);
return elem__6198__auto____7925;
});
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____7913;
pos.client.view.render_basket = (function (){var method_table__3162__auto____7926 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7927 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7928 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7929 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7930 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____7930,method_table__3162__auto____7926,prefer_table__3163__auto____7927,method_cache__3164__auto____7928,cached_hierarchy__3165__auto____7929));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__7931){
var map__7932__7933 = p__7931;
var map__7932__7934 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7932__7933))?cljs.core.apply.call(null,cljs.core.hash_map,map__7932__7933):map__7932__7933);
var item__7935 = cljs.core.get.call(null,map__7932__7934,"\uFDD0'item");
var item__7936 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7935))?cljs.core.apply.call(null,cljs.core.hash_map,item__7935):item__7935);
var id__7937 = cljs.core.get.call(null,item__7936,"\uFDD0'id");

var $el__7938 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__7936));
var $qty__7939 = jayq.core.find.call(null,$el__7938,".qty > div > input");
var $price__7940 = jayq.core.find.call(null,$el__7938,".price > div > input");
var $discount__7941 = jayq.core.find.call(null,$el__7938,".discount > div > input");
var $close__7942 = jayq.core.find.call(null,$el__7938,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__7938);
pos.client.animation.slide_in_table_row.call(null,$el__7938);
jayq.core.bind.call(null,$qty__7939,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7937,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__7939)}));
}));
jayq.core.bind.call(null,$price__7940,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7937,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__7940)}));
}));
jayq.core.bind.call(null,$discount__7941,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__7937,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__7941)}));
}));
return jayq.core.bind.call(null,$close__7942,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__7937);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__7943){
var map__7944__7945 = p__7943;
var map__7944__7946 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7944__7945))?cljs.core.apply.call(null,cljs.core.hash_map,map__7944__7945):map__7944__7945);
var id__7947 = cljs.core.get.call(null,map__7944__7946,"\uFDD0'id");

var el__7948 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7947));

return pos.client.animation.slide_out_table_row.call(null,el__7948);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__7949){
var map__7950__7951 = p__7949;
var map__7950__7952 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7950__7951))?cljs.core.apply.call(null,cljs.core.hash_map,map__7950__7951):map__7950__7951);
var item__7953 = cljs.core.get.call(null,map__7950__7952,"\uFDD0'item");
var item__7954 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__7953))?cljs.core.apply.call(null,cljs.core.hash_map,item__7953):item__7953);
var discount__7955 = cljs.core.get.call(null,item__7954,"\uFDD0'discount");
var qty__7956 = cljs.core.get.call(null,item__7954,"\uFDD0'qty");
var price__7957 = cljs.core.get.call(null,item__7954,"\uFDD0'price");
var id__7958 = cljs.core.get.call(null,item__7954,"\uFDD0'id");

var el__7959 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__7958));

pos.client.util.value.call(null,jayq.core.find.call(null,el__7959,"td.qty > div input"),qty__7956);
pos.client.util.value.call(null,jayq.core.find.call(null,el__7959,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__7957));
pos.client.util.value.call(null,jayq.core.find.call(null,el__7959,"td.discount > div input"),discount__7955.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__7959,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__7954)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__7960){
var map__7961__7962 = p__7960;
var map__7961__7963 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7961__7962))?cljs.core.apply.call(null,cljs.core.hash_map,map__7961__7962):map__7961__7962);
var discount__7964 = cljs.core.get.call(null,map__7961__7963,"\uFDD0'discount");
var vat__7965 = cljs.core.get.call(null,map__7961__7963,"\uFDD0'vat");
var tot__7966 = cljs.core.get.call(null,map__7961__7963,"\uFDD0'tot");

var $tot__7967 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__7968 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__7969 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__7967,pos.client.util.num_as_field_value.call(null,tot__7966));
jayq.core.inner.call(null,$vat__7968,pos.client.util.num_as_field_value.call(null,vat__7965));
return jayq.core.inner.call(null,$discount__7969,pos.client.util.num_as_field_value.call(null,discount__7964));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var G__7970__7971 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["proceed-tender","cancel-tender","confirm-tender","transaction-cash","transaction-credit","transaction-gift"]));

if(cljs.core.truth_(G__7970__7971))
{var name__7972 = cljs.core.first.call(null,G__7970__7971);
var G__7970__7973 = G__7970__7971;

while(true){
jayq.core.bind.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#",name__7972,"-button")),"click",((function (name__7972,G__7970__7973){
return (function (){
return lib.dispatch.fire.call(null,cljs.core.keyword.call(null,name__7972));
});})(name__7972,G__7970__7973))
);
var temp__3698__auto____7974 = cljs.core.next.call(null,G__7970__7973);

if(cljs.core.truth_(temp__3698__auto____7974))
{var G__7970__7975 = temp__3698__auto____7974;

{
var G__7976 = cljs.core.first.call(null,G__7970__7975);
var G__7977 = G__7970__7975;
name__7972 = G__7976;
G__7970__7973 = G__7977;
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
pos.client.view.render_tender = (function (){var method_table__3162__auto____7978 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7979 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7980 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7981 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7982 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____7982,method_table__3162__auto____7978,prefer_table__3163__auto____7979,method_cache__3164__auto____7980,cached_hierarchy__3165__auto____7981));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__7983__7984 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__7983__7984))
{var id__7985 = cljs.core.first.call(null,G__7983__7984);
var G__7983__7986 = G__7983__7984;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__7985),null);
var temp__3698__auto____7987 = cljs.core.next.call(null,G__7983__7986);

if(cljs.core.truth_(temp__3698__auto____7987))
{var G__7983__7988 = temp__3698__auto____7987;

{
var G__7989 = cljs.core.first.call(null,G__7983__7988);
var G__7990 = G__7983__7988;
id__7985 = G__7989;
G__7983__7986 = G__7990;
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
var G__7991__7992 = cljs.core.seq.call(null,cljs.core.keys.call(null,tender));

if(cljs.core.truth_(G__7991__7992))
{var key__7993 = cljs.core.first.call(null,G__7991__7992);
var G__7991__7994 = G__7991__7992;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#tender-",cljs.core.name.call(null,key__7993))),pos.client.util.num_as_field_value.call(null,key__7993.call(null,tender)));
var temp__3698__auto____7995 = cljs.core.next.call(null,G__7991__7994);

if(cljs.core.truth_(temp__3698__auto____7995))
{var G__7991__7996 = temp__3698__auto____7995;

{
var G__7997 = cljs.core.first.call(null,G__7991__7996);
var G__7998 = G__7991__7996;
key__7993 = G__7997;
G__7991__7994 = G__7998;
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
pos.client.view.focus_tender_field = (function focus_tender_field(key){
return jayq.core.$.call(null,"\uFDD0'#tender-cash").focus();
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'transaction-cash","\uFDD0'transaction-gift","\uFDD0'transaction-credit"]),(function (t,_){
return pos.client.view.focus_tender_field.call(null,t);
}));
pos.client.view.render = (function (){var method_table__3162__auto____7999 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8000 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8001 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8002 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8003 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____8003,method_table__3162__auto____7999,prefer_table__3163__auto____8000,method_cache__3164__auto____8001,cached_hierarchy__3165__auto____8002));
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
