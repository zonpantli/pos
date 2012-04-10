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
var react_to__7663 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7664 = (function (max_count,event_pred,reactor){
var reaction__7662 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7662,0);
return reaction__7662;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7663.call(this,max_count,event_pred);
case  3 :
return react_to__7664.call(this,max_count,event_pred,reactor);
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
var fire__7701 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7702 = (function (event_id,event_data){
var matching_reactions__7674 = cljs.core.filter.call(null,(function (p__7666){
var vec__7667__7669 = p__7666;
var map__7668__7670 = cljs.core.nth.call(null,vec__7667__7669,0,null);
var map__7668__7671 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7668__7670))?cljs.core.apply.call(null,cljs.core.hash_map,map__7668__7670):map__7668__7670);
var event_pred__7672 = cljs.core.get.call(null,map__7668__7671,"\uFDD0'event-pred");
var run_count__7673 = cljs.core.nth.call(null,vec__7667__7669,1,null);

return event_pred__7672.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7675__7676 = cljs.core.seq.call(null,matching_reactions__7674);

if(cljs.core.truth_(G__7675__7676))
{var G__7678__7680 = cljs.core.first.call(null,G__7675__7676);
var vec__7679__7681 = G__7678__7680;
var reaction__7682 = cljs.core.nth.call(null,vec__7679__7681,0,null);
var run_count__7683 = cljs.core.nth.call(null,vec__7679__7681,1,null);
var G__7675__7684 = G__7675__7676;

var G__7678__7685 = G__7678__7680;
var G__7675__7686 = G__7675__7684;

while(true){
var vec__7687__7688 = G__7678__7685;
var reaction__7689 = cljs.core.nth.call(null,vec__7687__7688,0,null);
var run_count__7690 = cljs.core.nth.call(null,vec__7687__7688,1,null);
var G__7675__7691 = G__7675__7686;

var map__7692__7693 = reaction__7689;
var map__7692__7694 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7692__7693))?cljs.core.apply.call(null,cljs.core.hash_map,map__7692__7693):map__7692__7693);
var reactor__7695 = cljs.core.get.call(null,map__7692__7694,"\uFDD0'reactor");
var max_count__7696 = cljs.core.get.call(null,map__7692__7694,"\uFDD0'max-count");
var run_count__7697 = (run_count__7690 + 1);

reactor__7695.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7698 = max_count__7696;

if(cljs.core.truth_(and__3546__auto____7698))
{return (max_count__7696 <= run_count__7697);
} else
{return and__3546__auto____7698;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7689);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7689,run_count__7697);
}
var temp__3698__auto____7699 = cljs.core.next.call(null,G__7675__7691);

if(cljs.core.truth_(temp__3698__auto____7699))
{var G__7675__7700 = temp__3698__auto____7699;

{
var G__7704 = cljs.core.first.call(null,G__7675__7700);
var G__7705 = G__7675__7700;
G__7678__7685 = G__7704;
G__7675__7686 = G__7705;
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
return fire__7701.call(this,event_id);
case  2 :
return fire__7702.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
