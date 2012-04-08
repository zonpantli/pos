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
var react_to__7448 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7449 = (function (max_count,event_pred,reactor){
var reaction__7447 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7447,0);
return reaction__7447;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7448.call(this,max_count,event_pred);
case  3 :
return react_to__7449.call(this,max_count,event_pred,reactor);
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
var fire__7486 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7487 = (function (event_id,event_data){
var matching_reactions__7459 = cljs.core.filter.call(null,(function (p__7451){
var vec__7452__7454 = p__7451;
var map__7453__7455 = cljs.core.nth.call(null,vec__7452__7454,0,null);
var map__7453__7456 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7453__7455))?cljs.core.apply.call(null,cljs.core.hash_map,map__7453__7455):map__7453__7455);
var event_pred__7457 = cljs.core.get.call(null,map__7453__7456,"\uFDD0'event-pred");
var run_count__7458 = cljs.core.nth.call(null,vec__7452__7454,1,null);

return event_pred__7457.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7460__7461 = cljs.core.seq.call(null,matching_reactions__7459);

if(cljs.core.truth_(G__7460__7461))
{var G__7463__7465 = cljs.core.first.call(null,G__7460__7461);
var vec__7464__7466 = G__7463__7465;
var reaction__7467 = cljs.core.nth.call(null,vec__7464__7466,0,null);
var run_count__7468 = cljs.core.nth.call(null,vec__7464__7466,1,null);
var G__7460__7469 = G__7460__7461;

var G__7463__7470 = G__7463__7465;
var G__7460__7471 = G__7460__7469;

while(true){
var vec__7472__7473 = G__7463__7470;
var reaction__7474 = cljs.core.nth.call(null,vec__7472__7473,0,null);
var run_count__7475 = cljs.core.nth.call(null,vec__7472__7473,1,null);
var G__7460__7476 = G__7460__7471;

var map__7477__7478 = reaction__7474;
var map__7477__7479 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7477__7478))?cljs.core.apply.call(null,cljs.core.hash_map,map__7477__7478):map__7477__7478);
var reactor__7480 = cljs.core.get.call(null,map__7477__7479,"\uFDD0'reactor");
var max_count__7481 = cljs.core.get.call(null,map__7477__7479,"\uFDD0'max-count");
var run_count__7482 = (run_count__7475 + 1);

reactor__7480.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7483 = max_count__7481;

if(cljs.core.truth_(and__3546__auto____7483))
{return (max_count__7481 <= run_count__7482);
} else
{return and__3546__auto____7483;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7474);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7474,run_count__7482);
}
var temp__3698__auto____7484 = cljs.core.next.call(null,G__7460__7476);

if(cljs.core.truth_(temp__3698__auto____7484))
{var G__7460__7485 = temp__3698__auto____7484;

{
var G__7489 = cljs.core.first.call(null,G__7460__7485);
var G__7490 = G__7460__7485;
G__7463__7470 = G__7489;
G__7460__7471 = G__7490;
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
return fire__7486.call(this,event_id);
case  2 :
return fire__7487.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
