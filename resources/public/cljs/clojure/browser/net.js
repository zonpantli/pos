goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10141){
var vec__10142__10143 = p__10141;
var k__10144 = cljs.core.nth.call(null,vec__10142__10143,0,null);
var v__10145 = cljs.core.nth.call(null,vec__10142__10143,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10144.toLowerCase()),v__10145]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__10176 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____10146 = this$;

if(cljs.core.truth_(and__3546__auto____10146))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10146;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____10147 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10147))
{return or__3548__auto____10147;
} else
{var or__3548__auto____10148 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10148))
{return or__3548__auto____10148;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__10177 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____10149 = this$;

if(cljs.core.truth_(and__3546__auto____10149))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10149;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____10150 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10150))
{return or__3548__auto____10150;
} else
{var or__3548__auto____10151 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10151))
{return or__3548__auto____10151;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__10178 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____10152 = this$;

if(cljs.core.truth_(and__3546__auto____10152))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10152;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____10153 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10153))
{return or__3548__auto____10153;
} else
{var or__3548__auto____10154 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10154))
{return or__3548__auto____10154;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__10179 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____10155 = this$;

if(cljs.core.truth_(and__3546__auto____10155))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____10155;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____10156 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10156))
{return or__3548__auto____10156;
} else
{var or__3548__auto____10157 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____10157))
{return or__3548__auto____10157;
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
return connect__10176.call(this,this$);
case  2 :
return connect__10177.call(this,this$,opt1);
case  3 :
return connect__10178.call(this,this$,opt1,opt2);
case  4 :
return connect__10179.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__10181 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____10158 = this$;

if(cljs.core.truth_(and__3546__auto____10158))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10158;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____10159 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10159))
{return or__3548__auto____10159;
} else
{var or__3548__auto____10160 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10160))
{return or__3548__auto____10160;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__10182 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____10161 = this$;

if(cljs.core.truth_(and__3546__auto____10161))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10161;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____10162 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10162))
{return or__3548__auto____10162;
} else
{var or__3548__auto____10163 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10163))
{return or__3548__auto____10163;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__10183 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____10164 = this$;

if(cljs.core.truth_(and__3546__auto____10164))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10164;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____10165 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10165))
{return or__3548__auto____10165;
} else
{var or__3548__auto____10166 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10166))
{return or__3548__auto____10166;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__10184 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____10167 = this$;

if(cljs.core.truth_(and__3546__auto____10167))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10167;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____10168 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10168))
{return or__3548__auto____10168;
} else
{var or__3548__auto____10169 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10169))
{return or__3548__auto____10169;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__10185 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____10170 = this$;

if(cljs.core.truth_(and__3546__auto____10170))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____10170;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____10171 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10171))
{return or__3548__auto____10171;
} else
{var or__3548__auto____10172 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____10172))
{return or__3548__auto____10172;
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
return transmit__10181.call(this,this$,opt);
case  3 :
return transmit__10182.call(this,this$,opt,opt2);
case  4 :
return transmit__10183.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__10184.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__10185.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____10173 = this$;

if(cljs.core.truth_(and__3546__auto____10173))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____10173;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____10174 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10174))
{return or__3548__auto____10174;
} else
{var or__3548__auto____10175 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____10175))
{return or__3548__auto____10175;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10187){
var vec__10188__10189 = p__10187;
var k__10190 = cljs.core.nth.call(null,vec__10188__10189,0,null);
var v__10191 = cljs.core.nth.call(null,vec__10188__10189,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10190.toLowerCase()),v__10191]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__10192 = null;
var G__10192__10193 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10192__10194 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10192__10195 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10192__10196 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__10192__10197 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__10192 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__10192__10193.call(this,this$,uri);
case  3 :
return G__10192__10194.call(this,this$,uri,method);
case  4 :
return G__10192__10195.call(this,this$,uri,method,content);
case  5 :
return G__10192__10196.call(this,this$,uri,method,content,headers);
case  6 :
return G__10192__10197.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10192;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__10199){
var vec__10200__10201 = p__10199;
var k__10202 = cljs.core.nth.call(null,vec__10200__10201,0,null);
var v__10203 = cljs.core.nth.call(null,vec__10200__10201,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10202.toLowerCase()),v__10203]);
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
var register_service__10210 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____10204 = this$;

if(cljs.core.truth_(and__3546__auto____10204))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____10204;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____10205 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10205))
{return or__3548__auto____10205;
} else
{var or__3548__auto____10206 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____10206))
{return or__3548__auto____10206;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__10211 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____10207 = this$;

if(cljs.core.truth_(and__3546__auto____10207))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____10207;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____10208 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____10208))
{return or__3548__auto____10208;
} else
{var or__3548__auto____10209 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____10209))
{return or__3548__auto____10209;
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
return register_service__10210.call(this,this$,service_name,fn);
case  4 :
return register_service__10211.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__10213 = null;
var G__10213__10214 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__10213__10215 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__10213__10216 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__10213__10217 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__10213 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__10213__10214.call(this,this$);
case  2 :
return G__10213__10215.call(this,this$,on_connect_fn);
case  3 :
return G__10213__10216.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__10213__10217.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10213;
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
var G__10219 = null;
var G__10219__10220 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__10219__10221 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__10219 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__10219__10220.call(this,this$,service_name,fn);
case  4 :
return G__10219__10221.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10219;
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
var xpc_connection__10232 = (function (){
var temp__3698__auto____10223 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____10223))
{var config__10224 = temp__3698__auto____10223;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__10224)));
} else
{return null;
}
});
var xpc_connection__10233 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__10225){
var vec__10226__10227 = p__10225;
var k__10228 = cljs.core.nth.call(null,vec__10226__10227,0,null);
var v__10229 = cljs.core.nth.call(null,vec__10226__10227,1,null);

var temp__3695__auto____10230 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__10228);

if(cljs.core.truth_(temp__3695__auto____10230))
{var field__10231 = temp__3695__auto____10230;

return cljs.core.assoc.call(null,sum,field__10231,v__10229);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__10232.call(this);
case  1 :
return xpc_connection__10233.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
