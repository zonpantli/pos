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
var or__3548__auto____7152 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7152))
{return or__3548__auto____7152;
} else
{var or__3548__auto____7153 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7153))
{return or__3548__auto____7153;
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
var _invoke__7217 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7154 = this$;

if(cljs.core.truth_(and__3546__auto____7154))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7154;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7155 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7155))
{return or__3548__auto____7155;
} else
{var or__3548__auto____7156 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7156))
{return or__3548__auto____7156;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7218 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7157 = this$;

if(cljs.core.truth_(and__3546__auto____7157))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7157;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7158 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7158))
{return or__3548__auto____7158;
} else
{var or__3548__auto____7159 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7159))
{return or__3548__auto____7159;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7219 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7160 = this$;

if(cljs.core.truth_(and__3546__auto____7160))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7160;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7161 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7161))
{return or__3548__auto____7161;
} else
{var or__3548__auto____7162 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7162))
{return or__3548__auto____7162;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7220 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7163 = this$;

if(cljs.core.truth_(and__3546__auto____7163))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7163;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7164 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7164))
{return or__3548__auto____7164;
} else
{var or__3548__auto____7165 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7165))
{return or__3548__auto____7165;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7221 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7166 = this$;

if(cljs.core.truth_(and__3546__auto____7166))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7166;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7167 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7167))
{return or__3548__auto____7167;
} else
{var or__3548__auto____7168 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7168))
{return or__3548__auto____7168;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7222 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7169 = this$;

if(cljs.core.truth_(and__3546__auto____7169))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7169;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7170 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7170))
{return or__3548__auto____7170;
} else
{var or__3548__auto____7171 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7171))
{return or__3548__auto____7171;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7223 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7172 = this$;

if(cljs.core.truth_(and__3546__auto____7172))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7172;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7173 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7173))
{return or__3548__auto____7173;
} else
{var or__3548__auto____7174 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7174))
{return or__3548__auto____7174;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7224 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7175 = this$;

if(cljs.core.truth_(and__3546__auto____7175))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7175;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7176 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7176))
{return or__3548__auto____7176;
} else
{var or__3548__auto____7177 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7177))
{return or__3548__auto____7177;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7225 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7178 = this$;

if(cljs.core.truth_(and__3546__auto____7178))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7178;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7179 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7179))
{return or__3548__auto____7179;
} else
{var or__3548__auto____7180 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7180))
{return or__3548__auto____7180;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7226 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7181 = this$;

if(cljs.core.truth_(and__3546__auto____7181))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7181;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7182 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7182))
{return or__3548__auto____7182;
} else
{var or__3548__auto____7183 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7183))
{return or__3548__auto____7183;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7227 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7184 = this$;

if(cljs.core.truth_(and__3546__auto____7184))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7184;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7185 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7185))
{return or__3548__auto____7185;
} else
{var or__3548__auto____7186 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7186))
{return or__3548__auto____7186;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7228 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7187 = this$;

if(cljs.core.truth_(and__3546__auto____7187))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7187;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7188 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7188))
{return or__3548__auto____7188;
} else
{var or__3548__auto____7189 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7189))
{return or__3548__auto____7189;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7229 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7190 = this$;

if(cljs.core.truth_(and__3546__auto____7190))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7190;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7191 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7191))
{return or__3548__auto____7191;
} else
{var or__3548__auto____7192 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7192))
{return or__3548__auto____7192;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7230 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7193 = this$;

if(cljs.core.truth_(and__3546__auto____7193))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7193;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7194 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7194))
{return or__3548__auto____7194;
} else
{var or__3548__auto____7195 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7195))
{return or__3548__auto____7195;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7231 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7196 = this$;

if(cljs.core.truth_(and__3546__auto____7196))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7196;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7197 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7197))
{return or__3548__auto____7197;
} else
{var or__3548__auto____7198 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7198))
{return or__3548__auto____7198;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7232 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7199 = this$;

if(cljs.core.truth_(and__3546__auto____7199))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7199;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7200 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7200))
{return or__3548__auto____7200;
} else
{var or__3548__auto____7201 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7201))
{return or__3548__auto____7201;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7233 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7202 = this$;

if(cljs.core.truth_(and__3546__auto____7202))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7202;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7203 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7203))
{return or__3548__auto____7203;
} else
{var or__3548__auto____7204 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7234 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7205 = this$;

if(cljs.core.truth_(and__3546__auto____7205))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7205;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7206 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7206))
{return or__3548__auto____7206;
} else
{var or__3548__auto____7207 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7207))
{return or__3548__auto____7207;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7235 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7208 = this$;

if(cljs.core.truth_(and__3546__auto____7208))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7208;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7209 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7209))
{return or__3548__auto____7209;
} else
{var or__3548__auto____7210 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7210))
{return or__3548__auto____7210;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7236 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7211 = this$;

if(cljs.core.truth_(and__3546__auto____7211))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7211;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7212 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7212))
{return or__3548__auto____7212;
} else
{var or__3548__auto____7213 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7213))
{return or__3548__auto____7213;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7237 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7214 = this$;

if(cljs.core.truth_(and__3546__auto____7214))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7214;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7215))
{return or__3548__auto____7215;
} else
{var or__3548__auto____7216 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
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
return _invoke__7217.call(this,this$);
case  2 :
return _invoke__7218.call(this,this$,a);
case  3 :
return _invoke__7219.call(this,this$,a,b);
case  4 :
return _invoke__7220.call(this,this$,a,b,c);
case  5 :
return _invoke__7221.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7222.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7223.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7224.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7225.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7226.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7227.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7228.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7229.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7230.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7231.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7232.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7233.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7234.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7235.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7236.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7237.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7239 = coll;

if(cljs.core.truth_(and__3546__auto____7239))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7239;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7240 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
} else
{var or__3548__auto____7241 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7241))
{return or__3548__auto____7241;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7242 = coll;

if(cljs.core.truth_(and__3546__auto____7242))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7242;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7243 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{var or__3548__auto____7244 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7245 = coll;

if(cljs.core.truth_(and__3546__auto____7245))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7245;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7246 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
} else
{var or__3548__auto____7247 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7247))
{return or__3548__auto____7247;
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
var _nth__7254 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7248 = coll;

if(cljs.core.truth_(and__3546__auto____7248))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7248;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7249 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{var or__3548__auto____7250 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7250))
{return or__3548__auto____7250;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7255 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7251 = coll;

if(cljs.core.truth_(and__3546__auto____7251))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7251;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7252 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{var or__3548__auto____7253 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
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
return _nth__7254.call(this,coll,n);
case  3 :
return _nth__7255.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7257 = coll;

if(cljs.core.truth_(and__3546__auto____7257))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7257;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7258 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{var or__3548__auto____7259 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7260 = coll;

if(cljs.core.truth_(and__3546__auto____7260))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7260;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7261 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{var or__3548__auto____7262 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
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
var _lookup__7269 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7263 = o;

if(cljs.core.truth_(and__3546__auto____7263))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7263;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7264 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{var or__3548__auto____7265 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7265))
{return or__3548__auto____7265;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7270 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = o;

if(cljs.core.truth_(and__3546__auto____7266))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7266;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7267 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7268 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
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
return _lookup__7269.call(this,o,k);
case  3 :
return _lookup__7270.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7272 = coll;

if(cljs.core.truth_(and__3546__auto____7272))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7272;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7273 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{var or__3548__auto____7274 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7275 = coll;

if(cljs.core.truth_(and__3546__auto____7275))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7275;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7276 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{var or__3548__auto____7277 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7278 = coll;

if(cljs.core.truth_(and__3546__auto____7278))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7278;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7279 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
} else
{var or__3548__auto____7280 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7281 = coll;

if(cljs.core.truth_(and__3546__auto____7281))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7281;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7282 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{var or__3548__auto____7283 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7284 = coll;

if(cljs.core.truth_(and__3546__auto____7284))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7284;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7285 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{var or__3548__auto____7286 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7287 = coll;

if(cljs.core.truth_(and__3546__auto____7287))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7287;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7288 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{var or__3548__auto____7289 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = coll;

if(cljs.core.truth_(and__3546__auto____7290))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7290;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7291 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7291))
{return or__3548__auto____7291;
} else
{var or__3548__auto____7292 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = o;

if(cljs.core.truth_(and__3546__auto____7293))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7293;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7294 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{var or__3548__auto____7295 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = o;

if(cljs.core.truth_(and__3546__auto____7296))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7296;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7297 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{var or__3548__auto____7298 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = o;

if(cljs.core.truth_(and__3546__auto____7299))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7299;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{var or__3548__auto____7301 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = o;

if(cljs.core.truth_(and__3546__auto____7302))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7302;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7304 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
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
var _reduce__7311 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7305 = coll;

if(cljs.core.truth_(and__3546__auto____7305))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7305;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7306 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7307 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7312 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = coll;

if(cljs.core.truth_(and__3546__auto____7308))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7308;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7309 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{var or__3548__auto____7310 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
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
return _reduce__7311.call(this,coll,f);
case  3 :
return _reduce__7312.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7314 = o;

if(cljs.core.truth_(and__3546__auto____7314))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7314;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7316 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = o;

if(cljs.core.truth_(and__3546__auto____7317))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7317;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7318 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{var or__3548__auto____7319 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = o;

if(cljs.core.truth_(and__3546__auto____7320))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7320;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7322 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
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
if(cljs.core.truth_((function (){var and__3546__auto____7323 = o;

if(cljs.core.truth_(and__3546__auto____7323))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7323;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7325 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7325))
{return or__3548__auto____7325;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7326 = d;

if(cljs.core.truth_(and__3546__auto____7326))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7326;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7327 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{var or__3548__auto____7328 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{var or__3548__auto____7331 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7333 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{var or__3548__auto____7334 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7335 = this$;

if(cljs.core.truth_(and__3546__auto____7335))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7335;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{var or__3548__auto____7337 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
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
var G__7338 = null;
var G__7338__7339 = (function (o,k){
return null;
});
var G__7338__7340 = (function (o,k,not_found){
return not_found;
});
G__7338 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7338__7339.call(this,o,k);
case  3 :
return G__7338__7340.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7338;
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
var G__7342 = null;
var G__7342__7343 = (function (_,f){
return f.call(null);
});
var G__7342__7344 = (function (_,f,start){
return start;
});
G__7342 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7342__7343.call(this,_,f);
case  3 :
return G__7342__7344.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7342;
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
var G__7346 = null;
var G__7346__7347 = (function (_,n){
return null;
});
var G__7346__7348 = (function (_,n,not_found){
return not_found;
});
G__7346 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7346__7347.call(this,_,n);
case  3 :
return G__7346__7348.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7346;
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
var ci_reduce__7356 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7350 = cljs.core._nth.call(null,cicoll,0);
var n__7351 = 1;

while(true){
if(cljs.core.truth_((n__7351 < cljs.core._count.call(null,cicoll))))
{{
var G__7360 = f.call(null,val__7350,cljs.core._nth.call(null,cicoll,n__7351));
var G__7361 = (n__7351 + 1);
val__7350 = G__7360;
n__7351 = G__7361;
continue;
}
} else
{return val__7350;
}
break;
}
}
});
var ci_reduce__7357 = (function (cicoll,f,val){
var val__7352 = val;
var n__7353 = 0;

while(true){
if(cljs.core.truth_((n__7353 < cljs.core._count.call(null,cicoll))))
{{
var G__7362 = f.call(null,val__7352,cljs.core._nth.call(null,cicoll,n__7353));
var G__7363 = (n__7353 + 1);
val__7352 = G__7362;
n__7353 = G__7363;
continue;
}
} else
{return val__7352;
}
break;
}
});
var ci_reduce__7358 = (function (cicoll,f,val,idx){
var val__7354 = val;
var n__7355 = idx;

while(true){
if(cljs.core.truth_((n__7355 < cljs.core._count.call(null,cicoll))))
{{
var G__7364 = f.call(null,val__7354,cljs.core._nth.call(null,cicoll,n__7355));
var G__7365 = (n__7355 + 1);
val__7354 = G__7364;
n__7355 = G__7365;
continue;
}
} else
{return val__7354;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7356.call(this,cicoll,f);
case  3 :
return ci_reduce__7357.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7358.call(this,cicoll,f,val,idx);
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
var this__7366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7379 = null;
var G__7379__7380 = (function (_,f){
var this__7367 = this;
return cljs.core.ci_reduce.call(null,this__7367.a,f,(this__7367.a[this__7367.i]),(this__7367.i + 1));
});
var G__7379__7381 = (function (_,f,start){
var this__7368 = this;
return cljs.core.ci_reduce.call(null,this__7368.a,f,start,this__7368.i);
});
G__7379 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7379__7380.call(this,_,f);
case  3 :
return G__7379__7381.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7379;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7369 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7370 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7383 = null;
var G__7383__7384 = (function (coll,n){
var this__7371 = this;
var i__7372 = (n + this__7371.i);

if(cljs.core.truth_((i__7372 < this__7371.a.length)))
{return (this__7371.a[i__7372]);
} else
{return null;
}
});
var G__7383__7385 = (function (coll,n,not_found){
var this__7373 = this;
var i__7374 = (n + this__7373.i);

if(cljs.core.truth_((i__7374 < this__7373.a.length)))
{return (this__7373.a[i__7374]);
} else
{return not_found;
}
});
G__7383 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7383__7384.call(this,coll,n);
case  3 :
return G__7383__7385.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7383;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7375 = this;
return (this__7375.a.length - this__7375.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7376 = this;
return (this__7376.a[this__7376.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7377 = this;
if(cljs.core.truth_(((this__7377.i + 1) < this__7377.a.length)))
{return (new cljs.core.IndexedSeq(this__7377.a,(this__7377.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7378 = this;
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
var G__7387 = null;
var G__7387__7388 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7387__7389 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7387 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7387__7388.call(this,array,f);
case  3 :
return G__7387__7389.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7387;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7391 = null;
var G__7391__7392 = (function (array,k){
return (array[k]);
});
var G__7391__7393 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7391 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7391__7392.call(this,array,k);
case  3 :
return G__7391__7393.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7391;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7395 = null;
var G__7395__7396 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7395__7397 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7395 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7395__7396.call(this,array,n);
case  3 :
return G__7395__7397.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7395;
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
var temp__3698__auto____7399 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7399))
{var s__7400 = temp__3698__auto____7399;

return cljs.core._first.call(null,s__7400);
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
var G__7401 = cljs.core.next.call(null,s);
s = G__7401;
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
var s__7402 = cljs.core.seq.call(null,x);
var n__7403 = 0;

while(true){
if(cljs.core.truth_(s__7402))
{{
var G__7404 = cljs.core.next.call(null,s__7402);
var G__7405 = (n__7403 + 1);
s__7402 = G__7404;
n__7403 = G__7405;
continue;
}
} else
{return n__7403;
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
var conj__7406 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7407 = (function() { 
var G__7409__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7410 = conj.call(null,coll,x);
var G__7411 = cljs.core.first.call(null,xs);
var G__7412 = cljs.core.next.call(null,xs);
coll = G__7410;
x = G__7411;
xs = G__7412;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7409 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7409__delegate.call(this, coll, x, xs);
};
G__7409.cljs$lang$maxFixedArity = 2;
G__7409.cljs$lang$applyTo = (function (arglist__7413){
var coll = cljs.core.first(arglist__7413);
var x = cljs.core.first(cljs.core.next(arglist__7413));
var xs = cljs.core.rest(cljs.core.next(arglist__7413));
return G__7409__delegate.call(this, coll, x, xs);
});
return G__7409;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7406.call(this,coll,x);
default:
return conj__7407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7407.cljs$lang$applyTo;
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
var nth__7414 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7415 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7414.call(this,coll,n);
case  3 :
return nth__7415.call(this,coll,n,not_found);
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
var get__7417 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7418 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7417.call(this,o,k);
case  3 :
return get__7418.call(this,o,k,not_found);
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
var assoc__7421 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7422 = (function() { 
var G__7424__delegate = function (coll,k,v,kvs){
while(true){
var ret__7420 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7425 = ret__7420;
var G__7426 = cljs.core.first.call(null,kvs);
var G__7427 = cljs.core.second.call(null,kvs);
var G__7428 = cljs.core.nnext.call(null,kvs);
coll = G__7425;
k = G__7426;
v = G__7427;
kvs = G__7428;
continue;
}
} else
{return ret__7420;
}
break;
}
};
var G__7424 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7424__delegate.call(this, coll, k, v, kvs);
};
G__7424.cljs$lang$maxFixedArity = 3;
G__7424.cljs$lang$applyTo = (function (arglist__7429){
var coll = cljs.core.first(arglist__7429);
var k = cljs.core.first(cljs.core.next(arglist__7429));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7429)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7429)));
return G__7424__delegate.call(this, coll, k, v, kvs);
});
return G__7424;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7421.call(this,coll,k,v);
default:
return assoc__7422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7422.cljs$lang$applyTo;
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
var dissoc__7431 = (function (coll){
return coll;
});
var dissoc__7432 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7433 = (function() { 
var G__7435__delegate = function (coll,k,ks){
while(true){
var ret__7430 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7436 = ret__7430;
var G__7437 = cljs.core.first.call(null,ks);
var G__7438 = cljs.core.next.call(null,ks);
coll = G__7436;
k = G__7437;
ks = G__7438;
continue;
}
} else
{return ret__7430;
}
break;
}
};
var G__7435 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7435__delegate.call(this, coll, k, ks);
};
G__7435.cljs$lang$maxFixedArity = 2;
G__7435.cljs$lang$applyTo = (function (arglist__7439){
var coll = cljs.core.first(arglist__7439);
var k = cljs.core.first(cljs.core.next(arglist__7439));
var ks = cljs.core.rest(cljs.core.next(arglist__7439));
return G__7435__delegate.call(this, coll, k, ks);
});
return G__7435;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7431.call(this,coll);
case  2 :
return dissoc__7432.call(this,coll,k);
default:
return dissoc__7433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7433.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____7440 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7441 = x__3028__auto____7440;

if(cljs.core.truth_(and__3546__auto____7441))
{var and__3546__auto____7442 = x__3028__auto____7440.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7442))
{return cljs.core.not.call(null,x__3028__auto____7440.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7442;
}
} else
{return and__3546__auto____7441;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____7440);
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
var disj__7444 = (function (coll){
return coll;
});
var disj__7445 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7446 = (function() { 
var G__7448__delegate = function (coll,k,ks){
while(true){
var ret__7443 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7449 = ret__7443;
var G__7450 = cljs.core.first.call(null,ks);
var G__7451 = cljs.core.next.call(null,ks);
coll = G__7449;
k = G__7450;
ks = G__7451;
continue;
}
} else
{return ret__7443;
}
break;
}
};
var G__7448 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7448__delegate.call(this, coll, k, ks);
};
G__7448.cljs$lang$maxFixedArity = 2;
G__7448.cljs$lang$applyTo = (function (arglist__7452){
var coll = cljs.core.first(arglist__7452);
var k = cljs.core.first(cljs.core.next(arglist__7452));
var ks = cljs.core.rest(cljs.core.next(arglist__7452));
return G__7448__delegate.call(this, coll, k, ks);
});
return G__7448;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7444.call(this,coll);
case  2 :
return disj__7445.call(this,coll,k);
default:
return disj__7446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7446.cljs$lang$applyTo;
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
{var x__3028__auto____7453 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7454 = x__3028__auto____7453;

if(cljs.core.truth_(and__3546__auto____7454))
{var and__3546__auto____7455 = x__3028__auto____7453.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7455))
{return cljs.core.not.call(null,x__3028__auto____7453.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7455;
}
} else
{return and__3546__auto____7454;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____7453);
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
{var x__3028__auto____7456 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7457 = x__3028__auto____7456;

if(cljs.core.truth_(and__3546__auto____7457))
{var and__3546__auto____7458 = x__3028__auto____7456.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7458))
{return cljs.core.not.call(null,x__3028__auto____7456.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7458;
}
} else
{return and__3546__auto____7457;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____7456);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____7459 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7460 = x__3028__auto____7459;

if(cljs.core.truth_(and__3546__auto____7460))
{var and__3546__auto____7461 = x__3028__auto____7459.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7461))
{return cljs.core.not.call(null,x__3028__auto____7459.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7461;
}
} else
{return and__3546__auto____7460;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____7459);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____7462 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7463 = x__3028__auto____7462;

if(cljs.core.truth_(and__3546__auto____7463))
{var and__3546__auto____7464 = x__3028__auto____7462.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7464))
{return cljs.core.not.call(null,x__3028__auto____7462.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7464;
}
} else
{return and__3546__auto____7463;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____7462);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____7465 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7466 = x__3028__auto____7465;

if(cljs.core.truth_(and__3546__auto____7466))
{var and__3546__auto____7467 = x__3028__auto____7465.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7467))
{return cljs.core.not.call(null,x__3028__auto____7465.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7467;
}
} else
{return and__3546__auto____7466;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____7465);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____7468 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7469 = x__3028__auto____7468;

if(cljs.core.truth_(and__3546__auto____7469))
{var and__3546__auto____7470 = x__3028__auto____7468.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7470))
{return cljs.core.not.call(null,x__3028__auto____7468.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7470;
}
} else
{return and__3546__auto____7469;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____7468);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____7471 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7472 = x__3028__auto____7471;

if(cljs.core.truth_(and__3546__auto____7472))
{var and__3546__auto____7473 = x__3028__auto____7471.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7473))
{return cljs.core.not.call(null,x__3028__auto____7471.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7473;
}
} else
{return and__3546__auto____7472;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____7471);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7474 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7474.push(key);
}));
return keys__7474;
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
{var x__3028__auto____7475 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7476 = x__3028__auto____7475;

if(cljs.core.truth_(and__3546__auto____7476))
{var and__3546__auto____7477 = x__3028__auto____7475.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7477))
{return cljs.core.not.call(null,x__3028__auto____7475.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7477;
}
} else
{return and__3546__auto____7476;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____7475);
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
var and__3546__auto____7478 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7478))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7479 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7478;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7480 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7480))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7480;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7481 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7481))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7481;
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
var and__3546__auto____7482 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7482))
{return (n == n.toFixed());
} else
{return and__3546__auto____7482;
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
if(cljs.core.truth_((function (){var and__3546__auto____7483 = coll;

if(cljs.core.truth_(and__3546__auto____7483))
{var and__3546__auto____7484 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7484))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7484;
}
} else
{return and__3546__auto____7483;
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
var distinct_QMARK___7489 = (function (x){
return true;
});
var distinct_QMARK___7490 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7491 = (function() { 
var G__7493__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7485 = cljs.core.set([y,x]);
var xs__7486 = more;

while(true){
var x__7487 = cljs.core.first.call(null,xs__7486);
var etc__7488 = cljs.core.next.call(null,xs__7486);

if(cljs.core.truth_(xs__7486))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7485,x__7487)))
{return false;
} else
{{
var G__7494 = cljs.core.conj.call(null,s__7485,x__7487);
var G__7495 = etc__7488;
s__7485 = G__7494;
xs__7486 = G__7495;
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
var G__7493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7493__delegate.call(this, x, y, more);
};
G__7493.cljs$lang$maxFixedArity = 2;
G__7493.cljs$lang$applyTo = (function (arglist__7496){
var x = cljs.core.first(arglist__7496);
var y = cljs.core.first(cljs.core.next(arglist__7496));
var more = cljs.core.rest(cljs.core.next(arglist__7496));
return G__7493__delegate.call(this, x, y, more);
});
return G__7493;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7489.call(this,x);
case  2 :
return distinct_QMARK___7490.call(this,x,y);
default:
return distinct_QMARK___7491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7491.cljs$lang$applyTo;
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
var r__7497 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7497)))
{return r__7497;
} else
{if(cljs.core.truth_(r__7497))
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
var sort__7499 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7500 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7498 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7498,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7498);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7499.call(this,comp);
case  2 :
return sort__7500.call(this,comp,coll);
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
var sort_by__7502 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7503 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7502.call(this,keyfn,comp);
case  3 :
return sort_by__7503.call(this,keyfn,comp,coll);
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
var reduce__7505 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7506 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7505.call(this,f,val);
case  3 :
return reduce__7506.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7512 = (function (f,coll){
var temp__3695__auto____7508 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7508))
{var s__7509 = temp__3695__auto____7508;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7509),cljs.core.next.call(null,s__7509));
} else
{return f.call(null);
}
});
var seq_reduce__7513 = (function (f,val,coll){
var val__7510 = val;
var coll__7511 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7511))
{{
var G__7515 = f.call(null,val__7510,cljs.core.first.call(null,coll__7511));
var G__7516 = cljs.core.next.call(null,coll__7511);
val__7510 = G__7515;
coll__7511 = G__7516;
continue;
}
} else
{return val__7510;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7512.call(this,f,val);
case  3 :
return seq_reduce__7513.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7517 = null;
var G__7517__7518 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7517__7519 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7517 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7517__7518.call(this,coll,f);
case  3 :
return G__7517__7519.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7517;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7521 = (function (){
return 0;
});
var _PLUS___7522 = (function (x){
return x;
});
var _PLUS___7523 = (function (x,y){
return (x + y);
});
var _PLUS___7524 = (function() { 
var G__7526__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7526 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7526__delegate.call(this, x, y, more);
};
G__7526.cljs$lang$maxFixedArity = 2;
G__7526.cljs$lang$applyTo = (function (arglist__7527){
var x = cljs.core.first(arglist__7527);
var y = cljs.core.first(cljs.core.next(arglist__7527));
var more = cljs.core.rest(cljs.core.next(arglist__7527));
return G__7526__delegate.call(this, x, y, more);
});
return G__7526;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7521.call(this);
case  1 :
return _PLUS___7522.call(this,x);
case  2 :
return _PLUS___7523.call(this,x,y);
default:
return _PLUS___7524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7524.cljs$lang$applyTo;
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
var ___7528 = (function (x){
return (- x);
});
var ___7529 = (function (x,y){
return (x - y);
});
var ___7530 = (function() { 
var G__7532__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7532 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7532__delegate.call(this, x, y, more);
};
G__7532.cljs$lang$maxFixedArity = 2;
G__7532.cljs$lang$applyTo = (function (arglist__7533){
var x = cljs.core.first(arglist__7533);
var y = cljs.core.first(cljs.core.next(arglist__7533));
var more = cljs.core.rest(cljs.core.next(arglist__7533));
return G__7532__delegate.call(this, x, y, more);
});
return G__7532;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7528.call(this,x);
case  2 :
return ___7529.call(this,x,y);
default:
return ___7530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7530.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7534 = (function (){
return 1;
});
var _STAR___7535 = (function (x){
return x;
});
var _STAR___7536 = (function (x,y){
return (x * y);
});
var _STAR___7537 = (function() { 
var G__7539__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7539 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7539__delegate.call(this, x, y, more);
};
G__7539.cljs$lang$maxFixedArity = 2;
G__7539.cljs$lang$applyTo = (function (arglist__7540){
var x = cljs.core.first(arglist__7540);
var y = cljs.core.first(cljs.core.next(arglist__7540));
var more = cljs.core.rest(cljs.core.next(arglist__7540));
return G__7539__delegate.call(this, x, y, more);
});
return G__7539;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7534.call(this);
case  1 :
return _STAR___7535.call(this,x);
case  2 :
return _STAR___7536.call(this,x,y);
default:
return _STAR___7537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7537.cljs$lang$applyTo;
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
var _SLASH___7541 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7542 = (function (x,y){
return (x / y);
});
var _SLASH___7543 = (function() { 
var G__7545__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7545 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7545__delegate.call(this, x, y, more);
};
G__7545.cljs$lang$maxFixedArity = 2;
G__7545.cljs$lang$applyTo = (function (arglist__7546){
var x = cljs.core.first(arglist__7546);
var y = cljs.core.first(cljs.core.next(arglist__7546));
var more = cljs.core.rest(cljs.core.next(arglist__7546));
return G__7545__delegate.call(this, x, y, more);
});
return G__7545;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7541.call(this,x);
case  2 :
return _SLASH___7542.call(this,x,y);
default:
return _SLASH___7543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7543.cljs$lang$applyTo;
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
var _LT___7547 = (function (x){
return true;
});
var _LT___7548 = (function (x,y){
return (x < y);
});
var _LT___7549 = (function() { 
var G__7551__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7552 = y;
var G__7553 = cljs.core.first.call(null,more);
var G__7554 = cljs.core.next.call(null,more);
x = G__7552;
y = G__7553;
more = G__7554;
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
var G__7551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7551__delegate.call(this, x, y, more);
};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7555){
var x = cljs.core.first(arglist__7555);
var y = cljs.core.first(cljs.core.next(arglist__7555));
var more = cljs.core.rest(cljs.core.next(arglist__7555));
return G__7551__delegate.call(this, x, y, more);
});
return G__7551;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7547.call(this,x);
case  2 :
return _LT___7548.call(this,x,y);
default:
return _LT___7549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7549.cljs$lang$applyTo;
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
var _LT__EQ___7556 = (function (x){
return true;
});
var _LT__EQ___7557 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7558 = (function() { 
var G__7560__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7561 = y;
var G__7562 = cljs.core.first.call(null,more);
var G__7563 = cljs.core.next.call(null,more);
x = G__7561;
y = G__7562;
more = G__7563;
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
var G__7560 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7560__delegate.call(this, x, y, more);
};
G__7560.cljs$lang$maxFixedArity = 2;
G__7560.cljs$lang$applyTo = (function (arglist__7564){
var x = cljs.core.first(arglist__7564);
var y = cljs.core.first(cljs.core.next(arglist__7564));
var more = cljs.core.rest(cljs.core.next(arglist__7564));
return G__7560__delegate.call(this, x, y, more);
});
return G__7560;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7556.call(this,x);
case  2 :
return _LT__EQ___7557.call(this,x,y);
default:
return _LT__EQ___7558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7558.cljs$lang$applyTo;
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
var _GT___7565 = (function (x){
return true;
});
var _GT___7566 = (function (x,y){
return (x > y);
});
var _GT___7567 = (function() { 
var G__7569__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7570 = y;
var G__7571 = cljs.core.first.call(null,more);
var G__7572 = cljs.core.next.call(null,more);
x = G__7570;
y = G__7571;
more = G__7572;
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
var G__7569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7569__delegate.call(this, x, y, more);
};
G__7569.cljs$lang$maxFixedArity = 2;
G__7569.cljs$lang$applyTo = (function (arglist__7573){
var x = cljs.core.first(arglist__7573);
var y = cljs.core.first(cljs.core.next(arglist__7573));
var more = cljs.core.rest(cljs.core.next(arglist__7573));
return G__7569__delegate.call(this, x, y, more);
});
return G__7569;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7565.call(this,x);
case  2 :
return _GT___7566.call(this,x,y);
default:
return _GT___7567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7567.cljs$lang$applyTo;
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
var _GT__EQ___7574 = (function (x){
return true;
});
var _GT__EQ___7575 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7576 = (function() { 
var G__7578__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7579 = y;
var G__7580 = cljs.core.first.call(null,more);
var G__7581 = cljs.core.next.call(null,more);
x = G__7579;
y = G__7580;
more = G__7581;
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
var G__7578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7578__delegate.call(this, x, y, more);
};
G__7578.cljs$lang$maxFixedArity = 2;
G__7578.cljs$lang$applyTo = (function (arglist__7582){
var x = cljs.core.first(arglist__7582);
var y = cljs.core.first(cljs.core.next(arglist__7582));
var more = cljs.core.rest(cljs.core.next(arglist__7582));
return G__7578__delegate.call(this, x, y, more);
});
return G__7578;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7574.call(this,x);
case  2 :
return _GT__EQ___7575.call(this,x,y);
default:
return _GT__EQ___7576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7576.cljs$lang$applyTo;
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
var max__7583 = (function (x){
return x;
});
var max__7584 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7585 = (function() { 
var G__7587__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7587 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7587__delegate.call(this, x, y, more);
};
G__7587.cljs$lang$maxFixedArity = 2;
G__7587.cljs$lang$applyTo = (function (arglist__7588){
var x = cljs.core.first(arglist__7588);
var y = cljs.core.first(cljs.core.next(arglist__7588));
var more = cljs.core.rest(cljs.core.next(arglist__7588));
return G__7587__delegate.call(this, x, y, more);
});
return G__7587;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7583.call(this,x);
case  2 :
return max__7584.call(this,x,y);
default:
return max__7585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7585.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7589 = (function (x){
return x;
});
var min__7590 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7591 = (function() { 
var G__7593__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7593 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7593__delegate.call(this, x, y, more);
};
G__7593.cljs$lang$maxFixedArity = 2;
G__7593.cljs$lang$applyTo = (function (arglist__7594){
var x = cljs.core.first(arglist__7594);
var y = cljs.core.first(cljs.core.next(arglist__7594));
var more = cljs.core.rest(cljs.core.next(arglist__7594));
return G__7593__delegate.call(this, x, y, more);
});
return G__7593;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7589.call(this,x);
case  2 :
return min__7590.call(this,x,y);
default:
return min__7591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7591.cljs$lang$applyTo;
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
var rem__7595 = (n % d);

return cljs.core.fix.call(null,((n - rem__7595) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7596 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7596));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7597 = (function (){
return Math.random.call(null);
});
var rand__7598 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7597.call(this);
case  1 :
return rand__7598.call(this,n);
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
var _EQ__EQ___7600 = (function (x){
return true;
});
var _EQ__EQ___7601 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7602 = (function() { 
var G__7604__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7605 = y;
var G__7606 = cljs.core.first.call(null,more);
var G__7607 = cljs.core.next.call(null,more);
x = G__7605;
y = G__7606;
more = G__7607;
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
var G__7604 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7604__delegate.call(this, x, y, more);
};
G__7604.cljs$lang$maxFixedArity = 2;
G__7604.cljs$lang$applyTo = (function (arglist__7608){
var x = cljs.core.first(arglist__7608);
var y = cljs.core.first(cljs.core.next(arglist__7608));
var more = cljs.core.rest(cljs.core.next(arglist__7608));
return G__7604__delegate.call(this, x, y, more);
});
return G__7604;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7600.call(this,x);
case  2 :
return _EQ__EQ___7601.call(this,x,y);
default:
return _EQ__EQ___7602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7602.cljs$lang$applyTo;
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
var n__7609 = n;
var xs__7610 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = xs__7610;

if(cljs.core.truth_(and__3546__auto____7611))
{return (n__7609 > 0);
} else
{return and__3546__auto____7611;
}
})()))
{{
var G__7612 = (n__7609 - 1);
var G__7613 = cljs.core.next.call(null,xs__7610);
n__7609 = G__7612;
xs__7610 = G__7613;
continue;
}
} else
{return xs__7610;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7618 = null;
var G__7618__7619 = (function (coll,n){
var temp__3695__auto____7614 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7614))
{var xs__7615 = temp__3695__auto____7614;

return cljs.core.first.call(null,xs__7615);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7618__7620 = (function (coll,n,not_found){
var temp__3695__auto____7616 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7616))
{var xs__7617 = temp__3695__auto____7616;

return cljs.core.first.call(null,xs__7617);
} else
{return not_found;
}
});
G__7618 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7618__7619.call(this,coll,n);
case  3 :
return G__7618__7620.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7618;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7622 = (function (){
return "";
});
var str_STAR___7623 = (function (x){
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
var str_STAR___7624 = (function() { 
var G__7626__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7627 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7628 = cljs.core.next.call(null,more);
sb = G__7627;
more = G__7628;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7626 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7626__delegate.call(this, x, ys);
};
G__7626.cljs$lang$maxFixedArity = 1;
G__7626.cljs$lang$applyTo = (function (arglist__7629){
var x = cljs.core.first(arglist__7629);
var ys = cljs.core.rest(arglist__7629);
return G__7626__delegate.call(this, x, ys);
});
return G__7626;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7622.call(this);
case  1 :
return str_STAR___7623.call(this,x);
default:
return str_STAR___7624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7624.cljs$lang$applyTo;
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
var str__7630 = (function (){
return "";
});
var str__7631 = (function (x){
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
var str__7632 = (function() { 
var G__7634__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7635 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7636 = cljs.core.next.call(null,more);
sb = G__7635;
more = G__7636;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7634 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7634__delegate.call(this, x, ys);
};
G__7634.cljs$lang$maxFixedArity = 1;
G__7634.cljs$lang$applyTo = (function (arglist__7637){
var x = cljs.core.first(arglist__7637);
var ys = cljs.core.rest(arglist__7637);
return G__7634__delegate.call(this, x, ys);
});
return G__7634;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7630.call(this);
case  1 :
return str__7631.call(this,x);
default:
return str__7632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7632.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7638 = (function (s,start){
return s.substring(start);
});
var subs__7639 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7638.call(this,s,start);
case  3 :
return subs__7639.call(this,s,start,end);
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
var symbol__7641 = (function (name){
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
var symbol__7642 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7641.call(this,ns);
case  2 :
return symbol__7642.call(this,ns,name);
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
var keyword__7644 = (function (name){
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
var keyword__7645 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7644.call(this,ns);
case  2 :
return keyword__7645.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7647 = cljs.core.seq.call(null,x);
var ys__7648 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7647 === null)))
{return (ys__7648 === null);
} else
{if(cljs.core.truth_((ys__7648 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7647),cljs.core.first.call(null,ys__7648))))
{{
var G__7649 = cljs.core.next.call(null,xs__7647);
var G__7650 = cljs.core.next.call(null,ys__7648);
xs__7647 = G__7649;
ys__7648 = G__7650;
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
return cljs.core.reduce.call(null,(function (p1__7651_SHARP_,p2__7652_SHARP_){
return cljs.core.hash_combine.call(null,p1__7651_SHARP_,cljs.core.hash.call(null,p2__7652_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7653__7654 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7653__7654))
{var G__7656__7658 = cljs.core.first.call(null,G__7653__7654);
var vec__7657__7659 = G__7656__7658;
var key_name__7660 = cljs.core.nth.call(null,vec__7657__7659,0,null);
var f__7661 = cljs.core.nth.call(null,vec__7657__7659,1,null);
var G__7653__7662 = G__7653__7654;

var G__7656__7663 = G__7656__7658;
var G__7653__7664 = G__7653__7662;

while(true){
var vec__7665__7666 = G__7656__7663;
var key_name__7667 = cljs.core.nth.call(null,vec__7665__7666,0,null);
var f__7668 = cljs.core.nth.call(null,vec__7665__7666,1,null);
var G__7653__7669 = G__7653__7664;

var str_name__7670 = cljs.core.name.call(null,key_name__7667);

obj[str_name__7670] = f__7668;
var temp__3698__auto____7671 = cljs.core.next.call(null,G__7653__7669);

if(cljs.core.truth_(temp__3698__auto____7671))
{var G__7653__7672 = temp__3698__auto____7671;

{
var G__7673 = cljs.core.first.call(null,G__7653__7672);
var G__7674 = G__7653__7672;
G__7656__7663 = G__7673;
G__7653__7664 = G__7674;
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
var this__7675 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7676 = this;
return (new cljs.core.List(this__7676.meta,o,coll,(this__7676.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7677 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7678 = this;
return this__7678.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7679 = this;
return this__7679.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7680 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7681 = this;
return this__7681.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7682 = this;
return this__7682.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7683 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7684 = this;
return (new cljs.core.List(meta,this__7684.first,this__7684.rest,this__7684.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7685 = this;
return this__7685.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7686 = this;
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
var this__7687 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7688 = this;
return (new cljs.core.List(this__7688.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7689 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7690 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7691 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7692 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7693 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7694 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7696 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7697 = this;
return this__7697.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7698 = this;
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
list.cljs$lang$applyTo = (function (arglist__7699){
var items = cljs.core.seq( arglist__7699 );;
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
var this__7700 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7701 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7702 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7703 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7703.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7704 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7705 = this;
return this__7705.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7706 = this;
if(cljs.core.truth_((this__7706.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7706.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7707 = this;
return this__7707.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7708 = this;
return (new cljs.core.Cons(meta,this__7708.first,this__7708.rest));
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
var G__7709 = null;
var G__7709__7710 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7709__7711 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7709 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7709__7710.call(this,string,f);
case  3 :
return G__7709__7711.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7709;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7713 = null;
var G__7713__7714 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7713__7715 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7713 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7713__7714.call(this,string,k);
case  3 :
return G__7713__7715.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7713;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7717 = null;
var G__7717__7718 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7717__7719 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7717 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7717__7718.call(this,string,n);
case  3 :
return G__7717__7719.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7717;
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
var G__7727 = null;
var G__7727__7728 = (function (tsym7721,coll){
var tsym7721__7723 = this;

var this$__7724 = tsym7721__7723;

return cljs.core.get.call(null,coll,this$__7724.toString());
});
var G__7727__7729 = (function (tsym7722,coll,not_found){
var tsym7722__7725 = this;

var this$__7726 = tsym7722__7725;

return cljs.core.get.call(null,coll,this$__7726.toString(),not_found);
});
G__7727 = function(tsym7722,coll,not_found){
switch(arguments.length){
case  2 :
return G__7727__7728.call(this,tsym7722,coll);
case  3 :
return G__7727__7729.call(this,tsym7722,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7727;
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
var x__7731 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7731;
} else
{lazy_seq.x = x__7731.call(null);
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
var this__7732 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7733 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7734 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7735 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7735.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7736 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7737 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7738 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7739 = this;
return this__7739.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7740 = this;
return (new cljs.core.LazySeq(meta,this__7740.realized,this__7740.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7741 = [];

var s__7742 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7742)))
{ary__7741.push(cljs.core.first.call(null,s__7742));
{
var G__7743 = cljs.core.next.call(null,s__7742);
s__7742 = G__7743;
continue;
}
} else
{return ary__7741;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7744 = s;
var i__7745 = n;
var sum__7746 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7747 = (i__7745 > 0);

if(cljs.core.truth_(and__3546__auto____7747))
{return cljs.core.seq.call(null,s__7744);
} else
{return and__3546__auto____7747;
}
})()))
{{
var G__7748 = cljs.core.next.call(null,s__7744);
var G__7749 = (i__7745 - 1);
var G__7750 = (sum__7746 + 1);
s__7744 = G__7748;
i__7745 = G__7749;
sum__7746 = G__7750;
continue;
}
} else
{return sum__7746;
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
var concat__7754 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7755 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7756 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7751 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7751))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7751),concat.call(null,cljs.core.rest.call(null,s__7751),y));
} else
{return y;
}
})));
});
var concat__7757 = (function() { 
var G__7759__delegate = function (x,y,zs){
var cat__7753 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7752 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7752))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7752),cat.call(null,cljs.core.rest.call(null,xys__7752),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7753.call(null,concat.call(null,x,y),zs);
};
var G__7759 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7759__delegate.call(this, x, y, zs);
};
G__7759.cljs$lang$maxFixedArity = 2;
G__7759.cljs$lang$applyTo = (function (arglist__7760){
var x = cljs.core.first(arglist__7760);
var y = cljs.core.first(cljs.core.next(arglist__7760));
var zs = cljs.core.rest(cljs.core.next(arglist__7760));
return G__7759__delegate.call(this, x, y, zs);
});
return G__7759;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7754.call(this);
case  1 :
return concat__7755.call(this,x);
case  2 :
return concat__7756.call(this,x,y);
default:
return concat__7757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7757.cljs$lang$applyTo;
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
var list_STAR___7761 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7762 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7763 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7764 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7765 = (function() { 
var G__7767__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7767 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7767__delegate.call(this, a, b, c, d, more);
};
G__7767.cljs$lang$maxFixedArity = 4;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var a = cljs.core.first(arglist__7768);
var b = cljs.core.first(cljs.core.next(arglist__7768));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7768)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7768))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7768))));
return G__7767__delegate.call(this, a, b, c, d, more);
});
return G__7767;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7761.call(this,a);
case  2 :
return list_STAR___7762.call(this,a,b);
case  3 :
return list_STAR___7763.call(this,a,b,c);
case  4 :
return list_STAR___7764.call(this,a,b,c,d);
default:
return list_STAR___7765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7765.cljs$lang$applyTo;
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
var apply__7778 = (function (f,args){
var fixed_arity__7769 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7769 + 1)) <= fixed_arity__7769)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7779 = (function (f,x,args){
var arglist__7770 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7771 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7770,fixed_arity__7771) <= fixed_arity__7771)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7770));
} else
{return f.cljs$lang$applyTo(arglist__7770);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7770));
}
});
var apply__7780 = (function (f,x,y,args){
var arglist__7772 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7773 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7772,fixed_arity__7773) <= fixed_arity__7773)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7772));
} else
{return f.cljs$lang$applyTo(arglist__7772);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7772));
}
});
var apply__7781 = (function (f,x,y,z,args){
var arglist__7774 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7775 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7774,fixed_arity__7775) <= fixed_arity__7775)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7774));
} else
{return f.cljs$lang$applyTo(arglist__7774);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7774));
}
});
var apply__7782 = (function() { 
var G__7784__delegate = function (f,a,b,c,d,args){
var arglist__7776 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7777 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7776,fixed_arity__7777) <= fixed_arity__7777)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7776));
} else
{return f.cljs$lang$applyTo(arglist__7776);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7776));
}
};
var G__7784 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7784__delegate.call(this, f, a, b, c, d, args);
};
G__7784.cljs$lang$maxFixedArity = 5;
G__7784.cljs$lang$applyTo = (function (arglist__7785){
var f = cljs.core.first(arglist__7785);
var a = cljs.core.first(cljs.core.next(arglist__7785));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7785)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7785))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7785)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7785)))));
return G__7784__delegate.call(this, f, a, b, c, d, args);
});
return G__7784;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7778.call(this,f,a);
case  3 :
return apply__7779.call(this,f,a,b);
case  4 :
return apply__7780.call(this,f,a,b,c);
case  5 :
return apply__7781.call(this,f,a,b,c,d);
default:
return apply__7782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7782.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7786){
var obj = cljs.core.first(arglist__7786);
var f = cljs.core.first(cljs.core.next(arglist__7786));
var args = cljs.core.rest(cljs.core.next(arglist__7786));
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
var not_EQ___7787 = (function (x){
return false;
});
var not_EQ___7788 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7789 = (function() { 
var G__7791__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7791 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7791__delegate.call(this, x, y, more);
};
G__7791.cljs$lang$maxFixedArity = 2;
G__7791.cljs$lang$applyTo = (function (arglist__7792){
var x = cljs.core.first(arglist__7792);
var y = cljs.core.first(cljs.core.next(arglist__7792));
var more = cljs.core.rest(cljs.core.next(arglist__7792));
return G__7791__delegate.call(this, x, y, more);
});
return G__7791;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7787.call(this,x);
case  2 :
return not_EQ___7788.call(this,x,y);
default:
return not_EQ___7789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7789.cljs$lang$applyTo;
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
var G__7793 = pred;
var G__7794 = cljs.core.next.call(null,coll);
pred = G__7793;
coll = G__7794;
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
{var or__3548__auto____7795 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{{
var G__7796 = pred;
var G__7797 = cljs.core.next.call(null,coll);
pred = G__7796;
coll = G__7797;
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
var G__7798 = null;
var G__7798__7799 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7798__7800 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7798__7801 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7798__7802 = (function() { 
var G__7804__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7804 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7804__delegate.call(this, x, y, zs);
};
G__7804.cljs$lang$maxFixedArity = 2;
G__7804.cljs$lang$applyTo = (function (arglist__7805){
var x = cljs.core.first(arglist__7805);
var y = cljs.core.first(cljs.core.next(arglist__7805));
var zs = cljs.core.rest(cljs.core.next(arglist__7805));
return G__7804__delegate.call(this, x, y, zs);
});
return G__7804;
})()
;
G__7798 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7798__7799.call(this);
case  1 :
return G__7798__7800.call(this,x);
case  2 :
return G__7798__7801.call(this,x,y);
default:
return G__7798__7802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7798.cljs$lang$maxFixedArity = 2;
G__7798.cljs$lang$applyTo = G__7798__7802.cljs$lang$applyTo;
return G__7798;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7806__delegate = function (args){
return x;
};
var G__7806 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7806__delegate.call(this, args);
};
G__7806.cljs$lang$maxFixedArity = 0;
G__7806.cljs$lang$applyTo = (function (arglist__7807){
var args = cljs.core.seq( arglist__7807 );;
return G__7806__delegate.call(this, args);
});
return G__7806;
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
var comp__7811 = (function (){
return cljs.core.identity;
});
var comp__7812 = (function (f){
return f;
});
var comp__7813 = (function (f,g){
return (function() {
var G__7817 = null;
var G__7817__7818 = (function (){
return f.call(null,g.call(null));
});
var G__7817__7819 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7817__7820 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7817__7821 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7817__7822 = (function() { 
var G__7824__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7824 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7824__delegate.call(this, x, y, z, args);
};
G__7824.cljs$lang$maxFixedArity = 3;
G__7824.cljs$lang$applyTo = (function (arglist__7825){
var x = cljs.core.first(arglist__7825);
var y = cljs.core.first(cljs.core.next(arglist__7825));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7825)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7825)));
return G__7824__delegate.call(this, x, y, z, args);
});
return G__7824;
})()
;
G__7817 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7817__7818.call(this);
case  1 :
return G__7817__7819.call(this,x);
case  2 :
return G__7817__7820.call(this,x,y);
case  3 :
return G__7817__7821.call(this,x,y,z);
default:
return G__7817__7822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7817.cljs$lang$maxFixedArity = 3;
G__7817.cljs$lang$applyTo = G__7817__7822.cljs$lang$applyTo;
return G__7817;
})()
});
var comp__7814 = (function (f,g,h){
return (function() {
var G__7826 = null;
var G__7826__7827 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7826__7828 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7826__7829 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7826__7830 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7826__7831 = (function() { 
var G__7833__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7833 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7833__delegate.call(this, x, y, z, args);
};
G__7833.cljs$lang$maxFixedArity = 3;
G__7833.cljs$lang$applyTo = (function (arglist__7834){
var x = cljs.core.first(arglist__7834);
var y = cljs.core.first(cljs.core.next(arglist__7834));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7834)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7834)));
return G__7833__delegate.call(this, x, y, z, args);
});
return G__7833;
})()
;
G__7826 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7826__7827.call(this);
case  1 :
return G__7826__7828.call(this,x);
case  2 :
return G__7826__7829.call(this,x,y);
case  3 :
return G__7826__7830.call(this,x,y,z);
default:
return G__7826__7831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7826.cljs$lang$maxFixedArity = 3;
G__7826.cljs$lang$applyTo = G__7826__7831.cljs$lang$applyTo;
return G__7826;
})()
});
var comp__7815 = (function() { 
var G__7835__delegate = function (f1,f2,f3,fs){
var fs__7808 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7836__delegate = function (args){
var ret__7809 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7808),args);
var fs__7810 = cljs.core.next.call(null,fs__7808);

while(true){
if(cljs.core.truth_(fs__7810))
{{
var G__7837 = cljs.core.first.call(null,fs__7810).call(null,ret__7809);
var G__7838 = cljs.core.next.call(null,fs__7810);
ret__7809 = G__7837;
fs__7810 = G__7838;
continue;
}
} else
{return ret__7809;
}
break;
}
};
var G__7836 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7836__delegate.call(this, args);
};
G__7836.cljs$lang$maxFixedArity = 0;
G__7836.cljs$lang$applyTo = (function (arglist__7839){
var args = cljs.core.seq( arglist__7839 );;
return G__7836__delegate.call(this, args);
});
return G__7836;
})()
;
};
var G__7835 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7835__delegate.call(this, f1, f2, f3, fs);
};
G__7835.cljs$lang$maxFixedArity = 3;
G__7835.cljs$lang$applyTo = (function (arglist__7840){
var f1 = cljs.core.first(arglist__7840);
var f2 = cljs.core.first(cljs.core.next(arglist__7840));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7840)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7840)));
return G__7835__delegate.call(this, f1, f2, f3, fs);
});
return G__7835;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7811.call(this);
case  1 :
return comp__7812.call(this,f1);
case  2 :
return comp__7813.call(this,f1,f2);
case  3 :
return comp__7814.call(this,f1,f2,f3);
default:
return comp__7815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7815.cljs$lang$applyTo;
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
var partial__7841 = (function (f,arg1){
return (function() { 
var G__7846__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7846 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7846__delegate.call(this, args);
};
G__7846.cljs$lang$maxFixedArity = 0;
G__7846.cljs$lang$applyTo = (function (arglist__7847){
var args = cljs.core.seq( arglist__7847 );;
return G__7846__delegate.call(this, args);
});
return G__7846;
})()
;
});
var partial__7842 = (function (f,arg1,arg2){
return (function() { 
var G__7848__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7848 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7848__delegate.call(this, args);
};
G__7848.cljs$lang$maxFixedArity = 0;
G__7848.cljs$lang$applyTo = (function (arglist__7849){
var args = cljs.core.seq( arglist__7849 );;
return G__7848__delegate.call(this, args);
});
return G__7848;
})()
;
});
var partial__7843 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7850__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7850 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7850__delegate.call(this, args);
};
G__7850.cljs$lang$maxFixedArity = 0;
G__7850.cljs$lang$applyTo = (function (arglist__7851){
var args = cljs.core.seq( arglist__7851 );;
return G__7850__delegate.call(this, args);
});
return G__7850;
})()
;
});
var partial__7844 = (function() { 
var G__7852__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7853__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7853 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7853__delegate.call(this, args);
};
G__7853.cljs$lang$maxFixedArity = 0;
G__7853.cljs$lang$applyTo = (function (arglist__7854){
var args = cljs.core.seq( arglist__7854 );;
return G__7853__delegate.call(this, args);
});
return G__7853;
})()
;
};
var G__7852 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7852__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7852.cljs$lang$maxFixedArity = 4;
G__7852.cljs$lang$applyTo = (function (arglist__7855){
var f = cljs.core.first(arglist__7855);
var arg1 = cljs.core.first(cljs.core.next(arglist__7855));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7855)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7855))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7855))));
return G__7852__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7852;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7841.call(this,f,arg1);
case  3 :
return partial__7842.call(this,f,arg1,arg2);
case  4 :
return partial__7843.call(this,f,arg1,arg2,arg3);
default:
return partial__7844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7844.cljs$lang$applyTo;
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
var fnil__7856 = (function (f,x){
return (function() {
var G__7860 = null;
var G__7860__7861 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7860__7862 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7860__7863 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7860__7864 = (function() { 
var G__7866__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7866 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7866__delegate.call(this, a, b, c, ds);
};
G__7866.cljs$lang$maxFixedArity = 3;
G__7866.cljs$lang$applyTo = (function (arglist__7867){
var a = cljs.core.first(arglist__7867);
var b = cljs.core.first(cljs.core.next(arglist__7867));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7867)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7867)));
return G__7866__delegate.call(this, a, b, c, ds);
});
return G__7866;
})()
;
G__7860 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7860__7861.call(this,a);
case  2 :
return G__7860__7862.call(this,a,b);
case  3 :
return G__7860__7863.call(this,a,b,c);
default:
return G__7860__7864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7860.cljs$lang$maxFixedArity = 3;
G__7860.cljs$lang$applyTo = G__7860__7864.cljs$lang$applyTo;
return G__7860;
})()
});
var fnil__7857 = (function (f,x,y){
return (function() {
var G__7868 = null;
var G__7868__7869 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7868__7870 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7868__7871 = (function() { 
var G__7873__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7873 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7873__delegate.call(this, a, b, c, ds);
};
G__7873.cljs$lang$maxFixedArity = 3;
G__7873.cljs$lang$applyTo = (function (arglist__7874){
var a = cljs.core.first(arglist__7874);
var b = cljs.core.first(cljs.core.next(arglist__7874));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7874)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7874)));
return G__7873__delegate.call(this, a, b, c, ds);
});
return G__7873;
})()
;
G__7868 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7868__7869.call(this,a,b);
case  3 :
return G__7868__7870.call(this,a,b,c);
default:
return G__7868__7871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7868.cljs$lang$maxFixedArity = 3;
G__7868.cljs$lang$applyTo = G__7868__7871.cljs$lang$applyTo;
return G__7868;
})()
});
var fnil__7858 = (function (f,x,y,z){
return (function() {
var G__7875 = null;
var G__7875__7876 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7875__7877 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7875__7878 = (function() { 
var G__7880__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7880 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7880__delegate.call(this, a, b, c, ds);
};
G__7880.cljs$lang$maxFixedArity = 3;
G__7880.cljs$lang$applyTo = (function (arglist__7881){
var a = cljs.core.first(arglist__7881);
var b = cljs.core.first(cljs.core.next(arglist__7881));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7881)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7881)));
return G__7880__delegate.call(this, a, b, c, ds);
});
return G__7880;
})()
;
G__7875 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7875__7876.call(this,a,b);
case  3 :
return G__7875__7877.call(this,a,b,c);
default:
return G__7875__7878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7875.cljs$lang$maxFixedArity = 3;
G__7875.cljs$lang$applyTo = G__7875__7878.cljs$lang$applyTo;
return G__7875;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7856.call(this,f,x);
case  3 :
return fnil__7857.call(this,f,x,y);
case  4 :
return fnil__7858.call(this,f,x,y,z);
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
var mapi__7884 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7882))
{var s__7883 = temp__3698__auto____7882;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7883)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7883)));
} else
{return null;
}
})));
});

return mapi__7884.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7885))
{var s__7886 = temp__3698__auto____7885;

var x__7887 = f.call(null,cljs.core.first.call(null,s__7886));

if(cljs.core.truth_((x__7887 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7886));
} else
{return cljs.core.cons.call(null,x__7887,keep.call(null,f,cljs.core.rest.call(null,s__7886)));
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
var keepi__7897 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7894))
{var s__7895 = temp__3698__auto____7894;

var x__7896 = f.call(null,idx,cljs.core.first.call(null,s__7895));

if(cljs.core.truth_((x__7896 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7895));
} else
{return cljs.core.cons.call(null,x__7896,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7895)));
}
} else
{return null;
}
})));
});

return keepi__7897.call(null,0,coll);
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
var every_pred__7942 = (function (p){
return (function() {
var ep1 = null;
var ep1__7947 = (function (){
return true;
});
var ep1__7948 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7949 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7904 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7904))
{return p.call(null,y);
} else
{return and__3546__auto____7904;
}
})());
});
var ep1__7950 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7905 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7905))
{var and__3546__auto____7906 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7906))
{return p.call(null,z);
} else
{return and__3546__auto____7906;
}
} else
{return and__3546__auto____7905;
}
})());
});
var ep1__7951 = (function() { 
var G__7953__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7907 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7907))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7907;
}
})());
};
var G__7953 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7953__delegate.call(this, x, y, z, args);
};
G__7953.cljs$lang$maxFixedArity = 3;
G__7953.cljs$lang$applyTo = (function (arglist__7954){
var x = cljs.core.first(arglist__7954);
var y = cljs.core.first(cljs.core.next(arglist__7954));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7954)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7954)));
return G__7953__delegate.call(this, x, y, z, args);
});
return G__7953;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7947.call(this);
case  1 :
return ep1__7948.call(this,x);
case  2 :
return ep1__7949.call(this,x,y);
case  3 :
return ep1__7950.call(this,x,y,z);
default:
return ep1__7951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7951.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7943 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7955 = (function (){
return true;
});
var ep2__7956 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7908 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7908))
{return p2.call(null,x);
} else
{return and__3546__auto____7908;
}
})());
});
var ep2__7957 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7909 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7909))
{var and__3546__auto____7910 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7910))
{var and__3546__auto____7911 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7911))
{return p2.call(null,y);
} else
{return and__3546__auto____7911;
}
} else
{return and__3546__auto____7910;
}
} else
{return and__3546__auto____7909;
}
})());
});
var ep2__7958 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7912 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7912))
{var and__3546__auto____7913 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7913))
{var and__3546__auto____7914 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7914))
{var and__3546__auto____7915 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7915))
{var and__3546__auto____7916 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7916))
{return p2.call(null,z);
} else
{return and__3546__auto____7916;
}
} else
{return and__3546__auto____7915;
}
} else
{return and__3546__auto____7914;
}
} else
{return and__3546__auto____7913;
}
} else
{return and__3546__auto____7912;
}
})());
});
var ep2__7959 = (function() { 
var G__7961__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7917 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7917))
{return cljs.core.every_QMARK_.call(null,(function (p1__7888_SHARP_){
var and__3546__auto____7918 = p1.call(null,p1__7888_SHARP_);

if(cljs.core.truth_(and__3546__auto____7918))
{return p2.call(null,p1__7888_SHARP_);
} else
{return and__3546__auto____7918;
}
}),args);
} else
{return and__3546__auto____7917;
}
})());
};
var G__7961 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7961__delegate.call(this, x, y, z, args);
};
G__7961.cljs$lang$maxFixedArity = 3;
G__7961.cljs$lang$applyTo = (function (arglist__7962){
var x = cljs.core.first(arglist__7962);
var y = cljs.core.first(cljs.core.next(arglist__7962));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7962)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7962)));
return G__7961__delegate.call(this, x, y, z, args);
});
return G__7961;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7955.call(this);
case  1 :
return ep2__7956.call(this,x);
case  2 :
return ep2__7957.call(this,x,y);
case  3 :
return ep2__7958.call(this,x,y,z);
default:
return ep2__7959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7959.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7944 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7963 = (function (){
return true;
});
var ep3__7964 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7919 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7919))
{var and__3546__auto____7920 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7920))
{return p3.call(null,x);
} else
{return and__3546__auto____7920;
}
} else
{return and__3546__auto____7919;
}
})());
});
var ep3__7965 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7921 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7921))
{var and__3546__auto____7922 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7922))
{var and__3546__auto____7923 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7923))
{var and__3546__auto____7924 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7924))
{var and__3546__auto____7925 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7925))
{return p3.call(null,y);
} else
{return and__3546__auto____7925;
}
} else
{return and__3546__auto____7924;
}
} else
{return and__3546__auto____7923;
}
} else
{return and__3546__auto____7922;
}
} else
{return and__3546__auto____7921;
}
})());
});
var ep3__7966 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7926 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7926))
{var and__3546__auto____7927 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7927))
{var and__3546__auto____7928 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7928))
{var and__3546__auto____7929 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7929))
{var and__3546__auto____7930 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7930))
{var and__3546__auto____7931 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7931))
{var and__3546__auto____7932 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7932))
{var and__3546__auto____7933 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7933))
{return p3.call(null,z);
} else
{return and__3546__auto____7933;
}
} else
{return and__3546__auto____7932;
}
} else
{return and__3546__auto____7931;
}
} else
{return and__3546__auto____7930;
}
} else
{return and__3546__auto____7929;
}
} else
{return and__3546__auto____7928;
}
} else
{return and__3546__auto____7927;
}
} else
{return and__3546__auto____7926;
}
})());
});
var ep3__7967 = (function() { 
var G__7969__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7934 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7934))
{return cljs.core.every_QMARK_.call(null,(function (p1__7889_SHARP_){
var and__3546__auto____7935 = p1.call(null,p1__7889_SHARP_);

if(cljs.core.truth_(and__3546__auto____7935))
{var and__3546__auto____7936 = p2.call(null,p1__7889_SHARP_);

if(cljs.core.truth_(and__3546__auto____7936))
{return p3.call(null,p1__7889_SHARP_);
} else
{return and__3546__auto____7936;
}
} else
{return and__3546__auto____7935;
}
}),args);
} else
{return and__3546__auto____7934;
}
})());
};
var G__7969 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7969__delegate.call(this, x, y, z, args);
};
G__7969.cljs$lang$maxFixedArity = 3;
G__7969.cljs$lang$applyTo = (function (arglist__7970){
var x = cljs.core.first(arglist__7970);
var y = cljs.core.first(cljs.core.next(arglist__7970));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7970)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7970)));
return G__7969__delegate.call(this, x, y, z, args);
});
return G__7969;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7963.call(this);
case  1 :
return ep3__7964.call(this,x);
case  2 :
return ep3__7965.call(this,x,y);
case  3 :
return ep3__7966.call(this,x,y,z);
default:
return ep3__7967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7967.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7945 = (function() { 
var G__7971__delegate = function (p1,p2,p3,ps){
var ps__7937 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7972 = (function (){
return true;
});
var epn__7973 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7890_SHARP_){
return p1__7890_SHARP_.call(null,x);
}),ps__7937);
});
var epn__7974 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7891_SHARP_){
var and__3546__auto____7938 = p1__7891_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7938))
{return p1__7891_SHARP_.call(null,y);
} else
{return and__3546__auto____7938;
}
}),ps__7937);
});
var epn__7975 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7892_SHARP_){
var and__3546__auto____7939 = p1__7892_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7939))
{var and__3546__auto____7940 = p1__7892_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7940))
{return p1__7892_SHARP_.call(null,z);
} else
{return and__3546__auto____7940;
}
} else
{return and__3546__auto____7939;
}
}),ps__7937);
});
var epn__7976 = (function() { 
var G__7978__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7941 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7941))
{return cljs.core.every_QMARK_.call(null,(function (p1__7893_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7893_SHARP_,args);
}),ps__7937);
} else
{return and__3546__auto____7941;
}
})());
};
var G__7978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7978__delegate.call(this, x, y, z, args);
};
G__7978.cljs$lang$maxFixedArity = 3;
G__7978.cljs$lang$applyTo = (function (arglist__7979){
var x = cljs.core.first(arglist__7979);
var y = cljs.core.first(cljs.core.next(arglist__7979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7979)));
return G__7978__delegate.call(this, x, y, z, args);
});
return G__7978;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7972.call(this);
case  1 :
return epn__7973.call(this,x);
case  2 :
return epn__7974.call(this,x,y);
case  3 :
return epn__7975.call(this,x,y,z);
default:
return epn__7976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7976.cljs$lang$applyTo;
return epn;
})()
};
var G__7971 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7971__delegate.call(this, p1, p2, p3, ps);
};
G__7971.cljs$lang$maxFixedArity = 3;
G__7971.cljs$lang$applyTo = (function (arglist__7980){
var p1 = cljs.core.first(arglist__7980);
var p2 = cljs.core.first(cljs.core.next(arglist__7980));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7980)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7980)));
return G__7971__delegate.call(this, p1, p2, p3, ps);
});
return G__7971;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7942.call(this,p1);
case  2 :
return every_pred__7943.call(this,p1,p2);
case  3 :
return every_pred__7944.call(this,p1,p2,p3);
default:
return every_pred__7945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7945.cljs$lang$applyTo;
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
var some_fn__8020 = (function (p){
return (function() {
var sp1 = null;
var sp1__8025 = (function (){
return null;
});
var sp1__8026 = (function (x){
return p.call(null,x);
});
var sp1__8027 = (function (x,y){
var or__3548__auto____7982 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{return p.call(null,y);
}
});
var sp1__8028 = (function (x,y,z){
var or__3548__auto____7983 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7984 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{return p.call(null,z);
}
}
});
var sp1__8029 = (function() { 
var G__8031__delegate = function (x,y,z,args){
var or__3548__auto____7985 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8031 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8031__delegate.call(this, x, y, z, args);
};
G__8031.cljs$lang$maxFixedArity = 3;
G__8031.cljs$lang$applyTo = (function (arglist__8032){
var x = cljs.core.first(arglist__8032);
var y = cljs.core.first(cljs.core.next(arglist__8032));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8032)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8032)));
return G__8031__delegate.call(this, x, y, z, args);
});
return G__8031;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8025.call(this);
case  1 :
return sp1__8026.call(this,x);
case  2 :
return sp1__8027.call(this,x,y);
case  3 :
return sp1__8028.call(this,x,y,z);
default:
return sp1__8029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8029.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8021 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8033 = (function (){
return null;
});
var sp2__8034 = (function (x){
var or__3548__auto____7986 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{return p2.call(null,x);
}
});
var sp2__8035 = (function (x,y){
var or__3548__auto____7987 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{var or__3548__auto____7988 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7989 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8036 = (function (x,y,z){
var or__3548__auto____7990 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{var or__3548__auto____7991 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{var or__3548__auto____7992 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7993 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{var or__3548__auto____7994 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8037 = (function() { 
var G__8039__delegate = function (x,y,z,args){
var or__3548__auto____7995 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{return cljs.core.some.call(null,(function (p1__7898_SHARP_){
var or__3548__auto____7996 = p1.call(null,p1__7898_SHARP_);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{return p2.call(null,p1__7898_SHARP_);
}
}),args);
}
};
var G__8039 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8039__delegate.call(this, x, y, z, args);
};
G__8039.cljs$lang$maxFixedArity = 3;
G__8039.cljs$lang$applyTo = (function (arglist__8040){
var x = cljs.core.first(arglist__8040);
var y = cljs.core.first(cljs.core.next(arglist__8040));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8040)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8040)));
return G__8039__delegate.call(this, x, y, z, args);
});
return G__8039;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8033.call(this);
case  1 :
return sp2__8034.call(this,x);
case  2 :
return sp2__8035.call(this,x,y);
case  3 :
return sp2__8036.call(this,x,y,z);
default:
return sp2__8037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8037.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8022 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8041 = (function (){
return null;
});
var sp3__8042 = (function (x){
var or__3548__auto____7997 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{return p3.call(null,x);
}
}
});
var sp3__8043 = (function (x,y){
var or__3548__auto____7999 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{var or__3548__auto____8000 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{var or__3548__auto____8001 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{var or__3548__auto____8002 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8003 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8044 = (function (x,y,z){
var or__3548__auto____8004 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8006 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{var or__3548__auto____8007 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
} else
{var or__3548__auto____8008 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{var or__3548__auto____8009 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8010 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{var or__3548__auto____8011 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
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
var sp3__8045 = (function() { 
var G__8047__delegate = function (x,y,z,args){
var or__3548__auto____8012 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{return cljs.core.some.call(null,(function (p1__7899_SHARP_){
var or__3548__auto____8013 = p1.call(null,p1__7899_SHARP_);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8014 = p2.call(null,p1__7899_SHARP_);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{return p3.call(null,p1__7899_SHARP_);
}
}
}),args);
}
};
var G__8047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8047__delegate.call(this, x, y, z, args);
};
G__8047.cljs$lang$maxFixedArity = 3;
G__8047.cljs$lang$applyTo = (function (arglist__8048){
var x = cljs.core.first(arglist__8048);
var y = cljs.core.first(cljs.core.next(arglist__8048));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8048)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8048)));
return G__8047__delegate.call(this, x, y, z, args);
});
return G__8047;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8041.call(this);
case  1 :
return sp3__8042.call(this,x);
case  2 :
return sp3__8043.call(this,x,y);
case  3 :
return sp3__8044.call(this,x,y,z);
default:
return sp3__8045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8045.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8023 = (function() { 
var G__8049__delegate = function (p1,p2,p3,ps){
var ps__8015 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8050 = (function (){
return null;
});
var spn__8051 = (function (x){
return cljs.core.some.call(null,(function (p1__7900_SHARP_){
return p1__7900_SHARP_.call(null,x);
}),ps__8015);
});
var spn__8052 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7901_SHARP_){
var or__3548__auto____8016 = p1__7901_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{return p1__7901_SHARP_.call(null,y);
}
}),ps__8015);
});
var spn__8053 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7902_SHARP_){
var or__3548__auto____8017 = p1__7902_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{var or__3548__auto____8018 = p1__7902_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{return p1__7902_SHARP_.call(null,z);
}
}
}),ps__8015);
});
var spn__8054 = (function() { 
var G__8056__delegate = function (x,y,z,args){
var or__3548__auto____8019 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{return cljs.core.some.call(null,(function (p1__7903_SHARP_){
return cljs.core.some.call(null,p1__7903_SHARP_,args);
}),ps__8015);
}
};
var G__8056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8056__delegate.call(this, x, y, z, args);
};
G__8056.cljs$lang$maxFixedArity = 3;
G__8056.cljs$lang$applyTo = (function (arglist__8057){
var x = cljs.core.first(arglist__8057);
var y = cljs.core.first(cljs.core.next(arglist__8057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8057)));
return G__8056__delegate.call(this, x, y, z, args);
});
return G__8056;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8050.call(this);
case  1 :
return spn__8051.call(this,x);
case  2 :
return spn__8052.call(this,x,y);
case  3 :
return spn__8053.call(this,x,y,z);
default:
return spn__8054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8054.cljs$lang$applyTo;
return spn;
})()
};
var G__8049 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8049__delegate.call(this, p1, p2, p3, ps);
};
G__8049.cljs$lang$maxFixedArity = 3;
G__8049.cljs$lang$applyTo = (function (arglist__8058){
var p1 = cljs.core.first(arglist__8058);
var p2 = cljs.core.first(cljs.core.next(arglist__8058));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8058)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8058)));
return G__8049__delegate.call(this, p1, p2, p3, ps);
});
return G__8049;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8020.call(this,p1);
case  2 :
return some_fn__8021.call(this,p1,p2);
case  3 :
return some_fn__8022.call(this,p1,p2,p3);
default:
return some_fn__8023.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8023.cljs$lang$applyTo;
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
var map__8071 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8059))
{var s__8060 = temp__3698__auto____8059;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8060)),map.call(null,f,cljs.core.rest.call(null,s__8060)));
} else
{return null;
}
})));
});
var map__8072 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8061 = cljs.core.seq.call(null,c1);
var s2__8062 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8063 = s1__8061;

if(cljs.core.truth_(and__3546__auto____8063))
{return s2__8062;
} else
{return and__3546__auto____8063;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8061),cljs.core.first.call(null,s2__8062)),map.call(null,f,cljs.core.rest.call(null,s1__8061),cljs.core.rest.call(null,s2__8062)));
} else
{return null;
}
})));
});
var map__8073 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8064 = cljs.core.seq.call(null,c1);
var s2__8065 = cljs.core.seq.call(null,c2);
var s3__8066 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8067 = s1__8064;

if(cljs.core.truth_(and__3546__auto____8067))
{var and__3546__auto____8068 = s2__8065;

if(cljs.core.truth_(and__3546__auto____8068))
{return s3__8066;
} else
{return and__3546__auto____8068;
}
} else
{return and__3546__auto____8067;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8064),cljs.core.first.call(null,s2__8065),cljs.core.first.call(null,s3__8066)),map.call(null,f,cljs.core.rest.call(null,s1__8064),cljs.core.rest.call(null,s2__8065),cljs.core.rest.call(null,s3__8066)));
} else
{return null;
}
})));
});
var map__8074 = (function() { 
var G__8076__delegate = function (f,c1,c2,c3,colls){
var step__8070 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8069 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8069)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8069),step.call(null,map.call(null,cljs.core.rest,ss__8069)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7981_SHARP_){
return cljs.core.apply.call(null,f,p1__7981_SHARP_);
}),step__8070.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8076 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8076__delegate.call(this, f, c1, c2, c3, colls);
};
G__8076.cljs$lang$maxFixedArity = 4;
G__8076.cljs$lang$applyTo = (function (arglist__8077){
var f = cljs.core.first(arglist__8077);
var c1 = cljs.core.first(cljs.core.next(arglist__8077));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8077)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8077))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8077))));
return G__8076__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8076;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8071.call(this,f,c1);
case  3 :
return map__8072.call(this,f,c1,c2);
case  4 :
return map__8073.call(this,f,c1,c2,c3);
default:
return map__8074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8074.cljs$lang$applyTo;
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
{var temp__3698__auto____8078 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8078))
{var s__8079 = temp__3698__auto____8078;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8079),take.call(null,(n - 1),cljs.core.rest.call(null,s__8079)));
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
var step__8082 = (function (n,coll){
while(true){
var s__8080 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8081 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8081))
{return s__8080;
} else
{return and__3546__auto____8081;
}
})()))
{{
var G__8083 = (n - 1);
var G__8084 = cljs.core.rest.call(null,s__8080);
n = G__8083;
coll = G__8084;
continue;
}
} else
{return s__8080;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8082.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8085 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8086 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8085.call(this,n);
case  2 :
return drop_last__8086.call(this,n,s);
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
var s__8088 = cljs.core.seq.call(null,coll);
var lead__8089 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8089))
{{
var G__8090 = cljs.core.next.call(null,s__8088);
var G__8091 = cljs.core.next.call(null,lead__8089);
s__8088 = G__8090;
lead__8089 = G__8091;
continue;
}
} else
{return s__8088;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8094 = (function (pred,coll){
while(true){
var s__8092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8093 = s__8092;

if(cljs.core.truth_(and__3546__auto____8093))
{return pred.call(null,cljs.core.first.call(null,s__8092));
} else
{return and__3546__auto____8093;
}
})()))
{{
var G__8095 = pred;
var G__8096 = cljs.core.rest.call(null,s__8092);
pred = G__8095;
coll = G__8096;
continue;
}
} else
{return s__8092;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8094.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8097))
{var s__8098 = temp__3698__auto____8097;

return cljs.core.concat.call(null,s__8098,cycle.call(null,s__8098));
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
var repeat__8099 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8100 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8099.call(this,n);
case  2 :
return repeat__8100.call(this,n,x);
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
var repeatedly__8102 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8103 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8102.call(this,n);
case  2 :
return repeatedly__8103.call(this,n,f);
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
var interleave__8109 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8105 = cljs.core.seq.call(null,c1);
var s2__8106 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8107 = s1__8105;

if(cljs.core.truth_(and__3546__auto____8107))
{return s2__8106;
} else
{return and__3546__auto____8107;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8105),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8106),interleave.call(null,cljs.core.rest.call(null,s1__8105),cljs.core.rest.call(null,s2__8106))));
} else
{return null;
}
})));
});
var interleave__8110 = (function() { 
var G__8112__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8108 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8108)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8108),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8108)));
} else
{return null;
}
})));
};
var G__8112 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8112__delegate.call(this, c1, c2, colls);
};
G__8112.cljs$lang$maxFixedArity = 2;
G__8112.cljs$lang$applyTo = (function (arglist__8113){
var c1 = cljs.core.first(arglist__8113);
var c2 = cljs.core.first(cljs.core.next(arglist__8113));
var colls = cljs.core.rest(cljs.core.next(arglist__8113));
return G__8112__delegate.call(this, c1, c2, colls);
});
return G__8112;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8109.call(this,c1,c2);
default:
return interleave__8110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8110.cljs$lang$applyTo;
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
var cat__8116 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8114))
{var coll__8115 = temp__3695__auto____8114;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8115),cat.call(null,cljs.core.rest.call(null,coll__8115),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8116.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8117 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8118 = (function() { 
var G__8120__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8120 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8120__delegate.call(this, f, coll, colls);
};
G__8120.cljs$lang$maxFixedArity = 2;
G__8120.cljs$lang$applyTo = (function (arglist__8121){
var f = cljs.core.first(arglist__8121);
var coll = cljs.core.first(cljs.core.next(arglist__8121));
var colls = cljs.core.rest(cljs.core.next(arglist__8121));
return G__8120__delegate.call(this, f, coll, colls);
});
return G__8120;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8117.call(this,f,coll);
default:
return mapcat__8118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8118.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8122))
{var s__8123 = temp__3698__auto____8122;

var f__8124 = cljs.core.first.call(null,s__8123);
var r__8125 = cljs.core.rest.call(null,s__8123);

if(cljs.core.truth_(pred.call(null,f__8124)))
{return cljs.core.cons.call(null,f__8124,filter.call(null,pred,r__8125));
} else
{return filter.call(null,pred,r__8125);
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
var walk__8127 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8127.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8126_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8126_SHARP_));
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
var partition__8134 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8135 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8128))
{var s__8129 = temp__3698__auto____8128;

var p__8130 = cljs.core.take.call(null,n,s__8129);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8130))))
{return cljs.core.cons.call(null,p__8130,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8129)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8136 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8131 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8131))
{var s__8132 = temp__3698__auto____8131;

var p__8133 = cljs.core.take.call(null,n,s__8132);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8133))))
{return cljs.core.cons.call(null,p__8133,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8132)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8133,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8134.call(this,n,step);
case  3 :
return partition__8135.call(this,n,step,pad);
case  4 :
return partition__8136.call(this,n,step,pad,coll);
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
var get_in__8142 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8143 = (function (m,ks,not_found){
var sentinel__8138 = cljs.core.lookup_sentinel;
var m__8139 = m;
var ks__8140 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8140))
{var m__8141 = cljs.core.get.call(null,m__8139,cljs.core.first.call(null,ks__8140),sentinel__8138);

if(cljs.core.truth_((sentinel__8138 === m__8141)))
{return not_found;
} else
{{
var G__8145 = sentinel__8138;
var G__8146 = m__8141;
var G__8147 = cljs.core.next.call(null,ks__8140);
sentinel__8138 = G__8145;
m__8139 = G__8146;
ks__8140 = G__8147;
continue;
}
}
} else
{return m__8139;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8142.call(this,m,ks);
case  3 :
return get_in__8143.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8148,v){
var vec__8149__8150 = p__8148;
var k__8151 = cljs.core.nth.call(null,vec__8149__8150,0,null);
var ks__8152 = cljs.core.nthnext.call(null,vec__8149__8150,1);

if(cljs.core.truth_(ks__8152))
{return cljs.core.assoc.call(null,m,k__8151,assoc_in.call(null,cljs.core.get.call(null,m,k__8151),ks__8152,v));
} else
{return cljs.core.assoc.call(null,m,k__8151,v);
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
var update_in__delegate = function (m,p__8153,f,args){
var vec__8154__8155 = p__8153;
var k__8156 = cljs.core.nth.call(null,vec__8154__8155,0,null);
var ks__8157 = cljs.core.nthnext.call(null,vec__8154__8155,1);

if(cljs.core.truth_(ks__8157))
{return cljs.core.assoc.call(null,m,k__8156,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8156),ks__8157,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8156,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8156),args));
}
};
var update_in = function (m,p__8153,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8153, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8158){
var m = cljs.core.first(arglist__8158);
var p__8153 = cljs.core.first(cljs.core.next(arglist__8158));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8158)));
return update_in__delegate.call(this, m, p__8153, f, args);
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
var this__8159 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8192 = null;
var G__8192__8193 = (function (coll,k){
var this__8160 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8192__8194 = (function (coll,k,not_found){
var this__8161 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8192 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8192__8193.call(this,coll,k);
case  3 :
return G__8192__8194.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8192;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8162 = this;
var new_array__8163 = cljs.core.aclone.call(null,this__8162.array);

(new_array__8163[k] = v);
return (new cljs.core.Vector(this__8162.meta,new_array__8163));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8196 = null;
var G__8196__8197 = (function (tsym8164,k){
var this__8166 = this;
var tsym8164__8167 = this;

var coll__8168 = tsym8164__8167;

return cljs.core._lookup.call(null,coll__8168,k);
});
var G__8196__8198 = (function (tsym8165,k,not_found){
var this__8169 = this;
var tsym8165__8170 = this;

var coll__8171 = tsym8165__8170;

return cljs.core._lookup.call(null,coll__8171,k,not_found);
});
G__8196 = function(tsym8165,k,not_found){
switch(arguments.length){
case  2 :
return G__8196__8197.call(this,tsym8165,k);
case  3 :
return G__8196__8198.call(this,tsym8165,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8196;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8172 = this;
var new_array__8173 = cljs.core.aclone.call(null,this__8172.array);

new_array__8173.push(o);
return (new cljs.core.Vector(this__8172.meta,new_array__8173));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8200 = null;
var G__8200__8201 = (function (v,f){
var this__8174 = this;
return cljs.core.ci_reduce.call(null,this__8174.array,f);
});
var G__8200__8202 = (function (v,f,start){
var this__8175 = this;
return cljs.core.ci_reduce.call(null,this__8175.array,f,start);
});
G__8200 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8200__8201.call(this,v,f);
case  3 :
return G__8200__8202.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8200;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8176 = this;
if(cljs.core.truth_((this__8176.array.length > 0)))
{var vector_seq__8177 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8176.array.length)))
{return cljs.core.cons.call(null,(this__8176.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8177.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8178 = this;
return this__8178.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8179 = this;
var count__8180 = this__8179.array.length;

if(cljs.core.truth_((count__8180 > 0)))
{return (this__8179.array[(count__8180 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8181 = this;
if(cljs.core.truth_((this__8181.array.length > 0)))
{var new_array__8182 = cljs.core.aclone.call(null,this__8181.array);

new_array__8182.pop();
return (new cljs.core.Vector(this__8181.meta,new_array__8182));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8183 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8184 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8185 = this;
return (new cljs.core.Vector(meta,this__8185.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8186 = this;
return this__8186.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8204 = null;
var G__8204__8205 = (function (coll,n){
var this__8187 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8188 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8188))
{return (n < this__8187.array.length);
} else
{return and__3546__auto____8188;
}
})()))
{return (this__8187.array[n]);
} else
{return null;
}
});
var G__8204__8206 = (function (coll,n,not_found){
var this__8189 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8190 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8190))
{return (n < this__8189.array.length);
} else
{return and__3546__auto____8190;
}
})()))
{return (this__8189.array[n]);
} else
{return not_found;
}
});
G__8204 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8204__8205.call(this,coll,n);
case  3 :
return G__8204__8206.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8204;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8191 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8191.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8208 = pv.cnt;

if(cljs.core.truth_((cnt__8208 < 32)))
{return 0;
} else
{return (((cnt__8208 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8209 = level;
var ret__8210 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8209)))
{return ret__8210;
} else
{var embed__8211 = ret__8210;
var r__8212 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8213 = (r__8212[0] = embed__8211);

{
var G__8214 = (ll__8209 - 5);
var G__8215 = r__8212;
ll__8209 = G__8214;
ret__8210 = G__8215;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8216 = cljs.core.aclone.call(null,parent);
var subidx__8217 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8216[subidx__8217] = tailnode);
return ret__8216;
} else
{var temp__3695__auto____8218 = (parent[subidx__8217]);

if(cljs.core.truth_(temp__3695__auto____8218))
{var child__8219 = temp__3695__auto____8218;

var node_to_insert__8220 = push_tail.call(null,pv,(level - 5),child__8219,tailnode);
var ___8221 = (ret__8216[subidx__8217] = node_to_insert__8220);

return ret__8216;
} else
{var node_to_insert__8222 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8223 = (ret__8216[subidx__8217] = node_to_insert__8222);

return ret__8216;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8224 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8224))
{return (i < pv.cnt);
} else
{return and__3546__auto____8224;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8225 = pv.root;
var level__8226 = pv.shift;

while(true){
if(cljs.core.truth_((level__8226 > 0)))
{{
var G__8227 = (node__8225[((i >> level__8226) & 31)]);
var G__8228 = (level__8226 - 5);
node__8225 = G__8227;
level__8226 = G__8228;
continue;
}
} else
{return node__8225;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8229 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8229[(i & 31)] = val);
return ret__8229;
} else
{var subidx__8230 = ((i >> level) & 31);
var ___8231 = (ret__8229[subidx__8230] = do_assoc.call(null,pv,(level - 5),(node[subidx__8230]),i,val));

return ret__8229;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8232 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8233 = pop_tail.call(null,pv,(level - 5),(node[subidx__8232]));

if(cljs.core.truth_((function (){var and__3546__auto____8234 = (new_child__8233 === null);

if(cljs.core.truth_(and__3546__auto____8234))
{return (subidx__8232 === 0);
} else
{return and__3546__auto____8234;
}
})()))
{return null;
} else
{var ret__8235 = cljs.core.aclone.call(null,node);
var ___8236 = (ret__8235[subidx__8232] = new_child__8233);

return ret__8235;
}
} else
{if(cljs.core.truth_((subidx__8232 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8237 = cljs.core.aclone.call(null,node);
var ___8238 = (ret__8237[subidx__8232] = null);

return ret__8237;
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
var this__8239 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8279 = null;
var G__8279__8280 = (function (coll,k){
var this__8240 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8279__8281 = (function (coll,k,not_found){
var this__8241 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8279 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8279__8280.call(this,coll,k);
case  3 :
return G__8279__8281.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8279;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8242 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8243 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8243))
{return (k < this__8242.cnt);
} else
{return and__3546__auto____8243;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8244 = cljs.core.aclone.call(null,this__8242.tail);

(new_tail__8244[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8242.meta,this__8242.cnt,this__8242.shift,this__8242.root,new_tail__8244));
} else
{return (new cljs.core.PersistentVector(this__8242.meta,this__8242.cnt,this__8242.shift,cljs.core.do_assoc.call(null,coll,this__8242.shift,this__8242.root,k,v),this__8242.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8242.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8242.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8283 = null;
var G__8283__8284 = (function (tsym8245,k){
var this__8247 = this;
var tsym8245__8248 = this;

var coll__8249 = tsym8245__8248;

return cljs.core._lookup.call(null,coll__8249,k);
});
var G__8283__8285 = (function (tsym8246,k,not_found){
var this__8250 = this;
var tsym8246__8251 = this;

var coll__8252 = tsym8246__8251;

return cljs.core._lookup.call(null,coll__8252,k,not_found);
});
G__8283 = function(tsym8246,k,not_found){
switch(arguments.length){
case  2 :
return G__8283__8284.call(this,tsym8246,k);
case  3 :
return G__8283__8285.call(this,tsym8246,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8283;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8253 = this;
if(cljs.core.truth_(((this__8253.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8254 = cljs.core.aclone.call(null,this__8253.tail);

new_tail__8254.push(o);
return (new cljs.core.PersistentVector(this__8253.meta,(this__8253.cnt + 1),this__8253.shift,this__8253.root,new_tail__8254));
} else
{var root_overflow_QMARK___8255 = ((this__8253.cnt >> 5) > (1 << this__8253.shift));
var new_shift__8256 = (cljs.core.truth_(root_overflow_QMARK___8255)?(this__8253.shift + 5):this__8253.shift);
var new_root__8258 = (cljs.core.truth_(root_overflow_QMARK___8255)?(function (){var n_r__8257 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8257[0] = this__8253.root);
(n_r__8257[1] = cljs.core.new_path.call(null,this__8253.shift,this__8253.tail));
return n_r__8257;
})():cljs.core.push_tail.call(null,coll,this__8253.shift,this__8253.root,this__8253.tail));

return (new cljs.core.PersistentVector(this__8253.meta,(this__8253.cnt + 1),new_shift__8256,new_root__8258,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8287 = null;
var G__8287__8288 = (function (v,f){
var this__8259 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8287__8289 = (function (v,f,start){
var this__8260 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8287 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8287__8288.call(this,v,f);
case  3 :
return G__8287__8289.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8287;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8261 = this;
if(cljs.core.truth_((this__8261.cnt > 0)))
{var vector_seq__8262 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8261.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8262.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8263 = this;
return this__8263.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8264 = this;
if(cljs.core.truth_((this__8264.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8264.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8265 = this;
if(cljs.core.truth_((this__8265.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8265.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8265.meta);
} else
{if(cljs.core.truth_((1 < (this__8265.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8265.meta,(this__8265.cnt - 1),this__8265.shift,this__8265.root,cljs.core.aclone.call(null,this__8265.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8266 = cljs.core.array_for.call(null,coll,(this__8265.cnt - 2));
var nr__8267 = cljs.core.pop_tail.call(null,this__8265.shift,this__8265.root);
var new_root__8268 = (cljs.core.truth_((nr__8267 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8267);
var cnt_1__8269 = (this__8265.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8270 = (5 < this__8265.shift);

if(cljs.core.truth_(and__3546__auto____8270))
{return ((new_root__8268[1]) === null);
} else
{return and__3546__auto____8270;
}
})()))
{return (new cljs.core.PersistentVector(this__8265.meta,cnt_1__8269,(this__8265.shift - 5),(new_root__8268[0]),new_tail__8266));
} else
{return (new cljs.core.PersistentVector(this__8265.meta,cnt_1__8269,this__8265.shift,new_root__8268,new_tail__8266));
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
var this__8271 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8272 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8273 = this;
return (new cljs.core.PersistentVector(meta,this__8273.cnt,this__8273.shift,this__8273.root,this__8273.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8274 = this;
return this__8274.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8291 = null;
var G__8291__8292 = (function (coll,n){
var this__8275 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8291__8293 = (function (coll,n,not_found){
var this__8276 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8277 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8277))
{return (n < this__8276.cnt);
} else
{return and__3546__auto____8277;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8291 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,coll,n);
case  3 :
return G__8291__8293.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8278 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8278.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8295){
var args = cljs.core.seq( arglist__8295 );;
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
var this__8296 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8324 = null;
var G__8324__8325 = (function (coll,k){
var this__8297 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8324__8326 = (function (coll,k,not_found){
var this__8298 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8324 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8324__8325.call(this,coll,k);
case  3 :
return G__8324__8326.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8324;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8299 = this;
var v_pos__8300 = (this__8299.start + key);

return (new cljs.core.Subvec(this__8299.meta,cljs.core._assoc.call(null,this__8299.v,v_pos__8300,val),this__8299.start,((this__8299.end > (v_pos__8300 + 1)) ? this__8299.end : (v_pos__8300 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8328 = null;
var G__8328__8329 = (function (tsym8301,k){
var this__8303 = this;
var tsym8301__8304 = this;

var coll__8305 = tsym8301__8304;

return cljs.core._lookup.call(null,coll__8305,k);
});
var G__8328__8330 = (function (tsym8302,k,not_found){
var this__8306 = this;
var tsym8302__8307 = this;

var coll__8308 = tsym8302__8307;

return cljs.core._lookup.call(null,coll__8308,k,not_found);
});
G__8328 = function(tsym8302,k,not_found){
switch(arguments.length){
case  2 :
return G__8328__8329.call(this,tsym8302,k);
case  3 :
return G__8328__8330.call(this,tsym8302,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8328;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8309 = this;
return (new cljs.core.Subvec(this__8309.meta,cljs.core._assoc_n.call(null,this__8309.v,this__8309.end,o),this__8309.start,(this__8309.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8332 = null;
var G__8332__8333 = (function (coll,f){
var this__8310 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8332__8334 = (function (coll,f,start){
var this__8311 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8332 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8332__8333.call(this,coll,f);
case  3 :
return G__8332__8334.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8332;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8312 = this;
var subvec_seq__8313 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8312.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8312.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8313.call(null,this__8312.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8314 = this;
return (this__8314.end - this__8314.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8315 = this;
return cljs.core._nth.call(null,this__8315.v,(this__8315.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8316 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8316.start,this__8316.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8316.meta,this__8316.v,this__8316.start,(this__8316.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8317 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8318 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8319 = this;
return (new cljs.core.Subvec(meta,this__8319.v,this__8319.start,this__8319.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8320 = this;
return this__8320.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8336 = null;
var G__8336__8337 = (function (coll,n){
var this__8321 = this;
return cljs.core._nth.call(null,this__8321.v,(this__8321.start + n));
});
var G__8336__8338 = (function (coll,n,not_found){
var this__8322 = this;
return cljs.core._nth.call(null,this__8322.v,(this__8322.start + n),not_found);
});
G__8336 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8336__8337.call(this,coll,n);
case  3 :
return G__8336__8338.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8336;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8323 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8323.meta);
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
var subvec__8340 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8341 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8340.call(this,v,start);
case  3 :
return subvec__8341.call(this,v,start,end);
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
var this__8343 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8344 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8345 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8346 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8346.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8347 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8348 = this;
return cljs.core._first.call(null,this__8348.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8349 = this;
var temp__3695__auto____8350 = cljs.core.next.call(null,this__8349.front);

if(cljs.core.truth_(temp__3695__auto____8350))
{var f1__8351 = temp__3695__auto____8350;

return (new cljs.core.PersistentQueueSeq(this__8349.meta,f1__8351,this__8349.rear));
} else
{if(cljs.core.truth_((this__8349.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8349.meta,this__8349.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8352 = this;
return this__8352.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8353 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8353.front,this__8353.rear));
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
var this__8354 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8355 = this;
if(cljs.core.truth_(this__8355.front))
{return (new cljs.core.PersistentQueue(this__8355.meta,(this__8355.count + 1),this__8355.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8356 = this__8355.rear;

if(cljs.core.truth_(or__3548__auto____8356))
{return or__3548__auto____8356;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8355.meta,(this__8355.count + 1),cljs.core.conj.call(null,this__8355.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8357 = this;
var rear__8358 = cljs.core.seq.call(null,this__8357.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8359 = this__8357.front;

if(cljs.core.truth_(or__3548__auto____8359))
{return or__3548__auto____8359;
} else
{return rear__8358;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8357.front,cljs.core.seq.call(null,rear__8358)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8360 = this;
return this__8360.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8361 = this;
return cljs.core._first.call(null,this__8361.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8362 = this;
if(cljs.core.truth_(this__8362.front))
{var temp__3695__auto____8363 = cljs.core.next.call(null,this__8362.front);

if(cljs.core.truth_(temp__3695__auto____8363))
{var f1__8364 = temp__3695__auto____8363;

return (new cljs.core.PersistentQueue(this__8362.meta,(this__8362.count - 1),f1__8364,this__8362.rear));
} else
{return (new cljs.core.PersistentQueue(this__8362.meta,(this__8362.count - 1),cljs.core.seq.call(null,this__8362.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8365 = this;
return cljs.core.first.call(null,this__8365.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8366 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8367 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8368 = this;
return (new cljs.core.PersistentQueue(meta,this__8368.count,this__8368.front,this__8368.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8369 = this;
return this__8369.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8370 = this;
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
var this__8371 = this;
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
var len__8372 = array.length;

var i__8373 = 0;

while(true){
if(cljs.core.truth_((i__8373 < len__8372)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8373]))))
{return i__8373;
} else
{{
var G__8374 = (i__8373 + incr);
i__8373 = G__8374;
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
var obj_map_contains_key_QMARK___8376 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8377 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8375 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8375))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8375;
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
return obj_map_contains_key_QMARK___8376.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8377.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8380 = cljs.core.hash.call(null,a);
var b__8381 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8380 < b__8381)))
{return -1;
} else
{if(cljs.core.truth_((a__8380 > b__8381)))
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
var this__8382 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8409 = null;
var G__8409__8410 = (function (coll,k){
var this__8383 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8409__8411 = (function (coll,k,not_found){
var this__8384 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8384.strobj,(this__8384.strobj[k]),not_found);
});
G__8409 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8409__8410.call(this,coll,k);
case  3 :
return G__8409__8411.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8409;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8385 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8386 = goog.object.clone.call(null,this__8385.strobj);
var overwrite_QMARK___8387 = new_strobj__8386.hasOwnProperty(k);

(new_strobj__8386[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8387))
{return (new cljs.core.ObjMap(this__8385.meta,this__8385.keys,new_strobj__8386));
} else
{var new_keys__8388 = cljs.core.aclone.call(null,this__8385.keys);

new_keys__8388.push(k);
return (new cljs.core.ObjMap(this__8385.meta,new_keys__8388,new_strobj__8386));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8385.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8389 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8389.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8413 = null;
var G__8413__8414 = (function (tsym8390,k){
var this__8392 = this;
var tsym8390__8393 = this;

var coll__8394 = tsym8390__8393;

return cljs.core._lookup.call(null,coll__8394,k);
});
var G__8413__8415 = (function (tsym8391,k,not_found){
var this__8395 = this;
var tsym8391__8396 = this;

var coll__8397 = tsym8391__8396;

return cljs.core._lookup.call(null,coll__8397,k,not_found);
});
G__8413 = function(tsym8391,k,not_found){
switch(arguments.length){
case  2 :
return G__8413__8414.call(this,tsym8391,k);
case  3 :
return G__8413__8415.call(this,tsym8391,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8413;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8398 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8399 = this;
if(cljs.core.truth_((this__8399.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8379_SHARP_){
return cljs.core.vector.call(null,p1__8379_SHARP_,(this__8399.strobj[p1__8379_SHARP_]));
}),this__8399.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8400 = this;
return this__8400.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8401 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8402 = this;
return (new cljs.core.ObjMap(meta,this__8402.keys,this__8402.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8403 = this;
return this__8403.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8404 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8404.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8405 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8406 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8406))
{return this__8405.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8406;
}
})()))
{var new_keys__8407 = cljs.core.aclone.call(null,this__8405.keys);
var new_strobj__8408 = goog.object.clone.call(null,this__8405.strobj);

new_keys__8407.splice(cljs.core.scan_array.call(null,1,k,new_keys__8407),1);
cljs.core.js_delete.call(null,new_strobj__8408,k);
return (new cljs.core.ObjMap(this__8405.meta,new_keys__8407,new_strobj__8408));
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
var this__8418 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8456 = null;
var G__8456__8457 = (function (coll,k){
var this__8419 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8456__8458 = (function (coll,k,not_found){
var this__8420 = this;
var bucket__8421 = (this__8420.hashobj[cljs.core.hash.call(null,k)]);
var i__8422 = (cljs.core.truth_(bucket__8421)?cljs.core.scan_array.call(null,2,k,bucket__8421):null);

if(cljs.core.truth_(i__8422))
{return (bucket__8421[(i__8422 + 1)]);
} else
{return not_found;
}
});
G__8456 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8456__8457.call(this,coll,k);
case  3 :
return G__8456__8458.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8456;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8423 = this;
var h__8424 = cljs.core.hash.call(null,k);
var bucket__8425 = (this__8423.hashobj[h__8424]);

if(cljs.core.truth_(bucket__8425))
{var new_bucket__8426 = cljs.core.aclone.call(null,bucket__8425);
var new_hashobj__8427 = goog.object.clone.call(null,this__8423.hashobj);

(new_hashobj__8427[h__8424] = new_bucket__8426);
var temp__3695__auto____8428 = cljs.core.scan_array.call(null,2,k,new_bucket__8426);

if(cljs.core.truth_(temp__3695__auto____8428))
{var i__8429 = temp__3695__auto____8428;

(new_bucket__8426[(i__8429 + 1)] = v);
return (new cljs.core.HashMap(this__8423.meta,this__8423.count,new_hashobj__8427));
} else
{new_bucket__8426.push(k,v);
return (new cljs.core.HashMap(this__8423.meta,(this__8423.count + 1),new_hashobj__8427));
}
} else
{var new_hashobj__8430 = goog.object.clone.call(null,this__8423.hashobj);

(new_hashobj__8430[h__8424] = [k,v]);
return (new cljs.core.HashMap(this__8423.meta,(this__8423.count + 1),new_hashobj__8430));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8431 = this;
var bucket__8432 = (this__8431.hashobj[cljs.core.hash.call(null,k)]);
var i__8433 = (cljs.core.truth_(bucket__8432)?cljs.core.scan_array.call(null,2,k,bucket__8432):null);

if(cljs.core.truth_(i__8433))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8460 = null;
var G__8460__8461 = (function (tsym8434,k){
var this__8436 = this;
var tsym8434__8437 = this;

var coll__8438 = tsym8434__8437;

return cljs.core._lookup.call(null,coll__8438,k);
});
var G__8460__8462 = (function (tsym8435,k,not_found){
var this__8439 = this;
var tsym8435__8440 = this;

var coll__8441 = tsym8435__8440;

return cljs.core._lookup.call(null,coll__8441,k,not_found);
});
G__8460 = function(tsym8435,k,not_found){
switch(arguments.length){
case  2 :
return G__8460__8461.call(this,tsym8435,k);
case  3 :
return G__8460__8462.call(this,tsym8435,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8460;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8442 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8443 = this;
if(cljs.core.truth_((this__8443.count > 0)))
{var hashes__8444 = cljs.core.js_keys.call(null,this__8443.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8417_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8443.hashobj[p1__8417_SHARP_])));
}),hashes__8444);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8445 = this;
return this__8445.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8446 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8447 = this;
return (new cljs.core.HashMap(meta,this__8447.count,this__8447.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8448 = this;
return this__8448.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8449 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8449.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8450 = this;
var h__8451 = cljs.core.hash.call(null,k);
var bucket__8452 = (this__8450.hashobj[h__8451]);
var i__8453 = (cljs.core.truth_(bucket__8452)?cljs.core.scan_array.call(null,2,k,bucket__8452):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8453)))
{return coll;
} else
{var new_hashobj__8454 = goog.object.clone.call(null,this__8450.hashobj);

if(cljs.core.truth_((3 > bucket__8452.length)))
{cljs.core.js_delete.call(null,new_hashobj__8454,h__8451);
} else
{var new_bucket__8455 = cljs.core.aclone.call(null,bucket__8452);

new_bucket__8455.splice(i__8453,2);
(new_hashobj__8454[h__8451] = new_bucket__8455);
}
return (new cljs.core.HashMap(this__8450.meta,(this__8450.count - 1),new_hashobj__8454));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8464 = ks.length;

var i__8465 = 0;
var out__8466 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8465 < len__8464)))
{{
var G__8467 = (i__8465 + 1);
var G__8468 = cljs.core.assoc.call(null,out__8466,(ks[i__8465]),(vs[i__8465]));
i__8465 = G__8467;
out__8466 = G__8468;
continue;
}
} else
{return out__8466;
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
var in$__8469 = cljs.core.seq.call(null,keyvals);
var out__8470 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8469))
{{
var G__8471 = cljs.core.nnext.call(null,in$__8469);
var G__8472 = cljs.core.assoc.call(null,out__8470,cljs.core.first.call(null,in$__8469),cljs.core.second.call(null,in$__8469));
in$__8469 = G__8471;
out__8470 = G__8472;
continue;
}
} else
{return out__8470;
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
hash_map.cljs$lang$applyTo = (function (arglist__8473){
var keyvals = cljs.core.seq( arglist__8473 );;
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
{return cljs.core.reduce.call(null,(function (p1__8474_SHARP_,p2__8475_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8476 = p1__8474_SHARP_;

if(cljs.core.truth_(or__3548__auto____8476))
{return or__3548__auto____8476;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8475_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8477){
var maps = cljs.core.seq( arglist__8477 );;
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
{var merge_entry__8480 = (function (m,e){
var k__8478 = cljs.core.first.call(null,e);
var v__8479 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8478)))
{return cljs.core.assoc.call(null,m,k__8478,f.call(null,cljs.core.get.call(null,m,k__8478),v__8479));
} else
{return cljs.core.assoc.call(null,m,k__8478,v__8479);
}
});
var merge2__8482 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8480,(function (){var or__3548__auto____8481 = m1;

if(cljs.core.truth_(or__3548__auto____8481))
{return or__3548__auto____8481;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8482,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8483){
var f = cljs.core.first(arglist__8483);
var maps = cljs.core.rest(arglist__8483);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8485 = cljs.core.ObjMap.fromObject([],{});
var keys__8486 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8486))
{var key__8487 = cljs.core.first.call(null,keys__8486);
var entry__8488 = cljs.core.get.call(null,map,key__8487,"\uFDD0'user/not-found");

{
var G__8489 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8488,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8485,key__8487,entry__8488):ret__8485);
var G__8490 = cljs.core.next.call(null,keys__8486);
ret__8485 = G__8489;
keys__8486 = G__8490;
continue;
}
} else
{return ret__8485;
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
var this__8491 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8512 = null;
var G__8512__8513 = (function (coll,v){
var this__8492 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8512__8514 = (function (coll,v,not_found){
var this__8493 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8493.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8512 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8512__8513.call(this,coll,v);
case  3 :
return G__8512__8514.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8512;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8516 = null;
var G__8516__8517 = (function (tsym8494,k){
var this__8496 = this;
var tsym8494__8497 = this;

var coll__8498 = tsym8494__8497;

return cljs.core._lookup.call(null,coll__8498,k);
});
var G__8516__8518 = (function (tsym8495,k,not_found){
var this__8499 = this;
var tsym8495__8500 = this;

var coll__8501 = tsym8495__8500;

return cljs.core._lookup.call(null,coll__8501,k,not_found);
});
G__8516 = function(tsym8495,k,not_found){
switch(arguments.length){
case  2 :
return G__8516__8517.call(this,tsym8495,k);
case  3 :
return G__8516__8518.call(this,tsym8495,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8516;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8502 = this;
return (new cljs.core.Set(this__8502.meta,cljs.core.assoc.call(null,this__8502.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8503 = this;
return cljs.core.keys.call(null,this__8503.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8504 = this;
return (new cljs.core.Set(this__8504.meta,cljs.core.dissoc.call(null,this__8504.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8505 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8506 = this;
var and__3546__auto____8507 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8507))
{var and__3546__auto____8508 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8508))
{return cljs.core.every_QMARK_.call(null,(function (p1__8484_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8484_SHARP_);
}),other);
} else
{return and__3546__auto____8508;
}
} else
{return and__3546__auto____8507;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8509 = this;
return (new cljs.core.Set(meta,this__8509.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8510 = this;
return this__8510.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8511 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8511.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8521 = cljs.core.seq.call(null,coll);
var out__8522 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8521))))
{{
var G__8523 = cljs.core.rest.call(null,in$__8521);
var G__8524 = cljs.core.conj.call(null,out__8522,cljs.core.first.call(null,in$__8521));
in$__8521 = G__8523;
out__8522 = G__8524;
continue;
}
} else
{return out__8522;
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
{var n__8525 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8526 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8526))
{var e__8527 = temp__3695__auto____8526;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8527));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8525,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8520_SHARP_){
var temp__3695__auto____8528 = cljs.core.find.call(null,smap,p1__8520_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8528))
{var e__8529 = temp__3695__auto____8528;

return cljs.core.second.call(null,e__8529);
} else
{return p1__8520_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8537 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8530,seen){
while(true){
var vec__8531__8532 = p__8530;
var f__8533 = cljs.core.nth.call(null,vec__8531__8532,0,null);
var xs__8534 = vec__8531__8532;

var temp__3698__auto____8535 = cljs.core.seq.call(null,xs__8534);

if(cljs.core.truth_(temp__3698__auto____8535))
{var s__8536 = temp__3698__auto____8535;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8533)))
{{
var G__8538 = cljs.core.rest.call(null,s__8536);
var G__8539 = seen;
p__8530 = G__8538;
seen = G__8539;
continue;
}
} else
{return cljs.core.cons.call(null,f__8533,step.call(null,cljs.core.rest.call(null,s__8536),cljs.core.conj.call(null,seen,f__8533)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8537.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8540 = cljs.core.PersistentVector.fromArray([]);
var s__8541 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8541)))
{{
var G__8542 = cljs.core.conj.call(null,ret__8540,cljs.core.first.call(null,s__8541));
var G__8543 = cljs.core.next.call(null,s__8541);
ret__8540 = G__8542;
s__8541 = G__8543;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8540);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8544 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8544))
{return or__3548__auto____8544;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8545 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8545 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8545 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8546 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8546))
{return or__3548__auto____8546;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8547 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8547 > -1)))
{return cljs.core.subs.call(null,x,2,i__8547);
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
var map__8550 = cljs.core.ObjMap.fromObject([],{});
var ks__8551 = cljs.core.seq.call(null,keys);
var vs__8552 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8553 = ks__8551;

if(cljs.core.truth_(and__3546__auto____8553))
{return vs__8552;
} else
{return and__3546__auto____8553;
}
})()))
{{
var G__8554 = cljs.core.assoc.call(null,map__8550,cljs.core.first.call(null,ks__8551),cljs.core.first.call(null,vs__8552));
var G__8555 = cljs.core.next.call(null,ks__8551);
var G__8556 = cljs.core.next.call(null,vs__8552);
map__8550 = G__8554;
ks__8551 = G__8555;
vs__8552 = G__8556;
continue;
}
} else
{return map__8550;
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
var max_key__8559 = (function (k,x){
return x;
});
var max_key__8560 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8561 = (function() { 
var G__8563__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8548_SHARP_,p2__8549_SHARP_){
return max_key.call(null,k,p1__8548_SHARP_,p2__8549_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8563 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8563__delegate.call(this, k, x, y, more);
};
G__8563.cljs$lang$maxFixedArity = 3;
G__8563.cljs$lang$applyTo = (function (arglist__8564){
var k = cljs.core.first(arglist__8564);
var x = cljs.core.first(cljs.core.next(arglist__8564));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8564)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8564)));
return G__8563__delegate.call(this, k, x, y, more);
});
return G__8563;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8559.call(this,k,x);
case  3 :
return max_key__8560.call(this,k,x,y);
default:
return max_key__8561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8561.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8565 = (function (k,x){
return x;
});
var min_key__8566 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8567 = (function() { 
var G__8569__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8557_SHARP_,p2__8558_SHARP_){
return min_key.call(null,k,p1__8557_SHARP_,p2__8558_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8569 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8569__delegate.call(this, k, x, y, more);
};
G__8569.cljs$lang$maxFixedArity = 3;
G__8569.cljs$lang$applyTo = (function (arglist__8570){
var k = cljs.core.first(arglist__8570);
var x = cljs.core.first(cljs.core.next(arglist__8570));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8570)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8570)));
return G__8569__delegate.call(this, k, x, y, more);
});
return G__8569;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8565.call(this,k,x);
case  3 :
return min_key__8566.call(this,k,x,y);
default:
return min_key__8567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8567.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8573 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8574 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8571))
{var s__8572 = temp__3698__auto____8571;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8572),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8572)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8573.call(this,n,step);
case  3 :
return partition_all__8574.call(this,n,step,coll);
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
var temp__3698__auto____8576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8576))
{var s__8577 = temp__3698__auto____8576;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8577))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8577),take_while.call(null,pred,cljs.core.rest.call(null,s__8577)));
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
var this__8578 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8579 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8595 = null;
var G__8595__8596 = (function (rng,f){
var this__8580 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8595__8597 = (function (rng,f,s){
var this__8581 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8595 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8595__8596.call(this,rng,f);
case  3 :
return G__8595__8597.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8595;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8582 = this;
var comp__8583 = (cljs.core.truth_((this__8582.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8583.call(null,this__8582.start,this__8582.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8584 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8584.end - this__8584.start) / this__8584.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8585 = this;
return this__8585.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8586 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8586.meta,(this__8586.start + this__8586.step),this__8586.end,this__8586.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8587 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8588 = this;
return (new cljs.core.Range(meta,this__8588.start,this__8588.end,this__8588.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8589 = this;
return this__8589.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8599 = null;
var G__8599__8600 = (function (rng,n){
var this__8590 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8590.start + (n * this__8590.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8591 = (this__8590.start > this__8590.end);

if(cljs.core.truth_(and__3546__auto____8591))
{return cljs.core._EQ_.call(null,this__8590.step,0);
} else
{return and__3546__auto____8591;
}
})()))
{return this__8590.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8599__8601 = (function (rng,n,not_found){
var this__8592 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8592.start + (n * this__8592.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8593 = (this__8592.start > this__8592.end);

if(cljs.core.truth_(and__3546__auto____8593))
{return cljs.core._EQ_.call(null,this__8592.step,0);
} else
{return and__3546__auto____8593;
}
})()))
{return this__8592.start;
} else
{return not_found;
}
}
});
G__8599 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8599__8600.call(this,rng,n);
case  3 :
return G__8599__8601.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8599;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8594 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8594.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8603 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8604 = (function (end){
return range.call(null,0,end,1);
});
var range__8605 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8606 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8603.call(this);
case  1 :
return range__8604.call(this,start);
case  2 :
return range__8605.call(this,start,end);
case  3 :
return range__8606.call(this,start,end,step);
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
var temp__3698__auto____8608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8608))
{var s__8609 = temp__3698__auto____8608;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8609),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8609)));
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
var temp__3698__auto____8611 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8611))
{var s__8612 = temp__3698__auto____8611;

var fst__8613 = cljs.core.first.call(null,s__8612);
var fv__8614 = f.call(null,fst__8613);
var run__8615 = cljs.core.cons.call(null,fst__8613,cljs.core.take_while.call(null,(function (p1__8610_SHARP_){
return cljs.core._EQ_.call(null,fv__8614,f.call(null,p1__8610_SHARP_));
}),cljs.core.next.call(null,s__8612)));

return cljs.core.cons.call(null,run__8615,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8615),s__8612))));
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
var reductions__8630 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8626))
{var s__8627 = temp__3695__auto____8626;

return reductions.call(null,f,cljs.core.first.call(null,s__8627),cljs.core.rest.call(null,s__8627));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8631 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8628))
{var s__8629 = temp__3698__auto____8628;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8629)),cljs.core.rest.call(null,s__8629));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8630.call(this,f,init);
case  3 :
return reductions__8631.call(this,f,init,coll);
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
var juxt__8634 = (function (f){
return (function() {
var G__8639 = null;
var G__8639__8640 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8639__8641 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8639__8642 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8639__8643 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8639__8644 = (function() { 
var G__8646__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8646__delegate.call(this, x, y, z, args);
};
G__8646.cljs$lang$maxFixedArity = 3;
G__8646.cljs$lang$applyTo = (function (arglist__8647){
var x = cljs.core.first(arglist__8647);
var y = cljs.core.first(cljs.core.next(arglist__8647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8647)));
return G__8646__delegate.call(this, x, y, z, args);
});
return G__8646;
})()
;
G__8639 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8639__8640.call(this);
case  1 :
return G__8639__8641.call(this,x);
case  2 :
return G__8639__8642.call(this,x,y);
case  3 :
return G__8639__8643.call(this,x,y,z);
default:
return G__8639__8644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8639.cljs$lang$maxFixedArity = 3;
G__8639.cljs$lang$applyTo = G__8639__8644.cljs$lang$applyTo;
return G__8639;
})()
});
var juxt__8635 = (function (f,g){
return (function() {
var G__8648 = null;
var G__8648__8649 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8648__8650 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8648__8651 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8648__8652 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8648__8653 = (function() { 
var G__8655__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8655__delegate.call(this, x, y, z, args);
};
G__8655.cljs$lang$maxFixedArity = 3;
G__8655.cljs$lang$applyTo = (function (arglist__8656){
var x = cljs.core.first(arglist__8656);
var y = cljs.core.first(cljs.core.next(arglist__8656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8656)));
return G__8655__delegate.call(this, x, y, z, args);
});
return G__8655;
})()
;
G__8648 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8648__8649.call(this);
case  1 :
return G__8648__8650.call(this,x);
case  2 :
return G__8648__8651.call(this,x,y);
case  3 :
return G__8648__8652.call(this,x,y,z);
default:
return G__8648__8653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8648.cljs$lang$maxFixedArity = 3;
G__8648.cljs$lang$applyTo = G__8648__8653.cljs$lang$applyTo;
return G__8648;
})()
});
var juxt__8636 = (function (f,g,h){
return (function() {
var G__8657 = null;
var G__8657__8658 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8657__8659 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8657__8660 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8657__8661 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8657__8662 = (function() { 
var G__8664__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8664__delegate.call(this, x, y, z, args);
};
G__8664.cljs$lang$maxFixedArity = 3;
G__8664.cljs$lang$applyTo = (function (arglist__8665){
var x = cljs.core.first(arglist__8665);
var y = cljs.core.first(cljs.core.next(arglist__8665));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8665)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8665)));
return G__8664__delegate.call(this, x, y, z, args);
});
return G__8664;
})()
;
G__8657 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8657__8658.call(this);
case  1 :
return G__8657__8659.call(this,x);
case  2 :
return G__8657__8660.call(this,x,y);
case  3 :
return G__8657__8661.call(this,x,y,z);
default:
return G__8657__8662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8657.cljs$lang$maxFixedArity = 3;
G__8657.cljs$lang$applyTo = G__8657__8662.cljs$lang$applyTo;
return G__8657;
})()
});
var juxt__8637 = (function() { 
var G__8666__delegate = function (f,g,h,fs){
var fs__8633 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8667 = null;
var G__8667__8668 = (function (){
return cljs.core.reduce.call(null,(function (p1__8616_SHARP_,p2__8617_SHARP_){
return cljs.core.conj.call(null,p1__8616_SHARP_,p2__8617_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__8633);
});
var G__8667__8669 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8618_SHARP_,p2__8619_SHARP_){
return cljs.core.conj.call(null,p1__8618_SHARP_,p2__8619_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__8633);
});
var G__8667__8670 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8620_SHARP_,p2__8621_SHARP_){
return cljs.core.conj.call(null,p1__8620_SHARP_,p2__8621_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__8633);
});
var G__8667__8671 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8622_SHARP_,p2__8623_SHARP_){
return cljs.core.conj.call(null,p1__8622_SHARP_,p2__8623_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__8633);
});
var G__8667__8672 = (function() { 
var G__8674__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8624_SHARP_,p2__8625_SHARP_){
return cljs.core.conj.call(null,p1__8624_SHARP_,cljs.core.apply.call(null,p2__8625_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__8633);
};
var G__8674 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8674__delegate.call(this, x, y, z, args);
};
G__8674.cljs$lang$maxFixedArity = 3;
G__8674.cljs$lang$applyTo = (function (arglist__8675){
var x = cljs.core.first(arglist__8675);
var y = cljs.core.first(cljs.core.next(arglist__8675));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8675)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8675)));
return G__8674__delegate.call(this, x, y, z, args);
});
return G__8674;
})()
;
G__8667 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8667__8668.call(this);
case  1 :
return G__8667__8669.call(this,x);
case  2 :
return G__8667__8670.call(this,x,y);
case  3 :
return G__8667__8671.call(this,x,y,z);
default:
return G__8667__8672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8667.cljs$lang$maxFixedArity = 3;
G__8667.cljs$lang$applyTo = G__8667__8672.cljs$lang$applyTo;
return G__8667;
})()
};
var G__8666 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8666__delegate.call(this, f, g, h, fs);
};
G__8666.cljs$lang$maxFixedArity = 3;
G__8666.cljs$lang$applyTo = (function (arglist__8676){
var f = cljs.core.first(arglist__8676);
var g = cljs.core.first(cljs.core.next(arglist__8676));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8676)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8676)));
return G__8666__delegate.call(this, f, g, h, fs);
});
return G__8666;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8634.call(this,f);
case  2 :
return juxt__8635.call(this,f,g);
case  3 :
return juxt__8636.call(this,f,g,h);
default:
return juxt__8637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8637.cljs$lang$applyTo;
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
var dorun__8678 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8681 = cljs.core.next.call(null,coll);
coll = G__8681;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8679 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8677 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8677))
{return (n > 0);
} else
{return and__3546__auto____8677;
}
})()))
{{
var G__8682 = (n - 1);
var G__8683 = cljs.core.next.call(null,coll);
n = G__8682;
coll = G__8683;
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
return dorun__8678.call(this,n);
case  2 :
return dorun__8679.call(this,n,coll);
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
var doall__8684 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8685 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8684.call(this,n);
case  2 :
return doall__8685.call(this,n,coll);
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
var matches__8687 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8687),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8687),1)))
{return cljs.core.first.call(null,matches__8687);
} else
{return cljs.core.vec.call(null,matches__8687);
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
var matches__8688 = re.exec(s);

if(cljs.core.truth_((matches__8688 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8688),1)))
{return cljs.core.first.call(null,matches__8688);
} else
{return cljs.core.vec.call(null,matches__8688);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8689 = cljs.core.re_find.call(null,re,s);
var match_idx__8690 = s.search(re);
var match_str__8691 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8689))?cljs.core.first.call(null,match_data__8689):match_data__8689);
var post_match__8692 = cljs.core.subs.call(null,s,(match_idx__8690 + cljs.core.count.call(null,match_str__8691)));

if(cljs.core.truth_(match_data__8689))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8689,re_seq.call(null,re,post_match__8692));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8694__8695 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8696 = cljs.core.nth.call(null,vec__8694__8695,0,null);
var flags__8697 = cljs.core.nth.call(null,vec__8694__8695,1,null);
var pattern__8698 = cljs.core.nth.call(null,vec__8694__8695,2,null);

return (new RegExp(pattern__8698,flags__8697));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8693_SHARP_){
return print_one.call(null,p1__8693_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8699 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8699))
{var and__3546__auto____8703 = (function (){var x__3028__auto____8700 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8701 = x__3028__auto____8700;

if(cljs.core.truth_(and__3546__auto____8701))
{var and__3546__auto____8702 = x__3028__auto____8700.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8702))
{return cljs.core.not.call(null,x__3028__auto____8700.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8702;
}
} else
{return and__3546__auto____8701;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____8700);
}
})();

if(cljs.core.truth_(and__3546__auto____8703))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8703;
}
} else
{return and__3546__auto____8699;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____8704 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8705 = x__3028__auto____8704;

if(cljs.core.truth_(and__3546__auto____8705))
{var and__3546__auto____8706 = x__3028__auto____8704.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8706))
{return cljs.core.not.call(null,x__3028__auto____8704.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8706;
}
} else
{return and__3546__auto____8705;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____8704);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__8707 = cljs.core.first.call(null,objs);
var sb__8708 = (new goog.string.StringBuffer());

var G__8709__8710 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8709__8710))
{var obj__8711 = cljs.core.first.call(null,G__8709__8710);
var G__8709__8712 = G__8709__8710;

while(true){
if(cljs.core.truth_((obj__8711 === first_obj__8707)))
{} else
{sb__8708.append(" ");
}
var G__8713__8714 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8711,opts));

if(cljs.core.truth_(G__8713__8714))
{var string__8715 = cljs.core.first.call(null,G__8713__8714);
var G__8713__8716 = G__8713__8714;

while(true){
sb__8708.append(string__8715);
var temp__3698__auto____8717 = cljs.core.next.call(null,G__8713__8716);

if(cljs.core.truth_(temp__3698__auto____8717))
{var G__8713__8718 = temp__3698__auto____8717;

{
var G__8721 = cljs.core.first.call(null,G__8713__8718);
var G__8722 = G__8713__8718;
string__8715 = G__8721;
G__8713__8716 = G__8722;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8719 = cljs.core.next.call(null,G__8709__8712);

if(cljs.core.truth_(temp__3698__auto____8719))
{var G__8709__8720 = temp__3698__auto____8719;

{
var G__8723 = cljs.core.first.call(null,G__8709__8720);
var G__8724 = G__8709__8720;
obj__8711 = G__8723;
G__8709__8712 = G__8724;
continue;
}
} else
{}
break;
}
} else
{}
return sb__8708;
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
var sb__8725 = cljs.core.pr_sb.call(null,objs,opts);

sb__8725.append("\n");
return cljs.core.str.call(null,sb__8725);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8726 = cljs.core.first.call(null,objs);

var G__8727__8728 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8727__8728))
{var obj__8729 = cljs.core.first.call(null,G__8727__8728);
var G__8727__8730 = G__8727__8728;

while(true){
if(cljs.core.truth_((obj__8729 === first_obj__8726)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8731__8732 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8729,opts));

if(cljs.core.truth_(G__8731__8732))
{var string__8733 = cljs.core.first.call(null,G__8731__8732);
var G__8731__8734 = G__8731__8732;

while(true){
cljs.core.string_print.call(null,string__8733);
var temp__3698__auto____8735 = cljs.core.next.call(null,G__8731__8734);

if(cljs.core.truth_(temp__3698__auto____8735))
{var G__8731__8736 = temp__3698__auto____8735;

{
var G__8739 = cljs.core.first.call(null,G__8731__8736);
var G__8740 = G__8731__8736;
string__8733 = G__8739;
G__8731__8734 = G__8740;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8737 = cljs.core.next.call(null,G__8727__8730);

if(cljs.core.truth_(temp__3698__auto____8737))
{var G__8727__8738 = temp__3698__auto____8737;

{
var G__8741 = cljs.core.first.call(null,G__8727__8738);
var G__8742 = G__8727__8738;
obj__8729 = G__8741;
G__8727__8730 = G__8742;
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
pr_str.cljs$lang$applyTo = (function (arglist__8743){
var objs = cljs.core.seq( arglist__8743 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__8744){
var objs = cljs.core.seq( arglist__8744 );;
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
pr.cljs$lang$applyTo = (function (arglist__8745){
var objs = cljs.core.seq( arglist__8745 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8746){
var objs = cljs.core.seq( arglist__8746 );;
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
print_str.cljs$lang$applyTo = (function (arglist__8747){
var objs = cljs.core.seq( arglist__8747 );;
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
println.cljs$lang$applyTo = (function (arglist__8748){
var objs = cljs.core.seq( arglist__8748 );;
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
println_str.cljs$lang$applyTo = (function (arglist__8749){
var objs = cljs.core.seq( arglist__8749 );;
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
prn.cljs$lang$applyTo = (function (arglist__8750){
var objs = cljs.core.seq( arglist__8750 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8751 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8751,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8752 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8752))
{var nspc__8753 = temp__3698__auto____8752;

return cljs.core.str.call(null,nspc__8753,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8754 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8754))
{var nspc__8755 = temp__3698__auto____8754;

return cljs.core.str.call(null,nspc__8755,"/");
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
var pr_pair__8756 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8756,"{",", ","}",opts,coll);
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
var this__8757 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8758 = this;
var G__8759__8760 = cljs.core.seq.call(null,this__8758.watches);

if(cljs.core.truth_(G__8759__8760))
{var G__8762__8764 = cljs.core.first.call(null,G__8759__8760);
var vec__8763__8765 = G__8762__8764;
var key__8766 = cljs.core.nth.call(null,vec__8763__8765,0,null);
var f__8767 = cljs.core.nth.call(null,vec__8763__8765,1,null);
var G__8759__8768 = G__8759__8760;

var G__8762__8769 = G__8762__8764;
var G__8759__8770 = G__8759__8768;

while(true){
var vec__8771__8772 = G__8762__8769;
var key__8773 = cljs.core.nth.call(null,vec__8771__8772,0,null);
var f__8774 = cljs.core.nth.call(null,vec__8771__8772,1,null);
var G__8759__8775 = G__8759__8770;

f__8774.call(null,key__8773,this$,oldval,newval);
var temp__3698__auto____8776 = cljs.core.next.call(null,G__8759__8775);

if(cljs.core.truth_(temp__3698__auto____8776))
{var G__8759__8777 = temp__3698__auto____8776;

{
var G__8784 = cljs.core.first.call(null,G__8759__8777);
var G__8785 = G__8759__8777;
G__8762__8769 = G__8784;
G__8759__8770 = G__8785;
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
var this__8778 = this;
return this$.watches = cljs.core.assoc.call(null,this__8778.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8779 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8779.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8780 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8780.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8781 = this;
return this__8781.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8782 = this;
return this__8782.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8783 = this;
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
var atom__8792 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8793 = (function() { 
var G__8795__delegate = function (x,p__8786){
var map__8787__8788 = p__8786;
var map__8787__8789 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8787__8788))?cljs.core.apply.call(null,cljs.core.hash_map,map__8787__8788):map__8787__8788);
var validator__8790 = cljs.core.get.call(null,map__8787__8789,"\uFDD0'validator");
var meta__8791 = cljs.core.get.call(null,map__8787__8789,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8791,validator__8790,null));
};
var G__8795 = function (x,var_args){
var p__8786 = null;
if (goog.isDef(var_args)) {
  p__8786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8795__delegate.call(this, x, p__8786);
};
G__8795.cljs$lang$maxFixedArity = 1;
G__8795.cljs$lang$applyTo = (function (arglist__8796){
var x = cljs.core.first(arglist__8796);
var p__8786 = cljs.core.rest(arglist__8796);
return G__8795__delegate.call(this, x, p__8786);
});
return G__8795;
})()
;
atom = function(x,var_args){
var p__8786 = var_args;
switch(arguments.length){
case  1 :
return atom__8792.call(this,x);
default:
return atom__8793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8793.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8797 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8797))
{var validate__8798 = temp__3698__auto____8797;

if(cljs.core.truth_(validate__8798.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__8799 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8799,new_value);
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
var swap_BANG___8800 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8801 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8802 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8803 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8804 = (function() { 
var G__8806__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8806 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8806__delegate.call(this, a, f, x, y, z, more);
};
G__8806.cljs$lang$maxFixedArity = 5;
G__8806.cljs$lang$applyTo = (function (arglist__8807){
var a = cljs.core.first(arglist__8807);
var f = cljs.core.first(cljs.core.next(arglist__8807));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8807)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8807))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8807)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8807)))));
return G__8806__delegate.call(this, a, f, x, y, z, more);
});
return G__8806;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8800.call(this,a,f);
case  3 :
return swap_BANG___8801.call(this,a,f,x);
case  4 :
return swap_BANG___8802.call(this,a,f,x,y);
case  5 :
return swap_BANG___8803.call(this,a,f,x,y,z);
default:
return swap_BANG___8804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8804.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8808){
var iref = cljs.core.first(arglist__8808);
var f = cljs.core.first(cljs.core.next(arglist__8808));
var args = cljs.core.rest(cljs.core.next(arglist__8808));
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
var gensym__8809 = (function (){
return gensym.call(null,"G__");
});
var gensym__8810 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8809.call(this);
case  1 :
return gensym__8810.call(this,prefix_string);
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
var this__8812 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__8812.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8813 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__8813.state,(function (p__8814){
var curr_state__8815 = p__8814;
var curr_state__8816 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__8815))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__8815):curr_state__8815);
var done__8817 = cljs.core.get.call(null,curr_state__8816,"\uFDD0'done");

if(cljs.core.truth_(done__8817))
{return curr_state__8816;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__8813.f.call(null)});
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
var map__8818__8819 = options;
var map__8818__8820 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8818__8819))?cljs.core.apply.call(null,cljs.core.hash_map,map__8818__8819):map__8818__8819);
var keywordize_keys__8821 = cljs.core.get.call(null,map__8818__8820,"\uFDD0'keywordize-keys");
var keyfn__8822 = (cljs.core.truth_(keywordize_keys__8821)?cljs.core.keyword:cljs.core.str);
var f__8828 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____8827 = (function iter__8823(s__8824){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8824__8825 = s__8824;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8824__8825)))
{var k__8826 = cljs.core.first.call(null,s__8824__8825);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__8822.call(null,k__8826),thisfn.call(null,(x[k__8826]))]),iter__8823.call(null,cljs.core.rest.call(null,s__8824__8825)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____8827.call(null,cljs.core.js_keys.call(null,x));
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

return f__8828.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8829){
var x = cljs.core.first(arglist__8829);
var options = cljs.core.rest(arglist__8829);
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
var mem__8830 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8834__delegate = function (args){
var temp__3695__auto____8831 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8830),args);

if(cljs.core.truth_(temp__3695__auto____8831))
{var v__8832 = temp__3695__auto____8831;

return v__8832;
} else
{var ret__8833 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8830,cljs.core.assoc,args,ret__8833);
return ret__8833;
}
};
var G__8834 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8834__delegate.call(this, args);
};
G__8834.cljs$lang$maxFixedArity = 0;
G__8834.cljs$lang$applyTo = (function (arglist__8835){
var args = cljs.core.seq( arglist__8835 );;
return G__8834__delegate.call(this, args);
});
return G__8834;
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
var trampoline__8837 = (function (f){
while(true){
var ret__8836 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8836)))
{{
var G__8840 = ret__8836;
f = G__8840;
continue;
}
} else
{return ret__8836;
}
break;
}
});
var trampoline__8838 = (function() { 
var G__8841__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8841 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8841__delegate.call(this, f, args);
};
G__8841.cljs$lang$maxFixedArity = 1;
G__8841.cljs$lang$applyTo = (function (arglist__8842){
var f = cljs.core.first(arglist__8842);
var args = cljs.core.rest(arglist__8842);
return G__8841__delegate.call(this, f, args);
});
return G__8841;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8837.call(this,f);
default:
return trampoline__8838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8838.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8843 = (function (){
return rand.call(null,1);
});
var rand__8844 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8843.call(this);
case  1 :
return rand__8844.call(this,n);
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
var k__8846 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8846,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8846,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___8855 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8856 = (function (h,child,parent){
var or__3548__auto____8847 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8847))
{return or__3548__auto____8847;
} else
{var or__3548__auto____8848 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8848))
{return or__3548__auto____8848;
} else
{var and__3546__auto____8849 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8849))
{var and__3546__auto____8850 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8850))
{var and__3546__auto____8851 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8851))
{var ret__8852 = true;
var i__8853 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8854 = cljs.core.not.call(null,ret__8852);

if(cljs.core.truth_(or__3548__auto____8854))
{return or__3548__auto____8854;
} else
{return cljs.core._EQ_.call(null,i__8853,cljs.core.count.call(null,parent));
}
})()))
{return ret__8852;
} else
{{
var G__8858 = isa_QMARK_.call(null,h,child.call(null,i__8853),parent.call(null,i__8853));
var G__8859 = (i__8853 + 1);
ret__8852 = G__8858;
i__8853 = G__8859;
continue;
}
}
break;
}
} else
{return and__3546__auto____8851;
}
} else
{return and__3546__auto____8850;
}
} else
{return and__3546__auto____8849;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8855.call(this,h,child);
case  3 :
return isa_QMARK___8856.call(this,h,child,parent);
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
var parents__8860 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8861 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8860.call(this,h);
case  2 :
return parents__8861.call(this,h,tag);
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
var ancestors__8863 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8864 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8863.call(this,h);
case  2 :
return ancestors__8864.call(this,h,tag);
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
var descendants__8866 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8867 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8866.call(this,h);
case  2 :
return descendants__8867.call(this,h,tag);
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
var derive__8877 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8878 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__8872 = "\uFDD0'parents".call(null,h);
var td__8873 = "\uFDD0'descendants".call(null,h);
var ta__8874 = "\uFDD0'ancestors".call(null,h);
var tf__8875 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8876 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8872.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8874.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8874.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8872,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8875.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8873,parent,ta__8874),"\uFDD0'descendants":tf__8875.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8874,tag,td__8873)});
})());

if(cljs.core.truth_(or__3548__auto____8876))
{return or__3548__auto____8876;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8877.call(this,h,tag);
case  3 :
return derive__8878.call(this,h,tag,parent);
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
var underive__8884 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8885 = (function (h,tag,parent){
var parentMap__8880 = "\uFDD0'parents".call(null,h);
var childsParents__8881 = (cljs.core.truth_(parentMap__8880.call(null,tag))?cljs.core.disj.call(null,parentMap__8880.call(null,tag),parent):cljs.core.set([]));
var newParents__8882 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8881))?cljs.core.assoc.call(null,parentMap__8880,tag,childsParents__8881):cljs.core.dissoc.call(null,parentMap__8880,tag));
var deriv_seq__8883 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8869_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8869_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8869_SHARP_),cljs.core.second.call(null,p1__8869_SHARP_)));
}),cljs.core.seq.call(null,newParents__8882)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8880.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8870_SHARP_,p2__8871_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8870_SHARP_,p2__8871_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8883));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8884.call(this,h,tag);
case  3 :
return underive__8885.call(this,h,tag,parent);
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
var xprefs__8887 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8889 = (cljs.core.truth_((function (){var and__3546__auto____8888 = xprefs__8887;

if(cljs.core.truth_(and__3546__auto____8888))
{return xprefs__8887.call(null,y);
} else
{return and__3546__auto____8888;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8889))
{return or__3548__auto____8889;
} else
{var or__3548__auto____8891 = (function (){var ps__8890 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8890) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8890),prefer_table)))
{} else
{}
{
var G__8894 = cljs.core.rest.call(null,ps__8890);
ps__8890 = G__8894;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8891))
{return or__3548__auto____8891;
} else
{var or__3548__auto____8893 = (function (){var ps__8892 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8892) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8892),y,prefer_table)))
{} else
{}
{
var G__8895 = cljs.core.rest.call(null,ps__8892);
ps__8892 = G__8895;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8893))
{return or__3548__auto____8893;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8896 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8896))
{return or__3548__auto____8896;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8905 = cljs.core.reduce.call(null,(function (be,p__8897){
var vec__8898__8899 = p__8897;
var k__8900 = cljs.core.nth.call(null,vec__8898__8899,0,null);
var ___8901 = cljs.core.nth.call(null,vec__8898__8899,1,null);
var e__8902 = vec__8898__8899;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8900)))
{var be2__8904 = (cljs.core.truth_((function (){var or__3548__auto____8903 = (be === null);

if(cljs.core.truth_(or__3548__auto____8903))
{return or__3548__auto____8903;
} else
{return cljs.core.dominates.call(null,k__8900,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8902:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8904),k__8900,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8900," and ",cljs.core.first.call(null,be2__8904),", and neither is preferred")));
}
return be2__8904;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8905))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8905));
return cljs.core.second.call(null,best_entry__8905);
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
if(cljs.core.truth_((function (){var and__3546__auto____8906 = mf;

if(cljs.core.truth_(and__3546__auto____8906))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8906;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8907 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8907))
{return or__3548__auto____8907;
} else
{var or__3548__auto____8908 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8908))
{return or__3548__auto____8908;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8909 = mf;

if(cljs.core.truth_(and__3546__auto____8909))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8909;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8910 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8910))
{return or__3548__auto____8910;
} else
{var or__3548__auto____8911 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8911))
{return or__3548__auto____8911;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8912 = mf;

if(cljs.core.truth_(and__3546__auto____8912))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8912;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8913 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8913))
{return or__3548__auto____8913;
} else
{var or__3548__auto____8914 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8914))
{return or__3548__auto____8914;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8915 = mf;

if(cljs.core.truth_(and__3546__auto____8915))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8915;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8916 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8916))
{return or__3548__auto____8916;
} else
{var or__3548__auto____8917 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8917))
{return or__3548__auto____8917;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8918 = mf;

if(cljs.core.truth_(and__3546__auto____8918))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8918;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8919 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8919))
{return or__3548__auto____8919;
} else
{var or__3548__auto____8920 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8920))
{return or__3548__auto____8920;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8921 = mf;

if(cljs.core.truth_(and__3546__auto____8921))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8921;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8922 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8922))
{return or__3548__auto____8922;
} else
{var or__3548__auto____8923 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8923))
{return or__3548__auto____8923;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8924 = mf;

if(cljs.core.truth_(and__3546__auto____8924))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8924;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8925 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8925))
{return or__3548__auto____8925;
} else
{var or__3548__auto____8926 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8926))
{return or__3548__auto____8926;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8927 = mf;

if(cljs.core.truth_(and__3546__auto____8927))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8927;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8928 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8928))
{return or__3548__auto____8928;
} else
{var or__3548__auto____8929 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8929))
{return or__3548__auto____8929;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8930 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8931 = cljs.core._get_method.call(null,mf,dispatch_val__8930);

if(cljs.core.truth_(target_fn__8931))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8930)));
}
return cljs.core.apply.call(null,target_fn__8931,args);
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
var this__8932 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8933 = this;
cljs.core.swap_BANG_.call(null,this__8933.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8933.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8933.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8933.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8934 = this;
cljs.core.swap_BANG_.call(null,this__8934.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8934.method_cache,this__8934.method_table,this__8934.cached_hierarchy,this__8934.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8935 = this;
cljs.core.swap_BANG_.call(null,this__8935.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8935.method_cache,this__8935.method_table,this__8935.cached_hierarchy,this__8935.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8936 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8936.cached_hierarchy),cljs.core.deref.call(null,this__8936.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8936.method_cache,this__8936.method_table,this__8936.cached_hierarchy,this__8936.hierarchy);
}
var temp__3695__auto____8937 = cljs.core.deref.call(null,this__8936.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8937))
{var target_fn__8938 = temp__3695__auto____8937;

return target_fn__8938;
} else
{var temp__3695__auto____8939 = cljs.core.find_and_cache_best_method.call(null,this__8936.name,dispatch_val,this__8936.hierarchy,this__8936.method_table,this__8936.prefer_table,this__8936.method_cache,this__8936.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8939))
{var target_fn__8940 = temp__3695__auto____8939;

return target_fn__8940;
} else
{return cljs.core.deref.call(null,this__8936.method_table).call(null,this__8936.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8941 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8941.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8941.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8941.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8941.method_cache,this__8941.method_table,this__8941.cached_hierarchy,this__8941.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8942 = this;
return cljs.core.deref.call(null,this__8942.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8943 = this;
return cljs.core.deref.call(null,this__8943.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__8944 = this;
return cljs.core.do_dispatch.call(null,mf,this__8944.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8945__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8945 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8945__delegate.call(this, _, args);
};
G__8945.cljs$lang$maxFixedArity = 1;
G__8945.cljs$lang$applyTo = (function (arglist__8946){
var _ = cljs.core.first(arglist__8946);
var args = cljs.core.rest(arglist__8946);
return G__8945__delegate.call(this, _, args);
});
return G__8945;
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
