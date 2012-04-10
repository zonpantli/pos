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
var or__3548__auto____8004 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
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
var _invoke__8069 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = this$;

if(cljs.core.truth_(and__3546__auto____8006))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8006;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____8007 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{var or__3548__auto____8008 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__8070 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____8009 = this$;

if(cljs.core.truth_(and__3546__auto____8009))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8009;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____8010 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{var or__3548__auto____8011 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__8071 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____8012 = this$;

if(cljs.core.truth_(and__3546__auto____8012))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8012;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____8013 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8014 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__8072 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = this$;

if(cljs.core.truth_(and__3546__auto____8015))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8015;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8017 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__8073 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = this$;

if(cljs.core.truth_(and__3546__auto____8018))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8018;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8020 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__8074 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____8021 = this$;

if(cljs.core.truth_(and__3546__auto____8021))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8021;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____8022 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
} else
{var or__3548__auto____8023 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__8075 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = this$;

if(cljs.core.truth_(and__3546__auto____8024))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8024;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____8025 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{var or__3548__auto____8026 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8076 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____8027 = this$;

if(cljs.core.truth_(and__3546__auto____8027))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8027;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____8028 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{var or__3548__auto____8029 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__8077 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = this$;

if(cljs.core.truth_(and__3546__auto____8030))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8030;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8032 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__8078 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____8033 = this$;

if(cljs.core.truth_(and__3546__auto____8033))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8033;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____8034 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{var or__3548__auto____8035 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__8079 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____8036 = this$;

if(cljs.core.truth_(and__3546__auto____8036))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8036;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____8037 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
} else
{var or__3548__auto____8038 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__8080 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____8039 = this$;

if(cljs.core.truth_(and__3546__auto____8039))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8039;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____8040 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{var or__3548__auto____8041 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__8081 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = this$;

if(cljs.core.truth_(and__3546__auto____8042))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8042;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__8082 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____8045 = this$;

if(cljs.core.truth_(and__3546__auto____8045))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8045;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____8046 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8047 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__8083 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____8048 = this$;

if(cljs.core.truth_(and__3546__auto____8048))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8048;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8050 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__8084 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____8051 = this$;

if(cljs.core.truth_(and__3546__auto____8051))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8051;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____8052 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{var or__3548__auto____8053 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__8085 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____8054 = this$;

if(cljs.core.truth_(and__3546__auto____8054))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8054;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____8055 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__8086 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____8057 = this$;

if(cljs.core.truth_(and__3546__auto____8057))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8057;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8059 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__8087 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____8060 = this$;

if(cljs.core.truth_(and__3546__auto____8060))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8060;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8062 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__8088 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = this$;

if(cljs.core.truth_(and__3546__auto____8063))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8063;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8065 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__8089 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____8066 = this$;

if(cljs.core.truth_(and__3546__auto____8066))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8066;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8068 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
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
return _invoke__8069.call(this,this$);
case  2 :
return _invoke__8070.call(this,this$,a);
case  3 :
return _invoke__8071.call(this,this$,a,b);
case  4 :
return _invoke__8072.call(this,this$,a,b,c);
case  5 :
return _invoke__8073.call(this,this$,a,b,c,d);
case  6 :
return _invoke__8074.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__8075.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__8076.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__8077.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__8078.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__8079.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__8080.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__8081.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__8082.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__8083.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__8084.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__8085.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__8086.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__8087.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__8088.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__8089.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = coll;

if(cljs.core.truth_(and__3546__auto____8091))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____8091;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{var or__3548__auto____8093 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = coll;

if(cljs.core.truth_(and__3546__auto____8094))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____8094;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8096 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = coll;

if(cljs.core.truth_(and__3546__auto____8097))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____8097;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8099 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
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
var _nth__8106 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = coll;

if(cljs.core.truth_(and__3546__auto____8100))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____8100;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____8101 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{var or__3548__auto____8102 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__8107 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____8103 = coll;

if(cljs.core.truth_(and__3546__auto____8103))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____8103;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8105 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
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
return _nth__8106.call(this,coll,n);
case  3 :
return _nth__8107.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8109 = coll;

if(cljs.core.truth_(and__3546__auto____8109))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____8109;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8112 = coll;

if(cljs.core.truth_(and__3546__auto____8112))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____8112;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
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
var _lookup__8121 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____8115 = o;

if(cljs.core.truth_(and__3546__auto____8115))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____8115;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____8116 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{var or__3548__auto____8117 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__8122 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____8118 = o;

if(cljs.core.truth_(and__3546__auto____8118))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____8118;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____8119 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{var or__3548__auto____8120 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
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
return _lookup__8121.call(this,o,k);
case  3 :
return _lookup__8122.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8124 = coll;

if(cljs.core.truth_(and__3546__auto____8124))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____8124;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8126 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8127 = coll;

if(cljs.core.truth_(and__3546__auto____8127))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8127;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8128 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{var or__3548__auto____8129 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8130 = coll;

if(cljs.core.truth_(and__3546__auto____8130))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8130;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8133 = coll;

if(cljs.core.truth_(and__3546__auto____8133))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8133;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8135 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = coll;

if(cljs.core.truth_(and__3546__auto____8136))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8136;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8137 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{var or__3548__auto____8138 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8139 = coll;

if(cljs.core.truth_(and__3546__auto____8139))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8139;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8141 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = coll;

if(cljs.core.truth_(and__3546__auto____8142))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8142;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8145 = o;

if(cljs.core.truth_(and__3546__auto____8145))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8145;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8146 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{var or__3548__auto____8147 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8148 = o;

if(cljs.core.truth_(and__3546__auto____8148))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8148;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8149 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
} else
{var or__3548__auto____8150 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8151 = o;

if(cljs.core.truth_(and__3546__auto____8151))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8151;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8152 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8152))
{return or__3548__auto____8152;
} else
{var or__3548__auto____8153 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8154 = o;

if(cljs.core.truth_(and__3546__auto____8154))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8154;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8155 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{var or__3548__auto____8156 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
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
var _reduce__8163 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8157 = coll;

if(cljs.core.truth_(and__3546__auto____8157))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8157;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8158 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
} else
{var or__3548__auto____8159 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8164 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8160 = coll;

if(cljs.core.truth_(and__3546__auto____8160))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8160;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8161 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8161))
{return or__3548__auto____8161;
} else
{var or__3548__auto____8162 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
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
return _reduce__8163.call(this,coll,f);
case  3 :
return _reduce__8164.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8166 = o;

if(cljs.core.truth_(and__3546__auto____8166))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8166;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8167 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{var or__3548__auto____8168 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8169 = o;

if(cljs.core.truth_(and__3546__auto____8169))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8169;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8170 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
} else
{var or__3548__auto____8171 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8171))
{return or__3548__auto____8171;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8172 = o;

if(cljs.core.truth_(and__3546__auto____8172))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8172;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8173 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8173))
{return or__3548__auto____8173;
} else
{var or__3548__auto____8174 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8174))
{return or__3548__auto____8174;
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
if(cljs.core.truth_((function (){var and__3546__auto____8175 = o;

if(cljs.core.truth_(and__3546__auto____8175))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8175;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8176 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{var or__3548__auto____8177 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8178 = d;

if(cljs.core.truth_(and__3546__auto____8178))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8178;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8179 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8179))
{return or__3548__auto____8179;
} else
{var or__3548__auto____8180 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8180))
{return or__3548__auto____8180;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8181 = this$;

if(cljs.core.truth_(and__3546__auto____8181))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8181;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8182 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
} else
{var or__3548__auto____8183 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8183))
{return or__3548__auto____8183;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8184 = this$;

if(cljs.core.truth_(and__3546__auto____8184))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8184;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8185 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8185))
{return or__3548__auto____8185;
} else
{var or__3548__auto____8186 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8187 = this$;

if(cljs.core.truth_(and__3546__auto____8187))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8187;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8188 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
} else
{var or__3548__auto____8189 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
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
var G__8190 = null;
var G__8190__8191 = (function (o,k){
return null;
});
var G__8190__8192 = (function (o,k,not_found){
return not_found;
});
G__8190 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8190__8191.call(this,o,k);
case  3 :
return G__8190__8192.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8190;
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
var G__8194 = null;
var G__8194__8195 = (function (_,f){
return f.call(null);
});
var G__8194__8196 = (function (_,f,start){
return start;
});
G__8194 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8194__8195.call(this,_,f);
case  3 :
return G__8194__8196.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8194;
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
var G__8198 = null;
var G__8198__8199 = (function (_,n){
return null;
});
var G__8198__8200 = (function (_,n,not_found){
return not_found;
});
G__8198 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8198__8199.call(this,_,n);
case  3 :
return G__8198__8200.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8198;
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
var ci_reduce__8208 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8202 = cljs.core._nth.call(null,cicoll,0);
var n__8203 = 1;

while(true){
if(cljs.core.truth_((n__8203 < cljs.core._count.call(null,cicoll))))
{{
var G__8212 = f.call(null,val__8202,cljs.core._nth.call(null,cicoll,n__8203));
var G__8213 = (n__8203 + 1);
val__8202 = G__8212;
n__8203 = G__8213;
continue;
}
} else
{return val__8202;
}
break;
}
}
});
var ci_reduce__8209 = (function (cicoll,f,val){
var val__8204 = val;
var n__8205 = 0;

while(true){
if(cljs.core.truth_((n__8205 < cljs.core._count.call(null,cicoll))))
{{
var G__8214 = f.call(null,val__8204,cljs.core._nth.call(null,cicoll,n__8205));
var G__8215 = (n__8205 + 1);
val__8204 = G__8214;
n__8205 = G__8215;
continue;
}
} else
{return val__8204;
}
break;
}
});
var ci_reduce__8210 = (function (cicoll,f,val,idx){
var val__8206 = val;
var n__8207 = idx;

while(true){
if(cljs.core.truth_((n__8207 < cljs.core._count.call(null,cicoll))))
{{
var G__8216 = f.call(null,val__8206,cljs.core._nth.call(null,cicoll,n__8207));
var G__8217 = (n__8207 + 1);
val__8206 = G__8216;
n__8207 = G__8217;
continue;
}
} else
{return val__8206;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8208.call(this,cicoll,f);
case  3 :
return ci_reduce__8209.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8210.call(this,cicoll,f,val,idx);
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
var this__8218 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8231 = null;
var G__8231__8232 = (function (_,f){
var this__8219 = this;
return cljs.core.ci_reduce.call(null,this__8219.a,f,(this__8219.a[this__8219.i]),(this__8219.i + 1));
});
var G__8231__8233 = (function (_,f,start){
var this__8220 = this;
return cljs.core.ci_reduce.call(null,this__8220.a,f,start,this__8220.i);
});
G__8231 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8231__8232.call(this,_,f);
case  3 :
return G__8231__8233.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8231;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8221 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8235 = null;
var G__8235__8236 = (function (coll,n){
var this__8223 = this;
var i__8224 = (n + this__8223.i);

if(cljs.core.truth_((i__8224 < this__8223.a.length)))
{return (this__8223.a[i__8224]);
} else
{return null;
}
});
var G__8235__8237 = (function (coll,n,not_found){
var this__8225 = this;
var i__8226 = (n + this__8225.i);

if(cljs.core.truth_((i__8226 < this__8225.a.length)))
{return (this__8225.a[i__8226]);
} else
{return not_found;
}
});
G__8235 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8235__8236.call(this,coll,n);
case  3 :
return G__8235__8237.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8235;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8227 = this;
return (this__8227.a.length - this__8227.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8228 = this;
return (this__8228.a[this__8228.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8229 = this;
if(cljs.core.truth_(((this__8229.i + 1) < this__8229.a.length)))
{return (new cljs.core.IndexedSeq(this__8229.a,(this__8229.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8230 = this;
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
var G__8239 = null;
var G__8239__8240 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8239__8241 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8239 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8239__8240.call(this,array,f);
case  3 :
return G__8239__8241.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8239;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8243 = null;
var G__8243__8244 = (function (array,k){
return (array[k]);
});
var G__8243__8245 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8243 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8243__8244.call(this,array,k);
case  3 :
return G__8243__8245.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8243;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8247 = null;
var G__8247__8248 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8247__8249 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8247 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8247__8248.call(this,array,n);
case  3 :
return G__8247__8249.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8247;
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
var temp__3698__auto____8251 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8251))
{var s__8252 = temp__3698__auto____8251;

return cljs.core._first.call(null,s__8252);
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
var G__8253 = cljs.core.next.call(null,s);
s = G__8253;
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
var s__8254 = cljs.core.seq.call(null,x);
var n__8255 = 0;

while(true){
if(cljs.core.truth_(s__8254))
{{
var G__8256 = cljs.core.next.call(null,s__8254);
var G__8257 = (n__8255 + 1);
s__8254 = G__8256;
n__8255 = G__8257;
continue;
}
} else
{return n__8255;
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
var conj__8258 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8259 = (function() { 
var G__8261__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8262 = conj.call(null,coll,x);
var G__8263 = cljs.core.first.call(null,xs);
var G__8264 = cljs.core.next.call(null,xs);
coll = G__8262;
x = G__8263;
xs = G__8264;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8261 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8261__delegate.call(this, coll, x, xs);
};
G__8261.cljs$lang$maxFixedArity = 2;
G__8261.cljs$lang$applyTo = (function (arglist__8265){
var coll = cljs.core.first(arglist__8265);
var x = cljs.core.first(cljs.core.next(arglist__8265));
var xs = cljs.core.rest(cljs.core.next(arglist__8265));
return G__8261__delegate.call(this, coll, x, xs);
});
return G__8261;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8258.call(this,coll,x);
default:
return conj__8259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8259.cljs$lang$applyTo;
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
var nth__8266 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8267 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8266.call(this,coll,n);
case  3 :
return nth__8267.call(this,coll,n,not_found);
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
var get__8269 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8270 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8269.call(this,o,k);
case  3 :
return get__8270.call(this,o,k,not_found);
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
var assoc__8273 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8274 = (function() { 
var G__8276__delegate = function (coll,k,v,kvs){
while(true){
var ret__8272 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8277 = ret__8272;
var G__8278 = cljs.core.first.call(null,kvs);
var G__8279 = cljs.core.second.call(null,kvs);
var G__8280 = cljs.core.nnext.call(null,kvs);
coll = G__8277;
k = G__8278;
v = G__8279;
kvs = G__8280;
continue;
}
} else
{return ret__8272;
}
break;
}
};
var G__8276 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8276__delegate.call(this, coll, k, v, kvs);
};
G__8276.cljs$lang$maxFixedArity = 3;
G__8276.cljs$lang$applyTo = (function (arglist__8281){
var coll = cljs.core.first(arglist__8281);
var k = cljs.core.first(cljs.core.next(arglist__8281));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8281)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8281)));
return G__8276__delegate.call(this, coll, k, v, kvs);
});
return G__8276;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8273.call(this,coll,k,v);
default:
return assoc__8274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8274.cljs$lang$applyTo;
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
var dissoc__8283 = (function (coll){
return coll;
});
var dissoc__8284 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8285 = (function() { 
var G__8287__delegate = function (coll,k,ks){
while(true){
var ret__8282 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8288 = ret__8282;
var G__8289 = cljs.core.first.call(null,ks);
var G__8290 = cljs.core.next.call(null,ks);
coll = G__8288;
k = G__8289;
ks = G__8290;
continue;
}
} else
{return ret__8282;
}
break;
}
};
var G__8287 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8287__delegate.call(this, coll, k, ks);
};
G__8287.cljs$lang$maxFixedArity = 2;
G__8287.cljs$lang$applyTo = (function (arglist__8291){
var coll = cljs.core.first(arglist__8291);
var k = cljs.core.first(cljs.core.next(arglist__8291));
var ks = cljs.core.rest(cljs.core.next(arglist__8291));
return G__8287__delegate.call(this, coll, k, ks);
});
return G__8287;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8283.call(this,coll);
case  2 :
return dissoc__8284.call(this,coll,k);
default:
return dissoc__8285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8285.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____8292 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8293 = x__3028__auto____8292;

if(cljs.core.truth_(and__3546__auto____8293))
{var and__3546__auto____8294 = x__3028__auto____8292.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8294))
{return cljs.core.not.call(null,x__3028__auto____8292.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8294;
}
} else
{return and__3546__auto____8293;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____8292);
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
var disj__8296 = (function (coll){
return coll;
});
var disj__8297 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8298 = (function() { 
var G__8300__delegate = function (coll,k,ks){
while(true){
var ret__8295 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8301 = ret__8295;
var G__8302 = cljs.core.first.call(null,ks);
var G__8303 = cljs.core.next.call(null,ks);
coll = G__8301;
k = G__8302;
ks = G__8303;
continue;
}
} else
{return ret__8295;
}
break;
}
};
var G__8300 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8300__delegate.call(this, coll, k, ks);
};
G__8300.cljs$lang$maxFixedArity = 2;
G__8300.cljs$lang$applyTo = (function (arglist__8304){
var coll = cljs.core.first(arglist__8304);
var k = cljs.core.first(cljs.core.next(arglist__8304));
var ks = cljs.core.rest(cljs.core.next(arglist__8304));
return G__8300__delegate.call(this, coll, k, ks);
});
return G__8300;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8296.call(this,coll);
case  2 :
return disj__8297.call(this,coll,k);
default:
return disj__8298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8298.cljs$lang$applyTo;
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
{var x__3028__auto____8305 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8306 = x__3028__auto____8305;

if(cljs.core.truth_(and__3546__auto____8306))
{var and__3546__auto____8307 = x__3028__auto____8305.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8307))
{return cljs.core.not.call(null,x__3028__auto____8305.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8307;
}
} else
{return and__3546__auto____8306;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____8305);
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
{var x__3028__auto____8308 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8309 = x__3028__auto____8308;

if(cljs.core.truth_(and__3546__auto____8309))
{var and__3546__auto____8310 = x__3028__auto____8308.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8310))
{return cljs.core.not.call(null,x__3028__auto____8308.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8310;
}
} else
{return and__3546__auto____8309;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____8308);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____8311 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8312 = x__3028__auto____8311;

if(cljs.core.truth_(and__3546__auto____8312))
{var and__3546__auto____8313 = x__3028__auto____8311.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8313))
{return cljs.core.not.call(null,x__3028__auto____8311.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8313;
}
} else
{return and__3546__auto____8312;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____8311);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____8314 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8315 = x__3028__auto____8314;

if(cljs.core.truth_(and__3546__auto____8315))
{var and__3546__auto____8316 = x__3028__auto____8314.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8316))
{return cljs.core.not.call(null,x__3028__auto____8314.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8316;
}
} else
{return and__3546__auto____8315;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____8314);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____8317 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8318 = x__3028__auto____8317;

if(cljs.core.truth_(and__3546__auto____8318))
{var and__3546__auto____8319 = x__3028__auto____8317.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8319))
{return cljs.core.not.call(null,x__3028__auto____8317.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8319;
}
} else
{return and__3546__auto____8318;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____8317);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____8320 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8321 = x__3028__auto____8320;

if(cljs.core.truth_(and__3546__auto____8321))
{var and__3546__auto____8322 = x__3028__auto____8320.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8322))
{return cljs.core.not.call(null,x__3028__auto____8320.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8322;
}
} else
{return and__3546__auto____8321;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____8320);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____8323 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8324 = x__3028__auto____8323;

if(cljs.core.truth_(and__3546__auto____8324))
{var and__3546__auto____8325 = x__3028__auto____8323.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8325))
{return cljs.core.not.call(null,x__3028__auto____8323.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8325;
}
} else
{return and__3546__auto____8324;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____8323);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8326 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8326.push(key);
}));
return keys__8326;
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
{var x__3028__auto____8327 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8328 = x__3028__auto____8327;

if(cljs.core.truth_(and__3546__auto____8328))
{var and__3546__auto____8329 = x__3028__auto____8327.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8329))
{return cljs.core.not.call(null,x__3028__auto____8327.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8329;
}
} else
{return and__3546__auto____8328;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____8327);
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
var and__3546__auto____8330 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8330))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8331 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____8331))
{return or__3548__auto____8331;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____8330;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8332 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8332))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____8332;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8333 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8333))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____8333;
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
var and__3546__auto____8334 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8334))
{return (n == n.toFixed());
} else
{return and__3546__auto____8334;
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
if(cljs.core.truth_((function (){var and__3546__auto____8335 = coll;

if(cljs.core.truth_(and__3546__auto____8335))
{var and__3546__auto____8336 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8336))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8336;
}
} else
{return and__3546__auto____8335;
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
var distinct_QMARK___8341 = (function (x){
return true;
});
var distinct_QMARK___8342 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8343 = (function() { 
var G__8345__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8337 = cljs.core.set([y,x]);
var xs__8338 = more;

while(true){
var x__8339 = cljs.core.first.call(null,xs__8338);
var etc__8340 = cljs.core.next.call(null,xs__8338);

if(cljs.core.truth_(xs__8338))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8337,x__8339)))
{return false;
} else
{{
var G__8346 = cljs.core.conj.call(null,s__8337,x__8339);
var G__8347 = etc__8340;
s__8337 = G__8346;
xs__8338 = G__8347;
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
var G__8345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8345__delegate.call(this, x, y, more);
};
G__8345.cljs$lang$maxFixedArity = 2;
G__8345.cljs$lang$applyTo = (function (arglist__8348){
var x = cljs.core.first(arglist__8348);
var y = cljs.core.first(cljs.core.next(arglist__8348));
var more = cljs.core.rest(cljs.core.next(arglist__8348));
return G__8345__delegate.call(this, x, y, more);
});
return G__8345;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8341.call(this,x);
case  2 :
return distinct_QMARK___8342.call(this,x,y);
default:
return distinct_QMARK___8343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8343.cljs$lang$applyTo;
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
var r__8349 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8349)))
{return r__8349;
} else
{if(cljs.core.truth_(r__8349))
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
var sort__8351 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8352 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8350 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8350,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8350);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8351.call(this,comp);
case  2 :
return sort__8352.call(this,comp,coll);
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
var sort_by__8354 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8355 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8354.call(this,keyfn,comp);
case  3 :
return sort_by__8355.call(this,keyfn,comp,coll);
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
var reduce__8357 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8358 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8357.call(this,f,val);
case  3 :
return reduce__8358.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8364 = (function (f,coll){
var temp__3695__auto____8360 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8360))
{var s__8361 = temp__3695__auto____8360;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8361),cljs.core.next.call(null,s__8361));
} else
{return f.call(null);
}
});
var seq_reduce__8365 = (function (f,val,coll){
var val__8362 = val;
var coll__8363 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8363))
{{
var G__8367 = f.call(null,val__8362,cljs.core.first.call(null,coll__8363));
var G__8368 = cljs.core.next.call(null,coll__8363);
val__8362 = G__8367;
coll__8363 = G__8368;
continue;
}
} else
{return val__8362;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8364.call(this,f,val);
case  3 :
return seq_reduce__8365.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8369 = null;
var G__8369__8370 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8369__8371 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8369 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8369__8370.call(this,coll,f);
case  3 :
return G__8369__8371.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8369;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8373 = (function (){
return 0;
});
var _PLUS___8374 = (function (x){
return x;
});
var _PLUS___8375 = (function (x,y){
return (x + y);
});
var _PLUS___8376 = (function() { 
var G__8378__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8378 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8378__delegate.call(this, x, y, more);
};
G__8378.cljs$lang$maxFixedArity = 2;
G__8378.cljs$lang$applyTo = (function (arglist__8379){
var x = cljs.core.first(arglist__8379);
var y = cljs.core.first(cljs.core.next(arglist__8379));
var more = cljs.core.rest(cljs.core.next(arglist__8379));
return G__8378__delegate.call(this, x, y, more);
});
return G__8378;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8373.call(this);
case  1 :
return _PLUS___8374.call(this,x);
case  2 :
return _PLUS___8375.call(this,x,y);
default:
return _PLUS___8376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8376.cljs$lang$applyTo;
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
var ___8380 = (function (x){
return (- x);
});
var ___8381 = (function (x,y){
return (x - y);
});
var ___8382 = (function() { 
var G__8384__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8384 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8384__delegate.call(this, x, y, more);
};
G__8384.cljs$lang$maxFixedArity = 2;
G__8384.cljs$lang$applyTo = (function (arglist__8385){
var x = cljs.core.first(arglist__8385);
var y = cljs.core.first(cljs.core.next(arglist__8385));
var more = cljs.core.rest(cljs.core.next(arglist__8385));
return G__8384__delegate.call(this, x, y, more);
});
return G__8384;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8380.call(this,x);
case  2 :
return ___8381.call(this,x,y);
default:
return ___8382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8382.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8386 = (function (){
return 1;
});
var _STAR___8387 = (function (x){
return x;
});
var _STAR___8388 = (function (x,y){
return (x * y);
});
var _STAR___8389 = (function() { 
var G__8391__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8391 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8391__delegate.call(this, x, y, more);
};
G__8391.cljs$lang$maxFixedArity = 2;
G__8391.cljs$lang$applyTo = (function (arglist__8392){
var x = cljs.core.first(arglist__8392);
var y = cljs.core.first(cljs.core.next(arglist__8392));
var more = cljs.core.rest(cljs.core.next(arglist__8392));
return G__8391__delegate.call(this, x, y, more);
});
return G__8391;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8386.call(this);
case  1 :
return _STAR___8387.call(this,x);
case  2 :
return _STAR___8388.call(this,x,y);
default:
return _STAR___8389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8389.cljs$lang$applyTo;
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
var _SLASH___8393 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8394 = (function (x,y){
return (x / y);
});
var _SLASH___8395 = (function() { 
var G__8397__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8397__delegate.call(this, x, y, more);
};
G__8397.cljs$lang$maxFixedArity = 2;
G__8397.cljs$lang$applyTo = (function (arglist__8398){
var x = cljs.core.first(arglist__8398);
var y = cljs.core.first(cljs.core.next(arglist__8398));
var more = cljs.core.rest(cljs.core.next(arglist__8398));
return G__8397__delegate.call(this, x, y, more);
});
return G__8397;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8393.call(this,x);
case  2 :
return _SLASH___8394.call(this,x,y);
default:
return _SLASH___8395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8395.cljs$lang$applyTo;
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
var _LT___8399 = (function (x){
return true;
});
var _LT___8400 = (function (x,y){
return (x < y);
});
var _LT___8401 = (function() { 
var G__8403__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8404 = y;
var G__8405 = cljs.core.first.call(null,more);
var G__8406 = cljs.core.next.call(null,more);
x = G__8404;
y = G__8405;
more = G__8406;
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
var G__8403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8403__delegate.call(this, x, y, more);
};
G__8403.cljs$lang$maxFixedArity = 2;
G__8403.cljs$lang$applyTo = (function (arglist__8407){
var x = cljs.core.first(arglist__8407);
var y = cljs.core.first(cljs.core.next(arglist__8407));
var more = cljs.core.rest(cljs.core.next(arglist__8407));
return G__8403__delegate.call(this, x, y, more);
});
return G__8403;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8399.call(this,x);
case  2 :
return _LT___8400.call(this,x,y);
default:
return _LT___8401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8401.cljs$lang$applyTo;
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
var _LT__EQ___8408 = (function (x){
return true;
});
var _LT__EQ___8409 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8410 = (function() { 
var G__8412__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8413 = y;
var G__8414 = cljs.core.first.call(null,more);
var G__8415 = cljs.core.next.call(null,more);
x = G__8413;
y = G__8414;
more = G__8415;
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
var G__8412 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8412__delegate.call(this, x, y, more);
};
G__8412.cljs$lang$maxFixedArity = 2;
G__8412.cljs$lang$applyTo = (function (arglist__8416){
var x = cljs.core.first(arglist__8416);
var y = cljs.core.first(cljs.core.next(arglist__8416));
var more = cljs.core.rest(cljs.core.next(arglist__8416));
return G__8412__delegate.call(this, x, y, more);
});
return G__8412;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8408.call(this,x);
case  2 :
return _LT__EQ___8409.call(this,x,y);
default:
return _LT__EQ___8410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8410.cljs$lang$applyTo;
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
var _GT___8417 = (function (x){
return true;
});
var _GT___8418 = (function (x,y){
return (x > y);
});
var _GT___8419 = (function() { 
var G__8421__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8422 = y;
var G__8423 = cljs.core.first.call(null,more);
var G__8424 = cljs.core.next.call(null,more);
x = G__8422;
y = G__8423;
more = G__8424;
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
var G__8421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8421__delegate.call(this, x, y, more);
};
G__8421.cljs$lang$maxFixedArity = 2;
G__8421.cljs$lang$applyTo = (function (arglist__8425){
var x = cljs.core.first(arglist__8425);
var y = cljs.core.first(cljs.core.next(arglist__8425));
var more = cljs.core.rest(cljs.core.next(arglist__8425));
return G__8421__delegate.call(this, x, y, more);
});
return G__8421;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8417.call(this,x);
case  2 :
return _GT___8418.call(this,x,y);
default:
return _GT___8419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8419.cljs$lang$applyTo;
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
var _GT__EQ___8426 = (function (x){
return true;
});
var _GT__EQ___8427 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8428 = (function() { 
var G__8430__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8431 = y;
var G__8432 = cljs.core.first.call(null,more);
var G__8433 = cljs.core.next.call(null,more);
x = G__8431;
y = G__8432;
more = G__8433;
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
var G__8430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8430__delegate.call(this, x, y, more);
};
G__8430.cljs$lang$maxFixedArity = 2;
G__8430.cljs$lang$applyTo = (function (arglist__8434){
var x = cljs.core.first(arglist__8434);
var y = cljs.core.first(cljs.core.next(arglist__8434));
var more = cljs.core.rest(cljs.core.next(arglist__8434));
return G__8430__delegate.call(this, x, y, more);
});
return G__8430;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8426.call(this,x);
case  2 :
return _GT__EQ___8427.call(this,x,y);
default:
return _GT__EQ___8428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8428.cljs$lang$applyTo;
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
var max__8435 = (function (x){
return x;
});
var max__8436 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8437 = (function() { 
var G__8439__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8439 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8439__delegate.call(this, x, y, more);
};
G__8439.cljs$lang$maxFixedArity = 2;
G__8439.cljs$lang$applyTo = (function (arglist__8440){
var x = cljs.core.first(arglist__8440);
var y = cljs.core.first(cljs.core.next(arglist__8440));
var more = cljs.core.rest(cljs.core.next(arglist__8440));
return G__8439__delegate.call(this, x, y, more);
});
return G__8439;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8435.call(this,x);
case  2 :
return max__8436.call(this,x,y);
default:
return max__8437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8437.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8441 = (function (x){
return x;
});
var min__8442 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8443 = (function() { 
var G__8445__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8445 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8445__delegate.call(this, x, y, more);
};
G__8445.cljs$lang$maxFixedArity = 2;
G__8445.cljs$lang$applyTo = (function (arglist__8446){
var x = cljs.core.first(arglist__8446);
var y = cljs.core.first(cljs.core.next(arglist__8446));
var more = cljs.core.rest(cljs.core.next(arglist__8446));
return G__8445__delegate.call(this, x, y, more);
});
return G__8445;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8441.call(this,x);
case  2 :
return min__8442.call(this,x,y);
default:
return min__8443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8443.cljs$lang$applyTo;
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
var rem__8447 = (n % d);

return cljs.core.fix.call(null,((n - rem__8447) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8448 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8448));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8449 = (function (){
return Math.random.call(null);
});
var rand__8450 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8449.call(this);
case  1 :
return rand__8450.call(this,n);
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
var _EQ__EQ___8452 = (function (x){
return true;
});
var _EQ__EQ___8453 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8454 = (function() { 
var G__8456__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8457 = y;
var G__8458 = cljs.core.first.call(null,more);
var G__8459 = cljs.core.next.call(null,more);
x = G__8457;
y = G__8458;
more = G__8459;
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
var G__8456 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8456__delegate.call(this, x, y, more);
};
G__8456.cljs$lang$maxFixedArity = 2;
G__8456.cljs$lang$applyTo = (function (arglist__8460){
var x = cljs.core.first(arglist__8460);
var y = cljs.core.first(cljs.core.next(arglist__8460));
var more = cljs.core.rest(cljs.core.next(arglist__8460));
return G__8456__delegate.call(this, x, y, more);
});
return G__8456;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8452.call(this,x);
case  2 :
return _EQ__EQ___8453.call(this,x,y);
default:
return _EQ__EQ___8454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8454.cljs$lang$applyTo;
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
var n__8461 = n;
var xs__8462 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8463 = xs__8462;

if(cljs.core.truth_(and__3546__auto____8463))
{return (n__8461 > 0);
} else
{return and__3546__auto____8463;
}
})()))
{{
var G__8464 = (n__8461 - 1);
var G__8465 = cljs.core.next.call(null,xs__8462);
n__8461 = G__8464;
xs__8462 = G__8465;
continue;
}
} else
{return xs__8462;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8470 = null;
var G__8470__8471 = (function (coll,n){
var temp__3695__auto____8466 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8466))
{var xs__8467 = temp__3695__auto____8466;

return cljs.core.first.call(null,xs__8467);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8470__8472 = (function (coll,n,not_found){
var temp__3695__auto____8468 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8468))
{var xs__8469 = temp__3695__auto____8468;

return cljs.core.first.call(null,xs__8469);
} else
{return not_found;
}
});
G__8470 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8470__8471.call(this,coll,n);
case  3 :
return G__8470__8472.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8470;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8474 = (function (){
return "";
});
var str_STAR___8475 = (function (x){
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
var str_STAR___8476 = (function() { 
var G__8478__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8479 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8480 = cljs.core.next.call(null,more);
sb = G__8479;
more = G__8480;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8478 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8478__delegate.call(this, x, ys);
};
G__8478.cljs$lang$maxFixedArity = 1;
G__8478.cljs$lang$applyTo = (function (arglist__8481){
var x = cljs.core.first(arglist__8481);
var ys = cljs.core.rest(arglist__8481);
return G__8478__delegate.call(this, x, ys);
});
return G__8478;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8474.call(this);
case  1 :
return str_STAR___8475.call(this,x);
default:
return str_STAR___8476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8476.cljs$lang$applyTo;
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
var str__8482 = (function (){
return "";
});
var str__8483 = (function (x){
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
var str__8484 = (function() { 
var G__8486__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8487 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8488 = cljs.core.next.call(null,more);
sb = G__8487;
more = G__8488;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8486 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8486__delegate.call(this, x, ys);
};
G__8486.cljs$lang$maxFixedArity = 1;
G__8486.cljs$lang$applyTo = (function (arglist__8489){
var x = cljs.core.first(arglist__8489);
var ys = cljs.core.rest(arglist__8489);
return G__8486__delegate.call(this, x, ys);
});
return G__8486;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8482.call(this);
case  1 :
return str__8483.call(this,x);
default:
return str__8484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8484.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8490 = (function (s,start){
return s.substring(start);
});
var subs__8491 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8490.call(this,s,start);
case  3 :
return subs__8491.call(this,s,start,end);
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
var symbol__8493 = (function (name){
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
var symbol__8494 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8493.call(this,ns);
case  2 :
return symbol__8494.call(this,ns,name);
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
var keyword__8496 = (function (name){
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
var keyword__8497 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8496.call(this,ns);
case  2 :
return keyword__8497.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8499 = cljs.core.seq.call(null,x);
var ys__8500 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8499 === null)))
{return (ys__8500 === null);
} else
{if(cljs.core.truth_((ys__8500 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8499),cljs.core.first.call(null,ys__8500))))
{{
var G__8501 = cljs.core.next.call(null,xs__8499);
var G__8502 = cljs.core.next.call(null,ys__8500);
xs__8499 = G__8501;
ys__8500 = G__8502;
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
return cljs.core.reduce.call(null,(function (p1__8503_SHARP_,p2__8504_SHARP_){
return cljs.core.hash_combine.call(null,p1__8503_SHARP_,cljs.core.hash.call(null,p2__8504_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8505__8506 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8505__8506))
{var G__8508__8510 = cljs.core.first.call(null,G__8505__8506);
var vec__8509__8511 = G__8508__8510;
var key_name__8512 = cljs.core.nth.call(null,vec__8509__8511,0,null);
var f__8513 = cljs.core.nth.call(null,vec__8509__8511,1,null);
var G__8505__8514 = G__8505__8506;

var G__8508__8515 = G__8508__8510;
var G__8505__8516 = G__8505__8514;

while(true){
var vec__8517__8518 = G__8508__8515;
var key_name__8519 = cljs.core.nth.call(null,vec__8517__8518,0,null);
var f__8520 = cljs.core.nth.call(null,vec__8517__8518,1,null);
var G__8505__8521 = G__8505__8516;

var str_name__8522 = cljs.core.name.call(null,key_name__8519);

obj[str_name__8522] = f__8520;
var temp__3698__auto____8523 = cljs.core.next.call(null,G__8505__8521);

if(cljs.core.truth_(temp__3698__auto____8523))
{var G__8505__8524 = temp__3698__auto____8523;

{
var G__8525 = cljs.core.first.call(null,G__8505__8524);
var G__8526 = G__8505__8524;
G__8508__8515 = G__8525;
G__8505__8516 = G__8526;
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
var this__8527 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8528 = this;
return (new cljs.core.List(this__8528.meta,o,coll,(this__8528.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8529 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8530 = this;
return this__8530.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8531 = this;
return this__8531.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8532 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8533 = this;
return this__8533.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8534 = this;
return this__8534.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8535 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8536 = this;
return (new cljs.core.List(meta,this__8536.first,this__8536.rest,this__8536.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8537 = this;
return this__8537.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8538 = this;
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
var this__8539 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8540 = this;
return (new cljs.core.List(this__8540.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8541 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8542 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8543 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8544 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8545 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8546 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8547 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8548 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8549 = this;
return this__8549.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8550 = this;
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
list.cljs$lang$applyTo = (function (arglist__8551){
var items = cljs.core.seq( arglist__8551 );;
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
var this__8552 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8555 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8555.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8556 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8557 = this;
return this__8557.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8558 = this;
if(cljs.core.truth_((this__8558.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8558.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8559 = this;
return this__8559.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8560 = this;
return (new cljs.core.Cons(meta,this__8560.first,this__8560.rest));
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
var G__8561 = null;
var G__8561__8562 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8561__8563 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8561 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8561__8562.call(this,string,f);
case  3 :
return G__8561__8563.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8561;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8565 = null;
var G__8565__8566 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8565__8567 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8565 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8565__8566.call(this,string,k);
case  3 :
return G__8565__8567.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8565;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8569 = null;
var G__8569__8570 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8569__8571 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8569 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8569__8570.call(this,string,n);
case  3 :
return G__8569__8571.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8569;
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
var G__8579 = null;
var G__8579__8580 = (function (tsym8573,coll){
var tsym8573__8575 = this;

var this$__8576 = tsym8573__8575;

return cljs.core.get.call(null,coll,this$__8576.toString());
});
var G__8579__8581 = (function (tsym8574,coll,not_found){
var tsym8574__8577 = this;

var this$__8578 = tsym8574__8577;

return cljs.core.get.call(null,coll,this$__8578.toString(),not_found);
});
G__8579 = function(tsym8574,coll,not_found){
switch(arguments.length){
case  2 :
return G__8579__8580.call(this,tsym8574,coll);
case  3 :
return G__8579__8581.call(this,tsym8574,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8579;
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
var x__8583 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8583;
} else
{lazy_seq.x = x__8583.call(null);
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
var this__8584 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8585 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8586 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8587 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8587.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8588 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8589 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8590 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8591 = this;
return this__8591.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8592 = this;
return (new cljs.core.LazySeq(meta,this__8592.realized,this__8592.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8593 = [];

var s__8594 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8594)))
{ary__8593.push(cljs.core.first.call(null,s__8594));
{
var G__8595 = cljs.core.next.call(null,s__8594);
s__8594 = G__8595;
continue;
}
} else
{return ary__8593;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8596 = s;
var i__8597 = n;
var sum__8598 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8599 = (i__8597 > 0);

if(cljs.core.truth_(and__3546__auto____8599))
{return cljs.core.seq.call(null,s__8596);
} else
{return and__3546__auto____8599;
}
})()))
{{
var G__8600 = cljs.core.next.call(null,s__8596);
var G__8601 = (i__8597 - 1);
var G__8602 = (sum__8598 + 1);
s__8596 = G__8600;
i__8597 = G__8601;
sum__8598 = G__8602;
continue;
}
} else
{return sum__8598;
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
var concat__8606 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8607 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8608 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8603 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8603))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8603),concat.call(null,cljs.core.rest.call(null,s__8603),y));
} else
{return y;
}
})));
});
var concat__8609 = (function() { 
var G__8611__delegate = function (x,y,zs){
var cat__8605 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8604 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8604))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8604),cat.call(null,cljs.core.rest.call(null,xys__8604),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8605.call(null,concat.call(null,x,y),zs);
};
var G__8611 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8611__delegate.call(this, x, y, zs);
};
G__8611.cljs$lang$maxFixedArity = 2;
G__8611.cljs$lang$applyTo = (function (arglist__8612){
var x = cljs.core.first(arglist__8612);
var y = cljs.core.first(cljs.core.next(arglist__8612));
var zs = cljs.core.rest(cljs.core.next(arglist__8612));
return G__8611__delegate.call(this, x, y, zs);
});
return G__8611;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8606.call(this);
case  1 :
return concat__8607.call(this,x);
case  2 :
return concat__8608.call(this,x,y);
default:
return concat__8609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8609.cljs$lang$applyTo;
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
var list_STAR___8613 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8614 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8615 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8616 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8617 = (function() { 
var G__8619__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8619 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8619__delegate.call(this, a, b, c, d, more);
};
G__8619.cljs$lang$maxFixedArity = 4;
G__8619.cljs$lang$applyTo = (function (arglist__8620){
var a = cljs.core.first(arglist__8620);
var b = cljs.core.first(cljs.core.next(arglist__8620));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8620)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8620))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8620))));
return G__8619__delegate.call(this, a, b, c, d, more);
});
return G__8619;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8613.call(this,a);
case  2 :
return list_STAR___8614.call(this,a,b);
case  3 :
return list_STAR___8615.call(this,a,b,c);
case  4 :
return list_STAR___8616.call(this,a,b,c,d);
default:
return list_STAR___8617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8617.cljs$lang$applyTo;
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
var apply__8630 = (function (f,args){
var fixed_arity__8621 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8621 + 1)) <= fixed_arity__8621)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8631 = (function (f,x,args){
var arglist__8622 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8623 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8622,fixed_arity__8623) <= fixed_arity__8623)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8622));
} else
{return f.cljs$lang$applyTo(arglist__8622);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8622));
}
});
var apply__8632 = (function (f,x,y,args){
var arglist__8624 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8625 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8624,fixed_arity__8625) <= fixed_arity__8625)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8624));
} else
{return f.cljs$lang$applyTo(arglist__8624);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8624));
}
});
var apply__8633 = (function (f,x,y,z,args){
var arglist__8626 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8627 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8626,fixed_arity__8627) <= fixed_arity__8627)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8626));
} else
{return f.cljs$lang$applyTo(arglist__8626);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8626));
}
});
var apply__8634 = (function() { 
var G__8636__delegate = function (f,a,b,c,d,args){
var arglist__8628 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8629 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8628,fixed_arity__8629) <= fixed_arity__8629)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8628));
} else
{return f.cljs$lang$applyTo(arglist__8628);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8628));
}
};
var G__8636 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8636__delegate.call(this, f, a, b, c, d, args);
};
G__8636.cljs$lang$maxFixedArity = 5;
G__8636.cljs$lang$applyTo = (function (arglist__8637){
var f = cljs.core.first(arglist__8637);
var a = cljs.core.first(cljs.core.next(arglist__8637));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8637)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8637))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8637)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8637)))));
return G__8636__delegate.call(this, f, a, b, c, d, args);
});
return G__8636;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8630.call(this,f,a);
case  3 :
return apply__8631.call(this,f,a,b);
case  4 :
return apply__8632.call(this,f,a,b,c);
case  5 :
return apply__8633.call(this,f,a,b,c,d);
default:
return apply__8634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8634.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8638){
var obj = cljs.core.first(arglist__8638);
var f = cljs.core.first(cljs.core.next(arglist__8638));
var args = cljs.core.rest(cljs.core.next(arglist__8638));
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
var not_EQ___8639 = (function (x){
return false;
});
var not_EQ___8640 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8641 = (function() { 
var G__8643__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8643 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8643__delegate.call(this, x, y, more);
};
G__8643.cljs$lang$maxFixedArity = 2;
G__8643.cljs$lang$applyTo = (function (arglist__8644){
var x = cljs.core.first(arglist__8644);
var y = cljs.core.first(cljs.core.next(arglist__8644));
var more = cljs.core.rest(cljs.core.next(arglist__8644));
return G__8643__delegate.call(this, x, y, more);
});
return G__8643;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8639.call(this,x);
case  2 :
return not_EQ___8640.call(this,x,y);
default:
return not_EQ___8641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8641.cljs$lang$applyTo;
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
var G__8645 = pred;
var G__8646 = cljs.core.next.call(null,coll);
pred = G__8645;
coll = G__8646;
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
{var or__3548__auto____8647 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8647))
{return or__3548__auto____8647;
} else
{{
var G__8648 = pred;
var G__8649 = cljs.core.next.call(null,coll);
pred = G__8648;
coll = G__8649;
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
var G__8650 = null;
var G__8650__8651 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8650__8652 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8650__8653 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8650__8654 = (function() { 
var G__8656__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8656 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8656__delegate.call(this, x, y, zs);
};
G__8656.cljs$lang$maxFixedArity = 2;
G__8656.cljs$lang$applyTo = (function (arglist__8657){
var x = cljs.core.first(arglist__8657);
var y = cljs.core.first(cljs.core.next(arglist__8657));
var zs = cljs.core.rest(cljs.core.next(arglist__8657));
return G__8656__delegate.call(this, x, y, zs);
});
return G__8656;
})()
;
G__8650 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8650__8651.call(this);
case  1 :
return G__8650__8652.call(this,x);
case  2 :
return G__8650__8653.call(this,x,y);
default:
return G__8650__8654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8650.cljs$lang$maxFixedArity = 2;
G__8650.cljs$lang$applyTo = G__8650__8654.cljs$lang$applyTo;
return G__8650;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8658__delegate = function (args){
return x;
};
var G__8658 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8658__delegate.call(this, args);
};
G__8658.cljs$lang$maxFixedArity = 0;
G__8658.cljs$lang$applyTo = (function (arglist__8659){
var args = cljs.core.seq( arglist__8659 );;
return G__8658__delegate.call(this, args);
});
return G__8658;
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
var comp__8663 = (function (){
return cljs.core.identity;
});
var comp__8664 = (function (f){
return f;
});
var comp__8665 = (function (f,g){
return (function() {
var G__8669 = null;
var G__8669__8670 = (function (){
return f.call(null,g.call(null));
});
var G__8669__8671 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8669__8672 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8669__8673 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8669__8674 = (function() { 
var G__8676__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8676 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8676__delegate.call(this, x, y, z, args);
};
G__8676.cljs$lang$maxFixedArity = 3;
G__8676.cljs$lang$applyTo = (function (arglist__8677){
var x = cljs.core.first(arglist__8677);
var y = cljs.core.first(cljs.core.next(arglist__8677));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8677)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8677)));
return G__8676__delegate.call(this, x, y, z, args);
});
return G__8676;
})()
;
G__8669 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8669__8670.call(this);
case  1 :
return G__8669__8671.call(this,x);
case  2 :
return G__8669__8672.call(this,x,y);
case  3 :
return G__8669__8673.call(this,x,y,z);
default:
return G__8669__8674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8669.cljs$lang$maxFixedArity = 3;
G__8669.cljs$lang$applyTo = G__8669__8674.cljs$lang$applyTo;
return G__8669;
})()
});
var comp__8666 = (function (f,g,h){
return (function() {
var G__8678 = null;
var G__8678__8679 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8678__8680 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8678__8681 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8678__8682 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8678__8683 = (function() { 
var G__8685__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8685__delegate.call(this, x, y, z, args);
};
G__8685.cljs$lang$maxFixedArity = 3;
G__8685.cljs$lang$applyTo = (function (arglist__8686){
var x = cljs.core.first(arglist__8686);
var y = cljs.core.first(cljs.core.next(arglist__8686));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8686)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8686)));
return G__8685__delegate.call(this, x, y, z, args);
});
return G__8685;
})()
;
G__8678 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8678__8679.call(this);
case  1 :
return G__8678__8680.call(this,x);
case  2 :
return G__8678__8681.call(this,x,y);
case  3 :
return G__8678__8682.call(this,x,y,z);
default:
return G__8678__8683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8678.cljs$lang$maxFixedArity = 3;
G__8678.cljs$lang$applyTo = G__8678__8683.cljs$lang$applyTo;
return G__8678;
})()
});
var comp__8667 = (function() { 
var G__8687__delegate = function (f1,f2,f3,fs){
var fs__8660 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8688__delegate = function (args){
var ret__8661 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8660),args);
var fs__8662 = cljs.core.next.call(null,fs__8660);

while(true){
if(cljs.core.truth_(fs__8662))
{{
var G__8689 = cljs.core.first.call(null,fs__8662).call(null,ret__8661);
var G__8690 = cljs.core.next.call(null,fs__8662);
ret__8661 = G__8689;
fs__8662 = G__8690;
continue;
}
} else
{return ret__8661;
}
break;
}
};
var G__8688 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8688__delegate.call(this, args);
};
G__8688.cljs$lang$maxFixedArity = 0;
G__8688.cljs$lang$applyTo = (function (arglist__8691){
var args = cljs.core.seq( arglist__8691 );;
return G__8688__delegate.call(this, args);
});
return G__8688;
})()
;
};
var G__8687 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8687__delegate.call(this, f1, f2, f3, fs);
};
G__8687.cljs$lang$maxFixedArity = 3;
G__8687.cljs$lang$applyTo = (function (arglist__8692){
var f1 = cljs.core.first(arglist__8692);
var f2 = cljs.core.first(cljs.core.next(arglist__8692));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8692)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8692)));
return G__8687__delegate.call(this, f1, f2, f3, fs);
});
return G__8687;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8663.call(this);
case  1 :
return comp__8664.call(this,f1);
case  2 :
return comp__8665.call(this,f1,f2);
case  3 :
return comp__8666.call(this,f1,f2,f3);
default:
return comp__8667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8667.cljs$lang$applyTo;
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
var partial__8693 = (function (f,arg1){
return (function() { 
var G__8698__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8698 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8698__delegate.call(this, args);
};
G__8698.cljs$lang$maxFixedArity = 0;
G__8698.cljs$lang$applyTo = (function (arglist__8699){
var args = cljs.core.seq( arglist__8699 );;
return G__8698__delegate.call(this, args);
});
return G__8698;
})()
;
});
var partial__8694 = (function (f,arg1,arg2){
return (function() { 
var G__8700__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8700 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8700__delegate.call(this, args);
};
G__8700.cljs$lang$maxFixedArity = 0;
G__8700.cljs$lang$applyTo = (function (arglist__8701){
var args = cljs.core.seq( arglist__8701 );;
return G__8700__delegate.call(this, args);
});
return G__8700;
})()
;
});
var partial__8695 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8702__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8702 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8702__delegate.call(this, args);
};
G__8702.cljs$lang$maxFixedArity = 0;
G__8702.cljs$lang$applyTo = (function (arglist__8703){
var args = cljs.core.seq( arglist__8703 );;
return G__8702__delegate.call(this, args);
});
return G__8702;
})()
;
});
var partial__8696 = (function() { 
var G__8704__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8705__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8705 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8705__delegate.call(this, args);
};
G__8705.cljs$lang$maxFixedArity = 0;
G__8705.cljs$lang$applyTo = (function (arglist__8706){
var args = cljs.core.seq( arglist__8706 );;
return G__8705__delegate.call(this, args);
});
return G__8705;
})()
;
};
var G__8704 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8704__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8704.cljs$lang$maxFixedArity = 4;
G__8704.cljs$lang$applyTo = (function (arglist__8707){
var f = cljs.core.first(arglist__8707);
var arg1 = cljs.core.first(cljs.core.next(arglist__8707));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8707)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8707))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8707))));
return G__8704__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8704;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8693.call(this,f,arg1);
case  3 :
return partial__8694.call(this,f,arg1,arg2);
case  4 :
return partial__8695.call(this,f,arg1,arg2,arg3);
default:
return partial__8696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8696.cljs$lang$applyTo;
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
var fnil__8708 = (function (f,x){
return (function() {
var G__8712 = null;
var G__8712__8713 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8712__8714 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8712__8715 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8712__8716 = (function() { 
var G__8718__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8718 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8718__delegate.call(this, a, b, c, ds);
};
G__8718.cljs$lang$maxFixedArity = 3;
G__8718.cljs$lang$applyTo = (function (arglist__8719){
var a = cljs.core.first(arglist__8719);
var b = cljs.core.first(cljs.core.next(arglist__8719));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8719)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8719)));
return G__8718__delegate.call(this, a, b, c, ds);
});
return G__8718;
})()
;
G__8712 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8712__8713.call(this,a);
case  2 :
return G__8712__8714.call(this,a,b);
case  3 :
return G__8712__8715.call(this,a,b,c);
default:
return G__8712__8716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8712.cljs$lang$maxFixedArity = 3;
G__8712.cljs$lang$applyTo = G__8712__8716.cljs$lang$applyTo;
return G__8712;
})()
});
var fnil__8709 = (function (f,x,y){
return (function() {
var G__8720 = null;
var G__8720__8721 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8720__8722 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8720__8723 = (function() { 
var G__8725__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8725 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8725__delegate.call(this, a, b, c, ds);
};
G__8725.cljs$lang$maxFixedArity = 3;
G__8725.cljs$lang$applyTo = (function (arglist__8726){
var a = cljs.core.first(arglist__8726);
var b = cljs.core.first(cljs.core.next(arglist__8726));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8726)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8726)));
return G__8725__delegate.call(this, a, b, c, ds);
});
return G__8725;
})()
;
G__8720 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8720__8721.call(this,a,b);
case  3 :
return G__8720__8722.call(this,a,b,c);
default:
return G__8720__8723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8720.cljs$lang$maxFixedArity = 3;
G__8720.cljs$lang$applyTo = G__8720__8723.cljs$lang$applyTo;
return G__8720;
})()
});
var fnil__8710 = (function (f,x,y,z){
return (function() {
var G__8727 = null;
var G__8727__8728 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8727__8729 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8727__8730 = (function() { 
var G__8732__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8732 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8732__delegate.call(this, a, b, c, ds);
};
G__8732.cljs$lang$maxFixedArity = 3;
G__8732.cljs$lang$applyTo = (function (arglist__8733){
var a = cljs.core.first(arglist__8733);
var b = cljs.core.first(cljs.core.next(arglist__8733));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8733)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8733)));
return G__8732__delegate.call(this, a, b, c, ds);
});
return G__8732;
})()
;
G__8727 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8727__8728.call(this,a,b);
case  3 :
return G__8727__8729.call(this,a,b,c);
default:
return G__8727__8730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8727.cljs$lang$maxFixedArity = 3;
G__8727.cljs$lang$applyTo = G__8727__8730.cljs$lang$applyTo;
return G__8727;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8708.call(this,f,x);
case  3 :
return fnil__8709.call(this,f,x,y);
case  4 :
return fnil__8710.call(this,f,x,y,z);
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
var mapi__8736 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8734 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8734))
{var s__8735 = temp__3698__auto____8734;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8735)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8735)));
} else
{return null;
}
})));
});

return mapi__8736.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8737))
{var s__8738 = temp__3698__auto____8737;

var x__8739 = f.call(null,cljs.core.first.call(null,s__8738));

if(cljs.core.truth_((x__8739 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8738));
} else
{return cljs.core.cons.call(null,x__8739,keep.call(null,f,cljs.core.rest.call(null,s__8738)));
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
var keepi__8749 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8746))
{var s__8747 = temp__3698__auto____8746;

var x__8748 = f.call(null,idx,cljs.core.first.call(null,s__8747));

if(cljs.core.truth_((x__8748 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8747));
} else
{return cljs.core.cons.call(null,x__8748,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8747)));
}
} else
{return null;
}
})));
});

return keepi__8749.call(null,0,coll);
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
var every_pred__8794 = (function (p){
return (function() {
var ep1 = null;
var ep1__8799 = (function (){
return true;
});
var ep1__8800 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8801 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8756 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8756))
{return p.call(null,y);
} else
{return and__3546__auto____8756;
}
})());
});
var ep1__8802 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8757 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8757))
{var and__3546__auto____8758 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8758))
{return p.call(null,z);
} else
{return and__3546__auto____8758;
}
} else
{return and__3546__auto____8757;
}
})());
});
var ep1__8803 = (function() { 
var G__8805__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8759 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8759))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8759;
}
})());
};
var G__8805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8805__delegate.call(this, x, y, z, args);
};
G__8805.cljs$lang$maxFixedArity = 3;
G__8805.cljs$lang$applyTo = (function (arglist__8806){
var x = cljs.core.first(arglist__8806);
var y = cljs.core.first(cljs.core.next(arglist__8806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8806)));
return G__8805__delegate.call(this, x, y, z, args);
});
return G__8805;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8799.call(this);
case  1 :
return ep1__8800.call(this,x);
case  2 :
return ep1__8801.call(this,x,y);
case  3 :
return ep1__8802.call(this,x,y,z);
default:
return ep1__8803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8803.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8795 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8807 = (function (){
return true;
});
var ep2__8808 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8760 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8760))
{return p2.call(null,x);
} else
{return and__3546__auto____8760;
}
})());
});
var ep2__8809 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8761 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8761))
{var and__3546__auto____8762 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8762))
{var and__3546__auto____8763 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8763))
{return p2.call(null,y);
} else
{return and__3546__auto____8763;
}
} else
{return and__3546__auto____8762;
}
} else
{return and__3546__auto____8761;
}
})());
});
var ep2__8810 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8764 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8764))
{var and__3546__auto____8765 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8765))
{var and__3546__auto____8766 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8766))
{var and__3546__auto____8767 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8767))
{var and__3546__auto____8768 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8768))
{return p2.call(null,z);
} else
{return and__3546__auto____8768;
}
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8766;
}
} else
{return and__3546__auto____8765;
}
} else
{return and__3546__auto____8764;
}
})());
});
var ep2__8811 = (function() { 
var G__8813__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8769 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8769))
{return cljs.core.every_QMARK_.call(null,(function (p1__8740_SHARP_){
var and__3546__auto____8770 = p1.call(null,p1__8740_SHARP_);

if(cljs.core.truth_(and__3546__auto____8770))
{return p2.call(null,p1__8740_SHARP_);
} else
{return and__3546__auto____8770;
}
}),args);
} else
{return and__3546__auto____8769;
}
})());
};
var G__8813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8813__delegate.call(this, x, y, z, args);
};
G__8813.cljs$lang$maxFixedArity = 3;
G__8813.cljs$lang$applyTo = (function (arglist__8814){
var x = cljs.core.first(arglist__8814);
var y = cljs.core.first(cljs.core.next(arglist__8814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8814)));
return G__8813__delegate.call(this, x, y, z, args);
});
return G__8813;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8807.call(this);
case  1 :
return ep2__8808.call(this,x);
case  2 :
return ep2__8809.call(this,x,y);
case  3 :
return ep2__8810.call(this,x,y,z);
default:
return ep2__8811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8811.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8796 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8815 = (function (){
return true;
});
var ep3__8816 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8771 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8771))
{var and__3546__auto____8772 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8772))
{return p3.call(null,x);
} else
{return and__3546__auto____8772;
}
} else
{return and__3546__auto____8771;
}
})());
});
var ep3__8817 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8773 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8773))
{var and__3546__auto____8774 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8774))
{var and__3546__auto____8775 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8775))
{var and__3546__auto____8776 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8776))
{var and__3546__auto____8777 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8777))
{return p3.call(null,y);
} else
{return and__3546__auto____8777;
}
} else
{return and__3546__auto____8776;
}
} else
{return and__3546__auto____8775;
}
} else
{return and__3546__auto____8774;
}
} else
{return and__3546__auto____8773;
}
})());
});
var ep3__8818 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8778 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8778))
{var and__3546__auto____8779 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8779))
{var and__3546__auto____8780 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8780))
{var and__3546__auto____8781 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8781))
{var and__3546__auto____8782 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8782))
{var and__3546__auto____8783 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8783))
{var and__3546__auto____8784 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8784))
{var and__3546__auto____8785 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8785))
{return p3.call(null,z);
} else
{return and__3546__auto____8785;
}
} else
{return and__3546__auto____8784;
}
} else
{return and__3546__auto____8783;
}
} else
{return and__3546__auto____8782;
}
} else
{return and__3546__auto____8781;
}
} else
{return and__3546__auto____8780;
}
} else
{return and__3546__auto____8779;
}
} else
{return and__3546__auto____8778;
}
})());
});
var ep3__8819 = (function() { 
var G__8821__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8786 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8786))
{return cljs.core.every_QMARK_.call(null,(function (p1__8741_SHARP_){
var and__3546__auto____8787 = p1.call(null,p1__8741_SHARP_);

if(cljs.core.truth_(and__3546__auto____8787))
{var and__3546__auto____8788 = p2.call(null,p1__8741_SHARP_);

if(cljs.core.truth_(and__3546__auto____8788))
{return p3.call(null,p1__8741_SHARP_);
} else
{return and__3546__auto____8788;
}
} else
{return and__3546__auto____8787;
}
}),args);
} else
{return and__3546__auto____8786;
}
})());
};
var G__8821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8821__delegate.call(this, x, y, z, args);
};
G__8821.cljs$lang$maxFixedArity = 3;
G__8821.cljs$lang$applyTo = (function (arglist__8822){
var x = cljs.core.first(arglist__8822);
var y = cljs.core.first(cljs.core.next(arglist__8822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8822)));
return G__8821__delegate.call(this, x, y, z, args);
});
return G__8821;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8815.call(this);
case  1 :
return ep3__8816.call(this,x);
case  2 :
return ep3__8817.call(this,x,y);
case  3 :
return ep3__8818.call(this,x,y,z);
default:
return ep3__8819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8819.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8797 = (function() { 
var G__8823__delegate = function (p1,p2,p3,ps){
var ps__8789 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8824 = (function (){
return true;
});
var epn__8825 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8742_SHARP_){
return p1__8742_SHARP_.call(null,x);
}),ps__8789);
});
var epn__8826 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8743_SHARP_){
var and__3546__auto____8790 = p1__8743_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8790))
{return p1__8743_SHARP_.call(null,y);
} else
{return and__3546__auto____8790;
}
}),ps__8789);
});
var epn__8827 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8744_SHARP_){
var and__3546__auto____8791 = p1__8744_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8791))
{var and__3546__auto____8792 = p1__8744_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8792))
{return p1__8744_SHARP_.call(null,z);
} else
{return and__3546__auto____8792;
}
} else
{return and__3546__auto____8791;
}
}),ps__8789);
});
var epn__8828 = (function() { 
var G__8830__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8793 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8793))
{return cljs.core.every_QMARK_.call(null,(function (p1__8745_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8745_SHARP_,args);
}),ps__8789);
} else
{return and__3546__auto____8793;
}
})());
};
var G__8830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8830__delegate.call(this, x, y, z, args);
};
G__8830.cljs$lang$maxFixedArity = 3;
G__8830.cljs$lang$applyTo = (function (arglist__8831){
var x = cljs.core.first(arglist__8831);
var y = cljs.core.first(cljs.core.next(arglist__8831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8831)));
return G__8830__delegate.call(this, x, y, z, args);
});
return G__8830;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8824.call(this);
case  1 :
return epn__8825.call(this,x);
case  2 :
return epn__8826.call(this,x,y);
case  3 :
return epn__8827.call(this,x,y,z);
default:
return epn__8828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8828.cljs$lang$applyTo;
return epn;
})()
};
var G__8823 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8823__delegate.call(this, p1, p2, p3, ps);
};
G__8823.cljs$lang$maxFixedArity = 3;
G__8823.cljs$lang$applyTo = (function (arglist__8832){
var p1 = cljs.core.first(arglist__8832);
var p2 = cljs.core.first(cljs.core.next(arglist__8832));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8832)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8832)));
return G__8823__delegate.call(this, p1, p2, p3, ps);
});
return G__8823;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8794.call(this,p1);
case  2 :
return every_pred__8795.call(this,p1,p2);
case  3 :
return every_pred__8796.call(this,p1,p2,p3);
default:
return every_pred__8797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8797.cljs$lang$applyTo;
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
var some_fn__8872 = (function (p){
return (function() {
var sp1 = null;
var sp1__8877 = (function (){
return null;
});
var sp1__8878 = (function (x){
return p.call(null,x);
});
var sp1__8879 = (function (x,y){
var or__3548__auto____8834 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8834))
{return or__3548__auto____8834;
} else
{return p.call(null,y);
}
});
var sp1__8880 = (function (x,y,z){
var or__3548__auto____8835 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8835))
{return or__3548__auto____8835;
} else
{var or__3548__auto____8836 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8836))
{return or__3548__auto____8836;
} else
{return p.call(null,z);
}
}
});
var sp1__8881 = (function() { 
var G__8883__delegate = function (x,y,z,args){
var or__3548__auto____8837 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8837))
{return or__3548__auto____8837;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8883 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8883__delegate.call(this, x, y, z, args);
};
G__8883.cljs$lang$maxFixedArity = 3;
G__8883.cljs$lang$applyTo = (function (arglist__8884){
var x = cljs.core.first(arglist__8884);
var y = cljs.core.first(cljs.core.next(arglist__8884));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8884)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8884)));
return G__8883__delegate.call(this, x, y, z, args);
});
return G__8883;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8877.call(this);
case  1 :
return sp1__8878.call(this,x);
case  2 :
return sp1__8879.call(this,x,y);
case  3 :
return sp1__8880.call(this,x,y,z);
default:
return sp1__8881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8881.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8873 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8885 = (function (){
return null;
});
var sp2__8886 = (function (x){
var or__3548__auto____8838 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8838))
{return or__3548__auto____8838;
} else
{return p2.call(null,x);
}
});
var sp2__8887 = (function (x,y){
var or__3548__auto____8839 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8839))
{return or__3548__auto____8839;
} else
{var or__3548__auto____8840 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8840))
{return or__3548__auto____8840;
} else
{var or__3548__auto____8841 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8841))
{return or__3548__auto____8841;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8888 = (function (x,y,z){
var or__3548__auto____8842 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8842))
{return or__3548__auto____8842;
} else
{var or__3548__auto____8843 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8843))
{return or__3548__auto____8843;
} else
{var or__3548__auto____8844 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8844))
{return or__3548__auto____8844;
} else
{var or__3548__auto____8845 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8845))
{return or__3548__auto____8845;
} else
{var or__3548__auto____8846 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8846))
{return or__3548__auto____8846;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8889 = (function() { 
var G__8891__delegate = function (x,y,z,args){
var or__3548__auto____8847 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8847))
{return or__3548__auto____8847;
} else
{return cljs.core.some.call(null,(function (p1__8750_SHARP_){
var or__3548__auto____8848 = p1.call(null,p1__8750_SHARP_);

if(cljs.core.truth_(or__3548__auto____8848))
{return or__3548__auto____8848;
} else
{return p2.call(null,p1__8750_SHARP_);
}
}),args);
}
};
var G__8891 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8891__delegate.call(this, x, y, z, args);
};
G__8891.cljs$lang$maxFixedArity = 3;
G__8891.cljs$lang$applyTo = (function (arglist__8892){
var x = cljs.core.first(arglist__8892);
var y = cljs.core.first(cljs.core.next(arglist__8892));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8892)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8892)));
return G__8891__delegate.call(this, x, y, z, args);
});
return G__8891;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8885.call(this);
case  1 :
return sp2__8886.call(this,x);
case  2 :
return sp2__8887.call(this,x,y);
case  3 :
return sp2__8888.call(this,x,y,z);
default:
return sp2__8889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8889.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8874 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8893 = (function (){
return null;
});
var sp3__8894 = (function (x){
var or__3548__auto____8849 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8849))
{return or__3548__auto____8849;
} else
{var or__3548__auto____8850 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8850))
{return or__3548__auto____8850;
} else
{return p3.call(null,x);
}
}
});
var sp3__8895 = (function (x,y){
var or__3548__auto____8851 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8851))
{return or__3548__auto____8851;
} else
{var or__3548__auto____8852 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8852))
{return or__3548__auto____8852;
} else
{var or__3548__auto____8853 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8853))
{return or__3548__auto____8853;
} else
{var or__3548__auto____8854 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8854))
{return or__3548__auto____8854;
} else
{var or__3548__auto____8855 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8855))
{return or__3548__auto____8855;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8896 = (function (x,y,z){
var or__3548__auto____8856 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8856))
{return or__3548__auto____8856;
} else
{var or__3548__auto____8857 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8857))
{return or__3548__auto____8857;
} else
{var or__3548__auto____8858 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8858))
{return or__3548__auto____8858;
} else
{var or__3548__auto____8859 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8859))
{return or__3548__auto____8859;
} else
{var or__3548__auto____8860 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8860))
{return or__3548__auto____8860;
} else
{var or__3548__auto____8861 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8861))
{return or__3548__auto____8861;
} else
{var or__3548__auto____8862 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8862))
{return or__3548__auto____8862;
} else
{var or__3548__auto____8863 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8863))
{return or__3548__auto____8863;
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
var sp3__8897 = (function() { 
var G__8899__delegate = function (x,y,z,args){
var or__3548__auto____8864 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8864))
{return or__3548__auto____8864;
} else
{return cljs.core.some.call(null,(function (p1__8751_SHARP_){
var or__3548__auto____8865 = p1.call(null,p1__8751_SHARP_);

if(cljs.core.truth_(or__3548__auto____8865))
{return or__3548__auto____8865;
} else
{var or__3548__auto____8866 = p2.call(null,p1__8751_SHARP_);

if(cljs.core.truth_(or__3548__auto____8866))
{return or__3548__auto____8866;
} else
{return p3.call(null,p1__8751_SHARP_);
}
}
}),args);
}
};
var G__8899 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8899__delegate.call(this, x, y, z, args);
};
G__8899.cljs$lang$maxFixedArity = 3;
G__8899.cljs$lang$applyTo = (function (arglist__8900){
var x = cljs.core.first(arglist__8900);
var y = cljs.core.first(cljs.core.next(arglist__8900));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8900)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8900)));
return G__8899__delegate.call(this, x, y, z, args);
});
return G__8899;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8893.call(this);
case  1 :
return sp3__8894.call(this,x);
case  2 :
return sp3__8895.call(this,x,y);
case  3 :
return sp3__8896.call(this,x,y,z);
default:
return sp3__8897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8897.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8875 = (function() { 
var G__8901__delegate = function (p1,p2,p3,ps){
var ps__8867 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8902 = (function (){
return null;
});
var spn__8903 = (function (x){
return cljs.core.some.call(null,(function (p1__8752_SHARP_){
return p1__8752_SHARP_.call(null,x);
}),ps__8867);
});
var spn__8904 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8753_SHARP_){
var or__3548__auto____8868 = p1__8753_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8868))
{return or__3548__auto____8868;
} else
{return p1__8753_SHARP_.call(null,y);
}
}),ps__8867);
});
var spn__8905 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8754_SHARP_){
var or__3548__auto____8869 = p1__8754_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8869))
{return or__3548__auto____8869;
} else
{var or__3548__auto____8870 = p1__8754_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8870))
{return or__3548__auto____8870;
} else
{return p1__8754_SHARP_.call(null,z);
}
}
}),ps__8867);
});
var spn__8906 = (function() { 
var G__8908__delegate = function (x,y,z,args){
var or__3548__auto____8871 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8871))
{return or__3548__auto____8871;
} else
{return cljs.core.some.call(null,(function (p1__8755_SHARP_){
return cljs.core.some.call(null,p1__8755_SHARP_,args);
}),ps__8867);
}
};
var G__8908 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8908__delegate.call(this, x, y, z, args);
};
G__8908.cljs$lang$maxFixedArity = 3;
G__8908.cljs$lang$applyTo = (function (arglist__8909){
var x = cljs.core.first(arglist__8909);
var y = cljs.core.first(cljs.core.next(arglist__8909));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8909)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8909)));
return G__8908__delegate.call(this, x, y, z, args);
});
return G__8908;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8902.call(this);
case  1 :
return spn__8903.call(this,x);
case  2 :
return spn__8904.call(this,x,y);
case  3 :
return spn__8905.call(this,x,y,z);
default:
return spn__8906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8906.cljs$lang$applyTo;
return spn;
})()
};
var G__8901 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8901__delegate.call(this, p1, p2, p3, ps);
};
G__8901.cljs$lang$maxFixedArity = 3;
G__8901.cljs$lang$applyTo = (function (arglist__8910){
var p1 = cljs.core.first(arglist__8910);
var p2 = cljs.core.first(cljs.core.next(arglist__8910));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8910)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8910)));
return G__8901__delegate.call(this, p1, p2, p3, ps);
});
return G__8901;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8872.call(this,p1);
case  2 :
return some_fn__8873.call(this,p1,p2);
case  3 :
return some_fn__8874.call(this,p1,p2,p3);
default:
return some_fn__8875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8875.cljs$lang$applyTo;
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
var map__8923 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8911))
{var s__8912 = temp__3698__auto____8911;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8912)),map.call(null,f,cljs.core.rest.call(null,s__8912)));
} else
{return null;
}
})));
});
var map__8924 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8913 = cljs.core.seq.call(null,c1);
var s2__8914 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8915 = s1__8913;

if(cljs.core.truth_(and__3546__auto____8915))
{return s2__8914;
} else
{return and__3546__auto____8915;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8913),cljs.core.first.call(null,s2__8914)),map.call(null,f,cljs.core.rest.call(null,s1__8913),cljs.core.rest.call(null,s2__8914)));
} else
{return null;
}
})));
});
var map__8925 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8916 = cljs.core.seq.call(null,c1);
var s2__8917 = cljs.core.seq.call(null,c2);
var s3__8918 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8919 = s1__8916;

if(cljs.core.truth_(and__3546__auto____8919))
{var and__3546__auto____8920 = s2__8917;

if(cljs.core.truth_(and__3546__auto____8920))
{return s3__8918;
} else
{return and__3546__auto____8920;
}
} else
{return and__3546__auto____8919;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8916),cljs.core.first.call(null,s2__8917),cljs.core.first.call(null,s3__8918)),map.call(null,f,cljs.core.rest.call(null,s1__8916),cljs.core.rest.call(null,s2__8917),cljs.core.rest.call(null,s3__8918)));
} else
{return null;
}
})));
});
var map__8926 = (function() { 
var G__8928__delegate = function (f,c1,c2,c3,colls){
var step__8922 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8921 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8921)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8921),step.call(null,map.call(null,cljs.core.rest,ss__8921)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8833_SHARP_){
return cljs.core.apply.call(null,f,p1__8833_SHARP_);
}),step__8922.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8928 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8928__delegate.call(this, f, c1, c2, c3, colls);
};
G__8928.cljs$lang$maxFixedArity = 4;
G__8928.cljs$lang$applyTo = (function (arglist__8929){
var f = cljs.core.first(arglist__8929);
var c1 = cljs.core.first(cljs.core.next(arglist__8929));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8929)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8929))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8929))));
return G__8928__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8928;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8923.call(this,f,c1);
case  3 :
return map__8924.call(this,f,c1,c2);
case  4 :
return map__8925.call(this,f,c1,c2,c3);
default:
return map__8926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8926.cljs$lang$applyTo;
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
{var temp__3698__auto____8930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8930))
{var s__8931 = temp__3698__auto____8930;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8931),take.call(null,(n - 1),cljs.core.rest.call(null,s__8931)));
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
var step__8934 = (function (n,coll){
while(true){
var s__8932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8933 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8933))
{return s__8932;
} else
{return and__3546__auto____8933;
}
})()))
{{
var G__8935 = (n - 1);
var G__8936 = cljs.core.rest.call(null,s__8932);
n = G__8935;
coll = G__8936;
continue;
}
} else
{return s__8932;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8934.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8937 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8938 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8937.call(this,n);
case  2 :
return drop_last__8938.call(this,n,s);
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
var s__8940 = cljs.core.seq.call(null,coll);
var lead__8941 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8941))
{{
var G__8942 = cljs.core.next.call(null,s__8940);
var G__8943 = cljs.core.next.call(null,lead__8941);
s__8940 = G__8942;
lead__8941 = G__8943;
continue;
}
} else
{return s__8940;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8946 = (function (pred,coll){
while(true){
var s__8944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8945 = s__8944;

if(cljs.core.truth_(and__3546__auto____8945))
{return pred.call(null,cljs.core.first.call(null,s__8944));
} else
{return and__3546__auto____8945;
}
})()))
{{
var G__8947 = pred;
var G__8948 = cljs.core.rest.call(null,s__8944);
pred = G__8947;
coll = G__8948;
continue;
}
} else
{return s__8944;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8946.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8949))
{var s__8950 = temp__3698__auto____8949;

return cljs.core.concat.call(null,s__8950,cycle.call(null,s__8950));
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
var repeat__8951 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8952 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8951.call(this,n);
case  2 :
return repeat__8952.call(this,n,x);
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
var repeatedly__8954 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8955 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8954.call(this,n);
case  2 :
return repeatedly__8955.call(this,n,f);
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
var interleave__8961 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8957 = cljs.core.seq.call(null,c1);
var s2__8958 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8959 = s1__8957;

if(cljs.core.truth_(and__3546__auto____8959))
{return s2__8958;
} else
{return and__3546__auto____8959;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8957),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8958),interleave.call(null,cljs.core.rest.call(null,s1__8957),cljs.core.rest.call(null,s2__8958))));
} else
{return null;
}
})));
});
var interleave__8962 = (function() { 
var G__8964__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8960 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8960)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8960),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8960)));
} else
{return null;
}
})));
};
var G__8964 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8964__delegate.call(this, c1, c2, colls);
};
G__8964.cljs$lang$maxFixedArity = 2;
G__8964.cljs$lang$applyTo = (function (arglist__8965){
var c1 = cljs.core.first(arglist__8965);
var c2 = cljs.core.first(cljs.core.next(arglist__8965));
var colls = cljs.core.rest(cljs.core.next(arglist__8965));
return G__8964__delegate.call(this, c1, c2, colls);
});
return G__8964;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8961.call(this,c1,c2);
default:
return interleave__8962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8962.cljs$lang$applyTo;
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
var cat__8968 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8966))
{var coll__8967 = temp__3695__auto____8966;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8967),cat.call(null,cljs.core.rest.call(null,coll__8967),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8968.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8969 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8970 = (function() { 
var G__8972__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8972 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8972__delegate.call(this, f, coll, colls);
};
G__8972.cljs$lang$maxFixedArity = 2;
G__8972.cljs$lang$applyTo = (function (arglist__8973){
var f = cljs.core.first(arglist__8973);
var coll = cljs.core.first(cljs.core.next(arglist__8973));
var colls = cljs.core.rest(cljs.core.next(arglist__8973));
return G__8972__delegate.call(this, f, coll, colls);
});
return G__8972;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8969.call(this,f,coll);
default:
return mapcat__8970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8970.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8974 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8974))
{var s__8975 = temp__3698__auto____8974;

var f__8976 = cljs.core.first.call(null,s__8975);
var r__8977 = cljs.core.rest.call(null,s__8975);

if(cljs.core.truth_(pred.call(null,f__8976)))
{return cljs.core.cons.call(null,f__8976,filter.call(null,pred,r__8977));
} else
{return filter.call(null,pred,r__8977);
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
var walk__8979 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8979.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8978_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8978_SHARP_));
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
var partition__8986 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8987 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8980))
{var s__8981 = temp__3698__auto____8980;

var p__8982 = cljs.core.take.call(null,n,s__8981);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8982))))
{return cljs.core.cons.call(null,p__8982,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8981)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8988 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8983))
{var s__8984 = temp__3698__auto____8983;

var p__8985 = cljs.core.take.call(null,n,s__8984);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8985))))
{return cljs.core.cons.call(null,p__8985,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8984)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8985,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8986.call(this,n,step);
case  3 :
return partition__8987.call(this,n,step,pad);
case  4 :
return partition__8988.call(this,n,step,pad,coll);
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
var get_in__8994 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8995 = (function (m,ks,not_found){
var sentinel__8990 = cljs.core.lookup_sentinel;
var m__8991 = m;
var ks__8992 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8992))
{var m__8993 = cljs.core.get.call(null,m__8991,cljs.core.first.call(null,ks__8992),sentinel__8990);

if(cljs.core.truth_((sentinel__8990 === m__8993)))
{return not_found;
} else
{{
var G__8997 = sentinel__8990;
var G__8998 = m__8993;
var G__8999 = cljs.core.next.call(null,ks__8992);
sentinel__8990 = G__8997;
m__8991 = G__8998;
ks__8992 = G__8999;
continue;
}
}
} else
{return m__8991;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8994.call(this,m,ks);
case  3 :
return get_in__8995.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__9000,v){
var vec__9001__9002 = p__9000;
var k__9003 = cljs.core.nth.call(null,vec__9001__9002,0,null);
var ks__9004 = cljs.core.nthnext.call(null,vec__9001__9002,1);

if(cljs.core.truth_(ks__9004))
{return cljs.core.assoc.call(null,m,k__9003,assoc_in.call(null,cljs.core.get.call(null,m,k__9003),ks__9004,v));
} else
{return cljs.core.assoc.call(null,m,k__9003,v);
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
var update_in__delegate = function (m,p__9005,f,args){
var vec__9006__9007 = p__9005;
var k__9008 = cljs.core.nth.call(null,vec__9006__9007,0,null);
var ks__9009 = cljs.core.nthnext.call(null,vec__9006__9007,1);

if(cljs.core.truth_(ks__9009))
{return cljs.core.assoc.call(null,m,k__9008,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__9008),ks__9009,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9008,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__9008),args));
}
};
var update_in = function (m,p__9005,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9005, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9010){
var m = cljs.core.first(arglist__9010);
var p__9005 = cljs.core.first(cljs.core.next(arglist__9010));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9010)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9010)));
return update_in__delegate.call(this, m, p__9005, f, args);
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
var this__9011 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9044 = null;
var G__9044__9045 = (function (coll,k){
var this__9012 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9044__9046 = (function (coll,k,not_found){
var this__9013 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9044 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9044__9045.call(this,coll,k);
case  3 :
return G__9044__9046.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9044;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9014 = this;
var new_array__9015 = cljs.core.aclone.call(null,this__9014.array);

(new_array__9015[k] = v);
return (new cljs.core.Vector(this__9014.meta,new_array__9015));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__9048 = null;
var G__9048__9049 = (function (tsym9016,k){
var this__9018 = this;
var tsym9016__9019 = this;

var coll__9020 = tsym9016__9019;

return cljs.core._lookup.call(null,coll__9020,k);
});
var G__9048__9050 = (function (tsym9017,k,not_found){
var this__9021 = this;
var tsym9017__9022 = this;

var coll__9023 = tsym9017__9022;

return cljs.core._lookup.call(null,coll__9023,k,not_found);
});
G__9048 = function(tsym9017,k,not_found){
switch(arguments.length){
case  2 :
return G__9048__9049.call(this,tsym9017,k);
case  3 :
return G__9048__9050.call(this,tsym9017,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9048;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9024 = this;
var new_array__9025 = cljs.core.aclone.call(null,this__9024.array);

new_array__9025.push(o);
return (new cljs.core.Vector(this__9024.meta,new_array__9025));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9052 = null;
var G__9052__9053 = (function (v,f){
var this__9026 = this;
return cljs.core.ci_reduce.call(null,this__9026.array,f);
});
var G__9052__9054 = (function (v,f,start){
var this__9027 = this;
return cljs.core.ci_reduce.call(null,this__9027.array,f,start);
});
G__9052 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9052__9053.call(this,v,f);
case  3 :
return G__9052__9054.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9052;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9028 = this;
if(cljs.core.truth_((this__9028.array.length > 0)))
{var vector_seq__9029 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9028.array.length)))
{return cljs.core.cons.call(null,(this__9028.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9029.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9030 = this;
return this__9030.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9031 = this;
var count__9032 = this__9031.array.length;

if(cljs.core.truth_((count__9032 > 0)))
{return (this__9031.array[(count__9032 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9033 = this;
if(cljs.core.truth_((this__9033.array.length > 0)))
{var new_array__9034 = cljs.core.aclone.call(null,this__9033.array);

new_array__9034.pop();
return (new cljs.core.Vector(this__9033.meta,new_array__9034));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9035 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9036 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9037 = this;
return (new cljs.core.Vector(meta,this__9037.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9038 = this;
return this__9038.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9056 = null;
var G__9056__9057 = (function (coll,n){
var this__9039 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9040 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9040))
{return (n < this__9039.array.length);
} else
{return and__3546__auto____9040;
}
})()))
{return (this__9039.array[n]);
} else
{return null;
}
});
var G__9056__9058 = (function (coll,n,not_found){
var this__9041 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9042 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9042))
{return (n < this__9041.array.length);
} else
{return and__3546__auto____9042;
}
})()))
{return (this__9041.array[n]);
} else
{return not_found;
}
});
G__9056 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9056__9057.call(this,coll,n);
case  3 :
return G__9056__9058.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9056;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9043 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9043.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9060 = pv.cnt;

if(cljs.core.truth_((cnt__9060 < 32)))
{return 0;
} else
{return (((cnt__9060 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__9061 = level;
var ret__9062 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__9061)))
{return ret__9062;
} else
{var embed__9063 = ret__9062;
var r__9064 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___9065 = (r__9064[0] = embed__9063);

{
var G__9066 = (ll__9061 - 5);
var G__9067 = r__9064;
ll__9061 = G__9066;
ret__9062 = G__9067;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9068 = cljs.core.aclone.call(null,parent);
var subidx__9069 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__9068[subidx__9069] = tailnode);
return ret__9068;
} else
{var temp__3695__auto____9070 = (parent[subidx__9069]);

if(cljs.core.truth_(temp__3695__auto____9070))
{var child__9071 = temp__3695__auto____9070;

var node_to_insert__9072 = push_tail.call(null,pv,(level - 5),child__9071,tailnode);
var ___9073 = (ret__9068[subidx__9069] = node_to_insert__9072);

return ret__9068;
} else
{var node_to_insert__9074 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___9075 = (ret__9068[subidx__9069] = node_to_insert__9074);

return ret__9068;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____9076 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____9076))
{return (i < pv.cnt);
} else
{return and__3546__auto____9076;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__9077 = pv.root;
var level__9078 = pv.shift;

while(true){
if(cljs.core.truth_((level__9078 > 0)))
{{
var G__9079 = (node__9077[((i >> level__9078) & 31)]);
var G__9080 = (level__9078 - 5);
node__9077 = G__9079;
level__9078 = G__9080;
continue;
}
} else
{return node__9077;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9081 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__9081[(i & 31)] = val);
return ret__9081;
} else
{var subidx__9082 = ((i >> level) & 31);
var ___9083 = (ret__9081[subidx__9082] = do_assoc.call(null,pv,(level - 5),(node[subidx__9082]),i,val));

return ret__9081;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9084 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__9085 = pop_tail.call(null,pv,(level - 5),(node[subidx__9084]));

if(cljs.core.truth_((function (){var and__3546__auto____9086 = (new_child__9085 === null);

if(cljs.core.truth_(and__3546__auto____9086))
{return (subidx__9084 === 0);
} else
{return and__3546__auto____9086;
}
})()))
{return null;
} else
{var ret__9087 = cljs.core.aclone.call(null,node);
var ___9088 = (ret__9087[subidx__9084] = new_child__9085);

return ret__9087;
}
} else
{if(cljs.core.truth_((subidx__9084 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__9089 = cljs.core.aclone.call(null,node);
var ___9090 = (ret__9089[subidx__9084] = null);

return ret__9089;
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
var this__9091 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9131 = null;
var G__9131__9132 = (function (coll,k){
var this__9092 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9131__9133 = (function (coll,k,not_found){
var this__9093 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9131 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9131__9132.call(this,coll,k);
case  3 :
return G__9131__9133.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9131;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9094 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9095 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____9095))
{return (k < this__9094.cnt);
} else
{return and__3546__auto____9095;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__9096 = cljs.core.aclone.call(null,this__9094.tail);

(new_tail__9096[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9094.meta,this__9094.cnt,this__9094.shift,this__9094.root,new_tail__9096));
} else
{return (new cljs.core.PersistentVector(this__9094.meta,this__9094.cnt,this__9094.shift,cljs.core.do_assoc.call(null,coll,this__9094.shift,this__9094.root,k,v),this__9094.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__9094.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__9094.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__9135 = null;
var G__9135__9136 = (function (tsym9097,k){
var this__9099 = this;
var tsym9097__9100 = this;

var coll__9101 = tsym9097__9100;

return cljs.core._lookup.call(null,coll__9101,k);
});
var G__9135__9137 = (function (tsym9098,k,not_found){
var this__9102 = this;
var tsym9098__9103 = this;

var coll__9104 = tsym9098__9103;

return cljs.core._lookup.call(null,coll__9104,k,not_found);
});
G__9135 = function(tsym9098,k,not_found){
switch(arguments.length){
case  2 :
return G__9135__9136.call(this,tsym9098,k);
case  3 :
return G__9135__9137.call(this,tsym9098,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9135;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9105 = this;
if(cljs.core.truth_(((this__9105.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__9106 = cljs.core.aclone.call(null,this__9105.tail);

new_tail__9106.push(o);
return (new cljs.core.PersistentVector(this__9105.meta,(this__9105.cnt + 1),this__9105.shift,this__9105.root,new_tail__9106));
} else
{var root_overflow_QMARK___9107 = ((this__9105.cnt >> 5) > (1 << this__9105.shift));
var new_shift__9108 = (cljs.core.truth_(root_overflow_QMARK___9107)?(this__9105.shift + 5):this__9105.shift);
var new_root__9110 = (cljs.core.truth_(root_overflow_QMARK___9107)?(function (){var n_r__9109 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__9109[0] = this__9105.root);
(n_r__9109[1] = cljs.core.new_path.call(null,this__9105.shift,this__9105.tail));
return n_r__9109;
})():cljs.core.push_tail.call(null,coll,this__9105.shift,this__9105.root,this__9105.tail));

return (new cljs.core.PersistentVector(this__9105.meta,(this__9105.cnt + 1),new_shift__9108,new_root__9110,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9139 = null;
var G__9139__9140 = (function (v,f){
var this__9111 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__9139__9141 = (function (v,f,start){
var this__9112 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__9139 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9139__9140.call(this,v,f);
case  3 :
return G__9139__9141.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9139;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9113 = this;
if(cljs.core.truth_((this__9113.cnt > 0)))
{var vector_seq__9114 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9113.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9114.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9115 = this;
return this__9115.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9116 = this;
if(cljs.core.truth_((this__9116.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__9116.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9117 = this;
if(cljs.core.truth_((this__9117.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__9117.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9117.meta);
} else
{if(cljs.core.truth_((1 < (this__9117.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__9117.meta,(this__9117.cnt - 1),this__9117.shift,this__9117.root,cljs.core.aclone.call(null,this__9117.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__9118 = cljs.core.array_for.call(null,coll,(this__9117.cnt - 2));
var nr__9119 = cljs.core.pop_tail.call(null,this__9117.shift,this__9117.root);
var new_root__9120 = (cljs.core.truth_((nr__9119 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9119);
var cnt_1__9121 = (this__9117.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____9122 = (5 < this__9117.shift);

if(cljs.core.truth_(and__3546__auto____9122))
{return ((new_root__9120[1]) === null);
} else
{return and__3546__auto____9122;
}
})()))
{return (new cljs.core.PersistentVector(this__9117.meta,cnt_1__9121,(this__9117.shift - 5),(new_root__9120[0]),new_tail__9118));
} else
{return (new cljs.core.PersistentVector(this__9117.meta,cnt_1__9121,this__9117.shift,new_root__9120,new_tail__9118));
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
var this__9123 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9124 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9125 = this;
return (new cljs.core.PersistentVector(meta,this__9125.cnt,this__9125.shift,this__9125.root,this__9125.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9126 = this;
return this__9126.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9143 = null;
var G__9143__9144 = (function (coll,n){
var this__9127 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__9143__9145 = (function (coll,n,not_found){
var this__9128 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9129 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9129))
{return (n < this__9128.cnt);
} else
{return and__3546__auto____9129;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__9143 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9143__9144.call(this,coll,n);
case  3 :
return G__9143__9145.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9143;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9130 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9130.meta);
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
vector.cljs$lang$applyTo = (function (arglist__9147){
var args = cljs.core.seq( arglist__9147 );;
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
var this__9148 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9176 = null;
var G__9176__9177 = (function (coll,k){
var this__9149 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9176__9178 = (function (coll,k,not_found){
var this__9150 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9176 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9176__9177.call(this,coll,k);
case  3 :
return G__9176__9178.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9176;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__9151 = this;
var v_pos__9152 = (this__9151.start + key);

return (new cljs.core.Subvec(this__9151.meta,cljs.core._assoc.call(null,this__9151.v,v_pos__9152,val),this__9151.start,((this__9151.end > (v_pos__9152 + 1)) ? this__9151.end : (v_pos__9152 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__9180 = null;
var G__9180__9181 = (function (tsym9153,k){
var this__9155 = this;
var tsym9153__9156 = this;

var coll__9157 = tsym9153__9156;

return cljs.core._lookup.call(null,coll__9157,k);
});
var G__9180__9182 = (function (tsym9154,k,not_found){
var this__9158 = this;
var tsym9154__9159 = this;

var coll__9160 = tsym9154__9159;

return cljs.core._lookup.call(null,coll__9160,k,not_found);
});
G__9180 = function(tsym9154,k,not_found){
switch(arguments.length){
case  2 :
return G__9180__9181.call(this,tsym9154,k);
case  3 :
return G__9180__9182.call(this,tsym9154,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9180;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9161 = this;
return (new cljs.core.Subvec(this__9161.meta,cljs.core._assoc_n.call(null,this__9161.v,this__9161.end,o),this__9161.start,(this__9161.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9184 = null;
var G__9184__9185 = (function (coll,f){
var this__9162 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__9184__9186 = (function (coll,f,start){
var this__9163 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__9184 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9184__9185.call(this,coll,f);
case  3 :
return G__9184__9186.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9184;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9164 = this;
var subvec_seq__9165 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__9164.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9164.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__9165.call(null,this__9164.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9166 = this;
return (this__9166.end - this__9166.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9167 = this;
return cljs.core._nth.call(null,this__9167.v,(this__9167.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9168 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__9168.start,this__9168.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9168.meta,this__9168.v,this__9168.start,(this__9168.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9169 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9170 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9171 = this;
return (new cljs.core.Subvec(meta,this__9171.v,this__9171.start,this__9171.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9172 = this;
return this__9172.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9188 = null;
var G__9188__9189 = (function (coll,n){
var this__9173 = this;
return cljs.core._nth.call(null,this__9173.v,(this__9173.start + n));
});
var G__9188__9190 = (function (coll,n,not_found){
var this__9174 = this;
return cljs.core._nth.call(null,this__9174.v,(this__9174.start + n),not_found);
});
G__9188 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9188__9189.call(this,coll,n);
case  3 :
return G__9188__9190.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9188;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9175 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9175.meta);
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
var subvec__9192 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__9193 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__9192.call(this,v,start);
case  3 :
return subvec__9193.call(this,v,start,end);
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
var this__9195 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9196 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9198 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9198.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9199 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9200 = this;
return cljs.core._first.call(null,this__9200.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9201 = this;
var temp__3695__auto____9202 = cljs.core.next.call(null,this__9201.front);

if(cljs.core.truth_(temp__3695__auto____9202))
{var f1__9203 = temp__3695__auto____9202;

return (new cljs.core.PersistentQueueSeq(this__9201.meta,f1__9203,this__9201.rear));
} else
{if(cljs.core.truth_((this__9201.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9201.meta,this__9201.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9204 = this;
return this__9204.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9205 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9205.front,this__9205.rear));
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
var this__9206 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9207 = this;
if(cljs.core.truth_(this__9207.front))
{return (new cljs.core.PersistentQueue(this__9207.meta,(this__9207.count + 1),this__9207.front,cljs.core.conj.call(null,(function (){var or__3548__auto____9208 = this__9207.rear;

if(cljs.core.truth_(or__3548__auto____9208))
{return or__3548__auto____9208;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__9207.meta,(this__9207.count + 1),cljs.core.conj.call(null,this__9207.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9209 = this;
var rear__9210 = cljs.core.seq.call(null,this__9209.rear);

if(cljs.core.truth_((function (){var or__3548__auto____9211 = this__9209.front;

if(cljs.core.truth_(or__3548__auto____9211))
{return or__3548__auto____9211;
} else
{return rear__9210;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9209.front,cljs.core.seq.call(null,rear__9210)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9212 = this;
return this__9212.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9213 = this;
return cljs.core._first.call(null,this__9213.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9214 = this;
if(cljs.core.truth_(this__9214.front))
{var temp__3695__auto____9215 = cljs.core.next.call(null,this__9214.front);

if(cljs.core.truth_(temp__3695__auto____9215))
{var f1__9216 = temp__3695__auto____9215;

return (new cljs.core.PersistentQueue(this__9214.meta,(this__9214.count - 1),f1__9216,this__9214.rear));
} else
{return (new cljs.core.PersistentQueue(this__9214.meta,(this__9214.count - 1),cljs.core.seq.call(null,this__9214.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9217 = this;
return cljs.core.first.call(null,this__9217.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9218 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9220 = this;
return (new cljs.core.PersistentQueue(meta,this__9220.count,this__9220.front,this__9220.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9221 = this;
return this__9221.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9222 = this;
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
var this__9223 = this;
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
var len__9224 = array.length;

var i__9225 = 0;

while(true){
if(cljs.core.truth_((i__9225 < len__9224)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__9225]))))
{return i__9225;
} else
{{
var G__9226 = (i__9225 + incr);
i__9225 = G__9226;
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
var obj_map_contains_key_QMARK___9228 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___9229 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____9227 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____9227))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____9227;
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
return obj_map_contains_key_QMARK___9228.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___9229.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9232 = cljs.core.hash.call(null,a);
var b__9233 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__9232 < b__9233)))
{return -1;
} else
{if(cljs.core.truth_((a__9232 > b__9233)))
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
var this__9234 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9261 = null;
var G__9261__9262 = (function (coll,k){
var this__9235 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9261__9263 = (function (coll,k,not_found){
var this__9236 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9236.strobj,(this__9236.strobj[k]),not_found);
});
G__9261 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9261__9262.call(this,coll,k);
case  3 :
return G__9261__9263.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9261;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9237 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__9238 = goog.object.clone.call(null,this__9237.strobj);
var overwrite_QMARK___9239 = new_strobj__9238.hasOwnProperty(k);

(new_strobj__9238[k] = v);
if(cljs.core.truth_(overwrite_QMARK___9239))
{return (new cljs.core.ObjMap(this__9237.meta,this__9237.keys,new_strobj__9238));
} else
{var new_keys__9240 = cljs.core.aclone.call(null,this__9237.keys);

new_keys__9240.push(k);
return (new cljs.core.ObjMap(this__9237.meta,new_keys__9240,new_strobj__9238));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__9237.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9241 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9241.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__9265 = null;
var G__9265__9266 = (function (tsym9242,k){
var this__9244 = this;
var tsym9242__9245 = this;

var coll__9246 = tsym9242__9245;

return cljs.core._lookup.call(null,coll__9246,k);
});
var G__9265__9267 = (function (tsym9243,k,not_found){
var this__9247 = this;
var tsym9243__9248 = this;

var coll__9249 = tsym9243__9248;

return cljs.core._lookup.call(null,coll__9249,k,not_found);
});
G__9265 = function(tsym9243,k,not_found){
switch(arguments.length){
case  2 :
return G__9265__9266.call(this,tsym9243,k);
case  3 :
return G__9265__9267.call(this,tsym9243,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9265;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9250 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9251 = this;
if(cljs.core.truth_((this__9251.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__9231_SHARP_){
return cljs.core.vector.call(null,p1__9231_SHARP_,(this__9251.strobj[p1__9231_SHARP_]));
}),this__9251.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9252 = this;
return this__9252.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9253 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9254 = this;
return (new cljs.core.ObjMap(meta,this__9254.keys,this__9254.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9255 = this;
return this__9255.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9256 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9256.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9257 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9258 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____9258))
{return this__9257.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____9258;
}
})()))
{var new_keys__9259 = cljs.core.aclone.call(null,this__9257.keys);
var new_strobj__9260 = goog.object.clone.call(null,this__9257.strobj);

new_keys__9259.splice(cljs.core.scan_array.call(null,1,k,new_keys__9259),1);
cljs.core.js_delete.call(null,new_strobj__9260,k);
return (new cljs.core.ObjMap(this__9257.meta,new_keys__9259,new_strobj__9260));
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
var this__9270 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9308 = null;
var G__9308__9309 = (function (coll,k){
var this__9271 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9308__9310 = (function (coll,k,not_found){
var this__9272 = this;
var bucket__9273 = (this__9272.hashobj[cljs.core.hash.call(null,k)]);
var i__9274 = (cljs.core.truth_(bucket__9273)?cljs.core.scan_array.call(null,2,k,bucket__9273):null);

if(cljs.core.truth_(i__9274))
{return (bucket__9273[(i__9274 + 1)]);
} else
{return not_found;
}
});
G__9308 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9308__9309.call(this,coll,k);
case  3 :
return G__9308__9310.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9308;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9275 = this;
var h__9276 = cljs.core.hash.call(null,k);
var bucket__9277 = (this__9275.hashobj[h__9276]);

if(cljs.core.truth_(bucket__9277))
{var new_bucket__9278 = cljs.core.aclone.call(null,bucket__9277);
var new_hashobj__9279 = goog.object.clone.call(null,this__9275.hashobj);

(new_hashobj__9279[h__9276] = new_bucket__9278);
var temp__3695__auto____9280 = cljs.core.scan_array.call(null,2,k,new_bucket__9278);

if(cljs.core.truth_(temp__3695__auto____9280))
{var i__9281 = temp__3695__auto____9280;

(new_bucket__9278[(i__9281 + 1)] = v);
return (new cljs.core.HashMap(this__9275.meta,this__9275.count,new_hashobj__9279));
} else
{new_bucket__9278.push(k,v);
return (new cljs.core.HashMap(this__9275.meta,(this__9275.count + 1),new_hashobj__9279));
}
} else
{var new_hashobj__9282 = goog.object.clone.call(null,this__9275.hashobj);

(new_hashobj__9282[h__9276] = [k,v]);
return (new cljs.core.HashMap(this__9275.meta,(this__9275.count + 1),new_hashobj__9282));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9283 = this;
var bucket__9284 = (this__9283.hashobj[cljs.core.hash.call(null,k)]);
var i__9285 = (cljs.core.truth_(bucket__9284)?cljs.core.scan_array.call(null,2,k,bucket__9284):null);

if(cljs.core.truth_(i__9285))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__9312 = null;
var G__9312__9313 = (function (tsym9286,k){
var this__9288 = this;
var tsym9286__9289 = this;

var coll__9290 = tsym9286__9289;

return cljs.core._lookup.call(null,coll__9290,k);
});
var G__9312__9314 = (function (tsym9287,k,not_found){
var this__9291 = this;
var tsym9287__9292 = this;

var coll__9293 = tsym9287__9292;

return cljs.core._lookup.call(null,coll__9293,k,not_found);
});
G__9312 = function(tsym9287,k,not_found){
switch(arguments.length){
case  2 :
return G__9312__9313.call(this,tsym9287,k);
case  3 :
return G__9312__9314.call(this,tsym9287,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9312;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9294 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9295 = this;
if(cljs.core.truth_((this__9295.count > 0)))
{var hashes__9296 = cljs.core.js_keys.call(null,this__9295.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__9269_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9295.hashobj[p1__9269_SHARP_])));
}),hashes__9296);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9297 = this;
return this__9297.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9298 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9299 = this;
return (new cljs.core.HashMap(meta,this__9299.count,this__9299.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9300 = this;
return this__9300.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9301 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9301.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9302 = this;
var h__9303 = cljs.core.hash.call(null,k);
var bucket__9304 = (this__9302.hashobj[h__9303]);
var i__9305 = (cljs.core.truth_(bucket__9304)?cljs.core.scan_array.call(null,2,k,bucket__9304):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__9305)))
{return coll;
} else
{var new_hashobj__9306 = goog.object.clone.call(null,this__9302.hashobj);

if(cljs.core.truth_((3 > bucket__9304.length)))
{cljs.core.js_delete.call(null,new_hashobj__9306,h__9303);
} else
{var new_bucket__9307 = cljs.core.aclone.call(null,bucket__9304);

new_bucket__9307.splice(i__9305,2);
(new_hashobj__9306[h__9303] = new_bucket__9307);
}
return (new cljs.core.HashMap(this__9302.meta,(this__9302.count - 1),new_hashobj__9306));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9316 = ks.length;

var i__9317 = 0;
var out__9318 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__9317 < len__9316)))
{{
var G__9319 = (i__9317 + 1);
var G__9320 = cljs.core.assoc.call(null,out__9318,(ks[i__9317]),(vs[i__9317]));
i__9317 = G__9319;
out__9318 = G__9320;
continue;
}
} else
{return out__9318;
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
var in$__9321 = cljs.core.seq.call(null,keyvals);
var out__9322 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__9321))
{{
var G__9323 = cljs.core.nnext.call(null,in$__9321);
var G__9324 = cljs.core.assoc.call(null,out__9322,cljs.core.first.call(null,in$__9321),cljs.core.second.call(null,in$__9321));
in$__9321 = G__9323;
out__9322 = G__9324;
continue;
}
} else
{return out__9322;
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
hash_map.cljs$lang$applyTo = (function (arglist__9325){
var keyvals = cljs.core.seq( arglist__9325 );;
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
{return cljs.core.reduce.call(null,(function (p1__9326_SHARP_,p2__9327_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____9328 = p1__9326_SHARP_;

if(cljs.core.truth_(or__3548__auto____9328))
{return or__3548__auto____9328;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__9327_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9329){
var maps = cljs.core.seq( arglist__9329 );;
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
{var merge_entry__9332 = (function (m,e){
var k__9330 = cljs.core.first.call(null,e);
var v__9331 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__9330)))
{return cljs.core.assoc.call(null,m,k__9330,f.call(null,cljs.core.get.call(null,m,k__9330),v__9331));
} else
{return cljs.core.assoc.call(null,m,k__9330,v__9331);
}
});
var merge2__9334 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9332,(function (){var or__3548__auto____9333 = m1;

if(cljs.core.truth_(or__3548__auto____9333))
{return or__3548__auto____9333;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__9334,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9335){
var f = cljs.core.first(arglist__9335);
var maps = cljs.core.rest(arglist__9335);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9337 = cljs.core.ObjMap.fromObject([],{});
var keys__9338 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__9338))
{var key__9339 = cljs.core.first.call(null,keys__9338);
var entry__9340 = cljs.core.get.call(null,map,key__9339,"\uFDD0'user/not-found");

{
var G__9341 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__9340,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9337,key__9339,entry__9340):ret__9337);
var G__9342 = cljs.core.next.call(null,keys__9338);
ret__9337 = G__9341;
keys__9338 = G__9342;
continue;
}
} else
{return ret__9337;
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
var this__9343 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9364 = null;
var G__9364__9365 = (function (coll,v){
var this__9344 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__9364__9366 = (function (coll,v,not_found){
var this__9345 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9345.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__9364 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__9364__9365.call(this,coll,v);
case  3 :
return G__9364__9366.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9364;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__9368 = null;
var G__9368__9369 = (function (tsym9346,k){
var this__9348 = this;
var tsym9346__9349 = this;

var coll__9350 = tsym9346__9349;

return cljs.core._lookup.call(null,coll__9350,k);
});
var G__9368__9370 = (function (tsym9347,k,not_found){
var this__9351 = this;
var tsym9347__9352 = this;

var coll__9353 = tsym9347__9352;

return cljs.core._lookup.call(null,coll__9353,k,not_found);
});
G__9368 = function(tsym9347,k,not_found){
switch(arguments.length){
case  2 :
return G__9368__9369.call(this,tsym9347,k);
case  3 :
return G__9368__9370.call(this,tsym9347,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9368;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9354 = this;
return (new cljs.core.Set(this__9354.meta,cljs.core.assoc.call(null,this__9354.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9355 = this;
return cljs.core.keys.call(null,this__9355.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__9356 = this;
return (new cljs.core.Set(this__9356.meta,cljs.core.dissoc.call(null,this__9356.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9357 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9358 = this;
var and__3546__auto____9359 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____9359))
{var and__3546__auto____9360 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____9360))
{return cljs.core.every_QMARK_.call(null,(function (p1__9336_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9336_SHARP_);
}),other);
} else
{return and__3546__auto____9360;
}
} else
{return and__3546__auto____9359;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9361 = this;
return (new cljs.core.Set(meta,this__9361.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9362 = this;
return this__9362.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9363 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__9363.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9373 = cljs.core.seq.call(null,coll);
var out__9374 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__9373))))
{{
var G__9375 = cljs.core.rest.call(null,in$__9373);
var G__9376 = cljs.core.conj.call(null,out__9374,cljs.core.first.call(null,in$__9373));
in$__9373 = G__9375;
out__9374 = G__9376;
continue;
}
} else
{return out__9374;
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
{var n__9377 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____9378 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____9378))
{var e__9379 = temp__3695__auto____9378;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9379));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9377,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9372_SHARP_){
var temp__3695__auto____9380 = cljs.core.find.call(null,smap,p1__9372_SHARP_);

if(cljs.core.truth_(temp__3695__auto____9380))
{var e__9381 = temp__3695__auto____9380;

return cljs.core.second.call(null,e__9381);
} else
{return p1__9372_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9389 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9382,seen){
while(true){
var vec__9383__9384 = p__9382;
var f__9385 = cljs.core.nth.call(null,vec__9383__9384,0,null);
var xs__9386 = vec__9383__9384;

var temp__3698__auto____9387 = cljs.core.seq.call(null,xs__9386);

if(cljs.core.truth_(temp__3698__auto____9387))
{var s__9388 = temp__3698__auto____9387;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__9385)))
{{
var G__9390 = cljs.core.rest.call(null,s__9388);
var G__9391 = seen;
p__9382 = G__9390;
seen = G__9391;
continue;
}
} else
{return cljs.core.cons.call(null,f__9385,step.call(null,cljs.core.rest.call(null,s__9388),cljs.core.conj.call(null,seen,f__9385)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__9389.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9392 = cljs.core.PersistentVector.fromArray([]);
var s__9393 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9393)))
{{
var G__9394 = cljs.core.conj.call(null,ret__9392,cljs.core.first.call(null,s__9393));
var G__9395 = cljs.core.next.call(null,s__9393);
ret__9392 = G__9394;
s__9393 = G__9395;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9392);
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
{if(cljs.core.truth_((function (){var or__3548__auto____9396 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9396))
{return or__3548__auto____9396;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9397 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9397 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9397 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____9398 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9398))
{return or__3548__auto____9398;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9399 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9399 > -1)))
{return cljs.core.subs.call(null,x,2,i__9399);
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
var map__9402 = cljs.core.ObjMap.fromObject([],{});
var ks__9403 = cljs.core.seq.call(null,keys);
var vs__9404 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9405 = ks__9403;

if(cljs.core.truth_(and__3546__auto____9405))
{return vs__9404;
} else
{return and__3546__auto____9405;
}
})()))
{{
var G__9406 = cljs.core.assoc.call(null,map__9402,cljs.core.first.call(null,ks__9403),cljs.core.first.call(null,vs__9404));
var G__9407 = cljs.core.next.call(null,ks__9403);
var G__9408 = cljs.core.next.call(null,vs__9404);
map__9402 = G__9406;
ks__9403 = G__9407;
vs__9404 = G__9408;
continue;
}
} else
{return map__9402;
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
var max_key__9411 = (function (k,x){
return x;
});
var max_key__9412 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__9413 = (function() { 
var G__9415__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9400_SHARP_,p2__9401_SHARP_){
return max_key.call(null,k,p1__9400_SHARP_,p2__9401_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9415 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9415__delegate.call(this, k, x, y, more);
};
G__9415.cljs$lang$maxFixedArity = 3;
G__9415.cljs$lang$applyTo = (function (arglist__9416){
var k = cljs.core.first(arglist__9416);
var x = cljs.core.first(cljs.core.next(arglist__9416));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9416)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9416)));
return G__9415__delegate.call(this, k, x, y, more);
});
return G__9415;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__9411.call(this,k,x);
case  3 :
return max_key__9412.call(this,k,x,y);
default:
return max_key__9413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__9413.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__9417 = (function (k,x){
return x;
});
var min_key__9418 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__9419 = (function() { 
var G__9421__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9409_SHARP_,p2__9410_SHARP_){
return min_key.call(null,k,p1__9409_SHARP_,p2__9410_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9421 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9421__delegate.call(this, k, x, y, more);
};
G__9421.cljs$lang$maxFixedArity = 3;
G__9421.cljs$lang$applyTo = (function (arglist__9422){
var k = cljs.core.first(arglist__9422);
var x = cljs.core.first(cljs.core.next(arglist__9422));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9422)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9422)));
return G__9421__delegate.call(this, k, x, y, more);
});
return G__9421;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__9417.call(this,k,x);
case  3 :
return min_key__9418.call(this,k,x,y);
default:
return min_key__9419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__9419.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__9425 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__9426 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9423))
{var s__9424 = temp__3698__auto____9423;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9424),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9424)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__9425.call(this,n,step);
case  3 :
return partition_all__9426.call(this,n,step,coll);
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
var temp__3698__auto____9428 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9428))
{var s__9429 = temp__3698__auto____9428;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9429))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9429),take_while.call(null,pred,cljs.core.rest.call(null,s__9429)));
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
var this__9430 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__9431 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9447 = null;
var G__9447__9448 = (function (rng,f){
var this__9432 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__9447__9449 = (function (rng,f,s){
var this__9433 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__9447 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__9447__9448.call(this,rng,f);
case  3 :
return G__9447__9449.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9447;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__9434 = this;
var comp__9435 = (cljs.core.truth_((this__9434.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__9435.call(null,this__9434.start,this__9434.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__9436 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__9436.end - this__9436.start) / this__9436.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__9437 = this;
return this__9437.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__9438 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9438.meta,(this__9438.start + this__9438.step),this__9438.end,this__9438.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__9439 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__9440 = this;
return (new cljs.core.Range(meta,this__9440.start,this__9440.end,this__9440.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__9441 = this;
return this__9441.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9451 = null;
var G__9451__9452 = (function (rng,n){
var this__9442 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9442.start + (n * this__9442.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9443 = (this__9442.start > this__9442.end);

if(cljs.core.truth_(and__3546__auto____9443))
{return cljs.core._EQ_.call(null,this__9442.step,0);
} else
{return and__3546__auto____9443;
}
})()))
{return this__9442.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9451__9453 = (function (rng,n,not_found){
var this__9444 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9444.start + (n * this__9444.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9445 = (this__9444.start > this__9444.end);

if(cljs.core.truth_(and__3546__auto____9445))
{return cljs.core._EQ_.call(null,this__9444.step,0);
} else
{return and__3546__auto____9445;
}
})()))
{return this__9444.start;
} else
{return not_found;
}
}
});
G__9451 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9451__9452.call(this,rng,n);
case  3 :
return G__9451__9453.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9451;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__9446 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9446.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9455 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9456 = (function (end){
return range.call(null,0,end,1);
});
var range__9457 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9458 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9455.call(this);
case  1 :
return range__9456.call(this,start);
case  2 :
return range__9457.call(this,start,end);
case  3 :
return range__9458.call(this,start,end,step);
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
var temp__3698__auto____9460 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9460))
{var s__9461 = temp__3698__auto____9460;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9461),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9461)));
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
var temp__3698__auto____9463 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9463))
{var s__9464 = temp__3698__auto____9463;

var fst__9465 = cljs.core.first.call(null,s__9464);
var fv__9466 = f.call(null,fst__9465);
var run__9467 = cljs.core.cons.call(null,fst__9465,cljs.core.take_while.call(null,(function (p1__9462_SHARP_){
return cljs.core._EQ_.call(null,fv__9466,f.call(null,p1__9462_SHARP_));
}),cljs.core.next.call(null,s__9464)));

return cljs.core.cons.call(null,run__9467,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9467),s__9464))));
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
var reductions__9482 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9478 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9478))
{var s__9479 = temp__3695__auto____9478;

return reductions.call(null,f,cljs.core.first.call(null,s__9479),cljs.core.rest.call(null,s__9479));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9483 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9480 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9480))
{var s__9481 = temp__3698__auto____9480;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9481)),cljs.core.rest.call(null,s__9481));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9482.call(this,f,init);
case  3 :
return reductions__9483.call(this,f,init,coll);
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
var juxt__9486 = (function (f){
return (function() {
var G__9491 = null;
var G__9491__9492 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9491__9493 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9491__9494 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9491__9495 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9491__9496 = (function() { 
var G__9498__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9498 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9498__delegate.call(this, x, y, z, args);
};
G__9498.cljs$lang$maxFixedArity = 3;
G__9498.cljs$lang$applyTo = (function (arglist__9499){
var x = cljs.core.first(arglist__9499);
var y = cljs.core.first(cljs.core.next(arglist__9499));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9499)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9499)));
return G__9498__delegate.call(this, x, y, z, args);
});
return G__9498;
})()
;
G__9491 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9491__9492.call(this);
case  1 :
return G__9491__9493.call(this,x);
case  2 :
return G__9491__9494.call(this,x,y);
case  3 :
return G__9491__9495.call(this,x,y,z);
default:
return G__9491__9496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9491.cljs$lang$maxFixedArity = 3;
G__9491.cljs$lang$applyTo = G__9491__9496.cljs$lang$applyTo;
return G__9491;
})()
});
var juxt__9487 = (function (f,g){
return (function() {
var G__9500 = null;
var G__9500__9501 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9500__9502 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9500__9503 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9500__9504 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9500__9505 = (function() { 
var G__9507__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9507__delegate.call(this, x, y, z, args);
};
G__9507.cljs$lang$maxFixedArity = 3;
G__9507.cljs$lang$applyTo = (function (arglist__9508){
var x = cljs.core.first(arglist__9508);
var y = cljs.core.first(cljs.core.next(arglist__9508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9508)));
return G__9507__delegate.call(this, x, y, z, args);
});
return G__9507;
})()
;
G__9500 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9500__9501.call(this);
case  1 :
return G__9500__9502.call(this,x);
case  2 :
return G__9500__9503.call(this,x,y);
case  3 :
return G__9500__9504.call(this,x,y,z);
default:
return G__9500__9505.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9500.cljs$lang$maxFixedArity = 3;
G__9500.cljs$lang$applyTo = G__9500__9505.cljs$lang$applyTo;
return G__9500;
})()
});
var juxt__9488 = (function (f,g,h){
return (function() {
var G__9509 = null;
var G__9509__9510 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9509__9511 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9509__9512 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9509__9513 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9509__9514 = (function() { 
var G__9516__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9516 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9516__delegate.call(this, x, y, z, args);
};
G__9516.cljs$lang$maxFixedArity = 3;
G__9516.cljs$lang$applyTo = (function (arglist__9517){
var x = cljs.core.first(arglist__9517);
var y = cljs.core.first(cljs.core.next(arglist__9517));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9517)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9517)));
return G__9516__delegate.call(this, x, y, z, args);
});
return G__9516;
})()
;
G__9509 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9509__9510.call(this);
case  1 :
return G__9509__9511.call(this,x);
case  2 :
return G__9509__9512.call(this,x,y);
case  3 :
return G__9509__9513.call(this,x,y,z);
default:
return G__9509__9514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9509.cljs$lang$maxFixedArity = 3;
G__9509.cljs$lang$applyTo = G__9509__9514.cljs$lang$applyTo;
return G__9509;
})()
});
var juxt__9489 = (function() { 
var G__9518__delegate = function (f,g,h,fs){
var fs__9485 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9519 = null;
var G__9519__9520 = (function (){
return cljs.core.reduce.call(null,(function (p1__9468_SHARP_,p2__9469_SHARP_){
return cljs.core.conj.call(null,p1__9468_SHARP_,p2__9469_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9485);
});
var G__9519__9521 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9470_SHARP_,p2__9471_SHARP_){
return cljs.core.conj.call(null,p1__9470_SHARP_,p2__9471_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9485);
});
var G__9519__9522 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9472_SHARP_,p2__9473_SHARP_){
return cljs.core.conj.call(null,p1__9472_SHARP_,p2__9473_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9485);
});
var G__9519__9523 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9474_SHARP_,p2__9475_SHARP_){
return cljs.core.conj.call(null,p1__9474_SHARP_,p2__9475_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9485);
});
var G__9519__9524 = (function() { 
var G__9526__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9476_SHARP_,p2__9477_SHARP_){
return cljs.core.conj.call(null,p1__9476_SHARP_,cljs.core.apply.call(null,p2__9477_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9485);
};
var G__9526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9526__delegate.call(this, x, y, z, args);
};
G__9526.cljs$lang$maxFixedArity = 3;
G__9526.cljs$lang$applyTo = (function (arglist__9527){
var x = cljs.core.first(arglist__9527);
var y = cljs.core.first(cljs.core.next(arglist__9527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9527)));
return G__9526__delegate.call(this, x, y, z, args);
});
return G__9526;
})()
;
G__9519 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9519__9520.call(this);
case  1 :
return G__9519__9521.call(this,x);
case  2 :
return G__9519__9522.call(this,x,y);
case  3 :
return G__9519__9523.call(this,x,y,z);
default:
return G__9519__9524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9519.cljs$lang$maxFixedArity = 3;
G__9519.cljs$lang$applyTo = G__9519__9524.cljs$lang$applyTo;
return G__9519;
})()
};
var G__9518 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9518__delegate.call(this, f, g, h, fs);
};
G__9518.cljs$lang$maxFixedArity = 3;
G__9518.cljs$lang$applyTo = (function (arglist__9528){
var f = cljs.core.first(arglist__9528);
var g = cljs.core.first(cljs.core.next(arglist__9528));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9528)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9528)));
return G__9518__delegate.call(this, f, g, h, fs);
});
return G__9518;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9486.call(this,f);
case  2 :
return juxt__9487.call(this,f,g);
case  3 :
return juxt__9488.call(this,f,g,h);
default:
return juxt__9489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9489.cljs$lang$applyTo;
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
var dorun__9530 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9533 = cljs.core.next.call(null,coll);
coll = G__9533;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9531 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9529 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9529))
{return (n > 0);
} else
{return and__3546__auto____9529;
}
})()))
{{
var G__9534 = (n - 1);
var G__9535 = cljs.core.next.call(null,coll);
n = G__9534;
coll = G__9535;
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
return dorun__9530.call(this,n);
case  2 :
return dorun__9531.call(this,n,coll);
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
var doall__9536 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9537 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9536.call(this,n);
case  2 :
return doall__9537.call(this,n,coll);
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
var matches__9539 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9539),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9539),1)))
{return cljs.core.first.call(null,matches__9539);
} else
{return cljs.core.vec.call(null,matches__9539);
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
var matches__9540 = re.exec(s);

if(cljs.core.truth_((matches__9540 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9540),1)))
{return cljs.core.first.call(null,matches__9540);
} else
{return cljs.core.vec.call(null,matches__9540);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9541 = cljs.core.re_find.call(null,re,s);
var match_idx__9542 = s.search(re);
var match_str__9543 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9541))?cljs.core.first.call(null,match_data__9541):match_data__9541);
var post_match__9544 = cljs.core.subs.call(null,s,(match_idx__9542 + cljs.core.count.call(null,match_str__9543)));

if(cljs.core.truth_(match_data__9541))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9541,re_seq.call(null,re,post_match__9544));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9546__9547 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9548 = cljs.core.nth.call(null,vec__9546__9547,0,null);
var flags__9549 = cljs.core.nth.call(null,vec__9546__9547,1,null);
var pattern__9550 = cljs.core.nth.call(null,vec__9546__9547,2,null);

return (new RegExp(pattern__9550,flags__9549));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9545_SHARP_){
return print_one.call(null,p1__9545_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9551 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____9551))
{var and__3546__auto____9555 = (function (){var x__3028__auto____9552 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9553 = x__3028__auto____9552;

if(cljs.core.truth_(and__3546__auto____9553))
{var and__3546__auto____9554 = x__3028__auto____9552.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____9554))
{return cljs.core.not.call(null,x__3028__auto____9552.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____9554;
}
} else
{return and__3546__auto____9553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____9552);
}
})();

if(cljs.core.truth_(and__3546__auto____9555))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9555;
}
} else
{return and__3546__auto____9551;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____9556 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9557 = x__3028__auto____9556;

if(cljs.core.truth_(and__3546__auto____9557))
{var and__3546__auto____9558 = x__3028__auto____9556.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____9558))
{return cljs.core.not.call(null,x__3028__auto____9556.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____9558;
}
} else
{return and__3546__auto____9557;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____9556);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9559 = cljs.core.first.call(null,objs);
var sb__9560 = (new goog.string.StringBuffer());

var G__9561__9562 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9561__9562))
{var obj__9563 = cljs.core.first.call(null,G__9561__9562);
var G__9561__9564 = G__9561__9562;

while(true){
if(cljs.core.truth_((obj__9563 === first_obj__9559)))
{} else
{sb__9560.append(" ");
}
var G__9565__9566 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9563,opts));

if(cljs.core.truth_(G__9565__9566))
{var string__9567 = cljs.core.first.call(null,G__9565__9566);
var G__9565__9568 = G__9565__9566;

while(true){
sb__9560.append(string__9567);
var temp__3698__auto____9569 = cljs.core.next.call(null,G__9565__9568);

if(cljs.core.truth_(temp__3698__auto____9569))
{var G__9565__9570 = temp__3698__auto____9569;

{
var G__9573 = cljs.core.first.call(null,G__9565__9570);
var G__9574 = G__9565__9570;
string__9567 = G__9573;
G__9565__9568 = G__9574;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9571 = cljs.core.next.call(null,G__9561__9564);

if(cljs.core.truth_(temp__3698__auto____9571))
{var G__9561__9572 = temp__3698__auto____9571;

{
var G__9575 = cljs.core.first.call(null,G__9561__9572);
var G__9576 = G__9561__9572;
obj__9563 = G__9575;
G__9561__9564 = G__9576;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9560;
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
var sb__9577 = cljs.core.pr_sb.call(null,objs,opts);

sb__9577.append("\n");
return cljs.core.str.call(null,sb__9577);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9578 = cljs.core.first.call(null,objs);

var G__9579__9580 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9579__9580))
{var obj__9581 = cljs.core.first.call(null,G__9579__9580);
var G__9579__9582 = G__9579__9580;

while(true){
if(cljs.core.truth_((obj__9581 === first_obj__9578)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9583__9584 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9581,opts));

if(cljs.core.truth_(G__9583__9584))
{var string__9585 = cljs.core.first.call(null,G__9583__9584);
var G__9583__9586 = G__9583__9584;

while(true){
cljs.core.string_print.call(null,string__9585);
var temp__3698__auto____9587 = cljs.core.next.call(null,G__9583__9586);

if(cljs.core.truth_(temp__3698__auto____9587))
{var G__9583__9588 = temp__3698__auto____9587;

{
var G__9591 = cljs.core.first.call(null,G__9583__9588);
var G__9592 = G__9583__9588;
string__9585 = G__9591;
G__9583__9586 = G__9592;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9589 = cljs.core.next.call(null,G__9579__9582);

if(cljs.core.truth_(temp__3698__auto____9589))
{var G__9579__9590 = temp__3698__auto____9589;

{
var G__9593 = cljs.core.first.call(null,G__9579__9590);
var G__9594 = G__9579__9590;
obj__9581 = G__9593;
G__9579__9582 = G__9594;
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
pr_str.cljs$lang$applyTo = (function (arglist__9595){
var objs = cljs.core.seq( arglist__9595 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__9596){
var objs = cljs.core.seq( arglist__9596 );;
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
pr.cljs$lang$applyTo = (function (arglist__9597){
var objs = cljs.core.seq( arglist__9597 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9598){
var objs = cljs.core.seq( arglist__9598 );;
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
print_str.cljs$lang$applyTo = (function (arglist__9599){
var objs = cljs.core.seq( arglist__9599 );;
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
println.cljs$lang$applyTo = (function (arglist__9600){
var objs = cljs.core.seq( arglist__9600 );;
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
println_str.cljs$lang$applyTo = (function (arglist__9601){
var objs = cljs.core.seq( arglist__9601 );;
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
prn.cljs$lang$applyTo = (function (arglist__9602){
var objs = cljs.core.seq( arglist__9602 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9603 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9603,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9604 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9604))
{var nspc__9605 = temp__3698__auto____9604;

return cljs.core.str.call(null,nspc__9605,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9606 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9606))
{var nspc__9607 = temp__3698__auto____9606;

return cljs.core.str.call(null,nspc__9607,"/");
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
var pr_pair__9608 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9608,"{",", ","}",opts,coll);
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
var this__9609 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9610 = this;
var G__9611__9612 = cljs.core.seq.call(null,this__9610.watches);

if(cljs.core.truth_(G__9611__9612))
{var G__9614__9616 = cljs.core.first.call(null,G__9611__9612);
var vec__9615__9617 = G__9614__9616;
var key__9618 = cljs.core.nth.call(null,vec__9615__9617,0,null);
var f__9619 = cljs.core.nth.call(null,vec__9615__9617,1,null);
var G__9611__9620 = G__9611__9612;

var G__9614__9621 = G__9614__9616;
var G__9611__9622 = G__9611__9620;

while(true){
var vec__9623__9624 = G__9614__9621;
var key__9625 = cljs.core.nth.call(null,vec__9623__9624,0,null);
var f__9626 = cljs.core.nth.call(null,vec__9623__9624,1,null);
var G__9611__9627 = G__9611__9622;

f__9626.call(null,key__9625,this$,oldval,newval);
var temp__3698__auto____9628 = cljs.core.next.call(null,G__9611__9627);

if(cljs.core.truth_(temp__3698__auto____9628))
{var G__9611__9629 = temp__3698__auto____9628;

{
var G__9636 = cljs.core.first.call(null,G__9611__9629);
var G__9637 = G__9611__9629;
G__9614__9621 = G__9636;
G__9611__9622 = G__9637;
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
var this__9630 = this;
return this$.watches = cljs.core.assoc.call(null,this__9630.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9631 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9631.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9632 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9632.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9633 = this;
return this__9633.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9634 = this;
return this__9634.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9635 = this;
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
var atom__9644 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9645 = (function() { 
var G__9647__delegate = function (x,p__9638){
var map__9639__9640 = p__9638;
var map__9639__9641 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9639__9640))?cljs.core.apply.call(null,cljs.core.hash_map,map__9639__9640):map__9639__9640);
var validator__9642 = cljs.core.get.call(null,map__9639__9641,"\uFDD0'validator");
var meta__9643 = cljs.core.get.call(null,map__9639__9641,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9643,validator__9642,null));
};
var G__9647 = function (x,var_args){
var p__9638 = null;
if (goog.isDef(var_args)) {
  p__9638 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9647__delegate.call(this, x, p__9638);
};
G__9647.cljs$lang$maxFixedArity = 1;
G__9647.cljs$lang$applyTo = (function (arglist__9648){
var x = cljs.core.first(arglist__9648);
var p__9638 = cljs.core.rest(arglist__9648);
return G__9647__delegate.call(this, x, p__9638);
});
return G__9647;
})()
;
atom = function(x,var_args){
var p__9638 = var_args;
switch(arguments.length){
case  1 :
return atom__9644.call(this,x);
default:
return atom__9645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9645.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9649 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9649))
{var validate__9650 = temp__3698__auto____9649;

if(cljs.core.truth_(validate__9650.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9651 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9651,new_value);
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
var swap_BANG___9652 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9653 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9654 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9655 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9656 = (function() { 
var G__9658__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9658 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9658__delegate.call(this, a, f, x, y, z, more);
};
G__9658.cljs$lang$maxFixedArity = 5;
G__9658.cljs$lang$applyTo = (function (arglist__9659){
var a = cljs.core.first(arglist__9659);
var f = cljs.core.first(cljs.core.next(arglist__9659));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9659)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9659))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9659)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9659)))));
return G__9658__delegate.call(this, a, f, x, y, z, more);
});
return G__9658;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9652.call(this,a,f);
case  3 :
return swap_BANG___9653.call(this,a,f,x);
case  4 :
return swap_BANG___9654.call(this,a,f,x,y);
case  5 :
return swap_BANG___9655.call(this,a,f,x,y,z);
default:
return swap_BANG___9656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9656.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9660){
var iref = cljs.core.first(arglist__9660);
var f = cljs.core.first(cljs.core.next(arglist__9660));
var args = cljs.core.rest(cljs.core.next(arglist__9660));
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
var gensym__9661 = (function (){
return gensym.call(null,"G__");
});
var gensym__9662 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9661.call(this);
case  1 :
return gensym__9662.call(this,prefix_string);
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
var this__9664 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9664.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9665 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9665.state,(function (p__9666){
var curr_state__9667 = p__9666;
var curr_state__9668 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9667))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9667):curr_state__9667);
var done__9669 = cljs.core.get.call(null,curr_state__9668,"\uFDD0'done");

if(cljs.core.truth_(done__9669))
{return curr_state__9668;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9665.f.call(null)});
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
var map__9670__9671 = options;
var map__9670__9672 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9670__9671))?cljs.core.apply.call(null,cljs.core.hash_map,map__9670__9671):map__9670__9671);
var keywordize_keys__9673 = cljs.core.get.call(null,map__9670__9672,"\uFDD0'keywordize-keys");
var keyfn__9674 = (cljs.core.truth_(keywordize_keys__9673)?cljs.core.keyword:cljs.core.str);
var f__9680 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____9679 = (function iter__9675(s__9676){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9676__9677 = s__9676;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9676__9677)))
{var k__9678 = cljs.core.first.call(null,s__9676__9677);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9674.call(null,k__9678),thisfn.call(null,(x[k__9678]))]),iter__9675.call(null,cljs.core.rest.call(null,s__9676__9677)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____9679.call(null,cljs.core.js_keys.call(null,x));
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

return f__9680.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9681){
var x = cljs.core.first(arglist__9681);
var options = cljs.core.rest(arglist__9681);
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
var mem__9682 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9686__delegate = function (args){
var temp__3695__auto____9683 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9682),args);

if(cljs.core.truth_(temp__3695__auto____9683))
{var v__9684 = temp__3695__auto____9683;

return v__9684;
} else
{var ret__9685 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9682,cljs.core.assoc,args,ret__9685);
return ret__9685;
}
};
var G__9686 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9686__delegate.call(this, args);
};
G__9686.cljs$lang$maxFixedArity = 0;
G__9686.cljs$lang$applyTo = (function (arglist__9687){
var args = cljs.core.seq( arglist__9687 );;
return G__9686__delegate.call(this, args);
});
return G__9686;
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
var trampoline__9689 = (function (f){
while(true){
var ret__9688 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9688)))
{{
var G__9692 = ret__9688;
f = G__9692;
continue;
}
} else
{return ret__9688;
}
break;
}
});
var trampoline__9690 = (function() { 
var G__9693__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9693 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9693__delegate.call(this, f, args);
};
G__9693.cljs$lang$maxFixedArity = 1;
G__9693.cljs$lang$applyTo = (function (arglist__9694){
var f = cljs.core.first(arglist__9694);
var args = cljs.core.rest(arglist__9694);
return G__9693__delegate.call(this, f, args);
});
return G__9693;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9689.call(this,f);
default:
return trampoline__9690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9690.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9695 = (function (){
return rand.call(null,1);
});
var rand__9696 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9695.call(this);
case  1 :
return rand__9696.call(this,n);
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
var k__9698 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9698,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9698,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___9707 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9708 = (function (h,child,parent){
var or__3548__auto____9699 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9699))
{return or__3548__auto____9699;
} else
{var or__3548__auto____9700 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9700))
{return or__3548__auto____9700;
} else
{var and__3546__auto____9701 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9701))
{var and__3546__auto____9702 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9702))
{var and__3546__auto____9703 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9703))
{var ret__9704 = true;
var i__9705 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9706 = cljs.core.not.call(null,ret__9704);

if(cljs.core.truth_(or__3548__auto____9706))
{return or__3548__auto____9706;
} else
{return cljs.core._EQ_.call(null,i__9705,cljs.core.count.call(null,parent));
}
})()))
{return ret__9704;
} else
{{
var G__9710 = isa_QMARK_.call(null,h,child.call(null,i__9705),parent.call(null,i__9705));
var G__9711 = (i__9705 + 1);
ret__9704 = G__9710;
i__9705 = G__9711;
continue;
}
}
break;
}
} else
{return and__3546__auto____9703;
}
} else
{return and__3546__auto____9702;
}
} else
{return and__3546__auto____9701;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9707.call(this,h,child);
case  3 :
return isa_QMARK___9708.call(this,h,child,parent);
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
var parents__9712 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9713 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9712.call(this,h);
case  2 :
return parents__9713.call(this,h,tag);
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
var ancestors__9715 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9716 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9715.call(this,h);
case  2 :
return ancestors__9716.call(this,h,tag);
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
var descendants__9718 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9719 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9718.call(this,h);
case  2 :
return descendants__9719.call(this,h,tag);
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
var derive__9729 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9730 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9724 = "\uFDD0'parents".call(null,h);
var td__9725 = "\uFDD0'descendants".call(null,h);
var ta__9726 = "\uFDD0'ancestors".call(null,h);
var tf__9727 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9728 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9724.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9726.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9726.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9724,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9727.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9725,parent,ta__9726),"\uFDD0'descendants":tf__9727.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9726,tag,td__9725)});
})());

if(cljs.core.truth_(or__3548__auto____9728))
{return or__3548__auto____9728;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9729.call(this,h,tag);
case  3 :
return derive__9730.call(this,h,tag,parent);
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
var underive__9736 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9737 = (function (h,tag,parent){
var parentMap__9732 = "\uFDD0'parents".call(null,h);
var childsParents__9733 = (cljs.core.truth_(parentMap__9732.call(null,tag))?cljs.core.disj.call(null,parentMap__9732.call(null,tag),parent):cljs.core.set([]));
var newParents__9734 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9733))?cljs.core.assoc.call(null,parentMap__9732,tag,childsParents__9733):cljs.core.dissoc.call(null,parentMap__9732,tag));
var deriv_seq__9735 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9721_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9721_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9721_SHARP_),cljs.core.second.call(null,p1__9721_SHARP_)));
}),cljs.core.seq.call(null,newParents__9734)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9732.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9722_SHARP_,p2__9723_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9722_SHARP_,p2__9723_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9735));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9736.call(this,h,tag);
case  3 :
return underive__9737.call(this,h,tag,parent);
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
var xprefs__9739 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9741 = (cljs.core.truth_((function (){var and__3546__auto____9740 = xprefs__9739;

if(cljs.core.truth_(and__3546__auto____9740))
{return xprefs__9739.call(null,y);
} else
{return and__3546__auto____9740;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9741))
{return or__3548__auto____9741;
} else
{var or__3548__auto____9743 = (function (){var ps__9742 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9742) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9742),prefer_table)))
{} else
{}
{
var G__9746 = cljs.core.rest.call(null,ps__9742);
ps__9742 = G__9746;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9743))
{return or__3548__auto____9743;
} else
{var or__3548__auto____9745 = (function (){var ps__9744 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9744) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9744),y,prefer_table)))
{} else
{}
{
var G__9747 = cljs.core.rest.call(null,ps__9744);
ps__9744 = G__9747;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9745))
{return or__3548__auto____9745;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9748 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9748))
{return or__3548__auto____9748;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9757 = cljs.core.reduce.call(null,(function (be,p__9749){
var vec__9750__9751 = p__9749;
var k__9752 = cljs.core.nth.call(null,vec__9750__9751,0,null);
var ___9753 = cljs.core.nth.call(null,vec__9750__9751,1,null);
var e__9754 = vec__9750__9751;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9752)))
{var be2__9756 = (cljs.core.truth_((function (){var or__3548__auto____9755 = (be === null);

if(cljs.core.truth_(or__3548__auto____9755))
{return or__3548__auto____9755;
} else
{return cljs.core.dominates.call(null,k__9752,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9754:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9756),k__9752,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9752," and ",cljs.core.first.call(null,be2__9756),", and neither is preferred")));
}
return be2__9756;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9757))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9757));
return cljs.core.second.call(null,best_entry__9757);
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
if(cljs.core.truth_((function (){var and__3546__auto____9758 = mf;

if(cljs.core.truth_(and__3546__auto____9758))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9758;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9759 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9759))
{return or__3548__auto____9759;
} else
{var or__3548__auto____9760 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9760))
{return or__3548__auto____9760;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9761 = mf;

if(cljs.core.truth_(and__3546__auto____9761))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9761;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9762 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9762))
{return or__3548__auto____9762;
} else
{var or__3548__auto____9763 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9763))
{return or__3548__auto____9763;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9764 = mf;

if(cljs.core.truth_(and__3546__auto____9764))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9764;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9765 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9765))
{return or__3548__auto____9765;
} else
{var or__3548__auto____9766 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9766))
{return or__3548__auto____9766;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9767 = mf;

if(cljs.core.truth_(and__3546__auto____9767))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9767;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9768 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9768))
{return or__3548__auto____9768;
} else
{var or__3548__auto____9769 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9769))
{return or__3548__auto____9769;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9770 = mf;

if(cljs.core.truth_(and__3546__auto____9770))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9770;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9771 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9771))
{return or__3548__auto____9771;
} else
{var or__3548__auto____9772 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9772))
{return or__3548__auto____9772;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9773 = mf;

if(cljs.core.truth_(and__3546__auto____9773))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9773;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9774 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9774))
{return or__3548__auto____9774;
} else
{var or__3548__auto____9775 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9775))
{return or__3548__auto____9775;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9776 = mf;

if(cljs.core.truth_(and__3546__auto____9776))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9776;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9777 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9777))
{return or__3548__auto____9777;
} else
{var or__3548__auto____9778 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9778))
{return or__3548__auto____9778;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9779 = mf;

if(cljs.core.truth_(and__3546__auto____9779))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____9779;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____9780 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9780))
{return or__3548__auto____9780;
} else
{var or__3548__auto____9781 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____9781))
{return or__3548__auto____9781;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9782 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9783 = cljs.core._get_method.call(null,mf,dispatch_val__9782);

if(cljs.core.truth_(target_fn__9783))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9782)));
}
return cljs.core.apply.call(null,target_fn__9783,args);
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
var this__9784 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9785 = this;
cljs.core.swap_BANG_.call(null,this__9785.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9785.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9785.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9785.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9786 = this;
cljs.core.swap_BANG_.call(null,this__9786.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9786.method_cache,this__9786.method_table,this__9786.cached_hierarchy,this__9786.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9787 = this;
cljs.core.swap_BANG_.call(null,this__9787.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9787.method_cache,this__9787.method_table,this__9787.cached_hierarchy,this__9787.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9788 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9788.cached_hierarchy),cljs.core.deref.call(null,this__9788.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9788.method_cache,this__9788.method_table,this__9788.cached_hierarchy,this__9788.hierarchy);
}
var temp__3695__auto____9789 = cljs.core.deref.call(null,this__9788.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9789))
{var target_fn__9790 = temp__3695__auto____9789;

return target_fn__9790;
} else
{var temp__3695__auto____9791 = cljs.core.find_and_cache_best_method.call(null,this__9788.name,dispatch_val,this__9788.hierarchy,this__9788.method_table,this__9788.prefer_table,this__9788.method_cache,this__9788.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9791))
{var target_fn__9792 = temp__3695__auto____9791;

return target_fn__9792;
} else
{return cljs.core.deref.call(null,this__9788.method_table).call(null,this__9788.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9793 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9793.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9793.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9793.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9793.method_cache,this__9793.method_table,this__9793.cached_hierarchy,this__9793.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9794 = this;
return cljs.core.deref.call(null,this__9794.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9795 = this;
return cljs.core.deref.call(null,this__9795.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9796 = this;
return cljs.core.do_dispatch.call(null,mf,this__9796.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9797__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9797 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9797__delegate.call(this, _, args);
};
G__9797.cljs$lang$maxFixedArity = 1;
G__9797.cljs$lang$applyTo = (function (arglist__9798){
var _ = cljs.core.first(arglist__9798);
var args = cljs.core.rest(arglist__9798);
return G__9797__delegate.call(this, _, args);
});
return G__9797;
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
