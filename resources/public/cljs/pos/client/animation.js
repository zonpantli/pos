goog.provide('pos.client.animation');
goog.require('cljs.core');
goog.require('fetch.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('lib.dispatch');
pos.client.animation.slide_in_icon = (function slide_in_icon(type,url){
var in_el__7734 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));
var out_el__7735 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));

jayq.core.attr.call(null,in_el__7734,"src",url);
return in_el__7734.animate(fetch.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["height"],{"height":"32px"})),null,null,(function (){
jayq.core.attr.call(null,out_el__7735,"src",url);
return jayq.core.css.call(null,in_el__7734,cljs.core.ObjMap.fromObject(["height"],{"height":"0"}));
}));
});
pos.client.animation.slide_in_customer_icon = (function slide_in_customer_icon(url){
return pos.client.animation.slide_in_icon.call(null,"customer",url);
});
pos.client.animation.slide_in_item_icon = (function slide_in_item_icon(url){
return pos.client.animation.slide_in_icon.call(null,"item",url);
});
pos.client.animation.reset_icon = (function reset_icon(type){
var in_el__7736 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-icon")));
var out_el__7737 = jayq.core.$.call(null,cljs.core.keyword.call(null,cljs.core.str.call(null,"#",type,"-slider-icon")));

jayq.core.attr.call(null,in_el__7736,"src",cljs.core.str.call(null,"img/",type,"_placeholder.png"));
return jayq.core.css.call(null,out_el__7737,cljs.core.ObjMap.fromObject(["height"],{"height":"0px"}));
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
pos.client.animation.state_transition = (function state_transition(p__7738){
var map__7739__7740 = p__7738;
var map__7739__7741 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7739__7740))?cljs.core.apply.call(null,cljs.core.hash_map,map__7739__7740):map__7739__7740);
var slide_out__7742 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'slide-out");
var slide_in__7743 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'slide-in");
var out__7744 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'out");
var in$__7745 = cljs.core.get.call(null,map__7739__7741,"\uFDD0'in");

var G__7746__7747 = cljs.core.seq.call(null,slide_out__7742);

if(cljs.core.truth_(G__7746__7747))
{var o__7748 = cljs.core.first.call(null,G__7746__7747);
var G__7746__7749 = G__7746__7747;

while(true){
jayq.core.slide_up.call(null,o__7748,200);
var temp__3698__auto____7750 = cljs.core.next.call(null,G__7746__7749);

if(cljs.core.truth_(temp__3698__auto____7750))
{var G__7746__7751 = temp__3698__auto____7750;

{
var G__7770 = cljs.core.first.call(null,G__7746__7751);
var G__7771 = G__7746__7751;
o__7748 = G__7770;
G__7746__7749 = G__7771;
continue;
}
} else
{}
break;
}
} else
{}
var G__7752__7753 = cljs.core.seq.call(null,slide_in__7743);

if(cljs.core.truth_(G__7752__7753))
{var i__7754 = cljs.core.first.call(null,G__7752__7753);
var G__7752__7755 = G__7752__7753;

while(true){
jayq.core.slide_down.call(null,i__7754,200);
var temp__3698__auto____7756 = cljs.core.next.call(null,G__7752__7755);

if(cljs.core.truth_(temp__3698__auto____7756))
{var G__7752__7757 = temp__3698__auto____7756;

{
var G__7772 = cljs.core.first.call(null,G__7752__7757);
var G__7773 = G__7752__7757;
i__7754 = G__7772;
G__7752__7755 = G__7773;
continue;
}
} else
{}
break;
}
} else
{}
var G__7758__7759 = cljs.core.seq.call(null,out__7744);

if(cljs.core.truth_(G__7758__7759))
{var o__7760 = cljs.core.first.call(null,G__7758__7759);
var G__7758__7761 = G__7758__7759;

while(true){
jayq.core.hide.call(null,o__7760);
var temp__3698__auto____7762 = cljs.core.next.call(null,G__7758__7761);

if(cljs.core.truth_(temp__3698__auto____7762))
{var G__7758__7763 = temp__3698__auto____7762;

{
var G__7774 = cljs.core.first.call(null,G__7758__7763);
var G__7775 = G__7758__7763;
o__7760 = G__7774;
G__7758__7761 = G__7775;
continue;
}
} else
{}
break;
}
} else
{}
var G__7764__7765 = cljs.core.seq.call(null,in$__7745);

if(cljs.core.truth_(G__7764__7765))
{var i__7766 = cljs.core.first.call(null,G__7764__7765);
var G__7764__7767 = G__7764__7765;

while(true){
jayq.core.show.call(null,i__7766);
var temp__3698__auto____7768 = cljs.core.next.call(null,G__7764__7767);

if(cljs.core.truth_(temp__3698__auto____7768))
{var G__7764__7769 = temp__3698__auto____7768;

{
var G__7776 = cljs.core.first.call(null,G__7764__7769);
var G__7777 = G__7764__7769;
i__7766 = G__7776;
G__7764__7767 = G__7777;
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
