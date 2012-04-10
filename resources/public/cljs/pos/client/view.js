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
pos.client.view.render_location = (function render_location(p__14589){
var map__14590__14591 = p__14589;
var map__14590__14592 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14590__14591))?cljs.core.apply.call(null,cljs.core.hash_map,map__14590__14591):map__14590__14591);
var id__14593 = cljs.core.get.call(null,map__14590__14592,"\uFDD0'id");

var temp__3695__auto____14594 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'locations".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14593);

if(cljs.core.truth_(temp__3695__auto____14594))
{var location__14595 = temp__3695__auto____14594;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"\uFDD0'name".call(null,location__14595));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#location-name"),"Location");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'location-change"]),(function (_,d){
return pos.client.view.render_location.call(null,d);
}));
pos.client.view.render_employee = (function render_employee(p__14596){
var map__14597__14598 = p__14596;
var map__14597__14599 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14597__14598))?cljs.core.apply.call(null,cljs.core.hash_map,map__14597__14598):map__14597__14598);
var id__14600 = cljs.core.get.call(null,map__14597__14599,"\uFDD0'id");

var temp__3695__auto____14601 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'employees".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14600);

if(cljs.core.truth_(temp__3695__auto____14601))
{var employee__14602 = temp__3695__auto____14601;

return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"\uFDD0'name".call(null,employee__14602));
} else
{return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#employee-name"),"Employee");
}
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'employee-change"]),(function (_,d){
return pos.client.view.render_employee.call(null,d);
}));
pos.client.view.render_time = (function render_time(){
var t__14603 = pos.client.util.get_formatted_datetime.call(null);
var el__14604 = jayq.core.$.call(null,"\uFDD0'#clock");

return jayq.core.inner.call(null,el__14604,t__14603);
});
pos.client.view.pie_data = (function pie_data(){
return fetch.util.clj__GT_js.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":33,"\uFDD0'color":"#5bb75b"}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'data","\uFDD0'color"],{"\uFDD0'label":"","\uFDD0'data":67,"\uFDD0'color":"#52c5c8"})]));
});
pos.client.view.draw_pie = (function draw_pie(){
return $.plot(jayq.core.$.call(null,"\uFDD0'#pie"),pos.client.view.pie_data.call(null),fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'series"],{"\uFDD0'series":cljs.core.ObjMap.fromObject(["\uFDD0'pie"],{"\uFDD0'pie":cljs.core.ObjMap.fromObject(["\uFDD0'show","\uFDD0'stroke"],{"\uFDD0'show":true,"\uFDD0'stroke":cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'width"],{"\uFDD0'color":"#2b2b2b","\uFDD0'width":0})})})})));
});
pos.client.view.get_dropdown_data = (function get_dropdown_data(data_key,data){
return cljs.core.map.call(null,(function (p1__14605_SHARP_){
return cljs.core.merge.call(null,p1__14605_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":"\uFDD0'name".call(null,p1__14605_SHARP_)}));
}),data_key.call(null,data));
});
/**
* Attach data to typeahead fields for customer and item selcetion
*/
pos.client.view.prepare_typeaheads = (function prepare_typeaheads(data){
jayq.core.$.call(null,"\uFDD0'#customer-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'customers",data),"\uFDD0'onselect":(function (p1__14606_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'customer-select",p1__14606_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#customer-dropdown-toggle")})));
return jayq.core.$.call(null,"\uFDD0'#item-dropdown").typeahead(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'source","\uFDD0'onselect","\uFDD0'trigger"],{"\uFDD0'source":pos.client.view.get_dropdown_data.call(null,"\uFDD0'items",data),"\uFDD0'onselect":(function (p1__14607_SHARP_){
return lib.dispatch.fire.call(null,"\uFDD0'item-select",p1__14607_SHARP_.id);
}),"\uFDD0'trigger":jayq.core.$.call(null,"\uFDD0'#item-dropdown-toggle")})));
});
pos.client.view.attach_typeahead_event_listeners = (function attach_typeahead_event_listeners(){
var el__14608 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

return jayq.core.bind.call(null,el__14608,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'customer-field-changed",pos.client.util.value.call(null,el__14608));
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
var group__6106__auto____14609 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.dropdown_row = (function dropdown_row(p__14610){
var map__14611__14612 = p__14610;
var map__14611__14613 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14611__14612))?cljs.core.apply.call(null,cljs.core.hash_map,map__14611__14612):map__14611__14612);
var name__14614 = cljs.core.get.call(null,map__14611__14613,"\uFDD0'name");
var id__14615 = cljs.core.get.call(null,map__14611__14613,"\uFDD0'id");

var elem__6107__auto____14616 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'value"],{"\uFDD0'href":"#","\uFDD0'value":id__14615}),name__14614])]));

elem__6107__auto____14616.setAttribute("crateGroup",group__6106__auto____14609);
return elem__6107__auto____14616;
});
pos.client.view.dropdown_row.prototype._crateGroup = group__6106__auto____14609;
pos.client.view.populate_dropdowns = (function populate_dropdowns(data){
var G__14617__14618 = cljs.core.seq.call(null,"\uFDD0'locations".call(null,data));

if(cljs.core.truth_(G__14617__14618))
{var loc__14619 = cljs.core.first.call(null,G__14617__14618);
var G__14617__14620 = G__14617__14618;

while(true){
var el__14621 = pos.client.view.dropdown_row.call(null,loc__14619);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#location-dropdown-list"),el__14621);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14621),"click",((function (loc__14619,G__14617__14620,el__14621){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'location-select","\uFDD0'id".call(null,loc__14619));
});})(loc__14619,G__14617__14620,el__14621))
);
var temp__3698__auto____14622 = cljs.core.next.call(null,G__14617__14620);

if(cljs.core.truth_(temp__3698__auto____14622))
{var G__14617__14623 = temp__3698__auto____14622;

{
var G__14631 = cljs.core.first.call(null,G__14617__14623);
var G__14632 = G__14617__14623;
loc__14619 = G__14631;
G__14617__14620 = G__14632;
continue;
}
} else
{}
break;
}
} else
{}
var G__14624__14625 = cljs.core.seq.call(null,"\uFDD0'employees".call(null,data));

if(cljs.core.truth_(G__14624__14625))
{var empl__14626 = cljs.core.first.call(null,G__14624__14625);
var G__14624__14627 = G__14624__14625;

while(true){
var el__14628 = pos.client.view.dropdown_row.call(null,empl__14626);

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#employee-dropdown-list"),el__14628);
jayq.core.bind.call(null,jayq.core.$.call(null,el__14628),"click",((function (empl__14626,G__14624__14627,el__14628){
return (function (){
return lib.dispatch.fire.call(null,"\uFDD0'employee-select","\uFDD0'id".call(null,empl__14626));
});})(empl__14626,G__14624__14627,el__14628))
);
var temp__3698__auto____14629 = cljs.core.next.call(null,G__14624__14627);

if(cljs.core.truth_(temp__3698__auto____14629))
{var G__14624__14630 = temp__3698__auto____14629;

{
var G__14633 = cljs.core.first.call(null,G__14624__14630);
var G__14634 = G__14624__14630;
empl__14626 = G__14633;
G__14624__14627 = G__14634;
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
pos.client.view.render_customer = (function (){var method_table__3162__auto____14635 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14636 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14637 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14638 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14639 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-customer","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14639,method_table__3162__auto____14635,prefer_table__3163__auto____14636,method_cache__3164__auto____14637,cached_hierarchy__3165__auto____14638));
})();
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-selected",(function (p__14640){
var map__14641__14642 = p__14640;
var map__14641__14643 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14641__14642))?cljs.core.apply.call(null,cljs.core.hash_map,map__14641__14642):map__14641__14642);
var id__14644 = cljs.core.get.call(null,map__14641__14643,"\uFDD0'id");

var customer__14645 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'customers".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14644);
var el__14646 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14646,"\uFDD0'name".call(null,customer__14645));
pos.client.animation.flash_input_border.call(null,el__14646);
return pos.client.animation.slide_in_customer_icon.call(null,"\uFDD0'image".call(null,customer__14645));
}));
cljs.core._add_method.call(null,pos.client.view.render_customer,"\uFDD0'customer-deselected",(function (_){
var el__14647 = jayq.core.$.call(null,"\uFDD0'#customer-dropdown");

pos.client.util.value.call(null,el__14647,null);
return pos.client.animation.reset_customer_icon.call(null);
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'customer-change"]),(function (_,d){
var temp__3695__auto____14648 = "\uFDD0'id".call(null,d);

if(cljs.core.truth_(temp__3695__auto____14648))
{var id__14649 = temp__3695__auto____14648;

return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event","\uFDD0'id"],{"\uFDD0'event":"\uFDD0'customer-selected","\uFDD0'id":"\uFDD0'id".call(null,d)}));
} else
{return pos.client.view.render_customer.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'event"],{"\uFDD0'event":"\uFDD0'customer-deselected"}));
}
}));
pos.client.view.render_item = (function (){var method_table__3162__auto____14650 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14651 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14652 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14653 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14654 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-item","\uFDD0'event","\uFDD0'default",hierarchy__3166__auto____14654,method_table__3162__auto____14650,prefer_table__3163__auto____14651,method_cache__3164__auto____14652,cached_hierarchy__3165__auto____14653));
})();
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-select",(function (p__14655){
var map__14656__14657 = p__14655;
var map__14656__14658 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14656__14657))?cljs.core.apply.call(null,cljs.core.hash_map,map__14656__14657):map__14656__14657);
var id__14659 = cljs.core.get.call(null,map__14656__14658,"\uFDD0'id");

var item__14660 = pos.client.util.from_coll_by_id.call(null,"\uFDD0'items".call(null,cljs.core.deref.call(null,pos.client.model.data)),id__14659);
var el__14661 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

pos.client.util.value.call(null,el__14661,"\uFDD0'name".call(null,item__14660));
pos.client.animation.flash_input_border.call(null,el__14661);
return jayq.util.wait.call(null,500,(function (){
return lib.dispatch.fire.call(null,"\uFDD0'item-clear");
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_item,"\uFDD0'item-clear",(function (_){
var el__14662 = jayq.core.$.call(null,"\uFDD0'#item-dropdown");

return pos.client.util.value.call(null,el__14662,null);
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
var group__6106__auto____14663 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

pos.client.view.basket_item = (function basket_item(p__14664){
var map__14665__14666 = p__14664;
var map__14665__14667 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14665__14666))?cljs.core.apply.call(null,cljs.core.hash_map,map__14665__14666):map__14665__14666);
var discount__14668 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'discount");
var qty__14669 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'qty");
var price__14670 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'price");
var size__14671 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'size");
var color__14672 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'color");
var name__14673 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'name");
var id__14674 = cljs.core.get.call(null,map__14665__14667,"\uFDD0'id");

var elem__6107__auto____14675 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14674}),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold",cljs.core.PersistentVector.fromArray(["\uFDD0'div",name__14673])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",id__14674])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",size__14671])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'div",color__14672])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.qty",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":qty__14669})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.price",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.price",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":price__14670})])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.discount",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'input.num",cljs.core.ObjMap.fromObject(["\uFDD0'value"],{"\uFDD0'value":discount__14668})]),"%"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.bold.total",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.str.call(null,price__14670)])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td.close-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close","x"])])])]));

elem__6107__auto____14675.setAttribute("crateGroup",group__6106__auto____14663);
return elem__6107__auto____14675;
});
pos.client.view.basket_item.prototype._crateGroup = group__6106__auto____14663;
pos.client.view.render_basket = (function (){var method_table__3162__auto____14676 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14677 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14678 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14679 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14680 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-basket","\uFDD0'type","\uFDD0'default",hierarchy__3166__auto____14680,method_table__3162__auto____14676,prefer_table__3163__auto____14677,method_cache__3164__auto____14678,cached_hierarchy__3165__auto____14679));
})();
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'add-item",(function (p__14681){
var map__14682__14683 = p__14681;
var map__14682__14684 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14682__14683))?cljs.core.apply.call(null,cljs.core.hash_map,map__14682__14683):map__14682__14683);
var item__14685 = cljs.core.get.call(null,map__14682__14684,"\uFDD0'item");
var item__14686 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14685))?cljs.core.apply.call(null,cljs.core.hash_map,item__14685):item__14685);
var id__14687 = cljs.core.get.call(null,item__14686,"\uFDD0'id");

var $el__14688 = jayq.core.$.call(null,pos.client.view.basket_item.call(null,item__14686));
var $qty__14689 = jayq.core.find.call(null,$el__14688,".qty > div > input");
var $price__14690 = jayq.core.find.call(null,$el__14688,".price > div > input");
var $discount__14691 = jayq.core.find.call(null,$el__14688,".discount > div > input");
var $close__14692 = jayq.core.find.call(null,$el__14688,".close-container > div > a");

jayq.core.append.call(null,jayq.core.$.call(null,"\uFDD0'#receipt-table"),$el__14688);
pos.client.animation.slide_in_table_row.call(null,$el__14688);
jayq.core.bind.call(null,$qty__14689,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14687,"\uFDD0'changed-attr":"\uFDD0'qty","\uFDD0'new-val":pos.client.util.value.call(null,$qty__14689)}));
}));
jayq.core.bind.call(null,$price__14690,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14687,"\uFDD0'changed-attr":"\uFDD0'price","\uFDD0'new-val":pos.client.util.value.call(null,$price__14690)}));
}));
jayq.core.bind.call(null,$discount__14691,"keyup",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-update",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'changed-attr","\uFDD0'new-val"],{"\uFDD0'id":id__14687,"\uFDD0'changed-attr":"\uFDD0'discount","\uFDD0'new-val":pos.client.util.value.call(null,$discount__14691)}));
}));
return jayq.core.bind.call(null,$close__14692,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'basket-remove",id__14687);
}));
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'remove-item",(function (p__14693){
var map__14694__14695 = p__14693;
var map__14694__14696 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14694__14695))?cljs.core.apply.call(null,cljs.core.hash_map,map__14694__14695):map__14694__14695);
var id__14697 = cljs.core.get.call(null,map__14694__14696,"\uFDD0'id");

var el__14698 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14697));

return pos.client.animation.slide_out_table_row.call(null,el__14698);
}));
cljs.core._add_method.call(null,pos.client.view.render_basket,"\uFDD0'update-item",(function (p__14699){
var map__14700__14701 = p__14699;
var map__14700__14702 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14700__14701))?cljs.core.apply.call(null,cljs.core.hash_map,map__14700__14701):map__14700__14701);
var item__14703 = cljs.core.get.call(null,map__14700__14702,"\uFDD0'item");
var item__14704 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,item__14703))?cljs.core.apply.call(null,cljs.core.hash_map,item__14703):item__14703);
var discount__14705 = cljs.core.get.call(null,item__14704,"\uFDD0'discount");
var qty__14706 = cljs.core.get.call(null,item__14704,"\uFDD0'qty");
var price__14707 = cljs.core.get.call(null,item__14704,"\uFDD0'price");
var id__14708 = cljs.core.get.call(null,item__14704,"\uFDD0'id");

var el__14709 = jayq.core.$.call(null,cljs.core.str.call(null,"tr#",id__14708));

pos.client.util.value.call(null,jayq.core.find.call(null,el__14709,"td.qty > div input"),qty__14706);
pos.client.util.value.call(null,jayq.core.find.call(null,el__14709,"td.price > div input"),pos.client.util.num_as_field_value.call(null,price__14707));
pos.client.util.value.call(null,jayq.core.find.call(null,el__14709,"td.discount > div input"),discount__14705.toFixed());
return jayq.core.inner.call(null,jayq.core.find.call(null,el__14709,"td.total > div"),cljs.core.str.call(null,pos.client.util.item_total_price.call(null,item__14704)));
}));
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'basket-change"]),(function (_,d){
return pos.client.view.render_basket.call(null,d);
}));
pos.client.view.render_basket_total = (function render_basket_total(p__14710){
var map__14711__14712 = p__14710;
var map__14711__14713 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14711__14712))?cljs.core.apply.call(null,cljs.core.hash_map,map__14711__14712):map__14711__14712);
var discount__14714 = cljs.core.get.call(null,map__14711__14713,"\uFDD0'discount");
var vat__14715 = cljs.core.get.call(null,map__14711__14713,"\uFDD0'vat");
var tot__14716 = cljs.core.get.call(null,map__14711__14713,"\uFDD0'tot");

var $tot__14717 = jayq.core.$.call(null,"\uFDD0'#total-price");
var $vat__14718 = jayq.core.$.call(null,"\uFDD0'#vat-number");
var $discount__14719 = jayq.core.$.call(null,"\uFDD0'#discount-number");

jayq.core.inner.call(null,$tot__14717,pos.client.util.num_as_field_value.call(null,tot__14716));
jayq.core.inner.call(null,$vat__14718,pos.client.util.num_as_field_value.call(null,vat__14715));
return jayq.core.inner.call(null,$discount__14719,pos.client.util.num_as_field_value.call(null,discount__14714));
});
lib.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'update-basket-total"]),(function (_,d){
return pos.client.view.render_basket_total.call(null,d);
}));
pos.client.view.bind_tender_buttons = (function bind_tender_buttons(){
var $proceed__14720 = jayq.core.$.call(null,"\uFDD0'#proceed-tender-button");
var $cancel__14721 = jayq.core.$.call(null,"\uFDD0'#cancel-tender-button");

jayq.core.bind.call(null,$proceed__14720,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'proceed-tender");
}));
return jayq.core.bind.call(null,$cancel__14721,"click",(function (){
return lib.dispatch.fire.call(null,"\uFDD0'cancel-tender");
}));
});
pos.client.view.render = (function (){var method_table__3162__auto____14722 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__3163__auto____14723 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__3164__auto____14724 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__3165__auto____14725 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__3166__auto____14726 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","\uFDD0'state","\uFDD0'default",hierarchy__3166__auto____14726,method_table__3162__auto____14722,prefer_table__3163__auto____14723,method_cache__3164__auto____14724,cached_hierarchy__3165__auto____14725));
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
pos.client.view.attach_typeahead_event_listeners.call(null);
return pos.client.view.attach_typeahead_clear_event_listeners.call(null);
});
