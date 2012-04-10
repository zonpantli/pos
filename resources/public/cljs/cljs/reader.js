goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____13321 = reader;

if(cljs.core.truth_(and__3546__auto____13321))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____13321;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____13322 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____13322))
{return or__3548__auto____13322;
} else
{var or__3548__auto____13323 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____13323))
{return or__3548__auto____13323;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____13324 = reader;

if(cljs.core.truth_(and__3546__auto____13324))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____13324;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____13325 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____13325))
{return or__3548__auto____13325;
} else
{var or__3548__auto____13326 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____13326))
{return or__3548__auto____13326;
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
var this__13327 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__13327.buffer_atom))))
{var idx__13328 = cljs.core.deref.call(null,this__13327.index_atom);

cljs.core.swap_BANG_.call(null,this__13327.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__13327.s,idx__13328);
} else
{var buf__13329 = cljs.core.deref.call(null,this__13327.buffer_atom);

cljs.core.swap_BANG_.call(null,this__13327.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__13329);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__13330 = this;
return cljs.core.swap_BANG_.call(null,this__13330.buffer_atom,(function (p1__13320_SHARP_){
return cljs.core.cons.call(null,ch,p1__13320_SHARP_);
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
var or__3548__auto____13331 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____13331))
{return or__3548__auto____13331;
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
var or__3548__auto____13332 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____13332))
{return or__3548__auto____13332;
} else
{var and__3546__auto____13334 = (function (){var or__3548__auto____13333 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____13333))
{return or__3548__auto____13333;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____13334))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__13335 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__13335);
return next_ch__13335;
})());
} else
{return and__3546__auto____13334;
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
reader_error.cljs$lang$applyTo = (function (arglist__13336){
var rdr = cljs.core.first(arglist__13336);
var msg = cljs.core.rest(arglist__13336);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____13337 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____13337))
{var and__3546__auto____13338 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____13338))
{var and__3546__auto____13339 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____13339))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____13339;
}
} else
{return and__3546__auto____13338;
}
} else
{return and__3546__auto____13337;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__13340 = (new goog.string.StringBuffer(initch));
var ch__13341 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13342 = (ch__13341 === null);

if(cljs.core.truth_(or__3548__auto____13342))
{return or__3548__auto____13342;
} else
{var or__3548__auto____13343 = cljs.reader.whitespace_QMARK_.call(null,ch__13341);

if(cljs.core.truth_(or__3548__auto____13343))
{return or__3548__auto____13343;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__13341);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__13341);
return sb__13340.toString();
} else
{{
var G__13344 = (function (){sb__13340.append(ch__13341);
return sb__13340;
})();
var G__13345 = cljs.reader.read_char.call(null,rdr);
sb__13340 = G__13344;
ch__13341 = G__13345;
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
var ch__13346 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____13347 = cljs.core._EQ_.call(null,ch__13346,"n");

if(cljs.core.truth_(or__3548__auto____13347))
{return or__3548__auto____13347;
} else
{var or__3548__auto____13348 = cljs.core._EQ_.call(null,ch__13346,"r");

if(cljs.core.truth_(or__3548__auto____13348))
{return or__3548__auto____13348;
} else
{return (ch__13346 === null);
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
var groups__13349 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__13350 = cljs.core.nth.call(null,groups__13349,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____13351 = (void 0 === group3__13350);

if(cljs.core.truth_(or__3548__auto____13351))
{return or__3548__auto____13351;
} else
{return (group3__13350.length < 1);
}
})())))
{return 0;
} else
{var negate__13353 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__13349,1)))?-1:1);
var vec__13352__13354 = (cljs.core.truth_(cljs.core.nth.call(null,groups__13349,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__13349,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13349,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__13349,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13349,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__13349,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13349,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__13349,7),parseInt.call(null,cljs.core.nth.call(null,groups__13349,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__13355 = cljs.core.nth.call(null,vec__13352__13354,0,null);
var radix__13356 = cljs.core.nth.call(null,vec__13352__13354,1,null);

if(cljs.core.truth_((n__13355 === null)))
{return null;
} else
{return (negate__13353 * parseInt.call(null,n__13355,radix__13356));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__13357 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__13358 = cljs.core.nth.call(null,groups__13357,1);
var denominator__13359 = cljs.core.nth.call(null,groups__13357,2);

return (parseInt.call(null,numinator__13358) / parseInt.call(null,denominator__13359));
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
var ch__13360 = cljs.reader.read_char.call(null,reader);
var mapresult__13361 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__13360);

if(cljs.core.truth_(mapresult__13361))
{return mapresult__13361;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____13362 = cljs.core._EQ_.call(null,"u",ch__13360);

if(cljs.core.truth_(or__3548__auto____13362))
{return or__3548__auto____13362;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__13360);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__13360);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__13360);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__13363 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__13363)))
{{
var G__13364 = cljs.reader.read_char.call(null,rdr);
ch__13363 = G__13364;
continue;
}
} else
{return ch__13363;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__13365 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__13366 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__13366))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__13366)))
{return a__13365;
} else
{var temp__3695__auto____13367 = cljs.core.get.call(null,cljs.reader.macros,ch__13366);

if(cljs.core.truth_(temp__3695__auto____13367))
{var macrofn__13368 = temp__3695__auto____13367;

var mret__13369 = macrofn__13368.call(null,rdr,ch__13366);

{
var G__13371 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__13369,rdr))?a__13365:cljs.core.conj.call(null,a__13365,mret__13369));
a__13365 = G__13371;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__13366);
var o__13370 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__13372 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__13370,rdr))?a__13365:cljs.core.conj.call(null,a__13365,o__13370));
a__13365 = G__13372;
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
var ch__13373 = cljs.reader.read_char.call(null,rdr);
var dm__13374 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__13373);

if(cljs.core.truth_(dm__13374))
{return dm__13374.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__13373);
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
var l__13375 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__13375))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__13375);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__13376 = (new goog.string.StringBuffer(initch));
var ch__13377 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13378 = (ch__13377 === null);

if(cljs.core.truth_(or__3548__auto____13378))
{return or__3548__auto____13378;
} else
{var or__3548__auto____13379 = cljs.reader.whitespace_QMARK_.call(null,ch__13377);

if(cljs.core.truth_(or__3548__auto____13379))
{return or__3548__auto____13379;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__13377);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__13377);
var s__13380 = buffer__13376.toString();

var or__3548__auto____13381 = cljs.reader.match_number.call(null,s__13380);

if(cljs.core.truth_(or__3548__auto____13381))
{return or__3548__auto____13381;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__13380,"]");
}
} else
{{
var G__13382 = (function (){buffer__13376.append(ch__13377);
return buffer__13376;
})();
var G__13383 = cljs.reader.read_char.call(null,reader);
buffer__13376 = G__13382;
ch__13377 = G__13383;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__13384 = (new goog.string.StringBuffer());
var ch__13385 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__13385 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__13385)))
{{
var G__13386 = (function (){buffer__13384.append(cljs.reader.escape_char.call(null,buffer__13384,reader));
return buffer__13384;
})();
var G__13387 = cljs.reader.read_char.call(null,reader);
buffer__13384 = G__13386;
ch__13385 = G__13387;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__13385)))
{return buffer__13384.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__13388 = (function (){buffer__13384.append(ch__13385);
return buffer__13384;
})();
var G__13389 = cljs.reader.read_char.call(null,reader);
buffer__13384 = G__13388;
ch__13385 = G__13389;
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
var token__13390 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__13390,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__13390,0,token__13390.indexOf("/")),cljs.core.subs.call(null,token__13390,(token__13390.indexOf("/") + 1),token__13390.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__13390,cljs.core.symbol.call(null,token__13390));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__13392 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__13391__13393 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__13392);
var token__13394 = cljs.core.nth.call(null,vec__13391__13393,0,null);
var ns__13395 = cljs.core.nth.call(null,vec__13391__13393,1,null);
var name__13396 = cljs.core.nth.call(null,vec__13391__13393,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____13398 = (function (){var and__3546__auto____13397 = cljs.core.not.call(null,(void 0 === ns__13395));

if(cljs.core.truth_(and__3546__auto____13397))
{return (ns__13395.substring((ns__13395.length - 2),ns__13395.length) === ":/");
} else
{return and__3546__auto____13397;
}
})();

if(cljs.core.truth_(or__3548__auto____13398))
{return or__3548__auto____13398;
} else
{var or__3548__auto____13399 = ((name__13396[(name__13396.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____13399))
{return or__3548__auto____13399;
} else
{return cljs.core.not.call(null,(token__13394.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__13394);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__13395.substring(0,ns__13395.indexOf("/")),name__13396);
} else
{return cljs.core.keyword.call(null,token__13394);
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
var m__13400 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__13400)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__13401 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____13402 = o__13401;

if(cljs.core.truth_((function (){var and__3546__auto____13403 = x__3028__auto____13402;

if(cljs.core.truth_(and__3546__auto____13403))
{var and__3546__auto____13404 = x__3028__auto____13402.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____13404))
{return cljs.core.not.call(null,x__3028__auto____13402.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____13404;
}
} else
{return and__3546__auto____13403;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____13402);
}
})()))
{return cljs.core.with_meta.call(null,o__13401,cljs.core.merge.call(null,cljs.core.meta.call(null,o__13401),m__13400));
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
var ch__13405 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__13405 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__13405)))
{{
var G__13407 = reader;
var G__13408 = eof_is_error;
var G__13409 = sentinel;
var G__13410 = is_recursive;
reader = G__13407;
eof_is_error = G__13408;
sentinel = G__13409;
is_recursive = G__13410;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__13405)))
{{
var G__13411 = cljs.reader.read_comment.call(null,reader,ch__13405);
var G__13412 = eof_is_error;
var G__13413 = sentinel;
var G__13414 = is_recursive;
reader = G__13411;
eof_is_error = G__13412;
sentinel = G__13413;
is_recursive = G__13414;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__13406 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__13405))?cljs.reader.macros.call(null,ch__13405).call(null,reader,ch__13405):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__13405))?cljs.reader.read_number.call(null,reader,ch__13405):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__13405):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__13406,reader)))
{{
var G__13415 = reader;
var G__13416 = eof_is_error;
var G__13417 = sentinel;
var G__13418 = is_recursive;
reader = G__13415;
eof_is_error = G__13416;
sentinel = G__13417;
is_recursive = G__13418;
continue;
}
} else
{return res__13406;
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
var r__13419 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__13419,true,null,false);
});
