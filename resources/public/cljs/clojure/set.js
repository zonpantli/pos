goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__10269 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__10269,cljs.core.remove.call(null,(function (p1__10268_SHARP_){
return (max__10269 === p1__10268_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__10272 = (function (){
return cljs.core.set([]);
});
var union__10273 = (function (s1){
return s1;
});
var union__10274 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__10275 = (function() { 
var G__10277__delegate = function (s1,s2,sets){
var bubbled_sets__10271 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__10271),cljs.core.rest.call(null,bubbled_sets__10271));
};
var G__10277 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10277__delegate.call(this, s1, s2, sets);
};
G__10277.cljs$lang$maxFixedArity = 2;
G__10277.cljs$lang$applyTo = (function (arglist__10278){
var s1 = cljs.core.first(arglist__10278);
var s2 = cljs.core.first(cljs.core.next(arglist__10278));
var sets = cljs.core.rest(cljs.core.next(arglist__10278));
return G__10277__delegate.call(this, s1, s2, sets);
});
return G__10277;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__10272.call(this);
case  1 :
return union__10273.call(this,s1);
case  2 :
return union__10274.call(this,s1,s2);
default:
return union__10275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__10275.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__10280 = (function (s1){
return s1;
});
var intersection__10281 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__10284 = s2;
var G__10285 = s1;
s1 = G__10284;
s2 = G__10285;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__10282 = (function() { 
var G__10286__delegate = function (s1,s2,sets){
var bubbled_sets__10279 = clojure.set.bubble_max_key.call(null,(function (p1__10270_SHARP_){
return (- cljs.core.count.call(null,p1__10270_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__10279),cljs.core.rest.call(null,bubbled_sets__10279));
};
var G__10286 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10286__delegate.call(this, s1, s2, sets);
};
G__10286.cljs$lang$maxFixedArity = 2;
G__10286.cljs$lang$applyTo = (function (arglist__10287){
var s1 = cljs.core.first(arglist__10287);
var s2 = cljs.core.first(cljs.core.next(arglist__10287));
var sets = cljs.core.rest(cljs.core.next(arglist__10287));
return G__10286__delegate.call(this, s1, s2, sets);
});
return G__10286;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__10280.call(this,s1);
case  2 :
return intersection__10281.call(this,s1,s2);
default:
return intersection__10282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__10282.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__10288 = (function (s1){
return s1;
});
var difference__10289 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__10290 = (function() { 
var G__10292__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__10292 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10292__delegate.call(this, s1, s2, sets);
};
G__10292.cljs$lang$maxFixedArity = 2;
G__10292.cljs$lang$applyTo = (function (arglist__10293){
var s1 = cljs.core.first(arglist__10293);
var s2 = cljs.core.first(cljs.core.next(arglist__10293));
var sets = cljs.core.rest(cljs.core.next(arglist__10293));
return G__10292__delegate.call(this, s1, s2, sets);
});
return G__10292;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__10288.call(this,s1);
case  2 :
return difference__10289.call(this,s1,s2);
default:
return difference__10290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__10290.cljs$lang$applyTo;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10294_SHARP_){
return cljs.core.select_keys.call(null,p1__10294_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__10296){
var vec__10297__10298 = p__10296;
var old__10299 = cljs.core.nth.call(null,vec__10297__10298,0,null);
var new$__10300 = cljs.core.nth.call(null,vec__10297__10298,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____10301 = cljs.core.not_EQ_.call(null,old__10299,new$__10300);

if(cljs.core.truth_(and__3546__auto____10301))
{return cljs.core.contains_QMARK_.call(null,m,old__10299);
} else
{return and__3546__auto____10301;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__10300,cljs.core.get.call(null,m,old__10299)),old__10299);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10295_SHARP_){
return clojure.set.rename_keys.call(null,p1__10295_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__10302 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__10302,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__10302,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__10307){
var vec__10308__10309 = p__10307;
var k__10310 = cljs.core.nth.call(null,vec__10308__10309,0,null);
var v__10311 = cljs.core.nth.call(null,vec__10308__10309,1,null);

return cljs.core.assoc.call(null,m,v__10311,k__10310);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__10328 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____10313 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____10313))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____10313;
}
})()))
{var ks__10315 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__10314__10316 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__10317 = cljs.core.nth.call(null,vec__10314__10316,0,null);
var s__10318 = cljs.core.nth.call(null,vec__10314__10316,1,null);
var idx__10319 = clojure.set.index.call(null,r__10317,ks__10315);

return cljs.core.reduce.call(null,(function (ret,x){
var found__10320 = idx__10319.call(null,cljs.core.select_keys.call(null,x,ks__10315));

if(cljs.core.truth_(found__10320))
{return cljs.core.reduce.call(null,(function (p1__10303_SHARP_,p2__10304_SHARP_){
return cljs.core.conj.call(null,p1__10303_SHARP_,cljs.core.merge.call(null,p2__10304_SHARP_,x));
}),ret,found__10320);
} else
{return ret;
}
}),cljs.core.set([]),s__10318);
} else
{return cljs.core.set([]);
}
});
var join__10329 = (function (xrel,yrel,km){
var vec__10321__10322 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__10323 = cljs.core.nth.call(null,vec__10321__10322,0,null);
var s__10324 = cljs.core.nth.call(null,vec__10321__10322,1,null);
var k__10325 = cljs.core.nth.call(null,vec__10321__10322,2,null);
var idx__10326 = clojure.set.index.call(null,r__10323,cljs.core.vals.call(null,k__10325));

return cljs.core.reduce.call(null,(function (ret,x){
var found__10327 = idx__10326.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__10325)),k__10325));

if(cljs.core.truth_(found__10327))
{return cljs.core.reduce.call(null,(function (p1__10305_SHARP_,p2__10306_SHARP_){
return cljs.core.conj.call(null,p1__10305_SHARP_,cljs.core.merge.call(null,p2__10306_SHARP_,x));
}),ret,found__10327);
} else
{return ret;
}
}),cljs.core.set([]),s__10324);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__10328.call(this,xrel,yrel);
case  3 :
return join__10329.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3546__auto____10332 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10332))
{return cljs.core.every_QMARK_.call(null,(function (p1__10312_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__10312_SHARP_);
}),set1);
} else
{return and__3546__auto____10332;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____10333 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10333))
{return cljs.core.every_QMARK_.call(null,(function (p1__10331_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__10331_SHARP_);
}),set2);
} else
{return and__3546__auto____10333;
}
});
