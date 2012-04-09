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
var react_to__7445 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7446 = (function (max_count,event_pred,reactor){
var reaction__7444 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7444,0);
return reaction__7444;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7445.call(this,max_count,event_pred);
case  3 :
return react_to__7446.call(this,max_count,event_pred,reactor);
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
var fire__7483 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7484 = (function (event_id,event_data){
var matching_reactions__7456 = cljs.core.filter.call(null,(function (p__7448){
var vec__7449__7451 = p__7448;
var map__7450__7452 = cljs.core.nth.call(null,vec__7449__7451,0,null);
var map__7450__7453 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7450__7452))?cljs.core.apply.call(null,cljs.core.hash_map,map__7450__7452):map__7450__7452);
var event_pred__7454 = cljs.core.get.call(null,map__7450__7453,"\uFDD0'event-pred");
var run_count__7455 = cljs.core.nth.call(null,vec__7449__7451,1,null);

return event_pred__7454.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7457__7458 = cljs.core.seq.call(null,matching_reactions__7456);

if(cljs.core.truth_(G__7457__7458))
{var G__7460__7462 = cljs.core.first.call(null,G__7457__7458);
var vec__7461__7463 = G__7460__7462;
var reaction__7464 = cljs.core.nth.call(null,vec__7461__7463,0,null);
var run_count__7465 = cljs.core.nth.call(null,vec__7461__7463,1,null);
var G__7457__7466 = G__7457__7458;

var G__7460__7467 = G__7460__7462;
var G__7457__7468 = G__7457__7466;

while(true){
var vec__7469__7470 = G__7460__7467;
var reaction__7471 = cljs.core.nth.call(null,vec__7469__7470,0,null);
var run_count__7472 = cljs.core.nth.call(null,vec__7469__7470,1,null);
var G__7457__7473 = G__7457__7468;

var map__7474__7475 = reaction__7471;
var map__7474__7476 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7474__7475))?cljs.core.apply.call(null,cljs.core.hash_map,map__7474__7475):map__7474__7475);
var reactor__7477 = cljs.core.get.call(null,map__7474__7476,"\uFDD0'reactor");
var max_count__7478 = cljs.core.get.call(null,map__7474__7476,"\uFDD0'max-count");
var run_count__7479 = (run_count__7472 + 1);

reactor__7477.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7480 = max_count__7478;

if(cljs.core.truth_(and__3546__auto____7480))
{return (max_count__7478 <= run_count__7479);
} else
{return and__3546__auto____7480;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7471);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7471,run_count__7479);
}
var temp__3698__auto____7481 = cljs.core.next.call(null,G__7457__7473);

if(cljs.core.truth_(temp__3698__auto____7481))
{var G__7457__7482 = temp__3698__auto____7481;

{
var G__7486 = cljs.core.first.call(null,G__7457__7482);
var G__7487 = G__7457__7482;
G__7460__7467 = G__7486;
G__7457__7468 = G__7487;
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
return fire__7483.call(this,event_id);
case  2 :
return fire__7484.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
