goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____10029 = reader;

if(cljs.core.truth_(and__3546__auto____10029))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____10029;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____10030 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____10030))
{return or__3548__auto____10030;
} else
{var or__3548__auto____10031 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____10031))
{return or__3548__auto____10031;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____10032 = reader;

if(cljs.core.truth_(and__3546__auto____10032))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____10032;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____10033 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____10033))
{return or__3548__auto____10033;
} else
{var or__3548__auto____10034 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____10034))
{return or__3548__auto____10034;
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__2944__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__10035 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10035.buffer_atom))))
{var idx__10036 = cljs.core.deref.call(null,this__10035.index_atom);

cljs.core.swap_BANG_.call(null,this__10035.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__10035.s,idx__10036);
} else
{var buf__10037 = cljs.core.deref.call(null,this__10035.buffer_atom);

cljs.core.swap_BANG_.call(null,this__10035.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10037);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__10038 = this;
return cljs.core.swap_BANG_.call(null,this__10038.buffer_atom,(function (p1__10028_SHARP_){
return cljs.core.cons.call(null,ch,p1__10028_SHARP_);
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
var or__3548__auto____10039 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____10039))
{return or__3548__auto____10039;
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
var or__3548__auto____10040 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____10040))
{return or__3548__auto____10040;
} else
{var and__3546__auto____10042 = (function (){var or__3548__auto____10041 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____10041))
{return or__3548__auto____10041;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____10042))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10043 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__10043);
return next_ch__10043;
})());
} else
{return and__3546__auto____10042;
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
reader_error.cljs$lang$applyTo = (function (arglist__10044){
var rdr = cljs.core.first(arglist__10044);
var msg = cljs.core.rest(arglist__10044);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____10045 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____10045))
{var and__3546__auto____10046 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____10046))
{var and__3546__auto____10047 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____10047))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____10047;
}
} else
{return and__3546__auto____10046;
}
} else
{return and__3546__auto____10045;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10048 = (new goog.string.StringBuffer(initch));
var ch__10049 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10050 = (ch__10049 === null);

if(cljs.core.truth_(or__3548__auto____10050))
{return or__3548__auto____10050;
} else
{var or__3548__auto____10051 = cljs.reader.whitespace_QMARK_.call(null,ch__10049);

if(cljs.core.truth_(or__3548__auto____10051))
{return or__3548__auto____10051;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10049);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__10049);
return sb__10048.toString();
} else
{{
var G__10052 = (function (){sb__10048.append(ch__10049);
return sb__10048;
})();
var G__10053 = cljs.reader.read_char.call(null,rdr);
sb__10048 = G__10052;
ch__10049 = G__10053;
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
var ch__10054 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____10055 = cljs.core._EQ_.call(null,ch__10054,"n");

if(cljs.core.truth_(or__3548__auto____10055))
{return or__3548__auto____10055;
} else
{var or__3548__auto____10056 = cljs.core._EQ_.call(null,ch__10054,"r");

if(cljs.core.truth_(or__3548__auto____10056))
{return or__3548__auto____10056;
} else
{return (ch__10054 === null);
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
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__10057 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__10058 = cljs.core.nth.call(null,groups__10057,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10059 = (void 0 === group3__10058);

if(cljs.core.truth_(or__3548__auto____10059))
{return or__3548__auto____10059;
} else
{return (group3__10058.length < 1);
}
})())))
{return 0;
} else
{var negate__10061 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__10057,1)))?-1:1);
var vec__10060__10062 = (cljs.core.truth_(cljs.core.nth.call(null,groups__10057,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10057,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10057,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10057,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10057,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10057,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10057,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10057,7),parseInt.call(null,cljs.core.nth.call(null,groups__10057,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__10063 = cljs.core.nth.call(null,vec__10060__10062,0,null);
var radix__10064 = cljs.core.nth.call(null,vec__10060__10062,1,null);

if(cljs.core.truth_((n__10063 === null)))
{return null;
} else
{return (negate__10061 * parseInt.call(null,n__10063,radix__10064));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10065 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__10066 = cljs.core.nth.call(null,groups__10065,1);
var denominator__10067 = cljs.core.nth.call(null,groups__10065,2);

return (parseInt.call(null,numinator__10066) / parseInt.call(null,denominator__10067));
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
var ch__10068 = cljs.reader.read_char.call(null,reader);
var mapresult__10069 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__10068);

if(cljs.core.truth_(mapresult__10069))
{return mapresult__10069;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____10070 = cljs.core._EQ_.call(null,"u",ch__10068);

if(cljs.core.truth_(or__3548__auto____10070))
{return or__3548__auto____10070;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__10068);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__10068);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__10068);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__10071 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__10071)))
{{
var G__10072 = cljs.reader.read_char.call(null,rdr);
ch__10071 = G__10072;
continue;
}
} else
{return ch__10071;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10073 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__10074 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__10074))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__10074)))
{return a__10073;
} else
{var temp__3695__auto____10075 = cljs.core.get.call(null,cljs.reader.macros,ch__10074);

if(cljs.core.truth_(temp__3695__auto____10075))
{var macrofn__10076 = temp__3695__auto____10075;

var mret__10077 = macrofn__10076.call(null,rdr,ch__10074);

{
var G__10079 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__10077,rdr))?a__10073:cljs.core.conj.call(null,a__10073,mret__10077));
a__10073 = G__10079;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10074);
var o__10078 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__10080 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__10078,rdr))?a__10073:cljs.core.conj.call(null,a__10073,o__10078));
a__10073 = G__10080;
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
var ch__10081 = cljs.reader.read_char.call(null,rdr);
var dm__10082 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__10081);

if(cljs.core.truth_(dm__10082))
{return dm__10082.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10081);
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
var l__10083 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10083))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10083);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10084 = (new goog.string.StringBuffer(initch));
var ch__10085 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10086 = (ch__10085 === null);

if(cljs.core.truth_(or__3548__auto____10086))
{return or__3548__auto____10086;
} else
{var or__3548__auto____10087 = cljs.reader.whitespace_QMARK_.call(null,ch__10085);

if(cljs.core.truth_(or__3548__auto____10087))
{return or__3548__auto____10087;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__10085);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10085);
var s__10088 = buffer__10084.toString();

var or__3548__auto____10089 = cljs.reader.match_number.call(null,s__10088);

if(cljs.core.truth_(or__3548__auto____10089))
{return or__3548__auto____10089;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10088,"]");
}
} else
{{
var G__10090 = (function (){buffer__10084.append(ch__10085);
return buffer__10084;
})();
var G__10091 = cljs.reader.read_char.call(null,reader);
buffer__10084 = G__10090;
ch__10085 = G__10091;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__10092 = (new goog.string.StringBuffer());
var ch__10093 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__10093 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__10093)))
{{
var G__10094 = (function (){buffer__10092.append(cljs.reader.escape_char.call(null,buffer__10092,reader));
return buffer__10092;
})();
var G__10095 = cljs.reader.read_char.call(null,reader);
buffer__10092 = G__10094;
ch__10093 = G__10095;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__10093)))
{return buffer__10092.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__10096 = (function (){buffer__10092.append(ch__10093);
return buffer__10092;
})();
var G__10097 = cljs.reader.read_char.call(null,reader);
buffer__10092 = G__10096;
ch__10093 = G__10097;
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
var token__10098 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__10098,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10098,0,token__10098.indexOf("/")),cljs.core.subs.call(null,token__10098,(token__10098.indexOf("/") + 1),token__10098.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__10098,cljs.core.symbol.call(null,token__10098));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10100 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__10099__10101 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__10100);
var token__10102 = cljs.core.nth.call(null,vec__10099__10101,0,null);
var ns__10103 = cljs.core.nth.call(null,vec__10099__10101,1,null);
var name__10104 = cljs.core.nth.call(null,vec__10099__10101,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____10106 = (function (){var and__3546__auto____10105 = cljs.core.not.call(null,(void 0 === ns__10103));

if(cljs.core.truth_(and__3546__auto____10105))
{return (ns__10103.substring((ns__10103.length - 2),ns__10103.length) === ":/");
} else
{return and__3546__auto____10105;
}
})();

if(cljs.core.truth_(or__3548__auto____10106))
{return or__3548__auto____10106;
} else
{var or__3548__auto____10107 = ((name__10104[(name__10104.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____10107))
{return or__3548__auto____10107;
} else
{return cljs.core.not.call(null,(token__10102.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10102);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__10103.substring(0,ns__10103.indexOf("/")),name__10104);
} else
{return cljs.core.keyword.call(null,token__10102);
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
var m__10108 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__10108)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10109 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____10110 = o__10109;

if(cljs.core.truth_((function (){var and__3546__auto____10111 = x__3028__auto____10110;

if(cljs.core.truth_(and__3546__auto____10111))
{var and__3546__auto____10112 = x__3028__auto____10110.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____10112))
{return cljs.core.not.call(null,x__3028__auto____10110.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____10112;
}
} else
{return and__3546__auto____10111;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____10110);
}
})()))
{return cljs.core.with_meta.call(null,o__10109,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10109),m__10108));
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
var ch__10113 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__10113 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__10113)))
{{
var G__10115 = reader;
var G__10116 = eof_is_error;
var G__10117 = sentinel;
var G__10118 = is_recursive;
reader = G__10115;
eof_is_error = G__10116;
sentinel = G__10117;
is_recursive = G__10118;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__10113)))
{{
var G__10119 = cljs.reader.read_comment.call(null,reader,ch__10113);
var G__10120 = eof_is_error;
var G__10121 = sentinel;
var G__10122 = is_recursive;
reader = G__10119;
eof_is_error = G__10120;
sentinel = G__10121;
is_recursive = G__10122;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__10114 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__10113))?cljs.reader.macros.call(null,ch__10113).call(null,reader,ch__10113):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__10113))?cljs.reader.read_number.call(null,reader,ch__10113):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__10113):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__10114,reader)))
{{
var G__10123 = reader;
var G__10124 = eof_is_error;
var G__10125 = sentinel;
var G__10126 = is_recursive;
reader = G__10123;
eof_is_error = G__10124;
sentinel = G__10125;
is_recursive = G__10126;
continue;
}
} else
{return res__10114;
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
var r__10127 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__10127,true,null,false);
});
