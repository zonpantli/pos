goog.provide('pos.client.animation');
goog.require('cljs.core');
goog.require('pos.client.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
pos.client.animation.slide_in_icon = (function slide_in_icon(type,url){
var in_el__9613 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

jayq.core.attr.call(null,in_el__9613,"src",url);
return jayq.core.anim.call(null,in_el__9613,cljs.core.ObjMap.fromObject(["height"],{"height":"32px"}));
});
pos.client.animation.slide_in_customer_icon = (function slide_in_customer_icon(url){
return pos.client.animation.slide_in_icon.call(null,"customer",url);
});
pos.client.animation.slide_in_item_icon = (function slide_in_item_icon(url){
return pos.client.animation.slide_in_icon.call(null,"item",url);
});
pos.client.animation.reset_icon = (function reset_icon(type){
var out_el__9614 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

return jayq.core.css.call(null,out_el__9614,cljs.core.ObjMap.fromObject(["height"],{"height":"0px"}));
});
pos.client.animation.reset_customer_icon = (function reset_customer_icon(){
return pos.client.animation.reset_icon.call(null,"customer");
});
pos.client.animation.reset_item_icon = (function reset_item_icon(){
return pos.client.animation.reset_icon.call(null,"item");
});
