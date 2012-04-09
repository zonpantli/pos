goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9658 = reader;

if(cljs.core.truth_(and__3546__auto____9658))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9658;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9659 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9659))
{return or__3548__auto____9659;
} else
{var or__3548__auto____9660 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9660))
{return or__3548__auto____9660;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9661 = reader;

if(cljs.core.truth_(and__3546__auto____9661))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9661;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9662 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9662))
{return or__3548__auto____9662;
} else
{var or__3548__auto____9663 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9663))
{return or__3548__auto____9663;
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
var this__9664 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9664.buffer_atom))))
{var idx__9665 = cljs.core.deref.call(null,this__9664.index_atom);

cljs.core.swap_BANG_.call(null,this__9664.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9664.s,idx__9665);
} else
{var buf__9666 = cljs.core.deref.call(null,this__9664.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9664.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9666);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9667 = this;
return cljs.core.swap_BANG_.call(null,this__9667.buffer_atom,(function (p1__9657_SHARP_){
return cljs.core.cons.call(null,ch,p1__9657_SHARP_);
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
var or__3548__auto____9668 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9668))
{return or__3548__auto____9668;
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
var or__3548__auto____9669 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9669))
{return or__3548__auto____9669;
} else
{var and__3546__auto____9671 = (function (){var or__3548__auto____9670 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9670))
{return or__3548__auto____9670;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9671))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9672 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9672);
return next_ch__9672;
})());
} else
{return and__3546__auto____9671;
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
reader_error.cljs$lang$applyTo = (function (arglist__9673){
var rdr = cljs.core.first(arglist__9673);
var msg = cljs.core.rest(arglist__9673);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9674 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9674))
{var and__3546__auto____9675 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9675))
{var and__3546__auto____9676 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9676))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9676;
}
} else
{return and__3546__auto____9675;
}
} else
{return and__3546__auto____9674;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9677 = (new goog.string.StringBuffer(initch));
var ch__9678 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9679 = (ch__9678 === null);

if(cljs.core.truth_(or__3548__auto____9679))
{return or__3548__auto____9679;
} else
{var or__3548__auto____9680 = cljs.reader.whitespace_QMARK_.call(null,ch__9678);

if(cljs.core.truth_(or__3548__auto____9680))
{return or__3548__auto____9680;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9678);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9678);
return sb__9677.toString();
} else
{{
var G__9681 = (function (){sb__9677.append(ch__9678);
return sb__9677;
})();
var G__9682 = cljs.reader.read_char.call(null,rdr);
sb__9677 = G__9681;
ch__9678 = G__9682;
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
var ch__9683 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9684 = cljs.core._EQ_.call(null,ch__9683,"n");

if(cljs.core.truth_(or__3548__auto____9684))
{return or__3548__auto____9684;
} else
{var or__3548__auto____9685 = cljs.core._EQ_.call(null,ch__9683,"r");

if(cljs.core.truth_(or__3548__auto____9685))
{return or__3548__auto____9685;
} else
{return (ch__9683 === null);
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
var groups__9686 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9687 = cljs.core.nth.call(null,groups__9686,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9688 = (void 0 === group3__9687);

if(cljs.core.truth_(or__3548__auto____9688))
{return or__3548__auto____9688;
} else
{return (group3__9687.length < 1);
}
})())))
{return 0;
} else
{var negate__9690 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9686,1)))?-1:1);
var vec__9689__9691 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9686,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9686,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9686,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9686,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9686,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9686,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9686,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9686,7),parseInt.call(null,cljs.core.nth.call(null,groups__9686,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__9692 = cljs.core.nth.call(null,vec__9689__9691,0,null);
var radix__9693 = cljs.core.nth.call(null,vec__9689__9691,1,null);

if(cljs.core.truth_((n__9692 === null)))
{return null;
} else
{return (negate__9690 * parseInt.call(null,n__9692,radix__9693));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9694 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9695 = cljs.core.nth.call(null,groups__9694,1);
var denominator__9696 = cljs.core.nth.call(null,groups__9694,2);

return (parseInt.call(null,numinator__9695) / parseInt.call(null,denominator__9696));
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
var ch__9697 = cljs.reader.read_char.call(null,reader);
var mapresult__9698 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9697);

if(cljs.core.truth_(mapresult__9698))
{return mapresult__9698;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9699 = cljs.core._EQ_.call(null,"u",ch__9697);

if(cljs.core.truth_(or__3548__auto____9699))
{return or__3548__auto____9699;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9697);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9697);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9697);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9700 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9700)))
{{
var G__9701 = cljs.reader.read_char.call(null,rdr);
ch__9700 = G__9701;
continue;
}
} else
{return ch__9700;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9702 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9703 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9703))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9703)))
{return a__9702;
} else
{var temp__3695__auto____9704 = cljs.core.get.call(null,cljs.reader.macros,ch__9703);

if(cljs.core.truth_(temp__3695__auto____9704))
{var macrofn__9705 = temp__3695__auto____9704;

var mret__9706 = macrofn__9705.call(null,rdr,ch__9703);

{
var G__9708 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9706,rdr))?a__9702:cljs.core.conj.call(null,a__9702,mret__9706));
a__9702 = G__9708;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9703);
var o__9707 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9709 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9707,rdr))?a__9702:cljs.core.conj.call(null,a__9702,o__9707));
a__9702 = G__9709;
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
var ch__9710 = cljs.reader.read_char.call(null,rdr);
var dm__9711 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9710);

if(cljs.core.truth_(dm__9711))
{return dm__9711.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9710);
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
var l__9712 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9712))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9712);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9713 = (new goog.string.StringBuffer(initch));
var ch__9714 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9715 = (ch__9714 === null);

if(cljs.core.truth_(or__3548__auto____9715))
{return or__3548__auto____9715;
} else
{var or__3548__auto____9716 = cljs.reader.whitespace_QMARK_.call(null,ch__9714);

if(cljs.core.truth_(or__3548__auto____9716))
{return or__3548__auto____9716;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9714);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9714);
var s__9717 = buffer__9713.toString();

var or__3548__auto____9718 = cljs.reader.match_number.call(null,s__9717);

if(cljs.core.truth_(or__3548__auto____9718))
{return or__3548__auto____9718;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9717,"]");
}
} else
{{
var G__9719 = (function (){buffer__9713.append(ch__9714);
return buffer__9713;
})();
var G__9720 = cljs.reader.read_char.call(null,reader);
buffer__9713 = G__9719;
ch__9714 = G__9720;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9721 = (new goog.string.StringBuffer());
var ch__9722 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9722 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9722)))
{{
var G__9723 = (function (){buffer__9721.append(cljs.reader.escape_char.call(null,buffer__9721,reader));
return buffer__9721;
})();
var G__9724 = cljs.reader.read_char.call(null,reader);
buffer__9721 = G__9723;
ch__9722 = G__9724;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9722)))
{return buffer__9721.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9725 = (function (){buffer__9721.append(ch__9722);
return buffer__9721;
})();
var G__9726 = cljs.reader.read_char.call(null,reader);
buffer__9721 = G__9725;
ch__9722 = G__9726;
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
var token__9727 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9727,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9727,0,token__9727.indexOf("/")),cljs.core.subs.call(null,token__9727,(token__9727.indexOf("/") + 1),token__9727.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9727,cljs.core.symbol.call(null,token__9727));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9729 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9728__9730 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9729);
var token__9731 = cljs.core.nth.call(null,vec__9728__9730,0,null);
var ns__9732 = cljs.core.nth.call(null,vec__9728__9730,1,null);
var name__9733 = cljs.core.nth.call(null,vec__9728__9730,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9735 = (function (){var and__3546__auto____9734 = cljs.core.not.call(null,(void 0 === ns__9732));

if(cljs.core.truth_(and__3546__auto____9734))
{return (ns__9732.substring((ns__9732.length - 2),ns__9732.length) === ":/");
} else
{return and__3546__auto____9734;
}
})();

if(cljs.core.truth_(or__3548__auto____9735))
{return or__3548__auto____9735;
} else
{var or__3548__auto____9736 = ((name__9733[(name__9733.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9736))
{return or__3548__auto____9736;
} else
{return cljs.core.not.call(null,(token__9731.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9731);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9732.substring(0,ns__9732.indexOf("/")),name__9733);
} else
{return cljs.core.keyword.call(null,token__9731);
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
var m__9737 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9737)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9738 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3028__auto____9739 = o__9738;

if(cljs.core.truth_((function (){var and__3546__auto____9740 = x__3028__auto____9739;

if(cljs.core.truth_(and__3546__auto____9740))
{var and__3546__auto____9741 = x__3028__auto____9739.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9741))
{return cljs.core.not.call(null,x__3028__auto____9739.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9741;
}
} else
{return and__3546__auto____9740;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3028__auto____9739);
}
})()))
{return cljs.core.with_meta.call(null,o__9738,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9738),m__9737));
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
var ch__9742 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9742 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9742)))
{{
var G__9744 = reader;
var G__9745 = eof_is_error;
var G__9746 = sentinel;
var G__9747 = is_recursive;
reader = G__9744;
eof_is_error = G__9745;
sentinel = G__9746;
is_recursive = G__9747;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9742)))
{{
var G__9748 = cljs.reader.read_comment.call(null,reader,ch__9742);
var G__9749 = eof_is_error;
var G__9750 = sentinel;
var G__9751 = is_recursive;
reader = G__9748;
eof_is_error = G__9749;
sentinel = G__9750;
is_recursive = G__9751;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9743 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9742))?cljs.reader.macros.call(null,ch__9742).call(null,reader,ch__9742):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9742))?cljs.reader.read_number.call(null,reader,ch__9742):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9742):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9743,reader)))
{{
var G__9752 = reader;
var G__9753 = eof_is_error;
var G__9754 = sentinel;
var G__9755 = is_recursive;
reader = G__9752;
eof_is_error = G__9753;
sentinel = G__9754;
is_recursive = G__9755;
continue;
}
} else
{return res__9743;
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
var r__9756 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9756,true,null,false);
});
