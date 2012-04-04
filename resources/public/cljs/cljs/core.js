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
var or__3548__auto____6881 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6881))
{return or__3548__auto____6881;
} else
{var or__3548__auto____6882 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6882))
{return or__3548__auto____6882;
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
var _invoke__6946 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6883 = this$;

if(cljs.core.truth_(and__3546__auto____6883))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6883;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6884 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6884))
{return or__3548__auto____6884;
} else
{var or__3548__auto____6885 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6885))
{return or__3548__auto____6885;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6947 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6886 = this$;

if(cljs.core.truth_(and__3546__auto____6886))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6886;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6887 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6887))
{return or__3548__auto____6887;
} else
{var or__3548__auto____6888 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6888))
{return or__3548__auto____6888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6948 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6889 = this$;

if(cljs.core.truth_(and__3546__auto____6889))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6889;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6890 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6890))
{return or__3548__auto____6890;
} else
{var or__3548__auto____6891 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6891))
{return or__3548__auto____6891;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6949 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6892 = this$;

if(cljs.core.truth_(and__3546__auto____6892))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6892;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6893 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6893))
{return or__3548__auto____6893;
} else
{var or__3548__auto____6894 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6894))
{return or__3548__auto____6894;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6950 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6895 = this$;

if(cljs.core.truth_(and__3546__auto____6895))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6895;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6896 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6896))
{return or__3548__auto____6896;
} else
{var or__3548__auto____6897 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6897))
{return or__3548__auto____6897;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6951 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6898 = this$;

if(cljs.core.truth_(and__3546__auto____6898))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6898;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6899 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6899))
{return or__3548__auto____6899;
} else
{var or__3548__auto____6900 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6900))
{return or__3548__auto____6900;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6952 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6901 = this$;

if(cljs.core.truth_(and__3546__auto____6901))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6901;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6902 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6902))
{return or__3548__auto____6902;
} else
{var or__3548__auto____6903 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6903))
{return or__3548__auto____6903;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6953 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6904 = this$;

if(cljs.core.truth_(and__3546__auto____6904))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6904;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6905 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6905))
{return or__3548__auto____6905;
} else
{var or__3548__auto____6906 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6906))
{return or__3548__auto____6906;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6954 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6907 = this$;

if(cljs.core.truth_(and__3546__auto____6907))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6907;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6908 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6908))
{return or__3548__auto____6908;
} else
{var or__3548__auto____6909 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6909))
{return or__3548__auto____6909;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6955 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6910 = this$;

if(cljs.core.truth_(and__3546__auto____6910))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6910;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6911 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6911))
{return or__3548__auto____6911;
} else
{var or__3548__auto____6912 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6912))
{return or__3548__auto____6912;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6956 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6913 = this$;

if(cljs.core.truth_(and__3546__auto____6913))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6913;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6914 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{var or__3548__auto____6915 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6915))
{return or__3548__auto____6915;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6957 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6916 = this$;

if(cljs.core.truth_(and__3546__auto____6916))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6916;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6917 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6917))
{return or__3548__auto____6917;
} else
{var or__3548__auto____6918 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6918))
{return or__3548__auto____6918;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6958 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6919 = this$;

if(cljs.core.truth_(and__3546__auto____6919))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6919;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6920 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6920))
{return or__3548__auto____6920;
} else
{var or__3548__auto____6921 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6921))
{return or__3548__auto____6921;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6959 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6922 = this$;

if(cljs.core.truth_(and__3546__auto____6922))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6922;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6923 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6923))
{return or__3548__auto____6923;
} else
{var or__3548__auto____6924 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6924))
{return or__3548__auto____6924;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6960 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6925 = this$;

if(cljs.core.truth_(and__3546__auto____6925))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6925;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6926 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6926))
{return or__3548__auto____6926;
} else
{var or__3548__auto____6927 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6927))
{return or__3548__auto____6927;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6961 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6928 = this$;

if(cljs.core.truth_(and__3546__auto____6928))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6928;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6929 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6929))
{return or__3548__auto____6929;
} else
{var or__3548__auto____6930 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6930))
{return or__3548__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6962 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6931 = this$;

if(cljs.core.truth_(and__3546__auto____6931))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6931;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6932 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6932))
{return or__3548__auto____6932;
} else
{var or__3548__auto____6933 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6933))
{return or__3548__auto____6933;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6963 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6934 = this$;

if(cljs.core.truth_(and__3546__auto____6934))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6934;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6935 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6935))
{return or__3548__auto____6935;
} else
{var or__3548__auto____6936 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6936))
{return or__3548__auto____6936;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6964 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6937 = this$;

if(cljs.core.truth_(and__3546__auto____6937))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6937;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6938 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6938))
{return or__3548__auto____6938;
} else
{var or__3548__auto____6939 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6939))
{return or__3548__auto____6939;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6965 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6940 = this$;

if(cljs.core.truth_(and__3546__auto____6940))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6940;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6941 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6941))
{return or__3548__auto____6941;
} else
{var or__3548__auto____6942 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6942))
{return or__3548__auto____6942;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6966 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6943 = this$;

if(cljs.core.truth_(and__3546__auto____6943))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6943;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6944 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6944))
{return or__3548__auto____6944;
} else
{var or__3548__auto____6945 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6945))
{return or__3548__auto____6945;
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
return _invoke__6946.call(this,this$);
case  2 :
return _invoke__6947.call(this,this$,a);
case  3 :
return _invoke__6948.call(this,this$,a,b);
case  4 :
return _invoke__6949.call(this,this$,a,b,c);
case  5 :
return _invoke__6950.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6951.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6952.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6953.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6954.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6955.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6956.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6957.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6958.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6959.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6960.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6961.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6962.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6963.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6964.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6965.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6966.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6968 = coll;

if(cljs.core.truth_(and__3546__auto____6968))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6968;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6969 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6969))
{return or__3548__auto____6969;
} else
{var or__3548__auto____6970 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6970))
{return or__3548__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6971 = coll;

if(cljs.core.truth_(and__3546__auto____6971))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6971;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6972 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6972))
{return or__3548__auto____6972;
} else
{var or__3548__auto____6973 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6973))
{return or__3548__auto____6973;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6974 = coll;

if(cljs.core.truth_(and__3546__auto____6974))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6974;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6975 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6975))
{return or__3548__auto____6975;
} else
{var or__3548__auto____6976 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6976))
{return or__3548__auto____6976;
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
var _nth__6983 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6977 = coll;

if(cljs.core.truth_(and__3546__auto____6977))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6977;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6978 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6978))
{return or__3548__auto____6978;
} else
{var or__3548__auto____6979 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6979))
{return or__3548__auto____6979;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6984 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6980 = coll;

if(cljs.core.truth_(and__3546__auto____6980))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6980;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6981 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6981))
{return or__3548__auto____6981;
} else
{var or__3548__auto____6982 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6982))
{return or__3548__auto____6982;
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
return _nth__6983.call(this,coll,n);
case  3 :
return _nth__6984.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6986 = coll;

if(cljs.core.truth_(and__3546__auto____6986))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6986;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6987 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6987))
{return or__3548__auto____6987;
} else
{var or__3548__auto____6988 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6988))
{return or__3548__auto____6988;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6989 = coll;

if(cljs.core.truth_(and__3546__auto____6989))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6989;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6990 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6990))
{return or__3548__auto____6990;
} else
{var or__3548__auto____6991 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6991))
{return or__3548__auto____6991;
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
var _lookup__6998 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6992 = o;

if(cljs.core.truth_(and__3546__auto____6992))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6992;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6993 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6993))
{return or__3548__auto____6993;
} else
{var or__3548__auto____6994 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6994))
{return or__3548__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6999 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6995 = o;

if(cljs.core.truth_(and__3546__auto____6995))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6995;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6996 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6996))
{return or__3548__auto____6996;
} else
{var or__3548__auto____6997 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6997))
{return or__3548__auto____6997;
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
return _lookup__6998.call(this,o,k);
case  3 :
return _lookup__6999.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7001 = coll;

if(cljs.core.truth_(and__3546__auto____7001))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7001;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7002 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7002))
{return or__3548__auto____7002;
} else
{var or__3548__auto____7003 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7003))
{return or__3548__auto____7003;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7004 = coll;

if(cljs.core.truth_(and__3546__auto____7004))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7004;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7005 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7005))
{return or__3548__auto____7005;
} else
{var or__3548__auto____7006 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7006))
{return or__3548__auto____7006;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7007 = coll;

if(cljs.core.truth_(and__3546__auto____7007))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7007;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7008 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7008))
{return or__3548__auto____7008;
} else
{var or__3548__auto____7009 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7009))
{return or__3548__auto____7009;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7010 = coll;

if(cljs.core.truth_(and__3546__auto____7010))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7010;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7011 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7011))
{return or__3548__auto____7011;
} else
{var or__3548__auto____7012 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7012))
{return or__3548__auto____7012;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7013 = coll;

if(cljs.core.truth_(and__3546__auto____7013))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7013;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7014 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7014))
{return or__3548__auto____7014;
} else
{var or__3548__auto____7015 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7015))
{return or__3548__auto____7015;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7016 = coll;

if(cljs.core.truth_(and__3546__auto____7016))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7016;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7017 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7017))
{return or__3548__auto____7017;
} else
{var or__3548__auto____7018 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7018))
{return or__3548__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7019 = coll;

if(cljs.core.truth_(and__3546__auto____7019))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7019;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7020 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7020))
{return or__3548__auto____7020;
} else
{var or__3548__auto____7021 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7021))
{return or__3548__auto____7021;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7022 = o;

if(cljs.core.truth_(and__3546__auto____7022))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7022;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7023 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7023))
{return or__3548__auto____7023;
} else
{var or__3548__auto____7024 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7024))
{return or__3548__auto____7024;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7025 = o;

if(cljs.core.truth_(and__3546__auto____7025))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7025;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7026 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7026))
{return or__3548__auto____7026;
} else
{var or__3548__auto____7027 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7027))
{return or__3548__auto____7027;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7028 = o;

if(cljs.core.truth_(and__3546__auto____7028))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7028;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7029 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7029))
{return or__3548__auto____7029;
} else
{var or__3548__auto____7030 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7030))
{return or__3548__auto____7030;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7031 = o;

if(cljs.core.truth_(and__3546__auto____7031))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7031;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7032 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7032))
{return or__3548__auto____7032;
} else
{var or__3548__auto____7033 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7033))
{return or__3548__auto____7033;
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
var _reduce__7040 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7034 = coll;

if(cljs.core.truth_(and__3546__auto____7034))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7034;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7035 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7035))
{return or__3548__auto____7035;
} else
{var or__3548__auto____7036 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7036))
{return or__3548__auto____7036;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7041 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7037 = coll;

if(cljs.core.truth_(and__3546__auto____7037))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7037;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7038 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7038))
{return or__3548__auto____7038;
} else
{var or__3548__auto____7039 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7039))
{return or__3548__auto____7039;
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
return _reduce__7040.call(this,coll,f);
case  3 :
return _reduce__7041.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7043 = o;

if(cljs.core.truth_(and__3546__auto____7043))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7043;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7044 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7044))
{return or__3548__auto____7044;
} else
{var or__3548__auto____7045 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7045))
{return or__3548__auto____7045;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7046 = o;

if(cljs.core.truth_(and__3546__auto____7046))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7046;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7047 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7047))
{return or__3548__auto____7047;
} else
{var or__3548__auto____7048 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7048))
{return or__3548__auto____7048;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7049 = o;

if(cljs.core.truth_(and__3546__auto____7049))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7049;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7050 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7050))
{return or__3548__auto____7050;
} else
{var or__3548__auto____7051 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7051))
{return or__3548__auto____7051;
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
if(cljs.core.truth_((function (){var and__3546__auto____7052 = o;

if(cljs.core.truth_(and__3546__auto____7052))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7052;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7053 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7053))
{return or__3548__auto____7053;
} else
{var or__3548__auto____7054 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7054))
{return or__3548__auto____7054;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7055 = d;

if(cljs.core.truth_(and__3546__auto____7055))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7055;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7056 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7056))
{return or__3548__auto____7056;
} else
{var or__3548__auto____7057 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7057))
{return or__3548__auto____7057;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7058 = this$;

if(cljs.core.truth_(and__3546__auto____7058))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7058;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7059 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7059))
{return or__3548__auto____7059;
} else
{var or__3548__auto____7060 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7060))
{return or__3548__auto____7060;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7061 = this$;

if(cljs.core.truth_(and__3546__auto____7061))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7061;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7062 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7062))
{return or__3548__auto____7062;
} else
{var or__3548__auto____7063 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7063))
{return or__3548__auto____7063;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7064 = this$;

if(cljs.core.truth_(and__3546__auto____7064))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7064;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7065 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7065))
{return or__3548__auto____7065;
} else
{var or__3548__auto____7066 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7066))
{return or__3548__auto____7066;
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
var G__7067 = null;
var G__7067__7068 = (function (o,k){
return null;
});
var G__7067__7069 = (function (o,k,not_found){
return not_found;
});
G__7067 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7067__7068.call(this,o,k);
case  3 :
return G__7067__7069.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7067;
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
var G__7071 = null;
var G__7071__7072 = (function (_,f){
return f.call(null);
});
var G__7071__7073 = (function (_,f,start){
return start;
});
G__7071 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7071__7072.call(this,_,f);
case  3 :
return G__7071__7073.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7071;
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
var G__7075 = null;
var G__7075__7076 = (function (_,n){
return null;
});
var G__7075__7077 = (function (_,n,not_found){
return not_found;
});
G__7075 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7075__7076.call(this,_,n);
case  3 :
return G__7075__7077.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7075;
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
var ci_reduce__7085 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7079 = cljs.core._nth.call(null,cicoll,0);
var n__7080 = 1;

while(true){
if(cljs.core.truth_((n__7080 < cljs.core._count.call(null,cicoll))))
{{
var G__7089 = f.call(null,val__7079,cljs.core._nth.call(null,cicoll,n__7080));
var G__7090 = (n__7080 + 1);
val__7079 = G__7089;
n__7080 = G__7090;
continue;
}
} else
{return val__7079;
}
break;
}
}
});
var ci_reduce__7086 = (function (cicoll,f,val){
var val__7081 = val;
var n__7082 = 0;

while(true){
if(cljs.core.truth_((n__7082 < cljs.core._count.call(null,cicoll))))
{{
var G__7091 = f.call(null,val__7081,cljs.core._nth.call(null,cicoll,n__7082));
var G__7092 = (n__7082 + 1);
val__7081 = G__7091;
n__7082 = G__7092;
continue;
}
} else
{return val__7081;
}
break;
}
});
var ci_reduce__7087 = (function (cicoll,f,val,idx){
var val__7083 = val;
var n__7084 = idx;

while(true){
if(cljs.core.truth_((n__7084 < cljs.core._count.call(null,cicoll))))
{{
var G__7093 = f.call(null,val__7083,cljs.core._nth.call(null,cicoll,n__7084));
var G__7094 = (n__7084 + 1);
val__7083 = G__7093;
n__7084 = G__7094;
continue;
}
} else
{return val__7083;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7085.call(this,cicoll,f);
case  3 :
return ci_reduce__7086.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7087.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7095 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7108 = null;
var G__7108__7109 = (function (_,f){
var this__7096 = this;
return cljs.core.ci_reduce.call(null,this__7096.a,f,(this__7096.a[this__7096.i]),(this__7096.i + 1));
});
var G__7108__7110 = (function (_,f,start){
var this__7097 = this;
return cljs.core.ci_reduce.call(null,this__7097.a,f,start,this__7097.i);
});
G__7108 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7108__7109.call(this,_,f);
case  3 :
return G__7108__7110.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7108;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7098 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7099 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7112 = null;
var G__7112__7113 = (function (coll,n){
var this__7100 = this;
var i__7101 = (n + this__7100.i);

if(cljs.core.truth_((i__7101 < this__7100.a.length)))
{return (this__7100.a[i__7101]);
} else
{return null;
}
});
var G__7112__7114 = (function (coll,n,not_found){
var this__7102 = this;
var i__7103 = (n + this__7102.i);

if(cljs.core.truth_((i__7103 < this__7102.a.length)))
{return (this__7102.a[i__7103]);
} else
{return not_found;
}
});
G__7112 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7112__7113.call(this,coll,n);
case  3 :
return G__7112__7114.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7112;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7104 = this;
return (this__7104.a.length - this__7104.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7105 = this;
return (this__7105.a[this__7105.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7106 = this;
if(cljs.core.truth_(((this__7106.i + 1) < this__7106.a.length)))
{return (new cljs.core.IndexedSeq(this__7106.a,(this__7106.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7107 = this;
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
var G__7116 = null;
var G__7116__7117 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7116__7118 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7116 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7116__7117.call(this,array,f);
case  3 :
return G__7116__7118.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7116;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7120 = null;
var G__7120__7121 = (function (array,k){
return (array[k]);
});
var G__7120__7122 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7120 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7120__7121.call(this,array,k);
case  3 :
return G__7120__7122.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7120;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7124 = null;
var G__7124__7125 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7124__7126 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7124 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7124__7125.call(this,array,n);
case  3 :
return G__7124__7126.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7124;
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
var temp__3698__auto____7128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7128))
{var s__7129 = temp__3698__auto____7128;

return cljs.core._first.call(null,s__7129);
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
var G__7130 = cljs.core.next.call(null,s);
s = G__7130;
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
var s__7131 = cljs.core.seq.call(null,x);
var n__7132 = 0;

while(true){
if(cljs.core.truth_(s__7131))
{{
var G__7133 = cljs.core.next.call(null,s__7131);
var G__7134 = (n__7132 + 1);
s__7131 = G__7133;
n__7132 = G__7134;
continue;
}
} else
{return n__7132;
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
var conj__7135 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7136 = (function() { 
var G__7138__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7139 = conj.call(null,coll,x);
var G__7140 = cljs.core.first.call(null,xs);
var G__7141 = cljs.core.next.call(null,xs);
coll = G__7139;
x = G__7140;
xs = G__7141;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7138 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7138__delegate.call(this, coll, x, xs);
};
G__7138.cljs$lang$maxFixedArity = 2;
G__7138.cljs$lang$applyTo = (function (arglist__7142){
var coll = cljs.core.first(arglist__7142);
var x = cljs.core.first(cljs.core.next(arglist__7142));
var xs = cljs.core.rest(cljs.core.next(arglist__7142));
return G__7138__delegate.call(this, coll, x, xs);
});
return G__7138;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7135.call(this,coll,x);
default:
return conj__7136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7136.cljs$lang$applyTo;
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
var nth__7143 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7144 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7143.call(this,coll,n);
case  3 :
return nth__7144.call(this,coll,n,not_found);
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
var get__7146 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7147 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7146.call(this,o,k);
case  3 :
return get__7147.call(this,o,k,not_found);
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
var assoc__7150 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7151 = (function() { 
var G__7153__delegate = function (coll,k,v,kvs){
while(true){
var ret__7149 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7154 = ret__7149;
var G__7155 = cljs.core.first.call(null,kvs);
var G__7156 = cljs.core.second.call(null,kvs);
var G__7157 = cljs.core.nnext.call(null,kvs);
coll = G__7154;
k = G__7155;
v = G__7156;
kvs = G__7157;
continue;
}
} else
{return ret__7149;
}
break;
}
};
var G__7153 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7153__delegate.call(this, coll, k, v, kvs);
};
G__7153.cljs$lang$maxFixedArity = 3;
G__7153.cljs$lang$applyTo = (function (arglist__7158){
var coll = cljs.core.first(arglist__7158);
var k = cljs.core.first(cljs.core.next(arglist__7158));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7158)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7158)));
return G__7153__delegate.call(this, coll, k, v, kvs);
});
return G__7153;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7150.call(this,coll,k,v);
default:
return assoc__7151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7151.cljs$lang$applyTo;
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
var dissoc__7160 = (function (coll){
return coll;
});
var dissoc__7161 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7162 = (function() { 
var G__7164__delegate = function (coll,k,ks){
while(true){
var ret__7159 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7165 = ret__7159;
var G__7166 = cljs.core.first.call(null,ks);
var G__7167 = cljs.core.next.call(null,ks);
coll = G__7165;
k = G__7166;
ks = G__7167;
continue;
}
} else
{return ret__7159;
}
break;
}
};
var G__7164 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7164__delegate.call(this, coll, k, ks);
};
G__7164.cljs$lang$maxFixedArity = 2;
G__7164.cljs$lang$applyTo = (function (arglist__7168){
var coll = cljs.core.first(arglist__7168);
var k = cljs.core.first(cljs.core.next(arglist__7168));
var ks = cljs.core.rest(cljs.core.next(arglist__7168));
return G__7164__delegate.call(this, coll, k, ks);
});
return G__7164;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7160.call(this,coll);
case  2 :
return dissoc__7161.call(this,coll,k);
default:
return dissoc__7162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7162.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3027__auto____7169 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7170 = x__3027__auto____7169;

if(cljs.core.truth_(and__3546__auto____7170))
{var and__3546__auto____7171 = x__3027__auto____7169.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7171))
{return cljs.core.not.call(null,x__3027__auto____7169.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7171;
}
} else
{return and__3546__auto____7170;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3027__auto____7169);
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
var disj__7173 = (function (coll){
return coll;
});
var disj__7174 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7175 = (function() { 
var G__7177__delegate = function (coll,k,ks){
while(true){
var ret__7172 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7178 = ret__7172;
var G__7179 = cljs.core.first.call(null,ks);
var G__7180 = cljs.core.next.call(null,ks);
coll = G__7178;
k = G__7179;
ks = G__7180;
continue;
}
} else
{return ret__7172;
}
break;
}
};
var G__7177 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7177__delegate.call(this, coll, k, ks);
};
G__7177.cljs$lang$maxFixedArity = 2;
G__7177.cljs$lang$applyTo = (function (arglist__7181){
var coll = cljs.core.first(arglist__7181);
var k = cljs.core.first(cljs.core.next(arglist__7181));
var ks = cljs.core.rest(cljs.core.next(arglist__7181));
return G__7177__delegate.call(this, coll, k, ks);
});
return G__7177;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7173.call(this,coll);
case  2 :
return disj__7174.call(this,coll,k);
default:
return disj__7175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7175.cljs$lang$applyTo;
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
{var x__3027__auto____7182 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7183 = x__3027__auto____7182;

if(cljs.core.truth_(and__3546__auto____7183))
{var and__3546__auto____7184 = x__3027__auto____7182.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7184))
{return cljs.core.not.call(null,x__3027__auto____7182.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7184;
}
} else
{return and__3546__auto____7183;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3027__auto____7182);
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
{var x__3027__auto____7185 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7186 = x__3027__auto____7185;

if(cljs.core.truth_(and__3546__auto____7186))
{var and__3546__auto____7187 = x__3027__auto____7185.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7187))
{return cljs.core.not.call(null,x__3027__auto____7185.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7187;
}
} else
{return and__3546__auto____7186;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3027__auto____7185);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3027__auto____7188 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7189 = x__3027__auto____7188;

if(cljs.core.truth_(and__3546__auto____7189))
{var and__3546__auto____7190 = x__3027__auto____7188.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7190))
{return cljs.core.not.call(null,x__3027__auto____7188.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7190;
}
} else
{return and__3546__auto____7189;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3027__auto____7188);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3027__auto____7191 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7192 = x__3027__auto____7191;

if(cljs.core.truth_(and__3546__auto____7192))
{var and__3546__auto____7193 = x__3027__auto____7191.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7193))
{return cljs.core.not.call(null,x__3027__auto____7191.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7193;
}
} else
{return and__3546__auto____7192;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3027__auto____7191);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3027__auto____7194 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7195 = x__3027__auto____7194;

if(cljs.core.truth_(and__3546__auto____7195))
{var and__3546__auto____7196 = x__3027__auto____7194.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7196))
{return cljs.core.not.call(null,x__3027__auto____7194.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7196;
}
} else
{return and__3546__auto____7195;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3027__auto____7194);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3027__auto____7197 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7198 = x__3027__auto____7197;

if(cljs.core.truth_(and__3546__auto____7198))
{var and__3546__auto____7199 = x__3027__auto____7197.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7199))
{return cljs.core.not.call(null,x__3027__auto____7197.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7199;
}
} else
{return and__3546__auto____7198;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3027__auto____7197);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3027__auto____7200 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7201 = x__3027__auto____7200;

if(cljs.core.truth_(and__3546__auto____7201))
{var and__3546__auto____7202 = x__3027__auto____7200.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7202))
{return cljs.core.not.call(null,x__3027__auto____7200.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7202;
}
} else
{return and__3546__auto____7201;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3027__auto____7200);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7203 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7203.push(key);
}));
return keys__7203;
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
{var x__3027__auto____7204 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7205 = x__3027__auto____7204;

if(cljs.core.truth_(and__3546__auto____7205))
{var and__3546__auto____7206 = x__3027__auto____7204.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7206))
{return cljs.core.not.call(null,x__3027__auto____7204.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7206;
}
} else
{return and__3546__auto____7205;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3027__auto____7204);
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
var and__3546__auto____7207 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7207))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7208 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7208))
{return or__3548__auto____7208;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7207;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7209 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7209))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7209;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7210 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7210))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7210;
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
var and__3546__auto____7211 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7211))
{return (n == n.toFixed());
} else
{return and__3546__auto____7211;
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
if(cljs.core.truth_((function (){var and__3546__auto____7212 = coll;

if(cljs.core.truth_(and__3546__auto____7212))
{var and__3546__auto____7213 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7213))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7213;
}
} else
{return and__3546__auto____7212;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___7218 = (function (x){
return true;
});
var distinct_QMARK___7219 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7220 = (function() { 
var G__7222__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7214 = cljs.core.set([y,x]);
var xs__7215 = more;

while(true){
var x__7216 = cljs.core.first.call(null,xs__7215);
var etc__7217 = cljs.core.next.call(null,xs__7215);

if(cljs.core.truth_(xs__7215))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7214,x__7216)))
{return false;
} else
{{
var G__7223 = cljs.core.conj.call(null,s__7214,x__7216);
var G__7224 = etc__7217;
s__7214 = G__7223;
xs__7215 = G__7224;
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
var G__7222 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7222__delegate.call(this, x, y, more);
};
G__7222.cljs$lang$maxFixedArity = 2;
G__7222.cljs$lang$applyTo = (function (arglist__7225){
var x = cljs.core.first(arglist__7225);
var y = cljs.core.first(cljs.core.next(arglist__7225));
var more = cljs.core.rest(cljs.core.next(arglist__7225));
return G__7222__delegate.call(this, x, y, more);
});
return G__7222;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7218.call(this,x);
case  2 :
return distinct_QMARK___7219.call(this,x,y);
default:
return distinct_QMARK___7220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7220.cljs$lang$applyTo;
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
var r__7226 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7226)))
{return r__7226;
} else
{if(cljs.core.truth_(r__7226))
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
var sort__7228 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7229 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7227 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7227,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7227);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7228.call(this,comp);
case  2 :
return sort__7229.call(this,comp,coll);
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
var sort_by__7231 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7232 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7231.call(this,keyfn,comp);
case  3 :
return sort_by__7232.call(this,keyfn,comp,coll);
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
var reduce__7234 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7235 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7234.call(this,f,val);
case  3 :
return reduce__7235.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7241 = (function (f,coll){
var temp__3695__auto____7237 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7237))
{var s__7238 = temp__3695__auto____7237;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7238),cljs.core.next.call(null,s__7238));
} else
{return f.call(null);
}
});
var seq_reduce__7242 = (function (f,val,coll){
var val__7239 = val;
var coll__7240 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7240))
{{
var G__7244 = f.call(null,val__7239,cljs.core.first.call(null,coll__7240));
var G__7245 = cljs.core.next.call(null,coll__7240);
val__7239 = G__7244;
coll__7240 = G__7245;
continue;
}
} else
{return val__7239;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7241.call(this,f,val);
case  3 :
return seq_reduce__7242.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7246 = null;
var G__7246__7247 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7246__7248 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7246 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7246__7247.call(this,coll,f);
case  3 :
return G__7246__7248.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7246;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7250 = (function (){
return 0;
});
var _PLUS___7251 = (function (x){
return x;
});
var _PLUS___7252 = (function (x,y){
return (x + y);
});
var _PLUS___7253 = (function() { 
var G__7255__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7255 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7255__delegate.call(this, x, y, more);
};
G__7255.cljs$lang$maxFixedArity = 2;
G__7255.cljs$lang$applyTo = (function (arglist__7256){
var x = cljs.core.first(arglist__7256);
var y = cljs.core.first(cljs.core.next(arglist__7256));
var more = cljs.core.rest(cljs.core.next(arglist__7256));
return G__7255__delegate.call(this, x, y, more);
});
return G__7255;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7250.call(this);
case  1 :
return _PLUS___7251.call(this,x);
case  2 :
return _PLUS___7252.call(this,x,y);
default:
return _PLUS___7253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7253.cljs$lang$applyTo;
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
var ___7257 = (function (x){
return (- x);
});
var ___7258 = (function (x,y){
return (x - y);
});
var ___7259 = (function() { 
var G__7261__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7261__delegate.call(this, x, y, more);
};
G__7261.cljs$lang$maxFixedArity = 2;
G__7261.cljs$lang$applyTo = (function (arglist__7262){
var x = cljs.core.first(arglist__7262);
var y = cljs.core.first(cljs.core.next(arglist__7262));
var more = cljs.core.rest(cljs.core.next(arglist__7262));
return G__7261__delegate.call(this, x, y, more);
});
return G__7261;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7257.call(this,x);
case  2 :
return ___7258.call(this,x,y);
default:
return ___7259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7259.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7263 = (function (){
return 1;
});
var _STAR___7264 = (function (x){
return x;
});
var _STAR___7265 = (function (x,y){
return (x * y);
});
var _STAR___7266 = (function() { 
var G__7268__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7268 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7268__delegate.call(this, x, y, more);
};
G__7268.cljs$lang$maxFixedArity = 2;
G__7268.cljs$lang$applyTo = (function (arglist__7269){
var x = cljs.core.first(arglist__7269);
var y = cljs.core.first(cljs.core.next(arglist__7269));
var more = cljs.core.rest(cljs.core.next(arglist__7269));
return G__7268__delegate.call(this, x, y, more);
});
return G__7268;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7263.call(this);
case  1 :
return _STAR___7264.call(this,x);
case  2 :
return _STAR___7265.call(this,x,y);
default:
return _STAR___7266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7266.cljs$lang$applyTo;
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
var _SLASH___7270 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7271 = (function (x,y){
return (x / y);
});
var _SLASH___7272 = (function() { 
var G__7274__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7274 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7274__delegate.call(this, x, y, more);
};
G__7274.cljs$lang$maxFixedArity = 2;
G__7274.cljs$lang$applyTo = (function (arglist__7275){
var x = cljs.core.first(arglist__7275);
var y = cljs.core.first(cljs.core.next(arglist__7275));
var more = cljs.core.rest(cljs.core.next(arglist__7275));
return G__7274__delegate.call(this, x, y, more);
});
return G__7274;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7270.call(this,x);
case  2 :
return _SLASH___7271.call(this,x,y);
default:
return _SLASH___7272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7272.cljs$lang$applyTo;
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
var _LT___7276 = (function (x){
return true;
});
var _LT___7277 = (function (x,y){
return (x < y);
});
var _LT___7278 = (function() { 
var G__7280__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7281 = y;
var G__7282 = cljs.core.first.call(null,more);
var G__7283 = cljs.core.next.call(null,more);
x = G__7281;
y = G__7282;
more = G__7283;
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
var G__7280 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7280__delegate.call(this, x, y, more);
};
G__7280.cljs$lang$maxFixedArity = 2;
G__7280.cljs$lang$applyTo = (function (arglist__7284){
var x = cljs.core.first(arglist__7284);
var y = cljs.core.first(cljs.core.next(arglist__7284));
var more = cljs.core.rest(cljs.core.next(arglist__7284));
return G__7280__delegate.call(this, x, y, more);
});
return G__7280;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7276.call(this,x);
case  2 :
return _LT___7277.call(this,x,y);
default:
return _LT___7278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7278.cljs$lang$applyTo;
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
var _LT__EQ___7285 = (function (x){
return true;
});
var _LT__EQ___7286 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7287 = (function() { 
var G__7289__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7290 = y;
var G__7291 = cljs.core.first.call(null,more);
var G__7292 = cljs.core.next.call(null,more);
x = G__7290;
y = G__7291;
more = G__7292;
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
var G__7289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7289__delegate.call(this, x, y, more);
};
G__7289.cljs$lang$maxFixedArity = 2;
G__7289.cljs$lang$applyTo = (function (arglist__7293){
var x = cljs.core.first(arglist__7293);
var y = cljs.core.first(cljs.core.next(arglist__7293));
var more = cljs.core.rest(cljs.core.next(arglist__7293));
return G__7289__delegate.call(this, x, y, more);
});
return G__7289;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7285.call(this,x);
case  2 :
return _LT__EQ___7286.call(this,x,y);
default:
return _LT__EQ___7287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7287.cljs$lang$applyTo;
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
var _GT___7294 = (function (x){
return true;
});
var _GT___7295 = (function (x,y){
return (x > y);
});
var _GT___7296 = (function() { 
var G__7298__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7299 = y;
var G__7300 = cljs.core.first.call(null,more);
var G__7301 = cljs.core.next.call(null,more);
x = G__7299;
y = G__7300;
more = G__7301;
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
var G__7298 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7298__delegate.call(this, x, y, more);
};
G__7298.cljs$lang$maxFixedArity = 2;
G__7298.cljs$lang$applyTo = (function (arglist__7302){
var x = cljs.core.first(arglist__7302);
var y = cljs.core.first(cljs.core.next(arglist__7302));
var more = cljs.core.rest(cljs.core.next(arglist__7302));
return G__7298__delegate.call(this, x, y, more);
});
return G__7298;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7294.call(this,x);
case  2 :
return _GT___7295.call(this,x,y);
default:
return _GT___7296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7296.cljs$lang$applyTo;
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
var _GT__EQ___7303 = (function (x){
return true;
});
var _GT__EQ___7304 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7305 = (function() { 
var G__7307__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7308 = y;
var G__7309 = cljs.core.first.call(null,more);
var G__7310 = cljs.core.next.call(null,more);
x = G__7308;
y = G__7309;
more = G__7310;
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
var G__7307 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7307__delegate.call(this, x, y, more);
};
G__7307.cljs$lang$maxFixedArity = 2;
G__7307.cljs$lang$applyTo = (function (arglist__7311){
var x = cljs.core.first(arglist__7311);
var y = cljs.core.first(cljs.core.next(arglist__7311));
var more = cljs.core.rest(cljs.core.next(arglist__7311));
return G__7307__delegate.call(this, x, y, more);
});
return G__7307;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7303.call(this,x);
case  2 :
return _GT__EQ___7304.call(this,x,y);
default:
return _GT__EQ___7305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7305.cljs$lang$applyTo;
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
var max__7312 = (function (x){
return x;
});
var max__7313 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7314 = (function() { 
var G__7316__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7316__delegate.call(this, x, y, more);
};
G__7316.cljs$lang$maxFixedArity = 2;
G__7316.cljs$lang$applyTo = (function (arglist__7317){
var x = cljs.core.first(arglist__7317);
var y = cljs.core.first(cljs.core.next(arglist__7317));
var more = cljs.core.rest(cljs.core.next(arglist__7317));
return G__7316__delegate.call(this, x, y, more);
});
return G__7316;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7312.call(this,x);
case  2 :
return max__7313.call(this,x,y);
default:
return max__7314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7314.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7318 = (function (x){
return x;
});
var min__7319 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7320 = (function() { 
var G__7322__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7322__delegate.call(this, x, y, more);
};
G__7322.cljs$lang$maxFixedArity = 2;
G__7322.cljs$lang$applyTo = (function (arglist__7323){
var x = cljs.core.first(arglist__7323);
var y = cljs.core.first(cljs.core.next(arglist__7323));
var more = cljs.core.rest(cljs.core.next(arglist__7323));
return G__7322__delegate.call(this, x, y, more);
});
return G__7322;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7318.call(this,x);
case  2 :
return min__7319.call(this,x,y);
default:
return min__7320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7320.cljs$lang$applyTo;
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
var rem__7324 = (n % d);

return cljs.core.fix.call(null,((n - rem__7324) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7325 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7325));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7326 = (function (){
return Math.random.call(null);
});
var rand__7327 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7326.call(this);
case  1 :
return rand__7327.call(this,n);
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
var _EQ__EQ___7329 = (function (x){
return true;
});
var _EQ__EQ___7330 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7331 = (function() { 
var G__7333__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7334 = y;
var G__7335 = cljs.core.first.call(null,more);
var G__7336 = cljs.core.next.call(null,more);
x = G__7334;
y = G__7335;
more = G__7336;
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
var G__7333 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7333__delegate.call(this, x, y, more);
};
G__7333.cljs$lang$maxFixedArity = 2;
G__7333.cljs$lang$applyTo = (function (arglist__7337){
var x = cljs.core.first(arglist__7337);
var y = cljs.core.first(cljs.core.next(arglist__7337));
var more = cljs.core.rest(cljs.core.next(arglist__7337));
return G__7333__delegate.call(this, x, y, more);
});
return G__7333;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7329.call(this,x);
case  2 :
return _EQ__EQ___7330.call(this,x,y);
default:
return _EQ__EQ___7331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7331.cljs$lang$applyTo;
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
var n__7338 = n;
var xs__7339 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = xs__7339;

if(cljs.core.truth_(and__3546__auto____7340))
{return (n__7338 > 0);
} else
{return and__3546__auto____7340;
}
})()))
{{
var G__7341 = (n__7338 - 1);
var G__7342 = cljs.core.next.call(null,xs__7339);
n__7338 = G__7341;
xs__7339 = G__7342;
continue;
}
} else
{return xs__7339;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7347 = null;
var G__7347__7348 = (function (coll,n){
var temp__3695__auto____7343 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7343))
{var xs__7344 = temp__3695__auto____7343;

return cljs.core.first.call(null,xs__7344);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7347__7349 = (function (coll,n,not_found){
var temp__3695__auto____7345 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7345))
{var xs__7346 = temp__3695__auto____7345;

return cljs.core.first.call(null,xs__7346);
} else
{return not_found;
}
});
G__7347 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7347__7348.call(this,coll,n);
case  3 :
return G__7347__7349.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7347;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7351 = (function (){
return "";
});
var str_STAR___7352 = (function (x){
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
var str_STAR___7353 = (function() { 
var G__7355__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7356 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7357 = cljs.core.next.call(null,more);
sb = G__7356;
more = G__7357;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7355 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7355__delegate.call(this, x, ys);
};
G__7355.cljs$lang$maxFixedArity = 1;
G__7355.cljs$lang$applyTo = (function (arglist__7358){
var x = cljs.core.first(arglist__7358);
var ys = cljs.core.rest(arglist__7358);
return G__7355__delegate.call(this, x, ys);
});
return G__7355;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7351.call(this);
case  1 :
return str_STAR___7352.call(this,x);
default:
return str_STAR___7353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7353.cljs$lang$applyTo;
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
var str__7359 = (function (){
return "";
});
var str__7360 = (function (x){
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
var str__7361 = (function() { 
var G__7363__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__7363 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7363__delegate.call(this, x, ys);
};
G__7363.cljs$lang$maxFixedArity = 1;
G__7363.cljs$lang$applyTo = (function (arglist__7364){
var x = cljs.core.first(arglist__7364);
var ys = cljs.core.rest(arglist__7364);
return G__7363__delegate.call(this, x, ys);
});
return G__7363;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7359.call(this);
case  1 :
return str__7360.call(this,x);
default:
return str__7361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7361.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7365 = (function (s,start){
return s.substring(start);
});
var subs__7366 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7365.call(this,s,start);
case  3 :
return subs__7366.call(this,s,start,end);
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
var symbol__7368 = (function (name){
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
var symbol__7369 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7368.call(this,ns);
case  2 :
return symbol__7369.call(this,ns,name);
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
var keyword__7371 = (function (name){
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
var keyword__7372 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7371.call(this,ns);
case  2 :
return keyword__7372.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7374 = cljs.core.seq.call(null,x);
var ys__7375 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7374 === null)))
{return (ys__7375 === null);
} else
{if(cljs.core.truth_((ys__7375 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7374),cljs.core.first.call(null,ys__7375))))
{{
var G__7376 = cljs.core.next.call(null,xs__7374);
var G__7377 = cljs.core.next.call(null,ys__7375);
xs__7374 = G__7376;
ys__7375 = G__7377;
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
return cljs.core.reduce.call(null,(function (p1__7378_SHARP_,p2__7379_SHARP_){
return cljs.core.hash_combine.call(null,p1__7378_SHARP_,cljs.core.hash.call(null,p2__7379_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7380__7381 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7380__7381))
{var G__7383__7385 = cljs.core.first.call(null,G__7380__7381);
var vec__7384__7386 = G__7383__7385;
var key_name__7387 = cljs.core.nth.call(null,vec__7384__7386,0,null);
var f__7388 = cljs.core.nth.call(null,vec__7384__7386,1,null);
var G__7380__7389 = G__7380__7381;

var G__7383__7390 = G__7383__7385;
var G__7380__7391 = G__7380__7389;

while(true){
var vec__7392__7393 = G__7383__7390;
var key_name__7394 = cljs.core.nth.call(null,vec__7392__7393,0,null);
var f__7395 = cljs.core.nth.call(null,vec__7392__7393,1,null);
var G__7380__7396 = G__7380__7391;

var str_name__7397 = cljs.core.name.call(null,key_name__7394);

obj[str_name__7397] = f__7395;
var temp__3698__auto____7398 = cljs.core.next.call(null,G__7380__7396);

if(cljs.core.truth_(temp__3698__auto____7398))
{var G__7380__7399 = temp__3698__auto____7398;

{
var G__7400 = cljs.core.first.call(null,G__7380__7399);
var G__7401 = G__7380__7399;
G__7383__7390 = G__7400;
G__7380__7391 = G__7401;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7403 = this;
return (new cljs.core.List(this__7403.meta,o,coll,(this__7403.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7404 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7405 = this;
return this__7405.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7406 = this;
return this__7406.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7407 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7408 = this;
return this__7408.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7409 = this;
return this__7409.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7411 = this;
return (new cljs.core.List(meta,this__7411.first,this__7411.rest,this__7411.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7412 = this;
return this__7412.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7413 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7414 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7415 = this;
return (new cljs.core.List(this__7415.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7416 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7417 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7418 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7419 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7420 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7421 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7422 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7423 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7424 = this;
return this__7424.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7425 = this;
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
list.cljs$lang$applyTo = (function (arglist__7426){
var items = cljs.core.seq( arglist__7426 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7427 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7428 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7430 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7430.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7431 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7432 = this;
return this__7432.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7433 = this;
if(cljs.core.truth_((this__7433.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7433.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7434 = this;
return this__7434.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7435 = this;
return (new cljs.core.Cons(meta,this__7435.first,this__7435.rest));
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
var G__7436 = null;
var G__7436__7437 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7436__7438 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7436 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7436__7437.call(this,string,f);
case  3 :
return G__7436__7438.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7436;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7440 = null;
var G__7440__7441 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7440__7442 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7440 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7440__7441.call(this,string,k);
case  3 :
return G__7440__7442.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7440;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7444 = null;
var G__7444__7445 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7444__7446 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7444 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7444__7445.call(this,string,n);
case  3 :
return G__7444__7446.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7444;
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
var G__7454 = null;
var G__7454__7455 = (function (tsym7448,coll){
var tsym7448__7450 = this;

var this$__7451 = tsym7448__7450;

return cljs.core.get.call(null,coll,this$__7451.toString());
});
var G__7454__7456 = (function (tsym7449,coll,not_found){
var tsym7449__7452 = this;

var this$__7453 = tsym7449__7452;

return cljs.core.get.call(null,coll,this$__7453.toString(),not_found);
});
G__7454 = function(tsym7449,coll,not_found){
switch(arguments.length){
case  2 :
return G__7454__7455.call(this,tsym7449,coll);
case  3 :
return G__7454__7456.call(this,tsym7449,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7454;
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
var x__7458 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7458;
} else
{lazy_seq.x = x__7458.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7459 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7460 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7461 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7462 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7462.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7463 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7464 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7465 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7466 = this;
return this__7466.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7467 = this;
return (new cljs.core.LazySeq(meta,this__7467.realized,this__7467.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7468 = cljs.core.array.call(null);

var s__7469 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7469)))
{ary__7468.push(cljs.core.first.call(null,s__7469));
{
var G__7470 = cljs.core.next.call(null,s__7469);
s__7469 = G__7470;
continue;
}
} else
{return ary__7468;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7471 = s;
var i__7472 = n;
var sum__7473 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7474 = (i__7472 > 0);

if(cljs.core.truth_(and__3546__auto____7474))
{return cljs.core.seq.call(null,s__7471);
} else
{return and__3546__auto____7474;
}
})()))
{{
var G__7475 = cljs.core.next.call(null,s__7471);
var G__7476 = (i__7472 - 1);
var G__7477 = (sum__7473 + 1);
s__7471 = G__7475;
i__7472 = G__7476;
sum__7473 = G__7477;
continue;
}
} else
{return sum__7473;
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
var concat__7481 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7482 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7483 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7478 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7478))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7478),concat.call(null,cljs.core.rest.call(null,s__7478),y));
} else
{return y;
}
})));
});
var concat__7484 = (function() { 
var G__7486__delegate = function (x,y,zs){
var cat__7480 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7479 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7479))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7479),cat.call(null,cljs.core.rest.call(null,xys__7479),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7480.call(null,concat.call(null,x,y),zs);
};
var G__7486 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7486__delegate.call(this, x, y, zs);
};
G__7486.cljs$lang$maxFixedArity = 2;
G__7486.cljs$lang$applyTo = (function (arglist__7487){
var x = cljs.core.first(arglist__7487);
var y = cljs.core.first(cljs.core.next(arglist__7487));
var zs = cljs.core.rest(cljs.core.next(arglist__7487));
return G__7486__delegate.call(this, x, y, zs);
});
return G__7486;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7481.call(this);
case  1 :
return concat__7482.call(this,x);
case  2 :
return concat__7483.call(this,x,y);
default:
return concat__7484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7484.cljs$lang$applyTo;
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
var list_STAR___7488 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7489 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7490 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7491 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7492 = (function() { 
var G__7494__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7494 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7494__delegate.call(this, a, b, c, d, more);
};
G__7494.cljs$lang$maxFixedArity = 4;
G__7494.cljs$lang$applyTo = (function (arglist__7495){
var a = cljs.core.first(arglist__7495);
var b = cljs.core.first(cljs.core.next(arglist__7495));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7495)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7495))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7495))));
return G__7494__delegate.call(this, a, b, c, d, more);
});
return G__7494;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7488.call(this,a);
case  2 :
return list_STAR___7489.call(this,a,b);
case  3 :
return list_STAR___7490.call(this,a,b,c);
case  4 :
return list_STAR___7491.call(this,a,b,c,d);
default:
return list_STAR___7492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7492.cljs$lang$applyTo;
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
var apply__7505 = (function (f,args){
var fixed_arity__7496 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7496 + 1)) <= fixed_arity__7496)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7506 = (function (f,x,args){
var arglist__7497 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7498 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7497,fixed_arity__7498) <= fixed_arity__7498)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7497));
} else
{return f.cljs$lang$applyTo(arglist__7497);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7497));
}
});
var apply__7507 = (function (f,x,y,args){
var arglist__7499 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7500 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7499,fixed_arity__7500) <= fixed_arity__7500)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7499));
} else
{return f.cljs$lang$applyTo(arglist__7499);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7499));
}
});
var apply__7508 = (function (f,x,y,z,args){
var arglist__7501 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7502 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7501,fixed_arity__7502) <= fixed_arity__7502)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7501));
} else
{return f.cljs$lang$applyTo(arglist__7501);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7501));
}
});
var apply__7509 = (function() { 
var G__7511__delegate = function (f,a,b,c,d,args){
var arglist__7503 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7504 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7503,fixed_arity__7504) <= fixed_arity__7504)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7503));
} else
{return f.cljs$lang$applyTo(arglist__7503);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7503));
}
};
var G__7511 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7511__delegate.call(this, f, a, b, c, d, args);
};
G__7511.cljs$lang$maxFixedArity = 5;
G__7511.cljs$lang$applyTo = (function (arglist__7512){
var f = cljs.core.first(arglist__7512);
var a = cljs.core.first(cljs.core.next(arglist__7512));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7512)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7512))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7512)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7512)))));
return G__7511__delegate.call(this, f, a, b, c, d, args);
});
return G__7511;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7505.call(this,f,a);
case  3 :
return apply__7506.call(this,f,a,b);
case  4 :
return apply__7507.call(this,f,a,b,c);
case  5 :
return apply__7508.call(this,f,a,b,c,d);
default:
return apply__7509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7509.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7513){
var obj = cljs.core.first(arglist__7513);
var f = cljs.core.first(cljs.core.next(arglist__7513));
var args = cljs.core.rest(cljs.core.next(arglist__7513));
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
var not_EQ___7514 = (function (x){
return false;
});
var not_EQ___7515 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7516 = (function() { 
var G__7518__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7518 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7518__delegate.call(this, x, y, more);
};
G__7518.cljs$lang$maxFixedArity = 2;
G__7518.cljs$lang$applyTo = (function (arglist__7519){
var x = cljs.core.first(arglist__7519);
var y = cljs.core.first(cljs.core.next(arglist__7519));
var more = cljs.core.rest(cljs.core.next(arglist__7519));
return G__7518__delegate.call(this, x, y, more);
});
return G__7518;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7514.call(this,x);
case  2 :
return not_EQ___7515.call(this,x,y);
default:
return not_EQ___7516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7516.cljs$lang$applyTo;
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
var G__7520 = pred;
var G__7521 = cljs.core.next.call(null,coll);
pred = G__7520;
coll = G__7521;
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
{var or__3548__auto____7522 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{{
var G__7523 = pred;
var G__7524 = cljs.core.next.call(null,coll);
pred = G__7523;
coll = G__7524;
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
var G__7525 = null;
var G__7525__7526 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7525__7527 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7525__7528 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7525__7529 = (function() { 
var G__7531__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7531 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7531__delegate.call(this, x, y, zs);
};
G__7531.cljs$lang$maxFixedArity = 2;
G__7531.cljs$lang$applyTo = (function (arglist__7532){
var x = cljs.core.first(arglist__7532);
var y = cljs.core.first(cljs.core.next(arglist__7532));
var zs = cljs.core.rest(cljs.core.next(arglist__7532));
return G__7531__delegate.call(this, x, y, zs);
});
return G__7531;
})()
;
G__7525 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7525__7526.call(this);
case  1 :
return G__7525__7527.call(this,x);
case  2 :
return G__7525__7528.call(this,x,y);
default:
return G__7525__7529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7525.cljs$lang$maxFixedArity = 2;
G__7525.cljs$lang$applyTo = G__7525__7529.cljs$lang$applyTo;
return G__7525;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7533__delegate = function (args){
return x;
};
var G__7533 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7533__delegate.call(this, args);
};
G__7533.cljs$lang$maxFixedArity = 0;
G__7533.cljs$lang$applyTo = (function (arglist__7534){
var args = cljs.core.seq( arglist__7534 );;
return G__7533__delegate.call(this, args);
});
return G__7533;
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
var comp__7538 = (function (){
return cljs.core.identity;
});
var comp__7539 = (function (f){
return f;
});
var comp__7540 = (function (f,g){
return (function() {
var G__7544 = null;
var G__7544__7545 = (function (){
return f.call(null,g.call(null));
});
var G__7544__7546 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7544__7547 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7544__7548 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7544__7549 = (function() { 
var G__7551__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7551__delegate.call(this, x, y, z, args);
};
G__7551.cljs$lang$maxFixedArity = 3;
G__7551.cljs$lang$applyTo = (function (arglist__7552){
var x = cljs.core.first(arglist__7552);
var y = cljs.core.first(cljs.core.next(arglist__7552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7552)));
return G__7551__delegate.call(this, x, y, z, args);
});
return G__7551;
})()
;
G__7544 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7544__7545.call(this);
case  1 :
return G__7544__7546.call(this,x);
case  2 :
return G__7544__7547.call(this,x,y);
case  3 :
return G__7544__7548.call(this,x,y,z);
default:
return G__7544__7549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7544.cljs$lang$maxFixedArity = 3;
G__7544.cljs$lang$applyTo = G__7544__7549.cljs$lang$applyTo;
return G__7544;
})()
});
var comp__7541 = (function (f,g,h){
return (function() {
var G__7553 = null;
var G__7553__7554 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7553__7555 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7553__7556 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7553__7557 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7553__7558 = (function() { 
var G__7560__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7560 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7560__delegate.call(this, x, y, z, args);
};
G__7560.cljs$lang$maxFixedArity = 3;
G__7560.cljs$lang$applyTo = (function (arglist__7561){
var x = cljs.core.first(arglist__7561);
var y = cljs.core.first(cljs.core.next(arglist__7561));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7561)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7561)));
return G__7560__delegate.call(this, x, y, z, args);
});
return G__7560;
})()
;
G__7553 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7553__7554.call(this);
case  1 :
return G__7553__7555.call(this,x);
case  2 :
return G__7553__7556.call(this,x,y);
case  3 :
return G__7553__7557.call(this,x,y,z);
default:
return G__7553__7558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7553.cljs$lang$maxFixedArity = 3;
G__7553.cljs$lang$applyTo = G__7553__7558.cljs$lang$applyTo;
return G__7553;
})()
});
var comp__7542 = (function() { 
var G__7562__delegate = function (f1,f2,f3,fs){
var fs__7535 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7563__delegate = function (args){
var ret__7536 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7535),args);
var fs__7537 = cljs.core.next.call(null,fs__7535);

while(true){
if(cljs.core.truth_(fs__7537))
{{
var G__7564 = cljs.core.first.call(null,fs__7537).call(null,ret__7536);
var G__7565 = cljs.core.next.call(null,fs__7537);
ret__7536 = G__7564;
fs__7537 = G__7565;
continue;
}
} else
{return ret__7536;
}
break;
}
};
var G__7563 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7563__delegate.call(this, args);
};
G__7563.cljs$lang$maxFixedArity = 0;
G__7563.cljs$lang$applyTo = (function (arglist__7566){
var args = cljs.core.seq( arglist__7566 );;
return G__7563__delegate.call(this, args);
});
return G__7563;
})()
;
};
var G__7562 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7562__delegate.call(this, f1, f2, f3, fs);
};
G__7562.cljs$lang$maxFixedArity = 3;
G__7562.cljs$lang$applyTo = (function (arglist__7567){
var f1 = cljs.core.first(arglist__7567);
var f2 = cljs.core.first(cljs.core.next(arglist__7567));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7567)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7567)));
return G__7562__delegate.call(this, f1, f2, f3, fs);
});
return G__7562;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7538.call(this);
case  1 :
return comp__7539.call(this,f1);
case  2 :
return comp__7540.call(this,f1,f2);
case  3 :
return comp__7541.call(this,f1,f2,f3);
default:
return comp__7542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7542.cljs$lang$applyTo;
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
var partial__7568 = (function (f,arg1){
return (function() { 
var G__7573__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7573 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7573__delegate.call(this, args);
};
G__7573.cljs$lang$maxFixedArity = 0;
G__7573.cljs$lang$applyTo = (function (arglist__7574){
var args = cljs.core.seq( arglist__7574 );;
return G__7573__delegate.call(this, args);
});
return G__7573;
})()
;
});
var partial__7569 = (function (f,arg1,arg2){
return (function() { 
var G__7575__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7575 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7575__delegate.call(this, args);
};
G__7575.cljs$lang$maxFixedArity = 0;
G__7575.cljs$lang$applyTo = (function (arglist__7576){
var args = cljs.core.seq( arglist__7576 );;
return G__7575__delegate.call(this, args);
});
return G__7575;
})()
;
});
var partial__7570 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7577__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7577 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7577__delegate.call(this, args);
};
G__7577.cljs$lang$maxFixedArity = 0;
G__7577.cljs$lang$applyTo = (function (arglist__7578){
var args = cljs.core.seq( arglist__7578 );;
return G__7577__delegate.call(this, args);
});
return G__7577;
})()
;
});
var partial__7571 = (function() { 
var G__7579__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7580__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7580 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7580__delegate.call(this, args);
};
G__7580.cljs$lang$maxFixedArity = 0;
G__7580.cljs$lang$applyTo = (function (arglist__7581){
var args = cljs.core.seq( arglist__7581 );;
return G__7580__delegate.call(this, args);
});
return G__7580;
})()
;
};
var G__7579 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7579__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7579.cljs$lang$maxFixedArity = 4;
G__7579.cljs$lang$applyTo = (function (arglist__7582){
var f = cljs.core.first(arglist__7582);
var arg1 = cljs.core.first(cljs.core.next(arglist__7582));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7582)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7582))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7582))));
return G__7579__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7579;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7568.call(this,f,arg1);
case  3 :
return partial__7569.call(this,f,arg1,arg2);
case  4 :
return partial__7570.call(this,f,arg1,arg2,arg3);
default:
return partial__7571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7571.cljs$lang$applyTo;
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
var fnil__7583 = (function (f,x){
return (function() {
var G__7587 = null;
var G__7587__7588 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7587__7589 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7587__7590 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7587__7591 = (function() { 
var G__7593__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7593 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7593__delegate.call(this, a, b, c, ds);
};
G__7593.cljs$lang$maxFixedArity = 3;
G__7593.cljs$lang$applyTo = (function (arglist__7594){
var a = cljs.core.first(arglist__7594);
var b = cljs.core.first(cljs.core.next(arglist__7594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7594)));
return G__7593__delegate.call(this, a, b, c, ds);
});
return G__7593;
})()
;
G__7587 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7587__7588.call(this,a);
case  2 :
return G__7587__7589.call(this,a,b);
case  3 :
return G__7587__7590.call(this,a,b,c);
default:
return G__7587__7591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7587.cljs$lang$maxFixedArity = 3;
G__7587.cljs$lang$applyTo = G__7587__7591.cljs$lang$applyTo;
return G__7587;
})()
});
var fnil__7584 = (function (f,x,y){
return (function() {
var G__7595 = null;
var G__7595__7596 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7595__7597 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7595__7598 = (function() { 
var G__7600__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7600 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7600__delegate.call(this, a, b, c, ds);
};
G__7600.cljs$lang$maxFixedArity = 3;
G__7600.cljs$lang$applyTo = (function (arglist__7601){
var a = cljs.core.first(arglist__7601);
var b = cljs.core.first(cljs.core.next(arglist__7601));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7601)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7601)));
return G__7600__delegate.call(this, a, b, c, ds);
});
return G__7600;
})()
;
G__7595 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7595__7596.call(this,a,b);
case  3 :
return G__7595__7597.call(this,a,b,c);
default:
return G__7595__7598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7595.cljs$lang$maxFixedArity = 3;
G__7595.cljs$lang$applyTo = G__7595__7598.cljs$lang$applyTo;
return G__7595;
})()
});
var fnil__7585 = (function (f,x,y,z){
return (function() {
var G__7602 = null;
var G__7602__7603 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7602__7604 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7602__7605 = (function() { 
var G__7607__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7607 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7607__delegate.call(this, a, b, c, ds);
};
G__7607.cljs$lang$maxFixedArity = 3;
G__7607.cljs$lang$applyTo = (function (arglist__7608){
var a = cljs.core.first(arglist__7608);
var b = cljs.core.first(cljs.core.next(arglist__7608));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7608)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7608)));
return G__7607__delegate.call(this, a, b, c, ds);
});
return G__7607;
})()
;
G__7602 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7602__7603.call(this,a,b);
case  3 :
return G__7602__7604.call(this,a,b,c);
default:
return G__7602__7605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7602.cljs$lang$maxFixedArity = 3;
G__7602.cljs$lang$applyTo = G__7602__7605.cljs$lang$applyTo;
return G__7602;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7583.call(this,f,x);
case  3 :
return fnil__7584.call(this,f,x,y);
case  4 :
return fnil__7585.call(this,f,x,y,z);
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
var mapi__7611 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7609 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7609))
{var s__7610 = temp__3698__auto____7609;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7610)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7610)));
} else
{return null;
}
})));
});

return mapi__7611.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7612 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7612))
{var s__7613 = temp__3698__auto____7612;

var x__7614 = f.call(null,cljs.core.first.call(null,s__7613));

if(cljs.core.truth_((x__7614 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7613));
} else
{return cljs.core.cons.call(null,x__7614,keep.call(null,f,cljs.core.rest.call(null,s__7613)));
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
var keepi__7624 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7621 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7621))
{var s__7622 = temp__3698__auto____7621;

var x__7623 = f.call(null,idx,cljs.core.first.call(null,s__7622));

if(cljs.core.truth_((x__7623 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7622));
} else
{return cljs.core.cons.call(null,x__7623,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7622)));
}
} else
{return null;
}
})));
});

return keepi__7624.call(null,0,coll);
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
var every_pred__7669 = (function (p){
return (function() {
var ep1 = null;
var ep1__7674 = (function (){
return true;
});
var ep1__7675 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7676 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7631 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7631))
{return p.call(null,y);
} else
{return and__3546__auto____7631;
}
})());
});
var ep1__7677 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7632 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7632))
{var and__3546__auto____7633 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7633))
{return p.call(null,z);
} else
{return and__3546__auto____7633;
}
} else
{return and__3546__auto____7632;
}
})());
});
var ep1__7678 = (function() { 
var G__7680__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7634 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7634))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7634;
}
})());
};
var G__7680 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7680__delegate.call(this, x, y, z, args);
};
G__7680.cljs$lang$maxFixedArity = 3;
G__7680.cljs$lang$applyTo = (function (arglist__7681){
var x = cljs.core.first(arglist__7681);
var y = cljs.core.first(cljs.core.next(arglist__7681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7681)));
return G__7680__delegate.call(this, x, y, z, args);
});
return G__7680;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7674.call(this);
case  1 :
return ep1__7675.call(this,x);
case  2 :
return ep1__7676.call(this,x,y);
case  3 :
return ep1__7677.call(this,x,y,z);
default:
return ep1__7678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7678.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7670 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7682 = (function (){
return true;
});
var ep2__7683 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7635 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7635))
{return p2.call(null,x);
} else
{return and__3546__auto____7635;
}
})());
});
var ep2__7684 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7636 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7636))
{var and__3546__auto____7637 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7637))
{var and__3546__auto____7638 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7638))
{return p2.call(null,y);
} else
{return and__3546__auto____7638;
}
} else
{return and__3546__auto____7637;
}
} else
{return and__3546__auto____7636;
}
})());
});
var ep2__7685 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7639 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7639))
{var and__3546__auto____7640 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7640))
{var and__3546__auto____7641 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7641))
{var and__3546__auto____7642 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7642))
{var and__3546__auto____7643 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7643))
{return p2.call(null,z);
} else
{return and__3546__auto____7643;
}
} else
{return and__3546__auto____7642;
}
} else
{return and__3546__auto____7641;
}
} else
{return and__3546__auto____7640;
}
} else
{return and__3546__auto____7639;
}
})());
});
var ep2__7686 = (function() { 
var G__7688__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7644 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7644))
{return cljs.core.every_QMARK_.call(null,(function (p1__7615_SHARP_){
var and__3546__auto____7645 = p1.call(null,p1__7615_SHARP_);

if(cljs.core.truth_(and__3546__auto____7645))
{return p2.call(null,p1__7615_SHARP_);
} else
{return and__3546__auto____7645;
}
}),args);
} else
{return and__3546__auto____7644;
}
})());
};
var G__7688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7688__delegate.call(this, x, y, z, args);
};
G__7688.cljs$lang$maxFixedArity = 3;
G__7688.cljs$lang$applyTo = (function (arglist__7689){
var x = cljs.core.first(arglist__7689);
var y = cljs.core.first(cljs.core.next(arglist__7689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7689)));
return G__7688__delegate.call(this, x, y, z, args);
});
return G__7688;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7682.call(this);
case  1 :
return ep2__7683.call(this,x);
case  2 :
return ep2__7684.call(this,x,y);
case  3 :
return ep2__7685.call(this,x,y,z);
default:
return ep2__7686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7686.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7671 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7690 = (function (){
return true;
});
var ep3__7691 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7646 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7646))
{var and__3546__auto____7647 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7647))
{return p3.call(null,x);
} else
{return and__3546__auto____7647;
}
} else
{return and__3546__auto____7646;
}
})());
});
var ep3__7692 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7648 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7648))
{var and__3546__auto____7649 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7649))
{var and__3546__auto____7650 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7650))
{var and__3546__auto____7651 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7651))
{var and__3546__auto____7652 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7652))
{return p3.call(null,y);
} else
{return and__3546__auto____7652;
}
} else
{return and__3546__auto____7651;
}
} else
{return and__3546__auto____7650;
}
} else
{return and__3546__auto____7649;
}
} else
{return and__3546__auto____7648;
}
})());
});
var ep3__7693 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7653 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7653))
{var and__3546__auto____7654 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7654))
{var and__3546__auto____7655 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7655))
{var and__3546__auto____7656 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7656))
{var and__3546__auto____7657 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7657))
{var and__3546__auto____7658 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7658))
{var and__3546__auto____7659 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7659))
{var and__3546__auto____7660 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7660))
{return p3.call(null,z);
} else
{return and__3546__auto____7660;
}
} else
{return and__3546__auto____7659;
}
} else
{return and__3546__auto____7658;
}
} else
{return and__3546__auto____7657;
}
} else
{return and__3546__auto____7656;
}
} else
{return and__3546__auto____7655;
}
} else
{return and__3546__auto____7654;
}
} else
{return and__3546__auto____7653;
}
})());
});
var ep3__7694 = (function() { 
var G__7696__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7661 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7661))
{return cljs.core.every_QMARK_.call(null,(function (p1__7616_SHARP_){
var and__3546__auto____7662 = p1.call(null,p1__7616_SHARP_);

if(cljs.core.truth_(and__3546__auto____7662))
{var and__3546__auto____7663 = p2.call(null,p1__7616_SHARP_);

if(cljs.core.truth_(and__3546__auto____7663))
{return p3.call(null,p1__7616_SHARP_);
} else
{return and__3546__auto____7663;
}
} else
{return and__3546__auto____7662;
}
}),args);
} else
{return and__3546__auto____7661;
}
})());
};
var G__7696 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7696__delegate.call(this, x, y, z, args);
};
G__7696.cljs$lang$maxFixedArity = 3;
G__7696.cljs$lang$applyTo = (function (arglist__7697){
var x = cljs.core.first(arglist__7697);
var y = cljs.core.first(cljs.core.next(arglist__7697));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7697)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7697)));
return G__7696__delegate.call(this, x, y, z, args);
});
return G__7696;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7690.call(this);
case  1 :
return ep3__7691.call(this,x);
case  2 :
return ep3__7692.call(this,x,y);
case  3 :
return ep3__7693.call(this,x,y,z);
default:
return ep3__7694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7694.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7672 = (function() { 
var G__7698__delegate = function (p1,p2,p3,ps){
var ps__7664 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7699 = (function (){
return true;
});
var epn__7700 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7617_SHARP_){
return p1__7617_SHARP_.call(null,x);
}),ps__7664);
});
var epn__7701 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7618_SHARP_){
var and__3546__auto____7665 = p1__7618_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7665))
{return p1__7618_SHARP_.call(null,y);
} else
{return and__3546__auto____7665;
}
}),ps__7664);
});
var epn__7702 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7619_SHARP_){
var and__3546__auto____7666 = p1__7619_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7666))
{var and__3546__auto____7667 = p1__7619_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7667))
{return p1__7619_SHARP_.call(null,z);
} else
{return and__3546__auto____7667;
}
} else
{return and__3546__auto____7666;
}
}),ps__7664);
});
var epn__7703 = (function() { 
var G__7705__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7668 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7668))
{return cljs.core.every_QMARK_.call(null,(function (p1__7620_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7620_SHARP_,args);
}),ps__7664);
} else
{return and__3546__auto____7668;
}
})());
};
var G__7705 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7705__delegate.call(this, x, y, z, args);
};
G__7705.cljs$lang$maxFixedArity = 3;
G__7705.cljs$lang$applyTo = (function (arglist__7706){
var x = cljs.core.first(arglist__7706);
var y = cljs.core.first(cljs.core.next(arglist__7706));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7706)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7706)));
return G__7705__delegate.call(this, x, y, z, args);
});
return G__7705;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7699.call(this);
case  1 :
return epn__7700.call(this,x);
case  2 :
return epn__7701.call(this,x,y);
case  3 :
return epn__7702.call(this,x,y,z);
default:
return epn__7703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7703.cljs$lang$applyTo;
return epn;
})()
};
var G__7698 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7698__delegate.call(this, p1, p2, p3, ps);
};
G__7698.cljs$lang$maxFixedArity = 3;
G__7698.cljs$lang$applyTo = (function (arglist__7707){
var p1 = cljs.core.first(arglist__7707);
var p2 = cljs.core.first(cljs.core.next(arglist__7707));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7707)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7707)));
return G__7698__delegate.call(this, p1, p2, p3, ps);
});
return G__7698;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7669.call(this,p1);
case  2 :
return every_pred__7670.call(this,p1,p2);
case  3 :
return every_pred__7671.call(this,p1,p2,p3);
default:
return every_pred__7672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7672.cljs$lang$applyTo;
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
var some_fn__7747 = (function (p){
return (function() {
var sp1 = null;
var sp1__7752 = (function (){
return null;
});
var sp1__7753 = (function (x){
return p.call(null,x);
});
var sp1__7754 = (function (x,y){
var or__3548__auto____7709 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{return p.call(null,y);
}
});
var sp1__7755 = (function (x,y,z){
var or__3548__auto____7710 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{var or__3548__auto____7711 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{return p.call(null,z);
}
}
});
var sp1__7756 = (function() { 
var G__7758__delegate = function (x,y,z,args){
var or__3548__auto____7712 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7758__delegate.call(this, x, y, z, args);
};
G__7758.cljs$lang$maxFixedArity = 3;
G__7758.cljs$lang$applyTo = (function (arglist__7759){
var x = cljs.core.first(arglist__7759);
var y = cljs.core.first(cljs.core.next(arglist__7759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7759)));
return G__7758__delegate.call(this, x, y, z, args);
});
return G__7758;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__7752.call(this);
case  1 :
return sp1__7753.call(this,x);
case  2 :
return sp1__7754.call(this,x,y);
case  3 :
return sp1__7755.call(this,x,y,z);
default:
return sp1__7756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__7756.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__7748 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__7760 = (function (){
return null;
});
var sp2__7761 = (function (x){
var or__3548__auto____7713 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{return p2.call(null,x);
}
});
var sp2__7762 = (function (x,y){
var or__3548__auto____7714 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{var or__3548__auto____7715 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7716 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__7763 = (function (x,y,z){
var or__3548__auto____7717 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{var or__3548__auto____7718 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{var or__3548__auto____7721 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__7764 = (function() { 
var G__7766__delegate = function (x,y,z,args){
var or__3548__auto____7722 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{return cljs.core.some.call(null,(function (p1__7625_SHARP_){
var or__3548__auto____7723 = p1.call(null,p1__7625_SHARP_);

if(cljs.core.truth_(or__3548__auto____7723))
{return or__3548__auto____7723;
} else
{return p2.call(null,p1__7625_SHARP_);
}
}),args);
}
};
var G__7766 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7766__delegate.call(this, x, y, z, args);
};
G__7766.cljs$lang$maxFixedArity = 3;
G__7766.cljs$lang$applyTo = (function (arglist__7767){
var x = cljs.core.first(arglist__7767);
var y = cljs.core.first(cljs.core.next(arglist__7767));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7767)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7767)));
return G__7766__delegate.call(this, x, y, z, args);
});
return G__7766;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__7760.call(this);
case  1 :
return sp2__7761.call(this,x);
case  2 :
return sp2__7762.call(this,x,y);
case  3 :
return sp2__7763.call(this,x,y,z);
default:
return sp2__7764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__7764.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__7749 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__7768 = (function (){
return null;
});
var sp3__7769 = (function (x){
var or__3548__auto____7724 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{var or__3548__auto____7725 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{return p3.call(null,x);
}
}
});
var sp3__7770 = (function (x,y){
var or__3548__auto____7726 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{var or__3548__auto____7727 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7728 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{var or__3548__auto____7729 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__7771 = (function (x,y,z){
var or__3548__auto____7731 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7734 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7735 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{var or__3548__auto____7736 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7737 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{var or__3548__auto____7738 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
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
var sp3__7772 = (function() { 
var G__7774__delegate = function (x,y,z,args){
var or__3548__auto____7739 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{return cljs.core.some.call(null,(function (p1__7626_SHARP_){
var or__3548__auto____7740 = p1.call(null,p1__7626_SHARP_);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
} else
{var or__3548__auto____7741 = p2.call(null,p1__7626_SHARP_);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{return p3.call(null,p1__7626_SHARP_);
}
}
}),args);
}
};
var G__7774 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7774__delegate.call(this, x, y, z, args);
};
G__7774.cljs$lang$maxFixedArity = 3;
G__7774.cljs$lang$applyTo = (function (arglist__7775){
var x = cljs.core.first(arglist__7775);
var y = cljs.core.first(cljs.core.next(arglist__7775));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7775)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7775)));
return G__7774__delegate.call(this, x, y, z, args);
});
return G__7774;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__7768.call(this);
case  1 :
return sp3__7769.call(this,x);
case  2 :
return sp3__7770.call(this,x,y);
case  3 :
return sp3__7771.call(this,x,y,z);
default:
return sp3__7772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__7772.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__7750 = (function() { 
var G__7776__delegate = function (p1,p2,p3,ps){
var ps__7742 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__7777 = (function (){
return null;
});
var spn__7778 = (function (x){
return cljs.core.some.call(null,(function (p1__7627_SHARP_){
return p1__7627_SHARP_.call(null,x);
}),ps__7742);
});
var spn__7779 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7628_SHARP_){
var or__3548__auto____7743 = p1__7628_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{return p1__7628_SHARP_.call(null,y);
}
}),ps__7742);
});
var spn__7780 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7629_SHARP_){
var or__3548__auto____7744 = p1__7629_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{var or__3548__auto____7745 = p1__7629_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{return p1__7629_SHARP_.call(null,z);
}
}
}),ps__7742);
});
var spn__7781 = (function() { 
var G__7783__delegate = function (x,y,z,args){
var or__3548__auto____7746 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{return cljs.core.some.call(null,(function (p1__7630_SHARP_){
return cljs.core.some.call(null,p1__7630_SHARP_,args);
}),ps__7742);
}
};
var G__7783 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7783__delegate.call(this, x, y, z, args);
};
G__7783.cljs$lang$maxFixedArity = 3;
G__7783.cljs$lang$applyTo = (function (arglist__7784){
var x = cljs.core.first(arglist__7784);
var y = cljs.core.first(cljs.core.next(arglist__7784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7784)));
return G__7783__delegate.call(this, x, y, z, args);
});
return G__7783;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__7777.call(this);
case  1 :
return spn__7778.call(this,x);
case  2 :
return spn__7779.call(this,x,y);
case  3 :
return spn__7780.call(this,x,y,z);
default:
return spn__7781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__7781.cljs$lang$applyTo;
return spn;
})()
};
var G__7776 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7776__delegate.call(this, p1, p2, p3, ps);
};
G__7776.cljs$lang$maxFixedArity = 3;
G__7776.cljs$lang$applyTo = (function (arglist__7785){
var p1 = cljs.core.first(arglist__7785);
var p2 = cljs.core.first(cljs.core.next(arglist__7785));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7785)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7785)));
return G__7776__delegate.call(this, p1, p2, p3, ps);
});
return G__7776;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__7747.call(this,p1);
case  2 :
return some_fn__7748.call(this,p1,p2);
case  3 :
return some_fn__7749.call(this,p1,p2,p3);
default:
return some_fn__7750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__7750.cljs$lang$applyTo;
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
var map__7798 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7786 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7786))
{var s__7787 = temp__3698__auto____7786;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7787)),map.call(null,f,cljs.core.rest.call(null,s__7787)));
} else
{return null;
}
})));
});
var map__7799 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7788 = cljs.core.seq.call(null,c1);
var s2__7789 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7790 = s1__7788;

if(cljs.core.truth_(and__3546__auto____7790))
{return s2__7789;
} else
{return and__3546__auto____7790;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7788),cljs.core.first.call(null,s2__7789)),map.call(null,f,cljs.core.rest.call(null,s1__7788),cljs.core.rest.call(null,s2__7789)));
} else
{return null;
}
})));
});
var map__7800 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7791 = cljs.core.seq.call(null,c1);
var s2__7792 = cljs.core.seq.call(null,c2);
var s3__7793 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____7794 = s1__7791;

if(cljs.core.truth_(and__3546__auto____7794))
{var and__3546__auto____7795 = s2__7792;

if(cljs.core.truth_(and__3546__auto____7795))
{return s3__7793;
} else
{return and__3546__auto____7795;
}
} else
{return and__3546__auto____7794;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7791),cljs.core.first.call(null,s2__7792),cljs.core.first.call(null,s3__7793)),map.call(null,f,cljs.core.rest.call(null,s1__7791),cljs.core.rest.call(null,s2__7792),cljs.core.rest.call(null,s3__7793)));
} else
{return null;
}
})));
});
var map__7801 = (function() { 
var G__7803__delegate = function (f,c1,c2,c3,colls){
var step__7797 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7796 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7796)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7796),step.call(null,map.call(null,cljs.core.rest,ss__7796)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7708_SHARP_){
return cljs.core.apply.call(null,f,p1__7708_SHARP_);
}),step__7797.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7803 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7803__delegate.call(this, f, c1, c2, c3, colls);
};
G__7803.cljs$lang$maxFixedArity = 4;
G__7803.cljs$lang$applyTo = (function (arglist__7804){
var f = cljs.core.first(arglist__7804);
var c1 = cljs.core.first(cljs.core.next(arglist__7804));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7804)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7804))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7804))));
return G__7803__delegate.call(this, f, c1, c2, c3, colls);
});
return G__7803;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__7798.call(this,f,c1);
case  3 :
return map__7799.call(this,f,c1,c2);
case  4 :
return map__7800.call(this,f,c1,c2,c3);
default:
return map__7801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__7801.cljs$lang$applyTo;
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
{var temp__3698__auto____7805 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7805))
{var s__7806 = temp__3698__auto____7805;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7806),take.call(null,(n - 1),cljs.core.rest.call(null,s__7806)));
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
var step__7809 = (function (n,coll){
while(true){
var s__7807 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7808 = (n > 0);

if(cljs.core.truth_(and__3546__auto____7808))
{return s__7807;
} else
{return and__3546__auto____7808;
}
})()))
{{
var G__7810 = (n - 1);
var G__7811 = cljs.core.rest.call(null,s__7807);
n = G__7810;
coll = G__7811;
continue;
}
} else
{return s__7807;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7809.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__7812 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__7813 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__7812.call(this,n);
case  2 :
return drop_last__7813.call(this,n,s);
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
var s__7815 = cljs.core.seq.call(null,coll);
var lead__7816 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__7816))
{{
var G__7817 = cljs.core.next.call(null,s__7815);
var G__7818 = cljs.core.next.call(null,lead__7816);
s__7815 = G__7817;
lead__7816 = G__7818;
continue;
}
} else
{return s__7815;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7821 = (function (pred,coll){
while(true){
var s__7819 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7820 = s__7819;

if(cljs.core.truth_(and__3546__auto____7820))
{return pred.call(null,cljs.core.first.call(null,s__7819));
} else
{return and__3546__auto____7820;
}
})()))
{{
var G__7822 = pred;
var G__7823 = cljs.core.rest.call(null,s__7819);
pred = G__7822;
coll = G__7823;
continue;
}
} else
{return s__7819;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7821.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7824 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7824))
{var s__7825 = temp__3698__auto____7824;

return cljs.core.concat.call(null,s__7825,cycle.call(null,s__7825));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__7826 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__7827 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__7826.call(this,n);
case  2 :
return repeat__7827.call(this,n,x);
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
var repeatedly__7829 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__7830 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__7829.call(this,n);
case  2 :
return repeatedly__7830.call(this,n,f);
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
var interleave__7836 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7832 = cljs.core.seq.call(null,c1);
var s2__7833 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7834 = s1__7832;

if(cljs.core.truth_(and__3546__auto____7834))
{return s2__7833;
} else
{return and__3546__auto____7834;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7832),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7833),interleave.call(null,cljs.core.rest.call(null,s1__7832),cljs.core.rest.call(null,s2__7833))));
} else
{return null;
}
})));
});
var interleave__7837 = (function() { 
var G__7839__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7835 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7835)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7835),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7835)));
} else
{return null;
}
})));
};
var G__7839 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7839__delegate.call(this, c1, c2, colls);
};
G__7839.cljs$lang$maxFixedArity = 2;
G__7839.cljs$lang$applyTo = (function (arglist__7840){
var c1 = cljs.core.first(arglist__7840);
var c2 = cljs.core.first(cljs.core.next(arglist__7840));
var colls = cljs.core.rest(cljs.core.next(arglist__7840));
return G__7839__delegate.call(this, c1, c2, colls);
});
return G__7839;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__7836.call(this,c1,c2);
default:
return interleave__7837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__7837.cljs$lang$applyTo;
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
var cat__7843 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7841 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7841))
{var coll__7842 = temp__3695__auto____7841;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7842),cat.call(null,cljs.core.rest.call(null,coll__7842),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__7843.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__7844 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__7845 = (function() { 
var G__7847__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7847 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7847__delegate.call(this, f, coll, colls);
};
G__7847.cljs$lang$maxFixedArity = 2;
G__7847.cljs$lang$applyTo = (function (arglist__7848){
var f = cljs.core.first(arglist__7848);
var coll = cljs.core.first(cljs.core.next(arglist__7848));
var colls = cljs.core.rest(cljs.core.next(arglist__7848));
return G__7847__delegate.call(this, f, coll, colls);
});
return G__7847;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__7844.call(this,f,coll);
default:
return mapcat__7845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__7845.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7849 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7849))
{var s__7850 = temp__3698__auto____7849;

var f__7851 = cljs.core.first.call(null,s__7850);
var r__7852 = cljs.core.rest.call(null,s__7850);

if(cljs.core.truth_(pred.call(null,f__7851)))
{return cljs.core.cons.call(null,f__7851,filter.call(null,pred,r__7852));
} else
{return filter.call(null,pred,r__7852);
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
var walk__7854 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__7854.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7853_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7853_SHARP_));
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
var partition__7861 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__7862 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7855 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7855))
{var s__7856 = temp__3698__auto____7855;

var p__7857 = cljs.core.take.call(null,n,s__7856);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7857))))
{return cljs.core.cons.call(null,p__7857,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7856)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__7863 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7858))
{var s__7859 = temp__3698__auto____7858;

var p__7860 = cljs.core.take.call(null,n,s__7859);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7860))))
{return cljs.core.cons.call(null,p__7860,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7859)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7860,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__7861.call(this,n,step);
case  3 :
return partition__7862.call(this,n,step,pad);
case  4 :
return partition__7863.call(this,n,step,pad,coll);
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
var get_in__7869 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__7870 = (function (m,ks,not_found){
var sentinel__7865 = cljs.core.lookup_sentinel;
var m__7866 = m;
var ks__7867 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__7867))
{var m__7868 = cljs.core.get.call(null,m__7866,cljs.core.first.call(null,ks__7867),sentinel__7865);

if(cljs.core.truth_((sentinel__7865 === m__7868)))
{return not_found;
} else
{{
var G__7872 = sentinel__7865;
var G__7873 = m__7868;
var G__7874 = cljs.core.next.call(null,ks__7867);
sentinel__7865 = G__7872;
m__7866 = G__7873;
ks__7867 = G__7874;
continue;
}
}
} else
{return m__7866;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__7869.call(this,m,ks);
case  3 :
return get_in__7870.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__7875,v){
var vec__7876__7877 = p__7875;
var k__7878 = cljs.core.nth.call(null,vec__7876__7877,0,null);
var ks__7879 = cljs.core.nthnext.call(null,vec__7876__7877,1);

if(cljs.core.truth_(ks__7879))
{return cljs.core.assoc.call(null,m,k__7878,assoc_in.call(null,cljs.core.get.call(null,m,k__7878),ks__7879,v));
} else
{return cljs.core.assoc.call(null,m,k__7878,v);
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
var update_in__delegate = function (m,p__7880,f,args){
var vec__7881__7882 = p__7880;
var k__7883 = cljs.core.nth.call(null,vec__7881__7882,0,null);
var ks__7884 = cljs.core.nthnext.call(null,vec__7881__7882,1);

if(cljs.core.truth_(ks__7884))
{return cljs.core.assoc.call(null,m,k__7883,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__7883),ks__7884,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7883,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__7883),args));
}
};
var update_in = function (m,p__7880,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7880, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7885){
var m = cljs.core.first(arglist__7885);
var p__7880 = cljs.core.first(cljs.core.next(arglist__7885));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7885)));
return update_in__delegate.call(this, m, p__7880, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7886 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7919 = null;
var G__7919__7920 = (function (coll,k){
var this__7887 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7919__7921 = (function (coll,k,not_found){
var this__7888 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7919 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7919__7920.call(this,coll,k);
case  3 :
return G__7919__7921.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7919;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7889 = this;
var new_array__7890 = cljs.core.aclone.call(null,this__7889.array);

(new_array__7890[k] = v);
return (new cljs.core.Vector(this__7889.meta,new_array__7890));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__7923 = null;
var G__7923__7924 = (function (tsym7891,k){
var this__7893 = this;
var tsym7891__7894 = this;

var coll__7895 = tsym7891__7894;

return cljs.core._lookup.call(null,coll__7895,k);
});
var G__7923__7925 = (function (tsym7892,k,not_found){
var this__7896 = this;
var tsym7892__7897 = this;

var coll__7898 = tsym7892__7897;

return cljs.core._lookup.call(null,coll__7898,k,not_found);
});
G__7923 = function(tsym7892,k,not_found){
switch(arguments.length){
case  2 :
return G__7923__7924.call(this,tsym7892,k);
case  3 :
return G__7923__7925.call(this,tsym7892,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7923;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7899 = this;
var new_array__7900 = cljs.core.aclone.call(null,this__7899.array);

new_array__7900.push(o);
return (new cljs.core.Vector(this__7899.meta,new_array__7900));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7927 = null;
var G__7927__7928 = (function (v,f){
var this__7901 = this;
return cljs.core.ci_reduce.call(null,this__7901.array,f);
});
var G__7927__7929 = (function (v,f,start){
var this__7902 = this;
return cljs.core.ci_reduce.call(null,this__7902.array,f,start);
});
G__7927 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__7927__7928.call(this,v,f);
case  3 :
return G__7927__7929.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7927;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7903 = this;
if(cljs.core.truth_((this__7903.array.length > 0)))
{var vector_seq__7904 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__7903.array.length)))
{return cljs.core.cons.call(null,(this__7903.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__7904.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7905 = this;
return this__7905.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7906 = this;
var count__7907 = this__7906.array.length;

if(cljs.core.truth_((count__7907 > 0)))
{return (this__7906.array[(count__7907 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7908 = this;
if(cljs.core.truth_((this__7908.array.length > 0)))
{var new_array__7909 = cljs.core.aclone.call(null,this__7908.array);

new_array__7909.pop();
return (new cljs.core.Vector(this__7908.meta,new_array__7909));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7910 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7911 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7912 = this;
return (new cljs.core.Vector(meta,this__7912.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7913 = this;
return this__7913.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7931 = null;
var G__7931__7932 = (function (coll,n){
var this__7914 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7915 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7915))
{return (n < this__7914.array.length);
} else
{return and__3546__auto____7915;
}
})()))
{return (this__7914.array[n]);
} else
{return null;
}
});
var G__7931__7933 = (function (coll,n,not_found){
var this__7916 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7917 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7917))
{return (n < this__7916.array.length);
} else
{return and__3546__auto____7917;
}
})()))
{return (this__7916.array[n]);
} else
{return not_found;
}
});
G__7931 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7931__7932.call(this,coll,n);
case  3 :
return G__7931__7933.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7931;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7918 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7918.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
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
vector.cljs$lang$applyTo = (function (arglist__7935){
var args = cljs.core.seq( arglist__7935 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7936 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7964 = null;
var G__7964__7965 = (function (coll,k){
var this__7937 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7964__7966 = (function (coll,k,not_found){
var this__7938 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7964 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7964__7965.call(this,coll,k);
case  3 :
return G__7964__7966.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7964;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__7939 = this;
var v_pos__7940 = (this__7939.start + key);

return (new cljs.core.Subvec(this__7939.meta,cljs.core._assoc.call(null,this__7939.v,v_pos__7940,val),this__7939.start,((this__7939.end > (v_pos__7940 + 1)) ? this__7939.end : (v_pos__7940 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__7968 = null;
var G__7968__7969 = (function (tsym7941,k){
var this__7943 = this;
var tsym7941__7944 = this;

var coll__7945 = tsym7941__7944;

return cljs.core._lookup.call(null,coll__7945,k);
});
var G__7968__7970 = (function (tsym7942,k,not_found){
var this__7946 = this;
var tsym7942__7947 = this;

var coll__7948 = tsym7942__7947;

return cljs.core._lookup.call(null,coll__7948,k,not_found);
});
G__7968 = function(tsym7942,k,not_found){
switch(arguments.length){
case  2 :
return G__7968__7969.call(this,tsym7942,k);
case  3 :
return G__7968__7970.call(this,tsym7942,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7968;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7949 = this;
return (new cljs.core.Subvec(this__7949.meta,cljs.core._assoc_n.call(null,this__7949.v,this__7949.end,o),this__7949.start,(this__7949.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7972 = null;
var G__7972__7973 = (function (coll,f){
var this__7950 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__7972__7974 = (function (coll,f,start){
var this__7951 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__7972 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7972__7973.call(this,coll,f);
case  3 :
return G__7972__7974.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7972;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7952 = this;
var subvec_seq__7953 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__7952.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7952.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__7953.call(null,this__7952.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7954 = this;
return (this__7954.end - this__7954.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7955 = this;
return cljs.core._nth.call(null,this__7955.v,(this__7955.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7956 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__7956.start,this__7956.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7956.meta,this__7956.v,this__7956.start,(this__7956.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7957 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7959 = this;
return (new cljs.core.Subvec(meta,this__7959.v,this__7959.start,this__7959.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7960 = this;
return this__7960.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7976 = null;
var G__7976__7977 = (function (coll,n){
var this__7961 = this;
return cljs.core._nth.call(null,this__7961.v,(this__7961.start + n));
});
var G__7976__7978 = (function (coll,n,not_found){
var this__7962 = this;
return cljs.core._nth.call(null,this__7962.v,(this__7962.start + n),not_found);
});
G__7976 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7976__7977.call(this,coll,n);
case  3 :
return G__7976__7978.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7976;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7963 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7963.meta);
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
var subvec__7980 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__7981 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__7980.call(this,v,start);
case  3 :
return subvec__7981.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7983 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7984 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7985 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7986 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7986.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7987 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7988 = this;
return cljs.core._first.call(null,this__7988.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7989 = this;
var temp__3695__auto____7990 = cljs.core.next.call(null,this__7989.front);

if(cljs.core.truth_(temp__3695__auto____7990))
{var f1__7991 = temp__3695__auto____7990;

return (new cljs.core.PersistentQueueSeq(this__7989.meta,f1__7991,this__7989.rear));
} else
{if(cljs.core.truth_((this__7989.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7989.meta,this__7989.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7992 = this;
return this__7992.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7993 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7993.front,this__7993.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7994 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7995 = this;
if(cljs.core.truth_(this__7995.front))
{return (new cljs.core.PersistentQueue(this__7995.meta,(this__7995.count + 1),this__7995.front,cljs.core.conj.call(null,(function (){var or__3548__auto____7996 = this__7995.rear;

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__7995.meta,(this__7995.count + 1),cljs.core.conj.call(null,this__7995.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7997 = this;
var rear__7998 = cljs.core.seq.call(null,this__7997.rear);

if(cljs.core.truth_((function (){var or__3548__auto____7999 = this__7997.front;

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{return rear__7998;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7997.front,cljs.core.seq.call(null,rear__7998)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8000 = this;
return this__8000.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8001 = this;
return cljs.core._first.call(null,this__8001.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8002 = this;
if(cljs.core.truth_(this__8002.front))
{var temp__3695__auto____8003 = cljs.core.next.call(null,this__8002.front);

if(cljs.core.truth_(temp__3695__auto____8003))
{var f1__8004 = temp__3695__auto____8003;

return (new cljs.core.PersistentQueue(this__8002.meta,(this__8002.count - 1),f1__8004,this__8002.rear));
} else
{return (new cljs.core.PersistentQueue(this__8002.meta,(this__8002.count - 1),cljs.core.seq.call(null,this__8002.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8005 = this;
return cljs.core.first.call(null,this__8005.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8006 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8007 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8008 = this;
return (new cljs.core.PersistentQueue(meta,this__8008.count,this__8008.front,this__8008.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8009 = this;
return this__8009.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8010 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8011 = this;
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
var len__8012 = array.length;

var i__8013 = 0;

while(true){
if(cljs.core.truth_((i__8013 < len__8012)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8013]))))
{return i__8013;
} else
{{
var G__8014 = (i__8013 + incr);
i__8013 = G__8014;
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
var obj_map_contains_key_QMARK___8016 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8017 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8015))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8015;
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
return obj_map_contains_key_QMARK___8016.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8017.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8020 = cljs.core.hash.call(null,a);
var b__8021 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8020 < b__8021)))
{return -1;
} else
{if(cljs.core.truth_((a__8020 > b__8021)))
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
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8022 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8049 = null;
var G__8049__8050 = (function (coll,k){
var this__8023 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8049__8051 = (function (coll,k,not_found){
var this__8024 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8024.strobj,(this__8024.strobj[k]),not_found);
});
G__8049 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8049__8050.call(this,coll,k);
case  3 :
return G__8049__8051.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8049;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8025 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8026 = goog.object.clone.call(null,this__8025.strobj);
var overwrite_QMARK___8027 = new_strobj__8026.hasOwnProperty(k);

(new_strobj__8026[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8027))
{return (new cljs.core.ObjMap(this__8025.meta,this__8025.keys,new_strobj__8026));
} else
{var new_keys__8028 = cljs.core.aclone.call(null,this__8025.keys);

new_keys__8028.push(k);
return (new cljs.core.ObjMap(this__8025.meta,new_keys__8028,new_strobj__8026));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8025.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8029 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8029.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8053 = null;
var G__8053__8054 = (function (tsym8030,k){
var this__8032 = this;
var tsym8030__8033 = this;

var coll__8034 = tsym8030__8033;

return cljs.core._lookup.call(null,coll__8034,k);
});
var G__8053__8055 = (function (tsym8031,k,not_found){
var this__8035 = this;
var tsym8031__8036 = this;

var coll__8037 = tsym8031__8036;

return cljs.core._lookup.call(null,coll__8037,k,not_found);
});
G__8053 = function(tsym8031,k,not_found){
switch(arguments.length){
case  2 :
return G__8053__8054.call(this,tsym8031,k);
case  3 :
return G__8053__8055.call(this,tsym8031,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8053;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8038 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8039 = this;
if(cljs.core.truth_((this__8039.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8019_SHARP_){
return cljs.core.vector.call(null,p1__8019_SHARP_,(this__8039.strobj[p1__8019_SHARP_]));
}),this__8039.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8040 = this;
return this__8040.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8041 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8042 = this;
return (new cljs.core.ObjMap(meta,this__8042.keys,this__8042.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8043 = this;
return this__8043.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8044 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8044.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8045 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8046 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8046))
{return this__8045.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8046;
}
})()))
{var new_keys__8047 = cljs.core.aclone.call(null,this__8045.keys);
var new_strobj__8048 = goog.object.clone.call(null,this__8045.strobj);

new_keys__8047.splice(cljs.core.scan_array.call(null,1,k,new_keys__8047),1);
cljs.core.js_delete.call(null,new_strobj__8048,k);
return (new cljs.core.ObjMap(this__8045.meta,new_keys__8047,new_strobj__8048));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8058 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8096 = null;
var G__8096__8097 = (function (coll,k){
var this__8059 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8096__8098 = (function (coll,k,not_found){
var this__8060 = this;
var bucket__8061 = (this__8060.hashobj[cljs.core.hash.call(null,k)]);
var i__8062 = (cljs.core.truth_(bucket__8061)?cljs.core.scan_array.call(null,2,k,bucket__8061):null);

if(cljs.core.truth_(i__8062))
{return (bucket__8061[(i__8062 + 1)]);
} else
{return not_found;
}
});
G__8096 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8096__8097.call(this,coll,k);
case  3 :
return G__8096__8098.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8096;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8063 = this;
var h__8064 = cljs.core.hash.call(null,k);
var bucket__8065 = (this__8063.hashobj[h__8064]);

if(cljs.core.truth_(bucket__8065))
{var new_bucket__8066 = cljs.core.aclone.call(null,bucket__8065);
var new_hashobj__8067 = goog.object.clone.call(null,this__8063.hashobj);

(new_hashobj__8067[h__8064] = new_bucket__8066);
var temp__3695__auto____8068 = cljs.core.scan_array.call(null,2,k,new_bucket__8066);

if(cljs.core.truth_(temp__3695__auto____8068))
{var i__8069 = temp__3695__auto____8068;

(new_bucket__8066[(i__8069 + 1)] = v);
return (new cljs.core.HashMap(this__8063.meta,this__8063.count,new_hashobj__8067));
} else
{new_bucket__8066.push(k,v);
return (new cljs.core.HashMap(this__8063.meta,(this__8063.count + 1),new_hashobj__8067));
}
} else
{var new_hashobj__8070 = goog.object.clone.call(null,this__8063.hashobj);

(new_hashobj__8070[h__8064] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__8063.meta,(this__8063.count + 1),new_hashobj__8070));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8071 = this;
var bucket__8072 = (this__8071.hashobj[cljs.core.hash.call(null,k)]);
var i__8073 = (cljs.core.truth_(bucket__8072)?cljs.core.scan_array.call(null,2,k,bucket__8072):null);

if(cljs.core.truth_(i__8073))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8100 = null;
var G__8100__8101 = (function (tsym8074,k){
var this__8076 = this;
var tsym8074__8077 = this;

var coll__8078 = tsym8074__8077;

return cljs.core._lookup.call(null,coll__8078,k);
});
var G__8100__8102 = (function (tsym8075,k,not_found){
var this__8079 = this;
var tsym8075__8080 = this;

var coll__8081 = tsym8075__8080;

return cljs.core._lookup.call(null,coll__8081,k,not_found);
});
G__8100 = function(tsym8075,k,not_found){
switch(arguments.length){
case  2 :
return G__8100__8101.call(this,tsym8075,k);
case  3 :
return G__8100__8102.call(this,tsym8075,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8100;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8082 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8083 = this;
if(cljs.core.truth_((this__8083.count > 0)))
{var hashes__8084 = cljs.core.js_keys.call(null,this__8083.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8057_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8083.hashobj[p1__8057_SHARP_])));
}),hashes__8084);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8085 = this;
return this__8085.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8086 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8087 = this;
return (new cljs.core.HashMap(meta,this__8087.count,this__8087.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8088 = this;
return this__8088.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8089 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8089.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8090 = this;
var h__8091 = cljs.core.hash.call(null,k);
var bucket__8092 = (this__8090.hashobj[h__8091]);
var i__8093 = (cljs.core.truth_(bucket__8092)?cljs.core.scan_array.call(null,2,k,bucket__8092):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8093)))
{return coll;
} else
{var new_hashobj__8094 = goog.object.clone.call(null,this__8090.hashobj);

if(cljs.core.truth_((3 > bucket__8092.length)))
{cljs.core.js_delete.call(null,new_hashobj__8094,h__8091);
} else
{var new_bucket__8095 = cljs.core.aclone.call(null,bucket__8092);

new_bucket__8095.splice(i__8093,2);
(new_hashobj__8094[h__8091] = new_bucket__8095);
}
return (new cljs.core.HashMap(this__8090.meta,(this__8090.count - 1),new_hashobj__8094));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8104 = ks.length;

var i__8105 = 0;
var out__8106 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8105 < len__8104)))
{{
var G__8107 = (i__8105 + 1);
var G__8108 = cljs.core.assoc.call(null,out__8106,(ks[i__8105]),(vs[i__8105]));
i__8105 = G__8107;
out__8106 = G__8108;
continue;
}
} else
{return out__8106;
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
var in$__8109 = cljs.core.seq.call(null,keyvals);
var out__8110 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8109))
{{
var G__8111 = cljs.core.nnext.call(null,in$__8109);
var G__8112 = cljs.core.assoc.call(null,out__8110,cljs.core.first.call(null,in$__8109),cljs.core.second.call(null,in$__8109));
in$__8109 = G__8111;
out__8110 = G__8112;
continue;
}
} else
{return out__8110;
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
hash_map.cljs$lang$applyTo = (function (arglist__8113){
var keyvals = cljs.core.seq( arglist__8113 );;
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
{return cljs.core.reduce.call(null,(function (p1__8114_SHARP_,p2__8115_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8116 = p1__8114_SHARP_;

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8115_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8117){
var maps = cljs.core.seq( arglist__8117 );;
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
{var merge_entry__8120 = (function (m,e){
var k__8118 = cljs.core.first.call(null,e);
var v__8119 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8118)))
{return cljs.core.assoc.call(null,m,k__8118,f.call(null,cljs.core.get.call(null,m,k__8118),v__8119));
} else
{return cljs.core.assoc.call(null,m,k__8118,v__8119);
}
});
var merge2__8122 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8120,(function (){var or__3548__auto____8121 = m1;

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8122,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8123){
var f = cljs.core.first(arglist__8123);
var maps = cljs.core.rest(arglist__8123);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8125 = cljs.core.ObjMap.fromObject([],{});
var keys__8126 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8126))
{var key__8127 = cljs.core.first.call(null,keys__8126);
var entry__8128 = cljs.core.get.call(null,map,key__8127,"\uFDD0'user/not-found");

{
var G__8129 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8128,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8125,key__8127,entry__8128):ret__8125);
var G__8130 = cljs.core.next.call(null,keys__8126);
ret__8125 = G__8129;
keys__8126 = G__8130;
continue;
}
} else
{return ret__8125;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8131 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8152 = null;
var G__8152__8153 = (function (coll,v){
var this__8132 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8152__8154 = (function (coll,v,not_found){
var this__8133 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8133.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8152 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8152__8153.call(this,coll,v);
case  3 :
return G__8152__8154.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8152;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8156 = null;
var G__8156__8157 = (function (tsym8134,k){
var this__8136 = this;
var tsym8134__8137 = this;

var coll__8138 = tsym8134__8137;

return cljs.core._lookup.call(null,coll__8138,k);
});
var G__8156__8158 = (function (tsym8135,k,not_found){
var this__8139 = this;
var tsym8135__8140 = this;

var coll__8141 = tsym8135__8140;

return cljs.core._lookup.call(null,coll__8141,k,not_found);
});
G__8156 = function(tsym8135,k,not_found){
switch(arguments.length){
case  2 :
return G__8156__8157.call(this,tsym8135,k);
case  3 :
return G__8156__8158.call(this,tsym8135,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8156;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8142 = this;
return (new cljs.core.Set(this__8142.meta,cljs.core.assoc.call(null,this__8142.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8143 = this;
return cljs.core.keys.call(null,this__8143.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8144 = this;
return (new cljs.core.Set(this__8144.meta,cljs.core.dissoc.call(null,this__8144.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8145 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8146 = this;
var and__3546__auto____8147 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8147))
{var and__3546__auto____8148 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8148))
{return cljs.core.every_QMARK_.call(null,(function (p1__8124_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8124_SHARP_);
}),other);
} else
{return and__3546__auto____8148;
}
} else
{return and__3546__auto____8147;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8149 = this;
return (new cljs.core.Set(meta,this__8149.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8150 = this;
return this__8150.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8151 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8151.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8161 = cljs.core.seq.call(null,coll);
var out__8162 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8161))))
{{
var G__8163 = cljs.core.rest.call(null,in$__8161);
var G__8164 = cljs.core.conj.call(null,out__8162,cljs.core.first.call(null,in$__8161));
in$__8161 = G__8163;
out__8162 = G__8164;
continue;
}
} else
{return out__8162;
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
{var n__8165 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8166 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8166))
{var e__8167 = temp__3695__auto____8166;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8167));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8165,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8160_SHARP_){
var temp__3695__auto____8168 = cljs.core.find.call(null,smap,p1__8160_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8168))
{var e__8169 = temp__3695__auto____8168;

return cljs.core.second.call(null,e__8169);
} else
{return p1__8160_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8177 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8170,seen){
while(true){
var vec__8171__8172 = p__8170;
var f__8173 = cljs.core.nth.call(null,vec__8171__8172,0,null);
var xs__8174 = vec__8171__8172;

var temp__3698__auto____8175 = cljs.core.seq.call(null,xs__8174);

if(cljs.core.truth_(temp__3698__auto____8175))
{var s__8176 = temp__3698__auto____8175;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8173)))
{{
var G__8178 = cljs.core.rest.call(null,s__8176);
var G__8179 = seen;
p__8170 = G__8178;
seen = G__8179;
continue;
}
} else
{return cljs.core.cons.call(null,f__8173,step.call(null,cljs.core.rest.call(null,s__8176),cljs.core.conj.call(null,seen,f__8173)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8177.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8180 = cljs.core.Vector.fromArray([]);
var s__8181 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8181)))
{{
var G__8182 = cljs.core.conj.call(null,ret__8180,cljs.core.first.call(null,s__8181));
var G__8183 = cljs.core.next.call(null,s__8181);
ret__8180 = G__8182;
s__8181 = G__8183;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8180);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8184 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8185 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__8185 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8185 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8186 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8187 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__8187 > -1)))
{return cljs.core.subs.call(null,x,2,i__8187);
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
var map__8190 = cljs.core.ObjMap.fromObject([],{});
var ks__8191 = cljs.core.seq.call(null,keys);
var vs__8192 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8193 = ks__8191;

if(cljs.core.truth_(and__3546__auto____8193))
{return vs__8192;
} else
{return and__3546__auto____8193;
}
})()))
{{
var G__8194 = cljs.core.assoc.call(null,map__8190,cljs.core.first.call(null,ks__8191),cljs.core.first.call(null,vs__8192));
var G__8195 = cljs.core.next.call(null,ks__8191);
var G__8196 = cljs.core.next.call(null,vs__8192);
map__8190 = G__8194;
ks__8191 = G__8195;
vs__8192 = G__8196;
continue;
}
} else
{return map__8190;
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
var max_key__8199 = (function (k,x){
return x;
});
var max_key__8200 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8201 = (function() { 
var G__8203__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8188_SHARP_,p2__8189_SHARP_){
return max_key.call(null,k,p1__8188_SHARP_,p2__8189_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8203 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8203__delegate.call(this, k, x, y, more);
};
G__8203.cljs$lang$maxFixedArity = 3;
G__8203.cljs$lang$applyTo = (function (arglist__8204){
var k = cljs.core.first(arglist__8204);
var x = cljs.core.first(cljs.core.next(arglist__8204));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8204)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8204)));
return G__8203__delegate.call(this, k, x, y, more);
});
return G__8203;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8199.call(this,k,x);
case  3 :
return max_key__8200.call(this,k,x,y);
default:
return max_key__8201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8201.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8205 = (function (k,x){
return x;
});
var min_key__8206 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8207 = (function() { 
var G__8209__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8197_SHARP_,p2__8198_SHARP_){
return min_key.call(null,k,p1__8197_SHARP_,p2__8198_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8209 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8209__delegate.call(this, k, x, y, more);
};
G__8209.cljs$lang$maxFixedArity = 3;
G__8209.cljs$lang$applyTo = (function (arglist__8210){
var k = cljs.core.first(arglist__8210);
var x = cljs.core.first(cljs.core.next(arglist__8210));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8210)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8210)));
return G__8209__delegate.call(this, k, x, y, more);
});
return G__8209;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8205.call(this,k,x);
case  3 :
return min_key__8206.call(this,k,x,y);
default:
return min_key__8207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8207.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8213 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8214 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8211 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8211))
{var s__8212 = temp__3698__auto____8211;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8212),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8212)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8213.call(this,n,step);
case  3 :
return partition_all__8214.call(this,n,step,coll);
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
var temp__3698__auto____8216 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8216))
{var s__8217 = temp__3698__auto____8216;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8217))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8217),take_while.call(null,pred,cljs.core.rest.call(null,s__8217)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__8218 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8219 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8235 = null;
var G__8235__8236 = (function (rng,f){
var this__8220 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8235__8237 = (function (rng,f,s){
var this__8221 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8235 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8235__8236.call(this,rng,f);
case  3 :
return G__8235__8237.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8235;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8222 = this;
var comp__8223 = (cljs.core.truth_((this__8222.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8223.call(null,this__8222.start,this__8222.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8224 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8224.end - this__8224.start) / this__8224.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8225 = this;
return this__8225.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8226 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8226.meta,(this__8226.start + this__8226.step),this__8226.end,this__8226.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8227 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8228 = this;
return (new cljs.core.Range(meta,this__8228.start,this__8228.end,this__8228.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8229 = this;
return this__8229.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8239 = null;
var G__8239__8240 = (function (rng,n){
var this__8230 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8230.start + (n * this__8230.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8231 = (this__8230.start > this__8230.end);

if(cljs.core.truth_(and__3546__auto____8231))
{return cljs.core._EQ_.call(null,this__8230.step,0);
} else
{return and__3546__auto____8231;
}
})()))
{return this__8230.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8239__8241 = (function (rng,n,not_found){
var this__8232 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8232.start + (n * this__8232.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8233 = (this__8232.start > this__8232.end);

if(cljs.core.truth_(and__3546__auto____8233))
{return cljs.core._EQ_.call(null,this__8232.step,0);
} else
{return and__3546__auto____8233;
}
})()))
{return this__8232.start;
} else
{return not_found;
}
}
});
G__8239 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8239__8240.call(this,rng,n);
case  3 :
return G__8239__8241.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8239;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8234 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8234.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8243 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8244 = (function (end){
return range.call(null,0,end,1);
});
var range__8245 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8246 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8243.call(this);
case  1 :
return range__8244.call(this,start);
case  2 :
return range__8245.call(this,start,end);
case  3 :
return range__8246.call(this,start,end,step);
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
var temp__3698__auto____8248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8248))
{var s__8249 = temp__3698__auto____8248;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8249),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8249)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8251 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8251))
{var s__8252 = temp__3698__auto____8251;

var fst__8253 = cljs.core.first.call(null,s__8252);
var fv__8254 = f.call(null,fst__8253);
var run__8255 = cljs.core.cons.call(null,fst__8253,cljs.core.take_while.call(null,(function (p1__8250_SHARP_){
return cljs.core._EQ_.call(null,fv__8254,f.call(null,p1__8250_SHARP_));
}),cljs.core.next.call(null,s__8252)));

return cljs.core.cons.call(null,run__8255,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8255),s__8252))));
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
var reductions__8270 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8266))
{var s__8267 = temp__3695__auto____8266;

return reductions.call(null,f,cljs.core.first.call(null,s__8267),cljs.core.rest.call(null,s__8267));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8271 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8268))
{var s__8269 = temp__3698__auto____8268;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8269)),cljs.core.rest.call(null,s__8269));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8270.call(this,f,init);
case  3 :
return reductions__8271.call(this,f,init,coll);
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
var juxt__8274 = (function (f){
return (function() {
var G__8279 = null;
var G__8279__8280 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8279__8281 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8279__8282 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8279__8283 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8279__8284 = (function() { 
var G__8286__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8286 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8286__delegate.call(this, x, y, z, args);
};
G__8286.cljs$lang$maxFixedArity = 3;
G__8286.cljs$lang$applyTo = (function (arglist__8287){
var x = cljs.core.first(arglist__8287);
var y = cljs.core.first(cljs.core.next(arglist__8287));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8287)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8287)));
return G__8286__delegate.call(this, x, y, z, args);
});
return G__8286;
})()
;
G__8279 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8279__8280.call(this);
case  1 :
return G__8279__8281.call(this,x);
case  2 :
return G__8279__8282.call(this,x,y);
case  3 :
return G__8279__8283.call(this,x,y,z);
default:
return G__8279__8284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8279.cljs$lang$maxFixedArity = 3;
G__8279.cljs$lang$applyTo = G__8279__8284.cljs$lang$applyTo;
return G__8279;
})()
});
var juxt__8275 = (function (f,g){
return (function() {
var G__8288 = null;
var G__8288__8289 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8288__8290 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8288__8291 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8288__8292 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8288__8293 = (function() { 
var G__8295__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8295 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8295__delegate.call(this, x, y, z, args);
};
G__8295.cljs$lang$maxFixedArity = 3;
G__8295.cljs$lang$applyTo = (function (arglist__8296){
var x = cljs.core.first(arglist__8296);
var y = cljs.core.first(cljs.core.next(arglist__8296));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8296)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8296)));
return G__8295__delegate.call(this, x, y, z, args);
});
return G__8295;
})()
;
G__8288 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8288__8289.call(this);
case  1 :
return G__8288__8290.call(this,x);
case  2 :
return G__8288__8291.call(this,x,y);
case  3 :
return G__8288__8292.call(this,x,y,z);
default:
return G__8288__8293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8288.cljs$lang$maxFixedArity = 3;
G__8288.cljs$lang$applyTo = G__8288__8293.cljs$lang$applyTo;
return G__8288;
})()
});
var juxt__8276 = (function (f,g,h){
return (function() {
var G__8297 = null;
var G__8297__8298 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8297__8299 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8297__8300 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8297__8301 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8297__8302 = (function() { 
var G__8304__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8304 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8304__delegate.call(this, x, y, z, args);
};
G__8304.cljs$lang$maxFixedArity = 3;
G__8304.cljs$lang$applyTo = (function (arglist__8305){
var x = cljs.core.first(arglist__8305);
var y = cljs.core.first(cljs.core.next(arglist__8305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8305)));
return G__8304__delegate.call(this, x, y, z, args);
});
return G__8304;
})()
;
G__8297 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8297__8298.call(this);
case  1 :
return G__8297__8299.call(this,x);
case  2 :
return G__8297__8300.call(this,x,y);
case  3 :
return G__8297__8301.call(this,x,y,z);
default:
return G__8297__8302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8297.cljs$lang$maxFixedArity = 3;
G__8297.cljs$lang$applyTo = G__8297__8302.cljs$lang$applyTo;
return G__8297;
})()
});
var juxt__8277 = (function() { 
var G__8306__delegate = function (f,g,h,fs){
var fs__8273 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8307 = null;
var G__8307__8308 = (function (){
return cljs.core.reduce.call(null,(function (p1__8256_SHARP_,p2__8257_SHARP_){
return cljs.core.conj.call(null,p1__8256_SHARP_,p2__8257_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__8273);
});
var G__8307__8309 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8258_SHARP_,p2__8259_SHARP_){
return cljs.core.conj.call(null,p1__8258_SHARP_,p2__8259_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__8273);
});
var G__8307__8310 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8260_SHARP_,p2__8261_SHARP_){
return cljs.core.conj.call(null,p1__8260_SHARP_,p2__8261_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__8273);
});
var G__8307__8311 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8262_SHARP_,p2__8263_SHARP_){
return cljs.core.conj.call(null,p1__8262_SHARP_,p2__8263_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__8273);
});
var G__8307__8312 = (function() { 
var G__8314__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8264_SHARP_,p2__8265_SHARP_){
return cljs.core.conj.call(null,p1__8264_SHARP_,cljs.core.apply.call(null,p2__8265_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__8273);
};
var G__8314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8314__delegate.call(this, x, y, z, args);
};
G__8314.cljs$lang$maxFixedArity = 3;
G__8314.cljs$lang$applyTo = (function (arglist__8315){
var x = cljs.core.first(arglist__8315);
var y = cljs.core.first(cljs.core.next(arglist__8315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8315)));
return G__8314__delegate.call(this, x, y, z, args);
});
return G__8314;
})()
;
G__8307 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8307__8308.call(this);
case  1 :
return G__8307__8309.call(this,x);
case  2 :
return G__8307__8310.call(this,x,y);
case  3 :
return G__8307__8311.call(this,x,y,z);
default:
return G__8307__8312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8307.cljs$lang$maxFixedArity = 3;
G__8307.cljs$lang$applyTo = G__8307__8312.cljs$lang$applyTo;
return G__8307;
})()
};
var G__8306 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8306__delegate.call(this, f, g, h, fs);
};
G__8306.cljs$lang$maxFixedArity = 3;
G__8306.cljs$lang$applyTo = (function (arglist__8316){
var f = cljs.core.first(arglist__8316);
var g = cljs.core.first(cljs.core.next(arglist__8316));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8316)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8316)));
return G__8306__delegate.call(this, f, g, h, fs);
});
return G__8306;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8274.call(this,f);
case  2 :
return juxt__8275.call(this,f,g);
case  3 :
return juxt__8276.call(this,f,g,h);
default:
return juxt__8277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8277.cljs$lang$applyTo;
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
var dorun__8318 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8321 = cljs.core.next.call(null,coll);
coll = G__8321;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8319 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8317 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8317))
{return (n > 0);
} else
{return and__3546__auto____8317;
}
})()))
{{
var G__8322 = (n - 1);
var G__8323 = cljs.core.next.call(null,coll);
n = G__8322;
coll = G__8323;
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
return dorun__8318.call(this,n);
case  2 :
return dorun__8319.call(this,n,coll);
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
var doall__8324 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8325 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8324.call(this,n);
case  2 :
return doall__8325.call(this,n,coll);
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
var matches__8327 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8327),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8327),1)))
{return cljs.core.first.call(null,matches__8327);
} else
{return cljs.core.vec.call(null,matches__8327);
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
var matches__8328 = re.exec(s);

if(cljs.core.truth_((matches__8328 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8328),1)))
{return cljs.core.first.call(null,matches__8328);
} else
{return cljs.core.vec.call(null,matches__8328);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8329 = cljs.core.re_find.call(null,re,s);
var match_idx__8330 = s.search(re);
var match_str__8331 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8329))?cljs.core.first.call(null,match_data__8329):match_data__8329);
var post_match__8332 = cljs.core.subs.call(null,s,(match_idx__8330 + cljs.core.count.call(null,match_str__8331)));

if(cljs.core.truth_(match_data__8329))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8329,re_seq.call(null,re,post_match__8332));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8334__8335 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8336 = cljs.core.nth.call(null,vec__8334__8335,0,null);
var flags__8337 = cljs.core.nth.call(null,vec__8334__8335,1,null);
var pattern__8338 = cljs.core.nth.call(null,vec__8334__8335,2,null);

return (new RegExp(pattern__8338,flags__8337));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8333_SHARP_){
return print_one.call(null,p1__8333_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8339 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8339))
{var and__3546__auto____8343 = (function (){var x__3027__auto____8340 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8341 = x__3027__auto____8340;

if(cljs.core.truth_(and__3546__auto____8341))
{var and__3546__auto____8342 = x__3027__auto____8340.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8342))
{return cljs.core.not.call(null,x__3027__auto____8340.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8342;
}
} else
{return and__3546__auto____8341;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3027__auto____8340);
}
})();

if(cljs.core.truth_(and__3546__auto____8343))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8343;
}
} else
{return and__3546__auto____8339;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3027__auto____8344 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8345 = x__3027__auto____8344;

if(cljs.core.truth_(and__3546__auto____8345))
{var and__3546__auto____8346 = x__3027__auto____8344.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8346))
{return cljs.core.not.call(null,x__3027__auto____8344.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8346;
}
} else
{return and__3546__auto____8345;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3027__auto____8344);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__8347 = cljs.core.first.call(null,objs);
var sb__8348 = (new goog.string.StringBuffer());

var G__8349__8350 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8349__8350))
{var obj__8351 = cljs.core.first.call(null,G__8349__8350);
var G__8349__8352 = G__8349__8350;

while(true){
if(cljs.core.truth_((obj__8351 === first_obj__8347)))
{} else
{sb__8348.append(" ");
}
var G__8353__8354 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8351,opts));

if(cljs.core.truth_(G__8353__8354))
{var string__8355 = cljs.core.first.call(null,G__8353__8354);
var G__8353__8356 = G__8353__8354;

while(true){
sb__8348.append(string__8355);
var temp__3698__auto____8357 = cljs.core.next.call(null,G__8353__8356);

if(cljs.core.truth_(temp__3698__auto____8357))
{var G__8353__8358 = temp__3698__auto____8357;

{
var G__8361 = cljs.core.first.call(null,G__8353__8358);
var G__8362 = G__8353__8358;
string__8355 = G__8361;
G__8353__8356 = G__8362;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8359 = cljs.core.next.call(null,G__8349__8352);

if(cljs.core.truth_(temp__3698__auto____8359))
{var G__8349__8360 = temp__3698__auto____8359;

{
var G__8363 = cljs.core.first.call(null,G__8349__8360);
var G__8364 = G__8349__8360;
obj__8351 = G__8363;
G__8349__8352 = G__8364;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__8348);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8365 = cljs.core.first.call(null,objs);

var G__8366__8367 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8366__8367))
{var obj__8368 = cljs.core.first.call(null,G__8366__8367);
var G__8366__8369 = G__8366__8367;

while(true){
if(cljs.core.truth_((obj__8368 === first_obj__8365)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8370__8371 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8368,opts));

if(cljs.core.truth_(G__8370__8371))
{var string__8372 = cljs.core.first.call(null,G__8370__8371);
var G__8370__8373 = G__8370__8371;

while(true){
cljs.core.string_print.call(null,string__8372);
var temp__3698__auto____8374 = cljs.core.next.call(null,G__8370__8373);

if(cljs.core.truth_(temp__3698__auto____8374))
{var G__8370__8375 = temp__3698__auto____8374;

{
var G__8378 = cljs.core.first.call(null,G__8370__8375);
var G__8379 = G__8370__8375;
string__8372 = G__8378;
G__8370__8373 = G__8379;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8376 = cljs.core.next.call(null,G__8366__8369);

if(cljs.core.truth_(temp__3698__auto____8376))
{var G__8366__8377 = temp__3698__auto____8376;

{
var G__8380 = cljs.core.first.call(null,G__8366__8377);
var G__8381 = G__8366__8377;
obj__8368 = G__8380;
G__8366__8369 = G__8381;
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
pr_str.cljs$lang$applyTo = (function (arglist__8382){
var objs = cljs.core.seq( arglist__8382 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
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
pr.cljs$lang$applyTo = (function (arglist__8383){
var objs = cljs.core.seq( arglist__8383 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8384){
var objs = cljs.core.seq( arglist__8384 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
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
println.cljs$lang$applyTo = (function (arglist__8385){
var objs = cljs.core.seq( arglist__8385 );;
return println__delegate.call(this, objs);
});
return println;
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
prn.cljs$lang$applyTo = (function (arglist__8386){
var objs = cljs.core.seq( arglist__8386 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8387 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8387,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8388 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8388))
{var nspc__8389 = temp__3698__auto____8388;

return cljs.core.str.call(null,nspc__8389,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8390 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8390))
{var nspc__8391 = temp__3698__auto____8390;

return cljs.core.str.call(null,nspc__8391,"\/");
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
var pr_pair__8392 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8392,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__8393 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8394 = this;
var G__8395__8396 = cljs.core.seq.call(null,this__8394.watches);

if(cljs.core.truth_(G__8395__8396))
{var G__8398__8400 = cljs.core.first.call(null,G__8395__8396);
var vec__8399__8401 = G__8398__8400;
var key__8402 = cljs.core.nth.call(null,vec__8399__8401,0,null);
var f__8403 = cljs.core.nth.call(null,vec__8399__8401,1,null);
var G__8395__8404 = G__8395__8396;

var G__8398__8405 = G__8398__8400;
var G__8395__8406 = G__8395__8404;

while(true){
var vec__8407__8408 = G__8398__8405;
var key__8409 = cljs.core.nth.call(null,vec__8407__8408,0,null);
var f__8410 = cljs.core.nth.call(null,vec__8407__8408,1,null);
var G__8395__8411 = G__8395__8406;

f__8410.call(null,key__8409,this$,oldval,newval);
var temp__3698__auto____8412 = cljs.core.next.call(null,G__8395__8411);

if(cljs.core.truth_(temp__3698__auto____8412))
{var G__8395__8413 = temp__3698__auto____8412;

{
var G__8420 = cljs.core.first.call(null,G__8395__8413);
var G__8421 = G__8395__8413;
G__8398__8405 = G__8420;
G__8395__8406 = G__8421;
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
var this__8414 = this;
return this$.watches = cljs.core.assoc.call(null,this__8414.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8415 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8415.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8416 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8416.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8417 = this;
return this__8417.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8418 = this;
return this__8418.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8419 = this;
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
var atom__8428 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8429 = (function() { 
var G__8431__delegate = function (x,p__8422){
var map__8423__8424 = p__8422;
var map__8423__8425 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8423__8424))?cljs.core.apply.call(null,cljs.core.hash_map,map__8423__8424):map__8423__8424);
var validator__8426 = cljs.core.get.call(null,map__8423__8425,"\uFDD0'validator");
var meta__8427 = cljs.core.get.call(null,map__8423__8425,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8427,validator__8426,null));
};
var G__8431 = function (x,var_args){
var p__8422 = null;
if (goog.isDef(var_args)) {
  p__8422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8431__delegate.call(this, x, p__8422);
};
G__8431.cljs$lang$maxFixedArity = 1;
G__8431.cljs$lang$applyTo = (function (arglist__8432){
var x = cljs.core.first(arglist__8432);
var p__8422 = cljs.core.rest(arglist__8432);
return G__8431__delegate.call(this, x, p__8422);
});
return G__8431;
})()
;
atom = function(x,var_args){
var p__8422 = var_args;
switch(arguments.length){
case  1 :
return atom__8428.call(this,x);
default:
return atom__8429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8429.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8433 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8433))
{var validate__8434 = temp__3698__auto____8433;

if(cljs.core.truth_(validate__8434.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__8435 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8435,new_value);
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
var swap_BANG___8436 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8437 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8438 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8439 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8440 = (function() { 
var G__8442__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8442 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8442__delegate.call(this, a, f, x, y, z, more);
};
G__8442.cljs$lang$maxFixedArity = 5;
G__8442.cljs$lang$applyTo = (function (arglist__8443){
var a = cljs.core.first(arglist__8443);
var f = cljs.core.first(cljs.core.next(arglist__8443));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8443)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8443))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8443)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8443)))));
return G__8442__delegate.call(this, a, f, x, y, z, more);
});
return G__8442;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8436.call(this,a,f);
case  3 :
return swap_BANG___8437.call(this,a,f,x);
case  4 :
return swap_BANG___8438.call(this,a,f,x,y);
case  5 :
return swap_BANG___8439.call(this,a,f,x,y,z);
default:
return swap_BANG___8440.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8440.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8444){
var iref = cljs.core.first(arglist__8444);
var f = cljs.core.first(cljs.core.next(arglist__8444));
var args = cljs.core.rest(cljs.core.next(arglist__8444));
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
var gensym__8445 = (function (){
return gensym.call(null,"G__");
});
var gensym__8446 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8445.call(this);
case  1 :
return gensym__8446.call(this,prefix_string);
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
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__8448 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__8448.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8449 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__8449.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__8449.state,this__8449.f);
}
return cljs.core.deref.call(null,this__8449.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__8450){
var body = cljs.core.seq( arglist__8450 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
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
var map__8451__8452 = options;
var map__8451__8453 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8451__8452))?cljs.core.apply.call(null,cljs.core.hash_map,map__8451__8452):map__8451__8452);
var keywordize_keys__8454 = cljs.core.get.call(null,map__8451__8453,"\uFDD0'keywordize-keys");
var keyfn__8455 = (cljs.core.truth_(keywordize_keys__8454)?cljs.core.keyword:cljs.core.str);
var f__8461 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3091__auto____8460 = (function iter__8456(s__8457){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8457__8458 = s__8457;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8457__8458)))
{var k__8459 = cljs.core.first.call(null,s__8457__8458);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__8455.call(null,k__8459),thisfn.call(null,(x[k__8459]))]),iter__8456.call(null,cljs.core.rest.call(null,s__8457__8458)));
} else
{return null;
}
break;
}
})));
});

return iter__3091__auto____8460.call(null,cljs.core.js_keys.call(null,x));
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

return f__8461.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8462){
var x = cljs.core.first(arglist__8462);
var options = cljs.core.rest(arglist__8462);
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
var mem__8463 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8467__delegate = function (args){
var temp__3695__auto____8464 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8463),args);

if(cljs.core.truth_(temp__3695__auto____8464))
{var v__8465 = temp__3695__auto____8464;

return v__8465;
} else
{var ret__8466 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8463,cljs.core.assoc,args,ret__8466);
return ret__8466;
}
};
var G__8467 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8467__delegate.call(this, args);
};
G__8467.cljs$lang$maxFixedArity = 0;
G__8467.cljs$lang$applyTo = (function (arglist__8468){
var args = cljs.core.seq( arglist__8468 );;
return G__8467__delegate.call(this, args);
});
return G__8467;
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
var trampoline__8470 = (function (f){
while(true){
var ret__8469 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8469)))
{{
var G__8473 = ret__8469;
f = G__8473;
continue;
}
} else
{return ret__8469;
}
break;
}
});
var trampoline__8471 = (function() { 
var G__8474__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8474 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8474__delegate.call(this, f, args);
};
G__8474.cljs$lang$maxFixedArity = 1;
G__8474.cljs$lang$applyTo = (function (arglist__8475){
var f = cljs.core.first(arglist__8475);
var args = cljs.core.rest(arglist__8475);
return G__8474__delegate.call(this, f, args);
});
return G__8474;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8470.call(this,f);
default:
return trampoline__8471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8471.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8476 = (function (){
return rand.call(null,1);
});
var rand__8477 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8476.call(this);
case  1 :
return rand__8477.call(this,n);
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
var k__8479 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8479,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8479,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___8488 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8489 = (function (h,child,parent){
var or__3548__auto____8480 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8480))
{return or__3548__auto____8480;
} else
{var or__3548__auto____8481 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8481))
{return or__3548__auto____8481;
} else
{var and__3546__auto____8482 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8482))
{var and__3546__auto____8483 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8483))
{var and__3546__auto____8484 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8484))
{var ret__8485 = true;
var i__8486 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8487 = cljs.core.not.call(null,ret__8485);

if(cljs.core.truth_(or__3548__auto____8487))
{return or__3548__auto____8487;
} else
{return cljs.core._EQ_.call(null,i__8486,cljs.core.count.call(null,parent));
}
})()))
{return ret__8485;
} else
{{
var G__8491 = isa_QMARK_.call(null,h,child.call(null,i__8486),parent.call(null,i__8486));
var G__8492 = (i__8486 + 1);
ret__8485 = G__8491;
i__8486 = G__8492;
continue;
}
}
break;
}
} else
{return and__3546__auto____8484;
}
} else
{return and__3546__auto____8483;
}
} else
{return and__3546__auto____8482;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8488.call(this,h,child);
case  3 :
return isa_QMARK___8489.call(this,h,child,parent);
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
var parents__8493 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8494 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8493.call(this,h);
case  2 :
return parents__8494.call(this,h,tag);
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
var ancestors__8496 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8497 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8496.call(this,h);
case  2 :
return ancestors__8497.call(this,h,tag);
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
var descendants__8499 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8500 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8499.call(this,h);
case  2 :
return descendants__8500.call(this,h,tag);
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
var derive__8510 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8511 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__8505 = "\uFDD0'parents".call(null,h);
var td__8506 = "\uFDD0'descendants".call(null,h);
var ta__8507 = "\uFDD0'ancestors".call(null,h);
var tf__8508 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8509 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8505.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8507.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8507.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8505,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8508.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8506,parent,ta__8507),"\uFDD0'descendants":tf__8508.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8507,tag,td__8506)});
})());

if(cljs.core.truth_(or__3548__auto____8509))
{return or__3548__auto____8509;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8510.call(this,h,tag);
case  3 :
return derive__8511.call(this,h,tag,parent);
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
var underive__8517 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8518 = (function (h,tag,parent){
var parentMap__8513 = "\uFDD0'parents".call(null,h);
var childsParents__8514 = (cljs.core.truth_(parentMap__8513.call(null,tag))?cljs.core.disj.call(null,parentMap__8513.call(null,tag),parent):cljs.core.set([]));
var newParents__8515 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8514))?cljs.core.assoc.call(null,parentMap__8513,tag,childsParents__8514):cljs.core.dissoc.call(null,parentMap__8513,tag));
var deriv_seq__8516 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8502_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8502_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8502_SHARP_),cljs.core.second.call(null,p1__8502_SHARP_)));
}),cljs.core.seq.call(null,newParents__8515)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8513.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8503_SHARP_,p2__8504_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8503_SHARP_,p2__8504_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8516));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8517.call(this,h,tag);
case  3 :
return underive__8518.call(this,h,tag,parent);
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
var xprefs__8520 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8522 = (cljs.core.truth_((function (){var and__3546__auto____8521 = xprefs__8520;

if(cljs.core.truth_(and__3546__auto____8521))
{return xprefs__8520.call(null,y);
} else
{return and__3546__auto____8521;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8522))
{return or__3548__auto____8522;
} else
{var or__3548__auto____8524 = (function (){var ps__8523 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8523) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8523),prefer_table)))
{} else
{}
{
var G__8527 = cljs.core.rest.call(null,ps__8523);
ps__8523 = G__8527;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8524))
{return or__3548__auto____8524;
} else
{var or__3548__auto____8526 = (function (){var ps__8525 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8525) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8525),y,prefer_table)))
{} else
{}
{
var G__8528 = cljs.core.rest.call(null,ps__8525);
ps__8525 = G__8528;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8526))
{return or__3548__auto____8526;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8529 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8529))
{return or__3548__auto____8529;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8538 = cljs.core.reduce.call(null,(function (be,p__8530){
var vec__8531__8532 = p__8530;
var k__8533 = cljs.core.nth.call(null,vec__8531__8532,0,null);
var ___8534 = cljs.core.nth.call(null,vec__8531__8532,1,null);
var e__8535 = vec__8531__8532;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8533)))
{var be2__8537 = (cljs.core.truth_((function (){var or__3548__auto____8536 = (be === null);

if(cljs.core.truth_(or__3548__auto____8536))
{return or__3548__auto____8536;
} else
{return cljs.core.dominates.call(null,k__8533,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8535:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8537),k__8533,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8533," and ",cljs.core.first.call(null,be2__8537),", and neither is preferred")));
}
return be2__8537;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8538))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8538));
return cljs.core.second.call(null,best_entry__8538);
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
if(cljs.core.truth_((function (){var and__3546__auto____8539 = mf;

if(cljs.core.truth_(and__3546__auto____8539))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8539;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8540 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8540))
{return or__3548__auto____8540;
} else
{var or__3548__auto____8541 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8541))
{return or__3548__auto____8541;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8542 = mf;

if(cljs.core.truth_(and__3546__auto____8542))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8542;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8543 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8543))
{return or__3548__auto____8543;
} else
{var or__3548__auto____8544 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8544))
{return or__3548__auto____8544;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8545 = mf;

if(cljs.core.truth_(and__3546__auto____8545))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8545;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8546 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8546))
{return or__3548__auto____8546;
} else
{var or__3548__auto____8547 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8547))
{return or__3548__auto____8547;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8548 = mf;

if(cljs.core.truth_(and__3546__auto____8548))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8548;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8549 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8549))
{return or__3548__auto____8549;
} else
{var or__3548__auto____8550 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8550))
{return or__3548__auto____8550;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8551 = mf;

if(cljs.core.truth_(and__3546__auto____8551))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8551;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8552 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8552))
{return or__3548__auto____8552;
} else
{var or__3548__auto____8553 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8553))
{return or__3548__auto____8553;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8554 = mf;

if(cljs.core.truth_(and__3546__auto____8554))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8554;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8555 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8555))
{return or__3548__auto____8555;
} else
{var or__3548__auto____8556 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8556))
{return or__3548__auto____8556;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8557 = mf;

if(cljs.core.truth_(and__3546__auto____8557))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8557;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8558 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8558))
{return or__3548__auto____8558;
} else
{var or__3548__auto____8559 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8559))
{return or__3548__auto____8559;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8560 = mf;

if(cljs.core.truth_(and__3546__auto____8560))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8560;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8561 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8561))
{return or__3548__auto____8561;
} else
{var or__3548__auto____8562 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8562))
{return or__3548__auto____8562;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8563 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8564 = cljs.core._get_method.call(null,mf,dispatch_val__8563);

if(cljs.core.truth_(target_fn__8564))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8563)));
}
return cljs.core.apply.call(null,target_fn__8564,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__8565 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8566 = this;
cljs.core.swap_BANG_.call(null,this__8566.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8566.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8566.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8566.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8567 = this;
cljs.core.swap_BANG_.call(null,this__8567.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8567.method_cache,this__8567.method_table,this__8567.cached_hierarchy,this__8567.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8568 = this;
cljs.core.swap_BANG_.call(null,this__8568.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8568.method_cache,this__8568.method_table,this__8568.cached_hierarchy,this__8568.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8569 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8569.cached_hierarchy),cljs.core.deref.call(null,this__8569.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8569.method_cache,this__8569.method_table,this__8569.cached_hierarchy,this__8569.hierarchy);
}
var temp__3695__auto____8570 = cljs.core.deref.call(null,this__8569.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8570))
{var target_fn__8571 = temp__3695__auto____8570;

return target_fn__8571;
} else
{var temp__3695__auto____8572 = cljs.core.find_and_cache_best_method.call(null,this__8569.name,dispatch_val,this__8569.hierarchy,this__8569.method_table,this__8569.prefer_table,this__8569.method_cache,this__8569.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8572))
{var target_fn__8573 = temp__3695__auto____8572;

return target_fn__8573;
} else
{return cljs.core.deref.call(null,this__8569.method_table).call(null,this__8569.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8574 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8574.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8574.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8574.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8574.method_cache,this__8574.method_table,this__8574.cached_hierarchy,this__8574.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8575 = this;
return cljs.core.deref.call(null,this__8575.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8576 = this;
return cljs.core.deref.call(null,this__8576.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__8577 = this;
return cljs.core.do_dispatch.call(null,mf,this__8577.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8578__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8578 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8578__delegate.call(this, _, args);
};
G__8578.cljs$lang$maxFixedArity = 1;
G__8578.cljs$lang$applyTo = (function (arglist__8579){
var _ = cljs.core.first(arglist__8579);
var args = cljs.core.rest(arglist__8579);
return G__8578__delegate.call(this, _, args);
});
return G__8578;
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
