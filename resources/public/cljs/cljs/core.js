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
var or__3548__auto____7564 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7564))
{return or__3548__auto____7564;
} else
{var or__3548__auto____7565 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
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
var _invoke__7629 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7566 = this$;

if(cljs.core.truth_(and__3546__auto____7566))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7566;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7567 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7567))
{return or__3548__auto____7567;
} else
{var or__3548__auto____7568 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7630 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7569 = this$;

if(cljs.core.truth_(and__3546__auto____7569))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7569;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7570 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{var or__3548__auto____7571 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7631 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7572 = this$;

if(cljs.core.truth_(and__3546__auto____7572))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7572;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7573 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7573))
{return or__3548__auto____7573;
} else
{var or__3548__auto____7574 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7632 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7575 = this$;

if(cljs.core.truth_(and__3546__auto____7575))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7575;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7576 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{var or__3548__auto____7577 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7633 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7578 = this$;

if(cljs.core.truth_(and__3546__auto____7578))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7578;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7579 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7579))
{return or__3548__auto____7579;
} else
{var or__3548__auto____7580 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7581 = this$;

if(cljs.core.truth_(and__3546__auto____7581))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7581;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7582 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{var or__3548__auto____7583 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7584 = this$;

if(cljs.core.truth_(and__3546__auto____7584))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7584;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7585 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
} else
{var or__3548__auto____7586 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7587 = this$;

if(cljs.core.truth_(and__3546__auto____7587))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7587;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7588 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7588))
{return or__3548__auto____7588;
} else
{var or__3548__auto____7589 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7590 = this$;

if(cljs.core.truth_(and__3546__auto____7590))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7590;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7591 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{var or__3548__auto____7592 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7594 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{var or__3548__auto____7595 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7596 = this$;

if(cljs.core.truth_(and__3546__auto____7596))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7596;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7599 = this$;

if(cljs.core.truth_(and__3546__auto____7599))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7599;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7603 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7603))
{return or__3548__auto____7603;
} else
{var or__3548__auto____7604 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7605 = this$;

if(cljs.core.truth_(and__3546__auto____7605))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7605;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7606 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{var or__3548__auto____7607 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7612 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{var or__3548__auto____7613 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7615 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7617 = this$;

if(cljs.core.truth_(and__3546__auto____7617))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7617;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7618 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{var or__3548__auto____7619 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7620 = this$;

if(cljs.core.truth_(and__3546__auto____7620))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7620;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7621 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7621))
{return or__3548__auto____7621;
} else
{var or__3548__auto____7622 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7622))
{return or__3548__auto____7622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7623 = this$;

if(cljs.core.truth_(and__3546__auto____7623))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7623;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{var or__3548__auto____7625 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7625))
{return or__3548__auto____7625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7626 = this$;

if(cljs.core.truth_(and__3546__auto____7626))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7626;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7627 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7627))
{return or__3548__auto____7627;
} else
{var or__3548__auto____7628 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
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
return _invoke__7629.call(this,this$);
case  2 :
return _invoke__7630.call(this,this$,a);
case  3 :
return _invoke__7631.call(this,this$,a,b);
case  4 :
return _invoke__7632.call(this,this$,a,b,c);
case  5 :
return _invoke__7633.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7634.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = coll;

if(cljs.core.truth_(and__3546__auto____7651))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7651;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7652 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{var or__3548__auto____7653 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7654 = coll;

if(cljs.core.truth_(and__3546__auto____7654))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7654;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7655 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{var or__3548__auto____7656 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7657 = coll;

if(cljs.core.truth_(and__3546__auto____7657))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7657;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7658 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{var or__3548__auto____7659 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
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
var _nth__7666 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7660 = coll;

if(cljs.core.truth_(and__3546__auto____7660))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7660;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7661 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{var or__3548__auto____7662 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7667 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7663 = coll;

if(cljs.core.truth_(and__3546__auto____7663))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7663;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7664 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{var or__3548__auto____7665 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
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
return _nth__7666.call(this,coll,n);
case  3 :
return _nth__7667.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7669 = coll;

if(cljs.core.truth_(and__3546__auto____7669))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7669;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7670 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
} else
{var or__3548__auto____7671 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7672 = coll;

if(cljs.core.truth_(and__3546__auto____7672))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7672;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7673 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{var or__3548__auto____7674 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
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
var _lookup__7681 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7675 = o;

if(cljs.core.truth_(and__3546__auto____7675))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7675;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7676 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{var or__3548__auto____7677 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7682 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = o;

if(cljs.core.truth_(and__3546__auto____7678))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7678;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7679 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{var or__3548__auto____7680 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
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
return _lookup__7681.call(this,o,k);
case  3 :
return _lookup__7682.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7684 = coll;

if(cljs.core.truth_(and__3546__auto____7684))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7684;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7685 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7685))
{return or__3548__auto____7685;
} else
{var or__3548__auto____7686 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7687 = coll;

if(cljs.core.truth_(and__3546__auto____7687))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7687;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7688 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{var or__3548__auto____7689 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7690 = coll;

if(cljs.core.truth_(and__3546__auto____7690))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7690;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7691 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{var or__3548__auto____7692 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7693 = coll;

if(cljs.core.truth_(and__3546__auto____7693))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7693;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7694 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{var or__3548__auto____7695 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7696 = coll;

if(cljs.core.truth_(and__3546__auto____7696))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7696;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7697 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{var or__3548__auto____7698 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7703 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{var or__3548__auto____7704 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7705 = o;

if(cljs.core.truth_(and__3546__auto____7705))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7705;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7706 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{var or__3548__auto____7707 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = o;

if(cljs.core.truth_(and__3546__auto____7708))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7708;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7709 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{var or__3548__auto____7710 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = o;

if(cljs.core.truth_(and__3546__auto____7711))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7711;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7712 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{var or__3548__auto____7713 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = o;

if(cljs.core.truth_(and__3546__auto____7714))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7714;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7716 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
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
var _reduce__7723 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7717 = coll;

if(cljs.core.truth_(and__3546__auto____7717))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7717;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7724 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7721 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{var or__3548__auto____7722 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
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
return _reduce__7723.call(this,coll,f);
case  3 :
return _reduce__7724.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = o;

if(cljs.core.truth_(and__3546__auto____7726))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7726;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7728 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7729 = o;

if(cljs.core.truth_(and__3546__auto____7729))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7729;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7730 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{var or__3548__auto____7731 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = o;

if(cljs.core.truth_(and__3546__auto____7732))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7732;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7733 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7734 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
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
if(cljs.core.truth_((function (){var and__3546__auto____7735 = o;

if(cljs.core.truth_(and__3546__auto____7735))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7735;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7737 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7738 = d;

if(cljs.core.truth_(and__3546__auto____7738))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7738;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7739 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{var or__3548__auto____7740 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7741 = this$;

if(cljs.core.truth_(and__3546__auto____7741))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7741;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7742 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{var or__3548__auto____7743 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7744 = this$;

if(cljs.core.truth_(and__3546__auto____7744))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7744;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7745 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{var or__3548__auto____7746 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7747 = this$;

if(cljs.core.truth_(and__3546__auto____7747))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7747;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7748 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{var or__3548__auto____7749 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
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
var G__7750 = null;
var G__7750__7751 = (function (o,k){
return null;
});
var G__7750__7752 = (function (o,k,not_found){
return not_found;
});
G__7750 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7750__7751.call(this,o,k);
case  3 :
return G__7750__7752.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7750;
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
var G__7754 = null;
var G__7754__7755 = (function (_,f){
return f.call(null);
});
var G__7754__7756 = (function (_,f,start){
return start;
});
G__7754 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7754__7755.call(this,_,f);
case  3 :
return G__7754__7756.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7754;
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
var G__7758 = null;
var G__7758__7759 = (function (_,n){
return null;
});
var G__7758__7760 = (function (_,n,not_found){
return not_found;
});
G__7758 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7758__7759.call(this,_,n);
case  3 :
return G__7758__7760.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7758;
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
var ci_reduce__7768 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7762 = cljs.core._nth.call(null,cicoll,0);
var n__7763 = 1;

while(true){
if(cljs.core.truth_((n__7763 < cljs.core._count.call(null,cicoll))))
{{
var G__7772 = f.call(null,val__7762,cljs.core._nth.call(null,cicoll,n__7763));
var G__7773 = (n__7763 + 1);
val__7762 = G__7772;
n__7763 = G__7773;
continue;
}
} else
{return val__7762;
}
break;
}
}
});
var ci_reduce__7769 = (function (cicoll,f,val){
var val__7764 = val;
var n__7765 = 0;

while(true){
if(cljs.core.truth_((n__7765 < cljs.core._count.call(null,cicoll))))
{{
var G__7774 = f.call(null,val__7764,cljs.core._nth.call(null,cicoll,n__7765));
var G__7775 = (n__7765 + 1);
val__7764 = G__7774;
n__7765 = G__7775;
continue;
}
} else
{return val__7764;
}
break;
}
});
var ci_reduce__7770 = (function (cicoll,f,val,idx){
var val__7766 = val;
var n__7767 = idx;

while(true){
if(cljs.core.truth_((n__7767 < cljs.core._count.call(null,cicoll))))
{{
var G__7776 = f.call(null,val__7766,cljs.core._nth.call(null,cicoll,n__7767));
var G__7777 = (n__7767 + 1);
val__7766 = G__7776;
n__7767 = G__7777;
continue;
}
} else
{return val__7766;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7768.call(this,cicoll,f);
case  3 :
return ci_reduce__7769.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7770.call(this,cicoll,f,val,idx);
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
var this__7778 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7791 = null;
var G__7791__7792 = (function (_,f){
var this__7779 = this;
return cljs.core.ci_reduce.call(null,this__7779.a,f,(this__7779.a[this__7779.i]),(this__7779.i + 1));
});
var G__7791__7793 = (function (_,f,start){
var this__7780 = this;
return cljs.core.ci_reduce.call(null,this__7780.a,f,start,this__7780.i);
});
G__7791 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7791__7792.call(this,_,f);
case  3 :
return G__7791__7793.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7791;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7781 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7782 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7795 = null;
var G__7795__7796 = (function (coll,n){
var this__7783 = this;
var i__7784 = (n + this__7783.i);

if(cljs.core.truth_((i__7784 < this__7783.a.length)))
{return (this__7783.a[i__7784]);
} else
{return null;
}
});
var G__7795__7797 = (function (coll,n,not_found){
var this__7785 = this;
var i__7786 = (n + this__7785.i);

if(cljs.core.truth_((i__7786 < this__7785.a.length)))
{return (this__7785.a[i__7786]);
} else
{return not_found;
}
});
G__7795 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7795__7796.call(this,coll,n);
case  3 :
return G__7795__7797.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7795;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7787 = this;
return (this__7787.a.length - this__7787.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7788 = this;
return (this__7788.a[this__7788.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7789 = this;
if(cljs.core.truth_(((this__7789.i + 1) < this__7789.a.length)))
{return (new cljs.core.IndexedSeq(this__7789.a,(this__7789.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7790 = this;
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
var G__7799 = null;
var G__7799__7800 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7799__7801 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7799 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7799__7800.call(this,array,f);
case  3 :
return G__7799__7801.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7799;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7803 = null;
var G__7803__7804 = (function (array,k){
return (array[k]);
});
var G__7803__7805 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7803 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7803__7804.call(this,array,k);
case  3 :
return G__7803__7805.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7803;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7807 = null;
var G__7807__7808 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7807__7809 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7807 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7807__7808.call(this,array,n);
case  3 :
return G__7807__7809.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7807;
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
var temp__3698__auto____7811 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7811))
{var s__7812 = temp__3698__auto____7811;

return cljs.core._first.call(null,s__7812);
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
var G__7813 = cljs.core.next.call(null,s);
s = G__7813;
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
var s__7814 = cljs.core.seq.call(null,x);
var n__7815 = 0;

while(true){
if(cljs.core.truth_(s__7814))
{{
var G__7816 = cljs.core.next.call(null,s__7814);
var G__7817 = (n__7815 + 1);
s__7814 = G__7816;
n__7815 = G__7817;
continue;
}
} else
{return n__7815;
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
var conj__7818 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7819 = (function() { 
var G__7821__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7822 = conj.call(null,coll,x);
var G__7823 = cljs.core.first.call(null,xs);
var G__7824 = cljs.core.next.call(null,xs);
coll = G__7822;
x = G__7823;
xs = G__7824;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7821 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7821__delegate.call(this, coll, x, xs);
};
G__7821.cljs$lang$maxFixedArity = 2;
G__7821.cljs$lang$applyTo = (function (arglist__7825){
var coll = cljs.core.first(arglist__7825);
var x = cljs.core.first(cljs.core.next(arglist__7825));
var xs = cljs.core.rest(cljs.core.next(arglist__7825));
return G__7821__delegate.call(this, coll, x, xs);
});
return G__7821;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7818.call(this,coll,x);
default:
return conj__7819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7819.cljs$lang$applyTo;
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
var nth__7826 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7827 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7826.call(this,coll,n);
case  3 :
return nth__7827.call(this,coll,n,not_found);
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
var get__7829 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7830 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7829.call(this,o,k);
case  3 :
return get__7830.call(this,o,k,not_found);
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
var assoc__7833 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7834 = (function() { 
var G__7836__delegate = function (coll,k,v,kvs){
while(true){
var ret__7832 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7837 = ret__7832;
var G__7838 = cljs.core.first.call(null,kvs);
var G__7839 = cljs.core.second.call(null,kvs);
var G__7840 = cljs.core.nnext.call(null,kvs);
coll = G__7837;
k = G__7838;
v = G__7839;
kvs = G__7840;
continue;
}
} else
{return ret__7832;
}
break;
}
};
var G__7836 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7836__delegate.call(this, coll, k, v, kvs);
};
G__7836.cljs$lang$maxFixedArity = 3;
G__7836.cljs$lang$applyTo = (function (arglist__7841){
var coll = cljs.core.first(arglist__7841);
var k = cljs.core.first(cljs.core.next(arglist__7841));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7841)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7841)));
return G__7836__delegate.call(this, coll, k, v, kvs);
});
return G__7836;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7833.call(this,coll,k,v);
default:
return assoc__7834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7834.cljs$lang$applyTo;
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
var dissoc__7843 = (function (coll){
return coll;
});
var dissoc__7844 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7845 = (function() { 
var G__7847__delegate = function (coll,k,ks){
while(true){
var ret__7842 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7848 = ret__7842;
var G__7849 = cljs.core.first.call(null,ks);
var G__7850 = cljs.core.next.call(null,ks);
coll = G__7848;
k = G__7849;
ks = G__7850;
continue;
}
} else
{return ret__7842;
}
break;
}
};
var G__7847 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7847__delegate.call(this, coll, k, ks);
};
G__7847.cljs$lang$maxFixedArity = 2;
G__7847.cljs$lang$applyTo = (function (arglist__7851){
var coll = cljs.core.first(arglist__7851);
var k = cljs.core.first(cljs.core.next(arglist__7851));
var ks = cljs.core.rest(cljs.core.next(arglist__7851));
return G__7847__delegate.call(this, coll, k, ks);
});
return G__7847;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7843.call(this,coll);
case  2 :
return dissoc__7844.call(this,coll,k);
default:
return dissoc__7845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7845.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__3028__auto____7852 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7853 = x__3028__auto____7852;

if(cljs.core.truth_(and__3546__auto____7853))
{var and__3546__auto____7854 = x__3028__auto____7852.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7854))
{return cljs.core.not.call(null,x__3028__auto____7852.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7854;
}
} else
{return and__3546__auto____7853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____7852);
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
var disj__7856 = (function (coll){
return coll;
});
var disj__7857 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7858 = (function() { 
var G__7860__delegate = function (coll,k,ks){
while(true){
var ret__7855 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7861 = ret__7855;
var G__7862 = cljs.core.first.call(null,ks);
var G__7863 = cljs.core.next.call(null,ks);
coll = G__7861;
k = G__7862;
ks = G__7863;
continue;
}
} else
{return ret__7855;
}
break;
}
};
var G__7860 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7860__delegate.call(this, coll, k, ks);
};
G__7860.cljs$lang$maxFixedArity = 2;
G__7860.cljs$lang$applyTo = (function (arglist__7864){
var coll = cljs.core.first(arglist__7864);
var k = cljs.core.first(cljs.core.next(arglist__7864));
var ks = cljs.core.rest(cljs.core.next(arglist__7864));
return G__7860__delegate.call(this, coll, k, ks);
});
return G__7860;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7856.call(this,coll);
case  2 :
return disj__7857.call(this,coll,k);
default:
return disj__7858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7858.cljs$lang$applyTo;
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
{var x__3028__auto____7865 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7866 = x__3028__auto____7865;

if(cljs.core.truth_(and__3546__auto____7866))
{var and__3546__auto____7867 = x__3028__auto____7865.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7867))
{return cljs.core.not.call(null,x__3028__auto____7865.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7867;
}
} else
{return and__3546__auto____7866;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3028__auto____7865);
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
{var x__3028__auto____7868 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7869 = x__3028__auto____7868;

if(cljs.core.truth_(and__3546__auto____7869))
{var and__3546__auto____7870 = x__3028__auto____7868.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7870))
{return cljs.core.not.call(null,x__3028__auto____7868.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7870;
}
} else
{return and__3546__auto____7869;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3028__auto____7868);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3028__auto____7871 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7872 = x__3028__auto____7871;

if(cljs.core.truth_(and__3546__auto____7872))
{var and__3546__auto____7873 = x__3028__auto____7871.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7873))
{return cljs.core.not.call(null,x__3028__auto____7871.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7873;
}
} else
{return and__3546__auto____7872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3028__auto____7871);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3028__auto____7874 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7875 = x__3028__auto____7874;

if(cljs.core.truth_(and__3546__auto____7875))
{var and__3546__auto____7876 = x__3028__auto____7874.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7876))
{return cljs.core.not.call(null,x__3028__auto____7874.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7876;
}
} else
{return and__3546__auto____7875;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3028__auto____7874);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3028__auto____7877 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7878 = x__3028__auto____7877;

if(cljs.core.truth_(and__3546__auto____7878))
{var and__3546__auto____7879 = x__3028__auto____7877.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7879))
{return cljs.core.not.call(null,x__3028__auto____7877.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7879;
}
} else
{return and__3546__auto____7878;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3028__auto____7877);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3028__auto____7880 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7881 = x__3028__auto____7880;

if(cljs.core.truth_(and__3546__auto____7881))
{var and__3546__auto____7882 = x__3028__auto____7880.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7882))
{return cljs.core.not.call(null,x__3028__auto____7880.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7882;
}
} else
{return and__3546__auto____7881;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3028__auto____7880);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3028__auto____7883 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7884 = x__3028__auto____7883;

if(cljs.core.truth_(and__3546__auto____7884))
{var and__3546__auto____7885 = x__3028__auto____7883.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7885))
{return cljs.core.not.call(null,x__3028__auto____7883.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7885;
}
} else
{return and__3546__auto____7884;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3028__auto____7883);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7886 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7886.push(key);
}));
return keys__7886;
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
{var x__3028__auto____7887 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7888 = x__3028__auto____7887;

if(cljs.core.truth_(and__3546__auto____7888))
{var and__3546__auto____7889 = x__3028__auto____7887.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7889))
{return cljs.core.not.call(null,x__3028__auto____7887.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7889;
}
} else
{return and__3546__auto____7888;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3028__auto____7887);
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
var and__3546__auto____7890 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7890))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7891 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7890;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7892 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7892))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7892;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7893 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7893))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7893;
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
var and__3546__auto____7894 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7894))
{return (n == n.toFixed());
} else
{return and__3546__auto____7894;
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
if(cljs.core.truth_((function (){var and__3546__auto____7895 = coll;

if(cljs.core.truth_(and__3546__auto____7895))
{var and__3546__auto____7896 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7896))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7896;
}
} else
{return and__3546__auto____7895;
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
var distinct_QMARK___7901 = (function (x){
return true;
});
var distinct_QMARK___7902 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7903 = (function() { 
var G__7905__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7897 = cljs.core.set([y,x]);
var xs__7898 = more;

while(true){
var x__7899 = cljs.core.first.call(null,xs__7898);
var etc__7900 = cljs.core.next.call(null,xs__7898);

if(cljs.core.truth_(xs__7898))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7897,x__7899)))
{return false;
} else
{{
var G__7906 = cljs.core.conj.call(null,s__7897,x__7899);
var G__7907 = etc__7900;
s__7897 = G__7906;
xs__7898 = G__7907;
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
var G__7905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7905__delegate.call(this, x, y, more);
};
G__7905.cljs$lang$maxFixedArity = 2;
G__7905.cljs$lang$applyTo = (function (arglist__7908){
var x = cljs.core.first(arglist__7908);
var y = cljs.core.first(cljs.core.next(arglist__7908));
var more = cljs.core.rest(cljs.core.next(arglist__7908));
return G__7905__delegate.call(this, x, y, more);
});
return G__7905;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7901.call(this,x);
case  2 :
return distinct_QMARK___7902.call(this,x,y);
default:
return distinct_QMARK___7903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7903.cljs$lang$applyTo;
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
var r__7909 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7909)))
{return r__7909;
} else
{if(cljs.core.truth_(r__7909))
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
var sort__7911 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7912 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7910 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7910,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7910);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7911.call(this,comp);
case  2 :
return sort__7912.call(this,comp,coll);
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
var sort_by__7914 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7915 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7914.call(this,keyfn,comp);
case  3 :
return sort_by__7915.call(this,keyfn,comp,coll);
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
var reduce__7917 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7918 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7917.call(this,f,val);
case  3 :
return reduce__7918.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7924 = (function (f,coll){
var temp__3695__auto____7920 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7920))
{var s__7921 = temp__3695__auto____7920;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7921),cljs.core.next.call(null,s__7921));
} else
{return f.call(null);
}
});
var seq_reduce__7925 = (function (f,val,coll){
var val__7922 = val;
var coll__7923 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7923))
{{
var G__7927 = f.call(null,val__7922,cljs.core.first.call(null,coll__7923));
var G__7928 = cljs.core.next.call(null,coll__7923);
val__7922 = G__7927;
coll__7923 = G__7928;
continue;
}
} else
{return val__7922;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7924.call(this,f,val);
case  3 :
return seq_reduce__7925.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7929 = null;
var G__7929__7930 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7929__7931 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7929 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7929__7930.call(this,coll,f);
case  3 :
return G__7929__7931.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7929;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7933 = (function (){
return 0;
});
var _PLUS___7934 = (function (x){
return x;
});
var _PLUS___7935 = (function (x,y){
return (x + y);
});
var _PLUS___7936 = (function() { 
var G__7938__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7938 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7938__delegate.call(this, x, y, more);
};
G__7938.cljs$lang$maxFixedArity = 2;
G__7938.cljs$lang$applyTo = (function (arglist__7939){
var x = cljs.core.first(arglist__7939);
var y = cljs.core.first(cljs.core.next(arglist__7939));
var more = cljs.core.rest(cljs.core.next(arglist__7939));
return G__7938__delegate.call(this, x, y, more);
});
return G__7938;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7933.call(this);
case  1 :
return _PLUS___7934.call(this,x);
case  2 :
return _PLUS___7935.call(this,x,y);
default:
return _PLUS___7936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7936.cljs$lang$applyTo;
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
var ___7940 = (function (x){
return (- x);
});
var ___7941 = (function (x,y){
return (x - y);
});
var ___7942 = (function() { 
var G__7944__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7944 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7944__delegate.call(this, x, y, more);
};
G__7944.cljs$lang$maxFixedArity = 2;
G__7944.cljs$lang$applyTo = (function (arglist__7945){
var x = cljs.core.first(arglist__7945);
var y = cljs.core.first(cljs.core.next(arglist__7945));
var more = cljs.core.rest(cljs.core.next(arglist__7945));
return G__7944__delegate.call(this, x, y, more);
});
return G__7944;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7940.call(this,x);
case  2 :
return ___7941.call(this,x,y);
default:
return ___7942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7942.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7946 = (function (){
return 1;
});
var _STAR___7947 = (function (x){
return x;
});
var _STAR___7948 = (function (x,y){
return (x * y);
});
var _STAR___7949 = (function() { 
var G__7951__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7951 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7951__delegate.call(this, x, y, more);
};
G__7951.cljs$lang$maxFixedArity = 2;
G__7951.cljs$lang$applyTo = (function (arglist__7952){
var x = cljs.core.first(arglist__7952);
var y = cljs.core.first(cljs.core.next(arglist__7952));
var more = cljs.core.rest(cljs.core.next(arglist__7952));
return G__7951__delegate.call(this, x, y, more);
});
return G__7951;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7946.call(this);
case  1 :
return _STAR___7947.call(this,x);
case  2 :
return _STAR___7948.call(this,x,y);
default:
return _STAR___7949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7949.cljs$lang$applyTo;
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
var _SLASH___7953 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7954 = (function (x,y){
return (x / y);
});
var _SLASH___7955 = (function() { 
var G__7957__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7957 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7957__delegate.call(this, x, y, more);
};
G__7957.cljs$lang$maxFixedArity = 2;
G__7957.cljs$lang$applyTo = (function (arglist__7958){
var x = cljs.core.first(arglist__7958);
var y = cljs.core.first(cljs.core.next(arglist__7958));
var more = cljs.core.rest(cljs.core.next(arglist__7958));
return G__7957__delegate.call(this, x, y, more);
});
return G__7957;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7953.call(this,x);
case  2 :
return _SLASH___7954.call(this,x,y);
default:
return _SLASH___7955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7955.cljs$lang$applyTo;
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
var _LT___7959 = (function (x){
return true;
});
var _LT___7960 = (function (x,y){
return (x < y);
});
var _LT___7961 = (function() { 
var G__7963__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7964 = y;
var G__7965 = cljs.core.first.call(null,more);
var G__7966 = cljs.core.next.call(null,more);
x = G__7964;
y = G__7965;
more = G__7966;
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
var G__7963 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7963__delegate.call(this, x, y, more);
};
G__7963.cljs$lang$maxFixedArity = 2;
G__7963.cljs$lang$applyTo = (function (arglist__7967){
var x = cljs.core.first(arglist__7967);
var y = cljs.core.first(cljs.core.next(arglist__7967));
var more = cljs.core.rest(cljs.core.next(arglist__7967));
return G__7963__delegate.call(this, x, y, more);
});
return G__7963;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7959.call(this,x);
case  2 :
return _LT___7960.call(this,x,y);
default:
return _LT___7961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7961.cljs$lang$applyTo;
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
var _LT__EQ___7968 = (function (x){
return true;
});
var _LT__EQ___7969 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7970 = (function() { 
var G__7972__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7973 = y;
var G__7974 = cljs.core.first.call(null,more);
var G__7975 = cljs.core.next.call(null,more);
x = G__7973;
y = G__7974;
more = G__7975;
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
var G__7972 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7972__delegate.call(this, x, y, more);
};
G__7972.cljs$lang$maxFixedArity = 2;
G__7972.cljs$lang$applyTo = (function (arglist__7976){
var x = cljs.core.first(arglist__7976);
var y = cljs.core.first(cljs.core.next(arglist__7976));
var more = cljs.core.rest(cljs.core.next(arglist__7976));
return G__7972__delegate.call(this, x, y, more);
});
return G__7972;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7968.call(this,x);
case  2 :
return _LT__EQ___7969.call(this,x,y);
default:
return _LT__EQ___7970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7970.cljs$lang$applyTo;
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
var _GT___7977 = (function (x){
return true;
});
var _GT___7978 = (function (x,y){
return (x > y);
});
var _GT___7979 = (function() { 
var G__7981__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7982 = y;
var G__7983 = cljs.core.first.call(null,more);
var G__7984 = cljs.core.next.call(null,more);
x = G__7982;
y = G__7983;
more = G__7984;
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
var G__7981 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7981__delegate.call(this, x, y, more);
};
G__7981.cljs$lang$maxFixedArity = 2;
G__7981.cljs$lang$applyTo = (function (arglist__7985){
var x = cljs.core.first(arglist__7985);
var y = cljs.core.first(cljs.core.next(arglist__7985));
var more = cljs.core.rest(cljs.core.next(arglist__7985));
return G__7981__delegate.call(this, x, y, more);
});
return G__7981;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7977.call(this,x);
case  2 :
return _GT___7978.call(this,x,y);
default:
return _GT___7979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7979.cljs$lang$applyTo;
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
var _GT__EQ___7986 = (function (x){
return true;
});
var _GT__EQ___7987 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7988 = (function() { 
var G__7990__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7991 = y;
var G__7992 = cljs.core.first.call(null,more);
var G__7993 = cljs.core.next.call(null,more);
x = G__7991;
y = G__7992;
more = G__7993;
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
var G__7990 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7990__delegate.call(this, x, y, more);
};
G__7990.cljs$lang$maxFixedArity = 2;
G__7990.cljs$lang$applyTo = (function (arglist__7994){
var x = cljs.core.first(arglist__7994);
var y = cljs.core.first(cljs.core.next(arglist__7994));
var more = cljs.core.rest(cljs.core.next(arglist__7994));
return G__7990__delegate.call(this, x, y, more);
});
return G__7990;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7986.call(this,x);
case  2 :
return _GT__EQ___7987.call(this,x,y);
default:
return _GT__EQ___7988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7988.cljs$lang$applyTo;
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
var max__7995 = (function (x){
return x;
});
var max__7996 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7997 = (function() { 
var G__7999__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7999 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7999__delegate.call(this, x, y, more);
};
G__7999.cljs$lang$maxFixedArity = 2;
G__7999.cljs$lang$applyTo = (function (arglist__8000){
var x = cljs.core.first(arglist__8000);
var y = cljs.core.first(cljs.core.next(arglist__8000));
var more = cljs.core.rest(cljs.core.next(arglist__8000));
return G__7999__delegate.call(this, x, y, more);
});
return G__7999;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7995.call(this,x);
case  2 :
return max__7996.call(this,x,y);
default:
return max__7997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7997.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8001 = (function (x){
return x;
});
var min__8002 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8003 = (function() { 
var G__8005__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8005 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8005__delegate.call(this, x, y, more);
};
G__8005.cljs$lang$maxFixedArity = 2;
G__8005.cljs$lang$applyTo = (function (arglist__8006){
var x = cljs.core.first(arglist__8006);
var y = cljs.core.first(cljs.core.next(arglist__8006));
var more = cljs.core.rest(cljs.core.next(arglist__8006));
return G__8005__delegate.call(this, x, y, more);
});
return G__8005;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8001.call(this,x);
case  2 :
return min__8002.call(this,x,y);
default:
return min__8003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8003.cljs$lang$applyTo;
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
var rem__8007 = (n % d);

return cljs.core.fix.call(null,((n - rem__8007) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8008 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8008));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8009 = (function (){
return Math.random.call(null);
});
var rand__8010 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8009.call(this);
case  1 :
return rand__8010.call(this,n);
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
var _EQ__EQ___8012 = (function (x){
return true;
});
var _EQ__EQ___8013 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8014 = (function() { 
var G__8016__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8017 = y;
var G__8018 = cljs.core.first.call(null,more);
var G__8019 = cljs.core.next.call(null,more);
x = G__8017;
y = G__8018;
more = G__8019;
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
var G__8016 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8016__delegate.call(this, x, y, more);
};
G__8016.cljs$lang$maxFixedArity = 2;
G__8016.cljs$lang$applyTo = (function (arglist__8020){
var x = cljs.core.first(arglist__8020);
var y = cljs.core.first(cljs.core.next(arglist__8020));
var more = cljs.core.rest(cljs.core.next(arglist__8020));
return G__8016__delegate.call(this, x, y, more);
});
return G__8016;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8012.call(this,x);
case  2 :
return _EQ__EQ___8013.call(this,x,y);
default:
return _EQ__EQ___8014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8014.cljs$lang$applyTo;
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
var n__8021 = n;
var xs__8022 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8023 = xs__8022;

if(cljs.core.truth_(and__3546__auto____8023))
{return (n__8021 > 0);
} else
{return and__3546__auto____8023;
}
})()))
{{
var G__8024 = (n__8021 - 1);
var G__8025 = cljs.core.next.call(null,xs__8022);
n__8021 = G__8024;
xs__8022 = G__8025;
continue;
}
} else
{return xs__8022;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8030 = null;
var G__8030__8031 = (function (coll,n){
var temp__3695__auto____8026 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8026))
{var xs__8027 = temp__3695__auto____8026;

return cljs.core.first.call(null,xs__8027);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8030__8032 = (function (coll,n,not_found){
var temp__3695__auto____8028 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8028))
{var xs__8029 = temp__3695__auto____8028;

return cljs.core.first.call(null,xs__8029);
} else
{return not_found;
}
});
G__8030 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8030__8031.call(this,coll,n);
case  3 :
return G__8030__8032.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8030;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8034 = (function (){
return "";
});
var str_STAR___8035 = (function (x){
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
var str_STAR___8036 = (function() { 
var G__8038__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8039 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8040 = cljs.core.next.call(null,more);
sb = G__8039;
more = G__8040;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8038 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8038__delegate.call(this, x, ys);
};
G__8038.cljs$lang$maxFixedArity = 1;
G__8038.cljs$lang$applyTo = (function (arglist__8041){
var x = cljs.core.first(arglist__8041);
var ys = cljs.core.rest(arglist__8041);
return G__8038__delegate.call(this, x, ys);
});
return G__8038;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8034.call(this);
case  1 :
return str_STAR___8035.call(this,x);
default:
return str_STAR___8036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8036.cljs$lang$applyTo;
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
var str__8042 = (function (){
return "";
});
var str__8043 = (function (x){
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
var str__8044 = (function() { 
var G__8046__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8047 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8048 = cljs.core.next.call(null,more);
sb = G__8047;
more = G__8048;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8046 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8046__delegate.call(this, x, ys);
};
G__8046.cljs$lang$maxFixedArity = 1;
G__8046.cljs$lang$applyTo = (function (arglist__8049){
var x = cljs.core.first(arglist__8049);
var ys = cljs.core.rest(arglist__8049);
return G__8046__delegate.call(this, x, ys);
});
return G__8046;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8042.call(this);
case  1 :
return str__8043.call(this,x);
default:
return str__8044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8044.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8050 = (function (s,start){
return s.substring(start);
});
var subs__8051 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8050.call(this,s,start);
case  3 :
return subs__8051.call(this,s,start,end);
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
var symbol__8053 = (function (name){
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
var symbol__8054 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8053.call(this,ns);
case  2 :
return symbol__8054.call(this,ns,name);
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
var keyword__8056 = (function (name){
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
var keyword__8057 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8056.call(this,ns);
case  2 :
return keyword__8057.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8059 = cljs.core.seq.call(null,x);
var ys__8060 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8059 === null)))
{return (ys__8060 === null);
} else
{if(cljs.core.truth_((ys__8060 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8059),cljs.core.first.call(null,ys__8060))))
{{
var G__8061 = cljs.core.next.call(null,xs__8059);
var G__8062 = cljs.core.next.call(null,ys__8060);
xs__8059 = G__8061;
ys__8060 = G__8062;
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
return cljs.core.reduce.call(null,(function (p1__8063_SHARP_,p2__8064_SHARP_){
return cljs.core.hash_combine.call(null,p1__8063_SHARP_,cljs.core.hash.call(null,p2__8064_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8065__8066 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8065__8066))
{var G__8068__8070 = cljs.core.first.call(null,G__8065__8066);
var vec__8069__8071 = G__8068__8070;
var key_name__8072 = cljs.core.nth.call(null,vec__8069__8071,0,null);
var f__8073 = cljs.core.nth.call(null,vec__8069__8071,1,null);
var G__8065__8074 = G__8065__8066;

var G__8068__8075 = G__8068__8070;
var G__8065__8076 = G__8065__8074;

while(true){
var vec__8077__8078 = G__8068__8075;
var key_name__8079 = cljs.core.nth.call(null,vec__8077__8078,0,null);
var f__8080 = cljs.core.nth.call(null,vec__8077__8078,1,null);
var G__8065__8081 = G__8065__8076;

var str_name__8082 = cljs.core.name.call(null,key_name__8079);

obj[str_name__8082] = f__8080;
var temp__3698__auto____8083 = cljs.core.next.call(null,G__8065__8081);

if(cljs.core.truth_(temp__3698__auto____8083))
{var G__8065__8084 = temp__3698__auto____8083;

{
var G__8085 = cljs.core.first.call(null,G__8065__8084);
var G__8086 = G__8065__8084;
G__8068__8075 = G__8085;
G__8065__8076 = G__8086;
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
var this__8087 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8088 = this;
return (new cljs.core.List(this__8088.meta,o,coll,(this__8088.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8089 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8090 = this;
return this__8090.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8091 = this;
return this__8091.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8092 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8093 = this;
return this__8093.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8094 = this;
return this__8094.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8095 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8096 = this;
return (new cljs.core.List(meta,this__8096.first,this__8096.rest,this__8096.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8097 = this;
return this__8097.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8098 = this;
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
var this__8099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8100 = this;
return (new cljs.core.List(this__8100.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8101 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8102 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8103 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8104 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8105 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8108 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8109 = this;
return this__8109.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8110 = this;
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
list.cljs$lang$applyTo = (function (arglist__8111){
var items = cljs.core.seq( arglist__8111 );;
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
var this__8112 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8113 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8114 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8115 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8115.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8116 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8117 = this;
return this__8117.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8118 = this;
if(cljs.core.truth_((this__8118.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8118.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8119 = this;
return this__8119.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8120 = this;
return (new cljs.core.Cons(meta,this__8120.first,this__8120.rest));
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
var G__8121 = null;
var G__8121__8122 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8121__8123 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8121 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8121__8122.call(this,string,f);
case  3 :
return G__8121__8123.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8121;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8125 = null;
var G__8125__8126 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8125__8127 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8125 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8125__8126.call(this,string,k);
case  3 :
return G__8125__8127.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8125;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8129 = null;
var G__8129__8130 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8129__8131 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8129 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8129__8130.call(this,string,n);
case  3 :
return G__8129__8131.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8129;
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
var G__8139 = null;
var G__8139__8140 = (function (tsym8133,coll){
var tsym8133__8135 = this;

var this$__8136 = tsym8133__8135;

return cljs.core.get.call(null,coll,this$__8136.toString());
});
var G__8139__8141 = (function (tsym8134,coll,not_found){
var tsym8134__8137 = this;

var this$__8138 = tsym8134__8137;

return cljs.core.get.call(null,coll,this$__8138.toString(),not_found);
});
G__8139 = function(tsym8134,coll,not_found){
switch(arguments.length){
case  2 :
return G__8139__8140.call(this,tsym8134,coll);
case  3 :
return G__8139__8141.call(this,tsym8134,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8139;
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
var x__8143 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8143;
} else
{lazy_seq.x = x__8143.call(null);
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
var this__8144 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8145 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8146 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8147 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8147.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8148 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8149 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8150 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8151 = this;
return this__8151.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8152 = this;
return (new cljs.core.LazySeq(meta,this__8152.realized,this__8152.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8153 = [];

var s__8154 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8154)))
{ary__8153.push(cljs.core.first.call(null,s__8154));
{
var G__8155 = cljs.core.next.call(null,s__8154);
s__8154 = G__8155;
continue;
}
} else
{return ary__8153;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8156 = s;
var i__8157 = n;
var sum__8158 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8159 = (i__8157 > 0);

if(cljs.core.truth_(and__3546__auto____8159))
{return cljs.core.seq.call(null,s__8156);
} else
{return and__3546__auto____8159;
}
})()))
{{
var G__8160 = cljs.core.next.call(null,s__8156);
var G__8161 = (i__8157 - 1);
var G__8162 = (sum__8158 + 1);
s__8156 = G__8160;
i__8157 = G__8161;
sum__8158 = G__8162;
continue;
}
} else
{return sum__8158;
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
var concat__8166 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8167 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8168 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8163 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8163))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8163),concat.call(null,cljs.core.rest.call(null,s__8163),y));
} else
{return y;
}
})));
});
var concat__8169 = (function() { 
var G__8171__delegate = function (x,y,zs){
var cat__8165 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8164 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8164))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8164),cat.call(null,cljs.core.rest.call(null,xys__8164),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8165.call(null,concat.call(null,x,y),zs);
};
var G__8171 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8171__delegate.call(this, x, y, zs);
};
G__8171.cljs$lang$maxFixedArity = 2;
G__8171.cljs$lang$applyTo = (function (arglist__8172){
var x = cljs.core.first(arglist__8172);
var y = cljs.core.first(cljs.core.next(arglist__8172));
var zs = cljs.core.rest(cljs.core.next(arglist__8172));
return G__8171__delegate.call(this, x, y, zs);
});
return G__8171;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8166.call(this);
case  1 :
return concat__8167.call(this,x);
case  2 :
return concat__8168.call(this,x,y);
default:
return concat__8169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8169.cljs$lang$applyTo;
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
var list_STAR___8173 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8174 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8175 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8176 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8177 = (function() { 
var G__8179__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8179 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8179__delegate.call(this, a, b, c, d, more);
};
G__8179.cljs$lang$maxFixedArity = 4;
G__8179.cljs$lang$applyTo = (function (arglist__8180){
var a = cljs.core.first(arglist__8180);
var b = cljs.core.first(cljs.core.next(arglist__8180));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8180)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8180))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8180))));
return G__8179__delegate.call(this, a, b, c, d, more);
});
return G__8179;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8173.call(this,a);
case  2 :
return list_STAR___8174.call(this,a,b);
case  3 :
return list_STAR___8175.call(this,a,b,c);
case  4 :
return list_STAR___8176.call(this,a,b,c,d);
default:
return list_STAR___8177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8177.cljs$lang$applyTo;
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
var apply__8190 = (function (f,args){
var fixed_arity__8181 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8181 + 1)) <= fixed_arity__8181)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8191 = (function (f,x,args){
var arglist__8182 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8183 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8182,fixed_arity__8183) <= fixed_arity__8183)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8182));
} else
{return f.cljs$lang$applyTo(arglist__8182);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8182));
}
});
var apply__8192 = (function (f,x,y,args){
var arglist__8184 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8185 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8184,fixed_arity__8185) <= fixed_arity__8185)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8184));
} else
{return f.cljs$lang$applyTo(arglist__8184);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8184));
}
});
var apply__8193 = (function (f,x,y,z,args){
var arglist__8186 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8187 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8186,fixed_arity__8187) <= fixed_arity__8187)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8186));
} else
{return f.cljs$lang$applyTo(arglist__8186);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8186));
}
});
var apply__8194 = (function() { 
var G__8196__delegate = function (f,a,b,c,d,args){
var arglist__8188 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8189 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8188,fixed_arity__8189) <= fixed_arity__8189)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8188));
} else
{return f.cljs$lang$applyTo(arglist__8188);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8188));
}
};
var G__8196 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8196__delegate.call(this, f, a, b, c, d, args);
};
G__8196.cljs$lang$maxFixedArity = 5;
G__8196.cljs$lang$applyTo = (function (arglist__8197){
var f = cljs.core.first(arglist__8197);
var a = cljs.core.first(cljs.core.next(arglist__8197));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8197)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8197))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8197)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8197)))));
return G__8196__delegate.call(this, f, a, b, c, d, args);
});
return G__8196;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8190.call(this,f,a);
case  3 :
return apply__8191.call(this,f,a,b);
case  4 :
return apply__8192.call(this,f,a,b,c);
case  5 :
return apply__8193.call(this,f,a,b,c,d);
default:
return apply__8194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8194.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8198){
var obj = cljs.core.first(arglist__8198);
var f = cljs.core.first(cljs.core.next(arglist__8198));
var args = cljs.core.rest(cljs.core.next(arglist__8198));
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
var not_EQ___8199 = (function (x){
return false;
});
var not_EQ___8200 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8201 = (function() { 
var G__8203__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8203__delegate.call(this, x, y, more);
};
G__8203.cljs$lang$maxFixedArity = 2;
G__8203.cljs$lang$applyTo = (function (arglist__8204){
var x = cljs.core.first(arglist__8204);
var y = cljs.core.first(cljs.core.next(arglist__8204));
var more = cljs.core.rest(cljs.core.next(arglist__8204));
return G__8203__delegate.call(this, x, y, more);
});
return G__8203;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8199.call(this,x);
case  2 :
return not_EQ___8200.call(this,x,y);
default:
return not_EQ___8201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8201.cljs$lang$applyTo;
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
var G__8205 = pred;
var G__8206 = cljs.core.next.call(null,coll);
pred = G__8205;
coll = G__8206;
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
{var or__3548__auto____8207 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8207))
{return or__3548__auto____8207;
} else
{{
var G__8208 = pred;
var G__8209 = cljs.core.next.call(null,coll);
pred = G__8208;
coll = G__8209;
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
var G__8210 = null;
var G__8210__8211 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8210__8212 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8210__8213 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8210__8214 = (function() { 
var G__8216__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8216 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8216__delegate.call(this, x, y, zs);
};
G__8216.cljs$lang$maxFixedArity = 2;
G__8216.cljs$lang$applyTo = (function (arglist__8217){
var x = cljs.core.first(arglist__8217);
var y = cljs.core.first(cljs.core.next(arglist__8217));
var zs = cljs.core.rest(cljs.core.next(arglist__8217));
return G__8216__delegate.call(this, x, y, zs);
});
return G__8216;
})()
;
G__8210 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8210__8211.call(this);
case  1 :
return G__8210__8212.call(this,x);
case  2 :
return G__8210__8213.call(this,x,y);
default:
return G__8210__8214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8210.cljs$lang$maxFixedArity = 2;
G__8210.cljs$lang$applyTo = G__8210__8214.cljs$lang$applyTo;
return G__8210;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8218__delegate = function (args){
return x;
};
var G__8218 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8218__delegate.call(this, args);
};
G__8218.cljs$lang$maxFixedArity = 0;
G__8218.cljs$lang$applyTo = (function (arglist__8219){
var args = cljs.core.seq( arglist__8219 );;
return G__8218__delegate.call(this, args);
});
return G__8218;
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
var comp__8223 = (function (){
return cljs.core.identity;
});
var comp__8224 = (function (f){
return f;
});
var comp__8225 = (function (f,g){
return (function() {
var G__8229 = null;
var G__8229__8230 = (function (){
return f.call(null,g.call(null));
});
var G__8229__8231 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8229__8232 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8229__8233 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8229__8234 = (function() { 
var G__8236__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8236 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8236__delegate.call(this, x, y, z, args);
};
G__8236.cljs$lang$maxFixedArity = 3;
G__8236.cljs$lang$applyTo = (function (arglist__8237){
var x = cljs.core.first(arglist__8237);
var y = cljs.core.first(cljs.core.next(arglist__8237));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8237)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8237)));
return G__8236__delegate.call(this, x, y, z, args);
});
return G__8236;
})()
;
G__8229 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8229__8230.call(this);
case  1 :
return G__8229__8231.call(this,x);
case  2 :
return G__8229__8232.call(this,x,y);
case  3 :
return G__8229__8233.call(this,x,y,z);
default:
return G__8229__8234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8229.cljs$lang$maxFixedArity = 3;
G__8229.cljs$lang$applyTo = G__8229__8234.cljs$lang$applyTo;
return G__8229;
})()
});
var comp__8226 = (function (f,g,h){
return (function() {
var G__8238 = null;
var G__8238__8239 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8238__8240 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8238__8241 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8238__8242 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8238__8243 = (function() { 
var G__8245__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8245 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8245__delegate.call(this, x, y, z, args);
};
G__8245.cljs$lang$maxFixedArity = 3;
G__8245.cljs$lang$applyTo = (function (arglist__8246){
var x = cljs.core.first(arglist__8246);
var y = cljs.core.first(cljs.core.next(arglist__8246));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8246)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8246)));
return G__8245__delegate.call(this, x, y, z, args);
});
return G__8245;
})()
;
G__8238 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8238__8239.call(this);
case  1 :
return G__8238__8240.call(this,x);
case  2 :
return G__8238__8241.call(this,x,y);
case  3 :
return G__8238__8242.call(this,x,y,z);
default:
return G__8238__8243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8238.cljs$lang$maxFixedArity = 3;
G__8238.cljs$lang$applyTo = G__8238__8243.cljs$lang$applyTo;
return G__8238;
})()
});
var comp__8227 = (function() { 
var G__8247__delegate = function (f1,f2,f3,fs){
var fs__8220 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8248__delegate = function (args){
var ret__8221 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8220),args);
var fs__8222 = cljs.core.next.call(null,fs__8220);

while(true){
if(cljs.core.truth_(fs__8222))
{{
var G__8249 = cljs.core.first.call(null,fs__8222).call(null,ret__8221);
var G__8250 = cljs.core.next.call(null,fs__8222);
ret__8221 = G__8249;
fs__8222 = G__8250;
continue;
}
} else
{return ret__8221;
}
break;
}
};
var G__8248 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8248__delegate.call(this, args);
};
G__8248.cljs$lang$maxFixedArity = 0;
G__8248.cljs$lang$applyTo = (function (arglist__8251){
var args = cljs.core.seq( arglist__8251 );;
return G__8248__delegate.call(this, args);
});
return G__8248;
})()
;
};
var G__8247 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8247__delegate.call(this, f1, f2, f3, fs);
};
G__8247.cljs$lang$maxFixedArity = 3;
G__8247.cljs$lang$applyTo = (function (arglist__8252){
var f1 = cljs.core.first(arglist__8252);
var f2 = cljs.core.first(cljs.core.next(arglist__8252));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8252)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8252)));
return G__8247__delegate.call(this, f1, f2, f3, fs);
});
return G__8247;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8223.call(this);
case  1 :
return comp__8224.call(this,f1);
case  2 :
return comp__8225.call(this,f1,f2);
case  3 :
return comp__8226.call(this,f1,f2,f3);
default:
return comp__8227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8227.cljs$lang$applyTo;
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
var partial__8253 = (function (f,arg1){
return (function() { 
var G__8258__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8258 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8258__delegate.call(this, args);
};
G__8258.cljs$lang$maxFixedArity = 0;
G__8258.cljs$lang$applyTo = (function (arglist__8259){
var args = cljs.core.seq( arglist__8259 );;
return G__8258__delegate.call(this, args);
});
return G__8258;
})()
;
});
var partial__8254 = (function (f,arg1,arg2){
return (function() { 
var G__8260__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8260 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8260__delegate.call(this, args);
};
G__8260.cljs$lang$maxFixedArity = 0;
G__8260.cljs$lang$applyTo = (function (arglist__8261){
var args = cljs.core.seq( arglist__8261 );;
return G__8260__delegate.call(this, args);
});
return G__8260;
})()
;
});
var partial__8255 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8262__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8262 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8262__delegate.call(this, args);
};
G__8262.cljs$lang$maxFixedArity = 0;
G__8262.cljs$lang$applyTo = (function (arglist__8263){
var args = cljs.core.seq( arglist__8263 );;
return G__8262__delegate.call(this, args);
});
return G__8262;
})()
;
});
var partial__8256 = (function() { 
var G__8264__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8265__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8265 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8265__delegate.call(this, args);
};
G__8265.cljs$lang$maxFixedArity = 0;
G__8265.cljs$lang$applyTo = (function (arglist__8266){
var args = cljs.core.seq( arglist__8266 );;
return G__8265__delegate.call(this, args);
});
return G__8265;
})()
;
};
var G__8264 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8264__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8264.cljs$lang$maxFixedArity = 4;
G__8264.cljs$lang$applyTo = (function (arglist__8267){
var f = cljs.core.first(arglist__8267);
var arg1 = cljs.core.first(cljs.core.next(arglist__8267));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8267)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8267))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8267))));
return G__8264__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8264;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8253.call(this,f,arg1);
case  3 :
return partial__8254.call(this,f,arg1,arg2);
case  4 :
return partial__8255.call(this,f,arg1,arg2,arg3);
default:
return partial__8256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8256.cljs$lang$applyTo;
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
var fnil__8268 = (function (f,x){
return (function() {
var G__8272 = null;
var G__8272__8273 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8272__8274 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8272__8275 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8272__8276 = (function() { 
var G__8278__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8278 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8278__delegate.call(this, a, b, c, ds);
};
G__8278.cljs$lang$maxFixedArity = 3;
G__8278.cljs$lang$applyTo = (function (arglist__8279){
var a = cljs.core.first(arglist__8279);
var b = cljs.core.first(cljs.core.next(arglist__8279));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8279)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8279)));
return G__8278__delegate.call(this, a, b, c, ds);
});
return G__8278;
})()
;
G__8272 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8272__8273.call(this,a);
case  2 :
return G__8272__8274.call(this,a,b);
case  3 :
return G__8272__8275.call(this,a,b,c);
default:
return G__8272__8276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8272.cljs$lang$maxFixedArity = 3;
G__8272.cljs$lang$applyTo = G__8272__8276.cljs$lang$applyTo;
return G__8272;
})()
});
var fnil__8269 = (function (f,x,y){
return (function() {
var G__8280 = null;
var G__8280__8281 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8280__8282 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8280__8283 = (function() { 
var G__8285__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8285 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8285__delegate.call(this, a, b, c, ds);
};
G__8285.cljs$lang$maxFixedArity = 3;
G__8285.cljs$lang$applyTo = (function (arglist__8286){
var a = cljs.core.first(arglist__8286);
var b = cljs.core.first(cljs.core.next(arglist__8286));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8286)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8286)));
return G__8285__delegate.call(this, a, b, c, ds);
});
return G__8285;
})()
;
G__8280 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8280__8281.call(this,a,b);
case  3 :
return G__8280__8282.call(this,a,b,c);
default:
return G__8280__8283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8280.cljs$lang$maxFixedArity = 3;
G__8280.cljs$lang$applyTo = G__8280__8283.cljs$lang$applyTo;
return G__8280;
})()
});
var fnil__8270 = (function (f,x,y,z){
return (function() {
var G__8287 = null;
var G__8287__8288 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8287__8289 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8287__8290 = (function() { 
var G__8292__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8292 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8292__delegate.call(this, a, b, c, ds);
};
G__8292.cljs$lang$maxFixedArity = 3;
G__8292.cljs$lang$applyTo = (function (arglist__8293){
var a = cljs.core.first(arglist__8293);
var b = cljs.core.first(cljs.core.next(arglist__8293));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8293)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8293)));
return G__8292__delegate.call(this, a, b, c, ds);
});
return G__8292;
})()
;
G__8287 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8287__8288.call(this,a,b);
case  3 :
return G__8287__8289.call(this,a,b,c);
default:
return G__8287__8290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8287.cljs$lang$maxFixedArity = 3;
G__8287.cljs$lang$applyTo = G__8287__8290.cljs$lang$applyTo;
return G__8287;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8268.call(this,f,x);
case  3 :
return fnil__8269.call(this,f,x,y);
case  4 :
return fnil__8270.call(this,f,x,y,z);
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
var mapi__8296 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8294 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8294))
{var s__8295 = temp__3698__auto____8294;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8295)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8295)));
} else
{return null;
}
})));
});

return mapi__8296.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8297))
{var s__8298 = temp__3698__auto____8297;

var x__8299 = f.call(null,cljs.core.first.call(null,s__8298));

if(cljs.core.truth_((x__8299 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8298));
} else
{return cljs.core.cons.call(null,x__8299,keep.call(null,f,cljs.core.rest.call(null,s__8298)));
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
var keepi__8309 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8306 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8306))
{var s__8307 = temp__3698__auto____8306;

var x__8308 = f.call(null,idx,cljs.core.first.call(null,s__8307));

if(cljs.core.truth_((x__8308 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8307));
} else
{return cljs.core.cons.call(null,x__8308,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8307)));
}
} else
{return null;
}
})));
});

return keepi__8309.call(null,0,coll);
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
var every_pred__8354 = (function (p){
return (function() {
var ep1 = null;
var ep1__8359 = (function (){
return true;
});
var ep1__8360 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8361 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8316 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8316))
{return p.call(null,y);
} else
{return and__3546__auto____8316;
}
})());
});
var ep1__8362 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8317 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8317))
{var and__3546__auto____8318 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8318))
{return p.call(null,z);
} else
{return and__3546__auto____8318;
}
} else
{return and__3546__auto____8317;
}
})());
});
var ep1__8363 = (function() { 
var G__8365__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8319 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8319))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8319;
}
})());
};
var G__8365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8365__delegate.call(this, x, y, z, args);
};
G__8365.cljs$lang$maxFixedArity = 3;
G__8365.cljs$lang$applyTo = (function (arglist__8366){
var x = cljs.core.first(arglist__8366);
var y = cljs.core.first(cljs.core.next(arglist__8366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8366)));
return G__8365__delegate.call(this, x, y, z, args);
});
return G__8365;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8359.call(this);
case  1 :
return ep1__8360.call(this,x);
case  2 :
return ep1__8361.call(this,x,y);
case  3 :
return ep1__8362.call(this,x,y,z);
default:
return ep1__8363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8363.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8355 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8367 = (function (){
return true;
});
var ep2__8368 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8320 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8320))
{return p2.call(null,x);
} else
{return and__3546__auto____8320;
}
})());
});
var ep2__8369 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8321 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8321))
{var and__3546__auto____8322 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8322))
{var and__3546__auto____8323 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8323))
{return p2.call(null,y);
} else
{return and__3546__auto____8323;
}
} else
{return and__3546__auto____8322;
}
} else
{return and__3546__auto____8321;
}
})());
});
var ep2__8370 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8324 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8324))
{var and__3546__auto____8325 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8325))
{var and__3546__auto____8326 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8326))
{var and__3546__auto____8327 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8327))
{var and__3546__auto____8328 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8328))
{return p2.call(null,z);
} else
{return and__3546__auto____8328;
}
} else
{return and__3546__auto____8327;
}
} else
{return and__3546__auto____8326;
}
} else
{return and__3546__auto____8325;
}
} else
{return and__3546__auto____8324;
}
})());
});
var ep2__8371 = (function() { 
var G__8373__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8329 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8329))
{return cljs.core.every_QMARK_.call(null,(function (p1__8300_SHARP_){
var and__3546__auto____8330 = p1.call(null,p1__8300_SHARP_);

if(cljs.core.truth_(and__3546__auto____8330))
{return p2.call(null,p1__8300_SHARP_);
} else
{return and__3546__auto____8330;
}
}),args);
} else
{return and__3546__auto____8329;
}
})());
};
var G__8373 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8373__delegate.call(this, x, y, z, args);
};
G__8373.cljs$lang$maxFixedArity = 3;
G__8373.cljs$lang$applyTo = (function (arglist__8374){
var x = cljs.core.first(arglist__8374);
var y = cljs.core.first(cljs.core.next(arglist__8374));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8374)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8374)));
return G__8373__delegate.call(this, x, y, z, args);
});
return G__8373;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8367.call(this);
case  1 :
return ep2__8368.call(this,x);
case  2 :
return ep2__8369.call(this,x,y);
case  3 :
return ep2__8370.call(this,x,y,z);
default:
return ep2__8371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8371.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8356 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8375 = (function (){
return true;
});
var ep3__8376 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8331 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8331))
{var and__3546__auto____8332 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8332))
{return p3.call(null,x);
} else
{return and__3546__auto____8332;
}
} else
{return and__3546__auto____8331;
}
})());
});
var ep3__8377 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8333 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8333))
{var and__3546__auto____8334 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8334))
{var and__3546__auto____8335 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8335))
{var and__3546__auto____8336 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8336))
{var and__3546__auto____8337 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8337))
{return p3.call(null,y);
} else
{return and__3546__auto____8337;
}
} else
{return and__3546__auto____8336;
}
} else
{return and__3546__auto____8335;
}
} else
{return and__3546__auto____8334;
}
} else
{return and__3546__auto____8333;
}
})());
});
var ep3__8378 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8338 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8338))
{var and__3546__auto____8339 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8339))
{var and__3546__auto____8340 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8340))
{var and__3546__auto____8341 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8341))
{var and__3546__auto____8342 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8342))
{var and__3546__auto____8343 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8343))
{var and__3546__auto____8344 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8344))
{var and__3546__auto____8345 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8345))
{return p3.call(null,z);
} else
{return and__3546__auto____8345;
}
} else
{return and__3546__auto____8344;
}
} else
{return and__3546__auto____8343;
}
} else
{return and__3546__auto____8342;
}
} else
{return and__3546__auto____8341;
}
} else
{return and__3546__auto____8340;
}
} else
{return and__3546__auto____8339;
}
} else
{return and__3546__auto____8338;
}
})());
});
var ep3__8379 = (function() { 
var G__8381__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8346 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8346))
{return cljs.core.every_QMARK_.call(null,(function (p1__8301_SHARP_){
var and__3546__auto____8347 = p1.call(null,p1__8301_SHARP_);

if(cljs.core.truth_(and__3546__auto____8347))
{var and__3546__auto____8348 = p2.call(null,p1__8301_SHARP_);

if(cljs.core.truth_(and__3546__auto____8348))
{return p3.call(null,p1__8301_SHARP_);
} else
{return and__3546__auto____8348;
}
} else
{return and__3546__auto____8347;
}
}),args);
} else
{return and__3546__auto____8346;
}
})());
};
var G__8381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8381__delegate.call(this, x, y, z, args);
};
G__8381.cljs$lang$maxFixedArity = 3;
G__8381.cljs$lang$applyTo = (function (arglist__8382){
var x = cljs.core.first(arglist__8382);
var y = cljs.core.first(cljs.core.next(arglist__8382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8382)));
return G__8381__delegate.call(this, x, y, z, args);
});
return G__8381;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8375.call(this);
case  1 :
return ep3__8376.call(this,x);
case  2 :
return ep3__8377.call(this,x,y);
case  3 :
return ep3__8378.call(this,x,y,z);
default:
return ep3__8379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8379.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8357 = (function() { 
var G__8383__delegate = function (p1,p2,p3,ps){
var ps__8349 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8384 = (function (){
return true;
});
var epn__8385 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8302_SHARP_){
return p1__8302_SHARP_.call(null,x);
}),ps__8349);
});
var epn__8386 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8303_SHARP_){
var and__3546__auto____8350 = p1__8303_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8350))
{return p1__8303_SHARP_.call(null,y);
} else
{return and__3546__auto____8350;
}
}),ps__8349);
});
var epn__8387 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8304_SHARP_){
var and__3546__auto____8351 = p1__8304_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8351))
{var and__3546__auto____8352 = p1__8304_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8352))
{return p1__8304_SHARP_.call(null,z);
} else
{return and__3546__auto____8352;
}
} else
{return and__3546__auto____8351;
}
}),ps__8349);
});
var epn__8388 = (function() { 
var G__8390__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8353 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8353))
{return cljs.core.every_QMARK_.call(null,(function (p1__8305_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8305_SHARP_,args);
}),ps__8349);
} else
{return and__3546__auto____8353;
}
})());
};
var G__8390 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8390__delegate.call(this, x, y, z, args);
};
G__8390.cljs$lang$maxFixedArity = 3;
G__8390.cljs$lang$applyTo = (function (arglist__8391){
var x = cljs.core.first(arglist__8391);
var y = cljs.core.first(cljs.core.next(arglist__8391));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8391)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8391)));
return G__8390__delegate.call(this, x, y, z, args);
});
return G__8390;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8384.call(this);
case  1 :
return epn__8385.call(this,x);
case  2 :
return epn__8386.call(this,x,y);
case  3 :
return epn__8387.call(this,x,y,z);
default:
return epn__8388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8388.cljs$lang$applyTo;
return epn;
})()
};
var G__8383 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8383__delegate.call(this, p1, p2, p3, ps);
};
G__8383.cljs$lang$maxFixedArity = 3;
G__8383.cljs$lang$applyTo = (function (arglist__8392){
var p1 = cljs.core.first(arglist__8392);
var p2 = cljs.core.first(cljs.core.next(arglist__8392));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8392)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8392)));
return G__8383__delegate.call(this, p1, p2, p3, ps);
});
return G__8383;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8354.call(this,p1);
case  2 :
return every_pred__8355.call(this,p1,p2);
case  3 :
return every_pred__8356.call(this,p1,p2,p3);
default:
return every_pred__8357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8357.cljs$lang$applyTo;
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
var some_fn__8432 = (function (p){
return (function() {
var sp1 = null;
var sp1__8437 = (function (){
return null;
});
var sp1__8438 = (function (x){
return p.call(null,x);
});
var sp1__8439 = (function (x,y){
var or__3548__auto____8394 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8394))
{return or__3548__auto____8394;
} else
{return p.call(null,y);
}
});
var sp1__8440 = (function (x,y,z){
var or__3548__auto____8395 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8395))
{return or__3548__auto____8395;
} else
{var or__3548__auto____8396 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8396))
{return or__3548__auto____8396;
} else
{return p.call(null,z);
}
}
});
var sp1__8441 = (function() { 
var G__8443__delegate = function (x,y,z,args){
var or__3548__auto____8397 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8397))
{return or__3548__auto____8397;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8443 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8443__delegate.call(this, x, y, z, args);
};
G__8443.cljs$lang$maxFixedArity = 3;
G__8443.cljs$lang$applyTo = (function (arglist__8444){
var x = cljs.core.first(arglist__8444);
var y = cljs.core.first(cljs.core.next(arglist__8444));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8444)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8444)));
return G__8443__delegate.call(this, x, y, z, args);
});
return G__8443;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8437.call(this);
case  1 :
return sp1__8438.call(this,x);
case  2 :
return sp1__8439.call(this,x,y);
case  3 :
return sp1__8440.call(this,x,y,z);
default:
return sp1__8441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8441.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8433 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8445 = (function (){
return null;
});
var sp2__8446 = (function (x){
var or__3548__auto____8398 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8398))
{return or__3548__auto____8398;
} else
{return p2.call(null,x);
}
});
var sp2__8447 = (function (x,y){
var or__3548__auto____8399 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8399))
{return or__3548__auto____8399;
} else
{var or__3548__auto____8400 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8400))
{return or__3548__auto____8400;
} else
{var or__3548__auto____8401 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8401))
{return or__3548__auto____8401;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8448 = (function (x,y,z){
var or__3548__auto____8402 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8402))
{return or__3548__auto____8402;
} else
{var or__3548__auto____8403 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8403))
{return or__3548__auto____8403;
} else
{var or__3548__auto____8404 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8404))
{return or__3548__auto____8404;
} else
{var or__3548__auto____8405 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8405))
{return or__3548__auto____8405;
} else
{var or__3548__auto____8406 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8406))
{return or__3548__auto____8406;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8449 = (function() { 
var G__8451__delegate = function (x,y,z,args){
var or__3548__auto____8407 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8407))
{return or__3548__auto____8407;
} else
{return cljs.core.some.call(null,(function (p1__8310_SHARP_){
var or__3548__auto____8408 = p1.call(null,p1__8310_SHARP_);

if(cljs.core.truth_(or__3548__auto____8408))
{return or__3548__auto____8408;
} else
{return p2.call(null,p1__8310_SHARP_);
}
}),args);
}
};
var G__8451 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8451__delegate.call(this, x, y, z, args);
};
G__8451.cljs$lang$maxFixedArity = 3;
G__8451.cljs$lang$applyTo = (function (arglist__8452){
var x = cljs.core.first(arglist__8452);
var y = cljs.core.first(cljs.core.next(arglist__8452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8452)));
return G__8451__delegate.call(this, x, y, z, args);
});
return G__8451;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8445.call(this);
case  1 :
return sp2__8446.call(this,x);
case  2 :
return sp2__8447.call(this,x,y);
case  3 :
return sp2__8448.call(this,x,y,z);
default:
return sp2__8449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8449.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8434 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8453 = (function (){
return null;
});
var sp3__8454 = (function (x){
var or__3548__auto____8409 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8409))
{return or__3548__auto____8409;
} else
{var or__3548__auto____8410 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8410))
{return or__3548__auto____8410;
} else
{return p3.call(null,x);
}
}
});
var sp3__8455 = (function (x,y){
var or__3548__auto____8411 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8411))
{return or__3548__auto____8411;
} else
{var or__3548__auto____8412 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8412))
{return or__3548__auto____8412;
} else
{var or__3548__auto____8413 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8413))
{return or__3548__auto____8413;
} else
{var or__3548__auto____8414 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8414))
{return or__3548__auto____8414;
} else
{var or__3548__auto____8415 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8415))
{return or__3548__auto____8415;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8456 = (function (x,y,z){
var or__3548__auto____8416 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8416))
{return or__3548__auto____8416;
} else
{var or__3548__auto____8417 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8417))
{return or__3548__auto____8417;
} else
{var or__3548__auto____8418 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8418))
{return or__3548__auto____8418;
} else
{var or__3548__auto____8419 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8419))
{return or__3548__auto____8419;
} else
{var or__3548__auto____8420 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8420))
{return or__3548__auto____8420;
} else
{var or__3548__auto____8421 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8421))
{return or__3548__auto____8421;
} else
{var or__3548__auto____8422 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8422))
{return or__3548__auto____8422;
} else
{var or__3548__auto____8423 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8423))
{return or__3548__auto____8423;
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
var sp3__8457 = (function() { 
var G__8459__delegate = function (x,y,z,args){
var or__3548__auto____8424 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8424))
{return or__3548__auto____8424;
} else
{return cljs.core.some.call(null,(function (p1__8311_SHARP_){
var or__3548__auto____8425 = p1.call(null,p1__8311_SHARP_);

if(cljs.core.truth_(or__3548__auto____8425))
{return or__3548__auto____8425;
} else
{var or__3548__auto____8426 = p2.call(null,p1__8311_SHARP_);

if(cljs.core.truth_(or__3548__auto____8426))
{return or__3548__auto____8426;
} else
{return p3.call(null,p1__8311_SHARP_);
}
}
}),args);
}
};
var G__8459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8459__delegate.call(this, x, y, z, args);
};
G__8459.cljs$lang$maxFixedArity = 3;
G__8459.cljs$lang$applyTo = (function (arglist__8460){
var x = cljs.core.first(arglist__8460);
var y = cljs.core.first(cljs.core.next(arglist__8460));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8460)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8460)));
return G__8459__delegate.call(this, x, y, z, args);
});
return G__8459;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8453.call(this);
case  1 :
return sp3__8454.call(this,x);
case  2 :
return sp3__8455.call(this,x,y);
case  3 :
return sp3__8456.call(this,x,y,z);
default:
return sp3__8457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8457.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8435 = (function() { 
var G__8461__delegate = function (p1,p2,p3,ps){
var ps__8427 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8462 = (function (){
return null;
});
var spn__8463 = (function (x){
return cljs.core.some.call(null,(function (p1__8312_SHARP_){
return p1__8312_SHARP_.call(null,x);
}),ps__8427);
});
var spn__8464 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8313_SHARP_){
var or__3548__auto____8428 = p1__8313_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8428))
{return or__3548__auto____8428;
} else
{return p1__8313_SHARP_.call(null,y);
}
}),ps__8427);
});
var spn__8465 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8314_SHARP_){
var or__3548__auto____8429 = p1__8314_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8429))
{return or__3548__auto____8429;
} else
{var or__3548__auto____8430 = p1__8314_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8430))
{return or__3548__auto____8430;
} else
{return p1__8314_SHARP_.call(null,z);
}
}
}),ps__8427);
});
var spn__8466 = (function() { 
var G__8468__delegate = function (x,y,z,args){
var or__3548__auto____8431 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8431))
{return or__3548__auto____8431;
} else
{return cljs.core.some.call(null,(function (p1__8315_SHARP_){
return cljs.core.some.call(null,p1__8315_SHARP_,args);
}),ps__8427);
}
};
var G__8468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8468__delegate.call(this, x, y, z, args);
};
G__8468.cljs$lang$maxFixedArity = 3;
G__8468.cljs$lang$applyTo = (function (arglist__8469){
var x = cljs.core.first(arglist__8469);
var y = cljs.core.first(cljs.core.next(arglist__8469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8469)));
return G__8468__delegate.call(this, x, y, z, args);
});
return G__8468;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8462.call(this);
case  1 :
return spn__8463.call(this,x);
case  2 :
return spn__8464.call(this,x,y);
case  3 :
return spn__8465.call(this,x,y,z);
default:
return spn__8466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8466.cljs$lang$applyTo;
return spn;
})()
};
var G__8461 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8461__delegate.call(this, p1, p2, p3, ps);
};
G__8461.cljs$lang$maxFixedArity = 3;
G__8461.cljs$lang$applyTo = (function (arglist__8470){
var p1 = cljs.core.first(arglist__8470);
var p2 = cljs.core.first(cljs.core.next(arglist__8470));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8470)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8470)));
return G__8461__delegate.call(this, p1, p2, p3, ps);
});
return G__8461;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8432.call(this,p1);
case  2 :
return some_fn__8433.call(this,p1,p2);
case  3 :
return some_fn__8434.call(this,p1,p2,p3);
default:
return some_fn__8435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8435.cljs$lang$applyTo;
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
var map__8483 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8471 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8471))
{var s__8472 = temp__3698__auto____8471;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8472)),map.call(null,f,cljs.core.rest.call(null,s__8472)));
} else
{return null;
}
})));
});
var map__8484 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8473 = cljs.core.seq.call(null,c1);
var s2__8474 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8475 = s1__8473;

if(cljs.core.truth_(and__3546__auto____8475))
{return s2__8474;
} else
{return and__3546__auto____8475;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8473),cljs.core.first.call(null,s2__8474)),map.call(null,f,cljs.core.rest.call(null,s1__8473),cljs.core.rest.call(null,s2__8474)));
} else
{return null;
}
})));
});
var map__8485 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8476 = cljs.core.seq.call(null,c1);
var s2__8477 = cljs.core.seq.call(null,c2);
var s3__8478 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8479 = s1__8476;

if(cljs.core.truth_(and__3546__auto____8479))
{var and__3546__auto____8480 = s2__8477;

if(cljs.core.truth_(and__3546__auto____8480))
{return s3__8478;
} else
{return and__3546__auto____8480;
}
} else
{return and__3546__auto____8479;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8476),cljs.core.first.call(null,s2__8477),cljs.core.first.call(null,s3__8478)),map.call(null,f,cljs.core.rest.call(null,s1__8476),cljs.core.rest.call(null,s2__8477),cljs.core.rest.call(null,s3__8478)));
} else
{return null;
}
})));
});
var map__8486 = (function() { 
var G__8488__delegate = function (f,c1,c2,c3,colls){
var step__8482 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8481 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8481)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8481),step.call(null,map.call(null,cljs.core.rest,ss__8481)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8393_SHARP_){
return cljs.core.apply.call(null,f,p1__8393_SHARP_);
}),step__8482.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8488 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8488__delegate.call(this, f, c1, c2, c3, colls);
};
G__8488.cljs$lang$maxFixedArity = 4;
G__8488.cljs$lang$applyTo = (function (arglist__8489){
var f = cljs.core.first(arglist__8489);
var c1 = cljs.core.first(cljs.core.next(arglist__8489));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8489)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8489))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8489))));
return G__8488__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8488;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8483.call(this,f,c1);
case  3 :
return map__8484.call(this,f,c1,c2);
case  4 :
return map__8485.call(this,f,c1,c2,c3);
default:
return map__8486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8486.cljs$lang$applyTo;
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
{var temp__3698__auto____8490 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8490))
{var s__8491 = temp__3698__auto____8490;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8491),take.call(null,(n - 1),cljs.core.rest.call(null,s__8491)));
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
var step__8494 = (function (n,coll){
while(true){
var s__8492 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8493 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8493))
{return s__8492;
} else
{return and__3546__auto____8493;
}
})()))
{{
var G__8495 = (n - 1);
var G__8496 = cljs.core.rest.call(null,s__8492);
n = G__8495;
coll = G__8496;
continue;
}
} else
{return s__8492;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8494.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8497 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8498 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8497.call(this,n);
case  2 :
return drop_last__8498.call(this,n,s);
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
var s__8500 = cljs.core.seq.call(null,coll);
var lead__8501 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8501))
{{
var G__8502 = cljs.core.next.call(null,s__8500);
var G__8503 = cljs.core.next.call(null,lead__8501);
s__8500 = G__8502;
lead__8501 = G__8503;
continue;
}
} else
{return s__8500;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8506 = (function (pred,coll){
while(true){
var s__8504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8505 = s__8504;

if(cljs.core.truth_(and__3546__auto____8505))
{return pred.call(null,cljs.core.first.call(null,s__8504));
} else
{return and__3546__auto____8505;
}
})()))
{{
var G__8507 = pred;
var G__8508 = cljs.core.rest.call(null,s__8504);
pred = G__8507;
coll = G__8508;
continue;
}
} else
{return s__8504;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8506.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8509))
{var s__8510 = temp__3698__auto____8509;

return cljs.core.concat.call(null,s__8510,cycle.call(null,s__8510));
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
var repeat__8511 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8512 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8511.call(this,n);
case  2 :
return repeat__8512.call(this,n,x);
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
var repeatedly__8514 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8515 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8514.call(this,n);
case  2 :
return repeatedly__8515.call(this,n,f);
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
var interleave__8521 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8517 = cljs.core.seq.call(null,c1);
var s2__8518 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8519 = s1__8517;

if(cljs.core.truth_(and__3546__auto____8519))
{return s2__8518;
} else
{return and__3546__auto____8519;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8517),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8518),interleave.call(null,cljs.core.rest.call(null,s1__8517),cljs.core.rest.call(null,s2__8518))));
} else
{return null;
}
})));
});
var interleave__8522 = (function() { 
var G__8524__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8520 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8520)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8520),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8520)));
} else
{return null;
}
})));
};
var G__8524 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8524__delegate.call(this, c1, c2, colls);
};
G__8524.cljs$lang$maxFixedArity = 2;
G__8524.cljs$lang$applyTo = (function (arglist__8525){
var c1 = cljs.core.first(arglist__8525);
var c2 = cljs.core.first(cljs.core.next(arglist__8525));
var colls = cljs.core.rest(cljs.core.next(arglist__8525));
return G__8524__delegate.call(this, c1, c2, colls);
});
return G__8524;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8521.call(this,c1,c2);
default:
return interleave__8522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8522.cljs$lang$applyTo;
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
var cat__8528 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8526))
{var coll__8527 = temp__3695__auto____8526;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8527),cat.call(null,cljs.core.rest.call(null,coll__8527),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8528.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8529 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8530 = (function() { 
var G__8532__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8532 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8532__delegate.call(this, f, coll, colls);
};
G__8532.cljs$lang$maxFixedArity = 2;
G__8532.cljs$lang$applyTo = (function (arglist__8533){
var f = cljs.core.first(arglist__8533);
var coll = cljs.core.first(cljs.core.next(arglist__8533));
var colls = cljs.core.rest(cljs.core.next(arglist__8533));
return G__8532__delegate.call(this, f, coll, colls);
});
return G__8532;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8529.call(this,f,coll);
default:
return mapcat__8530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8530.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8534))
{var s__8535 = temp__3698__auto____8534;

var f__8536 = cljs.core.first.call(null,s__8535);
var r__8537 = cljs.core.rest.call(null,s__8535);

if(cljs.core.truth_(pred.call(null,f__8536)))
{return cljs.core.cons.call(null,f__8536,filter.call(null,pred,r__8537));
} else
{return filter.call(null,pred,r__8537);
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
var walk__8539 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8539.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8538_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8538_SHARP_));
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
var partition__8546 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8547 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8540 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8540))
{var s__8541 = temp__3698__auto____8540;

var p__8542 = cljs.core.take.call(null,n,s__8541);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8542))))
{return cljs.core.cons.call(null,p__8542,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8541)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8548 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8543 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8543))
{var s__8544 = temp__3698__auto____8543;

var p__8545 = cljs.core.take.call(null,n,s__8544);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8545))))
{return cljs.core.cons.call(null,p__8545,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8544)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8545,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8546.call(this,n,step);
case  3 :
return partition__8547.call(this,n,step,pad);
case  4 :
return partition__8548.call(this,n,step,pad,coll);
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
var get_in__8554 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8555 = (function (m,ks,not_found){
var sentinel__8550 = cljs.core.lookup_sentinel;
var m__8551 = m;
var ks__8552 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8552))
{var m__8553 = cljs.core.get.call(null,m__8551,cljs.core.first.call(null,ks__8552),sentinel__8550);

if(cljs.core.truth_((sentinel__8550 === m__8553)))
{return not_found;
} else
{{
var G__8557 = sentinel__8550;
var G__8558 = m__8553;
var G__8559 = cljs.core.next.call(null,ks__8552);
sentinel__8550 = G__8557;
m__8551 = G__8558;
ks__8552 = G__8559;
continue;
}
}
} else
{return m__8551;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8554.call(this,m,ks);
case  3 :
return get_in__8555.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8560,v){
var vec__8561__8562 = p__8560;
var k__8563 = cljs.core.nth.call(null,vec__8561__8562,0,null);
var ks__8564 = cljs.core.nthnext.call(null,vec__8561__8562,1);

if(cljs.core.truth_(ks__8564))
{return cljs.core.assoc.call(null,m,k__8563,assoc_in.call(null,cljs.core.get.call(null,m,k__8563),ks__8564,v));
} else
{return cljs.core.assoc.call(null,m,k__8563,v);
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
var update_in__delegate = function (m,p__8565,f,args){
var vec__8566__8567 = p__8565;
var k__8568 = cljs.core.nth.call(null,vec__8566__8567,0,null);
var ks__8569 = cljs.core.nthnext.call(null,vec__8566__8567,1);

if(cljs.core.truth_(ks__8569))
{return cljs.core.assoc.call(null,m,k__8568,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8568),ks__8569,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8568,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8568),args));
}
};
var update_in = function (m,p__8565,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8565, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8570){
var m = cljs.core.first(arglist__8570);
var p__8565 = cljs.core.first(cljs.core.next(arglist__8570));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8570)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8570)));
return update_in__delegate.call(this, m, p__8565, f, args);
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
var this__8571 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8604 = null;
var G__8604__8605 = (function (coll,k){
var this__8572 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8604__8606 = (function (coll,k,not_found){
var this__8573 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8604 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8604__8605.call(this,coll,k);
case  3 :
return G__8604__8606.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8604;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8574 = this;
var new_array__8575 = cljs.core.aclone.call(null,this__8574.array);

(new_array__8575[k] = v);
return (new cljs.core.Vector(this__8574.meta,new_array__8575));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8608 = null;
var G__8608__8609 = (function (tsym8576,k){
var this__8578 = this;
var tsym8576__8579 = this;

var coll__8580 = tsym8576__8579;

return cljs.core._lookup.call(null,coll__8580,k);
});
var G__8608__8610 = (function (tsym8577,k,not_found){
var this__8581 = this;
var tsym8577__8582 = this;

var coll__8583 = tsym8577__8582;

return cljs.core._lookup.call(null,coll__8583,k,not_found);
});
G__8608 = function(tsym8577,k,not_found){
switch(arguments.length){
case  2 :
return G__8608__8609.call(this,tsym8577,k);
case  3 :
return G__8608__8610.call(this,tsym8577,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8608;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8584 = this;
var new_array__8585 = cljs.core.aclone.call(null,this__8584.array);

new_array__8585.push(o);
return (new cljs.core.Vector(this__8584.meta,new_array__8585));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8612 = null;
var G__8612__8613 = (function (v,f){
var this__8586 = this;
return cljs.core.ci_reduce.call(null,this__8586.array,f);
});
var G__8612__8614 = (function (v,f,start){
var this__8587 = this;
return cljs.core.ci_reduce.call(null,this__8587.array,f,start);
});
G__8612 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8612__8613.call(this,v,f);
case  3 :
return G__8612__8614.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8612;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8588 = this;
if(cljs.core.truth_((this__8588.array.length > 0)))
{var vector_seq__8589 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8588.array.length)))
{return cljs.core.cons.call(null,(this__8588.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8589.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8590 = this;
return this__8590.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8591 = this;
var count__8592 = this__8591.array.length;

if(cljs.core.truth_((count__8592 > 0)))
{return (this__8591.array[(count__8592 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8593 = this;
if(cljs.core.truth_((this__8593.array.length > 0)))
{var new_array__8594 = cljs.core.aclone.call(null,this__8593.array);

new_array__8594.pop();
return (new cljs.core.Vector(this__8593.meta,new_array__8594));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8595 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8596 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8597 = this;
return (new cljs.core.Vector(meta,this__8597.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8598 = this;
return this__8598.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8616 = null;
var G__8616__8617 = (function (coll,n){
var this__8599 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8600 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8600))
{return (n < this__8599.array.length);
} else
{return and__3546__auto____8600;
}
})()))
{return (this__8599.array[n]);
} else
{return null;
}
});
var G__8616__8618 = (function (coll,n,not_found){
var this__8601 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8602 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8602))
{return (n < this__8601.array.length);
} else
{return and__3546__auto____8602;
}
})()))
{return (this__8601.array[n]);
} else
{return not_found;
}
});
G__8616 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8616__8617.call(this,coll,n);
case  3 :
return G__8616__8618.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8616;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8603 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8603.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8620 = pv.cnt;

if(cljs.core.truth_((cnt__8620 < 32)))
{return 0;
} else
{return (((cnt__8620 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8621 = level;
var ret__8622 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8621)))
{return ret__8622;
} else
{var embed__8623 = ret__8622;
var r__8624 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8625 = (r__8624[0] = embed__8623);

{
var G__8626 = (ll__8621 - 5);
var G__8627 = r__8624;
ll__8621 = G__8626;
ret__8622 = G__8627;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8628 = cljs.core.aclone.call(null,parent);
var subidx__8629 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8628[subidx__8629] = tailnode);
return ret__8628;
} else
{var temp__3695__auto____8630 = (parent[subidx__8629]);

if(cljs.core.truth_(temp__3695__auto____8630))
{var child__8631 = temp__3695__auto____8630;

var node_to_insert__8632 = push_tail.call(null,pv,(level - 5),child__8631,tailnode);
var ___8633 = (ret__8628[subidx__8629] = node_to_insert__8632);

return ret__8628;
} else
{var node_to_insert__8634 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8635 = (ret__8628[subidx__8629] = node_to_insert__8634);

return ret__8628;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8636 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8636))
{return (i < pv.cnt);
} else
{return and__3546__auto____8636;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8637 = pv.root;
var level__8638 = pv.shift;

while(true){
if(cljs.core.truth_((level__8638 > 0)))
{{
var G__8639 = (node__8637[((i >> level__8638) & 31)]);
var G__8640 = (level__8638 - 5);
node__8637 = G__8639;
level__8638 = G__8640;
continue;
}
} else
{return node__8637;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8641 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8641[(i & 31)] = val);
return ret__8641;
} else
{var subidx__8642 = ((i >> level) & 31);
var ___8643 = (ret__8641[subidx__8642] = do_assoc.call(null,pv,(level - 5),(node[subidx__8642]),i,val));

return ret__8641;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8644 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8645 = pop_tail.call(null,pv,(level - 5),(node[subidx__8644]));

if(cljs.core.truth_((function (){var and__3546__auto____8646 = (new_child__8645 === null);

if(cljs.core.truth_(and__3546__auto____8646))
{return (subidx__8644 === 0);
} else
{return and__3546__auto____8646;
}
})()))
{return null;
} else
{var ret__8647 = cljs.core.aclone.call(null,node);
var ___8648 = (ret__8647[subidx__8644] = new_child__8645);

return ret__8647;
}
} else
{if(cljs.core.truth_((subidx__8644 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8649 = cljs.core.aclone.call(null,node);
var ___8650 = (ret__8649[subidx__8644] = null);

return ret__8649;
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
var this__8651 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8691 = null;
var G__8691__8692 = (function (coll,k){
var this__8652 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8691__8693 = (function (coll,k,not_found){
var this__8653 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8691 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8691__8692.call(this,coll,k);
case  3 :
return G__8691__8693.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8691;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8654 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8655 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8655))
{return (k < this__8654.cnt);
} else
{return and__3546__auto____8655;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8656 = cljs.core.aclone.call(null,this__8654.tail);

(new_tail__8656[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8654.meta,this__8654.cnt,this__8654.shift,this__8654.root,new_tail__8656));
} else
{return (new cljs.core.PersistentVector(this__8654.meta,this__8654.cnt,this__8654.shift,cljs.core.do_assoc.call(null,coll,this__8654.shift,this__8654.root,k,v),this__8654.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8654.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8654.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8695 = null;
var G__8695__8696 = (function (tsym8657,k){
var this__8659 = this;
var tsym8657__8660 = this;

var coll__8661 = tsym8657__8660;

return cljs.core._lookup.call(null,coll__8661,k);
});
var G__8695__8697 = (function (tsym8658,k,not_found){
var this__8662 = this;
var tsym8658__8663 = this;

var coll__8664 = tsym8658__8663;

return cljs.core._lookup.call(null,coll__8664,k,not_found);
});
G__8695 = function(tsym8658,k,not_found){
switch(arguments.length){
case  2 :
return G__8695__8696.call(this,tsym8658,k);
case  3 :
return G__8695__8697.call(this,tsym8658,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8695;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8665 = this;
if(cljs.core.truth_(((this__8665.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8666 = cljs.core.aclone.call(null,this__8665.tail);

new_tail__8666.push(o);
return (new cljs.core.PersistentVector(this__8665.meta,(this__8665.cnt + 1),this__8665.shift,this__8665.root,new_tail__8666));
} else
{var root_overflow_QMARK___8667 = ((this__8665.cnt >> 5) > (1 << this__8665.shift));
var new_shift__8668 = (cljs.core.truth_(root_overflow_QMARK___8667)?(this__8665.shift + 5):this__8665.shift);
var new_root__8670 = (cljs.core.truth_(root_overflow_QMARK___8667)?(function (){var n_r__8669 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8669[0] = this__8665.root);
(n_r__8669[1] = cljs.core.new_path.call(null,this__8665.shift,this__8665.tail));
return n_r__8669;
})():cljs.core.push_tail.call(null,coll,this__8665.shift,this__8665.root,this__8665.tail));

return (new cljs.core.PersistentVector(this__8665.meta,(this__8665.cnt + 1),new_shift__8668,new_root__8670,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8699 = null;
var G__8699__8700 = (function (v,f){
var this__8671 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8699__8701 = (function (v,f,start){
var this__8672 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8699 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8699__8700.call(this,v,f);
case  3 :
return G__8699__8701.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8699;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8673 = this;
if(cljs.core.truth_((this__8673.cnt > 0)))
{var vector_seq__8674 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8673.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8674.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8675 = this;
return this__8675.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8676 = this;
if(cljs.core.truth_((this__8676.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8676.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8677 = this;
if(cljs.core.truth_((this__8677.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8677.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8677.meta);
} else
{if(cljs.core.truth_((1 < (this__8677.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8677.meta,(this__8677.cnt - 1),this__8677.shift,this__8677.root,cljs.core.aclone.call(null,this__8677.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8678 = cljs.core.array_for.call(null,coll,(this__8677.cnt - 2));
var nr__8679 = cljs.core.pop_tail.call(null,this__8677.shift,this__8677.root);
var new_root__8680 = (cljs.core.truth_((nr__8679 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8679);
var cnt_1__8681 = (this__8677.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8682 = (5 < this__8677.shift);

if(cljs.core.truth_(and__3546__auto____8682))
{return ((new_root__8680[1]) === null);
} else
{return and__3546__auto____8682;
}
})()))
{return (new cljs.core.PersistentVector(this__8677.meta,cnt_1__8681,(this__8677.shift - 5),(new_root__8680[0]),new_tail__8678));
} else
{return (new cljs.core.PersistentVector(this__8677.meta,cnt_1__8681,this__8677.shift,new_root__8680,new_tail__8678));
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
var this__8683 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8684 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8685 = this;
return (new cljs.core.PersistentVector(meta,this__8685.cnt,this__8685.shift,this__8685.root,this__8685.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8686 = this;
return this__8686.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8703 = null;
var G__8703__8704 = (function (coll,n){
var this__8687 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8703__8705 = (function (coll,n,not_found){
var this__8688 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8689 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8689))
{return (n < this__8688.cnt);
} else
{return and__3546__auto____8689;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8703 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8703__8704.call(this,coll,n);
case  3 :
return G__8703__8705.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8703;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8690 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8690.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8707){
var args = cljs.core.seq( arglist__8707 );;
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
var this__8708 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8736 = null;
var G__8736__8737 = (function (coll,k){
var this__8709 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8736__8738 = (function (coll,k,not_found){
var this__8710 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8736 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8736__8737.call(this,coll,k);
case  3 :
return G__8736__8738.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8736;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8711 = this;
var v_pos__8712 = (this__8711.start + key);

return (new cljs.core.Subvec(this__8711.meta,cljs.core._assoc.call(null,this__8711.v,v_pos__8712,val),this__8711.start,((this__8711.end > (v_pos__8712 + 1)) ? this__8711.end : (v_pos__8712 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8740 = null;
var G__8740__8741 = (function (tsym8713,k){
var this__8715 = this;
var tsym8713__8716 = this;

var coll__8717 = tsym8713__8716;

return cljs.core._lookup.call(null,coll__8717,k);
});
var G__8740__8742 = (function (tsym8714,k,not_found){
var this__8718 = this;
var tsym8714__8719 = this;

var coll__8720 = tsym8714__8719;

return cljs.core._lookup.call(null,coll__8720,k,not_found);
});
G__8740 = function(tsym8714,k,not_found){
switch(arguments.length){
case  2 :
return G__8740__8741.call(this,tsym8714,k);
case  3 :
return G__8740__8742.call(this,tsym8714,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8740;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8721 = this;
return (new cljs.core.Subvec(this__8721.meta,cljs.core._assoc_n.call(null,this__8721.v,this__8721.end,o),this__8721.start,(this__8721.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8744 = null;
var G__8744__8745 = (function (coll,f){
var this__8722 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8744__8746 = (function (coll,f,start){
var this__8723 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8744 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8744__8745.call(this,coll,f);
case  3 :
return G__8744__8746.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8744;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8724 = this;
var subvec_seq__8725 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8724.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8724.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8725.call(null,this__8724.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8726 = this;
return (this__8726.end - this__8726.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8727 = this;
return cljs.core._nth.call(null,this__8727.v,(this__8727.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8728 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8728.start,this__8728.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8728.meta,this__8728.v,this__8728.start,(this__8728.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8729 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8730 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8731 = this;
return (new cljs.core.Subvec(meta,this__8731.v,this__8731.start,this__8731.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8732 = this;
return this__8732.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8748 = null;
var G__8748__8749 = (function (coll,n){
var this__8733 = this;
return cljs.core._nth.call(null,this__8733.v,(this__8733.start + n));
});
var G__8748__8750 = (function (coll,n,not_found){
var this__8734 = this;
return cljs.core._nth.call(null,this__8734.v,(this__8734.start + n),not_found);
});
G__8748 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8748__8749.call(this,coll,n);
case  3 :
return G__8748__8750.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8748;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8735 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8735.meta);
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
var subvec__8752 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8753 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8752.call(this,v,start);
case  3 :
return subvec__8753.call(this,v,start,end);
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
var this__8755 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8756 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8757 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8758 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8758.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8759 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8760 = this;
return cljs.core._first.call(null,this__8760.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8761 = this;
var temp__3695__auto____8762 = cljs.core.next.call(null,this__8761.front);

if(cljs.core.truth_(temp__3695__auto____8762))
{var f1__8763 = temp__3695__auto____8762;

return (new cljs.core.PersistentQueueSeq(this__8761.meta,f1__8763,this__8761.rear));
} else
{if(cljs.core.truth_((this__8761.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8761.meta,this__8761.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8764 = this;
return this__8764.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8765 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8765.front,this__8765.rear));
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
var this__8766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8767 = this;
if(cljs.core.truth_(this__8767.front))
{return (new cljs.core.PersistentQueue(this__8767.meta,(this__8767.count + 1),this__8767.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8768 = this__8767.rear;

if(cljs.core.truth_(or__3548__auto____8768))
{return or__3548__auto____8768;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8767.meta,(this__8767.count + 1),cljs.core.conj.call(null,this__8767.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8769 = this;
var rear__8770 = cljs.core.seq.call(null,this__8769.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8771 = this__8769.front;

if(cljs.core.truth_(or__3548__auto____8771))
{return or__3548__auto____8771;
} else
{return rear__8770;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8769.front,cljs.core.seq.call(null,rear__8770)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8772 = this;
return this__8772.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8773 = this;
return cljs.core._first.call(null,this__8773.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8774 = this;
if(cljs.core.truth_(this__8774.front))
{var temp__3695__auto____8775 = cljs.core.next.call(null,this__8774.front);

if(cljs.core.truth_(temp__3695__auto____8775))
{var f1__8776 = temp__3695__auto____8775;

return (new cljs.core.PersistentQueue(this__8774.meta,(this__8774.count - 1),f1__8776,this__8774.rear));
} else
{return (new cljs.core.PersistentQueue(this__8774.meta,(this__8774.count - 1),cljs.core.seq.call(null,this__8774.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8777 = this;
return cljs.core.first.call(null,this__8777.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8778 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8779 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8780 = this;
return (new cljs.core.PersistentQueue(meta,this__8780.count,this__8780.front,this__8780.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8781 = this;
return this__8781.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8782 = this;
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
var this__8783 = this;
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
var len__8784 = array.length;

var i__8785 = 0;

while(true){
if(cljs.core.truth_((i__8785 < len__8784)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8785]))))
{return i__8785;
} else
{{
var G__8786 = (i__8785 + incr);
i__8785 = G__8786;
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
var obj_map_contains_key_QMARK___8788 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8789 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8787 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8787))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8787;
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
return obj_map_contains_key_QMARK___8788.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8789.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8792 = cljs.core.hash.call(null,a);
var b__8793 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8792 < b__8793)))
{return -1;
} else
{if(cljs.core.truth_((a__8792 > b__8793)))
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
var this__8794 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8821 = null;
var G__8821__8822 = (function (coll,k){
var this__8795 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8821__8823 = (function (coll,k,not_found){
var this__8796 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8796.strobj,(this__8796.strobj[k]),not_found);
});
G__8821 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8821__8822.call(this,coll,k);
case  3 :
return G__8821__8823.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8821;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8797 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8798 = goog.object.clone.call(null,this__8797.strobj);
var overwrite_QMARK___8799 = new_strobj__8798.hasOwnProperty(k);

(new_strobj__8798[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8799))
{return (new cljs.core.ObjMap(this__8797.meta,this__8797.keys,new_strobj__8798));
} else
{var new_keys__8800 = cljs.core.aclone.call(null,this__8797.keys);

new_keys__8800.push(k);
return (new cljs.core.ObjMap(this__8797.meta,new_keys__8800,new_strobj__8798));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8797.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8801 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8801.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8825 = null;
var G__8825__8826 = (function (tsym8802,k){
var this__8804 = this;
var tsym8802__8805 = this;

var coll__8806 = tsym8802__8805;

return cljs.core._lookup.call(null,coll__8806,k);
});
var G__8825__8827 = (function (tsym8803,k,not_found){
var this__8807 = this;
var tsym8803__8808 = this;

var coll__8809 = tsym8803__8808;

return cljs.core._lookup.call(null,coll__8809,k,not_found);
});
G__8825 = function(tsym8803,k,not_found){
switch(arguments.length){
case  2 :
return G__8825__8826.call(this,tsym8803,k);
case  3 :
return G__8825__8827.call(this,tsym8803,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8825;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8810 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8811 = this;
if(cljs.core.truth_((this__8811.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8791_SHARP_){
return cljs.core.vector.call(null,p1__8791_SHARP_,(this__8811.strobj[p1__8791_SHARP_]));
}),this__8811.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8812 = this;
return this__8812.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8813 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8814 = this;
return (new cljs.core.ObjMap(meta,this__8814.keys,this__8814.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8815 = this;
return this__8815.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8816 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8816.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8817 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8818 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8818))
{return this__8817.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8818;
}
})()))
{var new_keys__8819 = cljs.core.aclone.call(null,this__8817.keys);
var new_strobj__8820 = goog.object.clone.call(null,this__8817.strobj);

new_keys__8819.splice(cljs.core.scan_array.call(null,1,k,new_keys__8819),1);
cljs.core.js_delete.call(null,new_strobj__8820,k);
return (new cljs.core.ObjMap(this__8817.meta,new_keys__8819,new_strobj__8820));
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
var this__8830 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8868 = null;
var G__8868__8869 = (function (coll,k){
var this__8831 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8868__8870 = (function (coll,k,not_found){
var this__8832 = this;
var bucket__8833 = (this__8832.hashobj[cljs.core.hash.call(null,k)]);
var i__8834 = (cljs.core.truth_(bucket__8833)?cljs.core.scan_array.call(null,2,k,bucket__8833):null);

if(cljs.core.truth_(i__8834))
{return (bucket__8833[(i__8834 + 1)]);
} else
{return not_found;
}
});
G__8868 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8868__8869.call(this,coll,k);
case  3 :
return G__8868__8870.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8868;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8835 = this;
var h__8836 = cljs.core.hash.call(null,k);
var bucket__8837 = (this__8835.hashobj[h__8836]);

if(cljs.core.truth_(bucket__8837))
{var new_bucket__8838 = cljs.core.aclone.call(null,bucket__8837);
var new_hashobj__8839 = goog.object.clone.call(null,this__8835.hashobj);

(new_hashobj__8839[h__8836] = new_bucket__8838);
var temp__3695__auto____8840 = cljs.core.scan_array.call(null,2,k,new_bucket__8838);

if(cljs.core.truth_(temp__3695__auto____8840))
{var i__8841 = temp__3695__auto____8840;

(new_bucket__8838[(i__8841 + 1)] = v);
return (new cljs.core.HashMap(this__8835.meta,this__8835.count,new_hashobj__8839));
} else
{new_bucket__8838.push(k,v);
return (new cljs.core.HashMap(this__8835.meta,(this__8835.count + 1),new_hashobj__8839));
}
} else
{var new_hashobj__8842 = goog.object.clone.call(null,this__8835.hashobj);

(new_hashobj__8842[h__8836] = [k,v]);
return (new cljs.core.HashMap(this__8835.meta,(this__8835.count + 1),new_hashobj__8842));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8843 = this;
var bucket__8844 = (this__8843.hashobj[cljs.core.hash.call(null,k)]);
var i__8845 = (cljs.core.truth_(bucket__8844)?cljs.core.scan_array.call(null,2,k,bucket__8844):null);

if(cljs.core.truth_(i__8845))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8872 = null;
var G__8872__8873 = (function (tsym8846,k){
var this__8848 = this;
var tsym8846__8849 = this;

var coll__8850 = tsym8846__8849;

return cljs.core._lookup.call(null,coll__8850,k);
});
var G__8872__8874 = (function (tsym8847,k,not_found){
var this__8851 = this;
var tsym8847__8852 = this;

var coll__8853 = tsym8847__8852;

return cljs.core._lookup.call(null,coll__8853,k,not_found);
});
G__8872 = function(tsym8847,k,not_found){
switch(arguments.length){
case  2 :
return G__8872__8873.call(this,tsym8847,k);
case  3 :
return G__8872__8874.call(this,tsym8847,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8872;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8854 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8855 = this;
if(cljs.core.truth_((this__8855.count > 0)))
{var hashes__8856 = cljs.core.js_keys.call(null,this__8855.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8829_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8855.hashobj[p1__8829_SHARP_])));
}),hashes__8856);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8857 = this;
return this__8857.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8858 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8859 = this;
return (new cljs.core.HashMap(meta,this__8859.count,this__8859.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8860 = this;
return this__8860.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8861 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8861.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8862 = this;
var h__8863 = cljs.core.hash.call(null,k);
var bucket__8864 = (this__8862.hashobj[h__8863]);
var i__8865 = (cljs.core.truth_(bucket__8864)?cljs.core.scan_array.call(null,2,k,bucket__8864):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8865)))
{return coll;
} else
{var new_hashobj__8866 = goog.object.clone.call(null,this__8862.hashobj);

if(cljs.core.truth_((3 > bucket__8864.length)))
{cljs.core.js_delete.call(null,new_hashobj__8866,h__8863);
} else
{var new_bucket__8867 = cljs.core.aclone.call(null,bucket__8864);

new_bucket__8867.splice(i__8865,2);
(new_hashobj__8866[h__8863] = new_bucket__8867);
}
return (new cljs.core.HashMap(this__8862.meta,(this__8862.count - 1),new_hashobj__8866));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8876 = ks.length;

var i__8877 = 0;
var out__8878 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8877 < len__8876)))
{{
var G__8879 = (i__8877 + 1);
var G__8880 = cljs.core.assoc.call(null,out__8878,(ks[i__8877]),(vs[i__8877]));
i__8877 = G__8879;
out__8878 = G__8880;
continue;
}
} else
{return out__8878;
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
var in$__8881 = cljs.core.seq.call(null,keyvals);
var out__8882 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8881))
{{
var G__8883 = cljs.core.nnext.call(null,in$__8881);
var G__8884 = cljs.core.assoc.call(null,out__8882,cljs.core.first.call(null,in$__8881),cljs.core.second.call(null,in$__8881));
in$__8881 = G__8883;
out__8882 = G__8884;
continue;
}
} else
{return out__8882;
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
hash_map.cljs$lang$applyTo = (function (arglist__8885){
var keyvals = cljs.core.seq( arglist__8885 );;
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
{return cljs.core.reduce.call(null,(function (p1__8886_SHARP_,p2__8887_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8888 = p1__8886_SHARP_;

if(cljs.core.truth_(or__3548__auto____8888))
{return or__3548__auto____8888;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8887_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8889){
var maps = cljs.core.seq( arglist__8889 );;
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
{var merge_entry__8892 = (function (m,e){
var k__8890 = cljs.core.first.call(null,e);
var v__8891 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8890)))
{return cljs.core.assoc.call(null,m,k__8890,f.call(null,cljs.core.get.call(null,m,k__8890),v__8891));
} else
{return cljs.core.assoc.call(null,m,k__8890,v__8891);
}
});
var merge2__8894 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8892,(function (){var or__3548__auto____8893 = m1;

if(cljs.core.truth_(or__3548__auto____8893))
{return or__3548__auto____8893;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8894,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8895){
var f = cljs.core.first(arglist__8895);
var maps = cljs.core.rest(arglist__8895);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8897 = cljs.core.ObjMap.fromObject([],{});
var keys__8898 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8898))
{var key__8899 = cljs.core.first.call(null,keys__8898);
var entry__8900 = cljs.core.get.call(null,map,key__8899,"\uFDD0'user/not-found");

{
var G__8901 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8900,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8897,key__8899,entry__8900):ret__8897);
var G__8902 = cljs.core.next.call(null,keys__8898);
ret__8897 = G__8901;
keys__8898 = G__8902;
continue;
}
} else
{return ret__8897;
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
var this__8903 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8924 = null;
var G__8924__8925 = (function (coll,v){
var this__8904 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8924__8926 = (function (coll,v,not_found){
var this__8905 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8905.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8924 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8924__8925.call(this,coll,v);
case  3 :
return G__8924__8926.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8924;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8928 = null;
var G__8928__8929 = (function (tsym8906,k){
var this__8908 = this;
var tsym8906__8909 = this;

var coll__8910 = tsym8906__8909;

return cljs.core._lookup.call(null,coll__8910,k);
});
var G__8928__8930 = (function (tsym8907,k,not_found){
var this__8911 = this;
var tsym8907__8912 = this;

var coll__8913 = tsym8907__8912;

return cljs.core._lookup.call(null,coll__8913,k,not_found);
});
G__8928 = function(tsym8907,k,not_found){
switch(arguments.length){
case  2 :
return G__8928__8929.call(this,tsym8907,k);
case  3 :
return G__8928__8930.call(this,tsym8907,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8928;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8914 = this;
return (new cljs.core.Set(this__8914.meta,cljs.core.assoc.call(null,this__8914.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8915 = this;
return cljs.core.keys.call(null,this__8915.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8916 = this;
return (new cljs.core.Set(this__8916.meta,cljs.core.dissoc.call(null,this__8916.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8917 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8918 = this;
var and__3546__auto____8919 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8919))
{var and__3546__auto____8920 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8920))
{return cljs.core.every_QMARK_.call(null,(function (p1__8896_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8896_SHARP_);
}),other);
} else
{return and__3546__auto____8920;
}
} else
{return and__3546__auto____8919;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8921 = this;
return (new cljs.core.Set(meta,this__8921.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8922 = this;
return this__8922.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8923 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8923.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8933 = cljs.core.seq.call(null,coll);
var out__8934 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8933))))
{{
var G__8935 = cljs.core.rest.call(null,in$__8933);
var G__8936 = cljs.core.conj.call(null,out__8934,cljs.core.first.call(null,in$__8933));
in$__8933 = G__8935;
out__8934 = G__8936;
continue;
}
} else
{return out__8934;
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
{var n__8937 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8938 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8938))
{var e__8939 = temp__3695__auto____8938;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8939));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8937,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8932_SHARP_){
var temp__3695__auto____8940 = cljs.core.find.call(null,smap,p1__8932_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8940))
{var e__8941 = temp__3695__auto____8940;

return cljs.core.second.call(null,e__8941);
} else
{return p1__8932_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8949 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8942,seen){
while(true){
var vec__8943__8944 = p__8942;
var f__8945 = cljs.core.nth.call(null,vec__8943__8944,0,null);
var xs__8946 = vec__8943__8944;

var temp__3698__auto____8947 = cljs.core.seq.call(null,xs__8946);

if(cljs.core.truth_(temp__3698__auto____8947))
{var s__8948 = temp__3698__auto____8947;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8945)))
{{
var G__8950 = cljs.core.rest.call(null,s__8948);
var G__8951 = seen;
p__8942 = G__8950;
seen = G__8951;
continue;
}
} else
{return cljs.core.cons.call(null,f__8945,step.call(null,cljs.core.rest.call(null,s__8948),cljs.core.conj.call(null,seen,f__8945)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8949.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8952 = cljs.core.PersistentVector.fromArray([]);
var s__8953 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8953)))
{{
var G__8954 = cljs.core.conj.call(null,ret__8952,cljs.core.first.call(null,s__8953));
var G__8955 = cljs.core.next.call(null,s__8953);
ret__8952 = G__8954;
s__8953 = G__8955;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8952);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8956 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8956))
{return or__3548__auto____8956;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8957 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8957 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8957 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8958 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8958))
{return or__3548__auto____8958;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8959 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8959 > -1)))
{return cljs.core.subs.call(null,x,2,i__8959);
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
var map__8962 = cljs.core.ObjMap.fromObject([],{});
var ks__8963 = cljs.core.seq.call(null,keys);
var vs__8964 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8965 = ks__8963;

if(cljs.core.truth_(and__3546__auto____8965))
{return vs__8964;
} else
{return and__3546__auto____8965;
}
})()))
{{
var G__8966 = cljs.core.assoc.call(null,map__8962,cljs.core.first.call(null,ks__8963),cljs.core.first.call(null,vs__8964));
var G__8967 = cljs.core.next.call(null,ks__8963);
var G__8968 = cljs.core.next.call(null,vs__8964);
map__8962 = G__8966;
ks__8963 = G__8967;
vs__8964 = G__8968;
continue;
}
} else
{return map__8962;
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
var max_key__8971 = (function (k,x){
return x;
});
var max_key__8972 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8973 = (function() { 
var G__8975__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8960_SHARP_,p2__8961_SHARP_){
return max_key.call(null,k,p1__8960_SHARP_,p2__8961_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8975 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8975__delegate.call(this, k, x, y, more);
};
G__8975.cljs$lang$maxFixedArity = 3;
G__8975.cljs$lang$applyTo = (function (arglist__8976){
var k = cljs.core.first(arglist__8976);
var x = cljs.core.first(cljs.core.next(arglist__8976));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8976)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8976)));
return G__8975__delegate.call(this, k, x, y, more);
});
return G__8975;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8971.call(this,k,x);
case  3 :
return max_key__8972.call(this,k,x,y);
default:
return max_key__8973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8973.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8977 = (function (k,x){
return x;
});
var min_key__8978 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8979 = (function() { 
var G__8981__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8969_SHARP_,p2__8970_SHARP_){
return min_key.call(null,k,p1__8969_SHARP_,p2__8970_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8981 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8981__delegate.call(this, k, x, y, more);
};
G__8981.cljs$lang$maxFixedArity = 3;
G__8981.cljs$lang$applyTo = (function (arglist__8982){
var k = cljs.core.first(arglist__8982);
var x = cljs.core.first(cljs.core.next(arglist__8982));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8982)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8982)));
return G__8981__delegate.call(this, k, x, y, more);
});
return G__8981;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8977.call(this,k,x);
case  3 :
return min_key__8978.call(this,k,x,y);
default:
return min_key__8979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8979.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8985 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8986 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8983))
{var s__8984 = temp__3698__auto____8983;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8984),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8984)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8985.call(this,n,step);
case  3 :
return partition_all__8986.call(this,n,step,coll);
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
var temp__3698__auto____8988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8988))
{var s__8989 = temp__3698__auto____8988;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8989))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8989),take_while.call(null,pred,cljs.core.rest.call(null,s__8989)));
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
var this__8990 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8991 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9007 = null;
var G__9007__9008 = (function (rng,f){
var this__8992 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__9007__9009 = (function (rng,f,s){
var this__8993 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__9007 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__9007__9008.call(this,rng,f);
case  3 :
return G__9007__9009.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9007;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8994 = this;
var comp__8995 = (cljs.core.truth_((this__8994.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8995.call(null,this__8994.start,this__8994.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8996 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8996.end - this__8996.start) / this__8996.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8997 = this;
return this__8997.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8998 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8998.meta,(this__8998.start + this__8998.step),this__8998.end,this__8998.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8999 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__9000 = this;
return (new cljs.core.Range(meta,this__9000.start,this__9000.end,this__9000.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__9001 = this;
return this__9001.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9011 = null;
var G__9011__9012 = (function (rng,n){
var this__9002 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9002.start + (n * this__9002.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9003 = (this__9002.start > this__9002.end);

if(cljs.core.truth_(and__3546__auto____9003))
{return cljs.core._EQ_.call(null,this__9002.step,0);
} else
{return and__3546__auto____9003;
}
})()))
{return this__9002.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9011__9013 = (function (rng,n,not_found){
var this__9004 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9004.start + (n * this__9004.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____9005 = (this__9004.start > this__9004.end);

if(cljs.core.truth_(and__3546__auto____9005))
{return cljs.core._EQ_.call(null,this__9004.step,0);
} else
{return and__3546__auto____9005;
}
})()))
{return this__9004.start;
} else
{return not_found;
}
}
});
G__9011 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9011__9012.call(this,rng,n);
case  3 :
return G__9011__9013.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9011;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__9006 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9006.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9015 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9016 = (function (end){
return range.call(null,0,end,1);
});
var range__9017 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9018 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9015.call(this);
case  1 :
return range__9016.call(this,start);
case  2 :
return range__9017.call(this,start,end);
case  3 :
return range__9018.call(this,start,end,step);
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
var temp__3698__auto____9020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9020))
{var s__9021 = temp__3698__auto____9020;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9021),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9021)));
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
var temp__3698__auto____9023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9023))
{var s__9024 = temp__3698__auto____9023;

var fst__9025 = cljs.core.first.call(null,s__9024);
var fv__9026 = f.call(null,fst__9025);
var run__9027 = cljs.core.cons.call(null,fst__9025,cljs.core.take_while.call(null,(function (p1__9022_SHARP_){
return cljs.core._EQ_.call(null,fv__9026,f.call(null,p1__9022_SHARP_));
}),cljs.core.next.call(null,s__9024)));

return cljs.core.cons.call(null,run__9027,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9027),s__9024))));
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
var reductions__9042 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9038 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9038))
{var s__9039 = temp__3695__auto____9038;

return reductions.call(null,f,cljs.core.first.call(null,s__9039),cljs.core.rest.call(null,s__9039));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9043 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9040 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9040))
{var s__9041 = temp__3698__auto____9040;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9041)),cljs.core.rest.call(null,s__9041));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9042.call(this,f,init);
case  3 :
return reductions__9043.call(this,f,init,coll);
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
var juxt__9046 = (function (f){
return (function() {
var G__9051 = null;
var G__9051__9052 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9051__9053 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9051__9054 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9051__9055 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9051__9056 = (function() { 
var G__9058__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9058 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9058__delegate.call(this, x, y, z, args);
};
G__9058.cljs$lang$maxFixedArity = 3;
G__9058.cljs$lang$applyTo = (function (arglist__9059){
var x = cljs.core.first(arglist__9059);
var y = cljs.core.first(cljs.core.next(arglist__9059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9059)));
return G__9058__delegate.call(this, x, y, z, args);
});
return G__9058;
})()
;
G__9051 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9051__9052.call(this);
case  1 :
return G__9051__9053.call(this,x);
case  2 :
return G__9051__9054.call(this,x,y);
case  3 :
return G__9051__9055.call(this,x,y,z);
default:
return G__9051__9056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9051.cljs$lang$maxFixedArity = 3;
G__9051.cljs$lang$applyTo = G__9051__9056.cljs$lang$applyTo;
return G__9051;
})()
});
var juxt__9047 = (function (f,g){
return (function() {
var G__9060 = null;
var G__9060__9061 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9060__9062 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9060__9063 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9060__9064 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9060__9065 = (function() { 
var G__9067__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9067 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9067__delegate.call(this, x, y, z, args);
};
G__9067.cljs$lang$maxFixedArity = 3;
G__9067.cljs$lang$applyTo = (function (arglist__9068){
var x = cljs.core.first(arglist__9068);
var y = cljs.core.first(cljs.core.next(arglist__9068));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9068)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9068)));
return G__9067__delegate.call(this, x, y, z, args);
});
return G__9067;
})()
;
G__9060 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9060__9061.call(this);
case  1 :
return G__9060__9062.call(this,x);
case  2 :
return G__9060__9063.call(this,x,y);
case  3 :
return G__9060__9064.call(this,x,y,z);
default:
return G__9060__9065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9060.cljs$lang$maxFixedArity = 3;
G__9060.cljs$lang$applyTo = G__9060__9065.cljs$lang$applyTo;
return G__9060;
})()
});
var juxt__9048 = (function (f,g,h){
return (function() {
var G__9069 = null;
var G__9069__9070 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9069__9071 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9069__9072 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9069__9073 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9069__9074 = (function() { 
var G__9076__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9076 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9076__delegate.call(this, x, y, z, args);
};
G__9076.cljs$lang$maxFixedArity = 3;
G__9076.cljs$lang$applyTo = (function (arglist__9077){
var x = cljs.core.first(arglist__9077);
var y = cljs.core.first(cljs.core.next(arglist__9077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9077)));
return G__9076__delegate.call(this, x, y, z, args);
});
return G__9076;
})()
;
G__9069 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9069__9070.call(this);
case  1 :
return G__9069__9071.call(this,x);
case  2 :
return G__9069__9072.call(this,x,y);
case  3 :
return G__9069__9073.call(this,x,y,z);
default:
return G__9069__9074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9069.cljs$lang$maxFixedArity = 3;
G__9069.cljs$lang$applyTo = G__9069__9074.cljs$lang$applyTo;
return G__9069;
})()
});
var juxt__9049 = (function() { 
var G__9078__delegate = function (f,g,h,fs){
var fs__9045 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9079 = null;
var G__9079__9080 = (function (){
return cljs.core.reduce.call(null,(function (p1__9028_SHARP_,p2__9029_SHARP_){
return cljs.core.conj.call(null,p1__9028_SHARP_,p2__9029_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9045);
});
var G__9079__9081 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9030_SHARP_,p2__9031_SHARP_){
return cljs.core.conj.call(null,p1__9030_SHARP_,p2__9031_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9045);
});
var G__9079__9082 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9032_SHARP_,p2__9033_SHARP_){
return cljs.core.conj.call(null,p1__9032_SHARP_,p2__9033_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9045);
});
var G__9079__9083 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9034_SHARP_,p2__9035_SHARP_){
return cljs.core.conj.call(null,p1__9034_SHARP_,p2__9035_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9045);
});
var G__9079__9084 = (function() { 
var G__9086__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9036_SHARP_,p2__9037_SHARP_){
return cljs.core.conj.call(null,p1__9036_SHARP_,cljs.core.apply.call(null,p2__9037_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9045);
};
var G__9086 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9086__delegate.call(this, x, y, z, args);
};
G__9086.cljs$lang$maxFixedArity = 3;
G__9086.cljs$lang$applyTo = (function (arglist__9087){
var x = cljs.core.first(arglist__9087);
var y = cljs.core.first(cljs.core.next(arglist__9087));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9087)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9087)));
return G__9086__delegate.call(this, x, y, z, args);
});
return G__9086;
})()
;
G__9079 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9079__9080.call(this);
case  1 :
return G__9079__9081.call(this,x);
case  2 :
return G__9079__9082.call(this,x,y);
case  3 :
return G__9079__9083.call(this,x,y,z);
default:
return G__9079__9084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9079.cljs$lang$maxFixedArity = 3;
G__9079.cljs$lang$applyTo = G__9079__9084.cljs$lang$applyTo;
return G__9079;
})()
};
var G__9078 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9078__delegate.call(this, f, g, h, fs);
};
G__9078.cljs$lang$maxFixedArity = 3;
G__9078.cljs$lang$applyTo = (function (arglist__9088){
var f = cljs.core.first(arglist__9088);
var g = cljs.core.first(cljs.core.next(arglist__9088));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9088)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9088)));
return G__9078__delegate.call(this, f, g, h, fs);
});
return G__9078;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9046.call(this,f);
case  2 :
return juxt__9047.call(this,f,g);
case  3 :
return juxt__9048.call(this,f,g,h);
default:
return juxt__9049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9049.cljs$lang$applyTo;
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
var dorun__9090 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9093 = cljs.core.next.call(null,coll);
coll = G__9093;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9091 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9089 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9089))
{return (n > 0);
} else
{return and__3546__auto____9089;
}
})()))
{{
var G__9094 = (n - 1);
var G__9095 = cljs.core.next.call(null,coll);
n = G__9094;
coll = G__9095;
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
return dorun__9090.call(this,n);
case  2 :
return dorun__9091.call(this,n,coll);
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
var doall__9096 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9097 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9096.call(this,n);
case  2 :
return doall__9097.call(this,n,coll);
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
var matches__9099 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9099),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9099),1)))
{return cljs.core.first.call(null,matches__9099);
} else
{return cljs.core.vec.call(null,matches__9099);
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
var matches__9100 = re.exec(s);

if(cljs.core.truth_((matches__9100 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9100),1)))
{return cljs.core.first.call(null,matches__9100);
} else
{return cljs.core.vec.call(null,matches__9100);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9101 = cljs.core.re_find.call(null,re,s);
var match_idx__9102 = s.search(re);
var match_str__9103 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9101))?cljs.core.first.call(null,match_data__9101):match_data__9101);
var post_match__9104 = cljs.core.subs.call(null,s,(match_idx__9102 + cljs.core.count.call(null,match_str__9103)));

if(cljs.core.truth_(match_data__9101))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9101,re_seq.call(null,re,post_match__9104));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9106__9107 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9108 = cljs.core.nth.call(null,vec__9106__9107,0,null);
var flags__9109 = cljs.core.nth.call(null,vec__9106__9107,1,null);
var pattern__9110 = cljs.core.nth.call(null,vec__9106__9107,2,null);

return (new RegExp(pattern__9110,flags__9109));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9105_SHARP_){
return print_one.call(null,p1__9105_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9111 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____9111))
{var and__3546__auto____9115 = (function (){var x__3028__auto____9112 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9113 = x__3028__auto____9112;

if(cljs.core.truth_(and__3546__auto____9113))
{var and__3546__auto____9114 = x__3028__auto____9112.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____9114))
{return cljs.core.not.call(null,x__3028__auto____9112.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____9114;
}
} else
{return and__3546__auto____9113;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3028__auto____9112);
}
})();

if(cljs.core.truth_(and__3546__auto____9115))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9115;
}
} else
{return and__3546__auto____9111;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3028__auto____9116 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9117 = x__3028__auto____9116;

if(cljs.core.truth_(and__3546__auto____9117))
{var and__3546__auto____9118 = x__3028__auto____9116.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____9118))
{return cljs.core.not.call(null,x__3028__auto____9116.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____9118;
}
} else
{return and__3546__auto____9117;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3028__auto____9116);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9119 = cljs.core.first.call(null,objs);
var sb__9120 = (new goog.string.StringBuffer());

var G__9121__9122 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9121__9122))
{var obj__9123 = cljs.core.first.call(null,G__9121__9122);
var G__9121__9124 = G__9121__9122;

while(true){
if(cljs.core.truth_((obj__9123 === first_obj__9119)))
{} else
{sb__9120.append(" ");
}
var G__9125__9126 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9123,opts));

if(cljs.core.truth_(G__9125__9126))
{var string__9127 = cljs.core.first.call(null,G__9125__9126);
var G__9125__9128 = G__9125__9126;

while(true){
sb__9120.append(string__9127);
var temp__3698__auto____9129 = cljs.core.next.call(null,G__9125__9128);

if(cljs.core.truth_(temp__3698__auto____9129))
{var G__9125__9130 = temp__3698__auto____9129;

{
var G__9133 = cljs.core.first.call(null,G__9125__9130);
var G__9134 = G__9125__9130;
string__9127 = G__9133;
G__9125__9128 = G__9134;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9131 = cljs.core.next.call(null,G__9121__9124);

if(cljs.core.truth_(temp__3698__auto____9131))
{var G__9121__9132 = temp__3698__auto____9131;

{
var G__9135 = cljs.core.first.call(null,G__9121__9132);
var G__9136 = G__9121__9132;
obj__9123 = G__9135;
G__9121__9124 = G__9136;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9120;
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
var sb__9137 = cljs.core.pr_sb.call(null,objs,opts);

sb__9137.append("\n");
return cljs.core.str.call(null,sb__9137);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9138 = cljs.core.first.call(null,objs);

var G__9139__9140 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9139__9140))
{var obj__9141 = cljs.core.first.call(null,G__9139__9140);
var G__9139__9142 = G__9139__9140;

while(true){
if(cljs.core.truth_((obj__9141 === first_obj__9138)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9143__9144 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9141,opts));

if(cljs.core.truth_(G__9143__9144))
{var string__9145 = cljs.core.first.call(null,G__9143__9144);
var G__9143__9146 = G__9143__9144;

while(true){
cljs.core.string_print.call(null,string__9145);
var temp__3698__auto____9147 = cljs.core.next.call(null,G__9143__9146);

if(cljs.core.truth_(temp__3698__auto____9147))
{var G__9143__9148 = temp__3698__auto____9147;

{
var G__9151 = cljs.core.first.call(null,G__9143__9148);
var G__9152 = G__9143__9148;
string__9145 = G__9151;
G__9143__9146 = G__9152;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9149 = cljs.core.next.call(null,G__9139__9142);

if(cljs.core.truth_(temp__3698__auto____9149))
{var G__9139__9150 = temp__3698__auto____9149;

{
var G__9153 = cljs.core.first.call(null,G__9139__9150);
var G__9154 = G__9139__9150;
obj__9141 = G__9153;
G__9139__9142 = G__9154;
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
pr_str.cljs$lang$applyTo = (function (arglist__9155){
var objs = cljs.core.seq( arglist__9155 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__9156){
var objs = cljs.core.seq( arglist__9156 );;
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
pr.cljs$lang$applyTo = (function (arglist__9157){
var objs = cljs.core.seq( arglist__9157 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9158){
var objs = cljs.core.seq( arglist__9158 );;
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
print_str.cljs$lang$applyTo = (function (arglist__9159){
var objs = cljs.core.seq( arglist__9159 );;
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
println.cljs$lang$applyTo = (function (arglist__9160){
var objs = cljs.core.seq( arglist__9160 );;
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
println_str.cljs$lang$applyTo = (function (arglist__9161){
var objs = cljs.core.seq( arglist__9161 );;
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
prn.cljs$lang$applyTo = (function (arglist__9162){
var objs = cljs.core.seq( arglist__9162 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9163 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9163,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9164 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9164))
{var nspc__9165 = temp__3698__auto____9164;

return cljs.core.str.call(null,nspc__9165,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9166 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9166))
{var nspc__9167 = temp__3698__auto____9166;

return cljs.core.str.call(null,nspc__9167,"/");
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
var pr_pair__9168 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9168,"{",", ","}",opts,coll);
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
var this__9169 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9170 = this;
var G__9171__9172 = cljs.core.seq.call(null,this__9170.watches);

if(cljs.core.truth_(G__9171__9172))
{var G__9174__9176 = cljs.core.first.call(null,G__9171__9172);
var vec__9175__9177 = G__9174__9176;
var key__9178 = cljs.core.nth.call(null,vec__9175__9177,0,null);
var f__9179 = cljs.core.nth.call(null,vec__9175__9177,1,null);
var G__9171__9180 = G__9171__9172;

var G__9174__9181 = G__9174__9176;
var G__9171__9182 = G__9171__9180;

while(true){
var vec__9183__9184 = G__9174__9181;
var key__9185 = cljs.core.nth.call(null,vec__9183__9184,0,null);
var f__9186 = cljs.core.nth.call(null,vec__9183__9184,1,null);
var G__9171__9187 = G__9171__9182;

f__9186.call(null,key__9185,this$,oldval,newval);
var temp__3698__auto____9188 = cljs.core.next.call(null,G__9171__9187);

if(cljs.core.truth_(temp__3698__auto____9188))
{var G__9171__9189 = temp__3698__auto____9188;

{
var G__9196 = cljs.core.first.call(null,G__9171__9189);
var G__9197 = G__9171__9189;
G__9174__9181 = G__9196;
G__9171__9182 = G__9197;
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
var this__9190 = this;
return this$.watches = cljs.core.assoc.call(null,this__9190.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9191 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9191.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9192 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9192.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9193 = this;
return this__9193.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9194 = this;
return this__9194.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9195 = this;
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
var atom__9204 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9205 = (function() { 
var G__9207__delegate = function (x,p__9198){
var map__9199__9200 = p__9198;
var map__9199__9201 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9199__9200))?cljs.core.apply.call(null,cljs.core.hash_map,map__9199__9200):map__9199__9200);
var validator__9202 = cljs.core.get.call(null,map__9199__9201,"\uFDD0'validator");
var meta__9203 = cljs.core.get.call(null,map__9199__9201,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9203,validator__9202,null));
};
var G__9207 = function (x,var_args){
var p__9198 = null;
if (goog.isDef(var_args)) {
  p__9198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9207__delegate.call(this, x, p__9198);
};
G__9207.cljs$lang$maxFixedArity = 1;
G__9207.cljs$lang$applyTo = (function (arglist__9208){
var x = cljs.core.first(arglist__9208);
var p__9198 = cljs.core.rest(arglist__9208);
return G__9207__delegate.call(this, x, p__9198);
});
return G__9207;
})()
;
atom = function(x,var_args){
var p__9198 = var_args;
switch(arguments.length){
case  1 :
return atom__9204.call(this,x);
default:
return atom__9205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9205.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9209 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9209))
{var validate__9210 = temp__3698__auto____9209;

if(cljs.core.truth_(validate__9210.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9211 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9211,new_value);
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
var swap_BANG___9212 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9213 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9214 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9215 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9216 = (function() { 
var G__9218__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9218 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9218__delegate.call(this, a, f, x, y, z, more);
};
G__9218.cljs$lang$maxFixedArity = 5;
G__9218.cljs$lang$applyTo = (function (arglist__9219){
var a = cljs.core.first(arglist__9219);
var f = cljs.core.first(cljs.core.next(arglist__9219));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9219)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9219))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9219)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9219)))));
return G__9218__delegate.call(this, a, f, x, y, z, more);
});
return G__9218;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9212.call(this,a,f);
case  3 :
return swap_BANG___9213.call(this,a,f,x);
case  4 :
return swap_BANG___9214.call(this,a,f,x,y);
case  5 :
return swap_BANG___9215.call(this,a,f,x,y,z);
default:
return swap_BANG___9216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9216.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9220){
var iref = cljs.core.first(arglist__9220);
var f = cljs.core.first(cljs.core.next(arglist__9220));
var args = cljs.core.rest(cljs.core.next(arglist__9220));
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
var gensym__9221 = (function (){
return gensym.call(null,"G__");
});
var gensym__9222 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9221.call(this);
case  1 :
return gensym__9222.call(this,prefix_string);
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
var this__9224 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9224.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9225 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9225.state,(function (p__9226){
var curr_state__9227 = p__9226;
var curr_state__9228 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9227))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9227):curr_state__9227);
var done__9229 = cljs.core.get.call(null,curr_state__9228,"\uFDD0'done");

if(cljs.core.truth_(done__9229))
{return curr_state__9228;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9225.f.call(null)});
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
var map__9230__9231 = options;
var map__9230__9232 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9230__9231))?cljs.core.apply.call(null,cljs.core.hash_map,map__9230__9231):map__9230__9231);
var keywordize_keys__9233 = cljs.core.get.call(null,map__9230__9232,"\uFDD0'keywordize-keys");
var keyfn__9234 = (cljs.core.truth_(keywordize_keys__9233)?cljs.core.keyword:cljs.core.str);
var f__9240 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3097__auto____9239 = (function iter__9235(s__9236){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9236__9237 = s__9236;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9236__9237)))
{var k__9238 = cljs.core.first.call(null,s__9236__9237);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9234.call(null,k__9238),thisfn.call(null,(x[k__9238]))]),iter__9235.call(null,cljs.core.rest.call(null,s__9236__9237)));
} else
{return null;
}
break;
}
})));
});

return iter__3097__auto____9239.call(null,cljs.core.js_keys.call(null,x));
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

return f__9240.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9241){
var x = cljs.core.first(arglist__9241);
var options = cljs.core.rest(arglist__9241);
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
var mem__9242 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9246__delegate = function (args){
var temp__3695__auto____9243 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9242),args);

if(cljs.core.truth_(temp__3695__auto____9243))
{var v__9244 = temp__3695__auto____9243;

return v__9244;
} else
{var ret__9245 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9242,cljs.core.assoc,args,ret__9245);
return ret__9245;
}
};
var G__9246 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9246__delegate.call(this, args);
};
G__9246.cljs$lang$maxFixedArity = 0;
G__9246.cljs$lang$applyTo = (function (arglist__9247){
var args = cljs.core.seq( arglist__9247 );;
return G__9246__delegate.call(this, args);
});
return G__9246;
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
var trampoline__9249 = (function (f){
while(true){
var ret__9248 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9248)))
{{
var G__9252 = ret__9248;
f = G__9252;
continue;
}
} else
{return ret__9248;
}
break;
}
});
var trampoline__9250 = (function() { 
var G__9253__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9253 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9253__delegate.call(this, f, args);
};
G__9253.cljs$lang$maxFixedArity = 1;
G__9253.cljs$lang$applyTo = (function (arglist__9254){
var f = cljs.core.first(arglist__9254);
var args = cljs.core.rest(arglist__9254);
return G__9253__delegate.call(this, f, args);
});
return G__9253;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9249.call(this,f);
default:
return trampoline__9250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9250.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9255 = (function (){
return rand.call(null,1);
});
var rand__9256 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9255.call(this);
case  1 :
return rand__9256.call(this,n);
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
var k__9258 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9258,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9258,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___9267 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9268 = (function (h,child,parent){
var or__3548__auto____9259 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9259))
{return or__3548__auto____9259;
} else
{var or__3548__auto____9260 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9260))
{return or__3548__auto____9260;
} else
{var and__3546__auto____9261 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9261))
{var and__3546__auto____9262 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9262))
{var and__3546__auto____9263 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9263))
{var ret__9264 = true;
var i__9265 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9266 = cljs.core.not.call(null,ret__9264);

if(cljs.core.truth_(or__3548__auto____9266))
{return or__3548__auto____9266;
} else
{return cljs.core._EQ_.call(null,i__9265,cljs.core.count.call(null,parent));
}
})()))
{return ret__9264;
} else
{{
var G__9270 = isa_QMARK_.call(null,h,child.call(null,i__9265),parent.call(null,i__9265));
var G__9271 = (i__9265 + 1);
ret__9264 = G__9270;
i__9265 = G__9271;
continue;
}
}
break;
}
} else
{return and__3546__auto____9263;
}
} else
{return and__3546__auto____9262;
}
} else
{return and__3546__auto____9261;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9267.call(this,h,child);
case  3 :
return isa_QMARK___9268.call(this,h,child,parent);
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
var parents__9272 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9273 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9272.call(this,h);
case  2 :
return parents__9273.call(this,h,tag);
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
var ancestors__9275 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9276 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9275.call(this,h);
case  2 :
return ancestors__9276.call(this,h,tag);
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
var descendants__9278 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9279 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9278.call(this,h);
case  2 :
return descendants__9279.call(this,h,tag);
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
var derive__9289 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9290 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9284 = "\uFDD0'parents".call(null,h);
var td__9285 = "\uFDD0'descendants".call(null,h);
var ta__9286 = "\uFDD0'ancestors".call(null,h);
var tf__9287 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9288 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9284.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9286.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9286.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9284,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9287.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9285,parent,ta__9286),"\uFDD0'descendants":tf__9287.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9286,tag,td__9285)});
})());

if(cljs.core.truth_(or__3548__auto____9288))
{return or__3548__auto____9288;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9289.call(this,h,tag);
case  3 :
return derive__9290.call(this,h,tag,parent);
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
var underive__9296 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9297 = (function (h,tag,parent){
var parentMap__9292 = "\uFDD0'parents".call(null,h);
var childsParents__9293 = (cljs.core.truth_(parentMap__9292.call(null,tag))?cljs.core.disj.call(null,parentMap__9292.call(null,tag),parent):cljs.core.set([]));
var newParents__9294 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9293))?cljs.core.assoc.call(null,parentMap__9292,tag,childsParents__9293):cljs.core.dissoc.call(null,parentMap__9292,tag));
var deriv_seq__9295 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9281_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9281_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9281_SHARP_),cljs.core.second.call(null,p1__9281_SHARP_)));
}),cljs.core.seq.call(null,newParents__9294)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9292.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9282_SHARP_,p2__9283_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9282_SHARP_,p2__9283_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9295));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9296.call(this,h,tag);
case  3 :
return underive__9297.call(this,h,tag,parent);
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
var xprefs__9299 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9301 = (cljs.core.truth_((function (){var and__3546__auto____9300 = xprefs__9299;

if(cljs.core.truth_(and__3546__auto____9300))
{return xprefs__9299.call(null,y);
} else
{return and__3546__auto____9300;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9301))
{return or__3548__auto____9301;
} else
{var or__3548__auto____9303 = (function (){var ps__9302 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9302) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9302),prefer_table)))
{} else
{}
{
var G__9306 = cljs.core.rest.call(null,ps__9302);
ps__9302 = G__9306;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9303))
{return or__3548__auto____9303;
} else
{var or__3548__auto____9305 = (function (){var ps__9304 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9304) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9304),y,prefer_table)))
{} else
{}
{
var G__9307 = cljs.core.rest.call(null,ps__9304);
ps__9304 = G__9307;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9305))
{return or__3548__auto____9305;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9308 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9308))
{return or__3548__auto____9308;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9317 = cljs.core.reduce.call(null,(function (be,p__9309){
var vec__9310__9311 = p__9309;
var k__9312 = cljs.core.nth.call(null,vec__9310__9311,0,null);
var ___9313 = cljs.core.nth.call(null,vec__9310__9311,1,null);
var e__9314 = vec__9310__9311;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9312)))
{var be2__9316 = (cljs.core.truth_((function (){var or__3548__auto____9315 = (be === null);

if(cljs.core.truth_(or__3548__auto____9315))
{return or__3548__auto____9315;
} else
{return cljs.core.dominates.call(null,k__9312,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9314:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9316),k__9312,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9312," and ",cljs.core.first.call(null,be2__9316),", and neither is preferred")));
}
return be2__9316;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9317))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9317));
return cljs.core.second.call(null,best_entry__9317);
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
if(cljs.core.truth_((function (){var and__3546__auto____9318 = mf;

if(cljs.core.truth_(and__3546__auto____9318))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9318;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9319 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9319))
{return or__3548__auto____9319;
} else
{var or__3548__auto____9320 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9320))
{return or__3548__auto____9320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9321 = mf;

if(cljs.core.truth_(and__3546__auto____9321))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9321;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9322 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9322))
{return or__3548__auto____9322;
} else
{var or__3548__auto____9323 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9323))
{return or__3548__auto____9323;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9324 = mf;

if(cljs.core.truth_(and__3546__auto____9324))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9324;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9325 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9325))
{return or__3548__auto____9325;
} else
{var or__3548__auto____9326 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9326))
{return or__3548__auto____9326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9327 = mf;

if(cljs.core.truth_(and__3546__auto____9327))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9327;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9328 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9328))
{return or__3548__auto____9328;
} else
{var or__3548__auto____9329 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9329))
{return or__3548__auto____9329;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9330 = mf;

if(cljs.core.truth_(and__3546__auto____9330))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9330;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9331 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9331))
{return or__3548__auto____9331;
} else
{var or__3548__auto____9332 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9332))
{return or__3548__auto____9332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9333 = mf;

if(cljs.core.truth_(and__3546__auto____9333))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9333;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9334 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9334))
{return or__3548__auto____9334;
} else
{var or__3548__auto____9335 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9335))
{return or__3548__auto____9335;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9336 = mf;

if(cljs.core.truth_(and__3546__auto____9336))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9336;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9337 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9337))
{return or__3548__auto____9337;
} else
{var or__3548__auto____9338 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9338))
{return or__3548__auto____9338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9339 = mf;

if(cljs.core.truth_(and__3546__auto____9339))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____9339;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____9340 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9340))
{return or__3548__auto____9340;
} else
{var or__3548__auto____9341 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____9341))
{return or__3548__auto____9341;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9342 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9343 = cljs.core._get_method.call(null,mf,dispatch_val__9342);

if(cljs.core.truth_(target_fn__9343))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9342)));
}
return cljs.core.apply.call(null,target_fn__9343,args);
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
var this__9344 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9345 = this;
cljs.core.swap_BANG_.call(null,this__9345.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9345.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9345.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9345.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9346 = this;
cljs.core.swap_BANG_.call(null,this__9346.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9346.method_cache,this__9346.method_table,this__9346.cached_hierarchy,this__9346.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9347 = this;
cljs.core.swap_BANG_.call(null,this__9347.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9347.method_cache,this__9347.method_table,this__9347.cached_hierarchy,this__9347.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9348 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9348.cached_hierarchy),cljs.core.deref.call(null,this__9348.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9348.method_cache,this__9348.method_table,this__9348.cached_hierarchy,this__9348.hierarchy);
}
var temp__3695__auto____9349 = cljs.core.deref.call(null,this__9348.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9349))
{var target_fn__9350 = temp__3695__auto____9349;

return target_fn__9350;
} else
{var temp__3695__auto____9351 = cljs.core.find_and_cache_best_method.call(null,this__9348.name,dispatch_val,this__9348.hierarchy,this__9348.method_table,this__9348.prefer_table,this__9348.method_cache,this__9348.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9351))
{var target_fn__9352 = temp__3695__auto____9351;

return target_fn__9352;
} else
{return cljs.core.deref.call(null,this__9348.method_table).call(null,this__9348.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9353 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9353.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9353.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9353.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9353.method_cache,this__9353.method_table,this__9353.cached_hierarchy,this__9353.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9354 = this;
return cljs.core.deref.call(null,this__9354.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9355 = this;
return cljs.core.deref.call(null,this__9355.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9356 = this;
return cljs.core.do_dispatch.call(null,mf,this__9356.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9357__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9357 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9357__delegate.call(this, _, args);
};
G__9357.cljs$lang$maxFixedArity = 1;
G__9357.cljs$lang$applyTo = (function (arglist__9358){
var _ = cljs.core.first(arglist__9358);
var args = cljs.core.rest(arglist__9358);
return G__9357__delegate.call(this, _, args);
});
return G__9357;
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
