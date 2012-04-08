goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_arr_by_id = (function from_arr_by_id(arr,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7999_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7999_SHARP_),id);
}),arr));
});
/**
* Get/set value of input element
*/
pos.client.util.value = (function() {
var value = null;
var value__8000 = (function (el){
return el.attr("value");
});
var value__8001 = (function (el,val){
return el.attr("value",val);
});
value = function(el,val){
switch(arguments.length){
case  1 :
return value__8000.call(this,el);
case  2 :
return value__8001.call(this,el,val);
}
throw('Invalid arity: ' + arguments.length);
};
return value;
})()
;
pos.client.util.background_image = (function background_image(el,url){
return pos.client.util.css.call(null,el,cljs.core.ObjMap.fromObject(["\uFDD0'background-image"],{"\uFDD0'background-image":cljs.core.str.call(null,"url(",url,")")}));
});
pos.client.util.get_formatted_datetime = (function get_formatted_datetime(){
var d__8003 = (new goog.date.DateTime());
var dtf__8004 = (new goog.i18n.DateTimeFormat("EEE, MMM d  h:mm a"));

return dtf__8004.format(d__8003);
});
pos.client.util.start_timer = (function start_timer(cb){
var t__8005 = (new goog.Timer(1000));

t__8005.start();
return goog.events.listen(t__8005,goog.Timer.TICK,cb);
});
