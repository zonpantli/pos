goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__10312 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__10312,cljs.core.remove.call(null,(function (p1__10311_SHARP_){
return (max__10312 === p1__10311_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__10315 = (function (){
return cljs.core.set([]);
});
var union__10316 = (function (s1){
return s1;
});
var union__10317 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__10318 = (function() { 
var G__10320__delegate = function (s1,s2,sets){
var bubbled_sets__10314 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__10314),cljs.core.rest.call(null,bubbled_sets__10314));
};
var G__10320 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10320__delegate.call(this, s1, s2, sets);
};
G__10320.cljs$lang$maxFixedArity = 2;
G__10320.cljs$lang$applyTo = (function (arglist__10321){
var s1 = cljs.core.first(arglist__10321);
var s2 = cljs.core.first(cljs.core.next(arglist__10321));
var sets = cljs.core.rest(cljs.core.next(arglist__10321));
return G__10320__delegate.call(this, s1, s2, sets);
});
return G__10320;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__10315.call(this);
case  1 :
return union__10316.call(this,s1);
case  2 :
return union__10317.call(this,s1,s2);
default:
return union__10318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__10318.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__10323 = (function (s1){
return s1;
});
var intersection__10324 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__10327 = s2;
var G__10328 = s1;
s1 = G__10327;
s2 = G__10328;
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
var intersection__10325 = (function() { 
var G__10329__delegate = function (s1,s2,sets){
var bubbled_sets__10322 = clojure.set.bubble_max_key.call(null,(function (p1__10313_SHARP_){
return (- cljs.core.count.call(null,p1__10313_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__10322),cljs.core.rest.call(null,bubbled_sets__10322));
};
var G__10329 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10329__delegate.call(this, s1, s2, sets);
};
G__10329.cljs$lang$maxFixedArity = 2;
G__10329.cljs$lang$applyTo = (function (arglist__10330){
var s1 = cljs.core.first(arglist__10330);
var s2 = cljs.core.first(cljs.core.next(arglist__10330));
var sets = cljs.core.rest(cljs.core.next(arglist__10330));
return G__10329__delegate.call(this, s1, s2, sets);
});
return G__10329;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__10323.call(this,s1);
case  2 :
return intersection__10324.call(this,s1,s2);
default:
return intersection__10325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__10325.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__10331 = (function (s1){
return s1;
});
var difference__10332 = (function (s1,s2){
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
var difference__10333 = (function() { 
var G__10335__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__10335 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10335__delegate.call(this, s1, s2, sets);
};
G__10335.cljs$lang$maxFixedArity = 2;
G__10335.cljs$lang$applyTo = (function (arglist__10336){
var s1 = cljs.core.first(arglist__10336);
var s2 = cljs.core.first(cljs.core.next(arglist__10336));
var sets = cljs.core.rest(cljs.core.next(arglist__10336));
return G__10335__delegate.call(this, s1, s2, sets);
});
return G__10335;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__10331.call(this,s1);
case  2 :
return difference__10332.call(this,s1,s2);
default:
return difference__10333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__10333.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10337_SHARP_){
return cljs.core.select_keys.call(null,p1__10337_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__10339){
var vec__10340__10341 = p__10339;
var old__10342 = cljs.core.nth.call(null,vec__10340__10341,0,null);
var new$__10343 = cljs.core.nth.call(null,vec__10340__10341,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____10344 = cljs.core.not_EQ_.call(null,old__10342,new$__10343);

if(cljs.core.truth_(and__3546__auto____10344))
{return cljs.core.contains_QMARK_.call(null,m,old__10342);
} else
{return and__3546__auto____10344;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__10343,cljs.core.get.call(null,m,old__10342)),old__10342);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__10338_SHARP_){
return clojure.set.rename_keys.call(null,p1__10338_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__10345 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__10345,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__10345,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__10350){
var vec__10351__10352 = p__10350;
var k__10353 = cljs.core.nth.call(null,vec__10351__10352,0,null);
var v__10354 = cljs.core.nth.call(null,vec__10351__10352,1,null);

return cljs.core.assoc.call(null,m,v__10354,k__10353);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__10371 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____10356 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____10356))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____10356;
}
})()))
{var ks__10358 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__10357__10359 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__10360 = cljs.core.nth.call(null,vec__10357__10359,0,null);
var s__10361 = cljs.core.nth.call(null,vec__10357__10359,1,null);
var idx__10362 = clojure.set.index.call(null,r__10360,ks__10358);

return cljs.core.reduce.call(null,(function (ret,x){
var found__10363 = idx__10362.call(null,cljs.core.select_keys.call(null,x,ks__10358));

if(cljs.core.truth_(found__10363))
{return cljs.core.reduce.call(null,(function (p1__10346_SHARP_,p2__10347_SHARP_){
return cljs.core.conj.call(null,p1__10346_SHARP_,cljs.core.merge.call(null,p2__10347_SHARP_,x));
}),ret,found__10363);
} else
{return ret;
}
}),cljs.core.set([]),s__10361);
} else
{return cljs.core.set([]);
}
});
var join__10372 = (function (xrel,yrel,km){
var vec__10364__10365 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__10366 = cljs.core.nth.call(null,vec__10364__10365,0,null);
var s__10367 = cljs.core.nth.call(null,vec__10364__10365,1,null);
var k__10368 = cljs.core.nth.call(null,vec__10364__10365,2,null);
var idx__10369 = clojure.set.index.call(null,r__10366,cljs.core.vals.call(null,k__10368));

return cljs.core.reduce.call(null,(function (ret,x){
var found__10370 = idx__10369.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__10368)),k__10368));

if(cljs.core.truth_(found__10370))
{return cljs.core.reduce.call(null,(function (p1__10348_SHARP_,p2__10349_SHARP_){
return cljs.core.conj.call(null,p1__10348_SHARP_,cljs.core.merge.call(null,p2__10349_SHARP_,x));
}),ret,found__10370);
} else
{return ret;
}
}),cljs.core.set([]),s__10367);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__10371.call(this,xrel,yrel);
case  3 :
return join__10372.call(this,xrel,yrel,km);
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
var and__3546__auto____10375 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10375))
{return cljs.core.every_QMARK_.call(null,(function (p1__10355_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__10355_SHARP_);
}),set1);
} else
{return and__3546__auto____10375;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____10376 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10376))
{return cljs.core.every_QMARK_.call(null,(function (p1__10374_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__10374_SHARP_);
}),set2);
} else
{return and__3546__auto____10376;
}
});
