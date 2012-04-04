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
var react_to__6774 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__6775 = (function (max_count,event_pred,reactor){
var reaction__6773 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__6773,0);
return reaction__6773;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__6774.call(this,max_count,event_pred);
case  3 :
return react_to__6775.call(this,max_count,event_pred,reactor);
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
var fire__6812 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__6813 = (function (event_id,event_data){
var matching_reactions__6785 = cljs.core.filter.call(null,(function (p__6777){
var vec__6778__6780 = p__6777;
var map__6779__6781 = cljs.core.nth.call(null,vec__6778__6780,0,null);
var map__6779__6782 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6779__6781))?cljs.core.apply.call(null,cljs.core.hash_map,map__6779__6781):map__6779__6781);
var event_pred__6783 = cljs.core.get.call(null,map__6779__6782,"\uFDD0'event-pred");
var run_count__6784 = cljs.core.nth.call(null,vec__6778__6780,1,null);

return event_pred__6783.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__6786__6787 = cljs.core.seq.call(null,matching_reactions__6785);

if(cljs.core.truth_(G__6786__6787))
{var G__6789__6791 = cljs.core.first.call(null,G__6786__6787);
var vec__6790__6792 = G__6789__6791;
var reaction__6793 = cljs.core.nth.call(null,vec__6790__6792,0,null);
var run_count__6794 = cljs.core.nth.call(null,vec__6790__6792,1,null);
var G__6786__6795 = G__6786__6787;

var G__6789__6796 = G__6789__6791;
var G__6786__6797 = G__6786__6795;

while(true){
var vec__6798__6799 = G__6789__6796;
var reaction__6800 = cljs.core.nth.call(null,vec__6798__6799,0,null);
var run_count__6801 = cljs.core.nth.call(null,vec__6798__6799,1,null);
var G__6786__6802 = G__6786__6797;

var map__6803__6804 = reaction__6800;
var map__6803__6805 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6803__6804))?cljs.core.apply.call(null,cljs.core.hash_map,map__6803__6804):map__6803__6804);
var reactor__6806 = cljs.core.get.call(null,map__6803__6805,"\uFDD0'reactor");
var max_count__6807 = cljs.core.get.call(null,map__6803__6805,"\uFDD0'max-count");
var run_count__6808 = (run_count__6801 + 1);

reactor__6806.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____6809 = max_count__6807;

if(cljs.core.truth_(and__3546__auto____6809))
{return (max_count__6807 <= run_count__6808);
} else
{return and__3546__auto____6809;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__6800);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__6800,run_count__6808);
}
var temp__3698__auto____6810 = cljs.core.next.call(null,G__6786__6802);

if(cljs.core.truth_(temp__3698__auto____6810))
{var G__6786__6811 = temp__3698__auto____6810;

{
var G__6815 = cljs.core.first.call(null,G__6786__6811);
var G__6816 = G__6786__6811;
G__6789__6796 = G__6815;
G__6786__6797 = G__6816;
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
return fire__6812.call(this,event_id);
case  2 :
return fire__6813.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
