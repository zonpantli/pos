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
pos.client.view.render_location = (function render_location(p__8226){
var map__8227__8228 = p__8226;
var map__8227__8229 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8227__8228))?cljs.core.apply.call(null,cljs.core.hash_map,map__8227__8228):map__8227__8228);
var id__8230 = cljs.core.get.call(null,map__8227__8229,"\uFDD0'id");

var temp__3695__auto____8231 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8230);

if(cljs.core.truth_(temp__3695__auto____8231))
{var location__8232 = temp__3695__auto____8231;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__8232));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__8233){
var map__8234__8235 = p__8233;
var map__8234__8236 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8234__8235))?cljs.core.apply.call(null,cljs.core.hash_map,map__8234__8235):map__8234__8235);
var id__8237 = cljs.core.get.call(null,map__8234__8236,"\uFDD0'id");

var temp__3695__auto____8238 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8237);

if(cljs.core.truth_(temp__3695__auto____8238))
{var employee__8239 = temp__3695__auto____8238;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__8239));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__8240 = pos.client.util.get_formatted_datetime.call(null);
var el__8241 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__8241,t__8240);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__8242_SHARP_){
return cljs.core.merge.call(null,p1__8242_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__8242_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__8243_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__8243_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__8244_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__8244_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__8245 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__8245,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__8245));
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
var group__6106__auto____8246 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__8247){
var map__8248__8249 = p__8247;
var map__8248__8250 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8248__8249))?cljs.core.apply.call(null,cljs.core.hash_map,map__8248__8249):map__8248__8249);
var name__8251 = cljs.core.get.call(null,map__8248__8250,"\uFDD0'name");
var id__8252 = cljs.core.get.call(null,map__8248__8250,"\uFDD0'id");

var elem__6107__auto____8253 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__8252}),name__8251])]));

elem__6107__auto____8253.setAttribute("crateGroup",group__6106__auto____8246);
return elem__6107__auto____8253;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6106__auto____8246;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__8254__8255 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__8254__8255))
{var loc__8256 = cljs.core.first.call(null,G__8254__8255);
var G__8254__8257 = G__8254__8255;

while(true){
var el__8258 = pos.client.view.dropdown_row.call(null,loc__8256);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__8258);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8258),"click",((function (loc__8256,G__8254__8257,el__8258){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__8256));
});})(loc__8256,G__8254__8257,el__8258))
);
var temp__3698__auto____8259 = cljs.core.next.call(null,G__8254__8257);

if(cljs.core.truth_(temp__3698__auto____8259))
{var G__8254__8260 = temp__3698__auto____8259;

{
var G__8268 = cljs.core.first.call(null,G__8254__8260);
var G__8269 = G__8254__8260;
loc__8256 = G__8268;
G__8254__8257 = G__8269;
continue;
}
} else
{}
break;
}
} else
{}
var G__8261__8262 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__8261__8262))
{var empl__8263 = cljs.core.first.call(null,G__8261__8262);
var G__8261__8264 = G__8261__8262;

while(true){
var el__8265 = pos.client.view.dropdown_row.call(null,empl__8263);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__8265);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8265),"click",((function (empl__8263,G__8261__8264,el__8265){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__8263));
});})(empl__8263,G__8261__8264,el__8265))
);
var temp__3698__auto____8266 = cljs.core.next.call(null,G__8261__8264);

if(cljs.core.truth_(temp__3698__auto____8266))
{var G__8261__8267 = temp__3698__auto____8266;

{
var G__8270 = cljs.core.first.call(null,G__8261__8267);
var G__8271 = G__8261__8267;
empl__8263 = G__8270;
G__8261__8264 = G__8271;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____8272 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8273 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8274 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8275 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8276 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8276,method_table__3162__auto____8272,prefer_table__3163__auto____8273,method_cache__3164__auto____8274,cached_hierarchy__3165__auto____8275));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__8277){
var map__8278__8279 = p__8277;
var map__8278__8280 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8278__8279))?cljs.core.apply.call(null,cljs.core.hash_map,map__8278__8279):map__8278__8279);
var id__8281 = cljs.core.get.call(null,map__8278__8280,"\uFDD0'id");

var customer__8282 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8281);
var el__8283 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8283,"\uFDD0'name".call(null,customer__8282));
pos.client.animation.flash_input_border.call(null,el__8283);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__8282));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__8284 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8284,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____8285 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____8285))
{var id__8286 = temp__3695__auto____8285;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____8287 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8288 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8289 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8290 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8291 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8291,method_table__3162__auto____8287,prefer_table__3163__auto____8288,method_cache__3164__auto____8289,cached_hierarchy__3165__auto____8290));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__8292){
var map__8293__8294 = p__8292;
var map__8293__8295 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8293__8294))?cljs.core.apply.call(null,cljs.core.hash_map,map__8293__8294):map__8293__8294);
var id__8296 = cljs.core.get.call(null,map__8293__8295,"\uFDD0'id");

var item__8297 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8296);
var el__8298 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__8298,"\uFDD0'name".call(null,item__8297));
pos.client.animation.flash_input_border.call(null,el__8298);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__8299 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__8299,null);
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
var group__6106__auto____8300 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__8301){
var map__8302__8303 = p__8301;
var map__8302__8304 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8302__8303))?cljs.core.apply.call(null,cljs.core.hash_map,map__8302__8303):map__8302__8303);
var discount__8305 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'discount");
var qty__8306 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'qty");
var price__8307 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'price");
var size__8308 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'size");
var color__8309 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'color");
var name__8310 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'name");
var id__8311 = cljs.core.get.call(null,map__8302__8304,"\uFDD0'id");

var elem__6107__auto____8312 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__8311}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__8310])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__8311])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__8308])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__8309])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__8306})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__8307})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__8305})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__8307)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6107__auto____8312.setAttribute("crateGroup",group__6106__auto____8300);
return elem__6107__auto____8312;
});
pos.client.view.basket_item.prototype._crateGroup = group__6106__auto____8300;
pos.client.view.render_basket = (function (){var method_table__3162__auto____8313 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8314 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8315 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8316 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8317 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____8317,method_table__3162__auto____8313,prefer_table__3163__auto____8314,method_cache__3164__auto____8315,cached_hierarchy__3165__auto____8316));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__8318){
var map__8319__8320 = p__8318;
var map__8319__8321 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8319__8320))?cljs.core.apply.call(null,cljs.core.hash_map,map__8319__8320):map__8319__8320);
var item__8322 = cljs.core.get.call(null,map__8319__8321,"\uFDD0'item");
var item__8323 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8322))?cljs.core.apply.call(null,cljs.core.hash_map,item__8322):item__8322);
var id__8324 = cljs.core.get.call(null,item__8323,"\uFDD0'id");

var $el__8325 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__8323));
var $qty__8326 = jayq.core.find.call(null,$el__8325,".qty > div > input");
var $price__8327 = jayq.core.find.call(null,$el__8325,".price > div > input");
var $discount__8328 = jayq.core.find.call(null,$el__8325,".discount > div > input");
var $close__8329 = jayq.core.find.call(null,$el__8325,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__8325);
pos.client.animation.slide_in_table_row.call(null,$el__8325);
jayq.core.bind.call(null,$qty__8326,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8324,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__8326)}));
}));
jayq.core.bind.call(null,$price__8327,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8324,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__8327)}));
}));
jayq.core.bind.call(null,$discount__8328,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8324,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__8328)}));
}));
return jayq.core.bind.call(null,$close__8329,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__8324);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__8330){
var map__8331__8332 = p__8330;
var map__8331__8333 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8331__8332))?cljs.core.apply.call(null,cljs.core.hash_map,map__8331__8332):map__8331__8332);
var id__8334 = cljs.core.get.call(null,map__8331__8333,"\uFDD0'id");

var el__8335 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8334));

return pos.client.animation.slide_out_table_row.call(null,el__8335);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__8336){
var map__8337__8338 = p__8336;
var map__8337__8339 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8337__8338))?cljs.core.apply.call(null,cljs.core.hash_map,map__8337__8338):map__8337__8338);
var item__8340 = cljs.core.get.call(null,map__8337__8339,"\uFDD0'item");
var item__8341 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8340))?cljs.core.apply.call(null,cljs.core.hash_map,item__8340):item__8340);
var discount__8342 = cljs.core.get.call(null,item__8341,"\uFDD0'discount");
var qty__8343 = cljs.core.get.call(null,item__8341,"\uFDD0'qty");
var price__8344 = cljs.core.get.call(null,item__8341,"\uFDD0'price");
var id__8345 = cljs.core.get.call(null,item__8341,"\uFDD0'id");

var el__8346 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8345));

pos.client.util.value.call(null,jayq.core.find.call(null,el__8346,"td.qty > div input"),qty__8343);
pos.client.util.value.call(null,jayq.core.find.call(null,el__8346,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__8344));
pos.client.util.value.call(null,jayq.core.find.call(null,el__8346,"td.discount > div input"),discount__8342.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__8346,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__8341)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__8347){
var map__8348__8349 = p__8347;
var map__8348__8350 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8348__8349))?cljs.core.apply.call(null,cljs.core.hash_map,map__8348__8349):map__8348__8349);
var discount__8351 = cljs.core.get.call(null,map__8348__8350,"\uFDD0'discount");
var vat__8352 = cljs.core.get.call(null,map__8348__8350,"\uFDD0'vat");
var tot__8353 = cljs.core.get.call(null,map__8348__8350,"\uFDD0'tot");

var $tot__8354 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__8355 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__8356 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__8354,pos.client.util.num_as_field_value.call(null,tot__8353));
jayq.core.inner.call(null,$vat__8355,pos.client.util.num_as_field_value.call(null,vat__8352));
return jayq.core.inner.call(null,$discount__8356,pos.client.util.num_as_field_value.call(null,discount__8351));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_proceed_button = (function bind_proceed_button(){
var $el__8357 = jayq.core.$.call(null,"\uFDD0'#proceed-button");

return jayq.core.bind.call(null,$el__8357,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'proceed");
}));
});
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.util.start_timer.call(null,pos.client.view.render_time);
pos.client.view.draw_pie.call(null);
pos.client.view.bind_proceed_button.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
