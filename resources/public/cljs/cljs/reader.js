goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____8801 = reader;

if(cljs.core.truth_(and__3546__auto____8801))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____8801;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____8802 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8802))
{return or__3548__auto____8802;
} else
{var or__3548__auto____8803 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____8803))
{return or__3548__auto____8803;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____8804 = reader;

if(cljs.core.truth_(and__3546__auto____8804))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____8804;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____8805 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____8805))
{return or__3548__auto____8805;
} else
{var or__3548__auto____8806 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____8806))
{return or__3548__auto____8806;
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
var this__8807 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__8807.buffer_atom))))
{var idx__8808 = cljs.core.deref.call(null,this__8807.index_atom);

cljs.core.swap_BANG_.call(null,this__8807.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__8807.s,idx__8808);
} else
{var buf__8809 = cljs.core.deref.call(null,this__8807.buffer_atom);

cljs.core.swap_BANG_.call(null,this__8807.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__8809);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__8810 = this;
return cljs.core.swap_BANG_.call(null,this__8810.buffer_atom,(function (p1__8800_SHARP_){
return cljs.core.cons.call(null,ch,p1__8800_SHARP_);
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
var or__3548__auto____8811 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____8811))
{return or__3548__auto____8811;
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
var or__3548__auto____8812 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____8812))
{return or__3548__auto____8812;
} else
{var and__3546__auto____8814 = (function (){var or__3548__auto____8813 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____8813))
{return or__3548__auto____8813;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____8814))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__8815 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__8815);
return next_ch__8815;
})());
} else
{return and__3546__auto____8814;
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
reader_error.cljs$lang$applyTo = (function (arglist__8816){
var rdr = cljs.core.first(arglist__8816);
var msg = cljs.core.rest(arglist__8816);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____8817 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____8817))
{var and__3546__auto____8818 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____8818))
{var and__3546__auto____8819 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____8819))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____8819;
}
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8817;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__8820 = (new goog.string.StringBuffer(initch));
var ch__8821 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8822 = (ch__8821 === null);

if(cljs.core.truth_(or__3548__auto____8822))
{return or__3548__auto____8822;
} else
{var or__3548__auto____8823 = cljs.reader.whitespace_QMARK_.call(null,ch__8821);

if(cljs.core.truth_(or__3548__auto____8823))
{return or__3548__auto____8823;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__8821);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__8821);
return sb__8820.toString();
} else
{{
var G__8824 = (function (){sb__8820.append(ch__8821);
return sb__8820;
})();
var G__8825 = cljs.reader.read_char.call(null,rdr);
sb__8820 = G__8824;
ch__8821 = G__8825;
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
var ch__8826 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____8827 = cljs.core._EQ_.call(null,ch__8826,"n");

if(cljs.core.truth_(or__3548__auto____8827))
{return or__3548__auto____8827;
} else
{var or__3548__auto____8828 = cljs.core._EQ_.call(null,ch__8826,"r");

if(cljs.core.truth_(or__3548__auto____8828))
{return or__3548__auto____8828;
} else
{return (ch__8826 === null);
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
var groups__8829 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__8830 = cljs.core.nth.call(null,groups__8829,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____8831 = (void 0 === group3__8830);

if(cljs.core.truth_(or__3548__auto____8831))
{return or__3548__auto____8831;
} else
{return (group3__8830.length < 1);
}
})())))
{return 0;
} else
{var negate__8833 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__8829,1)))?-1:1);
var vec__8832__8834 = (cljs.core.truth_(cljs.core.nth.call(null,groups__8829,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8829,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8829,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8829,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8829,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8829,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__8829,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__8829,7),parseInt.call(null,cljs.core.nth.call(null,groups__8829,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__8835 = cljs.core.nth.call(null,vec__8832__8834,0,null);
var radix__8836 = cljs.core.nth.call(null,vec__8832__8834,1,null);

if(cljs.core.truth_((n__8835 === null)))
{return null;
} else
{return (negate__8833 * parseInt.call(null,n__8835,radix__8836));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__8837 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__8838 = cljs.core.nth.call(null,groups__8837,1);
var denominator__8839 = cljs.core.nth.call(null,groups__8837,2);

return (parseInt.call(null,numinator__8838) / parseInt.call(null,denominator__8839));
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
var ch__8840 = cljs.reader.read_char.call(null,reader);
var mapresult__8841 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__8840);

if(cljs.core.truth_(mapresult__8841))
{return mapresult__8841;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____8842 = cljs.core._EQ_.call(null,"u",ch__8840);

if(cljs.core.truth_(or__3548__auto____8842))
{return or__3548__auto____8842;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__8840);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__8840);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__8840);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__8843 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__8843)))
{{
var G__8844 = cljs.reader.read_char.call(null,rdr);
ch__8843 = G__8844;
continue;
}
} else
{return ch__8843;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__8845 = cljs.core.Vector.fromArray([]);

while(true){
var ch__8846 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__8846))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__8846)))
{return a__8845;
} else
{var temp__3695__auto____8847 = cljs.core.get.call(null,cljs.reader.macros,ch__8846);

if(cljs.core.truth_(temp__3695__auto____8847))
{var macrofn__8848 = temp__3695__auto____8847;

var mret__8849 = macrofn__8848.call(null,rdr,ch__8846);

{
var G__8851 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__8849,rdr))?a__8845:cljs.core.conj.call(null,a__8845,mret__8849));
a__8845 = G__8851;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__8846);
var o__8850 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__8852 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__8850,rdr))?a__8845:cljs.core.conj.call(null,a__8845,o__8850));
a__8845 = G__8852;
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
var ch__8853 = cljs.reader.read_char.call(null,rdr);
var dm__8854 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__8853);

if(cljs.core.truth_(dm__8854))
{return dm__8854.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__8853);
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
var l__8855 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__8855))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__8855);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__8856 = (new goog.string.StringBuffer(initch));
var ch__8857 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8858 = (ch__8857 === null);

if(cljs.core.truth_(or__3548__auto____8858))
{return or__3548__auto____8858;
} else
{var or__3548__auto____8859 = cljs.reader.whitespace_QMARK_.call(null,ch__8857);

if(cljs.core.truth_(or__3548__auto____8859))
{return or__3548__auto____8859;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__8857);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__8857);
var s__8860 = buffer__8856.toString();

var or__3548__auto____8861 = cljs.reader.match_number.call(null,s__8860);

if(cljs.core.truth_(or__3548__auto____8861))
{return or__3548__auto____8861;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__8860,"]");
}
} else
{{
var G__8862 = (function (){buffer__8856.append(ch__8857);
return buffer__8856;
})();
var G__8863 = cljs.reader.read_char.call(null,reader);
buffer__8856 = G__8862;
ch__8857 = G__8863;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__8864 = (new goog.string.StringBuffer());
var ch__8865 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__8865 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__8865)))
{{
var G__8866 = (function (){buffer__8864.append(cljs.reader.escape_char.call(null,buffer__8864,reader));
return buffer__8864;
})();
var G__8867 = cljs.reader.read_char.call(null,reader);
buffer__8864 = G__8866;
ch__8865 = G__8867;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__8865)))
{return buffer__8864.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__8868 = (function (){buffer__8864.append(ch__8865);
return buffer__8864;
})();
var G__8869 = cljs.reader.read_char.call(null,reader);
buffer__8864 = G__8868;
ch__8865 = G__8869;
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
var token__8870 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__8870,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__8870,0,token__8870.indexOf("\/")),cljs.core.subs.call(null,token__8870,(token__8870.indexOf("\/") + 1),token__8870.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__8870,cljs.core.symbol.call(null,token__8870));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__8872 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__8871__8873 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__8872);
var token__8874 = cljs.core.nth.call(null,vec__8871__8873,0,null);
var ns__8875 = cljs.core.nth.call(null,vec__8871__8873,1,null);
var name__8876 = cljs.core.nth.call(null,vec__8871__8873,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____8878 = (function (){var and__3546__auto____8877 = cljs.core.not.call(null,(void 0 === ns__8875));

if(cljs.core.truth_(and__3546__auto____8877))
{return (ns__8875.substring((ns__8875.length - 2),ns__8875.length) === ":\/");
} else
{return and__3546__auto____8877;
}
})();

if(cljs.core.truth_(or__3548__auto____8878))
{return or__3548__auto____8878;
} else
{var or__3548__auto____8879 = ((name__8876[(name__8876.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____8879))
{return or__3548__auto____8879;
} else
{return cljs.core.not.call(null,(token__8874.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__8874);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__8875.substring(0,ns__8875.indexOf("\/")),name__8876);
} else
{return cljs.core.keyword.call(null,token__8874);
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
var m__8880 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__8880)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__8881 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__3027__auto____8882 = o__8881;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__3027__auto____8882;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8884 = x__3027__auto____8882.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__3027__auto____8882.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__3027__auto____8882);
}
})()))
{return cljs.core.with_meta.call(null,o__8881,cljs.core.merge.call(null,cljs.core.meta.call(null,o__8881),m__8880));
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
var ch__8885 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__8885 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__8885)))
{{
var G__8887 = reader;
var G__8888 = eof_is_error;
var G__8889 = sentinel;
var G__8890 = is_recursive;
reader = G__8887;
eof_is_error = G__8888;
sentinel = G__8889;
is_recursive = G__8890;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__8885)))
{{
var G__8891 = cljs.reader.read_comment.call(null,reader,ch__8885);
var G__8892 = eof_is_error;
var G__8893 = sentinel;
var G__8894 = is_recursive;
reader = G__8891;
eof_is_error = G__8892;
sentinel = G__8893;
is_recursive = G__8894;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__8886 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__8885))?cljs.reader.macros.call(null,ch__8885).call(null,reader,ch__8885):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__8885))?cljs.reader.read_number.call(null,reader,ch__8885):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__8885):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__8886,reader)))
{{
var G__8895 = reader;
var G__8896 = eof_is_error;
var G__8897 = sentinel;
var G__8898 = is_recursive;
reader = G__8895;
eof_is_error = G__8896;
sentinel = G__8897;
is_recursive = G__8898;
continue;
}
} else
{return res__8886;
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
var r__8899 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__8899,true,null,false);
});
