goog.provide('pos.client.view');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('pos.client.util');
goog.require('lib.dispatch');
goog.require('crate.core');
goog.require('pos.client.model');
goog.require('pos.client.animation');
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__7397_SHARP_){
return cljs.core.merge.call(null,p1__7397_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__7397_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__7398_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__7398_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data)})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__7399 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__7399,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__7399));
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
var group__6008__auto____7400 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__7401){
var map__7402__7403 = p__7401;
var map__7402__7404 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7402__7403))?cljs.core.apply.call(null,cljs.core.hash_map,map__7402__7403):map__7402__7403);
var name__7405 = cljs.core.get.call(null,map__7402__7404,"\uFDD0'name");
var id__7406 = cljs.core.get.call(null,map__7402__7404,"\uFDD0'id");

var elem__6009__auto____7407 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__7406}),name__7405])]));

elem__6009__auto____7407.setAttribute("crateGroup",group__6008__auto____7400);
return elem__6009__auto____7407;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6008__auto____7400;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__7408__7409 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__7408__7409))
{var loc__7410 = cljs.core.first.call(null,G__7408__7409);
var G__7408__7411 = G__7408__7409;

while(true){
var el__7412 = pos.client.view.dropdown_row.call(null,loc__7410);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__7412);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7412),"click",((function (loc__7410,G__7408__7411,el__7412){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__7410));
});})(loc__7410,G__7408__7411,el__7412))
);
var temp__3698__auto____7413 = cljs.core.next.call(null,G__7408__7411);

if(cljs.core.truth_(temp__3698__auto____7413))
{var G__7408__7414 = temp__3698__auto____7413;

{
var G__7422 = cljs.core.first.call(null,G__7408__7414);
var G__7423 = G__7408__7414;
loc__7410 = G__7422;
G__7408__7411 = G__7423;
continue;
}
} else
{}
break;
}
} else
{}
var G__7415__7416 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__7415__7416))
{var empl__7417 = cljs.core.first.call(null,G__7415__7416);
var G__7415__7418 = G__7415__7416;

while(true){
var el__7419 = pos.client.view.dropdown_row.call(null,empl__7417);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__7419);
jayq.core.bind.call(null,jayq.core.$.call(null,el__7419),"click",((function (empl__7417,G__7415__7418,el__7419){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__7417));
});})(empl__7417,G__7415__7418,el__7419))
);
var temp__3698__auto____7420 = cljs.core.next.call(null,G__7415__7418);

if(cljs.core.truth_(temp__3698__auto____7420))
{var G__7415__7421 = temp__3698__auto____7420;

{
var G__7424 = cljs.core.first.call(null,G__7415__7421);
var G__7425 = G__7415__7421;
empl__7417 = G__7424;
G__7415__7418 = G__7425;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____7426 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____7427 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____7428 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____7429 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____7430 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____7430,method_table__3162__auto____7426,prefer_table__3163__auto____7427,method_cache__3164__auto____7428,cached_hierarchy__3165__auto____7429));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__7431){
var map__7432__7433 = p__7431;
var map__7432__7434 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7432__7433))?cljs.core.apply.call(null,cljs.core.hash_map,map__7432__7433):map__7432__7433);
var id__7435 = cljs.core.get.call(null,map__7432__7434,"\uFDD0'id");

var customer__7436 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7435);
var el__7437 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7437,"\uFDD0'name".call(null,customer__7436));
pos.client.animation.flash_input_border.call(null,el__7437);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__7436));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__7438 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__7438,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____7439 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____7439))
{var id__7440 = temp__3695__auto____7439;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_location = (function render_location(p__7441){
var map__7442__7443 = p__7441;
var map__7442__7444 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7442__7443))?cljs.core.apply.call(null,cljs.core.hash_map,map__7442__7443):map__7442__7443);
var id__7445 = cljs.core.get.call(null,map__7442__7444,"\uFDD0'id");

var temp__3695__auto____7446 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7445);

if(cljs.core.truth_(temp__3695__auto____7446))
{var location__7447 = temp__3695__auto____7446;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__7447));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__7448){
var map__7449__7450 = p__7448;
var map__7449__7451 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7449__7450))?cljs.core.apply.call(null,cljs.core.hash_map,map__7449__7450):map__7449__7450);
var id__7452 = cljs.core.get.call(null,map__7449__7451,"\uFDD0'id");

var temp__3695__auto____7453 = pos.client.util.from_arr_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__7452);

if(cljs.core.truth_(temp__3695__auto____7453))
{var employee__7454 = temp__3695__auto____7453;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__7454));
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
