goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____8965 = reader;

if(cljs.core.truth_(and__3546__auto____8965))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____8965;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____8966 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8966))
{return or__3548__auto____8966;
} else
{var or__3548__auto____8967 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____8967))
{return or__3548__auto____8967;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____8968 = reader;

if(cljs.core.truth_(and__3546__auto____8968))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____8968;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____8969 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8969))
{return or__3548__auto____8969;
} else
{var or__3548__auto____8970 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____8970))
{return or__3548__auto____8970;
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
var this__8971 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__8971.buffer_atom))))
{var idx__8972 = cljs.core.deref.call(null,this__8971.index_atom);

cljs.core.swap_BANG_.call(null,this__8971.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__8971.s,idx__8972);
} else
{var buf__8973 = cljs.core.deref.call(null,this__8971.buffer_atom);

cljs.core.swap_BANG_.call(null,this__8971.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__8973);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__8974 = this;
return cljs.core.swap_BANG_.call(null,this__8974.buffer_atom,(function (p1__8964_SHARP_){
return cljs.core.cons.call(null,ch,p1__8964_SHARP_);
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
var or__3548__auto____8975 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____8975))
{return or__3548__auto____8975;
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
var or__3548__auto____8976 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____8976))
{return or__3548__auto____8976;
} else
{var and__3546__auto____8978 = (function (){var or__3548__auto____8977 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____8977))
{return or__3548__auto____8977;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____8978))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__8979 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__8979);
return next_ch__8979;
})());
} else
{return and__3546__auto____8978;
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
reader_error.cljs$lang$applyTo = (function (arglist__8980){
var rdr = cljs.core.first(arglist__8980);
var msg = cljs.core.rest(arglist__8980);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____8981 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____8981))
{var and__3546__auto____8982 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____8982))
{var and__3546__auto____8983 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____8983))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____8983;
}
} else
{return and__3546__auto____8982;
}
} else
{return and__3546__auto____8981;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__8984 = (new goog.string.StringBuffer(initch));
var ch__8985 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8986 = (ch__8985 === null);

if(cljs.core.truth_(or__3548__auto____8986))
{return or__3548__auto____8986;
} else
{var or__3548__auto____8987 = cljs.reader.whitespace_QMARK_.call(null,ch__8985);

if(cljs.core.truth_(or__3548__auto____8987))
{return or__3548__auto____8987;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__8985);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__8985);
return sb__8984.toString();
} else
{{
var G__8988 = (function (){sb__8984.append(ch__8985);
return sb__8984;
})();
var G__8989 = cljs.reader.read_char.call(null,rdr);
sb__8984 = G__8988;
ch__8985 = G__8989;
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
var ch__8990 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____8991 = cljs.core._EQ_.call(null,ch__8990,"n");

if(cljs.core.truth_(or__3548__auto____8991))
{return or__3548__auto____8991;
} else
{var or__3548__auto____8992 = cljs.core._EQ_.call(null,ch__8990,"r");

if(cljs.core.truth_(or__3548__auto____8992))
{return or__3548__auto____8992;
} else
{return (ch__8990 === null);
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
var groups__8993 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__8994 = cljs.core.nth.call(null,groups__8993,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8995 = (void 0 === group3__8994);

if(cljs.core.truth_(or__3548__auto____8995))
{return or__3548__auto____8995;
} else
{return (group3__8994.length < 1);
}
})())))
{return 0;
} else
{var negate__8997 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__8993,1)))?-1:1);
var vec__8996__8998 = (cljs.core.truth_(cljs.core.nth.call(null,groups__8993,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__8993,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8993,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__8993,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8993,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__8993,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8993,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__8993,7),parseInt.call(null,cljs.core.nth.call(null,groups__8993,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__8999 = cljs.core.nth.call(null,vec__8996__8998,0,null);
var radix__9000 = cljs.core.nth.call(null,vec__8996__8998,1,null);

if(cljs.core.truth_((n__8999 === null)))
{return null;
} else
{return (negate__8997 * parseInt.call(null,n__8999,radix__9000));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9001 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9002 = cljs.core.nth.call(null,groups__9001,1);
var denominator__9003 = cljs.core.nth.call(null,groups__9001,2);

return (parseInt.call(null,numinator__9002) / parseInt.call(null,denominator__9003));
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
var ch__9004 = cljs.reader.read_char.call(null,reader);
var mapresult__9005 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9004);

if(cljs.core.truth_(mapresult__9005))
{return mapresult__9005;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9006 = cljs.core._EQ_.call(null,"u",ch__9004);

if(cljs.core.truth_(or__3548__auto____9006))
{return or__3548__auto____9006;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9004);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9004);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9004);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9007 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9007)))
{{
var G__9008 = cljs.reader.read_char.call(null,rdr);
ch__9007 = G__9008;
continue;
}
} else
{return ch__9007;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9009 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9010 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9010))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9010)))
{return a__9009;
} else
{var temp__3695__auto____9011 = cljs.core.get.call(null,cljs.reader.macros,ch__9010);

if(cljs.core.truth_(temp__3695__auto____9011))
{var macrofn__9012 = temp__3695__auto____9011;

var mret__9013 = macrofn__9012.call(null,rdr,ch__9010);

{
var G__9015 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9013,rdr))?a__9009:cljs.core.conj.call(null,a__9009,mret__9013));
a__9009 = G__9015;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9010);
var o__9014 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9016 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9014,rdr))?a__9009:cljs.core.conj.call(null,a__9009,o__9014));
a__9009 = G__9016;
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
var ch__9017 = cljs.reader.read_char.call(null,rdr);
var dm__9018 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9017);

if(cljs.core.truth_(dm__9018))
{return dm__9018.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9017);
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
var l__9019 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9019))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9019);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9020 = (new goog.string.StringBuffer(initch));
var ch__9021 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9022 = (ch__9021 === null);

if(cljs.core.truth_(or__3548__auto____9022))
{return or__3548__auto____9022;
} else
{var or__3548__auto____9023 = cljs.reader.whitespace_QMARK_.call(null,ch__9021);

if(cljs.core.truth_(or__3548__auto____9023))
{return or__3548__auto____9023;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9021);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9021);
var s__9024 = buffer__9020.toString();

var or__3548__auto____9025 = cljs.reader.match_number.call(null,s__9024);

if(cljs.core.truth_(or__3548__auto____9025))
{return or__3548__auto____9025;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9024,"]");
}
} else
{{
var G__9026 = (function (){buffer__9020.append(ch__9021);
return buffer__9020;
})();
var G__9027 = cljs.reader.read_char.call(null,reader);
buffer__9020 = G__9026;
ch__9021 = G__9027;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9028 = (new goog.string.StringBuffer());
var ch__9029 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9029 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9029)))
{{
var G__9030 = (function (){buffer__9028.append(cljs.reader.escape_char.call(null,buffer__9028,reader));
return buffer__9028;
})();
var G__9031 = cljs.reader.read_char.call(null,reader);
buffer__9028 = G__9030;
ch__9029 = G__9031;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9029)))
{return buffer__9028.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9032 = (function (){buffer__9028.append(ch__9029);
return buffer__9028;
})();
var G__9033 = cljs.reader.read_char.call(null,reader);
buffer__9028 = G__9032;
ch__9029 = G__9033;
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
var token__9034 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9034,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9034,0,token__9034.indexOf("/")),cljs.core.subs.call(null,token__9034,(token__9034.indexOf("/") + 1),token__9034.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9034,cljs.core.symbol.call(null,token__9034));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9036 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9035__9037 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9036);
var token__9038 = cljs.core.nth.call(null,vec__9035__9037,0,null);
var ns__9039 = cljs.core.nth.call(null,vec__9035__9037,1,null);
var name__9040 = cljs.core.nth.call(null,vec__9035__9037,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9042 = (function (){var and__3546__auto____9041 = cljs.core.not.call(null,(void 0 === ns__9039));

if(cljs.core.truth_(and__3546__auto____9041))
{return (ns__9039.substring((ns__9039.length - 2),ns__9039.length) === ":/");
} else
{return and__3546__auto____9041;
}
})();

if(cljs.core.truth_(or__3548__auto____9042))
{return or__3548__auto____9042;
} else
{var or__3548__auto____9043 = ((name__9040[(name__9040.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9043))
{return or__3548__auto____9043;
} else
{return cljs.core.not.call(null,(token__9038.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9038);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9039.substring(0,ns__9039.indexOf("/")),name__9040);
} else
{return cljs.core.keyword.call(null,token__9038);
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
var m__9044 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9044)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9045 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____9046 = o__9045;

if(cljs.core.truth_((function (){var and__3546__auto____9047 = x__3028__auto____9046;

if(cljs.core.truth_(and__3546__auto____9047))
{var and__3546__auto____9048 = x__3028__auto____9046.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9048))
{return cljs.core.not.call(null,x__3028__auto____9046.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9048;
}
} else
{return and__3546__auto____9047;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____9046);
}
})()))
{return cljs.core.with_meta.call(null,o__9045,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9045),m__9044));
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
var ch__9049 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9049 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9049)))
{{
var G__9051 = reader;
var G__9052 = eof_is_error;
var G__9053 = sentinel;
var G__9054 = is_recursive;
reader = G__9051;
eof_is_error = G__9052;
sentinel = G__9053;
is_recursive = G__9054;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9049)))
{{
var G__9055 = cljs.reader.read_comment.call(null,reader,ch__9049);
var G__9056 = eof_is_error;
var G__9057 = sentinel;
var G__9058 = is_recursive;
reader = G__9055;
eof_is_error = G__9056;
sentinel = G__9057;
is_recursive = G__9058;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9050 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9049))?cljs.reader.macros.call(null,ch__9049).call(null,reader,ch__9049):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9049))?cljs.reader.read_number.call(null,reader,ch__9049):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9049):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9050,reader)))
{{
var G__9059 = reader;
var G__9060 = eof_is_error;
var G__9061 = sentinel;
var G__9062 = is_recursive;
reader = G__9059;
eof_is_error = G__9060;
sentinel = G__9061;
is_recursive = G__9062;
continue;
}
} else
{return res__9050;
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
var r__9063 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9063,true,null,false);
});
