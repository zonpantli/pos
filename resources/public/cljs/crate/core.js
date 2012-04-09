goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__10025 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__10006__10007 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__10006__10007))
{var G__10009__10011 = cljs.core.first.call(null,G__10006__10007);
var vec__10010__10012 = G__10009__10011;
var k__10013 = cljs.core.nth.call(null,vec__10010__10012,0,null);
var v__10014 = cljs.core.nth.call(null,vec__10010__10012,1,null);
var G__10006__10015 = G__10006__10007;

var G__10009__10016 = G__10009__10011;
var G__10006__10017 = G__10006__10015;

while(true){
var vec__10018__10019 = G__10009__10016;
var k__10020 = cljs.core.nth.call(null,vec__10018__10019,0,null);
var v__10021 = cljs.core.nth.call(null,vec__10018__10019,1,null);
var G__10006__10022 = G__10006__10017;

dom_attr.call(null,elem,k__10020,v__10021);
var temp__3698__auto____10023 = cljs.core.next.call(null,G__10006__10022);

if(cljs.core.truth_(temp__3698__auto____10023))
{var G__10006__10024 = temp__3698__auto____10023;

{
var G__10028 = cljs.core.first.call(null,G__10006__10024);
var G__10029 = G__10006__10024;
G__10009__10016 = G__10028;
G__10006__10017 = G__10029;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__10026 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__10025.call(this,elem,k);
case  3 :
return dom_attr__10026.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__10030__10031 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__10030__10031))
{var c__10032 = cljs.core.first.call(null,G__10030__10031);
var G__10030__10033 = G__10030__10031;

while(true){
var child__10034 = (cljs.core.truth_((c__10032 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__10032))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__10032))?goog.dom.createTextNode.call(null,c__10032):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__10032))?crate.core.elem_factory.call(null,c__10032):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__10032))?as_content.call(null,parent,c__10032):(cljs.core.truth_(c__10032.nodeName)?c__10032:null))))));

if(cljs.core.truth_(child__10034))
{goog.dom.appendChild.call(null,parent,child__10034);
} else
{}
var temp__3698__auto____10035 = cljs.core.next.call(null,G__10030__10033);

if(cljs.core.truth_(temp__3698__auto____10035))
{var G__10030__10036 = temp__3698__auto____10035;

{
var G__10037 = cljs.core.first.call(null,G__10030__10036);
var G__10038 = G__10030__10036;
c__10032 = G__10037;
G__10030__10033 = G__10038;
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
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__10040){
var vec__10041__10042 = p__10040;
var tag__10043 = cljs.core.nth.call(null,vec__10041__10042,0,null);
var content__10044 = cljs.core.nthnext.call(null,vec__10041__10042,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10045 = cljs.core.keyword_QMARK_.call(null,tag__10043);

if(cljs.core.truth_(or__3548__auto____10045))
{return or__3548__auto____10045;
} else
{var or__3548__auto____10046 = cljs.core.symbol_QMARK_.call(null,tag__10043);

if(cljs.core.truth_(or__3548__auto____10046))
{return or__3548__auto____10046;
} else
{return cljs.core.string_QMARK_.call(null,tag__10043);
}
}
})())))
{throw cljs.core.str.call(null,tag__10043," is not a valid tag name.");
} else
{}
var vec__10047__10049 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__10043));
var ___10050 = cljs.core.nth.call(null,vec__10047__10049,0,null);
var tag__10051 = cljs.core.nth.call(null,vec__10047__10049,1,null);
var id__10052 = cljs.core.nth.call(null,vec__10047__10049,2,null);
var class$__10053 = cljs.core.nth.call(null,vec__10047__10049,3,null);
var vec__10048__10060 = (function (){var vec__10054__10055 = clojure.string.split.call(null,tag__10051,/:/);
var nsp__10056 = cljs.core.nth.call(null,vec__10054__10055,0,null);
var t__10057 = cljs.core.nth.call(null,vec__10054__10055,1,null);
var ns_xmlns__10058 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__10056));

if(cljs.core.truth_(t__10057))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____10059 = ns_xmlns__10058;

if(cljs.core.truth_(or__3548__auto____10059))
{return or__3548__auto____10059;
} else
{return nsp__10056;
}
})(),t__10057]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__10056]);
}
})();
var nsp__10061 = cljs.core.nth.call(null,vec__10048__10060,0,null);
var tag__10062 = cljs.core.nth.call(null,vec__10048__10060,1,null);
var tag_attrs__10064 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__10039_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__10039_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____10063 = id__10052;

if(cljs.core.truth_(or__3548__auto____10063))
{return or__3548__auto____10063;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__10053)?clojure.string.replace.call(null,class$__10053,/\./," "):null)})));
var map_attrs__10065 = cljs.core.first.call(null,content__10044);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__10065)))
{return cljs.core.PersistentVector.fromArray([nsp__10061,tag__10062,cljs.core.merge.call(null,tag_attrs__10064,map_attrs__10065),cljs.core.next.call(null,content__10044)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__10061,tag__10062,tag_attrs__10064,content__10044]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__10066 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__10066)))
{crate.core.dom_attr.call(null,elem,attrs__10066);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__10067__10068 = crate.core.normalize_element.call(null,tag_def);
var nsp__10069 = cljs.core.nth.call(null,vec__10067__10068,0,null);
var tag__10070 = cljs.core.nth.call(null,vec__10067__10068,1,null);
var attrs__10071 = cljs.core.nth.call(null,vec__10067__10068,2,null);
var content__10072 = cljs.core.nth.call(null,vec__10067__10068,3,null);
var elem__10073 = crate.core.create_elem.call(null,nsp__10069,tag__10070);

crate.core.dom_attr.call(null,elem__10073,attrs__10071);
crate.core.as_content.call(null,elem__10073,content__10072);
return elem__10073;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__10074 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__10074)))
{return res__10074;
} else
{return cljs.core.first.call(null,res__10074);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__10075){
var tags = cljs.core.seq( arglist__10075 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
