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
pos.client.view.render_location = (function render_location(p__8189){
var map__8190__8191 = p__8189;
var map__8190__8192 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8190__8191))?cljs.core.apply.call(null,cljs.core.hash_map,map__8190__8191):map__8190__8191);
var id__8193 = cljs.core.get.call(null,map__8190__8192,"\uFDD0'id");

var temp__3695__auto____8194 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8193);

if(cljs.core.truth_(temp__3695__auto____8194))
{var location__8195 = temp__3695__auto____8194;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__8195));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__8196){
var map__8197__8198 = p__8196;
var map__8197__8199 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8197__8198))?cljs.core.apply.call(null,cljs.core.hash_map,map__8197__8198):map__8197__8198);
var id__8200 = cljs.core.get.call(null,map__8197__8199,"\uFDD0'id");

var temp__3695__auto____8201 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8200);

if(cljs.core.truth_(temp__3695__auto____8201))
{var employee__8202 = temp__3695__auto____8201;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__8202));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__8203 = pos.client.util.get_formatted_datetime.call(null);
var el__8204 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__8204,t__8203);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__8205_SHARP_){
return cljs.core.merge.call(null,p1__8205_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__8205_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__8206_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__8206_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__8207_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__8207_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__8208 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__8208,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__8208));
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
var group__6197__auto____8209 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__8210){
var map__8211__8212 = p__8210;
var map__8211__8213 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8211__8212))?cljs.core.apply.call(null,cljs.core.hash_map,map__8211__8212):map__8211__8212);
var name__8214 = cljs.core.get.call(null,map__8211__8213,"\uFDD0'name");
var id__8215 = cljs.core.get.call(null,map__8211__8213,"\uFDD0'id");

var elem__6198__auto____8216 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__8215}),name__8214])]));

elem__6198__auto____8216.setAttribute("crateGroup",group__6197__auto____8209);
return elem__6198__auto____8216;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____8209;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__8217__8218 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__8217__8218))
{var loc__8219 = cljs.core.first.call(null,G__8217__8218);
var G__8217__8220 = G__8217__8218;

while(true){
var el__8221 = pos.client.view.dropdown_row.call(null,loc__8219);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__8221);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8221),"click",((function (loc__8219,G__8217__8220,el__8221){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__8219));
});})(loc__8219,G__8217__8220,el__8221))
);
var temp__3698__auto____8222 = cljs.core.next.call(null,G__8217__8220);

if(cljs.core.truth_(temp__3698__auto____8222))
{var G__8217__8223 = temp__3698__auto____8222;

{
var G__8231 = cljs.core.first.call(null,G__8217__8223);
var G__8232 = G__8217__8223;
loc__8219 = G__8231;
G__8217__8220 = G__8232;
continue;
}
} else
{}
break;
}
} else
{}
var G__8224__8225 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__8224__8225))
{var empl__8226 = cljs.core.first.call(null,G__8224__8225);
var G__8224__8227 = G__8224__8225;

while(true){
var el__8228 = pos.client.view.dropdown_row.call(null,empl__8226);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__8228);
jayq.core.bind.call(null,jayq.core.$.call(null,el__8228),"click",((function (empl__8226,G__8224__8227,el__8228){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__8226));
});})(empl__8226,G__8224__8227,el__8228))
);
var temp__3698__auto____8229 = cljs.core.next.call(null,G__8224__8227);

if(cljs.core.truth_(temp__3698__auto____8229))
{var G__8224__8230 = temp__3698__auto____8229;

{
var G__8233 = cljs.core.first.call(null,G__8224__8230);
var G__8234 = G__8224__8230;
empl__8226 = G__8233;
G__8224__8227 = G__8234;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____8235 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8236 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8237 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8238 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8239 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8239,method_table__3162__auto____8235,prefer_table__3163__auto____8236,method_cache__3164__auto____8237,cached_hierarchy__3165__auto____8238));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__8240){
var map__8241__8242 = p__8240;
var map__8241__8243 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8241__8242))?cljs.core.apply.call(null,cljs.core.hash_map,map__8241__8242):map__8241__8242);
var id__8244 = cljs.core.get.call(null,map__8241__8243,"\uFDD0'id");

var customer__8245 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8244);
var el__8246 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8246,"\uFDD0'name".call(null,customer__8245));
pos.client.animation.flash_input_border.call(null,el__8246);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__8245));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__8247 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__8247,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____8248 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____8248))
{var id__8249 = temp__3695__auto____8248;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____8250 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8251 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8252 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8253 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8254 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____8254,method_table__3162__auto____8250,prefer_table__3163__auto____8251,method_cache__3164__auto____8252,cached_hierarchy__3165__auto____8253));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__8255){
var map__8256__8257 = p__8255;
var map__8256__8258 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8256__8257))?cljs.core.apply.call(null,cljs.core.hash_map,map__8256__8257):map__8256__8257);
var id__8259 = cljs.core.get.call(null,map__8256__8258,"\uFDD0'id");

var item__8260 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__8259);
var el__8261 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__8261,"\uFDD0'name".call(null,item__8260));
pos.client.animation.flash_input_border.call(null,el__8261);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__8262 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__8262,null);
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
var group__6197__auto____8263 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__8264){
var map__8265__8266 = p__8264;
var map__8265__8267 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8265__8266))?cljs.core.apply.call(null,cljs.core.hash_map,map__8265__8266):map__8265__8266);
var discount__8268 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'discount");
var qty__8269 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'qty");
var price__8270 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'price");
var size__8271 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'size");
var color__8272 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'color");
var name__8273 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'name");
var id__8274 = cljs.core.get.call(null,map__8265__8267,"\uFDD0'id");

var elem__6198__auto____8275 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__8274}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__8273])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__8274])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__8271])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__8272])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__8269})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__8270})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__8268})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__8270)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6198__auto____8275.setAttribute("crateGroup",group__6197__auto____8263);
return elem__6198__auto____8275;
});
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____8263;
pos.client.view.render_basket = (function (){var method_table__3162__auto____8276 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8277 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8278 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8279 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8280 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____8280,method_table__3162__auto____8276,prefer_table__3163__auto____8277,method_cache__3164__auto____8278,cached_hierarchy__3165__auto____8279));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__8281){
var map__8282__8283 = p__8281;
var map__8282__8284 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8282__8283))?cljs.core.apply.call(null,cljs.core.hash_map,map__8282__8283):map__8282__8283);
var item__8285 = cljs.core.get.call(null,map__8282__8284,"\uFDD0'item");
var item__8286 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8285))?cljs.core.apply.call(null,cljs.core.hash_map,item__8285):item__8285);
var id__8287 = cljs.core.get.call(null,item__8286,"\uFDD0'id");

var $el__8288 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__8286));
var $qty__8289 = jayq.core.find.call(null,$el__8288,".qty > div > input");
var $price__8290 = jayq.core.find.call(null,$el__8288,".price > div > input");
var $discount__8291 = jayq.core.find.call(null,$el__8288,".discount > div > input");
var $close__8292 = jayq.core.find.call(null,$el__8288,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__8288);
pos.client.animation.slide_in_table_row.call(null,$el__8288);
jayq.core.bind.call(null,$qty__8289,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8287,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__8289)}));
}));
jayq.core.bind.call(null,$price__8290,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8287,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__8290)}));
}));
jayq.core.bind.call(null,$discount__8291,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__8287,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__8291)}));
}));
return jayq.core.bind.call(null,$close__8292,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__8287);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__8293){
var map__8294__8295 = p__8293;
var map__8294__8296 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8294__8295))?cljs.core.apply.call(null,cljs.core.hash_map,map__8294__8295):map__8294__8295);
var id__8297 = cljs.core.get.call(null,map__8294__8296,"\uFDD0'id");

var el__8298 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8297));

return pos.client.animation.slide_out_table_row.call(null,el__8298);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__8299){
var map__8300__8301 = p__8299;
var map__8300__8302 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8300__8301))?cljs.core.apply.call(null,cljs.core.hash_map,map__8300__8301):map__8300__8301);
var item__8303 = cljs.core.get.call(null,map__8300__8302,"\uFDD0'item");
var item__8304 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__8303))?cljs.core.apply.call(null,cljs.core.hash_map,item__8303):item__8303);
var discount__8305 = cljs.core.get.call(null,item__8304,"\uFDD0'discount");
var qty__8306 = cljs.core.get.call(null,item__8304,"\uFDD0'qty");
var price__8307 = cljs.core.get.call(null,item__8304,"\uFDD0'price");
var id__8308 = cljs.core.get.call(null,item__8304,"\uFDD0'id");

var el__8309 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__8308));

pos.client.util.value.call(null,jayq.core.find.call(null,el__8309,"td.qty > div input"),qty__8306);
pos.client.util.value.call(null,jayq.core.find.call(null,el__8309,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__8307));
pos.client.util.value.call(null,jayq.core.find.call(null,el__8309,"td.discount > div input"),discount__8305.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__8309,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__8304)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__8310){
var map__8311__8312 = p__8310;
var map__8311__8313 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8311__8312))?cljs.core.apply.call(null,cljs.core.hash_map,map__8311__8312):map__8311__8312);
var discount__8314 = cljs.core.get.call(null,map__8311__8313,"\uFDD0'discount");
var vat__8315 = cljs.core.get.call(null,map__8311__8313,"\uFDD0'vat");
var tot__8316 = cljs.core.get.call(null,map__8311__8313,"\uFDD0'tot");

var $tot__8317 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__8318 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__8319 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__8317,pos.client.util.num_as_field_value.call(null,tot__8316));
jayq.core.inner.call(null,$vat__8318,pos.client.util.num_as_field_value.call(null,vat__8315));
return jayq.core.inner.call(null,$discount__8319,pos.client.util.num_as_field_value.call(null,discount__8314));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var G__8320__8321 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["proceed-tender","cancel-tender","confirm-tender","transaction-cash","transaction-credit","transaction-gift"]));

if(cljs.core.truth_(G__8320__8321))
{var name__8322 = cljs.core.first.call(null,G__8320__8321);
var G__8320__8323 = G__8320__8321;

while(true){
jayq.core.bind.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#",name__8322,"-button")),"click",((function (name__8322,G__8320__8323){
return (function (){
return lib.dispatch.fire.call(null,cljs.core.keyword.call(null,name__8322));
});})(name__8322,G__8320__8323))
);
var temp__3698__auto____8324 = cljs.core.next.call(null,G__8320__8323);

if(cljs.core.truth_(temp__3698__auto____8324))
{var G__8320__8325 = temp__3698__auto____8324;

{
var G__8326 = cljs.core.first.call(null,G__8320__8325);
var G__8327 = G__8320__8325;
name__8322 = G__8326;
G__8320__8323 = G__8327;
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
var $cash__8328 = jayq.core.$.call(null,"\uFDD0'#tender-cash");
var $credit__8329 = jayq.core.$.call(null,"\uFDD0'#tender-credit");
var $gift__8330 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

jayq.core.bind.call(null,$cash__8328,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'cash","\uFDD0'new-val":pos.client.util.value.call(null,$cash__8328)}));
}));
jayq.core.bind.call(null,$credit__8329,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'credit","\uFDD0'new-val":pos.client.util.value.call(null,$credit__8329)}));
}));
return jayq.core.bind.call(null,$gift__8330,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'gift","\uFDD0'new-val":pos.client.util.value.call(null,$gift__8330)}));
}));
});
pos.client.view.render_tender = (function (){var method_table__3162__auto____8331 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8332 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8333 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8334 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8335 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____8335,method_table__3162__auto____8331,prefer_table__3163__auto____8332,method_cache__3164__auto____8333,cached_hierarchy__3165__auto____8334));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__8337__8338 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__8337__8338))
{var id__8339 = cljs.core.first.call(null,G__8337__8338);
var G__8337__8340 = G__8337__8338;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__8339),null);
var temp__3698__auto____8341 = cljs.core.next.call(null,G__8337__8340);

if(cljs.core.truth_(temp__3698__auto____8341))
{var G__8337__8342 = temp__3698__auto____8341;

{
var G__8343 = cljs.core.first.call(null,G__8337__8342);
var G__8344 = G__8337__8342;
id__8339 = G__8343;
G__8337__8340 = G__8344;
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
var total__8345 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var paid__8347 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__8336_SHARP_){
var or__3548__auto____8346 = p1__8336_SHARP_;

if(cljs.core.truth_(or__3548__auto____8346))
{return or__3548__auto____8346;
} else
{return 0;
}
}),cljs.core.vals.call(null,tender)));
var change__8348 = (paid__8347 - total__8345);

pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-total"),pos.client.util.num_as_field_value.call(null,total__8345));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-cash"),pos.client.util.num_as_field_value.call(null,"\uFDD0'cash".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-card"),pos.client.util.num_as_field_value.call(null,"\uFDD0'card".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-gift"),pos.client.util.num_as_field_value.call(null,"\uFDD0'gift".call(null,tender)));
return pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-change"),pos.client.util.num_as_field_value.call(null,change__8348));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-change"]),(function (_,d){
return pos.client.view.render_tender.call(null,d);
}));
pos.client.view.focus_tender_field = (function (){var method_table__3162__auto____8349 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8350 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8351 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8352 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8353 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("focus-tender-field",cljs.core.identity,"\uFDD0'default",hierarchy__3166__auto____8353,method_table__3162__auto____8349,prefer_table__3163__auto____8350,method_cache__3164__auto____8351,cached_hierarchy__3165__auto____8352));
})();
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-cash",(function (_){
var $el__8354 = jayq.core.$.call(null,"\uFDD0'#tender-cash");

$el__8354.focus();
return $el__8354.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-credit",(function (_){
var $el__8355 = jayq.core.$.call(null,"\uFDD0'#tender-card");

$el__8355.focus();
return $el__8355.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-gift",(function (_){
var $el__8356 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

$el__8356.focus();
return $el__8356.select();
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'transaction-cash","\uFDD0'transaction-gift","\uFDD0'transaction-credit"]),(function (t,_){
return pos.client.view.focus_tender_field.call(null,t);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'confirm-tender"]),(function() { 
var G__8358__delegate = function (_){
lib.dispatch.fire.call(null,"\uFDD0'cancel-tender");
return jayq.core.$.call(null,"\uFDD0'#tender-success").modal();
};
var G__8358 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8358__delegate.call(this, _);
};
G__8358.cljs$lang$maxFixedArity = 0;
G__8358.cljs$lang$applyTo = (function (arglist__8359){
var _ = cljs.core.seq( arglist__8359 );;
return G__8358__delegate.call(this, _);
});
return G__8358;
})()
);
pos.client.view.render = (function (){var method_table__3162__auto____8360 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____8361 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____8362 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____8363 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____8364 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____8364,method_table__3162__auto____8360,prefer_table__3163__auto____8361,method_cache__3164__auto____8362,cached_hierarchy__3165__auto____8363));
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
