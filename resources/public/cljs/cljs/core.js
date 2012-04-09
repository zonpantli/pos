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
var or__3548__auto____7676 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{var or__3548__auto____7677 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
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
var _invoke__7741 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = this$;

if(cljs.core.truth_(and__3546__auto____7678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7742 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7681 = this$;

if(cljs.core.truth_(and__3546__auto____7681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
} else
{var or__3548__auto____7683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7743 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7684 = this$;

if(cljs.core.truth_(and__3546__auto____7684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7685 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7685))
{return or__3548__auto____7685;
} else
{var or__3548__auto____7686 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7744 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7687 = this$;

if(cljs.core.truth_(and__3546__auto____7687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7688 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{var or__3548__auto____7689 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7745 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7690 = this$;

if(cljs.core.truth_(and__3546__auto____7690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{var or__3548__auto____7692 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7746 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7693 = this$;

if(cljs.core.truth_(and__3546__auto____7693))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7693;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7694 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{var or__3548__auto____7695 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7747 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7696 = this$;

if(cljs.core.truth_(and__3546__auto____7696))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7696;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7697 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{var or__3548__auto____7698 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7748 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = this$;

if(cljs.core.truth_(and__3546__auto____7699))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7699;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7749 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = this$;

if(cljs.core.truth_(and__3546__auto____7702))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7702;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7703 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{var or__3548__auto____7704 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7750 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7705 = this$;

if(cljs.core.truth_(and__3546__auto____7705))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7705;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7706 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{var or__3548__auto____7707 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7751 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = this$;

if(cljs.core.truth_(and__3546__auto____7708))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7708;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7709 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{var or__3548__auto____7710 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7752 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = this$;

if(cljs.core.truth_(and__3546__auto____7711))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7711;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7712 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{var or__3548__auto____7713 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7753 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = this$;

if(cljs.core.truth_(and__3546__auto____7714))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7714;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7716 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7754 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7717 = this$;

if(cljs.core.truth_(and__3546__auto____7717))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7717;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7755 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = this$;

if(cljs.core.truth_(and__3546__auto____7720))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7720;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7721 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{var or__3548__auto____7722 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7756 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7723 = this$;

if(cljs.core.truth_(and__3546__auto____7723))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7723;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7724 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{var or__3548__auto____7725 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7757 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = this$;

if(cljs.core.truth_(and__3546__auto____7726))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7726;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7728 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7758 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7729 = this$;

if(cljs.core.truth_(and__3546__auto____7729))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7729;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7730 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{var or__3548__auto____7731 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7759 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = this$;

if(cljs.core.truth_(and__3546__auto____7732))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7732;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7733 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7734 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7760 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7735 = this$;

if(cljs.core.truth_(and__3546__auto____7735))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7735;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7737 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7761 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7738 = this$;

if(cljs.core.truth_(and__3546__auto____7738))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7738;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7739 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{var or__3548__auto____7740 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
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
return _invoke__7741.call(this,this$);
case  2 :
return _invoke__7742.call(this,this$,a);
case  3 :
return _invoke__7743.call(this,this$,a,b);
case  4 :
return _invoke__7744.call(this,this$,a,b,c);
case  5 :
return _invoke__7745.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7746.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7747.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7748.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7749.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7750.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7751.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7752.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7753.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7754.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7755.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7756.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7757.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7758.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7759.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7760.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7761.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7763 = coll;

if(cljs.core.truth_(and__3546__auto____7763))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7763;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7764 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{var or__3548__auto____7765 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7766 = coll;

if(cljs.core.truth_(and__3546__auto____7766))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7766;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7767 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{var or__3548__auto____7768 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7769 = coll;

if(cljs.core.truth_(and__3546__auto____7769))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7769;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7770 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
} else
{var or__3548__auto____7771 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7771))
{return or__3548__auto____7771;
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
var _nth__7778 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7773 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{var or__3548__auto____7774 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7779 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7775 = coll;

if(cljs.core.truth_(and__3546__auto____7775))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7775;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7776 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7776))
{return or__3548__auto____7776;
} else
{var or__3548__auto____7777 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
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
return _nth__7778.call(this,coll,n);
case  3 :
return _nth__7779.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7783 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
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
var _lookup__7793 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = o;

if(cljs.core.truth_(and__3546__auto____7787))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7787;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7788 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{var or__3548__auto____7789 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7794 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7790 = o;

if(cljs.core.truth_(and__3546__auto____7790))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7790;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7792 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
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
return _lookup__7793.call(this,o,k);
case  3 :
return _lookup__7794.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7798 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7799 = coll;

if(cljs.core.truth_(and__3546__auto____7799))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7799;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7800 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{var or__3548__auto____7801 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7805 = coll;

if(cljs.core.truth_(and__3546__auto____7805))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7805;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7807 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = coll;

if(cljs.core.truth_(and__3546__auto____7808))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7808;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7809 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{var or__3548__auto____7810 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7811 = coll;

if(cljs.core.truth_(and__3546__auto____7811))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7811;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7812 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{var or__3548__auto____7813 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7814 = coll;

if(cljs.core.truth_(and__3546__auto____7814))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7814;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7816 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7817 = o;

if(cljs.core.truth_(and__3546__auto____7817))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7817;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7818 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
} else
{var or__3548__auto____7819 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7820 = o;

if(cljs.core.truth_(and__3546__auto____7820))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7820;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7821 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{var or__3548__auto____7822 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = o;

if(cljs.core.truth_(and__3546__auto____7823))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7823;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7825 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7826 = o;

if(cljs.core.truth_(and__3546__auto____7826))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7826;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7828 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
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
var _reduce__7835 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = coll;

if(cljs.core.truth_(and__3546__auto____7829))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7829;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7831 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7836 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = coll;

if(cljs.core.truth_(and__3546__auto____7832))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7832;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7833 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{var or__3548__auto____7834 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
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
return _reduce__7835.call(this,coll,f);
case  3 :
return _reduce__7836.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7838 = o;

if(cljs.core.truth_(and__3546__auto____7838))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7838;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7840 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = o;

if(cljs.core.truth_(and__3546__auto____7841))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7841;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7842 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{var or__3548__auto____7843 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = o;

if(cljs.core.truth_(and__3546__auto____7844))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7844;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7846 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
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
if(cljs.core.truth_((function (){var and__3546__auto____7847 = o;

if(cljs.core.truth_(and__3546__auto____7847))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7847;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7848 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{var or__3548__auto____7849 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7850 = d;

if(cljs.core.truth_(and__3546__auto____7850))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7850;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{var or__3548__auto____7852 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = this$;

if(cljs.core.truth_(and__3546__auto____7853))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7853;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7855 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = this$;

if(cljs.core.truth_(and__3546__auto____7856))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7856;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7858 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = this$;

if(cljs.core.truth_(and__3546__auto____7859))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7859;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7861 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
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
var G__7862 = null;
var G__7862__7863 = (function (o,k){
return null;
});
var G__7862__7864 = (function (o,k,not_found){
return not_found;
});
G__7862 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7862__7863.call(this,o,k);
case  3 :
return G__7862__7864.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7862;
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
var G__7866 = null;
var G__7866__7867 = (function (_,f){
return f.call(null);
});
var G__7866__7868 = (function (_,f,start){
return start;
});
G__7866 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7866__7867.call(this,_,f);
case  3 :
return G__7866__7868.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7866;
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
var G__7870 = null;
var G__7870__7871 = (function (_,n){
return null;
});
var G__7870__7872 = (function (_,n,not_found){
return not_found;
});
G__7870 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7870__7871.call(this,_,n);
case  3 :
return G__7870__7872.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7870;
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
var ci_reduce__7880 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7874 = cljs.core._nth.call(null,cicoll,0);
var n__7875 = 1;

while(true){
if(cljs.core.truth_((n__7875 < cljs.core._count.call(null,cicoll))))
{{
var G__7884 = f.call(null,val__7874,cljs.core._nth.call(null,cicoll,n__7875));
var G__7885 = (n__7875 + 1);
val__7874 = G__7884;
n__7875 = G__7885;
continue;
}
} else
{return val__7874;
}
break;
}
}
});
var ci_reduce__7881 = (function (cicoll,f,val){
var val__7876 = val;
var n__7877 = 0;

while(true){
if(cljs.core.truth_((n__7877 < cljs.core._count.call(null,cicoll))))
{{
var G__7886 = f.call(null,val__7876,cljs.core._nth.call(null,cicoll,n__7877));
var G__7887 = (n__7877 + 1);
val__7876 = G__7886;
n__7877 = G__7887;
continue;
}
} else
{return val__7876;
}
break;
}
});
var ci_reduce__7882 = (function (cicoll,f,val,idx){
var val__7878 = val;
var n__7879 = idx;

while(true){
if(cljs.core.truth_((n__7879 < cljs.core._count.call(null,cicoll))))
{{
var G__7888 = f.call(null,val__7878,cljs.core._nth.call(null,cicoll,n__7879));
var G__7889 = (n__7879 + 1);
val__7878 = G__7888;
n__7879 = G__7889;
continue;
}
} else
{return val__7878;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7880.call(this,cicoll,f);
case  3 :
return ci_reduce__7881.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7882.call(this,cicoll,f,val,idx);
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
var this__7890 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7903 = null;
var G__7903__7904 = (function (_,f){
var this__7891 = this;
return cljs.core.ci_reduce.call(null,this__7891.a,f,(this__7891.a[this__7891.i]),(this__7891.i + 1));
});
var G__7903__7905 = (function (_,f,start){
var this__7892 = this;
return cljs.core.ci_reduce.call(null,this__7892.a,f,start,this__7892.i);
});
G__7903 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7903__7904.call(this,_,f);
case  3 :
return G__7903__7905.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7903;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7893 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7894 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7907 = null;
var G__7907__7908 = (function (coll,n){
var this__7895 = this;
var i__7896 = (n + this__7895.i);

if(cljs.core.truth_((i__7896 < this__7895.a.length)))
{return (this__7895.a[i__7896]);
} else
{return null;
}
});
var G__7907__7909 = (function (coll,n,not_found){
var this__7897 = this;
var i__7898 = (n + this__7897.i);

if(cljs.core.truth_((i__7898 < this__7897.a.length)))
{return (this__7897.a[i__7898]);
} else
{return not_found;
}
});
G__7907 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7907__7908.call(this,coll,n);
case  3 :
return G__7907__7909.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7907;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7899 = this;
return (this__7899.a.length - this__7899.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7900 = this;
return (this__7900.a[this__7900.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7901 = this;
if(cljs.core.truth_(((this__7901.i + 1) < this__7901.a.length)))
{return (new cljs.core.IndexedSeq(this__7901.a,(this__7901.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7902 = this;
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
var G__7911 = null;
var G__7911__7912 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7911__7913 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7911 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7911__7912.call(this,array,f);
case  3 :
return G__7911__7913.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7911;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7915 = null;
var G__7915__7916 = (function (array,k){
return (array[k]);
});
var G__7915__7917 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7915 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7915__7916.call(this,array,k);
case  3 :
return G__7915__7917.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7915;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7919 = null;
var G__7919__7920 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7919__7921 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7919 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7919__7920.call(this,array,n);
case  3 :
return G__7919__7921.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7919;
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
var temp__3698__auto____7923 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7923))
{var s__7924 = temp__3698__auto____7923;

return cljs.core._first.call(null,s__7924);
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
var G__7925 = cljs.core.next.call(null,s);
s = G__7925;
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
var s__7926 = cljs.core.seq.call(null,x);
var n__7927 = 0;

while(true){
if(cljs.core.truth_(s__7926))
{{
var G__7928 = cljs.core.next.call(null,s__7926);
var G__7929 = (n__7927 + 1);
s__7926 = G__7928;
n__7927 = G__7929;
continue;
}
} else
{return n__7927;
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
var conj__7930 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7931 = (function() { 
var G__7933__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7934 = conj.call(null,coll,x);
var G__7935 = cljs.core.first.call(null,xs);
var G__7936 = cljs.core.next.call(null,xs);
coll = G__7934;
x = G__7935;
xs = G__7936;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7933 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7933__delegate.call(this, coll, x, xs);
};
G__7933.cljs$lang$maxFixedArity = 2;
G__7933.cljs$lang$applyTo = (function (arglist__7937){
var coll = cljs.core.first(arglist__7937);
var x = cljs.core.first(cljs.core.next(arglist__7937));
var xs = cljs.core.rest(cljs.core.next(arglist__7937));
return G__7933__delegate.call(this, coll, x, xs);
});
return G__7933;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7930.call(this,coll,x);
default:
return conj__7931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7931.cljs$lang$applyTo;
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
var nth__7938 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7939 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7938.call(this,coll,n);
case  3 :
return nth__7939.call(this,coll,n,not_found);
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
var get__7941 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7942 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7941.call(this,o,k);
case  3 :
return get__7942.call(this,o,k,not_found);
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
var assoc__7945 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7946 = (function() { 
var G__7948__delegate = function (coll,k,v,kvs){
while(true){
var ret__7944 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7949 = ret__7944;
var G__7950 = cljs.core.first.call(null,kvs);
var G__7951 = cljs.core.second.call(null,kvs);
var G__7952 = cljs.core.nnext.call(null,kvs);
coll = G__7949;
k = G__7950;
v = G__7951;
kvs = G__7952;
continue;
}
} else
{return ret__7944;
}
break;
}
};
var G__7948 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7948__delegate.call(this, coll, k, v, kvs);
};
G__7948.cljs$lang$maxFixedArity = 3;
G__7948.cljs$lang$applyTo = (function (arglist__7953){
var coll = cljs.core.first(arglist__7953);
var k = cljs.core.first(cljs.core.next(arglist__7953));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7953)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7953)));
return G__7948__delegate.call(this, coll, k, v, kvs);
});
return G__7948;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7945.call(this,coll,k,v);
default:
return assoc__7946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7946.cljs$lang$applyTo;
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
var dissoc__7955 = (function (coll){
return coll;
});
var dissoc__7956 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7957 = (function() { 
var G__7959__delegate = function (coll,k,ks){
while(true){
var ret__7954 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7960 = ret__7954;
var G__7961 = cljs.core.first.call(null,ks);
var G__7962 = cljs.core.next.call(null,ks);
coll = G__7960;
k = G__7961;
ks = G__7962;
continue;
}
} else
{return ret__7954;
}
break;
}
};
var G__7959 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7959__delegate.call(this, coll, k, ks);
};
G__7959.cljs$lang$maxFixedArity = 2;
G__7959.cljs$lang$applyTo = (function (arglist__7963){
var coll = cljs.core.first(arglist__7963);
var k = cljs.core.first(cljs.core.next(arglist__7963));
var ks = cljs.core.rest(cljs.core.next(arglist__7963));
return G__7959__delegate.call(this, coll, k, ks);
});
return G__7959;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7955.call(this,coll);
case  2 :
return dissoc__7956.call(this,coll,k);
default:
return dissoc__7957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7957.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____7964 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7965 = x__3028__auto____7964;

if(cljs.core.truth_(and__3546__auto____7965))
{var and__3546__auto____7966 = x__3028__auto____7964.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7966))
{return cljs.core.not.call(null,x__3028__auto____7964.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7966;
}
} else
{return and__3546__auto____7965;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____7964);
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
var disj__7968 = (function (coll){
return coll;
});
var disj__7969 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7970 = (function() { 
var G__7972__delegate = function (coll,k,ks){
while(true){
var ret__7967 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7973 = ret__7967;
var G__7974 = cljs.core.first.call(null,ks);
var G__7975 = cljs.core.next.call(null,ks);
coll = G__7973;
k = G__7974;
ks = G__7975;
continue;
}
} else
{return ret__7967;
}
break;
}
};
var G__7972 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7972__delegate.call(this, coll, k, ks);
};
G__7972.cljs$lang$maxFixedArity = 2;
G__7972.cljs$lang$applyTo = (function (arglist__7976){
var coll = cljs.core.first(arglist__7976);
var k = cljs.core.first(cljs.core.next(arglist__7976));
var ks = cljs.core.rest(cljs.core.next(arglist__7976));
return G__7972__delegate.call(this, coll, k, ks);
});
return G__7972;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7968.call(this,coll);
case  2 :
return disj__7969.call(this,coll,k);
default:
return disj__7970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7970.cljs$lang$applyTo;
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
{var x__3028__auto____7977 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7978 = x__3028__auto____7977;

if(cljs.core.truth_(and__3546__auto____7978))
{var and__3546__auto____7979 = x__3028__auto____7977.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7979))
{return cljs.core.not.call(null,x__3028__auto____7977.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7979;
}
} else
{return and__3546__auto____7978;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____7977);
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
{var x__3028__auto____7980 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7981 = x__3028__auto____7980;

if(cljs.core.truth_(and__3546__auto____7981))
{var and__3546__auto____7982 = x__3028__auto____7980.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7982))
{return cljs.core.not.call(null,x__3028__auto____7980.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7982;
}
} else
{return and__3546__auto____7981;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____7980);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____7983 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7984 = x__3028__auto____7983;

if(cljs.core.truth_(and__3546__auto____7984))
{var and__3546__auto____7985 = x__3028__auto____7983.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7985))
{return cljs.core.not.call(null,x__3028__auto____7983.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7985;
}
} else
{return and__3546__auto____7984;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____7983);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____7986 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7987 = x__3028__auto____7986;

if(cljs.core.truth_(and__3546__auto____7987))
{var and__3546__auto____7988 = x__3028__auto____7986.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7988))
{return cljs.core.not.call(null,x__3028__auto____7986.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7988;
}
} else
{return and__3546__auto____7987;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____7986);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____7989 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7990 = x__3028__auto____7989;

if(cljs.core.truth_(and__3546__auto____7990))
{var and__3546__auto____7991 = x__3028__auto____7989.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7991))
{return cljs.core.not.call(null,x__3028__auto____7989.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7991;
}
} else
{return and__3546__auto____7990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____7989);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____7992 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7993 = x__3028__auto____7992;

if(cljs.core.truth_(and__3546__auto____7993))
{var and__3546__auto____7994 = x__3028__auto____7992.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7994))
{return cljs.core.not.call(null,x__3028__auto____7992.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7994;
}
} else
{return and__3546__auto____7993;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____7992);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____7995 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7996 = x__3028__auto____7995;

if(cljs.core.truth_(and__3546__auto____7996))
{var and__3546__auto____7997 = x__3028__auto____7995.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7997))
{return cljs.core.not.call(null,x__3028__auto____7995.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7997;
}
} else
{return and__3546__auto____7996;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____7995);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7998 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7998.push(key);
}));
return keys__7998;
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
{var x__3028__auto____7999 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8000 = x__3028__auto____7999;

if(cljs.core.truth_(and__3546__auto____8000))
{var and__3546__auto____8001 = x__3028__auto____7999.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8001))
{return cljs.core.not.call(null,x__3028__auto____7999.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8001;
}
} else
{return and__3546__auto____8000;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____7999);
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
var and__3546__auto____8002 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8002))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8003 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____8002;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8004 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8004))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____8004;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8005 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8005))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____8005;
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
var and__3546__auto____8006 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8006))
{return (n == n.toFixed());
} else
{return and__3546__auto____8006;
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
if(cljs.core.truth_((function (){var and__3546__auto____8007 = coll;

if(cljs.core.truth_(and__3546__auto____8007))
{var and__3546__auto____8008 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8008))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8008;
}
} else
{return and__3546__auto____8007;
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
var distinct_QMARK___8013 = (function (x){
return true;
});
var distinct_QMARK___8014 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8015 = (function() { 
var G__8017__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8009 = cljs.core.set([y,x]);
var xs__8010 = more;

while(true){
var x__8011 = cljs.core.first.call(null,xs__8010);
var etc__8012 = cljs.core.next.call(null,xs__8010);

if(cljs.core.truth_(xs__8010))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8009,x__8011)))
{return false;
} else
{{
var G__8018 = cljs.core.conj.call(null,s__8009,x__8011);
var G__8019 = etc__8012;
s__8009 = G__8018;
xs__8010 = G__8019;
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
var G__8017 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8017__delegate.call(this, x, y, more);
};
G__8017.cljs$lang$maxFixedArity = 2;
G__8017.cljs$lang$applyTo = (function (arglist__8020){
var x = cljs.core.first(arglist__8020);
var y = cljs.core.first(cljs.core.next(arglist__8020));
var more = cljs.core.rest(cljs.core.next(arglist__8020));
return G__8017__delegate.call(this, x, y, more);
});
return G__8017;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8013.call(this,x);
case  2 :
return distinct_QMARK___8014.call(this,x,y);
default:
return distinct_QMARK___8015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8015.cljs$lang$applyTo;
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
var r__8021 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8021)))
{return r__8021;
} else
{if(cljs.core.truth_(r__8021))
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
var sort__8023 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8024 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8022 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8022,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8022);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8023.call(this,comp);
case  2 :
return sort__8024.call(this,comp,coll);
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
var sort_by__8026 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8027 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8026.call(this,keyfn,comp);
case  3 :
return sort_by__8027.call(this,keyfn,comp,coll);
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
var reduce__8029 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8030 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8029.call(this,f,val);
case  3 :
return reduce__8030.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8036 = (function (f,coll){
var temp__3695__auto____8032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8032))
{var s__8033 = temp__3695__auto____8032;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8033),cljs.core.next.call(null,s__8033));
} else
{return f.call(null);
}
});
var seq_reduce__8037 = (function (f,val,coll){
var val__8034 = val;
var coll__8035 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8035))
{{
var G__8039 = f.call(null,val__8034,cljs.core.first.call(null,coll__8035));
var G__8040 = cljs.core.next.call(null,coll__8035);
val__8034 = G__8039;
coll__8035 = G__8040;
continue;
}
} else
{return val__8034;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8036.call(this,f,val);
case  3 :
return seq_reduce__8037.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8041 = null;
var G__8041__8042 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8041__8043 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8041 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8041__8042.call(this,coll,f);
case  3 :
return G__8041__8043.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8041;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8045 = (function (){
return 0;
});
var _PLUS___8046 = (function (x){
return x;
});
var _PLUS___8047 = (function (x,y){
return (x + y);
});
var _PLUS___8048 = (function() { 
var G__8050__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8050 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8050__delegate.call(this, x, y, more);
};
G__8050.cljs$lang$maxFixedArity = 2;
G__8050.cljs$lang$applyTo = (function (arglist__8051){
var x = cljs.core.first(arglist__8051);
var y = cljs.core.first(cljs.core.next(arglist__8051));
var more = cljs.core.rest(cljs.core.next(arglist__8051));
return G__8050__delegate.call(this, x, y, more);
});
return G__8050;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8045.call(this);
case  1 :
return _PLUS___8046.call(this,x);
case  2 :
return _PLUS___8047.call(this,x,y);
default:
return _PLUS___8048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8048.cljs$lang$applyTo;
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
var ___8052 = (function (x){
return (- x);
});
var ___8053 = (function (x,y){
return (x - y);
});
var ___8054 = (function() { 
var G__8056__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8056 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8056__delegate.call(this, x, y, more);
};
G__8056.cljs$lang$maxFixedArity = 2;
G__8056.cljs$lang$applyTo = (function (arglist__8057){
var x = cljs.core.first(arglist__8057);
var y = cljs.core.first(cljs.core.next(arglist__8057));
var more = cljs.core.rest(cljs.core.next(arglist__8057));
return G__8056__delegate.call(this, x, y, more);
});
return G__8056;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8052.call(this,x);
case  2 :
return ___8053.call(this,x,y);
default:
return ___8054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8054.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8058 = (function (){
return 1;
});
var _STAR___8059 = (function (x){
return x;
});
var _STAR___8060 = (function (x,y){
return (x * y);
});
var _STAR___8061 = (function() { 
var G__8063__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8063 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8063__delegate.call(this, x, y, more);
};
G__8063.cljs$lang$maxFixedArity = 2;
G__8063.cljs$lang$applyTo = (function (arglist__8064){
var x = cljs.core.first(arglist__8064);
var y = cljs.core.first(cljs.core.next(arglist__8064));
var more = cljs.core.rest(cljs.core.next(arglist__8064));
return G__8063__delegate.call(this, x, y, more);
});
return G__8063;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8058.call(this);
case  1 :
return _STAR___8059.call(this,x);
case  2 :
return _STAR___8060.call(this,x,y);
default:
return _STAR___8061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8061.cljs$lang$applyTo;
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
var _SLASH___8065 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8066 = (function (x,y){
return (x / y);
});
var _SLASH___8067 = (function() { 
var G__8069__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8069 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8069__delegate.call(this, x, y, more);
};
G__8069.cljs$lang$maxFixedArity = 2;
G__8069.cljs$lang$applyTo = (function (arglist__8070){
var x = cljs.core.first(arglist__8070);
var y = cljs.core.first(cljs.core.next(arglist__8070));
var more = cljs.core.rest(cljs.core.next(arglist__8070));
return G__8069__delegate.call(this, x, y, more);
});
return G__8069;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8065.call(this,x);
case  2 :
return _SLASH___8066.call(this,x,y);
default:
return _SLASH___8067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8067.cljs$lang$applyTo;
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
var _LT___8071 = (function (x){
return true;
});
var _LT___8072 = (function (x,y){
return (x < y);
});
var _LT___8073 = (function() { 
var G__8075__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8076 = y;
var G__8077 = cljs.core.first.call(null,more);
var G__8078 = cljs.core.next.call(null,more);
x = G__8076;
y = G__8077;
more = G__8078;
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
var G__8075 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8075__delegate.call(this, x, y, more);
};
G__8075.cljs$lang$maxFixedArity = 2;
G__8075.cljs$lang$applyTo = (function (arglist__8079){
var x = cljs.core.first(arglist__8079);
var y = cljs.core.first(cljs.core.next(arglist__8079));
var more = cljs.core.rest(cljs.core.next(arglist__8079));
return G__8075__delegate.call(this, x, y, more);
});
return G__8075;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8071.call(this,x);
case  2 :
return _LT___8072.call(this,x,y);
default:
return _LT___8073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8073.cljs$lang$applyTo;
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
var _LT__EQ___8080 = (function (x){
return true;
});
var _LT__EQ___8081 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8082 = (function() { 
var G__8084__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8085 = y;
var G__8086 = cljs.core.first.call(null,more);
var G__8087 = cljs.core.next.call(null,more);
x = G__8085;
y = G__8086;
more = G__8087;
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
var G__8084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8084__delegate.call(this, x, y, more);
};
G__8084.cljs$lang$maxFixedArity = 2;
G__8084.cljs$lang$applyTo = (function (arglist__8088){
var x = cljs.core.first(arglist__8088);
var y = cljs.core.first(cljs.core.next(arglist__8088));
var more = cljs.core.rest(cljs.core.next(arglist__8088));
return G__8084__delegate.call(this, x, y, more);
});
return G__8084;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8080.call(this,x);
case  2 :
return _LT__EQ___8081.call(this,x,y);
default:
return _LT__EQ___8082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8082.cljs$lang$applyTo;
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
var _GT___8089 = (function (x){
return true;
});
var _GT___8090 = (function (x,y){
return (x > y);
});
var _GT___8091 = (function() { 
var G__8093__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8094 = y;
var G__8095 = cljs.core.first.call(null,more);
var G__8096 = cljs.core.next.call(null,more);
x = G__8094;
y = G__8095;
more = G__8096;
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
var G__8093 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8093__delegate.call(this, x, y, more);
};
G__8093.cljs$lang$maxFixedArity = 2;
G__8093.cljs$lang$applyTo = (function (arglist__8097){
var x = cljs.core.first(arglist__8097);
var y = cljs.core.first(cljs.core.next(arglist__8097));
var more = cljs.core.rest(cljs.core.next(arglist__8097));
return G__8093__delegate.call(this, x, y, more);
});
return G__8093;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8089.call(this,x);
case  2 :
return _GT___8090.call(this,x,y);
default:
return _GT___8091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8091.cljs$lang$applyTo;
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
var _GT__EQ___8098 = (function (x){
return true;
});
var _GT__EQ___8099 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8100 = (function() { 
var G__8102__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8103 = y;
var G__8104 = cljs.core.first.call(null,more);
var G__8105 = cljs.core.next.call(null,more);
x = G__8103;
y = G__8104;
more = G__8105;
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
var G__8102 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8102__delegate.call(this, x, y, more);
};
G__8102.cljs$lang$maxFixedArity = 2;
G__8102.cljs$lang$applyTo = (function (arglist__8106){
var x = cljs.core.first(arglist__8106);
var y = cljs.core.first(cljs.core.next(arglist__8106));
var more = cljs.core.rest(cljs.core.next(arglist__8106));
return G__8102__delegate.call(this, x, y, more);
});
return G__8102;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8098.call(this,x);
case  2 :
return _GT__EQ___8099.call(this,x,y);
default:
return _GT__EQ___8100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8100.cljs$lang$applyTo;
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
var max__8107 = (function (x){
return x;
});
var max__8108 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8109 = (function() { 
var G__8111__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8111 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8111__delegate.call(this, x, y, more);
};
G__8111.cljs$lang$maxFixedArity = 2;
G__8111.cljs$lang$applyTo = (function (arglist__8112){
var x = cljs.core.first(arglist__8112);
var y = cljs.core.first(cljs.core.next(arglist__8112));
var more = cljs.core.rest(cljs.core.next(arglist__8112));
return G__8111__delegate.call(this, x, y, more);
});
return G__8111;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8107.call(this,x);
case  2 :
return max__8108.call(this,x,y);
default:
return max__8109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8109.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8113 = (function (x){
return x;
});
var min__8114 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8115 = (function() { 
var G__8117__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8117 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8117__delegate.call(this, x, y, more);
};
G__8117.cljs$lang$maxFixedArity = 2;
G__8117.cljs$lang$applyTo = (function (arglist__8118){
var x = cljs.core.first(arglist__8118);
var y = cljs.core.first(cljs.core.next(arglist__8118));
var more = cljs.core.rest(cljs.core.next(arglist__8118));
return G__8117__delegate.call(this, x, y, more);
});
return G__8117;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8113.call(this,x);
case  2 :
return min__8114.call(this,x,y);
default:
return min__8115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8115.cljs$lang$applyTo;
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
var rem__8119 = (n % d);

return cljs.core.fix.call(null,((n - rem__8119) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8120 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8120));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8121 = (function (){
return Math.random.call(null);
});
var rand__8122 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8121.call(this);
case  1 :
return rand__8122.call(this,n);
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
var _EQ__EQ___8124 = (function (x){
return true;
});
var _EQ__EQ___8125 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8126 = (function() { 
var G__8128__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8129 = y;
var G__8130 = cljs.core.first.call(null,more);
var G__8131 = cljs.core.next.call(null,more);
x = G__8129;
y = G__8130;
more = G__8131;
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
var G__8128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8128__delegate.call(this, x, y, more);
};
G__8128.cljs$lang$maxFixedArity = 2;
G__8128.cljs$lang$applyTo = (function (arglist__8132){
var x = cljs.core.first(arglist__8132);
var y = cljs.core.first(cljs.core.next(arglist__8132));
var more = cljs.core.rest(cljs.core.next(arglist__8132));
return G__8128__delegate.call(this, x, y, more);
});
return G__8128;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8124.call(this,x);
case  2 :
return _EQ__EQ___8125.call(this,x,y);
default:
return _EQ__EQ___8126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8126.cljs$lang$applyTo;
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
var n__8133 = n;
var xs__8134 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8135 = xs__8134;

if(cljs.core.truth_(and__3546__auto____8135))
{return (n__8133 > 0);
} else
{return and__3546__auto____8135;
}
})()))
{{
var G__8136 = (n__8133 - 1);
var G__8137 = cljs.core.next.call(null,xs__8134);
n__8133 = G__8136;
xs__8134 = G__8137;
continue;
}
} else
{return xs__8134;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8142 = null;
var G__8142__8143 = (function (coll,n){
var temp__3695__auto____8138 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8138))
{var xs__8139 = temp__3695__auto____8138;

return cljs.core.first.call(null,xs__8139);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8142__8144 = (function (coll,n,not_found){
var temp__3695__auto____8140 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8140))
{var xs__8141 = temp__3695__auto____8140;

return cljs.core.first.call(null,xs__8141);
} else
{return not_found;
}
});
G__8142 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8142__8143.call(this,coll,n);
case  3 :
return G__8142__8144.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8142;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8146 = (function (){
return "";
});
var str_STAR___8147 = (function (x){
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
var str_STAR___8148 = (function() { 
var G__8150__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8151 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8152 = cljs.core.next.call(null,more);
sb = G__8151;
more = G__8152;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8150 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8150__delegate.call(this, x, ys);
};
G__8150.cljs$lang$maxFixedArity = 1;
G__8150.cljs$lang$applyTo = (function (arglist__8153){
var x = cljs.core.first(arglist__8153);
var ys = cljs.core.rest(arglist__8153);
return G__8150__delegate.call(this, x, ys);
});
return G__8150;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8146.call(this);
case  1 :
return str_STAR___8147.call(this,x);
default:
return str_STAR___8148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8148.cljs$lang$applyTo;
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
var str__8154 = (function (){
return "";
});
var str__8155 = (function (x){
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
var str__8156 = (function() { 
var G__8158__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8159 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8160 = cljs.core.next.call(null,more);
sb = G__8159;
more = G__8160;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8158 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8158__delegate.call(this, x, ys);
};
G__8158.cljs$lang$maxFixedArity = 1;
G__8158.cljs$lang$applyTo = (function (arglist__8161){
var x = cljs.core.first(arglist__8161);
var ys = cljs.core.rest(arglist__8161);
return G__8158__delegate.call(this, x, ys);
});
return G__8158;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8154.call(this);
case  1 :
return str__8155.call(this,x);
default:
return str__8156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8156.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8162 = (function (s,start){
return s.substring(start);
});
var subs__8163 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8162.call(this,s,start);
case  3 :
return subs__8163.call(this,s,start,end);
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
var symbol__8165 = (function (name){
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
var symbol__8166 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8165.call(this,ns);
case  2 :
return symbol__8166.call(this,ns,name);
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
var keyword__8168 = (function (name){
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
var keyword__8169 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8168.call(this,ns);
case  2 :
return keyword__8169.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8171 = cljs.core.seq.call(null,x);
var ys__8172 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8171 === null)))
{return (ys__8172 === null);
} else
{if(cljs.core.truth_((ys__8172 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8171),cljs.core.first.call(null,ys__8172))))
{{
var G__8173 = cljs.core.next.call(null,xs__8171);
var G__8174 = cljs.core.next.call(null,ys__8172);
xs__8171 = G__8173;
ys__8172 = G__8174;
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
return cljs.core.reduce.call(null,(function (p1__8175_SHARP_,p2__8176_SHARP_){
return cljs.core.hash_combine.call(null,p1__8175_SHARP_,cljs.core.hash.call(null,p2__8176_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8177__8178 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8177__8178))
{var G__8180__8182 = cljs.core.first.call(null,G__8177__8178);
var vec__8181__8183 = G__8180__8182;
var key_name__8184 = cljs.core.nth.call(null,vec__8181__8183,0,null);
var f__8185 = cljs.core.nth.call(null,vec__8181__8183,1,null);
var G__8177__8186 = G__8177__8178;

var G__8180__8187 = G__8180__8182;
var G__8177__8188 = G__8177__8186;

while(true){
var vec__8189__8190 = G__8180__8187;
var key_name__8191 = cljs.core.nth.call(null,vec__8189__8190,0,null);
var f__8192 = cljs.core.nth.call(null,vec__8189__8190,1,null);
var G__8177__8193 = G__8177__8188;

var str_name__8194 = cljs.core.name.call(null,key_name__8191);

obj[str_name__8194] = f__8192;
var temp__3698__auto____8195 = cljs.core.next.call(null,G__8177__8193);

if(cljs.core.truth_(temp__3698__auto____8195))
{var G__8177__8196 = temp__3698__auto____8195;

{
var G__8197 = cljs.core.first.call(null,G__8177__8196);
var G__8198 = G__8177__8196;
G__8180__8187 = G__8197;
G__8177__8188 = G__8198;
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
var this__8199 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8200 = this;
return (new cljs.core.List(this__8200.meta,o,coll,(this__8200.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8201 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8202 = this;
return this__8202.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8203 = this;
return this__8203.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8204 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8205 = this;
return this__8205.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8206 = this;
return this__8206.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8207 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8208 = this;
return (new cljs.core.List(meta,this__8208.first,this__8208.rest,this__8208.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8209 = this;
return this__8209.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8210 = this;
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
var this__8211 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8212 = this;
return (new cljs.core.List(this__8212.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8213 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8214 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8215 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8216 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8217 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8218 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8220 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8221 = this;
return this__8221.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8222 = this;
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
list.cljs$lang$applyTo = (function (arglist__8223){
var items = cljs.core.seq( arglist__8223 );;
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
var this__8224 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8225 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8226 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8227 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8227.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8228 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8229 = this;
return this__8229.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8230 = this;
if(cljs.core.truth_((this__8230.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8230.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8231 = this;
return this__8231.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8232 = this;
return (new cljs.core.Cons(meta,this__8232.first,this__8232.rest));
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
var G__8233 = null;
var G__8233__8234 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8233__8235 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8233 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8233__8234.call(this,string,f);
case  3 :
return G__8233__8235.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8233;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8237 = null;
var G__8237__8238 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8237__8239 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8237 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8237__8238.call(this,string,k);
case  3 :
return G__8237__8239.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8237;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8241 = null;
var G__8241__8242 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8241__8243 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8241 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8241__8242.call(this,string,n);
case  3 :
return G__8241__8243.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8241;
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
var G__8251 = null;
var G__8251__8252 = (function (tsym8245,coll){
var tsym8245__8247 = this;

var this$__8248 = tsym8245__8247;

return cljs.core.get.call(null,coll,this$__8248.toString());
});
var G__8251__8253 = (function (tsym8246,coll,not_found){
var tsym8246__8249 = this;

var this$__8250 = tsym8246__8249;

return cljs.core.get.call(null,coll,this$__8250.toString(),not_found);
});
G__8251 = function(tsym8246,coll,not_found){
switch(arguments.length){
case  2 :
return G__8251__8252.call(this,tsym8246,coll);
case  3 :
return G__8251__8253.call(this,tsym8246,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8251;
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
var x__8255 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8255;
} else
{lazy_seq.x = x__8255.call(null);
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
var this__8256 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8257 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8258 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8259 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8259.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8260 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8261 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8262 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8263 = this;
return this__8263.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8264 = this;
return (new cljs.core.LazySeq(meta,this__8264.realized,this__8264.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8265 = [];

var s__8266 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8266)))
{ary__8265.push(cljs.core.first.call(null,s__8266));
{
var G__8267 = cljs.core.next.call(null,s__8266);
s__8266 = G__8267;
continue;
}
} else
{return ary__8265;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8268 = s;
var i__8269 = n;
var sum__8270 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8271 = (i__8269 > 0);

if(cljs.core.truth_(and__3546__auto____8271))
{return cljs.core.seq.call(null,s__8268);
} else
{return and__3546__auto____8271;
}
})()))
{{
var G__8272 = cljs.core.next.call(null,s__8268);
var G__8273 = (i__8269 - 1);
var G__8274 = (sum__8270 + 1);
s__8268 = G__8272;
i__8269 = G__8273;
sum__8270 = G__8274;
continue;
}
} else
{return sum__8270;
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
var concat__8278 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8279 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8280 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8275 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8275))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8275),concat.call(null,cljs.core.rest.call(null,s__8275),y));
} else
{return y;
}
})));
});
var concat__8281 = (function() { 
var G__8283__delegate = function (x,y,zs){
var cat__8277 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8276 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8276))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8276),cat.call(null,cljs.core.rest.call(null,xys__8276),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8277.call(null,concat.call(null,x,y),zs);
};
var G__8283 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8283__delegate.call(this, x, y, zs);
};
G__8283.cljs$lang$maxFixedArity = 2;
G__8283.cljs$lang$applyTo = (function (arglist__8284){
var x = cljs.core.first(arglist__8284);
var y = cljs.core.first(cljs.core.next(arglist__8284));
var zs = cljs.core.rest(cljs.core.next(arglist__8284));
return G__8283__delegate.call(this, x, y, zs);
});
return G__8283;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8278.call(this);
case  1 :
return concat__8279.call(this,x);
case  2 :
return concat__8280.call(this,x,y);
default:
return concat__8281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8281.cljs$lang$applyTo;
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
var list_STAR___8285 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8286 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8287 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8288 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8289 = (function() { 
var G__8291__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8291 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8291__delegate.call(this, a, b, c, d, more);
};
G__8291.cljs$lang$maxFixedArity = 4;
G__8291.cljs$lang$applyTo = (function (arglist__8292){
var a = cljs.core.first(arglist__8292);
var b = cljs.core.first(cljs.core.next(arglist__8292));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8292)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8292))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8292))));
return G__8291__delegate.call(this, a, b, c, d, more);
});
return G__8291;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8285.call(this,a);
case  2 :
return list_STAR___8286.call(this,a,b);
case  3 :
return list_STAR___8287.call(this,a,b,c);
case  4 :
return list_STAR___8288.call(this,a,b,c,d);
default:
return list_STAR___8289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8289.cljs$lang$applyTo;
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
var apply__8302 = (function (f,args){
var fixed_arity__8293 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8293 + 1)) <= fixed_arity__8293)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8303 = (function (f,x,args){
var arglist__8294 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8295 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8294,fixed_arity__8295) <= fixed_arity__8295)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8294));
} else
{return f.cljs$lang$applyTo(arglist__8294);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8294));
}
});
var apply__8304 = (function (f,x,y,args){
var arglist__8296 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8297 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8296,fixed_arity__8297) <= fixed_arity__8297)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8296));
} else
{return f.cljs$lang$applyTo(arglist__8296);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8296));
}
});
var apply__8305 = (function (f,x,y,z,args){
var arglist__8298 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8299 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8298,fixed_arity__8299) <= fixed_arity__8299)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8298));
} else
{return f.cljs$lang$applyTo(arglist__8298);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8298));
}
});
var apply__8306 = (function() { 
var G__8308__delegate = function (f,a,b,c,d,args){
var arglist__8300 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8301 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8300,fixed_arity__8301) <= fixed_arity__8301)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8300));
} else
{return f.cljs$lang$applyTo(arglist__8300);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8300));
}
};
var G__8308 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8308__delegate.call(this, f, a, b, c, d, args);
};
G__8308.cljs$lang$maxFixedArity = 5;
G__8308.cljs$lang$applyTo = (function (arglist__8309){
var f = cljs.core.first(arglist__8309);
var a = cljs.core.first(cljs.core.next(arglist__8309));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8309)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8309))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8309)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8309)))));
return G__8308__delegate.call(this, f, a, b, c, d, args);
});
return G__8308;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8302.call(this,f,a);
case  3 :
return apply__8303.call(this,f,a,b);
case  4 :
return apply__8304.call(this,f,a,b,c);
case  5 :
return apply__8305.call(this,f,a,b,c,d);
default:
return apply__8306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8306.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8310){
var obj = cljs.core.first(arglist__8310);
var f = cljs.core.first(cljs.core.next(arglist__8310));
var args = cljs.core.rest(cljs.core.next(arglist__8310));
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
var not_EQ___8311 = (function (x){
return false;
});
var not_EQ___8312 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8313 = (function() { 
var G__8315__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8315__delegate.call(this, x, y, more);
};
G__8315.cljs$lang$maxFixedArity = 2;
G__8315.cljs$lang$applyTo = (function (arglist__8316){
var x = cljs.core.first(arglist__8316);
var y = cljs.core.first(cljs.core.next(arglist__8316));
var more = cljs.core.rest(cljs.core.next(arglist__8316));
return G__8315__delegate.call(this, x, y, more);
});
return G__8315;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8311.call(this,x);
case  2 :
return not_EQ___8312.call(this,x,y);
default:
return not_EQ___8313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8313.cljs$lang$applyTo;
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
var G__8317 = pred;
var G__8318 = cljs.core.next.call(null,coll);
pred = G__8317;
coll = G__8318;
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
{var or__3548__auto____8319 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8319))
{return or__3548__auto____8319;
} else
{{
var G__8320 = pred;
var G__8321 = cljs.core.next.call(null,coll);
pred = G__8320;
coll = G__8321;
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
var G__8322 = null;
var G__8322__8323 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8322__8324 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8322__8325 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8322__8326 = (function() { 
var G__8328__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8328 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8328__delegate.call(this, x, y, zs);
};
G__8328.cljs$lang$maxFixedArity = 2;
G__8328.cljs$lang$applyTo = (function (arglist__8329){
var x = cljs.core.first(arglist__8329);
var y = cljs.core.first(cljs.core.next(arglist__8329));
var zs = cljs.core.rest(cljs.core.next(arglist__8329));
return G__8328__delegate.call(this, x, y, zs);
});
return G__8328;
})()
;
G__8322 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8322__8323.call(this);
case  1 :
return G__8322__8324.call(this,x);
case  2 :
return G__8322__8325.call(this,x,y);
default:
return G__8322__8326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8322.cljs$lang$maxFixedArity = 2;
G__8322.cljs$lang$applyTo = G__8322__8326.cljs$lang$applyTo;
return G__8322;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8330__delegate = function (args){
return x;
};
var G__8330 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8330__delegate.call(this, args);
};
G__8330.cljs$lang$maxFixedArity = 0;
G__8330.cljs$lang$applyTo = (function (arglist__8331){
var args = cljs.core.seq( arglist__8331 );;
return G__8330__delegate.call(this, args);
});
return G__8330;
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
var comp__8335 = (function (){
return cljs.core.identity;
});
var comp__8336 = (function (f){
return f;
});
var comp__8337 = (function (f,g){
return (function() {
var G__8341 = null;
var G__8341__8342 = (function (){
return f.call(null,g.call(null));
});
var G__8341__8343 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8341__8344 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8341__8345 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8341__8346 = (function() { 
var G__8348__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8348__delegate.call(this, x, y, z, args);
};
G__8348.cljs$lang$maxFixedArity = 3;
G__8348.cljs$lang$applyTo = (function (arglist__8349){
var x = cljs.core.first(arglist__8349);
var y = cljs.core.first(cljs.core.next(arglist__8349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8349)));
return G__8348__delegate.call(this, x, y, z, args);
});
return G__8348;
})()
;
G__8341 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8341__8342.call(this);
case  1 :
return G__8341__8343.call(this,x);
case  2 :
return G__8341__8344.call(this,x,y);
case  3 :
return G__8341__8345.call(this,x,y,z);
default:
return G__8341__8346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8341.cljs$lang$maxFixedArity = 3;
G__8341.cljs$lang$applyTo = G__8341__8346.cljs$lang$applyTo;
return G__8341;
})()
});
var comp__8338 = (function (f,g,h){
return (function() {
var G__8350 = null;
var G__8350__8351 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8350__8352 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8350__8353 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8350__8354 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8350__8355 = (function() { 
var G__8357__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8357 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8357__delegate.call(this, x, y, z, args);
};
G__8357.cljs$lang$maxFixedArity = 3;
G__8357.cljs$lang$applyTo = (function (arglist__8358){
var x = cljs.core.first(arglist__8358);
var y = cljs.core.first(cljs.core.next(arglist__8358));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8358)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8358)));
return G__8357__delegate.call(this, x, y, z, args);
});
return G__8357;
})()
;
G__8350 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8350__8351.call(this);
case  1 :
return G__8350__8352.call(this,x);
case  2 :
return G__8350__8353.call(this,x,y);
case  3 :
return G__8350__8354.call(this,x,y,z);
default:
return G__8350__8355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8350.cljs$lang$maxFixedArity = 3;
G__8350.cljs$lang$applyTo = G__8350__8355.cljs$lang$applyTo;
return G__8350;
})()
});
var comp__8339 = (function() { 
var G__8359__delegate = function (f1,f2,f3,fs){
var fs__8332 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8360__delegate = function (args){
var ret__8333 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8332),args);
var fs__8334 = cljs.core.next.call(null,fs__8332);

while(true){
if(cljs.core.truth_(fs__8334))
{{
var G__8361 = cljs.core.first.call(null,fs__8334).call(null,ret__8333);
var G__8362 = cljs.core.next.call(null,fs__8334);
ret__8333 = G__8361;
fs__8334 = G__8362;
continue;
}
} else
{return ret__8333;
}
break;
}
};
var G__8360 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8360__delegate.call(this, args);
};
G__8360.cljs$lang$maxFixedArity = 0;
G__8360.cljs$lang$applyTo = (function (arglist__8363){
var args = cljs.core.seq( arglist__8363 );;
return G__8360__delegate.call(this, args);
});
return G__8360;
})()
;
};
var G__8359 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8359__delegate.call(this, f1, f2, f3, fs);
};
G__8359.cljs$lang$maxFixedArity = 3;
G__8359.cljs$lang$applyTo = (function (arglist__8364){
var f1 = cljs.core.first(arglist__8364);
var f2 = cljs.core.first(cljs.core.next(arglist__8364));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8364)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8364)));
return G__8359__delegate.call(this, f1, f2, f3, fs);
});
return G__8359;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8335.call(this);
case  1 :
return comp__8336.call(this,f1);
case  2 :
return comp__8337.call(this,f1,f2);
case  3 :
return comp__8338.call(this,f1,f2,f3);
default:
return comp__8339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8339.cljs$lang$applyTo;
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
var partial__8365 = (function (f,arg1){
return (function() { 
var G__8370__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8370 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8370__delegate.call(this, args);
};
G__8370.cljs$lang$maxFixedArity = 0;
G__8370.cljs$lang$applyTo = (function (arglist__8371){
var args = cljs.core.seq( arglist__8371 );;
return G__8370__delegate.call(this, args);
});
return G__8370;
})()
;
});
var partial__8366 = (function (f,arg1,arg2){
return (function() { 
var G__8372__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8372 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8372__delegate.call(this, args);
};
G__8372.cljs$lang$maxFixedArity = 0;
G__8372.cljs$lang$applyTo = (function (arglist__8373){
var args = cljs.core.seq( arglist__8373 );;
return G__8372__delegate.call(this, args);
});
return G__8372;
})()
;
});
var partial__8367 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8374__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8374 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8374__delegate.call(this, args);
};
G__8374.cljs$lang$maxFixedArity = 0;
G__8374.cljs$lang$applyTo = (function (arglist__8375){
var args = cljs.core.seq( arglist__8375 );;
return G__8374__delegate.call(this, args);
});
return G__8374;
})()
;
});
var partial__8368 = (function() { 
var G__8376__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8377__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8377 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8377__delegate.call(this, args);
};
G__8377.cljs$lang$maxFixedArity = 0;
G__8377.cljs$lang$applyTo = (function (arglist__8378){
var args = cljs.core.seq( arglist__8378 );;
return G__8377__delegate.call(this, args);
});
return G__8377;
})()
;
};
var G__8376 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8376__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8376.cljs$lang$maxFixedArity = 4;
G__8376.cljs$lang$applyTo = (function (arglist__8379){
var f = cljs.core.first(arglist__8379);
var arg1 = cljs.core.first(cljs.core.next(arglist__8379));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8379)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8379))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8379))));
return G__8376__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8376;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8365.call(this,f,arg1);
case  3 :
return partial__8366.call(this,f,arg1,arg2);
case  4 :
return partial__8367.call(this,f,arg1,arg2,arg3);
default:
return partial__8368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8368.cljs$lang$applyTo;
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
var fnil__8380 = (function (f,x){
return (function() {
var G__8384 = null;
var G__8384__8385 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8384__8386 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8384__8387 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8384__8388 = (function() { 
var G__8390__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8390 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8390__delegate.call(this, a, b, c, ds);
};
G__8390.cljs$lang$maxFixedArity = 3;
G__8390.cljs$lang$applyTo = (function (arglist__8391){
var a = cljs.core.first(arglist__8391);
var b = cljs.core.first(cljs.core.next(arglist__8391));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8391)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8391)));
return G__8390__delegate.call(this, a, b, c, ds);
});
return G__8390;
})()
;
G__8384 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8384__8385.call(this,a);
case  2 :
return G__8384__8386.call(this,a,b);
case  3 :
return G__8384__8387.call(this,a,b,c);
default:
return G__8384__8388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8384.cljs$lang$maxFixedArity = 3;
G__8384.cljs$lang$applyTo = G__8384__8388.cljs$lang$applyTo;
return G__8384;
})()
});
var fnil__8381 = (function (f,x,y){
return (function() {
var G__8392 = null;
var G__8392__8393 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8392__8394 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8392__8395 = (function() { 
var G__8397__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8397 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8397__delegate.call(this, a, b, c, ds);
};
G__8397.cljs$lang$maxFixedArity = 3;
G__8397.cljs$lang$applyTo = (function (arglist__8398){
var a = cljs.core.first(arglist__8398);
var b = cljs.core.first(cljs.core.next(arglist__8398));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8398)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8398)));
return G__8397__delegate.call(this, a, b, c, ds);
});
return G__8397;
})()
;
G__8392 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8392__8393.call(this,a,b);
case  3 :
return G__8392__8394.call(this,a,b,c);
default:
return G__8392__8395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8392.cljs$lang$maxFixedArity = 3;
G__8392.cljs$lang$applyTo = G__8392__8395.cljs$lang$applyTo;
return G__8392;
})()
});
var fnil__8382 = (function (f,x,y,z){
return (function() {
var G__8399 = null;
var G__8399__8400 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8399__8401 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8399__8402 = (function() { 
var G__8404__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8404 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8404__delegate.call(this, a, b, c, ds);
};
G__8404.cljs$lang$maxFixedArity = 3;
G__8404.cljs$lang$applyTo = (function (arglist__8405){
var a = cljs.core.first(arglist__8405);
var b = cljs.core.first(cljs.core.next(arglist__8405));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8405)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8405)));
return G__8404__delegate.call(this, a, b, c, ds);
});
return G__8404;
})()
;
G__8399 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,a,b);
case  3 :
return G__8399__8401.call(this,a,b,c);
default:
return G__8399__8402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8399.cljs$lang$maxFixedArity = 3;
G__8399.cljs$lang$applyTo = G__8399__8402.cljs$lang$applyTo;
return G__8399;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8380.call(this,f,x);
case  3 :
return fnil__8381.call(this,f,x,y);
case  4 :
return fnil__8382.call(this,f,x,y,z);
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
var mapi__8408 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8406 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8406))
{var s__8407 = temp__3698__auto____8406;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8407)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8407)));
} else
{return null;
}
})));
});

return mapi__8408.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8409 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8409))
{var s__8410 = temp__3698__auto____8409;

var x__8411 = f.call(null,cljs.core.first.call(null,s__8410));

if(cljs.core.truth_((x__8411 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8410));
} else
{return cljs.core.cons.call(null,x__8411,keep.call(null,f,cljs.core.rest.call(null,s__8410)));
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
var keepi__8421 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8418))
{var s__8419 = temp__3698__auto____8418;

var x__8420 = f.call(null,idx,cljs.core.first.call(null,s__8419));

if(cljs.core.truth_((x__8420 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8419));
} else
{return cljs.core.cons.call(null,x__8420,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8419)));
}
} else
{return null;
}
})));
});

return keepi__8421.call(null,0,coll);
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
var every_pred__8466 = (function (p){
return (function() {
var ep1 = null;
var ep1__8471 = (function (){
return true;
});
var ep1__8472 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8473 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8428 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8428))
{return p.call(null,y);
} else
{return and__3546__auto____8428;
}
})());
});
var ep1__8474 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8429 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8429))
{var and__3546__auto____8430 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8430))
{return p.call(null,z);
} else
{return and__3546__auto____8430;
}
} else
{return and__3546__auto____8429;
}
})());
});
var ep1__8475 = (function() { 
var G__8477__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8431 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8431))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8431;
}
})());
};
var G__8477 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8477__delegate.call(this, x, y, z, args);
};
G__8477.cljs$lang$maxFixedArity = 3;
G__8477.cljs$lang$applyTo = (function (arglist__8478){
var x = cljs.core.first(arglist__8478);
var y = cljs.core.first(cljs.core.next(arglist__8478));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8478)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8478)));
return G__8477__delegate.call(this, x, y, z, args);
});
return G__8477;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8471.call(this);
case  1 :
return ep1__8472.call(this,x);
case  2 :
return ep1__8473.call(this,x,y);
case  3 :
return ep1__8474.call(this,x,y,z);
default:
return ep1__8475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8475.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8467 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8479 = (function (){
return true;
});
var ep2__8480 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8432 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8432))
{return p2.call(null,x);
} else
{return and__3546__auto____8432;
}
})());
});
var ep2__8481 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8433 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8433))
{var and__3546__auto____8434 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8434))
{var and__3546__auto____8435 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8435))
{return p2.call(null,y);
} else
{return and__3546__auto____8435;
}
} else
{return and__3546__auto____8434;
}
} else
{return and__3546__auto____8433;
}
})());
});
var ep2__8482 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8436 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8436))
{var and__3546__auto____8437 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8437))
{var and__3546__auto____8438 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8438))
{var and__3546__auto____8439 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8439))
{var and__3546__auto____8440 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8440))
{return p2.call(null,z);
} else
{return and__3546__auto____8440;
}
} else
{return and__3546__auto____8439;
}
} else
{return and__3546__auto____8438;
}
} else
{return and__3546__auto____8437;
}
} else
{return and__3546__auto____8436;
}
})());
});
var ep2__8483 = (function() { 
var G__8485__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8441 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8441))
{return cljs.core.every_QMARK_.call(null,(function (p1__8412_SHARP_){
var and__3546__auto____8442 = p1.call(null,p1__8412_SHARP_);

if(cljs.core.truth_(and__3546__auto____8442))
{return p2.call(null,p1__8412_SHARP_);
} else
{return and__3546__auto____8442;
}
}),args);
} else
{return and__3546__auto____8441;
}
})());
};
var G__8485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8485__delegate.call(this, x, y, z, args);
};
G__8485.cljs$lang$maxFixedArity = 3;
G__8485.cljs$lang$applyTo = (function (arglist__8486){
var x = cljs.core.first(arglist__8486);
var y = cljs.core.first(cljs.core.next(arglist__8486));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8486)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8486)));
return G__8485__delegate.call(this, x, y, z, args);
});
return G__8485;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8479.call(this);
case  1 :
return ep2__8480.call(this,x);
case  2 :
return ep2__8481.call(this,x,y);
case  3 :
return ep2__8482.call(this,x,y,z);
default:
return ep2__8483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8483.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8468 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8487 = (function (){
return true;
});
var ep3__8488 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8443 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8443))
{var and__3546__auto____8444 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8444))
{return p3.call(null,x);
} else
{return and__3546__auto____8444;
}
} else
{return and__3546__auto____8443;
}
})());
});
var ep3__8489 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8445 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8445))
{var and__3546__auto____8446 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8446))
{var and__3546__auto____8447 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8447))
{var and__3546__auto____8448 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8448))
{var and__3546__auto____8449 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8449))
{return p3.call(null,y);
} else
{return and__3546__auto____8449;
}
} else
{return and__3546__auto____8448;
}
} else
{return and__3546__auto____8447;
}
} else
{return and__3546__auto____8446;
}
} else
{return and__3546__auto____8445;
}
})());
});
var ep3__8490 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8450 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8450))
{var and__3546__auto____8451 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8451))
{var and__3546__auto____8452 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8452))
{var and__3546__auto____8453 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8453))
{var and__3546__auto____8454 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8454))
{var and__3546__auto____8455 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8455))
{var and__3546__auto____8456 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8456))
{var and__3546__auto____8457 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8457))
{return p3.call(null,z);
} else
{return and__3546__auto____8457;
}
} else
{return and__3546__auto____8456;
}
} else
{return and__3546__auto____8455;
}
} else
{return and__3546__auto____8454;
}
} else
{return and__3546__auto____8453;
}
} else
{return and__3546__auto____8452;
}
} else
{return and__3546__auto____8451;
}
} else
{return and__3546__auto____8450;
}
})());
});
var ep3__8491 = (function() { 
var G__8493__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8458 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8458))
{return cljs.core.every_QMARK_.call(null,(function (p1__8413_SHARP_){
var and__3546__auto____8459 = p1.call(null,p1__8413_SHARP_);

if(cljs.core.truth_(and__3546__auto____8459))
{var and__3546__auto____8460 = p2.call(null,p1__8413_SHARP_);

if(cljs.core.truth_(and__3546__auto____8460))
{return p3.call(null,p1__8413_SHARP_);
} else
{return and__3546__auto____8460;
}
} else
{return and__3546__auto____8459;
}
}),args);
} else
{return and__3546__auto____8458;
}
})());
};
var G__8493 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8493__delegate.call(this, x, y, z, args);
};
G__8493.cljs$lang$maxFixedArity = 3;
G__8493.cljs$lang$applyTo = (function (arglist__8494){
var x = cljs.core.first(arglist__8494);
var y = cljs.core.first(cljs.core.next(arglist__8494));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8494)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8494)));
return G__8493__delegate.call(this, x, y, z, args);
});
return G__8493;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8487.call(this);
case  1 :
return ep3__8488.call(this,x);
case  2 :
return ep3__8489.call(this,x,y);
case  3 :
return ep3__8490.call(this,x,y,z);
default:
return ep3__8491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8491.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8469 = (function() { 
var G__8495__delegate = function (p1,p2,p3,ps){
var ps__8461 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8496 = (function (){
return true;
});
var epn__8497 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8414_SHARP_){
return p1__8414_SHARP_.call(null,x);
}),ps__8461);
});
var epn__8498 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8415_SHARP_){
var and__3546__auto____8462 = p1__8415_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8462))
{return p1__8415_SHARP_.call(null,y);
} else
{return and__3546__auto____8462;
}
}),ps__8461);
});
var epn__8499 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8416_SHARP_){
var and__3546__auto____8463 = p1__8416_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8463))
{var and__3546__auto____8464 = p1__8416_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8464))
{return p1__8416_SHARP_.call(null,z);
} else
{return and__3546__auto____8464;
}
} else
{return and__3546__auto____8463;
}
}),ps__8461);
});
var epn__8500 = (function() { 
var G__8502__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8465 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8465))
{return cljs.core.every_QMARK_.call(null,(function (p1__8417_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8417_SHARP_,args);
}),ps__8461);
} else
{return and__3546__auto____8465;
}
})());
};
var G__8502 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8502__delegate.call(this, x, y, z, args);
};
G__8502.cljs$lang$maxFixedArity = 3;
G__8502.cljs$lang$applyTo = (function (arglist__8503){
var x = cljs.core.first(arglist__8503);
var y = cljs.core.first(cljs.core.next(arglist__8503));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8503)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8503)));
return G__8502__delegate.call(this, x, y, z, args);
});
return G__8502;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8496.call(this);
case  1 :
return epn__8497.call(this,x);
case  2 :
return epn__8498.call(this,x,y);
case  3 :
return epn__8499.call(this,x,y,z);
default:
return epn__8500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8500.cljs$lang$applyTo;
return epn;
})()
};
var G__8495 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8495__delegate.call(this, p1, p2, p3, ps);
};
G__8495.cljs$lang$maxFixedArity = 3;
G__8495.cljs$lang$applyTo = (function (arglist__8504){
var p1 = cljs.core.first(arglist__8504);
var p2 = cljs.core.first(cljs.core.next(arglist__8504));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8504)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8504)));
return G__8495__delegate.call(this, p1, p2, p3, ps);
});
return G__8495;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8466.call(this,p1);
case  2 :
return every_pred__8467.call(this,p1,p2);
case  3 :
return every_pred__8468.call(this,p1,p2,p3);
default:
return every_pred__8469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8469.cljs$lang$applyTo;
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
var some_fn__8544 = (function (p){
return (function() {
var sp1 = null;
var sp1__8549 = (function (){
return null;
});
var sp1__8550 = (function (x){
return p.call(null,x);
});
var sp1__8551 = (function (x,y){
var or__3548__auto____8506 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8506))
{return or__3548__auto____8506;
} else
{return p.call(null,y);
}
});
var sp1__8552 = (function (x,y,z){
var or__3548__auto____8507 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8507))
{return or__3548__auto____8507;
} else
{var or__3548__auto____8508 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8508))
{return or__3548__auto____8508;
} else
{return p.call(null,z);
}
}
});
var sp1__8553 = (function() { 
var G__8555__delegate = function (x,y,z,args){
var or__3548__auto____8509 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8509))
{return or__3548__auto____8509;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8555 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8555__delegate.call(this, x, y, z, args);
};
G__8555.cljs$lang$maxFixedArity = 3;
G__8555.cljs$lang$applyTo = (function (arglist__8556){
var x = cljs.core.first(arglist__8556);
var y = cljs.core.first(cljs.core.next(arglist__8556));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8556)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8556)));
return G__8555__delegate.call(this, x, y, z, args);
});
return G__8555;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8549.call(this);
case  1 :
return sp1__8550.call(this,x);
case  2 :
return sp1__8551.call(this,x,y);
case  3 :
return sp1__8552.call(this,x,y,z);
default:
return sp1__8553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8553.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8545 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8557 = (function (){
return null;
});
var sp2__8558 = (function (x){
var or__3548__auto____8510 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8510))
{return or__3548__auto____8510;
} else
{return p2.call(null,x);
}
});
var sp2__8559 = (function (x,y){
var or__3548__auto____8511 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8511))
{return or__3548__auto____8511;
} else
{var or__3548__auto____8512 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8512))
{return or__3548__auto____8512;
} else
{var or__3548__auto____8513 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8513))
{return or__3548__auto____8513;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8560 = (function (x,y,z){
var or__3548__auto____8514 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8514))
{return or__3548__auto____8514;
} else
{var or__3548__auto____8515 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8515))
{return or__3548__auto____8515;
} else
{var or__3548__auto____8516 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8516))
{return or__3548__auto____8516;
} else
{var or__3548__auto____8517 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8517))
{return or__3548__auto____8517;
} else
{var or__3548__auto____8518 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8518))
{return or__3548__auto____8518;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8561 = (function() { 
var G__8563__delegate = function (x,y,z,args){
var or__3548__auto____8519 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8519))
{return or__3548__auto____8519;
} else
{return cljs.core.some.call(null,(function (p1__8422_SHARP_){
var or__3548__auto____8520 = p1.call(null,p1__8422_SHARP_);

if(cljs.core.truth_(or__3548__auto____8520))
{return or__3548__auto____8520;
} else
{return p2.call(null,p1__8422_SHARP_);
}
}),args);
}
};
var G__8563 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8563__delegate.call(this, x, y, z, args);
};
G__8563.cljs$lang$maxFixedArity = 3;
G__8563.cljs$lang$applyTo = (function (arglist__8564){
var x = cljs.core.first(arglist__8564);
var y = cljs.core.first(cljs.core.next(arglist__8564));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8564)));
return G__8563__delegate.call(this, x, y, z, args);
});
return G__8563;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8557.call(this);
case  1 :
return sp2__8558.call(this,x);
case  2 :
return sp2__8559.call(this,x,y);
case  3 :
return sp2__8560.call(this,x,y,z);
default:
return sp2__8561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8561.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8546 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8565 = (function (){
return null;
});
var sp3__8566 = (function (x){
var or__3548__auto____8521 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8521))
{return or__3548__auto____8521;
} else
{var or__3548__auto____8522 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8522))
{return or__3548__auto____8522;
} else
{return p3.call(null,x);
}
}
});
var sp3__8567 = (function (x,y){
var or__3548__auto____8523 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8523))
{return or__3548__auto____8523;
} else
{var or__3548__auto____8524 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8524))
{return or__3548__auto____8524;
} else
{var or__3548__auto____8525 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8525))
{return or__3548__auto____8525;
} else
{var or__3548__auto____8526 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8526))
{return or__3548__auto____8526;
} else
{var or__3548__auto____8527 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8527))
{return or__3548__auto____8527;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8568 = (function (x,y,z){
var or__3548__auto____8528 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8528))
{return or__3548__auto____8528;
} else
{var or__3548__auto____8529 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8529))
{return or__3548__auto____8529;
} else
{var or__3548__auto____8530 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8530))
{return or__3548__auto____8530;
} else
{var or__3548__auto____8531 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8531))
{return or__3548__auto____8531;
} else
{var or__3548__auto____8532 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8532))
{return or__3548__auto____8532;
} else
{var or__3548__auto____8533 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8533))
{return or__3548__auto____8533;
} else
{var or__3548__auto____8534 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8534))
{return or__3548__auto____8534;
} else
{var or__3548__auto____8535 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8535))
{return or__3548__auto____8535;
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
var sp3__8569 = (function() { 
var G__8571__delegate = function (x,y,z,args){
var or__3548__auto____8536 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8536))
{return or__3548__auto____8536;
} else
{return cljs.core.some.call(null,(function (p1__8423_SHARP_){
var or__3548__auto____8537 = p1.call(null,p1__8423_SHARP_);

if(cljs.core.truth_(or__3548__auto____8537))
{return or__3548__auto____8537;
} else
{var or__3548__auto____8538 = p2.call(null,p1__8423_SHARP_);

if(cljs.core.truth_(or__3548__auto____8538))
{return or__3548__auto____8538;
} else
{return p3.call(null,p1__8423_SHARP_);
}
}
}),args);
}
};
var G__8571 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8571__delegate.call(this, x, y, z, args);
};
G__8571.cljs$lang$maxFixedArity = 3;
G__8571.cljs$lang$applyTo = (function (arglist__8572){
var x = cljs.core.first(arglist__8572);
var y = cljs.core.first(cljs.core.next(arglist__8572));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8572)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8572)));
return G__8571__delegate.call(this, x, y, z, args);
});
return G__8571;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8565.call(this);
case  1 :
return sp3__8566.call(this,x);
case  2 :
return sp3__8567.call(this,x,y);
case  3 :
return sp3__8568.call(this,x,y,z);
default:
return sp3__8569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8569.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8547 = (function() { 
var G__8573__delegate = function (p1,p2,p3,ps){
var ps__8539 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8574 = (function (){
return null;
});
var spn__8575 = (function (x){
return cljs.core.some.call(null,(function (p1__8424_SHARP_){
return p1__8424_SHARP_.call(null,x);
}),ps__8539);
});
var spn__8576 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8425_SHARP_){
var or__3548__auto____8540 = p1__8425_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8540))
{return or__3548__auto____8540;
} else
{return p1__8425_SHARP_.call(null,y);
}
}),ps__8539);
});
var spn__8577 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8426_SHARP_){
var or__3548__auto____8541 = p1__8426_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8541))
{return or__3548__auto____8541;
} else
{var or__3548__auto____8542 = p1__8426_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8542))
{return or__3548__auto____8542;
} else
{return p1__8426_SHARP_.call(null,z);
}
}
}),ps__8539);
});
var spn__8578 = (function() { 
var G__8580__delegate = function (x,y,z,args){
var or__3548__auto____8543 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8543))
{return or__3548__auto____8543;
} else
{return cljs.core.some.call(null,(function (p1__8427_SHARP_){
return cljs.core.some.call(null,p1__8427_SHARP_,args);
}),ps__8539);
}
};
var G__8580 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8580__delegate.call(this, x, y, z, args);
};
G__8580.cljs$lang$maxFixedArity = 3;
G__8580.cljs$lang$applyTo = (function (arglist__8581){
var x = cljs.core.first(arglist__8581);
var y = cljs.core.first(cljs.core.next(arglist__8581));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8581)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8581)));
return G__8580__delegate.call(this, x, y, z, args);
});
return G__8580;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8574.call(this);
case  1 :
return spn__8575.call(this,x);
case  2 :
return spn__8576.call(this,x,y);
case  3 :
return spn__8577.call(this,x,y,z);
default:
return spn__8578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8578.cljs$lang$applyTo;
return spn;
})()
};
var G__8573 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8573__delegate.call(this, p1, p2, p3, ps);
};
G__8573.cljs$lang$maxFixedArity = 3;
G__8573.cljs$lang$applyTo = (function (arglist__8582){
var p1 = cljs.core.first(arglist__8582);
var p2 = cljs.core.first(cljs.core.next(arglist__8582));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8582)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8582)));
return G__8573__delegate.call(this, p1, p2, p3, ps);
});
return G__8573;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8544.call(this,p1);
case  2 :
return some_fn__8545.call(this,p1,p2);
case  3 :
return some_fn__8546.call(this,p1,p2,p3);
default:
return some_fn__8547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8547.cljs$lang$applyTo;
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
var map__8595 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8583))
{var s__8584 = temp__3698__auto____8583;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8584)),map.call(null,f,cljs.core.rest.call(null,s__8584)));
} else
{return null;
}
})));
});
var map__8596 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8585 = cljs.core.seq.call(null,c1);
var s2__8586 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8587 = s1__8585;

if(cljs.core.truth_(and__3546__auto____8587))
{return s2__8586;
} else
{return and__3546__auto____8587;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8585),cljs.core.first.call(null,s2__8586)),map.call(null,f,cljs.core.rest.call(null,s1__8585),cljs.core.rest.call(null,s2__8586)));
} else
{return null;
}
})));
});
var map__8597 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8588 = cljs.core.seq.call(null,c1);
var s2__8589 = cljs.core.seq.call(null,c2);
var s3__8590 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8591 = s1__8588;

if(cljs.core.truth_(and__3546__auto____8591))
{var and__3546__auto____8592 = s2__8589;

if(cljs.core.truth_(and__3546__auto____8592))
{return s3__8590;
} else
{return and__3546__auto____8592;
}
} else
{return and__3546__auto____8591;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8588),cljs.core.first.call(null,s2__8589),cljs.core.first.call(null,s3__8590)),map.call(null,f,cljs.core.rest.call(null,s1__8588),cljs.core.rest.call(null,s2__8589),cljs.core.rest.call(null,s3__8590)));
} else
{return null;
}
})));
});
var map__8598 = (function() { 
var G__8600__delegate = function (f,c1,c2,c3,colls){
var step__8594 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8593 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8593)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8593),step.call(null,map.call(null,cljs.core.rest,ss__8593)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8505_SHARP_){
return cljs.core.apply.call(null,f,p1__8505_SHARP_);
}),step__8594.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8600 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8600__delegate.call(this, f, c1, c2, c3, colls);
};
G__8600.cljs$lang$maxFixedArity = 4;
G__8600.cljs$lang$applyTo = (function (arglist__8601){
var f = cljs.core.first(arglist__8601);
var c1 = cljs.core.first(cljs.core.next(arglist__8601));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8601)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8601))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8601))));
return G__8600__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8600;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8595.call(this,f,c1);
case  3 :
return map__8596.call(this,f,c1,c2);
case  4 :
return map__8597.call(this,f,c1,c2,c3);
default:
return map__8598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8598.cljs$lang$applyTo;
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
{var temp__3698__auto____8602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8602))
{var s__8603 = temp__3698__auto____8602;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8603),take.call(null,(n - 1),cljs.core.rest.call(null,s__8603)));
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
var step__8606 = (function (n,coll){
while(true){
var s__8604 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8605 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8605))
{return s__8604;
} else
{return and__3546__auto____8605;
}
})()))
{{
var G__8607 = (n - 1);
var G__8608 = cljs.core.rest.call(null,s__8604);
n = G__8607;
coll = G__8608;
continue;
}
} else
{return s__8604;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8606.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8609 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8610 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8609.call(this,n);
case  2 :
return drop_last__8610.call(this,n,s);
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
var s__8612 = cljs.core.seq.call(null,coll);
var lead__8613 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8613))
{{
var G__8614 = cljs.core.next.call(null,s__8612);
var G__8615 = cljs.core.next.call(null,lead__8613);
s__8612 = G__8614;
lead__8613 = G__8615;
continue;
}
} else
{return s__8612;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8618 = (function (pred,coll){
while(true){
var s__8616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8617 = s__8616;

if(cljs.core.truth_(and__3546__auto____8617))
{return pred.call(null,cljs.core.first.call(null,s__8616));
} else
{return and__3546__auto____8617;
}
})()))
{{
var G__8619 = pred;
var G__8620 = cljs.core.rest.call(null,s__8616);
pred = G__8619;
coll = G__8620;
continue;
}
} else
{return s__8616;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8618.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8621 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8621))
{var s__8622 = temp__3698__auto____8621;

return cljs.core.concat.call(null,s__8622,cycle.call(null,s__8622));
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
var repeat__8623 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8624 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8623.call(this,n);
case  2 :
return repeat__8624.call(this,n,x);
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
var repeatedly__8626 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8627 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8626.call(this,n);
case  2 :
return repeatedly__8627.call(this,n,f);
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
var interleave__8633 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8629 = cljs.core.seq.call(null,c1);
var s2__8630 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8631 = s1__8629;

if(cljs.core.truth_(and__3546__auto____8631))
{return s2__8630;
} else
{return and__3546__auto____8631;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8629),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8630),interleave.call(null,cljs.core.rest.call(null,s1__8629),cljs.core.rest.call(null,s2__8630))));
} else
{return null;
}
})));
});
var interleave__8634 = (function() { 
var G__8636__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8632 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8632)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8632),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8632)));
} else
{return null;
}
})));
};
var G__8636 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8636__delegate.call(this, c1, c2, colls);
};
G__8636.cljs$lang$maxFixedArity = 2;
G__8636.cljs$lang$applyTo = (function (arglist__8637){
var c1 = cljs.core.first(arglist__8637);
var c2 = cljs.core.first(cljs.core.next(arglist__8637));
var colls = cljs.core.rest(cljs.core.next(arglist__8637));
return G__8636__delegate.call(this, c1, c2, colls);
});
return G__8636;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8633.call(this,c1,c2);
default:
return interleave__8634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8634.cljs$lang$applyTo;
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
var cat__8640 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8638 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8638))
{var coll__8639 = temp__3695__auto____8638;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8639),cat.call(null,cljs.core.rest.call(null,coll__8639),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8640.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8641 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8642 = (function() { 
var G__8644__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8644 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8644__delegate.call(this, f, coll, colls);
};
G__8644.cljs$lang$maxFixedArity = 2;
G__8644.cljs$lang$applyTo = (function (arglist__8645){
var f = cljs.core.first(arglist__8645);
var coll = cljs.core.first(cljs.core.next(arglist__8645));
var colls = cljs.core.rest(cljs.core.next(arglist__8645));
return G__8644__delegate.call(this, f, coll, colls);
});
return G__8644;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8641.call(this,f,coll);
default:
return mapcat__8642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8642.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8646 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8646))
{var s__8647 = temp__3698__auto____8646;

var f__8648 = cljs.core.first.call(null,s__8647);
var r__8649 = cljs.core.rest.call(null,s__8647);

if(cljs.core.truth_(pred.call(null,f__8648)))
{return cljs.core.cons.call(null,f__8648,filter.call(null,pred,r__8649));
} else
{return filter.call(null,pred,r__8649);
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
var walk__8651 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8651.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8650_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8650_SHARP_));
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
var partition__8658 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8659 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8652 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8652))
{var s__8653 = temp__3698__auto____8652;

var p__8654 = cljs.core.take.call(null,n,s__8653);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8654))))
{return cljs.core.cons.call(null,p__8654,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8653)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8660 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8655 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8655))
{var s__8656 = temp__3698__auto____8655;

var p__8657 = cljs.core.take.call(null,n,s__8656);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8657))))
{return cljs.core.cons.call(null,p__8657,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8656)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8657,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8658.call(this,n,step);
case  3 :
return partition__8659.call(this,n,step,pad);
case  4 :
return partition__8660.call(this,n,step,pad,coll);
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
var get_in__8666 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8667 = (function (m,ks,not_found){
var sentinel__8662 = cljs.core.lookup_sentinel;
var m__8663 = m;
var ks__8664 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8664))
{var m__8665 = cljs.core.get.call(null,m__8663,cljs.core.first.call(null,ks__8664),sentinel__8662);

if(cljs.core.truth_((sentinel__8662 === m__8665)))
{return not_found;
} else
{{
var G__8669 = sentinel__8662;
var G__8670 = m__8665;
var G__8671 = cljs.core.next.call(null,ks__8664);
sentinel__8662 = G__8669;
m__8663 = G__8670;
ks__8664 = G__8671;
continue;
}
}
} else
{return m__8663;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8666.call(this,m,ks);
case  3 :
return get_in__8667.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8672,v){
var vec__8673__8674 = p__8672;
var k__8675 = cljs.core.nth.call(null,vec__8673__8674,0,null);
var ks__8676 = cljs.core.nthnext.call(null,vec__8673__8674,1);

if(cljs.core.truth_(ks__8676))
{return cljs.core.assoc.call(null,m,k__8675,assoc_in.call(null,cljs.core.get.call(null,m,k__8675),ks__8676,v));
} else
{return cljs.core.assoc.call(null,m,k__8675,v);
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
var update_in__delegate = function (m,p__8677,f,args){
var vec__8678__8679 = p__8677;
var k__8680 = cljs.core.nth.call(null,vec__8678__8679,0,null);
var ks__8681 = cljs.core.nthnext.call(null,vec__8678__8679,1);

if(cljs.core.truth_(ks__8681))
{return cljs.core.assoc.call(null,m,k__8680,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8680),ks__8681,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8680,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8680),args));
}
};
var update_in = function (m,p__8677,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8677, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8682){
var m = cljs.core.first(arglist__8682);
var p__8677 = cljs.core.first(cljs.core.next(arglist__8682));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8682)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8682)));
return update_in__delegate.call(this, m, p__8677, f, args);
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
var this__8683 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8716 = null;
var G__8716__8717 = (function (coll,k){
var this__8684 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8716__8718 = (function (coll,k,not_found){
var this__8685 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8716 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8716__8717.call(this,coll,k);
case  3 :
return G__8716__8718.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8716;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8686 = this;
var new_array__8687 = cljs.core.aclone.call(null,this__8686.array);

(new_array__8687[k] = v);
return (new cljs.core.Vector(this__8686.meta,new_array__8687));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8720 = null;
var G__8720__8721 = (function (tsym8688,k){
var this__8690 = this;
var tsym8688__8691 = this;

var coll__8692 = tsym8688__8691;

return cljs.core._lookup.call(null,coll__8692,k);
});
var G__8720__8722 = (function (tsym8689,k,not_found){
var this__8693 = this;
var tsym8689__8694 = this;

var coll__8695 = tsym8689__8694;

return cljs.core._lookup.call(null,coll__8695,k,not_found);
});
G__8720 = function(tsym8689,k,not_found){
switch(arguments.length){
case  2 :
return G__8720__8721.call(this,tsym8689,k);
case  3 :
return G__8720__8722.call(this,tsym8689,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8720;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8696 = this;
var new_array__8697 = cljs.core.aclone.call(null,this__8696.array);

new_array__8697.push(o);
return (new cljs.core.Vector(this__8696.meta,new_array__8697));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8724 = null;
var G__8724__8725 = (function (v,f){
var this__8698 = this;
return cljs.core.ci_reduce.call(null,this__8698.array,f);
});
var G__8724__8726 = (function (v,f,start){
var this__8699 = this;
return cljs.core.ci_reduce.call(null,this__8699.array,f,start);
});
G__8724 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8724__8725.call(this,v,f);
case  3 :
return G__8724__8726.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8724;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8700 = this;
if(cljs.core.truth_((this__8700.array.length > 0)))
{var vector_seq__8701 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8700.array.length)))
{return cljs.core.cons.call(null,(this__8700.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8701.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8702 = this;
return this__8702.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8703 = this;
var count__8704 = this__8703.array.length;

if(cljs.core.truth_((count__8704 > 0)))
{return (this__8703.array[(count__8704 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8705 = this;
if(cljs.core.truth_((this__8705.array.length > 0)))
{var new_array__8706 = cljs.core.aclone.call(null,this__8705.array);

new_array__8706.pop();
return (new cljs.core.Vector(this__8705.meta,new_array__8706));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8707 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8708 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8709 = this;
return (new cljs.core.Vector(meta,this__8709.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8710 = this;
return this__8710.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8728 = null;
var G__8728__8729 = (function (coll,n){
var this__8711 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8712 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8712))
{return (n < this__8711.array.length);
} else
{return and__3546__auto____8712;
}
})()))
{return (this__8711.array[n]);
} else
{return null;
}
});
var G__8728__8730 = (function (coll,n,not_found){
var this__8713 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8714 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8714))
{return (n < this__8713.array.length);
} else
{return and__3546__auto____8714;
}
})()))
{return (this__8713.array[n]);
} else
{return not_found;
}
});
G__8728 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8728__8729.call(this,coll,n);
case  3 :
return G__8728__8730.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8728;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8715 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8715.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8732 = pv.cnt;

if(cljs.core.truth_((cnt__8732 < 32)))
{return 0;
} else
{return (((cnt__8732 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8733 = level;
var ret__8734 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8733)))
{return ret__8734;
} else
{var embed__8735 = ret__8734;
var r__8736 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8737 = (r__8736[0] = embed__8735);

{
var G__8738 = (ll__8733 - 5);
var G__8739 = r__8736;
ll__8733 = G__8738;
ret__8734 = G__8739;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8740 = cljs.core.aclone.call(null,parent);
var subidx__8741 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8740[subidx__8741] = tailnode);
return ret__8740;
} else
{var temp__3695__auto____8742 = (parent[subidx__8741]);

if(cljs.core.truth_(temp__3695__auto____8742))
{var child__8743 = temp__3695__auto____8742;

var node_to_insert__8744 = push_tail.call(null,pv,(level - 5),child__8743,tailnode);
var ___8745 = (ret__8740[subidx__8741] = node_to_insert__8744);

return ret__8740;
} else
{var node_to_insert__8746 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8747 = (ret__8740[subidx__8741] = node_to_insert__8746);

return ret__8740;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8748 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8748))
{return (i < pv.cnt);
} else
{return and__3546__auto____8748;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8749 = pv.root;
var level__8750 = pv.shift;

while(true){
if(cljs.core.truth_((level__8750 > 0)))
{{
var G__8751 = (node__8749[((i >> level__8750) & 31)]);
var G__8752 = (level__8750 - 5);
node__8749 = G__8751;
level__8750 = G__8752;
continue;
}
} else
{return node__8749;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8753 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8753[(i & 31)] = val);
return ret__8753;
} else
{var subidx__8754 = ((i >> level) & 31);
var ___8755 = (ret__8753[subidx__8754] = do_assoc.call(null,pv,(level - 5),(node[subidx__8754]),i,val));

return ret__8753;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8756 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8757 = pop_tail.call(null,pv,(level - 5),(node[subidx__8756]));

if(cljs.core.truth_((function (){var and__3546__auto____8758 = (new_child__8757 === null);

if(cljs.core.truth_(and__3546__auto____8758))
{return (subidx__8756 === 0);
} else
{return and__3546__auto____8758;
}
})()))
{return null;
} else
{var ret__8759 = cljs.core.aclone.call(null,node);
var ___8760 = (ret__8759[subidx__8756] = new_child__8757);

return ret__8759;
}
} else
{if(cljs.core.truth_((subidx__8756 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8761 = cljs.core.aclone.call(null,node);
var ___8762 = (ret__8761[subidx__8756] = null);

return ret__8761;
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
var this__8763 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8803 = null;
var G__8803__8804 = (function (coll,k){
var this__8764 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8803__8805 = (function (coll,k,not_found){
var this__8765 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8803 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8803__8804.call(this,coll,k);
case  3 :
return G__8803__8805.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8803;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8766 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8767 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8767))
{return (k < this__8766.cnt);
} else
{return and__3546__auto____8767;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8768 = cljs.core.aclone.call(null,this__8766.tail);

(new_tail__8768[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8766.meta,this__8766.cnt,this__8766.shift,this__8766.root,new_tail__8768));
} else
{return (new cljs.core.PersistentVector(this__8766.meta,this__8766.cnt,this__8766.shift,cljs.core.do_assoc.call(null,coll,this__8766.shift,this__8766.root,k,v),this__8766.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8766.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8766.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8807 = null;
var G__8807__8808 = (function (tsym8769,k){
var this__8771 = this;
var tsym8769__8772 = this;

var coll__8773 = tsym8769__8772;

return cljs.core._lookup.call(null,coll__8773,k);
});
var G__8807__8809 = (function (tsym8770,k,not_found){
var this__8774 = this;
var tsym8770__8775 = this;

var coll__8776 = tsym8770__8775;

return cljs.core._lookup.call(null,coll__8776,k,not_found);
});
G__8807 = function(tsym8770,k,not_found){
switch(arguments.length){
case  2 :
return G__8807__8808.call(this,tsym8770,k);
case  3 :
return G__8807__8809.call(this,tsym8770,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8807;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8777 = this;
if(cljs.core.truth_(((this__8777.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8778 = cljs.core.aclone.call(null,this__8777.tail);

new_tail__8778.push(o);
return (new cljs.core.PersistentVector(this__8777.meta,(this__8777.cnt + 1),this__8777.shift,this__8777.root,new_tail__8778));
} else
{var root_overflow_QMARK___8779 = ((this__8777.cnt >> 5) > (1 << this__8777.shift));
var new_shift__8780 = (cljs.core.truth_(root_overflow_QMARK___8779)?(this__8777.shift + 5):this__8777.shift);
var new_root__8782 = (cljs.core.truth_(root_overflow_QMARK___8779)?(function (){var n_r__8781 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8781[0] = this__8777.root);
(n_r__8781[1] = cljs.core.new_path.call(null,this__8777.shift,this__8777.tail));
return n_r__8781;
})():cljs.core.push_tail.call(null,coll,this__8777.shift,this__8777.root,this__8777.tail));

return (new cljs.core.PersistentVector(this__8777.meta,(this__8777.cnt + 1),new_shift__8780,new_root__8782,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8811 = null;
var G__8811__8812 = (function (v,f){
var this__8783 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8811__8813 = (function (v,f,start){
var this__8784 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8811 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8811__8812.call(this,v,f);
case  3 :
return G__8811__8813.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8811;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8785 = this;
if(cljs.core.truth_((this__8785.cnt > 0)))
{var vector_seq__8786 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8785.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8786.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8787 = this;
return this__8787.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8788 = this;
if(cljs.core.truth_((this__8788.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8788.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8789 = this;
if(cljs.core.truth_((this__8789.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8789.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8789.meta);
} else
{if(cljs.core.truth_((1 < (this__8789.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8789.meta,(this__8789.cnt - 1),this__8789.shift,this__8789.root,cljs.core.aclone.call(null,this__8789.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8790 = cljs.core.array_for.call(null,coll,(this__8789.cnt - 2));
var nr__8791 = cljs.core.pop_tail.call(null,this__8789.shift,this__8789.root);
var new_root__8792 = (cljs.core.truth_((nr__8791 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8791);
var cnt_1__8793 = (this__8789.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8794 = (5 < this__8789.shift);

if(cljs.core.truth_(and__3546__auto____8794))
{return ((new_root__8792[1]) === null);
} else
{return and__3546__auto____8794;
}
})()))
{return (new cljs.core.PersistentVector(this__8789.meta,cnt_1__8793,(this__8789.shift - 5),(new_root__8792[0]),new_tail__8790));
} else
{return (new cljs.core.PersistentVector(this__8789.meta,cnt_1__8793,this__8789.shift,new_root__8792,new_tail__8790));
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
var this__8795 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8797 = this;
return (new cljs.core.PersistentVector(meta,this__8797.cnt,this__8797.shift,this__8797.root,this__8797.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8798 = this;
return this__8798.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8815 = null;
var G__8815__8816 = (function (coll,n){
var this__8799 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8815__8817 = (function (coll,n,not_found){
var this__8800 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8801 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8801))
{return (n < this__8800.cnt);
} else
{return and__3546__auto____8801;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8815 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8815__8816.call(this,coll,n);
case  3 :
return G__8815__8817.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8815;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8802 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8802.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8819){
var args = cljs.core.seq( arglist__8819 );;
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
var this__8820 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8848 = null;
var G__8848__8849 = (function (coll,k){
var this__8821 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8848__8850 = (function (coll,k,not_found){
var this__8822 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8848 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8848__8849.call(this,coll,k);
case  3 :
return G__8848__8850.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8848;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8823 = this;
var v_pos__8824 = (this__8823.start + key);

return (new cljs.core.Subvec(this__8823.meta,cljs.core._assoc.call(null,this__8823.v,v_pos__8824,val),this__8823.start,((this__8823.end > (v_pos__8824 + 1)) ? this__8823.end : (v_pos__8824 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8852 = null;
var G__8852__8853 = (function (tsym8825,k){
var this__8827 = this;
var tsym8825__8828 = this;

var coll__8829 = tsym8825__8828;

return cljs.core._lookup.call(null,coll__8829,k);
});
var G__8852__8854 = (function (tsym8826,k,not_found){
var this__8830 = this;
var tsym8826__8831 = this;

var coll__8832 = tsym8826__8831;

return cljs.core._lookup.call(null,coll__8832,k,not_found);
});
G__8852 = function(tsym8826,k,not_found){
switch(arguments.length){
case  2 :
return G__8852__8853.call(this,tsym8826,k);
case  3 :
return G__8852__8854.call(this,tsym8826,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8852;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8833 = this;
return (new cljs.core.Subvec(this__8833.meta,cljs.core._assoc_n.call(null,this__8833.v,this__8833.end,o),this__8833.start,(this__8833.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8856 = null;
var G__8856__8857 = (function (coll,f){
var this__8834 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8856__8858 = (function (coll,f,start){
var this__8835 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8856 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8856__8857.call(this,coll,f);
case  3 :
return G__8856__8858.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8856;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8836 = this;
var subvec_seq__8837 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8836.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8836.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8837.call(null,this__8836.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8838 = this;
return (this__8838.end - this__8838.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8839 = this;
return cljs.core._nth.call(null,this__8839.v,(this__8839.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8840 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8840.start,this__8840.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8840.meta,this__8840.v,this__8840.start,(this__8840.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8841 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8842 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8843 = this;
return (new cljs.core.Subvec(meta,this__8843.v,this__8843.start,this__8843.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8844 = this;
return this__8844.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8860 = null;
var G__8860__8861 = (function (coll,n){
var this__8845 = this;
return cljs.core._nth.call(null,this__8845.v,(this__8845.start + n));
});
var G__8860__8862 = (function (coll,n,not_found){
var this__8846 = this;
return cljs.core._nth.call(null,this__8846.v,(this__8846.start + n),not_found);
});
G__8860 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8860__8861.call(this,coll,n);
case  3 :
return G__8860__8862.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8860;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8847 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8847.meta);
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
var subvec__8864 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8865 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8864.call(this,v,start);
case  3 :
return subvec__8865.call(this,v,start,end);
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
var this__8867 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8869 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8870 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8870.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8871 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8872 = this;
return cljs.core._first.call(null,this__8872.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8873 = this;
var temp__3695__auto____8874 = cljs.core.next.call(null,this__8873.front);

if(cljs.core.truth_(temp__3695__auto____8874))
{var f1__8875 = temp__3695__auto____8874;

return (new cljs.core.PersistentQueueSeq(this__8873.meta,f1__8875,this__8873.rear));
} else
{if(cljs.core.truth_((this__8873.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8873.meta,this__8873.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8876 = this;
return this__8876.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8877 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8877.front,this__8877.rear));
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
var this__8878 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8879 = this;
if(cljs.core.truth_(this__8879.front))
{return (new cljs.core.PersistentQueue(this__8879.meta,(this__8879.count + 1),this__8879.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8880 = this__8879.rear;

if(cljs.core.truth_(or__3548__auto____8880))
{return or__3548__auto____8880;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8879.meta,(this__8879.count + 1),cljs.core.conj.call(null,this__8879.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8881 = this;
var rear__8882 = cljs.core.seq.call(null,this__8881.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8883 = this__8881.front;

if(cljs.core.truth_(or__3548__auto____8883))
{return or__3548__auto____8883;
} else
{return rear__8882;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8881.front,cljs.core.seq.call(null,rear__8882)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8884 = this;
return this__8884.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8885 = this;
return cljs.core._first.call(null,this__8885.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8886 = this;
if(cljs.core.truth_(this__8886.front))
{var temp__3695__auto____8887 = cljs.core.next.call(null,this__8886.front);

if(cljs.core.truth_(temp__3695__auto____8887))
{var f1__8888 = temp__3695__auto____8887;

return (new cljs.core.PersistentQueue(this__8886.meta,(this__8886.count - 1),f1__8888,this__8886.rear));
} else
{return (new cljs.core.PersistentQueue(this__8886.meta,(this__8886.count - 1),cljs.core.seq.call(null,this__8886.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8889 = this;
return cljs.core.first.call(null,this__8889.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8890 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8891 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8892 = this;
return (new cljs.core.PersistentQueue(meta,this__8892.count,this__8892.front,this__8892.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8893 = this;
return this__8893.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8894 = this;
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
var this__8895 = this;
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
var len__8896 = array.length;

var i__8897 = 0;

while(true){
if(cljs.core.truth_((i__8897 < len__8896)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8897]))))
{return i__8897;
} else
{{
var G__8898 = (i__8897 + incr);
i__8897 = G__8898;
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
var obj_map_contains_key_QMARK___8900 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8901 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8899 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8899))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8899;
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
return obj_map_contains_key_QMARK___8900.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8901.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8904 = cljs.core.hash.call(null,a);
var b__8905 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8904 < b__8905)))
{return -1;
} else
{if(cljs.core.truth_((a__8904 > b__8905)))
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
var this__8906 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8933 = null;
var G__8933__8934 = (function (coll,k){
var this__8907 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8933__8935 = (function (coll,k,not_found){
var this__8908 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8908.strobj,(this__8908.strobj[k]),not_found);
});
G__8933 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8933__8934.call(this,coll,k);
case  3 :
return G__8933__8935.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8933;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8909 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8910 = goog.object.clone.call(null,this__8909.strobj);
var overwrite_QMARK___8911 = new_strobj__8910.hasOwnProperty(k);

(new_strobj__8910[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8911))
{return (new cljs.core.ObjMap(this__8909.meta,this__8909.keys,new_strobj__8910));
} else
{var new_keys__8912 = cljs.core.aclone.call(null,this__8909.keys);

new_keys__8912.push(k);
return (new cljs.core.ObjMap(this__8909.meta,new_keys__8912,new_strobj__8910));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8909.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8913 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8913.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8937 = null;
var G__8937__8938 = (function (tsym8914,k){
var this__8916 = this;
var tsym8914__8917 = this;

var coll__8918 = tsym8914__8917;

return cljs.core._lookup.call(null,coll__8918,k);
});
var G__8937__8939 = (function (tsym8915,k,not_found){
var this__8919 = this;
var tsym8915__8920 = this;

var coll__8921 = tsym8915__8920;

return cljs.core._lookup.call(null,coll__8921,k,not_found);
});
G__8937 = function(tsym8915,k,not_found){
switch(arguments.length){
case  2 :
return G__8937__8938.call(this,tsym8915,k);
case  3 :
return G__8937__8939.call(this,tsym8915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8937;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8922 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8923 = this;
if(cljs.core.truth_((this__8923.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8903_SHARP_){
return cljs.core.vector.call(null,p1__8903_SHARP_,(this__8923.strobj[p1__8903_SHARP_]));
}),this__8923.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8924 = this;
return this__8924.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8925 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8926 = this;
return (new cljs.core.ObjMap(meta,this__8926.keys,this__8926.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8927 = this;
return this__8927.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8928 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8928.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8929 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8930 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8930))
{return this__8929.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8930;
}
})()))
{var new_keys__8931 = cljs.core.aclone.call(null,this__8929.keys);
var new_strobj__8932 = goog.object.clone.call(null,this__8929.strobj);

new_keys__8931.splice(cljs.core.scan_array.call(null,1,k,new_keys__8931),1);
cljs.core.js_delete.call(null,new_strobj__8932,k);
return (new cljs.core.ObjMap(this__8929.meta,new_keys__8931,new_strobj__8932));
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
var this__8942 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8980 = null;
var G__8980__8981 = (function (coll,k){
var this__8943 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8980__8982 = (function (coll,k,not_found){
var this__8944 = this;
var bucket__8945 = (this__8944.hashobj[cljs.core.hash.call(null,k)]);
var i__8946 = (cljs.core.truth_(bucket__8945)?cljs.core.scan_array.call(null,2,k,bucket__8945):null);

if(cljs.core.truth_(i__8946))
{return (bucket__8945[(i__8946 + 1)]);
} else
{return not_found;
}
});
G__8980 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8980__8981.call(this,coll,k);
case  3 :
return G__8980__8982.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8980;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8947 = this;
var h__8948 = cljs.core.hash.call(null,k);
var bucket__8949 = (this__8947.hashobj[h__8948]);

if(cljs.core.truth_(bucket__8949))
{var new_bucket__8950 = cljs.core.aclone.call(null,bucket__8949);
var new_hashobj__8951 = goog.object.clone.call(null,this__8947.hashobj);

(new_hashobj__8951[h__8948] = new_bucket__8950);
var temp__3695__auto____8952 = cljs.core.scan_array.call(null,2,k,new_bucket__8950);

if(cljs.core.truth_(temp__3695__auto____8952))
{var i__8953 = temp__3695__auto____8952;

(new_bucket__8950[(i__8953 + 1)] = v);
return (new cljs.core.HashMap(this__8947.meta,this__8947.count,new_hashobj__8951));
} else
{new_bucket__8950.push(k,v);
return (new cljs.core.HashMap(this__8947.meta,(this__8947.count + 1),new_hashobj__8951));
}
} else
{var new_hashobj__8954 = goog.object.clone.call(null,this__8947.hashobj);

(new_hashobj__8954[h__8948] = [k,v]);
return (new cljs.core.HashMap(this__8947.meta,(this__8947.count + 1),new_hashobj__8954));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8955 = this;
var bucket__8956 = (this__8955.hashobj[cljs.core.hash.call(null,k)]);
var i__8957 = (cljs.core.truth_(bucket__8956)?cljs.core.scan_array.call(null,2,k,bucket__8956):null);

if(cljs.core.truth_(i__8957))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8984 = null;
var G__8984__8985 = (function (tsym8958,k){
var this__8960 = this;
var tsym8958__8961 = this;

var coll__8962 = tsym8958__8961;

return cljs.core._lookup.call(null,coll__8962,k);
});
var G__8984__8986 = (function (tsym8959,k,not_found){
var this__8963 = this;
var tsym8959__8964 = this;

var coll__8965 = tsym8959__8964;

return cljs.core._lookup.call(null,coll__8965,k,not_found);
});
G__8984 = function(tsym8959,k,not_found){
switch(arguments.length){
case  2 :
return G__8984__8985.call(this,tsym8959,k);
case  3 :
return G__8984__8986.call(this,tsym8959,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8984;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8966 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8967 = this;
if(cljs.core.truth_((this__8967.count > 0)))
{var hashes__8968 = cljs.core.js_keys.call(null,this__8967.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8941_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8967.hashobj[p1__8941_SHARP_])));
}),hashes__8968);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8969 = this;
return this__8969.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8970 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8971 = this;
return (new cljs.core.HashMap(meta,this__8971.count,this__8971.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8972 = this;
return this__8972.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8973 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8973.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8974 = this;
var h__8975 = cljs.core.hash.call(null,k);
var bucket__8976 = (this__8974.hashobj[h__8975]);
var i__8977 = (cljs.core.truth_(bucket__8976)?cljs.core.scan_array.call(null,2,k,bucket__8976):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8977)))
{return coll;
} else
{var new_hashobj__8978 = goog.object.clone.call(null,this__8974.hashobj);

if(cljs.core.truth_((3 > bucket__8976.length)))
{cljs.core.js_delete.call(null,new_hashobj__8978,h__8975);
} else
{var new_bucket__8979 = cljs.core.aclone.call(null,bucket__8976);

new_bucket__8979.splice(i__8977,2);
(new_hashobj__8978[h__8975] = new_bucket__8979);
}
return (new cljs.core.HashMap(this__8974.meta,(this__8974.count - 1),new_hashobj__8978));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8988 = ks.length;

var i__8989 = 0;
var out__8990 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8989 < len__8988)))
{{
var G__8991 = (i__8989 + 1);
var G__8992 = cljs.core.assoc.call(null,out__8990,(ks[i__8989]),(vs[i__8989]));
i__8989 = G__8991;
out__8990 = G__8992;
continue;
}
} else
{return out__8990;
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
var in$__8993 = cljs.core.seq.call(null,keyvals);
var out__8994 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8993))
{{
var G__8995 = cljs.core.nnext.call(null,in$__8993);
var G__8996 = cljs.core.assoc.call(null,out__8994,cljs.core.first.call(null,in$__8993),cljs.core.second.call(null,in$__8993));
in$__8993 = G__8995;
out__8994 = G__8996;
continue;
}
} else
{return out__8994;
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
hash_map.cljs$lang$applyTo = (function (arglist__8997){
var keyvals = cljs.core.seq( arglist__8997 );;
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
{return cljs.core.reduce.call(null,(function (p1__8998_SHARP_,p2__8999_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____9000 = p1__8998_SHARP_;

if(cljs.core.truth_(or__3548__auto____9000))
{return or__3548__auto____9000;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8999_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9001){
var maps = cljs.core.seq( arglist__9001 );;
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
{var merge_entry__9004 = (function (m,e){
var k__9002 = cljs.core.first.call(null,e);
var v__9003 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__9002)))
{return cljs.core.assoc.call(null,m,k__9002,f.call(null,cljs.core.get.call(null,m,k__9002),v__9003));
} else
{return cljs.core.assoc.call(null,m,k__9002,v__9003);
}
});
var merge2__9006 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9004,(function (){var or__3548__auto____9005 = m1;

if(cljs.core.truth_(or__3548__auto____9005))
{return or__3548__auto____9005;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__9006,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9007){
var f = cljs.core.first(arglist__9007);
var maps = cljs.core.rest(arglist__9007);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9009 = cljs.core.ObjMap.fromObject([],{});
var keys__9010 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__9010))
{var key__9011 = cljs.core.first.call(null,keys__9010);
var entry__9012 = cljs.core.get.call(null,map,key__9011,"\uFDD0'user/not-found");

{
var G__9013 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__9012,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9009,key__9011,entry__9012):ret__9009);
var G__9014 = cljs.core.next.call(null,keys__9010);
ret__9009 = G__9013;
keys__9010 = G__9014;
continue;
}
} else
{return ret__9009;
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
var this__9015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9036 = null;
var G__9036__9037 = (function (coll,v){
var this__9016 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__9036__9038 = (function (coll,v,not_found){
var this__9017 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9017.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__9036 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__9036__9037.call(this,coll,v);
case  3 :
return G__9036__9038.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9036;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__9040 = null;
var G__9040__9041 = (function (tsym9018,k){
var this__9020 = this;
var tsym9018__9021 = this;

var coll__9022 = tsym9018__9021;

return cljs.core._lookup.call(null,coll__9022,k);
});
var G__9040__9042 = (function (tsym9019,k,not_found){
var this__9023 = this;
var tsym9019__9024 = this;

var coll__9025 = tsym9019__9024;

return cljs.core._lookup.call(null,coll__9025,k,not_found);
});
G__9040 = function(tsym9019,k,not_found){
switch(arguments.length){
case  2 :
return G__9040__9041.call(this,tsym9019,k);
case  3 :
return G__9040__9042.call(this,tsym9019,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9040;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9026 = this;
return (new cljs.core.Set(this__9026.meta,cljs.core.assoc.call(null,this__9026.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9027 = this;
return cljs.core.keys.call(null,this__9027.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__9028 = this;
return (new cljs.core.Set(this__9028.meta,cljs.core.dissoc.call(null,this__9028.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9029 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9030 = this;
var and__3546__auto____9031 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____9031))
{var and__3546__auto____9032 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____9032))
{return cljs.core.every_QMARK_.call(null,(function (p1__9008_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9008_SHARP_);
}),other);
} else
{return and__3546__auto____9032;
}
} else
{return and__3546__auto____9031;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9033 = this;
return (new cljs.core.Set(meta,this__9033.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9034 = this;
return this__9034.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9035 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__9035.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9045 = cljs.core.seq.call(null,coll);
var out__9046 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__9045))))
{{
var G__9047 = cljs.core.rest.call(null,in$__9045);
var G__9048 = cljs.core.conj.call(null,out__9046,cljs.core.first.call(null,in$__9045));
in$__9045 = G__9047;
out__9046 = G__9048;
continue;
}
} else
{return out__9046;
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
{var n__9049 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____9050 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____9050))
{var e__9051 = temp__3695__auto____9050;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9051));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9049,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9044_SHARP_){
var temp__3695__auto____9052 = cljs.core.find.call(null,smap,p1__9044_SHARP_);

if(cljs.core.truth_(temp__3695__auto____9052))
{var e__9053 = temp__3695__auto____9052;

return cljs.core.second.call(null,e__9053);
} else
{return p1__9044_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9061 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9054,seen){
while(true){
var vec__9055__9056 = p__9054;
var f__9057 = cljs.core.nth.call(null,vec__9055__9056,0,null);
var xs__9058 = vec__9055__9056;

var temp__3698__auto____9059 = cljs.core.seq.call(null,xs__9058);

if(cljs.core.truth_(temp__3698__auto____9059))
{var s__9060 = temp__3698__auto____9059;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__9057)))
{{
var G__9062 = cljs.core.rest.call(null,s__9060);
var G__9063 = seen;
p__9054 = G__9062;
seen = G__9063;
continue;
}
} else
{return cljs.core.cons.call(null,f__9057,step.call(null,cljs.core.rest.call(null,s__9060),cljs.core.conj.call(null,seen,f__9057)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__9061.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9064 = cljs.core.PersistentVector.fromArray([]);
var s__9065 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9065)))
{{
var G__9066 = cljs.core.conj.call(null,ret__9064,cljs.core.first.call(null,s__9065));
var G__9067 = cljs.core.next.call(null,s__9065);
ret__9064 = G__9066;
s__9065 = G__9067;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9064);
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
{if(cljs.core.truth_((function (){var or__3548__auto____9068 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9068))
{return or__3548__auto____9068;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9069 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9069 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9069 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____9070 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9070))
{return or__3548__auto____9070;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9071 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9071 > -1)))
{return cljs.core.subs.call(null,x,2,i__9071);
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
var map__9074 = cljs.core.ObjMap.fromObject([],{});
var ks__9075 = cljs.core.seq.call(null,keys);
var vs__9076 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9077 = ks__9075;

if(cljs.core.truth_(and__3546__auto____9077))
{return vs__9076;
} else
{return and__3546__auto____9077;
}
})()))
{{
var G__9078 = cljs.core.assoc.call(null,map__9074,cljs.core.first.call(null,ks__9075),cljs.core.first.call(null,vs__9076));
var G__9079 = cljs.core.next.call(null,ks__9075);
var G__9080 = cljs.core.next.call(null,vs__9076);
map__9074 = G__9078;
ks__9075 = G__9079;
vs__9076 = G__9080;
continue;
}
} else
{return map__9074;
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
var max_key__9083 = (function (k,x){
return x;
});
var max_key__9084 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__9085 = (function() { 
var G__9087__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9072_SHARP_,p2__9073_SHARP_){
return max_key.call(null,k,p1__9072_SHARP_,p2__9073_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9087 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9087__delegate.call(this, k, x, y, more);
};
G__9087.cljs$lang$maxFixedArity = 3;
G__9087.cljs$lang$applyTo = (function (arglist__9088){
var k = cljs.core.first(arglist__9088);
var x = cljs.core.first(cljs.core.next(arglist__9088));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9088)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9088)));
return G__9087__delegate.call(this, k, x, y, more);
});
return G__9087;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__9083.call(this,k,x);
case  3 :
return max_key__9084.call(this,k,x,y);
default:
return max_key__9085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__9085.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__9089 = (function (k,x){
return x;
});
var min_key__9090 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__9091 = (function() { 
var G__9093__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9081_SHARP_,p2__9082_SHARP_){
return min_key.call(null,k,p1__9081_SHARP_,p2__9082_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9093 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9093__delegate.call(this, k, x, y, more);
};
G__9093.cljs$lang$maxFixedArity = 3;
G__9093.cljs$lang$applyTo = (function (arglist__9094){
var k = cljs.core.first(arglist__9094);
var x = cljs.core.first(cljs.core.next(arglist__9094));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9094)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9094)));
return G__9093__delegate.call(this, k, x, y, more);
});
return G__9093;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__9089.call(this,k,x);
case  3 :
return min_key__9090.call(this,k,x,y);
default:
return min_key__9091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__9091.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__9097 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__9098 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9095))
{var s__9096 = temp__3698__auto____9095;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9096),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9096)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__9097.call(this,n,step);
case  3 :
return partition_all__9098.call(this,n,step,coll);
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
var temp__3698__auto____9100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9100))
{var s__9101 = temp__3698__auto____9100;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9101))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9101),take_while.call(null,pred,cljs.core.rest.call(null,s__9101)));
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
var this__9102 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__9103 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9119 = null;
var G__9119__9120 = (function (rng,f){
var this__9104 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__9119__9121 = (function (rng,f,s){
var this__9105 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__9119 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__9119__9120.call(this,rng,f);
case  3 :
return G__9119__9121.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9119;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__9106 = this;
var comp__9107 = (cljs.core.truth_((this__9106.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__9107.call(null,this__9106.start,this__9106.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__9108 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__9108.end - this__9108.start) / this__9108.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__9109 = this;
return this__9109.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__9110 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9110.meta,(this__9110.start + this__9110.step),this__9110.end,this__9110.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__9111 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__9112 = this;
return (new cljs.core.Range(meta,this__9112.start,this__9112.end,this__9112.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__9113 = this;
return this__9113.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9123 = null;
var G__9123__9124 = (function (rng,n){
var this__9114 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9114.start + (n * this__9114.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9115 = (this__9114.start > this__9114.end);

if(cljs.core.truth_(and__3546__auto____9115))
{return cljs.core._EQ_.call(null,this__9114.step,0);
} else
{return and__3546__auto____9115;
}
})()))
{return this__9114.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9123__9125 = (function (rng,n,not_found){
var this__9116 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9116.start + (n * this__9116.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9117 = (this__9116.start > this__9116.end);

if(cljs.core.truth_(and__3546__auto____9117))
{return cljs.core._EQ_.call(null,this__9116.step,0);
} else
{return and__3546__auto____9117;
}
})()))
{return this__9116.start;
} else
{return not_found;
}
}
});
G__9123 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9123__9124.call(this,rng,n);
case  3 :
return G__9123__9125.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9123;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__9118 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9118.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9127 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9128 = (function (end){
return range.call(null,0,end,1);
});
var range__9129 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9130 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9127.call(this);
case  1 :
return range__9128.call(this,start);
case  2 :
return range__9129.call(this,start,end);
case  3 :
return range__9130.call(this,start,end,step);
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
var temp__3698__auto____9132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9132))
{var s__9133 = temp__3698__auto____9132;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9133),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9133)));
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
var temp__3698__auto____9135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9135))
{var s__9136 = temp__3698__auto____9135;

var fst__9137 = cljs.core.first.call(null,s__9136);
var fv__9138 = f.call(null,fst__9137);
var run__9139 = cljs.core.cons.call(null,fst__9137,cljs.core.take_while.call(null,(function (p1__9134_SHARP_){
return cljs.core._EQ_.call(null,fv__9138,f.call(null,p1__9134_SHARP_));
}),cljs.core.next.call(null,s__9136)));

return cljs.core.cons.call(null,run__9139,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9139),s__9136))));
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
var reductions__9154 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9150 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9150))
{var s__9151 = temp__3695__auto____9150;

return reductions.call(null,f,cljs.core.first.call(null,s__9151),cljs.core.rest.call(null,s__9151));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9155 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9152))
{var s__9153 = temp__3698__auto____9152;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9153)),cljs.core.rest.call(null,s__9153));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9154.call(this,f,init);
case  3 :
return reductions__9155.call(this,f,init,coll);
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
var juxt__9158 = (function (f){
return (function() {
var G__9163 = null;
var G__9163__9164 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9163__9165 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9163__9166 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9163__9167 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9163__9168 = (function() { 
var G__9170__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9170__delegate.call(this, x, y, z, args);
};
G__9170.cljs$lang$maxFixedArity = 3;
G__9170.cljs$lang$applyTo = (function (arglist__9171){
var x = cljs.core.first(arglist__9171);
var y = cljs.core.first(cljs.core.next(arglist__9171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9171)));
return G__9170__delegate.call(this, x, y, z, args);
});
return G__9170;
})()
;
G__9163 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9163__9164.call(this);
case  1 :
return G__9163__9165.call(this,x);
case  2 :
return G__9163__9166.call(this,x,y);
case  3 :
return G__9163__9167.call(this,x,y,z);
default:
return G__9163__9168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9163.cljs$lang$maxFixedArity = 3;
G__9163.cljs$lang$applyTo = G__9163__9168.cljs$lang$applyTo;
return G__9163;
})()
});
var juxt__9159 = (function (f,g){
return (function() {
var G__9172 = null;
var G__9172__9173 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9172__9174 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9172__9175 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9172__9176 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9172__9177 = (function() { 
var G__9179__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9179__delegate.call(this, x, y, z, args);
};
G__9179.cljs$lang$maxFixedArity = 3;
G__9179.cljs$lang$applyTo = (function (arglist__9180){
var x = cljs.core.first(arglist__9180);
var y = cljs.core.first(cljs.core.next(arglist__9180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9180)));
return G__9179__delegate.call(this, x, y, z, args);
});
return G__9179;
})()
;
G__9172 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9172__9173.call(this);
case  1 :
return G__9172__9174.call(this,x);
case  2 :
return G__9172__9175.call(this,x,y);
case  3 :
return G__9172__9176.call(this,x,y,z);
default:
return G__9172__9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9172.cljs$lang$maxFixedArity = 3;
G__9172.cljs$lang$applyTo = G__9172__9177.cljs$lang$applyTo;
return G__9172;
})()
});
var juxt__9160 = (function (f,g,h){
return (function() {
var G__9181 = null;
var G__9181__9182 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9181__9183 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9181__9184 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9181__9185 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9181__9186 = (function() { 
var G__9188__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9188 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9188__delegate.call(this, x, y, z, args);
};
G__9188.cljs$lang$maxFixedArity = 3;
G__9188.cljs$lang$applyTo = (function (arglist__9189){
var x = cljs.core.first(arglist__9189);
var y = cljs.core.first(cljs.core.next(arglist__9189));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9189)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9189)));
return G__9188__delegate.call(this, x, y, z, args);
});
return G__9188;
})()
;
G__9181 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9181__9182.call(this);
case  1 :
return G__9181__9183.call(this,x);
case  2 :
return G__9181__9184.call(this,x,y);
case  3 :
return G__9181__9185.call(this,x,y,z);
default:
return G__9181__9186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9181.cljs$lang$maxFixedArity = 3;
G__9181.cljs$lang$applyTo = G__9181__9186.cljs$lang$applyTo;
return G__9181;
})()
});
var juxt__9161 = (function() { 
var G__9190__delegate = function (f,g,h,fs){
var fs__9157 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9191 = null;
var G__9191__9192 = (function (){
return cljs.core.reduce.call(null,(function (p1__9140_SHARP_,p2__9141_SHARP_){
return cljs.core.conj.call(null,p1__9140_SHARP_,p2__9141_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9157);
});
var G__9191__9193 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9142_SHARP_,p2__9143_SHARP_){
return cljs.core.conj.call(null,p1__9142_SHARP_,p2__9143_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9157);
});
var G__9191__9194 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9144_SHARP_,p2__9145_SHARP_){
return cljs.core.conj.call(null,p1__9144_SHARP_,p2__9145_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9157);
});
var G__9191__9195 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9146_SHARP_,p2__9147_SHARP_){
return cljs.core.conj.call(null,p1__9146_SHARP_,p2__9147_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9157);
});
var G__9191__9196 = (function() { 
var G__9198__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9148_SHARP_,p2__9149_SHARP_){
return cljs.core.conj.call(null,p1__9148_SHARP_,cljs.core.apply.call(null,p2__9149_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9157);
};
var G__9198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9198__delegate.call(this, x, y, z, args);
};
G__9198.cljs$lang$maxFixedArity = 3;
G__9198.cljs$lang$applyTo = (function (arglist__9199){
var x = cljs.core.first(arglist__9199);
var y = cljs.core.first(cljs.core.next(arglist__9199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9199)));
return G__9198__delegate.call(this, x, y, z, args);
});
return G__9198;
})()
;
G__9191 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9191__9192.call(this);
case  1 :
return G__9191__9193.call(this,x);
case  2 :
return G__9191__9194.call(this,x,y);
case  3 :
return G__9191__9195.call(this,x,y,z);
default:
return G__9191__9196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9191.cljs$lang$maxFixedArity = 3;
G__9191.cljs$lang$applyTo = G__9191__9196.cljs$lang$applyTo;
return G__9191;
})()
};
var G__9190 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9190__delegate.call(this, f, g, h, fs);
};
G__9190.cljs$lang$maxFixedArity = 3;
G__9190.cljs$lang$applyTo = (function (arglist__9200){
var f = cljs.core.first(arglist__9200);
var g = cljs.core.first(cljs.core.next(arglist__9200));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9200)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9200)));
return G__9190__delegate.call(this, f, g, h, fs);
});
return G__9190;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9158.call(this,f);
case  2 :
return juxt__9159.call(this,f,g);
case  3 :
return juxt__9160.call(this,f,g,h);
default:
return juxt__9161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9161.cljs$lang$applyTo;
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
var dorun__9202 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9205 = cljs.core.next.call(null,coll);
coll = G__9205;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9203 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9201 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9201))
{return (n > 0);
} else
{return and__3546__auto____9201;
}
})()))
{{
var G__9206 = (n - 1);
var G__9207 = cljs.core.next.call(null,coll);
n = G__9206;
coll = G__9207;
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
return dorun__9202.call(this,n);
case  2 :
return dorun__9203.call(this,n,coll);
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
var doall__9208 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9209 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9208.call(this,n);
case  2 :
return doall__9209.call(this,n,coll);
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
var matches__9211 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9211),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9211),1)))
{return cljs.core.first.call(null,matches__9211);
} else
{return cljs.core.vec.call(null,matches__9211);
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
var matches__9212 = re.exec(s);

if(cljs.core.truth_((matches__9212 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9212),1)))
{return cljs.core.first.call(null,matches__9212);
} else
{return cljs.core.vec.call(null,matches__9212);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9213 = cljs.core.re_find.call(null,re,s);
var match_idx__9214 = s.search(re);
var match_str__9215 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9213))?cljs.core.first.call(null,match_data__9213):match_data__9213);
var post_match__9216 = cljs.core.subs.call(null,s,(match_idx__9214 + cljs.core.count.call(null,match_str__9215)));

if(cljs.core.truth_(match_data__9213))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9213,re_seq.call(null,re,post_match__9216));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9218__9219 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9220 = cljs.core.nth.call(null,vec__9218__9219,0,null);
var flags__9221 = cljs.core.nth.call(null,vec__9218__9219,1,null);
var pattern__9222 = cljs.core.nth.call(null,vec__9218__9219,2,null);

return (new RegExp(pattern__9222,flags__9221));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9217_SHARP_){
return print_one.call(null,p1__9217_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9223 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____9223))
{var and__3546__auto____9227 = (function (){var x__3028__auto____9224 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9225 = x__3028__auto____9224;

if(cljs.core.truth_(and__3546__auto____9225))
{var and__3546__auto____9226 = x__3028__auto____9224.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____9226))
{return cljs.core.not.call(null,x__3028__auto____9224.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____9226;
}
} else
{return and__3546__auto____9225;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____9224);
}
})();

if(cljs.core.truth_(and__3546__auto____9227))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9227;
}
} else
{return and__3546__auto____9223;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____9228 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9229 = x__3028__auto____9228;

if(cljs.core.truth_(and__3546__auto____9229))
{var and__3546__auto____9230 = x__3028__auto____9228.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____9230))
{return cljs.core.not.call(null,x__3028__auto____9228.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____9230;
}
} else
{return and__3546__auto____9229;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____9228);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9231 = cljs.core.first.call(null,objs);
var sb__9232 = (new goog.string.StringBuffer());

var G__9233__9234 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9233__9234))
{var obj__9235 = cljs.core.first.call(null,G__9233__9234);
var G__9233__9236 = G__9233__9234;

while(true){
if(cljs.core.truth_((obj__9235 === first_obj__9231)))
{} else
{sb__9232.append(" ");
}
var G__9237__9238 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9235,opts));

if(cljs.core.truth_(G__9237__9238))
{var string__9239 = cljs.core.first.call(null,G__9237__9238);
var G__9237__9240 = G__9237__9238;

while(true){
sb__9232.append(string__9239);
var temp__3698__auto____9241 = cljs.core.next.call(null,G__9237__9240);

if(cljs.core.truth_(temp__3698__auto____9241))
{var G__9237__9242 = temp__3698__auto____9241;

{
var G__9245 = cljs.core.first.call(null,G__9237__9242);
var G__9246 = G__9237__9242;
string__9239 = G__9245;
G__9237__9240 = G__9246;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9243 = cljs.core.next.call(null,G__9233__9236);

if(cljs.core.truth_(temp__3698__auto____9243))
{var G__9233__9244 = temp__3698__auto____9243;

{
var G__9247 = cljs.core.first.call(null,G__9233__9244);
var G__9248 = G__9233__9244;
obj__9235 = G__9247;
G__9233__9236 = G__9248;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9232;
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
var sb__9249 = cljs.core.pr_sb.call(null,objs,opts);

sb__9249.append("\n");
return cljs.core.str.call(null,sb__9249);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9250 = cljs.core.first.call(null,objs);

var G__9251__9252 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9251__9252))
{var obj__9253 = cljs.core.first.call(null,G__9251__9252);
var G__9251__9254 = G__9251__9252;

while(true){
if(cljs.core.truth_((obj__9253 === first_obj__9250)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9255__9256 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9253,opts));

if(cljs.core.truth_(G__9255__9256))
{var string__9257 = cljs.core.first.call(null,G__9255__9256);
var G__9255__9258 = G__9255__9256;

while(true){
cljs.core.string_print.call(null,string__9257);
var temp__3698__auto____9259 = cljs.core.next.call(null,G__9255__9258);

if(cljs.core.truth_(temp__3698__auto____9259))
{var G__9255__9260 = temp__3698__auto____9259;

{
var G__9263 = cljs.core.first.call(null,G__9255__9260);
var G__9264 = G__9255__9260;
string__9257 = G__9263;
G__9255__9258 = G__9264;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9261 = cljs.core.next.call(null,G__9251__9254);

if(cljs.core.truth_(temp__3698__auto____9261))
{var G__9251__9262 = temp__3698__auto____9261;

{
var G__9265 = cljs.core.first.call(null,G__9251__9262);
var G__9266 = G__9251__9262;
obj__9253 = G__9265;
G__9251__9254 = G__9266;
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
pr_str.cljs$lang$applyTo = (function (arglist__9267){
var objs = cljs.core.seq( arglist__9267 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__9268){
var objs = cljs.core.seq( arglist__9268 );;
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
pr.cljs$lang$applyTo = (function (arglist__9269){
var objs = cljs.core.seq( arglist__9269 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9270){
var objs = cljs.core.seq( arglist__9270 );;
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
print_str.cljs$lang$applyTo = (function (arglist__9271){
var objs = cljs.core.seq( arglist__9271 );;
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
println.cljs$lang$applyTo = (function (arglist__9272){
var objs = cljs.core.seq( arglist__9272 );;
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
println_str.cljs$lang$applyTo = (function (arglist__9273){
var objs = cljs.core.seq( arglist__9273 );;
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
prn.cljs$lang$applyTo = (function (arglist__9274){
var objs = cljs.core.seq( arglist__9274 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9275 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9275,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9276 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9276))
{var nspc__9277 = temp__3698__auto____9276;

return cljs.core.str.call(null,nspc__9277,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9278 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9278))
{var nspc__9279 = temp__3698__auto____9278;

return cljs.core.str.call(null,nspc__9279,"/");
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
var pr_pair__9280 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9280,"{",", ","}",opts,coll);
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
var this__9281 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9282 = this;
var G__9283__9284 = cljs.core.seq.call(null,this__9282.watches);

if(cljs.core.truth_(G__9283__9284))
{var G__9286__9288 = cljs.core.first.call(null,G__9283__9284);
var vec__9287__9289 = G__9286__9288;
var key__9290 = cljs.core.nth.call(null,vec__9287__9289,0,null);
var f__9291 = cljs.core.nth.call(null,vec__9287__9289,1,null);
var G__9283__9292 = G__9283__9284;

var G__9286__9293 = G__9286__9288;
var G__9283__9294 = G__9283__9292;

while(true){
var vec__9295__9296 = G__9286__9293;
var key__9297 = cljs.core.nth.call(null,vec__9295__9296,0,null);
var f__9298 = cljs.core.nth.call(null,vec__9295__9296,1,null);
var G__9283__9299 = G__9283__9294;

f__9298.call(null,key__9297,this$,oldval,newval);
var temp__3698__auto____9300 = cljs.core.next.call(null,G__9283__9299);

if(cljs.core.truth_(temp__3698__auto____9300))
{var G__9283__9301 = temp__3698__auto____9300;

{
var G__9308 = cljs.core.first.call(null,G__9283__9301);
var G__9309 = G__9283__9301;
G__9286__9293 = G__9308;
G__9283__9294 = G__9309;
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
var this__9302 = this;
return this$.watches = cljs.core.assoc.call(null,this__9302.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9303 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9303.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9304 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9304.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9305 = this;
return this__9305.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9306 = this;
return this__9306.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9307 = this;
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
var atom__9316 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9317 = (function() { 
var G__9319__delegate = function (x,p__9310){
var map__9311__9312 = p__9310;
var map__9311__9313 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9311__9312))?cljs.core.apply.call(null,cljs.core.hash_map,map__9311__9312):map__9311__9312);
var validator__9314 = cljs.core.get.call(null,map__9311__9313,"\uFDD0'validator");
var meta__9315 = cljs.core.get.call(null,map__9311__9313,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9315,validator__9314,null));
};
var G__9319 = function (x,var_args){
var p__9310 = null;
if (goog.isDef(var_args)) {
  p__9310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9319__delegate.call(this, x, p__9310);
};
G__9319.cljs$lang$maxFixedArity = 1;
G__9319.cljs$lang$applyTo = (function (arglist__9320){
var x = cljs.core.first(arglist__9320);
var p__9310 = cljs.core.rest(arglist__9320);
return G__9319__delegate.call(this, x, p__9310);
});
return G__9319;
})()
;
atom = function(x,var_args){
var p__9310 = var_args;
switch(arguments.length){
case  1 :
return atom__9316.call(this,x);
default:
return atom__9317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9317.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9321 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9321))
{var validate__9322 = temp__3698__auto____9321;

if(cljs.core.truth_(validate__9322.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9323 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9323,new_value);
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
var swap_BANG___9324 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9325 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9326 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9327 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9328 = (function() { 
var G__9330__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9330 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9330__delegate.call(this, a, f, x, y, z, more);
};
G__9330.cljs$lang$maxFixedArity = 5;
G__9330.cljs$lang$applyTo = (function (arglist__9331){
var a = cljs.core.first(arglist__9331);
var f = cljs.core.first(cljs.core.next(arglist__9331));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9331)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9331))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9331)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9331)))));
return G__9330__delegate.call(this, a, f, x, y, z, more);
});
return G__9330;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9324.call(this,a,f);
case  3 :
return swap_BANG___9325.call(this,a,f,x);
case  4 :
return swap_BANG___9326.call(this,a,f,x,y);
case  5 :
return swap_BANG___9327.call(this,a,f,x,y,z);
default:
return swap_BANG___9328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9328.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9332){
var iref = cljs.core.first(arglist__9332);
var f = cljs.core.first(cljs.core.next(arglist__9332));
var args = cljs.core.rest(cljs.core.next(arglist__9332));
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
var gensym__9333 = (function (){
return gensym.call(null,"G__");
});
var gensym__9334 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9333.call(this);
case  1 :
return gensym__9334.call(this,prefix_string);
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
var this__9336 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9336.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9337 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9337.state,(function (p__9338){
var curr_state__9339 = p__9338;
var curr_state__9340 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9339))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9339):curr_state__9339);
var done__9341 = cljs.core.get.call(null,curr_state__9340,"\uFDD0'done");

if(cljs.core.truth_(done__9341))
{return curr_state__9340;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9337.f.call(null)});
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
var map__9342__9343 = options;
var map__9342__9344 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9342__9343))?cljs.core.apply.call(null,cljs.core.hash_map,map__9342__9343):map__9342__9343);
var keywordize_keys__9345 = cljs.core.get.call(null,map__9342__9344,"\uFDD0'keywordize-keys");
var keyfn__9346 = (cljs.core.truth_(keywordize_keys__9345)?cljs.core.keyword:cljs.core.str);
var f__9352 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____9351 = (function iter__9347(s__9348){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9348__9349 = s__9348;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9348__9349)))
{var k__9350 = cljs.core.first.call(null,s__9348__9349);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9346.call(null,k__9350),thisfn.call(null,(x[k__9350]))]),iter__9347.call(null,cljs.core.rest.call(null,s__9348__9349)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____9351.call(null,cljs.core.js_keys.call(null,x));
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

return f__9352.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9353){
var x = cljs.core.first(arglist__9353);
var options = cljs.core.rest(arglist__9353);
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
var mem__9354 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9358__delegate = function (args){
var temp__3695__auto____9355 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9354),args);

if(cljs.core.truth_(temp__3695__auto____9355))
{var v__9356 = temp__3695__auto____9355;

return v__9356;
} else
{var ret__9357 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9354,cljs.core.assoc,args,ret__9357);
return ret__9357;
}
};
var G__9358 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9358__delegate.call(this, args);
};
G__9358.cljs$lang$maxFixedArity = 0;
G__9358.cljs$lang$applyTo = (function (arglist__9359){
var args = cljs.core.seq( arglist__9359 );;
return G__9358__delegate.call(this, args);
});
return G__9358;
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
var trampoline__9361 = (function (f){
while(true){
var ret__9360 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9360)))
{{
var G__9364 = ret__9360;
f = G__9364;
continue;
}
} else
{return ret__9360;
}
break;
}
});
var trampoline__9362 = (function() { 
var G__9365__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9365 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9365__delegate.call(this, f, args);
};
G__9365.cljs$lang$maxFixedArity = 1;
G__9365.cljs$lang$applyTo = (function (arglist__9366){
var f = cljs.core.first(arglist__9366);
var args = cljs.core.rest(arglist__9366);
return G__9365__delegate.call(this, f, args);
});
return G__9365;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9361.call(this,f);
default:
return trampoline__9362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9362.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9367 = (function (){
return rand.call(null,1);
});
var rand__9368 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9367.call(this);
case  1 :
return rand__9368.call(this,n);
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
var k__9370 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9370,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9370,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___9379 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9380 = (function (h,child,parent){
var or__3548__auto____9371 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9371))
{return or__3548__auto____9371;
} else
{var or__3548__auto____9372 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9372))
{return or__3548__auto____9372;
} else
{var and__3546__auto____9373 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9373))
{var and__3546__auto____9374 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9374))
{var and__3546__auto____9375 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9375))
{var ret__9376 = true;
var i__9377 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9378 = cljs.core.not.call(null,ret__9376);

if(cljs.core.truth_(or__3548__auto____9378))
{return or__3548__auto____9378;
} else
{return cljs.core._EQ_.call(null,i__9377,cljs.core.count.call(null,parent));
}
})()))
{return ret__9376;
} else
{{
var G__9382 = isa_QMARK_.call(null,h,child.call(null,i__9377),parent.call(null,i__9377));
var G__9383 = (i__9377 + 1);
ret__9376 = G__9382;
i__9377 = G__9383;
continue;
}
}
break;
}
} else
{return and__3546__auto____9375;
}
} else
{return and__3546__auto____9374;
}
} else
{return and__3546__auto____9373;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9379.call(this,h,child);
case  3 :
return isa_QMARK___9380.call(this,h,child,parent);
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
var parents__9384 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9385 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9384.call(this,h);
case  2 :
return parents__9385.call(this,h,tag);
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
var ancestors__9387 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9388 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9387.call(this,h);
case  2 :
return ancestors__9388.call(this,h,tag);
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
var descendants__9390 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9391 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9390.call(this,h);
case  2 :
return descendants__9391.call(this,h,tag);
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
var derive__9401 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9402 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9396 = "\uFDD0'parents".call(null,h);
var td__9397 = "\uFDD0'descendants".call(null,h);
var ta__9398 = "\uFDD0'ancestors".call(null,h);
var tf__9399 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9400 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9396.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9398.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9398.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9396,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9399.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9397,parent,ta__9398),"\uFDD0'descendants":tf__9399.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9398,tag,td__9397)});
})());

if(cljs.core.truth_(or__3548__auto____9400))
{return or__3548__auto____9400;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9401.call(this,h,tag);
case  3 :
return derive__9402.call(this,h,tag,parent);
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
var underive__9408 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9409 = (function (h,tag,parent){
var parentMap__9404 = "\uFDD0'parents".call(null,h);
var childsParents__9405 = (cljs.core.truth_(parentMap__9404.call(null,tag))?cljs.core.disj.call(null,parentMap__9404.call(null,tag),parent):cljs.core.set([]));
var newParents__9406 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9405))?cljs.core.assoc.call(null,parentMap__9404,tag,childsParents__9405):cljs.core.dissoc.call(null,parentMap__9404,tag));
var deriv_seq__9407 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9393_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9393_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9393_SHARP_),cljs.core.second.call(null,p1__9393_SHARP_)));
}),cljs.core.seq.call(null,newParents__9406)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9404.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9394_SHARP_,p2__9395_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9394_SHARP_,p2__9395_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9407));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9408.call(this,h,tag);
case  3 :
return underive__9409.call(this,h,tag,parent);
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
var xprefs__9411 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9413 = (cljs.core.truth_((function (){var and__3546__auto____9412 = xprefs__9411;

if(cljs.core.truth_(and__3546__auto____9412))
{return xprefs__9411.call(null,y);
} else
{return and__3546__auto____9412;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9413))
{return or__3548__auto____9413;
} else
{var or__3548__auto____9415 = (function (){var ps__9414 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9414) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9414),prefer_table)))
{} else
{}
{
var G__9418 = cljs.core.rest.call(null,ps__9414);
ps__9414 = G__9418;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9415))
{return or__3548__auto____9415;
} else
{var or__3548__auto____9417 = (function (){var ps__9416 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9416) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9416),y,prefer_table)))
{} else
{}
{
var G__9419 = cljs.core.rest.call(null,ps__9416);
ps__9416 = G__9419;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9417))
{return or__3548__auto____9417;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9420 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9420))
{return or__3548__auto____9420;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9429 = cljs.core.reduce.call(null,(function (be,p__9421){
var vec__9422__9423 = p__9421;
var k__9424 = cljs.core.nth.call(null,vec__9422__9423,0,null);
var ___9425 = cljs.core.nth.call(null,vec__9422__9423,1,null);
var e__9426 = vec__9422__9423;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9424)))
{var be2__9428 = (cljs.core.truth_((function (){var or__3548__auto____9427 = (be === null);

if(cljs.core.truth_(or__3548__auto____9427))
{return or__3548__auto____9427;
} else
{return cljs.core.dominates.call(null,k__9424,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9426:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9428),k__9424,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9424," and ",cljs.core.first.call(null,be2__9428),", and neither is preferred")));
}
return be2__9428;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9429))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9429));
return cljs.core.second.call(null,best_entry__9429);
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
if(cljs.core.truth_((function (){var and__3546__auto____9430 = mf;

if(cljs.core.truth_(and__3546__auto____9430))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9430;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9431 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9431))
{return or__3548__auto____9431;
} else
{var or__3548__auto____9432 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9432))
{return or__3548__auto____9432;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9433 = mf;

if(cljs.core.truth_(and__3546__auto____9433))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9433;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9434 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9434))
{return or__3548__auto____9434;
} else
{var or__3548__auto____9435 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9435))
{return or__3548__auto____9435;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9436 = mf;

if(cljs.core.truth_(and__3546__auto____9436))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9436;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9437 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9437))
{return or__3548__auto____9437;
} else
{var or__3548__auto____9438 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9438))
{return or__3548__auto____9438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9439 = mf;

if(cljs.core.truth_(and__3546__auto____9439))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9439;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9440 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9440))
{return or__3548__auto____9440;
} else
{var or__3548__auto____9441 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9441))
{return or__3548__auto____9441;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9442 = mf;

if(cljs.core.truth_(and__3546__auto____9442))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9442;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9443 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9443))
{return or__3548__auto____9443;
} else
{var or__3548__auto____9444 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9444))
{return or__3548__auto____9444;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9445 = mf;

if(cljs.core.truth_(and__3546__auto____9445))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9445;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9446 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9446))
{return or__3548__auto____9446;
} else
{var or__3548__auto____9447 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9447))
{return or__3548__auto____9447;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9448 = mf;

if(cljs.core.truth_(and__3546__auto____9448))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9448;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9449 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9449))
{return or__3548__auto____9449;
} else
{var or__3548__auto____9450 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9450))
{return or__3548__auto____9450;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9451 = mf;

if(cljs.core.truth_(and__3546__auto____9451))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____9451;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____9452 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9452))
{return or__3548__auto____9452;
} else
{var or__3548__auto____9453 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____9453))
{return or__3548__auto____9453;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9454 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9455 = cljs.core._get_method.call(null,mf,dispatch_val__9454);

if(cljs.core.truth_(target_fn__9455))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9454)));
}
return cljs.core.apply.call(null,target_fn__9455,args);
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
var this__9456 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9457 = this;
cljs.core.swap_BANG_.call(null,this__9457.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9457.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9457.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9457.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9458 = this;
cljs.core.swap_BANG_.call(null,this__9458.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9458.method_cache,this__9458.method_table,this__9458.cached_hierarchy,this__9458.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9459 = this;
cljs.core.swap_BANG_.call(null,this__9459.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9459.method_cache,this__9459.method_table,this__9459.cached_hierarchy,this__9459.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9460 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9460.cached_hierarchy),cljs.core.deref.call(null,this__9460.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9460.method_cache,this__9460.method_table,this__9460.cached_hierarchy,this__9460.hierarchy);
}
var temp__3695__auto____9461 = cljs.core.deref.call(null,this__9460.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9461))
{var target_fn__9462 = temp__3695__auto____9461;

return target_fn__9462;
} else
{var temp__3695__auto____9463 = cljs.core.find_and_cache_best_method.call(null,this__9460.name,dispatch_val,this__9460.hierarchy,this__9460.method_table,this__9460.prefer_table,this__9460.method_cache,this__9460.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9463))
{var target_fn__9464 = temp__3695__auto____9463;

return target_fn__9464;
} else
{return cljs.core.deref.call(null,this__9460.method_table).call(null,this__9460.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9465 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9465.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9465.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9465.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9465.method_cache,this__9465.method_table,this__9465.cached_hierarchy,this__9465.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9466 = this;
return cljs.core.deref.call(null,this__9466.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9467 = this;
return cljs.core.deref.call(null,this__9467.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9468 = this;
return cljs.core.do_dispatch.call(null,mf,this__9468.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9469__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9469 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9469__delegate.call(this, _, args);
};
G__9469.cljs$lang$maxFixedArity = 1;
G__9469.cljs$lang$applyTo = (function (arglist__9470){
var _ = cljs.core.first(arglist__9470);
var args = cljs.core.rest(arglist__9470);
return G__9469__delegate.call(this, _, args);
});
return G__9469;
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
