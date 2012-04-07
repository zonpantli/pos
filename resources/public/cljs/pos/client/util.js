goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_arr_by_id = (function from_arr_by_id(arr,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7393_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7393_SHARP_),id);
}),arr));
});
/**
* Get/set value of input element
*/
pos.client.util.value = (function() {
var value = null;
var value__7394 = (function (el){
return el.attr("value");
});
var value__7395 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__7394.call(this,el);
case  2 :
return value__7395.call(this,el,val);
}
throw('Invalid arity: ' + arguments.length);
};
return value;
})()
;
pos.client.util.background_image = (function background_image(el,url){
return pos.client.util.css.call(null,el,cljs.core.ObjMap.fromObject(["\uFDD0'background-image"],{"\uFDD0'background-image":cljs.core.str.call(null,"url(",url,")")}));
});
