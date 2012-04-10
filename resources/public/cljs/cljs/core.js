goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____11339 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{var or__3548__auto____11340 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__11404 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____11341 = this$;

if(cljs.core.truth_(and__3546__auto____11341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____11342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11342))
{return or__3548__auto____11342;
} else
{var or__3548__auto____11343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__11405 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____11344 = this$;

if(cljs.core.truth_(and__3546__auto____11344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____11345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11345))
{return or__3548__auto____11345;
} else
{var or__3548__auto____11346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__11406 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____11347 = this$;

if(cljs.core.truth_(and__3546__auto____11347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____11348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11348))
{return or__3548__auto____11348;
} else
{var or__3548__auto____11349 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__11407 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____11350 = this$;

if(cljs.core.truth_(and__3546__auto____11350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____11351 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{var or__3548__auto____11352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11352))
{return or__3548__auto____11352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__11408 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____11353 = this$;

if(cljs.core.truth_(and__3546__auto____11353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____11354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11355))
{return or__3548__auto____11355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__11409 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____11356 = this$;

if(cljs.core.truth_(and__3546__auto____11356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____11357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{var or__3548__auto____11358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11358))
{return or__3548__auto____11358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__11410 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____11359 = this$;

if(cljs.core.truth_(and__3546__auto____11359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____11360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11360))
{return or__3548__auto____11360;
} else
{var or__3548__auto____11361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11361))
{return or__3548__auto____11361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__11411 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____11362 = this$;

if(cljs.core.truth_(and__3546__auto____11362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____11363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11363))
{return or__3548__auto____11363;
} else
{var or__3548__auto____11364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11364))
{return or__3548__auto____11364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__11412 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____11365 = this$;

if(cljs.core.truth_(and__3546__auto____11365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____11366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11366))
{return or__3548__auto____11366;
} else
{var or__3548__auto____11367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11367))
{return or__3548__auto____11367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__11413 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____11368 = this$;

if(cljs.core.truth_(and__3546__auto____11368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____11369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11369))
{return or__3548__auto____11369;
} else
{var or__3548__auto____11370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11370))
{return or__3548__auto____11370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11414 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____11371 = this$;

if(cljs.core.truth_(and__3546__auto____11371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____11372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11372))
{return or__3548__auto____11372;
} else
{var or__3548__auto____11373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11373))
{return or__3548__auto____11373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__11415 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____11374 = this$;

if(cljs.core.truth_(and__3546__auto____11374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____11375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11375))
{return or__3548__auto____11375;
} else
{var or__3548__auto____11376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__11416 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____11377 = this$;

if(cljs.core.truth_(and__3546__auto____11377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____11378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
} else
{var or__3548__auto____11379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11379))
{return or__3548__auto____11379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__11417 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____11380 = this$;

if(cljs.core.truth_(and__3546__auto____11380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____11381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11381))
{return or__3548__auto____11381;
} else
{var or__3548__auto____11382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11382))
{return or__3548__auto____11382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__11418 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____11383 = this$;

if(cljs.core.truth_(and__3546__auto____11383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____11384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11384))
{return or__3548__auto____11384;
} else
{var or__3548__auto____11385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11385))
{return or__3548__auto____11385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__11419 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____11386 = this$;

if(cljs.core.truth_(and__3546__auto____11386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____11387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{var or__3548__auto____11388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__11420 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____11389 = this$;

if(cljs.core.truth_(and__3546__auto____11389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____11390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11390))
{return or__3548__auto____11390;
} else
{var or__3548__auto____11391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11391))
{return or__3548__auto____11391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__11421 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____11392 = this$;

if(cljs.core.truth_(and__3546__auto____11392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____11393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{var or__3548__auto____11394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11394))
{return or__3548__auto____11394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__11422 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____11395 = this$;

if(cljs.core.truth_(and__3546__auto____11395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____11396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11396))
{return or__3548__auto____11396;
} else
{var or__3548__auto____11397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11397))
{return or__3548__auto____11397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__11423 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____11398 = this$;

if(cljs.core.truth_(and__3546__auto____11398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____11399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11399))
{return or__3548__auto____11399;
} else
{var or__3548__auto____11400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11400))
{return or__3548__auto____11400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__11424 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____11401 = this$;

if(cljs.core.truth_(and__3546__auto____11401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____11402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{var or__3548__auto____11403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11403))
{return or__3548__auto____11403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__11404.call(this,this$);
case  2 :
return _invoke__11405.call(this,this$,a);
case  3 :
return _invoke__11406.call(this,this$,a,b);
case  4 :
return _invoke__11407.call(this,this$,a,b,c);
case  5 :
return _invoke__11408.call(this,this$,a,b,c,d);
case  6 :
return _invoke__11409.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__11410.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__11411.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__11412.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__11413.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__11414.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__11415.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__11416.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__11417.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__11418.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__11419.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__11420.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__11421.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__11422.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__11423.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__11424.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11426 = coll;

if(cljs.core.truth_(and__3546__auto____11426))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____11426;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____11427 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{var or__3548__auto____11428 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____11428))
{return or__3548__auto____11428;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11429 = coll;

if(cljs.core.truth_(and__3546__auto____11429))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____11429;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____11430 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11430))
{return or__3548__auto____11430;
} else
{var or__3548__auto____11431 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____11432 = coll;

if(cljs.core.truth_(and__3546__auto____11432))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____11432;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____11433 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11433))
{return or__3548__auto____11433;
} else
{var or__3548__auto____11434 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____11434))
{return or__3548__auto____11434;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__11441 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____11435 = coll;

if(cljs.core.truth_(and__3546__auto____11435))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____11435;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____11436 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11436))
{return or__3548__auto____11436;
} else
{var or__3548__auto____11437 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____11437))
{return or__3548__auto____11437;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__11442 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____11438 = coll;

if(cljs.core.truth_(and__3546__auto____11438))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____11438;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____11439 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11439))
{return or__3548__auto____11439;
} else
{var or__3548__auto____11440 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____11440))
{return or__3548__auto____11440;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__11441.call(this,coll,n);
case  3 :
return _nth__11442.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11444 = coll;

if(cljs.core.truth_(and__3546__auto____11444))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____11444;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____11445 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11445))
{return or__3548__auto____11445;
} else
{var or__3548__auto____11446 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____11446))
{return or__3548__auto____11446;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11447 = coll;

if(cljs.core.truth_(and__3546__auto____11447))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____11447;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____11448 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11448))
{return or__3548__auto____11448;
} else
{var or__3548__auto____11449 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__11456 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____11450 = o;

if(cljs.core.truth_(and__3546__auto____11450))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____11450;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____11451 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11451))
{return or__3548__auto____11451;
} else
{var or__3548__auto____11452 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__11457 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____11453 = o;

if(cljs.core.truth_(and__3546__auto____11453))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____11453;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____11454 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11454))
{return or__3548__auto____11454;
} else
{var or__3548__auto____11455 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__11456.call(this,o,k);
case  3 :
return _lookup__11457.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____11459 = coll;

if(cljs.core.truth_(and__3546__auto____11459))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____11459;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____11460 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11460))
{return or__3548__auto____11460;
} else
{var or__3548__auto____11461 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____11462 = coll;

if(cljs.core.truth_(and__3546__auto____11462))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____11462;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____11463 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11464 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____11465 = coll;

if(cljs.core.truth_(and__3546__auto____11465))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____11465;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____11466 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11467 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____11468 = coll;

if(cljs.core.truth_(and__3546__auto____11468))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____11468;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____11469 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{var or__3548__auto____11470 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11471 = coll;

if(cljs.core.truth_(and__3546__auto____11471))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____11471;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____11472 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11472))
{return or__3548__auto____11472;
} else
{var or__3548__auto____11473 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11474 = coll;

if(cljs.core.truth_(and__3546__auto____11474))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____11474;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____11475 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
} else
{var or__3548__auto____11476 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____11477 = coll;

if(cljs.core.truth_(and__3546__auto____11477))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____11477;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____11478 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{var or__3548__auto____11479 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____11480 = o;

if(cljs.core.truth_(and__3546__auto____11480))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____11480;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____11481 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11481))
{return or__3548__auto____11481;
} else
{var or__3548__auto____11482 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____11483 = o;

if(cljs.core.truth_(and__3546__auto____11483))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____11483;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____11484 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11484))
{return or__3548__auto____11484;
} else
{var or__3548__auto____11485 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____11485))
{return or__3548__auto____11485;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____11486 = o;

if(cljs.core.truth_(and__3546__auto____11486))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____11486;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____11487 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11487))
{return or__3548__auto____11487;
} else
{var or__3548__auto____11488 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____11488))
{return or__3548__auto____11488;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____11489 = o;

if(cljs.core.truth_(and__3546__auto____11489))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____11489;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____11490 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{var or__3548__auto____11491 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__11498 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____11492 = coll;

if(cljs.core.truth_(and__3546__auto____11492))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____11492;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____11493 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11493))
{return or__3548__auto____11493;
} else
{var or__3548__auto____11494 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__11499 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____11495 = coll;

if(cljs.core.truth_(and__3546__auto____11495))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____11495;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____11496 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{var or__3548__auto____11497 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__11498.call(this,coll,f);
case  3 :
return _reduce__11499.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____11501 = o;

if(cljs.core.truth_(and__3546__auto____11501))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____11501;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____11502 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11503 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____11504 = o;

if(cljs.core.truth_(and__3546__auto____11504))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____11504;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____11505 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11505))
{return or__3548__auto____11505;
} else
{var or__3548__auto____11506 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____11507 = o;

if(cljs.core.truth_(and__3546__auto____11507))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____11507;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____11508 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11508))
{return or__3548__auto____11508;
} else
{var or__3548__auto____11509 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____11509))
{return or__3548__auto____11509;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____11510 = o;

if(cljs.core.truth_(and__3546__auto____11510))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____11510;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____11511 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____11511))
{return or__3548__auto____11511;
} else
{var or__3548__auto____11512 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____11513 = d;

if(cljs.core.truth_(and__3546__auto____11513))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____11513;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____11514 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____11514))
{return or__3548__auto____11514;
} else
{var or__3548__auto____11515 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____11515))
{return or__3548__auto____11515;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____11516 = this$;

if(cljs.core.truth_(and__3546__auto____11516))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____11516;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____11517 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{var or__3548__auto____11518 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____11518))
{return or__3548__auto____11518;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____11519 = this$;

if(cljs.core.truth_(and__3546__auto____11519))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____11519;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____11520 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11520))
{return or__3548__auto____11520;
} else
{var or__3548__auto____11521 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____11521))
{return or__3548__auto____11521;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____11522 = this$;

if(cljs.core.truth_(and__3546__auto____11522))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____11522;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____11523 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11523))
{return or__3548__auto____11523;
} else
{var or__3548__auto____11524 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__11525 = null;
var G__11525__11526 = (function (o,k){
return null;
});
var G__11525__11527 = (function (o,k,not_found){
return not_found;
});
G__11525 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__11525__11526.call(this,o,k);
case  3 :
return G__11525__11527.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11525;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11529 = null;
var G__11529__11530 = (function (_,f){
return f.call(null);
});
var G__11529__11531 = (function (_,f,start){
return start;
});
G__11529 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__11529__11530.call(this,_,f);
case  3 :
return G__11529__11531.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11529;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__11533 = null;
var G__11533__11534 = (function (_,n){
return null;
});
var G__11533__11535 = (function (_,n,not_found){
return not_found;
});
G__11533 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__11533__11534.call(this,_,n);
case  3 :
return G__11533__11535.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11533;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__11543 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__11537 = cljs.core._nth.call(null,cicoll,0);
var n__11538 = 1;

while(true){
if(cljs.core.truth_((n__11538 < cljs.core._count.call(null,cicoll))))
{{
var G__11547 = f.call(null,val__11537,cljs.core._nth.call(null,cicoll,n__11538));
var G__11548 = (n__11538 + 1);
val__11537 = G__11547;
n__11538 = G__11548;
continue;
}
} else
{return val__11537;
}
break;
}
}
});
var ci_reduce__11544 = (function (cicoll,f,val){
var val__11539 = val;
var n__11540 = 0;

while(true){
if(cljs.core.truth_((n__11540 < cljs.core._count.call(null,cicoll))))
{{
var G__11549 = f.call(null,val__11539,cljs.core._nth.call(null,cicoll,n__11540));
var G__11550 = (n__11540 + 1);
val__11539 = G__11549;
n__11540 = G__11550;
continue;
}
} else
{return val__11539;
}
break;
}
});
var ci_reduce__11545 = (function (cicoll,f,val,idx){
var val__11541 = val;
var n__11542 = idx;

while(true){
if(cljs.core.truth_((n__11542 < cljs.core._count.call(null,cicoll))))
{{
var G__11551 = f.call(null,val__11541,cljs.core._nth.call(null,cicoll,n__11542));
var G__11552 = (n__11542 + 1);
val__11541 = G__11551;
n__11542 = G__11552;
continue;
}
} else
{return val__11541;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__11543.call(this,cicoll,f);
case  3 :
return ci_reduce__11544.call(this,cicoll,f,val);
case  4 :
return ci_reduce__11545.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11566 = null;
var G__11566__11567 = (function (_,f){
var this__11554 = this;
return cljs.core.ci_reduce.call(null,this__11554.a,f,(this__11554.a[this__11554.i]),(this__11554.i + 1));
});
var G__11566__11568 = (function (_,f,start){
var this__11555 = this;
return cljs.core.ci_reduce.call(null,this__11555.a,f,start,this__11555.i);
});
G__11566 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__11566__11567.call(this,_,f);
case  3 :
return G__11566__11568.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11566;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11556 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11557 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11570 = null;
var G__11570__11571 = (function (coll,n){
var this__11558 = this;
var i__11559 = (n + this__11558.i);

if(cljs.core.truth_((i__11559 < this__11558.a.length)))
{return (this__11558.a[i__11559]);
} else
{return null;
}
});
var G__11570__11572 = (function (coll,n,not_found){
var this__11560 = this;
var i__11561 = (n + this__11560.i);

if(cljs.core.truth_((i__11561 < this__11560.a.length)))
{return (this__11560.a[i__11561]);
} else
{return not_found;
}
});
G__11570 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11570__11571.call(this,coll,n);
case  3 :
return G__11570__11572.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11570;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__11562 = this;
return (this__11562.a.length - this__11562.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__11563 = this;
return (this__11563.a[this__11563.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__11564 = this;
if(cljs.core.truth_(((this__11564.i + 1) < this__11564.a.length)))
{return (new cljs.core.IndexedSeq(this__11564.a,(this__11564.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__11565 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__11574 = null;
var G__11574__11575 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11574__11576 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11574 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__11574__11575.call(this,array,f);
case  3 :
return G__11574__11576.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11574;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11578 = null;
var G__11578__11579 = (function (array,k){
return (array[k]);
});
var G__11578__11580 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11578 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__11578__11579.call(this,array,k);
case  3 :
return G__11578__11580.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11578;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11582 = null;
var G__11582__11583 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__11582__11584 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__11582 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__11582__11583.call(this,array,n);
case  3 :
return G__11582__11584.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11582;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____11586 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11586))
{var s__11587 = temp__3698__auto____11586;

return cljs.core._first.call(null,s__11587);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__11588 = cljs.core.next.call(null,s);
s = G__11588;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__11589 = cljs.core.seq.call(null,x);
var n__11590 = 0;

while(true){
if(cljs.core.truth_(s__11589))
{{
var G__11591 = cljs.core.next.call(null,s__11589);
var G__11592 = (n__11590 + 1);
s__11589 = G__11591;
n__11590 = G__11592;
continue;
}
} else
{return n__11590;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__11593 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__11594 = (function() { 
var G__11596__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11597 = conj.call(null,coll,x);
var G__11598 = cljs.core.first.call(null,xs);
var G__11599 = cljs.core.next.call(null,xs);
coll = G__11597;
x = G__11598;
xs = G__11599;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11596 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11596__delegate.call(this, coll, x, xs);
};
G__11596.cljs$lang$maxFixedArity = 2;
G__11596.cljs$lang$applyTo = (function (arglist__11600){
var coll = cljs.core.first(arglist__11600);
var x = cljs.core.first(cljs.core.next(arglist__11600));
var xs = cljs.core.rest(cljs.core.next(arglist__11600));
return G__11596__delegate.call(this, coll, x, xs);
});
return G__11596;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__11593.call(this,coll,x);
default:
return conj__11594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__11594.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__11601 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__11602 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__11601.call(this,coll,n);
case  3 :
return nth__11602.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__11604 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__11605 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__11604.call(this,o,k);
case  3 :
return get__11605.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__11608 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__11609 = (function() { 
var G__11611__delegate = function (coll,k,v,kvs){
while(true){
var ret__11607 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__11612 = ret__11607;
var G__11613 = cljs.core.first.call(null,kvs);
var G__11614 = cljs.core.second.call(null,kvs);
var G__11615 = cljs.core.nnext.call(null,kvs);
coll = G__11612;
k = G__11613;
v = G__11614;
kvs = G__11615;
continue;
}
} else
{return ret__11607;
}
break;
}
};
var G__11611 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11611__delegate.call(this, coll, k, v, kvs);
};
G__11611.cljs$lang$maxFixedArity = 3;
G__11611.cljs$lang$applyTo = (function (arglist__11616){
var coll = cljs.core.first(arglist__11616);
var k = cljs.core.first(cljs.core.next(arglist__11616));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11616)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11616)));
return G__11611__delegate.call(this, coll, k, v, kvs);
});
return G__11611;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__11608.call(this,coll,k,v);
default:
return assoc__11609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__11609.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__11618 = (function (coll){
return coll;
});
var dissoc__11619 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__11620 = (function() { 
var G__11622__delegate = function (coll,k,ks){
while(true){
var ret__11617 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11623 = ret__11617;
var G__11624 = cljs.core.first.call(null,ks);
var G__11625 = cljs.core.next.call(null,ks);
coll = G__11623;
k = G__11624;
ks = G__11625;
continue;
}
} else
{return ret__11617;
}
break;
}
};
var G__11622 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11622__delegate.call(this, coll, k, ks);
};
G__11622.cljs$lang$maxFixedArity = 2;
G__11622.cljs$lang$applyTo = (function (arglist__11626){
var coll = cljs.core.first(arglist__11626);
var k = cljs.core.first(cljs.core.next(arglist__11626));
var ks = cljs.core.rest(cljs.core.next(arglist__11626));
return G__11622__delegate.call(this, coll, k, ks);
});
return G__11622;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__11618.call(this,coll);
case  2 :
return dissoc__11619.call(this,coll,k);
default:
return dissoc__11620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__11620.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__3028__auto____11627 = o;

if(cljs.core.truth_((function (){var and__3546__auto____11628 = x__3028__auto____11627;

if(cljs.core.truth_(and__3546__auto____11628))
{var and__3546__auto____11629 = x__3028__auto____11627.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____11629))
{return cljs.core.not.call(null,x__3028__auto____11627.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____11629;
}
} else
{return and__3546__auto____11628;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____11627);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__11631 = (function (coll){
return coll;
});
var disj__11632 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__11633 = (function() { 
var G__11635__delegate = function (coll,k,ks){
while(true){
var ret__11630 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11636 = ret__11630;
var G__11637 = cljs.core.first.call(null,ks);
var G__11638 = cljs.core.next.call(null,ks);
coll = G__11636;
k = G__11637;
ks = G__11638;
continue;
}
} else
{return ret__11630;
}
break;
}
};
var G__11635 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11635__delegate.call(this, coll, k, ks);
};
G__11635.cljs$lang$maxFixedArity = 2;
G__11635.cljs$lang$applyTo = (function (arglist__11639){
var coll = cljs.core.first(arglist__11639);
var k = cljs.core.first(cljs.core.next(arglist__11639));
var ks = cljs.core.rest(cljs.core.next(arglist__11639));
return G__11635__delegate.call(this, coll, k, ks);
});
return G__11635;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__11631.call(this,coll);
case  2 :
return disj__11632.call(this,coll,k);
default:
return disj__11633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__11633.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____11640 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11641 = x__3028__auto____11640;

if(cljs.core.truth_(and__3546__auto____11641))
{var and__3546__auto____11642 = x__3028__auto____11640.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____11642))
{return cljs.core.not.call(null,x__3028__auto____11640.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____11642;
}
} else
{return and__3546__auto____11641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____11640);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____11643 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11644 = x__3028__auto____11643;

if(cljs.core.truth_(and__3546__auto____11644))
{var and__3546__auto____11645 = x__3028__auto____11643.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____11645))
{return cljs.core.not.call(null,x__3028__auto____11643.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____11645;
}
} else
{return and__3546__auto____11644;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____11643);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____11646 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11647 = x__3028__auto____11646;

if(cljs.core.truth_(and__3546__auto____11647))
{var and__3546__auto____11648 = x__3028__auto____11646.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____11648))
{return cljs.core.not.call(null,x__3028__auto____11646.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____11648;
}
} else
{return and__3546__auto____11647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____11646);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____11649 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11650 = x__3028__auto____11649;

if(cljs.core.truth_(and__3546__auto____11650))
{var and__3546__auto____11651 = x__3028__auto____11649.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____11651))
{return cljs.core.not.call(null,x__3028__auto____11649.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____11651;
}
} else
{return and__3546__auto____11650;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____11649);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____11652 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11653 = x__3028__auto____11652;

if(cljs.core.truth_(and__3546__auto____11653))
{var and__3546__auto____11654 = x__3028__auto____11652.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____11654))
{return cljs.core.not.call(null,x__3028__auto____11652.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____11654;
}
} else
{return and__3546__auto____11653;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____11652);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____11655 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11656 = x__3028__auto____11655;

if(cljs.core.truth_(and__3546__auto____11656))
{var and__3546__auto____11657 = x__3028__auto____11655.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____11657))
{return cljs.core.not.call(null,x__3028__auto____11655.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____11657;
}
} else
{return and__3546__auto____11656;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____11655);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____11658 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11659 = x__3028__auto____11658;

if(cljs.core.truth_(and__3546__auto____11659))
{var and__3546__auto____11660 = x__3028__auto____11658.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____11660))
{return cljs.core.not.call(null,x__3028__auto____11658.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____11660;
}
} else
{return and__3546__auto____11659;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____11658);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__11661 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__11661.push(key);
}));
return keys__11661;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__3028__auto____11662 = s;

if(cljs.core.truth_((function (){var and__3546__auto____11663 = x__3028__auto____11662;

if(cljs.core.truth_(and__3546__auto____11663))
{var and__3546__auto____11664 = x__3028__auto____11662.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____11664))
{return cljs.core.not.call(null,x__3028__auto____11662.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____11664;
}
} else
{return and__3546__auto____11663;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____11662);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____11665 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11665))
{return cljs.core.not.call(null,(function (){var or__3548__auto____11666 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____11666))
{return or__3548__auto____11666;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____11665;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____11667 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11667))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____11667;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____11668 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11668))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____11668;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____11669 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____11669))
{return (n == n.toFixed());
} else
{return and__3546__auto____11669;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____11670 = coll;

if(cljs.core.truth_(and__3546__auto____11670))
{var and__3546__auto____11671 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____11671))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____11671;
}
} else
{return and__3546__auto____11670;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___11676 = (function (x){
return true;
});
var distinct_QMARK___11677 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___11678 = (function() { 
var G__11680__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__11672 = cljs.core.set([y,x]);
var xs__11673 = more;

while(true){
var x__11674 = cljs.core.first.call(null,xs__11673);
var etc__11675 = cljs.core.next.call(null,xs__11673);

if(cljs.core.truth_(xs__11673))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__11672,x__11674)))
{return false;
} else
{{
var G__11681 = cljs.core.conj.call(null,s__11672,x__11674);
var G__11682 = etc__11675;
s__11672 = G__11681;
xs__11673 = G__11682;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__11680 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11680__delegate.call(this, x, y, more);
};
G__11680.cljs$lang$maxFixedArity = 2;
G__11680.cljs$lang$applyTo = (function (arglist__11683){
var x = cljs.core.first(arglist__11683);
var y = cljs.core.first(cljs.core.next(arglist__11683));
var more = cljs.core.rest(cljs.core.next(arglist__11683));
return G__11680__delegate.call(this, x, y, more);
});
return G__11680;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___11676.call(this,x);
case  2 :
return distinct_QMARK___11677.call(this,x,y);
default:
return distinct_QMARK___11678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___11678.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__11684 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__11684)))
{return r__11684;
} else
{if(cljs.core.truth_(r__11684))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__11686 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__11687 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__11685 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__11685,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11685);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__11686.call(this,comp);
case  2 :
return sort__11687.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__11689 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__11690 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__11689.call(this,keyfn,comp);
case  3 :
return sort_by__11690.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__11692 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__11693 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__11692.call(this,f,val);
case  3 :
return reduce__11693.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__11699 = (function (f,coll){
var temp__3695__auto____11695 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11695))
{var s__11696 = temp__3695__auto____11695;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11696),cljs.core.next.call(null,s__11696));
} else
{return f.call(null);
}
});
var seq_reduce__11700 = (function (f,val,coll){
var val__11697 = val;
var coll__11698 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__11698))
{{
var G__11702 = f.call(null,val__11697,cljs.core.first.call(null,coll__11698));
var G__11703 = cljs.core.next.call(null,coll__11698);
val__11697 = G__11702;
coll__11698 = G__11703;
continue;
}
} else
{return val__11697;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__11699.call(this,f,val);
case  3 :
return seq_reduce__11700.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__11704 = null;
var G__11704__11705 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__11704__11706 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__11704 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11704__11705.call(this,coll,f);
case  3 :
return G__11704__11706.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11704;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___11708 = (function (){
return 0;
});
var _PLUS___11709 = (function (x){
return x;
});
var _PLUS___11710 = (function (x,y){
return (x + y);
});
var _PLUS___11711 = (function() { 
var G__11713__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__11713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11713__delegate.call(this, x, y, more);
};
G__11713.cljs$lang$maxFixedArity = 2;
G__11713.cljs$lang$applyTo = (function (arglist__11714){
var x = cljs.core.first(arglist__11714);
var y = cljs.core.first(cljs.core.next(arglist__11714));
var more = cljs.core.rest(cljs.core.next(arglist__11714));
return G__11713__delegate.call(this, x, y, more);
});
return G__11713;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___11708.call(this);
case  1 :
return _PLUS___11709.call(this,x);
case  2 :
return _PLUS___11710.call(this,x,y);
default:
return _PLUS___11711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___11711.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___11715 = (function (x){
return (- x);
});
var ___11716 = (function (x,y){
return (x - y);
});
var ___11717 = (function() { 
var G__11719__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__11719 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11719__delegate.call(this, x, y, more);
};
G__11719.cljs$lang$maxFixedArity = 2;
G__11719.cljs$lang$applyTo = (function (arglist__11720){
var x = cljs.core.first(arglist__11720);
var y = cljs.core.first(cljs.core.next(arglist__11720));
var more = cljs.core.rest(cljs.core.next(arglist__11720));
return G__11719__delegate.call(this, x, y, more);
});
return G__11719;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___11715.call(this,x);
case  2 :
return ___11716.call(this,x,y);
default:
return ___11717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___11717.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___11721 = (function (){
return 1;
});
var _STAR___11722 = (function (x){
return x;
});
var _STAR___11723 = (function (x,y){
return (x * y);
});
var _STAR___11724 = (function() { 
var G__11726__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__11726 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11726__delegate.call(this, x, y, more);
};
G__11726.cljs$lang$maxFixedArity = 2;
G__11726.cljs$lang$applyTo = (function (arglist__11727){
var x = cljs.core.first(arglist__11727);
var y = cljs.core.first(cljs.core.next(arglist__11727));
var more = cljs.core.rest(cljs.core.next(arglist__11727));
return G__11726__delegate.call(this, x, y, more);
});
return G__11726;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___11721.call(this);
case  1 :
return _STAR___11722.call(this,x);
case  2 :
return _STAR___11723.call(this,x,y);
default:
return _STAR___11724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___11724.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___11728 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___11729 = (function (x,y){
return (x / y);
});
var _SLASH___11730 = (function() { 
var G__11732__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11732 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11732__delegate.call(this, x, y, more);
};
G__11732.cljs$lang$maxFixedArity = 2;
G__11732.cljs$lang$applyTo = (function (arglist__11733){
var x = cljs.core.first(arglist__11733);
var y = cljs.core.first(cljs.core.next(arglist__11733));
var more = cljs.core.rest(cljs.core.next(arglist__11733));
return G__11732__delegate.call(this, x, y, more);
});
return G__11732;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___11728.call(this,x);
case  2 :
return _SLASH___11729.call(this,x,y);
default:
return _SLASH___11730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___11730.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___11734 = (function (x){
return true;
});
var _LT___11735 = (function (x,y){
return (x < y);
});
var _LT___11736 = (function() { 
var G__11738__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11739 = y;
var G__11740 = cljs.core.first.call(null,more);
var G__11741 = cljs.core.next.call(null,more);
x = G__11739;
y = G__11740;
more = G__11741;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11738__delegate.call(this, x, y, more);
};
G__11738.cljs$lang$maxFixedArity = 2;
G__11738.cljs$lang$applyTo = (function (arglist__11742){
var x = cljs.core.first(arglist__11742);
var y = cljs.core.first(cljs.core.next(arglist__11742));
var more = cljs.core.rest(cljs.core.next(arglist__11742));
return G__11738__delegate.call(this, x, y, more);
});
return G__11738;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___11734.call(this,x);
case  2 :
return _LT___11735.call(this,x,y);
default:
return _LT___11736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___11736.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___11743 = (function (x){
return true;
});
var _LT__EQ___11744 = (function (x,y){
return (x <= y);
});
var _LT__EQ___11745 = (function() { 
var G__11747__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11748 = y;
var G__11749 = cljs.core.first.call(null,more);
var G__11750 = cljs.core.next.call(null,more);
x = G__11748;
y = G__11749;
more = G__11750;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11747 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11747__delegate.call(this, x, y, more);
};
G__11747.cljs$lang$maxFixedArity = 2;
G__11747.cljs$lang$applyTo = (function (arglist__11751){
var x = cljs.core.first(arglist__11751);
var y = cljs.core.first(cljs.core.next(arglist__11751));
var more = cljs.core.rest(cljs.core.next(arglist__11751));
return G__11747__delegate.call(this, x, y, more);
});
return G__11747;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___11743.call(this,x);
case  2 :
return _LT__EQ___11744.call(this,x,y);
default:
return _LT__EQ___11745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___11745.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___11752 = (function (x){
return true;
});
var _GT___11753 = (function (x,y){
return (x > y);
});
var _GT___11754 = (function() { 
var G__11756__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11757 = y;
var G__11758 = cljs.core.first.call(null,more);
var G__11759 = cljs.core.next.call(null,more);
x = G__11757;
y = G__11758;
more = G__11759;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11756 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11756__delegate.call(this, x, y, more);
};
G__11756.cljs$lang$maxFixedArity = 2;
G__11756.cljs$lang$applyTo = (function (arglist__11760){
var x = cljs.core.first(arglist__11760);
var y = cljs.core.first(cljs.core.next(arglist__11760));
var more = cljs.core.rest(cljs.core.next(arglist__11760));
return G__11756__delegate.call(this, x, y, more);
});
return G__11756;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___11752.call(this,x);
case  2 :
return _GT___11753.call(this,x,y);
default:
return _GT___11754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___11754.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___11761 = (function (x){
return true;
});
var _GT__EQ___11762 = (function (x,y){
return (x >= y);
});
var _GT__EQ___11763 = (function() { 
var G__11765__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11766 = y;
var G__11767 = cljs.core.first.call(null,more);
var G__11768 = cljs.core.next.call(null,more);
x = G__11766;
y = G__11767;
more = G__11768;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11765__delegate.call(this, x, y, more);
};
G__11765.cljs$lang$maxFixedArity = 2;
G__11765.cljs$lang$applyTo = (function (arglist__11769){
var x = cljs.core.first(arglist__11769);
var y = cljs.core.first(cljs.core.next(arglist__11769));
var more = cljs.core.rest(cljs.core.next(arglist__11769));
return G__11765__delegate.call(this, x, y, more);
});
return G__11765;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___11761.call(this,x);
case  2 :
return _GT__EQ___11762.call(this,x,y);
default:
return _GT__EQ___11763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___11763.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__11770 = (function (x){
return x;
});
var max__11771 = (function (x,y){
return ((x > y) ? x : y);
});
var max__11772 = (function() { 
var G__11774__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__11774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11774__delegate.call(this, x, y, more);
};
G__11774.cljs$lang$maxFixedArity = 2;
G__11774.cljs$lang$applyTo = (function (arglist__11775){
var x = cljs.core.first(arglist__11775);
var y = cljs.core.first(cljs.core.next(arglist__11775));
var more = cljs.core.rest(cljs.core.next(arglist__11775));
return G__11774__delegate.call(this, x, y, more);
});
return G__11774;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__11770.call(this,x);
case  2 :
return max__11771.call(this,x,y);
default:
return max__11772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__11772.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__11776 = (function (x){
return x;
});
var min__11777 = (function (x,y){
return ((x < y) ? x : y);
});
var min__11778 = (function() { 
var G__11780__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__11780 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11780__delegate.call(this, x, y, more);
};
G__11780.cljs$lang$maxFixedArity = 2;
G__11780.cljs$lang$applyTo = (function (arglist__11781){
var x = cljs.core.first(arglist__11781);
var y = cljs.core.first(cljs.core.next(arglist__11781));
var more = cljs.core.rest(cljs.core.next(arglist__11781));
return G__11780__delegate.call(this, x, y, more);
});
return G__11780;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__11776.call(this,x);
case  2 :
return min__11777.call(this,x,y);
default:
return min__11778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__11778.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__11782 = (n % d);

return cljs.core.fix.call(null,((n - rem__11782) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11783 = cljs.core.quot.call(null,n,d);

return (n - (d * q__11783));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__11784 = (function (){
return Math.random.call(null);
});
var rand__11785 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__11784.call(this);
case  1 :
return rand__11785.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___11787 = (function (x){
return true;
});
var _EQ__EQ___11788 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___11789 = (function() { 
var G__11791__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11792 = y;
var G__11793 = cljs.core.first.call(null,more);
var G__11794 = cljs.core.next.call(null,more);
x = G__11792;
y = G__11793;
more = G__11794;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11791 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11791__delegate.call(this, x, y, more);
};
G__11791.cljs$lang$maxFixedArity = 2;
G__11791.cljs$lang$applyTo = (function (arglist__11795){
var x = cljs.core.first(arglist__11795);
var y = cljs.core.first(cljs.core.next(arglist__11795));
var more = cljs.core.rest(cljs.core.next(arglist__11795));
return G__11791__delegate.call(this, x, y, more);
});
return G__11791;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___11787.call(this,x);
case  2 :
return _EQ__EQ___11788.call(this,x,y);
default:
return _EQ__EQ___11789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___11789.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__11796 = n;
var xs__11797 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11798 = xs__11797;

if(cljs.core.truth_(and__3546__auto____11798))
{return (n__11796 > 0);
} else
{return and__3546__auto____11798;
}
})()))
{{
var G__11799 = (n__11796 - 1);
var G__11800 = cljs.core.next.call(null,xs__11797);
n__11796 = G__11799;
xs__11797 = G__11800;
continue;
}
} else
{return xs__11797;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__11805 = null;
var G__11805__11806 = (function (coll,n){
var temp__3695__auto____11801 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____11801))
{var xs__11802 = temp__3695__auto____11801;

return cljs.core.first.call(null,xs__11802);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__11805__11807 = (function (coll,n,not_found){
var temp__3695__auto____11803 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____11803))
{var xs__11804 = temp__3695__auto____11803;

return cljs.core.first.call(null,xs__11804);
} else
{return not_found;
}
});
G__11805 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11805__11806.call(this,coll,n);
case  3 :
return G__11805__11807.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11805;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___11809 = (function (){
return "";
});
var str_STAR___11810 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___11811 = (function() { 
var G__11813__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11814 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__11815 = cljs.core.next.call(null,more);
sb = G__11814;
more = G__11815;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__11813 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11813__delegate.call(this, x, ys);
};
G__11813.cljs$lang$maxFixedArity = 1;
G__11813.cljs$lang$applyTo = (function (arglist__11816){
var x = cljs.core.first(arglist__11816);
var ys = cljs.core.rest(arglist__11816);
return G__11813__delegate.call(this, x, ys);
});
return G__11813;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___11809.call(this);
case  1 :
return str_STAR___11810.call(this,x);
default:
return str_STAR___11811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___11811.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__11817 = (function (){
return "";
});
var str__11818 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__11819 = (function() { 
var G__11821__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11822 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__11823 = cljs.core.next.call(null,more);
sb = G__11822;
more = G__11823;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__11821 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11821__delegate.call(this, x, ys);
};
G__11821.cljs$lang$maxFixedArity = 1;
G__11821.cljs$lang$applyTo = (function (arglist__11824){
var x = cljs.core.first(arglist__11824);
var ys = cljs.core.rest(arglist__11824);
return G__11821__delegate.call(this, x, ys);
});
return G__11821;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__11817.call(this);
case  1 :
return str__11818.call(this,x);
default:
return str__11819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__11819.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__11825 = (function (s,start){
return s.substring(start);
});
var subs__11826 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__11825.call(this,s,start);
case  3 :
return subs__11826.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__11828 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__11829 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__11828.call(this,ns);
case  2 :
return symbol__11829.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__11831 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__11832 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__11831.call(this,ns);
case  2 :
return keyword__11832.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__11834 = cljs.core.seq.call(null,x);
var ys__11835 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__11834 === null)))
{return (ys__11835 === null);
} else
{if(cljs.core.truth_((ys__11835 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__11834),cljs.core.first.call(null,ys__11835))))
{{
var G__11836 = cljs.core.next.call(null,xs__11834);
var G__11837 = cljs.core.next.call(null,ys__11835);
xs__11834 = G__11836;
ys__11835 = G__11837;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__11838_SHARP_,p2__11839_SHARP_){
return cljs.core.hash_combine.call(null,p1__11838_SHARP_,cljs.core.hash.call(null,p2__11839_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__11840__11841 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__11840__11841))
{var G__11843__11845 = cljs.core.first.call(null,G__11840__11841);
var vec__11844__11846 = G__11843__11845;
var key_name__11847 = cljs.core.nth.call(null,vec__11844__11846,0,null);
var f__11848 = cljs.core.nth.call(null,vec__11844__11846,1,null);
var G__11840__11849 = G__11840__11841;

var G__11843__11850 = G__11843__11845;
var G__11840__11851 = G__11840__11849;

while(true){
var vec__11852__11853 = G__11843__11850;
var key_name__11854 = cljs.core.nth.call(null,vec__11852__11853,0,null);
var f__11855 = cljs.core.nth.call(null,vec__11852__11853,1,null);
var G__11840__11856 = G__11840__11851;

var str_name__11857 = cljs.core.name.call(null,key_name__11854);

obj[str_name__11857] = f__11855;
var temp__3698__auto____11858 = cljs.core.next.call(null,G__11840__11856);

if(cljs.core.truth_(temp__3698__auto____11858))
{var G__11840__11859 = temp__3698__auto____11858;

{
var G__11860 = cljs.core.first.call(null,G__11840__11859);
var G__11861 = G__11840__11859;
G__11843__11850 = G__11860;
G__11840__11851 = G__11861;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11862 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11863 = this;
return (new cljs.core.List(this__11863.meta,o,coll,(this__11863.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11864 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11865 = this;
return this__11865.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11866 = this;
return this__11866.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11867 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11868 = this;
return this__11868.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11869 = this;
return this__11869.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11870 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11871 = this;
return (new cljs.core.List(meta,this__11871.first,this__11871.rest,this__11871.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11872 = this;
return this__11872.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11873 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11874 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11875 = this;
return (new cljs.core.List(this__11875.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11876 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11877 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11878 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11879 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11880 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11881 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11882 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11883 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11884 = this;
return this__11884.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11885 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__11886){
var items = cljs.core.seq( arglist__11886 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11887 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11888 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11889 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11890 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11890.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11891 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11892 = this;
return this__11892.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11893 = this;
if(cljs.core.truth_((this__11893.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__11893.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11894 = this;
return this__11894.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11895 = this;
return (new cljs.core.Cons(meta,this__11895.first,this__11895.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__11896 = null;
var G__11896__11897 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__11896__11898 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__11896 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__11896__11897.call(this,string,f);
case  3 :
return G__11896__11898.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11896;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__11900 = null;
var G__11900__11901 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__11900__11902 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__11900 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__11900__11901.call(this,string,k);
case  3 :
return G__11900__11902.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11900;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__11904 = null;
var G__11904__11905 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__11904__11906 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__11904 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__11904__11905.call(this,string,n);
case  3 :
return G__11904__11906.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11904;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__11914 = null;
var G__11914__11915 = (function (tsym11908,coll){
var tsym11908__11910 = this;

var this$__11911 = tsym11908__11910;

return cljs.core.get.call(null,coll,this$__11911.toString());
});
var G__11914__11916 = (function (tsym11909,coll,not_found){
var tsym11909__11912 = this;

var this$__11913 = tsym11909__11912;

return cljs.core.get.call(null,coll,this$__11913.toString(),not_found);
});
G__11914 = function(tsym11909,coll,not_found){
switch(arguments.length){
case  2 :
return G__11914__11915.call(this,tsym11909,coll);
case  3 :
return G__11914__11916.call(this,tsym11909,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11914;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__11918 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__11918;
} else
{lazy_seq.x = x__11918.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11919 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11921 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11922.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11923 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11924 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11925 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11926 = this;
return this__11926.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11927 = this;
return (new cljs.core.LazySeq(meta,this__11927.realized,this__11927.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__11928 = [];

var s__11929 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__11929)))
{ary__11928.push(cljs.core.first.call(null,s__11929));
{
var G__11930 = cljs.core.next.call(null,s__11929);
s__11929 = G__11930;
continue;
}
} else
{return ary__11928;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__11931 = s;
var i__11932 = n;
var sum__11933 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11934 = (i__11932 > 0);

if(cljs.core.truth_(and__3546__auto____11934))
{return cljs.core.seq.call(null,s__11931);
} else
{return and__3546__auto____11934;
}
})()))
{{
var G__11935 = cljs.core.next.call(null,s__11931);
var G__11936 = (i__11932 - 1);
var G__11937 = (sum__11933 + 1);
s__11931 = G__11935;
i__11932 = G__11936;
sum__11933 = G__11937;
continue;
}
} else
{return sum__11933;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__11941 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__11942 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__11943 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11938 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__11938))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11938),concat.call(null,cljs.core.rest.call(null,s__11938),y));
} else
{return y;
}
})));
});
var concat__11944 = (function() { 
var G__11946__delegate = function (x,y,zs){
var cat__11940 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__11939 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__11939))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__11939),cat.call(null,cljs.core.rest.call(null,xys__11939),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__11940.call(null,concat.call(null,x,y),zs);
};
var G__11946 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11946__delegate.call(this, x, y, zs);
};
G__11946.cljs$lang$maxFixedArity = 2;
G__11946.cljs$lang$applyTo = (function (arglist__11947){
var x = cljs.core.first(arglist__11947);
var y = cljs.core.first(cljs.core.next(arglist__11947));
var zs = cljs.core.rest(cljs.core.next(arglist__11947));
return G__11946__delegate.call(this, x, y, zs);
});
return G__11946;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__11941.call(this);
case  1 :
return concat__11942.call(this,x);
case  2 :
return concat__11943.call(this,x,y);
default:
return concat__11944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__11944.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___11948 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___11949 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___11950 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___11951 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___11952 = (function() { 
var G__11954__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__11954 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11954__delegate.call(this, a, b, c, d, more);
};
G__11954.cljs$lang$maxFixedArity = 4;
G__11954.cljs$lang$applyTo = (function (arglist__11955){
var a = cljs.core.first(arglist__11955);
var b = cljs.core.first(cljs.core.next(arglist__11955));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11955)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11955))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11955))));
return G__11954__delegate.call(this, a, b, c, d, more);
});
return G__11954;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___11948.call(this,a);
case  2 :
return list_STAR___11949.call(this,a,b);
case  3 :
return list_STAR___11950.call(this,a,b,c);
case  4 :
return list_STAR___11951.call(this,a,b,c,d);
default:
return list_STAR___11952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___11952.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__11965 = (function (f,args){
var fixed_arity__11956 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__11956 + 1)) <= fixed_arity__11956)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__11966 = (function (f,x,args){
var arglist__11957 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__11958 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__11957,fixed_arity__11958) <= fixed_arity__11958)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__11957));
} else
{return f.cljs$lang$applyTo(arglist__11957);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11957));
}
});
var apply__11967 = (function (f,x,y,args){
var arglist__11959 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__11960 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__11959,fixed_arity__11960) <= fixed_arity__11960)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__11959));
} else
{return f.cljs$lang$applyTo(arglist__11959);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11959));
}
});
var apply__11968 = (function (f,x,y,z,args){
var arglist__11961 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__11962 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__11961,fixed_arity__11962) <= fixed_arity__11962)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__11961));
} else
{return f.cljs$lang$applyTo(arglist__11961);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11961));
}
});
var apply__11969 = (function() { 
var G__11971__delegate = function (f,a,b,c,d,args){
var arglist__11963 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__11964 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__11963,fixed_arity__11964) <= fixed_arity__11964)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__11963));
} else
{return f.cljs$lang$applyTo(arglist__11963);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11963));
}
};
var G__11971 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11971__delegate.call(this, f, a, b, c, d, args);
};
G__11971.cljs$lang$maxFixedArity = 5;
G__11971.cljs$lang$applyTo = (function (arglist__11972){
var f = cljs.core.first(arglist__11972);
var a = cljs.core.first(cljs.core.next(arglist__11972));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11972)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11972))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11972)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11972)))));
return G__11971__delegate.call(this, f, a, b, c, d, args);
});
return G__11971;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__11965.call(this,f,a);
case  3 :
return apply__11966.call(this,f,a,b);
case  4 :
return apply__11967.call(this,f,a,b,c);
case  5 :
return apply__11968.call(this,f,a,b,c,d);
default:
return apply__11969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__11969.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__11973){
var obj = cljs.core.first(arglist__11973);
var f = cljs.core.first(cljs.core.next(arglist__11973));
var args = cljs.core.rest(cljs.core.next(arglist__11973));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___11974 = (function (x){
return false;
});
var not_EQ___11975 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___11976 = (function() { 
var G__11978__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__11978 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11978__delegate.call(this, x, y, more);
};
G__11978.cljs$lang$maxFixedArity = 2;
G__11978.cljs$lang$applyTo = (function (arglist__11979){
var x = cljs.core.first(arglist__11979);
var y = cljs.core.first(cljs.core.next(arglist__11979));
var more = cljs.core.rest(cljs.core.next(arglist__11979));
return G__11978__delegate.call(this, x, y, more);
});
return G__11978;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___11974.call(this,x);
case  2 :
return not_EQ___11975.call(this,x,y);
default:
return not_EQ___11976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___11976.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__11980 = pred;
var G__11981 = cljs.core.next.call(null,coll);
pred = G__11980;
coll = G__11981;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____11982 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____11982))
{return or__3548__auto____11982;
} else
{{
var G__11983 = pred;
var G__11984 = cljs.core.next.call(null,coll);
pred = G__11983;
coll = G__11984;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__11985 = null;
var G__11985__11986 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11985__11987 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11985__11988 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11985__11989 = (function() { 
var G__11991__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11991 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11991__delegate.call(this, x, y, zs);
};
G__11991.cljs$lang$maxFixedArity = 2;
G__11991.cljs$lang$applyTo = (function (arglist__11992){
var x = cljs.core.first(arglist__11992);
var y = cljs.core.first(cljs.core.next(arglist__11992));
var zs = cljs.core.rest(cljs.core.next(arglist__11992));
return G__11991__delegate.call(this, x, y, zs);
});
return G__11991;
})()
;
G__11985 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__11985__11986.call(this);
case  1 :
return G__11985__11987.call(this,x);
case  2 :
return G__11985__11988.call(this,x,y);
default:
return G__11985__11989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11985.cljs$lang$maxFixedArity = 2;
G__11985.cljs$lang$applyTo = G__11985__11989.cljs$lang$applyTo;
return G__11985;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11993__delegate = function (args){
return x;
};
var G__11993 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11993__delegate.call(this, args);
};
G__11993.cljs$lang$maxFixedArity = 0;
G__11993.cljs$lang$applyTo = (function (arglist__11994){
var args = cljs.core.seq( arglist__11994 );;
return G__11993__delegate.call(this, args);
});
return G__11993;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__11998 = (function (){
return cljs.core.identity;
});
var comp__11999 = (function (f){
return f;
});
var comp__12000 = (function (f,g){
return (function() {
var G__12004 = null;
var G__12004__12005 = (function (){
return f.call(null,g.call(null));
});
var G__12004__12006 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12004__12007 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12004__12008 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12004__12009 = (function() { 
var G__12011__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12011__delegate.call(this, x, y, z, args);
};
G__12011.cljs$lang$maxFixedArity = 3;
G__12011.cljs$lang$applyTo = (function (arglist__12012){
var x = cljs.core.first(arglist__12012);
var y = cljs.core.first(cljs.core.next(arglist__12012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12012)));
return G__12011__delegate.call(this, x, y, z, args);
});
return G__12011;
})()
;
G__12004 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12004__12005.call(this);
case  1 :
return G__12004__12006.call(this,x);
case  2 :
return G__12004__12007.call(this,x,y);
case  3 :
return G__12004__12008.call(this,x,y,z);
default:
return G__12004__12009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12004.cljs$lang$maxFixedArity = 3;
G__12004.cljs$lang$applyTo = G__12004__12009.cljs$lang$applyTo;
return G__12004;
})()
});
var comp__12001 = (function (f,g,h){
return (function() {
var G__12013 = null;
var G__12013__12014 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12013__12015 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12013__12016 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12013__12017 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12013__12018 = (function() { 
var G__12020__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12020__delegate.call(this, x, y, z, args);
};
G__12020.cljs$lang$maxFixedArity = 3;
G__12020.cljs$lang$applyTo = (function (arglist__12021){
var x = cljs.core.first(arglist__12021);
var y = cljs.core.first(cljs.core.next(arglist__12021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12021)));
return G__12020__delegate.call(this, x, y, z, args);
});
return G__12020;
})()
;
G__12013 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12013__12014.call(this);
case  1 :
return G__12013__12015.call(this,x);
case  2 :
return G__12013__12016.call(this,x,y);
case  3 :
return G__12013__12017.call(this,x,y,z);
default:
return G__12013__12018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12013.cljs$lang$maxFixedArity = 3;
G__12013.cljs$lang$applyTo = G__12013__12018.cljs$lang$applyTo;
return G__12013;
})()
});
var comp__12002 = (function() { 
var G__12022__delegate = function (f1,f2,f3,fs){
var fs__11995 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__12023__delegate = function (args){
var ret__11996 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11995),args);
var fs__11997 = cljs.core.next.call(null,fs__11995);

while(true){
if(cljs.core.truth_(fs__11997))
{{
var G__12024 = cljs.core.first.call(null,fs__11997).call(null,ret__11996);
var G__12025 = cljs.core.next.call(null,fs__11997);
ret__11996 = G__12024;
fs__11997 = G__12025;
continue;
}
} else
{return ret__11996;
}
break;
}
};
var G__12023 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12023__delegate.call(this, args);
};
G__12023.cljs$lang$maxFixedArity = 0;
G__12023.cljs$lang$applyTo = (function (arglist__12026){
var args = cljs.core.seq( arglist__12026 );;
return G__12023__delegate.call(this, args);
});
return G__12023;
})()
;
};
var G__12022 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12022__delegate.call(this, f1, f2, f3, fs);
};
G__12022.cljs$lang$maxFixedArity = 3;
G__12022.cljs$lang$applyTo = (function (arglist__12027){
var f1 = cljs.core.first(arglist__12027);
var f2 = cljs.core.first(cljs.core.next(arglist__12027));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12027)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12027)));
return G__12022__delegate.call(this, f1, f2, f3, fs);
});
return G__12022;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__11998.call(this);
case  1 :
return comp__11999.call(this,f1);
case  2 :
return comp__12000.call(this,f1,f2);
case  3 :
return comp__12001.call(this,f1,f2,f3);
default:
return comp__12002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__12002.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__12028 = (function (f,arg1){
return (function() { 
var G__12033__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12033 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12033__delegate.call(this, args);
};
G__12033.cljs$lang$maxFixedArity = 0;
G__12033.cljs$lang$applyTo = (function (arglist__12034){
var args = cljs.core.seq( arglist__12034 );;
return G__12033__delegate.call(this, args);
});
return G__12033;
})()
;
});
var partial__12029 = (function (f,arg1,arg2){
return (function() { 
var G__12035__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12035 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12035__delegate.call(this, args);
};
G__12035.cljs$lang$maxFixedArity = 0;
G__12035.cljs$lang$applyTo = (function (arglist__12036){
var args = cljs.core.seq( arglist__12036 );;
return G__12035__delegate.call(this, args);
});
return G__12035;
})()
;
});
var partial__12030 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12037__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12037__delegate.call(this, args);
};
G__12037.cljs$lang$maxFixedArity = 0;
G__12037.cljs$lang$applyTo = (function (arglist__12038){
var args = cljs.core.seq( arglist__12038 );;
return G__12037__delegate.call(this, args);
});
return G__12037;
})()
;
});
var partial__12031 = (function() { 
var G__12039__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12040__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12040 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12040__delegate.call(this, args);
};
G__12040.cljs$lang$maxFixedArity = 0;
G__12040.cljs$lang$applyTo = (function (arglist__12041){
var args = cljs.core.seq( arglist__12041 );;
return G__12040__delegate.call(this, args);
});
return G__12040;
})()
;
};
var G__12039 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12039__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12039.cljs$lang$maxFixedArity = 4;
G__12039.cljs$lang$applyTo = (function (arglist__12042){
var f = cljs.core.first(arglist__12042);
var arg1 = cljs.core.first(cljs.core.next(arglist__12042));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12042)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12042))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12042))));
return G__12039__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__12039;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__12028.call(this,f,arg1);
case  3 :
return partial__12029.call(this,f,arg1,arg2);
case  4 :
return partial__12030.call(this,f,arg1,arg2,arg3);
default:
return partial__12031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__12031.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__12043 = (function (f,x){
return (function() {
var G__12047 = null;
var G__12047__12048 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__12047__12049 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__12047__12050 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__12047__12051 = (function() { 
var G__12053__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__12053 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12053__delegate.call(this, a, b, c, ds);
};
G__12053.cljs$lang$maxFixedArity = 3;
G__12053.cljs$lang$applyTo = (function (arglist__12054){
var a = cljs.core.first(arglist__12054);
var b = cljs.core.first(cljs.core.next(arglist__12054));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12054)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12054)));
return G__12053__delegate.call(this, a, b, c, ds);
});
return G__12053;
})()
;
G__12047 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__12047__12048.call(this,a);
case  2 :
return G__12047__12049.call(this,a,b);
case  3 :
return G__12047__12050.call(this,a,b,c);
default:
return G__12047__12051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12047.cljs$lang$maxFixedArity = 3;
G__12047.cljs$lang$applyTo = G__12047__12051.cljs$lang$applyTo;
return G__12047;
})()
});
var fnil__12044 = (function (f,x,y){
return (function() {
var G__12055 = null;
var G__12055__12056 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__12055__12057 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__12055__12058 = (function() { 
var G__12060__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__12060 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12060__delegate.call(this, a, b, c, ds);
};
G__12060.cljs$lang$maxFixedArity = 3;
G__12060.cljs$lang$applyTo = (function (arglist__12061){
var a = cljs.core.first(arglist__12061);
var b = cljs.core.first(cljs.core.next(arglist__12061));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12061)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12061)));
return G__12060__delegate.call(this, a, b, c, ds);
});
return G__12060;
})()
;
G__12055 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12055__12056.call(this,a,b);
case  3 :
return G__12055__12057.call(this,a,b,c);
default:
return G__12055__12058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12055.cljs$lang$maxFixedArity = 3;
G__12055.cljs$lang$applyTo = G__12055__12058.cljs$lang$applyTo;
return G__12055;
})()
});
var fnil__12045 = (function (f,x,y,z){
return (function() {
var G__12062 = null;
var G__12062__12063 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__12062__12064 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__12062__12065 = (function() { 
var G__12067__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__12067 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12067__delegate.call(this, a, b, c, ds);
};
G__12067.cljs$lang$maxFixedArity = 3;
G__12067.cljs$lang$applyTo = (function (arglist__12068){
var a = cljs.core.first(arglist__12068);
var b = cljs.core.first(cljs.core.next(arglist__12068));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12068)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12068)));
return G__12067__delegate.call(this, a, b, c, ds);
});
return G__12067;
})()
;
G__12062 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12062__12063.call(this,a,b);
case  3 :
return G__12062__12064.call(this,a,b,c);
default:
return G__12062__12065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12062.cljs$lang$maxFixedArity = 3;
G__12062.cljs$lang$applyTo = G__12062__12065.cljs$lang$applyTo;
return G__12062;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__12043.call(this,f,x);
case  3 :
return fnil__12044.call(this,f,x,y);
case  4 :
return fnil__12045.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__12071 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12069 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12069))
{var s__12070 = temp__3698__auto____12069;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12070)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12070)));
} else
{return null;
}
})));
});

return mapi__12071.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12072))
{var s__12073 = temp__3698__auto____12072;

var x__12074 = f.call(null,cljs.core.first.call(null,s__12073));

if(cljs.core.truth_((x__12074 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__12073));
} else
{return cljs.core.cons.call(null,x__12074,keep.call(null,f,cljs.core.rest.call(null,s__12073)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__12084 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12081))
{var s__12082 = temp__3698__auto____12081;

var x__12083 = f.call(null,idx,cljs.core.first.call(null,s__12082));

if(cljs.core.truth_((x__12083 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12082));
} else
{return cljs.core.cons.call(null,x__12083,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12082)));
}
} else
{return null;
}
})));
});

return keepi__12084.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__12129 = (function (p){
return (function() {
var ep1 = null;
var ep1__12134 = (function (){
return true;
});
var ep1__12135 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__12136 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12091 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____12091))
{return p.call(null,y);
} else
{return and__3546__auto____12091;
}
})());
});
var ep1__12137 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12092 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____12092))
{var and__3546__auto____12093 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____12093))
{return p.call(null,z);
} else
{return and__3546__auto____12093;
}
} else
{return and__3546__auto____12092;
}
})());
});
var ep1__12138 = (function() { 
var G__12140__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12094 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12094))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____12094;
}
})());
};
var G__12140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12140__delegate.call(this, x, y, z, args);
};
G__12140.cljs$lang$maxFixedArity = 3;
G__12140.cljs$lang$applyTo = (function (arglist__12141){
var x = cljs.core.first(arglist__12141);
var y = cljs.core.first(cljs.core.next(arglist__12141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12141)));
return G__12140__delegate.call(this, x, y, z, args);
});
return G__12140;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__12134.call(this);
case  1 :
return ep1__12135.call(this,x);
case  2 :
return ep1__12136.call(this,x,y);
case  3 :
return ep1__12137.call(this,x,y,z);
default:
return ep1__12138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__12138.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__12130 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__12142 = (function (){
return true;
});
var ep2__12143 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12095 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12095))
{return p2.call(null,x);
} else
{return and__3546__auto____12095;
}
})());
});
var ep2__12144 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12096 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12096))
{var and__3546__auto____12097 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12097))
{var and__3546__auto____12098 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12098))
{return p2.call(null,y);
} else
{return and__3546__auto____12098;
}
} else
{return and__3546__auto____12097;
}
} else
{return and__3546__auto____12096;
}
})());
});
var ep2__12145 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12099 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12099))
{var and__3546__auto____12100 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12100))
{var and__3546__auto____12101 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____12101))
{var and__3546__auto____12102 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12102))
{var and__3546__auto____12103 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12103))
{return p2.call(null,z);
} else
{return and__3546__auto____12103;
}
} else
{return and__3546__auto____12102;
}
} else
{return and__3546__auto____12101;
}
} else
{return and__3546__auto____12100;
}
} else
{return and__3546__auto____12099;
}
})());
});
var ep2__12146 = (function() { 
var G__12148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12104 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12104))
{return cljs.core.every_QMARK_.call(null,(function (p1__12075_SHARP_){
var and__3546__auto____12105 = p1.call(null,p1__12075_SHARP_);

if(cljs.core.truth_(and__3546__auto____12105))
{return p2.call(null,p1__12075_SHARP_);
} else
{return and__3546__auto____12105;
}
}),args);
} else
{return and__3546__auto____12104;
}
})());
};
var G__12148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12148__delegate.call(this, x, y, z, args);
};
G__12148.cljs$lang$maxFixedArity = 3;
G__12148.cljs$lang$applyTo = (function (arglist__12149){
var x = cljs.core.first(arglist__12149);
var y = cljs.core.first(cljs.core.next(arglist__12149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12149)));
return G__12148__delegate.call(this, x, y, z, args);
});
return G__12148;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__12142.call(this);
case  1 :
return ep2__12143.call(this,x);
case  2 :
return ep2__12144.call(this,x,y);
case  3 :
return ep2__12145.call(this,x,y,z);
default:
return ep2__12146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__12146.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__12131 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__12150 = (function (){
return true;
});
var ep3__12151 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12106 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12106))
{var and__3546__auto____12107 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12107))
{return p3.call(null,x);
} else
{return and__3546__auto____12107;
}
} else
{return and__3546__auto____12106;
}
})());
});
var ep3__12152 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12108 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12108))
{var and__3546__auto____12109 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12109))
{var and__3546__auto____12110 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____12110))
{var and__3546__auto____12111 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12111))
{var and__3546__auto____12112 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12112))
{return p3.call(null,y);
} else
{return and__3546__auto____12112;
}
} else
{return and__3546__auto____12111;
}
} else
{return and__3546__auto____12110;
}
} else
{return and__3546__auto____12109;
}
} else
{return and__3546__auto____12108;
}
})());
});
var ep3__12153 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12113 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12113))
{var and__3546__auto____12114 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12114))
{var and__3546__auto____12115 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____12115))
{var and__3546__auto____12116 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12116))
{var and__3546__auto____12117 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12117))
{var and__3546__auto____12118 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____12118))
{var and__3546__auto____12119 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____12119))
{var and__3546__auto____12120 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____12120))
{return p3.call(null,z);
} else
{return and__3546__auto____12120;
}
} else
{return and__3546__auto____12119;
}
} else
{return and__3546__auto____12118;
}
} else
{return and__3546__auto____12117;
}
} else
{return and__3546__auto____12116;
}
} else
{return and__3546__auto____12115;
}
} else
{return and__3546__auto____12114;
}
} else
{return and__3546__auto____12113;
}
})());
});
var ep3__12154 = (function() { 
var G__12156__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12121 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12121))
{return cljs.core.every_QMARK_.call(null,(function (p1__12076_SHARP_){
var and__3546__auto____12122 = p1.call(null,p1__12076_SHARP_);

if(cljs.core.truth_(and__3546__auto____12122))
{var and__3546__auto____12123 = p2.call(null,p1__12076_SHARP_);

if(cljs.core.truth_(and__3546__auto____12123))
{return p3.call(null,p1__12076_SHARP_);
} else
{return and__3546__auto____12123;
}
} else
{return and__3546__auto____12122;
}
}),args);
} else
{return and__3546__auto____12121;
}
})());
};
var G__12156 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12156__delegate.call(this, x, y, z, args);
};
G__12156.cljs$lang$maxFixedArity = 3;
G__12156.cljs$lang$applyTo = (function (arglist__12157){
var x = cljs.core.first(arglist__12157);
var y = cljs.core.first(cljs.core.next(arglist__12157));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12157)));
return G__12156__delegate.call(this, x, y, z, args);
});
return G__12156;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__12150.call(this);
case  1 :
return ep3__12151.call(this,x);
case  2 :
return ep3__12152.call(this,x,y);
case  3 :
return ep3__12153.call(this,x,y,z);
default:
return ep3__12154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__12154.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__12132 = (function() { 
var G__12158__delegate = function (p1,p2,p3,ps){
var ps__12124 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__12159 = (function (){
return true;
});
var epn__12160 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12077_SHARP_){
return p1__12077_SHARP_.call(null,x);
}),ps__12124);
});
var epn__12161 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12078_SHARP_){
var and__3546__auto____12125 = p1__12078_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____12125))
{return p1__12078_SHARP_.call(null,y);
} else
{return and__3546__auto____12125;
}
}),ps__12124);
});
var epn__12162 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12079_SHARP_){
var and__3546__auto____12126 = p1__12079_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____12126))
{var and__3546__auto____12127 = p1__12079_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____12127))
{return p1__12079_SHARP_.call(null,z);
} else
{return and__3546__auto____12127;
}
} else
{return and__3546__auto____12126;
}
}),ps__12124);
});
var epn__12163 = (function() { 
var G__12165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12128 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12128))
{return cljs.core.every_QMARK_.call(null,(function (p1__12080_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12080_SHARP_,args);
}),ps__12124);
} else
{return and__3546__auto____12128;
}
})());
};
var G__12165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12165__delegate.call(this, x, y, z, args);
};
G__12165.cljs$lang$maxFixedArity = 3;
G__12165.cljs$lang$applyTo = (function (arglist__12166){
var x = cljs.core.first(arglist__12166);
var y = cljs.core.first(cljs.core.next(arglist__12166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12166)));
return G__12165__delegate.call(this, x, y, z, args);
});
return G__12165;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__12159.call(this);
case  1 :
return epn__12160.call(this,x);
case  2 :
return epn__12161.call(this,x,y);
case  3 :
return epn__12162.call(this,x,y,z);
default:
return epn__12163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__12163.cljs$lang$applyTo;
return epn;
})()
};
var G__12158 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12158__delegate.call(this, p1, p2, p3, ps);
};
G__12158.cljs$lang$maxFixedArity = 3;
G__12158.cljs$lang$applyTo = (function (arglist__12167){
var p1 = cljs.core.first(arglist__12167);
var p2 = cljs.core.first(cljs.core.next(arglist__12167));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12167)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12167)));
return G__12158__delegate.call(this, p1, p2, p3, ps);
});
return G__12158;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__12129.call(this,p1);
case  2 :
return every_pred__12130.call(this,p1,p2);
case  3 :
return every_pred__12131.call(this,p1,p2,p3);
default:
return every_pred__12132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__12132.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__12207 = (function (p){
return (function() {
var sp1 = null;
var sp1__12212 = (function (){
return null;
});
var sp1__12213 = (function (x){
return p.call(null,x);
});
var sp1__12214 = (function (x,y){
var or__3548__auto____12169 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12169))
{return or__3548__auto____12169;
} else
{return p.call(null,y);
}
});
var sp1__12215 = (function (x,y,z){
var or__3548__auto____12170 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12170))
{return or__3548__auto____12170;
} else
{var or__3548__auto____12171 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____12171))
{return or__3548__auto____12171;
} else
{return p.call(null,z);
}
}
});
var sp1__12216 = (function() { 
var G__12218__delegate = function (x,y,z,args){
var or__3548__auto____12172 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12172))
{return or__3548__auto____12172;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12218__delegate.call(this, x, y, z, args);
};
G__12218.cljs$lang$maxFixedArity = 3;
G__12218.cljs$lang$applyTo = (function (arglist__12219){
var x = cljs.core.first(arglist__12219);
var y = cljs.core.first(cljs.core.next(arglist__12219));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12219)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12219)));
return G__12218__delegate.call(this, x, y, z, args);
});
return G__12218;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__12212.call(this);
case  1 :
return sp1__12213.call(this,x);
case  2 :
return sp1__12214.call(this,x,y);
case  3 :
return sp1__12215.call(this,x,y,z);
default:
return sp1__12216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12216.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__12208 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12220 = (function (){
return null;
});
var sp2__12221 = (function (x){
var or__3548__auto____12173 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12173))
{return or__3548__auto____12173;
} else
{return p2.call(null,x);
}
});
var sp2__12222 = (function (x,y){
var or__3548__auto____12174 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12174))
{return or__3548__auto____12174;
} else
{var or__3548__auto____12175 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12175))
{return or__3548__auto____12175;
} else
{var or__3548__auto____12176 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12176))
{return or__3548__auto____12176;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12223 = (function (x,y,z){
var or__3548__auto____12177 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12177))
{return or__3548__auto____12177;
} else
{var or__3548__auto____12178 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12178))
{return or__3548__auto____12178;
} else
{var or__3548__auto____12179 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12179))
{return or__3548__auto____12179;
} else
{var or__3548__auto____12180 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12180))
{return or__3548__auto____12180;
} else
{var or__3548__auto____12181 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12181))
{return or__3548__auto____12181;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12224 = (function() { 
var G__12226__delegate = function (x,y,z,args){
var or__3548__auto____12182 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12182))
{return or__3548__auto____12182;
} else
{return cljs.core.some.call(null,(function (p1__12085_SHARP_){
var or__3548__auto____12183 = p1.call(null,p1__12085_SHARP_);

if(cljs.core.truth_(or__3548__auto____12183))
{return or__3548__auto____12183;
} else
{return p2.call(null,p1__12085_SHARP_);
}
}),args);
}
};
var G__12226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12226__delegate.call(this, x, y, z, args);
};
G__12226.cljs$lang$maxFixedArity = 3;
G__12226.cljs$lang$applyTo = (function (arglist__12227){
var x = cljs.core.first(arglist__12227);
var y = cljs.core.first(cljs.core.next(arglist__12227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12227)));
return G__12226__delegate.call(this, x, y, z, args);
});
return G__12226;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12220.call(this);
case  1 :
return sp2__12221.call(this,x);
case  2 :
return sp2__12222.call(this,x,y);
case  3 :
return sp2__12223.call(this,x,y,z);
default:
return sp2__12224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12224.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__12209 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12228 = (function (){
return null;
});
var sp3__12229 = (function (x){
var or__3548__auto____12184 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12184))
{return or__3548__auto____12184;
} else
{var or__3548__auto____12185 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12185))
{return or__3548__auto____12185;
} else
{return p3.call(null,x);
}
}
});
var sp3__12230 = (function (x,y){
var or__3548__auto____12186 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12186))
{return or__3548__auto____12186;
} else
{var or__3548__auto____12187 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12187))
{return or__3548__auto____12187;
} else
{var or__3548__auto____12188 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12188))
{return or__3548__auto____12188;
} else
{var or__3548__auto____12189 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12189))
{return or__3548__auto____12189;
} else
{var or__3548__auto____12190 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12190))
{return or__3548__auto____12190;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12231 = (function (x,y,z){
var or__3548__auto____12191 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12191))
{return or__3548__auto____12191;
} else
{var or__3548__auto____12192 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12192))
{return or__3548__auto____12192;
} else
{var or__3548__auto____12193 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12193))
{return or__3548__auto____12193;
} else
{var or__3548__auto____12194 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12194))
{return or__3548__auto____12194;
} else
{var or__3548__auto____12195 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12195))
{return or__3548__auto____12195;
} else
{var or__3548__auto____12196 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____12196))
{return or__3548__auto____12196;
} else
{var or__3548__auto____12197 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12197))
{return or__3548__auto____12197;
} else
{var or__3548__auto____12198 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____12198))
{return or__3548__auto____12198;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__12232 = (function() { 
var G__12234__delegate = function (x,y,z,args){
var or__3548__auto____12199 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12199))
{return or__3548__auto____12199;
} else
{return cljs.core.some.call(null,(function (p1__12086_SHARP_){
var or__3548__auto____12200 = p1.call(null,p1__12086_SHARP_);

if(cljs.core.truth_(or__3548__auto____12200))
{return or__3548__auto____12200;
} else
{var or__3548__auto____12201 = p2.call(null,p1__12086_SHARP_);

if(cljs.core.truth_(or__3548__auto____12201))
{return or__3548__auto____12201;
} else
{return p3.call(null,p1__12086_SHARP_);
}
}
}),args);
}
};
var G__12234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12234__delegate.call(this, x, y, z, args);
};
G__12234.cljs$lang$maxFixedArity = 3;
G__12234.cljs$lang$applyTo = (function (arglist__12235){
var x = cljs.core.first(arglist__12235);
var y = cljs.core.first(cljs.core.next(arglist__12235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12235)));
return G__12234__delegate.call(this, x, y, z, args);
});
return G__12234;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12228.call(this);
case  1 :
return sp3__12229.call(this,x);
case  2 :
return sp3__12230.call(this,x,y);
case  3 :
return sp3__12231.call(this,x,y,z);
default:
return sp3__12232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12232.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__12210 = (function() { 
var G__12236__delegate = function (p1,p2,p3,ps){
var ps__12202 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12237 = (function (){
return null;
});
var spn__12238 = (function (x){
return cljs.core.some.call(null,(function (p1__12087_SHARP_){
return p1__12087_SHARP_.call(null,x);
}),ps__12202);
});
var spn__12239 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12088_SHARP_){
var or__3548__auto____12203 = p1__12088_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12203))
{return or__3548__auto____12203;
} else
{return p1__12088_SHARP_.call(null,y);
}
}),ps__12202);
});
var spn__12240 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12089_SHARP_){
var or__3548__auto____12204 = p1__12089_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12204))
{return or__3548__auto____12204;
} else
{var or__3548__auto____12205 = p1__12089_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____12205))
{return or__3548__auto____12205;
} else
{return p1__12089_SHARP_.call(null,z);
}
}
}),ps__12202);
});
var spn__12241 = (function() { 
var G__12243__delegate = function (x,y,z,args){
var or__3548__auto____12206 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12206))
{return or__3548__auto____12206;
} else
{return cljs.core.some.call(null,(function (p1__12090_SHARP_){
return cljs.core.some.call(null,p1__12090_SHARP_,args);
}),ps__12202);
}
};
var G__12243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12243__delegate.call(this, x, y, z, args);
};
G__12243.cljs$lang$maxFixedArity = 3;
G__12243.cljs$lang$applyTo = (function (arglist__12244){
var x = cljs.core.first(arglist__12244);
var y = cljs.core.first(cljs.core.next(arglist__12244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12244)));
return G__12243__delegate.call(this, x, y, z, args);
});
return G__12243;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12237.call(this);
case  1 :
return spn__12238.call(this,x);
case  2 :
return spn__12239.call(this,x,y);
case  3 :
return spn__12240.call(this,x,y,z);
default:
return spn__12241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12241.cljs$lang$applyTo;
return spn;
})()
};
var G__12236 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12236__delegate.call(this, p1, p2, p3, ps);
};
G__12236.cljs$lang$maxFixedArity = 3;
G__12236.cljs$lang$applyTo = (function (arglist__12245){
var p1 = cljs.core.first(arglist__12245);
var p2 = cljs.core.first(cljs.core.next(arglist__12245));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12245)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12245)));
return G__12236__delegate.call(this, p1, p2, p3, ps);
});
return G__12236;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__12207.call(this,p1);
case  2 :
return some_fn__12208.call(this,p1,p2);
case  3 :
return some_fn__12209.call(this,p1,p2,p3);
default:
return some_fn__12210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__12210.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__12258 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12246))
{var s__12247 = temp__3698__auto____12246;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12247)),map.call(null,f,cljs.core.rest.call(null,s__12247)));
} else
{return null;
}
})));
});
var map__12259 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12248 = cljs.core.seq.call(null,c1);
var s2__12249 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12250 = s1__12248;

if(cljs.core.truth_(and__3546__auto____12250))
{return s2__12249;
} else
{return and__3546__auto____12250;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12248),cljs.core.first.call(null,s2__12249)),map.call(null,f,cljs.core.rest.call(null,s1__12248),cljs.core.rest.call(null,s2__12249)));
} else
{return null;
}
})));
});
var map__12260 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12251 = cljs.core.seq.call(null,c1);
var s2__12252 = cljs.core.seq.call(null,c2);
var s3__12253 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12254 = s1__12251;

if(cljs.core.truth_(and__3546__auto____12254))
{var and__3546__auto____12255 = s2__12252;

if(cljs.core.truth_(and__3546__auto____12255))
{return s3__12253;
} else
{return and__3546__auto____12255;
}
} else
{return and__3546__auto____12254;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12251),cljs.core.first.call(null,s2__12252),cljs.core.first.call(null,s3__12253)),map.call(null,f,cljs.core.rest.call(null,s1__12251),cljs.core.rest.call(null,s2__12252),cljs.core.rest.call(null,s3__12253)));
} else
{return null;
}
})));
});
var map__12261 = (function() { 
var G__12263__delegate = function (f,c1,c2,c3,colls){
var step__12257 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12256 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12256)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12256),step.call(null,map.call(null,cljs.core.rest,ss__12256)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__12168_SHARP_){
return cljs.core.apply.call(null,f,p1__12168_SHARP_);
}),step__12257.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12263 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12263__delegate.call(this, f, c1, c2, c3, colls);
};
G__12263.cljs$lang$maxFixedArity = 4;
G__12263.cljs$lang$applyTo = (function (arglist__12264){
var f = cljs.core.first(arglist__12264);
var c1 = cljs.core.first(cljs.core.next(arglist__12264));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12264)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12264))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12264))));
return G__12263__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12263;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12258.call(this,f,c1);
case  3 :
return map__12259.call(this,f,c1,c2);
case  4 :
return map__12260.call(this,f,c1,c2,c3);
default:
return map__12261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12261.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____12265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12265))
{var s__12266 = temp__3698__auto____12265;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12266),take.call(null,(n - 1),cljs.core.rest.call(null,s__12266)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12269 = (function (n,coll){
while(true){
var s__12267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12268 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12268))
{return s__12267;
} else
{return and__3546__auto____12268;
}
})()))
{{
var G__12270 = (n - 1);
var G__12271 = cljs.core.rest.call(null,s__12267);
n = G__12270;
coll = G__12271;
continue;
}
} else
{return s__12267;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12269.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12272 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12273 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12272.call(this,n);
case  2 :
return drop_last__12273.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12275 = cljs.core.seq.call(null,coll);
var lead__12276 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12276))
{{
var G__12277 = cljs.core.next.call(null,s__12275);
var G__12278 = cljs.core.next.call(null,lead__12276);
s__12275 = G__12277;
lead__12276 = G__12278;
continue;
}
} else
{return s__12275;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12281 = (function (pred,coll){
while(true){
var s__12279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12280 = s__12279;

if(cljs.core.truth_(and__3546__auto____12280))
{return pred.call(null,cljs.core.first.call(null,s__12279));
} else
{return and__3546__auto____12280;
}
})()))
{{
var G__12282 = pred;
var G__12283 = cljs.core.rest.call(null,s__12279);
pred = G__12282;
coll = G__12283;
continue;
}
} else
{return s__12279;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12281.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12284))
{var s__12285 = temp__3698__auto____12284;

return cljs.core.concat.call(null,s__12285,cycle.call(null,s__12285));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__12286 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12287 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12286.call(this,n);
case  2 :
return repeat__12287.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__12289 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12290 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12289.call(this,n);
case  2 :
return repeatedly__12290.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12296 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12292 = cljs.core.seq.call(null,c1);
var s2__12293 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12294 = s1__12292;

if(cljs.core.truth_(and__3546__auto____12294))
{return s2__12293;
} else
{return and__3546__auto____12294;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12292),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12293),interleave.call(null,cljs.core.rest.call(null,s1__12292),cljs.core.rest.call(null,s2__12293))));
} else
{return null;
}
})));
});
var interleave__12297 = (function() { 
var G__12299__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12295 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12295)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12295),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12295)));
} else
{return null;
}
})));
};
var G__12299 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12299__delegate.call(this, c1, c2, colls);
};
G__12299.cljs$lang$maxFixedArity = 2;
G__12299.cljs$lang$applyTo = (function (arglist__12300){
var c1 = cljs.core.first(arglist__12300);
var c2 = cljs.core.first(cljs.core.next(arglist__12300));
var colls = cljs.core.rest(cljs.core.next(arglist__12300));
return G__12299__delegate.call(this, c1, c2, colls);
});
return G__12299;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12296.call(this,c1,c2);
default:
return interleave__12297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12297.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12303 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12301))
{var coll__12302 = temp__3695__auto____12301;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12302),cat.call(null,cljs.core.rest.call(null,coll__12302),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12303.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12304 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12305 = (function() { 
var G__12307__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12307 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12307__delegate.call(this, f, coll, colls);
};
G__12307.cljs$lang$maxFixedArity = 2;
G__12307.cljs$lang$applyTo = (function (arglist__12308){
var f = cljs.core.first(arglist__12308);
var coll = cljs.core.first(cljs.core.next(arglist__12308));
var colls = cljs.core.rest(cljs.core.next(arglist__12308));
return G__12307__delegate.call(this, f, coll, colls);
});
return G__12307;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12304.call(this,f,coll);
default:
return mapcat__12305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12305.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12309))
{var s__12310 = temp__3698__auto____12309;

var f__12311 = cljs.core.first.call(null,s__12310);
var r__12312 = cljs.core.rest.call(null,s__12310);

if(cljs.core.truth_(pred.call(null,f__12311)))
{return cljs.core.cons.call(null,f__12311,filter.call(null,pred,r__12312));
} else
{return filter.call(null,pred,r__12312);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12314 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12314.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12313_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12313_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12321 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12322 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12315 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12315))
{var s__12316 = temp__3698__auto____12315;

var p__12317 = cljs.core.take.call(null,n,s__12316);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12317))))
{return cljs.core.cons.call(null,p__12317,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12316)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12323 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12318))
{var s__12319 = temp__3698__auto____12318;

var p__12320 = cljs.core.take.call(null,n,s__12319);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12320))))
{return cljs.core.cons.call(null,p__12320,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12319)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12320,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12321.call(this,n,step);
case  3 :
return partition__12322.call(this,n,step,pad);
case  4 :
return partition__12323.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12329 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12330 = (function (m,ks,not_found){
var sentinel__12325 = cljs.core.lookup_sentinel;
var m__12326 = m;
var ks__12327 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12327))
{var m__12328 = cljs.core.get.call(null,m__12326,cljs.core.first.call(null,ks__12327),sentinel__12325);

if(cljs.core.truth_((sentinel__12325 === m__12328)))
{return not_found;
} else
{{
var G__12332 = sentinel__12325;
var G__12333 = m__12328;
var G__12334 = cljs.core.next.call(null,ks__12327);
sentinel__12325 = G__12332;
m__12326 = G__12333;
ks__12327 = G__12334;
continue;
}
}
} else
{return m__12326;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12329.call(this,m,ks);
case  3 :
return get_in__12330.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12335,v){
var vec__12336__12337 = p__12335;
var k__12338 = cljs.core.nth.call(null,vec__12336__12337,0,null);
var ks__12339 = cljs.core.nthnext.call(null,vec__12336__12337,1);

if(cljs.core.truth_(ks__12339))
{return cljs.core.assoc.call(null,m,k__12338,assoc_in.call(null,cljs.core.get.call(null,m,k__12338),ks__12339,v));
} else
{return cljs.core.assoc.call(null,m,k__12338,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12340,f,args){
var vec__12341__12342 = p__12340;
var k__12343 = cljs.core.nth.call(null,vec__12341__12342,0,null);
var ks__12344 = cljs.core.nthnext.call(null,vec__12341__12342,1);

if(cljs.core.truth_(ks__12344))
{return cljs.core.assoc.call(null,m,k__12343,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12343),ks__12344,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12343,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12343),args));
}
};
var update_in = function (m,p__12340,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12340, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12345){
var m = cljs.core.first(arglist__12345);
var p__12340 = cljs.core.first(cljs.core.next(arglist__12345));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12345)));
return update_in__delegate.call(this, m, p__12340, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12346 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12379 = null;
var G__12379__12380 = (function (coll,k){
var this__12347 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12379__12381 = (function (coll,k,not_found){
var this__12348 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12379 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12379__12380.call(this,coll,k);
case  3 :
return G__12379__12381.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12379;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12349 = this;
var new_array__12350 = cljs.core.aclone.call(null,this__12349.array);

(new_array__12350[k] = v);
return (new cljs.core.Vector(this__12349.meta,new_array__12350));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12383 = null;
var G__12383__12384 = (function (tsym12351,k){
var this__12353 = this;
var tsym12351__12354 = this;

var coll__12355 = tsym12351__12354;

return cljs.core._lookup.call(null,coll__12355,k);
});
var G__12383__12385 = (function (tsym12352,k,not_found){
var this__12356 = this;
var tsym12352__12357 = this;

var coll__12358 = tsym12352__12357;

return cljs.core._lookup.call(null,coll__12358,k,not_found);
});
G__12383 = function(tsym12352,k,not_found){
switch(arguments.length){
case  2 :
return G__12383__12384.call(this,tsym12352,k);
case  3 :
return G__12383__12385.call(this,tsym12352,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12383;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12359 = this;
var new_array__12360 = cljs.core.aclone.call(null,this__12359.array);

new_array__12360.push(o);
return (new cljs.core.Vector(this__12359.meta,new_array__12360));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12387 = null;
var G__12387__12388 = (function (v,f){
var this__12361 = this;
return cljs.core.ci_reduce.call(null,this__12361.array,f);
});
var G__12387__12389 = (function (v,f,start){
var this__12362 = this;
return cljs.core.ci_reduce.call(null,this__12362.array,f,start);
});
G__12387 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12387__12388.call(this,v,f);
case  3 :
return G__12387__12389.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12387;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12363 = this;
if(cljs.core.truth_((this__12363.array.length > 0)))
{var vector_seq__12364 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12363.array.length)))
{return cljs.core.cons.call(null,(this__12363.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12364.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12365 = this;
return this__12365.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12366 = this;
var count__12367 = this__12366.array.length;

if(cljs.core.truth_((count__12367 > 0)))
{return (this__12366.array[(count__12367 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12368 = this;
if(cljs.core.truth_((this__12368.array.length > 0)))
{var new_array__12369 = cljs.core.aclone.call(null,this__12368.array);

new_array__12369.pop();
return (new cljs.core.Vector(this__12368.meta,new_array__12369));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12370 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12372 = this;
return (new cljs.core.Vector(meta,this__12372.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12373 = this;
return this__12373.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12391 = null;
var G__12391__12392 = (function (coll,n){
var this__12374 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12375 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12375))
{return (n < this__12374.array.length);
} else
{return and__3546__auto____12375;
}
})()))
{return (this__12374.array[n]);
} else
{return null;
}
});
var G__12391__12393 = (function (coll,n,not_found){
var this__12376 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12377 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12377))
{return (n < this__12376.array.length);
} else
{return and__3546__auto____12377;
}
})()))
{return (this__12376.array[n]);
} else
{return not_found;
}
});
G__12391 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12391__12392.call(this,coll,n);
case  3 :
return G__12391__12393.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12391;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12378 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12378.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__12395 = pv.cnt;

if(cljs.core.truth_((cnt__12395 < 32)))
{return 0;
} else
{return (((cnt__12395 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__12396 = level;
var ret__12397 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__12396)))
{return ret__12397;
} else
{var embed__12398 = ret__12397;
var r__12399 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___12400 = (r__12399[0] = embed__12398);

{
var G__12401 = (ll__12396 - 5);
var G__12402 = r__12399;
ll__12396 = G__12401;
ret__12397 = G__12402;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__12403 = cljs.core.aclone.call(null,parent);
var subidx__12404 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__12403[subidx__12404] = tailnode);
return ret__12403;
} else
{var temp__3695__auto____12405 = (parent[subidx__12404]);

if(cljs.core.truth_(temp__3695__auto____12405))
{var child__12406 = temp__3695__auto____12405;

var node_to_insert__12407 = push_tail.call(null,pv,(level - 5),child__12406,tailnode);
var ___12408 = (ret__12403[subidx__12404] = node_to_insert__12407);

return ret__12403;
} else
{var node_to_insert__12409 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___12410 = (ret__12403[subidx__12404] = node_to_insert__12409);

return ret__12403;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____12411 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____12411))
{return (i < pv.cnt);
} else
{return and__3546__auto____12411;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__12412 = pv.root;
var level__12413 = pv.shift;

while(true){
if(cljs.core.truth_((level__12413 > 0)))
{{
var G__12414 = (node__12412[((i >> level__12413) & 31)]);
var G__12415 = (level__12413 - 5);
node__12412 = G__12414;
level__12413 = G__12415;
continue;
}
} else
{return node__12412;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__12416 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__12416[(i & 31)] = val);
return ret__12416;
} else
{var subidx__12417 = ((i >> level) & 31);
var ___12418 = (ret__12416[subidx__12417] = do_assoc.call(null,pv,(level - 5),(node[subidx__12417]),i,val));

return ret__12416;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__12419 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__12420 = pop_tail.call(null,pv,(level - 5),(node[subidx__12419]));

if(cljs.core.truth_((function (){var and__3546__auto____12421 = (new_child__12420 === null);

if(cljs.core.truth_(and__3546__auto____12421))
{return (subidx__12419 === 0);
} else
{return and__3546__auto____12421;
}
})()))
{return null;
} else
{var ret__12422 = cljs.core.aclone.call(null,node);
var ___12423 = (ret__12422[subidx__12419] = new_child__12420);

return ret__12422;
}
} else
{if(cljs.core.truth_((subidx__12419 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__12424 = cljs.core.aclone.call(null,node);
var ___12425 = (ret__12424[subidx__12419] = null);

return ret__12424;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12466 = null;
var G__12466__12467 = (function (coll,k){
var this__12427 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12466__12468 = (function (coll,k,not_found){
var this__12428 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12466 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12466__12467.call(this,coll,k);
case  3 :
return G__12466__12468.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12466;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12429 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12430 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____12430))
{return (k < this__12429.cnt);
} else
{return and__3546__auto____12430;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__12431 = cljs.core.aclone.call(null,this__12429.tail);

(new_tail__12431[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__12429.meta,this__12429.cnt,this__12429.shift,this__12429.root,new_tail__12431));
} else
{return (new cljs.core.PersistentVector(this__12429.meta,this__12429.cnt,this__12429.shift,cljs.core.do_assoc.call(null,coll,this__12429.shift,this__12429.root,k,v),this__12429.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__12429.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__12429.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__12470 = null;
var G__12470__12471 = (function (tsym12432,k){
var this__12434 = this;
var tsym12432__12435 = this;

var coll__12436 = tsym12432__12435;

return cljs.core._lookup.call(null,coll__12436,k);
});
var G__12470__12472 = (function (tsym12433,k,not_found){
var this__12437 = this;
var tsym12433__12438 = this;

var coll__12439 = tsym12433__12438;

return cljs.core._lookup.call(null,coll__12439,k,not_found);
});
G__12470 = function(tsym12433,k,not_found){
switch(arguments.length){
case  2 :
return G__12470__12471.call(this,tsym12433,k);
case  3 :
return G__12470__12472.call(this,tsym12433,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12470;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12440 = this;
if(cljs.core.truth_(((this__12440.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__12441 = cljs.core.aclone.call(null,this__12440.tail);

new_tail__12441.push(o);
return (new cljs.core.PersistentVector(this__12440.meta,(this__12440.cnt + 1),this__12440.shift,this__12440.root,new_tail__12441));
} else
{var root_overflow_QMARK___12442 = ((this__12440.cnt >> 5) > (1 << this__12440.shift));
var new_shift__12443 = (cljs.core.truth_(root_overflow_QMARK___12442)?(this__12440.shift + 5):this__12440.shift);
var new_root__12445 = (cljs.core.truth_(root_overflow_QMARK___12442)?(function (){var n_r__12444 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__12444[0] = this__12440.root);
(n_r__12444[1] = cljs.core.new_path.call(null,this__12440.shift,this__12440.tail));
return n_r__12444;
})():cljs.core.push_tail.call(null,coll,this__12440.shift,this__12440.root,this__12440.tail));

return (new cljs.core.PersistentVector(this__12440.meta,(this__12440.cnt + 1),new_shift__12443,new_root__12445,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12474 = null;
var G__12474__12475 = (function (v,f){
var this__12446 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__12474__12476 = (function (v,f,start){
var this__12447 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__12474 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12474__12475.call(this,v,f);
case  3 :
return G__12474__12476.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12474;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12448 = this;
if(cljs.core.truth_((this__12448.cnt > 0)))
{var vector_seq__12449 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12448.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12449.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12450 = this;
return this__12450.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12451 = this;
if(cljs.core.truth_((this__12451.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__12451.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12452 = this;
if(cljs.core.truth_((this__12452.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__12452.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12452.meta);
} else
{if(cljs.core.truth_((1 < (this__12452.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__12452.meta,(this__12452.cnt - 1),this__12452.shift,this__12452.root,cljs.core.aclone.call(null,this__12452.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__12453 = cljs.core.array_for.call(null,coll,(this__12452.cnt - 2));
var nr__12454 = cljs.core.pop_tail.call(null,this__12452.shift,this__12452.root);
var new_root__12455 = (cljs.core.truth_((nr__12454 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__12454);
var cnt_1__12456 = (this__12452.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____12457 = (5 < this__12452.shift);

if(cljs.core.truth_(and__3546__auto____12457))
{return ((new_root__12455[1]) === null);
} else
{return and__3546__auto____12457;
}
})()))
{return (new cljs.core.PersistentVector(this__12452.meta,cnt_1__12456,(this__12452.shift - 5),(new_root__12455[0]),new_tail__12453));
} else
{return (new cljs.core.PersistentVector(this__12452.meta,cnt_1__12456,this__12452.shift,new_root__12455,new_tail__12453));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12458 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12459 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12460 = this;
return (new cljs.core.PersistentVector(meta,this__12460.cnt,this__12460.shift,this__12460.root,this__12460.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12461 = this;
return this__12461.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12478 = null;
var G__12478__12479 = (function (coll,n){
var this__12462 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__12478__12480 = (function (coll,n,not_found){
var this__12463 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12464 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12464))
{return (n < this__12463.cnt);
} else
{return and__3546__auto____12464;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__12478 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12478__12479.call(this,coll,n);
case  3 :
return G__12478__12480.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12478;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12465 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12465.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12482){
var args = cljs.core.seq( arglist__12482 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12483 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12511 = null;
var G__12511__12512 = (function (coll,k){
var this__12484 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12511__12513 = (function (coll,k,not_found){
var this__12485 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12511__12512.call(this,coll,k);
case  3 :
return G__12511__12513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12511;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12486 = this;
var v_pos__12487 = (this__12486.start + key);

return (new cljs.core.Subvec(this__12486.meta,cljs.core._assoc.call(null,this__12486.v,v_pos__12487,val),this__12486.start,((this__12486.end > (v_pos__12487 + 1)) ? this__12486.end : (v_pos__12487 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12515 = null;
var G__12515__12516 = (function (tsym12488,k){
var this__12490 = this;
var tsym12488__12491 = this;

var coll__12492 = tsym12488__12491;

return cljs.core._lookup.call(null,coll__12492,k);
});
var G__12515__12517 = (function (tsym12489,k,not_found){
var this__12493 = this;
var tsym12489__12494 = this;

var coll__12495 = tsym12489__12494;

return cljs.core._lookup.call(null,coll__12495,k,not_found);
});
G__12515 = function(tsym12489,k,not_found){
switch(arguments.length){
case  2 :
return G__12515__12516.call(this,tsym12489,k);
case  3 :
return G__12515__12517.call(this,tsym12489,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12515;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12496 = this;
return (new cljs.core.Subvec(this__12496.meta,cljs.core._assoc_n.call(null,this__12496.v,this__12496.end,o),this__12496.start,(this__12496.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12519 = null;
var G__12519__12520 = (function (coll,f){
var this__12497 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12519__12521 = (function (coll,f,start){
var this__12498 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12519 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12519__12520.call(this,coll,f);
case  3 :
return G__12519__12521.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12519;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12499 = this;
var subvec_seq__12500 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12499.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12499.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12500.call(null,this__12499.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12501 = this;
return (this__12501.end - this__12501.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12502 = this;
return cljs.core._nth.call(null,this__12502.v,(this__12502.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12503 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12503.start,this__12503.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12503.meta,this__12503.v,this__12503.start,(this__12503.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12504 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12506 = this;
return (new cljs.core.Subvec(meta,this__12506.v,this__12506.start,this__12506.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12507 = this;
return this__12507.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12523 = null;
var G__12523__12524 = (function (coll,n){
var this__12508 = this;
return cljs.core._nth.call(null,this__12508.v,(this__12508.start + n));
});
var G__12523__12525 = (function (coll,n,not_found){
var this__12509 = this;
return cljs.core._nth.call(null,this__12509.v,(this__12509.start + n),not_found);
});
G__12523 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12523__12524.call(this,coll,n);
case  3 :
return G__12523__12525.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12523;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12510 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12510.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__12527 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12528 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12527.call(this,v,start);
case  3 :
return subvec__12528.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12530 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12532 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12533 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12533.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12534 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12535 = this;
return cljs.core._first.call(null,this__12535.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12536 = this;
var temp__3695__auto____12537 = cljs.core.next.call(null,this__12536.front);

if(cljs.core.truth_(temp__3695__auto____12537))
{var f1__12538 = temp__3695__auto____12537;

return (new cljs.core.PersistentQueueSeq(this__12536.meta,f1__12538,this__12536.rear));
} else
{if(cljs.core.truth_((this__12536.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12536.meta,this__12536.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12539 = this;
return this__12539.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12540 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12540.front,this__12540.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12541 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12542 = this;
if(cljs.core.truth_(this__12542.front))
{return (new cljs.core.PersistentQueue(this__12542.meta,(this__12542.count + 1),this__12542.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12543 = this__12542.rear;

if(cljs.core.truth_(or__3548__auto____12543))
{return or__3548__auto____12543;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12542.meta,(this__12542.count + 1),cljs.core.conj.call(null,this__12542.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12544 = this;
var rear__12545 = cljs.core.seq.call(null,this__12544.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12546 = this__12544.front;

if(cljs.core.truth_(or__3548__auto____12546))
{return or__3548__auto____12546;
} else
{return rear__12545;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12544.front,cljs.core.seq.call(null,rear__12545)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12547 = this;
return this__12547.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12548 = this;
return cljs.core._first.call(null,this__12548.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12549 = this;
if(cljs.core.truth_(this__12549.front))
{var temp__3695__auto____12550 = cljs.core.next.call(null,this__12549.front);

if(cljs.core.truth_(temp__3695__auto____12550))
{var f1__12551 = temp__3695__auto____12550;

return (new cljs.core.PersistentQueue(this__12549.meta,(this__12549.count - 1),f1__12551,this__12549.rear));
} else
{return (new cljs.core.PersistentQueue(this__12549.meta,(this__12549.count - 1),cljs.core.seq.call(null,this__12549.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12552 = this;
return cljs.core.first.call(null,this__12552.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12553 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12555 = this;
return (new cljs.core.PersistentQueue(meta,this__12555.count,this__12555.front,this__12555.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12556 = this;
return this__12556.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12557 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12558 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12559 = array.length;

var i__12560 = 0;

while(true){
if(cljs.core.truth_((i__12560 < len__12559)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12560]))))
{return i__12560;
} else
{{
var G__12561 = (i__12560 + incr);
i__12560 = G__12561;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___12563 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12564 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12562 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12562))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12562;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___12563.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12564.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__12567 = cljs.core.hash.call(null,a);
var b__12568 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__12567 < b__12568)))
{return -1;
} else
{if(cljs.core.truth_((a__12567 > b__12568)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12569 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12596 = null;
var G__12596__12597 = (function (coll,k){
var this__12570 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12596__12598 = (function (coll,k,not_found){
var this__12571 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12571.strobj,(this__12571.strobj[k]),not_found);
});
G__12596 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12596__12597.call(this,coll,k);
case  3 :
return G__12596__12598.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12596;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12572 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12573 = goog.object.clone.call(null,this__12572.strobj);
var overwrite_QMARK___12574 = new_strobj__12573.hasOwnProperty(k);

(new_strobj__12573[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12574))
{return (new cljs.core.ObjMap(this__12572.meta,this__12572.keys,new_strobj__12573));
} else
{var new_keys__12575 = cljs.core.aclone.call(null,this__12572.keys);

new_keys__12575.push(k);
return (new cljs.core.ObjMap(this__12572.meta,new_keys__12575,new_strobj__12573));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12572.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12576 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12576.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12600 = null;
var G__12600__12601 = (function (tsym12577,k){
var this__12579 = this;
var tsym12577__12580 = this;

var coll__12581 = tsym12577__12580;

return cljs.core._lookup.call(null,coll__12581,k);
});
var G__12600__12602 = (function (tsym12578,k,not_found){
var this__12582 = this;
var tsym12578__12583 = this;

var coll__12584 = tsym12578__12583;

return cljs.core._lookup.call(null,coll__12584,k,not_found);
});
G__12600 = function(tsym12578,k,not_found){
switch(arguments.length){
case  2 :
return G__12600__12601.call(this,tsym12578,k);
case  3 :
return G__12600__12602.call(this,tsym12578,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12600;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12585 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12586 = this;
if(cljs.core.truth_((this__12586.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12566_SHARP_){
return cljs.core.vector.call(null,p1__12566_SHARP_,(this__12586.strobj[p1__12566_SHARP_]));
}),this__12586.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12587 = this;
return this__12587.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12588 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12589 = this;
return (new cljs.core.ObjMap(meta,this__12589.keys,this__12589.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12590 = this;
return this__12590.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12591 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12591.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12592 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12593 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12593))
{return this__12592.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12593;
}
})()))
{var new_keys__12594 = cljs.core.aclone.call(null,this__12592.keys);
var new_strobj__12595 = goog.object.clone.call(null,this__12592.strobj);

new_keys__12594.splice(cljs.core.scan_array.call(null,1,k,new_keys__12594),1);
cljs.core.js_delete.call(null,new_strobj__12595,k);
return (new cljs.core.ObjMap(this__12592.meta,new_keys__12594,new_strobj__12595));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12605 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12643 = null;
var G__12643__12644 = (function (coll,k){
var this__12606 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12643__12645 = (function (coll,k,not_found){
var this__12607 = this;
var bucket__12608 = (this__12607.hashobj[cljs.core.hash.call(null,k)]);
var i__12609 = (cljs.core.truth_(bucket__12608)?cljs.core.scan_array.call(null,2,k,bucket__12608):null);

if(cljs.core.truth_(i__12609))
{return (bucket__12608[(i__12609 + 1)]);
} else
{return not_found;
}
});
G__12643 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12643__12644.call(this,coll,k);
case  3 :
return G__12643__12645.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12643;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12610 = this;
var h__12611 = cljs.core.hash.call(null,k);
var bucket__12612 = (this__12610.hashobj[h__12611]);

if(cljs.core.truth_(bucket__12612))
{var new_bucket__12613 = cljs.core.aclone.call(null,bucket__12612);
var new_hashobj__12614 = goog.object.clone.call(null,this__12610.hashobj);

(new_hashobj__12614[h__12611] = new_bucket__12613);
var temp__3695__auto____12615 = cljs.core.scan_array.call(null,2,k,new_bucket__12613);

if(cljs.core.truth_(temp__3695__auto____12615))
{var i__12616 = temp__3695__auto____12615;

(new_bucket__12613[(i__12616 + 1)] = v);
return (new cljs.core.HashMap(this__12610.meta,this__12610.count,new_hashobj__12614));
} else
{new_bucket__12613.push(k,v);
return (new cljs.core.HashMap(this__12610.meta,(this__12610.count + 1),new_hashobj__12614));
}
} else
{var new_hashobj__12617 = goog.object.clone.call(null,this__12610.hashobj);

(new_hashobj__12617[h__12611] = [k,v]);
return (new cljs.core.HashMap(this__12610.meta,(this__12610.count + 1),new_hashobj__12617));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12618 = this;
var bucket__12619 = (this__12618.hashobj[cljs.core.hash.call(null,k)]);
var i__12620 = (cljs.core.truth_(bucket__12619)?cljs.core.scan_array.call(null,2,k,bucket__12619):null);

if(cljs.core.truth_(i__12620))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12647 = null;
var G__12647__12648 = (function (tsym12621,k){
var this__12623 = this;
var tsym12621__12624 = this;

var coll__12625 = tsym12621__12624;

return cljs.core._lookup.call(null,coll__12625,k);
});
var G__12647__12649 = (function (tsym12622,k,not_found){
var this__12626 = this;
var tsym12622__12627 = this;

var coll__12628 = tsym12622__12627;

return cljs.core._lookup.call(null,coll__12628,k,not_found);
});
G__12647 = function(tsym12622,k,not_found){
switch(arguments.length){
case  2 :
return G__12647__12648.call(this,tsym12622,k);
case  3 :
return G__12647__12649.call(this,tsym12622,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12647;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12629 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12630 = this;
if(cljs.core.truth_((this__12630.count > 0)))
{var hashes__12631 = cljs.core.js_keys.call(null,this__12630.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12604_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12630.hashobj[p1__12604_SHARP_])));
}),hashes__12631);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12632 = this;
return this__12632.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12633 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12634 = this;
return (new cljs.core.HashMap(meta,this__12634.count,this__12634.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12635 = this;
return this__12635.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12636 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12636.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12637 = this;
var h__12638 = cljs.core.hash.call(null,k);
var bucket__12639 = (this__12637.hashobj[h__12638]);
var i__12640 = (cljs.core.truth_(bucket__12639)?cljs.core.scan_array.call(null,2,k,bucket__12639):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12640)))
{return coll;
} else
{var new_hashobj__12641 = goog.object.clone.call(null,this__12637.hashobj);

if(cljs.core.truth_((3 > bucket__12639.length)))
{cljs.core.js_delete.call(null,new_hashobj__12641,h__12638);
} else
{var new_bucket__12642 = cljs.core.aclone.call(null,bucket__12639);

new_bucket__12642.splice(i__12640,2);
(new_hashobj__12641[h__12638] = new_bucket__12642);
}
return (new cljs.core.HashMap(this__12637.meta,(this__12637.count - 1),new_hashobj__12641));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12651 = ks.length;

var i__12652 = 0;
var out__12653 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12652 < len__12651)))
{{
var G__12654 = (i__12652 + 1);
var G__12655 = cljs.core.assoc.call(null,out__12653,(ks[i__12652]),(vs[i__12652]));
i__12652 = G__12654;
out__12653 = G__12655;
continue;
}
} else
{return out__12653;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__12656 = cljs.core.seq.call(null,keyvals);
var out__12657 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12656))
{{
var G__12658 = cljs.core.nnext.call(null,in$__12656);
var G__12659 = cljs.core.assoc.call(null,out__12657,cljs.core.first.call(null,in$__12656),cljs.core.second.call(null,in$__12656));
in$__12656 = G__12658;
out__12657 = G__12659;
continue;
}
} else
{return out__12657;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__12660){
var keyvals = cljs.core.seq( arglist__12660 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__12661_SHARP_,p2__12662_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12663 = p1__12661_SHARP_;

if(cljs.core.truth_(or__3548__auto____12663))
{return or__3548__auto____12663;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12662_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__12664){
var maps = cljs.core.seq( arglist__12664 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__12667 = (function (m,e){
var k__12665 = cljs.core.first.call(null,e);
var v__12666 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12665)))
{return cljs.core.assoc.call(null,m,k__12665,f.call(null,cljs.core.get.call(null,m,k__12665),v__12666));
} else
{return cljs.core.assoc.call(null,m,k__12665,v__12666);
}
});
var merge2__12669 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12667,(function (){var or__3548__auto____12668 = m1;

if(cljs.core.truth_(or__3548__auto____12668))
{return or__3548__auto____12668;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12669,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__12670){
var f = cljs.core.first(arglist__12670);
var maps = cljs.core.rest(arglist__12670);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12672 = cljs.core.ObjMap.fromObject([],{});
var keys__12673 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12673))
{var key__12674 = cljs.core.first.call(null,keys__12673);
var entry__12675 = cljs.core.get.call(null,map,key__12674,"\uFDD0'user/not-found");

{
var G__12676 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12675,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__12672,key__12674,entry__12675):ret__12672);
var G__12677 = cljs.core.next.call(null,keys__12673);
ret__12672 = G__12676;
keys__12673 = G__12677;
continue;
}
} else
{return ret__12672;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12678 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12699 = null;
var G__12699__12700 = (function (coll,v){
var this__12679 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12699__12701 = (function (coll,v,not_found){
var this__12680 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12680.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12699 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12699__12700.call(this,coll,v);
case  3 :
return G__12699__12701.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12699;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12703 = null;
var G__12703__12704 = (function (tsym12681,k){
var this__12683 = this;
var tsym12681__12684 = this;

var coll__12685 = tsym12681__12684;

return cljs.core._lookup.call(null,coll__12685,k);
});
var G__12703__12705 = (function (tsym12682,k,not_found){
var this__12686 = this;
var tsym12682__12687 = this;

var coll__12688 = tsym12682__12687;

return cljs.core._lookup.call(null,coll__12688,k,not_found);
});
G__12703 = function(tsym12682,k,not_found){
switch(arguments.length){
case  2 :
return G__12703__12704.call(this,tsym12682,k);
case  3 :
return G__12703__12705.call(this,tsym12682,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12703;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12689 = this;
return (new cljs.core.Set(this__12689.meta,cljs.core.assoc.call(null,this__12689.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12690 = this;
return cljs.core.keys.call(null,this__12690.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12691 = this;
return (new cljs.core.Set(this__12691.meta,cljs.core.dissoc.call(null,this__12691.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12692 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12693 = this;
var and__3546__auto____12694 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12694))
{var and__3546__auto____12695 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12695))
{return cljs.core.every_QMARK_.call(null,(function (p1__12671_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12671_SHARP_);
}),other);
} else
{return and__3546__auto____12695;
}
} else
{return and__3546__auto____12694;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12696 = this;
return (new cljs.core.Set(meta,this__12696.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12697 = this;
return this__12697.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12698 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12698.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12708 = cljs.core.seq.call(null,coll);
var out__12709 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12708))))
{{
var G__12710 = cljs.core.rest.call(null,in$__12708);
var G__12711 = cljs.core.conj.call(null,out__12709,cljs.core.first.call(null,in$__12708));
in$__12708 = G__12710;
out__12709 = G__12711;
continue;
}
} else
{return out__12709;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__12712 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12713 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12713))
{var e__12714 = temp__3695__auto____12713;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12714));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12712,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12707_SHARP_){
var temp__3695__auto____12715 = cljs.core.find.call(null,smap,p1__12707_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12715))
{var e__12716 = temp__3695__auto____12715;

return cljs.core.second.call(null,e__12716);
} else
{return p1__12707_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12724 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12717,seen){
while(true){
var vec__12718__12719 = p__12717;
var f__12720 = cljs.core.nth.call(null,vec__12718__12719,0,null);
var xs__12721 = vec__12718__12719;

var temp__3698__auto____12722 = cljs.core.seq.call(null,xs__12721);

if(cljs.core.truth_(temp__3698__auto____12722))
{var s__12723 = temp__3698__auto____12722;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12720)))
{{
var G__12725 = cljs.core.rest.call(null,s__12723);
var G__12726 = seen;
p__12717 = G__12725;
seen = G__12726;
continue;
}
} else
{return cljs.core.cons.call(null,f__12720,step.call(null,cljs.core.rest.call(null,s__12723),cljs.core.conj.call(null,seen,f__12720)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12724.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12727 = cljs.core.PersistentVector.fromArray([]);
var s__12728 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12728)))
{{
var G__12729 = cljs.core.conj.call(null,ret__12727,cljs.core.first.call(null,s__12728));
var G__12730 = cljs.core.next.call(null,s__12728);
ret__12727 = G__12729;
s__12728 = G__12730;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12727);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____12731 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12731))
{return or__3548__auto____12731;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12732 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12732 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12732 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____12733 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12733))
{return or__3548__auto____12733;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12734 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12734 > -1)))
{return cljs.core.subs.call(null,x,2,i__12734);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__12737 = cljs.core.ObjMap.fromObject([],{});
var ks__12738 = cljs.core.seq.call(null,keys);
var vs__12739 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12740 = ks__12738;

if(cljs.core.truth_(and__3546__auto____12740))
{return vs__12739;
} else
{return and__3546__auto____12740;
}
})()))
{{
var G__12741 = cljs.core.assoc.call(null,map__12737,cljs.core.first.call(null,ks__12738),cljs.core.first.call(null,vs__12739));
var G__12742 = cljs.core.next.call(null,ks__12738);
var G__12743 = cljs.core.next.call(null,vs__12739);
map__12737 = G__12741;
ks__12738 = G__12742;
vs__12739 = G__12743;
continue;
}
} else
{return map__12737;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__12746 = (function (k,x){
return x;
});
var max_key__12747 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12748 = (function() { 
var G__12750__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12735_SHARP_,p2__12736_SHARP_){
return max_key.call(null,k,p1__12735_SHARP_,p2__12736_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12750 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12750__delegate.call(this, k, x, y, more);
};
G__12750.cljs$lang$maxFixedArity = 3;
G__12750.cljs$lang$applyTo = (function (arglist__12751){
var k = cljs.core.first(arglist__12751);
var x = cljs.core.first(cljs.core.next(arglist__12751));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12751)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12751)));
return G__12750__delegate.call(this, k, x, y, more);
});
return G__12750;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12746.call(this,k,x);
case  3 :
return max_key__12747.call(this,k,x,y);
default:
return max_key__12748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12748.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12752 = (function (k,x){
return x;
});
var min_key__12753 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12754 = (function() { 
var G__12756__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12744_SHARP_,p2__12745_SHARP_){
return min_key.call(null,k,p1__12744_SHARP_,p2__12745_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12756 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12756__delegate.call(this, k, x, y, more);
};
G__12756.cljs$lang$maxFixedArity = 3;
G__12756.cljs$lang$applyTo = (function (arglist__12757){
var k = cljs.core.first(arglist__12757);
var x = cljs.core.first(cljs.core.next(arglist__12757));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12757)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12757)));
return G__12756__delegate.call(this, k, x, y, more);
});
return G__12756;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12752.call(this,k,x);
case  3 :
return min_key__12753.call(this,k,x,y);
default:
return min_key__12754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12754.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12760 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12761 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12758 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12758))
{var s__12759 = temp__3698__auto____12758;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12759),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12759)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12760.call(this,n,step);
case  3 :
return partition_all__12761.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12763))
{var s__12764 = temp__3698__auto____12763;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12764))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12764),take_while.call(null,pred,cljs.core.rest.call(null,s__12764)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__12765 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__12766 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12782 = null;
var G__12782__12783 = (function (rng,f){
var this__12767 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__12782__12784 = (function (rng,f,s){
var this__12768 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__12782 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__12782__12783.call(this,rng,f);
case  3 :
return G__12782__12784.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12782;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__12769 = this;
var comp__12770 = (cljs.core.truth_((this__12769.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__12770.call(null,this__12769.start,this__12769.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__12771 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__12771.end - this__12771.start) / this__12771.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__12772 = this;
return this__12772.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__12773 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__12773.meta,(this__12773.start + this__12773.step),this__12773.end,this__12773.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__12774 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__12775 = this;
return (new cljs.core.Range(meta,this__12775.start,this__12775.end,this__12775.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__12776 = this;
return this__12776.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12786 = null;
var G__12786__12787 = (function (rng,n){
var this__12777 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12777.start + (n * this__12777.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12778 = (this__12777.start > this__12777.end);

if(cljs.core.truth_(and__3546__auto____12778))
{return cljs.core._EQ_.call(null,this__12777.step,0);
} else
{return and__3546__auto____12778;
}
})()))
{return this__12777.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__12786__12788 = (function (rng,n,not_found){
var this__12779 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12779.start + (n * this__12779.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12780 = (this__12779.start > this__12779.end);

if(cljs.core.truth_(and__3546__auto____12780))
{return cljs.core._EQ_.call(null,this__12779.step,0);
} else
{return and__3546__auto____12780;
}
})()))
{return this__12779.start;
} else
{return not_found;
}
}
});
G__12786 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__12786__12787.call(this,rng,n);
case  3 :
return G__12786__12788.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12786;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__12781 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12781.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12790 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__12791 = (function (end){
return range.call(null,0,end,1);
});
var range__12792 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12793 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12790.call(this);
case  1 :
return range__12791.call(this,start);
case  2 :
return range__12792.call(this,start,end);
case  3 :
return range__12793.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12795))
{var s__12796 = temp__3698__auto____12795;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12796),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12796)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12798))
{var s__12799 = temp__3698__auto____12798;

var fst__12800 = cljs.core.first.call(null,s__12799);
var fv__12801 = f.call(null,fst__12800);
var run__12802 = cljs.core.cons.call(null,fst__12800,cljs.core.take_while.call(null,(function (p1__12797_SHARP_){
return cljs.core._EQ_.call(null,fv__12801,f.call(null,p1__12797_SHARP_));
}),cljs.core.next.call(null,s__12799)));

return cljs.core.cons.call(null,run__12802,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12802),s__12799))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__12817 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12813))
{var s__12814 = temp__3695__auto____12813;

return reductions.call(null,f,cljs.core.first.call(null,s__12814),cljs.core.rest.call(null,s__12814));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__12818 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12815))
{var s__12816 = temp__3698__auto____12815;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12816)),cljs.core.rest.call(null,s__12816));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__12817.call(this,f,init);
case  3 :
return reductions__12818.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__12821 = (function (f){
return (function() {
var G__12826 = null;
var G__12826__12827 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12826__12828 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12826__12829 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12826__12830 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12826__12831 = (function() { 
var G__12833__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12833 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12833__delegate.call(this, x, y, z, args);
};
G__12833.cljs$lang$maxFixedArity = 3;
G__12833.cljs$lang$applyTo = (function (arglist__12834){
var x = cljs.core.first(arglist__12834);
var y = cljs.core.first(cljs.core.next(arglist__12834));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12834)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12834)));
return G__12833__delegate.call(this, x, y, z, args);
});
return G__12833;
})()
;
G__12826 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12826__12827.call(this);
case  1 :
return G__12826__12828.call(this,x);
case  2 :
return G__12826__12829.call(this,x,y);
case  3 :
return G__12826__12830.call(this,x,y,z);
default:
return G__12826__12831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12826.cljs$lang$maxFixedArity = 3;
G__12826.cljs$lang$applyTo = G__12826__12831.cljs$lang$applyTo;
return G__12826;
})()
});
var juxt__12822 = (function (f,g){
return (function() {
var G__12835 = null;
var G__12835__12836 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12835__12837 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12835__12838 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12835__12839 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12835__12840 = (function() { 
var G__12842__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12842 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12842__delegate.call(this, x, y, z, args);
};
G__12842.cljs$lang$maxFixedArity = 3;
G__12842.cljs$lang$applyTo = (function (arglist__12843){
var x = cljs.core.first(arglist__12843);
var y = cljs.core.first(cljs.core.next(arglist__12843));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12843)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12843)));
return G__12842__delegate.call(this, x, y, z, args);
});
return G__12842;
})()
;
G__12835 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12835__12836.call(this);
case  1 :
return G__12835__12837.call(this,x);
case  2 :
return G__12835__12838.call(this,x,y);
case  3 :
return G__12835__12839.call(this,x,y,z);
default:
return G__12835__12840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12835.cljs$lang$maxFixedArity = 3;
G__12835.cljs$lang$applyTo = G__12835__12840.cljs$lang$applyTo;
return G__12835;
})()
});
var juxt__12823 = (function (f,g,h){
return (function() {
var G__12844 = null;
var G__12844__12845 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12844__12846 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12844__12847 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12844__12848 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12844__12849 = (function() { 
var G__12851__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12851 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12851__delegate.call(this, x, y, z, args);
};
G__12851.cljs$lang$maxFixedArity = 3;
G__12851.cljs$lang$applyTo = (function (arglist__12852){
var x = cljs.core.first(arglist__12852);
var y = cljs.core.first(cljs.core.next(arglist__12852));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12852)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12852)));
return G__12851__delegate.call(this, x, y, z, args);
});
return G__12851;
})()
;
G__12844 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12844__12845.call(this);
case  1 :
return G__12844__12846.call(this,x);
case  2 :
return G__12844__12847.call(this,x,y);
case  3 :
return G__12844__12848.call(this,x,y,z);
default:
return G__12844__12849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12844.cljs$lang$maxFixedArity = 3;
G__12844.cljs$lang$applyTo = G__12844__12849.cljs$lang$applyTo;
return G__12844;
})()
});
var juxt__12824 = (function() { 
var G__12853__delegate = function (f,g,h,fs){
var fs__12820 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__12854 = null;
var G__12854__12855 = (function (){
return cljs.core.reduce.call(null,(function (p1__12803_SHARP_,p2__12804_SHARP_){
return cljs.core.conj.call(null,p1__12803_SHARP_,p2__12804_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__12820);
});
var G__12854__12856 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12805_SHARP_,p2__12806_SHARP_){
return cljs.core.conj.call(null,p1__12805_SHARP_,p2__12806_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__12820);
});
var G__12854__12857 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12807_SHARP_,p2__12808_SHARP_){
return cljs.core.conj.call(null,p1__12807_SHARP_,p2__12808_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__12820);
});
var G__12854__12858 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12809_SHARP_,p2__12810_SHARP_){
return cljs.core.conj.call(null,p1__12809_SHARP_,p2__12810_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__12820);
});
var G__12854__12859 = (function() { 
var G__12861__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12811_SHARP_,p2__12812_SHARP_){
return cljs.core.conj.call(null,p1__12811_SHARP_,cljs.core.apply.call(null,p2__12812_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__12820);
};
var G__12861 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12861__delegate.call(this, x, y, z, args);
};
G__12861.cljs$lang$maxFixedArity = 3;
G__12861.cljs$lang$applyTo = (function (arglist__12862){
var x = cljs.core.first(arglist__12862);
var y = cljs.core.first(cljs.core.next(arglist__12862));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12862)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12862)));
return G__12861__delegate.call(this, x, y, z, args);
});
return G__12861;
})()
;
G__12854 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12854__12855.call(this);
case  1 :
return G__12854__12856.call(this,x);
case  2 :
return G__12854__12857.call(this,x,y);
case  3 :
return G__12854__12858.call(this,x,y,z);
default:
return G__12854__12859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12854.cljs$lang$maxFixedArity = 3;
G__12854.cljs$lang$applyTo = G__12854__12859.cljs$lang$applyTo;
return G__12854;
})()
};
var G__12853 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12853__delegate.call(this, f, g, h, fs);
};
G__12853.cljs$lang$maxFixedArity = 3;
G__12853.cljs$lang$applyTo = (function (arglist__12863){
var f = cljs.core.first(arglist__12863);
var g = cljs.core.first(cljs.core.next(arglist__12863));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12863)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12863)));
return G__12853__delegate.call(this, f, g, h, fs);
});
return G__12853;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__12821.call(this,f);
case  2 :
return juxt__12822.call(this,f,g);
case  3 :
return juxt__12823.call(this,f,g,h);
default:
return juxt__12824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__12824.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__12865 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__12868 = cljs.core.next.call(null,coll);
coll = G__12868;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__12866 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____12864))
{return (n > 0);
} else
{return and__3546__auto____12864;
}
})()))
{{
var G__12869 = (n - 1);
var G__12870 = cljs.core.next.call(null,coll);
n = G__12869;
coll = G__12870;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__12865.call(this,n);
case  2 :
return dorun__12866.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__12871 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__12872 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__12871.call(this,n);
case  2 :
return doall__12872.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__12874 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12874),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12874),1)))
{return cljs.core.first.call(null,matches__12874);
} else
{return cljs.core.vec.call(null,matches__12874);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__12875 = re.exec(s);

if(cljs.core.truth_((matches__12875 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12875),1)))
{return cljs.core.first.call(null,matches__12875);
} else
{return cljs.core.vec.call(null,matches__12875);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12876 = cljs.core.re_find.call(null,re,s);
var match_idx__12877 = s.search(re);
var match_str__12878 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__12876))?cljs.core.first.call(null,match_data__12876):match_data__12876);
var post_match__12879 = cljs.core.subs.call(null,s,(match_idx__12877 + cljs.core.count.call(null,match_str__12878)));

if(cljs.core.truth_(match_data__12876))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12876,re_seq.call(null,re,post_match__12879));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12881__12882 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12883 = cljs.core.nth.call(null,vec__12881__12882,0,null);
var flags__12884 = cljs.core.nth.call(null,vec__12881__12882,1,null);
var pattern__12885 = cljs.core.nth.call(null,vec__12881__12882,2,null);

return (new RegExp(pattern__12885,flags__12884));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__12880_SHARP_){
return print_one.call(null,p1__12880_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____12886 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____12886))
{var and__3546__auto____12890 = (function (){var x__3028__auto____12887 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12888 = x__3028__auto____12887;

if(cljs.core.truth_(and__3546__auto____12888))
{var and__3546__auto____12889 = x__3028__auto____12887.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____12889))
{return cljs.core.not.call(null,x__3028__auto____12887.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____12889;
}
} else
{return and__3546__auto____12888;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____12887);
}
})();

if(cljs.core.truth_(and__3546__auto____12890))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____12890;
}
} else
{return and__3546__auto____12886;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____12891 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12892 = x__3028__auto____12891;

if(cljs.core.truth_(and__3546__auto____12892))
{var and__3546__auto____12893 = x__3028__auto____12891.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____12893))
{return cljs.core.not.call(null,x__3028__auto____12891.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____12893;
}
} else
{return and__3546__auto____12892;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____12891);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__12894 = cljs.core.first.call(null,objs);
var sb__12895 = (new goog.string.StringBuffer());

var G__12896__12897 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12896__12897))
{var obj__12898 = cljs.core.first.call(null,G__12896__12897);
var G__12896__12899 = G__12896__12897;

while(true){
if(cljs.core.truth_((obj__12898 === first_obj__12894)))
{} else
{sb__12895.append(" ");
}
var G__12900__12901 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12898,opts));

if(cljs.core.truth_(G__12900__12901))
{var string__12902 = cljs.core.first.call(null,G__12900__12901);
var G__12900__12903 = G__12900__12901;

while(true){
sb__12895.append(string__12902);
var temp__3698__auto____12904 = cljs.core.next.call(null,G__12900__12903);

if(cljs.core.truth_(temp__3698__auto____12904))
{var G__12900__12905 = temp__3698__auto____12904;

{
var G__12908 = cljs.core.first.call(null,G__12900__12905);
var G__12909 = G__12900__12905;
string__12902 = G__12908;
G__12900__12903 = G__12909;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12906 = cljs.core.next.call(null,G__12896__12899);

if(cljs.core.truth_(temp__3698__auto____12906))
{var G__12896__12907 = temp__3698__auto____12906;

{
var G__12910 = cljs.core.first.call(null,G__12896__12907);
var G__12911 = G__12896__12907;
obj__12898 = G__12910;
G__12896__12899 = G__12911;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12895;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__12912 = cljs.core.pr_sb.call(null,objs,opts);

sb__12912.append("\n");
return cljs.core.str.call(null,sb__12912);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__12913 = cljs.core.first.call(null,objs);

var G__12914__12915 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12914__12915))
{var obj__12916 = cljs.core.first.call(null,G__12914__12915);
var G__12914__12917 = G__12914__12915;

while(true){
if(cljs.core.truth_((obj__12916 === first_obj__12913)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__12918__12919 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12916,opts));

if(cljs.core.truth_(G__12918__12919))
{var string__12920 = cljs.core.first.call(null,G__12918__12919);
var G__12918__12921 = G__12918__12919;

while(true){
cljs.core.string_print.call(null,string__12920);
var temp__3698__auto____12922 = cljs.core.next.call(null,G__12918__12921);

if(cljs.core.truth_(temp__3698__auto____12922))
{var G__12918__12923 = temp__3698__auto____12922;

{
var G__12926 = cljs.core.first.call(null,G__12918__12923);
var G__12927 = G__12918__12923;
string__12920 = G__12926;
G__12918__12921 = G__12927;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12924 = cljs.core.next.call(null,G__12914__12917);

if(cljs.core.truth_(temp__3698__auto____12924))
{var G__12914__12925 = temp__3698__auto____12924;

{
var G__12928 = cljs.core.first.call(null,G__12914__12925);
var G__12929 = G__12914__12925;
obj__12916 = G__12928;
G__12914__12917 = G__12929;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__12930){
var objs = cljs.core.seq( arglist__12930 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__12931){
var objs = cljs.core.seq( arglist__12931 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__12932){
var objs = cljs.core.seq( arglist__12932 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__12933){
var objs = cljs.core.seq( arglist__12933 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__12934){
var objs = cljs.core.seq( arglist__12934 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__12935){
var objs = cljs.core.seq( arglist__12935 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__12936){
var objs = cljs.core.seq( arglist__12936 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__12937){
var objs = cljs.core.seq( arglist__12937 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12938 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12938,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____12939 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12939))
{var nspc__12940 = temp__3698__auto____12939;

return cljs.core.str.call(null,nspc__12940,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____12941 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12941))
{var nspc__12942 = temp__3698__auto____12941;

return cljs.core.str.call(null,nspc__12942,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12943 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12943,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__12944 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__12945 = this;
var G__12946__12947 = cljs.core.seq.call(null,this__12945.watches);

if(cljs.core.truth_(G__12946__12947))
{var G__12949__12951 = cljs.core.first.call(null,G__12946__12947);
var vec__12950__12952 = G__12949__12951;
var key__12953 = cljs.core.nth.call(null,vec__12950__12952,0,null);
var f__12954 = cljs.core.nth.call(null,vec__12950__12952,1,null);
var G__12946__12955 = G__12946__12947;

var G__12949__12956 = G__12949__12951;
var G__12946__12957 = G__12946__12955;

while(true){
var vec__12958__12959 = G__12949__12956;
var key__12960 = cljs.core.nth.call(null,vec__12958__12959,0,null);
var f__12961 = cljs.core.nth.call(null,vec__12958__12959,1,null);
var G__12946__12962 = G__12946__12957;

f__12961.call(null,key__12960,this$,oldval,newval);
var temp__3698__auto____12963 = cljs.core.next.call(null,G__12946__12962);

if(cljs.core.truth_(temp__3698__auto____12963))
{var G__12946__12964 = temp__3698__auto____12963;

{
var G__12971 = cljs.core.first.call(null,G__12946__12964);
var G__12972 = G__12946__12964;
G__12949__12956 = G__12971;
G__12946__12957 = G__12972;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__12965 = this;
return this$.watches = cljs.core.assoc.call(null,this__12965.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__12966 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12966.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__12967 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__12967.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__12968 = this;
return this__12968.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__12969 = this;
return this__12969.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12970 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__12979 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__12980 = (function() { 
var G__12982__delegate = function (x,p__12973){
var map__12974__12975 = p__12973;
var map__12974__12976 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12974__12975))?cljs.core.apply.call(null,cljs.core.hash_map,map__12974__12975):map__12974__12975);
var validator__12977 = cljs.core.get.call(null,map__12974__12976,"\uFDD0'validator");
var meta__12978 = cljs.core.get.call(null,map__12974__12976,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__12978,validator__12977,null));
};
var G__12982 = function (x,var_args){
var p__12973 = null;
if (goog.isDef(var_args)) {
  p__12973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12982__delegate.call(this, x, p__12973);
};
G__12982.cljs$lang$maxFixedArity = 1;
G__12982.cljs$lang$applyTo = (function (arglist__12983){
var x = cljs.core.first(arglist__12983);
var p__12973 = cljs.core.rest(arglist__12983);
return G__12982__delegate.call(this, x, p__12973);
});
return G__12982;
})()
;
atom = function(x,var_args){
var p__12973 = var_args;
switch(arguments.length){
case  1 :
return atom__12979.call(this,x);
default:
return atom__12980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__12980.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____12984 = a.validator;

if(cljs.core.truth_(temp__3698__auto____12984))
{var validate__12985 = temp__3698__auto____12984;

if(cljs.core.truth_(validate__12985.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__12986 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12986,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___12987 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___12988 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___12989 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___12990 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___12991 = (function() { 
var G__12993__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12993 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12993__delegate.call(this, a, f, x, y, z, more);
};
G__12993.cljs$lang$maxFixedArity = 5;
G__12993.cljs$lang$applyTo = (function (arglist__12994){
var a = cljs.core.first(arglist__12994);
var f = cljs.core.first(cljs.core.next(arglist__12994));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12994)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12994))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12994)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12994)))));
return G__12993__delegate.call(this, a, f, x, y, z, more);
});
return G__12993;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___12987.call(this,a,f);
case  3 :
return swap_BANG___12988.call(this,a,f,x);
case  4 :
return swap_BANG___12989.call(this,a,f,x,y);
case  5 :
return swap_BANG___12990.call(this,a,f,x,y,z);
default:
return swap_BANG___12991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___12991.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12995){
var iref = cljs.core.first(arglist__12995);
var f = cljs.core.first(cljs.core.next(arglist__12995));
var args = cljs.core.rest(cljs.core.next(arglist__12995));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__12996 = (function (){
return gensym.call(null,"G__");
});
var gensym__12997 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__12996.call(this);
case  1 :
return gensym__12997.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__12999 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__12999.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13000 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__13000.state,(function (p__13001){
var curr_state__13002 = p__13001;
var curr_state__13003 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__13002))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__13002):curr_state__13002);
var done__13004 = cljs.core.get.call(null,curr_state__13003,"\uFDD0'done");

if(cljs.core.truth_(done__13004))
{return curr_state__13003;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__13000.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__13005__13006 = options;
var map__13005__13007 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13005__13006))?cljs.core.apply.call(null,cljs.core.hash_map,map__13005__13006):map__13005__13006);
var keywordize_keys__13008 = cljs.core.get.call(null,map__13005__13007,"\uFDD0'keywordize-keys");
var keyfn__13009 = (cljs.core.truth_(keywordize_keys__13008)?cljs.core.keyword:cljs.core.str);
var f__13015 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____13014 = (function iter__13010(s__13011){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13011__13012 = s__13011;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13011__13012)))
{var k__13013 = cljs.core.first.call(null,s__13011__13012);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__13009.call(null,k__13013),thisfn.call(null,(x[k__13013]))]),iter__13010.call(null,cljs.core.rest.call(null,s__13011__13012)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____13014.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__13015.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13016){
var x = cljs.core.first(arglist__13016);
var options = cljs.core.rest(arglist__13016);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__13017 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__13021__delegate = function (args){
var temp__3695__auto____13018 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13017),args);

if(cljs.core.truth_(temp__3695__auto____13018))
{var v__13019 = temp__3695__auto____13018;

return v__13019;
} else
{var ret__13020 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13017,cljs.core.assoc,args,ret__13020);
return ret__13020;
}
};
var G__13021 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13021__delegate.call(this, args);
};
G__13021.cljs$lang$maxFixedArity = 0;
G__13021.cljs$lang$applyTo = (function (arglist__13022){
var args = cljs.core.seq( arglist__13022 );;
return G__13021__delegate.call(this, args);
});
return G__13021;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__13024 = (function (f){
while(true){
var ret__13023 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__13023)))
{{
var G__13027 = ret__13023;
f = G__13027;
continue;
}
} else
{return ret__13023;
}
break;
}
});
var trampoline__13025 = (function() { 
var G__13028__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13028 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13028__delegate.call(this, f, args);
};
G__13028.cljs$lang$maxFixedArity = 1;
G__13028.cljs$lang$applyTo = (function (arglist__13029){
var f = cljs.core.first(arglist__13029);
var args = cljs.core.rest(arglist__13029);
return G__13028__delegate.call(this, f, args);
});
return G__13028;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__13024.call(this,f);
default:
return trampoline__13025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__13025.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__13030 = (function (){
return rand.call(null,1);
});
var rand__13031 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__13030.call(this);
case  1 :
return rand__13031.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__13033 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__13033,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13033,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___13042 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___13043 = (function (h,child,parent){
var or__3548__auto____13034 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____13034))
{return or__3548__auto____13034;
} else
{var or__3548__auto____13035 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____13035))
{return or__3548__auto____13035;
} else
{var and__3546__auto____13036 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____13036))
{var and__3546__auto____13037 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____13037))
{var and__3546__auto____13038 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____13038))
{var ret__13039 = true;
var i__13040 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13041 = cljs.core.not.call(null,ret__13039);

if(cljs.core.truth_(or__3548__auto____13041))
{return or__3548__auto____13041;
} else
{return cljs.core._EQ_.call(null,i__13040,cljs.core.count.call(null,parent));
}
})()))
{return ret__13039;
} else
{{
var G__13045 = isa_QMARK_.call(null,h,child.call(null,i__13040),parent.call(null,i__13040));
var G__13046 = (i__13040 + 1);
ret__13039 = G__13045;
i__13040 = G__13046;
continue;
}
}
break;
}
} else
{return and__3546__auto____13038;
}
} else
{return and__3546__auto____13037;
}
} else
{return and__3546__auto____13036;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___13042.call(this,h,child);
case  3 :
return isa_QMARK___13043.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__13047 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__13048 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__13047.call(this,h);
case  2 :
return parents__13048.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__13050 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__13051 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__13050.call(this,h);
case  2 :
return ancestors__13051.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__13053 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__13054 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__13053.call(this,h);
case  2 :
return descendants__13054.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__13064 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__13065 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__13059 = "\uFDD0'parents".call(null,h);
var td__13060 = "\uFDD0'descendants".call(null,h);
var ta__13061 = "\uFDD0'ancestors".call(null,h);
var tf__13062 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____13063 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__13059.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13061.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13061.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__13059,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__13062.call(null,"\uFDD0'ancestors".call(null,h),tag,td__13060,parent,ta__13061),"\uFDD0'descendants":tf__13062.call(null,"\uFDD0'descendants".call(null,h),parent,ta__13061,tag,td__13060)});
})());

if(cljs.core.truth_(or__3548__auto____13063))
{return or__3548__auto____13063;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__13064.call(this,h,tag);
case  3 :
return derive__13065.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__13071 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__13072 = (function (h,tag,parent){
var parentMap__13067 = "\uFDD0'parents".call(null,h);
var childsParents__13068 = (cljs.core.truth_(parentMap__13067.call(null,tag))?cljs.core.disj.call(null,parentMap__13067.call(null,tag),parent):cljs.core.set([]));
var newParents__13069 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13068))?cljs.core.assoc.call(null,parentMap__13067,tag,childsParents__13068):cljs.core.dissoc.call(null,parentMap__13067,tag));
var deriv_seq__13070 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13056_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13056_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13056_SHARP_),cljs.core.second.call(null,p1__13056_SHARP_)));
}),cljs.core.seq.call(null,newParents__13069)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__13067.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__13057_SHARP_,p2__13058_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13057_SHARP_,p2__13058_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13070));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__13071.call(this,h,tag);
case  3 :
return underive__13072.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__13074 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____13076 = (cljs.core.truth_((function (){var and__3546__auto____13075 = xprefs__13074;

if(cljs.core.truth_(and__3546__auto____13075))
{return xprefs__13074.call(null,y);
} else
{return and__3546__auto____13075;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____13076))
{return or__3548__auto____13076;
} else
{var or__3548__auto____13078 = (function (){var ps__13077 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13077) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13077),prefer_table)))
{} else
{}
{
var G__13081 = cljs.core.rest.call(null,ps__13077);
ps__13077 = G__13081;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13078))
{return or__3548__auto____13078;
} else
{var or__3548__auto____13080 = (function (){var ps__13079 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13079) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13079),y,prefer_table)))
{} else
{}
{
var G__13082 = cljs.core.rest.call(null,ps__13079);
ps__13079 = G__13082;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13080))
{return or__3548__auto____13080;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____13083 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____13083))
{return or__3548__auto____13083;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13092 = cljs.core.reduce.call(null,(function (be,p__13084){
var vec__13085__13086 = p__13084;
var k__13087 = cljs.core.nth.call(null,vec__13085__13086,0,null);
var ___13088 = cljs.core.nth.call(null,vec__13085__13086,1,null);
var e__13089 = vec__13085__13086;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13087)))
{var be2__13091 = (cljs.core.truth_((function (){var or__3548__auto____13090 = (be === null);

if(cljs.core.truth_(or__3548__auto____13090))
{return or__3548__auto____13090;
} else
{return cljs.core.dominates.call(null,k__13087,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13089:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13091),k__13087,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__13087," and ",cljs.core.first.call(null,be2__13091),", and neither is preferred")));
}
return be2__13091;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__13092))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13092));
return cljs.core.second.call(null,best_entry__13092);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13093 = mf;

if(cljs.core.truth_(and__3546__auto____13093))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____13093;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____13094 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13094))
{return or__3548__auto____13094;
} else
{var or__3548__auto____13095 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____13095))
{return or__3548__auto____13095;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____13096 = mf;

if(cljs.core.truth_(and__3546__auto____13096))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____13096;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____13097 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13097))
{return or__3548__auto____13097;
} else
{var or__3548__auto____13098 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____13098))
{return or__3548__auto____13098;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13099 = mf;

if(cljs.core.truth_(and__3546__auto____13099))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____13099;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13100 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13100))
{return or__3548__auto____13100;
} else
{var or__3548__auto____13101 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____13101))
{return or__3548__auto____13101;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____13102 = mf;

if(cljs.core.truth_(and__3546__auto____13102))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____13102;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____13103 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13103))
{return or__3548__auto____13103;
} else
{var or__3548__auto____13104 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____13104))
{return or__3548__auto____13104;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13105 = mf;

if(cljs.core.truth_(and__3546__auto____13105))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____13105;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13106 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13106))
{return or__3548__auto____13106;
} else
{var or__3548__auto____13107 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____13107))
{return or__3548__auto____13107;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13108 = mf;

if(cljs.core.truth_(and__3546__auto____13108))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____13108;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____13109 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13109))
{return or__3548__auto____13109;
} else
{var or__3548__auto____13110 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____13110))
{return or__3548__auto____13110;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13111 = mf;

if(cljs.core.truth_(and__3546__auto____13111))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____13111;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____13112 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13112))
{return or__3548__auto____13112;
} else
{var or__3548__auto____13113 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____13113))
{return or__3548__auto____13113;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____13114 = mf;

if(cljs.core.truth_(and__3546__auto____13114))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____13114;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____13115 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13115))
{return or__3548__auto____13115;
} else
{var or__3548__auto____13116 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____13116))
{return or__3548__auto____13116;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13117 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13118 = cljs.core._get_method.call(null,mf,dispatch_val__13117);

if(cljs.core.truth_(target_fn__13118))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__13117)));
}
return cljs.core.apply.call(null,target_fn__13118,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__13119 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__13120 = this;
cljs.core.swap_BANG_.call(null,this__13120.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13120.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13120.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13120.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__13121 = this;
cljs.core.swap_BANG_.call(null,this__13121.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13121.method_cache,this__13121.method_table,this__13121.cached_hierarchy,this__13121.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__13122 = this;
cljs.core.swap_BANG_.call(null,this__13122.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13122.method_cache,this__13122.method_table,this__13122.cached_hierarchy,this__13122.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__13123 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13123.cached_hierarchy),cljs.core.deref.call(null,this__13123.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__13123.method_cache,this__13123.method_table,this__13123.cached_hierarchy,this__13123.hierarchy);
}
var temp__3695__auto____13124 = cljs.core.deref.call(null,this__13123.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____13124))
{var target_fn__13125 = temp__3695__auto____13124;

return target_fn__13125;
} else
{var temp__3695__auto____13126 = cljs.core.find_and_cache_best_method.call(null,this__13123.name,dispatch_val,this__13123.hierarchy,this__13123.method_table,this__13123.prefer_table,this__13123.method_cache,this__13123.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____13126))
{var target_fn__13127 = temp__3695__auto____13126;

return target_fn__13127;
} else
{return cljs.core.deref.call(null,this__13123.method_table).call(null,this__13123.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13128 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13128.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__13128.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__13128.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13128.method_cache,this__13128.method_table,this__13128.cached_hierarchy,this__13128.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__13129 = this;
return cljs.core.deref.call(null,this__13129.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__13130 = this;
return cljs.core.deref.call(null,this__13130.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__13131 = this;
return cljs.core.do_dispatch.call(null,mf,this__13131.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13132__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__13132 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13132__delegate.call(this, _, args);
};
G__13132.cljs$lang$maxFixedArity = 1;
G__13132.cljs$lang$applyTo = (function (arglist__13133){
var _ = cljs.core.first(arglist__13133);
var args = cljs.core.rest(arglist__13133);
return G__13132__delegate.call(this, _, args);
});
return G__13132;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
