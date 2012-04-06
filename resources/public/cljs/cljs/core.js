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
var or__3548__auto____7215 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7215))
{return or__3548__auto____7215;
} else
{var or__3548__auto____7216 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
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
var _invoke__7280 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7217 = this$;

if(cljs.core.truth_(and__3546__auto____7217))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7217;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7218 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7218))
{return or__3548__auto____7218;
} else
{var or__3548__auto____7219 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7219))
{return or__3548__auto____7219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7281 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7220 = this$;

if(cljs.core.truth_(and__3546__auto____7220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7221 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7221))
{return or__3548__auto____7221;
} else
{var or__3548__auto____7222 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7222))
{return or__3548__auto____7222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7282 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7223 = this$;

if(cljs.core.truth_(and__3546__auto____7223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7224 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7224))
{return or__3548__auto____7224;
} else
{var or__3548__auto____7225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7283 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7226 = this$;

if(cljs.core.truth_(and__3546__auto____7226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7227))
{return or__3548__auto____7227;
} else
{var or__3548__auto____7228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7228))
{return or__3548__auto____7228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7284 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7229 = this$;

if(cljs.core.truth_(and__3546__auto____7229))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7229;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7230 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7230))
{return or__3548__auto____7230;
} else
{var or__3548__auto____7231 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7231))
{return or__3548__auto____7231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7285 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7232 = this$;

if(cljs.core.truth_(and__3546__auto____7232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7233))
{return or__3548__auto____7233;
} else
{var or__3548__auto____7234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7234))
{return or__3548__auto____7234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7286 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7235 = this$;

if(cljs.core.truth_(and__3546__auto____7235))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7235;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7236 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7236))
{return or__3548__auto____7236;
} else
{var or__3548__auto____7237 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7237))
{return or__3548__auto____7237;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7287 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7238 = this$;

if(cljs.core.truth_(and__3546__auto____7238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7288 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7241 = this$;

if(cljs.core.truth_(and__3546__auto____7241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7242 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7242))
{return or__3548__auto____7242;
} else
{var or__3548__auto____7243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7289 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7244 = this$;

if(cljs.core.truth_(and__3546__auto____7244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
} else
{var or__3548__auto____7246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7290 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7247 = this$;

if(cljs.core.truth_(and__3546__auto____7247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7248))
{return or__3548__auto____7248;
} else
{var or__3548__auto____7249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7291 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7250 = this$;

if(cljs.core.truth_(and__3546__auto____7250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7292 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7253 = this$;

if(cljs.core.truth_(and__3546__auto____7253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7293 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7256 = this$;

if(cljs.core.truth_(and__3546__auto____7256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7294 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = this$;

if(cljs.core.truth_(and__3546__auto____7259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7295 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7262 = this$;

if(cljs.core.truth_(and__3546__auto____7262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{var or__3548__auto____7264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7296 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
} else
{var or__3548__auto____7267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7297 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7268 = this$;

if(cljs.core.truth_(and__3546__auto____7268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
} else
{var or__3548__auto____7270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7298 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7271 = this$;

if(cljs.core.truth_(and__3546__auto____7271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{var or__3548__auto____7273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7299 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7274 = this$;

if(cljs.core.truth_(and__3546__auto____7274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{var or__3548__auto____7276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7300 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{var or__3548__auto____7279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
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
return _invoke__7280.call(this,this$);
case  2 :
return _invoke__7281.call(this,this$,a);
case  3 :
return _invoke__7282.call(this,this$,a,b);
case  4 :
return _invoke__7283.call(this,this$,a,b,c);
case  5 :
return _invoke__7284.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7285.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7286.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7287.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7288.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7289.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7290.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7291.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7292.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7293.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7294.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7295.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7296.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7297.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7298.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7299.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7300.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = coll;

if(cljs.core.truth_(and__3546__auto____7302))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7302;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7304 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7305 = coll;

if(cljs.core.truth_(and__3546__auto____7305))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7305;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7306 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7307 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = coll;

if(cljs.core.truth_(and__3546__auto____7308))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7308;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7309 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{var or__3548__auto____7310 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
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
var _nth__7317 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7311 = coll;

if(cljs.core.truth_(and__3546__auto____7311))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7311;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7312 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{var or__3548__auto____7313 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7318 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7314 = coll;

if(cljs.core.truth_(and__3546__auto____7314))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7314;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7316 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
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
return _nth__7317.call(this,coll,n);
case  3 :
return _nth__7318.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = coll;

if(cljs.core.truth_(and__3546__auto____7320))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7320;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7322 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7323 = coll;

if(cljs.core.truth_(and__3546__auto____7323))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7323;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7325 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7325))
{return or__3548__auto____7325;
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
var _lookup__7332 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7326 = o;

if(cljs.core.truth_(and__3546__auto____7326))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7326;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7327 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{var or__3548__auto____7328 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7333 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = o;

if(cljs.core.truth_(and__3546__auto____7329))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7329;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{var or__3548__auto____7331 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
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
return _lookup__7332.call(this,o,k);
case  3 :
return _lookup__7333.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7335 = coll;

if(cljs.core.truth_(and__3546__auto____7335))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7335;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{var or__3548__auto____7337 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = coll;

if(cljs.core.truth_(and__3546__auto____7338))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7338;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7340 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7341 = coll;

if(cljs.core.truth_(and__3546__auto____7341))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7341;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7342 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{var or__3548__auto____7343 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = coll;

if(cljs.core.truth_(and__3546__auto____7344))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7344;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7345 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{var or__3548__auto____7346 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = coll;

if(cljs.core.truth_(and__3546__auto____7347))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7347;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7349 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7350 = coll;

if(cljs.core.truth_(and__3546__auto____7350))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7350;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7351 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{var or__3548__auto____7352 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7352))
{return or__3548__auto____7352;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = coll;

if(cljs.core.truth_(and__3546__auto____7353))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7353;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7354 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{var or__3548__auto____7355 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7356 = o;

if(cljs.core.truth_(and__3546__auto____7356))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7356;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7357 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{var or__3548__auto____7358 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = o;

if(cljs.core.truth_(and__3546__auto____7359))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7359;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7360 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{var or__3548__auto____7361 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = o;

if(cljs.core.truth_(and__3546__auto____7362))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7362;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7363 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{var or__3548__auto____7364 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7365 = o;

if(cljs.core.truth_(and__3546__auto____7365))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7365;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7366 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7366))
{return or__3548__auto____7366;
} else
{var or__3548__auto____7367 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
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
var _reduce__7374 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7368 = coll;

if(cljs.core.truth_(and__3546__auto____7368))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7368;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7369 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{var or__3548__auto____7370 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7375 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = coll;

if(cljs.core.truth_(and__3546__auto____7371))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7371;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7372 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{var or__3548__auto____7373 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
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
return _reduce__7374.call(this,coll,f);
case  3 :
return _reduce__7375.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = o;

if(cljs.core.truth_(and__3546__auto____7377))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7377;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7379 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7380 = o;

if(cljs.core.truth_(and__3546__auto____7380))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7380;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7381 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{var or__3548__auto____7382 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = o;

if(cljs.core.truth_(and__3546__auto____7383))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7383;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7384 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{var or__3548__auto____7385 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
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
if(cljs.core.truth_((function (){var and__3546__auto____7386 = o;

if(cljs.core.truth_(and__3546__auto____7386))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7386;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7388 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = d;

if(cljs.core.truth_(and__3546__auto____7389))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7389;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7390 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{var or__3548__auto____7391 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7392 = this$;

if(cljs.core.truth_(and__3546__auto____7392))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7392;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7394 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7395 = this$;

if(cljs.core.truth_(and__3546__auto____7395))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7395;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7397 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7400 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
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
var G__7401 = null;
var G__7401__7402 = (function (o,k){
return null;
});
var G__7401__7403 = (function (o,k,not_found){
return not_found;
});
G__7401 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7401__7402.call(this,o,k);
case  3 :
return G__7401__7403.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7401;
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
var G__7405 = null;
var G__7405__7406 = (function (_,f){
return f.call(null);
});
var G__7405__7407 = (function (_,f,start){
return start;
});
G__7405 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7405__7406.call(this,_,f);
case  3 :
return G__7405__7407.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7405;
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
var G__7409 = null;
var G__7409__7410 = (function (_,n){
return null;
});
var G__7409__7411 = (function (_,n,not_found){
return not_found;
});
G__7409 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7409__7410.call(this,_,n);
case  3 :
return G__7409__7411.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7409;
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
var ci_reduce__7419 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7413 = cljs.core._nth.call(null,cicoll,0);
var n__7414 = 1;

while(true){
if(cljs.core.truth_((n__7414 < cljs.core._count.call(null,cicoll))))
{{
var G__7423 = f.call(null,val__7413,cljs.core._nth.call(null,cicoll,n__7414));
var G__7424 = (n__7414 + 1);
val__7413 = G__7423;
n__7414 = G__7424;
continue;
}
} else
{return val__7413;
}
break;
}
}
});
var ci_reduce__7420 = (function (cicoll,f,val){
var val__7415 = val;
var n__7416 = 0;

while(true){
if(cljs.core.truth_((n__7416 < cljs.core._count.call(null,cicoll))))
{{
var G__7425 = f.call(null,val__7415,cljs.core._nth.call(null,cicoll,n__7416));
var G__7426 = (n__7416 + 1);
val__7415 = G__7425;
n__7416 = G__7426;
continue;
}
} else
{return val__7415;
}
break;
}
});
var ci_reduce__7421 = (function (cicoll,f,val,idx){
var val__7417 = val;
var n__7418 = idx;

while(true){
if(cljs.core.truth_((n__7418 < cljs.core._count.call(null,cicoll))))
{{
var G__7427 = f.call(null,val__7417,cljs.core._nth.call(null,cicoll,n__7418));
var G__7428 = (n__7418 + 1);
val__7417 = G__7427;
n__7418 = G__7428;
continue;
}
} else
{return val__7417;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7419.call(this,cicoll,f);
case  3 :
return ci_reduce__7420.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7421.call(this,cicoll,f,val,idx);
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
var this__7429 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7442 = null;
var G__7442__7443 = (function (_,f){
var this__7430 = this;
return cljs.core.ci_reduce.call(null,this__7430.a,f,(this__7430.a[this__7430.i]),(this__7430.i + 1));
});
var G__7442__7444 = (function (_,f,start){
var this__7431 = this;
return cljs.core.ci_reduce.call(null,this__7431.a,f,start,this__7431.i);
});
G__7442 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7442__7443.call(this,_,f);
case  3 :
return G__7442__7444.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7442;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7432 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7446 = null;
var G__7446__7447 = (function (coll,n){
var this__7434 = this;
var i__7435 = (n + this__7434.i);

if(cljs.core.truth_((i__7435 < this__7434.a.length)))
{return (this__7434.a[i__7435]);
} else
{return null;
}
});
var G__7446__7448 = (function (coll,n,not_found){
var this__7436 = this;
var i__7437 = (n + this__7436.i);

if(cljs.core.truth_((i__7437 < this__7436.a.length)))
{return (this__7436.a[i__7437]);
} else
{return not_found;
}
});
G__7446 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7446__7447.call(this,coll,n);
case  3 :
return G__7446__7448.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7446;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7438 = this;
return (this__7438.a.length - this__7438.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7439 = this;
return (this__7439.a[this__7439.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7440 = this;
if(cljs.core.truth_(((this__7440.i + 1) < this__7440.a.length)))
{return (new cljs.core.IndexedSeq(this__7440.a,(this__7440.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7441 = this;
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
var G__7450 = null;
var G__7450__7451 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7450__7452 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7450 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7450__7451.call(this,array,f);
case  3 :
return G__7450__7452.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7450;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7454 = null;
var G__7454__7455 = (function (array,k){
return (array[k]);
});
var G__7454__7456 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7454 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7454__7455.call(this,array,k);
case  3 :
return G__7454__7456.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7454;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7458 = null;
var G__7458__7459 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7458__7460 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7458 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7458__7459.call(this,array,n);
case  3 :
return G__7458__7460.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7458;
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
var temp__3698__auto____7462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7462))
{var s__7463 = temp__3698__auto____7462;

return cljs.core._first.call(null,s__7463);
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
var G__7464 = cljs.core.next.call(null,s);
s = G__7464;
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
var s__7465 = cljs.core.seq.call(null,x);
var n__7466 = 0;

while(true){
if(cljs.core.truth_(s__7465))
{{
var G__7467 = cljs.core.next.call(null,s__7465);
var G__7468 = (n__7466 + 1);
s__7465 = G__7467;
n__7466 = G__7468;
continue;
}
} else
{return n__7466;
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
var conj__7469 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7470 = (function() { 
var G__7472__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7473 = conj.call(null,coll,x);
var G__7474 = cljs.core.first.call(null,xs);
var G__7475 = cljs.core.next.call(null,xs);
coll = G__7473;
x = G__7474;
xs = G__7475;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7472 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7472__delegate.call(this, coll, x, xs);
};
G__7472.cljs$lang$maxFixedArity = 2;
G__7472.cljs$lang$applyTo = (function (arglist__7476){
var coll = cljs.core.first(arglist__7476);
var x = cljs.core.first(cljs.core.next(arglist__7476));
var xs = cljs.core.rest(cljs.core.next(arglist__7476));
return G__7472__delegate.call(this, coll, x, xs);
});
return G__7472;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7469.call(this,coll,x);
default:
return conj__7470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7470.cljs$lang$applyTo;
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
var nth__7477 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7478 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7477.call(this,coll,n);
case  3 :
return nth__7478.call(this,coll,n,not_found);
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
var get__7480 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7481 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7480.call(this,o,k);
case  3 :
return get__7481.call(this,o,k,not_found);
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
var assoc__7484 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7485 = (function() { 
var G__7487__delegate = function (coll,k,v,kvs){
while(true){
var ret__7483 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7488 = ret__7483;
var G__7489 = cljs.core.first.call(null,kvs);
var G__7490 = cljs.core.second.call(null,kvs);
var G__7491 = cljs.core.nnext.call(null,kvs);
coll = G__7488;
k = G__7489;
v = G__7490;
kvs = G__7491;
continue;
}
} else
{return ret__7483;
}
break;
}
};
var G__7487 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7487__delegate.call(this, coll, k, v, kvs);
};
G__7487.cljs$lang$maxFixedArity = 3;
G__7487.cljs$lang$applyTo = (function (arglist__7492){
var coll = cljs.core.first(arglist__7492);
var k = cljs.core.first(cljs.core.next(arglist__7492));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7492)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7492)));
return G__7487__delegate.call(this, coll, k, v, kvs);
});
return G__7487;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7484.call(this,coll,k,v);
default:
return assoc__7485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7485.cljs$lang$applyTo;
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
var dissoc__7494 = (function (coll){
return coll;
});
var dissoc__7495 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7496 = (function() { 
var G__7498__delegate = function (coll,k,ks){
while(true){
var ret__7493 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7499 = ret__7493;
var G__7500 = cljs.core.first.call(null,ks);
var G__7501 = cljs.core.next.call(null,ks);
coll = G__7499;
k = G__7500;
ks = G__7501;
continue;
}
} else
{return ret__7493;
}
break;
}
};
var G__7498 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7498__delegate.call(this, coll, k, ks);
};
G__7498.cljs$lang$maxFixedArity = 2;
G__7498.cljs$lang$applyTo = (function (arglist__7502){
var coll = cljs.core.first(arglist__7502);
var k = cljs.core.first(cljs.core.next(arglist__7502));
var ks = cljs.core.rest(cljs.core.next(arglist__7502));
return G__7498__delegate.call(this, coll, k, ks);
});
return G__7498;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7494.call(this,coll);
case  2 :
return dissoc__7495.call(this,coll,k);
default:
return dissoc__7496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7496.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____7503 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7504 = x__3028__auto____7503;

if(cljs.core.truth_(and__3546__auto____7504))
{var and__3546__auto____7505 = x__3028__auto____7503.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7505))
{return cljs.core.not.call(null,x__3028__auto____7503.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7505;
}
} else
{return and__3546__auto____7504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____7503);
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
var disj__7507 = (function (coll){
return coll;
});
var disj__7508 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7509 = (function() { 
var G__7511__delegate = function (coll,k,ks){
while(true){
var ret__7506 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7512 = ret__7506;
var G__7513 = cljs.core.first.call(null,ks);
var G__7514 = cljs.core.next.call(null,ks);
coll = G__7512;
k = G__7513;
ks = G__7514;
continue;
}
} else
{return ret__7506;
}
break;
}
};
var G__7511 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7511__delegate.call(this, coll, k, ks);
};
G__7511.cljs$lang$maxFixedArity = 2;
G__7511.cljs$lang$applyTo = (function (arglist__7515){
var coll = cljs.core.first(arglist__7515);
var k = cljs.core.first(cljs.core.next(arglist__7515));
var ks = cljs.core.rest(cljs.core.next(arglist__7515));
return G__7511__delegate.call(this, coll, k, ks);
});
return G__7511;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7507.call(this,coll);
case  2 :
return disj__7508.call(this,coll,k);
default:
return disj__7509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7509.cljs$lang$applyTo;
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
{var x__3028__auto____7516 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7517 = x__3028__auto____7516;

if(cljs.core.truth_(and__3546__auto____7517))
{var and__3546__auto____7518 = x__3028__auto____7516.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7518))
{return cljs.core.not.call(null,x__3028__auto____7516.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7518;
}
} else
{return and__3546__auto____7517;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____7516);
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
{var x__3028__auto____7519 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7520 = x__3028__auto____7519;

if(cljs.core.truth_(and__3546__auto____7520))
{var and__3546__auto____7521 = x__3028__auto____7519.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7521))
{return cljs.core.not.call(null,x__3028__auto____7519.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7521;
}
} else
{return and__3546__auto____7520;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____7519);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____7522 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7523 = x__3028__auto____7522;

if(cljs.core.truth_(and__3546__auto____7523))
{var and__3546__auto____7524 = x__3028__auto____7522.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7524))
{return cljs.core.not.call(null,x__3028__auto____7522.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7524;
}
} else
{return and__3546__auto____7523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____7522);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____7525 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7526 = x__3028__auto____7525;

if(cljs.core.truth_(and__3546__auto____7526))
{var and__3546__auto____7527 = x__3028__auto____7525.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7527))
{return cljs.core.not.call(null,x__3028__auto____7525.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7527;
}
} else
{return and__3546__auto____7526;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____7525);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____7528 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7529 = x__3028__auto____7528;

if(cljs.core.truth_(and__3546__auto____7529))
{var and__3546__auto____7530 = x__3028__auto____7528.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7530))
{return cljs.core.not.call(null,x__3028__auto____7528.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7530;
}
} else
{return and__3546__auto____7529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____7528);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____7531 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7532 = x__3028__auto____7531;

if(cljs.core.truth_(and__3546__auto____7532))
{var and__3546__auto____7533 = x__3028__auto____7531.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7533))
{return cljs.core.not.call(null,x__3028__auto____7531.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7533;
}
} else
{return and__3546__auto____7532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____7531);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____7534 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7535 = x__3028__auto____7534;

if(cljs.core.truth_(and__3546__auto____7535))
{var and__3546__auto____7536 = x__3028__auto____7534.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7536))
{return cljs.core.not.call(null,x__3028__auto____7534.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7536;
}
} else
{return and__3546__auto____7535;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____7534);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7537 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7537.push(key);
}));
return keys__7537;
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
{var x__3028__auto____7538 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7539 = x__3028__auto____7538;

if(cljs.core.truth_(and__3546__auto____7539))
{var and__3546__auto____7540 = x__3028__auto____7538.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7540))
{return cljs.core.not.call(null,x__3028__auto____7538.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7540;
}
} else
{return and__3546__auto____7539;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____7538);
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
var and__3546__auto____7541 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7541))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7542 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7541;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7543 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7543))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7543;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7544 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7544))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7544;
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
var and__3546__auto____7545 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7545))
{return (n == n.toFixed());
} else
{return and__3546__auto____7545;
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
if(cljs.core.truth_((function (){var and__3546__auto____7546 = coll;

if(cljs.core.truth_(and__3546__auto____7546))
{var and__3546__auto____7547 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7547))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7547;
}
} else
{return and__3546__auto____7546;
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
var distinct_QMARK___7552 = (function (x){
return true;
});
var distinct_QMARK___7553 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7554 = (function() { 
var G__7556__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7548 = cljs.core.set([y,x]);
var xs__7549 = more;

while(true){
var x__7550 = cljs.core.first.call(null,xs__7549);
var etc__7551 = cljs.core.next.call(null,xs__7549);

if(cljs.core.truth_(xs__7549))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7548,x__7550)))
{return false;
} else
{{
var G__7557 = cljs.core.conj.call(null,s__7548,x__7550);
var G__7558 = etc__7551;
s__7548 = G__7557;
xs__7549 = G__7558;
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
var G__7556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7556__delegate.call(this, x, y, more);
};
G__7556.cljs$lang$maxFixedArity = 2;
G__7556.cljs$lang$applyTo = (function (arglist__7559){
var x = cljs.core.first(arglist__7559);
var y = cljs.core.first(cljs.core.next(arglist__7559));
var more = cljs.core.rest(cljs.core.next(arglist__7559));
return G__7556__delegate.call(this, x, y, more);
});
return G__7556;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7552.call(this,x);
case  2 :
return distinct_QMARK___7553.call(this,x,y);
default:
return distinct_QMARK___7554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7554.cljs$lang$applyTo;
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
var r__7560 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7560)))
{return r__7560;
} else
{if(cljs.core.truth_(r__7560))
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
var sort__7562 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7563 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7561 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7561,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7561);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7562.call(this,comp);
case  2 :
return sort__7563.call(this,comp,coll);
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
var sort_by__7565 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7566 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7565.call(this,keyfn,comp);
case  3 :
return sort_by__7566.call(this,keyfn,comp,coll);
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
var reduce__7568 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7569 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7568.call(this,f,val);
case  3 :
return reduce__7569.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7575 = (function (f,coll){
var temp__3695__auto____7571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7571))
{var s__7572 = temp__3695__auto____7571;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7572),cljs.core.next.call(null,s__7572));
} else
{return f.call(null);
}
});
var seq_reduce__7576 = (function (f,val,coll){
var val__7573 = val;
var coll__7574 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7574))
{{
var G__7578 = f.call(null,val__7573,cljs.core.first.call(null,coll__7574));
var G__7579 = cljs.core.next.call(null,coll__7574);
val__7573 = G__7578;
coll__7574 = G__7579;
continue;
}
} else
{return val__7573;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7575.call(this,f,val);
case  3 :
return seq_reduce__7576.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7580 = null;
var G__7580__7581 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7580__7582 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7580 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7580__7581.call(this,coll,f);
case  3 :
return G__7580__7582.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7580;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7584 = (function (){
return 0;
});
var _PLUS___7585 = (function (x){
return x;
});
var _PLUS___7586 = (function (x,y){
return (x + y);
});
var _PLUS___7587 = (function() { 
var G__7589__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7589__delegate.call(this, x, y, more);
};
G__7589.cljs$lang$maxFixedArity = 2;
G__7589.cljs$lang$applyTo = (function (arglist__7590){
var x = cljs.core.first(arglist__7590);
var y = cljs.core.first(cljs.core.next(arglist__7590));
var more = cljs.core.rest(cljs.core.next(arglist__7590));
return G__7589__delegate.call(this, x, y, more);
});
return G__7589;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7584.call(this);
case  1 :
return _PLUS___7585.call(this,x);
case  2 :
return _PLUS___7586.call(this,x,y);
default:
return _PLUS___7587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7587.cljs$lang$applyTo;
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
var ___7591 = (function (x){
return (- x);
});
var ___7592 = (function (x,y){
return (x - y);
});
var ___7593 = (function() { 
var G__7595__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7595 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7595__delegate.call(this, x, y, more);
};
G__7595.cljs$lang$maxFixedArity = 2;
G__7595.cljs$lang$applyTo = (function (arglist__7596){
var x = cljs.core.first(arglist__7596);
var y = cljs.core.first(cljs.core.next(arglist__7596));
var more = cljs.core.rest(cljs.core.next(arglist__7596));
return G__7595__delegate.call(this, x, y, more);
});
return G__7595;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7591.call(this,x);
case  2 :
return ___7592.call(this,x,y);
default:
return ___7593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7593.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7597 = (function (){
return 1;
});
var _STAR___7598 = (function (x){
return x;
});
var _STAR___7599 = (function (x,y){
return (x * y);
});
var _STAR___7600 = (function() { 
var G__7602__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7602__delegate.call(this, x, y, more);
};
G__7602.cljs$lang$maxFixedArity = 2;
G__7602.cljs$lang$applyTo = (function (arglist__7603){
var x = cljs.core.first(arglist__7603);
var y = cljs.core.first(cljs.core.next(arglist__7603));
var more = cljs.core.rest(cljs.core.next(arglist__7603));
return G__7602__delegate.call(this, x, y, more);
});
return G__7602;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7597.call(this);
case  1 :
return _STAR___7598.call(this,x);
case  2 :
return _STAR___7599.call(this,x,y);
default:
return _STAR___7600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7600.cljs$lang$applyTo;
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
var _SLASH___7604 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7605 = (function (x,y){
return (x / y);
});
var _SLASH___7606 = (function() { 
var G__7608__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7608 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7608__delegate.call(this, x, y, more);
};
G__7608.cljs$lang$maxFixedArity = 2;
G__7608.cljs$lang$applyTo = (function (arglist__7609){
var x = cljs.core.first(arglist__7609);
var y = cljs.core.first(cljs.core.next(arglist__7609));
var more = cljs.core.rest(cljs.core.next(arglist__7609));
return G__7608__delegate.call(this, x, y, more);
});
return G__7608;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7604.call(this,x);
case  2 :
return _SLASH___7605.call(this,x,y);
default:
return _SLASH___7606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7606.cljs$lang$applyTo;
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
var _LT___7610 = (function (x){
return true;
});
var _LT___7611 = (function (x,y){
return (x < y);
});
var _LT___7612 = (function() { 
var G__7614__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7615 = y;
var G__7616 = cljs.core.first.call(null,more);
var G__7617 = cljs.core.next.call(null,more);
x = G__7615;
y = G__7616;
more = G__7617;
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
var G__7614 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7614__delegate.call(this, x, y, more);
};
G__7614.cljs$lang$maxFixedArity = 2;
G__7614.cljs$lang$applyTo = (function (arglist__7618){
var x = cljs.core.first(arglist__7618);
var y = cljs.core.first(cljs.core.next(arglist__7618));
var more = cljs.core.rest(cljs.core.next(arglist__7618));
return G__7614__delegate.call(this, x, y, more);
});
return G__7614;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7610.call(this,x);
case  2 :
return _LT___7611.call(this,x,y);
default:
return _LT___7612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7612.cljs$lang$applyTo;
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
var _LT__EQ___7619 = (function (x){
return true;
});
var _LT__EQ___7620 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7621 = (function() { 
var G__7623__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7624 = y;
var G__7625 = cljs.core.first.call(null,more);
var G__7626 = cljs.core.next.call(null,more);
x = G__7624;
y = G__7625;
more = G__7626;
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
var G__7623 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7623__delegate.call(this, x, y, more);
};
G__7623.cljs$lang$maxFixedArity = 2;
G__7623.cljs$lang$applyTo = (function (arglist__7627){
var x = cljs.core.first(arglist__7627);
var y = cljs.core.first(cljs.core.next(arglist__7627));
var more = cljs.core.rest(cljs.core.next(arglist__7627));
return G__7623__delegate.call(this, x, y, more);
});
return G__7623;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7619.call(this,x);
case  2 :
return _LT__EQ___7620.call(this,x,y);
default:
return _LT__EQ___7621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7621.cljs$lang$applyTo;
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
var _GT___7628 = (function (x){
return true;
});
var _GT___7629 = (function (x,y){
return (x > y);
});
var _GT___7630 = (function() { 
var G__7632__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7633 = y;
var G__7634 = cljs.core.first.call(null,more);
var G__7635 = cljs.core.next.call(null,more);
x = G__7633;
y = G__7634;
more = G__7635;
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
var G__7632 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7632__delegate.call(this, x, y, more);
};
G__7632.cljs$lang$maxFixedArity = 2;
G__7632.cljs$lang$applyTo = (function (arglist__7636){
var x = cljs.core.first(arglist__7636);
var y = cljs.core.first(cljs.core.next(arglist__7636));
var more = cljs.core.rest(cljs.core.next(arglist__7636));
return G__7632__delegate.call(this, x, y, more);
});
return G__7632;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7628.call(this,x);
case  2 :
return _GT___7629.call(this,x,y);
default:
return _GT___7630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7630.cljs$lang$applyTo;
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
var _GT__EQ___7637 = (function (x){
return true;
});
var _GT__EQ___7638 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7639 = (function() { 
var G__7641__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7642 = y;
var G__7643 = cljs.core.first.call(null,more);
var G__7644 = cljs.core.next.call(null,more);
x = G__7642;
y = G__7643;
more = G__7644;
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
var G__7641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7641__delegate.call(this, x, y, more);
};
G__7641.cljs$lang$maxFixedArity = 2;
G__7641.cljs$lang$applyTo = (function (arglist__7645){
var x = cljs.core.first(arglist__7645);
var y = cljs.core.first(cljs.core.next(arglist__7645));
var more = cljs.core.rest(cljs.core.next(arglist__7645));
return G__7641__delegate.call(this, x, y, more);
});
return G__7641;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7637.call(this,x);
case  2 :
return _GT__EQ___7638.call(this,x,y);
default:
return _GT__EQ___7639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7639.cljs$lang$applyTo;
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
var max__7646 = (function (x){
return x;
});
var max__7647 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7648 = (function() { 
var G__7650__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7650__delegate.call(this, x, y, more);
};
G__7650.cljs$lang$maxFixedArity = 2;
G__7650.cljs$lang$applyTo = (function (arglist__7651){
var x = cljs.core.first(arglist__7651);
var y = cljs.core.first(cljs.core.next(arglist__7651));
var more = cljs.core.rest(cljs.core.next(arglist__7651));
return G__7650__delegate.call(this, x, y, more);
});
return G__7650;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7646.call(this,x);
case  2 :
return max__7647.call(this,x,y);
default:
return max__7648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7648.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7652 = (function (x){
return x;
});
var min__7653 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7654 = (function() { 
var G__7656__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7656__delegate.call(this, x, y, more);
};
G__7656.cljs$lang$maxFixedArity = 2;
G__7656.cljs$lang$applyTo = (function (arglist__7657){
var x = cljs.core.first(arglist__7657);
var y = cljs.core.first(cljs.core.next(arglist__7657));
var more = cljs.core.rest(cljs.core.next(arglist__7657));
return G__7656__delegate.call(this, x, y, more);
});
return G__7656;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7652.call(this,x);
case  2 :
return min__7653.call(this,x,y);
default:
return min__7654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7654.cljs$lang$applyTo;
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
var rem__7658 = (n % d);

return cljs.core.fix.call(null,((n - rem__7658) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7659 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7659));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7660 = (function (){
return Math.random.call(null);
});
var rand__7661 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7660.call(this);
case  1 :
return rand__7661.call(this,n);
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
var _EQ__EQ___7663 = (function (x){
return true;
});
var _EQ__EQ___7664 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7665 = (function() { 
var G__7667__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7668 = y;
var G__7669 = cljs.core.first.call(null,more);
var G__7670 = cljs.core.next.call(null,more);
x = G__7668;
y = G__7669;
more = G__7670;
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
var G__7667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7667__delegate.call(this, x, y, more);
};
G__7667.cljs$lang$maxFixedArity = 2;
G__7667.cljs$lang$applyTo = (function (arglist__7671){
var x = cljs.core.first(arglist__7671);
var y = cljs.core.first(cljs.core.next(arglist__7671));
var more = cljs.core.rest(cljs.core.next(arglist__7671));
return G__7667__delegate.call(this, x, y, more);
});
return G__7667;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7663.call(this,x);
case  2 :
return _EQ__EQ___7664.call(this,x,y);
default:
return _EQ__EQ___7665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7665.cljs$lang$applyTo;
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
var n__7672 = n;
var xs__7673 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7674 = xs__7673;

if(cljs.core.truth_(and__3546__auto____7674))
{return (n__7672 > 0);
} else
{return and__3546__auto____7674;
}
})()))
{{
var G__7675 = (n__7672 - 1);
var G__7676 = cljs.core.next.call(null,xs__7673);
n__7672 = G__7675;
xs__7673 = G__7676;
continue;
}
} else
{return xs__7673;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7681 = null;
var G__7681__7682 = (function (coll,n){
var temp__3695__auto____7677 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7677))
{var xs__7678 = temp__3695__auto____7677;

return cljs.core.first.call(null,xs__7678);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7681__7683 = (function (coll,n,not_found){
var temp__3695__auto____7679 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7679))
{var xs__7680 = temp__3695__auto____7679;

return cljs.core.first.call(null,xs__7680);
} else
{return not_found;
}
});
G__7681 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7681__7682.call(this,coll,n);
case  3 :
return G__7681__7683.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7681;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7685 = (function (){
return "";
});
var str_STAR___7686 = (function (x){
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
var str_STAR___7687 = (function() { 
var G__7689__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7690 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7691 = cljs.core.next.call(null,more);
sb = G__7690;
more = G__7691;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7689 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7689__delegate.call(this, x, ys);
};
G__7689.cljs$lang$maxFixedArity = 1;
G__7689.cljs$lang$applyTo = (function (arglist__7692){
var x = cljs.core.first(arglist__7692);
var ys = cljs.core.rest(arglist__7692);
return G__7689__delegate.call(this, x, ys);
});
return G__7689;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7685.call(this);
case  1 :
return str_STAR___7686.call(this,x);
default:
return str_STAR___7687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7687.cljs$lang$applyTo;
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
var str__7693 = (function (){
return "";
});
var str__7694 = (function (x){
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
var str__7695 = (function() { 
var G__7697__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7698 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7699 = cljs.core.next.call(null,more);
sb = G__7698;
more = G__7699;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7697 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7697__delegate.call(this, x, ys);
};
G__7697.cljs$lang$maxFixedArity = 1;
G__7697.cljs$lang$applyTo = (function (arglist__7700){
var x = cljs.core.first(arglist__7700);
var ys = cljs.core.rest(arglist__7700);
return G__7697__delegate.call(this, x, ys);
});
return G__7697;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7693.call(this);
case  1 :
return str__7694.call(this,x);
default:
return str__7695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7695.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7701 = (function (s,start){
return s.substring(start);
});
var subs__7702 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7701.call(this,s,start);
case  3 :
return subs__7702.call(this,s,start,end);
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
var symbol__7704 = (function (name){
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
var symbol__7705 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7704.call(this,ns);
case  2 :
return symbol__7705.call(this,ns,name);
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
var keyword__7707 = (function (name){
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
var keyword__7708 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7707.call(this,ns);
case  2 :
return keyword__7708.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7710 = cljs.core.seq.call(null,x);
var ys__7711 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7710 === null)))
{return (ys__7711 === null);
} else
{if(cljs.core.truth_((ys__7711 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7710),cljs.core.first.call(null,ys__7711))))
{{
var G__7712 = cljs.core.next.call(null,xs__7710);
var G__7713 = cljs.core.next.call(null,ys__7711);
xs__7710 = G__7712;
ys__7711 = G__7713;
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
return cljs.core.reduce.call(null,(function (p1__7714_SHARP_,p2__7715_SHARP_){
return cljs.core.hash_combine.call(null,p1__7714_SHARP_,cljs.core.hash.call(null,p2__7715_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7716__7717 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7716__7717))
{var G__7719__7721 = cljs.core.first.call(null,G__7716__7717);
var vec__7720__7722 = G__7719__7721;
var key_name__7723 = cljs.core.nth.call(null,vec__7720__7722,0,null);
var f__7724 = cljs.core.nth.call(null,vec__7720__7722,1,null);
var G__7716__7725 = G__7716__7717;

var G__7719__7726 = G__7719__7721;
var G__7716__7727 = G__7716__7725;

while(true){
var vec__7728__7729 = G__7719__7726;
var key_name__7730 = cljs.core.nth.call(null,vec__7728__7729,0,null);
var f__7731 = cljs.core.nth.call(null,vec__7728__7729,1,null);
var G__7716__7732 = G__7716__7727;

var str_name__7733 = cljs.core.name.call(null,key_name__7730);

obj[str_name__7733] = f__7731;
var temp__3698__auto____7734 = cljs.core.next.call(null,G__7716__7732);

if(cljs.core.truth_(temp__3698__auto____7734))
{var G__7716__7735 = temp__3698__auto____7734;

{
var G__7736 = cljs.core.first.call(null,G__7716__7735);
var G__7737 = G__7716__7735;
G__7719__7726 = G__7736;
G__7716__7727 = G__7737;
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
var this__7738 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7739 = this;
return (new cljs.core.List(this__7739.meta,o,coll,(this__7739.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7740 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7741 = this;
return this__7741.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7742 = this;
return this__7742.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7743 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7744 = this;
return this__7744.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7745 = this;
return this__7745.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7746 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7747 = this;
return (new cljs.core.List(meta,this__7747.first,this__7747.rest,this__7747.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7748 = this;
return this__7748.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7749 = this;
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
var this__7750 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7751 = this;
return (new cljs.core.List(this__7751.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7752 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7753 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7754 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7755 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7756 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7758 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7759 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7760 = this;
return this__7760.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7761 = this;
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
list.cljs$lang$applyTo = (function (arglist__7762){
var items = cljs.core.seq( arglist__7762 );;
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
var this__7763 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7764 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7765 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7766 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7766.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7767 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7768 = this;
return this__7768.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7769 = this;
if(cljs.core.truth_((this__7769.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7769.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7770 = this;
return this__7770.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7771 = this;
return (new cljs.core.Cons(meta,this__7771.first,this__7771.rest));
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
var G__7772 = null;
var G__7772__7773 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7772__7774 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7772 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7772__7773.call(this,string,f);
case  3 :
return G__7772__7774.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7772;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7776 = null;
var G__7776__7777 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7776__7778 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7776 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7776__7777.call(this,string,k);
case  3 :
return G__7776__7778.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7776;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7780 = null;
var G__7780__7781 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7780__7782 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7780 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7780__7781.call(this,string,n);
case  3 :
return G__7780__7782.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7780;
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
var G__7790 = null;
var G__7790__7791 = (function (tsym7784,coll){
var tsym7784__7786 = this;

var this$__7787 = tsym7784__7786;

return cljs.core.get.call(null,coll,this$__7787.toString());
});
var G__7790__7792 = (function (tsym7785,coll,not_found){
var tsym7785__7788 = this;

var this$__7789 = tsym7785__7788;

return cljs.core.get.call(null,coll,this$__7789.toString(),not_found);
});
G__7790 = function(tsym7785,coll,not_found){
switch(arguments.length){
case  2 :
return G__7790__7791.call(this,tsym7785,coll);
case  3 :
return G__7790__7792.call(this,tsym7785,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7790;
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
var x__7794 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7794;
} else
{lazy_seq.x = x__7794.call(null);
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
var this__7795 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7796 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7798 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7798.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7799 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7800 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7801 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7802 = this;
return this__7802.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7803 = this;
return (new cljs.core.LazySeq(meta,this__7803.realized,this__7803.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7804 = [];

var s__7805 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7805)))
{ary__7804.push(cljs.core.first.call(null,s__7805));
{
var G__7806 = cljs.core.next.call(null,s__7805);
s__7805 = G__7806;
continue;
}
} else
{return ary__7804;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7807 = s;
var i__7808 = n;
var sum__7809 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = (i__7808 > 0);

if(cljs.core.truth_(and__3546__auto____7810))
{return cljs.core.seq.call(null,s__7807);
} else
{return and__3546__auto____7810;
}
})()))
{{
var G__7811 = cljs.core.next.call(null,s__7807);
var G__7812 = (i__7808 - 1);
var G__7813 = (sum__7809 + 1);
s__7807 = G__7811;
i__7808 = G__7812;
sum__7809 = G__7813;
continue;
}
} else
{return sum__7809;
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
var concat__7817 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7818 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7819 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7814 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7814))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7814),concat.call(null,cljs.core.rest.call(null,s__7814),y));
} else
{return y;
}
})));
});
var concat__7820 = (function() { 
var G__7822__delegate = function (x,y,zs){
var cat__7816 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7815 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7815))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7815),cat.call(null,cljs.core.rest.call(null,xys__7815),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7816.call(null,concat.call(null,x,y),zs);
};
var G__7822 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7822__delegate.call(this, x, y, zs);
};
G__7822.cljs$lang$maxFixedArity = 2;
G__7822.cljs$lang$applyTo = (function (arglist__7823){
var x = cljs.core.first(arglist__7823);
var y = cljs.core.first(cljs.core.next(arglist__7823));
var zs = cljs.core.rest(cljs.core.next(arglist__7823));
return G__7822__delegate.call(this, x, y, zs);
});
return G__7822;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7817.call(this);
case  1 :
return concat__7818.call(this,x);
case  2 :
return concat__7819.call(this,x,y);
default:
return concat__7820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7820.cljs$lang$applyTo;
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
var list_STAR___7824 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7825 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7826 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7827 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7828 = (function() { 
var G__7830__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7830 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7830__delegate.call(this, a, b, c, d, more);
};
G__7830.cljs$lang$maxFixedArity = 4;
G__7830.cljs$lang$applyTo = (function (arglist__7831){
var a = cljs.core.first(arglist__7831);
var b = cljs.core.first(cljs.core.next(arglist__7831));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7831)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7831))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7831))));
return G__7830__delegate.call(this, a, b, c, d, more);
});
return G__7830;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7824.call(this,a);
case  2 :
return list_STAR___7825.call(this,a,b);
case  3 :
return list_STAR___7826.call(this,a,b,c);
case  4 :
return list_STAR___7827.call(this,a,b,c,d);
default:
return list_STAR___7828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7828.cljs$lang$applyTo;
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
var apply__7841 = (function (f,args){
var fixed_arity__7832 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7832 + 1)) <= fixed_arity__7832)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7842 = (function (f,x,args){
var arglist__7833 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7834 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7833,fixed_arity__7834) <= fixed_arity__7834)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7833));
} else
{return f.cljs$lang$applyTo(arglist__7833);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7833));
}
});
var apply__7843 = (function (f,x,y,args){
var arglist__7835 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7836 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7835,fixed_arity__7836) <= fixed_arity__7836)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7835));
} else
{return f.cljs$lang$applyTo(arglist__7835);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7835));
}
});
var apply__7844 = (function (f,x,y,z,args){
var arglist__7837 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7838 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7837,fixed_arity__7838) <= fixed_arity__7838)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7837));
} else
{return f.cljs$lang$applyTo(arglist__7837);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7837));
}
});
var apply__7845 = (function() { 
var G__7847__delegate = function (f,a,b,c,d,args){
var arglist__7839 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7840 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7839,fixed_arity__7840) <= fixed_arity__7840)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7839));
} else
{return f.cljs$lang$applyTo(arglist__7839);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7839));
}
};
var G__7847 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7847__delegate.call(this, f, a, b, c, d, args);
};
G__7847.cljs$lang$maxFixedArity = 5;
G__7847.cljs$lang$applyTo = (function (arglist__7848){
var f = cljs.core.first(arglist__7848);
var a = cljs.core.first(cljs.core.next(arglist__7848));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7848)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7848))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7848)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7848)))));
return G__7847__delegate.call(this, f, a, b, c, d, args);
});
return G__7847;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7841.call(this,f,a);
case  3 :
return apply__7842.call(this,f,a,b);
case  4 :
return apply__7843.call(this,f,a,b,c);
case  5 :
return apply__7844.call(this,f,a,b,c,d);
default:
return apply__7845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7845.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7849){
var obj = cljs.core.first(arglist__7849);
var f = cljs.core.first(cljs.core.next(arglist__7849));
var args = cljs.core.rest(cljs.core.next(arglist__7849));
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
var not_EQ___7850 = (function (x){
return false;
});
var not_EQ___7851 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7852 = (function() { 
var G__7854__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7854 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7854__delegate.call(this, x, y, more);
};
G__7854.cljs$lang$maxFixedArity = 2;
G__7854.cljs$lang$applyTo = (function (arglist__7855){
var x = cljs.core.first(arglist__7855);
var y = cljs.core.first(cljs.core.next(arglist__7855));
var more = cljs.core.rest(cljs.core.next(arglist__7855));
return G__7854__delegate.call(this, x, y, more);
});
return G__7854;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7850.call(this,x);
case  2 :
return not_EQ___7851.call(this,x,y);
default:
return not_EQ___7852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7852.cljs$lang$applyTo;
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
var G__7856 = pred;
var G__7857 = cljs.core.next.call(null,coll);
pred = G__7856;
coll = G__7857;
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
{var or__3548__auto____7858 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{{
var G__7859 = pred;
var G__7860 = cljs.core.next.call(null,coll);
pred = G__7859;
coll = G__7860;
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
var G__7861 = null;
var G__7861__7862 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7861__7863 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7861__7864 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7861__7865 = (function() { 
var G__7867__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7867 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7867__delegate.call(this, x, y, zs);
};
G__7867.cljs$lang$maxFixedArity = 2;
G__7867.cljs$lang$applyTo = (function (arglist__7868){
var x = cljs.core.first(arglist__7868);
var y = cljs.core.first(cljs.core.next(arglist__7868));
var zs = cljs.core.rest(cljs.core.next(arglist__7868));
return G__7867__delegate.call(this, x, y, zs);
});
return G__7867;
})()
;
G__7861 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7861__7862.call(this);
case  1 :
return G__7861__7863.call(this,x);
case  2 :
return G__7861__7864.call(this,x,y);
default:
return G__7861__7865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7861.cljs$lang$maxFixedArity = 2;
G__7861.cljs$lang$applyTo = G__7861__7865.cljs$lang$applyTo;
return G__7861;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7869__delegate = function (args){
return x;
};
var G__7869 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7869__delegate.call(this, args);
};
G__7869.cljs$lang$maxFixedArity = 0;
G__7869.cljs$lang$applyTo = (function (arglist__7870){
var args = cljs.core.seq( arglist__7870 );;
return G__7869__delegate.call(this, args);
});
return G__7869;
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
var comp__7874 = (function (){
return cljs.core.identity;
});
var comp__7875 = (function (f){
return f;
});
var comp__7876 = (function (f,g){
return (function() {
var G__7880 = null;
var G__7880__7881 = (function (){
return f.call(null,g.call(null));
});
var G__7880__7882 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7880__7883 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7880__7884 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7880__7885 = (function() { 
var G__7887__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7887 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7887__delegate.call(this, x, y, z, args);
};
G__7887.cljs$lang$maxFixedArity = 3;
G__7887.cljs$lang$applyTo = (function (arglist__7888){
var x = cljs.core.first(arglist__7888);
var y = cljs.core.first(cljs.core.next(arglist__7888));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7888)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7888)));
return G__7887__delegate.call(this, x, y, z, args);
});
return G__7887;
})()
;
G__7880 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7880__7881.call(this);
case  1 :
return G__7880__7882.call(this,x);
case  2 :
return G__7880__7883.call(this,x,y);
case  3 :
return G__7880__7884.call(this,x,y,z);
default:
return G__7880__7885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7880.cljs$lang$maxFixedArity = 3;
G__7880.cljs$lang$applyTo = G__7880__7885.cljs$lang$applyTo;
return G__7880;
})()
});
var comp__7877 = (function (f,g,h){
return (function() {
var G__7889 = null;
var G__7889__7890 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7889__7891 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7889__7892 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7889__7893 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7889__7894 = (function() { 
var G__7896__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7896 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7896__delegate.call(this, x, y, z, args);
};
G__7896.cljs$lang$maxFixedArity = 3;
G__7896.cljs$lang$applyTo = (function (arglist__7897){
var x = cljs.core.first(arglist__7897);
var y = cljs.core.first(cljs.core.next(arglist__7897));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7897)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7897)));
return G__7896__delegate.call(this, x, y, z, args);
});
return G__7896;
})()
;
G__7889 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7889__7890.call(this);
case  1 :
return G__7889__7891.call(this,x);
case  2 :
return G__7889__7892.call(this,x,y);
case  3 :
return G__7889__7893.call(this,x,y,z);
default:
return G__7889__7894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7889.cljs$lang$maxFixedArity = 3;
G__7889.cljs$lang$applyTo = G__7889__7894.cljs$lang$applyTo;
return G__7889;
})()
});
var comp__7878 = (function() { 
var G__7898__delegate = function (f1,f2,f3,fs){
var fs__7871 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7899__delegate = function (args){
var ret__7872 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7871),args);
var fs__7873 = cljs.core.next.call(null,fs__7871);

while(true){
if(cljs.core.truth_(fs__7873))
{{
var G__7900 = cljs.core.first.call(null,fs__7873).call(null,ret__7872);
var G__7901 = cljs.core.next.call(null,fs__7873);
ret__7872 = G__7900;
fs__7873 = G__7901;
continue;
}
} else
{return ret__7872;
}
break;
}
};
var G__7899 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7899__delegate.call(this, args);
};
G__7899.cljs$lang$maxFixedArity = 0;
G__7899.cljs$lang$applyTo = (function (arglist__7902){
var args = cljs.core.seq( arglist__7902 );;
return G__7899__delegate.call(this, args);
});
return G__7899;
})()
;
};
var G__7898 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7898__delegate.call(this, f1, f2, f3, fs);
};
G__7898.cljs$lang$maxFixedArity = 3;
G__7898.cljs$lang$applyTo = (function (arglist__7903){
var f1 = cljs.core.first(arglist__7903);
var f2 = cljs.core.first(cljs.core.next(arglist__7903));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7903)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7903)));
return G__7898__delegate.call(this, f1, f2, f3, fs);
});
return G__7898;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7874.call(this);
case  1 :
return comp__7875.call(this,f1);
case  2 :
return comp__7876.call(this,f1,f2);
case  3 :
return comp__7877.call(this,f1,f2,f3);
default:
return comp__7878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7878.cljs$lang$applyTo;
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
var partial__7904 = (function (f,arg1){
return (function() { 
var G__7909__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7909 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7909__delegate.call(this, args);
};
G__7909.cljs$lang$maxFixedArity = 0;
G__7909.cljs$lang$applyTo = (function (arglist__7910){
var args = cljs.core.seq( arglist__7910 );;
return G__7909__delegate.call(this, args);
});
return G__7909;
})()
;
});
var partial__7905 = (function (f,arg1,arg2){
return (function() { 
var G__7911__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7911__delegate.call(this, args);
};
G__7911.cljs$lang$maxFixedArity = 0;
G__7911.cljs$lang$applyTo = (function (arglist__7912){
var args = cljs.core.seq( arglist__7912 );;
return G__7911__delegate.call(this, args);
});
return G__7911;
})()
;
});
var partial__7906 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7913__delegate.call(this, args);
};
G__7913.cljs$lang$maxFixedArity = 0;
G__7913.cljs$lang$applyTo = (function (arglist__7914){
var args = cljs.core.seq( arglist__7914 );;
return G__7913__delegate.call(this, args);
});
return G__7913;
})()
;
});
var partial__7907 = (function() { 
var G__7915__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7916__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7916__delegate.call(this, args);
};
G__7916.cljs$lang$maxFixedArity = 0;
G__7916.cljs$lang$applyTo = (function (arglist__7917){
var args = cljs.core.seq( arglist__7917 );;
return G__7916__delegate.call(this, args);
});
return G__7916;
})()
;
};
var G__7915 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7915__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7915.cljs$lang$maxFixedArity = 4;
G__7915.cljs$lang$applyTo = (function (arglist__7918){
var f = cljs.core.first(arglist__7918);
var arg1 = cljs.core.first(cljs.core.next(arglist__7918));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7918)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7918))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7918))));
return G__7915__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7915;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7904.call(this,f,arg1);
case  3 :
return partial__7905.call(this,f,arg1,arg2);
case  4 :
return partial__7906.call(this,f,arg1,arg2,arg3);
default:
return partial__7907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7907.cljs$lang$applyTo;
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
var fnil__7919 = (function (f,x){
return (function() {
var G__7923 = null;
var G__7923__7924 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7923__7925 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7923__7926 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7923__7927 = (function() { 
var G__7929__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7929 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7929__delegate.call(this, a, b, c, ds);
};
G__7929.cljs$lang$maxFixedArity = 3;
G__7929.cljs$lang$applyTo = (function (arglist__7930){
var a = cljs.core.first(arglist__7930);
var b = cljs.core.first(cljs.core.next(arglist__7930));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7930)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7930)));
return G__7929__delegate.call(this, a, b, c, ds);
});
return G__7929;
})()
;
G__7923 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7923__7924.call(this,a);
case  2 :
return G__7923__7925.call(this,a,b);
case  3 :
return G__7923__7926.call(this,a,b,c);
default:
return G__7923__7927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7923.cljs$lang$maxFixedArity = 3;
G__7923.cljs$lang$applyTo = G__7923__7927.cljs$lang$applyTo;
return G__7923;
})()
});
var fnil__7920 = (function (f,x,y){
return (function() {
var G__7931 = null;
var G__7931__7932 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7931__7933 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7931__7934 = (function() { 
var G__7936__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7936 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7936__delegate.call(this, a, b, c, ds);
};
G__7936.cljs$lang$maxFixedArity = 3;
G__7936.cljs$lang$applyTo = (function (arglist__7937){
var a = cljs.core.first(arglist__7937);
var b = cljs.core.first(cljs.core.next(arglist__7937));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7937)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7937)));
return G__7936__delegate.call(this, a, b, c, ds);
});
return G__7936;
})()
;
G__7931 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7931__7932.call(this,a,b);
case  3 :
return G__7931__7933.call(this,a,b,c);
default:
return G__7931__7934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7931.cljs$lang$maxFixedArity = 3;
G__7931.cljs$lang$applyTo = G__7931__7934.cljs$lang$applyTo;
return G__7931;
})()
});
var fnil__7921 = (function (f,x,y,z){
return (function() {
var G__7938 = null;
var G__7938__7939 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7938__7940 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7938__7941 = (function() { 
var G__7943__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7943 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7943__delegate.call(this, a, b, c, ds);
};
G__7943.cljs$lang$maxFixedArity = 3;
G__7943.cljs$lang$applyTo = (function (arglist__7944){
var a = cljs.core.first(arglist__7944);
var b = cljs.core.first(cljs.core.next(arglist__7944));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7944)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7944)));
return G__7943__delegate.call(this, a, b, c, ds);
});
return G__7943;
})()
;
G__7938 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7938__7939.call(this,a,b);
case  3 :
return G__7938__7940.call(this,a,b,c);
default:
return G__7938__7941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7938.cljs$lang$maxFixedArity = 3;
G__7938.cljs$lang$applyTo = G__7938__7941.cljs$lang$applyTo;
return G__7938;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7919.call(this,f,x);
case  3 :
return fnil__7920.call(this,f,x,y);
case  4 :
return fnil__7921.call(this,f,x,y,z);
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
var mapi__7947 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7945))
{var s__7946 = temp__3698__auto____7945;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7946)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7946)));
} else
{return null;
}
})));
});

return mapi__7947.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7948))
{var s__7949 = temp__3698__auto____7948;

var x__7950 = f.call(null,cljs.core.first.call(null,s__7949));

if(cljs.core.truth_((x__7950 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7949));
} else
{return cljs.core.cons.call(null,x__7950,keep.call(null,f,cljs.core.rest.call(null,s__7949)));
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
var keepi__7960 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7957 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7957))
{var s__7958 = temp__3698__auto____7957;

var x__7959 = f.call(null,idx,cljs.core.first.call(null,s__7958));

if(cljs.core.truth_((x__7959 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7958));
} else
{return cljs.core.cons.call(null,x__7959,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7958)));
}
} else
{return null;
}
})));
});

return keepi__7960.call(null,0,coll);
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
var every_pred__8005 = (function (p){
return (function() {
var ep1 = null;
var ep1__8010 = (function (){
return true;
});
var ep1__8011 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8012 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7967 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7967))
{return p.call(null,y);
} else
{return and__3546__auto____7967;
}
})());
});
var ep1__8013 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7968 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7968))
{var and__3546__auto____7969 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7969))
{return p.call(null,z);
} else
{return and__3546__auto____7969;
}
} else
{return and__3546__auto____7968;
}
})());
});
var ep1__8014 = (function() { 
var G__8016__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7970 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7970))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7970;
}
})());
};
var G__8016 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8016__delegate.call(this, x, y, z, args);
};
G__8016.cljs$lang$maxFixedArity = 3;
G__8016.cljs$lang$applyTo = (function (arglist__8017){
var x = cljs.core.first(arglist__8017);
var y = cljs.core.first(cljs.core.next(arglist__8017));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8017)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8017)));
return G__8016__delegate.call(this, x, y, z, args);
});
return G__8016;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8010.call(this);
case  1 :
return ep1__8011.call(this,x);
case  2 :
return ep1__8012.call(this,x,y);
case  3 :
return ep1__8013.call(this,x,y,z);
default:
return ep1__8014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8014.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8006 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8018 = (function (){
return true;
});
var ep2__8019 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7971 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7971))
{return p2.call(null,x);
} else
{return and__3546__auto____7971;
}
})());
});
var ep2__8020 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7972))
{var and__3546__auto____7973 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7973))
{var and__3546__auto____7974 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7974))
{return p2.call(null,y);
} else
{return and__3546__auto____7974;
}
} else
{return and__3546__auto____7973;
}
} else
{return and__3546__auto____7972;
}
})());
});
var ep2__8021 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7975 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7975))
{var and__3546__auto____7976 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7976))
{var and__3546__auto____7977 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7977))
{var and__3546__auto____7978 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7978))
{var and__3546__auto____7979 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7979))
{return p2.call(null,z);
} else
{return and__3546__auto____7979;
}
} else
{return and__3546__auto____7978;
}
} else
{return and__3546__auto____7977;
}
} else
{return and__3546__auto____7976;
}
} else
{return and__3546__auto____7975;
}
})());
});
var ep2__8022 = (function() { 
var G__8024__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7980 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7980))
{return cljs.core.every_QMARK_.call(null,(function (p1__7951_SHARP_){
var and__3546__auto____7981 = p1.call(null,p1__7951_SHARP_);

if(cljs.core.truth_(and__3546__auto____7981))
{return p2.call(null,p1__7951_SHARP_);
} else
{return and__3546__auto____7981;
}
}),args);
} else
{return and__3546__auto____7980;
}
})());
};
var G__8024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8024__delegate.call(this, x, y, z, args);
};
G__8024.cljs$lang$maxFixedArity = 3;
G__8024.cljs$lang$applyTo = (function (arglist__8025){
var x = cljs.core.first(arglist__8025);
var y = cljs.core.first(cljs.core.next(arglist__8025));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8025)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8025)));
return G__8024__delegate.call(this, x, y, z, args);
});
return G__8024;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8018.call(this);
case  1 :
return ep2__8019.call(this,x);
case  2 :
return ep2__8020.call(this,x,y);
case  3 :
return ep2__8021.call(this,x,y,z);
default:
return ep2__8022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8022.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8007 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8026 = (function (){
return true;
});
var ep3__8027 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7982 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7982))
{var and__3546__auto____7983 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7983))
{return p3.call(null,x);
} else
{return and__3546__auto____7983;
}
} else
{return and__3546__auto____7982;
}
})());
});
var ep3__8028 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7984 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7984))
{var and__3546__auto____7985 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7985))
{var and__3546__auto____7986 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7986))
{var and__3546__auto____7987 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7987))
{var and__3546__auto____7988 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7988))
{return p3.call(null,y);
} else
{return and__3546__auto____7988;
}
} else
{return and__3546__auto____7987;
}
} else
{return and__3546__auto____7986;
}
} else
{return and__3546__auto____7985;
}
} else
{return and__3546__auto____7984;
}
})());
});
var ep3__8029 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7989 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7989))
{var and__3546__auto____7990 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7990))
{var and__3546__auto____7991 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7991))
{var and__3546__auto____7992 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7992))
{var and__3546__auto____7993 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7993))
{var and__3546__auto____7994 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7994))
{var and__3546__auto____7995 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7995))
{var and__3546__auto____7996 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7996))
{return p3.call(null,z);
} else
{return and__3546__auto____7996;
}
} else
{return and__3546__auto____7995;
}
} else
{return and__3546__auto____7994;
}
} else
{return and__3546__auto____7993;
}
} else
{return and__3546__auto____7992;
}
} else
{return and__3546__auto____7991;
}
} else
{return and__3546__auto____7990;
}
} else
{return and__3546__auto____7989;
}
})());
});
var ep3__8030 = (function() { 
var G__8032__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7997 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7997))
{return cljs.core.every_QMARK_.call(null,(function (p1__7952_SHARP_){
var and__3546__auto____7998 = p1.call(null,p1__7952_SHARP_);

if(cljs.core.truth_(and__3546__auto____7998))
{var and__3546__auto____7999 = p2.call(null,p1__7952_SHARP_);

if(cljs.core.truth_(and__3546__auto____7999))
{return p3.call(null,p1__7952_SHARP_);
} else
{return and__3546__auto____7999;
}
} else
{return and__3546__auto____7998;
}
}),args);
} else
{return and__3546__auto____7997;
}
})());
};
var G__8032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8032__delegate.call(this, x, y, z, args);
};
G__8032.cljs$lang$maxFixedArity = 3;
G__8032.cljs$lang$applyTo = (function (arglist__8033){
var x = cljs.core.first(arglist__8033);
var y = cljs.core.first(cljs.core.next(arglist__8033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8033)));
return G__8032__delegate.call(this, x, y, z, args);
});
return G__8032;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8026.call(this);
case  1 :
return ep3__8027.call(this,x);
case  2 :
return ep3__8028.call(this,x,y);
case  3 :
return ep3__8029.call(this,x,y,z);
default:
return ep3__8030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8030.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8008 = (function() { 
var G__8034__delegate = function (p1,p2,p3,ps){
var ps__8000 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8035 = (function (){
return true;
});
var epn__8036 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7953_SHARP_){
return p1__7953_SHARP_.call(null,x);
}),ps__8000);
});
var epn__8037 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7954_SHARP_){
var and__3546__auto____8001 = p1__7954_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8001))
{return p1__7954_SHARP_.call(null,y);
} else
{return and__3546__auto____8001;
}
}),ps__8000);
});
var epn__8038 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7955_SHARP_){
var and__3546__auto____8002 = p1__7955_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8002))
{var and__3546__auto____8003 = p1__7955_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8003))
{return p1__7955_SHARP_.call(null,z);
} else
{return and__3546__auto____8003;
}
} else
{return and__3546__auto____8002;
}
}),ps__8000);
});
var epn__8039 = (function() { 
var G__8041__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8004 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8004))
{return cljs.core.every_QMARK_.call(null,(function (p1__7956_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7956_SHARP_,args);
}),ps__8000);
} else
{return and__3546__auto____8004;
}
})());
};
var G__8041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8041__delegate.call(this, x, y, z, args);
};
G__8041.cljs$lang$maxFixedArity = 3;
G__8041.cljs$lang$applyTo = (function (arglist__8042){
var x = cljs.core.first(arglist__8042);
var y = cljs.core.first(cljs.core.next(arglist__8042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8042)));
return G__8041__delegate.call(this, x, y, z, args);
});
return G__8041;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8035.call(this);
case  1 :
return epn__8036.call(this,x);
case  2 :
return epn__8037.call(this,x,y);
case  3 :
return epn__8038.call(this,x,y,z);
default:
return epn__8039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8039.cljs$lang$applyTo;
return epn;
})()
};
var G__8034 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8034__delegate.call(this, p1, p2, p3, ps);
};
G__8034.cljs$lang$maxFixedArity = 3;
G__8034.cljs$lang$applyTo = (function (arglist__8043){
var p1 = cljs.core.first(arglist__8043);
var p2 = cljs.core.first(cljs.core.next(arglist__8043));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8043)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8043)));
return G__8034__delegate.call(this, p1, p2, p3, ps);
});
return G__8034;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8005.call(this,p1);
case  2 :
return every_pred__8006.call(this,p1,p2);
case  3 :
return every_pred__8007.call(this,p1,p2,p3);
default:
return every_pred__8008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8008.cljs$lang$applyTo;
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
var some_fn__8083 = (function (p){
return (function() {
var sp1 = null;
var sp1__8088 = (function (){
return null;
});
var sp1__8089 = (function (x){
return p.call(null,x);
});
var sp1__8090 = (function (x,y){
var or__3548__auto____8045 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{return p.call(null,y);
}
});
var sp1__8091 = (function (x,y,z){
var or__3548__auto____8046 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8047 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{return p.call(null,z);
}
}
});
var sp1__8092 = (function() { 
var G__8094__delegate = function (x,y,z,args){
var or__3548__auto____8048 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8094 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8094__delegate.call(this, x, y, z, args);
};
G__8094.cljs$lang$maxFixedArity = 3;
G__8094.cljs$lang$applyTo = (function (arglist__8095){
var x = cljs.core.first(arglist__8095);
var y = cljs.core.first(cljs.core.next(arglist__8095));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8095)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8095)));
return G__8094__delegate.call(this, x, y, z, args);
});
return G__8094;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8088.call(this);
case  1 :
return sp1__8089.call(this,x);
case  2 :
return sp1__8090.call(this,x,y);
case  3 :
return sp1__8091.call(this,x,y,z);
default:
return sp1__8092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8092.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8084 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8096 = (function (){
return null;
});
var sp2__8097 = (function (x){
var or__3548__auto____8049 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{return p2.call(null,x);
}
});
var sp2__8098 = (function (x,y){
var or__3548__auto____8050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{var or__3548__auto____8051 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8052 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8099 = (function (x,y,z){
var or__3548__auto____8053 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{var or__3548__auto____8054 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8055 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{var or__3548__auto____8057 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8100 = (function() { 
var G__8102__delegate = function (x,y,z,args){
var or__3548__auto____8058 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{return cljs.core.some.call(null,(function (p1__7961_SHARP_){
var or__3548__auto____8059 = p1.call(null,p1__7961_SHARP_);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{return p2.call(null,p1__7961_SHARP_);
}
}),args);
}
};
var G__8102 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8102__delegate.call(this, x, y, z, args);
};
G__8102.cljs$lang$maxFixedArity = 3;
G__8102.cljs$lang$applyTo = (function (arglist__8103){
var x = cljs.core.first(arglist__8103);
var y = cljs.core.first(cljs.core.next(arglist__8103));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8103)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8103)));
return G__8102__delegate.call(this, x, y, z, args);
});
return G__8102;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8096.call(this);
case  1 :
return sp2__8097.call(this,x);
case  2 :
return sp2__8098.call(this,x,y);
case  3 :
return sp2__8099.call(this,x,y,z);
default:
return sp2__8100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8100.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8085 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8104 = (function (){
return null;
});
var sp3__8105 = (function (x){
var or__3548__auto____8060 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{var or__3548__auto____8061 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{return p3.call(null,x);
}
}
});
var sp3__8106 = (function (x,y){
var or__3548__auto____8062 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{var or__3548__auto____8063 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8064 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8065 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8066 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8107 = (function (x,y,z){
var or__3548__auto____8067 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8068 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{var or__3548__auto____8069 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{var or__3548__auto____8070 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8071 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8072 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8073 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8074 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
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
var sp3__8108 = (function() { 
var G__8110__delegate = function (x,y,z,args){
var or__3548__auto____8075 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{return cljs.core.some.call(null,(function (p1__7962_SHARP_){
var or__3548__auto____8076 = p1.call(null,p1__7962_SHARP_);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8077 = p2.call(null,p1__7962_SHARP_);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{return p3.call(null,p1__7962_SHARP_);
}
}
}),args);
}
};
var G__8110 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8110__delegate.call(this, x, y, z, args);
};
G__8110.cljs$lang$maxFixedArity = 3;
G__8110.cljs$lang$applyTo = (function (arglist__8111){
var x = cljs.core.first(arglist__8111);
var y = cljs.core.first(cljs.core.next(arglist__8111));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8111)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8111)));
return G__8110__delegate.call(this, x, y, z, args);
});
return G__8110;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8104.call(this);
case  1 :
return sp3__8105.call(this,x);
case  2 :
return sp3__8106.call(this,x,y);
case  3 :
return sp3__8107.call(this,x,y,z);
default:
return sp3__8108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8108.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8086 = (function() { 
var G__8112__delegate = function (p1,p2,p3,ps){
var ps__8078 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8113 = (function (){
return null;
});
var spn__8114 = (function (x){
return cljs.core.some.call(null,(function (p1__7963_SHARP_){
return p1__7963_SHARP_.call(null,x);
}),ps__8078);
});
var spn__8115 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7964_SHARP_){
var or__3548__auto____8079 = p1__7964_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{return p1__7964_SHARP_.call(null,y);
}
}),ps__8078);
});
var spn__8116 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7965_SHARP_){
var or__3548__auto____8080 = p1__7965_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{var or__3548__auto____8081 = p1__7965_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{return p1__7965_SHARP_.call(null,z);
}
}
}),ps__8078);
});
var spn__8117 = (function() { 
var G__8119__delegate = function (x,y,z,args){
var or__3548__auto____8082 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{return cljs.core.some.call(null,(function (p1__7966_SHARP_){
return cljs.core.some.call(null,p1__7966_SHARP_,args);
}),ps__8078);
}
};
var G__8119 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8119__delegate.call(this, x, y, z, args);
};
G__8119.cljs$lang$maxFixedArity = 3;
G__8119.cljs$lang$applyTo = (function (arglist__8120){
var x = cljs.core.first(arglist__8120);
var y = cljs.core.first(cljs.core.next(arglist__8120));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8120)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8120)));
return G__8119__delegate.call(this, x, y, z, args);
});
return G__8119;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8113.call(this);
case  1 :
return spn__8114.call(this,x);
case  2 :
return spn__8115.call(this,x,y);
case  3 :
return spn__8116.call(this,x,y,z);
default:
return spn__8117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8117.cljs$lang$applyTo;
return spn;
})()
};
var G__8112 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8112__delegate.call(this, p1, p2, p3, ps);
};
G__8112.cljs$lang$maxFixedArity = 3;
G__8112.cljs$lang$applyTo = (function (arglist__8121){
var p1 = cljs.core.first(arglist__8121);
var p2 = cljs.core.first(cljs.core.next(arglist__8121));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8121)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8121)));
return G__8112__delegate.call(this, p1, p2, p3, ps);
});
return G__8112;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8083.call(this,p1);
case  2 :
return some_fn__8084.call(this,p1,p2);
case  3 :
return some_fn__8085.call(this,p1,p2,p3);
default:
return some_fn__8086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8086.cljs$lang$applyTo;
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
var map__8134 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8122))
{var s__8123 = temp__3698__auto____8122;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8123)),map.call(null,f,cljs.core.rest.call(null,s__8123)));
} else
{return null;
}
})));
});
var map__8135 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8124 = cljs.core.seq.call(null,c1);
var s2__8125 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8126 = s1__8124;

if(cljs.core.truth_(and__3546__auto____8126))
{return s2__8125;
} else
{return and__3546__auto____8126;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8124),cljs.core.first.call(null,s2__8125)),map.call(null,f,cljs.core.rest.call(null,s1__8124),cljs.core.rest.call(null,s2__8125)));
} else
{return null;
}
})));
});
var map__8136 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8127 = cljs.core.seq.call(null,c1);
var s2__8128 = cljs.core.seq.call(null,c2);
var s3__8129 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8130 = s1__8127;

if(cljs.core.truth_(and__3546__auto____8130))
{var and__3546__auto____8131 = s2__8128;

if(cljs.core.truth_(and__3546__auto____8131))
{return s3__8129;
} else
{return and__3546__auto____8131;
}
} else
{return and__3546__auto____8130;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8127),cljs.core.first.call(null,s2__8128),cljs.core.first.call(null,s3__8129)),map.call(null,f,cljs.core.rest.call(null,s1__8127),cljs.core.rest.call(null,s2__8128),cljs.core.rest.call(null,s3__8129)));
} else
{return null;
}
})));
});
var map__8137 = (function() { 
var G__8139__delegate = function (f,c1,c2,c3,colls){
var step__8133 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8132 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8132)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8132),step.call(null,map.call(null,cljs.core.rest,ss__8132)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8044_SHARP_){
return cljs.core.apply.call(null,f,p1__8044_SHARP_);
}),step__8133.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8139 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8139__delegate.call(this, f, c1, c2, c3, colls);
};
G__8139.cljs$lang$maxFixedArity = 4;
G__8139.cljs$lang$applyTo = (function (arglist__8140){
var f = cljs.core.first(arglist__8140);
var c1 = cljs.core.first(cljs.core.next(arglist__8140));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8140)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8140))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8140))));
return G__8139__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8139;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8134.call(this,f,c1);
case  3 :
return map__8135.call(this,f,c1,c2);
case  4 :
return map__8136.call(this,f,c1,c2,c3);
default:
return map__8137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8137.cljs$lang$applyTo;
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
{var temp__3698__auto____8141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8141))
{var s__8142 = temp__3698__auto____8141;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8142),take.call(null,(n - 1),cljs.core.rest.call(null,s__8142)));
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
var step__8145 = (function (n,coll){
while(true){
var s__8143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8144 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8144))
{return s__8143;
} else
{return and__3546__auto____8144;
}
})()))
{{
var G__8146 = (n - 1);
var G__8147 = cljs.core.rest.call(null,s__8143);
n = G__8146;
coll = G__8147;
continue;
}
} else
{return s__8143;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8145.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8148 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8149 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8148.call(this,n);
case  2 :
return drop_last__8149.call(this,n,s);
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
var s__8151 = cljs.core.seq.call(null,coll);
var lead__8152 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8152))
{{
var G__8153 = cljs.core.next.call(null,s__8151);
var G__8154 = cljs.core.next.call(null,lead__8152);
s__8151 = G__8153;
lead__8152 = G__8154;
continue;
}
} else
{return s__8151;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8157 = (function (pred,coll){
while(true){
var s__8155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8156 = s__8155;

if(cljs.core.truth_(and__3546__auto____8156))
{return pred.call(null,cljs.core.first.call(null,s__8155));
} else
{return and__3546__auto____8156;
}
})()))
{{
var G__8158 = pred;
var G__8159 = cljs.core.rest.call(null,s__8155);
pred = G__8158;
coll = G__8159;
continue;
}
} else
{return s__8155;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8157.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8160))
{var s__8161 = temp__3698__auto____8160;

return cljs.core.concat.call(null,s__8161,cycle.call(null,s__8161));
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
var repeat__8162 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8163 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8162.call(this,n);
case  2 :
return repeat__8163.call(this,n,x);
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
var repeatedly__8165 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8166 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8165.call(this,n);
case  2 :
return repeatedly__8166.call(this,n,f);
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
var interleave__8172 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8168 = cljs.core.seq.call(null,c1);
var s2__8169 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8170 = s1__8168;

if(cljs.core.truth_(and__3546__auto____8170))
{return s2__8169;
} else
{return and__3546__auto____8170;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8168),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8169),interleave.call(null,cljs.core.rest.call(null,s1__8168),cljs.core.rest.call(null,s2__8169))));
} else
{return null;
}
})));
});
var interleave__8173 = (function() { 
var G__8175__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8171 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8171)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8171),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8171)));
} else
{return null;
}
})));
};
var G__8175 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8175__delegate.call(this, c1, c2, colls);
};
G__8175.cljs$lang$maxFixedArity = 2;
G__8175.cljs$lang$applyTo = (function (arglist__8176){
var c1 = cljs.core.first(arglist__8176);
var c2 = cljs.core.first(cljs.core.next(arglist__8176));
var colls = cljs.core.rest(cljs.core.next(arglist__8176));
return G__8175__delegate.call(this, c1, c2, colls);
});
return G__8175;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8172.call(this,c1,c2);
default:
return interleave__8173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8173.cljs$lang$applyTo;
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
var cat__8179 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8177 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8177))
{var coll__8178 = temp__3695__auto____8177;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8178),cat.call(null,cljs.core.rest.call(null,coll__8178),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8179.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8180 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8181 = (function() { 
var G__8183__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8183 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8183__delegate.call(this, f, coll, colls);
};
G__8183.cljs$lang$maxFixedArity = 2;
G__8183.cljs$lang$applyTo = (function (arglist__8184){
var f = cljs.core.first(arglist__8184);
var coll = cljs.core.first(cljs.core.next(arglist__8184));
var colls = cljs.core.rest(cljs.core.next(arglist__8184));
return G__8183__delegate.call(this, f, coll, colls);
});
return G__8183;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8180.call(this,f,coll);
default:
return mapcat__8181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8181.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8185 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8185))
{var s__8186 = temp__3698__auto____8185;

var f__8187 = cljs.core.first.call(null,s__8186);
var r__8188 = cljs.core.rest.call(null,s__8186);

if(cljs.core.truth_(pred.call(null,f__8187)))
{return cljs.core.cons.call(null,f__8187,filter.call(null,pred,r__8188));
} else
{return filter.call(null,pred,r__8188);
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
var walk__8190 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8190.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8189_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8189_SHARP_));
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
var partition__8197 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8198 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8191))
{var s__8192 = temp__3698__auto____8191;

var p__8193 = cljs.core.take.call(null,n,s__8192);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8193))))
{return cljs.core.cons.call(null,p__8193,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8192)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8199 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8194 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8194))
{var s__8195 = temp__3698__auto____8194;

var p__8196 = cljs.core.take.call(null,n,s__8195);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8196))))
{return cljs.core.cons.call(null,p__8196,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8195)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8196,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8197.call(this,n,step);
case  3 :
return partition__8198.call(this,n,step,pad);
case  4 :
return partition__8199.call(this,n,step,pad,coll);
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
var get_in__8205 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8206 = (function (m,ks,not_found){
var sentinel__8201 = cljs.core.lookup_sentinel;
var m__8202 = m;
var ks__8203 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8203))
{var m__8204 = cljs.core.get.call(null,m__8202,cljs.core.first.call(null,ks__8203),sentinel__8201);

if(cljs.core.truth_((sentinel__8201 === m__8204)))
{return not_found;
} else
{{
var G__8208 = sentinel__8201;
var G__8209 = m__8204;
var G__8210 = cljs.core.next.call(null,ks__8203);
sentinel__8201 = G__8208;
m__8202 = G__8209;
ks__8203 = G__8210;
continue;
}
}
} else
{return m__8202;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8205.call(this,m,ks);
case  3 :
return get_in__8206.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8211,v){
var vec__8212__8213 = p__8211;
var k__8214 = cljs.core.nth.call(null,vec__8212__8213,0,null);
var ks__8215 = cljs.core.nthnext.call(null,vec__8212__8213,1);

if(cljs.core.truth_(ks__8215))
{return cljs.core.assoc.call(null,m,k__8214,assoc_in.call(null,cljs.core.get.call(null,m,k__8214),ks__8215,v));
} else
{return cljs.core.assoc.call(null,m,k__8214,v);
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
var update_in__delegate = function (m,p__8216,f,args){
var vec__8217__8218 = p__8216;
var k__8219 = cljs.core.nth.call(null,vec__8217__8218,0,null);
var ks__8220 = cljs.core.nthnext.call(null,vec__8217__8218,1);

if(cljs.core.truth_(ks__8220))
{return cljs.core.assoc.call(null,m,k__8219,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8219),ks__8220,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8219,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8219),args));
}
};
var update_in = function (m,p__8216,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8216, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8221){
var m = cljs.core.first(arglist__8221);
var p__8216 = cljs.core.first(cljs.core.next(arglist__8221));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8221)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8221)));
return update_in__delegate.call(this, m, p__8216, f, args);
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
var this__8222 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8255 = null;
var G__8255__8256 = (function (coll,k){
var this__8223 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8255__8257 = (function (coll,k,not_found){
var this__8224 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8255 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8255__8256.call(this,coll,k);
case  3 :
return G__8255__8257.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8255;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8225 = this;
var new_array__8226 = cljs.core.aclone.call(null,this__8225.array);

(new_array__8226[k] = v);
return (new cljs.core.Vector(this__8225.meta,new_array__8226));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8259 = null;
var G__8259__8260 = (function (tsym8227,k){
var this__8229 = this;
var tsym8227__8230 = this;

var coll__8231 = tsym8227__8230;

return cljs.core._lookup.call(null,coll__8231,k);
});
var G__8259__8261 = (function (tsym8228,k,not_found){
var this__8232 = this;
var tsym8228__8233 = this;

var coll__8234 = tsym8228__8233;

return cljs.core._lookup.call(null,coll__8234,k,not_found);
});
G__8259 = function(tsym8228,k,not_found){
switch(arguments.length){
case  2 :
return G__8259__8260.call(this,tsym8228,k);
case  3 :
return G__8259__8261.call(this,tsym8228,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8259;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8235 = this;
var new_array__8236 = cljs.core.aclone.call(null,this__8235.array);

new_array__8236.push(o);
return (new cljs.core.Vector(this__8235.meta,new_array__8236));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8263 = null;
var G__8263__8264 = (function (v,f){
var this__8237 = this;
return cljs.core.ci_reduce.call(null,this__8237.array,f);
});
var G__8263__8265 = (function (v,f,start){
var this__8238 = this;
return cljs.core.ci_reduce.call(null,this__8238.array,f,start);
});
G__8263 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8263__8264.call(this,v,f);
case  3 :
return G__8263__8265.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8263;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8239 = this;
if(cljs.core.truth_((this__8239.array.length > 0)))
{var vector_seq__8240 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8239.array.length)))
{return cljs.core.cons.call(null,(this__8239.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8240.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8241 = this;
return this__8241.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8242 = this;
var count__8243 = this__8242.array.length;

if(cljs.core.truth_((count__8243 > 0)))
{return (this__8242.array[(count__8243 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8244 = this;
if(cljs.core.truth_((this__8244.array.length > 0)))
{var new_array__8245 = cljs.core.aclone.call(null,this__8244.array);

new_array__8245.pop();
return (new cljs.core.Vector(this__8244.meta,new_array__8245));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8246 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8247 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8248 = this;
return (new cljs.core.Vector(meta,this__8248.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8249 = this;
return this__8249.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8267 = null;
var G__8267__8268 = (function (coll,n){
var this__8250 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8251 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8251))
{return (n < this__8250.array.length);
} else
{return and__3546__auto____8251;
}
})()))
{return (this__8250.array[n]);
} else
{return null;
}
});
var G__8267__8269 = (function (coll,n,not_found){
var this__8252 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8253 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8253))
{return (n < this__8252.array.length);
} else
{return and__3546__auto____8253;
}
})()))
{return (this__8252.array[n]);
} else
{return not_found;
}
});
G__8267 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8267__8268.call(this,coll,n);
case  3 :
return G__8267__8269.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8267;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8254 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8254.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8271 = pv.cnt;

if(cljs.core.truth_((cnt__8271 < 32)))
{return 0;
} else
{return (((cnt__8271 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8272 = level;
var ret__8273 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8272)))
{return ret__8273;
} else
{var embed__8274 = ret__8273;
var r__8275 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8276 = (r__8275[0] = embed__8274);

{
var G__8277 = (ll__8272 - 5);
var G__8278 = r__8275;
ll__8272 = G__8277;
ret__8273 = G__8278;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8279 = cljs.core.aclone.call(null,parent);
var subidx__8280 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8279[subidx__8280] = tailnode);
return ret__8279;
} else
{var temp__3695__auto____8281 = (parent[subidx__8280]);

if(cljs.core.truth_(temp__3695__auto____8281))
{var child__8282 = temp__3695__auto____8281;

var node_to_insert__8283 = push_tail.call(null,pv,(level - 5),child__8282,tailnode);
var ___8284 = (ret__8279[subidx__8280] = node_to_insert__8283);

return ret__8279;
} else
{var node_to_insert__8285 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8286 = (ret__8279[subidx__8280] = node_to_insert__8285);

return ret__8279;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8287 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8287))
{return (i < pv.cnt);
} else
{return and__3546__auto____8287;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8288 = pv.root;
var level__8289 = pv.shift;

while(true){
if(cljs.core.truth_((level__8289 > 0)))
{{
var G__8290 = (node__8288[((i >> level__8289) & 31)]);
var G__8291 = (level__8289 - 5);
node__8288 = G__8290;
level__8289 = G__8291;
continue;
}
} else
{return node__8288;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8292 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8292[(i & 31)] = val);
return ret__8292;
} else
{var subidx__8293 = ((i >> level) & 31);
var ___8294 = (ret__8292[subidx__8293] = do_assoc.call(null,pv,(level - 5),(node[subidx__8293]),i,val));

return ret__8292;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8295 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8296 = pop_tail.call(null,pv,(level - 5),(node[subidx__8295]));

if(cljs.core.truth_((function (){var and__3546__auto____8297 = (new_child__8296 === null);

if(cljs.core.truth_(and__3546__auto____8297))
{return (subidx__8295 === 0);
} else
{return and__3546__auto____8297;
}
})()))
{return null;
} else
{var ret__8298 = cljs.core.aclone.call(null,node);
var ___8299 = (ret__8298[subidx__8295] = new_child__8296);

return ret__8298;
}
} else
{if(cljs.core.truth_((subidx__8295 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8300 = cljs.core.aclone.call(null,node);
var ___8301 = (ret__8300[subidx__8295] = null);

return ret__8300;
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
var this__8302 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8342 = null;
var G__8342__8343 = (function (coll,k){
var this__8303 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8342__8344 = (function (coll,k,not_found){
var this__8304 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8342 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8342__8343.call(this,coll,k);
case  3 :
return G__8342__8344.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8342;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8305 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8306 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8306))
{return (k < this__8305.cnt);
} else
{return and__3546__auto____8306;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8307 = cljs.core.aclone.call(null,this__8305.tail);

(new_tail__8307[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8305.meta,this__8305.cnt,this__8305.shift,this__8305.root,new_tail__8307));
} else
{return (new cljs.core.PersistentVector(this__8305.meta,this__8305.cnt,this__8305.shift,cljs.core.do_assoc.call(null,coll,this__8305.shift,this__8305.root,k,v),this__8305.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8305.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8305.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8346 = null;
var G__8346__8347 = (function (tsym8308,k){
var this__8310 = this;
var tsym8308__8311 = this;

var coll__8312 = tsym8308__8311;

return cljs.core._lookup.call(null,coll__8312,k);
});
var G__8346__8348 = (function (tsym8309,k,not_found){
var this__8313 = this;
var tsym8309__8314 = this;

var coll__8315 = tsym8309__8314;

return cljs.core._lookup.call(null,coll__8315,k,not_found);
});
G__8346 = function(tsym8309,k,not_found){
switch(arguments.length){
case  2 :
return G__8346__8347.call(this,tsym8309,k);
case  3 :
return G__8346__8348.call(this,tsym8309,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8346;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8316 = this;
if(cljs.core.truth_(((this__8316.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8317 = cljs.core.aclone.call(null,this__8316.tail);

new_tail__8317.push(o);
return (new cljs.core.PersistentVector(this__8316.meta,(this__8316.cnt + 1),this__8316.shift,this__8316.root,new_tail__8317));
} else
{var root_overflow_QMARK___8318 = ((this__8316.cnt >> 5) > (1 << this__8316.shift));
var new_shift__8319 = (cljs.core.truth_(root_overflow_QMARK___8318)?(this__8316.shift + 5):this__8316.shift);
var new_root__8321 = (cljs.core.truth_(root_overflow_QMARK___8318)?(function (){var n_r__8320 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8320[0] = this__8316.root);
(n_r__8320[1] = cljs.core.new_path.call(null,this__8316.shift,this__8316.tail));
return n_r__8320;
})():cljs.core.push_tail.call(null,coll,this__8316.shift,this__8316.root,this__8316.tail));

return (new cljs.core.PersistentVector(this__8316.meta,(this__8316.cnt + 1),new_shift__8319,new_root__8321,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8350 = null;
var G__8350__8351 = (function (v,f){
var this__8322 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8350__8352 = (function (v,f,start){
var this__8323 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8350 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8350__8351.call(this,v,f);
case  3 :
return G__8350__8352.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8350;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8324 = this;
if(cljs.core.truth_((this__8324.cnt > 0)))
{var vector_seq__8325 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8324.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8325.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8326 = this;
return this__8326.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8327 = this;
if(cljs.core.truth_((this__8327.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8327.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8328 = this;
if(cljs.core.truth_((this__8328.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8328.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8328.meta);
} else
{if(cljs.core.truth_((1 < (this__8328.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8328.meta,(this__8328.cnt - 1),this__8328.shift,this__8328.root,cljs.core.aclone.call(null,this__8328.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8329 = cljs.core.array_for.call(null,coll,(this__8328.cnt - 2));
var nr__8330 = cljs.core.pop_tail.call(null,this__8328.shift,this__8328.root);
var new_root__8331 = (cljs.core.truth_((nr__8330 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8330);
var cnt_1__8332 = (this__8328.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8333 = (5 < this__8328.shift);

if(cljs.core.truth_(and__3546__auto____8333))
{return ((new_root__8331[1]) === null);
} else
{return and__3546__auto____8333;
}
})()))
{return (new cljs.core.PersistentVector(this__8328.meta,cnt_1__8332,(this__8328.shift - 5),(new_root__8331[0]),new_tail__8329));
} else
{return (new cljs.core.PersistentVector(this__8328.meta,cnt_1__8332,this__8328.shift,new_root__8331,new_tail__8329));
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
var this__8334 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8335 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8336 = this;
return (new cljs.core.PersistentVector(meta,this__8336.cnt,this__8336.shift,this__8336.root,this__8336.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8337 = this;
return this__8337.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8354 = null;
var G__8354__8355 = (function (coll,n){
var this__8338 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8354__8356 = (function (coll,n,not_found){
var this__8339 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8340 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8340))
{return (n < this__8339.cnt);
} else
{return and__3546__auto____8340;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8354 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8354__8355.call(this,coll,n);
case  3 :
return G__8354__8356.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8354;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8341 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8341.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8358){
var args = cljs.core.seq( arglist__8358 );;
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
var this__8359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8387 = null;
var G__8387__8388 = (function (coll,k){
var this__8360 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8387__8389 = (function (coll,k,not_found){
var this__8361 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8387 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8387__8388.call(this,coll,k);
case  3 :
return G__8387__8389.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8387;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8362 = this;
var v_pos__8363 = (this__8362.start + key);

return (new cljs.core.Subvec(this__8362.meta,cljs.core._assoc.call(null,this__8362.v,v_pos__8363,val),this__8362.start,((this__8362.end > (v_pos__8363 + 1)) ? this__8362.end : (v_pos__8363 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8391 = null;
var G__8391__8392 = (function (tsym8364,k){
var this__8366 = this;
var tsym8364__8367 = this;

var coll__8368 = tsym8364__8367;

return cljs.core._lookup.call(null,coll__8368,k);
});
var G__8391__8393 = (function (tsym8365,k,not_found){
var this__8369 = this;
var tsym8365__8370 = this;

var coll__8371 = tsym8365__8370;

return cljs.core._lookup.call(null,coll__8371,k,not_found);
});
G__8391 = function(tsym8365,k,not_found){
switch(arguments.length){
case  2 :
return G__8391__8392.call(this,tsym8365,k);
case  3 :
return G__8391__8393.call(this,tsym8365,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8391;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8372 = this;
return (new cljs.core.Subvec(this__8372.meta,cljs.core._assoc_n.call(null,this__8372.v,this__8372.end,o),this__8372.start,(this__8372.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8395 = null;
var G__8395__8396 = (function (coll,f){
var this__8373 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8395__8397 = (function (coll,f,start){
var this__8374 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8395 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8395__8396.call(this,coll,f);
case  3 :
return G__8395__8397.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8395;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8375 = this;
var subvec_seq__8376 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8375.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8375.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8376.call(null,this__8375.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8377 = this;
return (this__8377.end - this__8377.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8378 = this;
return cljs.core._nth.call(null,this__8378.v,(this__8378.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8379 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8379.start,this__8379.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8379.meta,this__8379.v,this__8379.start,(this__8379.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8380 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8381 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8382 = this;
return (new cljs.core.Subvec(meta,this__8382.v,this__8382.start,this__8382.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8383 = this;
return this__8383.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8399 = null;
var G__8399__8400 = (function (coll,n){
var this__8384 = this;
return cljs.core._nth.call(null,this__8384.v,(this__8384.start + n));
});
var G__8399__8401 = (function (coll,n,not_found){
var this__8385 = this;
return cljs.core._nth.call(null,this__8385.v,(this__8385.start + n),not_found);
});
G__8399 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,coll,n);
case  3 :
return G__8399__8401.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8386 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8386.meta);
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
var subvec__8403 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8404 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8403.call(this,v,start);
case  3 :
return subvec__8404.call(this,v,start,end);
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
var this__8406 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8409 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8409.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8410 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8411 = this;
return cljs.core._first.call(null,this__8411.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8412 = this;
var temp__3695__auto____8413 = cljs.core.next.call(null,this__8412.front);

if(cljs.core.truth_(temp__3695__auto____8413))
{var f1__8414 = temp__3695__auto____8413;

return (new cljs.core.PersistentQueueSeq(this__8412.meta,f1__8414,this__8412.rear));
} else
{if(cljs.core.truth_((this__8412.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8412.meta,this__8412.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8415 = this;
return this__8415.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8416 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8416.front,this__8416.rear));
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
var this__8417 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8418 = this;
if(cljs.core.truth_(this__8418.front))
{return (new cljs.core.PersistentQueue(this__8418.meta,(this__8418.count + 1),this__8418.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8419 = this__8418.rear;

if(cljs.core.truth_(or__3548__auto____8419))
{return or__3548__auto____8419;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8418.meta,(this__8418.count + 1),cljs.core.conj.call(null,this__8418.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8420 = this;
var rear__8421 = cljs.core.seq.call(null,this__8420.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8422 = this__8420.front;

if(cljs.core.truth_(or__3548__auto____8422))
{return or__3548__auto____8422;
} else
{return rear__8421;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8420.front,cljs.core.seq.call(null,rear__8421)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8423 = this;
return this__8423.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8424 = this;
return cljs.core._first.call(null,this__8424.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8425 = this;
if(cljs.core.truth_(this__8425.front))
{var temp__3695__auto____8426 = cljs.core.next.call(null,this__8425.front);

if(cljs.core.truth_(temp__3695__auto____8426))
{var f1__8427 = temp__3695__auto____8426;

return (new cljs.core.PersistentQueue(this__8425.meta,(this__8425.count - 1),f1__8427,this__8425.rear));
} else
{return (new cljs.core.PersistentQueue(this__8425.meta,(this__8425.count - 1),cljs.core.seq.call(null,this__8425.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8428 = this;
return cljs.core.first.call(null,this__8428.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8429 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8430 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8431 = this;
return (new cljs.core.PersistentQueue(meta,this__8431.count,this__8431.front,this__8431.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8432 = this;
return this__8432.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8433 = this;
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
var this__8434 = this;
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
var len__8435 = array.length;

var i__8436 = 0;

while(true){
if(cljs.core.truth_((i__8436 < len__8435)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8436]))))
{return i__8436;
} else
{{
var G__8437 = (i__8436 + incr);
i__8436 = G__8437;
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
var obj_map_contains_key_QMARK___8439 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8440 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8438 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8438))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8438;
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
return obj_map_contains_key_QMARK___8439.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8440.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8443 = cljs.core.hash.call(null,a);
var b__8444 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8443 < b__8444)))
{return -1;
} else
{if(cljs.core.truth_((a__8443 > b__8444)))
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
var this__8445 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8472 = null;
var G__8472__8473 = (function (coll,k){
var this__8446 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8472__8474 = (function (coll,k,not_found){
var this__8447 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8447.strobj,(this__8447.strobj[k]),not_found);
});
G__8472 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8472__8473.call(this,coll,k);
case  3 :
return G__8472__8474.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8472;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8448 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8449 = goog.object.clone.call(null,this__8448.strobj);
var overwrite_QMARK___8450 = new_strobj__8449.hasOwnProperty(k);

(new_strobj__8449[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8450))
{return (new cljs.core.ObjMap(this__8448.meta,this__8448.keys,new_strobj__8449));
} else
{var new_keys__8451 = cljs.core.aclone.call(null,this__8448.keys);

new_keys__8451.push(k);
return (new cljs.core.ObjMap(this__8448.meta,new_keys__8451,new_strobj__8449));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8448.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8452 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8452.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8476 = null;
var G__8476__8477 = (function (tsym8453,k){
var this__8455 = this;
var tsym8453__8456 = this;

var coll__8457 = tsym8453__8456;

return cljs.core._lookup.call(null,coll__8457,k);
});
var G__8476__8478 = (function (tsym8454,k,not_found){
var this__8458 = this;
var tsym8454__8459 = this;

var coll__8460 = tsym8454__8459;

return cljs.core._lookup.call(null,coll__8460,k,not_found);
});
G__8476 = function(tsym8454,k,not_found){
switch(arguments.length){
case  2 :
return G__8476__8477.call(this,tsym8454,k);
case  3 :
return G__8476__8478.call(this,tsym8454,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8461 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8462 = this;
if(cljs.core.truth_((this__8462.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8442_SHARP_){
return cljs.core.vector.call(null,p1__8442_SHARP_,(this__8462.strobj[p1__8442_SHARP_]));
}),this__8462.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8463 = this;
return this__8463.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8464 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8465 = this;
return (new cljs.core.ObjMap(meta,this__8465.keys,this__8465.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8466 = this;
return this__8466.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8467 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8467.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8468 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8469 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8469))
{return this__8468.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8469;
}
})()))
{var new_keys__8470 = cljs.core.aclone.call(null,this__8468.keys);
var new_strobj__8471 = goog.object.clone.call(null,this__8468.strobj);

new_keys__8470.splice(cljs.core.scan_array.call(null,1,k,new_keys__8470),1);
cljs.core.js_delete.call(null,new_strobj__8471,k);
return (new cljs.core.ObjMap(this__8468.meta,new_keys__8470,new_strobj__8471));
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
var this__8481 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8519 = null;
var G__8519__8520 = (function (coll,k){
var this__8482 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8519__8521 = (function (coll,k,not_found){
var this__8483 = this;
var bucket__8484 = (this__8483.hashobj[cljs.core.hash.call(null,k)]);
var i__8485 = (cljs.core.truth_(bucket__8484)?cljs.core.scan_array.call(null,2,k,bucket__8484):null);

if(cljs.core.truth_(i__8485))
{return (bucket__8484[(i__8485 + 1)]);
} else
{return not_found;
}
});
G__8519 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8519__8520.call(this,coll,k);
case  3 :
return G__8519__8521.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8519;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8486 = this;
var h__8487 = cljs.core.hash.call(null,k);
var bucket__8488 = (this__8486.hashobj[h__8487]);

if(cljs.core.truth_(bucket__8488))
{var new_bucket__8489 = cljs.core.aclone.call(null,bucket__8488);
var new_hashobj__8490 = goog.object.clone.call(null,this__8486.hashobj);

(new_hashobj__8490[h__8487] = new_bucket__8489);
var temp__3695__auto____8491 = cljs.core.scan_array.call(null,2,k,new_bucket__8489);

if(cljs.core.truth_(temp__3695__auto____8491))
{var i__8492 = temp__3695__auto____8491;

(new_bucket__8489[(i__8492 + 1)] = v);
return (new cljs.core.HashMap(this__8486.meta,this__8486.count,new_hashobj__8490));
} else
{new_bucket__8489.push(k,v);
return (new cljs.core.HashMap(this__8486.meta,(this__8486.count + 1),new_hashobj__8490));
}
} else
{var new_hashobj__8493 = goog.object.clone.call(null,this__8486.hashobj);

(new_hashobj__8493[h__8487] = [k,v]);
return (new cljs.core.HashMap(this__8486.meta,(this__8486.count + 1),new_hashobj__8493));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8494 = this;
var bucket__8495 = (this__8494.hashobj[cljs.core.hash.call(null,k)]);
var i__8496 = (cljs.core.truth_(bucket__8495)?cljs.core.scan_array.call(null,2,k,bucket__8495):null);

if(cljs.core.truth_(i__8496))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8523 = null;
var G__8523__8524 = (function (tsym8497,k){
var this__8499 = this;
var tsym8497__8500 = this;

var coll__8501 = tsym8497__8500;

return cljs.core._lookup.call(null,coll__8501,k);
});
var G__8523__8525 = (function (tsym8498,k,not_found){
var this__8502 = this;
var tsym8498__8503 = this;

var coll__8504 = tsym8498__8503;

return cljs.core._lookup.call(null,coll__8504,k,not_found);
});
G__8523 = function(tsym8498,k,not_found){
switch(arguments.length){
case  2 :
return G__8523__8524.call(this,tsym8498,k);
case  3 :
return G__8523__8525.call(this,tsym8498,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8523;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8505 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8506 = this;
if(cljs.core.truth_((this__8506.count > 0)))
{var hashes__8507 = cljs.core.js_keys.call(null,this__8506.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8480_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8506.hashobj[p1__8480_SHARP_])));
}),hashes__8507);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8508 = this;
return this__8508.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8509 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8510 = this;
return (new cljs.core.HashMap(meta,this__8510.count,this__8510.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8511 = this;
return this__8511.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8512 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8512.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8513 = this;
var h__8514 = cljs.core.hash.call(null,k);
var bucket__8515 = (this__8513.hashobj[h__8514]);
var i__8516 = (cljs.core.truth_(bucket__8515)?cljs.core.scan_array.call(null,2,k,bucket__8515):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8516)))
{return coll;
} else
{var new_hashobj__8517 = goog.object.clone.call(null,this__8513.hashobj);

if(cljs.core.truth_((3 > bucket__8515.length)))
{cljs.core.js_delete.call(null,new_hashobj__8517,h__8514);
} else
{var new_bucket__8518 = cljs.core.aclone.call(null,bucket__8515);

new_bucket__8518.splice(i__8516,2);
(new_hashobj__8517[h__8514] = new_bucket__8518);
}
return (new cljs.core.HashMap(this__8513.meta,(this__8513.count - 1),new_hashobj__8517));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8527 = ks.length;

var i__8528 = 0;
var out__8529 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8528 < len__8527)))
{{
var G__8530 = (i__8528 + 1);
var G__8531 = cljs.core.assoc.call(null,out__8529,(ks[i__8528]),(vs[i__8528]));
i__8528 = G__8530;
out__8529 = G__8531;
continue;
}
} else
{return out__8529;
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
var in$__8532 = cljs.core.seq.call(null,keyvals);
var out__8533 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8532))
{{
var G__8534 = cljs.core.nnext.call(null,in$__8532);
var G__8535 = cljs.core.assoc.call(null,out__8533,cljs.core.first.call(null,in$__8532),cljs.core.second.call(null,in$__8532));
in$__8532 = G__8534;
out__8533 = G__8535;
continue;
}
} else
{return out__8533;
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
hash_map.cljs$lang$applyTo = (function (arglist__8536){
var keyvals = cljs.core.seq( arglist__8536 );;
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
{return cljs.core.reduce.call(null,(function (p1__8537_SHARP_,p2__8538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8539 = p1__8537_SHARP_;

if(cljs.core.truth_(or__3548__auto____8539))
{return or__3548__auto____8539;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8540){
var maps = cljs.core.seq( arglist__8540 );;
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
{var merge_entry__8543 = (function (m,e){
var k__8541 = cljs.core.first.call(null,e);
var v__8542 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8541)))
{return cljs.core.assoc.call(null,m,k__8541,f.call(null,cljs.core.get.call(null,m,k__8541),v__8542));
} else
{return cljs.core.assoc.call(null,m,k__8541,v__8542);
}
});
var merge2__8545 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8543,(function (){var or__3548__auto____8544 = m1;

if(cljs.core.truth_(or__3548__auto____8544))
{return or__3548__auto____8544;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8545,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8546){
var f = cljs.core.first(arglist__8546);
var maps = cljs.core.rest(arglist__8546);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8548 = cljs.core.ObjMap.fromObject([],{});
var keys__8549 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8549))
{var key__8550 = cljs.core.first.call(null,keys__8549);
var entry__8551 = cljs.core.get.call(null,map,key__8550,"\uFDD0'user/not-found");

{
var G__8552 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8551,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8548,key__8550,entry__8551):ret__8548);
var G__8553 = cljs.core.next.call(null,keys__8549);
ret__8548 = G__8552;
keys__8549 = G__8553;
continue;
}
} else
{return ret__8548;
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
var this__8554 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8575 = null;
var G__8575__8576 = (function (coll,v){
var this__8555 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8575__8577 = (function (coll,v,not_found){
var this__8556 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8556.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8575 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8575__8576.call(this,coll,v);
case  3 :
return G__8575__8577.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8575;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8579 = null;
var G__8579__8580 = (function (tsym8557,k){
var this__8559 = this;
var tsym8557__8560 = this;

var coll__8561 = tsym8557__8560;

return cljs.core._lookup.call(null,coll__8561,k);
});
var G__8579__8581 = (function (tsym8558,k,not_found){
var this__8562 = this;
var tsym8558__8563 = this;

var coll__8564 = tsym8558__8563;

return cljs.core._lookup.call(null,coll__8564,k,not_found);
});
G__8579 = function(tsym8558,k,not_found){
switch(arguments.length){
case  2 :
return G__8579__8580.call(this,tsym8558,k);
case  3 :
return G__8579__8581.call(this,tsym8558,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8579;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8565 = this;
return (new cljs.core.Set(this__8565.meta,cljs.core.assoc.call(null,this__8565.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8566 = this;
return cljs.core.keys.call(null,this__8566.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8567 = this;
return (new cljs.core.Set(this__8567.meta,cljs.core.dissoc.call(null,this__8567.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8568 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8569 = this;
var and__3546__auto____8570 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8570))
{var and__3546__auto____8571 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8571))
{return cljs.core.every_QMARK_.call(null,(function (p1__8547_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8547_SHARP_);
}),other);
} else
{return and__3546__auto____8571;
}
} else
{return and__3546__auto____8570;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8572 = this;
return (new cljs.core.Set(meta,this__8572.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8573 = this;
return this__8573.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8574 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8574.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8584 = cljs.core.seq.call(null,coll);
var out__8585 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8584))))
{{
var G__8586 = cljs.core.rest.call(null,in$__8584);
var G__8587 = cljs.core.conj.call(null,out__8585,cljs.core.first.call(null,in$__8584));
in$__8584 = G__8586;
out__8585 = G__8587;
continue;
}
} else
{return out__8585;
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
{var n__8588 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8589 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8589))
{var e__8590 = temp__3695__auto____8589;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8590));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8588,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8583_SHARP_){
var temp__3695__auto____8591 = cljs.core.find.call(null,smap,p1__8583_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8591))
{var e__8592 = temp__3695__auto____8591;

return cljs.core.second.call(null,e__8592);
} else
{return p1__8583_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8600 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8593,seen){
while(true){
var vec__8594__8595 = p__8593;
var f__8596 = cljs.core.nth.call(null,vec__8594__8595,0,null);
var xs__8597 = vec__8594__8595;

var temp__3698__auto____8598 = cljs.core.seq.call(null,xs__8597);

if(cljs.core.truth_(temp__3698__auto____8598))
{var s__8599 = temp__3698__auto____8598;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8596)))
{{
var G__8601 = cljs.core.rest.call(null,s__8599);
var G__8602 = seen;
p__8593 = G__8601;
seen = G__8602;
continue;
}
} else
{return cljs.core.cons.call(null,f__8596,step.call(null,cljs.core.rest.call(null,s__8599),cljs.core.conj.call(null,seen,f__8596)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8600.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8603 = cljs.core.PersistentVector.fromArray([]);
var s__8604 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8604)))
{{
var G__8605 = cljs.core.conj.call(null,ret__8603,cljs.core.first.call(null,s__8604));
var G__8606 = cljs.core.next.call(null,s__8604);
ret__8603 = G__8605;
s__8604 = G__8606;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8603);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8607 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8607))
{return or__3548__auto____8607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8608 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8608 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8608 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8609 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8609))
{return or__3548__auto____8609;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8610 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8610 > -1)))
{return cljs.core.subs.call(null,x,2,i__8610);
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
var map__8613 = cljs.core.ObjMap.fromObject([],{});
var ks__8614 = cljs.core.seq.call(null,keys);
var vs__8615 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8616 = ks__8614;

if(cljs.core.truth_(and__3546__auto____8616))
{return vs__8615;
} else
{return and__3546__auto____8616;
}
})()))
{{
var G__8617 = cljs.core.assoc.call(null,map__8613,cljs.core.first.call(null,ks__8614),cljs.core.first.call(null,vs__8615));
var G__8618 = cljs.core.next.call(null,ks__8614);
var G__8619 = cljs.core.next.call(null,vs__8615);
map__8613 = G__8617;
ks__8614 = G__8618;
vs__8615 = G__8619;
continue;
}
} else
{return map__8613;
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
var max_key__8622 = (function (k,x){
return x;
});
var max_key__8623 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8624 = (function() { 
var G__8626__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8611_SHARP_,p2__8612_SHARP_){
return max_key.call(null,k,p1__8611_SHARP_,p2__8612_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8626 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8626__delegate.call(this, k, x, y, more);
};
G__8626.cljs$lang$maxFixedArity = 3;
G__8626.cljs$lang$applyTo = (function (arglist__8627){
var k = cljs.core.first(arglist__8627);
var x = cljs.core.first(cljs.core.next(arglist__8627));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8627)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8627)));
return G__8626__delegate.call(this, k, x, y, more);
});
return G__8626;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8622.call(this,k,x);
case  3 :
return max_key__8623.call(this,k,x,y);
default:
return max_key__8624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8624.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8628 = (function (k,x){
return x;
});
var min_key__8629 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8630 = (function() { 
var G__8632__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8620_SHARP_,p2__8621_SHARP_){
return min_key.call(null,k,p1__8620_SHARP_,p2__8621_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8632 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8632__delegate.call(this, k, x, y, more);
};
G__8632.cljs$lang$maxFixedArity = 3;
G__8632.cljs$lang$applyTo = (function (arglist__8633){
var k = cljs.core.first(arglist__8633);
var x = cljs.core.first(cljs.core.next(arglist__8633));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8633)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8633)));
return G__8632__delegate.call(this, k, x, y, more);
});
return G__8632;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8628.call(this,k,x);
case  3 :
return min_key__8629.call(this,k,x,y);
default:
return min_key__8630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8630.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8636 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8637 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8634))
{var s__8635 = temp__3698__auto____8634;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8635),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8635)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8636.call(this,n,step);
case  3 :
return partition_all__8637.call(this,n,step,coll);
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
var temp__3698__auto____8639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8639))
{var s__8640 = temp__3698__auto____8639;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8640))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8640),take_while.call(null,pred,cljs.core.rest.call(null,s__8640)));
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
var this__8641 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8642 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8658 = null;
var G__8658__8659 = (function (rng,f){
var this__8643 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8658__8660 = (function (rng,f,s){
var this__8644 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8658 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8658__8659.call(this,rng,f);
case  3 :
return G__8658__8660.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8658;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8645 = this;
var comp__8646 = (cljs.core.truth_((this__8645.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8646.call(null,this__8645.start,this__8645.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8647 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8647.end - this__8647.start) / this__8647.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8648 = this;
return this__8648.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8649 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8649.meta,(this__8649.start + this__8649.step),this__8649.end,this__8649.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8650 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8651 = this;
return (new cljs.core.Range(meta,this__8651.start,this__8651.end,this__8651.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8652 = this;
return this__8652.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8662 = null;
var G__8662__8663 = (function (rng,n){
var this__8653 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8653.start + (n * this__8653.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8654 = (this__8653.start > this__8653.end);

if(cljs.core.truth_(and__3546__auto____8654))
{return cljs.core._EQ_.call(null,this__8653.step,0);
} else
{return and__3546__auto____8654;
}
})()))
{return this__8653.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8662__8664 = (function (rng,n,not_found){
var this__8655 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8655.start + (n * this__8655.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8656 = (this__8655.start > this__8655.end);

if(cljs.core.truth_(and__3546__auto____8656))
{return cljs.core._EQ_.call(null,this__8655.step,0);
} else
{return and__3546__auto____8656;
}
})()))
{return this__8655.start;
} else
{return not_found;
}
}
});
G__8662 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8662__8663.call(this,rng,n);
case  3 :
return G__8662__8664.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8662;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8657 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8657.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8666 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8667 = (function (end){
return range.call(null,0,end,1);
});
var range__8668 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8669 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8666.call(this);
case  1 :
return range__8667.call(this,start);
case  2 :
return range__8668.call(this,start,end);
case  3 :
return range__8669.call(this,start,end,step);
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
var temp__3698__auto____8671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8671))
{var s__8672 = temp__3698__auto____8671;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8672),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8672)));
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
var temp__3698__auto____8674 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8674))
{var s__8675 = temp__3698__auto____8674;

var fst__8676 = cljs.core.first.call(null,s__8675);
var fv__8677 = f.call(null,fst__8676);
var run__8678 = cljs.core.cons.call(null,fst__8676,cljs.core.take_while.call(null,(function (p1__8673_SHARP_){
return cljs.core._EQ_.call(null,fv__8677,f.call(null,p1__8673_SHARP_));
}),cljs.core.next.call(null,s__8675)));

return cljs.core.cons.call(null,run__8678,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8678),s__8675))));
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
var reductions__8693 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8689))
{var s__8690 = temp__3695__auto____8689;

return reductions.call(null,f,cljs.core.first.call(null,s__8690),cljs.core.rest.call(null,s__8690));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8694 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8691))
{var s__8692 = temp__3698__auto____8691;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8692)),cljs.core.rest.call(null,s__8692));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8693.call(this,f,init);
case  3 :
return reductions__8694.call(this,f,init,coll);
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
var juxt__8697 = (function (f){
return (function() {
var G__8702 = null;
var G__8702__8703 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8702__8704 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8702__8705 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8702__8706 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8702__8707 = (function() { 
var G__8709__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8709 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8709__delegate.call(this, x, y, z, args);
};
G__8709.cljs$lang$maxFixedArity = 3;
G__8709.cljs$lang$applyTo = (function (arglist__8710){
var x = cljs.core.first(arglist__8710);
var y = cljs.core.first(cljs.core.next(arglist__8710));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8710)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8710)));
return G__8709__delegate.call(this, x, y, z, args);
});
return G__8709;
})()
;
G__8702 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8702__8703.call(this);
case  1 :
return G__8702__8704.call(this,x);
case  2 :
return G__8702__8705.call(this,x,y);
case  3 :
return G__8702__8706.call(this,x,y,z);
default:
return G__8702__8707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8702.cljs$lang$maxFixedArity = 3;
G__8702.cljs$lang$applyTo = G__8702__8707.cljs$lang$applyTo;
return G__8702;
})()
});
var juxt__8698 = (function (f,g){
return (function() {
var G__8711 = null;
var G__8711__8712 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8711__8713 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8711__8714 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8711__8715 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8711__8716 = (function() { 
var G__8718__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8718 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8718__delegate.call(this, x, y, z, args);
};
G__8718.cljs$lang$maxFixedArity = 3;
G__8718.cljs$lang$applyTo = (function (arglist__8719){
var x = cljs.core.first(arglist__8719);
var y = cljs.core.first(cljs.core.next(arglist__8719));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8719)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8719)));
return G__8718__delegate.call(this, x, y, z, args);
});
return G__8718;
})()
;
G__8711 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8711__8712.call(this);
case  1 :
return G__8711__8713.call(this,x);
case  2 :
return G__8711__8714.call(this,x,y);
case  3 :
return G__8711__8715.call(this,x,y,z);
default:
return G__8711__8716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8711.cljs$lang$maxFixedArity = 3;
G__8711.cljs$lang$applyTo = G__8711__8716.cljs$lang$applyTo;
return G__8711;
})()
});
var juxt__8699 = (function (f,g,h){
return (function() {
var G__8720 = null;
var G__8720__8721 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8720__8722 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8720__8723 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8720__8724 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8720__8725 = (function() { 
var G__8727__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8727 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8727__delegate.call(this, x, y, z, args);
};
G__8727.cljs$lang$maxFixedArity = 3;
G__8727.cljs$lang$applyTo = (function (arglist__8728){
var x = cljs.core.first(arglist__8728);
var y = cljs.core.first(cljs.core.next(arglist__8728));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8728)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8728)));
return G__8727__delegate.call(this, x, y, z, args);
});
return G__8727;
})()
;
G__8720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8720__8721.call(this);
case  1 :
return G__8720__8722.call(this,x);
case  2 :
return G__8720__8723.call(this,x,y);
case  3 :
return G__8720__8724.call(this,x,y,z);
default:
return G__8720__8725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8720.cljs$lang$maxFixedArity = 3;
G__8720.cljs$lang$applyTo = G__8720__8725.cljs$lang$applyTo;
return G__8720;
})()
});
var juxt__8700 = (function() { 
var G__8729__delegate = function (f,g,h,fs){
var fs__8696 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8730 = null;
var G__8730__8731 = (function (){
return cljs.core.reduce.call(null,(function (p1__8679_SHARP_,p2__8680_SHARP_){
return cljs.core.conj.call(null,p1__8679_SHARP_,p2__8680_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8730__8732 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8681_SHARP_,p2__8682_SHARP_){
return cljs.core.conj.call(null,p1__8681_SHARP_,p2__8682_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8730__8733 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8683_SHARP_,p2__8684_SHARP_){
return cljs.core.conj.call(null,p1__8683_SHARP_,p2__8684_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8730__8734 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8685_SHARP_,p2__8686_SHARP_){
return cljs.core.conj.call(null,p1__8685_SHARP_,p2__8686_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8730__8735 = (function() { 
var G__8737__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8687_SHARP_,p2__8688_SHARP_){
return cljs.core.conj.call(null,p1__8687_SHARP_,cljs.core.apply.call(null,p2__8688_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
};
var G__8737 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8737__delegate.call(this, x, y, z, args);
};
G__8737.cljs$lang$maxFixedArity = 3;
G__8737.cljs$lang$applyTo = (function (arglist__8738){
var x = cljs.core.first(arglist__8738);
var y = cljs.core.first(cljs.core.next(arglist__8738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8738)));
return G__8737__delegate.call(this, x, y, z, args);
});
return G__8737;
})()
;
G__8730 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8730__8731.call(this);
case  1 :
return G__8730__8732.call(this,x);
case  2 :
return G__8730__8733.call(this,x,y);
case  3 :
return G__8730__8734.call(this,x,y,z);
default:
return G__8730__8735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8730.cljs$lang$maxFixedArity = 3;
G__8730.cljs$lang$applyTo = G__8730__8735.cljs$lang$applyTo;
return G__8730;
})()
};
var G__8729 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8729__delegate.call(this, f, g, h, fs);
};
G__8729.cljs$lang$maxFixedArity = 3;
G__8729.cljs$lang$applyTo = (function (arglist__8739){
var f = cljs.core.first(arglist__8739);
var g = cljs.core.first(cljs.core.next(arglist__8739));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8739)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8739)));
return G__8729__delegate.call(this, f, g, h, fs);
});
return G__8729;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8697.call(this,f);
case  2 :
return juxt__8698.call(this,f,g);
case  3 :
return juxt__8699.call(this,f,g,h);
default:
return juxt__8700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8700.cljs$lang$applyTo;
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
var dorun__8741 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8744 = cljs.core.next.call(null,coll);
coll = G__8744;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8742 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8740 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8740))
{return (n > 0);
} else
{return and__3546__auto____8740;
}
})()))
{{
var G__8745 = (n - 1);
var G__8746 = cljs.core.next.call(null,coll);
n = G__8745;
coll = G__8746;
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
return dorun__8741.call(this,n);
case  2 :
return dorun__8742.call(this,n,coll);
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
var doall__8747 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8748 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8747.call(this,n);
case  2 :
return doall__8748.call(this,n,coll);
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
var matches__8750 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8750),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8750),1)))
{return cljs.core.first.call(null,matches__8750);
} else
{return cljs.core.vec.call(null,matches__8750);
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
var matches__8751 = re.exec(s);

if(cljs.core.truth_((matches__8751 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8751),1)))
{return cljs.core.first.call(null,matches__8751);
} else
{return cljs.core.vec.call(null,matches__8751);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8752 = cljs.core.re_find.call(null,re,s);
var match_idx__8753 = s.search(re);
var match_str__8754 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8752))?cljs.core.first.call(null,match_data__8752):match_data__8752);
var post_match__8755 = cljs.core.subs.call(null,s,(match_idx__8753 + cljs.core.count.call(null,match_str__8754)));

if(cljs.core.truth_(match_data__8752))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8752,re_seq.call(null,re,post_match__8755));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8757__8758 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8759 = cljs.core.nth.call(null,vec__8757__8758,0,null);
var flags__8760 = cljs.core.nth.call(null,vec__8757__8758,1,null);
var pattern__8761 = cljs.core.nth.call(null,vec__8757__8758,2,null);

return (new RegExp(pattern__8761,flags__8760));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8756_SHARP_){
return print_one.call(null,p1__8756_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8762 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8762))
{var and__3546__auto____8766 = (function (){var x__3028__auto____8763 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8764 = x__3028__auto____8763;

if(cljs.core.truth_(and__3546__auto____8764))
{var and__3546__auto____8765 = x__3028__auto____8763.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8765))
{return cljs.core.not.call(null,x__3028__auto____8763.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8765;
}
} else
{return and__3546__auto____8764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____8763);
}
})();

if(cljs.core.truth_(and__3546__auto____8766))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8766;
}
} else
{return and__3546__auto____8762;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____8767 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8768 = x__3028__auto____8767;

if(cljs.core.truth_(and__3546__auto____8768))
{var and__3546__auto____8769 = x__3028__auto____8767.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8769))
{return cljs.core.not.call(null,x__3028__auto____8767.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8769;
}
} else
{return and__3546__auto____8768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____8767);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__8770 = cljs.core.first.call(null,objs);
var sb__8771 = (new goog.string.StringBuffer());

var G__8772__8773 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8772__8773))
{var obj__8774 = cljs.core.first.call(null,G__8772__8773);
var G__8772__8775 = G__8772__8773;

while(true){
if(cljs.core.truth_((obj__8774 === first_obj__8770)))
{} else
{sb__8771.append(" ");
}
var G__8776__8777 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8774,opts));

if(cljs.core.truth_(G__8776__8777))
{var string__8778 = cljs.core.first.call(null,G__8776__8777);
var G__8776__8779 = G__8776__8777;

while(true){
sb__8771.append(string__8778);
var temp__3698__auto____8780 = cljs.core.next.call(null,G__8776__8779);

if(cljs.core.truth_(temp__3698__auto____8780))
{var G__8776__8781 = temp__3698__auto____8780;

{
var G__8784 = cljs.core.first.call(null,G__8776__8781);
var G__8785 = G__8776__8781;
string__8778 = G__8784;
G__8776__8779 = G__8785;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8782 = cljs.core.next.call(null,G__8772__8775);

if(cljs.core.truth_(temp__3698__auto____8782))
{var G__8772__8783 = temp__3698__auto____8782;

{
var G__8786 = cljs.core.first.call(null,G__8772__8783);
var G__8787 = G__8772__8783;
obj__8774 = G__8786;
G__8772__8775 = G__8787;
continue;
}
} else
{}
break;
}
} else
{}
return sb__8771;
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
var sb__8788 = cljs.core.pr_sb.call(null,objs,opts);

sb__8788.append("\n");
return cljs.core.str.call(null,sb__8788);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8789 = cljs.core.first.call(null,objs);

var G__8790__8791 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8790__8791))
{var obj__8792 = cljs.core.first.call(null,G__8790__8791);
var G__8790__8793 = G__8790__8791;

while(true){
if(cljs.core.truth_((obj__8792 === first_obj__8789)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8794__8795 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8792,opts));

if(cljs.core.truth_(G__8794__8795))
{var string__8796 = cljs.core.first.call(null,G__8794__8795);
var G__8794__8797 = G__8794__8795;

while(true){
cljs.core.string_print.call(null,string__8796);
var temp__3698__auto____8798 = cljs.core.next.call(null,G__8794__8797);

if(cljs.core.truth_(temp__3698__auto____8798))
{var G__8794__8799 = temp__3698__auto____8798;

{
var G__8802 = cljs.core.first.call(null,G__8794__8799);
var G__8803 = G__8794__8799;
string__8796 = G__8802;
G__8794__8797 = G__8803;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8800 = cljs.core.next.call(null,G__8790__8793);

if(cljs.core.truth_(temp__3698__auto____8800))
{var G__8790__8801 = temp__3698__auto____8800;

{
var G__8804 = cljs.core.first.call(null,G__8790__8801);
var G__8805 = G__8790__8801;
obj__8792 = G__8804;
G__8790__8793 = G__8805;
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
pr_str.cljs$lang$applyTo = (function (arglist__8806){
var objs = cljs.core.seq( arglist__8806 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__8807){
var objs = cljs.core.seq( arglist__8807 );;
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
pr.cljs$lang$applyTo = (function (arglist__8808){
var objs = cljs.core.seq( arglist__8808 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8809){
var objs = cljs.core.seq( arglist__8809 );;
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
print_str.cljs$lang$applyTo = (function (arglist__8810){
var objs = cljs.core.seq( arglist__8810 );;
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
println.cljs$lang$applyTo = (function (arglist__8811){
var objs = cljs.core.seq( arglist__8811 );;
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
println_str.cljs$lang$applyTo = (function (arglist__8812){
var objs = cljs.core.seq( arglist__8812 );;
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
prn.cljs$lang$applyTo = (function (arglist__8813){
var objs = cljs.core.seq( arglist__8813 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8814 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8814,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8815 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8815))
{var nspc__8816 = temp__3698__auto____8815;

return cljs.core.str.call(null,nspc__8816,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8817 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8817))
{var nspc__8818 = temp__3698__auto____8817;

return cljs.core.str.call(null,nspc__8818,"/");
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
var pr_pair__8819 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8819,"{",", ","}",opts,coll);
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
var this__8820 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8821 = this;
var G__8822__8823 = cljs.core.seq.call(null,this__8821.watches);

if(cljs.core.truth_(G__8822__8823))
{var G__8825__8827 = cljs.core.first.call(null,G__8822__8823);
var vec__8826__8828 = G__8825__8827;
var key__8829 = cljs.core.nth.call(null,vec__8826__8828,0,null);
var f__8830 = cljs.core.nth.call(null,vec__8826__8828,1,null);
var G__8822__8831 = G__8822__8823;

var G__8825__8832 = G__8825__8827;
var G__8822__8833 = G__8822__8831;

while(true){
var vec__8834__8835 = G__8825__8832;
var key__8836 = cljs.core.nth.call(null,vec__8834__8835,0,null);
var f__8837 = cljs.core.nth.call(null,vec__8834__8835,1,null);
var G__8822__8838 = G__8822__8833;

f__8837.call(null,key__8836,this$,oldval,newval);
var temp__3698__auto____8839 = cljs.core.next.call(null,G__8822__8838);

if(cljs.core.truth_(temp__3698__auto____8839))
{var G__8822__8840 = temp__3698__auto____8839;

{
var G__8847 = cljs.core.first.call(null,G__8822__8840);
var G__8848 = G__8822__8840;
G__8825__8832 = G__8847;
G__8822__8833 = G__8848;
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
var this__8841 = this;
return this$.watches = cljs.core.assoc.call(null,this__8841.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8842 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8842.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8843 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8843.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8844 = this;
return this__8844.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8845 = this;
return this__8845.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8846 = this;
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
var atom__8855 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8856 = (function() { 
var G__8858__delegate = function (x,p__8849){
var map__8850__8851 = p__8849;
var map__8850__8852 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8850__8851))?cljs.core.apply.call(null,cljs.core.hash_map,map__8850__8851):map__8850__8851);
var validator__8853 = cljs.core.get.call(null,map__8850__8852,"\uFDD0'validator");
var meta__8854 = cljs.core.get.call(null,map__8850__8852,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8854,validator__8853,null));
};
var G__8858 = function (x,var_args){
var p__8849 = null;
if (goog.isDef(var_args)) {
  p__8849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8858__delegate.call(this, x, p__8849);
};
G__8858.cljs$lang$maxFixedArity = 1;
G__8858.cljs$lang$applyTo = (function (arglist__8859){
var x = cljs.core.first(arglist__8859);
var p__8849 = cljs.core.rest(arglist__8859);
return G__8858__delegate.call(this, x, p__8849);
});
return G__8858;
})()
;
atom = function(x,var_args){
var p__8849 = var_args;
switch(arguments.length){
case  1 :
return atom__8855.call(this,x);
default:
return atom__8856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8856.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8860 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8860))
{var validate__8861 = temp__3698__auto____8860;

if(cljs.core.truth_(validate__8861.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__8862 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8862,new_value);
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
var swap_BANG___8863 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8864 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8865 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8866 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8867 = (function() { 
var G__8869__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8869 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8869__delegate.call(this, a, f, x, y, z, more);
};
G__8869.cljs$lang$maxFixedArity = 5;
G__8869.cljs$lang$applyTo = (function (arglist__8870){
var a = cljs.core.first(arglist__8870);
var f = cljs.core.first(cljs.core.next(arglist__8870));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8870)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8870))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8870)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8870)))));
return G__8869__delegate.call(this, a, f, x, y, z, more);
});
return G__8869;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8863.call(this,a,f);
case  3 :
return swap_BANG___8864.call(this,a,f,x);
case  4 :
return swap_BANG___8865.call(this,a,f,x,y);
case  5 :
return swap_BANG___8866.call(this,a,f,x,y,z);
default:
return swap_BANG___8867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8867.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8871){
var iref = cljs.core.first(arglist__8871);
var f = cljs.core.first(cljs.core.next(arglist__8871));
var args = cljs.core.rest(cljs.core.next(arglist__8871));
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
var gensym__8872 = (function (){
return gensym.call(null,"G__");
});
var gensym__8873 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8872.call(this);
case  1 :
return gensym__8873.call(this,prefix_string);
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
var this__8875 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__8875.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8876 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__8876.state,(function (p__8877){
var curr_state__8878 = p__8877;
var curr_state__8879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__8878))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__8878):curr_state__8878);
var done__8880 = cljs.core.get.call(null,curr_state__8879,"\uFDD0'done");

if(cljs.core.truth_(done__8880))
{return curr_state__8879;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__8876.f.call(null)});
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
var map__8881__8882 = options;
var map__8881__8883 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8881__8882))?cljs.core.apply.call(null,cljs.core.hash_map,map__8881__8882):map__8881__8882);
var keywordize_keys__8884 = cljs.core.get.call(null,map__8881__8883,"\uFDD0'keywordize-keys");
var keyfn__8885 = (cljs.core.truth_(keywordize_keys__8884)?cljs.core.keyword:cljs.core.str);
var f__8891 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____8890 = (function iter__8886(s__8887){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8887__8888 = s__8887;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8887__8888)))
{var k__8889 = cljs.core.first.call(null,s__8887__8888);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__8885.call(null,k__8889),thisfn.call(null,(x[k__8889]))]),iter__8886.call(null,cljs.core.rest.call(null,s__8887__8888)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____8890.call(null,cljs.core.js_keys.call(null,x));
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

return f__8891.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8892){
var x = cljs.core.first(arglist__8892);
var options = cljs.core.rest(arglist__8892);
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
var mem__8893 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8897__delegate = function (args){
var temp__3695__auto____8894 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8893),args);

if(cljs.core.truth_(temp__3695__auto____8894))
{var v__8895 = temp__3695__auto____8894;

return v__8895;
} else
{var ret__8896 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8893,cljs.core.assoc,args,ret__8896);
return ret__8896;
}
};
var G__8897 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8897__delegate.call(this, args);
};
G__8897.cljs$lang$maxFixedArity = 0;
G__8897.cljs$lang$applyTo = (function (arglist__8898){
var args = cljs.core.seq( arglist__8898 );;
return G__8897__delegate.call(this, args);
});
return G__8897;
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
var trampoline__8900 = (function (f){
while(true){
var ret__8899 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8899)))
{{
var G__8903 = ret__8899;
f = G__8903;
continue;
}
} else
{return ret__8899;
}
break;
}
});
var trampoline__8901 = (function() { 
var G__8904__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8904 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8904__delegate.call(this, f, args);
};
G__8904.cljs$lang$maxFixedArity = 1;
G__8904.cljs$lang$applyTo = (function (arglist__8905){
var f = cljs.core.first(arglist__8905);
var args = cljs.core.rest(arglist__8905);
return G__8904__delegate.call(this, f, args);
});
return G__8904;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8900.call(this,f);
default:
return trampoline__8901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8901.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8906 = (function (){
return rand.call(null,1);
});
var rand__8907 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8906.call(this);
case  1 :
return rand__8907.call(this,n);
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
var k__8909 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8909,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8909,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___8918 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8919 = (function (h,child,parent){
var or__3548__auto____8910 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8910))
{return or__3548__auto____8910;
} else
{var or__3548__auto____8911 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8911))
{return or__3548__auto____8911;
} else
{var and__3546__auto____8912 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8912))
{var and__3546__auto____8913 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8913))
{var and__3546__auto____8914 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8914))
{var ret__8915 = true;
var i__8916 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8917 = cljs.core.not.call(null,ret__8915);

if(cljs.core.truth_(or__3548__auto____8917))
{return or__3548__auto____8917;
} else
{return cljs.core._EQ_.call(null,i__8916,cljs.core.count.call(null,parent));
}
})()))
{return ret__8915;
} else
{{
var G__8921 = isa_QMARK_.call(null,h,child.call(null,i__8916),parent.call(null,i__8916));
var G__8922 = (i__8916 + 1);
ret__8915 = G__8921;
i__8916 = G__8922;
continue;
}
}
break;
}
} else
{return and__3546__auto____8914;
}
} else
{return and__3546__auto____8913;
}
} else
{return and__3546__auto____8912;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8918.call(this,h,child);
case  3 :
return isa_QMARK___8919.call(this,h,child,parent);
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
var parents__8923 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8924 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8923.call(this,h);
case  2 :
return parents__8924.call(this,h,tag);
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
var ancestors__8926 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8927 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8926.call(this,h);
case  2 :
return ancestors__8927.call(this,h,tag);
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
var descendants__8929 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8930 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8929.call(this,h);
case  2 :
return descendants__8930.call(this,h,tag);
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
var derive__8940 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8941 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__8935 = "\uFDD0'parents".call(null,h);
var td__8936 = "\uFDD0'descendants".call(null,h);
var ta__8937 = "\uFDD0'ancestors".call(null,h);
var tf__8938 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8939 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8935.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8937.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8937.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8935,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8938.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8936,parent,ta__8937),"\uFDD0'descendants":tf__8938.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8937,tag,td__8936)});
})());

if(cljs.core.truth_(or__3548__auto____8939))
{return or__3548__auto____8939;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8940.call(this,h,tag);
case  3 :
return derive__8941.call(this,h,tag,parent);
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
var underive__8947 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8948 = (function (h,tag,parent){
var parentMap__8943 = "\uFDD0'parents".call(null,h);
var childsParents__8944 = (cljs.core.truth_(parentMap__8943.call(null,tag))?cljs.core.disj.call(null,parentMap__8943.call(null,tag),parent):cljs.core.set([]));
var newParents__8945 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8944))?cljs.core.assoc.call(null,parentMap__8943,tag,childsParents__8944):cljs.core.dissoc.call(null,parentMap__8943,tag));
var deriv_seq__8946 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8932_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8932_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8932_SHARP_),cljs.core.second.call(null,p1__8932_SHARP_)));
}),cljs.core.seq.call(null,newParents__8945)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8943.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8933_SHARP_,p2__8934_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8933_SHARP_,p2__8934_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8946));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8947.call(this,h,tag);
case  3 :
return underive__8948.call(this,h,tag,parent);
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
var xprefs__8950 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8952 = (cljs.core.truth_((function (){var and__3546__auto____8951 = xprefs__8950;

if(cljs.core.truth_(and__3546__auto____8951))
{return xprefs__8950.call(null,y);
} else
{return and__3546__auto____8951;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8952))
{return or__3548__auto____8952;
} else
{var or__3548__auto____8954 = (function (){var ps__8953 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8953) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8953),prefer_table)))
{} else
{}
{
var G__8957 = cljs.core.rest.call(null,ps__8953);
ps__8953 = G__8957;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8954))
{return or__3548__auto____8954;
} else
{var or__3548__auto____8956 = (function (){var ps__8955 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8955) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8955),y,prefer_table)))
{} else
{}
{
var G__8958 = cljs.core.rest.call(null,ps__8955);
ps__8955 = G__8958;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8956))
{return or__3548__auto____8956;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8959 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8959))
{return or__3548__auto____8959;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8968 = cljs.core.reduce.call(null,(function (be,p__8960){
var vec__8961__8962 = p__8960;
var k__8963 = cljs.core.nth.call(null,vec__8961__8962,0,null);
var ___8964 = cljs.core.nth.call(null,vec__8961__8962,1,null);
var e__8965 = vec__8961__8962;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8963)))
{var be2__8967 = (cljs.core.truth_((function (){var or__3548__auto____8966 = (be === null);

if(cljs.core.truth_(or__3548__auto____8966))
{return or__3548__auto____8966;
} else
{return cljs.core.dominates.call(null,k__8963,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8965:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8967),k__8963,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8963," and ",cljs.core.first.call(null,be2__8967),", and neither is preferred")));
}
return be2__8967;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8968))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8968));
return cljs.core.second.call(null,best_entry__8968);
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
if(cljs.core.truth_((function (){var and__3546__auto____8969 = mf;

if(cljs.core.truth_(and__3546__auto____8969))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8969;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8970 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8970))
{return or__3548__auto____8970;
} else
{var or__3548__auto____8971 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8971))
{return or__3548__auto____8971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8972 = mf;

if(cljs.core.truth_(and__3546__auto____8972))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8972;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8973 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8973))
{return or__3548__auto____8973;
} else
{var or__3548__auto____8974 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8974))
{return or__3548__auto____8974;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8975 = mf;

if(cljs.core.truth_(and__3546__auto____8975))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8975;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8976 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8976))
{return or__3548__auto____8976;
} else
{var or__3548__auto____8977 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8977))
{return or__3548__auto____8977;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8978 = mf;

if(cljs.core.truth_(and__3546__auto____8978))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8978;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8979 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8979))
{return or__3548__auto____8979;
} else
{var or__3548__auto____8980 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8980))
{return or__3548__auto____8980;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8981 = mf;

if(cljs.core.truth_(and__3546__auto____8981))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8981;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8982 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8982))
{return or__3548__auto____8982;
} else
{var or__3548__auto____8983 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8983))
{return or__3548__auto____8983;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8984 = mf;

if(cljs.core.truth_(and__3546__auto____8984))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8984;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8985 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8985))
{return or__3548__auto____8985;
} else
{var or__3548__auto____8986 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8986))
{return or__3548__auto____8986;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8987 = mf;

if(cljs.core.truth_(and__3546__auto____8987))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8987;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8988 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8988))
{return or__3548__auto____8988;
} else
{var or__3548__auto____8989 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8989))
{return or__3548__auto____8989;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8990 = mf;

if(cljs.core.truth_(and__3546__auto____8990))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8990;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8991 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8991))
{return or__3548__auto____8991;
} else
{var or__3548__auto____8992 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8992))
{return or__3548__auto____8992;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8993 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8994 = cljs.core._get_method.call(null,mf,dispatch_val__8993);

if(cljs.core.truth_(target_fn__8994))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8993)));
}
return cljs.core.apply.call(null,target_fn__8994,args);
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
var this__8995 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8996 = this;
cljs.core.swap_BANG_.call(null,this__8996.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8996.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8996.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8996.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8997 = this;
cljs.core.swap_BANG_.call(null,this__8997.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8997.method_cache,this__8997.method_table,this__8997.cached_hierarchy,this__8997.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8998 = this;
cljs.core.swap_BANG_.call(null,this__8998.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8998.method_cache,this__8998.method_table,this__8998.cached_hierarchy,this__8998.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8999 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8999.cached_hierarchy),cljs.core.deref.call(null,this__8999.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8999.method_cache,this__8999.method_table,this__8999.cached_hierarchy,this__8999.hierarchy);
}
var temp__3695__auto____9000 = cljs.core.deref.call(null,this__8999.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9000))
{var target_fn__9001 = temp__3695__auto____9000;

return target_fn__9001;
} else
{var temp__3695__auto____9002 = cljs.core.find_and_cache_best_method.call(null,this__8999.name,dispatch_val,this__8999.hierarchy,this__8999.method_table,this__8999.prefer_table,this__8999.method_cache,this__8999.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9002))
{var target_fn__9003 = temp__3695__auto____9002;

return target_fn__9003;
} else
{return cljs.core.deref.call(null,this__8999.method_table).call(null,this__8999.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9004 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9004.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9004.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9004.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9004.method_cache,this__9004.method_table,this__9004.cached_hierarchy,this__9004.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9005 = this;
return cljs.core.deref.call(null,this__9005.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9006 = this;
return cljs.core.deref.call(null,this__9006.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9007 = this;
return cljs.core.do_dispatch.call(null,mf,this__9007.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9008__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9008 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9008__delegate.call(this, _, args);
};
G__9008.cljs$lang$maxFixedArity = 1;
G__9008.cljs$lang$applyTo = (function (arglist__9009){
var _ = cljs.core.first(arglist__9009);
var args = cljs.core.rest(arglist__9009);
return G__9008__delegate.call(this, _, args);
});
return G__9008;
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
