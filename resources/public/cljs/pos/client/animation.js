goog.provide('pos.client.animation');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
pos.client.animation.slide_in_icon = (function slide_in_icon(type,url){
var in_el__7706 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));
var out_el__7707 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));

jayq.core.attr.call(null,in_el__7706,"src",url);
return in_el__7706.animate(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["height"],{"height":"32px"})),null,null,(function (){
jayq.core.attr.call(null,out_el__7707,"src",url);
return jayq.core.css.call(null,in_el__7706,cljs.core.ObjMap.fromObject(["height"],{"height":"0"}));
}));
});
pos.client.animation.slide_in_customer_icon = (function slide_in_customer_icon(url){
return pos.client.animation.slide_in_icon.call(null,"customer",url);
});
pos.client.animation.slide_in_item_icon = (function slide_in_item_icon(url){
return pos.client.animation.slide_in_icon.call(null,"item",url);
});
pos.client.animation.reset_icon = (function reset_icon(type){
var in_el__7708 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));
var out_el__7709 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

jayq.core.attr.call(null,in_el__7708,"src",cljs.core.str.call(null,"img/",type,"_placeholder.png"));
return jayq.core.css.call(null,out_el__7709,cljs.core.ObjMap.fromObject(["height"],{"height":"0px"}));
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
pos.client.animation.state_transition = (function state_transition(p__7710){
var map__7711__7712 = p__7710;
var map__7711__7713 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7711__7712))?cljs.core.apply.call(null,cljs.core.hash_map,map__7711__7712):map__7711__7712);
var slide_out__7714 = cljs.core.get.call(null,map__7711__7713,"\uFDD0'slide-out");
var slide_in__7715 = cljs.core.get.call(null,map__7711__7713,"\uFDD0'slide-in");
var out__7716 = cljs.core.get.call(null,map__7711__7713,"\uFDD0'out");
var in$__7717 = cljs.core.get.call(null,map__7711__7713,"\uFDD0'in");

var G__7718__7719 = cljs.core.seq.call(null,slide_out__7714);

if(cljs.core.truth_(G__7718__7719))
{var o__7720 = cljs.core.first.call(null,G__7718__7719);
var G__7718__7721 = G__7718__7719;

while(true){
jayq.core.slide_up.call(null,o__7720,200);
var temp__3698__auto____7722 = cljs.core.next.call(null,G__7718__7721);

if(cljs.core.truth_(temp__3698__auto____7722))
{var G__7718__7723 = temp__3698__auto____7722;

{
var G__7742 = cljs.core.first.call(null,G__7718__7723);
var G__7743 = G__7718__7723;
o__7720 = G__7742;
G__7718__7721 = G__7743;
continue;
}
} else
{}
break;
}
} else
{}
var G__7724__7725 = cljs.core.seq.call(null,slide_in__7715);

if(cljs.core.truth_(G__7724__7725))
{var i__7726 = cljs.core.first.call(null,G__7724__7725);
var G__7724__7727 = G__7724__7725;

while(true){
jayq.core.slide_down.call(null,i__7726,200);
var temp__3698__auto____7728 = cljs.core.next.call(null,G__7724__7727);

if(cljs.core.truth_(temp__3698__auto____7728))
{var G__7724__7729 = temp__3698__auto____7728;

{
var G__7744 = cljs.core.first.call(null,G__7724__7729);
var G__7745 = G__7724__7729;
i__7726 = G__7744;
G__7724__7727 = G__7745;
continue;
}
} else
{}
break;
}
} else
{}
var G__7730__7731 = cljs.core.seq.call(null,out__7716);

if(cljs.core.truth_(G__7730__7731))
{var o__7732 = cljs.core.first.call(null,G__7730__7731);
var G__7730__7733 = G__7730__7731;

while(true){
jayq.core.hide.call(null,o__7732);
var temp__3698__auto____7734 = cljs.core.next.call(null,G__7730__7733);

if(cljs.core.truth_(temp__3698__auto____7734))
{var G__7730__7735 = temp__3698__auto____7734;

{
var G__7746 = cljs.core.first.call(null,G__7730__7735);
var G__7747 = G__7730__7735;
o__7732 = G__7746;
G__7730__7733 = G__7747;
continue;
}
} else
{}
break;
}
} else
{}
var G__7736__7737 = cljs.core.seq.call(null,in$__7717);

if(cljs.core.truth_(G__7736__7737))
{var i__7738 = cljs.core.first.call(null,G__7736__7737);
var G__7736__7739 = G__7736__7737;

while(true){
jayq.core.show.call(null,i__7738);
var temp__3698__auto____7740 = cljs.core.next.call(null,G__7736__7739);

if(cljs.core.truth_(temp__3698__auto____7740))
{var G__7736__7741 = temp__3698__auto____7740;

{
var G__7748 = cljs.core.first.call(null,G__7736__7741);
var G__7749 = G__7736__7741;
i__7738 = G__7748;
G__7736__7739 = G__7749;
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
