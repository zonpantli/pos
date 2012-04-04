goog.provide('pos.client.util');
goog.require('cljs.core');
pos.client.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
pos.client.util.log = (function() { 
var log__delegate = function (v,text){
var vs__6879 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__6879);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__6880){
var v = cljs.core.first(arglist__6880);
var text = cljs.core.rest(arglist__6880);
return log__delegate.call(this, v, text);
});
return log;
})()
;
