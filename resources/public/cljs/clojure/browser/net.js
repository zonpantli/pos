goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9333){
var vec__9334__9335 = p__9333;
var k__9336 = cljs.core.nth.call(null,vec__9334__9335,0,null);
var v__9337 = cljs.core.nth.call(null,vec__9334__9335,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9336.toLowerCase()),v__9337]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9368 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9338 = this$;

if(cljs.core.truth_(and__3546__auto____9338))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9338;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____9339 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9339))
{return or__3548__auto____9339;
} else
{var or__3548__auto____9340 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9340))
{return or__3548__auto____9340;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9369 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____9341 = this$;

if(cljs.core.truth_(and__3546__auto____9341))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9341;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____9342 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9342))
{return or__3548__auto____9342;
} else
{var or__3548__auto____9343 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9343))
{return or__3548__auto____9343;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9370 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9344 = this$;

if(cljs.core.truth_(and__3546__auto____9344))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9344;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____9345 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9345))
{return or__3548__auto____9345;
} else
{var or__3548__auto____9346 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9346))
{return or__3548__auto____9346;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9371 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9347 = this$;

if(cljs.core.truth_(and__3546__auto____9347))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9347;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____9348 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9348))
{return or__3548__auto____9348;
} else
{var or__3548__auto____9349 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9349))
{return or__3548__auto____9349;
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
return connect__9368.call(this,this$);
case  2 :
return connect__9369.call(this,this$,opt1);
case  3 :
return connect__9370.call(this,this$,opt1,opt2);
case  4 :
return connect__9371.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9373 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____9350 = this$;

if(cljs.core.truth_(and__3546__auto____9350))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9350;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____9351 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9351))
{return or__3548__auto____9351;
} else
{var or__3548__auto____9352 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9352))
{return or__3548__auto____9352;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9374 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9353 = this$;

if(cljs.core.truth_(and__3546__auto____9353))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9353;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____9354 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9354))
{return or__3548__auto____9354;
} else
{var or__3548__auto____9355 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9355))
{return or__3548__auto____9355;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9375 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9356 = this$;

if(cljs.core.truth_(and__3546__auto____9356))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9356;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____9357 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9357))
{return or__3548__auto____9357;
} else
{var or__3548__auto____9358 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9358))
{return or__3548__auto____9358;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9376 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____9359 = this$;

if(cljs.core.truth_(and__3546__auto____9359))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9359;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____9360 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9360))
{return or__3548__auto____9360;
} else
{var or__3548__auto____9361 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9361))
{return or__3548__auto____9361;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9377 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____9362 = this$;

if(cljs.core.truth_(and__3546__auto____9362))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9362;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____9363 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9363))
{return or__3548__auto____9363;
} else
{var or__3548__auto____9364 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9364))
{return or__3548__auto____9364;
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
return transmit__9373.call(this,this$,opt);
case  3 :
return transmit__9374.call(this,this$,opt,opt2);
case  4 :
return transmit__9375.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9376.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9377.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____9365 = this$;

if(cljs.core.truth_(and__3546__auto____9365))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____9365;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____9366 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9366))
{return or__3548__auto____9366;
} else
{var or__3548__auto____9367 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____9367))
{return or__3548__auto____9367;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9379){
var vec__9380__9381 = p__9379;
var k__9382 = cljs.core.nth.call(null,vec__9380__9381,0,null);
var v__9383 = cljs.core.nth.call(null,vec__9380__9381,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9382.toLowerCase()),v__9383]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9384 = null;
var G__9384__9385 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9384__9386 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9384__9387 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9384__9388 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9384__9389 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9384 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9384__9385.call(this,this$,uri);
case  3 :
return G__9384__9386.call(this,this$,uri,method);
case  4 :
return G__9384__9387.call(this,this$,uri,method,content);
case  5 :
return G__9384__9388.call(this,this$,uri,method,content,headers);
case  6 :
return G__9384__9389.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9384;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9391){
var vec__9392__9393 = p__9391;
var k__9394 = cljs.core.nth.call(null,vec__9392__9393,0,null);
var v__9395 = cljs.core.nth.call(null,vec__9392__9393,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9394.toLowerCase()),v__9395]);
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
var register_service__9402 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9396 = this$;

if(cljs.core.truth_(and__3546__auto____9396))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9396;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9397 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9397))
{return or__3548__auto____9397;
} else
{var or__3548__auto____9398 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9398))
{return or__3548__auto____9398;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9403 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9399 = this$;

if(cljs.core.truth_(and__3546__auto____9399))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9399;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9400 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9400))
{return or__3548__auto____9400;
} else
{var or__3548__auto____9401 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9401))
{return or__3548__auto____9401;
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
return register_service__9402.call(this,this$,service_name,fn);
case  4 :
return register_service__9403.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9405 = null;
var G__9405__9406 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9405__9407 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9405__9408 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9405__9409 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9405 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9405__9406.call(this,this$);
case  2 :
return G__9405__9407.call(this,this$,on_connect_fn);
case  3 :
return G__9405__9408.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9405__9409.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9405;
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
var G__9411 = null;
var G__9411__9412 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9411__9413 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9411 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9411__9412.call(this,this$,service_name,fn);
case  4 :
return G__9411__9413.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9411;
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
var xpc_connection__9424 = (function (){
var temp__3698__auto____9415 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9415))
{var config__9416 = temp__3698__auto____9415;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9416)));
} else
{return null;
}
});
var xpc_connection__9425 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9417){
var vec__9418__9419 = p__9417;
var k__9420 = cljs.core.nth.call(null,vec__9418__9419,0,null);
var v__9421 = cljs.core.nth.call(null,vec__9418__9419,1,null);

var temp__3695__auto____9422 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9420);

if(cljs.core.truth_(temp__3695__auto____9422))
{var field__9423 = temp__3695__auto____9422;

return cljs.core.assoc.call(null,sum,field__9423,v__9421);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9424.call(this);
case  1 :
return xpc_connection__9425.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
