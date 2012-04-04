goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__8784 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__8785 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__8784.call(this,separator);
case  2 :
return join__8785.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__8793 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__8794 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__8787 = s;
var limit__8788 = limit;
var parts__8789 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__8788,1)))
{return cljs.core.conj.call(null,parts__8789,s__8787);
} else
{var temp__3695__auto____8790 = cljs.core.re_find.call(null,re,s__8787);

if(cljs.core.truth_(temp__3695__auto____8790))
{var m__8791 = temp__3695__auto____8790;

var index__8792 = s__8787.indexOf(m__8791);

{
var G__8796 = s__8787.substring((index__8792 + cljs.core.count.call(null,m__8791)));
var G__8797 = (limit__8788 - 1);
var G__8798 = cljs.core.conj.call(null,parts__8789,s__8787.substring(0,index__8792));
s__8787 = G__8796;
limit__8788 = G__8797;
parts__8789 = G__8798;
continue;
}
} else
{return cljs.core.conj.call(null,parts__8789,s__8787);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__8793.call(this,s,re);
case  3 :
return split__8794.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__8799 = s.length;

while(true){
if(cljs.core.truth_((index__8799 === 0)))
{return "";
} else
{var ch__8800 = cljs.core.get.call(null,s,(index__8799 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____8801 = cljs.core._EQ_.call(null,ch__8800,"\n");

if(cljs.core.truth_(or__3548__auto____8801))
{return or__3548__auto____8801;
} else
{return cljs.core._EQ_.call(null,ch__8800,"\r");
}
})()))
{{
var G__8802 = (index__8799 - 1);
index__8799 = G__8802;
continue;
}
} else
{return s.substring(0,index__8799);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__8803 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____8804 = cljs.core.not.call(null,s__8803);

if(cljs.core.truth_(or__3548__auto____8804))
{return or__3548__auto____8804;
} else
{var or__3548__auto____8805 = cljs.core._EQ_.call(null,"",s__8803);

if(cljs.core.truth_(or__3548__auto____8805))
{return or__3548__auto____8805;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__8803);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__8806 = (new goog.string.StringBuffer());
var length__8807 = s.length;

var index__8808 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__8807,index__8808)))
{return buffer__8806.toString();
} else
{var ch__8809 = s.charAt(index__8808);

var temp__3695__auto____8810 = cljs.core.get.call(null,cmap,ch__8809);

if(cljs.core.truth_(temp__3695__auto____8810))
{var replacement__8811 = temp__3695__auto____8810;

buffer__8806.append(cljs.core.str.call(null,replacement__8811));
} else
{buffer__8806.append(ch__8809);
}
{
var G__8812 = (index__8808 + 1);
index__8808 = G__8812;
continue;
}
}
break;
}
});
