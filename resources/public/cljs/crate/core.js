goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__10396 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__10377__10378 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__10377__10378))
{var G__10380__10382 = cljs.core.first.call(null,G__10377__10378);
var vec__10381__10383 = G__10380__10382;
var k__10384 = cljs.core.nth.call(null,vec__10381__10383,0,null);
var v__10385 = cljs.core.nth.call(null,vec__10381__10383,1,null);
var G__10377__10386 = G__10377__10378;

var G__10380__10387 = G__10380__10382;
var G__10377__10388 = G__10377__10386;

while(true){
var vec__10389__10390 = G__10380__10387;
var k__10391 = cljs.core.nth.call(null,vec__10389__10390,0,null);
var v__10392 = cljs.core.nth.call(null,vec__10389__10390,1,null);
var G__10377__10393 = G__10377__10388;

dom_attr.call(null,elem,k__10391,v__10392);
var temp__3698__auto____10394 = cljs.core.next.call(null,G__10377__10393);

if(cljs.core.truth_(temp__3698__auto____10394))
{var G__10377__10395 = temp__3698__auto____10394;

{
var G__10399 = cljs.core.first.call(null,G__10377__10395);
var G__10400 = G__10377__10395;
G__10380__10387 = G__10399;
G__10377__10388 = G__10400;
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
var dom_attr__10397 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__10396.call(this,elem,k);
case  3 :
return dom_attr__10397.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__10401__10402 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__10401__10402))
{var c__10403 = cljs.core.first.call(null,G__10401__10402);
var G__10401__10404 = G__10401__10402;

while(true){
var child__10405 = (cljs.core.truth_((c__10403 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__10403))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__10403))?goog.dom.createTextNode.call(null,c__10403):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__10403))?crate.core.elem_factory.call(null,c__10403):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__10403))?as_content.call(null,parent,c__10403):(cljs.core.truth_(c__10403.nodeName)?c__10403:null))))));

if(cljs.core.truth_(child__10405))
{goog.dom.appendChild.call(null,parent,child__10405);
} else
{}
var temp__3698__auto____10406 = cljs.core.next.call(null,G__10401__10404);

if(cljs.core.truth_(temp__3698__auto____10406))
{var G__10401__10407 = temp__3698__auto____10406;

{
var G__10408 = cljs.core.first.call(null,G__10401__10407);
var G__10409 = G__10401__10407;
c__10403 = G__10408;
G__10401__10404 = G__10409;
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
crate.core.normalize_element = (function normalize_element(p__10411){
var vec__10412__10413 = p__10411;
var tag__10414 = cljs.core.nth.call(null,vec__10412__10413,0,null);
var content__10415 = cljs.core.nthnext.call(null,vec__10412__10413,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10416 = cljs.core.keyword_QMARK_.call(null,tag__10414);

if(cljs.core.truth_(or__3548__auto____10416))
{return or__3548__auto____10416;
} else
{var or__3548__auto____10417 = cljs.core.symbol_QMARK_.call(null,tag__10414);

if(cljs.core.truth_(or__3548__auto____10417))
{return or__3548__auto____10417;
} else
{return cljs.core.string_QMARK_.call(null,tag__10414);
}
}
})())))
{throw cljs.core.str.call(null,tag__10414," is not a valid tag name.");
} else
{}
var vec__10418__10420 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__10414));
var ___10421 = cljs.core.nth.call(null,vec__10418__10420,0,null);
var tag__10422 = cljs.core.nth.call(null,vec__10418__10420,1,null);
var id__10423 = cljs.core.nth.call(null,vec__10418__10420,2,null);
var class$__10424 = cljs.core.nth.call(null,vec__10418__10420,3,null);
var vec__10419__10431 = (function (){var vec__10425__10426 = clojure.string.split.call(null,tag__10422,/:/);
var nsp__10427 = cljs.core.nth.call(null,vec__10425__10426,0,null);
var t__10428 = cljs.core.nth.call(null,vec__10425__10426,1,null);
var ns_xmlns__10429 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__10427));

if(cljs.core.truth_(t__10428))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____10430 = ns_xmlns__10429;

if(cljs.core.truth_(or__3548__auto____10430))
{return or__3548__auto____10430;
} else
{return nsp__10427;
}
})(),t__10428]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__10427]);
}
})();
var nsp__10432 = cljs.core.nth.call(null,vec__10419__10431,0,null);
var tag__10433 = cljs.core.nth.call(null,vec__10419__10431,1,null);
var tag_attrs__10435 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__10410_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__10410_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____10434 = id__10423;

if(cljs.core.truth_(or__3548__auto____10434))
{return or__3548__auto____10434;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__10424)?clojure.string.replace.call(null,class$__10424,/\./," "):null)})));
var map_attrs__10436 = cljs.core.first.call(null,content__10415);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__10436)))
{return cljs.core.PersistentVector.fromArray([nsp__10432,tag__10433,cljs.core.merge.call(null,tag_attrs__10435,map_attrs__10436),cljs.core.next.call(null,content__10415)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__10432,tag__10433,tag_attrs__10435,content__10415]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__10437 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__10437)))
{crate.core.dom_attr.call(null,elem,attrs__10437);
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
var vec__10438__10439 = crate.core.normalize_element.call(null,tag_def);
var nsp__10440 = cljs.core.nth.call(null,vec__10438__10439,0,null);
var tag__10441 = cljs.core.nth.call(null,vec__10438__10439,1,null);
var attrs__10442 = cljs.core.nth.call(null,vec__10438__10439,2,null);
var content__10443 = cljs.core.nth.call(null,vec__10438__10439,3,null);
var elem__10444 = crate.core.create_elem.call(null,nsp__10440,tag__10441);

crate.core.dom_attr.call(null,elem__10444,attrs__10442);
crate.core.as_content.call(null,elem__10444,content__10443);
return elem__10444;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__10445 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__10445)))
{return res__10445;
} else
{return cljs.core.first.call(null,res__10445);
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
html.cljs$lang$applyTo = (function (arglist__10446){
var tags = cljs.core.seq( arglist__10446 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
