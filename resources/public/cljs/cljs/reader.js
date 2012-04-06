goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9197 = reader;

if(cljs.core.truth_(and__3546__auto____9197))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9197;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9198 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9198))
{return or__3548__auto____9198;
} else
{var or__3548__auto____9199 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9199))
{return or__3548__auto____9199;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9200 = reader;

if(cljs.core.truth_(and__3546__auto____9200))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9200;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9201 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9201))
{return or__3548__auto____9201;
} else
{var or__3548__auto____9202 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9202))
{return or__3548__auto____9202;
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
var this__9203 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9203.buffer_atom))))
{var idx__9204 = cljs.core.deref.call(null,this__9203.index_atom);

cljs.core.swap_BANG_.call(null,this__9203.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9203.s,idx__9204);
} else
{var buf__9205 = cljs.core.deref.call(null,this__9203.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9203.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9205);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9206 = this;
return cljs.core.swap_BANG_.call(null,this__9206.buffer_atom,(function (p1__9196_SHARP_){
return cljs.core.cons.call(null,ch,p1__9196_SHARP_);
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
var or__3548__auto____9207 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9207))
{return or__3548__auto____9207;
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
var or__3548__auto____9208 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9208))
{return or__3548__auto____9208;
} else
{var and__3546__auto____9210 = (function (){var or__3548__auto____9209 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9209))
{return or__3548__auto____9209;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9210))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9211 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9211);
return next_ch__9211;
})());
} else
{return and__3546__auto____9210;
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
reader_error.cljs$lang$applyTo = (function (arglist__9212){
var rdr = cljs.core.first(arglist__9212);
var msg = cljs.core.rest(arglist__9212);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9213 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9213))
{var and__3546__auto____9214 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9214))
{var and__3546__auto____9215 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9215))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9215;
}
} else
{return and__3546__auto____9214;
}
} else
{return and__3546__auto____9213;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9216 = (new goog.string.StringBuffer(initch));
var ch__9217 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9218 = (ch__9217 === null);

if(cljs.core.truth_(or__3548__auto____9218))
{return or__3548__auto____9218;
} else
{var or__3548__auto____9219 = cljs.reader.whitespace_QMARK_.call(null,ch__9217);

if(cljs.core.truth_(or__3548__auto____9219))
{return or__3548__auto____9219;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9217);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9217);
return sb__9216.toString();
} else
{{
var G__9220 = (function (){sb__9216.append(ch__9217);
return sb__9216;
})();
var G__9221 = cljs.reader.read_char.call(null,rdr);
sb__9216 = G__9220;
ch__9217 = G__9221;
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
var ch__9222 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9223 = cljs.core._EQ_.call(null,ch__9222,"n");

if(cljs.core.truth_(or__3548__auto____9223))
{return or__3548__auto____9223;
} else
{var or__3548__auto____9224 = cljs.core._EQ_.call(null,ch__9222,"r");

if(cljs.core.truth_(or__3548__auto____9224))
{return or__3548__auto____9224;
} else
{return (ch__9222 === null);
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
var groups__9225 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9226 = cljs.core.nth.call(null,groups__9225,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9227 = (void 0 === group3__9226);

if(cljs.core.truth_(or__3548__auto____9227))
{return or__3548__auto____9227;
} else
{return (group3__9226.length < 1);
}
})())))
{return 0;
} else
{var negate__9229 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9225,1)))?-1:1);
var vec__9228__9230 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9225,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9225,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9225,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9225,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9225,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9225,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9225,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9225,7),parseInt.call(null,cljs.core.nth.call(null,groups__9225,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__9231 = cljs.core.nth.call(null,vec__9228__9230,0,null);
var radix__9232 = cljs.core.nth.call(null,vec__9228__9230,1,null);

if(cljs.core.truth_((n__9231 === null)))
{return null;
} else
{return (negate__9229 * parseInt.call(null,n__9231,radix__9232));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9233 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9234 = cljs.core.nth.call(null,groups__9233,1);
var denominator__9235 = cljs.core.nth.call(null,groups__9233,2);

return (parseInt.call(null,numinator__9234) / parseInt.call(null,denominator__9235));
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
var ch__9236 = cljs.reader.read_char.call(null,reader);
var mapresult__9237 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9236);

if(cljs.core.truth_(mapresult__9237))
{return mapresult__9237;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9238 = cljs.core._EQ_.call(null,"u",ch__9236);

if(cljs.core.truth_(or__3548__auto____9238))
{return or__3548__auto____9238;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9236);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9236);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9236);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9239 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9239)))
{{
var G__9240 = cljs.reader.read_char.call(null,rdr);
ch__9239 = G__9240;
continue;
}
} else
{return ch__9239;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9241 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9242 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9242))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9242)))
{return a__9241;
} else
{var temp__3695__auto____9243 = cljs.core.get.call(null,cljs.reader.macros,ch__9242);

if(cljs.core.truth_(temp__3695__auto____9243))
{var macrofn__9244 = temp__3695__auto____9243;

var mret__9245 = macrofn__9244.call(null,rdr,ch__9242);

{
var G__9247 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9245,rdr))?a__9241:cljs.core.conj.call(null,a__9241,mret__9245));
a__9241 = G__9247;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9242);
var o__9246 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9248 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9246,rdr))?a__9241:cljs.core.conj.call(null,a__9241,o__9246));
a__9241 = G__9248;
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
var ch__9249 = cljs.reader.read_char.call(null,rdr);
var dm__9250 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9249);

if(cljs.core.truth_(dm__9250))
{return dm__9250.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9249);
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
var l__9251 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9251))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9251);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9252 = (new goog.string.StringBuffer(initch));
var ch__9253 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9254 = (ch__9253 === null);

if(cljs.core.truth_(or__3548__auto____9254))
{return or__3548__auto____9254;
} else
{var or__3548__auto____9255 = cljs.reader.whitespace_QMARK_.call(null,ch__9253);

if(cljs.core.truth_(or__3548__auto____9255))
{return or__3548__auto____9255;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9253);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9253);
var s__9256 = buffer__9252.toString();

var or__3548__auto____9257 = cljs.reader.match_number.call(null,s__9256);

if(cljs.core.truth_(or__3548__auto____9257))
{return or__3548__auto____9257;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9256,"]");
}
} else
{{
var G__9258 = (function (){buffer__9252.append(ch__9253);
return buffer__9252;
})();
var G__9259 = cljs.reader.read_char.call(null,reader);
buffer__9252 = G__9258;
ch__9253 = G__9259;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9260 = (new goog.string.StringBuffer());
var ch__9261 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9261 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9261)))
{{
var G__9262 = (function (){buffer__9260.append(cljs.reader.escape_char.call(null,buffer__9260,reader));
return buffer__9260;
})();
var G__9263 = cljs.reader.read_char.call(null,reader);
buffer__9260 = G__9262;
ch__9261 = G__9263;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9261)))
{return buffer__9260.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9264 = (function (){buffer__9260.append(ch__9261);
return buffer__9260;
})();
var G__9265 = cljs.reader.read_char.call(null,reader);
buffer__9260 = G__9264;
ch__9261 = G__9265;
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
var token__9266 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9266,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9266,0,token__9266.indexOf("/")),cljs.core.subs.call(null,token__9266,(token__9266.indexOf("/") + 1),token__9266.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9266,cljs.core.symbol.call(null,token__9266));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9268 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9267__9269 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9268);
var token__9270 = cljs.core.nth.call(null,vec__9267__9269,0,null);
var ns__9271 = cljs.core.nth.call(null,vec__9267__9269,1,null);
var name__9272 = cljs.core.nth.call(null,vec__9267__9269,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9274 = (function (){var and__3546__auto____9273 = cljs.core.not.call(null,(void 0 === ns__9271));

if(cljs.core.truth_(and__3546__auto____9273))
{return (ns__9271.substring((ns__9271.length - 2),ns__9271.length) === ":/");
} else
{return and__3546__auto____9273;
}
})();

if(cljs.core.truth_(or__3548__auto____9274))
{return or__3548__auto____9274;
} else
{var or__3548__auto____9275 = ((name__9272[(name__9272.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9275))
{return or__3548__auto____9275;
} else
{return cljs.core.not.call(null,(token__9270.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9270);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9271.substring(0,ns__9271.indexOf("/")),name__9272);
} else
{return cljs.core.keyword.call(null,token__9270);
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
var m__9276 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9276)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9277 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____9278 = o__9277;

if(cljs.core.truth_((function (){var and__3546__auto____9279 = x__3028__auto____9278;

if(cljs.core.truth_(and__3546__auto____9279))
{var and__3546__auto____9280 = x__3028__auto____9278.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9280))
{return cljs.core.not.call(null,x__3028__auto____9278.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9280;
}
} else
{return and__3546__auto____9279;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____9278);
}
})()))
{return cljs.core.with_meta.call(null,o__9277,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9277),m__9276));
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
var ch__9281 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9281 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9281)))
{{
var G__9283 = reader;
var G__9284 = eof_is_error;
var G__9285 = sentinel;
var G__9286 = is_recursive;
reader = G__9283;
eof_is_error = G__9284;
sentinel = G__9285;
is_recursive = G__9286;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9281)))
{{
var G__9287 = cljs.reader.read_comment.call(null,reader,ch__9281);
var G__9288 = eof_is_error;
var G__9289 = sentinel;
var G__9290 = is_recursive;
reader = G__9287;
eof_is_error = G__9288;
sentinel = G__9289;
is_recursive = G__9290;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9282 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9281))?cljs.reader.macros.call(null,ch__9281).call(null,reader,ch__9281):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9281))?cljs.reader.read_number.call(null,reader,ch__9281):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9281):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9282,reader)))
{{
var G__9291 = reader;
var G__9292 = eof_is_error;
var G__9293 = sentinel;
var G__9294 = is_recursive;
reader = G__9291;
eof_is_error = G__9292;
sentinel = G__9293;
is_recursive = G__9294;
continue;
}
} else
{return res__9282;
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
var r__9295 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9295,true,null,false);
});
