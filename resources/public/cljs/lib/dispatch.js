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
var react_to__7166 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__7167 = (function (max_count,event_pred,reactor){
var reaction__7165 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});

cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7165,0);
return reaction__7165;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__7166.call(this,max_count,event_pred);
case  3 :
return react_to__7167.call(this,max_count,event_pred,reactor);
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
var fire__7204 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__7205 = (function (event_id,event_data){
var matching_reactions__7177 = cljs.core.filter.call(null,(function (p__7169){
var vec__7170__7172 = p__7169;
var map__7171__7173 = cljs.core.nth.call(null,vec__7170__7172,0,null);
var map__7171__7174 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7171__7173))?cljs.core.apply.call(null,cljs.core.hash_map,map__7171__7173):map__7171__7173);
var event_pred__7175 = cljs.core.get.call(null,map__7171__7174,"\uFDD0'event-pred");
var run_count__7176 = cljs.core.nth.call(null,vec__7170__7172,1,null);

return event_pred__7175.call(null,event_id);
}),cljs.core.deref.call(null,lib.dispatch.reactions));

var G__7178__7179 = cljs.core.seq.call(null,matching_reactions__7177);

if(cljs.core.truth_(G__7178__7179))
{var G__7181__7183 = cljs.core.first.call(null,G__7178__7179);
var vec__7182__7184 = G__7181__7183;
var reaction__7185 = cljs.core.nth.call(null,vec__7182__7184,0,null);
var run_count__7186 = cljs.core.nth.call(null,vec__7182__7184,1,null);
var G__7178__7187 = G__7178__7179;

var G__7181__7188 = G__7181__7183;
var G__7178__7189 = G__7178__7187;

while(true){
var vec__7190__7191 = G__7181__7188;
var reaction__7192 = cljs.core.nth.call(null,vec__7190__7191,0,null);
var run_count__7193 = cljs.core.nth.call(null,vec__7190__7191,1,null);
var G__7178__7194 = G__7178__7189;

var map__7195__7196 = reaction__7192;
var map__7195__7197 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7195__7196))?cljs.core.apply.call(null,cljs.core.hash_map,map__7195__7196):map__7195__7196);
var reactor__7198 = cljs.core.get.call(null,map__7195__7197,"\uFDD0'reactor");
var max_count__7199 = cljs.core.get.call(null,map__7195__7197,"\uFDD0'max-count");
var run_count__7200 = (run_count__7193 + 1);

reactor__7198.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____7201 = max_count__7199;

if(cljs.core.truth_(and__3546__auto____7201))
{return (max_count__7199 <= run_count__7200);
} else
{return and__3546__auto____7201;
}
})()))
{lib.dispatch.delete_reaction.call(null,reaction__7192);
} else
{cljs.core.swap_BANG_.call(null,lib.dispatch.reactions,cljs.core.assoc,reaction__7192,run_count__7200);
}
var temp__3698__auto____7202 = cljs.core.next.call(null,G__7178__7194);

if(cljs.core.truth_(temp__3698__auto____7202))
{var G__7178__7203 = temp__3698__auto____7202;

{
var G__7207 = cljs.core.first.call(null,G__7178__7203);
var G__7208 = G__7178__7203;
G__7181__7188 = G__7207;
G__7178__7189 = G__7208;
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
return fire__7204.call(this,event_id);
case  2 :
return fire__7205.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;
