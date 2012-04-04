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
var react_to__6835 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__6836 = (function (max_count,event_pred,reactor){
var reaction__6834 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__6834,0);
return reaction__6834;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__6835.call(this,max_count,event_pred);
case  3 :
return react_to__6836.call(this,max_count,event_pred,reactor);
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
var fire__6873 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__6874 = (function (event_id,event_data){
var matching_reactions__6846 = cljs.core.filter.call(null,(function (p__6838){
var vec__6839__6841 = p__6838;
var map__6840__6842 = cljs.core.nth.call(null,vec__6839__6841,0,null);
var map__6840__6843 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6840__6842))?cljs.core.apply.call(null,cljs.core.hash_map,map__6840__6842):map__6840__6842);
var event_pred__6844 = cljs.core.get.call(null,map__6840__6843,"\uFDD0'event-pred");
var run_count__6845 = cljs.core.nth.call(null,vec__6839__6841,1,null);

return event_pred__6844.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__6847__6848 = cljs.core.seq.call(null,matching_reactions__6846);

if(cljs.core.truth_(G__6847__6848))
{var G__6850__6852 = cljs.core.first.call(null,G__6847__6848);
var vec__6851__6853 = G__6850__6852;
var reaction__6854 = cljs.core.nth.call(null,vec__6851__6853,0,null);
var run_count__6855 = cljs.core.nth.call(null,vec__6851__6853,1,null);
var G__6847__6856 = G__6847__6848;

var G__6850__6857 = G__6850__6852;
var G__6847__6858 = G__6847__6856;

while(true){
var vec__6859__6860 = G__6850__6857;
var reaction__6861 = cljs.core.nth.call(null,vec__6859__6860,0,null);
var run_count__6862 = cljs.core.nth.call(null,vec__6859__6860,1,null);
var G__6847__6863 = G__6847__6858;

var map__6864__6865 = reaction__6861;
var map__6864__6866 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6864__6865))?cljs.core.apply.call(null,cljs.core.hash_map,map__6864__6865):map__6864__6865);
var reactor__6867 = cljs.core.get.call(null,map__6864__6866,"\uFDD0'reactor");
var max_count__6868 = cljs.core.get.call(null,map__6864__6866,"\uFDD0'max-count");
var run_count__6869 = (run_count__6862 + 1);

reactor__6867.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____6870 = max_count__6868;

if(cljs.core.truth_(and__3546__auto____6870))
{return (max_count__6868 <= run_count__6869);
} else
{return and__3546__auto____6870;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__6861);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__6861,run_count__6869);
}
var temp__3698__auto____6871 = cljs.core.next.call(null,G__6847__6863);

if(cljs.core.truth_(temp__3698__auto____6871))
{var G__6847__6872 = temp__3698__auto____6871;

{
var G__6876 = cljs.core.first.call(null,G__6847__6872);
var G__6877 = G__6847__6872;
G__6850__6857 = G__6876;
G__6847__6858 = G__6877;
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
return fire__6873.call(this,event_id);
case  2 :
return fire__6874.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
