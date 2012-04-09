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
pos.client.view.render_location = (function render_location(p__9217){
var map__9218__9219 = p__9217;
var map__9218__9220 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9218__9219))?cljs.core.apply.call(null,cljs.core.hash_map,map__9218__9219):map__9218__9219);
var id__9221 = cljs.core.get.call(null,map__9218__9220,"\uFDD0'id");

var temp__3695__auto____9222 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9221);

if(cljs.core.truth_(temp__3695__auto____9222))
{var location__9223 = temp__3695__auto____9222;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__9223));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__9224){
var map__9225__9226 = p__9224;
var map__9225__9227 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9225__9226))?cljs.core.apply.call(null,cljs.core.hash_map,map__9225__9226):map__9225__9226);
var id__9228 = cljs.core.get.call(null,map__9225__9227,"\uFDD0'id");

var temp__3695__auto____9229 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9228);

if(cljs.core.truth_(temp__3695__auto____9229))
{var employee__9230 = temp__3695__auto____9229;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__9230));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__9231 = pos.client.util.get_formatted_datetime.call(null);
var el__9232 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__9232,t__9231);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__9233_SHARP_){
return cljs.core.merge.call(null,p1__9233_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__9233_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__9234_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__9234_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__9235_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__9235_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__9236 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__9236,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__9236));
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
var group__6008__auto____9237 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__9238){
var map__9239__9240 = p__9238;
var map__9239__9241 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9239__9240))?cljs.core.apply.call(null,cljs.core.hash_map,map__9239__9240):map__9239__9240);
var name__9242 = cljs.core.get.call(null,map__9239__9241,"\uFDD0'name");
var id__9243 = cljs.core.get.call(null,map__9239__9241,"\uFDD0'id");

var elem__6009__auto____9244 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__9243}),name__9242])]));

elem__6009__auto____9244.setAttribute("crateGroup",group__6008__auto____9237);
return elem__6009__auto____9244;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____9237;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__9245__9246 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__9245__9246))
{var loc__9247 = cljs.core.first.call(null,G__9245__9246);
var G__9245__9248 = G__9245__9246;

while(true){
var el__9249 = pos.client.view.dropdown_row.call(null,loc__9247);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__9249);
jayq.core.bind.call(null,jayq.core.$.call(null,el__9249),"click",((function (loc__9247,G__9245__9248,el__9249){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__9247));
});})(loc__9247,G__9245__9248,el__9249))
);
var temp__3698__auto____9250 = cljs.core.next.call(null,G__9245__9248);

if(cljs.core.truth_(temp__3698__auto____9250))
{var G__9245__9251 = temp__3698__auto____9250;

{
var G__9259 = cljs.core.first.call(null,G__9245__9251);
var G__9260 = G__9245__9251;
loc__9247 = G__9259;
G__9245__9248 = G__9260;
continue;
}
} else
{}
break;
}
} else
{}
var G__9252__9253 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__9252__9253))
{var empl__9254 = cljs.core.first.call(null,G__9252__9253);
var G__9252__9255 = G__9252__9253;

while(true){
var el__9256 = pos.client.view.dropdown_row.call(null,empl__9254);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__9256);
jayq.core.bind.call(null,jayq.core.$.call(null,el__9256),"click",((function (empl__9254,G__9252__9255,el__9256){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__9254));
});})(empl__9254,G__9252__9255,el__9256))
);
var temp__3698__auto____9257 = cljs.core.next.call(null,G__9252__9255);

if(cljs.core.truth_(temp__3698__auto____9257))
{var G__9252__9258 = temp__3698__auto____9257;

{
var G__9261 = cljs.core.first.call(null,G__9252__9258);
var G__9262 = G__9252__9258;
empl__9254 = G__9261;
G__9252__9255 = G__9262;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____9263 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9264 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9265 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9266 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9267 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____9267,method_table__3162__auto____9263,prefer_table__3163__auto____9264,method_cache__3164__auto____9265,cached_hierarchy__3165__auto____9266));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__9268){
var map__9269__9270 = p__9268;
var map__9269__9271 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9269__9270))?cljs.core.apply.call(null,cljs.core.hash_map,map__9269__9270):map__9269__9270);
var id__9272 = cljs.core.get.call(null,map__9269__9271,"\uFDD0'id");

var customer__9273 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9272);
var el__9274 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__9274,"\uFDD0'name".call(null,customer__9273));
pos.client.animation.flash_input_border.call(null,el__9274);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__9273));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__9275 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__9275,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____9276 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____9276))
{var id__9277 = temp__3695__auto____9276;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____9278 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9279 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9280 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9281 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9282 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____9282,method_table__3162__auto____9278,prefer_table__3163__auto____9279,method_cache__3164__auto____9280,cached_hierarchy__3165__auto____9281));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__9283){
var map__9284__9285 = p__9283;
var map__9284__9286 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9284__9285))?cljs.core.apply.call(null,cljs.core.hash_map,map__9284__9285):map__9284__9285);
var id__9287 = cljs.core.get.call(null,map__9284__9286,"\uFDD0'id");

var item__9288 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__9287);
var el__9289 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__9289,"\uFDD0'name".call(null,item__9288));
pos.client.animation.flash_input_border.call(null,el__9289);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__9290 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__9290,null);
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
var group__6008__auto____9291 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__9292){
var map__9293__9294 = p__9292;
var map__9293__9295 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9293__9294))?cljs.core.apply.call(null,cljs.core.hash_map,map__9293__9294):map__9293__9294);
var discount__9296 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'discount");
var qty__9297 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'qty");
var price__9298 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'price");
var size__9299 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'size");
var color__9300 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'color");
var name__9301 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'name");
var id__9302 = cljs.core.get.call(null,map__9293__9295,"\uFDD0'id");

var elem__6009__auto____9303 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__9302}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__9301])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__9302])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__9299])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__9300])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__9297})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__9298})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__9296})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__9298)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6009__auto____9303.setAttribute("crateGroup",group__6008__auto____9291);
return elem__6009__auto____9303;
});
pos.client.view.basket_item.prototype._crateGroup = group__6008__auto____9291;
pos.client.view.render_basket = (function (){var method_table__3162__auto____9304 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____9305 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____9306 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____9307 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____9308 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____9308,method_table__3162__auto____9304,prefer_table__3163__auto____9305,method_cache__3164__auto____9306,cached_hierarchy__3165__auto____9307));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__9309){
var map__9310__9311 = p__9309;
var map__9310__9312 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9310__9311))?cljs.core.apply.call(null,cljs.core.hash_map,map__9310__9311):map__9310__9311);
var item__9313 = cljs.core.get.call(null,map__9310__9312,"\uFDD0'item");

var el__9314 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__9313));

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),el__9314);
pos.client.animation.slide_in_table_row.call(null,el__9314);
return jayq.core.bind.call(null,jayq.core.find.call(null,el__9314,".close-container > div > a"),"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove","\uFDD0'id".call(null,item__9313));
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__9315){
var map__9316__9317 = p__9315;
var map__9316__9318 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9316__9317))?cljs.core.apply.call(null,cljs.core.hash_map,map__9316__9317):map__9316__9317);
var id__9319 = cljs.core.get.call(null,map__9316__9318,"\uFDD0'id");

var el__9320 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__9319));

return pos.client.animation.slide_out_table_row.call(null,el__9320);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__9321){
var map__9322__9323 = p__9321;
var map__9322__9324 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9322__9323))?cljs.core.apply.call(null,cljs.core.hash_map,map__9322__9323):map__9322__9323);
var item__9325 = cljs.core.get.call(null,map__9322__9324,"\uFDD0'item");
var item__9326 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__9325))?cljs.core.apply.call(null,cljs.core.hash_map,item__9325):item__9325);
var discount__9327 = cljs.core.get.call(null,item__9326,"\uFDD0'discount");
var qty__9328 = cljs.core.get.call(null,item__9326,"\uFDD0'qty");
var price__9329 = cljs.core.get.call(null,item__9326,"\uFDD0'price");
var id__9330 = cljs.core.get.call(null,item__9326,"\uFDD0'id");

var el__9331 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__9330));

pos.client.util.value.call(null,jayq.core.find.call(null,el__9331,"td.qty > div input"),qty__9328);
pos.client.util.value.call(null,jayq.core.find.call(null,el__9331,"td.price > div input"),price__9329);
pos.client.util.value.call(null,jayq.core.find.call(null,el__9331,"td.discount > div input"),discount__9327);
return jayq.core.inner.call(null,jayq.core.find.call(null,el__9331,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__9326)));
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
