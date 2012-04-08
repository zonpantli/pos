goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__9847 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__9828__9829 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9828__9829))
{var G__9831__9833 = cljs.core.first.call(null,G__9828__9829);
var vec__9832__9834 = G__9831__9833;
var k__9835 = cljs.core.nth.call(null,vec__9832__9834,0,null);
var v__9836 = cljs.core.nth.call(null,vec__9832__9834,1,null);
var G__9828__9837 = G__9828__9829;

var G__9831__9838 = G__9831__9833;
var G__9828__9839 = G__9828__9837;

while(true){
var vec__9840__9841 = G__9831__9838;
var k__9842 = cljs.core.nth.call(null,vec__9840__9841,0,null);
var v__9843 = cljs.core.nth.call(null,vec__9840__9841,1,null);
var G__9828__9844 = G__9828__9839;

dom_attr.call(null,elem,k__9842,v__9843);
var temp__3698__auto____9845 = cljs.core.next.call(null,G__9828__9844);

if(cljs.core.truth_(temp__3698__auto____9845))
{var G__9828__9846 = temp__3698__auto____9845;

{
var G__9850 = cljs.core.first.call(null,G__9828__9846);
var G__9851 = G__9828__9846;
G__9831__9838 = G__9850;
G__9828__9839 = G__9851;
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
var dom_attr__9848 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__9847.call(this,elem,k);
case  3 :
return dom_attr__9848.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__9852__9853 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__9852__9853))
{var c__9854 = cljs.core.first.call(null,G__9852__9853);
var G__9852__9855 = G__9852__9853;

while(true){
var child__9856 = (cljs.core.truth_((c__9854 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__9854))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__9854))?goog.dom.createTextNode.call(null,c__9854):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__9854))?crate.core.elem_factory.call(null,c__9854):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__9854))?as_content.call(null,parent,c__9854):(cljs.core.truth_(c__9854.nodeName)?c__9854:null))))));

if(cljs.core.truth_(child__9856))
{goog.dom.appendChild.call(null,parent,child__9856);
} else
{}
var temp__3698__auto____9857 = cljs.core.next.call(null,G__9852__9855);

if(cljs.core.truth_(temp__3698__auto____9857))
{var G__9852__9858 = temp__3698__auto____9857;

{
var G__9859 = cljs.core.first.call(null,G__9852__9858);
var G__9860 = G__9852__9858;
c__9854 = G__9859;
G__9852__9855 = G__9860;
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
crate.core.normalize_element = (function normalize_element(p__9862){
var vec__9863__9864 = p__9862;
var tag__9865 = cljs.core.nth.call(null,vec__9863__9864,0,null);
var content__9866 = cljs.core.nthnext.call(null,vec__9863__9864,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9867 = cljs.core.keyword_QMARK_.call(null,tag__9865);

if(cljs.core.truth_(or__3548__auto____9867))
{return or__3548__auto____9867;
} else
{var or__3548__auto____9868 = cljs.core.symbol_QMARK_.call(null,tag__9865);

if(cljs.core.truth_(or__3548__auto____9868))
{return or__3548__auto____9868;
} else
{return cljs.core.string_QMARK_.call(null,tag__9865);
}
}
})())))
{throw cljs.core.str.call(null,tag__9865," is not a valid tag name.");
} else
{}
var vec__9869__9871 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__9865));
var ___9872 = cljs.core.nth.call(null,vec__9869__9871,0,null);
var tag__9873 = cljs.core.nth.call(null,vec__9869__9871,1,null);
var id__9874 = cljs.core.nth.call(null,vec__9869__9871,2,null);
var class$__9875 = cljs.core.nth.call(null,vec__9869__9871,3,null);
var vec__9870__9882 = (function (){var vec__9876__9877 = clojure.string.split.call(null,tag__9873,/:/);
var nsp__9878 = cljs.core.nth.call(null,vec__9876__9877,0,null);
var t__9879 = cljs.core.nth.call(null,vec__9876__9877,1,null);
var ns_xmlns__9880 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__9878));

if(cljs.core.truth_(t__9879))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____9881 = ns_xmlns__9880;

if(cljs.core.truth_(or__3548__auto____9881))
{return or__3548__auto____9881;
} else
{return nsp__9878;
}
})(),t__9879]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__9878]);
}
})();
var nsp__9883 = cljs.core.nth.call(null,vec__9870__9882,0,null);
var tag__9884 = cljs.core.nth.call(null,vec__9870__9882,1,null);
var tag_attrs__9886 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__9861_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__9861_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____9885 = id__9874;

if(cljs.core.truth_(or__3548__auto____9885))
{return or__3548__auto____9885;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__9875)?clojure.string.replace.call(null,class$__9875,/\./," "):null)})));
var map_attrs__9887 = cljs.core.first.call(null,content__9866);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__9887)))
{return cljs.core.PersistentVector.fromArray([nsp__9883,tag__9884,cljs.core.merge.call(null,tag_attrs__9886,map_attrs__9887),cljs.core.next.call(null,content__9866)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__9883,tag__9884,tag_attrs__9886,content__9866]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__9888 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__9888)))
{crate.core.dom_attr.call(null,elem,attrs__9888);
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
var vec__9889__9890 = crate.core.normalize_element.call(null,tag_def);
var nsp__9891 = cljs.core.nth.call(null,vec__9889__9890,0,null);
var tag__9892 = cljs.core.nth.call(null,vec__9889__9890,1,null);
var attrs__9893 = cljs.core.nth.call(null,vec__9889__9890,2,null);
var content__9894 = cljs.core.nth.call(null,vec__9889__9890,3,null);
var elem__9895 = crate.core.create_elem.call(null,nsp__9891,tag__9892);

crate.core.dom_attr.call(null,elem__9895,attrs__9893);
crate.core.as_content.call(null,elem__9895,content__9894);
return elem__9895;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__9896 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__9896)))
{return res__9896;
} else
{return cljs.core.first.call(null,res__9896);
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
html.cljs$lang$applyTo = (function (arglist__9897){
var tags = cljs.core.seq( arglist__9897 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
