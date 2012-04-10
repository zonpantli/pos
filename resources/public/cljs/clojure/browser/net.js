goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13433){
var vec__13434__13435 = p__13433;
var k__13436 = cljs.core.nth.call(null,vec__13434__13435,0,null);
var v__13437 = cljs.core.nth.call(null,vec__13434__13435,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13436.toLowerCase()),v__13437]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__13468 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____13438 = this$;

if(cljs.core.truth_(and__3546__auto____13438))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13438;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____13439 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13439))
{return or__3548__auto____13439;
} else
{var or__3548__auto____13440 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13440))
{return or__3548__auto____13440;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__13469 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____13441 = this$;

if(cljs.core.truth_(and__3546__auto____13441))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13441;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____13442 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13442))
{return or__3548__auto____13442;
} else
{var or__3548__auto____13443 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13443))
{return or__3548__auto____13443;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__13470 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____13444 = this$;

if(cljs.core.truth_(and__3546__auto____13444))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13444;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____13445 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13445))
{return or__3548__auto____13445;
} else
{var or__3548__auto____13446 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13446))
{return or__3548__auto____13446;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__13471 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____13447 = this$;

if(cljs.core.truth_(and__3546__auto____13447))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13447;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____13448 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13448))
{return or__3548__auto____13448;
} else
{var or__3548__auto____13449 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13449))
{return or__3548__auto____13449;
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
return connect__13468.call(this,this$);
case  2 :
return connect__13469.call(this,this$,opt1);
case  3 :
return connect__13470.call(this,this$,opt1,opt2);
case  4 :
return connect__13471.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__13473 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____13450 = this$;

if(cljs.core.truth_(and__3546__auto____13450))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13450;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____13451 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13451))
{return or__3548__auto____13451;
} else
{var or__3548__auto____13452 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13452))
{return or__3548__auto____13452;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__13474 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____13453 = this$;

if(cljs.core.truth_(and__3546__auto____13453))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13453;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____13454 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13454))
{return or__3548__auto____13454;
} else
{var or__3548__auto____13455 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13455))
{return or__3548__auto____13455;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__13475 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____13456 = this$;

if(cljs.core.truth_(and__3546__auto____13456))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13456;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____13457 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13457))
{return or__3548__auto____13457;
} else
{var or__3548__auto____13458 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13458))
{return or__3548__auto____13458;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__13476 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____13459 = this$;

if(cljs.core.truth_(and__3546__auto____13459))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13459;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____13460 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13460))
{return or__3548__auto____13460;
} else
{var or__3548__auto____13461 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13461))
{return or__3548__auto____13461;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__13477 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____13462 = this$;

if(cljs.core.truth_(and__3546__auto____13462))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13462;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____13463 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13463))
{return or__3548__auto____13463;
} else
{var or__3548__auto____13464 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13464))
{return or__3548__auto____13464;
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
return transmit__13473.call(this,this$,opt);
case  3 :
return transmit__13474.call(this,this$,opt,opt2);
case  4 :
return transmit__13475.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__13476.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__13477.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13465 = this$;

if(cljs.core.truth_(and__3546__auto____13465))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____13465;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____13466 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13466))
{return or__3548__auto____13466;
} else
{var or__3548__auto____13467 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____13467))
{return or__3548__auto____13467;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13479){
var vec__13480__13481 = p__13479;
var k__13482 = cljs.core.nth.call(null,vec__13480__13481,0,null);
var v__13483 = cljs.core.nth.call(null,vec__13480__13481,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13482.toLowerCase()),v__13483]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__13484 = null;
var G__13484__13485 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13484__13486 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13484__13487 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13484__13488 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13484__13489 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__13484 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__13484__13485.call(this,this$,uri);
case  3 :
return G__13484__13486.call(this,this$,uri,method);
case  4 :
return G__13484__13487.call(this,this$,uri,method,content);
case  5 :
return G__13484__13488.call(this,this$,uri,method,content,headers);
case  6 :
return G__13484__13489.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13484;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13491){
var vec__13492__13493 = p__13491;
var k__13494 = cljs.core.nth.call(null,vec__13492__13493,0,null);
var v__13495 = cljs.core.nth.call(null,vec__13492__13493,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13494.toLowerCase()),v__13495]);
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
var register_service__13502 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____13496 = this$;

if(cljs.core.truth_(and__3546__auto____13496))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____13496;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____13497 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13497))
{return or__3548__auto____13497;
} else
{var or__3548__auto____13498 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____13498))
{return or__3548__auto____13498;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__13503 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____13499 = this$;

if(cljs.core.truth_(and__3546__auto____13499))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____13499;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____13500 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13500))
{return or__3548__auto____13500;
} else
{var or__3548__auto____13501 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____13501))
{return or__3548__auto____13501;
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
return register_service__13502.call(this,this$,service_name,fn);
case  4 :
return register_service__13503.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__13505 = null;
var G__13505__13506 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__13505__13507 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__13505__13508 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__13505__13509 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__13505 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__13505__13506.call(this,this$);
case  2 :
return G__13505__13507.call(this,this$,on_connect_fn);
case  3 :
return G__13505__13508.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__13505__13509.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13505;
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
var G__13511 = null;
var G__13511__13512 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__13511__13513 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__13511 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__13511__13512.call(this,this$,service_name,fn);
case  4 :
return G__13511__13513.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13511;
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
var xpc_connection__13524 = (function (){
var temp__3698__auto____13515 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____13515))
{var config__13516 = temp__3698__auto____13515;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__13516)));
} else
{return null;
}
});
var xpc_connection__13525 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13517){
var vec__13518__13519 = p__13517;
var k__13520 = cljs.core.nth.call(null,vec__13518__13519,0,null);
var v__13521 = cljs.core.nth.call(null,vec__13518__13519,1,null);

var temp__3695__auto____13522 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__13520);

if(cljs.core.truth_(temp__3695__auto____13522))
{var field__13523 = temp__3695__auto____13522;

return cljs.core.assoc.call(null,sum,field__13523,v__13521);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__13524.call(this);
case  1 :
return xpc_connection__13525.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
