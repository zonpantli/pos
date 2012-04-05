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
var or__3548__auto____7115 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7115))
{return or__3548__auto____7115;
} else
{var or__3548__auto____7116 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7116))
{return or__3548__auto____7116;
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
var _invoke__7180 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7117 = this$;

if(cljs.core.truth_(and__3546__auto____7117))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7117;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7118 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7118))
{return or__3548__auto____7118;
} else
{var or__3548__auto____7119 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7119))
{return or__3548__auto____7119;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7181 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7120 = this$;

if(cljs.core.truth_(and__3546__auto____7120))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7120;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7121))
{return or__3548__auto____7121;
} else
{var or__3548__auto____7122 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7122))
{return or__3548__auto____7122;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7182 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7123 = this$;

if(cljs.core.truth_(and__3546__auto____7123))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7123;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7124 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7124))
{return or__3548__auto____7124;
} else
{var or__3548__auto____7125 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7125))
{return or__3548__auto____7125;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7183 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7126 = this$;

if(cljs.core.truth_(and__3546__auto____7126))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7126;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7127 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7127))
{return or__3548__auto____7127;
} else
{var or__3548__auto____7128 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7128))
{return or__3548__auto____7128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7184 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7129 = this$;

if(cljs.core.truth_(and__3546__auto____7129))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7129;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7130 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7130))
{return or__3548__auto____7130;
} else
{var or__3548__auto____7131 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7131))
{return or__3548__auto____7131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7185 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7132 = this$;

if(cljs.core.truth_(and__3546__auto____7132))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7132;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7133 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7133))
{return or__3548__auto____7133;
} else
{var or__3548__auto____7134 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7134))
{return or__3548__auto____7134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7186 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7135 = this$;

if(cljs.core.truth_(and__3546__auto____7135))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7135;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7136 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7136))
{return or__3548__auto____7136;
} else
{var or__3548__auto____7137 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7137))
{return or__3548__auto____7137;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7187 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7138 = this$;

if(cljs.core.truth_(and__3546__auto____7138))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7138;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7139 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7139))
{return or__3548__auto____7139;
} else
{var or__3548__auto____7140 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7140))
{return or__3548__auto____7140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7188 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7141 = this$;

if(cljs.core.truth_(and__3546__auto____7141))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7141;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7142))
{return or__3548__auto____7142;
} else
{var or__3548__auto____7143 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7143))
{return or__3548__auto____7143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7189 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7144 = this$;

if(cljs.core.truth_(and__3546__auto____7144))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7144;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7145 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7145))
{return or__3548__auto____7145;
} else
{var or__3548__auto____7146 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7146))
{return or__3548__auto____7146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7190 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7147 = this$;

if(cljs.core.truth_(and__3546__auto____7147))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7147;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7148 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7148))
{return or__3548__auto____7148;
} else
{var or__3548__auto____7149 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7149))
{return or__3548__auto____7149;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7191 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7150 = this$;

if(cljs.core.truth_(and__3546__auto____7150))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7150;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7151 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7151))
{return or__3548__auto____7151;
} else
{var or__3548__auto____7152 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7152))
{return or__3548__auto____7152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7192 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7153 = this$;

if(cljs.core.truth_(and__3546__auto____7153))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7153;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7154))
{return or__3548__auto____7154;
} else
{var or__3548__auto____7155 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7155))
{return or__3548__auto____7155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7193 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7156 = this$;

if(cljs.core.truth_(and__3546__auto____7156))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7156;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7157))
{return or__3548__auto____7157;
} else
{var or__3548__auto____7158 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7158))
{return or__3548__auto____7158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7194 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7159 = this$;

if(cljs.core.truth_(and__3546__auto____7159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7160))
{return or__3548__auto____7160;
} else
{var or__3548__auto____7161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7161))
{return or__3548__auto____7161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7195 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7162 = this$;

if(cljs.core.truth_(and__3546__auto____7162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7163))
{return or__3548__auto____7163;
} else
{var or__3548__auto____7164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7164))
{return or__3548__auto____7164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7196 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7165 = this$;

if(cljs.core.truth_(and__3546__auto____7165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7166))
{return or__3548__auto____7166;
} else
{var or__3548__auto____7167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7167))
{return or__3548__auto____7167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7197 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7168 = this$;

if(cljs.core.truth_(and__3546__auto____7168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7169))
{return or__3548__auto____7169;
} else
{var or__3548__auto____7170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7170))
{return or__3548__auto____7170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7198 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7171 = this$;

if(cljs.core.truth_(and__3546__auto____7171))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7171;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7172 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7172))
{return or__3548__auto____7172;
} else
{var or__3548__auto____7173 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7173))
{return or__3548__auto____7173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7199 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7174 = this$;

if(cljs.core.truth_(and__3546__auto____7174))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7174;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7175 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7175))
{return or__3548__auto____7175;
} else
{var or__3548__auto____7176 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7176))
{return or__3548__auto____7176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7200 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7177 = this$;

if(cljs.core.truth_(and__3546__auto____7177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7178))
{return or__3548__auto____7178;
} else
{var or__3548__auto____7179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7179))
{return or__3548__auto____7179;
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
return _invoke__7180.call(this,this$);
case  2 :
return _invoke__7181.call(this,this$,a);
case  3 :
return _invoke__7182.call(this,this$,a,b);
case  4 :
return _invoke__7183.call(this,this$,a,b,c);
case  5 :
return _invoke__7184.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7185.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7186.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7187.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7188.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7189.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7190.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7191.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7192.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7193.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7194.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7195.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7196.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7197.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7198.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7199.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7200.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7202 = coll;

if(cljs.core.truth_(and__3546__auto____7202))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7202;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7203 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7203))
{return or__3548__auto____7203;
} else
{var or__3548__auto____7204 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7205 = coll;

if(cljs.core.truth_(and__3546__auto____7205))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7205;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7206 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7206))
{return or__3548__auto____7206;
} else
{var or__3548__auto____7207 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7207))
{return or__3548__auto____7207;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7208 = coll;

if(cljs.core.truth_(and__3546__auto____7208))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7208;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7209 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7209))
{return or__3548__auto____7209;
} else
{var or__3548__auto____7210 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7210))
{return or__3548__auto____7210;
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
var _nth__7217 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7211 = coll;

if(cljs.core.truth_(and__3546__auto____7211))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7211;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7212 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7212))
{return or__3548__auto____7212;
} else
{var or__3548__auto____7213 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7213))
{return or__3548__auto____7213;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7218 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7214 = coll;

if(cljs.core.truth_(and__3546__auto____7214))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7214;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7215 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7215))
{return or__3548__auto____7215;
} else
{var or__3548__auto____7216 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
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
return _nth__7217.call(this,coll,n);
case  3 :
return _nth__7218.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7220 = coll;

if(cljs.core.truth_(and__3546__auto____7220))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7220;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7221 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7221))
{return or__3548__auto____7221;
} else
{var or__3548__auto____7222 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7222))
{return or__3548__auto____7222;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7223 = coll;

if(cljs.core.truth_(and__3546__auto____7223))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7223;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7224 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7224))
{return or__3548__auto____7224;
} else
{var or__3548__auto____7225 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
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
var _lookup__7232 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7226 = o;

if(cljs.core.truth_(and__3546__auto____7226))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7226;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7227 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7227))
{return or__3548__auto____7227;
} else
{var or__3548__auto____7228 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7228))
{return or__3548__auto____7228;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7233 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7229 = o;

if(cljs.core.truth_(and__3546__auto____7229))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7229;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7230 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7230))
{return or__3548__auto____7230;
} else
{var or__3548__auto____7231 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7231))
{return or__3548__auto____7231;
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
return _lookup__7232.call(this,o,k);
case  3 :
return _lookup__7233.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7235 = coll;

if(cljs.core.truth_(and__3546__auto____7235))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7235;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7236 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7236))
{return or__3548__auto____7236;
} else
{var or__3548__auto____7237 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7237))
{return or__3548__auto____7237;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7238 = coll;

if(cljs.core.truth_(and__3546__auto____7238))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7238;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7240 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7241 = coll;

if(cljs.core.truth_(and__3546__auto____7241))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7241;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7242 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7242))
{return or__3548__auto____7242;
} else
{var or__3548__auto____7243 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7244 = coll;

if(cljs.core.truth_(and__3546__auto____7244))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7244;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7245 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
} else
{var or__3548__auto____7246 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7247 = coll;

if(cljs.core.truth_(and__3546__auto____7247))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7247;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7248 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7248))
{return or__3548__auto____7248;
} else
{var or__3548__auto____7249 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7250 = coll;

if(cljs.core.truth_(and__3546__auto____7250))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7250;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7251 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7253 = coll;

if(cljs.core.truth_(and__3546__auto____7253))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7253;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7256 = o;

if(cljs.core.truth_(and__3546__auto____7256))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7256;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7257 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = o;

if(cljs.core.truth_(and__3546__auto____7259))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7259;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7261 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7262 = o;

if(cljs.core.truth_(and__3546__auto____7262))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7262;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7263 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{var or__3548__auto____7264 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = o;

if(cljs.core.truth_(and__3546__auto____7265))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7265;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7266 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
} else
{var or__3548__auto____7267 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
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
var _reduce__7274 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7268 = coll;

if(cljs.core.truth_(and__3546__auto____7268))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7268;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7269 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
} else
{var or__3548__auto____7270 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7275 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7271 = coll;

if(cljs.core.truth_(and__3546__auto____7271))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7271;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7272 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{var or__3548__auto____7273 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
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
return _reduce__7274.call(this,coll,f);
case  3 :
return _reduce__7275.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = o;

if(cljs.core.truth_(and__3546__auto____7277))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7277;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7278 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{var or__3548__auto____7279 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = o;

if(cljs.core.truth_(and__3546__auto____7280))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7280;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7282 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7283 = o;

if(cljs.core.truth_(and__3546__auto____7283))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7283;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7285 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
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
if(cljs.core.truth_((function (){var and__3546__auto____7286 = o;

if(cljs.core.truth_(and__3546__auto____7286))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7286;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{var or__3548__auto____7288 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7289 = d;

if(cljs.core.truth_(and__3546__auto____7289))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7289;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7290 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{var or__3548__auto____7291 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7291))
{return or__3548__auto____7291;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7293 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{var or__3548__auto____7294 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7295 = this$;

if(cljs.core.truth_(and__3546__auto____7295))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7295;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7296 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{var or__3548__auto____7297 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7299 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7300 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
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
var G__7301 = null;
var G__7301__7302 = (function (o,k){
return null;
});
var G__7301__7303 = (function (o,k,not_found){
return not_found;
});
G__7301 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7301__7302.call(this,o,k);
case  3 :
return G__7301__7303.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7301;
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
var G__7305 = null;
var G__7305__7306 = (function (_,f){
return f.call(null);
});
var G__7305__7307 = (function (_,f,start){
return start;
});
G__7305 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7305__7306.call(this,_,f);
case  3 :
return G__7305__7307.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7305;
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
var G__7309 = null;
var G__7309__7310 = (function (_,n){
return null;
});
var G__7309__7311 = (function (_,n,not_found){
return not_found;
});
G__7309 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7309__7310.call(this,_,n);
case  3 :
return G__7309__7311.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7309;
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
var ci_reduce__7319 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7313 = cljs.core._nth.call(null,cicoll,0);
var n__7314 = 1;

while(true){
if(cljs.core.truth_((n__7314 < cljs.core._count.call(null,cicoll))))
{{
var G__7323 = f.call(null,val__7313,cljs.core._nth.call(null,cicoll,n__7314));
var G__7324 = (n__7314 + 1);
val__7313 = G__7323;
n__7314 = G__7324;
continue;
}
} else
{return val__7313;
}
break;
}
}
});
var ci_reduce__7320 = (function (cicoll,f,val){
var val__7315 = val;
var n__7316 = 0;

while(true){
if(cljs.core.truth_((n__7316 < cljs.core._count.call(null,cicoll))))
{{
var G__7325 = f.call(null,val__7315,cljs.core._nth.call(null,cicoll,n__7316));
var G__7326 = (n__7316 + 1);
val__7315 = G__7325;
n__7316 = G__7326;
continue;
}
} else
{return val__7315;
}
break;
}
});
var ci_reduce__7321 = (function (cicoll,f,val,idx){
var val__7317 = val;
var n__7318 = idx;

while(true){
if(cljs.core.truth_((n__7318 < cljs.core._count.call(null,cicoll))))
{{
var G__7327 = f.call(null,val__7317,cljs.core._nth.call(null,cicoll,n__7318));
var G__7328 = (n__7318 + 1);
val__7317 = G__7327;
n__7318 = G__7328;
continue;
}
} else
{return val__7317;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7319.call(this,cicoll,f);
case  3 :
return ci_reduce__7320.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7321.call(this,cicoll,f,val,idx);
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
var this__7329 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7342 = null;
var G__7342__7343 = (function (_,f){
var this__7330 = this;
return cljs.core.ci_reduce.call(null,this__7330.a,f,(this__7330.a[this__7330.i]),(this__7330.i + 1));
});
var G__7342__7344 = (function (_,f,start){
var this__7331 = this;
return cljs.core.ci_reduce.call(null,this__7331.a,f,start,this__7331.i);
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
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7332 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7333 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7346 = null;
var G__7346__7347 = (function (coll,n){
var this__7334 = this;
var i__7335 = (n + this__7334.i);

if(cljs.core.truth_((i__7335 < this__7334.a.length)))
{return (this__7334.a[i__7335]);
} else
{return null;
}
});
var G__7346__7348 = (function (coll,n,not_found){
var this__7336 = this;
var i__7337 = (n + this__7336.i);

if(cljs.core.truth_((i__7337 < this__7336.a.length)))
{return (this__7336.a[i__7337]);
} else
{return not_found;
}
});
G__7346 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7346__7347.call(this,coll,n);
case  3 :
return G__7346__7348.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7346;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7338 = this;
return (this__7338.a.length - this__7338.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7339 = this;
return (this__7339.a[this__7339.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7340 = this;
if(cljs.core.truth_(((this__7340.i + 1) < this__7340.a.length)))
{return (new cljs.core.IndexedSeq(this__7340.a,(this__7340.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7341 = this;
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
var G__7350 = null;
var G__7350__7351 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7350__7352 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7350 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7350__7351.call(this,array,f);
case  3 :
return G__7350__7352.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7350;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7354 = null;
var G__7354__7355 = (function (array,k){
return (array[k]);
});
var G__7354__7356 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7354 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7354__7355.call(this,array,k);
case  3 :
return G__7354__7356.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7354;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7358 = null;
var G__7358__7359 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7358__7360 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7358 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7358__7359.call(this,array,n);
case  3 :
return G__7358__7360.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7358;
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
var temp__3698__auto____7362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7362))
{var s__7363 = temp__3698__auto____7362;

return cljs.core._first.call(null,s__7363);
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
var G__7364 = cljs.core.next.call(null,s);
s = G__7364;
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
var s__7365 = cljs.core.seq.call(null,x);
var n__7366 = 0;

while(true){
if(cljs.core.truth_(s__7365))
{{
var G__7367 = cljs.core.next.call(null,s__7365);
var G__7368 = (n__7366 + 1);
s__7365 = G__7367;
n__7366 = G__7368;
continue;
}
} else
{return n__7366;
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
var conj__7369 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7370 = (function() { 
var G__7372__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7373 = conj.call(null,coll,x);
var G__7374 = cljs.core.first.call(null,xs);
var G__7375 = cljs.core.next.call(null,xs);
coll = G__7373;
x = G__7374;
xs = G__7375;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7372 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7372__delegate.call(this, coll, x, xs);
};
G__7372.cljs$lang$maxFixedArity = 2;
G__7372.cljs$lang$applyTo = (function (arglist__7376){
var coll = cljs.core.first(arglist__7376);
var x = cljs.core.first(cljs.core.next(arglist__7376));
var xs = cljs.core.rest(cljs.core.next(arglist__7376));
return G__7372__delegate.call(this, coll, x, xs);
});
return G__7372;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7369.call(this,coll,x);
default:
return conj__7370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7370.cljs$lang$applyTo;
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
var nth__7377 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7378 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7377.call(this,coll,n);
case  3 :
return nth__7378.call(this,coll,n,not_found);
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
var get__7380 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7381 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7380.call(this,o,k);
case  3 :
return get__7381.call(this,o,k,not_found);
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
var assoc__7384 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7385 = (function() { 
var G__7387__delegate = function (coll,k,v,kvs){
while(true){
var ret__7383 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7388 = ret__7383;
var G__7389 = cljs.core.first.call(null,kvs);
var G__7390 = cljs.core.second.call(null,kvs);
var G__7391 = cljs.core.nnext.call(null,kvs);
coll = G__7388;
k = G__7389;
v = G__7390;
kvs = G__7391;
continue;
}
} else
{return ret__7383;
}
break;
}
};
var G__7387 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7387__delegate.call(this, coll, k, v, kvs);
};
G__7387.cljs$lang$maxFixedArity = 3;
G__7387.cljs$lang$applyTo = (function (arglist__7392){
var coll = cljs.core.first(arglist__7392);
var k = cljs.core.first(cljs.core.next(arglist__7392));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7392)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7392)));
return G__7387__delegate.call(this, coll, k, v, kvs);
});
return G__7387;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7384.call(this,coll,k,v);
default:
return assoc__7385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7385.cljs$lang$applyTo;
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
var dissoc__7394 = (function (coll){
return coll;
});
var dissoc__7395 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7396 = (function() { 
var G__7398__delegate = function (coll,k,ks){
while(true){
var ret__7393 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7399 = ret__7393;
var G__7400 = cljs.core.first.call(null,ks);
var G__7401 = cljs.core.next.call(null,ks);
coll = G__7399;
k = G__7400;
ks = G__7401;
continue;
}
} else
{return ret__7393;
}
break;
}
};
var G__7398 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7398__delegate.call(this, coll, k, ks);
};
G__7398.cljs$lang$maxFixedArity = 2;
G__7398.cljs$lang$applyTo = (function (arglist__7402){
var coll = cljs.core.first(arglist__7402);
var k = cljs.core.first(cljs.core.next(arglist__7402));
var ks = cljs.core.rest(cljs.core.next(arglist__7402));
return G__7398__delegate.call(this, coll, k, ks);
});
return G__7398;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7394.call(this,coll);
case  2 :
return dissoc__7395.call(this,coll,k);
default:
return dissoc__7396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7396.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____7403 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7404 = x__3028__auto____7403;

if(cljs.core.truth_(and__3546__auto____7404))
{var and__3546__auto____7405 = x__3028__auto____7403.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7405))
{return cljs.core.not.call(null,x__3028__auto____7403.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7405;
}
} else
{return and__3546__auto____7404;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____7403);
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
var disj__7407 = (function (coll){
return coll;
});
var disj__7408 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7409 = (function() { 
var G__7411__delegate = function (coll,k,ks){
while(true){
var ret__7406 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7412 = ret__7406;
var G__7413 = cljs.core.first.call(null,ks);
var G__7414 = cljs.core.next.call(null,ks);
coll = G__7412;
k = G__7413;
ks = G__7414;
continue;
}
} else
{return ret__7406;
}
break;
}
};
var G__7411 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7411__delegate.call(this, coll, k, ks);
};
G__7411.cljs$lang$maxFixedArity = 2;
G__7411.cljs$lang$applyTo = (function (arglist__7415){
var coll = cljs.core.first(arglist__7415);
var k = cljs.core.first(cljs.core.next(arglist__7415));
var ks = cljs.core.rest(cljs.core.next(arglist__7415));
return G__7411__delegate.call(this, coll, k, ks);
});
return G__7411;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7407.call(this,coll);
case  2 :
return disj__7408.call(this,coll,k);
default:
return disj__7409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7409.cljs$lang$applyTo;
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
{var x__3028__auto____7416 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7417 = x__3028__auto____7416;

if(cljs.core.truth_(and__3546__auto____7417))
{var and__3546__auto____7418 = x__3028__auto____7416.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7418))
{return cljs.core.not.call(null,x__3028__auto____7416.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7418;
}
} else
{return and__3546__auto____7417;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____7416);
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
{var x__3028__auto____7419 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7420 = x__3028__auto____7419;

if(cljs.core.truth_(and__3546__auto____7420))
{var and__3546__auto____7421 = x__3028__auto____7419.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7421))
{return cljs.core.not.call(null,x__3028__auto____7419.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7421;
}
} else
{return and__3546__auto____7420;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____7419);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____7422 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7423 = x__3028__auto____7422;

if(cljs.core.truth_(and__3546__auto____7423))
{var and__3546__auto____7424 = x__3028__auto____7422.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7424))
{return cljs.core.not.call(null,x__3028__auto____7422.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7424;
}
} else
{return and__3546__auto____7423;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____7422);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____7425 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7426 = x__3028__auto____7425;

if(cljs.core.truth_(and__3546__auto____7426))
{var and__3546__auto____7427 = x__3028__auto____7425.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7427))
{return cljs.core.not.call(null,x__3028__auto____7425.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7427;
}
} else
{return and__3546__auto____7426;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____7425);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____7428 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7429 = x__3028__auto____7428;

if(cljs.core.truth_(and__3546__auto____7429))
{var and__3546__auto____7430 = x__3028__auto____7428.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7430))
{return cljs.core.not.call(null,x__3028__auto____7428.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7430;
}
} else
{return and__3546__auto____7429;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____7428);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____7431 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7432 = x__3028__auto____7431;

if(cljs.core.truth_(and__3546__auto____7432))
{var and__3546__auto____7433 = x__3028__auto____7431.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7433))
{return cljs.core.not.call(null,x__3028__auto____7431.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7433;
}
} else
{return and__3546__auto____7432;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____7431);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____7434 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7435 = x__3028__auto____7434;

if(cljs.core.truth_(and__3546__auto____7435))
{var and__3546__auto____7436 = x__3028__auto____7434.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7436))
{return cljs.core.not.call(null,x__3028__auto____7434.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7436;
}
} else
{return and__3546__auto____7435;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____7434);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7437 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7437.push(key);
}));
return keys__7437;
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
{var x__3028__auto____7438 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7439 = x__3028__auto____7438;

if(cljs.core.truth_(and__3546__auto____7439))
{var and__3546__auto____7440 = x__3028__auto____7438.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7440))
{return cljs.core.not.call(null,x__3028__auto____7438.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7440;
}
} else
{return and__3546__auto____7439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____7438);
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
var and__3546__auto____7441 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7441))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7442 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7441;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7443 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7443))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7443;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7444 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7444))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7444;
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
var and__3546__auto____7445 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7445))
{return (n == n.toFixed());
} else
{return and__3546__auto____7445;
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
if(cljs.core.truth_((function (){var and__3546__auto____7446 = coll;

if(cljs.core.truth_(and__3546__auto____7446))
{var and__3546__auto____7447 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7447))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7447;
}
} else
{return and__3546__auto____7446;
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
var distinct_QMARK___7452 = (function (x){
return true;
});
var distinct_QMARK___7453 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7454 = (function() { 
var G__7456__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7448 = cljs.core.set([y,x]);
var xs__7449 = more;

while(true){
var x__7450 = cljs.core.first.call(null,xs__7449);
var etc__7451 = cljs.core.next.call(null,xs__7449);

if(cljs.core.truth_(xs__7449))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7448,x__7450)))
{return false;
} else
{{
var G__7457 = cljs.core.conj.call(null,s__7448,x__7450);
var G__7458 = etc__7451;
s__7448 = G__7457;
xs__7449 = G__7458;
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
var G__7456 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7456__delegate.call(this, x, y, more);
};
G__7456.cljs$lang$maxFixedArity = 2;
G__7456.cljs$lang$applyTo = (function (arglist__7459){
var x = cljs.core.first(arglist__7459);
var y = cljs.core.first(cljs.core.next(arglist__7459));
var more = cljs.core.rest(cljs.core.next(arglist__7459));
return G__7456__delegate.call(this, x, y, more);
});
return G__7456;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7452.call(this,x);
case  2 :
return distinct_QMARK___7453.call(this,x,y);
default:
return distinct_QMARK___7454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7454.cljs$lang$applyTo;
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
var r__7460 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7460)))
{return r__7460;
} else
{if(cljs.core.truth_(r__7460))
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
var sort__7462 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7463 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7461 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7461,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7461);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7462.call(this,comp);
case  2 :
return sort__7463.call(this,comp,coll);
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
var sort_by__7465 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7466 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7465.call(this,keyfn,comp);
case  3 :
return sort_by__7466.call(this,keyfn,comp,coll);
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
var reduce__7468 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7469 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7468.call(this,f,val);
case  3 :
return reduce__7469.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7475 = (function (f,coll){
var temp__3695__auto____7471 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7471))
{var s__7472 = temp__3695__auto____7471;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7472),cljs.core.next.call(null,s__7472));
} else
{return f.call(null);
}
});
var seq_reduce__7476 = (function (f,val,coll){
var val__7473 = val;
var coll__7474 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7474))
{{
var G__7478 = f.call(null,val__7473,cljs.core.first.call(null,coll__7474));
var G__7479 = cljs.core.next.call(null,coll__7474);
val__7473 = G__7478;
coll__7474 = G__7479;
continue;
}
} else
{return val__7473;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7475.call(this,f,val);
case  3 :
return seq_reduce__7476.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7480 = null;
var G__7480__7481 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7480__7482 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7480 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7480__7481.call(this,coll,f);
case  3 :
return G__7480__7482.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7480;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7484 = (function (){
return 0;
});
var _PLUS___7485 = (function (x){
return x;
});
var _PLUS___7486 = (function (x,y){
return (x + y);
});
var _PLUS___7487 = (function() { 
var G__7489__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7489__delegate.call(this, x, y, more);
};
G__7489.cljs$lang$maxFixedArity = 2;
G__7489.cljs$lang$applyTo = (function (arglist__7490){
var x = cljs.core.first(arglist__7490);
var y = cljs.core.first(cljs.core.next(arglist__7490));
var more = cljs.core.rest(cljs.core.next(arglist__7490));
return G__7489__delegate.call(this, x, y, more);
});
return G__7489;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7484.call(this);
case  1 :
return _PLUS___7485.call(this,x);
case  2 :
return _PLUS___7486.call(this,x,y);
default:
return _PLUS___7487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7487.cljs$lang$applyTo;
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
var ___7491 = (function (x){
return (- x);
});
var ___7492 = (function (x,y){
return (x - y);
});
var ___7493 = (function() { 
var G__7495__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7495 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7495__delegate.call(this, x, y, more);
};
G__7495.cljs$lang$maxFixedArity = 2;
G__7495.cljs$lang$applyTo = (function (arglist__7496){
var x = cljs.core.first(arglist__7496);
var y = cljs.core.first(cljs.core.next(arglist__7496));
var more = cljs.core.rest(cljs.core.next(arglist__7496));
return G__7495__delegate.call(this, x, y, more);
});
return G__7495;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7491.call(this,x);
case  2 :
return ___7492.call(this,x,y);
default:
return ___7493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7493.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7497 = (function (){
return 1;
});
var _STAR___7498 = (function (x){
return x;
});
var _STAR___7499 = (function (x,y){
return (x * y);
});
var _STAR___7500 = (function() { 
var G__7502__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7502 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7502__delegate.call(this, x, y, more);
};
G__7502.cljs$lang$maxFixedArity = 2;
G__7502.cljs$lang$applyTo = (function (arglist__7503){
var x = cljs.core.first(arglist__7503);
var y = cljs.core.first(cljs.core.next(arglist__7503));
var more = cljs.core.rest(cljs.core.next(arglist__7503));
return G__7502__delegate.call(this, x, y, more);
});
return G__7502;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7497.call(this);
case  1 :
return _STAR___7498.call(this,x);
case  2 :
return _STAR___7499.call(this,x,y);
default:
return _STAR___7500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7500.cljs$lang$applyTo;
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
var _SLASH___7504 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7505 = (function (x,y){
return (x / y);
});
var _SLASH___7506 = (function() { 
var G__7508__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7508 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7508__delegate.call(this, x, y, more);
};
G__7508.cljs$lang$maxFixedArity = 2;
G__7508.cljs$lang$applyTo = (function (arglist__7509){
var x = cljs.core.first(arglist__7509);
var y = cljs.core.first(cljs.core.next(arglist__7509));
var more = cljs.core.rest(cljs.core.next(arglist__7509));
return G__7508__delegate.call(this, x, y, more);
});
return G__7508;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7504.call(this,x);
case  2 :
return _SLASH___7505.call(this,x,y);
default:
return _SLASH___7506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7506.cljs$lang$applyTo;
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
var _LT___7510 = (function (x){
return true;
});
var _LT___7511 = (function (x,y){
return (x < y);
});
var _LT___7512 = (function() { 
var G__7514__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7515 = y;
var G__7516 = cljs.core.first.call(null,more);
var G__7517 = cljs.core.next.call(null,more);
x = G__7515;
y = G__7516;
more = G__7517;
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
var G__7514 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7514__delegate.call(this, x, y, more);
};
G__7514.cljs$lang$maxFixedArity = 2;
G__7514.cljs$lang$applyTo = (function (arglist__7518){
var x = cljs.core.first(arglist__7518);
var y = cljs.core.first(cljs.core.next(arglist__7518));
var more = cljs.core.rest(cljs.core.next(arglist__7518));
return G__7514__delegate.call(this, x, y, more);
});
return G__7514;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7510.call(this,x);
case  2 :
return _LT___7511.call(this,x,y);
default:
return _LT___7512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7512.cljs$lang$applyTo;
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
var _LT__EQ___7519 = (function (x){
return true;
});
var _LT__EQ___7520 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7521 = (function() { 
var G__7523__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7524 = y;
var G__7525 = cljs.core.first.call(null,more);
var G__7526 = cljs.core.next.call(null,more);
x = G__7524;
y = G__7525;
more = G__7526;
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
var G__7523 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7523__delegate.call(this, x, y, more);
};
G__7523.cljs$lang$maxFixedArity = 2;
G__7523.cljs$lang$applyTo = (function (arglist__7527){
var x = cljs.core.first(arglist__7527);
var y = cljs.core.first(cljs.core.next(arglist__7527));
var more = cljs.core.rest(cljs.core.next(arglist__7527));
return G__7523__delegate.call(this, x, y, more);
});
return G__7523;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7519.call(this,x);
case  2 :
return _LT__EQ___7520.call(this,x,y);
default:
return _LT__EQ___7521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7521.cljs$lang$applyTo;
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
var _GT___7528 = (function (x){
return true;
});
var _GT___7529 = (function (x,y){
return (x > y);
});
var _GT___7530 = (function() { 
var G__7532__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7533 = y;
var G__7534 = cljs.core.first.call(null,more);
var G__7535 = cljs.core.next.call(null,more);
x = G__7533;
y = G__7534;
more = G__7535;
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
var G__7532 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7532__delegate.call(this, x, y, more);
};
G__7532.cljs$lang$maxFixedArity = 2;
G__7532.cljs$lang$applyTo = (function (arglist__7536){
var x = cljs.core.first(arglist__7536);
var y = cljs.core.first(cljs.core.next(arglist__7536));
var more = cljs.core.rest(cljs.core.next(arglist__7536));
return G__7532__delegate.call(this, x, y, more);
});
return G__7532;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7528.call(this,x);
case  2 :
return _GT___7529.call(this,x,y);
default:
return _GT___7530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7530.cljs$lang$applyTo;
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
var _GT__EQ___7537 = (function (x){
return true;
});
var _GT__EQ___7538 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7539 = (function() { 
var G__7541__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7542 = y;
var G__7543 = cljs.core.first.call(null,more);
var G__7544 = cljs.core.next.call(null,more);
x = G__7542;
y = G__7543;
more = G__7544;
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
var G__7541 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7541__delegate.call(this, x, y, more);
};
G__7541.cljs$lang$maxFixedArity = 2;
G__7541.cljs$lang$applyTo = (function (arglist__7545){
var x = cljs.core.first(arglist__7545);
var y = cljs.core.first(cljs.core.next(arglist__7545));
var more = cljs.core.rest(cljs.core.next(arglist__7545));
return G__7541__delegate.call(this, x, y, more);
});
return G__7541;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7537.call(this,x);
case  2 :
return _GT__EQ___7538.call(this,x,y);
default:
return _GT__EQ___7539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7539.cljs$lang$applyTo;
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
var max__7546 = (function (x){
return x;
});
var max__7547 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7548 = (function() { 
var G__7550__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7550__delegate.call(this, x, y, more);
};
G__7550.cljs$lang$maxFixedArity = 2;
G__7550.cljs$lang$applyTo = (function (arglist__7551){
var x = cljs.core.first(arglist__7551);
var y = cljs.core.first(cljs.core.next(arglist__7551));
var more = cljs.core.rest(cljs.core.next(arglist__7551));
return G__7550__delegate.call(this, x, y, more);
});
return G__7550;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7546.call(this,x);
case  2 :
return max__7547.call(this,x,y);
default:
return max__7548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7548.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7552 = (function (x){
return x;
});
var min__7553 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7554 = (function() { 
var G__7556__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7556__delegate.call(this, x, y, more);
};
G__7556.cljs$lang$maxFixedArity = 2;
G__7556.cljs$lang$applyTo = (function (arglist__7557){
var x = cljs.core.first(arglist__7557);
var y = cljs.core.first(cljs.core.next(arglist__7557));
var more = cljs.core.rest(cljs.core.next(arglist__7557));
return G__7556__delegate.call(this, x, y, more);
});
return G__7556;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7552.call(this,x);
case  2 :
return min__7553.call(this,x,y);
default:
return min__7554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7554.cljs$lang$applyTo;
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
var rem__7558 = (n % d);

return cljs.core.fix.call(null,((n - rem__7558) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7559 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7559));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7560 = (function (){
return Math.random.call(null);
});
var rand__7561 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7560.call(this);
case  1 :
return rand__7561.call(this,n);
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
var _EQ__EQ___7563 = (function (x){
return true;
});
var _EQ__EQ___7564 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7565 = (function() { 
var G__7567__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7568 = y;
var G__7569 = cljs.core.first.call(null,more);
var G__7570 = cljs.core.next.call(null,more);
x = G__7568;
y = G__7569;
more = G__7570;
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
var G__7567 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7567__delegate.call(this, x, y, more);
};
G__7567.cljs$lang$maxFixedArity = 2;
G__7567.cljs$lang$applyTo = (function (arglist__7571){
var x = cljs.core.first(arglist__7571);
var y = cljs.core.first(cljs.core.next(arglist__7571));
var more = cljs.core.rest(cljs.core.next(arglist__7571));
return G__7567__delegate.call(this, x, y, more);
});
return G__7567;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7563.call(this,x);
case  2 :
return _EQ__EQ___7564.call(this,x,y);
default:
return _EQ__EQ___7565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7565.cljs$lang$applyTo;
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
var n__7572 = n;
var xs__7573 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7574 = xs__7573;

if(cljs.core.truth_(and__3546__auto____7574))
{return (n__7572 > 0);
} else
{return and__3546__auto____7574;
}
})()))
{{
var G__7575 = (n__7572 - 1);
var G__7576 = cljs.core.next.call(null,xs__7573);
n__7572 = G__7575;
xs__7573 = G__7576;
continue;
}
} else
{return xs__7573;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7581 = null;
var G__7581__7582 = (function (coll,n){
var temp__3695__auto____7577 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7577))
{var xs__7578 = temp__3695__auto____7577;

return cljs.core.first.call(null,xs__7578);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7581__7583 = (function (coll,n,not_found){
var temp__3695__auto____7579 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7579))
{var xs__7580 = temp__3695__auto____7579;

return cljs.core.first.call(null,xs__7580);
} else
{return not_found;
}
});
G__7581 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7581__7582.call(this,coll,n);
case  3 :
return G__7581__7583.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7581;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7585 = (function (){
return "";
});
var str_STAR___7586 = (function (x){
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
var str_STAR___7587 = (function() { 
var G__7589__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7590 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7591 = cljs.core.next.call(null,more);
sb = G__7590;
more = G__7591;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7589 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7589__delegate.call(this, x, ys);
};
G__7589.cljs$lang$maxFixedArity = 1;
G__7589.cljs$lang$applyTo = (function (arglist__7592){
var x = cljs.core.first(arglist__7592);
var ys = cljs.core.rest(arglist__7592);
return G__7589__delegate.call(this, x, ys);
});
return G__7589;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7585.call(this);
case  1 :
return str_STAR___7586.call(this,x);
default:
return str_STAR___7587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7587.cljs$lang$applyTo;
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
var str__7593 = (function (){
return "";
});
var str__7594 = (function (x){
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
var str__7595 = (function() { 
var G__7597__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7598 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7599 = cljs.core.next.call(null,more);
sb = G__7598;
more = G__7599;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7597 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7597__delegate.call(this, x, ys);
};
G__7597.cljs$lang$maxFixedArity = 1;
G__7597.cljs$lang$applyTo = (function (arglist__7600){
var x = cljs.core.first(arglist__7600);
var ys = cljs.core.rest(arglist__7600);
return G__7597__delegate.call(this, x, ys);
});
return G__7597;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7593.call(this);
case  1 :
return str__7594.call(this,x);
default:
return str__7595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7595.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7601 = (function (s,start){
return s.substring(start);
});
var subs__7602 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7601.call(this,s,start);
case  3 :
return subs__7602.call(this,s,start,end);
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
var symbol__7604 = (function (name){
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
var symbol__7605 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7604.call(this,ns);
case  2 :
return symbol__7605.call(this,ns,name);
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
var keyword__7607 = (function (name){
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
var keyword__7608 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7607.call(this,ns);
case  2 :
return keyword__7608.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7610 = cljs.core.seq.call(null,x);
var ys__7611 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7610 === null)))
{return (ys__7611 === null);
} else
{if(cljs.core.truth_((ys__7611 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7610),cljs.core.first.call(null,ys__7611))))
{{
var G__7612 = cljs.core.next.call(null,xs__7610);
var G__7613 = cljs.core.next.call(null,ys__7611);
xs__7610 = G__7612;
ys__7611 = G__7613;
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
return cljs.core.reduce.call(null,(function (p1__7614_SHARP_,p2__7615_SHARP_){
return cljs.core.hash_combine.call(null,p1__7614_SHARP_,cljs.core.hash.call(null,p2__7615_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7616__7617 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7616__7617))
{var G__7619__7621 = cljs.core.first.call(null,G__7616__7617);
var vec__7620__7622 = G__7619__7621;
var key_name__7623 = cljs.core.nth.call(null,vec__7620__7622,0,null);
var f__7624 = cljs.core.nth.call(null,vec__7620__7622,1,null);
var G__7616__7625 = G__7616__7617;

var G__7619__7626 = G__7619__7621;
var G__7616__7627 = G__7616__7625;

while(true){
var vec__7628__7629 = G__7619__7626;
var key_name__7630 = cljs.core.nth.call(null,vec__7628__7629,0,null);
var f__7631 = cljs.core.nth.call(null,vec__7628__7629,1,null);
var G__7616__7632 = G__7616__7627;

var str_name__7633 = cljs.core.name.call(null,key_name__7630);

obj[str_name__7633] = f__7631;
var temp__3698__auto____7634 = cljs.core.next.call(null,G__7616__7632);

if(cljs.core.truth_(temp__3698__auto____7634))
{var G__7616__7635 = temp__3698__auto____7634;

{
var G__7636 = cljs.core.first.call(null,G__7616__7635);
var G__7637 = G__7616__7635;
G__7619__7626 = G__7636;
G__7616__7627 = G__7637;
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
var this__7638 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7639 = this;
return (new cljs.core.List(this__7639.meta,o,coll,(this__7639.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7640 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7641 = this;
return this__7641.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7642 = this;
return this__7642.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7643 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7644 = this;
return this__7644.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7645 = this;
return this__7645.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7646 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7647 = this;
return (new cljs.core.List(meta,this__7647.first,this__7647.rest,this__7647.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7648 = this;
return this__7648.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7649 = this;
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
var this__7650 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7651 = this;
return (new cljs.core.List(this__7651.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7652 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7653 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7654 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7655 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7656 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7657 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7658 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7659 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7660 = this;
return this__7660.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7661 = this;
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
list.cljs$lang$applyTo = (function (arglist__7662){
var items = cljs.core.seq( arglist__7662 );;
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
var this__7663 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7664 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7665 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7666 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7666.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7667 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7668 = this;
return this__7668.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7669 = this;
if(cljs.core.truth_((this__7669.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7669.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7670 = this;
return this__7670.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7671 = this;
return (new cljs.core.Cons(meta,this__7671.first,this__7671.rest));
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
var G__7672 = null;
var G__7672__7673 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7672__7674 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7672 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7672__7673.call(this,string,f);
case  3 :
return G__7672__7674.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7672;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7676 = null;
var G__7676__7677 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7676__7678 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7676 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7676__7677.call(this,string,k);
case  3 :
return G__7676__7678.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7676;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7680 = null;
var G__7680__7681 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7680__7682 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7680 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7680__7681.call(this,string,n);
case  3 :
return G__7680__7682.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7680;
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
var G__7690 = null;
var G__7690__7691 = (function (tsym7684,coll){
var tsym7684__7686 = this;

var this$__7687 = tsym7684__7686;

return cljs.core.get.call(null,coll,this$__7687.toString());
});
var G__7690__7692 = (function (tsym7685,coll,not_found){
var tsym7685__7688 = this;

var this$__7689 = tsym7685__7688;

return cljs.core.get.call(null,coll,this$__7689.toString(),not_found);
});
G__7690 = function(tsym7685,coll,not_found){
switch(arguments.length){
case  2 :
return G__7690__7691.call(this,tsym7685,coll);
case  3 :
return G__7690__7692.call(this,tsym7685,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7690;
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
var x__7694 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7694;
} else
{lazy_seq.x = x__7694.call(null);
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
var this__7695 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7696 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7697 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7698 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7698.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7699 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7700 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7701 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7702 = this;
return this__7702.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7703 = this;
return (new cljs.core.LazySeq(meta,this__7703.realized,this__7703.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7704 = [];

var s__7705 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7705)))
{ary__7704.push(cljs.core.first.call(null,s__7705));
{
var G__7706 = cljs.core.next.call(null,s__7705);
s__7705 = G__7706;
continue;
}
} else
{return ary__7704;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7707 = s;
var i__7708 = n;
var sum__7709 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7710 = (i__7708 > 0);

if(cljs.core.truth_(and__3546__auto____7710))
{return cljs.core.seq.call(null,s__7707);
} else
{return and__3546__auto____7710;
}
})()))
{{
var G__7711 = cljs.core.next.call(null,s__7707);
var G__7712 = (i__7708 - 1);
var G__7713 = (sum__7709 + 1);
s__7707 = G__7711;
i__7708 = G__7712;
sum__7709 = G__7713;
continue;
}
} else
{return sum__7709;
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
var concat__7717 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7718 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7719 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7714 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7714))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7714),concat.call(null,cljs.core.rest.call(null,s__7714),y));
} else
{return y;
}
})));
});
var concat__7720 = (function() { 
var G__7722__delegate = function (x,y,zs){
var cat__7716 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7715 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7715))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7715),cat.call(null,cljs.core.rest.call(null,xys__7715),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7716.call(null,concat.call(null,x,y),zs);
};
var G__7722 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7722__delegate.call(this, x, y, zs);
};
G__7722.cljs$lang$maxFixedArity = 2;
G__7722.cljs$lang$applyTo = (function (arglist__7723){
var x = cljs.core.first(arglist__7723);
var y = cljs.core.first(cljs.core.next(arglist__7723));
var zs = cljs.core.rest(cljs.core.next(arglist__7723));
return G__7722__delegate.call(this, x, y, zs);
});
return G__7722;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7717.call(this);
case  1 :
return concat__7718.call(this,x);
case  2 :
return concat__7719.call(this,x,y);
default:
return concat__7720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7720.cljs$lang$applyTo;
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
var list_STAR___7724 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7725 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7726 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7727 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7728 = (function() { 
var G__7730__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7730 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7730__delegate.call(this, a, b, c, d, more);
};
G__7730.cljs$lang$maxFixedArity = 4;
G__7730.cljs$lang$applyTo = (function (arglist__7731){
var a = cljs.core.first(arglist__7731);
var b = cljs.core.first(cljs.core.next(arglist__7731));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7731)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7731))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7731))));
return G__7730__delegate.call(this, a, b, c, d, more);
});
return G__7730;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7724.call(this,a);
case  2 :
return list_STAR___7725.call(this,a,b);
case  3 :
return list_STAR___7726.call(this,a,b,c);
case  4 :
return list_STAR___7727.call(this,a,b,c,d);
default:
return list_STAR___7728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7728.cljs$lang$applyTo;
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
var apply__7741 = (function (f,args){
var fixed_arity__7732 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7732 + 1)) <= fixed_arity__7732)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7742 = (function (f,x,args){
var arglist__7733 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7734 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7733,fixed_arity__7734) <= fixed_arity__7734)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7733));
} else
{return f.cljs$lang$applyTo(arglist__7733);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7733));
}
});
var apply__7743 = (function (f,x,y,args){
var arglist__7735 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7736 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7735,fixed_arity__7736) <= fixed_arity__7736)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7735));
} else
{return f.cljs$lang$applyTo(arglist__7735);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7735));
}
});
var apply__7744 = (function (f,x,y,z,args){
var arglist__7737 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7738 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7737,fixed_arity__7738) <= fixed_arity__7738)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7737));
} else
{return f.cljs$lang$applyTo(arglist__7737);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7737));
}
});
var apply__7745 = (function() { 
var G__7747__delegate = function (f,a,b,c,d,args){
var arglist__7739 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7740 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7739,fixed_arity__7740) <= fixed_arity__7740)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7739));
} else
{return f.cljs$lang$applyTo(arglist__7739);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7739));
}
};
var G__7747 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7747__delegate.call(this, f, a, b, c, d, args);
};
G__7747.cljs$lang$maxFixedArity = 5;
G__7747.cljs$lang$applyTo = (function (arglist__7748){
var f = cljs.core.first(arglist__7748);
var a = cljs.core.first(cljs.core.next(arglist__7748));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7748)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7748))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7748)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7748)))));
return G__7747__delegate.call(this, f, a, b, c, d, args);
});
return G__7747;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7741.call(this,f,a);
case  3 :
return apply__7742.call(this,f,a,b);
case  4 :
return apply__7743.call(this,f,a,b,c);
case  5 :
return apply__7744.call(this,f,a,b,c,d);
default:
return apply__7745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7745.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7749){
var obj = cljs.core.first(arglist__7749);
var f = cljs.core.first(cljs.core.next(arglist__7749));
var args = cljs.core.rest(cljs.core.next(arglist__7749));
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
var not_EQ___7750 = (function (x){
return false;
});
var not_EQ___7751 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7752 = (function() { 
var G__7754__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7754 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7754__delegate.call(this, x, y, more);
};
G__7754.cljs$lang$maxFixedArity = 2;
G__7754.cljs$lang$applyTo = (function (arglist__7755){
var x = cljs.core.first(arglist__7755);
var y = cljs.core.first(cljs.core.next(arglist__7755));
var more = cljs.core.rest(cljs.core.next(arglist__7755));
return G__7754__delegate.call(this, x, y, more);
});
return G__7754;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7750.call(this,x);
case  2 :
return not_EQ___7751.call(this,x,y);
default:
return not_EQ___7752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7752.cljs$lang$applyTo;
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
var G__7756 = pred;
var G__7757 = cljs.core.next.call(null,coll);
pred = G__7756;
coll = G__7757;
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
{var or__3548__auto____7758 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{{
var G__7759 = pred;
var G__7760 = cljs.core.next.call(null,coll);
pred = G__7759;
coll = G__7760;
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
var G__7761 = null;
var G__7761__7762 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7761__7763 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7761__7764 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7761__7765 = (function() { 
var G__7767__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7767 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7767__delegate.call(this, x, y, zs);
};
G__7767.cljs$lang$maxFixedArity = 2;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var x = cljs.core.first(arglist__7768);
var y = cljs.core.first(cljs.core.next(arglist__7768));
var zs = cljs.core.rest(cljs.core.next(arglist__7768));
return G__7767__delegate.call(this, x, y, zs);
});
return G__7767;
})()
;
G__7761 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7761__7762.call(this);
case  1 :
return G__7761__7763.call(this,x);
case  2 :
return G__7761__7764.call(this,x,y);
default:
return G__7761__7765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7761.cljs$lang$maxFixedArity = 2;
G__7761.cljs$lang$applyTo = G__7761__7765.cljs$lang$applyTo;
return G__7761;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7769__delegate = function (args){
return x;
};
var G__7769 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7769__delegate.call(this, args);
};
G__7769.cljs$lang$maxFixedArity = 0;
G__7769.cljs$lang$applyTo = (function (arglist__7770){
var args = cljs.core.seq( arglist__7770 );;
return G__7769__delegate.call(this, args);
});
return G__7769;
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
var comp__7774 = (function (){
return cljs.core.identity;
});
var comp__7775 = (function (f){
return f;
});
var comp__7776 = (function (f,g){
return (function() {
var G__7780 = null;
var G__7780__7781 = (function (){
return f.call(null,g.call(null));
});
var G__7780__7782 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7780__7783 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7780__7784 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7780__7785 = (function() { 
var G__7787__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7787 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7787__delegate.call(this, x, y, z, args);
};
G__7787.cljs$lang$maxFixedArity = 3;
G__7787.cljs$lang$applyTo = (function (arglist__7788){
var x = cljs.core.first(arglist__7788);
var y = cljs.core.first(cljs.core.next(arglist__7788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7788)));
return G__7787__delegate.call(this, x, y, z, args);
});
return G__7787;
})()
;
G__7780 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7780__7781.call(this);
case  1 :
return G__7780__7782.call(this,x);
case  2 :
return G__7780__7783.call(this,x,y);
case  3 :
return G__7780__7784.call(this,x,y,z);
default:
return G__7780__7785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7780.cljs$lang$maxFixedArity = 3;
G__7780.cljs$lang$applyTo = G__7780__7785.cljs$lang$applyTo;
return G__7780;
})()
});
var comp__7777 = (function (f,g,h){
return (function() {
var G__7789 = null;
var G__7789__7790 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7789__7791 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7789__7792 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7789__7793 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7789__7794 = (function() { 
var G__7796__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7796 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7796__delegate.call(this, x, y, z, args);
};
G__7796.cljs$lang$maxFixedArity = 3;
G__7796.cljs$lang$applyTo = (function (arglist__7797){
var x = cljs.core.first(arglist__7797);
var y = cljs.core.first(cljs.core.next(arglist__7797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7797)));
return G__7796__delegate.call(this, x, y, z, args);
});
return G__7796;
})()
;
G__7789 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7789__7790.call(this);
case  1 :
return G__7789__7791.call(this,x);
case  2 :
return G__7789__7792.call(this,x,y);
case  3 :
return G__7789__7793.call(this,x,y,z);
default:
return G__7789__7794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7789.cljs$lang$maxFixedArity = 3;
G__7789.cljs$lang$applyTo = G__7789__7794.cljs$lang$applyTo;
return G__7789;
})()
});
var comp__7778 = (function() { 
var G__7798__delegate = function (f1,f2,f3,fs){
var fs__7771 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7799__delegate = function (args){
var ret__7772 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7771),args);
var fs__7773 = cljs.core.next.call(null,fs__7771);

while(true){
if(cljs.core.truth_(fs__7773))
{{
var G__7800 = cljs.core.first.call(null,fs__7773).call(null,ret__7772);
var G__7801 = cljs.core.next.call(null,fs__7773);
ret__7772 = G__7800;
fs__7773 = G__7801;
continue;
}
} else
{return ret__7772;
}
break;
}
};
var G__7799 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7799__delegate.call(this, args);
};
G__7799.cljs$lang$maxFixedArity = 0;
G__7799.cljs$lang$applyTo = (function (arglist__7802){
var args = cljs.core.seq( arglist__7802 );;
return G__7799__delegate.call(this, args);
});
return G__7799;
})()
;
};
var G__7798 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7798__delegate.call(this, f1, f2, f3, fs);
};
G__7798.cljs$lang$maxFixedArity = 3;
G__7798.cljs$lang$applyTo = (function (arglist__7803){
var f1 = cljs.core.first(arglist__7803);
var f2 = cljs.core.first(cljs.core.next(arglist__7803));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7803)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7803)));
return G__7798__delegate.call(this, f1, f2, f3, fs);
});
return G__7798;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7774.call(this);
case  1 :
return comp__7775.call(this,f1);
case  2 :
return comp__7776.call(this,f1,f2);
case  3 :
return comp__7777.call(this,f1,f2,f3);
default:
return comp__7778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7778.cljs$lang$applyTo;
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
var partial__7804 = (function (f,arg1){
return (function() { 
var G__7809__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7809 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7809__delegate.call(this, args);
};
G__7809.cljs$lang$maxFixedArity = 0;
G__7809.cljs$lang$applyTo = (function (arglist__7810){
var args = cljs.core.seq( arglist__7810 );;
return G__7809__delegate.call(this, args);
});
return G__7809;
})()
;
});
var partial__7805 = (function (f,arg1,arg2){
return (function() { 
var G__7811__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7811 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7811__delegate.call(this, args);
};
G__7811.cljs$lang$maxFixedArity = 0;
G__7811.cljs$lang$applyTo = (function (arglist__7812){
var args = cljs.core.seq( arglist__7812 );;
return G__7811__delegate.call(this, args);
});
return G__7811;
})()
;
});
var partial__7806 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7813__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7813 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7813__delegate.call(this, args);
};
G__7813.cljs$lang$maxFixedArity = 0;
G__7813.cljs$lang$applyTo = (function (arglist__7814){
var args = cljs.core.seq( arglist__7814 );;
return G__7813__delegate.call(this, args);
});
return G__7813;
})()
;
});
var partial__7807 = (function() { 
var G__7815__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7816__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7816 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7816__delegate.call(this, args);
};
G__7816.cljs$lang$maxFixedArity = 0;
G__7816.cljs$lang$applyTo = (function (arglist__7817){
var args = cljs.core.seq( arglist__7817 );;
return G__7816__delegate.call(this, args);
});
return G__7816;
})()
;
};
var G__7815 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7815__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7815.cljs$lang$maxFixedArity = 4;
G__7815.cljs$lang$applyTo = (function (arglist__7818){
var f = cljs.core.first(arglist__7818);
var arg1 = cljs.core.first(cljs.core.next(arglist__7818));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7818)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7818))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7818))));
return G__7815__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7815;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7804.call(this,f,arg1);
case  3 :
return partial__7805.call(this,f,arg1,arg2);
case  4 :
return partial__7806.call(this,f,arg1,arg2,arg3);
default:
return partial__7807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7807.cljs$lang$applyTo;
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
var fnil__7819 = (function (f,x){
return (function() {
var G__7823 = null;
var G__7823__7824 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7823__7825 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7823__7826 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7823__7827 = (function() { 
var G__7829__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7829 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7829__delegate.call(this, a, b, c, ds);
};
G__7829.cljs$lang$maxFixedArity = 3;
G__7829.cljs$lang$applyTo = (function (arglist__7830){
var a = cljs.core.first(arglist__7830);
var b = cljs.core.first(cljs.core.next(arglist__7830));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7830)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7830)));
return G__7829__delegate.call(this, a, b, c, ds);
});
return G__7829;
})()
;
G__7823 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7823__7824.call(this,a);
case  2 :
return G__7823__7825.call(this,a,b);
case  3 :
return G__7823__7826.call(this,a,b,c);
default:
return G__7823__7827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7823.cljs$lang$maxFixedArity = 3;
G__7823.cljs$lang$applyTo = G__7823__7827.cljs$lang$applyTo;
return G__7823;
})()
});
var fnil__7820 = (function (f,x,y){
return (function() {
var G__7831 = null;
var G__7831__7832 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7831__7833 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7831__7834 = (function() { 
var G__7836__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7836 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7836__delegate.call(this, a, b, c, ds);
};
G__7836.cljs$lang$maxFixedArity = 3;
G__7836.cljs$lang$applyTo = (function (arglist__7837){
var a = cljs.core.first(arglist__7837);
var b = cljs.core.first(cljs.core.next(arglist__7837));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7837)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7837)));
return G__7836__delegate.call(this, a, b, c, ds);
});
return G__7836;
})()
;
G__7831 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7831__7832.call(this,a,b);
case  3 :
return G__7831__7833.call(this,a,b,c);
default:
return G__7831__7834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7831.cljs$lang$maxFixedArity = 3;
G__7831.cljs$lang$applyTo = G__7831__7834.cljs$lang$applyTo;
return G__7831;
})()
});
var fnil__7821 = (function (f,x,y,z){
return (function() {
var G__7838 = null;
var G__7838__7839 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7838__7840 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7838__7841 = (function() { 
var G__7843__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7843 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7843__delegate.call(this, a, b, c, ds);
};
G__7843.cljs$lang$maxFixedArity = 3;
G__7843.cljs$lang$applyTo = (function (arglist__7844){
var a = cljs.core.first(arglist__7844);
var b = cljs.core.first(cljs.core.next(arglist__7844));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7844)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7844)));
return G__7843__delegate.call(this, a, b, c, ds);
});
return G__7843;
})()
;
G__7838 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7838__7839.call(this,a,b);
case  3 :
return G__7838__7840.call(this,a,b,c);
default:
return G__7838__7841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7838.cljs$lang$maxFixedArity = 3;
G__7838.cljs$lang$applyTo = G__7838__7841.cljs$lang$applyTo;
return G__7838;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7819.call(this,f,x);
case  3 :
return fnil__7820.call(this,f,x,y);
case  4 :
return fnil__7821.call(this,f,x,y,z);
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
var mapi__7847 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7845 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7845))
{var s__7846 = temp__3698__auto____7845;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7846)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7846)));
} else
{return null;
}
})));
});

return mapi__7847.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7848))
{var s__7849 = temp__3698__auto____7848;

var x__7850 = f.call(null,cljs.core.first.call(null,s__7849));

if(cljs.core.truth_((x__7850 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7849));
} else
{return cljs.core.cons.call(null,x__7850,keep.call(null,f,cljs.core.rest.call(null,s__7849)));
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
var keepi__7860 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7857 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7857))
{var s__7858 = temp__3698__auto____7857;

var x__7859 = f.call(null,idx,cljs.core.first.call(null,s__7858));

if(cljs.core.truth_((x__7859 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7858));
} else
{return cljs.core.cons.call(null,x__7859,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7858)));
}
} else
{return null;
}
})));
});

return keepi__7860.call(null,0,coll);
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
var every_pred__7905 = (function (p){
return (function() {
var ep1 = null;
var ep1__7910 = (function (){
return true;
});
var ep1__7911 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7912 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7867 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7867))
{return p.call(null,y);
} else
{return and__3546__auto____7867;
}
})());
});
var ep1__7913 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7868 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7868))
{var and__3546__auto____7869 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7869))
{return p.call(null,z);
} else
{return and__3546__auto____7869;
}
} else
{return and__3546__auto____7868;
}
})());
});
var ep1__7914 = (function() { 
var G__7916__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7870 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7870))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7870;
}
})());
};
var G__7916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7916__delegate.call(this, x, y, z, args);
};
G__7916.cljs$lang$maxFixedArity = 3;
G__7916.cljs$lang$applyTo = (function (arglist__7917){
var x = cljs.core.first(arglist__7917);
var y = cljs.core.first(cljs.core.next(arglist__7917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7917)));
return G__7916__delegate.call(this, x, y, z, args);
});
return G__7916;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7910.call(this);
case  1 :
return ep1__7911.call(this,x);
case  2 :
return ep1__7912.call(this,x,y);
case  3 :
return ep1__7913.call(this,x,y,z);
default:
return ep1__7914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7914.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7906 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7918 = (function (){
return true;
});
var ep2__7919 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7871 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7871))
{return p2.call(null,x);
} else
{return and__3546__auto____7871;
}
})());
});
var ep2__7920 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7872 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7872))
{var and__3546__auto____7873 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7873))
{var and__3546__auto____7874 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7874))
{return p2.call(null,y);
} else
{return and__3546__auto____7874;
}
} else
{return and__3546__auto____7873;
}
} else
{return and__3546__auto____7872;
}
})());
});
var ep2__7921 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7875 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7875))
{var and__3546__auto____7876 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7876))
{var and__3546__auto____7877 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7877))
{var and__3546__auto____7878 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7878))
{var and__3546__auto____7879 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7879))
{return p2.call(null,z);
} else
{return and__3546__auto____7879;
}
} else
{return and__3546__auto____7878;
}
} else
{return and__3546__auto____7877;
}
} else
{return and__3546__auto____7876;
}
} else
{return and__3546__auto____7875;
}
})());
});
var ep2__7922 = (function() { 
var G__7924__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7880 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7880))
{return cljs.core.every_QMARK_.call(null,(function (p1__7851_SHARP_){
var and__3546__auto____7881 = p1.call(null,p1__7851_SHARP_);

if(cljs.core.truth_(and__3546__auto____7881))
{return p2.call(null,p1__7851_SHARP_);
} else
{return and__3546__auto____7881;
}
}),args);
} else
{return and__3546__auto____7880;
}
})());
};
var G__7924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7924__delegate.call(this, x, y, z, args);
};
G__7924.cljs$lang$maxFixedArity = 3;
G__7924.cljs$lang$applyTo = (function (arglist__7925){
var x = cljs.core.first(arglist__7925);
var y = cljs.core.first(cljs.core.next(arglist__7925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7925)));
return G__7924__delegate.call(this, x, y, z, args);
});
return G__7924;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7918.call(this);
case  1 :
return ep2__7919.call(this,x);
case  2 :
return ep2__7920.call(this,x,y);
case  3 :
return ep2__7921.call(this,x,y,z);
default:
return ep2__7922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7922.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7907 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7926 = (function (){
return true;
});
var ep3__7927 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7882 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7882))
{var and__3546__auto____7883 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7883))
{return p3.call(null,x);
} else
{return and__3546__auto____7883;
}
} else
{return and__3546__auto____7882;
}
})());
});
var ep3__7928 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7884 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7884))
{var and__3546__auto____7885 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7885))
{var and__3546__auto____7886 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7886))
{var and__3546__auto____7887 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7887))
{var and__3546__auto____7888 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7888))
{return p3.call(null,y);
} else
{return and__3546__auto____7888;
}
} else
{return and__3546__auto____7887;
}
} else
{return and__3546__auto____7886;
}
} else
{return and__3546__auto____7885;
}
} else
{return and__3546__auto____7884;
}
})());
});
var ep3__7929 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7889 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7889))
{var and__3546__auto____7890 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7890))
{var and__3546__auto____7891 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7891))
{var and__3546__auto____7892 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7892))
{var and__3546__auto____7893 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7893))
{var and__3546__auto____7894 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7894))
{var and__3546__auto____7895 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7895))
{var and__3546__auto____7896 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7896))
{return p3.call(null,z);
} else
{return and__3546__auto____7896;
}
} else
{return and__3546__auto____7895;
}
} else
{return and__3546__auto____7894;
}
} else
{return and__3546__auto____7893;
}
} else
{return and__3546__auto____7892;
}
} else
{return and__3546__auto____7891;
}
} else
{return and__3546__auto____7890;
}
} else
{return and__3546__auto____7889;
}
})());
});
var ep3__7930 = (function() { 
var G__7932__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7897 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7897))
{return cljs.core.every_QMARK_.call(null,(function (p1__7852_SHARP_){
var and__3546__auto____7898 = p1.call(null,p1__7852_SHARP_);

if(cljs.core.truth_(and__3546__auto____7898))
{var and__3546__auto____7899 = p2.call(null,p1__7852_SHARP_);

if(cljs.core.truth_(and__3546__auto____7899))
{return p3.call(null,p1__7852_SHARP_);
} else
{return and__3546__auto____7899;
}
} else
{return and__3546__auto____7898;
}
}),args);
} else
{return and__3546__auto____7897;
}
})());
};
var G__7932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7932__delegate.call(this, x, y, z, args);
};
G__7932.cljs$lang$maxFixedArity = 3;
G__7932.cljs$lang$applyTo = (function (arglist__7933){
var x = cljs.core.first(arglist__7933);
var y = cljs.core.first(cljs.core.next(arglist__7933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7933)));
return G__7932__delegate.call(this, x, y, z, args);
});
return G__7932;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7926.call(this);
case  1 :
return ep3__7927.call(this,x);
case  2 :
return ep3__7928.call(this,x,y);
case  3 :
return ep3__7929.call(this,x,y,z);
default:
return ep3__7930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7930.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7908 = (function() { 
var G__7934__delegate = function (p1,p2,p3,ps){
var ps__7900 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7935 = (function (){
return true;
});
var epn__7936 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7853_SHARP_){
return p1__7853_SHARP_.call(null,x);
}),ps__7900);
});
var epn__7937 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7854_SHARP_){
var and__3546__auto____7901 = p1__7854_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7901))
{return p1__7854_SHARP_.call(null,y);
} else
{return and__3546__auto____7901;
}
}),ps__7900);
});
var epn__7938 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7855_SHARP_){
var and__3546__auto____7902 = p1__7855_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7902))
{var and__3546__auto____7903 = p1__7855_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7903))
{return p1__7855_SHARP_.call(null,z);
} else
{return and__3546__auto____7903;
}
} else
{return and__3546__auto____7902;
}
}),ps__7900);
});
var epn__7939 = (function() { 
var G__7941__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7904 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7904))
{return cljs.core.every_QMARK_.call(null,(function (p1__7856_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7856_SHARP_,args);
}),ps__7900);
} else
{return and__3546__auto____7904;
}
})());
};
var G__7941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7941__delegate.call(this, x, y, z, args);
};
G__7941.cljs$lang$maxFixedArity = 3;
G__7941.cljs$lang$applyTo = (function (arglist__7942){
var x = cljs.core.first(arglist__7942);
var y = cljs.core.first(cljs.core.next(arglist__7942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7942)));
return G__7941__delegate.call(this, x, y, z, args);
});
return G__7941;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7935.call(this);
case  1 :
return epn__7936.call(this,x);
case  2 :
return epn__7937.call(this,x,y);
case  3 :
return epn__7938.call(this,x,y,z);
default:
return epn__7939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7939.cljs$lang$applyTo;
return epn;
})()
};
var G__7934 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7934__delegate.call(this, p1, p2, p3, ps);
};
G__7934.cljs$lang$maxFixedArity = 3;
G__7934.cljs$lang$applyTo = (function (arglist__7943){
var p1 = cljs.core.first(arglist__7943);
var p2 = cljs.core.first(cljs.core.next(arglist__7943));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7943)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7943)));
return G__7934__delegate.call(this, p1, p2, p3, ps);
});
return G__7934;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7905.call(this,p1);
case  2 :
return every_pred__7906.call(this,p1,p2);
case  3 :
return every_pred__7907.call(this,p1,p2,p3);
default:
return every_pred__7908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7908.cljs$lang$applyTo;
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
var some_fn__7983 = (function (p){
return (function() {
var sp1 = null;
var sp1__7988 = (function (){
return null;
});
var sp1__7989 = (function (x){
return p.call(null,x);
});
var sp1__7990 = (function (x,y){
var or__3548__auto____7945 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{return p.call(null,y);
}
});
var sp1__7991 = (function (x,y,z){
var or__3548__auto____7946 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{return p.call(null,z);
}
}
});
var sp1__7992 = (function() { 
var G__7994__delegate = function (x,y,z,args){
var or__3548__auto____7948 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7994 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7994__delegate.call(this, x, y, z, args);
};
G__7994.cljs$lang$maxFixedArity = 3;
G__7994.cljs$lang$applyTo = (function (arglist__7995){
var x = cljs.core.first(arglist__7995);
var y = cljs.core.first(cljs.core.next(arglist__7995));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7995)));
return G__7994__delegate.call(this, x, y, z, args);
});
return G__7994;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__7988.call(this);
case  1 :
return sp1__7989.call(this,x);
case  2 :
return sp1__7990.call(this,x,y);
case  3 :
return sp1__7991.call(this,x,y,z);
default:
return sp1__7992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__7992.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__7984 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__7996 = (function (){
return null;
});
var sp2__7997 = (function (x){
var or__3548__auto____7949 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{return p2.call(null,x);
}
});
var sp2__7998 = (function (x,y){
var or__3548__auto____7950 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{var or__3548__auto____7951 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{var or__3548__auto____7952 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__7999 = (function (x,y,z){
var or__3548__auto____7953 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7954 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7955 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{var or__3548__auto____7956 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7957 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8000 = (function() { 
var G__8002__delegate = function (x,y,z,args){
var or__3548__auto____7958 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7958))
{return or__3548__auto____7958;
} else
{return cljs.core.some.call(null,(function (p1__7861_SHARP_){
var or__3548__auto____7959 = p1.call(null,p1__7861_SHARP_);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{return p2.call(null,p1__7861_SHARP_);
}
}),args);
}
};
var G__8002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8002__delegate.call(this, x, y, z, args);
};
G__8002.cljs$lang$maxFixedArity = 3;
G__8002.cljs$lang$applyTo = (function (arglist__8003){
var x = cljs.core.first(arglist__8003);
var y = cljs.core.first(cljs.core.next(arglist__8003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8003)));
return G__8002__delegate.call(this, x, y, z, args);
});
return G__8002;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__7996.call(this);
case  1 :
return sp2__7997.call(this,x);
case  2 :
return sp2__7998.call(this,x,y);
case  3 :
return sp2__7999.call(this,x,y,z);
default:
return sp2__8000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8000.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__7985 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8004 = (function (){
return null;
});
var sp3__8005 = (function (x){
var or__3548__auto____7960 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{var or__3548__auto____7961 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{return p3.call(null,x);
}
}
});
var sp3__8006 = (function (x,y){
var or__3548__auto____7962 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{var or__3548__auto____7963 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{var or__3548__auto____7964 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7965 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
} else
{var or__3548__auto____7966 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8007 = (function (x,y,z){
var or__3548__auto____7967 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{var or__3548__auto____7968 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7969 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{var or__3548__auto____7970 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{var or__3548__auto____7971 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7972 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7973 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7974 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
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
var sp3__8008 = (function() { 
var G__8010__delegate = function (x,y,z,args){
var or__3548__auto____7975 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{return cljs.core.some.call(null,(function (p1__7862_SHARP_){
var or__3548__auto____7976 = p1.call(null,p1__7862_SHARP_);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{var or__3548__auto____7977 = p2.call(null,p1__7862_SHARP_);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{return p3.call(null,p1__7862_SHARP_);
}
}
}),args);
}
};
var G__8010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8010__delegate.call(this, x, y, z, args);
};
G__8010.cljs$lang$maxFixedArity = 3;
G__8010.cljs$lang$applyTo = (function (arglist__8011){
var x = cljs.core.first(arglist__8011);
var y = cljs.core.first(cljs.core.next(arglist__8011));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8011)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8011)));
return G__8010__delegate.call(this, x, y, z, args);
});
return G__8010;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8004.call(this);
case  1 :
return sp3__8005.call(this,x);
case  2 :
return sp3__8006.call(this,x,y);
case  3 :
return sp3__8007.call(this,x,y,z);
default:
return sp3__8008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8008.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__7986 = (function() { 
var G__8012__delegate = function (p1,p2,p3,ps){
var ps__7978 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8013 = (function (){
return null;
});
var spn__8014 = (function (x){
return cljs.core.some.call(null,(function (p1__7863_SHARP_){
return p1__7863_SHARP_.call(null,x);
}),ps__7978);
});
var spn__8015 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7864_SHARP_){
var or__3548__auto____7979 = p1__7864_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{return p1__7864_SHARP_.call(null,y);
}
}),ps__7978);
});
var spn__8016 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7865_SHARP_){
var or__3548__auto____7980 = p1__7865_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7981 = p1__7865_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{return p1__7865_SHARP_.call(null,z);
}
}
}),ps__7978);
});
var spn__8017 = (function() { 
var G__8019__delegate = function (x,y,z,args){
var or__3548__auto____7982 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{return cljs.core.some.call(null,(function (p1__7866_SHARP_){
return cljs.core.some.call(null,p1__7866_SHARP_,args);
}),ps__7978);
}
};
var G__8019 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8019__delegate.call(this, x, y, z, args);
};
G__8019.cljs$lang$maxFixedArity = 3;
G__8019.cljs$lang$applyTo = (function (arglist__8020){
var x = cljs.core.first(arglist__8020);
var y = cljs.core.first(cljs.core.next(arglist__8020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8020)));
return G__8019__delegate.call(this, x, y, z, args);
});
return G__8019;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8013.call(this);
case  1 :
return spn__8014.call(this,x);
case  2 :
return spn__8015.call(this,x,y);
case  3 :
return spn__8016.call(this,x,y,z);
default:
return spn__8017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8017.cljs$lang$applyTo;
return spn;
})()
};
var G__8012 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8012__delegate.call(this, p1, p2, p3, ps);
};
G__8012.cljs$lang$maxFixedArity = 3;
G__8012.cljs$lang$applyTo = (function (arglist__8021){
var p1 = cljs.core.first(arglist__8021);
var p2 = cljs.core.first(cljs.core.next(arglist__8021));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8021)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8021)));
return G__8012__delegate.call(this, p1, p2, p3, ps);
});
return G__8012;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__7983.call(this,p1);
case  2 :
return some_fn__7984.call(this,p1,p2);
case  3 :
return some_fn__7985.call(this,p1,p2,p3);
default:
return some_fn__7986.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__7986.cljs$lang$applyTo;
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
var map__8034 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8022 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8022))
{var s__8023 = temp__3698__auto____8022;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8023)),map.call(null,f,cljs.core.rest.call(null,s__8023)));
} else
{return null;
}
})));
});
var map__8035 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8024 = cljs.core.seq.call(null,c1);
var s2__8025 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8026 = s1__8024;

if(cljs.core.truth_(and__3546__auto____8026))
{return s2__8025;
} else
{return and__3546__auto____8026;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8024),cljs.core.first.call(null,s2__8025)),map.call(null,f,cljs.core.rest.call(null,s1__8024),cljs.core.rest.call(null,s2__8025)));
} else
{return null;
}
})));
});
var map__8036 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8027 = cljs.core.seq.call(null,c1);
var s2__8028 = cljs.core.seq.call(null,c2);
var s3__8029 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8030 = s1__8027;

if(cljs.core.truth_(and__3546__auto____8030))
{var and__3546__auto____8031 = s2__8028;

if(cljs.core.truth_(and__3546__auto____8031))
{return s3__8029;
} else
{return and__3546__auto____8031;
}
} else
{return and__3546__auto____8030;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8027),cljs.core.first.call(null,s2__8028),cljs.core.first.call(null,s3__8029)),map.call(null,f,cljs.core.rest.call(null,s1__8027),cljs.core.rest.call(null,s2__8028),cljs.core.rest.call(null,s3__8029)));
} else
{return null;
}
})));
});
var map__8037 = (function() { 
var G__8039__delegate = function (f,c1,c2,c3,colls){
var step__8033 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8032 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8032)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8032),step.call(null,map.call(null,cljs.core.rest,ss__8032)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7944_SHARP_){
return cljs.core.apply.call(null,f,p1__7944_SHARP_);
}),step__8033.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8039 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8039__delegate.call(this, f, c1, c2, c3, colls);
};
G__8039.cljs$lang$maxFixedArity = 4;
G__8039.cljs$lang$applyTo = (function (arglist__8040){
var f = cljs.core.first(arglist__8040);
var c1 = cljs.core.first(cljs.core.next(arglist__8040));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8040)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8040))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8040))));
return G__8039__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8039;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8034.call(this,f,c1);
case  3 :
return map__8035.call(this,f,c1,c2);
case  4 :
return map__8036.call(this,f,c1,c2,c3);
default:
return map__8037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8037.cljs$lang$applyTo;
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
{var temp__3698__auto____8041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8041))
{var s__8042 = temp__3698__auto____8041;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8042),take.call(null,(n - 1),cljs.core.rest.call(null,s__8042)));
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
var step__8045 = (function (n,coll){
while(true){
var s__8043 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8044 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8044))
{return s__8043;
} else
{return and__3546__auto____8044;
}
})()))
{{
var G__8046 = (n - 1);
var G__8047 = cljs.core.rest.call(null,s__8043);
n = G__8046;
coll = G__8047;
continue;
}
} else
{return s__8043;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8045.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8048 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8049 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8048.call(this,n);
case  2 :
return drop_last__8049.call(this,n,s);
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
var s__8051 = cljs.core.seq.call(null,coll);
var lead__8052 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8052))
{{
var G__8053 = cljs.core.next.call(null,s__8051);
var G__8054 = cljs.core.next.call(null,lead__8052);
s__8051 = G__8053;
lead__8052 = G__8054;
continue;
}
} else
{return s__8051;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8057 = (function (pred,coll){
while(true){
var s__8055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8056 = s__8055;

if(cljs.core.truth_(and__3546__auto____8056))
{return pred.call(null,cljs.core.first.call(null,s__8055));
} else
{return and__3546__auto____8056;
}
})()))
{{
var G__8058 = pred;
var G__8059 = cljs.core.rest.call(null,s__8055);
pred = G__8058;
coll = G__8059;
continue;
}
} else
{return s__8055;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8057.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8060 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8060))
{var s__8061 = temp__3698__auto____8060;

return cljs.core.concat.call(null,s__8061,cycle.call(null,s__8061));
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
var repeat__8062 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8063 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8062.call(this,n);
case  2 :
return repeat__8063.call(this,n,x);
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
var repeatedly__8065 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8066 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8065.call(this,n);
case  2 :
return repeatedly__8066.call(this,n,f);
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
var interleave__8072 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8068 = cljs.core.seq.call(null,c1);
var s2__8069 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8070 = s1__8068;

if(cljs.core.truth_(and__3546__auto____8070))
{return s2__8069;
} else
{return and__3546__auto____8070;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8068),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8069),interleave.call(null,cljs.core.rest.call(null,s1__8068),cljs.core.rest.call(null,s2__8069))));
} else
{return null;
}
})));
});
var interleave__8073 = (function() { 
var G__8075__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8071 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8071)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8071),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8071)));
} else
{return null;
}
})));
};
var G__8075 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8075__delegate.call(this, c1, c2, colls);
};
G__8075.cljs$lang$maxFixedArity = 2;
G__8075.cljs$lang$applyTo = (function (arglist__8076){
var c1 = cljs.core.first(arglist__8076);
var c2 = cljs.core.first(cljs.core.next(arglist__8076));
var colls = cljs.core.rest(cljs.core.next(arglist__8076));
return G__8075__delegate.call(this, c1, c2, colls);
});
return G__8075;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8072.call(this,c1,c2);
default:
return interleave__8073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8073.cljs$lang$applyTo;
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
var cat__8079 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8077))
{var coll__8078 = temp__3695__auto____8077;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8078),cat.call(null,cljs.core.rest.call(null,coll__8078),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8079.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8080 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8081 = (function() { 
var G__8083__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8083 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8083__delegate.call(this, f, coll, colls);
};
G__8083.cljs$lang$maxFixedArity = 2;
G__8083.cljs$lang$applyTo = (function (arglist__8084){
var f = cljs.core.first(arglist__8084);
var coll = cljs.core.first(cljs.core.next(arglist__8084));
var colls = cljs.core.rest(cljs.core.next(arglist__8084));
return G__8083__delegate.call(this, f, coll, colls);
});
return G__8083;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8080.call(this,f,coll);
default:
return mapcat__8081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8081.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8085))
{var s__8086 = temp__3698__auto____8085;

var f__8087 = cljs.core.first.call(null,s__8086);
var r__8088 = cljs.core.rest.call(null,s__8086);

if(cljs.core.truth_(pred.call(null,f__8087)))
{return cljs.core.cons.call(null,f__8087,filter.call(null,pred,r__8088));
} else
{return filter.call(null,pred,r__8088);
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
var walk__8090 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8090.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8089_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8089_SHARP_));
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
var partition__8097 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8098 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8091 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8091))
{var s__8092 = temp__3698__auto____8091;

var p__8093 = cljs.core.take.call(null,n,s__8092);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8093))))
{return cljs.core.cons.call(null,p__8093,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8092)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8099 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8094))
{var s__8095 = temp__3698__auto____8094;

var p__8096 = cljs.core.take.call(null,n,s__8095);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8096))))
{return cljs.core.cons.call(null,p__8096,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8095)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8096,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8097.call(this,n,step);
case  3 :
return partition__8098.call(this,n,step,pad);
case  4 :
return partition__8099.call(this,n,step,pad,coll);
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
var get_in__8105 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8106 = (function (m,ks,not_found){
var sentinel__8101 = cljs.core.lookup_sentinel;
var m__8102 = m;
var ks__8103 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8103))
{var m__8104 = cljs.core.get.call(null,m__8102,cljs.core.first.call(null,ks__8103),sentinel__8101);

if(cljs.core.truth_((sentinel__8101 === m__8104)))
{return not_found;
} else
{{
var G__8108 = sentinel__8101;
var G__8109 = m__8104;
var G__8110 = cljs.core.next.call(null,ks__8103);
sentinel__8101 = G__8108;
m__8102 = G__8109;
ks__8103 = G__8110;
continue;
}
}
} else
{return m__8102;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8105.call(this,m,ks);
case  3 :
return get_in__8106.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8111,v){
var vec__8112__8113 = p__8111;
var k__8114 = cljs.core.nth.call(null,vec__8112__8113,0,null);
var ks__8115 = cljs.core.nthnext.call(null,vec__8112__8113,1);

if(cljs.core.truth_(ks__8115))
{return cljs.core.assoc.call(null,m,k__8114,assoc_in.call(null,cljs.core.get.call(null,m,k__8114),ks__8115,v));
} else
{return cljs.core.assoc.call(null,m,k__8114,v);
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
var update_in__delegate = function (m,p__8116,f,args){
var vec__8117__8118 = p__8116;
var k__8119 = cljs.core.nth.call(null,vec__8117__8118,0,null);
var ks__8120 = cljs.core.nthnext.call(null,vec__8117__8118,1);

if(cljs.core.truth_(ks__8120))
{return cljs.core.assoc.call(null,m,k__8119,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8119),ks__8120,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8119,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8119),args));
}
};
var update_in = function (m,p__8116,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8116, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8121){
var m = cljs.core.first(arglist__8121);
var p__8116 = cljs.core.first(cljs.core.next(arglist__8121));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8121)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8121)));
return update_in__delegate.call(this, m, p__8116, f, args);
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
var this__8122 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8155 = null;
var G__8155__8156 = (function (coll,k){
var this__8123 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8155__8157 = (function (coll,k,not_found){
var this__8124 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8155 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8155__8156.call(this,coll,k);
case  3 :
return G__8155__8157.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8155;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8125 = this;
var new_array__8126 = cljs.core.aclone.call(null,this__8125.array);

(new_array__8126[k] = v);
return (new cljs.core.Vector(this__8125.meta,new_array__8126));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8159 = null;
var G__8159__8160 = (function (tsym8127,k){
var this__8129 = this;
var tsym8127__8130 = this;

var coll__8131 = tsym8127__8130;

return cljs.core._lookup.call(null,coll__8131,k);
});
var G__8159__8161 = (function (tsym8128,k,not_found){
var this__8132 = this;
var tsym8128__8133 = this;

var coll__8134 = tsym8128__8133;

return cljs.core._lookup.call(null,coll__8134,k,not_found);
});
G__8159 = function(tsym8128,k,not_found){
switch(arguments.length){
case  2 :
return G__8159__8160.call(this,tsym8128,k);
case  3 :
return G__8159__8161.call(this,tsym8128,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8159;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8135 = this;
var new_array__8136 = cljs.core.aclone.call(null,this__8135.array);

new_array__8136.push(o);
return (new cljs.core.Vector(this__8135.meta,new_array__8136));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8163 = null;
var G__8163__8164 = (function (v,f){
var this__8137 = this;
return cljs.core.ci_reduce.call(null,this__8137.array,f);
});
var G__8163__8165 = (function (v,f,start){
var this__8138 = this;
return cljs.core.ci_reduce.call(null,this__8138.array,f,start);
});
G__8163 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8163__8164.call(this,v,f);
case  3 :
return G__8163__8165.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8163;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8139 = this;
if(cljs.core.truth_((this__8139.array.length > 0)))
{var vector_seq__8140 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8139.array.length)))
{return cljs.core.cons.call(null,(this__8139.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8140.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8141 = this;
return this__8141.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8142 = this;
var count__8143 = this__8142.array.length;

if(cljs.core.truth_((count__8143 > 0)))
{return (this__8142.array[(count__8143 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8144 = this;
if(cljs.core.truth_((this__8144.array.length > 0)))
{var new_array__8145 = cljs.core.aclone.call(null,this__8144.array);

new_array__8145.pop();
return (new cljs.core.Vector(this__8144.meta,new_array__8145));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8146 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8147 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8148 = this;
return (new cljs.core.Vector(meta,this__8148.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8149 = this;
return this__8149.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8167 = null;
var G__8167__8168 = (function (coll,n){
var this__8150 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8151 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8151))
{return (n < this__8150.array.length);
} else
{return and__3546__auto____8151;
}
})()))
{return (this__8150.array[n]);
} else
{return null;
}
});
var G__8167__8169 = (function (coll,n,not_found){
var this__8152 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8153 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8153))
{return (n < this__8152.array.length);
} else
{return and__3546__auto____8153;
}
})()))
{return (this__8152.array[n]);
} else
{return not_found;
}
});
G__8167 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8167__8168.call(this,coll,n);
case  3 :
return G__8167__8169.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8167;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8154 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8154.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8171 = pv.cnt;

if(cljs.core.truth_((cnt__8171 < 32)))
{return 0;
} else
{return (((cnt__8171 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8172 = level;
var ret__8173 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8172)))
{return ret__8173;
} else
{var embed__8174 = ret__8173;
var r__8175 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8176 = (r__8175[0] = embed__8174);

{
var G__8177 = (ll__8172 - 5);
var G__8178 = r__8175;
ll__8172 = G__8177;
ret__8173 = G__8178;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8179 = cljs.core.aclone.call(null,parent);
var subidx__8180 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8179[subidx__8180] = tailnode);
return ret__8179;
} else
{var temp__3695__auto____8181 = (parent[subidx__8180]);

if(cljs.core.truth_(temp__3695__auto____8181))
{var child__8182 = temp__3695__auto____8181;

var node_to_insert__8183 = push_tail.call(null,pv,(level - 5),child__8182,tailnode);
var ___8184 = (ret__8179[subidx__8180] = node_to_insert__8183);

return ret__8179;
} else
{var node_to_insert__8185 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8186 = (ret__8179[subidx__8180] = node_to_insert__8185);

return ret__8179;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8187 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8187))
{return (i < pv.cnt);
} else
{return and__3546__auto____8187;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8188 = pv.root;
var level__8189 = pv.shift;

while(true){
if(cljs.core.truth_((level__8189 > 0)))
{{
var G__8190 = (node__8188[((i >> level__8189) & 31)]);
var G__8191 = (level__8189 - 5);
node__8188 = G__8190;
level__8189 = G__8191;
continue;
}
} else
{return node__8188;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8192 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8192[(i & 31)] = val);
return ret__8192;
} else
{var subidx__8193 = ((i >> level) & 31);
var ___8194 = (ret__8192[subidx__8193] = do_assoc.call(null,pv,(level - 5),(node[subidx__8193]),i,val));

return ret__8192;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8195 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8196 = pop_tail.call(null,pv,(level - 5),(node[subidx__8195]));

if(cljs.core.truth_((function (){var and__3546__auto____8197 = (new_child__8196 === null);

if(cljs.core.truth_(and__3546__auto____8197))
{return (subidx__8195 === 0);
} else
{return and__3546__auto____8197;
}
})()))
{return null;
} else
{var ret__8198 = cljs.core.aclone.call(null,node);
var ___8199 = (ret__8198[subidx__8195] = new_child__8196);

return ret__8198;
}
} else
{if(cljs.core.truth_((subidx__8195 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8200 = cljs.core.aclone.call(null,node);
var ___8201 = (ret__8200[subidx__8195] = null);

return ret__8200;
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
var this__8202 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8242 = null;
var G__8242__8243 = (function (coll,k){
var this__8203 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8242__8244 = (function (coll,k,not_found){
var this__8204 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8242 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8242__8243.call(this,coll,k);
case  3 :
return G__8242__8244.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8242;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8205 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8206 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8206))
{return (k < this__8205.cnt);
} else
{return and__3546__auto____8206;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8207 = cljs.core.aclone.call(null,this__8205.tail);

(new_tail__8207[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8205.meta,this__8205.cnt,this__8205.shift,this__8205.root,new_tail__8207));
} else
{return (new cljs.core.PersistentVector(this__8205.meta,this__8205.cnt,this__8205.shift,cljs.core.do_assoc.call(null,coll,this__8205.shift,this__8205.root,k,v),this__8205.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8205.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8205.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8246 = null;
var G__8246__8247 = (function (tsym8208,k){
var this__8210 = this;
var tsym8208__8211 = this;

var coll__8212 = tsym8208__8211;

return cljs.core._lookup.call(null,coll__8212,k);
});
var G__8246__8248 = (function (tsym8209,k,not_found){
var this__8213 = this;
var tsym8209__8214 = this;

var coll__8215 = tsym8209__8214;

return cljs.core._lookup.call(null,coll__8215,k,not_found);
});
G__8246 = function(tsym8209,k,not_found){
switch(arguments.length){
case  2 :
return G__8246__8247.call(this,tsym8209,k);
case  3 :
return G__8246__8248.call(this,tsym8209,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8246;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8216 = this;
if(cljs.core.truth_(((this__8216.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8217 = cljs.core.aclone.call(null,this__8216.tail);

new_tail__8217.push(o);
return (new cljs.core.PersistentVector(this__8216.meta,(this__8216.cnt + 1),this__8216.shift,this__8216.root,new_tail__8217));
} else
{var root_overflow_QMARK___8218 = ((this__8216.cnt >> 5) > (1 << this__8216.shift));
var new_shift__8219 = (cljs.core.truth_(root_overflow_QMARK___8218)?(this__8216.shift + 5):this__8216.shift);
var new_root__8221 = (cljs.core.truth_(root_overflow_QMARK___8218)?(function (){var n_r__8220 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8220[0] = this__8216.root);
(n_r__8220[1] = cljs.core.new_path.call(null,this__8216.shift,this__8216.tail));
return n_r__8220;
})():cljs.core.push_tail.call(null,coll,this__8216.shift,this__8216.root,this__8216.tail));

return (new cljs.core.PersistentVector(this__8216.meta,(this__8216.cnt + 1),new_shift__8219,new_root__8221,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8250 = null;
var G__8250__8251 = (function (v,f){
var this__8222 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8250__8252 = (function (v,f,start){
var this__8223 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8250 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8250__8251.call(this,v,f);
case  3 :
return G__8250__8252.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8250;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8224 = this;
if(cljs.core.truth_((this__8224.cnt > 0)))
{var vector_seq__8225 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8224.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8225.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8226 = this;
return this__8226.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8227 = this;
if(cljs.core.truth_((this__8227.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8227.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8228 = this;
if(cljs.core.truth_((this__8228.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8228.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8228.meta);
} else
{if(cljs.core.truth_((1 < (this__8228.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8228.meta,(this__8228.cnt - 1),this__8228.shift,this__8228.root,cljs.core.aclone.call(null,this__8228.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8229 = cljs.core.array_for.call(null,coll,(this__8228.cnt - 2));
var nr__8230 = cljs.core.pop_tail.call(null,this__8228.shift,this__8228.root);
var new_root__8231 = (cljs.core.truth_((nr__8230 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8230);
var cnt_1__8232 = (this__8228.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8233 = (5 < this__8228.shift);

if(cljs.core.truth_(and__3546__auto____8233))
{return ((new_root__8231[1]) === null);
} else
{return and__3546__auto____8233;
}
})()))
{return (new cljs.core.PersistentVector(this__8228.meta,cnt_1__8232,(this__8228.shift - 5),(new_root__8231[0]),new_tail__8229));
} else
{return (new cljs.core.PersistentVector(this__8228.meta,cnt_1__8232,this__8228.shift,new_root__8231,new_tail__8229));
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
var this__8234 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8235 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8236 = this;
return (new cljs.core.PersistentVector(meta,this__8236.cnt,this__8236.shift,this__8236.root,this__8236.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8237 = this;
return this__8237.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8254 = null;
var G__8254__8255 = (function (coll,n){
var this__8238 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8254__8256 = (function (coll,n,not_found){
var this__8239 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8240 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8240))
{return (n < this__8239.cnt);
} else
{return and__3546__auto____8240;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8254 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8254__8255.call(this,coll,n);
case  3 :
return G__8254__8256.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8254;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8241 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8241.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8258){
var args = cljs.core.seq( arglist__8258 );;
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
var this__8259 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8287 = null;
var G__8287__8288 = (function (coll,k){
var this__8260 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8287__8289 = (function (coll,k,not_found){
var this__8261 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8287 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8287__8288.call(this,coll,k);
case  3 :
return G__8287__8289.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8287;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8262 = this;
var v_pos__8263 = (this__8262.start + key);

return (new cljs.core.Subvec(this__8262.meta,cljs.core._assoc.call(null,this__8262.v,v_pos__8263,val),this__8262.start,((this__8262.end > (v_pos__8263 + 1)) ? this__8262.end : (v_pos__8263 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8291 = null;
var G__8291__8292 = (function (tsym8264,k){
var this__8266 = this;
var tsym8264__8267 = this;

var coll__8268 = tsym8264__8267;

return cljs.core._lookup.call(null,coll__8268,k);
});
var G__8291__8293 = (function (tsym8265,k,not_found){
var this__8269 = this;
var tsym8265__8270 = this;

var coll__8271 = tsym8265__8270;

return cljs.core._lookup.call(null,coll__8271,k,not_found);
});
G__8291 = function(tsym8265,k,not_found){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,tsym8265,k);
case  3 :
return G__8291__8293.call(this,tsym8265,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8272 = this;
return (new cljs.core.Subvec(this__8272.meta,cljs.core._assoc_n.call(null,this__8272.v,this__8272.end,o),this__8272.start,(this__8272.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8295 = null;
var G__8295__8296 = (function (coll,f){
var this__8273 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8295__8297 = (function (coll,f,start){
var this__8274 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8295 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8295__8296.call(this,coll,f);
case  3 :
return G__8295__8297.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8295;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8275 = this;
var subvec_seq__8276 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8275.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8275.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8276.call(null,this__8275.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8277 = this;
return (this__8277.end - this__8277.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8278 = this;
return cljs.core._nth.call(null,this__8278.v,(this__8278.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8279 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8279.start,this__8279.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8279.meta,this__8279.v,this__8279.start,(this__8279.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8280 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8281 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8282 = this;
return (new cljs.core.Subvec(meta,this__8282.v,this__8282.start,this__8282.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8283 = this;
return this__8283.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8299 = null;
var G__8299__8300 = (function (coll,n){
var this__8284 = this;
return cljs.core._nth.call(null,this__8284.v,(this__8284.start + n));
});
var G__8299__8301 = (function (coll,n,not_found){
var this__8285 = this;
return cljs.core._nth.call(null,this__8285.v,(this__8285.start + n),not_found);
});
G__8299 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8299__8300.call(this,coll,n);
case  3 :
return G__8299__8301.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8299;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8286 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8286.meta);
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
var subvec__8303 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8304 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8303.call(this,v,start);
case  3 :
return subvec__8304.call(this,v,start,end);
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
var this__8306 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8307 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8308 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8309 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8309.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8310 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8311 = this;
return cljs.core._first.call(null,this__8311.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8312 = this;
var temp__3695__auto____8313 = cljs.core.next.call(null,this__8312.front);

if(cljs.core.truth_(temp__3695__auto____8313))
{var f1__8314 = temp__3695__auto____8313;

return (new cljs.core.PersistentQueueSeq(this__8312.meta,f1__8314,this__8312.rear));
} else
{if(cljs.core.truth_((this__8312.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8312.meta,this__8312.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8315 = this;
return this__8315.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8316 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8316.front,this__8316.rear));
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
var this__8317 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8318 = this;
if(cljs.core.truth_(this__8318.front))
{return (new cljs.core.PersistentQueue(this__8318.meta,(this__8318.count + 1),this__8318.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8319 = this__8318.rear;

if(cljs.core.truth_(or__3548__auto____8319))
{return or__3548__auto____8319;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8318.meta,(this__8318.count + 1),cljs.core.conj.call(null,this__8318.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8320 = this;
var rear__8321 = cljs.core.seq.call(null,this__8320.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8322 = this__8320.front;

if(cljs.core.truth_(or__3548__auto____8322))
{return or__3548__auto____8322;
} else
{return rear__8321;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8320.front,cljs.core.seq.call(null,rear__8321)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8323 = this;
return this__8323.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8324 = this;
return cljs.core._first.call(null,this__8324.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8325 = this;
if(cljs.core.truth_(this__8325.front))
{var temp__3695__auto____8326 = cljs.core.next.call(null,this__8325.front);

if(cljs.core.truth_(temp__3695__auto____8326))
{var f1__8327 = temp__3695__auto____8326;

return (new cljs.core.PersistentQueue(this__8325.meta,(this__8325.count - 1),f1__8327,this__8325.rear));
} else
{return (new cljs.core.PersistentQueue(this__8325.meta,(this__8325.count - 1),cljs.core.seq.call(null,this__8325.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8328 = this;
return cljs.core.first.call(null,this__8328.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8329 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8330 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8331 = this;
return (new cljs.core.PersistentQueue(meta,this__8331.count,this__8331.front,this__8331.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8332 = this;
return this__8332.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8333 = this;
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
var this__8334 = this;
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
var len__8335 = array.length;

var i__8336 = 0;

while(true){
if(cljs.core.truth_((i__8336 < len__8335)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8336]))))
{return i__8336;
} else
{{
var G__8337 = (i__8336 + incr);
i__8336 = G__8337;
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
var obj_map_contains_key_QMARK___8339 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8340 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8338 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8338))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8338;
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
return obj_map_contains_key_QMARK___8339.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8340.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8343 = cljs.core.hash.call(null,a);
var b__8344 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8343 < b__8344)))
{return -1;
} else
{if(cljs.core.truth_((a__8343 > b__8344)))
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
var this__8345 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8372 = null;
var G__8372__8373 = (function (coll,k){
var this__8346 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8372__8374 = (function (coll,k,not_found){
var this__8347 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8347.strobj,(this__8347.strobj[k]),not_found);
});
G__8372 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8372__8373.call(this,coll,k);
case  3 :
return G__8372__8374.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8372;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8348 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8349 = goog.object.clone.call(null,this__8348.strobj);
var overwrite_QMARK___8350 = new_strobj__8349.hasOwnProperty(k);

(new_strobj__8349[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8350))
{return (new cljs.core.ObjMap(this__8348.meta,this__8348.keys,new_strobj__8349));
} else
{var new_keys__8351 = cljs.core.aclone.call(null,this__8348.keys);

new_keys__8351.push(k);
return (new cljs.core.ObjMap(this__8348.meta,new_keys__8351,new_strobj__8349));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8348.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8352 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8352.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8376 = null;
var G__8376__8377 = (function (tsym8353,k){
var this__8355 = this;
var tsym8353__8356 = this;

var coll__8357 = tsym8353__8356;

return cljs.core._lookup.call(null,coll__8357,k);
});
var G__8376__8378 = (function (tsym8354,k,not_found){
var this__8358 = this;
var tsym8354__8359 = this;

var coll__8360 = tsym8354__8359;

return cljs.core._lookup.call(null,coll__8360,k,not_found);
});
G__8376 = function(tsym8354,k,not_found){
switch(arguments.length){
case  2 :
return G__8376__8377.call(this,tsym8354,k);
case  3 :
return G__8376__8378.call(this,tsym8354,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8376;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8361 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8362 = this;
if(cljs.core.truth_((this__8362.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8342_SHARP_){
return cljs.core.vector.call(null,p1__8342_SHARP_,(this__8362.strobj[p1__8342_SHARP_]));
}),this__8362.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8363 = this;
return this__8363.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8364 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8365 = this;
return (new cljs.core.ObjMap(meta,this__8365.keys,this__8365.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8366 = this;
return this__8366.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8367 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8367.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8368 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8369 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8369))
{return this__8368.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8369;
}
})()))
{var new_keys__8370 = cljs.core.aclone.call(null,this__8368.keys);
var new_strobj__8371 = goog.object.clone.call(null,this__8368.strobj);

new_keys__8370.splice(cljs.core.scan_array.call(null,1,k,new_keys__8370),1);
cljs.core.js_delete.call(null,new_strobj__8371,k);
return (new cljs.core.ObjMap(this__8368.meta,new_keys__8370,new_strobj__8371));
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
var this__8381 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8419 = null;
var G__8419__8420 = (function (coll,k){
var this__8382 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8419__8421 = (function (coll,k,not_found){
var this__8383 = this;
var bucket__8384 = (this__8383.hashobj[cljs.core.hash.call(null,k)]);
var i__8385 = (cljs.core.truth_(bucket__8384)?cljs.core.scan_array.call(null,2,k,bucket__8384):null);

if(cljs.core.truth_(i__8385))
{return (bucket__8384[(i__8385 + 1)]);
} else
{return not_found;
}
});
G__8419 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8419__8420.call(this,coll,k);
case  3 :
return G__8419__8421.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8419;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8386 = this;
var h__8387 = cljs.core.hash.call(null,k);
var bucket__8388 = (this__8386.hashobj[h__8387]);

if(cljs.core.truth_(bucket__8388))
{var new_bucket__8389 = cljs.core.aclone.call(null,bucket__8388);
var new_hashobj__8390 = goog.object.clone.call(null,this__8386.hashobj);

(new_hashobj__8390[h__8387] = new_bucket__8389);
var temp__3695__auto____8391 = cljs.core.scan_array.call(null,2,k,new_bucket__8389);

if(cljs.core.truth_(temp__3695__auto____8391))
{var i__8392 = temp__3695__auto____8391;

(new_bucket__8389[(i__8392 + 1)] = v);
return (new cljs.core.HashMap(this__8386.meta,this__8386.count,new_hashobj__8390));
} else
{new_bucket__8389.push(k,v);
return (new cljs.core.HashMap(this__8386.meta,(this__8386.count + 1),new_hashobj__8390));
}
} else
{var new_hashobj__8393 = goog.object.clone.call(null,this__8386.hashobj);

(new_hashobj__8393[h__8387] = [k,v]);
return (new cljs.core.HashMap(this__8386.meta,(this__8386.count + 1),new_hashobj__8393));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8394 = this;
var bucket__8395 = (this__8394.hashobj[cljs.core.hash.call(null,k)]);
var i__8396 = (cljs.core.truth_(bucket__8395)?cljs.core.scan_array.call(null,2,k,bucket__8395):null);

if(cljs.core.truth_(i__8396))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8423 = null;
var G__8423__8424 = (function (tsym8397,k){
var this__8399 = this;
var tsym8397__8400 = this;

var coll__8401 = tsym8397__8400;

return cljs.core._lookup.call(null,coll__8401,k);
});
var G__8423__8425 = (function (tsym8398,k,not_found){
var this__8402 = this;
var tsym8398__8403 = this;

var coll__8404 = tsym8398__8403;

return cljs.core._lookup.call(null,coll__8404,k,not_found);
});
G__8423 = function(tsym8398,k,not_found){
switch(arguments.length){
case  2 :
return G__8423__8424.call(this,tsym8398,k);
case  3 :
return G__8423__8425.call(this,tsym8398,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8423;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8405 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8406 = this;
if(cljs.core.truth_((this__8406.count > 0)))
{var hashes__8407 = cljs.core.js_keys.call(null,this__8406.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8380_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8406.hashobj[p1__8380_SHARP_])));
}),hashes__8407);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8408 = this;
return this__8408.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8409 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8410 = this;
return (new cljs.core.HashMap(meta,this__8410.count,this__8410.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8411 = this;
return this__8411.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8412 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8412.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8413 = this;
var h__8414 = cljs.core.hash.call(null,k);
var bucket__8415 = (this__8413.hashobj[h__8414]);
var i__8416 = (cljs.core.truth_(bucket__8415)?cljs.core.scan_array.call(null,2,k,bucket__8415):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8416)))
{return coll;
} else
{var new_hashobj__8417 = goog.object.clone.call(null,this__8413.hashobj);

if(cljs.core.truth_((3 > bucket__8415.length)))
{cljs.core.js_delete.call(null,new_hashobj__8417,h__8414);
} else
{var new_bucket__8418 = cljs.core.aclone.call(null,bucket__8415);

new_bucket__8418.splice(i__8416,2);
(new_hashobj__8417[h__8414] = new_bucket__8418);
}
return (new cljs.core.HashMap(this__8413.meta,(this__8413.count - 1),new_hashobj__8417));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8427 = ks.length;

var i__8428 = 0;
var out__8429 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8428 < len__8427)))
{{
var G__8430 = (i__8428 + 1);
var G__8431 = cljs.core.assoc.call(null,out__8429,(ks[i__8428]),(vs[i__8428]));
i__8428 = G__8430;
out__8429 = G__8431;
continue;
}
} else
{return out__8429;
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
var in$__8432 = cljs.core.seq.call(null,keyvals);
var out__8433 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8432))
{{
var G__8434 = cljs.core.nnext.call(null,in$__8432);
var G__8435 = cljs.core.assoc.call(null,out__8433,cljs.core.first.call(null,in$__8432),cljs.core.second.call(null,in$__8432));
in$__8432 = G__8434;
out__8433 = G__8435;
continue;
}
} else
{return out__8433;
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
hash_map.cljs$lang$applyTo = (function (arglist__8436){
var keyvals = cljs.core.seq( arglist__8436 );;
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
{return cljs.core.reduce.call(null,(function (p1__8437_SHARP_,p2__8438_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8439 = p1__8437_SHARP_;

if(cljs.core.truth_(or__3548__auto____8439))
{return or__3548__auto____8439;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8438_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8440){
var maps = cljs.core.seq( arglist__8440 );;
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
{var merge_entry__8443 = (function (m,e){
var k__8441 = cljs.core.first.call(null,e);
var v__8442 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8441)))
{return cljs.core.assoc.call(null,m,k__8441,f.call(null,cljs.core.get.call(null,m,k__8441),v__8442));
} else
{return cljs.core.assoc.call(null,m,k__8441,v__8442);
}
});
var merge2__8445 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8443,(function (){var or__3548__auto____8444 = m1;

if(cljs.core.truth_(or__3548__auto____8444))
{return or__3548__auto____8444;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8445,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8446){
var f = cljs.core.first(arglist__8446);
var maps = cljs.core.rest(arglist__8446);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8448 = cljs.core.ObjMap.fromObject([],{});
var keys__8449 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8449))
{var key__8450 = cljs.core.first.call(null,keys__8449);
var entry__8451 = cljs.core.get.call(null,map,key__8450,"\uFDD0'user/not-found");

{
var G__8452 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8451,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8448,key__8450,entry__8451):ret__8448);
var G__8453 = cljs.core.next.call(null,keys__8449);
ret__8448 = G__8452;
keys__8449 = G__8453;
continue;
}
} else
{return ret__8448;
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
var this__8454 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8475 = null;
var G__8475__8476 = (function (coll,v){
var this__8455 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8475__8477 = (function (coll,v,not_found){
var this__8456 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8456.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8475 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8475__8476.call(this,coll,v);
case  3 :
return G__8475__8477.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8475;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8479 = null;
var G__8479__8480 = (function (tsym8457,k){
var this__8459 = this;
var tsym8457__8460 = this;

var coll__8461 = tsym8457__8460;

return cljs.core._lookup.call(null,coll__8461,k);
});
var G__8479__8481 = (function (tsym8458,k,not_found){
var this__8462 = this;
var tsym8458__8463 = this;

var coll__8464 = tsym8458__8463;

return cljs.core._lookup.call(null,coll__8464,k,not_found);
});
G__8479 = function(tsym8458,k,not_found){
switch(arguments.length){
case  2 :
return G__8479__8480.call(this,tsym8458,k);
case  3 :
return G__8479__8481.call(this,tsym8458,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8479;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8465 = this;
return (new cljs.core.Set(this__8465.meta,cljs.core.assoc.call(null,this__8465.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8466 = this;
return cljs.core.keys.call(null,this__8466.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8467 = this;
return (new cljs.core.Set(this__8467.meta,cljs.core.dissoc.call(null,this__8467.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8468 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8469 = this;
var and__3546__auto____8470 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8470))
{var and__3546__auto____8471 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8471))
{return cljs.core.every_QMARK_.call(null,(function (p1__8447_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8447_SHARP_);
}),other);
} else
{return and__3546__auto____8471;
}
} else
{return and__3546__auto____8470;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8472 = this;
return (new cljs.core.Set(meta,this__8472.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8473 = this;
return this__8473.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8474 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8474.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8484 = cljs.core.seq.call(null,coll);
var out__8485 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8484))))
{{
var G__8486 = cljs.core.rest.call(null,in$__8484);
var G__8487 = cljs.core.conj.call(null,out__8485,cljs.core.first.call(null,in$__8484));
in$__8484 = G__8486;
out__8485 = G__8487;
continue;
}
} else
{return out__8485;
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
{var n__8488 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8489 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8489))
{var e__8490 = temp__3695__auto____8489;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8490));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8488,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8483_SHARP_){
var temp__3695__auto____8491 = cljs.core.find.call(null,smap,p1__8483_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8491))
{var e__8492 = temp__3695__auto____8491;

return cljs.core.second.call(null,e__8492);
} else
{return p1__8483_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8500 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8493,seen){
while(true){
var vec__8494__8495 = p__8493;
var f__8496 = cljs.core.nth.call(null,vec__8494__8495,0,null);
var xs__8497 = vec__8494__8495;

var temp__3698__auto____8498 = cljs.core.seq.call(null,xs__8497);

if(cljs.core.truth_(temp__3698__auto____8498))
{var s__8499 = temp__3698__auto____8498;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8496)))
{{
var G__8501 = cljs.core.rest.call(null,s__8499);
var G__8502 = seen;
p__8493 = G__8501;
seen = G__8502;
continue;
}
} else
{return cljs.core.cons.call(null,f__8496,step.call(null,cljs.core.rest.call(null,s__8499),cljs.core.conj.call(null,seen,f__8496)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8500.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8503 = cljs.core.PersistentVector.fromArray([]);
var s__8504 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8504)))
{{
var G__8505 = cljs.core.conj.call(null,ret__8503,cljs.core.first.call(null,s__8504));
var G__8506 = cljs.core.next.call(null,s__8504);
ret__8503 = G__8505;
s__8504 = G__8506;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8503);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8507 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8507))
{return or__3548__auto____8507;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8508 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8508 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8508 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8509 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8509))
{return or__3548__auto____8509;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8510 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8510 > -1)))
{return cljs.core.subs.call(null,x,2,i__8510);
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
var map__8513 = cljs.core.ObjMap.fromObject([],{});
var ks__8514 = cljs.core.seq.call(null,keys);
var vs__8515 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8516 = ks__8514;

if(cljs.core.truth_(and__3546__auto____8516))
{return vs__8515;
} else
{return and__3546__auto____8516;
}
})()))
{{
var G__8517 = cljs.core.assoc.call(null,map__8513,cljs.core.first.call(null,ks__8514),cljs.core.first.call(null,vs__8515));
var G__8518 = cljs.core.next.call(null,ks__8514);
var G__8519 = cljs.core.next.call(null,vs__8515);
map__8513 = G__8517;
ks__8514 = G__8518;
vs__8515 = G__8519;
continue;
}
} else
{return map__8513;
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
var max_key__8522 = (function (k,x){
return x;
});
var max_key__8523 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8524 = (function() { 
var G__8526__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8511_SHARP_,p2__8512_SHARP_){
return max_key.call(null,k,p1__8511_SHARP_,p2__8512_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8526 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8526__delegate.call(this, k, x, y, more);
};
G__8526.cljs$lang$maxFixedArity = 3;
G__8526.cljs$lang$applyTo = (function (arglist__8527){
var k = cljs.core.first(arglist__8527);
var x = cljs.core.first(cljs.core.next(arglist__8527));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8527)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8527)));
return G__8526__delegate.call(this, k, x, y, more);
});
return G__8526;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8522.call(this,k,x);
case  3 :
return max_key__8523.call(this,k,x,y);
default:
return max_key__8524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8524.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8528 = (function (k,x){
return x;
});
var min_key__8529 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8530 = (function() { 
var G__8532__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8520_SHARP_,p2__8521_SHARP_){
return min_key.call(null,k,p1__8520_SHARP_,p2__8521_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8532 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8532__delegate.call(this, k, x, y, more);
};
G__8532.cljs$lang$maxFixedArity = 3;
G__8532.cljs$lang$applyTo = (function (arglist__8533){
var k = cljs.core.first(arglist__8533);
var x = cljs.core.first(cljs.core.next(arglist__8533));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8533)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8533)));
return G__8532__delegate.call(this, k, x, y, more);
});
return G__8532;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8528.call(this,k,x);
case  3 :
return min_key__8529.call(this,k,x,y);
default:
return min_key__8530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8530.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8536 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8537 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8534))
{var s__8535 = temp__3698__auto____8534;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8535),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8535)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8536.call(this,n,step);
case  3 :
return partition_all__8537.call(this,n,step,coll);
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
var temp__3698__auto____8539 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8539))
{var s__8540 = temp__3698__auto____8539;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8540))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8540),take_while.call(null,pred,cljs.core.rest.call(null,s__8540)));
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
var this__8541 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8542 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8558 = null;
var G__8558__8559 = (function (rng,f){
var this__8543 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8558__8560 = (function (rng,f,s){
var this__8544 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8558 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8558__8559.call(this,rng,f);
case  3 :
return G__8558__8560.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8558;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8545 = this;
var comp__8546 = (cljs.core.truth_((this__8545.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8546.call(null,this__8545.start,this__8545.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8547 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8547.end - this__8547.start) / this__8547.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8548 = this;
return this__8548.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8549 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8549.meta,(this__8549.start + this__8549.step),this__8549.end,this__8549.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8550 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8551 = this;
return (new cljs.core.Range(meta,this__8551.start,this__8551.end,this__8551.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8552 = this;
return this__8552.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8562 = null;
var G__8562__8563 = (function (rng,n){
var this__8553 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8553.start + (n * this__8553.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8554 = (this__8553.start > this__8553.end);

if(cljs.core.truth_(and__3546__auto____8554))
{return cljs.core._EQ_.call(null,this__8553.step,0);
} else
{return and__3546__auto____8554;
}
})()))
{return this__8553.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8562__8564 = (function (rng,n,not_found){
var this__8555 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8555.start + (n * this__8555.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8556 = (this__8555.start > this__8555.end);

if(cljs.core.truth_(and__3546__auto____8556))
{return cljs.core._EQ_.call(null,this__8555.step,0);
} else
{return and__3546__auto____8556;
}
})()))
{return this__8555.start;
} else
{return not_found;
}
}
});
G__8562 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8562__8563.call(this,rng,n);
case  3 :
return G__8562__8564.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8562;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8557 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8557.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8566 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8567 = (function (end){
return range.call(null,0,end,1);
});
var range__8568 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8569 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8566.call(this);
case  1 :
return range__8567.call(this,start);
case  2 :
return range__8568.call(this,start,end);
case  3 :
return range__8569.call(this,start,end,step);
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
var temp__3698__auto____8571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8571))
{var s__8572 = temp__3698__auto____8571;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8572),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8572)));
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
var temp__3698__auto____8574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8574))
{var s__8575 = temp__3698__auto____8574;

var fst__8576 = cljs.core.first.call(null,s__8575);
var fv__8577 = f.call(null,fst__8576);
var run__8578 = cljs.core.cons.call(null,fst__8576,cljs.core.take_while.call(null,(function (p1__8573_SHARP_){
return cljs.core._EQ_.call(null,fv__8577,f.call(null,p1__8573_SHARP_));
}),cljs.core.next.call(null,s__8575)));

return cljs.core.cons.call(null,run__8578,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8578),s__8575))));
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
var reductions__8593 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8589))
{var s__8590 = temp__3695__auto____8589;

return reductions.call(null,f,cljs.core.first.call(null,s__8590),cljs.core.rest.call(null,s__8590));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8594 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8591 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8591))
{var s__8592 = temp__3698__auto____8591;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8592)),cljs.core.rest.call(null,s__8592));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8593.call(this,f,init);
case  3 :
return reductions__8594.call(this,f,init,coll);
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
var juxt__8597 = (function (f){
return (function() {
var G__8602 = null;
var G__8602__8603 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8602__8604 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8602__8605 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8602__8606 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8602__8607 = (function() { 
var G__8609__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8609__delegate.call(this, x, y, z, args);
};
G__8609.cljs$lang$maxFixedArity = 3;
G__8609.cljs$lang$applyTo = (function (arglist__8610){
var x = cljs.core.first(arglist__8610);
var y = cljs.core.first(cljs.core.next(arglist__8610));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8610)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8610)));
return G__8609__delegate.call(this, x, y, z, args);
});
return G__8609;
})()
;
G__8602 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8602__8603.call(this);
case  1 :
return G__8602__8604.call(this,x);
case  2 :
return G__8602__8605.call(this,x,y);
case  3 :
return G__8602__8606.call(this,x,y,z);
default:
return G__8602__8607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8602.cljs$lang$maxFixedArity = 3;
G__8602.cljs$lang$applyTo = G__8602__8607.cljs$lang$applyTo;
return G__8602;
})()
});
var juxt__8598 = (function (f,g){
return (function() {
var G__8611 = null;
var G__8611__8612 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8611__8613 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8611__8614 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8611__8615 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8611__8616 = (function() { 
var G__8618__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8618 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8618__delegate.call(this, x, y, z, args);
};
G__8618.cljs$lang$maxFixedArity = 3;
G__8618.cljs$lang$applyTo = (function (arglist__8619){
var x = cljs.core.first(arglist__8619);
var y = cljs.core.first(cljs.core.next(arglist__8619));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8619)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8619)));
return G__8618__delegate.call(this, x, y, z, args);
});
return G__8618;
})()
;
G__8611 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8611__8612.call(this);
case  1 :
return G__8611__8613.call(this,x);
case  2 :
return G__8611__8614.call(this,x,y);
case  3 :
return G__8611__8615.call(this,x,y,z);
default:
return G__8611__8616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8611.cljs$lang$maxFixedArity = 3;
G__8611.cljs$lang$applyTo = G__8611__8616.cljs$lang$applyTo;
return G__8611;
})()
});
var juxt__8599 = (function (f,g,h){
return (function() {
var G__8620 = null;
var G__8620__8621 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8620__8622 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8620__8623 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8620__8624 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8620__8625 = (function() { 
var G__8627__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8627__delegate.call(this, x, y, z, args);
};
G__8627.cljs$lang$maxFixedArity = 3;
G__8627.cljs$lang$applyTo = (function (arglist__8628){
var x = cljs.core.first(arglist__8628);
var y = cljs.core.first(cljs.core.next(arglist__8628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8628)));
return G__8627__delegate.call(this, x, y, z, args);
});
return G__8627;
})()
;
G__8620 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8620__8621.call(this);
case  1 :
return G__8620__8622.call(this,x);
case  2 :
return G__8620__8623.call(this,x,y);
case  3 :
return G__8620__8624.call(this,x,y,z);
default:
return G__8620__8625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8620.cljs$lang$maxFixedArity = 3;
G__8620.cljs$lang$applyTo = G__8620__8625.cljs$lang$applyTo;
return G__8620;
})()
});
var juxt__8600 = (function() { 
var G__8629__delegate = function (f,g,h,fs){
var fs__8596 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8630 = null;
var G__8630__8631 = (function (){
return cljs.core.reduce.call(null,(function (p1__8579_SHARP_,p2__8580_SHARP_){
return cljs.core.conj.call(null,p1__8579_SHARP_,p2__8580_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__8596);
});
var G__8630__8632 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8581_SHARP_,p2__8582_SHARP_){
return cljs.core.conj.call(null,p1__8581_SHARP_,p2__8582_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__8596);
});
var G__8630__8633 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8583_SHARP_,p2__8584_SHARP_){
return cljs.core.conj.call(null,p1__8583_SHARP_,p2__8584_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__8596);
});
var G__8630__8634 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8585_SHARP_,p2__8586_SHARP_){
return cljs.core.conj.call(null,p1__8585_SHARP_,p2__8586_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__8596);
});
var G__8630__8635 = (function() { 
var G__8637__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8587_SHARP_,p2__8588_SHARP_){
return cljs.core.conj.call(null,p1__8587_SHARP_,cljs.core.apply.call(null,p2__8588_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__8596);
};
var G__8637 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8637__delegate.call(this, x, y, z, args);
};
G__8637.cljs$lang$maxFixedArity = 3;
G__8637.cljs$lang$applyTo = (function (arglist__8638){
var x = cljs.core.first(arglist__8638);
var y = cljs.core.first(cljs.core.next(arglist__8638));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8638)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8638)));
return G__8637__delegate.call(this, x, y, z, args);
});
return G__8637;
})()
;
G__8630 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8630__8631.call(this);
case  1 :
return G__8630__8632.call(this,x);
case  2 :
return G__8630__8633.call(this,x,y);
case  3 :
return G__8630__8634.call(this,x,y,z);
default:
return G__8630__8635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8630.cljs$lang$maxFixedArity = 3;
G__8630.cljs$lang$applyTo = G__8630__8635.cljs$lang$applyTo;
return G__8630;
})()
};
var G__8629 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8629__delegate.call(this, f, g, h, fs);
};
G__8629.cljs$lang$maxFixedArity = 3;
G__8629.cljs$lang$applyTo = (function (arglist__8639){
var f = cljs.core.first(arglist__8639);
var g = cljs.core.first(cljs.core.next(arglist__8639));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8639)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8639)));
return G__8629__delegate.call(this, f, g, h, fs);
});
return G__8629;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8597.call(this,f);
case  2 :
return juxt__8598.call(this,f,g);
case  3 :
return juxt__8599.call(this,f,g,h);
default:
return juxt__8600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8600.cljs$lang$applyTo;
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
var dorun__8641 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8644 = cljs.core.next.call(null,coll);
coll = G__8644;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8642 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8640 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8640))
{return (n > 0);
} else
{return and__3546__auto____8640;
}
})()))
{{
var G__8645 = (n - 1);
var G__8646 = cljs.core.next.call(null,coll);
n = G__8645;
coll = G__8646;
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
return dorun__8641.call(this,n);
case  2 :
return dorun__8642.call(this,n,coll);
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
var doall__8647 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8648 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8647.call(this,n);
case  2 :
return doall__8648.call(this,n,coll);
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
var matches__8650 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8650),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8650),1)))
{return cljs.core.first.call(null,matches__8650);
} else
{return cljs.core.vec.call(null,matches__8650);
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
var matches__8651 = re.exec(s);

if(cljs.core.truth_((matches__8651 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8651),1)))
{return cljs.core.first.call(null,matches__8651);
} else
{return cljs.core.vec.call(null,matches__8651);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8652 = cljs.core.re_find.call(null,re,s);
var match_idx__8653 = s.search(re);
var match_str__8654 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8652))?cljs.core.first.call(null,match_data__8652):match_data__8652);
var post_match__8655 = cljs.core.subs.call(null,s,(match_idx__8653 + cljs.core.count.call(null,match_str__8654)));

if(cljs.core.truth_(match_data__8652))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8652,re_seq.call(null,re,post_match__8655));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8657__8658 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8659 = cljs.core.nth.call(null,vec__8657__8658,0,null);
var flags__8660 = cljs.core.nth.call(null,vec__8657__8658,1,null);
var pattern__8661 = cljs.core.nth.call(null,vec__8657__8658,2,null);

return (new RegExp(pattern__8661,flags__8660));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8656_SHARP_){
return print_one.call(null,p1__8656_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8662 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8662))
{var and__3546__auto____8666 = (function (){var x__3028__auto____8663 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8664 = x__3028__auto____8663;

if(cljs.core.truth_(and__3546__auto____8664))
{var and__3546__auto____8665 = x__3028__auto____8663.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8665))
{return cljs.core.not.call(null,x__3028__auto____8663.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8665;
}
} else
{return and__3546__auto____8664;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____8663);
}
})();

if(cljs.core.truth_(and__3546__auto____8666))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8666;
}
} else
{return and__3546__auto____8662;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____8667 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8668 = x__3028__auto____8667;

if(cljs.core.truth_(and__3546__auto____8668))
{var and__3546__auto____8669 = x__3028__auto____8667.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8669))
{return cljs.core.not.call(null,x__3028__auto____8667.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8669;
}
} else
{return and__3546__auto____8668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____8667);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__8670 = cljs.core.first.call(null,objs);
var sb__8671 = (new goog.string.StringBuffer());

var G__8672__8673 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8672__8673))
{var obj__8674 = cljs.core.first.call(null,G__8672__8673);
var G__8672__8675 = G__8672__8673;

while(true){
if(cljs.core.truth_((obj__8674 === first_obj__8670)))
{} else
{sb__8671.append(" ");
}
var G__8676__8677 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8674,opts));

if(cljs.core.truth_(G__8676__8677))
{var string__8678 = cljs.core.first.call(null,G__8676__8677);
var G__8676__8679 = G__8676__8677;

while(true){
sb__8671.append(string__8678);
var temp__3698__auto____8680 = cljs.core.next.call(null,G__8676__8679);

if(cljs.core.truth_(temp__3698__auto____8680))
{var G__8676__8681 = temp__3698__auto____8680;

{
var G__8684 = cljs.core.first.call(null,G__8676__8681);
var G__8685 = G__8676__8681;
string__8678 = G__8684;
G__8676__8679 = G__8685;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8682 = cljs.core.next.call(null,G__8672__8675);

if(cljs.core.truth_(temp__3698__auto____8682))
{var G__8672__8683 = temp__3698__auto____8682;

{
var G__8686 = cljs.core.first.call(null,G__8672__8683);
var G__8687 = G__8672__8683;
obj__8674 = G__8686;
G__8672__8675 = G__8687;
continue;
}
} else
{}
break;
}
} else
{}
return sb__8671;
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
var sb__8688 = cljs.core.pr_sb.call(null,objs,opts);

sb__8688.append("\n");
return cljs.core.str.call(null,sb__8688);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8689 = cljs.core.first.call(null,objs);

var G__8690__8691 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8690__8691))
{var obj__8692 = cljs.core.first.call(null,G__8690__8691);
var G__8690__8693 = G__8690__8691;

while(true){
if(cljs.core.truth_((obj__8692 === first_obj__8689)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8694__8695 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8692,opts));

if(cljs.core.truth_(G__8694__8695))
{var string__8696 = cljs.core.first.call(null,G__8694__8695);
var G__8694__8697 = G__8694__8695;

while(true){
cljs.core.string_print.call(null,string__8696);
var temp__3698__auto____8698 = cljs.core.next.call(null,G__8694__8697);

if(cljs.core.truth_(temp__3698__auto____8698))
{var G__8694__8699 = temp__3698__auto____8698;

{
var G__8702 = cljs.core.first.call(null,G__8694__8699);
var G__8703 = G__8694__8699;
string__8696 = G__8702;
G__8694__8697 = G__8703;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8700 = cljs.core.next.call(null,G__8690__8693);

if(cljs.core.truth_(temp__3698__auto____8700))
{var G__8690__8701 = temp__3698__auto____8700;

{
var G__8704 = cljs.core.first.call(null,G__8690__8701);
var G__8705 = G__8690__8701;
obj__8692 = G__8704;
G__8690__8693 = G__8705;
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
pr_str.cljs$lang$applyTo = (function (arglist__8706){
var objs = cljs.core.seq( arglist__8706 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__8707){
var objs = cljs.core.seq( arglist__8707 );;
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
pr.cljs$lang$applyTo = (function (arglist__8708){
var objs = cljs.core.seq( arglist__8708 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8709){
var objs = cljs.core.seq( arglist__8709 );;
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
print_str.cljs$lang$applyTo = (function (arglist__8710){
var objs = cljs.core.seq( arglist__8710 );;
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
println.cljs$lang$applyTo = (function (arglist__8711){
var objs = cljs.core.seq( arglist__8711 );;
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
println_str.cljs$lang$applyTo = (function (arglist__8712){
var objs = cljs.core.seq( arglist__8712 );;
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
prn.cljs$lang$applyTo = (function (arglist__8713){
var objs = cljs.core.seq( arglist__8713 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8714 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8714,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8715 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8715))
{var nspc__8716 = temp__3698__auto____8715;

return cljs.core.str.call(null,nspc__8716,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8717 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8717))
{var nspc__8718 = temp__3698__auto____8717;

return cljs.core.str.call(null,nspc__8718,"/");
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
var pr_pair__8719 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8719,"{",", ","}",opts,coll);
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
var this__8720 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8721 = this;
var G__8722__8723 = cljs.core.seq.call(null,this__8721.watches);

if(cljs.core.truth_(G__8722__8723))
{var G__8725__8727 = cljs.core.first.call(null,G__8722__8723);
var vec__8726__8728 = G__8725__8727;
var key__8729 = cljs.core.nth.call(null,vec__8726__8728,0,null);
var f__8730 = cljs.core.nth.call(null,vec__8726__8728,1,null);
var G__8722__8731 = G__8722__8723;

var G__8725__8732 = G__8725__8727;
var G__8722__8733 = G__8722__8731;

while(true){
var vec__8734__8735 = G__8725__8732;
var key__8736 = cljs.core.nth.call(null,vec__8734__8735,0,null);
var f__8737 = cljs.core.nth.call(null,vec__8734__8735,1,null);
var G__8722__8738 = G__8722__8733;

f__8737.call(null,key__8736,this$,oldval,newval);
var temp__3698__auto____8739 = cljs.core.next.call(null,G__8722__8738);

if(cljs.core.truth_(temp__3698__auto____8739))
{var G__8722__8740 = temp__3698__auto____8739;

{
var G__8747 = cljs.core.first.call(null,G__8722__8740);
var G__8748 = G__8722__8740;
G__8725__8732 = G__8747;
G__8722__8733 = G__8748;
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
var this__8741 = this;
return this$.watches = cljs.core.assoc.call(null,this__8741.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8742 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8742.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8743 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8743.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8744 = this;
return this__8744.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8745 = this;
return this__8745.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8746 = this;
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
var atom__8755 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8756 = (function() { 
var G__8758__delegate = function (x,p__8749){
var map__8750__8751 = p__8749;
var map__8750__8752 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8750__8751))?cljs.core.apply.call(null,cljs.core.hash_map,map__8750__8751):map__8750__8751);
var validator__8753 = cljs.core.get.call(null,map__8750__8752,"\uFDD0'validator");
var meta__8754 = cljs.core.get.call(null,map__8750__8752,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8754,validator__8753,null));
};
var G__8758 = function (x,var_args){
var p__8749 = null;
if (goog.isDef(var_args)) {
  p__8749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8758__delegate.call(this, x, p__8749);
};
G__8758.cljs$lang$maxFixedArity = 1;
G__8758.cljs$lang$applyTo = (function (arglist__8759){
var x = cljs.core.first(arglist__8759);
var p__8749 = cljs.core.rest(arglist__8759);
return G__8758__delegate.call(this, x, p__8749);
});
return G__8758;
})()
;
atom = function(x,var_args){
var p__8749 = var_args;
switch(arguments.length){
case  1 :
return atom__8755.call(this,x);
default:
return atom__8756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8756.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8760 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8760))
{var validate__8761 = temp__3698__auto____8760;

if(cljs.core.truth_(validate__8761.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__8762 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8762,new_value);
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
var swap_BANG___8763 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8764 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8765 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8766 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8767 = (function() { 
var G__8769__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8769 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8769__delegate.call(this, a, f, x, y, z, more);
};
G__8769.cljs$lang$maxFixedArity = 5;
G__8769.cljs$lang$applyTo = (function (arglist__8770){
var a = cljs.core.first(arglist__8770);
var f = cljs.core.first(cljs.core.next(arglist__8770));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8770)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8770))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8770)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8770)))));
return G__8769__delegate.call(this, a, f, x, y, z, more);
});
return G__8769;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8763.call(this,a,f);
case  3 :
return swap_BANG___8764.call(this,a,f,x);
case  4 :
return swap_BANG___8765.call(this,a,f,x,y);
case  5 :
return swap_BANG___8766.call(this,a,f,x,y,z);
default:
return swap_BANG___8767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8767.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8771){
var iref = cljs.core.first(arglist__8771);
var f = cljs.core.first(cljs.core.next(arglist__8771));
var args = cljs.core.rest(cljs.core.next(arglist__8771));
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
var gensym__8772 = (function (){
return gensym.call(null,"G__");
});
var gensym__8773 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8772.call(this);
case  1 :
return gensym__8773.call(this,prefix_string);
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
var this__8775 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__8775.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8776 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__8776.state,(function (p__8777){
var curr_state__8778 = p__8777;
var curr_state__8779 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__8778))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__8778):curr_state__8778);
var done__8780 = cljs.core.get.call(null,curr_state__8779,"\uFDD0'done");

if(cljs.core.truth_(done__8780))
{return curr_state__8779;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__8776.f.call(null)});
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
var map__8781__8782 = options;
var map__8781__8783 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8781__8782))?cljs.core.apply.call(null,cljs.core.hash_map,map__8781__8782):map__8781__8782);
var keywordize_keys__8784 = cljs.core.get.call(null,map__8781__8783,"\uFDD0'keywordize-keys");
var keyfn__8785 = (cljs.core.truth_(keywordize_keys__8784)?cljs.core.keyword:cljs.core.str);
var f__8791 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____8790 = (function iter__8786(s__8787){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8787__8788 = s__8787;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8787__8788)))
{var k__8789 = cljs.core.first.call(null,s__8787__8788);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__8785.call(null,k__8789),thisfn.call(null,(x[k__8789]))]),iter__8786.call(null,cljs.core.rest.call(null,s__8787__8788)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____8790.call(null,cljs.core.js_keys.call(null,x));
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

return f__8791.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8792){
var x = cljs.core.first(arglist__8792);
var options = cljs.core.rest(arglist__8792);
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
var mem__8793 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8797__delegate = function (args){
var temp__3695__auto____8794 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8793),args);

if(cljs.core.truth_(temp__3695__auto____8794))
{var v__8795 = temp__3695__auto____8794;

return v__8795;
} else
{var ret__8796 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8793,cljs.core.assoc,args,ret__8796);
return ret__8796;
}
};
var G__8797 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8797__delegate.call(this, args);
};
G__8797.cljs$lang$maxFixedArity = 0;
G__8797.cljs$lang$applyTo = (function (arglist__8798){
var args = cljs.core.seq( arglist__8798 );;
return G__8797__delegate.call(this, args);
});
return G__8797;
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
var trampoline__8800 = (function (f){
while(true){
var ret__8799 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8799)))
{{
var G__8803 = ret__8799;
f = G__8803;
continue;
}
} else
{return ret__8799;
}
break;
}
});
var trampoline__8801 = (function() { 
var G__8804__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8804 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8804__delegate.call(this, f, args);
};
G__8804.cljs$lang$maxFixedArity = 1;
G__8804.cljs$lang$applyTo = (function (arglist__8805){
var f = cljs.core.first(arglist__8805);
var args = cljs.core.rest(arglist__8805);
return G__8804__delegate.call(this, f, args);
});
return G__8804;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8800.call(this,f);
default:
return trampoline__8801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8801.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8806 = (function (){
return rand.call(null,1);
});
var rand__8807 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8806.call(this);
case  1 :
return rand__8807.call(this,n);
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
var k__8809 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8809,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8809,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___8818 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8819 = (function (h,child,parent){
var or__3548__auto____8810 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8810))
{return or__3548__auto____8810;
} else
{var or__3548__auto____8811 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8811))
{return or__3548__auto____8811;
} else
{var and__3546__auto____8812 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8813 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8813))
{var and__3546__auto____8814 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8814))
{var ret__8815 = true;
var i__8816 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8817 = cljs.core.not.call(null,ret__8815);

if(cljs.core.truth_(or__3548__auto____8817))
{return or__3548__auto____8817;
} else
{return cljs.core._EQ_.call(null,i__8816,cljs.core.count.call(null,parent));
}
})()))
{return ret__8815;
} else
{{
var G__8821 = isa_QMARK_.call(null,h,child.call(null,i__8816),parent.call(null,i__8816));
var G__8822 = (i__8816 + 1);
ret__8815 = G__8821;
i__8816 = G__8822;
continue;
}
}
break;
}
} else
{return and__3546__auto____8814;
}
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8812;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8818.call(this,h,child);
case  3 :
return isa_QMARK___8819.call(this,h,child,parent);
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
var parents__8823 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8824 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8823.call(this,h);
case  2 :
return parents__8824.call(this,h,tag);
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
var ancestors__8826 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8827 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8826.call(this,h);
case  2 :
return ancestors__8827.call(this,h,tag);
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
var descendants__8829 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8830 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8829.call(this,h);
case  2 :
return descendants__8830.call(this,h,tag);
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
var derive__8840 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8841 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__8835 = "\uFDD0'parents".call(null,h);
var td__8836 = "\uFDD0'descendants".call(null,h);
var ta__8837 = "\uFDD0'ancestors".call(null,h);
var tf__8838 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8839 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8835.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8837.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8837.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8835,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8838.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8836,parent,ta__8837),"\uFDD0'descendants":tf__8838.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8837,tag,td__8836)});
})());

if(cljs.core.truth_(or__3548__auto____8839))
{return or__3548__auto____8839;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8840.call(this,h,tag);
case  3 :
return derive__8841.call(this,h,tag,parent);
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
var underive__8847 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8848 = (function (h,tag,parent){
var parentMap__8843 = "\uFDD0'parents".call(null,h);
var childsParents__8844 = (cljs.core.truth_(parentMap__8843.call(null,tag))?cljs.core.disj.call(null,parentMap__8843.call(null,tag),parent):cljs.core.set([]));
var newParents__8845 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8844))?cljs.core.assoc.call(null,parentMap__8843,tag,childsParents__8844):cljs.core.dissoc.call(null,parentMap__8843,tag));
var deriv_seq__8846 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8832_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8832_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8832_SHARP_),cljs.core.second.call(null,p1__8832_SHARP_)));
}),cljs.core.seq.call(null,newParents__8845)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8843.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8833_SHARP_,p2__8834_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8833_SHARP_,p2__8834_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8846));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8847.call(this,h,tag);
case  3 :
return underive__8848.call(this,h,tag,parent);
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
var xprefs__8850 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8852 = (cljs.core.truth_((function (){var and__3546__auto____8851 = xprefs__8850;

if(cljs.core.truth_(and__3546__auto____8851))
{return xprefs__8850.call(null,y);
} else
{return and__3546__auto____8851;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8852))
{return or__3548__auto____8852;
} else
{var or__3548__auto____8854 = (function (){var ps__8853 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8853) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8853),prefer_table)))
{} else
{}
{
var G__8857 = cljs.core.rest.call(null,ps__8853);
ps__8853 = G__8857;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8854))
{return or__3548__auto____8854;
} else
{var or__3548__auto____8856 = (function (){var ps__8855 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8855) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8855),y,prefer_table)))
{} else
{}
{
var G__8858 = cljs.core.rest.call(null,ps__8855);
ps__8855 = G__8858;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8856))
{return or__3548__auto____8856;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8859 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8859))
{return or__3548__auto____8859;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8868 = cljs.core.reduce.call(null,(function (be,p__8860){
var vec__8861__8862 = p__8860;
var k__8863 = cljs.core.nth.call(null,vec__8861__8862,0,null);
var ___8864 = cljs.core.nth.call(null,vec__8861__8862,1,null);
var e__8865 = vec__8861__8862;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8863)))
{var be2__8867 = (cljs.core.truth_((function (){var or__3548__auto____8866 = (be === null);

if(cljs.core.truth_(or__3548__auto____8866))
{return or__3548__auto____8866;
} else
{return cljs.core.dominates.call(null,k__8863,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8865:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8867),k__8863,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8863," and ",cljs.core.first.call(null,be2__8867),", and neither is preferred")));
}
return be2__8867;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8868))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8868));
return cljs.core.second.call(null,best_entry__8868);
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
if(cljs.core.truth_((function (){var and__3546__auto____8869 = mf;

if(cljs.core.truth_(and__3546__auto____8869))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8869;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8870 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8870))
{return or__3548__auto____8870;
} else
{var or__3548__auto____8871 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8871))
{return or__3548__auto____8871;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8872 = mf;

if(cljs.core.truth_(and__3546__auto____8872))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8872;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8873 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8873))
{return or__3548__auto____8873;
} else
{var or__3548__auto____8874 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8874))
{return or__3548__auto____8874;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8875 = mf;

if(cljs.core.truth_(and__3546__auto____8875))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8875;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8876 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8876))
{return or__3548__auto____8876;
} else
{var or__3548__auto____8877 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8877))
{return or__3548__auto____8877;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8878 = mf;

if(cljs.core.truth_(and__3546__auto____8878))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8878;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8879 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8879))
{return or__3548__auto____8879;
} else
{var or__3548__auto____8880 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8880))
{return or__3548__auto____8880;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8881 = mf;

if(cljs.core.truth_(and__3546__auto____8881))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8881;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8882 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8882))
{return or__3548__auto____8882;
} else
{var or__3548__auto____8883 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8883))
{return or__3548__auto____8883;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8884 = mf;

if(cljs.core.truth_(and__3546__auto____8884))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8884;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8885 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8885))
{return or__3548__auto____8885;
} else
{var or__3548__auto____8886 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8886))
{return or__3548__auto____8886;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8887 = mf;

if(cljs.core.truth_(and__3546__auto____8887))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8887;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8888 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8888))
{return or__3548__auto____8888;
} else
{var or__3548__auto____8889 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8889))
{return or__3548__auto____8889;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8890 = mf;

if(cljs.core.truth_(and__3546__auto____8890))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8890;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8891 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8891))
{return or__3548__auto____8891;
} else
{var or__3548__auto____8892 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8892))
{return or__3548__auto____8892;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8893 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8894 = cljs.core._get_method.call(null,mf,dispatch_val__8893);

if(cljs.core.truth_(target_fn__8894))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8893)));
}
return cljs.core.apply.call(null,target_fn__8894,args);
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
var this__8895 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8896 = this;
cljs.core.swap_BANG_.call(null,this__8896.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8896.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8896.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8896.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8897 = this;
cljs.core.swap_BANG_.call(null,this__8897.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8897.method_cache,this__8897.method_table,this__8897.cached_hierarchy,this__8897.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8898 = this;
cljs.core.swap_BANG_.call(null,this__8898.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8898.method_cache,this__8898.method_table,this__8898.cached_hierarchy,this__8898.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8899 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8899.cached_hierarchy),cljs.core.deref.call(null,this__8899.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8899.method_cache,this__8899.method_table,this__8899.cached_hierarchy,this__8899.hierarchy);
}
var temp__3695__auto____8900 = cljs.core.deref.call(null,this__8899.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8900))
{var target_fn__8901 = temp__3695__auto____8900;

return target_fn__8901;
} else
{var temp__3695__auto____8902 = cljs.core.find_and_cache_best_method.call(null,this__8899.name,dispatch_val,this__8899.hierarchy,this__8899.method_table,this__8899.prefer_table,this__8899.method_cache,this__8899.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8902))
{var target_fn__8903 = temp__3695__auto____8902;

return target_fn__8903;
} else
{return cljs.core.deref.call(null,this__8899.method_table).call(null,this__8899.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8904 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8904.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8904.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8904.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8904.method_cache,this__8904.method_table,this__8904.cached_hierarchy,this__8904.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8905 = this;
return cljs.core.deref.call(null,this__8905.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8906 = this;
return cljs.core.deref.call(null,this__8906.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__8907 = this;
return cljs.core.do_dispatch.call(null,mf,this__8907.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8908__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8908 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8908__delegate.call(this, _, args);
};
G__8908.cljs$lang$maxFixedArity = 1;
G__8908.cljs$lang$applyTo = (function (arglist__8909){
var _ = cljs.core.first(arglist__8909);
var args = cljs.core.rest(arglist__8909);
return G__8908__delegate.call(this, _, args);
});
return G__8908;
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
