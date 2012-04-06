goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
goog.require('pos.client.model');
goog.require('pos.client.animation');
/**
* Get/set value of input element
*/
pos.client.view.value = (function() {
var value = null;
var value__7696 = (function (el){
return el.attr("value");
});
var value__7697 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7696.call(this,el);
case  2 :
return value__7697.call(this,el,val);
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
return cljs.core.map.call(null,(function (p1__7699_SHARP_){
return cljs.core.merge.call(null,p1__7699_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7699_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7700_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7700_SHARP_.id);
})})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7701 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7701,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.view.value.call(null,el__7701));
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
pos.client.view.prepare_dropdowns = (function prepare_dropdowns(){
jayq.core.$.call(null,"\uFDD0'#location-dropdown-list").dropdown();
return jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list").dropdown();
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'init-data-done"]),(function (t,d){
pos.client.view.prepare_typeaheads.call(null,cljs.core.deref.call(null,pos.client.model.data));
return pos.client.view.prepare_dropdowns.call(null);
}));
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.render_customer = (function (){var method_table__3162__auto____7702 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7703 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7704 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7705 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7706 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7706,method_table__3162__auto____7702,prefer_table__3163__auto____7703,method_cache__3164__auto____7704,cached_hierarchy__3165__auto____7705));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7707){
var map__7708__7709 = p__7707;
var map__7708__7710 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7708__7709))?cljs.core.apply.call(null,cljs.core.hash_map,map__7708__7709):map__7708__7709);
var id__7711 = cljs.core.get.call(null,map__7708__7710,"\uFDD0'id");

var customer__7712 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7711);
var el__7713 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.view.value.call(null,el__7713,"\uFDD0'name".call(null,customer__7712));
pos.client.animation.flash_input_border.call(null,el__7713);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7712));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7714 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.view.value.call(null,el__7714,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7715 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7715))
{var id__7716 = temp__3695__auto____7715;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.view.draw_pie.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
