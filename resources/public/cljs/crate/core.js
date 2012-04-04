goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__8672 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__8653__8654 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__8653__8654))
{var G__8656__8658 = cljs.core.first.call(null,G__8653__8654);
var vec__8657__8659 = G__8656__8658;
var k__8660 = cljs.core.nth.call(null,vec__8657__8659,0,null);
var v__8661 = cljs.core.nth.call(null,vec__8657__8659,1,null);
var G__8653__8662 = G__8653__8654;

var G__8656__8663 = G__8656__8658;
var G__8653__8664 = G__8653__8662;

while(true){
var vec__8665__8666 = G__8656__8663;
var k__8667 = cljs.core.nth.call(null,vec__8665__8666,0,null);
var v__8668 = cljs.core.nth.call(null,vec__8665__8666,1,null);
var G__8653__8669 = G__8653__8664;

dom_attr.call(null,elem,k__8667,v__8668);
var temp__3698__auto____8670 = cljs.core.next.call(null,G__8653__8669);

if(cljs.core.truth_(temp__3698__auto____8670))
{var G__8653__8671 = temp__3698__auto____8670;

{
var G__8675 = cljs.core.first.call(null,G__8653__8671);
var G__8676 = G__8653__8671;
G__8656__8663 = G__8675;
G__8653__8664 = G__8676;
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
var dom_attr__8673 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__8672.call(this,elem,k);
case  3 :
return dom_attr__8673.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__8677__8678 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__8677__8678))
{var c__8679 = cljs.core.first.call(null,G__8677__8678);
var G__8677__8680 = G__8677__8678;

while(true){
var child__8681 = (cljs.core.truth_((c__8679 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__8679))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__8679))?goog.dom.createTextNode.call(null,c__8679):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__8679))?crate.core.elem_factory.call(null,c__8679):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__8679))?as_content.call(null,parent,c__8679):(cljs.core.truth_(c__8679.nodeName)?c__8679:null))))));

if(cljs.core.truth_(child__8681))
{goog.dom.appendChild.call(null,parent,child__8681);
} else
{}
var temp__3698__auto____8682 = cljs.core.next.call(null,G__8677__8680);

if(cljs.core.truth_(temp__3698__auto____8682))
{var G__8677__8683 = temp__3698__auto____8682;

{
var G__8684 = cljs.core.first.call(null,G__8677__8683);
var G__8685 = G__8677__8683;
c__8679 = G__8684;
G__8677__8680 = G__8685;
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
crate.core.normalize_element = (function normalize_element(p__8687){
var vec__8688__8689 = p__8687;
var tag__8690 = cljs.core.nth.call(null,vec__8688__8689,0,null);
var content__8691 = cljs.core.nthnext.call(null,vec__8688__8689,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8692 = cljs.core.keyword_QMARK_.call(null,tag__8690);

if(cljs.core.truth_(or__3548__auto____8692))
{return or__3548__auto____8692;
} else
{var or__3548__auto____8693 = cljs.core.symbol_QMARK_.call(null,tag__8690);

if(cljs.core.truth_(or__3548__auto____8693))
{return or__3548__auto____8693;
} else
{return cljs.core.string_QMARK_.call(null,tag__8690);
}
}
})())))
{throw cljs.core.str.call(null,tag__8690," is not a valid tag name.");
} else
{}
var vec__8694__8696 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__8690));
var ___8697 = cljs.core.nth.call(null,vec__8694__8696,0,null);
var tag__8698 = cljs.core.nth.call(null,vec__8694__8696,1,null);
var id__8699 = cljs.core.nth.call(null,vec__8694__8696,2,null);
var class$__8700 = cljs.core.nth.call(null,vec__8694__8696,3,null);
var vec__8695__8707 = (function (){var vec__8701__8702 = clojure.string.split.call(null,tag__8698,/:/);
var nsp__8703 = cljs.core.nth.call(null,vec__8701__8702,0,null);
var t__8704 = cljs.core.nth.call(null,vec__8701__8702,1,null);
var ns_xmlns__8705 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__8703));

if(cljs.core.truth_(t__8704))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____8706 = ns_xmlns__8705;

if(cljs.core.truth_(or__3548__auto____8706))
{return or__3548__auto____8706;
} else
{return nsp__8703;
}
})(),t__8704]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__8703]);
}
})();
var nsp__8708 = cljs.core.nth.call(null,vec__8695__8707,0,null);
var tag__8709 = cljs.core.nth.call(null,vec__8695__8707,1,null);
var tag_attrs__8711 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__8686_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__8686_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____8710 = id__8699;

if(cljs.core.truth_(or__3548__auto____8710))
{return or__3548__auto____8710;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__8700)?clojure.string.replace.call(null,class$__8700,/\./," "):null)})));
var map_attrs__8712 = cljs.core.first.call(null,content__8691);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__8712)))
{return cljs.core.Vector.fromArray([nsp__8708,tag__8709,cljs.core.merge.call(null,tag_attrs__8711,map_attrs__8712),cljs.core.next.call(null,content__8691)]);
} else
{return cljs.core.Vector.fromArray([nsp__8708,tag__8709,tag_attrs__8711,content__8691]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__8713 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__8713)))
{crate.core.dom_attr.call(null,elem,attrs__8713);
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
var vec__8714__8715 = crate.core.normalize_element.call(null,tag_def);
var nsp__8716 = cljs.core.nth.call(null,vec__8714__8715,0,null);
var tag__8717 = cljs.core.nth.call(null,vec__8714__8715,1,null);
var attrs__8718 = cljs.core.nth.call(null,vec__8714__8715,2,null);
var content__8719 = cljs.core.nth.call(null,vec__8714__8715,3,null);
var elem__8720 = crate.core.create_elem.call(null,nsp__8716,tag__8717);

crate.core.dom_attr.call(null,elem__8720,attrs__8718);
crate.core.as_content.call(null,elem__8720,content__8719);
return elem__8720;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__8721 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__8721)))
{return res__8721;
} else
{return cljs.core.first.call(null,res__8721);
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
html.cljs$lang$applyTo = (function (arglist__8722){
var tags = cljs.core.seq( arglist__8722 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
