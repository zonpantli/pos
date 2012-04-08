goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9658){
var vec__9659__9660 = p__9658;
var k__9661 = cljs.core.nth.call(null,vec__9659__9660,0,null);
var v__9662 = cljs.core.nth.call(null,vec__9659__9660,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9661.toLowerCase()),v__9662]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9693 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9663 = this$;

if(cljs.core.truth_(and__3546__auto____9663))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9663;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____9664 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9664))
{return or__3548__auto____9664;
} else
{var or__3548__auto____9665 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9665))
{return or__3548__auto____9665;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9694 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____9666 = this$;

if(cljs.core.truth_(and__3546__auto____9666))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9666;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____9667 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9667))
{return or__3548__auto____9667;
} else
{var or__3548__auto____9668 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9668))
{return or__3548__auto____9668;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9695 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9669 = this$;

if(cljs.core.truth_(and__3546__auto____9669))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9669;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____9670 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9670))
{return or__3548__auto____9670;
} else
{var or__3548__auto____9671 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9671))
{return or__3548__auto____9671;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9696 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9672 = this$;

if(cljs.core.truth_(and__3546__auto____9672))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9672;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____9673 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9673))
{return or__3548__auto____9673;
} else
{var or__3548__auto____9674 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9674))
{return or__3548__auto____9674;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__9693.call(this,this$);
case  2 :
return connect__9694.call(this,this$,opt1);
case  3 :
return connect__9695.call(this,this$,opt1,opt2);
case  4 :
return connect__9696.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9698 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____9675 = this$;

if(cljs.core.truth_(and__3546__auto____9675))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9675;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____9676 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9676))
{return or__3548__auto____9676;
} else
{var or__3548__auto____9677 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9677))
{return or__3548__auto____9677;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9699 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9678 = this$;

if(cljs.core.truth_(and__3546__auto____9678))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9678;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____9679 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9679))
{return or__3548__auto____9679;
} else
{var or__3548__auto____9680 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9680))
{return or__3548__auto____9680;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9700 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9681 = this$;

if(cljs.core.truth_(and__3546__auto____9681))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9681;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____9682 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9682))
{return or__3548__auto____9682;
} else
{var or__3548__auto____9683 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9683))
{return or__3548__auto____9683;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9701 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____9684 = this$;

if(cljs.core.truth_(and__3546__auto____9684))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9684;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____9685 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9685))
{return or__3548__auto____9685;
} else
{var or__3548__auto____9686 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9686))
{return or__3548__auto____9686;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9702 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____9687 = this$;

if(cljs.core.truth_(and__3546__auto____9687))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9687;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____9688 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9688))
{return or__3548__auto____9688;
} else
{var or__3548__auto____9689 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9689))
{return or__3548__auto____9689;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__9698.call(this,this$,opt);
case  3 :
return transmit__9699.call(this,this$,opt,opt2);
case  4 :
return transmit__9700.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9701.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9702.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____9690 = this$;

if(cljs.core.truth_(and__3546__auto____9690))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____9690;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____9691 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9691))
{return or__3548__auto____9691;
} else
{var or__3548__auto____9692 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____9692))
{return or__3548__auto____9692;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9704){
var vec__9705__9706 = p__9704;
var k__9707 = cljs.core.nth.call(null,vec__9705__9706,0,null);
var v__9708 = cljs.core.nth.call(null,vec__9705__9706,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9707.toLowerCase()),v__9708]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9709 = null;
var G__9709__9710 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9709__9711 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9709__9712 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9709__9713 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9709__9714 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9709 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9709__9710.call(this,this$,uri);
case  3 :
return G__9709__9711.call(this,this$,uri,method);
case  4 :
return G__9709__9712.call(this,this$,uri,method,content);
case  5 :
return G__9709__9713.call(this,this$,uri,method,content,headers);
case  6 :
return G__9709__9714.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9709;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9716){
var vec__9717__9718 = p__9716;
var k__9719 = cljs.core.nth.call(null,vec__9717__9718,0,null);
var v__9720 = cljs.core.nth.call(null,vec__9717__9718,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9719.toLowerCase()),v__9720]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__9727 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9721 = this$;

if(cljs.core.truth_(and__3546__auto____9721))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9721;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9722 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9722))
{return or__3548__auto____9722;
} else
{var or__3548__auto____9723 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9723))
{return or__3548__auto____9723;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9728 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9724 = this$;

if(cljs.core.truth_(and__3546__auto____9724))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9724;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9725 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9725))
{return or__3548__auto____9725;
} else
{var or__3548__auto____9726 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9726))
{return or__3548__auto____9726;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__9727.call(this,this$,service_name,fn);
case  4 :
return register_service__9728.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9730 = null;
var G__9730__9731 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9730__9732 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9730__9733 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9730__9734 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9730 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9730__9731.call(this,this$);
case  2 :
return G__9730__9732.call(this,this$,on_connect_fn);
case  3 :
return G__9730__9733.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9730__9734.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9730;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__9736 = null;
var G__9736__9737 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9736__9738 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9736 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9736__9737.call(this,this$,service_name,fn);
case  4 :
return G__9736__9738.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9736;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__9749 = (function (){
var temp__3698__auto____9740 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9740))
{var config__9741 = temp__3698__auto____9740;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9741)));
} else
{return null;
}
});
var xpc_connection__9750 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9742){
var vec__9743__9744 = p__9742;
var k__9745 = cljs.core.nth.call(null,vec__9743__9744,0,null);
var v__9746 = cljs.core.nth.call(null,vec__9743__9744,1,null);

var temp__3695__auto____9747 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9745);

if(cljs.core.truth_(temp__3695__auto____9747))
{var field__9748 = temp__3695__auto____9747;

return cljs.core.assoc.call(null,sum,field__9748,v__9746);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9749.call(this);
case  1 :
return xpc_connection__9750.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
