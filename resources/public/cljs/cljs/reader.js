goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9546 = reader;

if(cljs.core.truth_(and__3546__auto____9546))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9546;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9547 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9547))
{return or__3548__auto____9547;
} else
{var or__3548__auto____9548 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9548))
{return or__3548__auto____9548;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9549 = reader;

if(cljs.core.truth_(and__3546__auto____9549))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9549;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9550 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9550))
{return or__3548__auto____9550;
} else
{var or__3548__auto____9551 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9551))
{return or__3548__auto____9551;
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
var this__9552 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9552.buffer_atom))))
{var idx__9553 = cljs.core.deref.call(null,this__9552.index_atom);

cljs.core.swap_BANG_.call(null,this__9552.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9552.s,idx__9553);
} else
{var buf__9554 = cljs.core.deref.call(null,this__9552.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9552.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9554);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9555 = this;
return cljs.core.swap_BANG_.call(null,this__9555.buffer_atom,(function (p1__9545_SHARP_){
return cljs.core.cons.call(null,ch,p1__9545_SHARP_);
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
var or__3548__auto____9556 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9556))
{return or__3548__auto____9556;
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
var or__3548__auto____9557 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9557))
{return or__3548__auto____9557;
} else
{var and__3546__auto____9559 = (function (){var or__3548__auto____9558 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9558))
{return or__3548__auto____9558;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9559))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9560 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9560);
return next_ch__9560;
})());
} else
{return and__3546__auto____9559;
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
reader_error.cljs$lang$applyTo = (function (arglist__9561){
var rdr = cljs.core.first(arglist__9561);
var msg = cljs.core.rest(arglist__9561);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9562 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9562))
{var and__3546__auto____9563 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9563))
{var and__3546__auto____9564 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9564))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9564;
}
} else
{return and__3546__auto____9563;
}
} else
{return and__3546__auto____9562;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9565 = (new goog.string.StringBuffer(initch));
var ch__9566 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9567 = (ch__9566 === null);

if(cljs.core.truth_(or__3548__auto____9567))
{return or__3548__auto____9567;
} else
{var or__3548__auto____9568 = cljs.reader.whitespace_QMARK_.call(null,ch__9566);

if(cljs.core.truth_(or__3548__auto____9568))
{return or__3548__auto____9568;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9566);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9566);
return sb__9565.toString();
} else
{{
var G__9569 = (function (){sb__9565.append(ch__9566);
return sb__9565;
})();
var G__9570 = cljs.reader.read_char.call(null,rdr);
sb__9565 = G__9569;
ch__9566 = G__9570;
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
var ch__9571 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9572 = cljs.core._EQ_.call(null,ch__9571,"n");

if(cljs.core.truth_(or__3548__auto____9572))
{return or__3548__auto____9572;
} else
{var or__3548__auto____9573 = cljs.core._EQ_.call(null,ch__9571,"r");

if(cljs.core.truth_(or__3548__auto____9573))
{return or__3548__auto____9573;
} else
{return (ch__9571 === null);
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
var groups__9574 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9575 = cljs.core.nth.call(null,groups__9574,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9576 = (void 0 === group3__9575);

if(cljs.core.truth_(or__3548__auto____9576))
{return or__3548__auto____9576;
} else
{return (group3__9575.length < 1);
}
})())))
{return 0;
} else
{var negate__9578 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9574,1)))?-1:1);
var vec__9577__9579 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9574,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9574,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9574,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9574,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9574,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9574,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9574,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9574,7),parseInt.call(null,cljs.core.nth.call(null,groups__9574,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__9580 = cljs.core.nth.call(null,vec__9577__9579,0,null);
var radix__9581 = cljs.core.nth.call(null,vec__9577__9579,1,null);

if(cljs.core.truth_((n__9580 === null)))
{return null;
} else
{return (negate__9578 * parseInt.call(null,n__9580,radix__9581));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9582 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9583 = cljs.core.nth.call(null,groups__9582,1);
var denominator__9584 = cljs.core.nth.call(null,groups__9582,2);

return (parseInt.call(null,numinator__9583) / parseInt.call(null,denominator__9584));
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
var ch__9585 = cljs.reader.read_char.call(null,reader);
var mapresult__9586 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9585);

if(cljs.core.truth_(mapresult__9586))
{return mapresult__9586;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9587 = cljs.core._EQ_.call(null,"u",ch__9585);

if(cljs.core.truth_(or__3548__auto____9587))
{return or__3548__auto____9587;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9585);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9585);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9585);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9588 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9588)))
{{
var G__9589 = cljs.reader.read_char.call(null,rdr);
ch__9588 = G__9589;
continue;
}
} else
{return ch__9588;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9590 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9591 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9591))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9591)))
{return a__9590;
} else
{var temp__3695__auto____9592 = cljs.core.get.call(null,cljs.reader.macros,ch__9591);

if(cljs.core.truth_(temp__3695__auto____9592))
{var macrofn__9593 = temp__3695__auto____9592;

var mret__9594 = macrofn__9593.call(null,rdr,ch__9591);

{
var G__9596 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9594,rdr))?a__9590:cljs.core.conj.call(null,a__9590,mret__9594));
a__9590 = G__9596;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9591);
var o__9595 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9597 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9595,rdr))?a__9590:cljs.core.conj.call(null,a__9590,o__9595));
a__9590 = G__9597;
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
var ch__9598 = cljs.reader.read_char.call(null,rdr);
var dm__9599 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9598);

if(cljs.core.truth_(dm__9599))
{return dm__9599.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9598);
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
var l__9600 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9600))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9600);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9601 = (new goog.string.StringBuffer(initch));
var ch__9602 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9603 = (ch__9602 === null);

if(cljs.core.truth_(or__3548__auto____9603))
{return or__3548__auto____9603;
} else
{var or__3548__auto____9604 = cljs.reader.whitespace_QMARK_.call(null,ch__9602);

if(cljs.core.truth_(or__3548__auto____9604))
{return or__3548__auto____9604;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9602);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9602);
var s__9605 = buffer__9601.toString();

var or__3548__auto____9606 = cljs.reader.match_number.call(null,s__9605);

if(cljs.core.truth_(or__3548__auto____9606))
{return or__3548__auto____9606;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9605,"]");
}
} else
{{
var G__9607 = (function (){buffer__9601.append(ch__9602);
return buffer__9601;
})();
var G__9608 = cljs.reader.read_char.call(null,reader);
buffer__9601 = G__9607;
ch__9602 = G__9608;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9609 = (new goog.string.StringBuffer());
var ch__9610 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9610 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9610)))
{{
var G__9611 = (function (){buffer__9609.append(cljs.reader.escape_char.call(null,buffer__9609,reader));
return buffer__9609;
})();
var G__9612 = cljs.reader.read_char.call(null,reader);
buffer__9609 = G__9611;
ch__9610 = G__9612;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9610)))
{return buffer__9609.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9613 = (function (){buffer__9609.append(ch__9610);
return buffer__9609;
})();
var G__9614 = cljs.reader.read_char.call(null,reader);
buffer__9609 = G__9613;
ch__9610 = G__9614;
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
var token__9615 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9615,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9615,0,token__9615.indexOf("/")),cljs.core.subs.call(null,token__9615,(token__9615.indexOf("/") + 1),token__9615.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9615,cljs.core.symbol.call(null,token__9615));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9617 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9616__9618 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9617);
var token__9619 = cljs.core.nth.call(null,vec__9616__9618,0,null);
var ns__9620 = cljs.core.nth.call(null,vec__9616__9618,1,null);
var name__9621 = cljs.core.nth.call(null,vec__9616__9618,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9623 = (function (){var and__3546__auto____9622 = cljs.core.not.call(null,(void 0 === ns__9620));

if(cljs.core.truth_(and__3546__auto____9622))
{return (ns__9620.substring((ns__9620.length - 2),ns__9620.length) === ":/");
} else
{return and__3546__auto____9622;
}
})();

if(cljs.core.truth_(or__3548__auto____9623))
{return or__3548__auto____9623;
} else
{var or__3548__auto____9624 = ((name__9621[(name__9621.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9624))
{return or__3548__auto____9624;
} else
{return cljs.core.not.call(null,(token__9619.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9619);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9620.substring(0,ns__9620.indexOf("/")),name__9621);
} else
{return cljs.core.keyword.call(null,token__9619);
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
var m__9625 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9625)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9626 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____9627 = o__9626;

if(cljs.core.truth_((function (){var and__3546__auto____9628 = x__3028__auto____9627;

if(cljs.core.truth_(and__3546__auto____9628))
{var and__3546__auto____9629 = x__3028__auto____9627.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9629))
{return cljs.core.not.call(null,x__3028__auto____9627.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9629;
}
} else
{return and__3546__auto____9628;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____9627);
}
})()))
{return cljs.core.with_meta.call(null,o__9626,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9626),m__9625));
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
var ch__9630 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9630 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9630)))
{{
var G__9632 = reader;
var G__9633 = eof_is_error;
var G__9634 = sentinel;
var G__9635 = is_recursive;
reader = G__9632;
eof_is_error = G__9633;
sentinel = G__9634;
is_recursive = G__9635;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9630)))
{{
var G__9636 = cljs.reader.read_comment.call(null,reader,ch__9630);
var G__9637 = eof_is_error;
var G__9638 = sentinel;
var G__9639 = is_recursive;
reader = G__9636;
eof_is_error = G__9637;
sentinel = G__9638;
is_recursive = G__9639;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9631 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9630))?cljs.reader.macros.call(null,ch__9630).call(null,reader,ch__9630):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9630))?cljs.reader.read_number.call(null,reader,ch__9630):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9630):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9631,reader)))
{{
var G__9640 = reader;
var G__9641 = eof_is_error;
var G__9642 = sentinel;
var G__9643 = is_recursive;
reader = G__9640;
eof_is_error = G__9641;
sentinel = G__9642;
is_recursive = G__9643;
continue;
}
} else
{return res__9631;
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
var r__9644 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9644,true,null,false);
});
