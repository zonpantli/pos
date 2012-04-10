goog.provide('lib.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
lib.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
lib.dispatch.react_to = (function() {
var react_to = null;
var react_to__7691 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7692 = (function (max_count,event_pred,reactor){
var reaction__7690 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7690,0);
return reaction__7690;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7691.call(this,max_count,event_pred);
case  3 :
return react_to__7692.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
lib.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
lib.dispatch.fire = (function() {
var fire = null;
var fire__7729 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7730 = (function (event_id,event_data){
var matching_reactions__7702 = cljs.core.filter.call(null,(function (p__7694){
var vec__7695__7697 = p__7694;
var map__7696__7698 = cljs.core.nth.call(null,vec__7695__7697,0,null);
var map__7696__7699 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7696__7698))?cljs.core.apply.call(null,cljs.core.hash_map,map__7696__7698):map__7696__7698);
var event_pred__7700 = cljs.core.get.call(null,map__7696__7699,"\uFDD0'event-pred");
var run_count__7701 = cljs.core.nth.call(null,vec__7695__7697,1,null);

return event_pred__7700.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7703__7704 = cljs.core.seq.call(null,matching_reactions__7702);

if(cljs.core.truth_(G__7703__7704))
{var G__7706__7708 = cljs.core.first.call(null,G__7703__7704);
var vec__7707__7709 = G__7706__7708;
var reaction__7710 = cljs.core.nth.call(null,vec__7707__7709,0,null);
var run_count__7711 = cljs.core.nth.call(null,vec__7707__7709,1,null);
var G__7703__7712 = G__7703__7704;

var G__7706__7713 = G__7706__7708;
var G__7703__7714 = G__7703__7712;

while(true){
var vec__7715__7716 = G__7706__7713;
var reaction__7717 = cljs.core.nth.call(null,vec__7715__7716,0,null);
var run_count__7718 = cljs.core.nth.call(null,vec__7715__7716,1,null);
var G__7703__7719 = G__7703__7714;

var map__7720__7721 = reaction__7717;
var map__7720__7722 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7720__7721))?cljs.core.apply.call(null,cljs.core.hash_map,map__7720__7721):map__7720__7721);
var reactor__7723 = cljs.core.get.call(null,map__7720__7722,"\uFDD0'reactor");
var max_count__7724 = cljs.core.get.call(null,map__7720__7722,"\uFDD0'max-count");
var run_count__7725 = (run_count__7718 + 1);

reactor__7723.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7726 = max_count__7724;

if(cljs.core.truth_(and__3546__auto____7726))
{return (max_count__7724 <= run_count__7725);
} else
{return and__3546__auto____7726;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7717);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7717,run_count__7725);
}
var temp__3698__auto____7727 = cljs.core.next.call(null,G__7703__7719);

if(cljs.core.truth_(temp__3698__auto____7727))
{var G__7703__7728 = temp__3698__auto____7727;

{
var G__7732 = cljs.core.first.call(null,G__7703__7728);
var G__7733 = G__7703__7728;
G__7706__7713 = G__7732;
G__7703__7714 = G__7733;
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
fire = function(event_id,event_data){
switch(arguments.length){
case  1 :
return fire__7729.call(this,event_id);
case  2 :
return fire__7730.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
