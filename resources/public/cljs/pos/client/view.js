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
pos.client.view.render_location = (function render_location(p__11203){
var map__11204__11205 = p__11203;
var map__11204__11206 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11204__11205))?cljs.core.apply.call(null,cljs.core.hash_map,map__11204__11205):map__11204__11205);
var id__11207 = cljs.core.get.call(null,map__11204__11206,"\uFDD0'id");

var temp__3695__auto____11208 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11207);

if(cljs.core.truth_(temp__3695__auto____11208))
{var location__11209 = temp__3695__auto____11208;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__11209));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__11210){
var map__11211__11212 = p__11210;
var map__11211__11213 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11211__11212))?cljs.core.apply.call(null,cljs.core.hash_map,map__11211__11212):map__11211__11212);
var id__11214 = cljs.core.get.call(null,map__11211__11213,"\uFDD0'id");

var temp__3695__auto____11215 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11214);

if(cljs.core.truth_(temp__3695__auto____11215))
{var employee__11216 = temp__3695__auto____11215;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__11216));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__11217 = pos.client.util.get_formatted_datetime.call(null);
var el__11218 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__11218,t__11217);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__11219_SHARP_){
return cljs.core.merge.call(null,p1__11219_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__11219_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__11220_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__11220_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__11221_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__11221_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__11222 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__11222,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__11222));
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
var group__6197__auto____11223 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__11224){
var map__11225__11226 = p__11224;
var map__11225__11227 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11225__11226))?cljs.core.apply.call(null,cljs.core.hash_map,map__11225__11226):map__11225__11226);
var name__11228 = cljs.core.get.call(null,map__11225__11227,"\uFDD0'name");
var id__11229 = cljs.core.get.call(null,map__11225__11227,"\uFDD0'id");

var elem__6198__auto____11230 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__11229}),name__11228])]));

elem__6198__auto____11230.setAttribute("crateGroup",group__6197__auto____11223);
return elem__6198__auto____11230;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____11223;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__11231__11232 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__11231__11232))
{var loc__11233 = cljs.core.first.call(null,G__11231__11232);
var G__11231__11234 = G__11231__11232;

while(true){
var el__11235 = pos.client.view.dropdown_row.call(null,loc__11233);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__11235);
jayq.core.bind.call(null,jayq.core.$.call(null,el__11235),"click",((function (loc__11233,G__11231__11234,el__11235){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__11233));
});})(loc__11233,G__11231__11234,el__11235))
);
var temp__3698__auto____11236 = cljs.core.next.call(null,G__11231__11234);

if(cljs.core.truth_(temp__3698__auto____11236))
{var G__11231__11237 = temp__3698__auto____11236;

{
var G__11245 = cljs.core.first.call(null,G__11231__11237);
var G__11246 = G__11231__11237;
loc__11233 = G__11245;
G__11231__11234 = G__11246;
continue;
}
} else
{}
break;
}
} else
{}
var G__11238__11239 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__11238__11239))
{var empl__11240 = cljs.core.first.call(null,G__11238__11239);
var G__11238__11241 = G__11238__11239;

while(true){
var el__11242 = pos.client.view.dropdown_row.call(null,empl__11240);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__11242);
jayq.core.bind.call(null,jayq.core.$.call(null,el__11242),"click",((function (empl__11240,G__11238__11241,el__11242){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__11240));
});})(empl__11240,G__11238__11241,el__11242))
);
var temp__3698__auto____11243 = cljs.core.next.call(null,G__11238__11241);

if(cljs.core.truth_(temp__3698__auto____11243))
{var G__11238__11244 = temp__3698__auto____11243;

{
var G__11247 = cljs.core.first.call(null,G__11238__11244);
var G__11248 = G__11238__11244;
empl__11240 = G__11247;
G__11238__11241 = G__11248;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____11249 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11250 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11251 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11252 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11253 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____11253,method_table__3162__auto____11249,prefer_table__3163__auto____11250,method_cache__3164__auto____11251,cached_hierarchy__3165__auto____11252));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__11254){
var map__11255__11256 = p__11254;
var map__11255__11257 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11255__11256))?cljs.core.apply.call(null,cljs.core.hash_map,map__11255__11256):map__11255__11256);
var id__11258 = cljs.core.get.call(null,map__11255__11257,"\uFDD0'id");

var customer__11259 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11258);
var el__11260 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__11260,"\uFDD0'name".call(null,customer__11259));
pos.client.animation.flash_input_border.call(null,el__11260);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__11259));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__11261 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__11261,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____11262 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____11262))
{var id__11263 = temp__3695__auto____11262;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____11264 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11265 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11266 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11267 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11268 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____11268,method_table__3162__auto____11264,prefer_table__3163__auto____11265,method_cache__3164__auto____11266,cached_hierarchy__3165__auto____11267));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__11269){
var map__11270__11271 = p__11269;
var map__11270__11272 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11270__11271))?cljs.core.apply.call(null,cljs.core.hash_map,map__11270__11271):map__11270__11271);
var id__11273 = cljs.core.get.call(null,map__11270__11272,"\uFDD0'id");

var item__11274 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11273);
var el__11275 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__11275,"\uFDD0'name".call(null,item__11274));
pos.client.animation.flash_input_border.call(null,el__11275);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__11276 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__11276,null);
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
var group__6197__auto____11277 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__11278){
var map__11279__11280 = p__11278;
var map__11279__11281 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11279__11280))?cljs.core.apply.call(null,cljs.core.hash_map,map__11279__11280):map__11279__11280);
var discount__11282 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'discount");
var qty__11283 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'qty");
var price__11284 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'price");
var size__11285 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'size");
var color__11286 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'color");
var name__11287 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'name");
var id__11288 = cljs.core.get.call(null,map__11279__11281,"\uFDD0'id");

var elem__6198__auto____11289 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__11288}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__11287])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__11288])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__11285])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__11286])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__11283})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__11284})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__11282})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__11284)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6198__auto____11289.setAttribute("crateGroup",group__6197__auto____11277);
return elem__6198__auto____11289;
});
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____11277;
pos.client.view.render_basket = (function (){var method_table__3162__auto____11290 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11291 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11292 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11293 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11294 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____11294,method_table__3162__auto____11290,prefer_table__3163__auto____11291,method_cache__3164__auto____11292,cached_hierarchy__3165__auto____11293));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__11295){
var map__11296__11297 = p__11295;
var map__11296__11298 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11296__11297))?cljs.core.apply.call(null,cljs.core.hash_map,map__11296__11297):map__11296__11297);
var item__11299 = cljs.core.get.call(null,map__11296__11298,"\uFDD0'item");
var item__11300 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__11299))?cljs.core.apply.call(null,cljs.core.hash_map,item__11299):item__11299);
var id__11301 = cljs.core.get.call(null,item__11300,"\uFDD0'id");

var $el__11302 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__11300));
var $qty__11303 = jayq.core.find.call(null,$el__11302,".qty > div > input");
var $price__11304 = jayq.core.find.call(null,$el__11302,".price > div > input");
var $discount__11305 = jayq.core.find.call(null,$el__11302,".discount > div > input");
var $close__11306 = jayq.core.find.call(null,$el__11302,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__11302);
pos.client.animation.slide_in_table_row.call(null,$el__11302);
jayq.core.bind.call(null,$qty__11303,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__11301,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__11303)}));
}));
jayq.core.bind.call(null,$price__11304,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__11301,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__11304)}));
}));
jayq.core.bind.call(null,$discount__11305,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__11301,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__11305)}));
}));
return jayq.core.bind.call(null,$close__11306,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__11301);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__11307){
var map__11308__11309 = p__11307;
var map__11308__11310 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11308__11309))?cljs.core.apply.call(null,cljs.core.hash_map,map__11308__11309):map__11308__11309);
var id__11311 = cljs.core.get.call(null,map__11308__11310,"\uFDD0'id");

var el__11312 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__11311));

return pos.client.animation.slide_out_table_row.call(null,el__11312);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__11313){
var map__11314__11315 = p__11313;
var map__11314__11316 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11314__11315))?cljs.core.apply.call(null,cljs.core.hash_map,map__11314__11315):map__11314__11315);
var item__11317 = cljs.core.get.call(null,map__11314__11316,"\uFDD0'item");
var item__11318 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__11317))?cljs.core.apply.call(null,cljs.core.hash_map,item__11317):item__11317);
var discount__11319 = cljs.core.get.call(null,item__11318,"\uFDD0'discount");
var qty__11320 = cljs.core.get.call(null,item__11318,"\uFDD0'qty");
var price__11321 = cljs.core.get.call(null,item__11318,"\uFDD0'price");
var id__11322 = cljs.core.get.call(null,item__11318,"\uFDD0'id");

var el__11323 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__11322));

pos.client.util.value.call(null,jayq.core.find.call(null,el__11323,"td.qty > div input"),qty__11320);
pos.client.util.value.call(null,jayq.core.find.call(null,el__11323,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__11321));
pos.client.util.value.call(null,jayq.core.find.call(null,el__11323,"td.discount > div input"),discount__11319.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__11323,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__11318)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__11324){
var map__11325__11326 = p__11324;
var map__11325__11327 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11325__11326))?cljs.core.apply.call(null,cljs.core.hash_map,map__11325__11326):map__11325__11326);
var discount__11328 = cljs.core.get.call(null,map__11325__11327,"\uFDD0'discount");
var vat__11329 = cljs.core.get.call(null,map__11325__11327,"\uFDD0'vat");
var tot__11330 = cljs.core.get.call(null,map__11325__11327,"\uFDD0'tot");

var $tot__11331 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__11332 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__11333 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__11331,pos.client.util.num_as_field_value.call(null,tot__11330));
jayq.core.inner.call(null,$vat__11332,pos.client.util.num_as_field_value.call(null,vat__11329));
return jayq.core.inner.call(null,$discount__11333,pos.client.util.num_as_field_value.call(null,discount__11328));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var G__11334__11335 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["proceed-tender","cancel-tender","confirm-tender","transaction-cash","transaction-credit","transaction-gift"]));

if(cljs.core.truth_(G__11334__11335))
{var name__11336 = cljs.core.first.call(null,G__11334__11335);
var G__11334__11337 = G__11334__11335;

while(true){
jayq.core.bind.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#",name__11336,"-button")),"click",((function (name__11336,G__11334__11337){
return (function (){
return lib.dispatch.fire.call(null,cljs.core.keyword.call(null,name__11336));
});})(name__11336,G__11334__11337))
);
var temp__3698__auto____11338 = cljs.core.next.call(null,G__11334__11337);

if(cljs.core.truth_(temp__3698__auto____11338))
{var G__11334__11339 = temp__3698__auto____11338;

{
var G__11340 = cljs.core.first.call(null,G__11334__11339);
var G__11341 = G__11334__11339;
name__11336 = G__11340;
G__11334__11337 = G__11341;
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
var $cash__11342 = jayq.core.$.call(null,"\uFDD0'#tender-cash");
var $credit__11343 = jayq.core.$.call(null,"\uFDD0'#tender-credit");
var $gift__11344 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

jayq.core.bind.call(null,$cash__11342,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'cash","\uFDD0'new-val":pos.client.util.value.call(null,$cash__11342)}));
}));
jayq.core.bind.call(null,$credit__11343,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'credit","\uFDD0'new-val":pos.client.util.value.call(null,$credit__11343)}));
}));
return jayq.core.bind.call(null,$gift__11344,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'gift","\uFDD0'new-val":pos.client.util.value.call(null,$gift__11344)}));
}));
});
pos.client.view.render_tender = (function (){var method_table__3162__auto____11345 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11346 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11347 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11348 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11349 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____11349,method_table__3162__auto____11345,prefer_table__3163__auto____11346,method_cache__3164__auto____11347,cached_hierarchy__3165__auto____11348));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__11351__11352 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__11351__11352))
{var id__11353 = cljs.core.first.call(null,G__11351__11352);
var G__11351__11354 = G__11351__11352;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__11353),null);
var temp__3698__auto____11355 = cljs.core.next.call(null,G__11351__11354);

if(cljs.core.truth_(temp__3698__auto____11355))
{var G__11351__11356 = temp__3698__auto____11355;

{
var G__11357 = cljs.core.first.call(null,G__11351__11356);
var G__11358 = G__11351__11356;
id__11353 = G__11357;
G__11351__11354 = G__11358;
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
var total__11359 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var paid__11361 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__11350_SHARP_){
var or__3548__auto____11360 = p1__11350_SHARP_;

if(cljs.core.truth_(or__3548__auto____11360))
{return or__3548__auto____11360;
} else
{return 0;
}
}),cljs.core.vals.call(null,tender)));
var change__11362 = (paid__11361 - total__11359);

pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-total"),pos.client.util.num_as_field_value.call(null,total__11359));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-cash"),pos.client.util.num_as_field_value.call(null,"\uFDD0'cash".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-card"),pos.client.util.num_as_field_value.call(null,"\uFDD0'card".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-gift"),pos.client.util.num_as_field_value.call(null,"\uFDD0'gift".call(null,tender)));
return pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-change"),pos.client.util.num_as_field_value.call(null,change__11362));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-change"]),(function (_,d){
return pos.client.view.render_tender.call(null,d);
}));
pos.client.view.focus_tender_field = (function (){var method_table__3162__auto____11363 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11364 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11365 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11366 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11367 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("focus-tender-field",cljs.core.identity,"\uFDD0'default",hierarchy__3166__auto____11367,method_table__3162__auto____11363,prefer_table__3163__auto____11364,method_cache__3164__auto____11365,cached_hierarchy__3165__auto____11366));
})();
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-cash",(function (_){
var $el__11368 = jayq.core.$.call(null,"\uFDD0'#tender-cash");

$el__11368.focus();
return $el__11368.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-credit",(function (_){
var $el__11369 = jayq.core.$.call(null,"\uFDD0'#tender-card");

$el__11369.focus();
return $el__11369.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-gift",(function (_){
var $el__11370 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

$el__11370.focus();
return $el__11370.select();
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'transaction-cash","\uFDD0'transaction-gift","\uFDD0'transaction-credit"]),(function (t,_){
return pos.client.view.focus_tender_field.call(null,t);
}));
pos.client.view.render = (function (){var method_table__3162__auto____11372 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11373 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11374 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11375 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11376 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____11376,method_table__3162__auto____11372,prefer_table__3163__auto____11373,method_cache__3164__auto____11374,cached_hierarchy__3165__auto____11375));
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
