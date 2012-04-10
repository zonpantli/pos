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
var or__3548__auto____8047 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8048 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
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
var _invoke__8112 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = this$;

if(cljs.core.truth_(and__3546__auto____8049))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8049;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____8050 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{var or__3548__auto____8051 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__8113 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = this$;

if(cljs.core.truth_(and__3546__auto____8052))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8052;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____8053 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{var or__3548__auto____8054 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__8114 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = this$;

if(cljs.core.truth_(and__3546__auto____8055))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8055;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____8056 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{var or__3548__auto____8057 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__8115 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = this$;

if(cljs.core.truth_(and__3546__auto____8058))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8058;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{var or__3548__auto____8060 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__8116 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____8061 = this$;

if(cljs.core.truth_(and__3546__auto____8061))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8061;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____8062 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{var or__3548__auto____8063 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__8117 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____8064 = this$;

if(cljs.core.truth_(and__3546__auto____8064))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8064;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8066 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__8118 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____8067 = this$;

if(cljs.core.truth_(and__3546__auto____8067))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8067;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____8068 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{var or__3548__auto____8069 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8119 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____8070 = this$;

if(cljs.core.truth_(and__3546__auto____8070))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8070;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____8071 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8072 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__8120 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____8073 = this$;

if(cljs.core.truth_(and__3546__auto____8073))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8073;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____8074 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8075 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__8121 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = this$;

if(cljs.core.truth_(and__3546__auto____8076))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8076;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____8077 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{var or__3548__auto____8078 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__8122 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____8079 = this$;

if(cljs.core.truth_(and__3546__auto____8079))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8079;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____8080 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{var or__3548__auto____8081 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__8123 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = this$;

if(cljs.core.truth_(and__3546__auto____8082))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8082;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__8124 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = this$;

if(cljs.core.truth_(and__3546__auto____8085))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8085;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8087 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__8125 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = this$;

if(cljs.core.truth_(and__3546__auto____8088))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8088;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__8126 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = this$;

if(cljs.core.truth_(and__3546__auto____8091))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8091;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{var or__3548__auto____8093 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__8127 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = this$;

if(cljs.core.truth_(and__3546__auto____8094))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8094;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8096 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__8128 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = this$;

if(cljs.core.truth_(and__3546__auto____8097))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8097;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8099 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__8129 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____8101 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{var or__3548__auto____8102 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__8130 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____8103 = this$;

if(cljs.core.truth_(and__3546__auto____8103))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8103;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8105 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__8131 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____8106 = this$;

if(cljs.core.truth_(and__3546__auto____8106))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8106;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8108 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__8132 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____8109 = this$;

if(cljs.core.truth_(and__3546__auto____8109))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____8109;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
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
return _invoke__8112.call(this,this$);
case  2 :
return _invoke__8113.call(this,this$,a);
case  3 :
return _invoke__8114.call(this,this$,a,b);
case  4 :
return _invoke__8115.call(this,this$,a,b,c);
case  5 :
return _invoke__8116.call(this,this$,a,b,c,d);
case  6 :
return _invoke__8117.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__8118.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__8119.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__8120.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__8121.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__8122.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__8123.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__8124.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__8125.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__8126.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__8127.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__8128.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__8129.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__8130.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__8131.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__8132.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8134 = coll;

if(cljs.core.truth_(and__3546__auto____8134))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____8134;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____8135 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{var or__3548__auto____8136 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8137 = coll;

if(cljs.core.truth_(and__3546__auto____8137))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____8137;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8139 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____8140 = coll;

if(cljs.core.truth_(and__3546__auto____8140))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____8140;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____8141 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{var or__3548__auto____8142 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
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
var _nth__8149 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____8143 = coll;

if(cljs.core.truth_(and__3546__auto____8143))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____8143;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8145 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__8150 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____8146 = coll;

if(cljs.core.truth_(and__3546__auto____8146))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____8146;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____8147 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8148 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
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
return _nth__8149.call(this,coll,n);
case  3 :
return _nth__8150.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8152 = coll;

if(cljs.core.truth_(and__3546__auto____8152))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____8152;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8154 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8155 = coll;

if(cljs.core.truth_(and__3546__auto____8155))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____8155;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____8156 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
} else
{var or__3548__auto____8157 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
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
var _lookup__8164 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____8158 = o;

if(cljs.core.truth_(and__3546__auto____8158))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____8158;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____8159 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{var or__3548__auto____8160 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__8165 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____8161 = o;

if(cljs.core.truth_(and__3546__auto____8161))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____8161;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____8162 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{var or__3548__auto____8163 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____8163))
{return or__3548__auto____8163;
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
return _lookup__8164.call(this,o,k);
case  3 :
return _lookup__8165.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8167 = coll;

if(cljs.core.truth_(and__3546__auto____8167))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____8167;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____8168 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8169 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8170 = coll;

if(cljs.core.truth_(and__3546__auto____8170))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8170;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8171 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8171))
{return or__3548__auto____8171;
} else
{var or__3548__auto____8172 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8173 = coll;

if(cljs.core.truth_(and__3546__auto____8173))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8173;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8174 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8174))
{return or__3548__auto____8174;
} else
{var or__3548__auto____8175 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8176 = coll;

if(cljs.core.truth_(and__3546__auto____8176))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8176;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8177 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
} else
{var or__3548__auto____8178 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8178))
{return or__3548__auto____8178;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8179 = coll;

if(cljs.core.truth_(and__3546__auto____8179))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8179;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8180 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8180))
{return or__3548__auto____8180;
} else
{var or__3548__auto____8181 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8182 = coll;

if(cljs.core.truth_(and__3546__auto____8182))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8182;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8183 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8183))
{return or__3548__auto____8183;
} else
{var or__3548__auto____8184 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8185 = coll;

if(cljs.core.truth_(and__3546__auto____8185))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8185;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8186 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{var or__3548__auto____8187 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8187))
{return or__3548__auto____8187;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8188 = o;

if(cljs.core.truth_(and__3546__auto____8188))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8188;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8189 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
} else
{var or__3548__auto____8190 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8190))
{return or__3548__auto____8190;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8191 = o;

if(cljs.core.truth_(and__3546__auto____8191))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8191;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8192 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8192))
{return or__3548__auto____8192;
} else
{var or__3548__auto____8193 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8193))
{return or__3548__auto____8193;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8194 = o;

if(cljs.core.truth_(and__3546__auto____8194))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8194;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8195 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8195))
{return or__3548__auto____8195;
} else
{var or__3548__auto____8196 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8196))
{return or__3548__auto____8196;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8197 = o;

if(cljs.core.truth_(and__3546__auto____8197))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8197;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8198 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8198))
{return or__3548__auto____8198;
} else
{var or__3548__auto____8199 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8199))
{return or__3548__auto____8199;
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
var _reduce__8206 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8200 = coll;

if(cljs.core.truth_(and__3546__auto____8200))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8200;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8201 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8201))
{return or__3548__auto____8201;
} else
{var or__3548__auto____8202 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8202))
{return or__3548__auto____8202;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8207 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8203 = coll;

if(cljs.core.truth_(and__3546__auto____8203))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8203;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8204 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8204))
{return or__3548__auto____8204;
} else
{var or__3548__auto____8205 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8205))
{return or__3548__auto____8205;
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
return _reduce__8206.call(this,coll,f);
case  3 :
return _reduce__8207.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8209 = o;

if(cljs.core.truth_(and__3546__auto____8209))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8209;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8210 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{var or__3548__auto____8211 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8211))
{return or__3548__auto____8211;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8212 = o;

if(cljs.core.truth_(and__3546__auto____8212))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8212;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8213 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8213))
{return or__3548__auto____8213;
} else
{var or__3548__auto____8214 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8214))
{return or__3548__auto____8214;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8215 = o;

if(cljs.core.truth_(and__3546__auto____8215))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8215;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8216 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8216))
{return or__3548__auto____8216;
} else
{var or__3548__auto____8217 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8217))
{return or__3548__auto____8217;
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
if(cljs.core.truth_((function (){var and__3546__auto____8218 = o;

if(cljs.core.truth_(and__3546__auto____8218))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8218;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8219 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8219))
{return or__3548__auto____8219;
} else
{var or__3548__auto____8220 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8220))
{return or__3548__auto____8220;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8221 = d;

if(cljs.core.truth_(and__3546__auto____8221))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8221;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8222 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8222))
{return or__3548__auto____8222;
} else
{var or__3548__auto____8223 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8223))
{return or__3548__auto____8223;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8224 = this$;

if(cljs.core.truth_(and__3546__auto____8224))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8224;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8225 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
} else
{var or__3548__auto____8226 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8226))
{return or__3548__auto____8226;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8227 = this$;

if(cljs.core.truth_(and__3546__auto____8227))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8227;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8228 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8228))
{return or__3548__auto____8228;
} else
{var or__3548__auto____8229 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8229))
{return or__3548__auto____8229;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8230 = this$;

if(cljs.core.truth_(and__3546__auto____8230))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8230;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8231 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8231))
{return or__3548__auto____8231;
} else
{var or__3548__auto____8232 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8232))
{return or__3548__auto____8232;
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
var G__8233 = null;
var G__8233__8234 = (function (o,k){
return null;
});
var G__8233__8235 = (function (o,k,not_found){
return not_found;
});
G__8233 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8233__8234.call(this,o,k);
case  3 :
return G__8233__8235.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8233;
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
var G__8237 = null;
var G__8237__8238 = (function (_,f){
return f.call(null);
});
var G__8237__8239 = (function (_,f,start){
return start;
});
G__8237 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8237__8238.call(this,_,f);
case  3 :
return G__8237__8239.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8237;
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
var G__8241 = null;
var G__8241__8242 = (function (_,n){
return null;
});
var G__8241__8243 = (function (_,n,not_found){
return not_found;
});
G__8241 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8241__8242.call(this,_,n);
case  3 :
return G__8241__8243.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8241;
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
var ci_reduce__8251 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8245 = cljs.core._nth.call(null,cicoll,0);
var n__8246 = 1;

while(true){
if(cljs.core.truth_((n__8246 < cljs.core._count.call(null,cicoll))))
{{
var G__8255 = f.call(null,val__8245,cljs.core._nth.call(null,cicoll,n__8246));
var G__8256 = (n__8246 + 1);
val__8245 = G__8255;
n__8246 = G__8256;
continue;
}
} else
{return val__8245;
}
break;
}
}
});
var ci_reduce__8252 = (function (cicoll,f,val){
var val__8247 = val;
var n__8248 = 0;

while(true){
if(cljs.core.truth_((n__8248 < cljs.core._count.call(null,cicoll))))
{{
var G__8257 = f.call(null,val__8247,cljs.core._nth.call(null,cicoll,n__8248));
var G__8258 = (n__8248 + 1);
val__8247 = G__8257;
n__8248 = G__8258;
continue;
}
} else
{return val__8247;
}
break;
}
});
var ci_reduce__8253 = (function (cicoll,f,val,idx){
var val__8249 = val;
var n__8250 = idx;

while(true){
if(cljs.core.truth_((n__8250 < cljs.core._count.call(null,cicoll))))
{{
var G__8259 = f.call(null,val__8249,cljs.core._nth.call(null,cicoll,n__8250));
var G__8260 = (n__8250 + 1);
val__8249 = G__8259;
n__8250 = G__8260;
continue;
}
} else
{return val__8249;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8251.call(this,cicoll,f);
case  3 :
return ci_reduce__8252.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8253.call(this,cicoll,f,val,idx);
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
var this__8261 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8274 = null;
var G__8274__8275 = (function (_,f){
var this__8262 = this;
return cljs.core.ci_reduce.call(null,this__8262.a,f,(this__8262.a[this__8262.i]),(this__8262.i + 1));
});
var G__8274__8276 = (function (_,f,start){
var this__8263 = this;
return cljs.core.ci_reduce.call(null,this__8263.a,f,start,this__8263.i);
});
G__8274 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8274__8275.call(this,_,f);
case  3 :
return G__8274__8276.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8274;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8264 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8278 = null;
var G__8278__8279 = (function (coll,n){
var this__8266 = this;
var i__8267 = (n + this__8266.i);

if(cljs.core.truth_((i__8267 < this__8266.a.length)))
{return (this__8266.a[i__8267]);
} else
{return null;
}
});
var G__8278__8280 = (function (coll,n,not_found){
var this__8268 = this;
var i__8269 = (n + this__8268.i);

if(cljs.core.truth_((i__8269 < this__8268.a.length)))
{return (this__8268.a[i__8269]);
} else
{return not_found;
}
});
G__8278 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8278__8279.call(this,coll,n);
case  3 :
return G__8278__8280.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8278;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8270 = this;
return (this__8270.a.length - this__8270.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8271 = this;
return (this__8271.a[this__8271.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8272 = this;
if(cljs.core.truth_(((this__8272.i + 1) < this__8272.a.length)))
{return (new cljs.core.IndexedSeq(this__8272.a,(this__8272.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8273 = this;
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
var G__8282 = null;
var G__8282__8283 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8282__8284 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8282 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8282__8283.call(this,array,f);
case  3 :
return G__8282__8284.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8282;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8286 = null;
var G__8286__8287 = (function (array,k){
return (array[k]);
});
var G__8286__8288 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8286 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8286__8287.call(this,array,k);
case  3 :
return G__8286__8288.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8286;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8290 = null;
var G__8290__8291 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8290__8292 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8290 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8290__8291.call(this,array,n);
case  3 :
return G__8290__8292.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8290;
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
var temp__3698__auto____8294 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8294))
{var s__8295 = temp__3698__auto____8294;

return cljs.core._first.call(null,s__8295);
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
var G__8296 = cljs.core.next.call(null,s);
s = G__8296;
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
var s__8297 = cljs.core.seq.call(null,x);
var n__8298 = 0;

while(true){
if(cljs.core.truth_(s__8297))
{{
var G__8299 = cljs.core.next.call(null,s__8297);
var G__8300 = (n__8298 + 1);
s__8297 = G__8299;
n__8298 = G__8300;
continue;
}
} else
{return n__8298;
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
var conj__8301 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8302 = (function() { 
var G__8304__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8305 = conj.call(null,coll,x);
var G__8306 = cljs.core.first.call(null,xs);
var G__8307 = cljs.core.next.call(null,xs);
coll = G__8305;
x = G__8306;
xs = G__8307;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8304 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8304__delegate.call(this, coll, x, xs);
};
G__8304.cljs$lang$maxFixedArity = 2;
G__8304.cljs$lang$applyTo = (function (arglist__8308){
var coll = cljs.core.first(arglist__8308);
var x = cljs.core.first(cljs.core.next(arglist__8308));
var xs = cljs.core.rest(cljs.core.next(arglist__8308));
return G__8304__delegate.call(this, coll, x, xs);
});
return G__8304;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8301.call(this,coll,x);
default:
return conj__8302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8302.cljs$lang$applyTo;
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
var nth__8309 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8310 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8309.call(this,coll,n);
case  3 :
return nth__8310.call(this,coll,n,not_found);
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
var get__8312 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8313 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8312.call(this,o,k);
case  3 :
return get__8313.call(this,o,k,not_found);
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
var assoc__8316 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8317 = (function() { 
var G__8319__delegate = function (coll,k,v,kvs){
while(true){
var ret__8315 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8320 = ret__8315;
var G__8321 = cljs.core.first.call(null,kvs);
var G__8322 = cljs.core.second.call(null,kvs);
var G__8323 = cljs.core.nnext.call(null,kvs);
coll = G__8320;
k = G__8321;
v = G__8322;
kvs = G__8323;
continue;
}
} else
{return ret__8315;
}
break;
}
};
var G__8319 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8319__delegate.call(this, coll, k, v, kvs);
};
G__8319.cljs$lang$maxFixedArity = 3;
G__8319.cljs$lang$applyTo = (function (arglist__8324){
var coll = cljs.core.first(arglist__8324);
var k = cljs.core.first(cljs.core.next(arglist__8324));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8324)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8324)));
return G__8319__delegate.call(this, coll, k, v, kvs);
});
return G__8319;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8316.call(this,coll,k,v);
default:
return assoc__8317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8317.cljs$lang$applyTo;
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
var dissoc__8326 = (function (coll){
return coll;
});
var dissoc__8327 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8328 = (function() { 
var G__8330__delegate = function (coll,k,ks){
while(true){
var ret__8325 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8331 = ret__8325;
var G__8332 = cljs.core.first.call(null,ks);
var G__8333 = cljs.core.next.call(null,ks);
coll = G__8331;
k = G__8332;
ks = G__8333;
continue;
}
} else
{return ret__8325;
}
break;
}
};
var G__8330 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8330__delegate.call(this, coll, k, ks);
};
G__8330.cljs$lang$maxFixedArity = 2;
G__8330.cljs$lang$applyTo = (function (arglist__8334){
var coll = cljs.core.first(arglist__8334);
var k = cljs.core.first(cljs.core.next(arglist__8334));
var ks = cljs.core.rest(cljs.core.next(arglist__8334));
return G__8330__delegate.call(this, coll, k, ks);
});
return G__8330;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8326.call(this,coll);
case  2 :
return dissoc__8327.call(this,coll,k);
default:
return dissoc__8328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8328.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____8335 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8336 = x__3028__auto____8335;

if(cljs.core.truth_(and__3546__auto____8336))
{var and__3546__auto____8337 = x__3028__auto____8335.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8337))
{return cljs.core.not.call(null,x__3028__auto____8335.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8337;
}
} else
{return and__3546__auto____8336;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____8335);
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
var disj__8339 = (function (coll){
return coll;
});
var disj__8340 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8341 = (function() { 
var G__8343__delegate = function (coll,k,ks){
while(true){
var ret__8338 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8344 = ret__8338;
var G__8345 = cljs.core.first.call(null,ks);
var G__8346 = cljs.core.next.call(null,ks);
coll = G__8344;
k = G__8345;
ks = G__8346;
continue;
}
} else
{return ret__8338;
}
break;
}
};
var G__8343 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8343__delegate.call(this, coll, k, ks);
};
G__8343.cljs$lang$maxFixedArity = 2;
G__8343.cljs$lang$applyTo = (function (arglist__8347){
var coll = cljs.core.first(arglist__8347);
var k = cljs.core.first(cljs.core.next(arglist__8347));
var ks = cljs.core.rest(cljs.core.next(arglist__8347));
return G__8343__delegate.call(this, coll, k, ks);
});
return G__8343;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8339.call(this,coll);
case  2 :
return disj__8340.call(this,coll,k);
default:
return disj__8341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8341.cljs$lang$applyTo;
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
{var x__3028__auto____8348 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8349 = x__3028__auto____8348;

if(cljs.core.truth_(and__3546__auto____8349))
{var and__3546__auto____8350 = x__3028__auto____8348.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8350))
{return cljs.core.not.call(null,x__3028__auto____8348.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8350;
}
} else
{return and__3546__auto____8349;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____8348);
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
{var x__3028__auto____8351 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8352 = x__3028__auto____8351;

if(cljs.core.truth_(and__3546__auto____8352))
{var and__3546__auto____8353 = x__3028__auto____8351.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8353))
{return cljs.core.not.call(null,x__3028__auto____8351.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8353;
}
} else
{return and__3546__auto____8352;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____8351);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____8354 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8355 = x__3028__auto____8354;

if(cljs.core.truth_(and__3546__auto____8355))
{var and__3546__auto____8356 = x__3028__auto____8354.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8356))
{return cljs.core.not.call(null,x__3028__auto____8354.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8356;
}
} else
{return and__3546__auto____8355;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____8354);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____8357 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8358 = x__3028__auto____8357;

if(cljs.core.truth_(and__3546__auto____8358))
{var and__3546__auto____8359 = x__3028__auto____8357.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8359))
{return cljs.core.not.call(null,x__3028__auto____8357.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8359;
}
} else
{return and__3546__auto____8358;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____8357);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____8360 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8361 = x__3028__auto____8360;

if(cljs.core.truth_(and__3546__auto____8361))
{var and__3546__auto____8362 = x__3028__auto____8360.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8362))
{return cljs.core.not.call(null,x__3028__auto____8360.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8362;
}
} else
{return and__3546__auto____8361;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____8360);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____8363 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8364 = x__3028__auto____8363;

if(cljs.core.truth_(and__3546__auto____8364))
{var and__3546__auto____8365 = x__3028__auto____8363.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8365))
{return cljs.core.not.call(null,x__3028__auto____8363.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8365;
}
} else
{return and__3546__auto____8364;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____8363);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____8366 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8367 = x__3028__auto____8366;

if(cljs.core.truth_(and__3546__auto____8367))
{var and__3546__auto____8368 = x__3028__auto____8366.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8368))
{return cljs.core.not.call(null,x__3028__auto____8366.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8368;
}
} else
{return and__3546__auto____8367;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____8366);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8369 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8369.push(key);
}));
return keys__8369;
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
{var x__3028__auto____8370 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8371 = x__3028__auto____8370;

if(cljs.core.truth_(and__3546__auto____8371))
{var and__3546__auto____8372 = x__3028__auto____8370.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8372))
{return cljs.core.not.call(null,x__3028__auto____8370.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8372;
}
} else
{return and__3546__auto____8371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____8370);
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
var and__3546__auto____8373 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8373))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8374 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____8374))
{return or__3548__auto____8374;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____8373;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8375 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8375))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____8375;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8376 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8376))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____8376;
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
var and__3546__auto____8377 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8377))
{return (n == n.toFixed());
} else
{return and__3546__auto____8377;
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
if(cljs.core.truth_((function (){var and__3546__auto____8378 = coll;

if(cljs.core.truth_(and__3546__auto____8378))
{var and__3546__auto____8379 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8379))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8379;
}
} else
{return and__3546__auto____8378;
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
var distinct_QMARK___8384 = (function (x){
return true;
});
var distinct_QMARK___8385 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8386 = (function() { 
var G__8388__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8380 = cljs.core.set([y,x]);
var xs__8381 = more;

while(true){
var x__8382 = cljs.core.first.call(null,xs__8381);
var etc__8383 = cljs.core.next.call(null,xs__8381);

if(cljs.core.truth_(xs__8381))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8380,x__8382)))
{return false;
} else
{{
var G__8389 = cljs.core.conj.call(null,s__8380,x__8382);
var G__8390 = etc__8383;
s__8380 = G__8389;
xs__8381 = G__8390;
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
var G__8388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8388__delegate.call(this, x, y, more);
};
G__8388.cljs$lang$maxFixedArity = 2;
G__8388.cljs$lang$applyTo = (function (arglist__8391){
var x = cljs.core.first(arglist__8391);
var y = cljs.core.first(cljs.core.next(arglist__8391));
var more = cljs.core.rest(cljs.core.next(arglist__8391));
return G__8388__delegate.call(this, x, y, more);
});
return G__8388;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8384.call(this,x);
case  2 :
return distinct_QMARK___8385.call(this,x,y);
default:
return distinct_QMARK___8386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8386.cljs$lang$applyTo;
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
var r__8392 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8392)))
{return r__8392;
} else
{if(cljs.core.truth_(r__8392))
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
var sort__8394 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8395 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8393 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8393,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8393);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8394.call(this,comp);
case  2 :
return sort__8395.call(this,comp,coll);
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
var sort_by__8397 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8398 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8397.call(this,keyfn,comp);
case  3 :
return sort_by__8398.call(this,keyfn,comp,coll);
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
var reduce__8400 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8401 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8400.call(this,f,val);
case  3 :
return reduce__8401.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8407 = (function (f,coll){
var temp__3695__auto____8403 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8403))
{var s__8404 = temp__3695__auto____8403;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8404),cljs.core.next.call(null,s__8404));
} else
{return f.call(null);
}
});
var seq_reduce__8408 = (function (f,val,coll){
var val__8405 = val;
var coll__8406 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8406))
{{
var G__8410 = f.call(null,val__8405,cljs.core.first.call(null,coll__8406));
var G__8411 = cljs.core.next.call(null,coll__8406);
val__8405 = G__8410;
coll__8406 = G__8411;
continue;
}
} else
{return val__8405;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8407.call(this,f,val);
case  3 :
return seq_reduce__8408.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8412 = null;
var G__8412__8413 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8412__8414 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8412 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8412__8413.call(this,coll,f);
case  3 :
return G__8412__8414.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8412;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8416 = (function (){
return 0;
});
var _PLUS___8417 = (function (x){
return x;
});
var _PLUS___8418 = (function (x,y){
return (x + y);
});
var _PLUS___8419 = (function() { 
var G__8421__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8421__delegate.call(this, x, y, more);
};
G__8421.cljs$lang$maxFixedArity = 2;
G__8421.cljs$lang$applyTo = (function (arglist__8422){
var x = cljs.core.first(arglist__8422);
var y = cljs.core.first(cljs.core.next(arglist__8422));
var more = cljs.core.rest(cljs.core.next(arglist__8422));
return G__8421__delegate.call(this, x, y, more);
});
return G__8421;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8416.call(this);
case  1 :
return _PLUS___8417.call(this,x);
case  2 :
return _PLUS___8418.call(this,x,y);
default:
return _PLUS___8419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8419.cljs$lang$applyTo;
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
var ___8423 = (function (x){
return (- x);
});
var ___8424 = (function (x,y){
return (x - y);
});
var ___8425 = (function() { 
var G__8427__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8427__delegate.call(this, x, y, more);
};
G__8427.cljs$lang$maxFixedArity = 2;
G__8427.cljs$lang$applyTo = (function (arglist__8428){
var x = cljs.core.first(arglist__8428);
var y = cljs.core.first(cljs.core.next(arglist__8428));
var more = cljs.core.rest(cljs.core.next(arglist__8428));
return G__8427__delegate.call(this, x, y, more);
});
return G__8427;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8423.call(this,x);
case  2 :
return ___8424.call(this,x,y);
default:
return ___8425.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8425.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8429 = (function (){
return 1;
});
var _STAR___8430 = (function (x){
return x;
});
var _STAR___8431 = (function (x,y){
return (x * y);
});
var _STAR___8432 = (function() { 
var G__8434__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8434__delegate.call(this, x, y, more);
};
G__8434.cljs$lang$maxFixedArity = 2;
G__8434.cljs$lang$applyTo = (function (arglist__8435){
var x = cljs.core.first(arglist__8435);
var y = cljs.core.first(cljs.core.next(arglist__8435));
var more = cljs.core.rest(cljs.core.next(arglist__8435));
return G__8434__delegate.call(this, x, y, more);
});
return G__8434;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8429.call(this);
case  1 :
return _STAR___8430.call(this,x);
case  2 :
return _STAR___8431.call(this,x,y);
default:
return _STAR___8432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8432.cljs$lang$applyTo;
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
var _SLASH___8436 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8437 = (function (x,y){
return (x / y);
});
var _SLASH___8438 = (function() { 
var G__8440__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8440 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8440__delegate.call(this, x, y, more);
};
G__8440.cljs$lang$maxFixedArity = 2;
G__8440.cljs$lang$applyTo = (function (arglist__8441){
var x = cljs.core.first(arglist__8441);
var y = cljs.core.first(cljs.core.next(arglist__8441));
var more = cljs.core.rest(cljs.core.next(arglist__8441));
return G__8440__delegate.call(this, x, y, more);
});
return G__8440;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8436.call(this,x);
case  2 :
return _SLASH___8437.call(this,x,y);
default:
return _SLASH___8438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8438.cljs$lang$applyTo;
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
var _LT___8442 = (function (x){
return true;
});
var _LT___8443 = (function (x,y){
return (x < y);
});
var _LT___8444 = (function() { 
var G__8446__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8447 = y;
var G__8448 = cljs.core.first.call(null,more);
var G__8449 = cljs.core.next.call(null,more);
x = G__8447;
y = G__8448;
more = G__8449;
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
var G__8446 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8446__delegate.call(this, x, y, more);
};
G__8446.cljs$lang$maxFixedArity = 2;
G__8446.cljs$lang$applyTo = (function (arglist__8450){
var x = cljs.core.first(arglist__8450);
var y = cljs.core.first(cljs.core.next(arglist__8450));
var more = cljs.core.rest(cljs.core.next(arglist__8450));
return G__8446__delegate.call(this, x, y, more);
});
return G__8446;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8442.call(this,x);
case  2 :
return _LT___8443.call(this,x,y);
default:
return _LT___8444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8444.cljs$lang$applyTo;
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
var _LT__EQ___8451 = (function (x){
return true;
});
var _LT__EQ___8452 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8453 = (function() { 
var G__8455__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8456 = y;
var G__8457 = cljs.core.first.call(null,more);
var G__8458 = cljs.core.next.call(null,more);
x = G__8456;
y = G__8457;
more = G__8458;
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
var G__8455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8455__delegate.call(this, x, y, more);
};
G__8455.cljs$lang$maxFixedArity = 2;
G__8455.cljs$lang$applyTo = (function (arglist__8459){
var x = cljs.core.first(arglist__8459);
var y = cljs.core.first(cljs.core.next(arglist__8459));
var more = cljs.core.rest(cljs.core.next(arglist__8459));
return G__8455__delegate.call(this, x, y, more);
});
return G__8455;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8451.call(this,x);
case  2 :
return _LT__EQ___8452.call(this,x,y);
default:
return _LT__EQ___8453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8453.cljs$lang$applyTo;
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
var _GT___8460 = (function (x){
return true;
});
var _GT___8461 = (function (x,y){
return (x > y);
});
var _GT___8462 = (function() { 
var G__8464__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8465 = y;
var G__8466 = cljs.core.first.call(null,more);
var G__8467 = cljs.core.next.call(null,more);
x = G__8465;
y = G__8466;
more = G__8467;
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
var G__8464 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8464__delegate.call(this, x, y, more);
};
G__8464.cljs$lang$maxFixedArity = 2;
G__8464.cljs$lang$applyTo = (function (arglist__8468){
var x = cljs.core.first(arglist__8468);
var y = cljs.core.first(cljs.core.next(arglist__8468));
var more = cljs.core.rest(cljs.core.next(arglist__8468));
return G__8464__delegate.call(this, x, y, more);
});
return G__8464;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8460.call(this,x);
case  2 :
return _GT___8461.call(this,x,y);
default:
return _GT___8462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8462.cljs$lang$applyTo;
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
var _GT__EQ___8469 = (function (x){
return true;
});
var _GT__EQ___8470 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8471 = (function() { 
var G__8473__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8474 = y;
var G__8475 = cljs.core.first.call(null,more);
var G__8476 = cljs.core.next.call(null,more);
x = G__8474;
y = G__8475;
more = G__8476;
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
var G__8473 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8473__delegate.call(this, x, y, more);
};
G__8473.cljs$lang$maxFixedArity = 2;
G__8473.cljs$lang$applyTo = (function (arglist__8477){
var x = cljs.core.first(arglist__8477);
var y = cljs.core.first(cljs.core.next(arglist__8477));
var more = cljs.core.rest(cljs.core.next(arglist__8477));
return G__8473__delegate.call(this, x, y, more);
});
return G__8473;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8469.call(this,x);
case  2 :
return _GT__EQ___8470.call(this,x,y);
default:
return _GT__EQ___8471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8471.cljs$lang$applyTo;
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
var max__8478 = (function (x){
return x;
});
var max__8479 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8480 = (function() { 
var G__8482__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8482 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8482__delegate.call(this, x, y, more);
};
G__8482.cljs$lang$maxFixedArity = 2;
G__8482.cljs$lang$applyTo = (function (arglist__8483){
var x = cljs.core.first(arglist__8483);
var y = cljs.core.first(cljs.core.next(arglist__8483));
var more = cljs.core.rest(cljs.core.next(arglist__8483));
return G__8482__delegate.call(this, x, y, more);
});
return G__8482;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8478.call(this,x);
case  2 :
return max__8479.call(this,x,y);
default:
return max__8480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8480.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8484 = (function (x){
return x;
});
var min__8485 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8486 = (function() { 
var G__8488__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8488 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8488__delegate.call(this, x, y, more);
};
G__8488.cljs$lang$maxFixedArity = 2;
G__8488.cljs$lang$applyTo = (function (arglist__8489){
var x = cljs.core.first(arglist__8489);
var y = cljs.core.first(cljs.core.next(arglist__8489));
var more = cljs.core.rest(cljs.core.next(arglist__8489));
return G__8488__delegate.call(this, x, y, more);
});
return G__8488;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8484.call(this,x);
case  2 :
return min__8485.call(this,x,y);
default:
return min__8486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8486.cljs$lang$applyTo;
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
var rem__8490 = (n % d);

return cljs.core.fix.call(null,((n - rem__8490) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8491 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8491));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8492 = (function (){
return Math.random.call(null);
});
var rand__8493 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8492.call(this);
case  1 :
return rand__8493.call(this,n);
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
var _EQ__EQ___8495 = (function (x){
return true;
});
var _EQ__EQ___8496 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8497 = (function() { 
var G__8499__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8500 = y;
var G__8501 = cljs.core.first.call(null,more);
var G__8502 = cljs.core.next.call(null,more);
x = G__8500;
y = G__8501;
more = G__8502;
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
var G__8499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8499__delegate.call(this, x, y, more);
};
G__8499.cljs$lang$maxFixedArity = 2;
G__8499.cljs$lang$applyTo = (function (arglist__8503){
var x = cljs.core.first(arglist__8503);
var y = cljs.core.first(cljs.core.next(arglist__8503));
var more = cljs.core.rest(cljs.core.next(arglist__8503));
return G__8499__delegate.call(this, x, y, more);
});
return G__8499;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8495.call(this,x);
case  2 :
return _EQ__EQ___8496.call(this,x,y);
default:
return _EQ__EQ___8497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8497.cljs$lang$applyTo;
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
var n__8504 = n;
var xs__8505 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8506 = xs__8505;

if(cljs.core.truth_(and__3546__auto____8506))
{return (n__8504 > 0);
} else
{return and__3546__auto____8506;
}
})()))
{{
var G__8507 = (n__8504 - 1);
var G__8508 = cljs.core.next.call(null,xs__8505);
n__8504 = G__8507;
xs__8505 = G__8508;
continue;
}
} else
{return xs__8505;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8513 = null;
var G__8513__8514 = (function (coll,n){
var temp__3695__auto____8509 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8509))
{var xs__8510 = temp__3695__auto____8509;

return cljs.core.first.call(null,xs__8510);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8513__8515 = (function (coll,n,not_found){
var temp__3695__auto____8511 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8511))
{var xs__8512 = temp__3695__auto____8511;

return cljs.core.first.call(null,xs__8512);
} else
{return not_found;
}
});
G__8513 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8513__8514.call(this,coll,n);
case  3 :
return G__8513__8515.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8513;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8517 = (function (){
return "";
});
var str_STAR___8518 = (function (x){
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
var str_STAR___8519 = (function() { 
var G__8521__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8522 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8523 = cljs.core.next.call(null,more);
sb = G__8522;
more = G__8523;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8521 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8521__delegate.call(this, x, ys);
};
G__8521.cljs$lang$maxFixedArity = 1;
G__8521.cljs$lang$applyTo = (function (arglist__8524){
var x = cljs.core.first(arglist__8524);
var ys = cljs.core.rest(arglist__8524);
return G__8521__delegate.call(this, x, ys);
});
return G__8521;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8517.call(this);
case  1 :
return str_STAR___8518.call(this,x);
default:
return str_STAR___8519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8519.cljs$lang$applyTo;
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
var str__8525 = (function (){
return "";
});
var str__8526 = (function (x){
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
var str__8527 = (function() { 
var G__8529__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8530 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8531 = cljs.core.next.call(null,more);
sb = G__8530;
more = G__8531;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8529 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8529__delegate.call(this, x, ys);
};
G__8529.cljs$lang$maxFixedArity = 1;
G__8529.cljs$lang$applyTo = (function (arglist__8532){
var x = cljs.core.first(arglist__8532);
var ys = cljs.core.rest(arglist__8532);
return G__8529__delegate.call(this, x, ys);
});
return G__8529;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8525.call(this);
case  1 :
return str__8526.call(this,x);
default:
return str__8527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8527.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8533 = (function (s,start){
return s.substring(start);
});
var subs__8534 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8533.call(this,s,start);
case  3 :
return subs__8534.call(this,s,start,end);
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
var symbol__8536 = (function (name){
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
var symbol__8537 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8536.call(this,ns);
case  2 :
return symbol__8537.call(this,ns,name);
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
var keyword__8539 = (function (name){
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
var keyword__8540 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8539.call(this,ns);
case  2 :
return keyword__8540.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8542 = cljs.core.seq.call(null,x);
var ys__8543 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8542 === null)))
{return (ys__8543 === null);
} else
{if(cljs.core.truth_((ys__8543 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8542),cljs.core.first.call(null,ys__8543))))
{{
var G__8544 = cljs.core.next.call(null,xs__8542);
var G__8545 = cljs.core.next.call(null,ys__8543);
xs__8542 = G__8544;
ys__8543 = G__8545;
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
return cljs.core.reduce.call(null,(function (p1__8546_SHARP_,p2__8547_SHARP_){
return cljs.core.hash_combine.call(null,p1__8546_SHARP_,cljs.core.hash.call(null,p2__8547_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8548__8549 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8548__8549))
{var G__8551__8553 = cljs.core.first.call(null,G__8548__8549);
var vec__8552__8554 = G__8551__8553;
var key_name__8555 = cljs.core.nth.call(null,vec__8552__8554,0,null);
var f__8556 = cljs.core.nth.call(null,vec__8552__8554,1,null);
var G__8548__8557 = G__8548__8549;

var G__8551__8558 = G__8551__8553;
var G__8548__8559 = G__8548__8557;

while(true){
var vec__8560__8561 = G__8551__8558;
var key_name__8562 = cljs.core.nth.call(null,vec__8560__8561,0,null);
var f__8563 = cljs.core.nth.call(null,vec__8560__8561,1,null);
var G__8548__8564 = G__8548__8559;

var str_name__8565 = cljs.core.name.call(null,key_name__8562);

obj[str_name__8565] = f__8563;
var temp__3698__auto____8566 = cljs.core.next.call(null,G__8548__8564);

if(cljs.core.truth_(temp__3698__auto____8566))
{var G__8548__8567 = temp__3698__auto____8566;

{
var G__8568 = cljs.core.first.call(null,G__8548__8567);
var G__8569 = G__8548__8567;
G__8551__8558 = G__8568;
G__8548__8559 = G__8569;
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
var this__8570 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8571 = this;
return (new cljs.core.List(this__8571.meta,o,coll,(this__8571.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8572 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8573 = this;
return this__8573.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8574 = this;
return this__8574.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8575 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8576 = this;
return this__8576.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8577 = this;
return this__8577.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8578 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8579 = this;
return (new cljs.core.List(meta,this__8579.first,this__8579.rest,this__8579.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8580 = this;
return this__8580.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8581 = this;
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
var this__8582 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8583 = this;
return (new cljs.core.List(this__8583.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8584 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8585 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8586 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8587 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8588 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8589 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8590 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8591 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8592 = this;
return this__8592.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8593 = this;
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
list.cljs$lang$applyTo = (function (arglist__8594){
var items = cljs.core.seq( arglist__8594 );;
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
var this__8595 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8596 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8597 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8598 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8598.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8599 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8600 = this;
return this__8600.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8601 = this;
if(cljs.core.truth_((this__8601.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8601.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8602 = this;
return this__8602.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8603 = this;
return (new cljs.core.Cons(meta,this__8603.first,this__8603.rest));
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
var G__8604 = null;
var G__8604__8605 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8604__8606 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8604 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8604__8605.call(this,string,f);
case  3 :
return G__8604__8606.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8604;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8608 = null;
var G__8608__8609 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8608__8610 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8608 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8608__8609.call(this,string,k);
case  3 :
return G__8608__8610.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8608;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8612 = null;
var G__8612__8613 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8612__8614 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8612 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8612__8613.call(this,string,n);
case  3 :
return G__8612__8614.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8612;
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
var G__8622 = null;
var G__8622__8623 = (function (tsym8616,coll){
var tsym8616__8618 = this;

var this$__8619 = tsym8616__8618;

return cljs.core.get.call(null,coll,this$__8619.toString());
});
var G__8622__8624 = (function (tsym8617,coll,not_found){
var tsym8617__8620 = this;

var this$__8621 = tsym8617__8620;

return cljs.core.get.call(null,coll,this$__8621.toString(),not_found);
});
G__8622 = function(tsym8617,coll,not_found){
switch(arguments.length){
case  2 :
return G__8622__8623.call(this,tsym8617,coll);
case  3 :
return G__8622__8624.call(this,tsym8617,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8622;
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
var x__8626 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8626;
} else
{lazy_seq.x = x__8626.call(null);
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
var this__8627 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8628 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8629 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8630 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8630.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8631 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8632 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8633 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8634 = this;
return this__8634.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8635 = this;
return (new cljs.core.LazySeq(meta,this__8635.realized,this__8635.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8636 = [];

var s__8637 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8637)))
{ary__8636.push(cljs.core.first.call(null,s__8637));
{
var G__8638 = cljs.core.next.call(null,s__8637);
s__8637 = G__8638;
continue;
}
} else
{return ary__8636;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8639 = s;
var i__8640 = n;
var sum__8641 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8642 = (i__8640 > 0);

if(cljs.core.truth_(and__3546__auto____8642))
{return cljs.core.seq.call(null,s__8639);
} else
{return and__3546__auto____8642;
}
})()))
{{
var G__8643 = cljs.core.next.call(null,s__8639);
var G__8644 = (i__8640 - 1);
var G__8645 = (sum__8641 + 1);
s__8639 = G__8643;
i__8640 = G__8644;
sum__8641 = G__8645;
continue;
}
} else
{return sum__8641;
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
var concat__8649 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8650 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8651 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8646 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8646))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8646),concat.call(null,cljs.core.rest.call(null,s__8646),y));
} else
{return y;
}
})));
});
var concat__8652 = (function() { 
var G__8654__delegate = function (x,y,zs){
var cat__8648 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8647 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8647))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8647),cat.call(null,cljs.core.rest.call(null,xys__8647),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8648.call(null,concat.call(null,x,y),zs);
};
var G__8654 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8654__delegate.call(this, x, y, zs);
};
G__8654.cljs$lang$maxFixedArity = 2;
G__8654.cljs$lang$applyTo = (function (arglist__8655){
var x = cljs.core.first(arglist__8655);
var y = cljs.core.first(cljs.core.next(arglist__8655));
var zs = cljs.core.rest(cljs.core.next(arglist__8655));
return G__8654__delegate.call(this, x, y, zs);
});
return G__8654;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8649.call(this);
case  1 :
return concat__8650.call(this,x);
case  2 :
return concat__8651.call(this,x,y);
default:
return concat__8652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8652.cljs$lang$applyTo;
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
var list_STAR___8656 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8657 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8658 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8659 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8660 = (function() { 
var G__8662__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8662 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8662__delegate.call(this, a, b, c, d, more);
};
G__8662.cljs$lang$maxFixedArity = 4;
G__8662.cljs$lang$applyTo = (function (arglist__8663){
var a = cljs.core.first(arglist__8663);
var b = cljs.core.first(cljs.core.next(arglist__8663));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8663)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8663))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8663))));
return G__8662__delegate.call(this, a, b, c, d, more);
});
return G__8662;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8656.call(this,a);
case  2 :
return list_STAR___8657.call(this,a,b);
case  3 :
return list_STAR___8658.call(this,a,b,c);
case  4 :
return list_STAR___8659.call(this,a,b,c,d);
default:
return list_STAR___8660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8660.cljs$lang$applyTo;
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
var apply__8673 = (function (f,args){
var fixed_arity__8664 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8664 + 1)) <= fixed_arity__8664)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8674 = (function (f,x,args){
var arglist__8665 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8666 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8665,fixed_arity__8666) <= fixed_arity__8666)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8665));
} else
{return f.cljs$lang$applyTo(arglist__8665);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8665));
}
});
var apply__8675 = (function (f,x,y,args){
var arglist__8667 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8668 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8667,fixed_arity__8668) <= fixed_arity__8668)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8667));
} else
{return f.cljs$lang$applyTo(arglist__8667);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8667));
}
});
var apply__8676 = (function (f,x,y,z,args){
var arglist__8669 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8670 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8669,fixed_arity__8670) <= fixed_arity__8670)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8669));
} else
{return f.cljs$lang$applyTo(arglist__8669);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8669));
}
});
var apply__8677 = (function() { 
var G__8679__delegate = function (f,a,b,c,d,args){
var arglist__8671 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8672 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8671,fixed_arity__8672) <= fixed_arity__8672)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8671));
} else
{return f.cljs$lang$applyTo(arglist__8671);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8671));
}
};
var G__8679 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8679__delegate.call(this, f, a, b, c, d, args);
};
G__8679.cljs$lang$maxFixedArity = 5;
G__8679.cljs$lang$applyTo = (function (arglist__8680){
var f = cljs.core.first(arglist__8680);
var a = cljs.core.first(cljs.core.next(arglist__8680));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8680)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8680))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8680)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8680)))));
return G__8679__delegate.call(this, f, a, b, c, d, args);
});
return G__8679;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8673.call(this,f,a);
case  3 :
return apply__8674.call(this,f,a,b);
case  4 :
return apply__8675.call(this,f,a,b,c);
case  5 :
return apply__8676.call(this,f,a,b,c,d);
default:
return apply__8677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8677.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8681){
var obj = cljs.core.first(arglist__8681);
var f = cljs.core.first(cljs.core.next(arglist__8681));
var args = cljs.core.rest(cljs.core.next(arglist__8681));
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
var not_EQ___8682 = (function (x){
return false;
});
var not_EQ___8683 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8684 = (function() { 
var G__8686__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8686 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8686__delegate.call(this, x, y, more);
};
G__8686.cljs$lang$maxFixedArity = 2;
G__8686.cljs$lang$applyTo = (function (arglist__8687){
var x = cljs.core.first(arglist__8687);
var y = cljs.core.first(cljs.core.next(arglist__8687));
var more = cljs.core.rest(cljs.core.next(arglist__8687));
return G__8686__delegate.call(this, x, y, more);
});
return G__8686;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8682.call(this,x);
case  2 :
return not_EQ___8683.call(this,x,y);
default:
return not_EQ___8684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8684.cljs$lang$applyTo;
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
var G__8688 = pred;
var G__8689 = cljs.core.next.call(null,coll);
pred = G__8688;
coll = G__8689;
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
{var or__3548__auto____8690 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8690))
{return or__3548__auto____8690;
} else
{{
var G__8691 = pred;
var G__8692 = cljs.core.next.call(null,coll);
pred = G__8691;
coll = G__8692;
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
var G__8693 = null;
var G__8693__8694 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8693__8695 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8693__8696 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8693__8697 = (function() { 
var G__8699__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8699 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8699__delegate.call(this, x, y, zs);
};
G__8699.cljs$lang$maxFixedArity = 2;
G__8699.cljs$lang$applyTo = (function (arglist__8700){
var x = cljs.core.first(arglist__8700);
var y = cljs.core.first(cljs.core.next(arglist__8700));
var zs = cljs.core.rest(cljs.core.next(arglist__8700));
return G__8699__delegate.call(this, x, y, zs);
});
return G__8699;
})()
;
G__8693 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8693__8694.call(this);
case  1 :
return G__8693__8695.call(this,x);
case  2 :
return G__8693__8696.call(this,x,y);
default:
return G__8693__8697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8693.cljs$lang$maxFixedArity = 2;
G__8693.cljs$lang$applyTo = G__8693__8697.cljs$lang$applyTo;
return G__8693;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8701__delegate = function (args){
return x;
};
var G__8701 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8701__delegate.call(this, args);
};
G__8701.cljs$lang$maxFixedArity = 0;
G__8701.cljs$lang$applyTo = (function (arglist__8702){
var args = cljs.core.seq( arglist__8702 );;
return G__8701__delegate.call(this, args);
});
return G__8701;
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
var comp__8706 = (function (){
return cljs.core.identity;
});
var comp__8707 = (function (f){
return f;
});
var comp__8708 = (function (f,g){
return (function() {
var G__8712 = null;
var G__8712__8713 = (function (){
return f.call(null,g.call(null));
});
var G__8712__8714 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8712__8715 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8712__8716 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8712__8717 = (function() { 
var G__8719__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8719 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8719__delegate.call(this, x, y, z, args);
};
G__8719.cljs$lang$maxFixedArity = 3;
G__8719.cljs$lang$applyTo = (function (arglist__8720){
var x = cljs.core.first(arglist__8720);
var y = cljs.core.first(cljs.core.next(arglist__8720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8720)));
return G__8719__delegate.call(this, x, y, z, args);
});
return G__8719;
})()
;
G__8712 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8712__8713.call(this);
case  1 :
return G__8712__8714.call(this,x);
case  2 :
return G__8712__8715.call(this,x,y);
case  3 :
return G__8712__8716.call(this,x,y,z);
default:
return G__8712__8717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8712.cljs$lang$maxFixedArity = 3;
G__8712.cljs$lang$applyTo = G__8712__8717.cljs$lang$applyTo;
return G__8712;
})()
});
var comp__8709 = (function (f,g,h){
return (function() {
var G__8721 = null;
var G__8721__8722 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8721__8723 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8721__8724 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8721__8725 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8721__8726 = (function() { 
var G__8728__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8728 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8728__delegate.call(this, x, y, z, args);
};
G__8728.cljs$lang$maxFixedArity = 3;
G__8728.cljs$lang$applyTo = (function (arglist__8729){
var x = cljs.core.first(arglist__8729);
var y = cljs.core.first(cljs.core.next(arglist__8729));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8729)));
return G__8728__delegate.call(this, x, y, z, args);
});
return G__8728;
})()
;
G__8721 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8721__8722.call(this);
case  1 :
return G__8721__8723.call(this,x);
case  2 :
return G__8721__8724.call(this,x,y);
case  3 :
return G__8721__8725.call(this,x,y,z);
default:
return G__8721__8726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8721.cljs$lang$maxFixedArity = 3;
G__8721.cljs$lang$applyTo = G__8721__8726.cljs$lang$applyTo;
return G__8721;
})()
});
var comp__8710 = (function() { 
var G__8730__delegate = function (f1,f2,f3,fs){
var fs__8703 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8731__delegate = function (args){
var ret__8704 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8703),args);
var fs__8705 = cljs.core.next.call(null,fs__8703);

while(true){
if(cljs.core.truth_(fs__8705))
{{
var G__8732 = cljs.core.first.call(null,fs__8705).call(null,ret__8704);
var G__8733 = cljs.core.next.call(null,fs__8705);
ret__8704 = G__8732;
fs__8705 = G__8733;
continue;
}
} else
{return ret__8704;
}
break;
}
};
var G__8731 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8731__delegate.call(this, args);
};
G__8731.cljs$lang$maxFixedArity = 0;
G__8731.cljs$lang$applyTo = (function (arglist__8734){
var args = cljs.core.seq( arglist__8734 );;
return G__8731__delegate.call(this, args);
});
return G__8731;
})()
;
};
var G__8730 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8730__delegate.call(this, f1, f2, f3, fs);
};
G__8730.cljs$lang$maxFixedArity = 3;
G__8730.cljs$lang$applyTo = (function (arglist__8735){
var f1 = cljs.core.first(arglist__8735);
var f2 = cljs.core.first(cljs.core.next(arglist__8735));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8735)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8735)));
return G__8730__delegate.call(this, f1, f2, f3, fs);
});
return G__8730;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8706.call(this);
case  1 :
return comp__8707.call(this,f1);
case  2 :
return comp__8708.call(this,f1,f2);
case  3 :
return comp__8709.call(this,f1,f2,f3);
default:
return comp__8710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8710.cljs$lang$applyTo;
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
var partial__8736 = (function (f,arg1){
return (function() { 
var G__8741__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8741 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8741__delegate.call(this, args);
};
G__8741.cljs$lang$maxFixedArity = 0;
G__8741.cljs$lang$applyTo = (function (arglist__8742){
var args = cljs.core.seq( arglist__8742 );;
return G__8741__delegate.call(this, args);
});
return G__8741;
})()
;
});
var partial__8737 = (function (f,arg1,arg2){
return (function() { 
var G__8743__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8743 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8743__delegate.call(this, args);
};
G__8743.cljs$lang$maxFixedArity = 0;
G__8743.cljs$lang$applyTo = (function (arglist__8744){
var args = cljs.core.seq( arglist__8744 );;
return G__8743__delegate.call(this, args);
});
return G__8743;
})()
;
});
var partial__8738 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8745__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8745 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8745__delegate.call(this, args);
};
G__8745.cljs$lang$maxFixedArity = 0;
G__8745.cljs$lang$applyTo = (function (arglist__8746){
var args = cljs.core.seq( arglist__8746 );;
return G__8745__delegate.call(this, args);
});
return G__8745;
})()
;
});
var partial__8739 = (function() { 
var G__8747__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8748__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8748 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8748__delegate.call(this, args);
};
G__8748.cljs$lang$maxFixedArity = 0;
G__8748.cljs$lang$applyTo = (function (arglist__8749){
var args = cljs.core.seq( arglist__8749 );;
return G__8748__delegate.call(this, args);
});
return G__8748;
})()
;
};
var G__8747 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8747__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8747.cljs$lang$maxFixedArity = 4;
G__8747.cljs$lang$applyTo = (function (arglist__8750){
var f = cljs.core.first(arglist__8750);
var arg1 = cljs.core.first(cljs.core.next(arglist__8750));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8750)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8750))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8750))));
return G__8747__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8747;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8736.call(this,f,arg1);
case  3 :
return partial__8737.call(this,f,arg1,arg2);
case  4 :
return partial__8738.call(this,f,arg1,arg2,arg3);
default:
return partial__8739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8739.cljs$lang$applyTo;
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
var fnil__8751 = (function (f,x){
return (function() {
var G__8755 = null;
var G__8755__8756 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8755__8757 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8755__8758 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8755__8759 = (function() { 
var G__8761__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8761 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8761__delegate.call(this, a, b, c, ds);
};
G__8761.cljs$lang$maxFixedArity = 3;
G__8761.cljs$lang$applyTo = (function (arglist__8762){
var a = cljs.core.first(arglist__8762);
var b = cljs.core.first(cljs.core.next(arglist__8762));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8762)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8762)));
return G__8761__delegate.call(this, a, b, c, ds);
});
return G__8761;
})()
;
G__8755 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8755__8756.call(this,a);
case  2 :
return G__8755__8757.call(this,a,b);
case  3 :
return G__8755__8758.call(this,a,b,c);
default:
return G__8755__8759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8755.cljs$lang$maxFixedArity = 3;
G__8755.cljs$lang$applyTo = G__8755__8759.cljs$lang$applyTo;
return G__8755;
})()
});
var fnil__8752 = (function (f,x,y){
return (function() {
var G__8763 = null;
var G__8763__8764 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8763__8765 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8763__8766 = (function() { 
var G__8768__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8768 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8768__delegate.call(this, a, b, c, ds);
};
G__8768.cljs$lang$maxFixedArity = 3;
G__8768.cljs$lang$applyTo = (function (arglist__8769){
var a = cljs.core.first(arglist__8769);
var b = cljs.core.first(cljs.core.next(arglist__8769));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8769)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8769)));
return G__8768__delegate.call(this, a, b, c, ds);
});
return G__8768;
})()
;
G__8763 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8763__8764.call(this,a,b);
case  3 :
return G__8763__8765.call(this,a,b,c);
default:
return G__8763__8766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8763.cljs$lang$maxFixedArity = 3;
G__8763.cljs$lang$applyTo = G__8763__8766.cljs$lang$applyTo;
return G__8763;
})()
});
var fnil__8753 = (function (f,x,y,z){
return (function() {
var G__8770 = null;
var G__8770__8771 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8770__8772 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8770__8773 = (function() { 
var G__8775__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8775 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8775__delegate.call(this, a, b, c, ds);
};
G__8775.cljs$lang$maxFixedArity = 3;
G__8775.cljs$lang$applyTo = (function (arglist__8776){
var a = cljs.core.first(arglist__8776);
var b = cljs.core.first(cljs.core.next(arglist__8776));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8776)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8776)));
return G__8775__delegate.call(this, a, b, c, ds);
});
return G__8775;
})()
;
G__8770 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8770__8771.call(this,a,b);
case  3 :
return G__8770__8772.call(this,a,b,c);
default:
return G__8770__8773.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8770.cljs$lang$maxFixedArity = 3;
G__8770.cljs$lang$applyTo = G__8770__8773.cljs$lang$applyTo;
return G__8770;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8751.call(this,f,x);
case  3 :
return fnil__8752.call(this,f,x,y);
case  4 :
return fnil__8753.call(this,f,x,y,z);
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
var mapi__8779 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8777 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8777))
{var s__8778 = temp__3698__auto____8777;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8778)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8778)));
} else
{return null;
}
})));
});

return mapi__8779.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8780))
{var s__8781 = temp__3698__auto____8780;

var x__8782 = f.call(null,cljs.core.first.call(null,s__8781));

if(cljs.core.truth_((x__8782 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8781));
} else
{return cljs.core.cons.call(null,x__8782,keep.call(null,f,cljs.core.rest.call(null,s__8781)));
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
var keepi__8792 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8789 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8789))
{var s__8790 = temp__3698__auto____8789;

var x__8791 = f.call(null,idx,cljs.core.first.call(null,s__8790));

if(cljs.core.truth_((x__8791 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8790));
} else
{return cljs.core.cons.call(null,x__8791,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8790)));
}
} else
{return null;
}
})));
});

return keepi__8792.call(null,0,coll);
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
var every_pred__8837 = (function (p){
return (function() {
var ep1 = null;
var ep1__8842 = (function (){
return true;
});
var ep1__8843 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8844 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8799 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8799))
{return p.call(null,y);
} else
{return and__3546__auto____8799;
}
})());
});
var ep1__8845 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8800 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8800))
{var and__3546__auto____8801 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8801))
{return p.call(null,z);
} else
{return and__3546__auto____8801;
}
} else
{return and__3546__auto____8800;
}
})());
});
var ep1__8846 = (function() { 
var G__8848__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8802 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8802))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8802;
}
})());
};
var G__8848 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8848__delegate.call(this, x, y, z, args);
};
G__8848.cljs$lang$maxFixedArity = 3;
G__8848.cljs$lang$applyTo = (function (arglist__8849){
var x = cljs.core.first(arglist__8849);
var y = cljs.core.first(cljs.core.next(arglist__8849));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8849)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8849)));
return G__8848__delegate.call(this, x, y, z, args);
});
return G__8848;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8842.call(this);
case  1 :
return ep1__8843.call(this,x);
case  2 :
return ep1__8844.call(this,x,y);
case  3 :
return ep1__8845.call(this,x,y,z);
default:
return ep1__8846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8846.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8838 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8850 = (function (){
return true;
});
var ep2__8851 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8803 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8803))
{return p2.call(null,x);
} else
{return and__3546__auto____8803;
}
})());
});
var ep2__8852 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8804 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8804))
{var and__3546__auto____8805 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8805))
{var and__3546__auto____8806 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8806))
{return p2.call(null,y);
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8805;
}
} else
{return and__3546__auto____8804;
}
})());
});
var ep2__8853 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8807 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8807))
{var and__3546__auto____8808 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8808))
{var and__3546__auto____8809 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8809))
{var and__3546__auto____8810 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8810))
{var and__3546__auto____8811 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8811))
{return p2.call(null,z);
} else
{return and__3546__auto____8811;
}
} else
{return and__3546__auto____8810;
}
} else
{return and__3546__auto____8809;
}
} else
{return and__3546__auto____8808;
}
} else
{return and__3546__auto____8807;
}
})());
});
var ep2__8854 = (function() { 
var G__8856__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8812 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8812))
{return cljs.core.every_QMARK_.call(null,(function (p1__8783_SHARP_){
var and__3546__auto____8813 = p1.call(null,p1__8783_SHARP_);

if(cljs.core.truth_(and__3546__auto____8813))
{return p2.call(null,p1__8783_SHARP_);
} else
{return and__3546__auto____8813;
}
}),args);
} else
{return and__3546__auto____8812;
}
})());
};
var G__8856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8856__delegate.call(this, x, y, z, args);
};
G__8856.cljs$lang$maxFixedArity = 3;
G__8856.cljs$lang$applyTo = (function (arglist__8857){
var x = cljs.core.first(arglist__8857);
var y = cljs.core.first(cljs.core.next(arglist__8857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8857)));
return G__8856__delegate.call(this, x, y, z, args);
});
return G__8856;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8850.call(this);
case  1 :
return ep2__8851.call(this,x);
case  2 :
return ep2__8852.call(this,x,y);
case  3 :
return ep2__8853.call(this,x,y,z);
default:
return ep2__8854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8854.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8839 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8858 = (function (){
return true;
});
var ep3__8859 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8814 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8814))
{var and__3546__auto____8815 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8815))
{return p3.call(null,x);
} else
{return and__3546__auto____8815;
}
} else
{return and__3546__auto____8814;
}
})());
});
var ep3__8860 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8816 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8816))
{var and__3546__auto____8817 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8817))
{var and__3546__auto____8818 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8818))
{var and__3546__auto____8819 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8819))
{var and__3546__auto____8820 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8820))
{return p3.call(null,y);
} else
{return and__3546__auto____8820;
}
} else
{return and__3546__auto____8819;
}
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8817;
}
} else
{return and__3546__auto____8816;
}
})());
});
var ep3__8861 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8821 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8821))
{var and__3546__auto____8822 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8822))
{var and__3546__auto____8823 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8823))
{var and__3546__auto____8824 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8824))
{var and__3546__auto____8825 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8825))
{var and__3546__auto____8826 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8826))
{var and__3546__auto____8827 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8827))
{var and__3546__auto____8828 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8828))
{return p3.call(null,z);
} else
{return and__3546__auto____8828;
}
} else
{return and__3546__auto____8827;
}
} else
{return and__3546__auto____8826;
}
} else
{return and__3546__auto____8825;
}
} else
{return and__3546__auto____8824;
}
} else
{return and__3546__auto____8823;
}
} else
{return and__3546__auto____8822;
}
} else
{return and__3546__auto____8821;
}
})());
});
var ep3__8862 = (function() { 
var G__8864__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8829 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8829))
{return cljs.core.every_QMARK_.call(null,(function (p1__8784_SHARP_){
var and__3546__auto____8830 = p1.call(null,p1__8784_SHARP_);

if(cljs.core.truth_(and__3546__auto____8830))
{var and__3546__auto____8831 = p2.call(null,p1__8784_SHARP_);

if(cljs.core.truth_(and__3546__auto____8831))
{return p3.call(null,p1__8784_SHARP_);
} else
{return and__3546__auto____8831;
}
} else
{return and__3546__auto____8830;
}
}),args);
} else
{return and__3546__auto____8829;
}
})());
};
var G__8864 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8864__delegate.call(this, x, y, z, args);
};
G__8864.cljs$lang$maxFixedArity = 3;
G__8864.cljs$lang$applyTo = (function (arglist__8865){
var x = cljs.core.first(arglist__8865);
var y = cljs.core.first(cljs.core.next(arglist__8865));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8865)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8865)));
return G__8864__delegate.call(this, x, y, z, args);
});
return G__8864;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8858.call(this);
case  1 :
return ep3__8859.call(this,x);
case  2 :
return ep3__8860.call(this,x,y);
case  3 :
return ep3__8861.call(this,x,y,z);
default:
return ep3__8862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8862.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8840 = (function() { 
var G__8866__delegate = function (p1,p2,p3,ps){
var ps__8832 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8867 = (function (){
return true;
});
var epn__8868 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8785_SHARP_){
return p1__8785_SHARP_.call(null,x);
}),ps__8832);
});
var epn__8869 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8786_SHARP_){
var and__3546__auto____8833 = p1__8786_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8833))
{return p1__8786_SHARP_.call(null,y);
} else
{return and__3546__auto____8833;
}
}),ps__8832);
});
var epn__8870 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8787_SHARP_){
var and__3546__auto____8834 = p1__8787_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8835 = p1__8787_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8835))
{return p1__8787_SHARP_.call(null,z);
} else
{return and__3546__auto____8835;
}
} else
{return and__3546__auto____8834;
}
}),ps__8832);
});
var epn__8871 = (function() { 
var G__8873__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8836 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8836))
{return cljs.core.every_QMARK_.call(null,(function (p1__8788_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8788_SHARP_,args);
}),ps__8832);
} else
{return and__3546__auto____8836;
}
})());
};
var G__8873 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8873__delegate.call(this, x, y, z, args);
};
G__8873.cljs$lang$maxFixedArity = 3;
G__8873.cljs$lang$applyTo = (function (arglist__8874){
var x = cljs.core.first(arglist__8874);
var y = cljs.core.first(cljs.core.next(arglist__8874));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8874)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8874)));
return G__8873__delegate.call(this, x, y, z, args);
});
return G__8873;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8867.call(this);
case  1 :
return epn__8868.call(this,x);
case  2 :
return epn__8869.call(this,x,y);
case  3 :
return epn__8870.call(this,x,y,z);
default:
return epn__8871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8871.cljs$lang$applyTo;
return epn;
})()
};
var G__8866 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8866__delegate.call(this, p1, p2, p3, ps);
};
G__8866.cljs$lang$maxFixedArity = 3;
G__8866.cljs$lang$applyTo = (function (arglist__8875){
var p1 = cljs.core.first(arglist__8875);
var p2 = cljs.core.first(cljs.core.next(arglist__8875));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8875)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8875)));
return G__8866__delegate.call(this, p1, p2, p3, ps);
});
return G__8866;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8837.call(this,p1);
case  2 :
return every_pred__8838.call(this,p1,p2);
case  3 :
return every_pred__8839.call(this,p1,p2,p3);
default:
return every_pred__8840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8840.cljs$lang$applyTo;
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
var some_fn__8915 = (function (p){
return (function() {
var sp1 = null;
var sp1__8920 = (function (){
return null;
});
var sp1__8921 = (function (x){
return p.call(null,x);
});
var sp1__8922 = (function (x,y){
var or__3548__auto____8877 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8877))
{return or__3548__auto____8877;
} else
{return p.call(null,y);
}
});
var sp1__8923 = (function (x,y,z){
var or__3548__auto____8878 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8878))
{return or__3548__auto____8878;
} else
{var or__3548__auto____8879 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8879))
{return or__3548__auto____8879;
} else
{return p.call(null,z);
}
}
});
var sp1__8924 = (function() { 
var G__8926__delegate = function (x,y,z,args){
var or__3548__auto____8880 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8880))
{return or__3548__auto____8880;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8926 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8926__delegate.call(this, x, y, z, args);
};
G__8926.cljs$lang$maxFixedArity = 3;
G__8926.cljs$lang$applyTo = (function (arglist__8927){
var x = cljs.core.first(arglist__8927);
var y = cljs.core.first(cljs.core.next(arglist__8927));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8927)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8927)));
return G__8926__delegate.call(this, x, y, z, args);
});
return G__8926;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8920.call(this);
case  1 :
return sp1__8921.call(this,x);
case  2 :
return sp1__8922.call(this,x,y);
case  3 :
return sp1__8923.call(this,x,y,z);
default:
return sp1__8924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8924.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8916 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8928 = (function (){
return null;
});
var sp2__8929 = (function (x){
var or__3548__auto____8881 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8881))
{return or__3548__auto____8881;
} else
{return p2.call(null,x);
}
});
var sp2__8930 = (function (x,y){
var or__3548__auto____8882 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8882))
{return or__3548__auto____8882;
} else
{var or__3548__auto____8883 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8883))
{return or__3548__auto____8883;
} else
{var or__3548__auto____8884 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8884))
{return or__3548__auto____8884;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8931 = (function (x,y,z){
var or__3548__auto____8885 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8885))
{return or__3548__auto____8885;
} else
{var or__3548__auto____8886 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8886))
{return or__3548__auto____8886;
} else
{var or__3548__auto____8887 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8887))
{return or__3548__auto____8887;
} else
{var or__3548__auto____8888 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8888))
{return or__3548__auto____8888;
} else
{var or__3548__auto____8889 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8889))
{return or__3548__auto____8889;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8932 = (function() { 
var G__8934__delegate = function (x,y,z,args){
var or__3548__auto____8890 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8890))
{return or__3548__auto____8890;
} else
{return cljs.core.some.call(null,(function (p1__8793_SHARP_){
var or__3548__auto____8891 = p1.call(null,p1__8793_SHARP_);

if(cljs.core.truth_(or__3548__auto____8891))
{return or__3548__auto____8891;
} else
{return p2.call(null,p1__8793_SHARP_);
}
}),args);
}
};
var G__8934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8934__delegate.call(this, x, y, z, args);
};
G__8934.cljs$lang$maxFixedArity = 3;
G__8934.cljs$lang$applyTo = (function (arglist__8935){
var x = cljs.core.first(arglist__8935);
var y = cljs.core.first(cljs.core.next(arglist__8935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8935)));
return G__8934__delegate.call(this, x, y, z, args);
});
return G__8934;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8928.call(this);
case  1 :
return sp2__8929.call(this,x);
case  2 :
return sp2__8930.call(this,x,y);
case  3 :
return sp2__8931.call(this,x,y,z);
default:
return sp2__8932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8932.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8917 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8936 = (function (){
return null;
});
var sp3__8937 = (function (x){
var or__3548__auto____8892 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8892))
{return or__3548__auto____8892;
} else
{var or__3548__auto____8893 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8893))
{return or__3548__auto____8893;
} else
{return p3.call(null,x);
}
}
});
var sp3__8938 = (function (x,y){
var or__3548__auto____8894 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8894))
{return or__3548__auto____8894;
} else
{var or__3548__auto____8895 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8895))
{return or__3548__auto____8895;
} else
{var or__3548__auto____8896 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8896))
{return or__3548__auto____8896;
} else
{var or__3548__auto____8897 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8897))
{return or__3548__auto____8897;
} else
{var or__3548__auto____8898 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8898))
{return or__3548__auto____8898;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8939 = (function (x,y,z){
var or__3548__auto____8899 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8899))
{return or__3548__auto____8899;
} else
{var or__3548__auto____8900 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8900))
{return or__3548__auto____8900;
} else
{var or__3548__auto____8901 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8901))
{return or__3548__auto____8901;
} else
{var or__3548__auto____8902 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8902))
{return or__3548__auto____8902;
} else
{var or__3548__auto____8903 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8903))
{return or__3548__auto____8903;
} else
{var or__3548__auto____8904 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8904))
{return or__3548__auto____8904;
} else
{var or__3548__auto____8905 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8905))
{return or__3548__auto____8905;
} else
{var or__3548__auto____8906 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8906))
{return or__3548__auto____8906;
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
var sp3__8940 = (function() { 
var G__8942__delegate = function (x,y,z,args){
var or__3548__auto____8907 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8907))
{return or__3548__auto____8907;
} else
{return cljs.core.some.call(null,(function (p1__8794_SHARP_){
var or__3548__auto____8908 = p1.call(null,p1__8794_SHARP_);

if(cljs.core.truth_(or__3548__auto____8908))
{return or__3548__auto____8908;
} else
{var or__3548__auto____8909 = p2.call(null,p1__8794_SHARP_);

if(cljs.core.truth_(or__3548__auto____8909))
{return or__3548__auto____8909;
} else
{return p3.call(null,p1__8794_SHARP_);
}
}
}),args);
}
};
var G__8942 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8942__delegate.call(this, x, y, z, args);
};
G__8942.cljs$lang$maxFixedArity = 3;
G__8942.cljs$lang$applyTo = (function (arglist__8943){
var x = cljs.core.first(arglist__8943);
var y = cljs.core.first(cljs.core.next(arglist__8943));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8943)));
return G__8942__delegate.call(this, x, y, z, args);
});
return G__8942;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8936.call(this);
case  1 :
return sp3__8937.call(this,x);
case  2 :
return sp3__8938.call(this,x,y);
case  3 :
return sp3__8939.call(this,x,y,z);
default:
return sp3__8940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8940.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8918 = (function() { 
var G__8944__delegate = function (p1,p2,p3,ps){
var ps__8910 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8945 = (function (){
return null;
});
var spn__8946 = (function (x){
return cljs.core.some.call(null,(function (p1__8795_SHARP_){
return p1__8795_SHARP_.call(null,x);
}),ps__8910);
});
var spn__8947 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8796_SHARP_){
var or__3548__auto____8911 = p1__8796_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8911))
{return or__3548__auto____8911;
} else
{return p1__8796_SHARP_.call(null,y);
}
}),ps__8910);
});
var spn__8948 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8797_SHARP_){
var or__3548__auto____8912 = p1__8797_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8912))
{return or__3548__auto____8912;
} else
{var or__3548__auto____8913 = p1__8797_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8913))
{return or__3548__auto____8913;
} else
{return p1__8797_SHARP_.call(null,z);
}
}
}),ps__8910);
});
var spn__8949 = (function() { 
var G__8951__delegate = function (x,y,z,args){
var or__3548__auto____8914 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8914))
{return or__3548__auto____8914;
} else
{return cljs.core.some.call(null,(function (p1__8798_SHARP_){
return cljs.core.some.call(null,p1__8798_SHARP_,args);
}),ps__8910);
}
};
var G__8951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8951__delegate.call(this, x, y, z, args);
};
G__8951.cljs$lang$maxFixedArity = 3;
G__8951.cljs$lang$applyTo = (function (arglist__8952){
var x = cljs.core.first(arglist__8952);
var y = cljs.core.first(cljs.core.next(arglist__8952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8952)));
return G__8951__delegate.call(this, x, y, z, args);
});
return G__8951;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8945.call(this);
case  1 :
return spn__8946.call(this,x);
case  2 :
return spn__8947.call(this,x,y);
case  3 :
return spn__8948.call(this,x,y,z);
default:
return spn__8949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8949.cljs$lang$applyTo;
return spn;
})()
};
var G__8944 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8944__delegate.call(this, p1, p2, p3, ps);
};
G__8944.cljs$lang$maxFixedArity = 3;
G__8944.cljs$lang$applyTo = (function (arglist__8953){
var p1 = cljs.core.first(arglist__8953);
var p2 = cljs.core.first(cljs.core.next(arglist__8953));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8953)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8953)));
return G__8944__delegate.call(this, p1, p2, p3, ps);
});
return G__8944;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8915.call(this,p1);
case  2 :
return some_fn__8916.call(this,p1,p2);
case  3 :
return some_fn__8917.call(this,p1,p2,p3);
default:
return some_fn__8918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8918.cljs$lang$applyTo;
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
var map__8966 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8954))
{var s__8955 = temp__3698__auto____8954;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8955)),map.call(null,f,cljs.core.rest.call(null,s__8955)));
} else
{return null;
}
})));
});
var map__8967 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8956 = cljs.core.seq.call(null,c1);
var s2__8957 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8958 = s1__8956;

if(cljs.core.truth_(and__3546__auto____8958))
{return s2__8957;
} else
{return and__3546__auto____8958;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8956),cljs.core.first.call(null,s2__8957)),map.call(null,f,cljs.core.rest.call(null,s1__8956),cljs.core.rest.call(null,s2__8957)));
} else
{return null;
}
})));
});
var map__8968 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8959 = cljs.core.seq.call(null,c1);
var s2__8960 = cljs.core.seq.call(null,c2);
var s3__8961 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8962 = s1__8959;

if(cljs.core.truth_(and__3546__auto____8962))
{var and__3546__auto____8963 = s2__8960;

if(cljs.core.truth_(and__3546__auto____8963))
{return s3__8961;
} else
{return and__3546__auto____8963;
}
} else
{return and__3546__auto____8962;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8959),cljs.core.first.call(null,s2__8960),cljs.core.first.call(null,s3__8961)),map.call(null,f,cljs.core.rest.call(null,s1__8959),cljs.core.rest.call(null,s2__8960),cljs.core.rest.call(null,s3__8961)));
} else
{return null;
}
})));
});
var map__8969 = (function() { 
var G__8971__delegate = function (f,c1,c2,c3,colls){
var step__8965 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8964 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8964)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8964),step.call(null,map.call(null,cljs.core.rest,ss__8964)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8876_SHARP_){
return cljs.core.apply.call(null,f,p1__8876_SHARP_);
}),step__8965.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8971 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8971__delegate.call(this, f, c1, c2, c3, colls);
};
G__8971.cljs$lang$maxFixedArity = 4;
G__8971.cljs$lang$applyTo = (function (arglist__8972){
var f = cljs.core.first(arglist__8972);
var c1 = cljs.core.first(cljs.core.next(arglist__8972));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8972)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8972))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8972))));
return G__8971__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8971;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8966.call(this,f,c1);
case  3 :
return map__8967.call(this,f,c1,c2);
case  4 :
return map__8968.call(this,f,c1,c2,c3);
default:
return map__8969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8969.cljs$lang$applyTo;
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
{var temp__3698__auto____8973 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8973))
{var s__8974 = temp__3698__auto____8973;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8974),take.call(null,(n - 1),cljs.core.rest.call(null,s__8974)));
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
var step__8977 = (function (n,coll){
while(true){
var s__8975 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8976 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8976))
{return s__8975;
} else
{return and__3546__auto____8976;
}
})()))
{{
var G__8978 = (n - 1);
var G__8979 = cljs.core.rest.call(null,s__8975);
n = G__8978;
coll = G__8979;
continue;
}
} else
{return s__8975;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8977.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8980 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8981 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8980.call(this,n);
case  2 :
return drop_last__8981.call(this,n,s);
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
var s__8983 = cljs.core.seq.call(null,coll);
var lead__8984 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8984))
{{
var G__8985 = cljs.core.next.call(null,s__8983);
var G__8986 = cljs.core.next.call(null,lead__8984);
s__8983 = G__8985;
lead__8984 = G__8986;
continue;
}
} else
{return s__8983;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8989 = (function (pred,coll){
while(true){
var s__8987 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8988 = s__8987;

if(cljs.core.truth_(and__3546__auto____8988))
{return pred.call(null,cljs.core.first.call(null,s__8987));
} else
{return and__3546__auto____8988;
}
})()))
{{
var G__8990 = pred;
var G__8991 = cljs.core.rest.call(null,s__8987);
pred = G__8990;
coll = G__8991;
continue;
}
} else
{return s__8987;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8989.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8992))
{var s__8993 = temp__3698__auto____8992;

return cljs.core.concat.call(null,s__8993,cycle.call(null,s__8993));
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
var repeat__8994 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8995 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8994.call(this,n);
case  2 :
return repeat__8995.call(this,n,x);
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
var repeatedly__8997 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8998 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8997.call(this,n);
case  2 :
return repeatedly__8998.call(this,n,f);
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
var interleave__9004 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9000 = cljs.core.seq.call(null,c1);
var s2__9001 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____9002 = s1__9000;

if(cljs.core.truth_(and__3546__auto____9002))
{return s2__9001;
} else
{return and__3546__auto____9002;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9000),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9001),interleave.call(null,cljs.core.rest.call(null,s1__9000),cljs.core.rest.call(null,s2__9001))));
} else
{return null;
}
})));
});
var interleave__9005 = (function() { 
var G__9007__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9003 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9003)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9003),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9003)));
} else
{return null;
}
})));
};
var G__9007 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9007__delegate.call(this, c1, c2, colls);
};
G__9007.cljs$lang$maxFixedArity = 2;
G__9007.cljs$lang$applyTo = (function (arglist__9008){
var c1 = cljs.core.first(arglist__9008);
var c2 = cljs.core.first(cljs.core.next(arglist__9008));
var colls = cljs.core.rest(cljs.core.next(arglist__9008));
return G__9007__delegate.call(this, c1, c2, colls);
});
return G__9007;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__9004.call(this,c1,c2);
default:
return interleave__9005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__9005.cljs$lang$applyTo;
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
var cat__9011 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9009))
{var coll__9010 = temp__3695__auto____9009;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9010),cat.call(null,cljs.core.rest.call(null,coll__9010),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__9011.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__9012 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__9013 = (function() { 
var G__9015__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9015 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9015__delegate.call(this, f, coll, colls);
};
G__9015.cljs$lang$maxFixedArity = 2;
G__9015.cljs$lang$applyTo = (function (arglist__9016){
var f = cljs.core.first(arglist__9016);
var coll = cljs.core.first(cljs.core.next(arglist__9016));
var colls = cljs.core.rest(cljs.core.next(arglist__9016));
return G__9015__delegate.call(this, f, coll, colls);
});
return G__9015;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__9012.call(this,f,coll);
default:
return mapcat__9013.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__9013.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9017))
{var s__9018 = temp__3698__auto____9017;

var f__9019 = cljs.core.first.call(null,s__9018);
var r__9020 = cljs.core.rest.call(null,s__9018);

if(cljs.core.truth_(pred.call(null,f__9019)))
{return cljs.core.cons.call(null,f__9019,filter.call(null,pred,r__9020));
} else
{return filter.call(null,pred,r__9020);
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
var walk__9022 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__9022.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9021_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__9021_SHARP_));
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
var partition__9029 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__9030 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9023))
{var s__9024 = temp__3698__auto____9023;

var p__9025 = cljs.core.take.call(null,n,s__9024);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__9025))))
{return cljs.core.cons.call(null,p__9025,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9024)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__9031 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9026))
{var s__9027 = temp__3698__auto____9026;

var p__9028 = cljs.core.take.call(null,n,s__9027);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__9028))))
{return cljs.core.cons.call(null,p__9028,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9027)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9028,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__9029.call(this,n,step);
case  3 :
return partition__9030.call(this,n,step,pad);
case  4 :
return partition__9031.call(this,n,step,pad,coll);
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
var get_in__9037 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__9038 = (function (m,ks,not_found){
var sentinel__9033 = cljs.core.lookup_sentinel;
var m__9034 = m;
var ks__9035 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__9035))
{var m__9036 = cljs.core.get.call(null,m__9034,cljs.core.first.call(null,ks__9035),sentinel__9033);

if(cljs.core.truth_((sentinel__9033 === m__9036)))
{return not_found;
} else
{{
var G__9040 = sentinel__9033;
var G__9041 = m__9036;
var G__9042 = cljs.core.next.call(null,ks__9035);
sentinel__9033 = G__9040;
m__9034 = G__9041;
ks__9035 = G__9042;
continue;
}
}
} else
{return m__9034;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__9037.call(this,m,ks);
case  3 :
return get_in__9038.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__9043,v){
var vec__9044__9045 = p__9043;
var k__9046 = cljs.core.nth.call(null,vec__9044__9045,0,null);
var ks__9047 = cljs.core.nthnext.call(null,vec__9044__9045,1);

if(cljs.core.truth_(ks__9047))
{return cljs.core.assoc.call(null,m,k__9046,assoc_in.call(null,cljs.core.get.call(null,m,k__9046),ks__9047,v));
} else
{return cljs.core.assoc.call(null,m,k__9046,v);
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
var update_in__delegate = function (m,p__9048,f,args){
var vec__9049__9050 = p__9048;
var k__9051 = cljs.core.nth.call(null,vec__9049__9050,0,null);
var ks__9052 = cljs.core.nthnext.call(null,vec__9049__9050,1);

if(cljs.core.truth_(ks__9052))
{return cljs.core.assoc.call(null,m,k__9051,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__9051),ks__9052,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9051,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__9051),args));
}
};
var update_in = function (m,p__9048,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9048, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9053){
var m = cljs.core.first(arglist__9053);
var p__9048 = cljs.core.first(cljs.core.next(arglist__9053));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9053)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9053)));
return update_in__delegate.call(this, m, p__9048, f, args);
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
var this__9054 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9087 = null;
var G__9087__9088 = (function (coll,k){
var this__9055 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9087__9089 = (function (coll,k,not_found){
var this__9056 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9087 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9087__9088.call(this,coll,k);
case  3 :
return G__9087__9089.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9087;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9057 = this;
var new_array__9058 = cljs.core.aclone.call(null,this__9057.array);

(new_array__9058[k] = v);
return (new cljs.core.Vector(this__9057.meta,new_array__9058));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__9091 = null;
var G__9091__9092 = (function (tsym9059,k){
var this__9061 = this;
var tsym9059__9062 = this;

var coll__9063 = tsym9059__9062;

return cljs.core._lookup.call(null,coll__9063,k);
});
var G__9091__9093 = (function (tsym9060,k,not_found){
var this__9064 = this;
var tsym9060__9065 = this;

var coll__9066 = tsym9060__9065;

return cljs.core._lookup.call(null,coll__9066,k,not_found);
});
G__9091 = function(tsym9060,k,not_found){
switch(arguments.length){
case  2 :
return G__9091__9092.call(this,tsym9060,k);
case  3 :
return G__9091__9093.call(this,tsym9060,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9091;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9067 = this;
var new_array__9068 = cljs.core.aclone.call(null,this__9067.array);

new_array__9068.push(o);
return (new cljs.core.Vector(this__9067.meta,new_array__9068));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9095 = null;
var G__9095__9096 = (function (v,f){
var this__9069 = this;
return cljs.core.ci_reduce.call(null,this__9069.array,f);
});
var G__9095__9097 = (function (v,f,start){
var this__9070 = this;
return cljs.core.ci_reduce.call(null,this__9070.array,f,start);
});
G__9095 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9095__9096.call(this,v,f);
case  3 :
return G__9095__9097.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9095;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9071 = this;
if(cljs.core.truth_((this__9071.array.length > 0)))
{var vector_seq__9072 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9071.array.length)))
{return cljs.core.cons.call(null,(this__9071.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9072.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9073 = this;
return this__9073.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9074 = this;
var count__9075 = this__9074.array.length;

if(cljs.core.truth_((count__9075 > 0)))
{return (this__9074.array[(count__9075 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9076 = this;
if(cljs.core.truth_((this__9076.array.length > 0)))
{var new_array__9077 = cljs.core.aclone.call(null,this__9076.array);

new_array__9077.pop();
return (new cljs.core.Vector(this__9076.meta,new_array__9077));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9078 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9080 = this;
return (new cljs.core.Vector(meta,this__9080.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9081 = this;
return this__9081.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9099 = null;
var G__9099__9100 = (function (coll,n){
var this__9082 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9083 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9083))
{return (n < this__9082.array.length);
} else
{return and__3546__auto____9083;
}
})()))
{return (this__9082.array[n]);
} else
{return null;
}
});
var G__9099__9101 = (function (coll,n,not_found){
var this__9084 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9085 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9085))
{return (n < this__9084.array.length);
} else
{return and__3546__auto____9085;
}
})()))
{return (this__9084.array[n]);
} else
{return not_found;
}
});
G__9099 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9099__9100.call(this,coll,n);
case  3 :
return G__9099__9101.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9099;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9086 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9086.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9103 = pv.cnt;

if(cljs.core.truth_((cnt__9103 < 32)))
{return 0;
} else
{return (((cnt__9103 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__9104 = level;
var ret__9105 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__9104)))
{return ret__9105;
} else
{var embed__9106 = ret__9105;
var r__9107 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___9108 = (r__9107[0] = embed__9106);

{
var G__9109 = (ll__9104 - 5);
var G__9110 = r__9107;
ll__9104 = G__9109;
ret__9105 = G__9110;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9111 = cljs.core.aclone.call(null,parent);
var subidx__9112 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__9111[subidx__9112] = tailnode);
return ret__9111;
} else
{var temp__3695__auto____9113 = (parent[subidx__9112]);

if(cljs.core.truth_(temp__3695__auto____9113))
{var child__9114 = temp__3695__auto____9113;

var node_to_insert__9115 = push_tail.call(null,pv,(level - 5),child__9114,tailnode);
var ___9116 = (ret__9111[subidx__9112] = node_to_insert__9115);

return ret__9111;
} else
{var node_to_insert__9117 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___9118 = (ret__9111[subidx__9112] = node_to_insert__9117);

return ret__9111;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____9119 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____9119))
{return (i < pv.cnt);
} else
{return and__3546__auto____9119;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__9120 = pv.root;
var level__9121 = pv.shift;

while(true){
if(cljs.core.truth_((level__9121 > 0)))
{{
var G__9122 = (node__9120[((i >> level__9121) & 31)]);
var G__9123 = (level__9121 - 5);
node__9120 = G__9122;
level__9121 = G__9123;
continue;
}
} else
{return node__9120;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9124 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__9124[(i & 31)] = val);
return ret__9124;
} else
{var subidx__9125 = ((i >> level) & 31);
var ___9126 = (ret__9124[subidx__9125] = do_assoc.call(null,pv,(level - 5),(node[subidx__9125]),i,val));

return ret__9124;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9127 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__9128 = pop_tail.call(null,pv,(level - 5),(node[subidx__9127]));

if(cljs.core.truth_((function (){var and__3546__auto____9129 = (new_child__9128 === null);

if(cljs.core.truth_(and__3546__auto____9129))
{return (subidx__9127 === 0);
} else
{return and__3546__auto____9129;
}
})()))
{return null;
} else
{var ret__9130 = cljs.core.aclone.call(null,node);
var ___9131 = (ret__9130[subidx__9127] = new_child__9128);

return ret__9130;
}
} else
{if(cljs.core.truth_((subidx__9127 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__9132 = cljs.core.aclone.call(null,node);
var ___9133 = (ret__9132[subidx__9127] = null);

return ret__9132;
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
var this__9134 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9174 = null;
var G__9174__9175 = (function (coll,k){
var this__9135 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9174__9176 = (function (coll,k,not_found){
var this__9136 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9174 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9174__9175.call(this,coll,k);
case  3 :
return G__9174__9176.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9174;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9137 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9138 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____9138))
{return (k < this__9137.cnt);
} else
{return and__3546__auto____9138;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__9139 = cljs.core.aclone.call(null,this__9137.tail);

(new_tail__9139[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9137.meta,this__9137.cnt,this__9137.shift,this__9137.root,new_tail__9139));
} else
{return (new cljs.core.PersistentVector(this__9137.meta,this__9137.cnt,this__9137.shift,cljs.core.do_assoc.call(null,coll,this__9137.shift,this__9137.root,k,v),this__9137.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__9137.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__9137.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__9178 = null;
var G__9178__9179 = (function (tsym9140,k){
var this__9142 = this;
var tsym9140__9143 = this;

var coll__9144 = tsym9140__9143;

return cljs.core._lookup.call(null,coll__9144,k);
});
var G__9178__9180 = (function (tsym9141,k,not_found){
var this__9145 = this;
var tsym9141__9146 = this;

var coll__9147 = tsym9141__9146;

return cljs.core._lookup.call(null,coll__9147,k,not_found);
});
G__9178 = function(tsym9141,k,not_found){
switch(arguments.length){
case  2 :
return G__9178__9179.call(this,tsym9141,k);
case  3 :
return G__9178__9180.call(this,tsym9141,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9178;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9148 = this;
if(cljs.core.truth_(((this__9148.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__9149 = cljs.core.aclone.call(null,this__9148.tail);

new_tail__9149.push(o);
return (new cljs.core.PersistentVector(this__9148.meta,(this__9148.cnt + 1),this__9148.shift,this__9148.root,new_tail__9149));
} else
{var root_overflow_QMARK___9150 = ((this__9148.cnt >> 5) > (1 << this__9148.shift));
var new_shift__9151 = (cljs.core.truth_(root_overflow_QMARK___9150)?(this__9148.shift + 5):this__9148.shift);
var new_root__9153 = (cljs.core.truth_(root_overflow_QMARK___9150)?(function (){var n_r__9152 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__9152[0] = this__9148.root);
(n_r__9152[1] = cljs.core.new_path.call(null,this__9148.shift,this__9148.tail));
return n_r__9152;
})():cljs.core.push_tail.call(null,coll,this__9148.shift,this__9148.root,this__9148.tail));

return (new cljs.core.PersistentVector(this__9148.meta,(this__9148.cnt + 1),new_shift__9151,new_root__9153,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9182 = null;
var G__9182__9183 = (function (v,f){
var this__9154 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__9182__9184 = (function (v,f,start){
var this__9155 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__9182 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9182__9183.call(this,v,f);
case  3 :
return G__9182__9184.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9182;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9156 = this;
if(cljs.core.truth_((this__9156.cnt > 0)))
{var vector_seq__9157 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9156.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9157.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9158 = this;
return this__9158.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9159 = this;
if(cljs.core.truth_((this__9159.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__9159.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9160 = this;
if(cljs.core.truth_((this__9160.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__9160.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9160.meta);
} else
{if(cljs.core.truth_((1 < (this__9160.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__9160.meta,(this__9160.cnt - 1),this__9160.shift,this__9160.root,cljs.core.aclone.call(null,this__9160.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__9161 = cljs.core.array_for.call(null,coll,(this__9160.cnt - 2));
var nr__9162 = cljs.core.pop_tail.call(null,this__9160.shift,this__9160.root);
var new_root__9163 = (cljs.core.truth_((nr__9162 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9162);
var cnt_1__9164 = (this__9160.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____9165 = (5 < this__9160.shift);

if(cljs.core.truth_(and__3546__auto____9165))
{return ((new_root__9163[1]) === null);
} else
{return and__3546__auto____9165;
}
})()))
{return (new cljs.core.PersistentVector(this__9160.meta,cnt_1__9164,(this__9160.shift - 5),(new_root__9163[0]),new_tail__9161));
} else
{return (new cljs.core.PersistentVector(this__9160.meta,cnt_1__9164,this__9160.shift,new_root__9163,new_tail__9161));
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
var this__9166 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9167 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9168 = this;
return (new cljs.core.PersistentVector(meta,this__9168.cnt,this__9168.shift,this__9168.root,this__9168.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9169 = this;
return this__9169.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9186 = null;
var G__9186__9187 = (function (coll,n){
var this__9170 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__9186__9188 = (function (coll,n,not_found){
var this__9171 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9172 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____9172))
{return (n < this__9171.cnt);
} else
{return and__3546__auto____9172;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__9186 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9186__9187.call(this,coll,n);
case  3 :
return G__9186__9188.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9186;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9173 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9173.meta);
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
vector.cljs$lang$applyTo = (function (arglist__9190){
var args = cljs.core.seq( arglist__9190 );;
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
var this__9191 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9219 = null;
var G__9219__9220 = (function (coll,k){
var this__9192 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9219__9221 = (function (coll,k,not_found){
var this__9193 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9219 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9219__9220.call(this,coll,k);
case  3 :
return G__9219__9221.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9219;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__9194 = this;
var v_pos__9195 = (this__9194.start + key);

return (new cljs.core.Subvec(this__9194.meta,cljs.core._assoc.call(null,this__9194.v,v_pos__9195,val),this__9194.start,((this__9194.end > (v_pos__9195 + 1)) ? this__9194.end : (v_pos__9195 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__9223 = null;
var G__9223__9224 = (function (tsym9196,k){
var this__9198 = this;
var tsym9196__9199 = this;

var coll__9200 = tsym9196__9199;

return cljs.core._lookup.call(null,coll__9200,k);
});
var G__9223__9225 = (function (tsym9197,k,not_found){
var this__9201 = this;
var tsym9197__9202 = this;

var coll__9203 = tsym9197__9202;

return cljs.core._lookup.call(null,coll__9203,k,not_found);
});
G__9223 = function(tsym9197,k,not_found){
switch(arguments.length){
case  2 :
return G__9223__9224.call(this,tsym9197,k);
case  3 :
return G__9223__9225.call(this,tsym9197,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9223;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9204 = this;
return (new cljs.core.Subvec(this__9204.meta,cljs.core._assoc_n.call(null,this__9204.v,this__9204.end,o),this__9204.start,(this__9204.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9227 = null;
var G__9227__9228 = (function (coll,f){
var this__9205 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__9227__9229 = (function (coll,f,start){
var this__9206 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__9227 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9227__9228.call(this,coll,f);
case  3 :
return G__9227__9229.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9227;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9207 = this;
var subvec_seq__9208 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__9207.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9207.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__9208.call(null,this__9207.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9209 = this;
return (this__9209.end - this__9209.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9210 = this;
return cljs.core._nth.call(null,this__9210.v,(this__9210.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9211 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__9211.start,this__9211.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9211.meta,this__9211.v,this__9211.start,(this__9211.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9212 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9213 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9214 = this;
return (new cljs.core.Subvec(meta,this__9214.v,this__9214.start,this__9214.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9215 = this;
return this__9215.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9231 = null;
var G__9231__9232 = (function (coll,n){
var this__9216 = this;
return cljs.core._nth.call(null,this__9216.v,(this__9216.start + n));
});
var G__9231__9233 = (function (coll,n,not_found){
var this__9217 = this;
return cljs.core._nth.call(null,this__9217.v,(this__9217.start + n),not_found);
});
G__9231 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9231__9232.call(this,coll,n);
case  3 :
return G__9231__9233.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9231;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9218 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9218.meta);
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
var subvec__9235 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__9236 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__9235.call(this,v,start);
case  3 :
return subvec__9236.call(this,v,start,end);
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
var this__9238 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9239 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9240 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9241 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9241.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9242 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9243 = this;
return cljs.core._first.call(null,this__9243.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9244 = this;
var temp__3695__auto____9245 = cljs.core.next.call(null,this__9244.front);

if(cljs.core.truth_(temp__3695__auto____9245))
{var f1__9246 = temp__3695__auto____9245;

return (new cljs.core.PersistentQueueSeq(this__9244.meta,f1__9246,this__9244.rear));
} else
{if(cljs.core.truth_((this__9244.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9244.meta,this__9244.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9247 = this;
return this__9247.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9248 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9248.front,this__9248.rear));
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
var this__9249 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9250 = this;
if(cljs.core.truth_(this__9250.front))
{return (new cljs.core.PersistentQueue(this__9250.meta,(this__9250.count + 1),this__9250.front,cljs.core.conj.call(null,(function (){var or__3548__auto____9251 = this__9250.rear;

if(cljs.core.truth_(or__3548__auto____9251))
{return or__3548__auto____9251;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__9250.meta,(this__9250.count + 1),cljs.core.conj.call(null,this__9250.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9252 = this;
var rear__9253 = cljs.core.seq.call(null,this__9252.rear);

if(cljs.core.truth_((function (){var or__3548__auto____9254 = this__9252.front;

if(cljs.core.truth_(or__3548__auto____9254))
{return or__3548__auto____9254;
} else
{return rear__9253;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9252.front,cljs.core.seq.call(null,rear__9253)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9255 = this;
return this__9255.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9256 = this;
return cljs.core._first.call(null,this__9256.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9257 = this;
if(cljs.core.truth_(this__9257.front))
{var temp__3695__auto____9258 = cljs.core.next.call(null,this__9257.front);

if(cljs.core.truth_(temp__3695__auto____9258))
{var f1__9259 = temp__3695__auto____9258;

return (new cljs.core.PersistentQueue(this__9257.meta,(this__9257.count - 1),f1__9259,this__9257.rear));
} else
{return (new cljs.core.PersistentQueue(this__9257.meta,(this__9257.count - 1),cljs.core.seq.call(null,this__9257.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9260 = this;
return cljs.core.first.call(null,this__9260.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9261 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9263 = this;
return (new cljs.core.PersistentQueue(meta,this__9263.count,this__9263.front,this__9263.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9264 = this;
return this__9264.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9265 = this;
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
var this__9266 = this;
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
var len__9267 = array.length;

var i__9268 = 0;

while(true){
if(cljs.core.truth_((i__9268 < len__9267)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__9268]))))
{return i__9268;
} else
{{
var G__9269 = (i__9268 + incr);
i__9268 = G__9269;
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
var obj_map_contains_key_QMARK___9271 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___9272 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____9270 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____9270))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____9270;
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
return obj_map_contains_key_QMARK___9271.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___9272.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9275 = cljs.core.hash.call(null,a);
var b__9276 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__9275 < b__9276)))
{return -1;
} else
{if(cljs.core.truth_((a__9275 > b__9276)))
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
var this__9277 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9304 = null;
var G__9304__9305 = (function (coll,k){
var this__9278 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9304__9306 = (function (coll,k,not_found){
var this__9279 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9279.strobj,(this__9279.strobj[k]),not_found);
});
G__9304 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9304__9305.call(this,coll,k);
case  3 :
return G__9304__9306.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9304;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9280 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__9281 = goog.object.clone.call(null,this__9280.strobj);
var overwrite_QMARK___9282 = new_strobj__9281.hasOwnProperty(k);

(new_strobj__9281[k] = v);
if(cljs.core.truth_(overwrite_QMARK___9282))
{return (new cljs.core.ObjMap(this__9280.meta,this__9280.keys,new_strobj__9281));
} else
{var new_keys__9283 = cljs.core.aclone.call(null,this__9280.keys);

new_keys__9283.push(k);
return (new cljs.core.ObjMap(this__9280.meta,new_keys__9283,new_strobj__9281));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__9280.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9284 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9284.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__9308 = null;
var G__9308__9309 = (function (tsym9285,k){
var this__9287 = this;
var tsym9285__9288 = this;

var coll__9289 = tsym9285__9288;

return cljs.core._lookup.call(null,coll__9289,k);
});
var G__9308__9310 = (function (tsym9286,k,not_found){
var this__9290 = this;
var tsym9286__9291 = this;

var coll__9292 = tsym9286__9291;

return cljs.core._lookup.call(null,coll__9292,k,not_found);
});
G__9308 = function(tsym9286,k,not_found){
switch(arguments.length){
case  2 :
return G__9308__9309.call(this,tsym9286,k);
case  3 :
return G__9308__9310.call(this,tsym9286,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9308;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9293 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9294 = this;
if(cljs.core.truth_((this__9294.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__9274_SHARP_){
return cljs.core.vector.call(null,p1__9274_SHARP_,(this__9294.strobj[p1__9274_SHARP_]));
}),this__9294.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9295 = this;
return this__9295.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9296 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9297 = this;
return (new cljs.core.ObjMap(meta,this__9297.keys,this__9297.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9298 = this;
return this__9298.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9299 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9299.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9300 = this;
if(cljs.core.truth_((function (){var and__3546__auto____9301 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____9301))
{return this__9300.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____9301;
}
})()))
{var new_keys__9302 = cljs.core.aclone.call(null,this__9300.keys);
var new_strobj__9303 = goog.object.clone.call(null,this__9300.strobj);

new_keys__9302.splice(cljs.core.scan_array.call(null,1,k,new_keys__9302),1);
cljs.core.js_delete.call(null,new_strobj__9303,k);
return (new cljs.core.ObjMap(this__9300.meta,new_keys__9302,new_strobj__9303));
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
var this__9313 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9351 = null;
var G__9351__9352 = (function (coll,k){
var this__9314 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9351__9353 = (function (coll,k,not_found){
var this__9315 = this;
var bucket__9316 = (this__9315.hashobj[cljs.core.hash.call(null,k)]);
var i__9317 = (cljs.core.truth_(bucket__9316)?cljs.core.scan_array.call(null,2,k,bucket__9316):null);

if(cljs.core.truth_(i__9317))
{return (bucket__9316[(i__9317 + 1)]);
} else
{return not_found;
}
});
G__9351 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9351__9352.call(this,coll,k);
case  3 :
return G__9351__9353.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9351;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9318 = this;
var h__9319 = cljs.core.hash.call(null,k);
var bucket__9320 = (this__9318.hashobj[h__9319]);

if(cljs.core.truth_(bucket__9320))
{var new_bucket__9321 = cljs.core.aclone.call(null,bucket__9320);
var new_hashobj__9322 = goog.object.clone.call(null,this__9318.hashobj);

(new_hashobj__9322[h__9319] = new_bucket__9321);
var temp__3695__auto____9323 = cljs.core.scan_array.call(null,2,k,new_bucket__9321);

if(cljs.core.truth_(temp__3695__auto____9323))
{var i__9324 = temp__3695__auto____9323;

(new_bucket__9321[(i__9324 + 1)] = v);
return (new cljs.core.HashMap(this__9318.meta,this__9318.count,new_hashobj__9322));
} else
{new_bucket__9321.push(k,v);
return (new cljs.core.HashMap(this__9318.meta,(this__9318.count + 1),new_hashobj__9322));
}
} else
{var new_hashobj__9325 = goog.object.clone.call(null,this__9318.hashobj);

(new_hashobj__9325[h__9319] = [k,v]);
return (new cljs.core.HashMap(this__9318.meta,(this__9318.count + 1),new_hashobj__9325));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9326 = this;
var bucket__9327 = (this__9326.hashobj[cljs.core.hash.call(null,k)]);
var i__9328 = (cljs.core.truth_(bucket__9327)?cljs.core.scan_array.call(null,2,k,bucket__9327):null);

if(cljs.core.truth_(i__9328))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__9355 = null;
var G__9355__9356 = (function (tsym9329,k){
var this__9331 = this;
var tsym9329__9332 = this;

var coll__9333 = tsym9329__9332;

return cljs.core._lookup.call(null,coll__9333,k);
});
var G__9355__9357 = (function (tsym9330,k,not_found){
var this__9334 = this;
var tsym9330__9335 = this;

var coll__9336 = tsym9330__9335;

return cljs.core._lookup.call(null,coll__9336,k,not_found);
});
G__9355 = function(tsym9330,k,not_found){
switch(arguments.length){
case  2 :
return G__9355__9356.call(this,tsym9330,k);
case  3 :
return G__9355__9357.call(this,tsym9330,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9355;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9337 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9338 = this;
if(cljs.core.truth_((this__9338.count > 0)))
{var hashes__9339 = cljs.core.js_keys.call(null,this__9338.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__9312_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9338.hashobj[p1__9312_SHARP_])));
}),hashes__9339);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9340 = this;
return this__9340.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9341 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9342 = this;
return (new cljs.core.HashMap(meta,this__9342.count,this__9342.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9343 = this;
return this__9343.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9344 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9344.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9345 = this;
var h__9346 = cljs.core.hash.call(null,k);
var bucket__9347 = (this__9345.hashobj[h__9346]);
var i__9348 = (cljs.core.truth_(bucket__9347)?cljs.core.scan_array.call(null,2,k,bucket__9347):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__9348)))
{return coll;
} else
{var new_hashobj__9349 = goog.object.clone.call(null,this__9345.hashobj);

if(cljs.core.truth_((3 > bucket__9347.length)))
{cljs.core.js_delete.call(null,new_hashobj__9349,h__9346);
} else
{var new_bucket__9350 = cljs.core.aclone.call(null,bucket__9347);

new_bucket__9350.splice(i__9348,2);
(new_hashobj__9349[h__9346] = new_bucket__9350);
}
return (new cljs.core.HashMap(this__9345.meta,(this__9345.count - 1),new_hashobj__9349));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9359 = ks.length;

var i__9360 = 0;
var out__9361 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__9360 < len__9359)))
{{
var G__9362 = (i__9360 + 1);
var G__9363 = cljs.core.assoc.call(null,out__9361,(ks[i__9360]),(vs[i__9360]));
i__9360 = G__9362;
out__9361 = G__9363;
continue;
}
} else
{return out__9361;
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
var in$__9364 = cljs.core.seq.call(null,keyvals);
var out__9365 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__9364))
{{
var G__9366 = cljs.core.nnext.call(null,in$__9364);
var G__9367 = cljs.core.assoc.call(null,out__9365,cljs.core.first.call(null,in$__9364),cljs.core.second.call(null,in$__9364));
in$__9364 = G__9366;
out__9365 = G__9367;
continue;
}
} else
{return out__9365;
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
hash_map.cljs$lang$applyTo = (function (arglist__9368){
var keyvals = cljs.core.seq( arglist__9368 );;
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
{return cljs.core.reduce.call(null,(function (p1__9369_SHARP_,p2__9370_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____9371 = p1__9369_SHARP_;

if(cljs.core.truth_(or__3548__auto____9371))
{return or__3548__auto____9371;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__9370_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9372){
var maps = cljs.core.seq( arglist__9372 );;
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
{var merge_entry__9375 = (function (m,e){
var k__9373 = cljs.core.first.call(null,e);
var v__9374 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__9373)))
{return cljs.core.assoc.call(null,m,k__9373,f.call(null,cljs.core.get.call(null,m,k__9373),v__9374));
} else
{return cljs.core.assoc.call(null,m,k__9373,v__9374);
}
});
var merge2__9377 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9375,(function (){var or__3548__auto____9376 = m1;

if(cljs.core.truth_(or__3548__auto____9376))
{return or__3548__auto____9376;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__9377,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9378){
var f = cljs.core.first(arglist__9378);
var maps = cljs.core.rest(arglist__9378);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9380 = cljs.core.ObjMap.fromObject([],{});
var keys__9381 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__9381))
{var key__9382 = cljs.core.first.call(null,keys__9381);
var entry__9383 = cljs.core.get.call(null,map,key__9382,"\uFDD0'user/not-found");

{
var G__9384 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__9383,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9380,key__9382,entry__9383):ret__9380);
var G__9385 = cljs.core.next.call(null,keys__9381);
ret__9380 = G__9384;
keys__9381 = G__9385;
continue;
}
} else
{return ret__9380;
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
var this__9386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9407 = null;
var G__9407__9408 = (function (coll,v){
var this__9387 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__9407__9409 = (function (coll,v,not_found){
var this__9388 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9388.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__9407 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__9407__9408.call(this,coll,v);
case  3 :
return G__9407__9409.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9407;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__9411 = null;
var G__9411__9412 = (function (tsym9389,k){
var this__9391 = this;
var tsym9389__9392 = this;

var coll__9393 = tsym9389__9392;

return cljs.core._lookup.call(null,coll__9393,k);
});
var G__9411__9413 = (function (tsym9390,k,not_found){
var this__9394 = this;
var tsym9390__9395 = this;

var coll__9396 = tsym9390__9395;

return cljs.core._lookup.call(null,coll__9396,k,not_found);
});
G__9411 = function(tsym9390,k,not_found){
switch(arguments.length){
case  2 :
return G__9411__9412.call(this,tsym9390,k);
case  3 :
return G__9411__9413.call(this,tsym9390,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9411;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9397 = this;
return (new cljs.core.Set(this__9397.meta,cljs.core.assoc.call(null,this__9397.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9398 = this;
return cljs.core.keys.call(null,this__9398.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__9399 = this;
return (new cljs.core.Set(this__9399.meta,cljs.core.dissoc.call(null,this__9399.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9400 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9401 = this;
var and__3546__auto____9402 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____9402))
{var and__3546__auto____9403 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____9403))
{return cljs.core.every_QMARK_.call(null,(function (p1__9379_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9379_SHARP_);
}),other);
} else
{return and__3546__auto____9403;
}
} else
{return and__3546__auto____9402;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9404 = this;
return (new cljs.core.Set(meta,this__9404.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9405 = this;
return this__9405.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9406 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__9406.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9416 = cljs.core.seq.call(null,coll);
var out__9417 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__9416))))
{{
var G__9418 = cljs.core.rest.call(null,in$__9416);
var G__9419 = cljs.core.conj.call(null,out__9417,cljs.core.first.call(null,in$__9416));
in$__9416 = G__9418;
out__9417 = G__9419;
continue;
}
} else
{return out__9417;
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
{var n__9420 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____9421 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____9421))
{var e__9422 = temp__3695__auto____9421;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9422));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9420,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9415_SHARP_){
var temp__3695__auto____9423 = cljs.core.find.call(null,smap,p1__9415_SHARP_);

if(cljs.core.truth_(temp__3695__auto____9423))
{var e__9424 = temp__3695__auto____9423;

return cljs.core.second.call(null,e__9424);
} else
{return p1__9415_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9432 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9425,seen){
while(true){
var vec__9426__9427 = p__9425;
var f__9428 = cljs.core.nth.call(null,vec__9426__9427,0,null);
var xs__9429 = vec__9426__9427;

var temp__3698__auto____9430 = cljs.core.seq.call(null,xs__9429);

if(cljs.core.truth_(temp__3698__auto____9430))
{var s__9431 = temp__3698__auto____9430;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__9428)))
{{
var G__9433 = cljs.core.rest.call(null,s__9431);
var G__9434 = seen;
p__9425 = G__9433;
seen = G__9434;
continue;
}
} else
{return cljs.core.cons.call(null,f__9428,step.call(null,cljs.core.rest.call(null,s__9431),cljs.core.conj.call(null,seen,f__9428)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__9432.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9435 = cljs.core.PersistentVector.fromArray([]);
var s__9436 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9436)))
{{
var G__9437 = cljs.core.conj.call(null,ret__9435,cljs.core.first.call(null,s__9436));
var G__9438 = cljs.core.next.call(null,s__9436);
ret__9435 = G__9437;
s__9436 = G__9438;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9435);
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
{if(cljs.core.truth_((function (){var or__3548__auto____9439 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9439))
{return or__3548__auto____9439;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9440 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9440 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9440 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____9441 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9441))
{return or__3548__auto____9441;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9442 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9442 > -1)))
{return cljs.core.subs.call(null,x,2,i__9442);
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
var map__9445 = cljs.core.ObjMap.fromObject([],{});
var ks__9446 = cljs.core.seq.call(null,keys);
var vs__9447 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9448 = ks__9446;

if(cljs.core.truth_(and__3546__auto____9448))
{return vs__9447;
} else
{return and__3546__auto____9448;
}
})()))
{{
var G__9449 = cljs.core.assoc.call(null,map__9445,cljs.core.first.call(null,ks__9446),cljs.core.first.call(null,vs__9447));
var G__9450 = cljs.core.next.call(null,ks__9446);
var G__9451 = cljs.core.next.call(null,vs__9447);
map__9445 = G__9449;
ks__9446 = G__9450;
vs__9447 = G__9451;
continue;
}
} else
{return map__9445;
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
var max_key__9454 = (function (k,x){
return x;
});
var max_key__9455 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__9456 = (function() { 
var G__9458__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9443_SHARP_,p2__9444_SHARP_){
return max_key.call(null,k,p1__9443_SHARP_,p2__9444_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9458 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9458__delegate.call(this, k, x, y, more);
};
G__9458.cljs$lang$maxFixedArity = 3;
G__9458.cljs$lang$applyTo = (function (arglist__9459){
var k = cljs.core.first(arglist__9459);
var x = cljs.core.first(cljs.core.next(arglist__9459));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9459)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9459)));
return G__9458__delegate.call(this, k, x, y, more);
});
return G__9458;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__9454.call(this,k,x);
case  3 :
return max_key__9455.call(this,k,x,y);
default:
return max_key__9456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__9456.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__9460 = (function (k,x){
return x;
});
var min_key__9461 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__9462 = (function() { 
var G__9464__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9452_SHARP_,p2__9453_SHARP_){
return min_key.call(null,k,p1__9452_SHARP_,p2__9453_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9464 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9464__delegate.call(this, k, x, y, more);
};
G__9464.cljs$lang$maxFixedArity = 3;
G__9464.cljs$lang$applyTo = (function (arglist__9465){
var k = cljs.core.first(arglist__9465);
var x = cljs.core.first(cljs.core.next(arglist__9465));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9465)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9465)));
return G__9464__delegate.call(this, k, x, y, more);
});
return G__9464;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__9460.call(this,k,x);
case  3 :
return min_key__9461.call(this,k,x,y);
default:
return min_key__9462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__9462.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__9468 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__9469 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9466 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9466))
{var s__9467 = temp__3698__auto____9466;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9467),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9467)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__9468.call(this,n,step);
case  3 :
return partition_all__9469.call(this,n,step,coll);
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
var temp__3698__auto____9471 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9471))
{var s__9472 = temp__3698__auto____9471;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9472))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9472),take_while.call(null,pred,cljs.core.rest.call(null,s__9472)));
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
var this__9473 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__9474 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9490 = null;
var G__9490__9491 = (function (rng,f){
var this__9475 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__9490__9492 = (function (rng,f,s){
var this__9476 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__9490 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__9490__9491.call(this,rng,f);
case  3 :
return G__9490__9492.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9490;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__9477 = this;
var comp__9478 = (cljs.core.truth_((this__9477.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__9478.call(null,this__9477.start,this__9477.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__9479 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__9479.end - this__9479.start) / this__9479.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__9480 = this;
return this__9480.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__9481 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9481.meta,(this__9481.start + this__9481.step),this__9481.end,this__9481.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__9482 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__9483 = this;
return (new cljs.core.Range(meta,this__9483.start,this__9483.end,this__9483.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__9484 = this;
return this__9484.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9494 = null;
var G__9494__9495 = (function (rng,n){
var this__9485 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9485.start + (n * this__9485.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9486 = (this__9485.start > this__9485.end);

if(cljs.core.truth_(and__3546__auto____9486))
{return cljs.core._EQ_.call(null,this__9485.step,0);
} else
{return and__3546__auto____9486;
}
})()))
{return this__9485.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9494__9496 = (function (rng,n,not_found){
var this__9487 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9487.start + (n * this__9487.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9488 = (this__9487.start > this__9487.end);

if(cljs.core.truth_(and__3546__auto____9488))
{return cljs.core._EQ_.call(null,this__9487.step,0);
} else
{return and__3546__auto____9488;
}
})()))
{return this__9487.start;
} else
{return not_found;
}
}
});
G__9494 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9494__9495.call(this,rng,n);
case  3 :
return G__9494__9496.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9494;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__9489 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9489.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9498 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9499 = (function (end){
return range.call(null,0,end,1);
});
var range__9500 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9501 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9498.call(this);
case  1 :
return range__9499.call(this,start);
case  2 :
return range__9500.call(this,start,end);
case  3 :
return range__9501.call(this,start,end,step);
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
var temp__3698__auto____9503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9503))
{var s__9504 = temp__3698__auto____9503;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9504),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9504)));
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
var temp__3698__auto____9506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9506))
{var s__9507 = temp__3698__auto____9506;

var fst__9508 = cljs.core.first.call(null,s__9507);
var fv__9509 = f.call(null,fst__9508);
var run__9510 = cljs.core.cons.call(null,fst__9508,cljs.core.take_while.call(null,(function (p1__9505_SHARP_){
return cljs.core._EQ_.call(null,fv__9509,f.call(null,p1__9505_SHARP_));
}),cljs.core.next.call(null,s__9507)));

return cljs.core.cons.call(null,run__9510,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9510),s__9507))));
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
var reductions__9525 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9521 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9521))
{var s__9522 = temp__3695__auto____9521;

return reductions.call(null,f,cljs.core.first.call(null,s__9522),cljs.core.rest.call(null,s__9522));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9526 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9523 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9523))
{var s__9524 = temp__3698__auto____9523;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9524)),cljs.core.rest.call(null,s__9524));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9525.call(this,f,init);
case  3 :
return reductions__9526.call(this,f,init,coll);
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
var juxt__9529 = (function (f){
return (function() {
var G__9534 = null;
var G__9534__9535 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9534__9536 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9534__9537 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9534__9538 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9534__9539 = (function() { 
var G__9541__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9541 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9541__delegate.call(this, x, y, z, args);
};
G__9541.cljs$lang$maxFixedArity = 3;
G__9541.cljs$lang$applyTo = (function (arglist__9542){
var x = cljs.core.first(arglist__9542);
var y = cljs.core.first(cljs.core.next(arglist__9542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9542)));
return G__9541__delegate.call(this, x, y, z, args);
});
return G__9541;
})()
;
G__9534 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9534__9535.call(this);
case  1 :
return G__9534__9536.call(this,x);
case  2 :
return G__9534__9537.call(this,x,y);
case  3 :
return G__9534__9538.call(this,x,y,z);
default:
return G__9534__9539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9534.cljs$lang$maxFixedArity = 3;
G__9534.cljs$lang$applyTo = G__9534__9539.cljs$lang$applyTo;
return G__9534;
})()
});
var juxt__9530 = (function (f,g){
return (function() {
var G__9543 = null;
var G__9543__9544 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9543__9545 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9543__9546 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9543__9547 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9543__9548 = (function() { 
var G__9550__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9550 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9550__delegate.call(this, x, y, z, args);
};
G__9550.cljs$lang$maxFixedArity = 3;
G__9550.cljs$lang$applyTo = (function (arglist__9551){
var x = cljs.core.first(arglist__9551);
var y = cljs.core.first(cljs.core.next(arglist__9551));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9551)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9551)));
return G__9550__delegate.call(this, x, y, z, args);
});
return G__9550;
})()
;
G__9543 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9543__9544.call(this);
case  1 :
return G__9543__9545.call(this,x);
case  2 :
return G__9543__9546.call(this,x,y);
case  3 :
return G__9543__9547.call(this,x,y,z);
default:
return G__9543__9548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9543.cljs$lang$maxFixedArity = 3;
G__9543.cljs$lang$applyTo = G__9543__9548.cljs$lang$applyTo;
return G__9543;
})()
});
var juxt__9531 = (function (f,g,h){
return (function() {
var G__9552 = null;
var G__9552__9553 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9552__9554 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9552__9555 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9552__9556 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9552__9557 = (function() { 
var G__9559__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9559 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9559__delegate.call(this, x, y, z, args);
};
G__9559.cljs$lang$maxFixedArity = 3;
G__9559.cljs$lang$applyTo = (function (arglist__9560){
var x = cljs.core.first(arglist__9560);
var y = cljs.core.first(cljs.core.next(arglist__9560));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9560)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9560)));
return G__9559__delegate.call(this, x, y, z, args);
});
return G__9559;
})()
;
G__9552 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9552__9553.call(this);
case  1 :
return G__9552__9554.call(this,x);
case  2 :
return G__9552__9555.call(this,x,y);
case  3 :
return G__9552__9556.call(this,x,y,z);
default:
return G__9552__9557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9552.cljs$lang$maxFixedArity = 3;
G__9552.cljs$lang$applyTo = G__9552__9557.cljs$lang$applyTo;
return G__9552;
})()
});
var juxt__9532 = (function() { 
var G__9561__delegate = function (f,g,h,fs){
var fs__9528 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9562 = null;
var G__9562__9563 = (function (){
return cljs.core.reduce.call(null,(function (p1__9511_SHARP_,p2__9512_SHARP_){
return cljs.core.conj.call(null,p1__9511_SHARP_,p2__9512_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9528);
});
var G__9562__9564 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9513_SHARP_,p2__9514_SHARP_){
return cljs.core.conj.call(null,p1__9513_SHARP_,p2__9514_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9528);
});
var G__9562__9565 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9515_SHARP_,p2__9516_SHARP_){
return cljs.core.conj.call(null,p1__9515_SHARP_,p2__9516_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9528);
});
var G__9562__9566 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9517_SHARP_,p2__9518_SHARP_){
return cljs.core.conj.call(null,p1__9517_SHARP_,p2__9518_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9528);
});
var G__9562__9567 = (function() { 
var G__9569__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9519_SHARP_,p2__9520_SHARP_){
return cljs.core.conj.call(null,p1__9519_SHARP_,cljs.core.apply.call(null,p2__9520_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9528);
};
var G__9569 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9569__delegate.call(this, x, y, z, args);
};
G__9569.cljs$lang$maxFixedArity = 3;
G__9569.cljs$lang$applyTo = (function (arglist__9570){
var x = cljs.core.first(arglist__9570);
var y = cljs.core.first(cljs.core.next(arglist__9570));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9570)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9570)));
return G__9569__delegate.call(this, x, y, z, args);
});
return G__9569;
})()
;
G__9562 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9562__9563.call(this);
case  1 :
return G__9562__9564.call(this,x);
case  2 :
return G__9562__9565.call(this,x,y);
case  3 :
return G__9562__9566.call(this,x,y,z);
default:
return G__9562__9567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9562.cljs$lang$maxFixedArity = 3;
G__9562.cljs$lang$applyTo = G__9562__9567.cljs$lang$applyTo;
return G__9562;
})()
};
var G__9561 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9561__delegate.call(this, f, g, h, fs);
};
G__9561.cljs$lang$maxFixedArity = 3;
G__9561.cljs$lang$applyTo = (function (arglist__9571){
var f = cljs.core.first(arglist__9571);
var g = cljs.core.first(cljs.core.next(arglist__9571));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9571)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9571)));
return G__9561__delegate.call(this, f, g, h, fs);
});
return G__9561;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9529.call(this,f);
case  2 :
return juxt__9530.call(this,f,g);
case  3 :
return juxt__9531.call(this,f,g,h);
default:
return juxt__9532.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9532.cljs$lang$applyTo;
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
var dorun__9573 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9576 = cljs.core.next.call(null,coll);
coll = G__9576;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9574 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9572 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9572))
{return (n > 0);
} else
{return and__3546__auto____9572;
}
})()))
{{
var G__9577 = (n - 1);
var G__9578 = cljs.core.next.call(null,coll);
n = G__9577;
coll = G__9578;
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
return dorun__9573.call(this,n);
case  2 :
return dorun__9574.call(this,n,coll);
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
var doall__9579 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9580 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9579.call(this,n);
case  2 :
return doall__9580.call(this,n,coll);
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
var matches__9582 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9582),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9582),1)))
{return cljs.core.first.call(null,matches__9582);
} else
{return cljs.core.vec.call(null,matches__9582);
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
var matches__9583 = re.exec(s);

if(cljs.core.truth_((matches__9583 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9583),1)))
{return cljs.core.first.call(null,matches__9583);
} else
{return cljs.core.vec.call(null,matches__9583);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9584 = cljs.core.re_find.call(null,re,s);
var match_idx__9585 = s.search(re);
var match_str__9586 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9584))?cljs.core.first.call(null,match_data__9584):match_data__9584);
var post_match__9587 = cljs.core.subs.call(null,s,(match_idx__9585 + cljs.core.count.call(null,match_str__9586)));

if(cljs.core.truth_(match_data__9584))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9584,re_seq.call(null,re,post_match__9587));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9589__9590 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9591 = cljs.core.nth.call(null,vec__9589__9590,0,null);
var flags__9592 = cljs.core.nth.call(null,vec__9589__9590,1,null);
var pattern__9593 = cljs.core.nth.call(null,vec__9589__9590,2,null);

return (new RegExp(pattern__9593,flags__9592));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9588_SHARP_){
return print_one.call(null,p1__9588_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9594 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____9594))
{var and__3546__auto____9598 = (function (){var x__3028__auto____9595 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9596 = x__3028__auto____9595;

if(cljs.core.truth_(and__3546__auto____9596))
{var and__3546__auto____9597 = x__3028__auto____9595.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____9597))
{return cljs.core.not.call(null,x__3028__auto____9595.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____9597;
}
} else
{return and__3546__auto____9596;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____9595);
}
})();

if(cljs.core.truth_(and__3546__auto____9598))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9598;
}
} else
{return and__3546__auto____9594;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____9599 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9600 = x__3028__auto____9599;

if(cljs.core.truth_(and__3546__auto____9600))
{var and__3546__auto____9601 = x__3028__auto____9599.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____9601))
{return cljs.core.not.call(null,x__3028__auto____9599.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____9601;
}
} else
{return and__3546__auto____9600;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____9599);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9602 = cljs.core.first.call(null,objs);
var sb__9603 = (new goog.string.StringBuffer());

var G__9604__9605 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9604__9605))
{var obj__9606 = cljs.core.first.call(null,G__9604__9605);
var G__9604__9607 = G__9604__9605;

while(true){
if(cljs.core.truth_((obj__9606 === first_obj__9602)))
{} else
{sb__9603.append(" ");
}
var G__9608__9609 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9606,opts));

if(cljs.core.truth_(G__9608__9609))
{var string__9610 = cljs.core.first.call(null,G__9608__9609);
var G__9608__9611 = G__9608__9609;

while(true){
sb__9603.append(string__9610);
var temp__3698__auto____9612 = cljs.core.next.call(null,G__9608__9611);

if(cljs.core.truth_(temp__3698__auto____9612))
{var G__9608__9613 = temp__3698__auto____9612;

{
var G__9616 = cljs.core.first.call(null,G__9608__9613);
var G__9617 = G__9608__9613;
string__9610 = G__9616;
G__9608__9611 = G__9617;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9614 = cljs.core.next.call(null,G__9604__9607);

if(cljs.core.truth_(temp__3698__auto____9614))
{var G__9604__9615 = temp__3698__auto____9614;

{
var G__9618 = cljs.core.first.call(null,G__9604__9615);
var G__9619 = G__9604__9615;
obj__9606 = G__9618;
G__9604__9607 = G__9619;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9603;
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
var sb__9620 = cljs.core.pr_sb.call(null,objs,opts);

sb__9620.append("\n");
return cljs.core.str.call(null,sb__9620);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9621 = cljs.core.first.call(null,objs);

var G__9622__9623 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9622__9623))
{var obj__9624 = cljs.core.first.call(null,G__9622__9623);
var G__9622__9625 = G__9622__9623;

while(true){
if(cljs.core.truth_((obj__9624 === first_obj__9621)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9626__9627 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9624,opts));

if(cljs.core.truth_(G__9626__9627))
{var string__9628 = cljs.core.first.call(null,G__9626__9627);
var G__9626__9629 = G__9626__9627;

while(true){
cljs.core.string_print.call(null,string__9628);
var temp__3698__auto____9630 = cljs.core.next.call(null,G__9626__9629);

if(cljs.core.truth_(temp__3698__auto____9630))
{var G__9626__9631 = temp__3698__auto____9630;

{
var G__9634 = cljs.core.first.call(null,G__9626__9631);
var G__9635 = G__9626__9631;
string__9628 = G__9634;
G__9626__9629 = G__9635;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9632 = cljs.core.next.call(null,G__9622__9625);

if(cljs.core.truth_(temp__3698__auto____9632))
{var G__9622__9633 = temp__3698__auto____9632;

{
var G__9636 = cljs.core.first.call(null,G__9622__9633);
var G__9637 = G__9622__9633;
obj__9624 = G__9636;
G__9622__9625 = G__9637;
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
pr_str.cljs$lang$applyTo = (function (arglist__9638){
var objs = cljs.core.seq( arglist__9638 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__9639){
var objs = cljs.core.seq( arglist__9639 );;
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
pr.cljs$lang$applyTo = (function (arglist__9640){
var objs = cljs.core.seq( arglist__9640 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9641){
var objs = cljs.core.seq( arglist__9641 );;
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
print_str.cljs$lang$applyTo = (function (arglist__9642){
var objs = cljs.core.seq( arglist__9642 );;
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
println.cljs$lang$applyTo = (function (arglist__9643){
var objs = cljs.core.seq( arglist__9643 );;
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
println_str.cljs$lang$applyTo = (function (arglist__9644){
var objs = cljs.core.seq( arglist__9644 );;
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
prn.cljs$lang$applyTo = (function (arglist__9645){
var objs = cljs.core.seq( arglist__9645 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9646 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9646,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9647 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9647))
{var nspc__9648 = temp__3698__auto____9647;

return cljs.core.str.call(null,nspc__9648,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9649 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9649))
{var nspc__9650 = temp__3698__auto____9649;

return cljs.core.str.call(null,nspc__9650,"/");
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
var pr_pair__9651 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9651,"{",", ","}",opts,coll);
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
var this__9652 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9653 = this;
var G__9654__9655 = cljs.core.seq.call(null,this__9653.watches);

if(cljs.core.truth_(G__9654__9655))
{var G__9657__9659 = cljs.core.first.call(null,G__9654__9655);
var vec__9658__9660 = G__9657__9659;
var key__9661 = cljs.core.nth.call(null,vec__9658__9660,0,null);
var f__9662 = cljs.core.nth.call(null,vec__9658__9660,1,null);
var G__9654__9663 = G__9654__9655;

var G__9657__9664 = G__9657__9659;
var G__9654__9665 = G__9654__9663;

while(true){
var vec__9666__9667 = G__9657__9664;
var key__9668 = cljs.core.nth.call(null,vec__9666__9667,0,null);
var f__9669 = cljs.core.nth.call(null,vec__9666__9667,1,null);
var G__9654__9670 = G__9654__9665;

f__9669.call(null,key__9668,this$,oldval,newval);
var temp__3698__auto____9671 = cljs.core.next.call(null,G__9654__9670);

if(cljs.core.truth_(temp__3698__auto____9671))
{var G__9654__9672 = temp__3698__auto____9671;

{
var G__9679 = cljs.core.first.call(null,G__9654__9672);
var G__9680 = G__9654__9672;
G__9657__9664 = G__9679;
G__9654__9665 = G__9680;
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
var this__9673 = this;
return this$.watches = cljs.core.assoc.call(null,this__9673.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9674 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9674.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9675 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9675.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9676 = this;
return this__9676.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9677 = this;
return this__9677.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9678 = this;
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
var atom__9687 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9688 = (function() { 
var G__9690__delegate = function (x,p__9681){
var map__9682__9683 = p__9681;
var map__9682__9684 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9682__9683))?cljs.core.apply.call(null,cljs.core.hash_map,map__9682__9683):map__9682__9683);
var validator__9685 = cljs.core.get.call(null,map__9682__9684,"\uFDD0'validator");
var meta__9686 = cljs.core.get.call(null,map__9682__9684,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9686,validator__9685,null));
};
var G__9690 = function (x,var_args){
var p__9681 = null;
if (goog.isDef(var_args)) {
  p__9681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9690__delegate.call(this, x, p__9681);
};
G__9690.cljs$lang$maxFixedArity = 1;
G__9690.cljs$lang$applyTo = (function (arglist__9691){
var x = cljs.core.first(arglist__9691);
var p__9681 = cljs.core.rest(arglist__9691);
return G__9690__delegate.call(this, x, p__9681);
});
return G__9690;
})()
;
atom = function(x,var_args){
var p__9681 = var_args;
switch(arguments.length){
case  1 :
return atom__9687.call(this,x);
default:
return atom__9688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9688.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9692 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9692))
{var validate__9693 = temp__3698__auto____9692;

if(cljs.core.truth_(validate__9693.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9694 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9694,new_value);
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
var swap_BANG___9695 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9696 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9697 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9698 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9699 = (function() { 
var G__9701__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9701 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9701__delegate.call(this, a, f, x, y, z, more);
};
G__9701.cljs$lang$maxFixedArity = 5;
G__9701.cljs$lang$applyTo = (function (arglist__9702){
var a = cljs.core.first(arglist__9702);
var f = cljs.core.first(cljs.core.next(arglist__9702));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9702)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9702))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9702)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9702)))));
return G__9701__delegate.call(this, a, f, x, y, z, more);
});
return G__9701;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9695.call(this,a,f);
case  3 :
return swap_BANG___9696.call(this,a,f,x);
case  4 :
return swap_BANG___9697.call(this,a,f,x,y);
case  5 :
return swap_BANG___9698.call(this,a,f,x,y,z);
default:
return swap_BANG___9699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9699.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9703){
var iref = cljs.core.first(arglist__9703);
var f = cljs.core.first(cljs.core.next(arglist__9703));
var args = cljs.core.rest(cljs.core.next(arglist__9703));
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
var gensym__9704 = (function (){
return gensym.call(null,"G__");
});
var gensym__9705 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9704.call(this);
case  1 :
return gensym__9705.call(this,prefix_string);
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
var this__9707 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9707.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9708 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9708.state,(function (p__9709){
var curr_state__9710 = p__9709;
var curr_state__9711 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9710))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9710):curr_state__9710);
var done__9712 = cljs.core.get.call(null,curr_state__9711,"\uFDD0'done");

if(cljs.core.truth_(done__9712))
{return curr_state__9711;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9708.f.call(null)});
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
var map__9713__9714 = options;
var map__9713__9715 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9713__9714))?cljs.core.apply.call(null,cljs.core.hash_map,map__9713__9714):map__9713__9714);
var keywordize_keys__9716 = cljs.core.get.call(null,map__9713__9715,"\uFDD0'keywordize-keys");
var keyfn__9717 = (cljs.core.truth_(keywordize_keys__9716)?cljs.core.keyword:cljs.core.str);
var f__9723 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____9722 = (function iter__9718(s__9719){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9719__9720 = s__9719;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9719__9720)))
{var k__9721 = cljs.core.first.call(null,s__9719__9720);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9717.call(null,k__9721),thisfn.call(null,(x[k__9721]))]),iter__9718.call(null,cljs.core.rest.call(null,s__9719__9720)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____9722.call(null,cljs.core.js_keys.call(null,x));
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

return f__9723.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9724){
var x = cljs.core.first(arglist__9724);
var options = cljs.core.rest(arglist__9724);
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
var mem__9725 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9729__delegate = function (args){
var temp__3695__auto____9726 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9725),args);

if(cljs.core.truth_(temp__3695__auto____9726))
{var v__9727 = temp__3695__auto____9726;

return v__9727;
} else
{var ret__9728 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9725,cljs.core.assoc,args,ret__9728);
return ret__9728;
}
};
var G__9729 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9729__delegate.call(this, args);
};
G__9729.cljs$lang$maxFixedArity = 0;
G__9729.cljs$lang$applyTo = (function (arglist__9730){
var args = cljs.core.seq( arglist__9730 );;
return G__9729__delegate.call(this, args);
});
return G__9729;
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
var trampoline__9732 = (function (f){
while(true){
var ret__9731 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9731)))
{{
var G__9735 = ret__9731;
f = G__9735;
continue;
}
} else
{return ret__9731;
}
break;
}
});
var trampoline__9733 = (function() { 
var G__9736__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9736 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9736__delegate.call(this, f, args);
};
G__9736.cljs$lang$maxFixedArity = 1;
G__9736.cljs$lang$applyTo = (function (arglist__9737){
var f = cljs.core.first(arglist__9737);
var args = cljs.core.rest(arglist__9737);
return G__9736__delegate.call(this, f, args);
});
return G__9736;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9732.call(this,f);
default:
return trampoline__9733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9733.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9738 = (function (){
return rand.call(null,1);
});
var rand__9739 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9738.call(this);
case  1 :
return rand__9739.call(this,n);
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
var k__9741 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9741,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9741,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___9750 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9751 = (function (h,child,parent){
var or__3548__auto____9742 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9742))
{return or__3548__auto____9742;
} else
{var or__3548__auto____9743 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9743))
{return or__3548__auto____9743;
} else
{var and__3546__auto____9744 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9744))
{var and__3546__auto____9745 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9745))
{var and__3546__auto____9746 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9746))
{var ret__9747 = true;
var i__9748 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9749 = cljs.core.not.call(null,ret__9747);

if(cljs.core.truth_(or__3548__auto____9749))
{return or__3548__auto____9749;
} else
{return cljs.core._EQ_.call(null,i__9748,cljs.core.count.call(null,parent));
}
})()))
{return ret__9747;
} else
{{
var G__9753 = isa_QMARK_.call(null,h,child.call(null,i__9748),parent.call(null,i__9748));
var G__9754 = (i__9748 + 1);
ret__9747 = G__9753;
i__9748 = G__9754;
continue;
}
}
break;
}
} else
{return and__3546__auto____9746;
}
} else
{return and__3546__auto____9745;
}
} else
{return and__3546__auto____9744;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9750.call(this,h,child);
case  3 :
return isa_QMARK___9751.call(this,h,child,parent);
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
var parents__9755 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9756 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9755.call(this,h);
case  2 :
return parents__9756.call(this,h,tag);
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
var ancestors__9758 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9759 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9758.call(this,h);
case  2 :
return ancestors__9759.call(this,h,tag);
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
var descendants__9761 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9762 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9761.call(this,h);
case  2 :
return descendants__9762.call(this,h,tag);
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
var derive__9772 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9773 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9767 = "\uFDD0'parents".call(null,h);
var td__9768 = "\uFDD0'descendants".call(null,h);
var ta__9769 = "\uFDD0'ancestors".call(null,h);
var tf__9770 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9771 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9767.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9769.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9769.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9767,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9770.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9768,parent,ta__9769),"\uFDD0'descendants":tf__9770.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9769,tag,td__9768)});
})());

if(cljs.core.truth_(or__3548__auto____9771))
{return or__3548__auto____9771;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9772.call(this,h,tag);
case  3 :
return derive__9773.call(this,h,tag,parent);
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
var underive__9779 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9780 = (function (h,tag,parent){
var parentMap__9775 = "\uFDD0'parents".call(null,h);
var childsParents__9776 = (cljs.core.truth_(parentMap__9775.call(null,tag))?cljs.core.disj.call(null,parentMap__9775.call(null,tag),parent):cljs.core.set([]));
var newParents__9777 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9776))?cljs.core.assoc.call(null,parentMap__9775,tag,childsParents__9776):cljs.core.dissoc.call(null,parentMap__9775,tag));
var deriv_seq__9778 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9764_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9764_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9764_SHARP_),cljs.core.second.call(null,p1__9764_SHARP_)));
}),cljs.core.seq.call(null,newParents__9777)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9775.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9765_SHARP_,p2__9766_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9765_SHARP_,p2__9766_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9778));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9779.call(this,h,tag);
case  3 :
return underive__9780.call(this,h,tag,parent);
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
var xprefs__9782 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9784 = (cljs.core.truth_((function (){var and__3546__auto____9783 = xprefs__9782;

if(cljs.core.truth_(and__3546__auto____9783))
{return xprefs__9782.call(null,y);
} else
{return and__3546__auto____9783;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9784))
{return or__3548__auto____9784;
} else
{var or__3548__auto____9786 = (function (){var ps__9785 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9785) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9785),prefer_table)))
{} else
{}
{
var G__9789 = cljs.core.rest.call(null,ps__9785);
ps__9785 = G__9789;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9786))
{return or__3548__auto____9786;
} else
{var or__3548__auto____9788 = (function (){var ps__9787 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9787) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9787),y,prefer_table)))
{} else
{}
{
var G__9790 = cljs.core.rest.call(null,ps__9787);
ps__9787 = G__9790;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9788))
{return or__3548__auto____9788;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9791 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9791))
{return or__3548__auto____9791;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9800 = cljs.core.reduce.call(null,(function (be,p__9792){
var vec__9793__9794 = p__9792;
var k__9795 = cljs.core.nth.call(null,vec__9793__9794,0,null);
var ___9796 = cljs.core.nth.call(null,vec__9793__9794,1,null);
var e__9797 = vec__9793__9794;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9795)))
{var be2__9799 = (cljs.core.truth_((function (){var or__3548__auto____9798 = (be === null);

if(cljs.core.truth_(or__3548__auto____9798))
{return or__3548__auto____9798;
} else
{return cljs.core.dominates.call(null,k__9795,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9797:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9799),k__9795,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9795," and ",cljs.core.first.call(null,be2__9799),", and neither is preferred")));
}
return be2__9799;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9800))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9800));
return cljs.core.second.call(null,best_entry__9800);
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
if(cljs.core.truth_((function (){var and__3546__auto____9801 = mf;

if(cljs.core.truth_(and__3546__auto____9801))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9801;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9802 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9802))
{return or__3548__auto____9802;
} else
{var or__3548__auto____9803 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9803))
{return or__3548__auto____9803;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9804 = mf;

if(cljs.core.truth_(and__3546__auto____9804))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9804;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9805 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9805))
{return or__3548__auto____9805;
} else
{var or__3548__auto____9806 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9806))
{return or__3548__auto____9806;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9807 = mf;

if(cljs.core.truth_(and__3546__auto____9807))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9807;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9808 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9808))
{return or__3548__auto____9808;
} else
{var or__3548__auto____9809 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9809))
{return or__3548__auto____9809;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9810 = mf;

if(cljs.core.truth_(and__3546__auto____9810))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9810;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9811 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9811))
{return or__3548__auto____9811;
} else
{var or__3548__auto____9812 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9812))
{return or__3548__auto____9812;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9813 = mf;

if(cljs.core.truth_(and__3546__auto____9813))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9813;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9814 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9814))
{return or__3548__auto____9814;
} else
{var or__3548__auto____9815 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9815))
{return or__3548__auto____9815;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9816 = mf;

if(cljs.core.truth_(and__3546__auto____9816))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9816;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9817 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9817))
{return or__3548__auto____9817;
} else
{var or__3548__auto____9818 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9818))
{return or__3548__auto____9818;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9819 = mf;

if(cljs.core.truth_(and__3546__auto____9819))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9819;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9820 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9820))
{return or__3548__auto____9820;
} else
{var or__3548__auto____9821 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9821))
{return or__3548__auto____9821;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9822 = mf;

if(cljs.core.truth_(and__3546__auto____9822))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____9822;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____9823 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9823))
{return or__3548__auto____9823;
} else
{var or__3548__auto____9824 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____9824))
{return or__3548__auto____9824;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9825 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9826 = cljs.core._get_method.call(null,mf,dispatch_val__9825);

if(cljs.core.truth_(target_fn__9826))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9825)));
}
return cljs.core.apply.call(null,target_fn__9826,args);
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
var this__9827 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9828 = this;
cljs.core.swap_BANG_.call(null,this__9828.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9828.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9828.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9828.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9829 = this;
cljs.core.swap_BANG_.call(null,this__9829.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9829.method_cache,this__9829.method_table,this__9829.cached_hierarchy,this__9829.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9830 = this;
cljs.core.swap_BANG_.call(null,this__9830.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9830.method_cache,this__9830.method_table,this__9830.cached_hierarchy,this__9830.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9831 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9831.cached_hierarchy),cljs.core.deref.call(null,this__9831.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9831.method_cache,this__9831.method_table,this__9831.cached_hierarchy,this__9831.hierarchy);
}
var temp__3695__auto____9832 = cljs.core.deref.call(null,this__9831.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9832))
{var target_fn__9833 = temp__3695__auto____9832;

return target_fn__9833;
} else
{var temp__3695__auto____9834 = cljs.core.find_and_cache_best_method.call(null,this__9831.name,dispatch_val,this__9831.hierarchy,this__9831.method_table,this__9831.prefer_table,this__9831.method_cache,this__9831.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9834))
{var target_fn__9835 = temp__3695__auto____9834;

return target_fn__9835;
} else
{return cljs.core.deref.call(null,this__9831.method_table).call(null,this__9831.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9836 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9836.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9836.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9836.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9836.method_cache,this__9836.method_table,this__9836.cached_hierarchy,this__9836.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9837 = this;
return cljs.core.deref.call(null,this__9837.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9838 = this;
return cljs.core.deref.call(null,this__9838.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9839 = this;
return cljs.core.do_dispatch.call(null,mf,this__9839.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9840__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9840 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9840__delegate.call(this, _, args);
};
G__9840.cljs$lang$maxFixedArity = 1;
G__9840.cljs$lang$applyTo = (function (arglist__9841){
var _ = cljs.core.first(arglist__9841);
var args = cljs.core.rest(arglist__9841);
return G__9840__delegate.call(this, _, args);
});
return G__9840;
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
