goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__9100 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__9081__9082 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9081__9082))
{var G__9084__9086 = cljs.core.first.call(null,G__9081__9082);
var vec__9085__9087 = G__9084__9086;
var k__9088 = cljs.core.nth.call(null,vec__9085__9087,0,null);
var v__9089 = cljs.core.nth.call(null,vec__9085__9087,1,null);
var G__9081__9090 = G__9081__9082;

var G__9084__9091 = G__9084__9086;
var G__9081__9092 = G__9081__9090;

while(true){
var vec__9093__9094 = G__9084__9091;
var k__9095 = cljs.core.nth.call(null,vec__9093__9094,0,null);
var v__9096 = cljs.core.nth.call(null,vec__9093__9094,1,null);
var G__9081__9097 = G__9081__9092;

dom_attr.call(null,elem,k__9095,v__9096);
var temp__3698__auto____9098 = cljs.core.next.call(null,G__9081__9097);

if(cljs.core.truth_(temp__3698__auto____9098))
{var G__9081__9099 = temp__3698__auto____9098;

{
var G__9103 = cljs.core.first.call(null,G__9081__9099);
var G__9104 = G__9081__9099;
G__9084__9091 = G__9103;
G__9081__9092 = G__9104;
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
var dom_attr__9101 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__9100.call(this,elem,k);
case  3 :
return dom_attr__9101.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__9105__9106 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__9105__9106))
{var c__9107 = cljs.core.first.call(null,G__9105__9106);
var G__9105__9108 = G__9105__9106;

while(true){
var child__9109 = (cljs.core.truth_((c__9107 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__9107))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__9107))?goog.dom.createTextNode.call(null,c__9107):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__9107))?crate.core.elem_factory.call(null,c__9107):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__9107))?as_content.call(null,parent,c__9107):(cljs.core.truth_(c__9107.nodeName)?c__9107:null))))));

if(cljs.core.truth_(child__9109))
{goog.dom.appendChild.call(null,parent,child__9109);
} else
{}
var temp__3698__auto____9110 = cljs.core.next.call(null,G__9105__9108);

if(cljs.core.truth_(temp__3698__auto____9110))
{var G__9105__9111 = temp__3698__auto____9110;

{
var G__9112 = cljs.core.first.call(null,G__9105__9111);
var G__9113 = G__9105__9111;
c__9107 = G__9112;
G__9105__9108 = G__9113;
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
crate.core.normalize_element = (function normalize_element(p__9115){
var vec__9116__9117 = p__9115;
var tag__9118 = cljs.core.nth.call(null,vec__9116__9117,0,null);
var content__9119 = cljs.core.nthnext.call(null,vec__9116__9117,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9120 = cljs.core.keyword_QMARK_.call(null,tag__9118);

if(cljs.core.truth_(or__3548__auto____9120))
{return or__3548__auto____9120;
} else
{var or__3548__auto____9121 = cljs.core.symbol_QMARK_.call(null,tag__9118);

if(cljs.core.truth_(or__3548__auto____9121))
{return or__3548__auto____9121;
} else
{return cljs.core.string_QMARK_.call(null,tag__9118);
}
}
})())))
{throw cljs.core.str.call(null,tag__9118," is not a valid tag name.");
} else
{}
var vec__9122__9124 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__9118));
var ___9125 = cljs.core.nth.call(null,vec__9122__9124,0,null);
var tag__9126 = cljs.core.nth.call(null,vec__9122__9124,1,null);
var id__9127 = cljs.core.nth.call(null,vec__9122__9124,2,null);
var class$__9128 = cljs.core.nth.call(null,vec__9122__9124,3,null);
var vec__9123__9135 = (function (){var vec__9129__9130 = clojure.string.split.call(null,tag__9126,/:/);
var nsp__9131 = cljs.core.nth.call(null,vec__9129__9130,0,null);
var t__9132 = cljs.core.nth.call(null,vec__9129__9130,1,null);
var ns_xmlns__9133 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__9131));

if(cljs.core.truth_(t__9132))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____9134 = ns_xmlns__9133;

if(cljs.core.truth_(or__3548__auto____9134))
{return or__3548__auto____9134;
} else
{return nsp__9131;
}
})(),t__9132]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__9131]);
}
})();
var nsp__9136 = cljs.core.nth.call(null,vec__9123__9135,0,null);
var tag__9137 = cljs.core.nth.call(null,vec__9123__9135,1,null);
var tag_attrs__9139 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__9114_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__9114_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____9138 = id__9127;

if(cljs.core.truth_(or__3548__auto____9138))
{return or__3548__auto____9138;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__9128)?clojure.string.replace.call(null,class$__9128,/\./," "):null)})));
var map_attrs__9140 = cljs.core.first.call(null,content__9119);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__9140)))
{return cljs.core.PersistentVector.fromArray([nsp__9136,tag__9137,cljs.core.merge.call(null,tag_attrs__9139,map_attrs__9140),cljs.core.next.call(null,content__9119)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__9136,tag__9137,tag_attrs__9139,content__9119]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__9141 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9141)))
{crate.core.dom_attr.call(null,elem,attrs__9141);
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
var vec__9142__9143 = crate.core.normalize_element.call(null,tag_def);
var nsp__9144 = cljs.core.nth.call(null,vec__9142__9143,0,null);
var tag__9145 = cljs.core.nth.call(null,vec__9142__9143,1,null);
var attrs__9146 = cljs.core.nth.call(null,vec__9142__9143,2,null);
var content__9147 = cljs.core.nth.call(null,vec__9142__9143,3,null);
var elem__9148 = crate.core.create_elem.call(null,nsp__9144,tag__9145);

crate.core.dom_attr.call(null,elem__9148,attrs__9146);
crate.core.as_content.call(null,elem__9148,content__9147);
return elem__9148;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__9149 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__9149)))
{return res__9149;
} else
{return cljs.core.first.call(null,res__9149);
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
html.cljs$lang$applyTo = (function (arglist__9150){
var tags = cljs.core.seq( arglist__9150 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
