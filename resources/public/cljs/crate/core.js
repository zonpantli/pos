goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__8733 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__8714__8715 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__8714__8715))
{var G__8717__8719 = cljs.core.first.call(null,G__8714__8715);
var vec__8718__8720 = G__8717__8719;
var k__8721 = cljs.core.nth.call(null,vec__8718__8720,0,null);
var v__8722 = cljs.core.nth.call(null,vec__8718__8720,1,null);
var G__8714__8723 = G__8714__8715;

var G__8717__8724 = G__8717__8719;
var G__8714__8725 = G__8714__8723;

while(true){
var vec__8726__8727 = G__8717__8724;
var k__8728 = cljs.core.nth.call(null,vec__8726__8727,0,null);
var v__8729 = cljs.core.nth.call(null,vec__8726__8727,1,null);
var G__8714__8730 = G__8714__8725;

dom_attr.call(null,elem,k__8728,v__8729);
var temp__3698__auto____8731 = cljs.core.next.call(null,G__8714__8730);

if(cljs.core.truth_(temp__3698__auto____8731))
{var G__8714__8732 = temp__3698__auto____8731;

{
var G__8736 = cljs.core.first.call(null,G__8714__8732);
var G__8737 = G__8714__8732;
G__8717__8724 = G__8736;
G__8714__8725 = G__8737;
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
var dom_attr__8734 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__8733.call(this,elem,k);
case  3 :
return dom_attr__8734.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__8738__8739 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__8738__8739))
{var c__8740 = cljs.core.first.call(null,G__8738__8739);
var G__8738__8741 = G__8738__8739;

while(true){
var child__8742 = (cljs.core.truth_((c__8740 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__8740))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__8740))?goog.dom.createTextNode.call(null,c__8740):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__8740))?crate.core.elem_factory.call(null,c__8740):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__8740))?as_content.call(null,parent,c__8740):(cljs.core.truth_(c__8740.nodeName)?c__8740:null))))));

if(cljs.core.truth_(child__8742))
{goog.dom.appendChild.call(null,parent,child__8742);
} else
{}
var temp__3698__auto____8743 = cljs.core.next.call(null,G__8738__8741);

if(cljs.core.truth_(temp__3698__auto____8743))
{var G__8738__8744 = temp__3698__auto____8743;

{
var G__8745 = cljs.core.first.call(null,G__8738__8744);
var G__8746 = G__8738__8744;
c__8740 = G__8745;
G__8738__8741 = G__8746;
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
crate.core.normalize_element = (function normalize_element(p__8748){
var vec__8749__8750 = p__8748;
var tag__8751 = cljs.core.nth.call(null,vec__8749__8750,0,null);
var content__8752 = cljs.core.nthnext.call(null,vec__8749__8750,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8753 = cljs.core.keyword_QMARK_.call(null,tag__8751);

if(cljs.core.truth_(or__3548__auto____8753))
{return or__3548__auto____8753;
} else
{var or__3548__auto____8754 = cljs.core.symbol_QMARK_.call(null,tag__8751);

if(cljs.core.truth_(or__3548__auto____8754))
{return or__3548__auto____8754;
} else
{return cljs.core.string_QMARK_.call(null,tag__8751);
}
}
})())))
{throw cljs.core.str.call(null,tag__8751," is not a valid tag name.");
} else
{}
var vec__8755__8757 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__8751));
var ___8758 = cljs.core.nth.call(null,vec__8755__8757,0,null);
var tag__8759 = cljs.core.nth.call(null,vec__8755__8757,1,null);
var id__8760 = cljs.core.nth.call(null,vec__8755__8757,2,null);
var class$__8761 = cljs.core.nth.call(null,vec__8755__8757,3,null);
var vec__8756__8768 = (function (){var vec__8762__8763 = clojure.string.split.call(null,tag__8759,/:/);
var nsp__8764 = cljs.core.nth.call(null,vec__8762__8763,0,null);
var t__8765 = cljs.core.nth.call(null,vec__8762__8763,1,null);
var ns_xmlns__8766 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__8764));

if(cljs.core.truth_(t__8765))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____8767 = ns_xmlns__8766;

if(cljs.core.truth_(or__3548__auto____8767))
{return or__3548__auto____8767;
} else
{return nsp__8764;
}
})(),t__8765]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__8764]);
}
})();
var nsp__8769 = cljs.core.nth.call(null,vec__8756__8768,0,null);
var tag__8770 = cljs.core.nth.call(null,vec__8756__8768,1,null);
var tag_attrs__8772 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__8747_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__8747_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____8771 = id__8760;

if(cljs.core.truth_(or__3548__auto____8771))
{return or__3548__auto____8771;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__8761)?clojure.string.replace.call(null,class$__8761,/\./," "):null)})));
var map_attrs__8773 = cljs.core.first.call(null,content__8752);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__8773)))
{return cljs.core.Vector.fromArray([nsp__8769,tag__8770,cljs.core.merge.call(null,tag_attrs__8772,map_attrs__8773),cljs.core.next.call(null,content__8752)]);
} else
{return cljs.core.Vector.fromArray([nsp__8769,tag__8770,tag_attrs__8772,content__8752]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__8774 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__8774)))
{crate.core.dom_attr.call(null,elem,attrs__8774);
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
var vec__8775__8776 = crate.core.normalize_element.call(null,tag_def);
var nsp__8777 = cljs.core.nth.call(null,vec__8775__8776,0,null);
var tag__8778 = cljs.core.nth.call(null,vec__8775__8776,1,null);
var attrs__8779 = cljs.core.nth.call(null,vec__8775__8776,2,null);
var content__8780 = cljs.core.nth.call(null,vec__8775__8776,3,null);
var elem__8781 = crate.core.create_elem.call(null,nsp__8777,tag__8778);

crate.core.dom_attr.call(null,elem__8781,attrs__8779);
crate.core.as_content.call(null,elem__8781,content__8780);
return elem__8781;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__8782 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__8782)))
{return res__8782;
} else
{return cljs.core.first.call(null,res__8782);
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
html.cljs$lang$applyTo = (function (arglist__8783){
var tags = cljs.core.seq( arglist__8783 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
