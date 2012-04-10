goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9986 = reader;

if(cljs.core.truth_(and__3546__auto____9986))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9986;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9987 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9987))
{return or__3548__auto____9987;
} else
{var or__3548__auto____9988 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9988))
{return or__3548__auto____9988;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9989 = reader;

if(cljs.core.truth_(and__3546__auto____9989))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9989;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9990 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9990))
{return or__3548__auto____9990;
} else
{var or__3548__auto____9991 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9991))
{return or__3548__auto____9991;
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
var this__9992 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9992.buffer_atom))))
{var idx__9993 = cljs.core.deref.call(null,this__9992.index_atom);

cljs.core.swap_BANG_.call(null,this__9992.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9992.s,idx__9993);
} else
{var buf__9994 = cljs.core.deref.call(null,this__9992.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9992.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9994);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9995 = this;
return cljs.core.swap_BANG_.call(null,this__9995.buffer_atom,(function (p1__9985_SHARP_){
return cljs.core.cons.call(null,ch,p1__9985_SHARP_);
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
var or__3548__auto____9996 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9996))
{return or__3548__auto____9996;
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
var or__3548__auto____9997 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9997))
{return or__3548__auto____9997;
} else
{var and__3546__auto____9999 = (function (){var or__3548__auto____9998 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9998))
{return or__3548__auto____9998;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9999))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10000 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__10000);
return next_ch__10000;
})());
} else
{return and__3546__auto____9999;
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
reader_error.cljs$lang$applyTo = (function (arglist__10001){
var rdr = cljs.core.first(arglist__10001);
var msg = cljs.core.rest(arglist__10001);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____10002 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____10002))
{var and__3546__auto____10003 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____10003))
{var and__3546__auto____10004 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____10004))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____10004;
}
} else
{return and__3546__auto____10003;
}
} else
{return and__3546__auto____10002;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10005 = (new goog.string.StringBuffer(initch));
var ch__10006 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10007 = (ch__10006 === null);

if(cljs.core.truth_(or__3548__auto____10007))
{return or__3548__auto____10007;
} else
{var or__3548__auto____10008 = cljs.reader.whitespace_QMARK_.call(null,ch__10006);

if(cljs.core.truth_(or__3548__auto____10008))
{return or__3548__auto____10008;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10006);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__10006);
return sb__10005.toString();
} else
{{
var G__10009 = (function (){sb__10005.append(ch__10006);
return sb__10005;
})();
var G__10010 = cljs.reader.read_char.call(null,rdr);
sb__10005 = G__10009;
ch__10006 = G__10010;
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
var ch__10011 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____10012 = cljs.core._EQ_.call(null,ch__10011,"n");

if(cljs.core.truth_(or__3548__auto____10012))
{return or__3548__auto____10012;
} else
{var or__3548__auto____10013 = cljs.core._EQ_.call(null,ch__10011,"r");

if(cljs.core.truth_(or__3548__auto____10013))
{return or__3548__auto____10013;
} else
{return (ch__10011 === null);
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
var groups__10014 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__10015 = cljs.core.nth.call(null,groups__10014,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10016 = (void 0 === group3__10015);

if(cljs.core.truth_(or__3548__auto____10016))
{return or__3548__auto____10016;
} else
{return (group3__10015.length < 1);
}
})())))
{return 0;
} else
{var negate__10018 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__10014,1)))?-1:1);
var vec__10017__10019 = (cljs.core.truth_(cljs.core.nth.call(null,groups__10014,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10014,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10014,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10014,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10014,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10014,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10014,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__10014,7),parseInt.call(null,cljs.core.nth.call(null,groups__10014,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__10020 = cljs.core.nth.call(null,vec__10017__10019,0,null);
var radix__10021 = cljs.core.nth.call(null,vec__10017__10019,1,null);

if(cljs.core.truth_((n__10020 === null)))
{return null;
} else
{return (negate__10018 * parseInt.call(null,n__10020,radix__10021));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10022 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__10023 = cljs.core.nth.call(null,groups__10022,1);
var denominator__10024 = cljs.core.nth.call(null,groups__10022,2);

return (parseInt.call(null,numinator__10023) / parseInt.call(null,denominator__10024));
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
var ch__10025 = cljs.reader.read_char.call(null,reader);
var mapresult__10026 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__10025);

if(cljs.core.truth_(mapresult__10026))
{return mapresult__10026;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____10027 = cljs.core._EQ_.call(null,"u",ch__10025);

if(cljs.core.truth_(or__3548__auto____10027))
{return or__3548__auto____10027;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__10025);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__10025);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__10025);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__10028 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__10028)))
{{
var G__10029 = cljs.reader.read_char.call(null,rdr);
ch__10028 = G__10029;
continue;
}
} else
{return ch__10028;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10030 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__10031 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__10031))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__10031)))
{return a__10030;
} else
{var temp__3695__auto____10032 = cljs.core.get.call(null,cljs.reader.macros,ch__10031);

if(cljs.core.truth_(temp__3695__auto____10032))
{var macrofn__10033 = temp__3695__auto____10032;

var mret__10034 = macrofn__10033.call(null,rdr,ch__10031);

{
var G__10036 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__10034,rdr))?a__10030:cljs.core.conj.call(null,a__10030,mret__10034));
a__10030 = G__10036;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10031);
var o__10035 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__10037 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__10035,rdr))?a__10030:cljs.core.conj.call(null,a__10030,o__10035));
a__10030 = G__10037;
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
var ch__10038 = cljs.reader.read_char.call(null,rdr);
var dm__10039 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__10038);

if(cljs.core.truth_(dm__10039))
{return dm__10039.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10038);
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
var l__10040 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10040))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10040);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10041 = (new goog.string.StringBuffer(initch));
var ch__10042 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10043 = (ch__10042 === null);

if(cljs.core.truth_(or__3548__auto____10043))
{return or__3548__auto____10043;
} else
{var or__3548__auto____10044 = cljs.reader.whitespace_QMARK_.call(null,ch__10042);

if(cljs.core.truth_(or__3548__auto____10044))
{return or__3548__auto____10044;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__10042);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10042);
var s__10045 = buffer__10041.toString();

var or__3548__auto____10046 = cljs.reader.match_number.call(null,s__10045);

if(cljs.core.truth_(or__3548__auto____10046))
{return or__3548__auto____10046;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10045,"]");
}
} else
{{
var G__10047 = (function (){buffer__10041.append(ch__10042);
return buffer__10041;
})();
var G__10048 = cljs.reader.read_char.call(null,reader);
buffer__10041 = G__10047;
ch__10042 = G__10048;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__10049 = (new goog.string.StringBuffer());
var ch__10050 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__10050 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__10050)))
{{
var G__10051 = (function (){buffer__10049.append(cljs.reader.escape_char.call(null,buffer__10049,reader));
return buffer__10049;
})();
var G__10052 = cljs.reader.read_char.call(null,reader);
buffer__10049 = G__10051;
ch__10050 = G__10052;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__10050)))
{return buffer__10049.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__10053 = (function (){buffer__10049.append(ch__10050);
return buffer__10049;
})();
var G__10054 = cljs.reader.read_char.call(null,reader);
buffer__10049 = G__10053;
ch__10050 = G__10054;
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
var token__10055 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__10055,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10055,0,token__10055.indexOf("/")),cljs.core.subs.call(null,token__10055,(token__10055.indexOf("/") + 1),token__10055.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__10055,cljs.core.symbol.call(null,token__10055));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10057 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__10056__10058 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__10057);
var token__10059 = cljs.core.nth.call(null,vec__10056__10058,0,null);
var ns__10060 = cljs.core.nth.call(null,vec__10056__10058,1,null);
var name__10061 = cljs.core.nth.call(null,vec__10056__10058,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____10063 = (function (){var and__3546__auto____10062 = cljs.core.not.call(null,(void 0 === ns__10060));

if(cljs.core.truth_(and__3546__auto____10062))
{return (ns__10060.substring((ns__10060.length - 2),ns__10060.length) === ":/");
} else
{return and__3546__auto____10062;
}
})();

if(cljs.core.truth_(or__3548__auto____10063))
{return or__3548__auto____10063;
} else
{var or__3548__auto____10064 = ((name__10061[(name__10061.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____10064))
{return or__3548__auto____10064;
} else
{return cljs.core.not.call(null,(token__10059.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10059);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__10060.substring(0,ns__10060.indexOf("/")),name__10061);
} else
{return cljs.core.keyword.call(null,token__10059);
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
var m__10065 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__10065)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10066 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____10067 = o__10066;

if(cljs.core.truth_((function (){var and__3546__auto____10068 = x__3028__auto____10067;

if(cljs.core.truth_(and__3546__auto____10068))
{var and__3546__auto____10069 = x__3028__auto____10067.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____10069))
{return cljs.core.not.call(null,x__3028__auto____10067.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____10069;
}
} else
{return and__3546__auto____10068;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____10067);
}
})()))
{return cljs.core.with_meta.call(null,o__10066,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10066),m__10065));
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
var ch__10070 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__10070 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__10070)))
{{
var G__10072 = reader;
var G__10073 = eof_is_error;
var G__10074 = sentinel;
var G__10075 = is_recursive;
reader = G__10072;
eof_is_error = G__10073;
sentinel = G__10074;
is_recursive = G__10075;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__10070)))
{{
var G__10076 = cljs.reader.read_comment.call(null,reader,ch__10070);
var G__10077 = eof_is_error;
var G__10078 = sentinel;
var G__10079 = is_recursive;
reader = G__10076;
eof_is_error = G__10077;
sentinel = G__10078;
is_recursive = G__10079;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__10071 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__10070))?cljs.reader.macros.call(null,ch__10070).call(null,reader,ch__10070):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__10070))?cljs.reader.read_number.call(null,reader,ch__10070):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__10070):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__10071,reader)))
{{
var G__10080 = reader;
var G__10081 = eof_is_error;
var G__10082 = sentinel;
var G__10083 = is_recursive;
reader = G__10080;
eof_is_error = G__10081;
sentinel = G__10082;
is_recursive = G__10083;
continue;
}
} else
{return res__10071;
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
var r__10084 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__10084,true,null,false);
});
