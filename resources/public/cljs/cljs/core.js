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
var or__3548__auto____6820 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6820))
{return or__3548__auto____6820;
} else
{var or__3548__auto____6821 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6821))
{return or__3548__auto____6821;
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
var _invoke__6885 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6822 = this$;

if(cljs.core.truth_(and__3546__auto____6822))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6822;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6823 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6823))
{return or__3548__auto____6823;
} else
{var or__3548__auto____6824 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6824))
{return or__3548__auto____6824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6886 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6825 = this$;

if(cljs.core.truth_(and__3546__auto____6825))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6825;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6826 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6826))
{return or__3548__auto____6826;
} else
{var or__3548__auto____6827 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6827))
{return or__3548__auto____6827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6887 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6828 = this$;

if(cljs.core.truth_(and__3546__auto____6828))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6828;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6829 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6829))
{return or__3548__auto____6829;
} else
{var or__3548__auto____6830 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6830))
{return or__3548__auto____6830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6888 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6831 = this$;

if(cljs.core.truth_(and__3546__auto____6831))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6831;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6832 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6832))
{return or__3548__auto____6832;
} else
{var or__3548__auto____6833 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6833))
{return or__3548__auto____6833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6889 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6834 = this$;

if(cljs.core.truth_(and__3546__auto____6834))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6834;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6835 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6835))
{return or__3548__auto____6835;
} else
{var or__3548__auto____6836 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6836))
{return or__3548__auto____6836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6890 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6837 = this$;

if(cljs.core.truth_(and__3546__auto____6837))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6837;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6838 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6838))
{return or__3548__auto____6838;
} else
{var or__3548__auto____6839 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6839))
{return or__3548__auto____6839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6891 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6840 = this$;

if(cljs.core.truth_(and__3546__auto____6840))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6840;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6841 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6841))
{return or__3548__auto____6841;
} else
{var or__3548__auto____6842 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6842))
{return or__3548__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6892 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6843 = this$;

if(cljs.core.truth_(and__3546__auto____6843))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6843;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6844 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6844))
{return or__3548__auto____6844;
} else
{var or__3548__auto____6845 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6845))
{return or__3548__auto____6845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6893 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6846 = this$;

if(cljs.core.truth_(and__3546__auto____6846))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6846;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6847 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6847))
{return or__3548__auto____6847;
} else
{var or__3548__auto____6848 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6848))
{return or__3548__auto____6848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6894 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6849 = this$;

if(cljs.core.truth_(and__3546__auto____6849))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6849;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6850 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6850))
{return or__3548__auto____6850;
} else
{var or__3548__auto____6851 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6851))
{return or__3548__auto____6851;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6895 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6852 = this$;

if(cljs.core.truth_(and__3546__auto____6852))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6852;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6853 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6853))
{return or__3548__auto____6853;
} else
{var or__3548__auto____6854 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6854))
{return or__3548__auto____6854;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6896 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6855 = this$;

if(cljs.core.truth_(and__3546__auto____6855))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6855;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6856 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6856))
{return or__3548__auto____6856;
} else
{var or__3548__auto____6857 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6857))
{return or__3548__auto____6857;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6897 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6858 = this$;

if(cljs.core.truth_(and__3546__auto____6858))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6858;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6859 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6859))
{return or__3548__auto____6859;
} else
{var or__3548__auto____6860 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6860))
{return or__3548__auto____6860;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6898 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6861 = this$;

if(cljs.core.truth_(and__3546__auto____6861))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6861;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6862 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6862))
{return or__3548__auto____6862;
} else
{var or__3548__auto____6863 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6863))
{return or__3548__auto____6863;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6899 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6864 = this$;

if(cljs.core.truth_(and__3546__auto____6864))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6864;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6865 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6865))
{return or__3548__auto____6865;
} else
{var or__3548__auto____6866 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6866))
{return or__3548__auto____6866;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6900 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6867 = this$;

if(cljs.core.truth_(and__3546__auto____6867))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6867;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6868 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6868))
{return or__3548__auto____6868;
} else
{var or__3548__auto____6869 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6869))
{return or__3548__auto____6869;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6901 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6870 = this$;

if(cljs.core.truth_(and__3546__auto____6870))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6870;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6871 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6871))
{return or__3548__auto____6871;
} else
{var or__3548__auto____6872 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6872))
{return or__3548__auto____6872;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6902 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6873 = this$;

if(cljs.core.truth_(and__3546__auto____6873))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6873;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6874 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6874))
{return or__3548__auto____6874;
} else
{var or__3548__auto____6875 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6875))
{return or__3548__auto____6875;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6903 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6876 = this$;

if(cljs.core.truth_(and__3546__auto____6876))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6876;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6877 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6877))
{return or__3548__auto____6877;
} else
{var or__3548__auto____6878 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6878))
{return or__3548__auto____6878;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6904 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6879 = this$;

if(cljs.core.truth_(and__3546__auto____6879))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6879;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6880 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6880))
{return or__3548__auto____6880;
} else
{var or__3548__auto____6881 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6881))
{return or__3548__auto____6881;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6905 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6882 = this$;

if(cljs.core.truth_(and__3546__auto____6882))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6882;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6883 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6883))
{return or__3548__auto____6883;
} else
{var or__3548__auto____6884 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6884))
{return or__3548__auto____6884;
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
return _invoke__6885.call(this,this$);
case  2 :
return _invoke__6886.call(this,this$,a);
case  3 :
return _invoke__6887.call(this,this$,a,b);
case  4 :
return _invoke__6888.call(this,this$,a,b,c);
case  5 :
return _invoke__6889.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6890.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6891.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6892.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6893.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6894.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6895.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6896.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6897.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6898.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6899.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6900.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6901.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6902.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6903.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6904.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6905.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6907 = coll;

if(cljs.core.truth_(and__3546__auto____6907))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6907;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6908 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6908))
{return or__3548__auto____6908;
} else
{var or__3548__auto____6909 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6909))
{return or__3548__auto____6909;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6910 = coll;

if(cljs.core.truth_(and__3546__auto____6910))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6910;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6911 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6911))
{return or__3548__auto____6911;
} else
{var or__3548__auto____6912 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6912))
{return or__3548__auto____6912;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6913 = coll;

if(cljs.core.truth_(and__3546__auto____6913))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6913;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6914 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{var or__3548__auto____6915 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6915))
{return or__3548__auto____6915;
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
var _nth__6922 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6916 = coll;

if(cljs.core.truth_(and__3546__auto____6916))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6916;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6917 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6917))
{return or__3548__auto____6917;
} else
{var or__3548__auto____6918 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6918))
{return or__3548__auto____6918;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6923 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6919 = coll;

if(cljs.core.truth_(and__3546__auto____6919))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6919;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6920 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6920))
{return or__3548__auto____6920;
} else
{var or__3548__auto____6921 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6921))
{return or__3548__auto____6921;
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
return _nth__6922.call(this,coll,n);
case  3 :
return _nth__6923.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6925 = coll;

if(cljs.core.truth_(and__3546__auto____6925))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6925;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6926 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6926))
{return or__3548__auto____6926;
} else
{var or__3548__auto____6927 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6927))
{return or__3548__auto____6927;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6928 = coll;

if(cljs.core.truth_(and__3546__auto____6928))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6928;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6929 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6929))
{return or__3548__auto____6929;
} else
{var or__3548__auto____6930 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6930))
{return or__3548__auto____6930;
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
var _lookup__6937 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6931 = o;

if(cljs.core.truth_(and__3546__auto____6931))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6931;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6932 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6932))
{return or__3548__auto____6932;
} else
{var or__3548__auto____6933 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6933))
{return or__3548__auto____6933;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6938 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6934 = o;

if(cljs.core.truth_(and__3546__auto____6934))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6934;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6935 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6935))
{return or__3548__auto____6935;
} else
{var or__3548__auto____6936 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6936))
{return or__3548__auto____6936;
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
return _lookup__6937.call(this,o,k);
case  3 :
return _lookup__6938.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6940 = coll;

if(cljs.core.truth_(and__3546__auto____6940))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6940;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6941 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6941))
{return or__3548__auto____6941;
} else
{var or__3548__auto____6942 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6942))
{return or__3548__auto____6942;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6943 = coll;

if(cljs.core.truth_(and__3546__auto____6943))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6943;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6944 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6944))
{return or__3548__auto____6944;
} else
{var or__3548__auto____6945 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6945))
{return or__3548__auto____6945;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6946 = coll;

if(cljs.core.truth_(and__3546__auto____6946))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____6946;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____6947 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6947))
{return or__3548__auto____6947;
} else
{var or__3548__auto____6948 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6948))
{return or__3548__auto____6948;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____6949 = coll;

if(cljs.core.truth_(and__3546__auto____6949))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____6949;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____6950 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6950))
{return or__3548__auto____6950;
} else
{var or__3548__auto____6951 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____6951))
{return or__3548__auto____6951;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6952 = coll;

if(cljs.core.truth_(and__3546__auto____6952))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____6952;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____6953 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6953))
{return or__3548__auto____6953;
} else
{var or__3548__auto____6954 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____6954))
{return or__3548__auto____6954;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6955 = coll;

if(cljs.core.truth_(and__3546__auto____6955))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6955;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6956 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6956))
{return or__3548__auto____6956;
} else
{var or__3548__auto____6957 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6957))
{return or__3548__auto____6957;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6958 = coll;

if(cljs.core.truth_(and__3546__auto____6958))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6958;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6959 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6959))
{return or__3548__auto____6959;
} else
{var or__3548__auto____6960 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6960))
{return or__3548__auto____6960;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6961 = o;

if(cljs.core.truth_(and__3546__auto____6961))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6961;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6962 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6962))
{return or__3548__auto____6962;
} else
{var or__3548__auto____6963 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6963))
{return or__3548__auto____6963;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6964 = o;

if(cljs.core.truth_(and__3546__auto____6964))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6964;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6965 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6965))
{return or__3548__auto____6965;
} else
{var or__3548__auto____6966 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6966))
{return or__3548__auto____6966;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6967 = o;

if(cljs.core.truth_(and__3546__auto____6967))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6967;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6968 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6968))
{return or__3548__auto____6968;
} else
{var or__3548__auto____6969 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6969))
{return or__3548__auto____6969;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6970 = o;

if(cljs.core.truth_(and__3546__auto____6970))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6970;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6971 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6971))
{return or__3548__auto____6971;
} else
{var or__3548__auto____6972 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6972))
{return or__3548__auto____6972;
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
var _reduce__6979 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6973 = coll;

if(cljs.core.truth_(and__3546__auto____6973))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6973;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6974 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6974))
{return or__3548__auto____6974;
} else
{var or__3548__auto____6975 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6975))
{return or__3548__auto____6975;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6980 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6976 = coll;

if(cljs.core.truth_(and__3546__auto____6976))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6976;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6977 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6977))
{return or__3548__auto____6977;
} else
{var or__3548__auto____6978 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6978))
{return or__3548__auto____6978;
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
return _reduce__6979.call(this,coll,f);
case  3 :
return _reduce__6980.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6982 = o;

if(cljs.core.truth_(and__3546__auto____6982))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6982;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6983 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6983))
{return or__3548__auto____6983;
} else
{var or__3548__auto____6984 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6984))
{return or__3548__auto____6984;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6985 = o;

if(cljs.core.truth_(and__3546__auto____6985))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6985;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6986 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6986))
{return or__3548__auto____6986;
} else
{var or__3548__auto____6987 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6987))
{return or__3548__auto____6987;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6988 = o;

if(cljs.core.truth_(and__3546__auto____6988))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6988;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6989 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6989))
{return or__3548__auto____6989;
} else
{var or__3548__auto____6990 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6990))
{return or__3548__auto____6990;
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
if(cljs.core.truth_((function (){var and__3546__auto____6991 = o;

if(cljs.core.truth_(and__3546__auto____6991))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6991;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6992 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6992))
{return or__3548__auto____6992;
} else
{var or__3548__auto____6993 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6993))
{return or__3548__auto____6993;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6994 = d;

if(cljs.core.truth_(and__3546__auto____6994))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6994;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6995 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6995))
{return or__3548__auto____6995;
} else
{var or__3548__auto____6996 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6996))
{return or__3548__auto____6996;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6997 = this$;

if(cljs.core.truth_(and__3546__auto____6997))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6997;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6998 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6998))
{return or__3548__auto____6998;
} else
{var or__3548__auto____6999 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6999))
{return or__3548__auto____6999;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7000 = this$;

if(cljs.core.truth_(and__3546__auto____7000))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7000;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7001 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7001))
{return or__3548__auto____7001;
} else
{var or__3548__auto____7002 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7002))
{return or__3548__auto____7002;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7003 = this$;

if(cljs.core.truth_(and__3546__auto____7003))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7003;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7004 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7004))
{return or__3548__auto____7004;
} else
{var or__3548__auto____7005 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7005))
{return or__3548__auto____7005;
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
var G__7006 = null;
var G__7006__7007 = (function (o,k){
return null;
});
var G__7006__7008 = (function (o,k,not_found){
return not_found;
});
G__7006 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7006__7007.call(this,o,k);
case  3 :
return G__7006__7008.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7006;
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
var G__7010 = null;
var G__7010__7011 = (function (_,f){
return f.call(null);
});
var G__7010__7012 = (function (_,f,start){
return start;
});
G__7010 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7010__7011.call(this,_,f);
case  3 :
return G__7010__7012.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7010;
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
var G__7014 = null;
var G__7014__7015 = (function (_,n){
return null;
});
var G__7014__7016 = (function (_,n,not_found){
return not_found;
});
G__7014 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7014__7015.call(this,_,n);
case  3 :
return G__7014__7016.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7014;
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
var ci_reduce__7024 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7018 = cljs.core._nth.call(null,cicoll,0);
var n__7019 = 1;

while(true){
if(cljs.core.truth_((n__7019 < cljs.core._count.call(null,cicoll))))
{{
var G__7028 = f.call(null,val__7018,cljs.core._nth.call(null,cicoll,n__7019));
var G__7029 = (n__7019 + 1);
val__7018 = G__7028;
n__7019 = G__7029;
continue;
}
} else
{return val__7018;
}
break;
}
}
});
var ci_reduce__7025 = (function (cicoll,f,val){
var val__7020 = val;
var n__7021 = 0;

while(true){
if(cljs.core.truth_((n__7021 < cljs.core._count.call(null,cicoll))))
{{
var G__7030 = f.call(null,val__7020,cljs.core._nth.call(null,cicoll,n__7021));
var G__7031 = (n__7021 + 1);
val__7020 = G__7030;
n__7021 = G__7031;
continue;
}
} else
{return val__7020;
}
break;
}
});
var ci_reduce__7026 = (function (cicoll,f,val,idx){
var val__7022 = val;
var n__7023 = idx;

while(true){
if(cljs.core.truth_((n__7023 < cljs.core._count.call(null,cicoll))))
{{
var G__7032 = f.call(null,val__7022,cljs.core._nth.call(null,cicoll,n__7023));
var G__7033 = (n__7023 + 1);
val__7022 = G__7032;
n__7023 = G__7033;
continue;
}
} else
{return val__7022;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7024.call(this,cicoll,f);
case  3 :
return ci_reduce__7025.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7026.call(this,cicoll,f,val,idx);
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
var this__7034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7047 = null;
var G__7047__7048 = (function (_,f){
var this__7035 = this;
return cljs.core.ci_reduce.call(null,this__7035.a,f,(this__7035.a[this__7035.i]),(this__7035.i + 1));
});
var G__7047__7049 = (function (_,f,start){
var this__7036 = this;
return cljs.core.ci_reduce.call(null,this__7036.a,f,start,this__7036.i);
});
G__7047 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7047__7048.call(this,_,f);
case  3 :
return G__7047__7049.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7047;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7037 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7038 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7051 = null;
var G__7051__7052 = (function (coll,n){
var this__7039 = this;
var i__7040 = (n + this__7039.i);

if(cljs.core.truth_((i__7040 < this__7039.a.length)))
{return (this__7039.a[i__7040]);
} else
{return null;
}
});
var G__7051__7053 = (function (coll,n,not_found){
var this__7041 = this;
var i__7042 = (n + this__7041.i);

if(cljs.core.truth_((i__7042 < this__7041.a.length)))
{return (this__7041.a[i__7042]);
} else
{return not_found;
}
});
G__7051 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7051__7052.call(this,coll,n);
case  3 :
return G__7051__7053.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7051;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7043 = this;
return (this__7043.a.length - this__7043.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7044 = this;
return (this__7044.a[this__7044.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7045 = this;
if(cljs.core.truth_(((this__7045.i + 1) < this__7045.a.length)))
{return (new cljs.core.IndexedSeq(this__7045.a,(this__7045.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7046 = this;
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
var G__7055 = null;
var G__7055__7056 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7055__7057 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7055 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7055__7056.call(this,array,f);
case  3 :
return G__7055__7057.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7055;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7059 = null;
var G__7059__7060 = (function (array,k){
return (array[k]);
});
var G__7059__7061 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7059 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7059__7060.call(this,array,k);
case  3 :
return G__7059__7061.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7059;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7063 = null;
var G__7063__7064 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7063__7065 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7063 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7063__7064.call(this,array,n);
case  3 :
return G__7063__7065.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7063;
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
var temp__3698__auto____7067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7067))
{var s__7068 = temp__3698__auto____7067;

return cljs.core._first.call(null,s__7068);
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
var G__7069 = cljs.core.next.call(null,s);
s = G__7069;
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
var s__7070 = cljs.core.seq.call(null,x);
var n__7071 = 0;

while(true){
if(cljs.core.truth_(s__7070))
{{
var G__7072 = cljs.core.next.call(null,s__7070);
var G__7073 = (n__7071 + 1);
s__7070 = G__7072;
n__7071 = G__7073;
continue;
}
} else
{return n__7071;
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
var conj__7074 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7075 = (function() { 
var G__7077__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7078 = conj.call(null,coll,x);
var G__7079 = cljs.core.first.call(null,xs);
var G__7080 = cljs.core.next.call(null,xs);
coll = G__7078;
x = G__7079;
xs = G__7080;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7077 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7077__delegate.call(this, coll, x, xs);
};
G__7077.cljs$lang$maxFixedArity = 2;
G__7077.cljs$lang$applyTo = (function (arglist__7081){
var coll = cljs.core.first(arglist__7081);
var x = cljs.core.first(cljs.core.next(arglist__7081));
var xs = cljs.core.rest(cljs.core.next(arglist__7081));
return G__7077__delegate.call(this, coll, x, xs);
});
return G__7077;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7074.call(this,coll,x);
default:
return conj__7075.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7075.cljs$lang$applyTo;
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
var nth__7082 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7083 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7082.call(this,coll,n);
case  3 :
return nth__7083.call(this,coll,n,not_found);
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
var get__7085 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7086 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7085.call(this,o,k);
case  3 :
return get__7086.call(this,o,k,not_found);
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
var assoc__7089 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7090 = (function() { 
var G__7092__delegate = function (coll,k,v,kvs){
while(true){
var ret__7088 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7093 = ret__7088;
var G__7094 = cljs.core.first.call(null,kvs);
var G__7095 = cljs.core.second.call(null,kvs);
var G__7096 = cljs.core.nnext.call(null,kvs);
coll = G__7093;
k = G__7094;
v = G__7095;
kvs = G__7096;
continue;
}
} else
{return ret__7088;
}
break;
}
};
var G__7092 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7092__delegate.call(this, coll, k, v, kvs);
};
G__7092.cljs$lang$maxFixedArity = 3;
G__7092.cljs$lang$applyTo = (function (arglist__7097){
var coll = cljs.core.first(arglist__7097);
var k = cljs.core.first(cljs.core.next(arglist__7097));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7097)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7097)));
return G__7092__delegate.call(this, coll, k, v, kvs);
});
return G__7092;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7089.call(this,coll,k,v);
default:
return assoc__7090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7090.cljs$lang$applyTo;
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
var dissoc__7099 = (function (coll){
return coll;
});
var dissoc__7100 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7101 = (function() { 
var G__7103__delegate = function (coll,k,ks){
while(true){
var ret__7098 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7104 = ret__7098;
var G__7105 = cljs.core.first.call(null,ks);
var G__7106 = cljs.core.next.call(null,ks);
coll = G__7104;
k = G__7105;
ks = G__7106;
continue;
}
} else
{return ret__7098;
}
break;
}
};
var G__7103 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7103__delegate.call(this, coll, k, ks);
};
G__7103.cljs$lang$maxFixedArity = 2;
G__7103.cljs$lang$applyTo = (function (arglist__7107){
var coll = cljs.core.first(arglist__7107);
var k = cljs.core.first(cljs.core.next(arglist__7107));
var ks = cljs.core.rest(cljs.core.next(arglist__7107));
return G__7103__delegate.call(this, coll, k, ks);
});
return G__7103;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7099.call(this,coll);
case  2 :
return dissoc__7100.call(this,coll,k);
default:
return dissoc__7101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7101.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3027__auto____7108 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7109 = x__3027__auto____7108;

if(cljs.core.truth_(and__3546__auto____7109))
{var and__3546__auto____7110 = x__3027__auto____7108.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7110))
{return cljs.core.not.call(null,x__3027__auto____7108.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7110;
}
} else
{return and__3546__auto____7109;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3027__auto____7108);
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
var disj__7112 = (function (coll){
return coll;
});
var disj__7113 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7114 = (function() { 
var G__7116__delegate = function (coll,k,ks){
while(true){
var ret__7111 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7117 = ret__7111;
var G__7118 = cljs.core.first.call(null,ks);
var G__7119 = cljs.core.next.call(null,ks);
coll = G__7117;
k = G__7118;
ks = G__7119;
continue;
}
} else
{return ret__7111;
}
break;
}
};
var G__7116 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7116__delegate.call(this, coll, k, ks);
};
G__7116.cljs$lang$maxFixedArity = 2;
G__7116.cljs$lang$applyTo = (function (arglist__7120){
var coll = cljs.core.first(arglist__7120);
var k = cljs.core.first(cljs.core.next(arglist__7120));
var ks = cljs.core.rest(cljs.core.next(arglist__7120));
return G__7116__delegate.call(this, coll, k, ks);
});
return G__7116;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7112.call(this,coll);
case  2 :
return disj__7113.call(this,coll,k);
default:
return disj__7114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7114.cljs$lang$applyTo;
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
{var x__3027__auto____7121 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7122 = x__3027__auto____7121;

if(cljs.core.truth_(and__3546__auto____7122))
{var and__3546__auto____7123 = x__3027__auto____7121.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7123))
{return cljs.core.not.call(null,x__3027__auto____7121.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7123;
}
} else
{return and__3546__auto____7122;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3027__auto____7121);
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
{var x__3027__auto____7124 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7125 = x__3027__auto____7124;

if(cljs.core.truth_(and__3546__auto____7125))
{var and__3546__auto____7126 = x__3027__auto____7124.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7126))
{return cljs.core.not.call(null,x__3027__auto____7124.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7126;
}
} else
{return and__3546__auto____7125;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3027__auto____7124);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3027__auto____7127 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7128 = x__3027__auto____7127;

if(cljs.core.truth_(and__3546__auto____7128))
{var and__3546__auto____7129 = x__3027__auto____7127.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7129))
{return cljs.core.not.call(null,x__3027__auto____7127.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7129;
}
} else
{return and__3546__auto____7128;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3027__auto____7127);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3027__auto____7130 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7131 = x__3027__auto____7130;

if(cljs.core.truth_(and__3546__auto____7131))
{var and__3546__auto____7132 = x__3027__auto____7130.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7132))
{return cljs.core.not.call(null,x__3027__auto____7130.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7132;
}
} else
{return and__3546__auto____7131;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3027__auto____7130);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3027__auto____7133 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7134 = x__3027__auto____7133;

if(cljs.core.truth_(and__3546__auto____7134))
{var and__3546__auto____7135 = x__3027__auto____7133.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7135))
{return cljs.core.not.call(null,x__3027__auto____7133.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7135;
}
} else
{return and__3546__auto____7134;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3027__auto____7133);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3027__auto____7136 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7137 = x__3027__auto____7136;

if(cljs.core.truth_(and__3546__auto____7137))
{var and__3546__auto____7138 = x__3027__auto____7136.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7138))
{return cljs.core.not.call(null,x__3027__auto____7136.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7138;
}
} else
{return and__3546__auto____7137;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3027__auto____7136);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3027__auto____7139 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7140 = x__3027__auto____7139;

if(cljs.core.truth_(and__3546__auto____7140))
{var and__3546__auto____7141 = x__3027__auto____7139.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7141))
{return cljs.core.not.call(null,x__3027__auto____7139.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7141;
}
} else
{return and__3546__auto____7140;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3027__auto____7139);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7142 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7142.push(key);
}));
return keys__7142;
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
{var x__3027__auto____7143 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7144 = x__3027__auto____7143;

if(cljs.core.truth_(and__3546__auto____7144))
{var and__3546__auto____7145 = x__3027__auto____7143.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7145))
{return cljs.core.not.call(null,x__3027__auto____7143.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7145;
}
} else
{return and__3546__auto____7144;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3027__auto____7143);
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
var and__3546__auto____7146 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7146))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7147 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7147))
{return or__3548__auto____7147;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7146;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7148 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7148))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7148;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7149 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7149))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7149;
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
var and__3546__auto____7150 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7150))
{return (n == n.toFixed());
} else
{return and__3546__auto____7150;
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
if(cljs.core.truth_((function (){var and__3546__auto____7151 = coll;

if(cljs.core.truth_(and__3546__auto____7151))
{var and__3546__auto____7152 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7152))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7152;
}
} else
{return and__3546__auto____7151;
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
var distinct_QMARK___7157 = (function (x){
return true;
});
var distinct_QMARK___7158 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7159 = (function() { 
var G__7161__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7153 = cljs.core.set([y,x]);
var xs__7154 = more;

while(true){
var x__7155 = cljs.core.first.call(null,xs__7154);
var etc__7156 = cljs.core.next.call(null,xs__7154);

if(cljs.core.truth_(xs__7154))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7153,x__7155)))
{return false;
} else
{{
var G__7162 = cljs.core.conj.call(null,s__7153,x__7155);
var G__7163 = etc__7156;
s__7153 = G__7162;
xs__7154 = G__7163;
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
var G__7161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7161__delegate.call(this, x, y, more);
};
G__7161.cljs$lang$maxFixedArity = 2;
G__7161.cljs$lang$applyTo = (function (arglist__7164){
var x = cljs.core.first(arglist__7164);
var y = cljs.core.first(cljs.core.next(arglist__7164));
var more = cljs.core.rest(cljs.core.next(arglist__7164));
return G__7161__delegate.call(this, x, y, more);
});
return G__7161;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7157.call(this,x);
case  2 :
return distinct_QMARK___7158.call(this,x,y);
default:
return distinct_QMARK___7159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7159.cljs$lang$applyTo;
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
var r__7165 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7165)))
{return r__7165;
} else
{if(cljs.core.truth_(r__7165))
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
var sort__7167 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7168 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7166 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7166,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7166);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7167.call(this,comp);
case  2 :
return sort__7168.call(this,comp,coll);
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
var sort_by__7170 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7171 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7170.call(this,keyfn,comp);
case  3 :
return sort_by__7171.call(this,keyfn,comp,coll);
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
var reduce__7173 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7174 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7173.call(this,f,val);
case  3 :
return reduce__7174.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7180 = (function (f,coll){
var temp__3695__auto____7176 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7176))
{var s__7177 = temp__3695__auto____7176;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7177),cljs.core.next.call(null,s__7177));
} else
{return f.call(null);
}
});
var seq_reduce__7181 = (function (f,val,coll){
var val__7178 = val;
var coll__7179 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7179))
{{
var G__7183 = f.call(null,val__7178,cljs.core.first.call(null,coll__7179));
var G__7184 = cljs.core.next.call(null,coll__7179);
val__7178 = G__7183;
coll__7179 = G__7184;
continue;
}
} else
{return val__7178;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7180.call(this,f,val);
case  3 :
return seq_reduce__7181.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7185 = null;
var G__7185__7186 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7185__7187 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7185 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7185__7186.call(this,coll,f);
case  3 :
return G__7185__7187.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7185;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7189 = (function (){
return 0;
});
var _PLUS___7190 = (function (x){
return x;
});
var _PLUS___7191 = (function (x,y){
return (x + y);
});
var _PLUS___7192 = (function() { 
var G__7194__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7194 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7194__delegate.call(this, x, y, more);
};
G__7194.cljs$lang$maxFixedArity = 2;
G__7194.cljs$lang$applyTo = (function (arglist__7195){
var x = cljs.core.first(arglist__7195);
var y = cljs.core.first(cljs.core.next(arglist__7195));
var more = cljs.core.rest(cljs.core.next(arglist__7195));
return G__7194__delegate.call(this, x, y, more);
});
return G__7194;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7189.call(this);
case  1 :
return _PLUS___7190.call(this,x);
case  2 :
return _PLUS___7191.call(this,x,y);
default:
return _PLUS___7192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7192.cljs$lang$applyTo;
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
var ___7196 = (function (x){
return (- x);
});
var ___7197 = (function (x,y){
return (x - y);
});
var ___7198 = (function() { 
var G__7200__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7200 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7200__delegate.call(this, x, y, more);
};
G__7200.cljs$lang$maxFixedArity = 2;
G__7200.cljs$lang$applyTo = (function (arglist__7201){
var x = cljs.core.first(arglist__7201);
var y = cljs.core.first(cljs.core.next(arglist__7201));
var more = cljs.core.rest(cljs.core.next(arglist__7201));
return G__7200__delegate.call(this, x, y, more);
});
return G__7200;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7196.call(this,x);
case  2 :
return ___7197.call(this,x,y);
default:
return ___7198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7198.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7202 = (function (){
return 1;
});
var _STAR___7203 = (function (x){
return x;
});
var _STAR___7204 = (function (x,y){
return (x * y);
});
var _STAR___7205 = (function() { 
var G__7207__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7207__delegate.call(this, x, y, more);
};
G__7207.cljs$lang$maxFixedArity = 2;
G__7207.cljs$lang$applyTo = (function (arglist__7208){
var x = cljs.core.first(arglist__7208);
var y = cljs.core.first(cljs.core.next(arglist__7208));
var more = cljs.core.rest(cljs.core.next(arglist__7208));
return G__7207__delegate.call(this, x, y, more);
});
return G__7207;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7202.call(this);
case  1 :
return _STAR___7203.call(this,x);
case  2 :
return _STAR___7204.call(this,x,y);
default:
return _STAR___7205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7205.cljs$lang$applyTo;
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
var _SLASH___7209 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7210 = (function (x,y){
return (x / y);
});
var _SLASH___7211 = (function() { 
var G__7213__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7213__delegate.call(this, x, y, more);
};
G__7213.cljs$lang$maxFixedArity = 2;
G__7213.cljs$lang$applyTo = (function (arglist__7214){
var x = cljs.core.first(arglist__7214);
var y = cljs.core.first(cljs.core.next(arglist__7214));
var more = cljs.core.rest(cljs.core.next(arglist__7214));
return G__7213__delegate.call(this, x, y, more);
});
return G__7213;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7209.call(this,x);
case  2 :
return _SLASH___7210.call(this,x,y);
default:
return _SLASH___7211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7211.cljs$lang$applyTo;
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
var _LT___7215 = (function (x){
return true;
});
var _LT___7216 = (function (x,y){
return (x < y);
});
var _LT___7217 = (function() { 
var G__7219__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7220 = y;
var G__7221 = cljs.core.first.call(null,more);
var G__7222 = cljs.core.next.call(null,more);
x = G__7220;
y = G__7221;
more = G__7222;
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
var G__7219 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7219__delegate.call(this, x, y, more);
};
G__7219.cljs$lang$maxFixedArity = 2;
G__7219.cljs$lang$applyTo = (function (arglist__7223){
var x = cljs.core.first(arglist__7223);
var y = cljs.core.first(cljs.core.next(arglist__7223));
var more = cljs.core.rest(cljs.core.next(arglist__7223));
return G__7219__delegate.call(this, x, y, more);
});
return G__7219;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7215.call(this,x);
case  2 :
return _LT___7216.call(this,x,y);
default:
return _LT___7217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7217.cljs$lang$applyTo;
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
var _LT__EQ___7224 = (function (x){
return true;
});
var _LT__EQ___7225 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7226 = (function() { 
var G__7228__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7229 = y;
var G__7230 = cljs.core.first.call(null,more);
var G__7231 = cljs.core.next.call(null,more);
x = G__7229;
y = G__7230;
more = G__7231;
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
var G__7228 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7228__delegate.call(this, x, y, more);
};
G__7228.cljs$lang$maxFixedArity = 2;
G__7228.cljs$lang$applyTo = (function (arglist__7232){
var x = cljs.core.first(arglist__7232);
var y = cljs.core.first(cljs.core.next(arglist__7232));
var more = cljs.core.rest(cljs.core.next(arglist__7232));
return G__7228__delegate.call(this, x, y, more);
});
return G__7228;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7224.call(this,x);
case  2 :
return _LT__EQ___7225.call(this,x,y);
default:
return _LT__EQ___7226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7226.cljs$lang$applyTo;
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
var _GT___7233 = (function (x){
return true;
});
var _GT___7234 = (function (x,y){
return (x > y);
});
var _GT___7235 = (function() { 
var G__7237__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7238 = y;
var G__7239 = cljs.core.first.call(null,more);
var G__7240 = cljs.core.next.call(null,more);
x = G__7238;
y = G__7239;
more = G__7240;
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
var G__7237 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7237__delegate.call(this, x, y, more);
};
G__7237.cljs$lang$maxFixedArity = 2;
G__7237.cljs$lang$applyTo = (function (arglist__7241){
var x = cljs.core.first(arglist__7241);
var y = cljs.core.first(cljs.core.next(arglist__7241));
var more = cljs.core.rest(cljs.core.next(arglist__7241));
return G__7237__delegate.call(this, x, y, more);
});
return G__7237;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7233.call(this,x);
case  2 :
return _GT___7234.call(this,x,y);
default:
return _GT___7235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7235.cljs$lang$applyTo;
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
var _GT__EQ___7242 = (function (x){
return true;
});
var _GT__EQ___7243 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7244 = (function() { 
var G__7246__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7247 = y;
var G__7248 = cljs.core.first.call(null,more);
var G__7249 = cljs.core.next.call(null,more);
x = G__7247;
y = G__7248;
more = G__7249;
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
var G__7246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7246__delegate.call(this, x, y, more);
};
G__7246.cljs$lang$maxFixedArity = 2;
G__7246.cljs$lang$applyTo = (function (arglist__7250){
var x = cljs.core.first(arglist__7250);
var y = cljs.core.first(cljs.core.next(arglist__7250));
var more = cljs.core.rest(cljs.core.next(arglist__7250));
return G__7246__delegate.call(this, x, y, more);
});
return G__7246;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7242.call(this,x);
case  2 :
return _GT__EQ___7243.call(this,x,y);
default:
return _GT__EQ___7244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7244.cljs$lang$applyTo;
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
var max__7251 = (function (x){
return x;
});
var max__7252 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7253 = (function() { 
var G__7255__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7251.call(this,x);
case  2 :
return max__7252.call(this,x,y);
default:
return max__7253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7253.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7257 = (function (x){
return x;
});
var min__7258 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7259 = (function() { 
var G__7261__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
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
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7257.call(this,x);
case  2 :
return min__7258.call(this,x,y);
default:
return min__7259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7259.cljs$lang$applyTo;
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
var rem__7263 = (n % d);

return cljs.core.fix.call(null,((n - rem__7263) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7264 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7264));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7265 = (function (){
return Math.random.call(null);
});
var rand__7266 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7265.call(this);
case  1 :
return rand__7266.call(this,n);
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
var _EQ__EQ___7268 = (function (x){
return true;
});
var _EQ__EQ___7269 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7270 = (function() { 
var G__7272__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7273 = y;
var G__7274 = cljs.core.first.call(null,more);
var G__7275 = cljs.core.next.call(null,more);
x = G__7273;
y = G__7274;
more = G__7275;
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
var G__7272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7272__delegate.call(this, x, y, more);
};
G__7272.cljs$lang$maxFixedArity = 2;
G__7272.cljs$lang$applyTo = (function (arglist__7276){
var x = cljs.core.first(arglist__7276);
var y = cljs.core.first(cljs.core.next(arglist__7276));
var more = cljs.core.rest(cljs.core.next(arglist__7276));
return G__7272__delegate.call(this, x, y, more);
});
return G__7272;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7268.call(this,x);
case  2 :
return _EQ__EQ___7269.call(this,x,y);
default:
return _EQ__EQ___7270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7270.cljs$lang$applyTo;
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
var n__7277 = n;
var xs__7278 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7279 = xs__7278;

if(cljs.core.truth_(and__3546__auto____7279))
{return (n__7277 > 0);
} else
{return and__3546__auto____7279;
}
})()))
{{
var G__7280 = (n__7277 - 1);
var G__7281 = cljs.core.next.call(null,xs__7278);
n__7277 = G__7280;
xs__7278 = G__7281;
continue;
}
} else
{return xs__7278;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7286 = null;
var G__7286__7287 = (function (coll,n){
var temp__3695__auto____7282 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7282))
{var xs__7283 = temp__3695__auto____7282;

return cljs.core.first.call(null,xs__7283);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7286__7288 = (function (coll,n,not_found){
var temp__3695__auto____7284 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7284))
{var xs__7285 = temp__3695__auto____7284;

return cljs.core.first.call(null,xs__7285);
} else
{return not_found;
}
});
G__7286 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7286__7287.call(this,coll,n);
case  3 :
return G__7286__7288.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7286;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7290 = (function (){
return "";
});
var str_STAR___7291 = (function (x){
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
var str_STAR___7292 = (function() { 
var G__7294__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7295 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7296 = cljs.core.next.call(null,more);
sb = G__7295;
more = G__7296;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7294 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7294__delegate.call(this, x, ys);
};
G__7294.cljs$lang$maxFixedArity = 1;
G__7294.cljs$lang$applyTo = (function (arglist__7297){
var x = cljs.core.first(arglist__7297);
var ys = cljs.core.rest(arglist__7297);
return G__7294__delegate.call(this, x, ys);
});
return G__7294;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7290.call(this);
case  1 :
return str_STAR___7291.call(this,x);
default:
return str_STAR___7292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7292.cljs$lang$applyTo;
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
var str__7298 = (function (){
return "";
});
var str__7299 = (function (x){
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
var str__7300 = (function() { 
var G__7302__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__7302 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7302__delegate.call(this, x, ys);
};
G__7302.cljs$lang$maxFixedArity = 1;
G__7302.cljs$lang$applyTo = (function (arglist__7303){
var x = cljs.core.first(arglist__7303);
var ys = cljs.core.rest(arglist__7303);
return G__7302__delegate.call(this, x, ys);
});
return G__7302;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7298.call(this);
case  1 :
return str__7299.call(this,x);
default:
return str__7300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7300.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7304 = (function (s,start){
return s.substring(start);
});
var subs__7305 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7304.call(this,s,start);
case  3 :
return subs__7305.call(this,s,start,end);
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
var symbol__7307 = (function (name){
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
var symbol__7308 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7307.call(this,ns);
case  2 :
return symbol__7308.call(this,ns,name);
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
var keyword__7310 = (function (name){
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
var keyword__7311 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7310.call(this,ns);
case  2 :
return keyword__7311.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7313 = cljs.core.seq.call(null,x);
var ys__7314 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7313 === null)))
{return (ys__7314 === null);
} else
{if(cljs.core.truth_((ys__7314 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7313),cljs.core.first.call(null,ys__7314))))
{{
var G__7315 = cljs.core.next.call(null,xs__7313);
var G__7316 = cljs.core.next.call(null,ys__7314);
xs__7313 = G__7315;
ys__7314 = G__7316;
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
return cljs.core.reduce.call(null,(function (p1__7317_SHARP_,p2__7318_SHARP_){
return cljs.core.hash_combine.call(null,p1__7317_SHARP_,cljs.core.hash.call(null,p2__7318_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7319__7320 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7319__7320))
{var G__7322__7324 = cljs.core.first.call(null,G__7319__7320);
var vec__7323__7325 = G__7322__7324;
var key_name__7326 = cljs.core.nth.call(null,vec__7323__7325,0,null);
var f__7327 = cljs.core.nth.call(null,vec__7323__7325,1,null);
var G__7319__7328 = G__7319__7320;

var G__7322__7329 = G__7322__7324;
var G__7319__7330 = G__7319__7328;

while(true){
var vec__7331__7332 = G__7322__7329;
var key_name__7333 = cljs.core.nth.call(null,vec__7331__7332,0,null);
var f__7334 = cljs.core.nth.call(null,vec__7331__7332,1,null);
var G__7319__7335 = G__7319__7330;

var str_name__7336 = cljs.core.name.call(null,key_name__7333);

obj[str_name__7336] = f__7334;
var temp__3698__auto____7337 = cljs.core.next.call(null,G__7319__7335);

if(cljs.core.truth_(temp__3698__auto____7337))
{var G__7319__7338 = temp__3698__auto____7337;

{
var G__7339 = cljs.core.first.call(null,G__7319__7338);
var G__7340 = G__7319__7338;
G__7322__7329 = G__7339;
G__7319__7330 = G__7340;
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
var this__7341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7342 = this;
return (new cljs.core.List(this__7342.meta,o,coll,(this__7342.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7343 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7344 = this;
return this__7344.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7345 = this;
return this__7345.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7346 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7347 = this;
return this__7347.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7348 = this;
return this__7348.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7349 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7350 = this;
return (new cljs.core.List(meta,this__7350.first,this__7350.rest,this__7350.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7351 = this;
return this__7351.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7352 = this;
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
var this__7353 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7354 = this;
return (new cljs.core.List(this__7354.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7355 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7356 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7357 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7358 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7359 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7360 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7362 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7363 = this;
return this__7363.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7364 = this;
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
list.cljs$lang$applyTo = (function (arglist__7365){
var items = cljs.core.seq( arglist__7365 );;
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
var this__7366 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7367 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7368 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7369 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7369.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7370 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7371 = this;
return this__7371.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7372 = this;
if(cljs.core.truth_((this__7372.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7372.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7373 = this;
return this__7373.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7374 = this;
return (new cljs.core.Cons(meta,this__7374.first,this__7374.rest));
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
var G__7375 = null;
var G__7375__7376 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7375__7377 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7375 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7375__7376.call(this,string,f);
case  3 :
return G__7375__7377.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7375;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7379 = null;
var G__7379__7380 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7379__7381 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7379 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7379__7380.call(this,string,k);
case  3 :
return G__7379__7381.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7379;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7383 = null;
var G__7383__7384 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7383__7385 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7383 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7383__7384.call(this,string,n);
case  3 :
return G__7383__7385.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7383;
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
var G__7393 = null;
var G__7393__7394 = (function (tsym7387,coll){
var tsym7387__7389 = this;

var this$__7390 = tsym7387__7389;

return cljs.core.get.call(null,coll,this$__7390.toString());
});
var G__7393__7395 = (function (tsym7388,coll,not_found){
var tsym7388__7391 = this;

var this$__7392 = tsym7388__7391;

return cljs.core.get.call(null,coll,this$__7392.toString(),not_found);
});
G__7393 = function(tsym7388,coll,not_found){
switch(arguments.length){
case  2 :
return G__7393__7394.call(this,tsym7388,coll);
case  3 :
return G__7393__7395.call(this,tsym7388,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7393;
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
var x__7397 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7397;
} else
{lazy_seq.x = x__7397.call(null);
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
var this__7398 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7399 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7400 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7401 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7401.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7402 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7403 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7404 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7405 = this;
return this__7405.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7406 = this;
return (new cljs.core.LazySeq(meta,this__7406.realized,this__7406.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7407 = cljs.core.array.call(null);

var s__7408 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7408)))
{ary__7407.push(cljs.core.first.call(null,s__7408));
{
var G__7409 = cljs.core.next.call(null,s__7408);
s__7408 = G__7409;
continue;
}
} else
{return ary__7407;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7410 = s;
var i__7411 = n;
var sum__7412 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = (i__7411 > 0);

if(cljs.core.truth_(and__3546__auto____7413))
{return cljs.core.seq.call(null,s__7410);
} else
{return and__3546__auto____7413;
}
})()))
{{
var G__7414 = cljs.core.next.call(null,s__7410);
var G__7415 = (i__7411 - 1);
var G__7416 = (sum__7412 + 1);
s__7410 = G__7414;
i__7411 = G__7415;
sum__7412 = G__7416;
continue;
}
} else
{return sum__7412;
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
var concat__7420 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7421 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7422 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7417 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7417))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7417),concat.call(null,cljs.core.rest.call(null,s__7417),y));
} else
{return y;
}
})));
});
var concat__7423 = (function() { 
var G__7425__delegate = function (x,y,zs){
var cat__7419 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7418 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7418))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7418),cat.call(null,cljs.core.rest.call(null,xys__7418),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7419.call(null,concat.call(null,x,y),zs);
};
var G__7425 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7425__delegate.call(this, x, y, zs);
};
G__7425.cljs$lang$maxFixedArity = 2;
G__7425.cljs$lang$applyTo = (function (arglist__7426){
var x = cljs.core.first(arglist__7426);
var y = cljs.core.first(cljs.core.next(arglist__7426));
var zs = cljs.core.rest(cljs.core.next(arglist__7426));
return G__7425__delegate.call(this, x, y, zs);
});
return G__7425;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7420.call(this);
case  1 :
return concat__7421.call(this,x);
case  2 :
return concat__7422.call(this,x,y);
default:
return concat__7423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7423.cljs$lang$applyTo;
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
var list_STAR___7427 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7428 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7429 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7430 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7431 = (function() { 
var G__7433__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7433 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7433__delegate.call(this, a, b, c, d, more);
};
G__7433.cljs$lang$maxFixedArity = 4;
G__7433.cljs$lang$applyTo = (function (arglist__7434){
var a = cljs.core.first(arglist__7434);
var b = cljs.core.first(cljs.core.next(arglist__7434));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7434)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
return G__7433__delegate.call(this, a, b, c, d, more);
});
return G__7433;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7427.call(this,a);
case  2 :
return list_STAR___7428.call(this,a,b);
case  3 :
return list_STAR___7429.call(this,a,b,c);
case  4 :
return list_STAR___7430.call(this,a,b,c,d);
default:
return list_STAR___7431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7431.cljs$lang$applyTo;
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
var apply__7444 = (function (f,args){
var fixed_arity__7435 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7435 + 1)) <= fixed_arity__7435)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7445 = (function (f,x,args){
var arglist__7436 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7437 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7436,fixed_arity__7437) <= fixed_arity__7437)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7436));
} else
{return f.cljs$lang$applyTo(arglist__7436);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7436));
}
});
var apply__7446 = (function (f,x,y,args){
var arglist__7438 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7439 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7438,fixed_arity__7439) <= fixed_arity__7439)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7438));
} else
{return f.cljs$lang$applyTo(arglist__7438);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7438));
}
});
var apply__7447 = (function (f,x,y,z,args){
var arglist__7440 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7441 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7440,fixed_arity__7441) <= fixed_arity__7441)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7440));
} else
{return f.cljs$lang$applyTo(arglist__7440);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7440));
}
});
var apply__7448 = (function() { 
var G__7450__delegate = function (f,a,b,c,d,args){
var arglist__7442 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7443 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7442,fixed_arity__7443) <= fixed_arity__7443)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7442));
} else
{return f.cljs$lang$applyTo(arglist__7442);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7442));
}
};
var G__7450 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7450__delegate.call(this, f, a, b, c, d, args);
};
G__7450.cljs$lang$maxFixedArity = 5;
G__7450.cljs$lang$applyTo = (function (arglist__7451){
var f = cljs.core.first(arglist__7451);
var a = cljs.core.first(cljs.core.next(arglist__7451));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7451)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7451))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7451)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7451)))));
return G__7450__delegate.call(this, f, a, b, c, d, args);
});
return G__7450;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7444.call(this,f,a);
case  3 :
return apply__7445.call(this,f,a,b);
case  4 :
return apply__7446.call(this,f,a,b,c);
case  5 :
return apply__7447.call(this,f,a,b,c,d);
default:
return apply__7448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7448.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7452){
var obj = cljs.core.first(arglist__7452);
var f = cljs.core.first(cljs.core.next(arglist__7452));
var args = cljs.core.rest(cljs.core.next(arglist__7452));
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
var not_EQ___7453 = (function (x){
return false;
});
var not_EQ___7454 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7455 = (function() { 
var G__7457__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7457 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7457__delegate.call(this, x, y, more);
};
G__7457.cljs$lang$maxFixedArity = 2;
G__7457.cljs$lang$applyTo = (function (arglist__7458){
var x = cljs.core.first(arglist__7458);
var y = cljs.core.first(cljs.core.next(arglist__7458));
var more = cljs.core.rest(cljs.core.next(arglist__7458));
return G__7457__delegate.call(this, x, y, more);
});
return G__7457;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7453.call(this,x);
case  2 :
return not_EQ___7454.call(this,x,y);
default:
return not_EQ___7455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7455.cljs$lang$applyTo;
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
var G__7459 = pred;
var G__7460 = cljs.core.next.call(null,coll);
pred = G__7459;
coll = G__7460;
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
{var or__3548__auto____7461 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{{
var G__7462 = pred;
var G__7463 = cljs.core.next.call(null,coll);
pred = G__7462;
coll = G__7463;
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
var G__7464 = null;
var G__7464__7465 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7464__7466 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7464__7467 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7464__7468 = (function() { 
var G__7470__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7470 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7470__delegate.call(this, x, y, zs);
};
G__7470.cljs$lang$maxFixedArity = 2;
G__7470.cljs$lang$applyTo = (function (arglist__7471){
var x = cljs.core.first(arglist__7471);
var y = cljs.core.first(cljs.core.next(arglist__7471));
var zs = cljs.core.rest(cljs.core.next(arglist__7471));
return G__7470__delegate.call(this, x, y, zs);
});
return G__7470;
})()
;
G__7464 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7464__7465.call(this);
case  1 :
return G__7464__7466.call(this,x);
case  2 :
return G__7464__7467.call(this,x,y);
default:
return G__7464__7468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7464.cljs$lang$maxFixedArity = 2;
G__7464.cljs$lang$applyTo = G__7464__7468.cljs$lang$applyTo;
return G__7464;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7472__delegate = function (args){
return x;
};
var G__7472 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7472__delegate.call(this, args);
};
G__7472.cljs$lang$maxFixedArity = 0;
G__7472.cljs$lang$applyTo = (function (arglist__7473){
var args = cljs.core.seq( arglist__7473 );;
return G__7472__delegate.call(this, args);
});
return G__7472;
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
var comp__7477 = (function (){
return cljs.core.identity;
});
var comp__7478 = (function (f){
return f;
});
var comp__7479 = (function (f,g){
return (function() {
var G__7483 = null;
var G__7483__7484 = (function (){
return f.call(null,g.call(null));
});
var G__7483__7485 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7483__7486 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7483__7487 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7483__7488 = (function() { 
var G__7490__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7490 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7490__delegate.call(this, x, y, z, args);
};
G__7490.cljs$lang$maxFixedArity = 3;
G__7490.cljs$lang$applyTo = (function (arglist__7491){
var x = cljs.core.first(arglist__7491);
var y = cljs.core.first(cljs.core.next(arglist__7491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7491)));
return G__7490__delegate.call(this, x, y, z, args);
});
return G__7490;
})()
;
G__7483 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7483__7484.call(this);
case  1 :
return G__7483__7485.call(this,x);
case  2 :
return G__7483__7486.call(this,x,y);
case  3 :
return G__7483__7487.call(this,x,y,z);
default:
return G__7483__7488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7483.cljs$lang$maxFixedArity = 3;
G__7483.cljs$lang$applyTo = G__7483__7488.cljs$lang$applyTo;
return G__7483;
})()
});
var comp__7480 = (function (f,g,h){
return (function() {
var G__7492 = null;
var G__7492__7493 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7492__7494 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7492__7495 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7492__7496 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7492__7497 = (function() { 
var G__7499__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7499 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7499__delegate.call(this, x, y, z, args);
};
G__7499.cljs$lang$maxFixedArity = 3;
G__7499.cljs$lang$applyTo = (function (arglist__7500){
var x = cljs.core.first(arglist__7500);
var y = cljs.core.first(cljs.core.next(arglist__7500));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7500)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7500)));
return G__7499__delegate.call(this, x, y, z, args);
});
return G__7499;
})()
;
G__7492 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7492__7493.call(this);
case  1 :
return G__7492__7494.call(this,x);
case  2 :
return G__7492__7495.call(this,x,y);
case  3 :
return G__7492__7496.call(this,x,y,z);
default:
return G__7492__7497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7492.cljs$lang$maxFixedArity = 3;
G__7492.cljs$lang$applyTo = G__7492__7497.cljs$lang$applyTo;
return G__7492;
})()
});
var comp__7481 = (function() { 
var G__7501__delegate = function (f1,f2,f3,fs){
var fs__7474 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7502__delegate = function (args){
var ret__7475 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7474),args);
var fs__7476 = cljs.core.next.call(null,fs__7474);

while(true){
if(cljs.core.truth_(fs__7476))
{{
var G__7503 = cljs.core.first.call(null,fs__7476).call(null,ret__7475);
var G__7504 = cljs.core.next.call(null,fs__7476);
ret__7475 = G__7503;
fs__7476 = G__7504;
continue;
}
} else
{return ret__7475;
}
break;
}
};
var G__7502 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7502__delegate.call(this, args);
};
G__7502.cljs$lang$maxFixedArity = 0;
G__7502.cljs$lang$applyTo = (function (arglist__7505){
var args = cljs.core.seq( arglist__7505 );;
return G__7502__delegate.call(this, args);
});
return G__7502;
})()
;
};
var G__7501 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7501__delegate.call(this, f1, f2, f3, fs);
};
G__7501.cljs$lang$maxFixedArity = 3;
G__7501.cljs$lang$applyTo = (function (arglist__7506){
var f1 = cljs.core.first(arglist__7506);
var f2 = cljs.core.first(cljs.core.next(arglist__7506));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7506)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7506)));
return G__7501__delegate.call(this, f1, f2, f3, fs);
});
return G__7501;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7477.call(this);
case  1 :
return comp__7478.call(this,f1);
case  2 :
return comp__7479.call(this,f1,f2);
case  3 :
return comp__7480.call(this,f1,f2,f3);
default:
return comp__7481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7481.cljs$lang$applyTo;
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
var partial__7507 = (function (f,arg1){
return (function() { 
var G__7512__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7512 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7512__delegate.call(this, args);
};
G__7512.cljs$lang$maxFixedArity = 0;
G__7512.cljs$lang$applyTo = (function (arglist__7513){
var args = cljs.core.seq( arglist__7513 );;
return G__7512__delegate.call(this, args);
});
return G__7512;
})()
;
});
var partial__7508 = (function (f,arg1,arg2){
return (function() { 
var G__7514__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7514 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7514__delegate.call(this, args);
};
G__7514.cljs$lang$maxFixedArity = 0;
G__7514.cljs$lang$applyTo = (function (arglist__7515){
var args = cljs.core.seq( arglist__7515 );;
return G__7514__delegate.call(this, args);
});
return G__7514;
})()
;
});
var partial__7509 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7516__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7516 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7516__delegate.call(this, args);
};
G__7516.cljs$lang$maxFixedArity = 0;
G__7516.cljs$lang$applyTo = (function (arglist__7517){
var args = cljs.core.seq( arglist__7517 );;
return G__7516__delegate.call(this, args);
});
return G__7516;
})()
;
});
var partial__7510 = (function() { 
var G__7518__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7519__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7519 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7519__delegate.call(this, args);
};
G__7519.cljs$lang$maxFixedArity = 0;
G__7519.cljs$lang$applyTo = (function (arglist__7520){
var args = cljs.core.seq( arglist__7520 );;
return G__7519__delegate.call(this, args);
});
return G__7519;
})()
;
};
var G__7518 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7518__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7518.cljs$lang$maxFixedArity = 4;
G__7518.cljs$lang$applyTo = (function (arglist__7521){
var f = cljs.core.first(arglist__7521);
var arg1 = cljs.core.first(cljs.core.next(arglist__7521));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7521)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7521))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7521))));
return G__7518__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7518;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7507.call(this,f,arg1);
case  3 :
return partial__7508.call(this,f,arg1,arg2);
case  4 :
return partial__7509.call(this,f,arg1,arg2,arg3);
default:
return partial__7510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7510.cljs$lang$applyTo;
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
var fnil__7522 = (function (f,x){
return (function() {
var G__7526 = null;
var G__7526__7527 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7526__7528 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7526__7529 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7526__7530 = (function() { 
var G__7532__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7532 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7532__delegate.call(this, a, b, c, ds);
};
G__7532.cljs$lang$maxFixedArity = 3;
G__7532.cljs$lang$applyTo = (function (arglist__7533){
var a = cljs.core.first(arglist__7533);
var b = cljs.core.first(cljs.core.next(arglist__7533));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7533)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7533)));
return G__7532__delegate.call(this, a, b, c, ds);
});
return G__7532;
})()
;
G__7526 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7526__7527.call(this,a);
case  2 :
return G__7526__7528.call(this,a,b);
case  3 :
return G__7526__7529.call(this,a,b,c);
default:
return G__7526__7530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7526.cljs$lang$maxFixedArity = 3;
G__7526.cljs$lang$applyTo = G__7526__7530.cljs$lang$applyTo;
return G__7526;
})()
});
var fnil__7523 = (function (f,x,y){
return (function() {
var G__7534 = null;
var G__7534__7535 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7534__7536 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7534__7537 = (function() { 
var G__7539__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7539 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7539__delegate.call(this, a, b, c, ds);
};
G__7539.cljs$lang$maxFixedArity = 3;
G__7539.cljs$lang$applyTo = (function (arglist__7540){
var a = cljs.core.first(arglist__7540);
var b = cljs.core.first(cljs.core.next(arglist__7540));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7540)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7540)));
return G__7539__delegate.call(this, a, b, c, ds);
});
return G__7539;
})()
;
G__7534 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7534__7535.call(this,a,b);
case  3 :
return G__7534__7536.call(this,a,b,c);
default:
return G__7534__7537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7534.cljs$lang$maxFixedArity = 3;
G__7534.cljs$lang$applyTo = G__7534__7537.cljs$lang$applyTo;
return G__7534;
})()
});
var fnil__7524 = (function (f,x,y,z){
return (function() {
var G__7541 = null;
var G__7541__7542 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7541__7543 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7541__7544 = (function() { 
var G__7546__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7546 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7546__delegate.call(this, a, b, c, ds);
};
G__7546.cljs$lang$maxFixedArity = 3;
G__7546.cljs$lang$applyTo = (function (arglist__7547){
var a = cljs.core.first(arglist__7547);
var b = cljs.core.first(cljs.core.next(arglist__7547));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7547)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7547)));
return G__7546__delegate.call(this, a, b, c, ds);
});
return G__7546;
})()
;
G__7541 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7541__7542.call(this,a,b);
case  3 :
return G__7541__7543.call(this,a,b,c);
default:
return G__7541__7544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7541.cljs$lang$maxFixedArity = 3;
G__7541.cljs$lang$applyTo = G__7541__7544.cljs$lang$applyTo;
return G__7541;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7522.call(this,f,x);
case  3 :
return fnil__7523.call(this,f,x,y);
case  4 :
return fnil__7524.call(this,f,x,y,z);
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
var mapi__7550 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7548))
{var s__7549 = temp__3698__auto____7548;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7549)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7549)));
} else
{return null;
}
})));
});

return mapi__7550.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7551 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7551))
{var s__7552 = temp__3698__auto____7551;

var x__7553 = f.call(null,cljs.core.first.call(null,s__7552));

if(cljs.core.truth_((x__7553 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7552));
} else
{return cljs.core.cons.call(null,x__7553,keep.call(null,f,cljs.core.rest.call(null,s__7552)));
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
var keepi__7563 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7560 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7560))
{var s__7561 = temp__3698__auto____7560;

var x__7562 = f.call(null,idx,cljs.core.first.call(null,s__7561));

if(cljs.core.truth_((x__7562 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7561));
} else
{return cljs.core.cons.call(null,x__7562,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7561)));
}
} else
{return null;
}
})));
});

return keepi__7563.call(null,0,coll);
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
var every_pred__7608 = (function (p){
return (function() {
var ep1 = null;
var ep1__7613 = (function (){
return true;
});
var ep1__7614 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7615 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7570 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7570))
{return p.call(null,y);
} else
{return and__3546__auto____7570;
}
})());
});
var ep1__7616 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7571 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7571))
{var and__3546__auto____7572 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7572))
{return p.call(null,z);
} else
{return and__3546__auto____7572;
}
} else
{return and__3546__auto____7571;
}
})());
});
var ep1__7617 = (function() { 
var G__7619__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7573 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7573))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7573;
}
})());
};
var G__7619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7619__delegate.call(this, x, y, z, args);
};
G__7619.cljs$lang$maxFixedArity = 3;
G__7619.cljs$lang$applyTo = (function (arglist__7620){
var x = cljs.core.first(arglist__7620);
var y = cljs.core.first(cljs.core.next(arglist__7620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7620)));
return G__7619__delegate.call(this, x, y, z, args);
});
return G__7619;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7613.call(this);
case  1 :
return ep1__7614.call(this,x);
case  2 :
return ep1__7615.call(this,x,y);
case  3 :
return ep1__7616.call(this,x,y,z);
default:
return ep1__7617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7617.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7609 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7621 = (function (){
return true;
});
var ep2__7622 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7574 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7574))
{return p2.call(null,x);
} else
{return and__3546__auto____7574;
}
})());
});
var ep2__7623 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7575 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7575))
{var and__3546__auto____7576 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7576))
{var and__3546__auto____7577 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7577))
{return p2.call(null,y);
} else
{return and__3546__auto____7577;
}
} else
{return and__3546__auto____7576;
}
} else
{return and__3546__auto____7575;
}
})());
});
var ep2__7624 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7578 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7578))
{var and__3546__auto____7579 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7579))
{var and__3546__auto____7580 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7580))
{var and__3546__auto____7581 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7581))
{var and__3546__auto____7582 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7582))
{return p2.call(null,z);
} else
{return and__3546__auto____7582;
}
} else
{return and__3546__auto____7581;
}
} else
{return and__3546__auto____7580;
}
} else
{return and__3546__auto____7579;
}
} else
{return and__3546__auto____7578;
}
})());
});
var ep2__7625 = (function() { 
var G__7627__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7583 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7583))
{return cljs.core.every_QMARK_.call(null,(function (p1__7554_SHARP_){
var and__3546__auto____7584 = p1.call(null,p1__7554_SHARP_);

if(cljs.core.truth_(and__3546__auto____7584))
{return p2.call(null,p1__7554_SHARP_);
} else
{return and__3546__auto____7584;
}
}),args);
} else
{return and__3546__auto____7583;
}
})());
};
var G__7627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7627__delegate.call(this, x, y, z, args);
};
G__7627.cljs$lang$maxFixedArity = 3;
G__7627.cljs$lang$applyTo = (function (arglist__7628){
var x = cljs.core.first(arglist__7628);
var y = cljs.core.first(cljs.core.next(arglist__7628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7628)));
return G__7627__delegate.call(this, x, y, z, args);
});
return G__7627;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7621.call(this);
case  1 :
return ep2__7622.call(this,x);
case  2 :
return ep2__7623.call(this,x,y);
case  3 :
return ep2__7624.call(this,x,y,z);
default:
return ep2__7625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7625.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7610 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7629 = (function (){
return true;
});
var ep3__7630 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7585 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7585))
{var and__3546__auto____7586 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7586))
{return p3.call(null,x);
} else
{return and__3546__auto____7586;
}
} else
{return and__3546__auto____7585;
}
})());
});
var ep3__7631 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7587 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7587))
{var and__3546__auto____7588 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7588))
{var and__3546__auto____7589 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7589))
{var and__3546__auto____7590 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7590))
{var and__3546__auto____7591 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7591))
{return p3.call(null,y);
} else
{return and__3546__auto____7591;
}
} else
{return and__3546__auto____7590;
}
} else
{return and__3546__auto____7589;
}
} else
{return and__3546__auto____7588;
}
} else
{return and__3546__auto____7587;
}
})());
});
var ep3__7632 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7592 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7592))
{var and__3546__auto____7593 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7593))
{var and__3546__auto____7594 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7594))
{var and__3546__auto____7595 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7595))
{var and__3546__auto____7596 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7596))
{var and__3546__auto____7597 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7597))
{var and__3546__auto____7598 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7598))
{var and__3546__auto____7599 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7599))
{return p3.call(null,z);
} else
{return and__3546__auto____7599;
}
} else
{return and__3546__auto____7598;
}
} else
{return and__3546__auto____7597;
}
} else
{return and__3546__auto____7596;
}
} else
{return and__3546__auto____7595;
}
} else
{return and__3546__auto____7594;
}
} else
{return and__3546__auto____7593;
}
} else
{return and__3546__auto____7592;
}
})());
});
var ep3__7633 = (function() { 
var G__7635__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7600 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7600))
{return cljs.core.every_QMARK_.call(null,(function (p1__7555_SHARP_){
var and__3546__auto____7601 = p1.call(null,p1__7555_SHARP_);

if(cljs.core.truth_(and__3546__auto____7601))
{var and__3546__auto____7602 = p2.call(null,p1__7555_SHARP_);

if(cljs.core.truth_(and__3546__auto____7602))
{return p3.call(null,p1__7555_SHARP_);
} else
{return and__3546__auto____7602;
}
} else
{return and__3546__auto____7601;
}
}),args);
} else
{return and__3546__auto____7600;
}
})());
};
var G__7635 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7635__delegate.call(this, x, y, z, args);
};
G__7635.cljs$lang$maxFixedArity = 3;
G__7635.cljs$lang$applyTo = (function (arglist__7636){
var x = cljs.core.first(arglist__7636);
var y = cljs.core.first(cljs.core.next(arglist__7636));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7636)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7636)));
return G__7635__delegate.call(this, x, y, z, args);
});
return G__7635;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7629.call(this);
case  1 :
return ep3__7630.call(this,x);
case  2 :
return ep3__7631.call(this,x,y);
case  3 :
return ep3__7632.call(this,x,y,z);
default:
return ep3__7633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7633.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7611 = (function() { 
var G__7637__delegate = function (p1,p2,p3,ps){
var ps__7603 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7638 = (function (){
return true;
});
var epn__7639 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7556_SHARP_){
return p1__7556_SHARP_.call(null,x);
}),ps__7603);
});
var epn__7640 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7557_SHARP_){
var and__3546__auto____7604 = p1__7557_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7604))
{return p1__7557_SHARP_.call(null,y);
} else
{return and__3546__auto____7604;
}
}),ps__7603);
});
var epn__7641 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7558_SHARP_){
var and__3546__auto____7605 = p1__7558_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7605))
{var and__3546__auto____7606 = p1__7558_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7606))
{return p1__7558_SHARP_.call(null,z);
} else
{return and__3546__auto____7606;
}
} else
{return and__3546__auto____7605;
}
}),ps__7603);
});
var epn__7642 = (function() { 
var G__7644__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7607 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7607))
{return cljs.core.every_QMARK_.call(null,(function (p1__7559_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7559_SHARP_,args);
}),ps__7603);
} else
{return and__3546__auto____7607;
}
})());
};
var G__7644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7644__delegate.call(this, x, y, z, args);
};
G__7644.cljs$lang$maxFixedArity = 3;
G__7644.cljs$lang$applyTo = (function (arglist__7645){
var x = cljs.core.first(arglist__7645);
var y = cljs.core.first(cljs.core.next(arglist__7645));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7645)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7645)));
return G__7644__delegate.call(this, x, y, z, args);
});
return G__7644;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7638.call(this);
case  1 :
return epn__7639.call(this,x);
case  2 :
return epn__7640.call(this,x,y);
case  3 :
return epn__7641.call(this,x,y,z);
default:
return epn__7642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7642.cljs$lang$applyTo;
return epn;
})()
};
var G__7637 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7637__delegate.call(this, p1, p2, p3, ps);
};
G__7637.cljs$lang$maxFixedArity = 3;
G__7637.cljs$lang$applyTo = (function (arglist__7646){
var p1 = cljs.core.first(arglist__7646);
var p2 = cljs.core.first(cljs.core.next(arglist__7646));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7646)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7646)));
return G__7637__delegate.call(this, p1, p2, p3, ps);
});
return G__7637;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7608.call(this,p1);
case  2 :
return every_pred__7609.call(this,p1,p2);
case  3 :
return every_pred__7610.call(this,p1,p2,p3);
default:
return every_pred__7611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7611.cljs$lang$applyTo;
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
var some_fn__7686 = (function (p){
return (function() {
var sp1 = null;
var sp1__7691 = (function (){
return null;
});
var sp1__7692 = (function (x){
return p.call(null,x);
});
var sp1__7693 = (function (x,y){
var or__3548__auto____7648 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7648))
{return or__3548__auto____7648;
} else
{return p.call(null,y);
}
});
var sp1__7694 = (function (x,y,z){
var or__3548__auto____7649 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7649))
{return or__3548__auto____7649;
} else
{var or__3548__auto____7650 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7650))
{return or__3548__auto____7650;
} else
{return p.call(null,z);
}
}
});
var sp1__7695 = (function() { 
var G__7697__delegate = function (x,y,z,args){
var or__3548__auto____7651 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7697__delegate.call(this, x, y, z, args);
};
G__7697.cljs$lang$maxFixedArity = 3;
G__7697.cljs$lang$applyTo = (function (arglist__7698){
var x = cljs.core.first(arglist__7698);
var y = cljs.core.first(cljs.core.next(arglist__7698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7698)));
return G__7697__delegate.call(this, x, y, z, args);
});
return G__7697;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__7691.call(this);
case  1 :
return sp1__7692.call(this,x);
case  2 :
return sp1__7693.call(this,x,y);
case  3 :
return sp1__7694.call(this,x,y,z);
default:
return sp1__7695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__7695.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__7687 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__7699 = (function (){
return null;
});
var sp2__7700 = (function (x){
var or__3548__auto____7652 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{return p2.call(null,x);
}
});
var sp2__7701 = (function (x,y){
var or__3548__auto____7653 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{var or__3548__auto____7654 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{var or__3548__auto____7655 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__7702 = (function (x,y,z){
var or__3548__auto____7656 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{var or__3548__auto____7657 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7658 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{var or__3548__auto____7659 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
} else
{var or__3548__auto____7660 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7660))
{return or__3548__auto____7660;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__7703 = (function() { 
var G__7705__delegate = function (x,y,z,args){
var or__3548__auto____7661 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{return cljs.core.some.call(null,(function (p1__7564_SHARP_){
var or__3548__auto____7662 = p1.call(null,p1__7564_SHARP_);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
} else
{return p2.call(null,p1__7564_SHARP_);
}
}),args);
}
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
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__7699.call(this);
case  1 :
return sp2__7700.call(this,x);
case  2 :
return sp2__7701.call(this,x,y);
case  3 :
return sp2__7702.call(this,x,y,z);
default:
return sp2__7703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__7703.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__7688 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__7707 = (function (){
return null;
});
var sp3__7708 = (function (x){
var or__3548__auto____7663 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
} else
{var or__3548__auto____7664 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{return p3.call(null,x);
}
}
});
var sp3__7709 = (function (x,y){
var or__3548__auto____7665 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{var or__3548__auto____7666 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7666))
{return or__3548__auto____7666;
} else
{var or__3548__auto____7667 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
} else
{var or__3548__auto____7668 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7669 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__7710 = (function (x,y,z){
var or__3548__auto____7670 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
} else
{var or__3548__auto____7671 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{var or__3548__auto____7672 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7672))
{return or__3548__auto____7672;
} else
{var or__3548__auto____7673 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{var or__3548__auto____7674 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{var or__3548__auto____7675 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{var or__3548__auto____7676 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{var or__3548__auto____7677 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
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
var sp3__7711 = (function() { 
var G__7713__delegate = function (x,y,z,args){
var or__3548__auto____7678 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7678))
{return or__3548__auto____7678;
} else
{return cljs.core.some.call(null,(function (p1__7565_SHARP_){
var or__3548__auto____7679 = p1.call(null,p1__7565_SHARP_);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7680 = p2.call(null,p1__7565_SHARP_);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{return p3.call(null,p1__7565_SHARP_);
}
}
}),args);
}
};
var G__7713 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7713__delegate.call(this, x, y, z, args);
};
G__7713.cljs$lang$maxFixedArity = 3;
G__7713.cljs$lang$applyTo = (function (arglist__7714){
var x = cljs.core.first(arglist__7714);
var y = cljs.core.first(cljs.core.next(arglist__7714));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7714)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7714)));
return G__7713__delegate.call(this, x, y, z, args);
});
return G__7713;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__7707.call(this);
case  1 :
return sp3__7708.call(this,x);
case  2 :
return sp3__7709.call(this,x,y);
case  3 :
return sp3__7710.call(this,x,y,z);
default:
return sp3__7711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__7711.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__7689 = (function() { 
var G__7715__delegate = function (p1,p2,p3,ps){
var ps__7681 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__7716 = (function (){
return null;
});
var spn__7717 = (function (x){
return cljs.core.some.call(null,(function (p1__7566_SHARP_){
return p1__7566_SHARP_.call(null,x);
}),ps__7681);
});
var spn__7718 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7567_SHARP_){
var or__3548__auto____7682 = p1__7567_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
} else
{return p1__7567_SHARP_.call(null,y);
}
}),ps__7681);
});
var spn__7719 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7568_SHARP_){
var or__3548__auto____7683 = p1__7568_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
} else
{var or__3548__auto____7684 = p1__7568_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____7684))
{return or__3548__auto____7684;
} else
{return p1__7568_SHARP_.call(null,z);
}
}
}),ps__7681);
});
var spn__7720 = (function() { 
var G__7722__delegate = function (x,y,z,args){
var or__3548__auto____7685 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7685))
{return or__3548__auto____7685;
} else
{return cljs.core.some.call(null,(function (p1__7569_SHARP_){
return cljs.core.some.call(null,p1__7569_SHARP_,args);
}),ps__7681);
}
};
var G__7722 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7722__delegate.call(this, x, y, z, args);
};
G__7722.cljs$lang$maxFixedArity = 3;
G__7722.cljs$lang$applyTo = (function (arglist__7723){
var x = cljs.core.first(arglist__7723);
var y = cljs.core.first(cljs.core.next(arglist__7723));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7723)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7723)));
return G__7722__delegate.call(this, x, y, z, args);
});
return G__7722;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__7716.call(this);
case  1 :
return spn__7717.call(this,x);
case  2 :
return spn__7718.call(this,x,y);
case  3 :
return spn__7719.call(this,x,y,z);
default:
return spn__7720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__7720.cljs$lang$applyTo;
return spn;
})()
};
var G__7715 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7715__delegate.call(this, p1, p2, p3, ps);
};
G__7715.cljs$lang$maxFixedArity = 3;
G__7715.cljs$lang$applyTo = (function (arglist__7724){
var p1 = cljs.core.first(arglist__7724);
var p2 = cljs.core.first(cljs.core.next(arglist__7724));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7724)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7724)));
return G__7715__delegate.call(this, p1, p2, p3, ps);
});
return G__7715;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__7686.call(this,p1);
case  2 :
return some_fn__7687.call(this,p1,p2);
case  3 :
return some_fn__7688.call(this,p1,p2,p3);
default:
return some_fn__7689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__7689.cljs$lang$applyTo;
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
var map__7737 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7725 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7725))
{var s__7726 = temp__3698__auto____7725;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7726)),map.call(null,f,cljs.core.rest.call(null,s__7726)));
} else
{return null;
}
})));
});
var map__7738 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7727 = cljs.core.seq.call(null,c1);
var s2__7728 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7729 = s1__7727;

if(cljs.core.truth_(and__3546__auto____7729))
{return s2__7728;
} else
{return and__3546__auto____7729;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7727),cljs.core.first.call(null,s2__7728)),map.call(null,f,cljs.core.rest.call(null,s1__7727),cljs.core.rest.call(null,s2__7728)));
} else
{return null;
}
})));
});
var map__7739 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7730 = cljs.core.seq.call(null,c1);
var s2__7731 = cljs.core.seq.call(null,c2);
var s3__7732 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____7733 = s1__7730;

if(cljs.core.truth_(and__3546__auto____7733))
{var and__3546__auto____7734 = s2__7731;

if(cljs.core.truth_(and__3546__auto____7734))
{return s3__7732;
} else
{return and__3546__auto____7734;
}
} else
{return and__3546__auto____7733;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7730),cljs.core.first.call(null,s2__7731),cljs.core.first.call(null,s3__7732)),map.call(null,f,cljs.core.rest.call(null,s1__7730),cljs.core.rest.call(null,s2__7731),cljs.core.rest.call(null,s3__7732)));
} else
{return null;
}
})));
});
var map__7740 = (function() { 
var G__7742__delegate = function (f,c1,c2,c3,colls){
var step__7736 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7735 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7735)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7735),step.call(null,map.call(null,cljs.core.rest,ss__7735)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7647_SHARP_){
return cljs.core.apply.call(null,f,p1__7647_SHARP_);
}),step__7736.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7742 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7742__delegate.call(this, f, c1, c2, c3, colls);
};
G__7742.cljs$lang$maxFixedArity = 4;
G__7742.cljs$lang$applyTo = (function (arglist__7743){
var f = cljs.core.first(arglist__7743);
var c1 = cljs.core.first(cljs.core.next(arglist__7743));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7743)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7743))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7743))));
return G__7742__delegate.call(this, f, c1, c2, c3, colls);
});
return G__7742;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__7737.call(this,f,c1);
case  3 :
return map__7738.call(this,f,c1,c2);
case  4 :
return map__7739.call(this,f,c1,c2,c3);
default:
return map__7740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__7740.cljs$lang$applyTo;
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
{var temp__3698__auto____7744 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7744))
{var s__7745 = temp__3698__auto____7744;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7745),take.call(null,(n - 1),cljs.core.rest.call(null,s__7745)));
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
var step__7748 = (function (n,coll){
while(true){
var s__7746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7747 = (n > 0);

if(cljs.core.truth_(and__3546__auto____7747))
{return s__7746;
} else
{return and__3546__auto____7747;
}
})()))
{{
var G__7749 = (n - 1);
var G__7750 = cljs.core.rest.call(null,s__7746);
n = G__7749;
coll = G__7750;
continue;
}
} else
{return s__7746;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7748.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__7751 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__7752 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__7751.call(this,n);
case  2 :
return drop_last__7752.call(this,n,s);
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
var s__7754 = cljs.core.seq.call(null,coll);
var lead__7755 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__7755))
{{
var G__7756 = cljs.core.next.call(null,s__7754);
var G__7757 = cljs.core.next.call(null,lead__7755);
s__7754 = G__7756;
lead__7755 = G__7757;
continue;
}
} else
{return s__7754;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7760 = (function (pred,coll){
while(true){
var s__7758 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7759 = s__7758;

if(cljs.core.truth_(and__3546__auto____7759))
{return pred.call(null,cljs.core.first.call(null,s__7758));
} else
{return and__3546__auto____7759;
}
})()))
{{
var G__7761 = pred;
var G__7762 = cljs.core.rest.call(null,s__7758);
pred = G__7761;
coll = G__7762;
continue;
}
} else
{return s__7758;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7760.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7763))
{var s__7764 = temp__3698__auto____7763;

return cljs.core.concat.call(null,s__7764,cycle.call(null,s__7764));
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
var repeat__7765 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__7766 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__7765.call(this,n);
case  2 :
return repeat__7766.call(this,n,x);
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
var repeatedly__7768 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__7769 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__7768.call(this,n);
case  2 :
return repeatedly__7769.call(this,n,f);
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
var interleave__7775 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7771 = cljs.core.seq.call(null,c1);
var s2__7772 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7773 = s1__7771;

if(cljs.core.truth_(and__3546__auto____7773))
{return s2__7772;
} else
{return and__3546__auto____7773;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7771),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7772),interleave.call(null,cljs.core.rest.call(null,s1__7771),cljs.core.rest.call(null,s2__7772))));
} else
{return null;
}
})));
});
var interleave__7776 = (function() { 
var G__7778__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7774 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7774)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7774),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7774)));
} else
{return null;
}
})));
};
var G__7778 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7778__delegate.call(this, c1, c2, colls);
};
G__7778.cljs$lang$maxFixedArity = 2;
G__7778.cljs$lang$applyTo = (function (arglist__7779){
var c1 = cljs.core.first(arglist__7779);
var c2 = cljs.core.first(cljs.core.next(arglist__7779));
var colls = cljs.core.rest(cljs.core.next(arglist__7779));
return G__7778__delegate.call(this, c1, c2, colls);
});
return G__7778;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__7775.call(this,c1,c2);
default:
return interleave__7776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__7776.cljs$lang$applyTo;
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
var cat__7782 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7780))
{var coll__7781 = temp__3695__auto____7780;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7781),cat.call(null,cljs.core.rest.call(null,coll__7781),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__7782.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__7783 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__7784 = (function() { 
var G__7786__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7786 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7786__delegate.call(this, f, coll, colls);
};
G__7786.cljs$lang$maxFixedArity = 2;
G__7786.cljs$lang$applyTo = (function (arglist__7787){
var f = cljs.core.first(arglist__7787);
var coll = cljs.core.first(cljs.core.next(arglist__7787));
var colls = cljs.core.rest(cljs.core.next(arglist__7787));
return G__7786__delegate.call(this, f, coll, colls);
});
return G__7786;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__7783.call(this,f,coll);
default:
return mapcat__7784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__7784.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7788 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7788))
{var s__7789 = temp__3698__auto____7788;

var f__7790 = cljs.core.first.call(null,s__7789);
var r__7791 = cljs.core.rest.call(null,s__7789);

if(cljs.core.truth_(pred.call(null,f__7790)))
{return cljs.core.cons.call(null,f__7790,filter.call(null,pred,r__7791));
} else
{return filter.call(null,pred,r__7791);
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
var walk__7793 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__7793.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7792_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7792_SHARP_));
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
var partition__7800 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__7801 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7794 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7794))
{var s__7795 = temp__3698__auto____7794;

var p__7796 = cljs.core.take.call(null,n,s__7795);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7796))))
{return cljs.core.cons.call(null,p__7796,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7795)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__7802 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7797))
{var s__7798 = temp__3698__auto____7797;

var p__7799 = cljs.core.take.call(null,n,s__7798);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7799))))
{return cljs.core.cons.call(null,p__7799,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7798)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7799,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__7800.call(this,n,step);
case  3 :
return partition__7801.call(this,n,step,pad);
case  4 :
return partition__7802.call(this,n,step,pad,coll);
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
var get_in__7808 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__7809 = (function (m,ks,not_found){
var sentinel__7804 = cljs.core.lookup_sentinel;
var m__7805 = m;
var ks__7806 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__7806))
{var m__7807 = cljs.core.get.call(null,m__7805,cljs.core.first.call(null,ks__7806),sentinel__7804);

if(cljs.core.truth_((sentinel__7804 === m__7807)))
{return not_found;
} else
{{
var G__7811 = sentinel__7804;
var G__7812 = m__7807;
var G__7813 = cljs.core.next.call(null,ks__7806);
sentinel__7804 = G__7811;
m__7805 = G__7812;
ks__7806 = G__7813;
continue;
}
}
} else
{return m__7805;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__7808.call(this,m,ks);
case  3 :
return get_in__7809.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__7814,v){
var vec__7815__7816 = p__7814;
var k__7817 = cljs.core.nth.call(null,vec__7815__7816,0,null);
var ks__7818 = cljs.core.nthnext.call(null,vec__7815__7816,1);

if(cljs.core.truth_(ks__7818))
{return cljs.core.assoc.call(null,m,k__7817,assoc_in.call(null,cljs.core.get.call(null,m,k__7817),ks__7818,v));
} else
{return cljs.core.assoc.call(null,m,k__7817,v);
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
var update_in__delegate = function (m,p__7819,f,args){
var vec__7820__7821 = p__7819;
var k__7822 = cljs.core.nth.call(null,vec__7820__7821,0,null);
var ks__7823 = cljs.core.nthnext.call(null,vec__7820__7821,1);

if(cljs.core.truth_(ks__7823))
{return cljs.core.assoc.call(null,m,k__7822,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__7822),ks__7823,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7822,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__7822),args));
}
};
var update_in = function (m,p__7819,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7819, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7824){
var m = cljs.core.first(arglist__7824);
var p__7819 = cljs.core.first(cljs.core.next(arglist__7824));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7824)));
return update_in__delegate.call(this, m, p__7819, f, args);
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
var this__7825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7858 = null;
var G__7858__7859 = (function (coll,k){
var this__7826 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7858__7860 = (function (coll,k,not_found){
var this__7827 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7858 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7858__7859.call(this,coll,k);
case  3 :
return G__7858__7860.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7858;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7828 = this;
var new_array__7829 = cljs.core.aclone.call(null,this__7828.array);

(new_array__7829[k] = v);
return (new cljs.core.Vector(this__7828.meta,new_array__7829));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__7862 = null;
var G__7862__7863 = (function (tsym7830,k){
var this__7832 = this;
var tsym7830__7833 = this;

var coll__7834 = tsym7830__7833;

return cljs.core._lookup.call(null,coll__7834,k);
});
var G__7862__7864 = (function (tsym7831,k,not_found){
var this__7835 = this;
var tsym7831__7836 = this;

var coll__7837 = tsym7831__7836;

return cljs.core._lookup.call(null,coll__7837,k,not_found);
});
G__7862 = function(tsym7831,k,not_found){
switch(arguments.length){
case  2 :
return G__7862__7863.call(this,tsym7831,k);
case  3 :
return G__7862__7864.call(this,tsym7831,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7862;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7838 = this;
var new_array__7839 = cljs.core.aclone.call(null,this__7838.array);

new_array__7839.push(o);
return (new cljs.core.Vector(this__7838.meta,new_array__7839));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7866 = null;
var G__7866__7867 = (function (v,f){
var this__7840 = this;
return cljs.core.ci_reduce.call(null,this__7840.array,f);
});
var G__7866__7868 = (function (v,f,start){
var this__7841 = this;
return cljs.core.ci_reduce.call(null,this__7841.array,f,start);
});
G__7866 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__7866__7867.call(this,v,f);
case  3 :
return G__7866__7868.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7866;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7842 = this;
if(cljs.core.truth_((this__7842.array.length > 0)))
{var vector_seq__7843 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__7842.array.length)))
{return cljs.core.cons.call(null,(this__7842.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__7843.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7844 = this;
return this__7844.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7845 = this;
var count__7846 = this__7845.array.length;

if(cljs.core.truth_((count__7846 > 0)))
{return (this__7845.array[(count__7846 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7847 = this;
if(cljs.core.truth_((this__7847.array.length > 0)))
{var new_array__7848 = cljs.core.aclone.call(null,this__7847.array);

new_array__7848.pop();
return (new cljs.core.Vector(this__7847.meta,new_array__7848));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7849 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7850 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7851 = this;
return (new cljs.core.Vector(meta,this__7851.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7852 = this;
return this__7852.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7870 = null;
var G__7870__7871 = (function (coll,n){
var this__7853 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7854 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7854))
{return (n < this__7853.array.length);
} else
{return and__3546__auto____7854;
}
})()))
{return (this__7853.array[n]);
} else
{return null;
}
});
var G__7870__7872 = (function (coll,n,not_found){
var this__7855 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7856 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7856))
{return (n < this__7855.array.length);
} else
{return and__3546__auto____7856;
}
})()))
{return (this__7855.array[n]);
} else
{return not_found;
}
});
G__7870 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7870__7871.call(this,coll,n);
case  3 :
return G__7870__7872.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7870;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7857 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7857.meta);
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
vector.cljs$lang$applyTo = (function (arglist__7874){
var args = cljs.core.seq( arglist__7874 );;
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
var this__7875 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7903 = null;
var G__7903__7904 = (function (coll,k){
var this__7876 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7903__7905 = (function (coll,k,not_found){
var this__7877 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7903__7904.call(this,coll,k);
case  3 :
return G__7903__7905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7903;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__7878 = this;
var v_pos__7879 = (this__7878.start + key);

return (new cljs.core.Subvec(this__7878.meta,cljs.core._assoc.call(null,this__7878.v,v_pos__7879,val),this__7878.start,((this__7878.end > (v_pos__7879 + 1)) ? this__7878.end : (v_pos__7879 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__7907 = null;
var G__7907__7908 = (function (tsym7880,k){
var this__7882 = this;
var tsym7880__7883 = this;

var coll__7884 = tsym7880__7883;

return cljs.core._lookup.call(null,coll__7884,k);
});
var G__7907__7909 = (function (tsym7881,k,not_found){
var this__7885 = this;
var tsym7881__7886 = this;

var coll__7887 = tsym7881__7886;

return cljs.core._lookup.call(null,coll__7887,k,not_found);
});
G__7907 = function(tsym7881,k,not_found){
switch(arguments.length){
case  2 :
return G__7907__7908.call(this,tsym7881,k);
case  3 :
return G__7907__7909.call(this,tsym7881,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7907;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7888 = this;
return (new cljs.core.Subvec(this__7888.meta,cljs.core._assoc_n.call(null,this__7888.v,this__7888.end,o),this__7888.start,(this__7888.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7911 = null;
var G__7911__7912 = (function (coll,f){
var this__7889 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__7911__7913 = (function (coll,f,start){
var this__7890 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__7911 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7911__7912.call(this,coll,f);
case  3 :
return G__7911__7913.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7911;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7891 = this;
var subvec_seq__7892 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__7891.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7891.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__7892.call(null,this__7891.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7893 = this;
return (this__7893.end - this__7893.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7894 = this;
return cljs.core._nth.call(null,this__7894.v,(this__7894.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7895 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__7895.start,this__7895.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7895.meta,this__7895.v,this__7895.start,(this__7895.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7896 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7897 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7898 = this;
return (new cljs.core.Subvec(meta,this__7898.v,this__7898.start,this__7898.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7899 = this;
return this__7899.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7915 = null;
var G__7915__7916 = (function (coll,n){
var this__7900 = this;
return cljs.core._nth.call(null,this__7900.v,(this__7900.start + n));
});
var G__7915__7917 = (function (coll,n,not_found){
var this__7901 = this;
return cljs.core._nth.call(null,this__7901.v,(this__7901.start + n),not_found);
});
G__7915 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7915__7916.call(this,coll,n);
case  3 :
return G__7915__7917.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7915;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7902 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7902.meta);
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
var subvec__7919 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__7920 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__7919.call(this,v,start);
case  3 :
return subvec__7920.call(this,v,start,end);
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
var this__7922 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7923 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7925 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7925.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7926 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7927 = this;
return cljs.core._first.call(null,this__7927.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7928 = this;
var temp__3695__auto____7929 = cljs.core.next.call(null,this__7928.front);

if(cljs.core.truth_(temp__3695__auto____7929))
{var f1__7930 = temp__3695__auto____7929;

return (new cljs.core.PersistentQueueSeq(this__7928.meta,f1__7930,this__7928.rear));
} else
{if(cljs.core.truth_((this__7928.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7928.meta,this__7928.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7931 = this;
return this__7931.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7932 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7932.front,this__7932.rear));
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
var this__7933 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7934 = this;
if(cljs.core.truth_(this__7934.front))
{return (new cljs.core.PersistentQueue(this__7934.meta,(this__7934.count + 1),this__7934.front,cljs.core.conj.call(null,(function (){var or__3548__auto____7935 = this__7934.rear;

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__7934.meta,(this__7934.count + 1),cljs.core.conj.call(null,this__7934.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7936 = this;
var rear__7937 = cljs.core.seq.call(null,this__7936.rear);

if(cljs.core.truth_((function (){var or__3548__auto____7938 = this__7936.front;

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{return rear__7937;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7936.front,cljs.core.seq.call(null,rear__7937)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7939 = this;
return this__7939.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7940 = this;
return cljs.core._first.call(null,this__7940.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7941 = this;
if(cljs.core.truth_(this__7941.front))
{var temp__3695__auto____7942 = cljs.core.next.call(null,this__7941.front);

if(cljs.core.truth_(temp__3695__auto____7942))
{var f1__7943 = temp__3695__auto____7942;

return (new cljs.core.PersistentQueue(this__7941.meta,(this__7941.count - 1),f1__7943,this__7941.rear));
} else
{return (new cljs.core.PersistentQueue(this__7941.meta,(this__7941.count - 1),cljs.core.seq.call(null,this__7941.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7944 = this;
return cljs.core.first.call(null,this__7944.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7945 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7946 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7947 = this;
return (new cljs.core.PersistentQueue(meta,this__7947.count,this__7947.front,this__7947.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7948 = this;
return this__7948.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7949 = this;
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
var this__7950 = this;
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
var len__7951 = array.length;

var i__7952 = 0;

while(true){
if(cljs.core.truth_((i__7952 < len__7951)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__7952]))))
{return i__7952;
} else
{{
var G__7953 = (i__7952 + incr);
i__7952 = G__7953;
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
var obj_map_contains_key_QMARK___7955 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___7956 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____7954 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7954))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7954;
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
return obj_map_contains_key_QMARK___7955.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___7956.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__7959 = cljs.core.hash.call(null,a);
var b__7960 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__7959 < b__7960)))
{return -1;
} else
{if(cljs.core.truth_((a__7959 > b__7960)))
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
var this__7961 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7988 = null;
var G__7988__7989 = (function (coll,k){
var this__7962 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7988__7990 = (function (coll,k,not_found){
var this__7963 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7963.strobj,(this__7963.strobj[k]),not_found);
});
G__7988 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7988__7989.call(this,coll,k);
case  3 :
return G__7988__7990.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7988;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7964 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__7965 = goog.object.clone.call(null,this__7964.strobj);
var overwrite_QMARK___7966 = new_strobj__7965.hasOwnProperty(k);

(new_strobj__7965[k] = v);
if(cljs.core.truth_(overwrite_QMARK___7966))
{return (new cljs.core.ObjMap(this__7964.meta,this__7964.keys,new_strobj__7965));
} else
{var new_keys__7967 = cljs.core.aclone.call(null,this__7964.keys);

new_keys__7967.push(k);
return (new cljs.core.ObjMap(this__7964.meta,new_keys__7967,new_strobj__7965));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__7964.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7968 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7968.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__7992 = null;
var G__7992__7993 = (function (tsym7969,k){
var this__7971 = this;
var tsym7969__7972 = this;

var coll__7973 = tsym7969__7972;

return cljs.core._lookup.call(null,coll__7973,k);
});
var G__7992__7994 = (function (tsym7970,k,not_found){
var this__7974 = this;
var tsym7970__7975 = this;

var coll__7976 = tsym7970__7975;

return cljs.core._lookup.call(null,coll__7976,k,not_found);
});
G__7992 = function(tsym7970,k,not_found){
switch(arguments.length){
case  2 :
return G__7992__7993.call(this,tsym7970,k);
case  3 :
return G__7992__7994.call(this,tsym7970,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7992;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7977 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7978 = this;
if(cljs.core.truth_((this__7978.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__7958_SHARP_){
return cljs.core.vector.call(null,p1__7958_SHARP_,(this__7978.strobj[p1__7958_SHARP_]));
}),this__7978.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7979 = this;
return this__7979.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7980 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7981 = this;
return (new cljs.core.ObjMap(meta,this__7981.keys,this__7981.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7982 = this;
return this__7982.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7983 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7983.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7984 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7985 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7985))
{return this__7984.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7985;
}
})()))
{var new_keys__7986 = cljs.core.aclone.call(null,this__7984.keys);
var new_strobj__7987 = goog.object.clone.call(null,this__7984.strobj);

new_keys__7986.splice(cljs.core.scan_array.call(null,1,k,new_keys__7986),1);
cljs.core.js_delete.call(null,new_strobj__7987,k);
return (new cljs.core.ObjMap(this__7984.meta,new_keys__7986,new_strobj__7987));
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
var this__7997 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8035 = null;
var G__8035__8036 = (function (coll,k){
var this__7998 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8035__8037 = (function (coll,k,not_found){
var this__7999 = this;
var bucket__8000 = (this__7999.hashobj[cljs.core.hash.call(null,k)]);
var i__8001 = (cljs.core.truth_(bucket__8000)?cljs.core.scan_array.call(null,2,k,bucket__8000):null);

if(cljs.core.truth_(i__8001))
{return (bucket__8000[(i__8001 + 1)]);
} else
{return not_found;
}
});
G__8035 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8035__8036.call(this,coll,k);
case  3 :
return G__8035__8037.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8035;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8002 = this;
var h__8003 = cljs.core.hash.call(null,k);
var bucket__8004 = (this__8002.hashobj[h__8003]);

if(cljs.core.truth_(bucket__8004))
{var new_bucket__8005 = cljs.core.aclone.call(null,bucket__8004);
var new_hashobj__8006 = goog.object.clone.call(null,this__8002.hashobj);

(new_hashobj__8006[h__8003] = new_bucket__8005);
var temp__3695__auto____8007 = cljs.core.scan_array.call(null,2,k,new_bucket__8005);

if(cljs.core.truth_(temp__3695__auto____8007))
{var i__8008 = temp__3695__auto____8007;

(new_bucket__8005[(i__8008 + 1)] = v);
return (new cljs.core.HashMap(this__8002.meta,this__8002.count,new_hashobj__8006));
} else
{new_bucket__8005.push(k,v);
return (new cljs.core.HashMap(this__8002.meta,(this__8002.count + 1),new_hashobj__8006));
}
} else
{var new_hashobj__8009 = goog.object.clone.call(null,this__8002.hashobj);

(new_hashobj__8009[h__8003] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__8002.meta,(this__8002.count + 1),new_hashobj__8009));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8010 = this;
var bucket__8011 = (this__8010.hashobj[cljs.core.hash.call(null,k)]);
var i__8012 = (cljs.core.truth_(bucket__8011)?cljs.core.scan_array.call(null,2,k,bucket__8011):null);

if(cljs.core.truth_(i__8012))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8039 = null;
var G__8039__8040 = (function (tsym8013,k){
var this__8015 = this;
var tsym8013__8016 = this;

var coll__8017 = tsym8013__8016;

return cljs.core._lookup.call(null,coll__8017,k);
});
var G__8039__8041 = (function (tsym8014,k,not_found){
var this__8018 = this;
var tsym8014__8019 = this;

var coll__8020 = tsym8014__8019;

return cljs.core._lookup.call(null,coll__8020,k,not_found);
});
G__8039 = function(tsym8014,k,not_found){
switch(arguments.length){
case  2 :
return G__8039__8040.call(this,tsym8014,k);
case  3 :
return G__8039__8041.call(this,tsym8014,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8039;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8021 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8022 = this;
if(cljs.core.truth_((this__8022.count > 0)))
{var hashes__8023 = cljs.core.js_keys.call(null,this__8022.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__7996_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8022.hashobj[p1__7996_SHARP_])));
}),hashes__8023);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8024 = this;
return this__8024.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8025 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8026 = this;
return (new cljs.core.HashMap(meta,this__8026.count,this__8026.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8027 = this;
return this__8027.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8028 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8028.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8029 = this;
var h__8030 = cljs.core.hash.call(null,k);
var bucket__8031 = (this__8029.hashobj[h__8030]);
var i__8032 = (cljs.core.truth_(bucket__8031)?cljs.core.scan_array.call(null,2,k,bucket__8031):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8032)))
{return coll;
} else
{var new_hashobj__8033 = goog.object.clone.call(null,this__8029.hashobj);

if(cljs.core.truth_((3 > bucket__8031.length)))
{cljs.core.js_delete.call(null,new_hashobj__8033,h__8030);
} else
{var new_bucket__8034 = cljs.core.aclone.call(null,bucket__8031);

new_bucket__8034.splice(i__8032,2);
(new_hashobj__8033[h__8030] = new_bucket__8034);
}
return (new cljs.core.HashMap(this__8029.meta,(this__8029.count - 1),new_hashobj__8033));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8043 = ks.length;

var i__8044 = 0;
var out__8045 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8044 < len__8043)))
{{
var G__8046 = (i__8044 + 1);
var G__8047 = cljs.core.assoc.call(null,out__8045,(ks[i__8044]),(vs[i__8044]));
i__8044 = G__8046;
out__8045 = G__8047;
continue;
}
} else
{return out__8045;
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
var in$__8048 = cljs.core.seq.call(null,keyvals);
var out__8049 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8048))
{{
var G__8050 = cljs.core.nnext.call(null,in$__8048);
var G__8051 = cljs.core.assoc.call(null,out__8049,cljs.core.first.call(null,in$__8048),cljs.core.second.call(null,in$__8048));
in$__8048 = G__8050;
out__8049 = G__8051;
continue;
}
} else
{return out__8049;
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
hash_map.cljs$lang$applyTo = (function (arglist__8052){
var keyvals = cljs.core.seq( arglist__8052 );;
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
{return cljs.core.reduce.call(null,(function (p1__8053_SHARP_,p2__8054_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8055 = p1__8053_SHARP_;

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8054_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8056){
var maps = cljs.core.seq( arglist__8056 );;
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
{var merge_entry__8059 = (function (m,e){
var k__8057 = cljs.core.first.call(null,e);
var v__8058 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8057)))
{return cljs.core.assoc.call(null,m,k__8057,f.call(null,cljs.core.get.call(null,m,k__8057),v__8058));
} else
{return cljs.core.assoc.call(null,m,k__8057,v__8058);
}
});
var merge2__8061 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8059,(function (){var or__3548__auto____8060 = m1;

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8061,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8062){
var f = cljs.core.first(arglist__8062);
var maps = cljs.core.rest(arglist__8062);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8064 = cljs.core.ObjMap.fromObject([],{});
var keys__8065 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8065))
{var key__8066 = cljs.core.first.call(null,keys__8065);
var entry__8067 = cljs.core.get.call(null,map,key__8066,"\uFDD0'user/not-found");

{
var G__8068 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8067,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8064,key__8066,entry__8067):ret__8064);
var G__8069 = cljs.core.next.call(null,keys__8065);
ret__8064 = G__8068;
keys__8065 = G__8069;
continue;
}
} else
{return ret__8064;
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
var this__8070 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8091 = null;
var G__8091__8092 = (function (coll,v){
var this__8071 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8091__8093 = (function (coll,v,not_found){
var this__8072 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8072.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8091 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8091__8092.call(this,coll,v);
case  3 :
return G__8091__8093.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8091;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8095 = null;
var G__8095__8096 = (function (tsym8073,k){
var this__8075 = this;
var tsym8073__8076 = this;

var coll__8077 = tsym8073__8076;

return cljs.core._lookup.call(null,coll__8077,k);
});
var G__8095__8097 = (function (tsym8074,k,not_found){
var this__8078 = this;
var tsym8074__8079 = this;

var coll__8080 = tsym8074__8079;

return cljs.core._lookup.call(null,coll__8080,k,not_found);
});
G__8095 = function(tsym8074,k,not_found){
switch(arguments.length){
case  2 :
return G__8095__8096.call(this,tsym8074,k);
case  3 :
return G__8095__8097.call(this,tsym8074,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8095;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8081 = this;
return (new cljs.core.Set(this__8081.meta,cljs.core.assoc.call(null,this__8081.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8082 = this;
return cljs.core.keys.call(null,this__8082.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8083 = this;
return (new cljs.core.Set(this__8083.meta,cljs.core.dissoc.call(null,this__8083.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8084 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8085 = this;
var and__3546__auto____8086 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8086))
{var and__3546__auto____8087 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8087))
{return cljs.core.every_QMARK_.call(null,(function (p1__8063_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8063_SHARP_);
}),other);
} else
{return and__3546__auto____8087;
}
} else
{return and__3546__auto____8086;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8088 = this;
return (new cljs.core.Set(meta,this__8088.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8089 = this;
return this__8089.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8090 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8090.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8100 = cljs.core.seq.call(null,coll);
var out__8101 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8100))))
{{
var G__8102 = cljs.core.rest.call(null,in$__8100);
var G__8103 = cljs.core.conj.call(null,out__8101,cljs.core.first.call(null,in$__8100));
in$__8100 = G__8102;
out__8101 = G__8103;
continue;
}
} else
{return out__8101;
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
{var n__8104 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8105 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8105))
{var e__8106 = temp__3695__auto____8105;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8106));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8104,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8099_SHARP_){
var temp__3695__auto____8107 = cljs.core.find.call(null,smap,p1__8099_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8107))
{var e__8108 = temp__3695__auto____8107;

return cljs.core.second.call(null,e__8108);
} else
{return p1__8099_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8116 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8109,seen){
while(true){
var vec__8110__8111 = p__8109;
var f__8112 = cljs.core.nth.call(null,vec__8110__8111,0,null);
var xs__8113 = vec__8110__8111;

var temp__3698__auto____8114 = cljs.core.seq.call(null,xs__8113);

if(cljs.core.truth_(temp__3698__auto____8114))
{var s__8115 = temp__3698__auto____8114;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8112)))
{{
var G__8117 = cljs.core.rest.call(null,s__8115);
var G__8118 = seen;
p__8109 = G__8117;
seen = G__8118;
continue;
}
} else
{return cljs.core.cons.call(null,f__8112,step.call(null,cljs.core.rest.call(null,s__8115),cljs.core.conj.call(null,seen,f__8112)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8116.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8119 = cljs.core.Vector.fromArray([]);
var s__8120 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8120)))
{{
var G__8121 = cljs.core.conj.call(null,ret__8119,cljs.core.first.call(null,s__8120));
var G__8122 = cljs.core.next.call(null,s__8120);
ret__8119 = G__8121;
s__8120 = G__8122;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8119);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8123 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8124 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__8124 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8124 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8125 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8126 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__8126 > -1)))
{return cljs.core.subs.call(null,x,2,i__8126);
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
var map__8129 = cljs.core.ObjMap.fromObject([],{});
var ks__8130 = cljs.core.seq.call(null,keys);
var vs__8131 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = ks__8130;

if(cljs.core.truth_(and__3546__auto____8132))
{return vs__8131;
} else
{return and__3546__auto____8132;
}
})()))
{{
var G__8133 = cljs.core.assoc.call(null,map__8129,cljs.core.first.call(null,ks__8130),cljs.core.first.call(null,vs__8131));
var G__8134 = cljs.core.next.call(null,ks__8130);
var G__8135 = cljs.core.next.call(null,vs__8131);
map__8129 = G__8133;
ks__8130 = G__8134;
vs__8131 = G__8135;
continue;
}
} else
{return map__8129;
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
var max_key__8138 = (function (k,x){
return x;
});
var max_key__8139 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8140 = (function() { 
var G__8142__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8127_SHARP_,p2__8128_SHARP_){
return max_key.call(null,k,p1__8127_SHARP_,p2__8128_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8142 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8142__delegate.call(this, k, x, y, more);
};
G__8142.cljs$lang$maxFixedArity = 3;
G__8142.cljs$lang$applyTo = (function (arglist__8143){
var k = cljs.core.first(arglist__8143);
var x = cljs.core.first(cljs.core.next(arglist__8143));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8143)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8143)));
return G__8142__delegate.call(this, k, x, y, more);
});
return G__8142;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8138.call(this,k,x);
case  3 :
return max_key__8139.call(this,k,x,y);
default:
return max_key__8140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8140.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8144 = (function (k,x){
return x;
});
var min_key__8145 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8146 = (function() { 
var G__8148__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8136_SHARP_,p2__8137_SHARP_){
return min_key.call(null,k,p1__8136_SHARP_,p2__8137_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8148 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8148__delegate.call(this, k, x, y, more);
};
G__8148.cljs$lang$maxFixedArity = 3;
G__8148.cljs$lang$applyTo = (function (arglist__8149){
var k = cljs.core.first(arglist__8149);
var x = cljs.core.first(cljs.core.next(arglist__8149));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8149)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8149)));
return G__8148__delegate.call(this, k, x, y, more);
});
return G__8148;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8144.call(this,k,x);
case  3 :
return min_key__8145.call(this,k,x,y);
default:
return min_key__8146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8146.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8152 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8153 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8150 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8150))
{var s__8151 = temp__3698__auto____8150;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8151),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8151)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8152.call(this,n,step);
case  3 :
return partition_all__8153.call(this,n,step,coll);
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
var temp__3698__auto____8155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8155))
{var s__8156 = temp__3698__auto____8155;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8156))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8156),take_while.call(null,pred,cljs.core.rest.call(null,s__8156)));
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
var this__8157 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8158 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8174 = null;
var G__8174__8175 = (function (rng,f){
var this__8159 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8174__8176 = (function (rng,f,s){
var this__8160 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8174 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8174__8175.call(this,rng,f);
case  3 :
return G__8174__8176.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8174;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8161 = this;
var comp__8162 = (cljs.core.truth_((this__8161.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8162.call(null,this__8161.start,this__8161.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8163 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8163.end - this__8163.start) / this__8163.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8164 = this;
return this__8164.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8165 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8165.meta,(this__8165.start + this__8165.step),this__8165.end,this__8165.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8166 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8167 = this;
return (new cljs.core.Range(meta,this__8167.start,this__8167.end,this__8167.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8168 = this;
return this__8168.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8178 = null;
var G__8178__8179 = (function (rng,n){
var this__8169 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8169.start + (n * this__8169.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8170 = (this__8169.start > this__8169.end);

if(cljs.core.truth_(and__3546__auto____8170))
{return cljs.core._EQ_.call(null,this__8169.step,0);
} else
{return and__3546__auto____8170;
}
})()))
{return this__8169.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8178__8180 = (function (rng,n,not_found){
var this__8171 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8171.start + (n * this__8171.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8172 = (this__8171.start > this__8171.end);

if(cljs.core.truth_(and__3546__auto____8172))
{return cljs.core._EQ_.call(null,this__8171.step,0);
} else
{return and__3546__auto____8172;
}
})()))
{return this__8171.start;
} else
{return not_found;
}
}
});
G__8178 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8178__8179.call(this,rng,n);
case  3 :
return G__8178__8180.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8178;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8173 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8173.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8182 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8183 = (function (end){
return range.call(null,0,end,1);
});
var range__8184 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8185 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8182.call(this);
case  1 :
return range__8183.call(this,start);
case  2 :
return range__8184.call(this,start,end);
case  3 :
return range__8185.call(this,start,end,step);
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
var temp__3698__auto____8187 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8187))
{var s__8188 = temp__3698__auto____8187;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8188),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8188)));
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
var temp__3698__auto____8190 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8190))
{var s__8191 = temp__3698__auto____8190;

var fst__8192 = cljs.core.first.call(null,s__8191);
var fv__8193 = f.call(null,fst__8192);
var run__8194 = cljs.core.cons.call(null,fst__8192,cljs.core.take_while.call(null,(function (p1__8189_SHARP_){
return cljs.core._EQ_.call(null,fv__8193,f.call(null,p1__8189_SHARP_));
}),cljs.core.next.call(null,s__8191)));

return cljs.core.cons.call(null,run__8194,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8194),s__8191))));
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
var reductions__8209 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8205 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8205))
{var s__8206 = temp__3695__auto____8205;

return reductions.call(null,f,cljs.core.first.call(null,s__8206),cljs.core.rest.call(null,s__8206));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8210 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8207))
{var s__8208 = temp__3698__auto____8207;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8208)),cljs.core.rest.call(null,s__8208));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8209.call(this,f,init);
case  3 :
return reductions__8210.call(this,f,init,coll);
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
var juxt__8213 = (function (f){
return (function() {
var G__8218 = null;
var G__8218__8219 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8218__8220 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8218__8221 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8218__8222 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8218__8223 = (function() { 
var G__8225__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8225 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8225__delegate.call(this, x, y, z, args);
};
G__8225.cljs$lang$maxFixedArity = 3;
G__8225.cljs$lang$applyTo = (function (arglist__8226){
var x = cljs.core.first(arglist__8226);
var y = cljs.core.first(cljs.core.next(arglist__8226));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8226)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8226)));
return G__8225__delegate.call(this, x, y, z, args);
});
return G__8225;
})()
;
G__8218 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8218__8219.call(this);
case  1 :
return G__8218__8220.call(this,x);
case  2 :
return G__8218__8221.call(this,x,y);
case  3 :
return G__8218__8222.call(this,x,y,z);
default:
return G__8218__8223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8218.cljs$lang$maxFixedArity = 3;
G__8218.cljs$lang$applyTo = G__8218__8223.cljs$lang$applyTo;
return G__8218;
})()
});
var juxt__8214 = (function (f,g){
return (function() {
var G__8227 = null;
var G__8227__8228 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8227__8229 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8227__8230 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8227__8231 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8227__8232 = (function() { 
var G__8234__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8234__delegate.call(this, x, y, z, args);
};
G__8234.cljs$lang$maxFixedArity = 3;
G__8234.cljs$lang$applyTo = (function (arglist__8235){
var x = cljs.core.first(arglist__8235);
var y = cljs.core.first(cljs.core.next(arglist__8235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8235)));
return G__8234__delegate.call(this, x, y, z, args);
});
return G__8234;
})()
;
G__8227 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8227__8228.call(this);
case  1 :
return G__8227__8229.call(this,x);
case  2 :
return G__8227__8230.call(this,x,y);
case  3 :
return G__8227__8231.call(this,x,y,z);
default:
return G__8227__8232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8227.cljs$lang$maxFixedArity = 3;
G__8227.cljs$lang$applyTo = G__8227__8232.cljs$lang$applyTo;
return G__8227;
})()
});
var juxt__8215 = (function (f,g,h){
return (function() {
var G__8236 = null;
var G__8236__8237 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8236__8238 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8236__8239 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8236__8240 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8236__8241 = (function() { 
var G__8243__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8243__delegate.call(this, x, y, z, args);
};
G__8243.cljs$lang$maxFixedArity = 3;
G__8243.cljs$lang$applyTo = (function (arglist__8244){
var x = cljs.core.first(arglist__8244);
var y = cljs.core.first(cljs.core.next(arglist__8244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8244)));
return G__8243__delegate.call(this, x, y, z, args);
});
return G__8243;
})()
;
G__8236 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8236__8237.call(this);
case  1 :
return G__8236__8238.call(this,x);
case  2 :
return G__8236__8239.call(this,x,y);
case  3 :
return G__8236__8240.call(this,x,y,z);
default:
return G__8236__8241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8236.cljs$lang$maxFixedArity = 3;
G__8236.cljs$lang$applyTo = G__8236__8241.cljs$lang$applyTo;
return G__8236;
})()
});
var juxt__8216 = (function() { 
var G__8245__delegate = function (f,g,h,fs){
var fs__8212 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8246 = null;
var G__8246__8247 = (function (){
return cljs.core.reduce.call(null,(function (p1__8195_SHARP_,p2__8196_SHARP_){
return cljs.core.conj.call(null,p1__8195_SHARP_,p2__8196_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__8212);
});
var G__8246__8248 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8197_SHARP_,p2__8198_SHARP_){
return cljs.core.conj.call(null,p1__8197_SHARP_,p2__8198_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__8212);
});
var G__8246__8249 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8199_SHARP_,p2__8200_SHARP_){
return cljs.core.conj.call(null,p1__8199_SHARP_,p2__8200_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__8212);
});
var G__8246__8250 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8201_SHARP_,p2__8202_SHARP_){
return cljs.core.conj.call(null,p1__8201_SHARP_,p2__8202_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__8212);
});
var G__8246__8251 = (function() { 
var G__8253__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8203_SHARP_,p2__8204_SHARP_){
return cljs.core.conj.call(null,p1__8203_SHARP_,cljs.core.apply.call(null,p2__8204_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__8212);
};
var G__8253 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8253__delegate.call(this, x, y, z, args);
};
G__8253.cljs$lang$maxFixedArity = 3;
G__8253.cljs$lang$applyTo = (function (arglist__8254){
var x = cljs.core.first(arglist__8254);
var y = cljs.core.first(cljs.core.next(arglist__8254));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8254)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8254)));
return G__8253__delegate.call(this, x, y, z, args);
});
return G__8253;
})()
;
G__8246 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8246__8247.call(this);
case  1 :
return G__8246__8248.call(this,x);
case  2 :
return G__8246__8249.call(this,x,y);
case  3 :
return G__8246__8250.call(this,x,y,z);
default:
return G__8246__8251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8246.cljs$lang$maxFixedArity = 3;
G__8246.cljs$lang$applyTo = G__8246__8251.cljs$lang$applyTo;
return G__8246;
})()
};
var G__8245 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8245__delegate.call(this, f, g, h, fs);
};
G__8245.cljs$lang$maxFixedArity = 3;
G__8245.cljs$lang$applyTo = (function (arglist__8255){
var f = cljs.core.first(arglist__8255);
var g = cljs.core.first(cljs.core.next(arglist__8255));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8255)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8255)));
return G__8245__delegate.call(this, f, g, h, fs);
});
return G__8245;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8213.call(this,f);
case  2 :
return juxt__8214.call(this,f,g);
case  3 :
return juxt__8215.call(this,f,g,h);
default:
return juxt__8216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8216.cljs$lang$applyTo;
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
var dorun__8257 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8260 = cljs.core.next.call(null,coll);
coll = G__8260;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8258 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8256 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8256))
{return (n > 0);
} else
{return and__3546__auto____8256;
}
})()))
{{
var G__8261 = (n - 1);
var G__8262 = cljs.core.next.call(null,coll);
n = G__8261;
coll = G__8262;
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
return dorun__8257.call(this,n);
case  2 :
return dorun__8258.call(this,n,coll);
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
var doall__8263 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8264 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8263.call(this,n);
case  2 :
return doall__8264.call(this,n,coll);
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
var matches__8266 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8266),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8266),1)))
{return cljs.core.first.call(null,matches__8266);
} else
{return cljs.core.vec.call(null,matches__8266);
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
var matches__8267 = re.exec(s);

if(cljs.core.truth_((matches__8267 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8267),1)))
{return cljs.core.first.call(null,matches__8267);
} else
{return cljs.core.vec.call(null,matches__8267);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8268 = cljs.core.re_find.call(null,re,s);
var match_idx__8269 = s.search(re);
var match_str__8270 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8268))?cljs.core.first.call(null,match_data__8268):match_data__8268);
var post_match__8271 = cljs.core.subs.call(null,s,(match_idx__8269 + cljs.core.count.call(null,match_str__8270)));

if(cljs.core.truth_(match_data__8268))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8268,re_seq.call(null,re,post_match__8271));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8273__8274 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8275 = cljs.core.nth.call(null,vec__8273__8274,0,null);
var flags__8276 = cljs.core.nth.call(null,vec__8273__8274,1,null);
var pattern__8277 = cljs.core.nth.call(null,vec__8273__8274,2,null);

return (new RegExp(pattern__8277,flags__8276));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8272_SHARP_){
return print_one.call(null,p1__8272_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8278 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8278))
{var and__3546__auto____8282 = (function (){var x__3027__auto____8279 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8280 = x__3027__auto____8279;

if(cljs.core.truth_(and__3546__auto____8280))
{var and__3546__auto____8281 = x__3027__auto____8279.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8281))
{return cljs.core.not.call(null,x__3027__auto____8279.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8281;
}
} else
{return and__3546__auto____8280;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3027__auto____8279);
}
})();

if(cljs.core.truth_(and__3546__auto____8282))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8282;
}
} else
{return and__3546__auto____8278;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3027__auto____8283 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8284 = x__3027__auto____8283;

if(cljs.core.truth_(and__3546__auto____8284))
{var and__3546__auto____8285 = x__3027__auto____8283.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8285))
{return cljs.core.not.call(null,x__3027__auto____8283.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8285;
}
} else
{return and__3546__auto____8284;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3027__auto____8283);
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
var first_obj__8286 = cljs.core.first.call(null,objs);
var sb__8287 = (new goog.string.StringBuffer());

var G__8288__8289 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8288__8289))
{var obj__8290 = cljs.core.first.call(null,G__8288__8289);
var G__8288__8291 = G__8288__8289;

while(true){
if(cljs.core.truth_((obj__8290 === first_obj__8286)))
{} else
{sb__8287.append(" ");
}
var G__8292__8293 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8290,opts));

if(cljs.core.truth_(G__8292__8293))
{var string__8294 = cljs.core.first.call(null,G__8292__8293);
var G__8292__8295 = G__8292__8293;

while(true){
sb__8287.append(string__8294);
var temp__3698__auto____8296 = cljs.core.next.call(null,G__8292__8295);

if(cljs.core.truth_(temp__3698__auto____8296))
{var G__8292__8297 = temp__3698__auto____8296;

{
var G__8300 = cljs.core.first.call(null,G__8292__8297);
var G__8301 = G__8292__8297;
string__8294 = G__8300;
G__8292__8295 = G__8301;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8298 = cljs.core.next.call(null,G__8288__8291);

if(cljs.core.truth_(temp__3698__auto____8298))
{var G__8288__8299 = temp__3698__auto____8298;

{
var G__8302 = cljs.core.first.call(null,G__8288__8299);
var G__8303 = G__8288__8299;
obj__8290 = G__8302;
G__8288__8291 = G__8303;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__8287);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8304 = cljs.core.first.call(null,objs);

var G__8305__8306 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8305__8306))
{var obj__8307 = cljs.core.first.call(null,G__8305__8306);
var G__8305__8308 = G__8305__8306;

while(true){
if(cljs.core.truth_((obj__8307 === first_obj__8304)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8309__8310 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8307,opts));

if(cljs.core.truth_(G__8309__8310))
{var string__8311 = cljs.core.first.call(null,G__8309__8310);
var G__8309__8312 = G__8309__8310;

while(true){
cljs.core.string_print.call(null,string__8311);
var temp__3698__auto____8313 = cljs.core.next.call(null,G__8309__8312);

if(cljs.core.truth_(temp__3698__auto____8313))
{var G__8309__8314 = temp__3698__auto____8313;

{
var G__8317 = cljs.core.first.call(null,G__8309__8314);
var G__8318 = G__8309__8314;
string__8311 = G__8317;
G__8309__8312 = G__8318;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8315 = cljs.core.next.call(null,G__8305__8308);

if(cljs.core.truth_(temp__3698__auto____8315))
{var G__8305__8316 = temp__3698__auto____8315;

{
var G__8319 = cljs.core.first.call(null,G__8305__8316);
var G__8320 = G__8305__8316;
obj__8307 = G__8319;
G__8305__8308 = G__8320;
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
pr_str.cljs$lang$applyTo = (function (arglist__8321){
var objs = cljs.core.seq( arglist__8321 );;
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
pr.cljs$lang$applyTo = (function (arglist__8322){
var objs = cljs.core.seq( arglist__8322 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8323){
var objs = cljs.core.seq( arglist__8323 );;
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
println.cljs$lang$applyTo = (function (arglist__8324){
var objs = cljs.core.seq( arglist__8324 );;
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
prn.cljs$lang$applyTo = (function (arglist__8325){
var objs = cljs.core.seq( arglist__8325 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8326 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8326,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8327 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8327))
{var nspc__8328 = temp__3698__auto____8327;

return cljs.core.str.call(null,nspc__8328,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8329 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8329))
{var nspc__8330 = temp__3698__auto____8329;

return cljs.core.str.call(null,nspc__8330,"\/");
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
var pr_pair__8331 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8331,"{",", ","}",opts,coll);
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
var this__8332 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8333 = this;
var G__8334__8335 = cljs.core.seq.call(null,this__8333.watches);

if(cljs.core.truth_(G__8334__8335))
{var G__8337__8339 = cljs.core.first.call(null,G__8334__8335);
var vec__8338__8340 = G__8337__8339;
var key__8341 = cljs.core.nth.call(null,vec__8338__8340,0,null);
var f__8342 = cljs.core.nth.call(null,vec__8338__8340,1,null);
var G__8334__8343 = G__8334__8335;

var G__8337__8344 = G__8337__8339;
var G__8334__8345 = G__8334__8343;

while(true){
var vec__8346__8347 = G__8337__8344;
var key__8348 = cljs.core.nth.call(null,vec__8346__8347,0,null);
var f__8349 = cljs.core.nth.call(null,vec__8346__8347,1,null);
var G__8334__8350 = G__8334__8345;

f__8349.call(null,key__8348,this$,oldval,newval);
var temp__3698__auto____8351 = cljs.core.next.call(null,G__8334__8350);

if(cljs.core.truth_(temp__3698__auto____8351))
{var G__8334__8352 = temp__3698__auto____8351;

{
var G__8359 = cljs.core.first.call(null,G__8334__8352);
var G__8360 = G__8334__8352;
G__8337__8344 = G__8359;
G__8334__8345 = G__8360;
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
var this__8353 = this;
return this$.watches = cljs.core.assoc.call(null,this__8353.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8354 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8354.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8355 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8355.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8356 = this;
return this__8356.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8357 = this;
return this__8357.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8358 = this;
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
var atom__8367 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8368 = (function() { 
var G__8370__delegate = function (x,p__8361){
var map__8362__8363 = p__8361;
var map__8362__8364 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8362__8363))?cljs.core.apply.call(null,cljs.core.hash_map,map__8362__8363):map__8362__8363);
var validator__8365 = cljs.core.get.call(null,map__8362__8364,"\uFDD0'validator");
var meta__8366 = cljs.core.get.call(null,map__8362__8364,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8366,validator__8365,null));
};
var G__8370 = function (x,var_args){
var p__8361 = null;
if (goog.isDef(var_args)) {
  p__8361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8370__delegate.call(this, x, p__8361);
};
G__8370.cljs$lang$maxFixedArity = 1;
G__8370.cljs$lang$applyTo = (function (arglist__8371){
var x = cljs.core.first(arglist__8371);
var p__8361 = cljs.core.rest(arglist__8371);
return G__8370__delegate.call(this, x, p__8361);
});
return G__8370;
})()
;
atom = function(x,var_args){
var p__8361 = var_args;
switch(arguments.length){
case  1 :
return atom__8367.call(this,x);
default:
return atom__8368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8368.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8372 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8372))
{var validate__8373 = temp__3698__auto____8372;

if(cljs.core.truth_(validate__8373.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__8374 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8374,new_value);
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
var swap_BANG___8375 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8376 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8377 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8378 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8379 = (function() { 
var G__8381__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8381 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8381__delegate.call(this, a, f, x, y, z, more);
};
G__8381.cljs$lang$maxFixedArity = 5;
G__8381.cljs$lang$applyTo = (function (arglist__8382){
var a = cljs.core.first(arglist__8382);
var f = cljs.core.first(cljs.core.next(arglist__8382));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8382)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8382))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8382)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8382)))));
return G__8381__delegate.call(this, a, f, x, y, z, more);
});
return G__8381;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8375.call(this,a,f);
case  3 :
return swap_BANG___8376.call(this,a,f,x);
case  4 :
return swap_BANG___8377.call(this,a,f,x,y);
case  5 :
return swap_BANG___8378.call(this,a,f,x,y,z);
default:
return swap_BANG___8379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8379.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8383){
var iref = cljs.core.first(arglist__8383);
var f = cljs.core.first(cljs.core.next(arglist__8383));
var args = cljs.core.rest(cljs.core.next(arglist__8383));
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
var gensym__8384 = (function (){
return gensym.call(null,"G__");
});
var gensym__8385 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8384.call(this);
case  1 :
return gensym__8385.call(this,prefix_string);
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
var this__8387 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__8387.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8388 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__8388.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__8388.state,this__8388.f);
}
return cljs.core.deref.call(null,this__8388.state);
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
delay.cljs$lang$applyTo = (function (arglist__8389){
var body = cljs.core.seq( arglist__8389 );;
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
var map__8390__8391 = options;
var map__8390__8392 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8390__8391))?cljs.core.apply.call(null,cljs.core.hash_map,map__8390__8391):map__8390__8391);
var keywordize_keys__8393 = cljs.core.get.call(null,map__8390__8392,"\uFDD0'keywordize-keys");
var keyfn__8394 = (cljs.core.truth_(keywordize_keys__8393)?cljs.core.keyword:cljs.core.str);
var f__8400 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3091__auto____8399 = (function iter__8395(s__8396){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8396__8397 = s__8396;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8396__8397)))
{var k__8398 = cljs.core.first.call(null,s__8396__8397);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__8394.call(null,k__8398),thisfn.call(null,(x[k__8398]))]),iter__8395.call(null,cljs.core.rest.call(null,s__8396__8397)));
} else
{return null;
}
break;
}
})));
});

return iter__3091__auto____8399.call(null,cljs.core.js_keys.call(null,x));
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

return f__8400.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8401){
var x = cljs.core.first(arglist__8401);
var options = cljs.core.rest(arglist__8401);
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
var mem__8402 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8406__delegate = function (args){
var temp__3695__auto____8403 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8402),args);

if(cljs.core.truth_(temp__3695__auto____8403))
{var v__8404 = temp__3695__auto____8403;

return v__8404;
} else
{var ret__8405 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8402,cljs.core.assoc,args,ret__8405);
return ret__8405;
}
};
var G__8406 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8406__delegate.call(this, args);
};
G__8406.cljs$lang$maxFixedArity = 0;
G__8406.cljs$lang$applyTo = (function (arglist__8407){
var args = cljs.core.seq( arglist__8407 );;
return G__8406__delegate.call(this, args);
});
return G__8406;
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
var trampoline__8409 = (function (f){
while(true){
var ret__8408 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8408)))
{{
var G__8412 = ret__8408;
f = G__8412;
continue;
}
} else
{return ret__8408;
}
break;
}
});
var trampoline__8410 = (function() { 
var G__8413__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8413 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8413__delegate.call(this, f, args);
};
G__8413.cljs$lang$maxFixedArity = 1;
G__8413.cljs$lang$applyTo = (function (arglist__8414){
var f = cljs.core.first(arglist__8414);
var args = cljs.core.rest(arglist__8414);
return G__8413__delegate.call(this, f, args);
});
return G__8413;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8409.call(this,f);
default:
return trampoline__8410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8410.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8415 = (function (){
return rand.call(null,1);
});
var rand__8416 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8415.call(this);
case  1 :
return rand__8416.call(this,n);
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
var k__8418 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8418,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8418,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___8427 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8428 = (function (h,child,parent){
var or__3548__auto____8419 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8419))
{return or__3548__auto____8419;
} else
{var or__3548__auto____8420 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8420))
{return or__3548__auto____8420;
} else
{var and__3546__auto____8421 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8421))
{var and__3546__auto____8422 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8422))
{var and__3546__auto____8423 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8423))
{var ret__8424 = true;
var i__8425 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8426 = cljs.core.not.call(null,ret__8424);

if(cljs.core.truth_(or__3548__auto____8426))
{return or__3548__auto____8426;
} else
{return cljs.core._EQ_.call(null,i__8425,cljs.core.count.call(null,parent));
}
})()))
{return ret__8424;
} else
{{
var G__8430 = isa_QMARK_.call(null,h,child.call(null,i__8425),parent.call(null,i__8425));
var G__8431 = (i__8425 + 1);
ret__8424 = G__8430;
i__8425 = G__8431;
continue;
}
}
break;
}
} else
{return and__3546__auto____8423;
}
} else
{return and__3546__auto____8422;
}
} else
{return and__3546__auto____8421;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8427.call(this,h,child);
case  3 :
return isa_QMARK___8428.call(this,h,child,parent);
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
var parents__8432 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8433 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8432.call(this,h);
case  2 :
return parents__8433.call(this,h,tag);
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
var ancestors__8435 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8436 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8435.call(this,h);
case  2 :
return ancestors__8436.call(this,h,tag);
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
var descendants__8438 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8439 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8438.call(this,h);
case  2 :
return descendants__8439.call(this,h,tag);
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
var derive__8449 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8450 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__8444 = "\uFDD0'parents".call(null,h);
var td__8445 = "\uFDD0'descendants".call(null,h);
var ta__8446 = "\uFDD0'ancestors".call(null,h);
var tf__8447 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8448 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8444.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8446.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8446.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8444,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8447.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8445,parent,ta__8446),"\uFDD0'descendants":tf__8447.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8446,tag,td__8445)});
})());

if(cljs.core.truth_(or__3548__auto____8448))
{return or__3548__auto____8448;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8449.call(this,h,tag);
case  3 :
return derive__8450.call(this,h,tag,parent);
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
var underive__8456 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8457 = (function (h,tag,parent){
var parentMap__8452 = "\uFDD0'parents".call(null,h);
var childsParents__8453 = (cljs.core.truth_(parentMap__8452.call(null,tag))?cljs.core.disj.call(null,parentMap__8452.call(null,tag),parent):cljs.core.set([]));
var newParents__8454 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8453))?cljs.core.assoc.call(null,parentMap__8452,tag,childsParents__8453):cljs.core.dissoc.call(null,parentMap__8452,tag));
var deriv_seq__8455 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8441_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8441_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8441_SHARP_),cljs.core.second.call(null,p1__8441_SHARP_)));
}),cljs.core.seq.call(null,newParents__8454)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8452.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8442_SHARP_,p2__8443_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8442_SHARP_,p2__8443_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8455));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8456.call(this,h,tag);
case  3 :
return underive__8457.call(this,h,tag,parent);
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
var xprefs__8459 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8461 = (cljs.core.truth_((function (){var and__3546__auto____8460 = xprefs__8459;

if(cljs.core.truth_(and__3546__auto____8460))
{return xprefs__8459.call(null,y);
} else
{return and__3546__auto____8460;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8461))
{return or__3548__auto____8461;
} else
{var or__3548__auto____8463 = (function (){var ps__8462 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8462) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8462),prefer_table)))
{} else
{}
{
var G__8466 = cljs.core.rest.call(null,ps__8462);
ps__8462 = G__8466;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8463))
{return or__3548__auto____8463;
} else
{var or__3548__auto____8465 = (function (){var ps__8464 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8464) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8464),y,prefer_table)))
{} else
{}
{
var G__8467 = cljs.core.rest.call(null,ps__8464);
ps__8464 = G__8467;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8465))
{return or__3548__auto____8465;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8468 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8468))
{return or__3548__auto____8468;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8477 = cljs.core.reduce.call(null,(function (be,p__8469){
var vec__8470__8471 = p__8469;
var k__8472 = cljs.core.nth.call(null,vec__8470__8471,0,null);
var ___8473 = cljs.core.nth.call(null,vec__8470__8471,1,null);
var e__8474 = vec__8470__8471;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8472)))
{var be2__8476 = (cljs.core.truth_((function (){var or__3548__auto____8475 = (be === null);

if(cljs.core.truth_(or__3548__auto____8475))
{return or__3548__auto____8475;
} else
{return cljs.core.dominates.call(null,k__8472,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8474:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8476),k__8472,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8472," and ",cljs.core.first.call(null,be2__8476),", and neither is preferred")));
}
return be2__8476;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8477))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8477));
return cljs.core.second.call(null,best_entry__8477);
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
if(cljs.core.truth_((function (){var and__3546__auto____8478 = mf;

if(cljs.core.truth_(and__3546__auto____8478))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8478;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8479 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8479))
{return or__3548__auto____8479;
} else
{var or__3548__auto____8480 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8480))
{return or__3548__auto____8480;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8481 = mf;

if(cljs.core.truth_(and__3546__auto____8481))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8481;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8482 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8482))
{return or__3548__auto____8482;
} else
{var or__3548__auto____8483 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8483))
{return or__3548__auto____8483;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8484 = mf;

if(cljs.core.truth_(and__3546__auto____8484))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8484;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8485 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8485))
{return or__3548__auto____8485;
} else
{var or__3548__auto____8486 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8486))
{return or__3548__auto____8486;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8487 = mf;

if(cljs.core.truth_(and__3546__auto____8487))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8487;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8488 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8488))
{return or__3548__auto____8488;
} else
{var or__3548__auto____8489 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8489))
{return or__3548__auto____8489;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8490 = mf;

if(cljs.core.truth_(and__3546__auto____8490))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8490;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8491 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8491))
{return or__3548__auto____8491;
} else
{var or__3548__auto____8492 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8492))
{return or__3548__auto____8492;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8493 = mf;

if(cljs.core.truth_(and__3546__auto____8493))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8493;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8494 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8494))
{return or__3548__auto____8494;
} else
{var or__3548__auto____8495 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8495))
{return or__3548__auto____8495;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8496 = mf;

if(cljs.core.truth_(and__3546__auto____8496))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8496;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8497 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8497))
{return or__3548__auto____8497;
} else
{var or__3548__auto____8498 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8498))
{return or__3548__auto____8498;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8499 = mf;

if(cljs.core.truth_(and__3546__auto____8499))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8499;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8500 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8500))
{return or__3548__auto____8500;
} else
{var or__3548__auto____8501 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8501))
{return or__3548__auto____8501;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8502 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8503 = cljs.core._get_method.call(null,mf,dispatch_val__8502);

if(cljs.core.truth_(target_fn__8503))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8502)));
}
return cljs.core.apply.call(null,target_fn__8503,args);
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
var this__8504 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8505 = this;
cljs.core.swap_BANG_.call(null,this__8505.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8505.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8505.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8505.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8506 = this;
cljs.core.swap_BANG_.call(null,this__8506.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8506.method_cache,this__8506.method_table,this__8506.cached_hierarchy,this__8506.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8507 = this;
cljs.core.swap_BANG_.call(null,this__8507.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8507.method_cache,this__8507.method_table,this__8507.cached_hierarchy,this__8507.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8508 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8508.cached_hierarchy),cljs.core.deref.call(null,this__8508.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8508.method_cache,this__8508.method_table,this__8508.cached_hierarchy,this__8508.hierarchy);
}
var temp__3695__auto____8509 = cljs.core.deref.call(null,this__8508.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8509))
{var target_fn__8510 = temp__3695__auto____8509;

return target_fn__8510;
} else
{var temp__3695__auto____8511 = cljs.core.find_and_cache_best_method.call(null,this__8508.name,dispatch_val,this__8508.hierarchy,this__8508.method_table,this__8508.prefer_table,this__8508.method_cache,this__8508.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8511))
{var target_fn__8512 = temp__3695__auto____8511;

return target_fn__8512;
} else
{return cljs.core.deref.call(null,this__8508.method_table).call(null,this__8508.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8513 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8513.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8513.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8513.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8513.method_cache,this__8513.method_table,this__8513.cached_hierarchy,this__8513.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8514 = this;
return cljs.core.deref.call(null,this__8514.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8515 = this;
return cljs.core.deref.call(null,this__8515.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__8516 = this;
return cljs.core.do_dispatch.call(null,mf,this__8516.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8517__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8517 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8517__delegate.call(this, _, args);
};
G__8517.cljs$lang$maxFixedArity = 1;
G__8517.cljs$lang$applyTo = (function (arglist__8518){
var _ = cljs.core.first(arglist__8518);
var args = cljs.core.rest(arglist__8518);
return G__8517__delegate.call(this, _, args);
});
return G__8517;
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
