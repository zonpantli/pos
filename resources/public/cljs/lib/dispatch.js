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
var react_to__11038 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__11039 = (function (max_count,event_pred,reactor){
var reaction__11037 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__11037,0);
return reaction__11037;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__11038.call(this,max_count,event_pred);
case  3 :
return react_to__11039.call(this,max_count,event_pred,reactor);
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
var fire__11076 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__11077 = (function (event_id,event_data){
var matching_reactions__11049 = cljs.core.filter.call(null,(function (p__11041){
var vec__11042__11044 = p__11041;
var map__11043__11045 = cljs.core.nth.call(null,vec__11042__11044,0,null);
var map__11043__11046 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11043__11045))?cljs.core.apply.call(null,cljs.core.hash_map,map__11043__11045):map__11043__11045);
var event_pred__11047 = cljs.core.get.call(null,map__11043__11046,"\uFDD0'event-pred");
var run_count__11048 = cljs.core.nth.call(null,vec__11042__11044,1,null);

return event_pred__11047.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__11050__11051 = cljs.core.seq.call(null,matching_reactions__11049);

if(cljs.core.truth_(G__11050__11051))
{var G__11053__11055 = cljs.core.first.call(null,G__11050__11051);
var vec__11054__11056 = G__11053__11055;
var reaction__11057 = cljs.core.nth.call(null,vec__11054__11056,0,null);
var run_count__11058 = cljs.core.nth.call(null,vec__11054__11056,1,null);
var G__11050__11059 = G__11050__11051;

var G__11053__11060 = G__11053__11055;
var G__11050__11061 = G__11050__11059;

while(true){
var vec__11062__11063 = G__11053__11060;
var reaction__11064 = cljs.core.nth.call(null,vec__11062__11063,0,null);
var run_count__11065 = cljs.core.nth.call(null,vec__11062__11063,1,null);
var G__11050__11066 = G__11050__11061;

var map__11067__11068 = reaction__11064;
var map__11067__11069 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__11067__11068))?cljs.core.apply.call(null,cljs.core.hash_map,map__11067__11068):map__11067__11068);
var reactor__11070 = cljs.core.get.call(null,map__11067__11069,"\uFDD0'reactor");
var max_count__11071 = cljs.core.get.call(null,map__11067__11069,"\uFDD0'max-count");
var run_count__11072 = (run_count__11065 + 1);

reactor__11070.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____11073 = max_count__11071;

if(cljs.core.truth_(and__3546__auto____11073))
{return (max_count__11071 <= run_count__11072);
} else
{return and__3546__auto____11073;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__11064);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__11064,run_count__11072);
}
var temp__3698__auto____11074 = cljs.core.next.call(null,G__11050__11066);

if(cljs.core.truth_(temp__3698__auto____11074))
{var G__11050__11075 = temp__3698__auto____11074;

{
var G__11079 = cljs.core.first.call(null,G__11050__11075);
var G__11080 = G__11050__11075;
G__11053__11060 = G__11079;
G__11050__11061 = G__11080;
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
return fire__11076.call(this,event_id);
case  2 :
return fire__11077.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
