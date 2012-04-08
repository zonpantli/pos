goog.provide('pos.client.animation');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
pos.client.animation.slide_in_icon = (function slide_in_icon(type,url){
var in_el__7491 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));
var out_el__7492 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));

jayq.core.attr.call(null,in_el__7491,"src",url);
return in_el__7491.animate(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["height"],{"height":"32px"})),null,null,(function (){
jayq.core.attr.call(null,out_el__7492,"src",url);
return jayq.core.css.call(null,in_el__7491,cljs.core.ObjMap.fromObject(["height"],{"height":"0"}));
}));
});
pos.client.animation.slide_in_customer_icon = (function slide_in_customer_icon(url){
return pos.client.animation.slide_in_icon.call(null,"customer",url);
});
pos.client.animation.slide_in_item_icon = (function slide_in_item_icon(url){
return pos.client.animation.slide_in_icon.call(null,"item",url);
});
pos.client.animation.reset_icon = (function reset_icon(type){
var in_el__7493 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));
var out_el__7494 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

jayq.core.attr.call(null,in_el__7493,"src",cljs.core.str.call(null,"img/",type,"_placeholder.png"));
return jayq.core.css.call(null,out_el__7494,cljs.core.ObjMap.fromObject(["height"],{"height":"0px"}));
});
pos.client.animation.reset_customer_icon = (function reset_customer_icon(){
return pos.client.animation.reset_icon.call(null,"customer");
});
pos.client.animation.reset_item_icon = (function reset_item_icon(){
return pos.client.animation.reset_icon.call(null,"item");
});
pos.client.animation.flash_input_border = (function flash_input_border(el){
jayq.core.add_class.call(null,el,"flashing-animation");
return jayq.util.wait.call(null,1000,(function (){
return jayq.core.remove_class.call(null,el,"flashing-animation");
}));
});
