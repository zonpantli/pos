goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8598){
var vec__8599__8600 = p__8598;
var k__8601 = cljs.core.nth.call(null,vec__8599__8600,0,null);
var v__8602 = cljs.core.nth.call(null,vec__8599__8600,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8601.toLowerCase()),v__8602]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__8633 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____8603 = this$;

if(cljs.core.truth_(and__3546__auto____8603))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8603;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____8604 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8604))
{return or__3548__auto____8604;
} else
{var or__3548__auto____8605 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8605))
{return or__3548__auto____8605;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__8634 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____8606 = this$;

if(cljs.core.truth_(and__3546__auto____8606))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8606;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____8607 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8607))
{return or__3548__auto____8607;
} else
{var or__3548__auto____8608 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8608))
{return or__3548__auto____8608;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__8635 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8609 = this$;

if(cljs.core.truth_(and__3546__auto____8609))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8609;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____8610 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8610))
{return or__3548__auto____8610;
} else
{var or__3548__auto____8611 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8611))
{return or__3548__auto____8611;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__8636 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8612 = this$;

if(cljs.core.truth_(and__3546__auto____8612))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8612;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____8613 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8613))
{return or__3548__auto____8613;
} else
{var or__3548__auto____8614 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8614))
{return or__3548__auto____8614;
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
return connect__8633.call(this,this$);
case  2 :
return connect__8634.call(this,this$,opt1);
case  3 :
return connect__8635.call(this,this$,opt1,opt2);
case  4 :
return connect__8636.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__8638 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____8615 = this$;

if(cljs.core.truth_(and__3546__auto____8615))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8615;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____8616 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8616))
{return or__3548__auto____8616;
} else
{var or__3548__auto____8617 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8617))
{return or__3548__auto____8617;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__8639 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8618 = this$;

if(cljs.core.truth_(and__3546__auto____8618))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8618;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____8619 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8619))
{return or__3548__auto____8619;
} else
{var or__3548__auto____8620 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8620))
{return or__3548__auto____8620;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__8640 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8621 = this$;

if(cljs.core.truth_(and__3546__auto____8621))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8621;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____8622 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8622))
{return or__3548__auto____8622;
} else
{var or__3548__auto____8623 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8623))
{return or__3548__auto____8623;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__8641 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____8624 = this$;

if(cljs.core.truth_(and__3546__auto____8624))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8624;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____8625 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8625))
{return or__3548__auto____8625;
} else
{var or__3548__auto____8626 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8626))
{return or__3548__auto____8626;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__8642 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____8627 = this$;

if(cljs.core.truth_(and__3546__auto____8627))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8627;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____8628 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8628))
{return or__3548__auto____8628;
} else
{var or__3548__auto____8629 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8629))
{return or__3548__auto____8629;
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
return transmit__8638.call(this,this$,opt);
case  3 :
return transmit__8639.call(this,this$,opt,opt2);
case  4 :
return transmit__8640.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__8641.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__8642.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____8630 = this$;

if(cljs.core.truth_(and__3546__auto____8630))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____8630;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____8631 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8631))
{return or__3548__auto____8631;
} else
{var or__3548__auto____8632 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____8632))
{return or__3548__auto____8632;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8644){
var vec__8645__8646 = p__8644;
var k__8647 = cljs.core.nth.call(null,vec__8645__8646,0,null);
var v__8648 = cljs.core.nth.call(null,vec__8645__8646,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8647.toLowerCase()),v__8648]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__8649 = null;
var G__8649__8650 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8649__8651 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8649__8652 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8649__8653 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8649__8654 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__8649 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__8649__8650.call(this,this$,uri);
case  3 :
return G__8649__8651.call(this,this$,uri,method);
case  4 :
return G__8649__8652.call(this,this$,uri,method,content);
case  5 :
return G__8649__8653.call(this,this$,uri,method,content,headers);
case  6 :
return G__8649__8654.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8649;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8656){
var vec__8657__8658 = p__8656;
var k__8659 = cljs.core.nth.call(null,vec__8657__8658,0,null);
var v__8660 = cljs.core.nth.call(null,vec__8657__8658,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8659.toLowerCase()),v__8660]);
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
var register_service__8667 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____8661 = this$;

if(cljs.core.truth_(and__3546__auto____8661))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8661;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____8662 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8662))
{return or__3548__auto____8662;
} else
{var or__3548__auto____8663 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8663))
{return or__3548__auto____8663;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__8668 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____8664 = this$;

if(cljs.core.truth_(and__3546__auto____8664))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8664;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____8665 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8665))
{return or__3548__auto____8665;
} else
{var or__3548__auto____8666 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8666))
{return or__3548__auto____8666;
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
return register_service__8667.call(this,this$,service_name,fn);
case  4 :
return register_service__8668.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__8670 = null;
var G__8670__8671 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__8670__8672 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__8670__8673 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__8670__8674 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__8670 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__8670__8671.call(this,this$);
case  2 :
return G__8670__8672.call(this,this$,on_connect_fn);
case  3 :
return G__8670__8673.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__8670__8674.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8670;
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
var G__8676 = null;
var G__8676__8677 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__8676__8678 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__8676 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__8676__8677.call(this,this$,service_name,fn);
case  4 :
return G__8676__8678.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8676;
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
var xpc_connection__8689 = (function (){
var temp__3698__auto____8680 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____8680))
{var config__8681 = temp__3698__auto____8680;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__8681)));
} else
{return null;
}
});
var xpc_connection__8690 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__8682){
var vec__8683__8684 = p__8682;
var k__8685 = cljs.core.nth.call(null,vec__8683__8684,0,null);
var v__8686 = cljs.core.nth.call(null,vec__8683__8684,1,null);

var temp__3695__auto____8687 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__8685);

if(cljs.core.truth_(temp__3695__auto____8687))
{var field__8688 = temp__3695__auto____8687;

return cljs.core.assoc.call(null,sum,field__8688,v__8686);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__8689.call(this);
case  1 :
return xpc_connection__8690.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
