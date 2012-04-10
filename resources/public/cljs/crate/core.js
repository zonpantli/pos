goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__13688 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__13669__13670 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__13669__13670))
{var G__13672__13674 = cljs.core.first.call(null,G__13669__13670);
var vec__13673__13675 = G__13672__13674;
var k__13676 = cljs.core.nth.call(null,vec__13673__13675,0,null);
var v__13677 = cljs.core.nth.call(null,vec__13673__13675,1,null);
var G__13669__13678 = G__13669__13670;

var G__13672__13679 = G__13672__13674;
var G__13669__13680 = G__13669__13678;

while(true){
var vec__13681__13682 = G__13672__13679;
var k__13683 = cljs.core.nth.call(null,vec__13681__13682,0,null);
var v__13684 = cljs.core.nth.call(null,vec__13681__13682,1,null);
var G__13669__13685 = G__13669__13680;

dom_attr.call(null,elem,k__13683,v__13684);
var temp__3698__auto____13686 = cljs.core.next.call(null,G__13669__13685);

if(cljs.core.truth_(temp__3698__auto____13686))
{var G__13669__13687 = temp__3698__auto____13686;

{
var G__13691 = cljs.core.first.call(null,G__13669__13687);
var G__13692 = G__13669__13687;
G__13672__13679 = G__13691;
G__13669__13680 = G__13692;
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
var dom_attr__13689 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__13688.call(this,elem,k);
case  3 :
return dom_attr__13689.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__13693__13694 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__13693__13694))
{var c__13695 = cljs.core.first.call(null,G__13693__13694);
var G__13693__13696 = G__13693__13694;

while(true){
var child__13697 = (cljs.core.truth_((c__13695 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__13695))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__13695))?goog.dom.createTextNode.call(null,c__13695):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__13695))?crate.core.elem_factory.call(null,c__13695):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__13695))?as_content.call(null,parent,c__13695):(cljs.core.truth_(c__13695.nodeName)?c__13695:null))))));

if(cljs.core.truth_(child__13697))
{goog.dom.appendChild.call(null,parent,child__13697);
} else
{}
var temp__3698__auto____13698 = cljs.core.next.call(null,G__13693__13696);

if(cljs.core.truth_(temp__3698__auto____13698))
{var G__13693__13699 = temp__3698__auto____13698;

{
var G__13700 = cljs.core.first.call(null,G__13693__13699);
var G__13701 = G__13693__13699;
c__13695 = G__13700;
G__13693__13696 = G__13701;
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
crate.core.normalize_element = (function normalize_element(p__13703){
var vec__13704__13705 = p__13703;
var tag__13706 = cljs.core.nth.call(null,vec__13704__13705,0,null);
var content__13707 = cljs.core.nthnext.call(null,vec__13704__13705,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____13708 = cljs.core.keyword_QMARK_.call(null,tag__13706);

if(cljs.core.truth_(or__3548__auto____13708))
{return or__3548__auto____13708;
} else
{var or__3548__auto____13709 = cljs.core.symbol_QMARK_.call(null,tag__13706);

if(cljs.core.truth_(or__3548__auto____13709))
{return or__3548__auto____13709;
} else
{return cljs.core.string_QMARK_.call(null,tag__13706);
}
}
})())))
{throw cljs.core.str.call(null,tag__13706," is not a valid tag name.");
} else
{}
var vec__13710__13712 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__13706));
var ___13713 = cljs.core.nth.call(null,vec__13710__13712,0,null);
var tag__13714 = cljs.core.nth.call(null,vec__13710__13712,1,null);
var id__13715 = cljs.core.nth.call(null,vec__13710__13712,2,null);
var class$__13716 = cljs.core.nth.call(null,vec__13710__13712,3,null);
var vec__13711__13723 = (function (){var vec__13717__13718 = clojure.string.split.call(null,tag__13714,/:/);
var nsp__13719 = cljs.core.nth.call(null,vec__13717__13718,0,null);
var t__13720 = cljs.core.nth.call(null,vec__13717__13718,1,null);
var ns_xmlns__13721 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__13719));

if(cljs.core.truth_(t__13720))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____13722 = ns_xmlns__13721;

if(cljs.core.truth_(or__3548__auto____13722))
{return or__3548__auto____13722;
} else
{return nsp__13719;
}
})(),t__13720]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__13719]);
}
})();
var nsp__13724 = cljs.core.nth.call(null,vec__13711__13723,0,null);
var tag__13725 = cljs.core.nth.call(null,vec__13711__13723,1,null);
var tag_attrs__13727 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__13702_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__13702_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____13726 = id__13715;

if(cljs.core.truth_(or__3548__auto____13726))
{return or__3548__auto____13726;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__13716)?clojure.string.replace.call(null,class$__13716,/\./," "):null)})));
var map_attrs__13728 = cljs.core.first.call(null,content__13707);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__13728)))
{return cljs.core.PersistentVector.fromArray([nsp__13724,tag__13725,cljs.core.merge.call(null,tag_attrs__13727,map_attrs__13728),cljs.core.next.call(null,content__13707)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__13724,tag__13725,tag_attrs__13727,content__13707]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__13729 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__13729)))
{crate.core.dom_attr.call(null,elem,attrs__13729);
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
var vec__13730__13731 = crate.core.normalize_element.call(null,tag_def);
var nsp__13732 = cljs.core.nth.call(null,vec__13730__13731,0,null);
var tag__13733 = cljs.core.nth.call(null,vec__13730__13731,1,null);
var attrs__13734 = cljs.core.nth.call(null,vec__13730__13731,2,null);
var content__13735 = cljs.core.nth.call(null,vec__13730__13731,3,null);
var elem__13736 = crate.core.create_elem.call(null,nsp__13732,tag__13733);

crate.core.dom_attr.call(null,elem__13736,attrs__13734);
crate.core.as_content.call(null,elem__13736,content__13735);
return elem__13736;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__13737 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__13737)))
{return res__13737;
} else
{return cljs.core.first.call(null,res__13737);
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
html.cljs$lang$applyTo = (function (arglist__13738){
var tags = cljs.core.seq( arglist__13738 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
