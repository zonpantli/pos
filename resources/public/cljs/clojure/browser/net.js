goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8537){
var vec__8538__8539 = p__8537;
var k__8540 = cljs.core.nth.call(null,vec__8538__8539,0,null);
var v__8541 = cljs.core.nth.call(null,vec__8538__8539,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8540.toLowerCase()),v__8541]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__8572 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____8542 = this$;

if(cljs.core.truth_(and__3546__auto____8542))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8542;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____8543 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8543))
{return or__3548__auto____8543;
} else
{var or__3548__auto____8544 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8544))
{return or__3548__auto____8544;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__8573 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____8545 = this$;

if(cljs.core.truth_(and__3546__auto____8545))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8545;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____8546 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8546))
{return or__3548__auto____8546;
} else
{var or__3548__auto____8547 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8547))
{return or__3548__auto____8547;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__8574 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8548 = this$;

if(cljs.core.truth_(and__3546__auto____8548))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8548;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____8549 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8549))
{return or__3548__auto____8549;
} else
{var or__3548__auto____8550 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8550))
{return or__3548__auto____8550;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__8575 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8551 = this$;

if(cljs.core.truth_(and__3546__auto____8551))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8551;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____8552 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8552))
{return or__3548__auto____8552;
} else
{var or__3548__auto____8553 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8553))
{return or__3548__auto____8553;
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
return connect__8572.call(this,this$);
case  2 :
return connect__8573.call(this,this$,opt1);
case  3 :
return connect__8574.call(this,this$,opt1,opt2);
case  4 :
return connect__8575.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__8577 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____8554 = this$;

if(cljs.core.truth_(and__3546__auto____8554))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8554;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____8555 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8555))
{return or__3548__auto____8555;
} else
{var or__3548__auto____8556 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8556))
{return or__3548__auto____8556;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__8578 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8557 = this$;

if(cljs.core.truth_(and__3546__auto____8557))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8557;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____8558 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8558))
{return or__3548__auto____8558;
} else
{var or__3548__auto____8559 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8559))
{return or__3548__auto____8559;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__8579 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8560 = this$;

if(cljs.core.truth_(and__3546__auto____8560))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8560;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____8561 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8561))
{return or__3548__auto____8561;
} else
{var or__3548__auto____8562 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8562))
{return or__3548__auto____8562;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__8580 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____8563 = this$;

if(cljs.core.truth_(and__3546__auto____8563))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8563;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____8564 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8564))
{return or__3548__auto____8564;
} else
{var or__3548__auto____8565 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8565))
{return or__3548__auto____8565;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__8581 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____8566 = this$;

if(cljs.core.truth_(and__3546__auto____8566))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8566;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____8567 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8567))
{return or__3548__auto____8567;
} else
{var or__3548__auto____8568 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8568))
{return or__3548__auto____8568;
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
return transmit__8577.call(this,this$,opt);
case  3 :
return transmit__8578.call(this,this$,opt,opt2);
case  4 :
return transmit__8579.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__8580.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__8581.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____8569 = this$;

if(cljs.core.truth_(and__3546__auto____8569))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____8569;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____8570 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8570))
{return or__3548__auto____8570;
} else
{var or__3548__auto____8571 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____8571))
{return or__3548__auto____8571;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8583){
var vec__8584__8585 = p__8583;
var k__8586 = cljs.core.nth.call(null,vec__8584__8585,0,null);
var v__8587 = cljs.core.nth.call(null,vec__8584__8585,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8586.toLowerCase()),v__8587]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__8588 = null;
var G__8588__8589 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8588__8590 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8588__8591 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8588__8592 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__8588__8593 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__8588 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__8588__8589.call(this,this$,uri);
case  3 :
return G__8588__8590.call(this,this$,uri,method);
case  4 :
return G__8588__8591.call(this,this$,uri,method,content);
case  5 :
return G__8588__8592.call(this,this$,uri,method,content,headers);
case  6 :
return G__8588__8593.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8588;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8595){
var vec__8596__8597 = p__8595;
var k__8598 = cljs.core.nth.call(null,vec__8596__8597,0,null);
var v__8599 = cljs.core.nth.call(null,vec__8596__8597,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__8598.toLowerCase()),v__8599]);
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
var register_service__8606 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____8600 = this$;

if(cljs.core.truth_(and__3546__auto____8600))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8600;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____8601 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8601))
{return or__3548__auto____8601;
} else
{var or__3548__auto____8602 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8602))
{return or__3548__auto____8602;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__8607 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____8603 = this$;

if(cljs.core.truth_(and__3546__auto____8603))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____8603;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____8604 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8604))
{return or__3548__auto____8604;
} else
{var or__3548__auto____8605 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____8605))
{return or__3548__auto____8605;
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
return register_service__8606.call(this,this$,service_name,fn);
case  4 :
return register_service__8607.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__8609 = null;
var G__8609__8610 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__8609__8611 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__8609__8612 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__8609__8613 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__8609 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__8609__8610.call(this,this$);
case  2 :
return G__8609__8611.call(this,this$,on_connect_fn);
case  3 :
return G__8609__8612.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__8609__8613.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8609;
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
var G__8615 = null;
var G__8615__8616 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__8615__8617 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__8615 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__8615__8616.call(this,this$,service_name,fn);
case  4 :
return G__8615__8617.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8615;
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
var xpc_connection__8628 = (function (){
var temp__3698__auto____8619 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____8619))
{var config__8620 = temp__3698__auto____8619;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__8620)));
} else
{return null;
}
});
var xpc_connection__8629 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__8621){
var vec__8622__8623 = p__8621;
var k__8624 = cljs.core.nth.call(null,vec__8622__8623,0,null);
var v__8625 = cljs.core.nth.call(null,vec__8622__8623,1,null);

var temp__3695__auto____8626 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__8624);

if(cljs.core.truth_(temp__3695__auto____8626))
{var field__8627 = temp__3695__auto____8626;

return cljs.core.assoc.call(null,sum,field__8627,v__8625);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__8628.call(this);
case  1 :
return xpc_connection__8629.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
