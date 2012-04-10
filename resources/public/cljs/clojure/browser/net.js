goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10098){
var vec__10099__10100 = p__10098;
var k__10101 = cljs.core.nth.call(null,vec__10099__10100,0,null);
var v__10102 = cljs.core.nth.call(null,vec__10099__10100,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10101.toLowerCase()),v__10102]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__10133 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____10103 = this$;

if(cljs.core.truth_(and__3546__auto____10103))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10103;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____10104 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10104))
{return or__3548__auto____10104;
} else
{var or__3548__auto____10105 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10105))
{return or__3548__auto____10105;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__10134 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____10106 = this$;

if(cljs.core.truth_(and__3546__auto____10106))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10106;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____10107 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10107))
{return or__3548__auto____10107;
} else
{var or__3548__auto____10108 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10108))
{return or__3548__auto____10108;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__10135 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____10109 = this$;

if(cljs.core.truth_(and__3546__auto____10109))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10109;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____10110 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10110))
{return or__3548__auto____10110;
} else
{var or__3548__auto____10111 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10111))
{return or__3548__auto____10111;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__10136 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____10112 = this$;

if(cljs.core.truth_(and__3546__auto____10112))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10112;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____10113 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10113))
{return or__3548__auto____10113;
} else
{var or__3548__auto____10114 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10114))
{return or__3548__auto____10114;
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
return connect__10133.call(this,this$);
case  2 :
return connect__10134.call(this,this$,opt1);
case  3 :
return connect__10135.call(this,this$,opt1,opt2);
case  4 :
return connect__10136.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__10138 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____10115 = this$;

if(cljs.core.truth_(and__3546__auto____10115))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10115;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____10116 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10116))
{return or__3548__auto____10116;
} else
{var or__3548__auto____10117 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10117))
{return or__3548__auto____10117;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__10139 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____10118 = this$;

if(cljs.core.truth_(and__3546__auto____10118))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10118;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____10119 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10119))
{return or__3548__auto____10119;
} else
{var or__3548__auto____10120 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10120))
{return or__3548__auto____10120;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__10140 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____10121 = this$;

if(cljs.core.truth_(and__3546__auto____10121))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10121;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____10122 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10122))
{return or__3548__auto____10122;
} else
{var or__3548__auto____10123 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10123))
{return or__3548__auto____10123;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__10141 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____10124 = this$;

if(cljs.core.truth_(and__3546__auto____10124))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10124;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____10125 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10125))
{return or__3548__auto____10125;
} else
{var or__3548__auto____10126 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10126))
{return or__3548__auto____10126;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__10142 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____10127 = this$;

if(cljs.core.truth_(and__3546__auto____10127))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10127;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____10128 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10128))
{return or__3548__auto____10128;
} else
{var or__3548__auto____10129 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10129))
{return or__3548__auto____10129;
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
return transmit__10138.call(this,this$,opt);
case  3 :
return transmit__10139.call(this,this$,opt,opt2);
case  4 :
return transmit__10140.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__10141.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__10142.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____10130 = this$;

if(cljs.core.truth_(and__3546__auto____10130))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____10130;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____10131 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10131))
{return or__3548__auto____10131;
} else
{var or__3548__auto____10132 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____10132))
{return or__3548__auto____10132;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10144){
var vec__10145__10146 = p__10144;
var k__10147 = cljs.core.nth.call(null,vec__10145__10146,0,null);
var v__10148 = cljs.core.nth.call(null,vec__10145__10146,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10147.toLowerCase()),v__10148]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__10149 = null;
var G__10149__10150 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10149__10151 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10149__10152 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10149__10153 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10149__10154 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__10149 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__10149__10150.call(this,this$,uri);
case  3 :
return G__10149__10151.call(this,this$,uri,method);
case  4 :
return G__10149__10152.call(this,this$,uri,method,content);
case  5 :
return G__10149__10153.call(this,this$,uri,method,content,headers);
case  6 :
return G__10149__10154.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10149;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10156){
var vec__10157__10158 = p__10156;
var k__10159 = cljs.core.nth.call(null,vec__10157__10158,0,null);
var v__10160 = cljs.core.nth.call(null,vec__10157__10158,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10159.toLowerCase()),v__10160]);
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
var register_service__10167 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____10161 = this$;

if(cljs.core.truth_(and__3546__auto____10161))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____10161;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____10162 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10162))
{return or__3548__auto____10162;
} else
{var or__3548__auto____10163 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____10163))
{return or__3548__auto____10163;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__10168 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____10164 = this$;

if(cljs.core.truth_(and__3546__auto____10164))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____10164;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____10165 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10165))
{return or__3548__auto____10165;
} else
{var or__3548__auto____10166 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____10166))
{return or__3548__auto____10166;
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
return register_service__10167.call(this,this$,service_name,fn);
case  4 :
return register_service__10168.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__10170 = null;
var G__10170__10171 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__10170__10172 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__10170__10173 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__10170__10174 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__10170 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__10170__10171.call(this,this$);
case  2 :
return G__10170__10172.call(this,this$,on_connect_fn);
case  3 :
return G__10170__10173.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__10170__10174.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10170;
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
var G__10176 = null;
var G__10176__10177 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__10176__10178 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__10176 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__10176__10177.call(this,this$,service_name,fn);
case  4 :
return G__10176__10178.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10176;
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
var xpc_connection__10189 = (function (){
var temp__3698__auto____10180 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____10180))
{var config__10181 = temp__3698__auto____10180;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__10181)));
} else
{return null;
}
});
var xpc_connection__10190 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__10182){
var vec__10183__10184 = p__10182;
var k__10185 = cljs.core.nth.call(null,vec__10183__10184,0,null);
var v__10186 = cljs.core.nth.call(null,vec__10183__10184,1,null);

var temp__3695__auto____10187 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__10185);

if(cljs.core.truth_(temp__3695__auto____10187))
{var field__10188 = temp__3695__auto____10187;

return cljs.core.assoc.call(null,sum,field__10188,v__10186);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__10189.call(this);
case  1 :
return xpc_connection__10190.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
