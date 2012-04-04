goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____8862 = reader;

if(cljs.core.truth_(and__3546__auto____8862))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____8862;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____8863 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8863))
{return or__3548__auto____8863;
} else
{var or__3548__auto____8864 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____8864))
{return or__3548__auto____8864;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____8865 = reader;

if(cljs.core.truth_(and__3546__auto____8865))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____8865;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____8866 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8866))
{return or__3548__auto____8866;
} else
{var or__3548__auto____8867 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____8867))
{return or__3548__auto____8867;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__2942__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__8868 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__8868.buffer_atom))))
{var idx__8869 = cljs.core.deref.call(null,this__8868.index_atom);

cljs.core.swap_BANG_.call(null,this__8868.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__8868.s,idx__8869);
} else
{var buf__8870 = cljs.core.deref.call(null,this__8868.buffer_atom);

cljs.core.swap_BANG_.call(null,this__8868.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__8870);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__8871 = this;
return cljs.core.swap_BANG_.call(null,this__8871.buffer_atom,(function (p1__8861_SHARP_){
return cljs.core.cons.call(null,ch,p1__8861_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____8872 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____8872))
{return or__3548__auto____8872;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____8873 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____8873))
{return or__3548__auto____8873;
} else
{var and__3546__auto____8875 = (function (){var or__3548__auto____8874 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____8874))
{return or__3548__auto____8874;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____8875))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__8876 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__8876);
return next_ch__8876;
})());
} else
{return and__3546__auto____8875;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__8877){
var rdr = cljs.core.first(arglist__8877);
var msg = cljs.core.rest(arglist__8877);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____8878 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____8878))
{var and__3546__auto____8879 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____8879))
{var and__3546__auto____8880 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____8880;
}
} else
{return and__3546__auto____8879;
}
} else
{return and__3546__auto____8878;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__8881 = (new goog.string.StringBuffer(initch));
var ch__8882 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8883 = (ch__8882 === null);

if(cljs.core.truth_(or__3548__auto____8883))
{return or__3548__auto____8883;
} else
{var or__3548__auto____8884 = cljs.reader.whitespace_QMARK_.call(null,ch__8882);

if(cljs.core.truth_(or__3548__auto____8884))
{return or__3548__auto____8884;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__8882);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__8882);
return sb__8881.toString();
} else
{{
var G__8885 = (function (){sb__8881.append(ch__8882);
return sb__8881;
})();
var G__8886 = cljs.reader.read_char.call(null,rdr);
sb__8881 = G__8885;
ch__8882 = G__8886;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__8887 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____8888 = cljs.core._EQ_.call(null,ch__8887,"n");

if(cljs.core.truth_(or__3548__auto____8888))
{return or__3548__auto____8888;
} else
{var or__3548__auto____8889 = cljs.core._EQ_.call(null,ch__8887,"r");

if(cljs.core.truth_(or__3548__auto____8889))
{return or__3548__auto____8889;
} else
{return (ch__8887 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)\/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9\/].*\/)?([^0-9\/][^\/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__8890 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__8891 = cljs.core.nth.call(null,groups__8890,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8892 = (void 0 === group3__8891);

if(cljs.core.truth_(or__3548__auto____8892))
{return or__3548__auto____8892;
} else
{return (group3__8891.length < 1);
}
})())))
{return 0;
} else
{var negate__8894 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__8890,1)))?-1:1);
var vec__8893__8895 = (cljs.core.truth_(cljs.core.nth.call(null,groups__8890,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8890,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8890,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8890,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8890,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8890,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8890,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8890,7),parseInt.call(null,cljs.core.nth.call(null,groups__8890,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__8896 = cljs.core.nth.call(null,vec__8893__8895,0,null);
var radix__8897 = cljs.core.nth.call(null,vec__8893__8895,1,null);

if(cljs.core.truth_((n__8896 === null)))
{return null;
} else
{return (negate__8894 * parseInt.call(null,n__8896,radix__8897));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__8898 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__8899 = cljs.core.nth.call(null,groups__8898,1);
var denominator__8900 = cljs.core.nth.call(null,groups__8898,2);

return (parseInt.call(null,numinator__8899) / parseInt.call(null,denominator__8900));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__8901 = cljs.reader.read_char.call(null,reader);
var mapresult__8902 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__8901);

if(cljs.core.truth_(mapresult__8902))
{return mapresult__8902;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____8903 = cljs.core._EQ_.call(null,"u",ch__8901);

if(cljs.core.truth_(or__3548__auto____8903))
{return or__3548__auto____8903;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__8901);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__8901);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__8901);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__8904 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__8904)))
{{
var G__8905 = cljs.reader.read_char.call(null,rdr);
ch__8904 = G__8905;
continue;
}
} else
{return ch__8904;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__8906 = cljs.core.Vector.fromArray([]);

while(true){
var ch__8907 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__8907))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__8907)))
{return a__8906;
} else
{var temp__3695__auto____8908 = cljs.core.get.call(null,cljs.reader.macros,ch__8907);

if(cljs.core.truth_(temp__3695__auto____8908))
{var macrofn__8909 = temp__3695__auto____8908;

var mret__8910 = macrofn__8909.call(null,rdr,ch__8907);

{
var G__8912 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__8910,rdr))?a__8906:cljs.core.conj.call(null,a__8906,mret__8910));
a__8906 = G__8912;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__8907);
var o__8911 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__8913 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__8911,rdr))?a__8906:cljs.core.conj.call(null,a__8906,o__8911));
a__8906 = G__8913;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__8914 = cljs.reader.read_char.call(null,rdr);
var dm__8915 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__8914);

if(cljs.core.truth_(dm__8915))
{return dm__8915.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__8914);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__8916 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__8916))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__8916);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__8917 = (new goog.string.StringBuffer(initch));
var ch__8918 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8919 = (ch__8918 === null);

if(cljs.core.truth_(or__3548__auto____8919))
{return or__3548__auto____8919;
} else
{var or__3548__auto____8920 = cljs.reader.whitespace_QMARK_.call(null,ch__8918);

if(cljs.core.truth_(or__3548__auto____8920))
{return or__3548__auto____8920;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__8918);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__8918);
var s__8921 = buffer__8917.toString();

var or__3548__auto____8922 = cljs.reader.match_number.call(null,s__8921);

if(cljs.core.truth_(or__3548__auto____8922))
{return or__3548__auto____8922;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__8921,"]");
}
} else
{{
var G__8923 = (function (){buffer__8917.append(ch__8918);
return buffer__8917;
})();
var G__8924 = cljs.reader.read_char.call(null,reader);
buffer__8917 = G__8923;
ch__8918 = G__8924;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__8925 = (new goog.string.StringBuffer());
var ch__8926 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__8926 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__8926)))
{{
var G__8927 = (function (){buffer__8925.append(cljs.reader.escape_char.call(null,buffer__8925,reader));
return buffer__8925;
})();
var G__8928 = cljs.reader.read_char.call(null,reader);
buffer__8925 = G__8927;
ch__8926 = G__8928;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__8926)))
{return buffer__8925.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__8929 = (function (){buffer__8925.append(ch__8926);
return buffer__8925;
})();
var G__8930 = cljs.reader.read_char.call(null,reader);
buffer__8925 = G__8929;
ch__8926 = G__8930;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__8931 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__8931,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__8931,0,token__8931.indexOf("\/")),cljs.core.subs.call(null,token__8931,(token__8931.indexOf("\/") + 1),token__8931.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__8931,cljs.core.symbol.call(null,token__8931));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__8933 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__8932__8934 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__8933);
var token__8935 = cljs.core.nth.call(null,vec__8932__8934,0,null);
var ns__8936 = cljs.core.nth.call(null,vec__8932__8934,1,null);
var name__8937 = cljs.core.nth.call(null,vec__8932__8934,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____8939 = (function (){var and__3546__auto____8938 = cljs.core.not.call(null,(void 0 === ns__8936));

if(cljs.core.truth_(and__3546__auto____8938))
{return (ns__8936.substring((ns__8936.length - 2),ns__8936.length) === ":\/");
} else
{return and__3546__auto____8938;
}
})();

if(cljs.core.truth_(or__3548__auto____8939))
{return or__3548__auto____8939;
} else
{var or__3548__auto____8940 = ((name__8937[(name__8937.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____8940))
{return or__3548__auto____8940;
} else
{return cljs.core.not.call(null,(token__8935.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__8935);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__8936.substring(0,ns__8936.indexOf("\/")),name__8937);
} else
{return cljs.core.keyword.call(null,token__8935);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__8941 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__8941)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__8942 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3027__auto____8943 = o__8942;

if(cljs.core.truth_((function (){var and__3546__auto____8944 = x__3027__auto____8943;

if(cljs.core.truth_(and__3546__auto____8944))
{var and__3546__auto____8945 = x__3027__auto____8943.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____8945))
{return cljs.core.not.call(null,x__3027__auto____8943.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____8945;
}
} else
{return and__3546__auto____8944;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3027__auto____8943);
}
})()))
{return cljs.core.with_meta.call(null,o__8942,cljs.core.merge.call(null,cljs.core.meta.call(null,o__8942),m__8941));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__8946 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__8946 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__8946)))
{{
var G__8948 = reader;
var G__8949 = eof_is_error;
var G__8950 = sentinel;
var G__8951 = is_recursive;
reader = G__8948;
eof_is_error = G__8949;
sentinel = G__8950;
is_recursive = G__8951;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__8946)))
{{
var G__8952 = cljs.reader.read_comment.call(null,reader,ch__8946);
var G__8953 = eof_is_error;
var G__8954 = sentinel;
var G__8955 = is_recursive;
reader = G__8952;
eof_is_error = G__8953;
sentinel = G__8954;
is_recursive = G__8955;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__8947 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__8946))?cljs.reader.macros.call(null,ch__8946).call(null,reader,ch__8946):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__8946))?cljs.reader.read_number.call(null,reader,ch__8946):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__8946):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__8947,reader)))
{{
var G__8956 = reader;
var G__8957 = eof_is_error;
var G__8958 = sentinel;
var G__8959 = is_recursive;
reader = G__8956;
eof_is_error = G__8957;
sentinel = G__8958;
is_recursive = G__8959;
continue;
}
} else
{return res__8947;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__8960 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__8960,true,null,false);
});
