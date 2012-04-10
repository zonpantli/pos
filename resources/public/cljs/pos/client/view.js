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
pos.client.view.render_location = (function render_location(p__14237){
var map__14238__14239 = p__14237;
var map__14238__14240 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14238__14239))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238__14239):map__14238__14239);
var id__14241 = cljs.core.get.call(null,map__14238__14240,"\uFDD0'id");

var temp__3695__auto____14242 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14241);

if(cljs.core.truth_(temp__3695__auto____14242))
{var location__14243 = temp__3695__auto____14242;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__14243));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__14244){
var map__14245__14246 = p__14244;
var map__14245__14247 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14245__14246))?cljs.core.apply.call(null,cljs.core.hash_map,map__14245__14246):map__14245__14246);
var id__14248 = cljs.core.get.call(null,map__14245__14247,"\uFDD0'id");

var temp__3695__auto____14249 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14248);

if(cljs.core.truth_(temp__3695__auto____14249))
{var employee__14250 = temp__3695__auto____14249;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__14250));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__14251 = pos.client.util.get_formatted_datetime.call(null);
var el__14252 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__14252,t__14251);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__14253_SHARP_){
return cljs.core.merge.call(null,p1__14253_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__14253_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__14254_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__14254_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__14255_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__14255_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__14256 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__14256,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__14256));
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
var group__6197__auto____14257 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__14258){
var map__14259__14260 = p__14258;
var map__14259__14261 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14259__14260))?cljs.core.apply.call(null,cljs.core.hash_map,map__14259__14260):map__14259__14260);
var name__14262 = cljs.core.get.call(null,map__14259__14261,"\uFDD0'name");
var id__14263 = cljs.core.get.call(null,map__14259__14261,"\uFDD0'id");

var elem__6198__auto____14264 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__14263}),name__14262])]));

elem__6198__auto____14264.setAttribute("crateGroup",group__6197__auto____14257);
return elem__6198__auto____14264;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6197__auto____14257;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__14265__14266 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__14265__14266))
{var loc__14267 = cljs.core.first.call(null,G__14265__14266);
var G__14265__14268 = G__14265__14266;

while(true){
var el__14269 = pos.client.view.dropdown_row.call(null,loc__14267);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__14269);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14269),"click",((function (loc__14267,G__14265__14268,el__14269){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__14267));
});})(loc__14267,G__14265__14268,el__14269))
);
var temp__3698__auto____14270 = cljs.core.next.call(null,G__14265__14268);

if(cljs.core.truth_(temp__3698__auto____14270))
{var G__14265__14271 = temp__3698__auto____14270;

{
var G__14279 = cljs.core.first.call(null,G__14265__14271);
var G__14280 = G__14265__14271;
loc__14267 = G__14279;
G__14265__14268 = G__14280;
continue;
}
} else
{}
break;
}
} else
{}
var G__14272__14273 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__14272__14273))
{var empl__14274 = cljs.core.first.call(null,G__14272__14273);
var G__14272__14275 = G__14272__14273;

while(true){
var el__14276 = pos.client.view.dropdown_row.call(null,empl__14274);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__14276);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14276),"click",((function (empl__14274,G__14272__14275,el__14276){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__14274));
});})(empl__14274,G__14272__14275,el__14276))
);
var temp__3698__auto____14277 = cljs.core.next.call(null,G__14272__14275);

if(cljs.core.truth_(temp__3698__auto____14277))
{var G__14272__14278 = temp__3698__auto____14277;

{
var G__14281 = cljs.core.first.call(null,G__14272__14278);
var G__14282 = G__14272__14278;
empl__14274 = G__14281;
G__14272__14275 = G__14282;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____14283 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14284 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14285 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14286 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14287 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14287,method_table__3162__auto____14283,prefer_table__3163__auto____14284,method_cache__3164__auto____14285,cached_hierarchy__3165__auto____14286));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__14288){
var map__14289__14290 = p__14288;
var map__14289__14291 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14289__14290))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289__14290):map__14289__14290);
var id__14292 = cljs.core.get.call(null,map__14289__14291,"\uFDD0'id");

var customer__14293 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14292);
var el__14294 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14294,"\uFDD0'name".call(null,customer__14293));
pos.client.animation.flash_input_border.call(null,el__14294);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__14293));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__14295 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14295,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____14296 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____14296))
{var id__14297 = temp__3695__auto____14296;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____14298 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14299 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14300 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14301 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14302 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14302,method_table__3162__auto____14298,prefer_table__3163__auto____14299,method_cache__3164__auto____14300,cached_hierarchy__3165__auto____14301));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__14303){
var map__14304__14305 = p__14303;
var map__14304__14306 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14304__14305))?cljs.core.apply.call(null,cljs.core.hash_map,map__14304__14305):map__14304__14305);
var id__14307 = cljs.core.get.call(null,map__14304__14306,"\uFDD0'id");

var item__14308 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14307);
var el__14309 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__14309,"\uFDD0'name".call(null,item__14308));
pos.client.animation.flash_input_border.call(null,el__14309);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__14310 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__14310,null);
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
var group__6197__auto____14311 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__14312){
var map__14313__14314 = p__14312;
var map__14313__14315 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14313__14314))?cljs.core.apply.call(null,cljs.core.hash_map,map__14313__14314):map__14313__14314);
var discount__14316 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'discount");
var qty__14317 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'qty");
var price__14318 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'price");
var size__14319 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'size");
var color__14320 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'color");
var name__14321 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'name");
var id__14322 = cljs.core.get.call(null,map__14313__14315,"\uFDD0'id");

var elem__6198__auto____14323 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14322}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__14321])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__14322])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__14319])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__14320])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__14317})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__14318})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__14316})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__14318)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6198__auto____14323.setAttribute("crateGroup",group__6197__auto____14311);
return elem__6198__auto____14323;
});
pos.client.view.basket_item.prototype._crateGroup = group__6197__auto____14311;
pos.client.view.render_basket = (function (){var method_table__3162__auto____14324 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14325 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14326 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14327 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14328 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____14328,method_table__3162__auto____14324,prefer_table__3163__auto____14325,method_cache__3164__auto____14326,cached_hierarchy__3165__auto____14327));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__14329){
var map__14330__14331 = p__14329;
var map__14330__14332 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14330__14331))?cljs.core.apply.call(null,cljs.core.hash_map,map__14330__14331):map__14330__14331);
var item__14333 = cljs.core.get.call(null,map__14330__14332,"\uFDD0'item");
var item__14334 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14333))?cljs.core.apply.call(null,cljs.core.hash_map,item__14333):item__14333);
var id__14335 = cljs.core.get.call(null,item__14334,"\uFDD0'id");

var $el__14336 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__14334));
var $qty__14337 = jayq.core.find.call(null,$el__14336,".qty > div > input");
var $price__14338 = jayq.core.find.call(null,$el__14336,".price > div > input");
var $discount__14339 = jayq.core.find.call(null,$el__14336,".discount > div > input");
var $close__14340 = jayq.core.find.call(null,$el__14336,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__14336);
pos.client.animation.slide_in_table_row.call(null,$el__14336);
jayq.core.bind.call(null,$qty__14337,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14335,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__14337)}));
}));
jayq.core.bind.call(null,$price__14338,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14335,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__14338)}));
}));
jayq.core.bind.call(null,$discount__14339,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14335,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__14339)}));
}));
return jayq.core.bind.call(null,$close__14340,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__14335);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__14341){
var map__14342__14343 = p__14341;
var map__14342__14344 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14342__14343))?cljs.core.apply.call(null,cljs.core.hash_map,map__14342__14343):map__14342__14343);
var id__14345 = cljs.core.get.call(null,map__14342__14344,"\uFDD0'id");

var el__14346 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14345));

return pos.client.animation.slide_out_table_row.call(null,el__14346);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__14347){
var map__14348__14349 = p__14347;
var map__14348__14350 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14348__14349))?cljs.core.apply.call(null,cljs.core.hash_map,map__14348__14349):map__14348__14349);
var item__14351 = cljs.core.get.call(null,map__14348__14350,"\uFDD0'item");
var item__14352 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14351))?cljs.core.apply.call(null,cljs.core.hash_map,item__14351):item__14351);
var discount__14353 = cljs.core.get.call(null,item__14352,"\uFDD0'discount");
var qty__14354 = cljs.core.get.call(null,item__14352,"\uFDD0'qty");
var price__14355 = cljs.core.get.call(null,item__14352,"\uFDD0'price");
var id__14356 = cljs.core.get.call(null,item__14352,"\uFDD0'id");

var el__14357 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14356));

pos.client.util.value.call(null,jayq.core.find.call(null,el__14357,"td.qty > div input"),qty__14354);
pos.client.util.value.call(null,jayq.core.find.call(null,el__14357,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__14355));
pos.client.util.value.call(null,jayq.core.find.call(null,el__14357,"td.discount > div input"),discount__14353.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__14357,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__14352)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__14358){
var map__14359__14360 = p__14358;
var map__14359__14361 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14359__14360))?cljs.core.apply.call(null,cljs.core.hash_map,map__14359__14360):map__14359__14360);
var discount__14362 = cljs.core.get.call(null,map__14359__14361,"\uFDD0'discount");
var vat__14363 = cljs.core.get.call(null,map__14359__14361,"\uFDD0'vat");
var tot__14364 = cljs.core.get.call(null,map__14359__14361,"\uFDD0'tot");

var $tot__14365 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__14366 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__14367 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__14365,pos.client.util.num_as_field_value.call(null,tot__14364));
jayq.core.inner.call(null,$vat__14366,pos.client.util.num_as_field_value.call(null,vat__14363));
return jayq.core.inner.call(null,$discount__14367,pos.client.util.num_as_field_value.call(null,discount__14362));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var G__14368__14369 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["proceed-tender","cancel-tender","confirm-tender","transaction-cash","transaction-credit","transaction-gift"]));

if(cljs.core.truth_(G__14368__14369))
{var name__14370 = cljs.core.first.call(null,G__14368__14369);
var G__14368__14371 = G__14368__14369;

while(true){
jayq.core.bind.call(null,jayq.core.$.call(null,cljs.core.str.call(null,"#",name__14370,"-button")),"click",((function (name__14370,G__14368__14371){
return (function (){
return lib.dispatch.fire.call(null,cljs.core.keyword.call(null,name__14370));
});})(name__14370,G__14368__14371))
);
var temp__3698__auto____14372 = cljs.core.next.call(null,G__14368__14371);

if(cljs.core.truth_(temp__3698__auto____14372))
{var G__14368__14373 = temp__3698__auto____14372;

{
var G__14374 = cljs.core.first.call(null,G__14368__14373);
var G__14375 = G__14368__14373;
name__14370 = G__14374;
G__14368__14371 = G__14375;
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
var $cash__14376 = jayq.core.$.call(null,"\uFDD0'#tender-cash");
var $credit__14377 = jayq.core.$.call(null,"\uFDD0'#tender-credit");
var $gift__14378 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

jayq.core.bind.call(null,$cash__14376,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'cash","\uFDD0'new-val":pos.client.util.value.call(null,$cash__14376)}));
}));
jayq.core.bind.call(null,$credit__14377,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'credit","\uFDD0'new-val":pos.client.util.value.call(null,$credit__14377)}));
}));
return jayq.core.bind.call(null,$gift__14378,"change",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'tender-update",cljs.core.ObjMap.fromObject(["\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'changed-attr":"\uFDD0'gift","\uFDD0'new-val":pos.client.util.value.call(null,$gift__14378)}));
}));
});
pos.client.view.render_tender = (function (){var method_table__3162__auto____14379 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14380 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14381 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14382 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14383 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-tender",cljs.core.empty_QMARK_,"\uFDD0'default",hierarchy__3166__auto____14383,method_table__3162__auto____14379,prefer_table__3163__auto____14380,method_cache__3164__auto____14381,cached_hierarchy__3165__auto____14382));
})();
cljs.core._add_method.call(null,pos.client.view.render_tender,true,(function (_){
var G__14385__14386 = cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'#tender-total","\uFDD0'#tender-cash","\uFDD0'#tender-card","\uFDD0'#tender-gift","\uFDD0'#tender-change"]));

if(cljs.core.truth_(G__14385__14386))
{var id__14387 = cljs.core.first.call(null,G__14385__14386);
var G__14385__14388 = G__14385__14386;

while(true){
pos.client.util.value.call(null,jayq.core.$.call(null,id__14387),null);
var temp__3698__auto____14389 = cljs.core.next.call(null,G__14385__14388);

if(cljs.core.truth_(temp__3698__auto____14389))
{var G__14385__14390 = temp__3698__auto____14389;

{
var G__14391 = cljs.core.first.call(null,G__14385__14390);
var G__14392 = G__14385__14390;
id__14387 = G__14391;
G__14385__14388 = G__14392;
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
var total__14393 = pos.client.util.basket_total.call(null,cljs.core.deref.call(null,pos.client.model.basket));
var paid__14395 = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__14384_SHARP_){
var or__3548__auto____14394 = p1__14384_SHARP_;

if(cljs.core.truth_(or__3548__auto____14394))
{return or__3548__auto____14394;
} else
{return 0;
}
}),cljs.core.vals.call(null,tender)));
var change__14396 = (paid__14395 - total__14393);

pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-total"),pos.client.util.num_as_field_value.call(null,total__14393));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-cash"),pos.client.util.num_as_field_value.call(null,"\uFDD0'cash".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-card"),pos.client.util.num_as_field_value.call(null,"\uFDD0'card".call(null,tender)));
pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-gift"),pos.client.util.num_as_field_value.call(null,"\uFDD0'gift".call(null,tender)));
return pos.client.util.value.call(null,jayq.core.$.call(null,"\uFDD0'#tender-change"),pos.client.util.num_as_field_value.call(null,change__14396));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'tender-change"]),(function (_,d){
return pos.client.view.render_tender.call(null,d);
}));
pos.client.view.focus_tender_field = (function (){var method_table__3162__auto____14397 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14398 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14399 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14400 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14401 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("focus-tender-field",cljs.core.identity,"\uFDD0'default",hierarchy__3166__auto____14401,method_table__3162__auto____14397,prefer_table__3163__auto____14398,method_cache__3164__auto____14399,cached_hierarchy__3165__auto____14400));
})();
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-cash",(function (_){
var $el__14402 = jayq.core.$.call(null,"\uFDD0'#tender-cash");

$el__14402.focus();
return $el__14402.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-credit",(function (_){
var $el__14403 = jayq.core.$.call(null,"\uFDD0'#tender-card");

$el__14403.focus();
return $el__14403.select();
}));
cljs.core._add_method.call(null,pos.client.view.focus_tender_field,"\uFDD0'transaction-gift",(function (_){
var $el__14404 = jayq.core.$.call(null,"\uFDD0'#tender-gift");

$el__14404.focus();
return $el__14404.select();
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'transaction-cash","\uFDD0'transaction-gift","\uFDD0'transaction-credit"]),(function (t,_){
return pos.client.view.focus_tender_field.call(null,t);
}));
pos.client.view.render = (function (){var method_table__3162__auto____14405 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14406 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14407 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14408 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14409 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____14409,method_table__3162__auto____14405,prefer_table__3163__auto____14406,method_cache__3164__auto____14407,cached_hierarchy__3165__auto____14408));
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
