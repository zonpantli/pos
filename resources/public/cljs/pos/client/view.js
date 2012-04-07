goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
goog.require('crate.core');
goog.require('pos.client.model');
goog.require('pos.client.animation');
/**
* Get/set value of input element
*/
pos.client.view.value = (function() {
var value = null;
var value__7241 = (function (el){
return el.attr("value");
});
var value__7242 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7241.call(this,el);
case  2 :
return value__7242.call(this,el,val);
}
throw('Invalid arity: ' + arguments.length);
};
return value;
})()
;
pos.client.view.background_image = (function background_image(el,url){
return jayq.core.css.call(null,el,cljs.core.ObjMap.fromObject(["\uFDD0'background-image"],{"\uFDD0'background-image":cljs.core.str.call(null,"url(",url,")")}));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7244_SHARP_){
return cljs.core.merge.call(null,p1__7244_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7244_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7245_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7245_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7246 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7246,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.view.value.call(null,el__7246));
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
var group__6008__auto____7247 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7248){
var map__7249__7250 = p__7248;
var map__7249__7251 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7249__7250))?cljs.core.apply.call(null,cljs.core.hash_map,map__7249__7250):map__7249__7250);
var name__7252 = cljs.core.get.call(null,map__7249__7251,"\uFDD0'name");
var id__7253 = cljs.core.get.call(null,map__7249__7251,"\uFDD0'id");

var elem__6009__auto____7254 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7253}),name__7252])]));

elem__6009__auto____7254.setAttribute("crateGroup",group__6008__auto____7247);
return elem__6009__auto____7254;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____7247;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7255__7256 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7255__7256))
{var loc__7257 = cljs.core.first.call(null,G__7255__7256);
var G__7255__7258 = G__7255__7256;

while(true){
var el__7259 = pos.client.view.dropdown_row.call(null,loc__7257);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7259);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7259),"click",((function (loc__7257,G__7255__7258,el__7259){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7257));
});})(loc__7257,G__7255__7258,el__7259))
);
var temp__3698__auto____7260 = cljs.core.next.call(null,G__7255__7258);

if(cljs.core.truth_(temp__3698__auto____7260))
{var G__7255__7261 = temp__3698__auto____7260;

{
var G__7269 = cljs.core.first.call(null,G__7255__7261);
var G__7270 = G__7255__7261;
loc__7257 = G__7269;
G__7255__7258 = G__7270;
continue;
}
} else
{}
break;
}
} else
{}
var G__7262__7263 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7262__7263))
{var empl__7264 = cljs.core.first.call(null,G__7262__7263);
var G__7262__7265 = G__7262__7263;

while(true){
var el__7266 = pos.client.view.dropdown_row.call(null,empl__7264);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7266);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7266),"click",((function (empl__7264,G__7262__7265,el__7266){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7264));
});})(empl__7264,G__7262__7265,el__7266))
);
var temp__3698__auto____7267 = cljs.core.next.call(null,G__7262__7265);

if(cljs.core.truth_(temp__3698__auto____7267))
{var G__7262__7268 = temp__3698__auto____7267;

{
var G__7271 = cljs.core.first.call(null,G__7262__7268);
var G__7272 = G__7262__7268;
empl__7264 = G__7271;
G__7262__7265 = G__7272;
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
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.render_customer = (function (){var method_table__3162__auto____7273 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7274 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7275 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7276 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7277 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7277,method_table__3162__auto____7273,prefer_table__3163__auto____7274,method_cache__3164__auto____7275,cached_hierarchy__3165__auto____7276));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7278){
var map__7279__7280 = p__7278;
var map__7279__7281 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7279__7280))?cljs.core.apply.call(null,cljs.core.hash_map,map__7279__7280):map__7279__7280);
var id__7282 = cljs.core.get.call(null,map__7279__7281,"\uFDD0'id");

var customer__7283 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7282);
var el__7284 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.view.value.call(null,el__7284,"\uFDD0'name".call(null,customer__7283));
pos.client.animation.flash_input_border.call(null,el__7284);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7283));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7285 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.view.value.call(null,el__7285,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7286 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7286))
{var id__7287 = temp__3695__auto____7286;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_location = (function render_location(p__7288){
var map__7289__7290 = p__7288;
var map__7289__7291 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7289__7290))?cljs.core.apply.call(null,cljs.core.hash_map,map__7289__7290):map__7289__7290);
var id__7292 = cljs.core.get.call(null,map__7289__7291,"\uFDD0'id");

var temp__3695__auto____7293 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7292);

if(cljs.core.truth_(temp__3695__auto____7293))
{var location__7294 = temp__3695__auto____7293;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7294));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7295){
var map__7296__7297 = p__7295;
var map__7296__7298 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7296__7297))?cljs.core.apply.call(null,cljs.core.hash_map,map__7296__7297):map__7296__7297);
var id__7299 = cljs.core.get.call(null,map__7296__7298,"\uFDD0'id");

var temp__3695__auto____7300 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7299);

if(cljs.core.truth_(temp__3695__auto____7300))
{var employee__7301 = temp__3695__auto____7300;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7301));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.view.draw_pie.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
