goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9229 = reader;

if(cljs.core.truth_(and__3546__auto____9229))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9229;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9230 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9230))
{return or__3548__auto____9230;
} else
{var or__3548__auto____9231 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9231))
{return or__3548__auto____9231;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9232 = reader;

if(cljs.core.truth_(and__3546__auto____9232))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9232;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9233 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9233))
{return or__3548__auto____9233;
} else
{var or__3548__auto____9234 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9234))
{return or__3548__auto____9234;
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
var this__9235 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9235.buffer_atom))))
{var idx__9236 = cljs.core.deref.call(null,this__9235.index_atom);

cljs.core.swap_BANG_.call(null,this__9235.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9235.s,idx__9236);
} else
{var buf__9237 = cljs.core.deref.call(null,this__9235.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9235.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9237);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9238 = this;
return cljs.core.swap_BANG_.call(null,this__9238.buffer_atom,(function (p1__9228_SHARP_){
return cljs.core.cons.call(null,ch,p1__9228_SHARP_);
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
var or__3548__auto____9239 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9239))
{return or__3548__auto____9239;
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
var or__3548__auto____9240 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9240))
{return or__3548__auto____9240;
} else
{var and__3546__auto____9242 = (function (){var or__3548__auto____9241 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9241))
{return or__3548__auto____9241;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9242))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9243 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9243);
return next_ch__9243;
})());
} else
{return and__3546__auto____9242;
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
reader_error.cljs$lang$applyTo = (function (arglist__9244){
var rdr = cljs.core.first(arglist__9244);
var msg = cljs.core.rest(arglist__9244);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9245 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9245))
{var and__3546__auto____9246 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9246))
{var and__3546__auto____9247 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9247))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9247;
}
} else
{return and__3546__auto____9246;
}
} else
{return and__3546__auto____9245;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9248 = (new goog.string.StringBuffer(initch));
var ch__9249 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9250 = (ch__9249 === null);

if(cljs.core.truth_(or__3548__auto____9250))
{return or__3548__auto____9250;
} else
{var or__3548__auto____9251 = cljs.reader.whitespace_QMARK_.call(null,ch__9249);

if(cljs.core.truth_(or__3548__auto____9251))
{return or__3548__auto____9251;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9249);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9249);
return sb__9248.toString();
} else
{{
var G__9252 = (function (){sb__9248.append(ch__9249);
return sb__9248;
})();
var G__9253 = cljs.reader.read_char.call(null,rdr);
sb__9248 = G__9252;
ch__9249 = G__9253;
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
var ch__9254 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9255 = cljs.core._EQ_.call(null,ch__9254,"n");

if(cljs.core.truth_(or__3548__auto____9255))
{return or__3548__auto____9255;
} else
{var or__3548__auto____9256 = cljs.core._EQ_.call(null,ch__9254,"r");

if(cljs.core.truth_(or__3548__auto____9256))
{return or__3548__auto____9256;
} else
{return (ch__9254 === null);
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
var groups__9257 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9258 = cljs.core.nth.call(null,groups__9257,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9259 = (void 0 === group3__9258);

if(cljs.core.truth_(or__3548__auto____9259))
{return or__3548__auto____9259;
} else
{return (group3__9258.length < 1);
}
})())))
{return 0;
} else
{var negate__9261 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9257,1)))?-1:1);
var vec__9260__9262 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9257,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9257,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9257,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9257,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9257,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9257,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9257,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9257,7),parseInt.call(null,cljs.core.nth.call(null,groups__9257,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__9263 = cljs.core.nth.call(null,vec__9260__9262,0,null);
var radix__9264 = cljs.core.nth.call(null,vec__9260__9262,1,null);

if(cljs.core.truth_((n__9263 === null)))
{return null;
} else
{return (negate__9261 * parseInt.call(null,n__9263,radix__9264));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9265 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9266 = cljs.core.nth.call(null,groups__9265,1);
var denominator__9267 = cljs.core.nth.call(null,groups__9265,2);

return (parseInt.call(null,numinator__9266) / parseInt.call(null,denominator__9267));
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
var ch__9268 = cljs.reader.read_char.call(null,reader);
var mapresult__9269 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9268);

if(cljs.core.truth_(mapresult__9269))
{return mapresult__9269;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9270 = cljs.core._EQ_.call(null,"u",ch__9268);

if(cljs.core.truth_(or__3548__auto____9270))
{return or__3548__auto____9270;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9268);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9268);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9268);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9271 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9271)))
{{
var G__9272 = cljs.reader.read_char.call(null,rdr);
ch__9271 = G__9272;
continue;
}
} else
{return ch__9271;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9273 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9274 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9274))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9274)))
{return a__9273;
} else
{var temp__3695__auto____9275 = cljs.core.get.call(null,cljs.reader.macros,ch__9274);

if(cljs.core.truth_(temp__3695__auto____9275))
{var macrofn__9276 = temp__3695__auto____9275;

var mret__9277 = macrofn__9276.call(null,rdr,ch__9274);

{
var G__9279 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9277,rdr))?a__9273:cljs.core.conj.call(null,a__9273,mret__9277));
a__9273 = G__9279;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9274);
var o__9278 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9280 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9278,rdr))?a__9273:cljs.core.conj.call(null,a__9273,o__9278));
a__9273 = G__9280;
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
var ch__9281 = cljs.reader.read_char.call(null,rdr);
var dm__9282 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9281);

if(cljs.core.truth_(dm__9282))
{return dm__9282.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9281);
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
var l__9283 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9283))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9283);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9284 = (new goog.string.StringBuffer(initch));
var ch__9285 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9286 = (ch__9285 === null);

if(cljs.core.truth_(or__3548__auto____9286))
{return or__3548__auto____9286;
} else
{var or__3548__auto____9287 = cljs.reader.whitespace_QMARK_.call(null,ch__9285);

if(cljs.core.truth_(or__3548__auto____9287))
{return or__3548__auto____9287;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9285);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9285);
var s__9288 = buffer__9284.toString();

var or__3548__auto____9289 = cljs.reader.match_number.call(null,s__9288);

if(cljs.core.truth_(or__3548__auto____9289))
{return or__3548__auto____9289;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9288,"]");
}
} else
{{
var G__9290 = (function (){buffer__9284.append(ch__9285);
return buffer__9284;
})();
var G__9291 = cljs.reader.read_char.call(null,reader);
buffer__9284 = G__9290;
ch__9285 = G__9291;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9292 = (new goog.string.StringBuffer());
var ch__9293 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9293 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9293)))
{{
var G__9294 = (function (){buffer__9292.append(cljs.reader.escape_char.call(null,buffer__9292,reader));
return buffer__9292;
})();
var G__9295 = cljs.reader.read_char.call(null,reader);
buffer__9292 = G__9294;
ch__9293 = G__9295;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9293)))
{return buffer__9292.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9296 = (function (){buffer__9292.append(ch__9293);
return buffer__9292;
})();
var G__9297 = cljs.reader.read_char.call(null,reader);
buffer__9292 = G__9296;
ch__9293 = G__9297;
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
var token__9298 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9298,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9298,0,token__9298.indexOf("/")),cljs.core.subs.call(null,token__9298,(token__9298.indexOf("/") + 1),token__9298.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9298,cljs.core.symbol.call(null,token__9298));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9300 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9299__9301 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9300);
var token__9302 = cljs.core.nth.call(null,vec__9299__9301,0,null);
var ns__9303 = cljs.core.nth.call(null,vec__9299__9301,1,null);
var name__9304 = cljs.core.nth.call(null,vec__9299__9301,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9306 = (function (){var and__3546__auto____9305 = cljs.core.not.call(null,(void 0 === ns__9303));

if(cljs.core.truth_(and__3546__auto____9305))
{return (ns__9303.substring((ns__9303.length - 2),ns__9303.length) === ":/");
} else
{return and__3546__auto____9305;
}
})();

if(cljs.core.truth_(or__3548__auto____9306))
{return or__3548__auto____9306;
} else
{var or__3548__auto____9307 = ((name__9304[(name__9304.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9307))
{return or__3548__auto____9307;
} else
{return cljs.core.not.call(null,(token__9302.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9302);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9303.substring(0,ns__9303.indexOf("/")),name__9304);
} else
{return cljs.core.keyword.call(null,token__9302);
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
var m__9308 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9308)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9309 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____9310 = o__9309;

if(cljs.core.truth_((function (){var and__3546__auto____9311 = x__3028__auto____9310;

if(cljs.core.truth_(and__3546__auto____9311))
{var and__3546__auto____9312 = x__3028__auto____9310.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9312))
{return cljs.core.not.call(null,x__3028__auto____9310.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9312;
}
} else
{return and__3546__auto____9311;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____9310);
}
})()))
{return cljs.core.with_meta.call(null,o__9309,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9309),m__9308));
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
var ch__9313 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9313 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9313)))
{{
var G__9315 = reader;
var G__9316 = eof_is_error;
var G__9317 = sentinel;
var G__9318 = is_recursive;
reader = G__9315;
eof_is_error = G__9316;
sentinel = G__9317;
is_recursive = G__9318;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9313)))
{{
var G__9319 = cljs.reader.read_comment.call(null,reader,ch__9313);
var G__9320 = eof_is_error;
var G__9321 = sentinel;
var G__9322 = is_recursive;
reader = G__9319;
eof_is_error = G__9320;
sentinel = G__9321;
is_recursive = G__9322;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9314 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9313))?cljs.reader.macros.call(null,ch__9313).call(null,reader,ch__9313):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9313))?cljs.reader.read_number.call(null,reader,ch__9313):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9313):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9314,reader)))
{{
var G__9323 = reader;
var G__9324 = eof_is_error;
var G__9325 = sentinel;
var G__9326 = is_recursive;
reader = G__9323;
eof_is_error = G__9324;
sentinel = G__9325;
is_recursive = G__9326;
continue;
}
} else
{return res__9314;
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
var r__9327 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9327,true,null,false);
});
