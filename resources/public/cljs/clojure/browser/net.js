goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8965){
var vec__8966__8967 = p__8965;
var k__8968 = cljs.core.nth.call(null,vec__8966__8967,0,null);
var v__8969 = cljs.core.nth.call(null,vec__8966__8967,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__8968.toLowerCase()),v__8969]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9000 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____8970 = this$;

if(cljs.core.truth_(and__3546__auto____8970))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8970;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____8971 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8971))
{return or__3548__auto____8971;
} else
{var or__3548__auto____8972 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8972))
{return or__3548__auto____8972;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9001 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____8973 = this$;

if(cljs.core.truth_(and__3546__auto____8973))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8973;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____8974 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8974))
{return or__3548__auto____8974;
} else
{var or__3548__auto____8975 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8975))
{return or__3548__auto____8975;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9002 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8976 = this$;

if(cljs.core.truth_(and__3546__auto____8976))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8976;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____8977 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8977))
{return or__3548__auto____8977;
} else
{var or__3548__auto____8978 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8978))
{return or__3548__auto____8978;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9003 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8979 = this$;

if(cljs.core.truth_(and__3546__auto____8979))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____8979;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____8980 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8980))
{return or__3548__auto____8980;
} else
{var or__3548__auto____8981 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____8981))
{return or__3548__auto____8981;
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
return connect__9000.call(this,this$);
case  2 :
return connect__9001.call(this,this$,opt1);
case  3 :
return connect__9002.call(this,this$,opt1,opt2);
case  4 :
return connect__9003.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9005 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____8982 = this$;

if(cljs.core.truth_(and__3546__auto____8982))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8982;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____8983 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8983))
{return or__3548__auto____8983;
} else
{var or__3548__auto____8984 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8984))
{return or__3548__auto____8984;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9006 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____8985 = this$;

if(cljs.core.truth_(and__3546__auto____8985))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8985;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____8986 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8986))
{return or__3548__auto____8986;
} else
{var or__3548__auto____8987 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8987))
{return or__3548__auto____8987;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9007 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____8988 = this$;

if(cljs.core.truth_(and__3546__auto____8988))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8988;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____8989 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8989))
{return or__3548__auto____8989;
} else
{var or__3548__auto____8990 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8990))
{return or__3548__auto____8990;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9008 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____8991 = this$;

if(cljs.core.truth_(and__3546__auto____8991))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8991;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____8992 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8992))
{return or__3548__auto____8992;
} else
{var or__3548__auto____8993 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8993))
{return or__3548__auto____8993;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9009 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____8994 = this$;

if(cljs.core.truth_(and__3546__auto____8994))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____8994;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____8995 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8995))
{return or__3548__auto____8995;
} else
{var or__3548__auto____8996 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____8996))
{return or__3548__auto____8996;
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
return transmit__9005.call(this,this$,opt);
case  3 :
return transmit__9006.call(this,this$,opt,opt2);
case  4 :
return transmit__9007.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9008.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9009.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____8997 = this$;

if(cljs.core.truth_(and__3546__auto____8997))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____8997;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____8998 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8998))
{return or__3548__auto____8998;
} else
{var or__3548__auto____8999 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____8999))
{return or__3548__auto____8999;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9011){
var vec__9012__9013 = p__9011;
var k__9014 = cljs.core.nth.call(null,vec__9012__9013,0,null);
var v__9015 = cljs.core.nth.call(null,vec__9012__9013,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9014.toLowerCase()),v__9015]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9016 = null;
var G__9016__9017 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9016__9018 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9016__9019 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9016__9020 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9016__9021 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9016 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9016__9017.call(this,this$,uri);
case  3 :
return G__9016__9018.call(this,this$,uri,method);
case  4 :
return G__9016__9019.call(this,this$,uri,method,content);
case  5 :
return G__9016__9020.call(this,this$,uri,method,content,headers);
case  6 :
return G__9016__9021.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9016;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9023){
var vec__9024__9025 = p__9023;
var k__9026 = cljs.core.nth.call(null,vec__9024__9025,0,null);
var v__9027 = cljs.core.nth.call(null,vec__9024__9025,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9026.toLowerCase()),v__9027]);
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
var register_service__9034 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9028 = this$;

if(cljs.core.truth_(and__3546__auto____9028))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9028;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9029 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9029))
{return or__3548__auto____9029;
} else
{var or__3548__auto____9030 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9030))
{return or__3548__auto____9030;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9035 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9031 = this$;

if(cljs.core.truth_(and__3546__auto____9031))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9031;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9032 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9032))
{return or__3548__auto____9032;
} else
{var or__3548__auto____9033 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9033))
{return or__3548__auto____9033;
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
return register_service__9034.call(this,this$,service_name,fn);
case  4 :
return register_service__9035.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9037 = null;
var G__9037__9038 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9037__9039 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9037__9040 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9037__9041 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9037 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9037__9038.call(this,this$);
case  2 :
return G__9037__9039.call(this,this$,on_connect_fn);
case  3 :
return G__9037__9040.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9037__9041.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9037;
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
var G__9043 = null;
var G__9043__9044 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9043__9045 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9043 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9043__9044.call(this,this$,service_name,fn);
case  4 :
return G__9043__9045.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9043;
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
var xpc_connection__9056 = (function (){
var temp__3698__auto____9047 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9047))
{var config__9048 = temp__3698__auto____9047;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9048)));
} else
{return null;
}
});
var xpc_connection__9057 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9049){
var vec__9050__9051 = p__9049;
var k__9052 = cljs.core.nth.call(null,vec__9050__9051,0,null);
var v__9053 = cljs.core.nth.call(null,vec__9050__9051,1,null);

var temp__3695__auto____9054 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9052);

if(cljs.core.truth_(temp__3695__auto____9054))
{var field__9055 = temp__3695__auto____9054;

return cljs.core.assoc.call(null,sum,field__9055,v__9053);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9056.call(this);
case  1 :
return xpc_connection__9057.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
