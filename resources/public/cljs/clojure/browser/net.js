goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9309){
var vec__9310__9311 = p__9309;
var k__9312 = cljs.core.nth.call(null,vec__9310__9311,0,null);
var v__9313 = cljs.core.nth.call(null,vec__9310__9311,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9312.toLowerCase()),v__9313]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9344 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9314 = this$;

if(cljs.core.truth_(and__3546__auto____9314))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9314;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____9315 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9315))
{return or__3548__auto____9315;
} else
{var or__3548__auto____9316 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9316))
{return or__3548__auto____9316;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9345 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____9317 = this$;

if(cljs.core.truth_(and__3546__auto____9317))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9317;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____9318 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9318))
{return or__3548__auto____9318;
} else
{var or__3548__auto____9319 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9319))
{return or__3548__auto____9319;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9346 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9320 = this$;

if(cljs.core.truth_(and__3546__auto____9320))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9320;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____9321 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9321))
{return or__3548__auto____9321;
} else
{var or__3548__auto____9322 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9322))
{return or__3548__auto____9322;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9347 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9323 = this$;

if(cljs.core.truth_(and__3546__auto____9323))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9323;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____9324 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9324))
{return or__3548__auto____9324;
} else
{var or__3548__auto____9325 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9325))
{return or__3548__auto____9325;
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
return connect__9344.call(this,this$);
case  2 :
return connect__9345.call(this,this$,opt1);
case  3 :
return connect__9346.call(this,this$,opt1,opt2);
case  4 :
return connect__9347.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9349 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____9326 = this$;

if(cljs.core.truth_(and__3546__auto____9326))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9326;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____9327 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9327))
{return or__3548__auto____9327;
} else
{var or__3548__auto____9328 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9328))
{return or__3548__auto____9328;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9350 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9329 = this$;

if(cljs.core.truth_(and__3546__auto____9329))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9329;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____9330 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9330))
{return or__3548__auto____9330;
} else
{var or__3548__auto____9331 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9331))
{return or__3548__auto____9331;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9351 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9332 = this$;

if(cljs.core.truth_(and__3546__auto____9332))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9332;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____9333 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9333))
{return or__3548__auto____9333;
} else
{var or__3548__auto____9334 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9334))
{return or__3548__auto____9334;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9352 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____9335 = this$;

if(cljs.core.truth_(and__3546__auto____9335))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9335;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____9336 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9336))
{return or__3548__auto____9336;
} else
{var or__3548__auto____9337 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9337))
{return or__3548__auto____9337;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9353 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____9338 = this$;

if(cljs.core.truth_(and__3546__auto____9338))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9338;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____9339 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9339))
{return or__3548__auto____9339;
} else
{var or__3548__auto____9340 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9340))
{return or__3548__auto____9340;
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
return transmit__9349.call(this,this$,opt);
case  3 :
return transmit__9350.call(this,this$,opt,opt2);
case  4 :
return transmit__9351.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9352.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9353.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____9341 = this$;

if(cljs.core.truth_(and__3546__auto____9341))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____9341;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____9342 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9342))
{return or__3548__auto____9342;
} else
{var or__3548__auto____9343 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____9343))
{return or__3548__auto____9343;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9355){
var vec__9356__9357 = p__9355;
var k__9358 = cljs.core.nth.call(null,vec__9356__9357,0,null);
var v__9359 = cljs.core.nth.call(null,vec__9356__9357,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9358.toLowerCase()),v__9359]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9360 = null;
var G__9360__9361 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9360__9362 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9360__9363 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9360__9364 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9360__9365 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9360 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9360__9361.call(this,this$,uri);
case  3 :
return G__9360__9362.call(this,this$,uri,method);
case  4 :
return G__9360__9363.call(this,this$,uri,method,content);
case  5 :
return G__9360__9364.call(this,this$,uri,method,content,headers);
case  6 :
return G__9360__9365.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9360;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9367){
var vec__9368__9369 = p__9367;
var k__9370 = cljs.core.nth.call(null,vec__9368__9369,0,null);
var v__9371 = cljs.core.nth.call(null,vec__9368__9369,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9370.toLowerCase()),v__9371]);
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
var register_service__9378 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9372 = this$;

if(cljs.core.truth_(and__3546__auto____9372))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9372;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9373 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9373))
{return or__3548__auto____9373;
} else
{var or__3548__auto____9374 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9374))
{return or__3548__auto____9374;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9379 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9375 = this$;

if(cljs.core.truth_(and__3546__auto____9375))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9375;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9376 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9376))
{return or__3548__auto____9376;
} else
{var or__3548__auto____9377 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9377))
{return or__3548__auto____9377;
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
return register_service__9378.call(this,this$,service_name,fn);
case  4 :
return register_service__9379.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9381 = null;
var G__9381__9382 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9381__9383 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9381__9384 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9381__9385 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9381 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9381__9382.call(this,this$);
case  2 :
return G__9381__9383.call(this,this$,on_connect_fn);
case  3 :
return G__9381__9384.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9381__9385.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9381;
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
var G__9387 = null;
var G__9387__9388 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9387__9389 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9387 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9387__9388.call(this,this$,service_name,fn);
case  4 :
return G__9387__9389.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9387;
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
var xpc_connection__9400 = (function (){
var temp__3698__auto____9391 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9391))
{var config__9392 = temp__3698__auto____9391;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9392)));
} else
{return null;
}
});
var xpc_connection__9401 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9393){
var vec__9394__9395 = p__9393;
var k__9396 = cljs.core.nth.call(null,vec__9394__9395,0,null);
var v__9397 = cljs.core.nth.call(null,vec__9394__9395,1,null);

var temp__3695__auto____9398 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9396);

if(cljs.core.truth_(temp__3695__auto____9398))
{var field__9399 = temp__3695__auto____9398;

return cljs.core.assoc.call(null,sum,field__9399,v__9397);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9400.call(this);
case  1 :
return xpc_connection__9401.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
