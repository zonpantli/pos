goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__10353 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__10334__10335 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__10334__10335))
{var G__10337__10339 = cljs.core.first.call(null,G__10334__10335);
var vec__10338__10340 = G__10337__10339;
var k__10341 = cljs.core.nth.call(null,vec__10338__10340,0,null);
var v__10342 = cljs.core.nth.call(null,vec__10338__10340,1,null);
var G__10334__10343 = G__10334__10335;

var G__10337__10344 = G__10337__10339;
var G__10334__10345 = G__10334__10343;

while(true){
var vec__10346__10347 = G__10337__10344;
var k__10348 = cljs.core.nth.call(null,vec__10346__10347,0,null);
var v__10349 = cljs.core.nth.call(null,vec__10346__10347,1,null);
var G__10334__10350 = G__10334__10345;

dom_attr.call(null,elem,k__10348,v__10349);
var temp__3698__auto____10351 = cljs.core.next.call(null,G__10334__10350);

if(cljs.core.truth_(temp__3698__auto____10351))
{var G__10334__10352 = temp__3698__auto____10351;

{
var G__10356 = cljs.core.first.call(null,G__10334__10352);
var G__10357 = G__10334__10352;
G__10337__10344 = G__10356;
G__10334__10345 = G__10357;
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
var dom_attr__10354 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__10353.call(this,elem,k);
case  3 :
return dom_attr__10354.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__10358__10359 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__10358__10359))
{var c__10360 = cljs.core.first.call(null,G__10358__10359);
var G__10358__10361 = G__10358__10359;

while(true){
var child__10362 = (cljs.core.truth_((c__10360 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__10360))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__10360))?goog.dom.createTextNode.call(null,c__10360):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__10360))?crate.core.elem_factory.call(null,c__10360):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__10360))?as_content.call(null,parent,c__10360):(cljs.core.truth_(c__10360.nodeName)?c__10360:null))))));

if(cljs.core.truth_(child__10362))
{goog.dom.appendChild.call(null,parent,child__10362);
} else
{}
var temp__3698__auto____10363 = cljs.core.next.call(null,G__10358__10361);

if(cljs.core.truth_(temp__3698__auto____10363))
{var G__10358__10364 = temp__3698__auto____10363;

{
var G__10365 = cljs.core.first.call(null,G__10358__10364);
var G__10366 = G__10358__10364;
c__10360 = G__10365;
G__10358__10361 = G__10366;
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
crate.core.normalize_element = (function normalize_element(p__10368){
var vec__10369__10370 = p__10368;
var tag__10371 = cljs.core.nth.call(null,vec__10369__10370,0,null);
var content__10372 = cljs.core.nthnext.call(null,vec__10369__10370,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10373 = cljs.core.keyword_QMARK_.call(null,tag__10371);

if(cljs.core.truth_(or__3548__auto____10373))
{return or__3548__auto____10373;
} else
{var or__3548__auto____10374 = cljs.core.symbol_QMARK_.call(null,tag__10371);

if(cljs.core.truth_(or__3548__auto____10374))
{return or__3548__auto____10374;
} else
{return cljs.core.string_QMARK_.call(null,tag__10371);
}
}
})())))
{throw cljs.core.str.call(null,tag__10371," is not a valid tag name.");
} else
{}
var vec__10375__10377 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__10371));
var ___10378 = cljs.core.nth.call(null,vec__10375__10377,0,null);
var tag__10379 = cljs.core.nth.call(null,vec__10375__10377,1,null);
var id__10380 = cljs.core.nth.call(null,vec__10375__10377,2,null);
var class$__10381 = cljs.core.nth.call(null,vec__10375__10377,3,null);
var vec__10376__10388 = (function (){var vec__10382__10383 = clojure.string.split.call(null,tag__10379,/:/);
var nsp__10384 = cljs.core.nth.call(null,vec__10382__10383,0,null);
var t__10385 = cljs.core.nth.call(null,vec__10382__10383,1,null);
var ns_xmlns__10386 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__10384));

if(cljs.core.truth_(t__10385))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____10387 = ns_xmlns__10386;

if(cljs.core.truth_(or__3548__auto____10387))
{return or__3548__auto____10387;
} else
{return nsp__10384;
}
})(),t__10385]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__10384]);
}
})();
var nsp__10389 = cljs.core.nth.call(null,vec__10376__10388,0,null);
var tag__10390 = cljs.core.nth.call(null,vec__10376__10388,1,null);
var tag_attrs__10392 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__10367_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__10367_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____10391 = id__10380;

if(cljs.core.truth_(or__3548__auto____10391))
{return or__3548__auto____10391;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__10381)?clojure.string.replace.call(null,class$__10381,/\./," "):null)})));
var map_attrs__10393 = cljs.core.first.call(null,content__10372);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__10393)))
{return cljs.core.PersistentVector.fromArray([nsp__10389,tag__10390,cljs.core.merge.call(null,tag_attrs__10392,map_attrs__10393),cljs.core.next.call(null,content__10372)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__10389,tag__10390,tag_attrs__10392,content__10372]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__10394 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__10394)))
{crate.core.dom_attr.call(null,elem,attrs__10394);
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
var vec__10395__10396 = crate.core.normalize_element.call(null,tag_def);
var nsp__10397 = cljs.core.nth.call(null,vec__10395__10396,0,null);
var tag__10398 = cljs.core.nth.call(null,vec__10395__10396,1,null);
var attrs__10399 = cljs.core.nth.call(null,vec__10395__10396,2,null);
var content__10400 = cljs.core.nth.call(null,vec__10395__10396,3,null);
var elem__10401 = crate.core.create_elem.call(null,nsp__10397,tag__10398);

crate.core.dom_attr.call(null,elem__10401,attrs__10399);
crate.core.as_content.call(null,elem__10401,content__10400);
return elem__10401;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__10402 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__10402)))
{return res__10402;
} else
{return cljs.core.first.call(null,res__10402);
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
html.cljs$lang$applyTo = (function (arglist__10403){
var tags = cljs.core.seq( arglist__10403 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
