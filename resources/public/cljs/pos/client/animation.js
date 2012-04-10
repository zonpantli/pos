goog.provide('pos.client.animation');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
pos.client.animation.slide_in_icon = (function slide_in_icon(type,url){
var in_el__14062 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));
var out_el__14063 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));

jayq.core.attr.call(null,in_el__14062,"src",url);
return in_el__14062.animate(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["height"],{"height":"32px"})),null,null,(function (){
jayq.core.attr.call(null,out_el__14063,"src",url);
return jayq.core.css.call(null,in_el__14062,cljs.core.ObjMap.fromObject(["height"],{"height":"0"}));
}));
});
pos.client.animation.slide_in_customer_icon = (function slide_in_customer_icon(url){
return pos.client.animation.slide_in_icon.call(null,"customer",url);
});
pos.client.animation.slide_in_item_icon = (function slide_in_item_icon(url){
return pos.client.animation.slide_in_icon.call(null,"item",url);
});
pos.client.animation.reset_icon = (function reset_icon(type){
var in_el__14064 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));
var out_el__14065 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

jayq.core.attr.call(null,in_el__14064,"src",cljs.core.str.call(null,"img/",type,"_placeholder.png"));
return jayq.core.css.call(null,out_el__14065,cljs.core.ObjMap.fromObject(["height"],{"height":"0px"}));
});
pos.client.animation.reset_customer_icon = (function reset_customer_icon(){
return pos.client.animation.reset_icon.call(null,"customer");
});
pos.client.animation.reset_item_icon = (function reset_item_icon(){
return pos.client.animation.reset_icon.call(null,"item");
});
pos.client.animation.flash_input_border = (function flash_input_border(el){
jayq.core.add_class.call(null,el,"flashing-animation");
return jayq.util.wait.call(null,1000,(function (){
return jayq.core.remove_class.call(null,el,"flashing-animation");
}));
});
pos.client.animation.slide_in_table_row = (function slide_in_table_row($tr){
return jayq.core.slide_down.call(null,jayq.core.find.call(null,$tr,"td > div"),400);
});
pos.client.animation.slide_out_table_row = (function slide_out_table_row($tr){
return jayq.core.slide_up.call(null,jayq.core.find.call(null,$tr,"td > div"),200,(function (){
return jayq.core.remove.call(null,$tr);
}));
});
pos.client.animation.state_transition = (function state_transition(p__14066){
var map__14067__14068 = p__14066;
var map__14067__14069 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14067__14068))?cljs.core.apply.call(null,cljs.core.hash_map,map__14067__14068):map__14067__14068);
var slide_out__14070 = cljs.core.get.call(null,map__14067__14069,"\uFDD0'slide-out");
var slide_in__14071 = cljs.core.get.call(null,map__14067__14069,"\uFDD0'slide-in");
var out__14072 = cljs.core.get.call(null,map__14067__14069,"\uFDD0'out");
var in$__14073 = cljs.core.get.call(null,map__14067__14069,"\uFDD0'in");

var G__14074__14075 = cljs.core.seq.call(null,slide_out__14070);

if(cljs.core.truth_(G__14074__14075))
{var o__14076 = cljs.core.first.call(null,G__14074__14075);
var G__14074__14077 = G__14074__14075;

while(true){
jayq.core.slide_up.call(null,o__14076,200);
var temp__3698__auto____14078 = cljs.core.next.call(null,G__14074__14077);

if(cljs.core.truth_(temp__3698__auto____14078))
{var G__14074__14079 = temp__3698__auto____14078;

{
var G__14098 = cljs.core.first.call(null,G__14074__14079);
var G__14099 = G__14074__14079;
o__14076 = G__14098;
G__14074__14077 = G__14099;
continue;
}
} else
{}
break;
}
} else
{}
var G__14080__14081 = cljs.core.seq.call(null,slide_in__14071);

if(cljs.core.truth_(G__14080__14081))
{var i__14082 = cljs.core.first.call(null,G__14080__14081);
var G__14080__14083 = G__14080__14081;

while(true){
jayq.core.slide_down.call(null,i__14082,200);
var temp__3698__auto____14084 = cljs.core.next.call(null,G__14080__14083);

if(cljs.core.truth_(temp__3698__auto____14084))
{var G__14080__14085 = temp__3698__auto____14084;

{
var G__14100 = cljs.core.first.call(null,G__14080__14085);
var G__14101 = G__14080__14085;
i__14082 = G__14100;
G__14080__14083 = G__14101;
continue;
}
} else
{}
break;
}
} else
{}
var G__14086__14087 = cljs.core.seq.call(null,out__14072);

if(cljs.core.truth_(G__14086__14087))
{var o__14088 = cljs.core.first.call(null,G__14086__14087);
var G__14086__14089 = G__14086__14087;

while(true){
jayq.core.hide.call(null,o__14088);
var temp__3698__auto____14090 = cljs.core.next.call(null,G__14086__14089);

if(cljs.core.truth_(temp__3698__auto____14090))
{var G__14086__14091 = temp__3698__auto____14090;

{
var G__14102 = cljs.core.first.call(null,G__14086__14091);
var G__14103 = G__14086__14091;
o__14088 = G__14102;
G__14086__14089 = G__14103;
continue;
}
} else
{}
break;
}
} else
{}
var G__14092__14093 = cljs.core.seq.call(null,in$__14073);

if(cljs.core.truth_(G__14092__14093))
{var i__14094 = cljs.core.first.call(null,G__14092__14093);
var G__14092__14095 = G__14092__14093;

while(true){
jayq.core.show.call(null,i__14094);
var temp__3698__auto____14096 = cljs.core.next.call(null,G__14092__14095);

if(cljs.core.truth_(temp__3698__auto____14096))
{var G__14092__14097 = temp__3698__auto____14096;

{
var G__14104 = cljs.core.first.call(null,G__14092__14097);
var G__14105 = G__14092__14097;
i__14094 = G__14104;
G__14092__14095 = G__14105;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
