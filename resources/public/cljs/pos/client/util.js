goog.provide('pos.client.util');
goog.require('cljs.core');
goog.require('jayq.util');
pos.client.util.from_arr_by_id = (function from_arr_by_id(arr,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7673_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'id".call(null,p1__7673_SHARP_),id);
}),arr));
});
