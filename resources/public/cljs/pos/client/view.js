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
pos.client.view.render_location = (function render_location(p__11350){
var map__11351__11352 = p__11350;
var map__11351__11353 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11351__11352))?cljs.core.apply.call(null,cljs.core.hash_map,map__11351__11352):map__11351__11352);
var id__11354 = cljs.core.get.call(null,map__11351__11353,"\uFDD0'id");

var temp__3695__auto____11355 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11354);

if(cljs.core.truth_(temp__3695__auto____11355))
{var location__11356 = temp__3695__auto____11355;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__11356));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__11357){
var map__11358__11359 = p__11357;
var map__11358__11360 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11358__11359))?cljs.core.apply.call(null,cljs.core.hash_map,map__11358__11359):map__11358__11359);
var id__11361 = cljs.core.get.call(null,map__11358__11360,"\uFDD0'id");

var temp__3695__auto____11362 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11361);

if(cljs.core.truth_(temp__3695__auto____11362))
{var employee__11363 = temp__3695__auto____11362;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__11363));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__11364 = pos.client.util.get_formatted_datetime.call(null);
var el__11365 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__11365,t__11364);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__11366_SHARP_){
return cljs.core.merge.call(null,p1__11366_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__11366_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__11367_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__11367_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__11368_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__11368_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__11369 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__11369,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__11369));
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
var group__6008__auto____11370 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__11371){
var map__11372__11373 = p__11371;
var map__11372__11374 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11372__11373))?cljs.core.apply.call(null,cljs.core.hash_map,map__11372__11373):map__11372__11373);
var name__11375 = cljs.core.get.call(null,map__11372__11374,"\uFDD0'name");
var id__11376 = cljs.core.get.call(null,map__11372__11374,"\uFDD0'id");

var elem__6009__auto____11377 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__11376}),name__11375])]));

elem__6009__auto____11377.setAttribute("crateGroup",group__6008__auto____11370);
return elem__6009__auto____11377;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____11370;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__11378__11379 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__11378__11379))
{var loc__11380 = cljs.core.first.call(null,G__11378__11379);
var G__11378__11381 = G__11378__11379;

while(true){
var el__11382 = pos.client.view.dropdown_row.call(null,loc__11380);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__11382);
jayq.core.bind.call(null,jayq.core.$.call(null,el__11382),"click",((function (loc__11380,G__11378__11381,el__11382){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__11380));
});})(loc__11380,G__11378__11381,el__11382))
);
var temp__3698__auto____11383 = cljs.core.next.call(null,G__11378__11381);

if(cljs.core.truth_(temp__3698__auto____11383))
{var G__11378__11384 = temp__3698__auto____11383;

{
var G__11392 = cljs.core.first.call(null,G__11378__11384);
var G__11393 = G__11378__11384;
loc__11380 = G__11392;
G__11378__11381 = G__11393;
continue;
}
} else
{}
break;
}
} else
{}
var G__11385__11386 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__11385__11386))
{var empl__11387 = cljs.core.first.call(null,G__11385__11386);
var G__11385__11388 = G__11385__11386;

while(true){
var el__11389 = pos.client.view.dropdown_row.call(null,empl__11387);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__11389);
jayq.core.bind.call(null,jayq.core.$.call(null,el__11389),"click",((function (empl__11387,G__11385__11388,el__11389){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__11387));
});})(empl__11387,G__11385__11388,el__11389))
);
var temp__3698__auto____11390 = cljs.core.next.call(null,G__11385__11388);

if(cljs.core.truth_(temp__3698__auto____11390))
{var G__11385__11391 = temp__3698__auto____11390;

{
var G__11394 = cljs.core.first.call(null,G__11385__11391);
var G__11395 = G__11385__11391;
empl__11387 = G__11394;
G__11385__11388 = G__11395;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____11396 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11397 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11398 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11399 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11400 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____11400,method_table__3162__auto____11396,prefer_table__3163__auto____11397,method_cache__3164__auto____11398,cached_hierarchy__3165__auto____11399));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__11401){
var map__11402__11403 = p__11401;
var map__11402__11404 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11402__11403))?cljs.core.apply.call(null,cljs.core.hash_map,map__11402__11403):map__11402__11403);
var id__11405 = cljs.core.get.call(null,map__11402__11404,"\uFDD0'id");

var customer__11406 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11405);
var el__11407 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__11407,"\uFDD0'name".call(null,customer__11406));
pos.client.animation.flash_input_border.call(null,el__11407);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__11406));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__11408 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__11408,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____11409 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____11409))
{var id__11410 = temp__3695__auto____11409;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____11411 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11412 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11413 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11414 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11415 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____11415,method_table__3162__auto____11411,prefer_table__3163__auto____11412,method_cache__3164__auto____11413,cached_hierarchy__3165__auto____11414));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__11416){
var map__11417__11418 = p__11416;
var map__11417__11419 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11417__11418))?cljs.core.apply.call(null,cljs.core.hash_map,map__11417__11418):map__11417__11418);
var id__11420 = cljs.core.get.call(null,map__11417__11419,"\uFDD0'id");

var item__11421 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__11420);
var el__11422 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__11422,"\uFDD0'name".call(null,item__11421));
pos.client.animation.flash_input_border.call(null,el__11422);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__11423 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__11423,null);
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
var group__6008__auto____11424 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__11425){
var map__11426__11427 = p__11425;
var map__11426__11428 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11426__11427))?cljs.core.apply.call(null,cljs.core.hash_map,map__11426__11427):map__11426__11427);
var price__11429 = cljs.core.get.call(null,map__11426__11428,"\uFDD0'price");
var size__11430 = cljs.core.get.call(null,map__11426__11428,"\uFDD0'size");
var color__11431 = cljs.core.get.call(null,map__11426__11428,"\uFDD0'color");
var name__11432 = cljs.core.get.call(null,map__11426__11428,"\uFDD0'name");
var id__11433 = cljs.core.get.call(null,map__11426__11428,"\uFDD0'id");

var elem__6009__auto____11434 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__11433}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",name__11432]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",id__11433]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",size__11430]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",color__11431]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":1})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__11429})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":0})]),"%"]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.str.call(null,price__11429)]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])]));

elem__6009__auto____11434.setAttribute("crateGroup",group__6008__auto____11424);
return elem__6009__auto____11434;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____11424;
pos.client.view.render_basket = (function (){var method_table__3162__auto____11435 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____11436 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____11437 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____11438 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____11439 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____11439,method_table__3162__auto____11435,prefer_table__3163__auto____11436,method_cache__3164__auto____11437,cached_hierarchy__3165__auto____11438));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add",(function (p__11440){
var map__11441__11442 = p__11440;
var map__11441__11443 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11441__11442))?cljs.core.apply.call(null,cljs.core.hash_map,map__11441__11442):map__11441__11442);
var item__11444 = cljs.core.get.call(null,map__11441__11443,"\uFDD0'item");

var el__11445 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__11444));

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),el__11445);
return jayq.core.bind.call(null,jayq.core.find.call(null,el__11445,".close-container > a"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove","\uFDD0'id".call(null,item__11444));
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove",(function (p__11446){
var map__11447__11448 = p__11446;
var map__11447__11449 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11447__11448))?cljs.core.apply.call(null,cljs.core.hash_map,map__11447__11448):map__11447__11448);
var id__11450 = cljs.core.get.call(null,map__11447__11449,"\uFDD0'id");

var el__11451 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__11450));

return jayq.core.remove.call(null,el__11451);
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
