goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('pos.client.util');
goog.require('lib.dispatch');
goog.require('crate.core');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.Timer');
goog.require('goog.events');
goog.require('pos.client.model');
goog.require('pos.client.animation');
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7939_SHARP_){
return cljs.core.merge.call(null,p1__7939_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7939_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7940_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7940_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7941 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7941,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__7941));
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
var group__6008__auto____7942 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7943){
var map__7944__7945 = p__7943;
var map__7944__7946 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7944__7945))?cljs.core.apply.call(null,cljs.core.hash_map,map__7944__7945):map__7944__7945);
var name__7947 = cljs.core.get.call(null,map__7944__7946,"\uFDD0'name");
var id__7948 = cljs.core.get.call(null,map__7944__7946,"\uFDD0'id");

var elem__6009__auto____7949 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7948}),name__7947])]));

elem__6009__auto____7949.setAttribute("crateGroup",group__6008__auto____7942);
return elem__6009__auto____7949;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____7942;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7950__7951 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7950__7951))
{var loc__7952 = cljs.core.first.call(null,G__7950__7951);
var G__7950__7953 = G__7950__7951;

while(true){
var el__7954 = pos.client.view.dropdown_row.call(null,loc__7952);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7954);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7954),"click",((function (loc__7952,G__7950__7953,el__7954){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7952));
});})(loc__7952,G__7950__7953,el__7954))
);
var temp__3698__auto____7955 = cljs.core.next.call(null,G__7950__7953);

if(cljs.core.truth_(temp__3698__auto____7955))
{var G__7950__7956 = temp__3698__auto____7955;

{
var G__7964 = cljs.core.first.call(null,G__7950__7956);
var G__7965 = G__7950__7956;
loc__7952 = G__7964;
G__7950__7953 = G__7965;
continue;
}
} else
{}
break;
}
} else
{}
var G__7957__7958 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7957__7958))
{var empl__7959 = cljs.core.first.call(null,G__7957__7958);
var G__7957__7960 = G__7957__7958;

while(true){
var el__7961 = pos.client.view.dropdown_row.call(null,empl__7959);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7961);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7961),"click",((function (empl__7959,G__7957__7960,el__7961){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7959));
});})(empl__7959,G__7957__7960,el__7961))
);
var temp__3698__auto____7962 = cljs.core.next.call(null,G__7957__7960);

if(cljs.core.truth_(temp__3698__auto____7962))
{var G__7957__7963 = temp__3698__auto____7962;

{
var G__7966 = cljs.core.first.call(null,G__7957__7963);
var G__7967 = G__7957__7963;
empl__7959 = G__7966;
G__7957__7960 = G__7967;
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
pos.client.view.render_time = (function render_time(){
var t__7968 = pos.client.util.get_formatted_datetime.call(null);
var el__7969 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__7969,t__7968);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.render_customer = (function (){var method_table__3162__auto____7970 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7971 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7972 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7973 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7974 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7974,method_table__3162__auto____7970,prefer_table__3163__auto____7971,method_cache__3164__auto____7972,cached_hierarchy__3165__auto____7973));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7975){
var map__7976__7977 = p__7975;
var map__7976__7978 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7976__7977))?cljs.core.apply.call(null,cljs.core.hash_map,map__7976__7977):map__7976__7977);
var id__7979 = cljs.core.get.call(null,map__7976__7978,"\uFDD0'id");

var customer__7980 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7979);
var el__7981 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7981,"\uFDD0'name".call(null,customer__7980));
pos.client.animation.flash_input_border.call(null,el__7981);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7980));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7982 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7982,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7983 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7983))
{var id__7984 = temp__3695__auto____7983;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_location = (function render_location(p__7985){
var map__7986__7987 = p__7985;
var map__7986__7988 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7986__7987))?cljs.core.apply.call(null,cljs.core.hash_map,map__7986__7987):map__7986__7987);
var id__7989 = cljs.core.get.call(null,map__7986__7988,"\uFDD0'id");

var temp__3695__auto____7990 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7989);

if(cljs.core.truth_(temp__3695__auto____7990))
{var location__7991 = temp__3695__auto____7990;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7991));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7992){
var map__7993__7994 = p__7992;
var map__7993__7995 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7993__7994))?cljs.core.apply.call(null,cljs.core.hash_map,map__7993__7994):map__7993__7994);
var id__7996 = cljs.core.get.call(null,map__7993__7995,"\uFDD0'id");

var temp__3695__auto____7997 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7996);

if(cljs.core.truth_(temp__3695__auto____7997))
{var employee__7998 = temp__3695__auto____7997;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7998));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.prepare_ui = (function prepare_ui(){
pos.client.util.start_timer.call(null,pos.client.view.render_time);
pos.client.view.draw_pie.call(null);
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
