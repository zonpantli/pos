goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__9473 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__9454__9455 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9454__9455))
{var G__9457__9459 = cljs.core.first.call(null,G__9454__9455);
var vec__9458__9460 = G__9457__9459;
var k__9461 = cljs.core.nth.call(null,vec__9458__9460,0,null);
var v__9462 = cljs.core.nth.call(null,vec__9458__9460,1,null);
var G__9454__9463 = G__9454__9455;

var G__9457__9464 = G__9457__9459;
var G__9454__9465 = G__9454__9463;

while(true){
var vec__9466__9467 = G__9457__9464;
var k__9468 = cljs.core.nth.call(null,vec__9466__9467,0,null);
var v__9469 = cljs.core.nth.call(null,vec__9466__9467,1,null);
var G__9454__9470 = G__9454__9465;

dom_attr.call(null,elem,k__9468,v__9469);
var temp__3698__auto____9471 = cljs.core.next.call(null,G__9454__9470);

if(cljs.core.truth_(temp__3698__auto____9471))
{var G__9454__9472 = temp__3698__auto____9471;

{
var G__9476 = cljs.core.first.call(null,G__9454__9472);
var G__9477 = G__9454__9472;
G__9457__9464 = G__9476;
G__9454__9465 = G__9477;
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
var dom_attr__9474 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__9473.call(this,elem,k);
case  3 :
return dom_attr__9474.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__9478__9479 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__9478__9479))
{var c__9480 = cljs.core.first.call(null,G__9478__9479);
var G__9478__9481 = G__9478__9479;

while(true){
var child__9482 = (cljs.core.truth_((c__9480 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__9480))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__9480))?goog.dom.createTextNode.call(null,c__9480):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__9480))?crate.core.elem_factory.call(null,c__9480):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__9480))?as_content.call(null,parent,c__9480):(cljs.core.truth_(c__9480.nodeName)?c__9480:null))))));

if(cljs.core.truth_(child__9482))
{goog.dom.appendChild.call(null,parent,child__9482);
} else
{}
var temp__3698__auto____9483 = cljs.core.next.call(null,G__9478__9481);

if(cljs.core.truth_(temp__3698__auto____9483))
{var G__9478__9484 = temp__3698__auto____9483;

{
var G__9485 = cljs.core.first.call(null,G__9478__9484);
var G__9486 = G__9478__9484;
c__9480 = G__9485;
G__9478__9481 = G__9486;
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
crate.core.normalize_element = (function normalize_element(p__9488){
var vec__9489__9490 = p__9488;
var tag__9491 = cljs.core.nth.call(null,vec__9489__9490,0,null);
var content__9492 = cljs.core.nthnext.call(null,vec__9489__9490,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9493 = cljs.core.keyword_QMARK_.call(null,tag__9491);

if(cljs.core.truth_(or__3548__auto____9493))
{return or__3548__auto____9493;
} else
{var or__3548__auto____9494 = cljs.core.symbol_QMARK_.call(null,tag__9491);

if(cljs.core.truth_(or__3548__auto____9494))
{return or__3548__auto____9494;
} else
{return cljs.core.string_QMARK_.call(null,tag__9491);
}
}
})())))
{throw cljs.core.str.call(null,tag__9491," is not a valid tag name.");
} else
{}
var vec__9495__9497 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__9491));
var ___9498 = cljs.core.nth.call(null,vec__9495__9497,0,null);
var tag__9499 = cljs.core.nth.call(null,vec__9495__9497,1,null);
var id__9500 = cljs.core.nth.call(null,vec__9495__9497,2,null);
var class$__9501 = cljs.core.nth.call(null,vec__9495__9497,3,null);
var vec__9496__9508 = (function (){var vec__9502__9503 = clojure.string.split.call(null,tag__9499,/:/);
var nsp__9504 = cljs.core.nth.call(null,vec__9502__9503,0,null);
var t__9505 = cljs.core.nth.call(null,vec__9502__9503,1,null);
var ns_xmlns__9506 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__9504));

if(cljs.core.truth_(t__9505))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____9507 = ns_xmlns__9506;

if(cljs.core.truth_(or__3548__auto____9507))
{return or__3548__auto____9507;
} else
{return nsp__9504;
}
})(),t__9505]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__9504]);
}
})();
var nsp__9509 = cljs.core.nth.call(null,vec__9496__9508,0,null);
var tag__9510 = cljs.core.nth.call(null,vec__9496__9508,1,null);
var tag_attrs__9512 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__9487_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__9487_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____9511 = id__9500;

if(cljs.core.truth_(or__3548__auto____9511))
{return or__3548__auto____9511;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__9501)?clojure.string.replace.call(null,class$__9501,/\./," "):null)})));
var map_attrs__9513 = cljs.core.first.call(null,content__9492);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__9513)))
{return cljs.core.PersistentVector.fromArray([nsp__9509,tag__9510,cljs.core.merge.call(null,tag_attrs__9512,map_attrs__9513),cljs.core.next.call(null,content__9492)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__9509,tag__9510,tag_attrs__9512,content__9492]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__9514 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9514)))
{crate.core.dom_attr.call(null,elem,attrs__9514);
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
var vec__9515__9516 = crate.core.normalize_element.call(null,tag_def);
var nsp__9517 = cljs.core.nth.call(null,vec__9515__9516,0,null);
var tag__9518 = cljs.core.nth.call(null,vec__9515__9516,1,null);
var attrs__9519 = cljs.core.nth.call(null,vec__9515__9516,2,null);
var content__9520 = cljs.core.nth.call(null,vec__9515__9516,3,null);
var elem__9521 = crate.core.create_elem.call(null,nsp__9517,tag__9518);

crate.core.dom_attr.call(null,elem__9521,attrs__9519);
crate.core.as_content.call(null,elem__9521,content__9520);
return elem__9521;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__9522 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__9522)))
{return res__9522;
} else
{return cljs.core.first.call(null,res__9522);
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
html.cljs$lang$applyTo = (function (arglist__9523){
var tags = cljs.core.seq( arglist__9523 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
