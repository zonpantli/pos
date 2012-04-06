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
var react_to__7149 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7150 = (function (max_count,event_pred,reactor){
var reaction__7148 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7148,0);
return reaction__7148;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7149.call(this,max_count,event_pred);
case  3 :
return react_to__7150.call(this,max_count,event_pred,reactor);
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
var fire__7187 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7188 = (function (event_id,event_data){
var matching_reactions__7160 = cljs.core.filter.call(null,(function (p__7152){
var vec__7153__7155 = p__7152;
var map__7154__7156 = cljs.core.nth.call(null,vec__7153__7155,0,null);
var map__7154__7157 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7154__7156))?cljs.core.apply.call(null,cljs.core.hash_map,map__7154__7156):map__7154__7156);
var event_pred__7158 = cljs.core.get.call(null,map__7154__7157,"\uFDD0'event-pred");
var run_count__7159 = cljs.core.nth.call(null,vec__7153__7155,1,null);

return event_pred__7158.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7161__7162 = cljs.core.seq.call(null,matching_reactions__7160);

if(cljs.core.truth_(G__7161__7162))
{var G__7164__7166 = cljs.core.first.call(null,G__7161__7162);
var vec__7165__7167 = G__7164__7166;
var reaction__7168 = cljs.core.nth.call(null,vec__7165__7167,0,null);
var run_count__7169 = cljs.core.nth.call(null,vec__7165__7167,1,null);
var G__7161__7170 = G__7161__7162;

var G__7164__7171 = G__7164__7166;
var G__7161__7172 = G__7161__7170;

while(true){
var vec__7173__7174 = G__7164__7171;
var reaction__7175 = cljs.core.nth.call(null,vec__7173__7174,0,null);
var run_count__7176 = cljs.core.nth.call(null,vec__7173__7174,1,null);
var G__7161__7177 = G__7161__7172;

var map__7178__7179 = reaction__7175;
var map__7178__7180 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7178__7179))?cljs.core.apply.call(null,cljs.core.hash_map,map__7178__7179):map__7178__7179);
var reactor__7181 = cljs.core.get.call(null,map__7178__7180,"\uFDD0'reactor");
var max_count__7182 = cljs.core.get.call(null,map__7178__7180,"\uFDD0'max-count");
var run_count__7183 = (run_count__7176 + 1);

reactor__7181.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7184 = max_count__7182;

if(cljs.core.truth_(and__3546__auto____7184))
{return (max_count__7182 <= run_count__7183);
} else
{return and__3546__auto____7184;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7175);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7175,run_count__7183);
}
var temp__3698__auto____7185 = cljs.core.next.call(null,G__7161__7177);

if(cljs.core.truth_(temp__3698__auto____7185))
{var G__7161__7186 = temp__3698__auto____7185;

{
var G__7190 = cljs.core.first.call(null,G__7161__7186);
var G__7191 = G__7161__7186;
G__7164__7171 = G__7190;
G__7161__7172 = G__7191;
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
return fire__7187.call(this,event_id);
case  2 :
return fire__7188.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
