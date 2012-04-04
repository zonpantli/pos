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
var react_to__7104 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7105 = (function (max_count,event_pred,reactor){
var reaction__7103 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7103,0);
return reaction__7103;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7104.call(this,max_count,event_pred);
case  3 :
return react_to__7105.call(this,max_count,event_pred,reactor);
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
var fire__7142 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7143 = (function (event_id,event_data){
var matching_reactions__7115 = cljs.core.filter.call(null,(function (p__7107){
var vec__7108__7110 = p__7107;
var map__7109__7111 = cljs.core.nth.call(null,vec__7108__7110,0,null);
var map__7109__7112 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7109__7111))?cljs.core.apply.call(null,cljs.core.hash_map,map__7109__7111):map__7109__7111);
var event_pred__7113 = cljs.core.get.call(null,map__7109__7112,"\uFDD0'event-pred");
var run_count__7114 = cljs.core.nth.call(null,vec__7108__7110,1,null);

return event_pred__7113.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7116__7117 = cljs.core.seq.call(null,matching_reactions__7115);

if(cljs.core.truth_(G__7116__7117))
{var G__7119__7121 = cljs.core.first.call(null,G__7116__7117);
var vec__7120__7122 = G__7119__7121;
var reaction__7123 = cljs.core.nth.call(null,vec__7120__7122,0,null);
var run_count__7124 = cljs.core.nth.call(null,vec__7120__7122,1,null);
var G__7116__7125 = G__7116__7117;

var G__7119__7126 = G__7119__7121;
var G__7116__7127 = G__7116__7125;

while(true){
var vec__7128__7129 = G__7119__7126;
var reaction__7130 = cljs.core.nth.call(null,vec__7128__7129,0,null);
var run_count__7131 = cljs.core.nth.call(null,vec__7128__7129,1,null);
var G__7116__7132 = G__7116__7127;

var map__7133__7134 = reaction__7130;
var map__7133__7135 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7133__7134))?cljs.core.apply.call(null,cljs.core.hash_map,map__7133__7134):map__7133__7134);
var reactor__7136 = cljs.core.get.call(null,map__7133__7135,"\uFDD0'reactor");
var max_count__7137 = cljs.core.get.call(null,map__7133__7135,"\uFDD0'max-count");
var run_count__7138 = (run_count__7131 + 1);

reactor__7136.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7139 = max_count__7137;

if(cljs.core.truth_(and__3546__auto____7139))
{return (max_count__7137 <= run_count__7138);
} else
{return and__3546__auto____7139;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7130);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7130,run_count__7138);
}
var temp__3698__auto____7140 = cljs.core.next.call(null,G__7116__7132);

if(cljs.core.truth_(temp__3698__auto____7140))
{var G__7116__7141 = temp__3698__auto____7140;

{
var G__7145 = cljs.core.first.call(null,G__7116__7141);
var G__7146 = G__7116__7141;
G__7119__7126 = G__7145;
G__7116__7127 = G__7146;
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
return fire__7142.call(this,event_id);
case  2 :
return fire__7143.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
