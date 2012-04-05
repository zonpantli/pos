goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__9244 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__9225__9226 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9225__9226))
{var G__9228__9230 = cljs.core.first.call(null,G__9225__9226);
var vec__9229__9231 = G__9228__9230;
var k__9232 = cljs.core.nth.call(null,vec__9229__9231,0,null);
var v__9233 = cljs.core.nth.call(null,vec__9229__9231,1,null);
var G__9225__9234 = G__9225__9226;

var G__9228__9235 = G__9228__9230;
var G__9225__9236 = G__9225__9234;

while(true){
var vec__9237__9238 = G__9228__9235;
var k__9239 = cljs.core.nth.call(null,vec__9237__9238,0,null);
var v__9240 = cljs.core.nth.call(null,vec__9237__9238,1,null);
var G__9225__9241 = G__9225__9236;

dom_attr.call(null,elem,k__9239,v__9240);
var temp__3698__auto____9242 = cljs.core.next.call(null,G__9225__9241);

if(cljs.core.truth_(temp__3698__auto____9242))
{var G__9225__9243 = temp__3698__auto____9242;

{
var G__9247 = cljs.core.first.call(null,G__9225__9243);
var G__9248 = G__9225__9243;
G__9228__9235 = G__9247;
G__9225__9236 = G__9248;
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
var dom_attr__9245 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__9244.call(this,elem,k);
case  3 :
return dom_attr__9245.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__9249__9250 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__9249__9250))
{var c__9251 = cljs.core.first.call(null,G__9249__9250);
var G__9249__9252 = G__9249__9250;

while(true){
var child__9253 = (cljs.core.truth_((c__9251 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__9251))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__9251))?goog.dom.createTextNode.call(null,c__9251):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__9251))?crate.core.elem_factory.call(null,c__9251):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__9251))?as_content.call(null,parent,c__9251):(cljs.core.truth_(c__9251.nodeName)?c__9251:null))))));

if(cljs.core.truth_(child__9253))
{goog.dom.appendChild.call(null,parent,child__9253);
} else
{}
var temp__3698__auto____9254 = cljs.core.next.call(null,G__9249__9252);

if(cljs.core.truth_(temp__3698__auto____9254))
{var G__9249__9255 = temp__3698__auto____9254;

{
var G__9256 = cljs.core.first.call(null,G__9249__9255);
var G__9257 = G__9249__9255;
c__9251 = G__9256;
G__9249__9252 = G__9257;
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
crate.core.normalize_element = (function normalize_element(p__9259){
var vec__9260__9261 = p__9259;
var tag__9262 = cljs.core.nth.call(null,vec__9260__9261,0,null);
var content__9263 = cljs.core.nthnext.call(null,vec__9260__9261,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9264 = cljs.core.keyword_QMARK_.call(null,tag__9262);

if(cljs.core.truth_(or__3548__auto____9264))
{return or__3548__auto____9264;
} else
{var or__3548__auto____9265 = cljs.core.symbol_QMARK_.call(null,tag__9262);

if(cljs.core.truth_(or__3548__auto____9265))
{return or__3548__auto____9265;
} else
{return cljs.core.string_QMARK_.call(null,tag__9262);
}
}
})())))
{throw cljs.core.str.call(null,tag__9262," is not a valid tag name.");
} else
{}
var vec__9266__9268 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__9262));
var ___9269 = cljs.core.nth.call(null,vec__9266__9268,0,null);
var tag__9270 = cljs.core.nth.call(null,vec__9266__9268,1,null);
var id__9271 = cljs.core.nth.call(null,vec__9266__9268,2,null);
var class$__9272 = cljs.core.nth.call(null,vec__9266__9268,3,null);
var vec__9267__9279 = (function (){var vec__9273__9274 = clojure.string.split.call(null,tag__9270,/:/);
var nsp__9275 = cljs.core.nth.call(null,vec__9273__9274,0,null);
var t__9276 = cljs.core.nth.call(null,vec__9273__9274,1,null);
var ns_xmlns__9277 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__9275));

if(cljs.core.truth_(t__9276))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____9278 = ns_xmlns__9277;

if(cljs.core.truth_(or__3548__auto____9278))
{return or__3548__auto____9278;
} else
{return nsp__9275;
}
})(),t__9276]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__9275]);
}
})();
var nsp__9280 = cljs.core.nth.call(null,vec__9267__9279,0,null);
var tag__9281 = cljs.core.nth.call(null,vec__9267__9279,1,null);
var tag_attrs__9283 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__9258_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__9258_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____9282 = id__9271;

if(cljs.core.truth_(or__3548__auto____9282))
{return or__3548__auto____9282;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__9272)?clojure.string.replace.call(null,class$__9272,/\./," "):null)})));
var map_attrs__9284 = cljs.core.first.call(null,content__9263);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__9284)))
{return cljs.core.PersistentVector.fromArray([nsp__9280,tag__9281,cljs.core.merge.call(null,tag_attrs__9283,map_attrs__9284),cljs.core.next.call(null,content__9263)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__9280,tag__9281,tag_attrs__9283,content__9263]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__9285 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9285)))
{crate.core.dom_attr.call(null,elem,attrs__9285);
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
var vec__9286__9287 = crate.core.normalize_element.call(null,tag_def);
var nsp__9288 = cljs.core.nth.call(null,vec__9286__9287,0,null);
var tag__9289 = cljs.core.nth.call(null,vec__9286__9287,1,null);
var attrs__9290 = cljs.core.nth.call(null,vec__9286__9287,2,null);
var content__9291 = cljs.core.nth.call(null,vec__9286__9287,3,null);
var elem__9292 = crate.core.create_elem.call(null,nsp__9288,tag__9289);

crate.core.dom_attr.call(null,elem__9292,attrs__9290);
crate.core.as_content.call(null,elem__9292,content__9291);
return elem__9292;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__9293 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__9293)))
{return res__9293;
} else
{return cljs.core.first.call(null,res__9293);
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
html.cljs$lang$applyTo = (function (arglist__9294){
var tags = cljs.core.seq( arglist__9294 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
