goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__13604 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__13604,cljs.core.remove.call(null,(function (p1__13603_SHARP_){
return (max__13604 === p1__13603_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__13607 = (function (){
return cljs.core.set([]);
});
var union__13608 = (function (s1){
return s1;
});
var union__13609 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__13610 = (function() { 
var G__13612__delegate = function (s1,s2,sets){
var bubbled_sets__13606 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__13606),cljs.core.rest.call(null,bubbled_sets__13606));
};
var G__13612 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13612__delegate.call(this, s1, s2, sets);
};
G__13612.cljs$lang$maxFixedArity = 2;
G__13612.cljs$lang$applyTo = (function (arglist__13613){
var s1 = cljs.core.first(arglist__13613);
var s2 = cljs.core.first(cljs.core.next(arglist__13613));
var sets = cljs.core.rest(cljs.core.next(arglist__13613));
return G__13612__delegate.call(this, s1, s2, sets);
});
return G__13612;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__13607.call(this);
case  1 :
return union__13608.call(this,s1);
case  2 :
return union__13609.call(this,s1,s2);
default:
return union__13610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__13610.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__13615 = (function (s1){
return s1;
});
var intersection__13616 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__13619 = s2;
var G__13620 = s1;
s1 = G__13619;
s2 = G__13620;
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
var intersection__13617 = (function() { 
var G__13621__delegate = function (s1,s2,sets){
var bubbled_sets__13614 = clojure.set.bubble_max_key.call(null,(function (p1__13605_SHARP_){
return (- cljs.core.count.call(null,p1__13605_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__13614),cljs.core.rest.call(null,bubbled_sets__13614));
};
var G__13621 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13621__delegate.call(this, s1, s2, sets);
};
G__13621.cljs$lang$maxFixedArity = 2;
G__13621.cljs$lang$applyTo = (function (arglist__13622){
var s1 = cljs.core.first(arglist__13622);
var s2 = cljs.core.first(cljs.core.next(arglist__13622));
var sets = cljs.core.rest(cljs.core.next(arglist__13622));
return G__13621__delegate.call(this, s1, s2, sets);
});
return G__13621;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__13615.call(this,s1);
case  2 :
return intersection__13616.call(this,s1,s2);
default:
return intersection__13617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__13617.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__13623 = (function (s1){
return s1;
});
var difference__13624 = (function (s1,s2){
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
var difference__13625 = (function() { 
var G__13627__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__13627 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13627__delegate.call(this, s1, s2, sets);
};
G__13627.cljs$lang$maxFixedArity = 2;
G__13627.cljs$lang$applyTo = (function (arglist__13628){
var s1 = cljs.core.first(arglist__13628);
var s2 = cljs.core.first(cljs.core.next(arglist__13628));
var sets = cljs.core.rest(cljs.core.next(arglist__13628));
return G__13627__delegate.call(this, s1, s2, sets);
});
return G__13627;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__13623.call(this,s1);
case  2 :
return difference__13624.call(this,s1,s2);
default:
return difference__13625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__13625.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__13629_SHARP_){
return cljs.core.select_keys.call(null,p1__13629_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__13631){
var vec__13632__13633 = p__13631;
var old__13634 = cljs.core.nth.call(null,vec__13632__13633,0,null);
var new$__13635 = cljs.core.nth.call(null,vec__13632__13633,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____13636 = cljs.core.not_EQ_.call(null,old__13634,new$__13635);

if(cljs.core.truth_(and__3546__auto____13636))
{return cljs.core.contains_QMARK_.call(null,m,old__13634);
} else
{return and__3546__auto____13636;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__13635,cljs.core.get.call(null,m,old__13634)),old__13634);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__13630_SHARP_){
return clojure.set.rename_keys.call(null,p1__13630_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__13637 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__13637,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__13637,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__13642){
var vec__13643__13644 = p__13642;
var k__13645 = cljs.core.nth.call(null,vec__13643__13644,0,null);
var v__13646 = cljs.core.nth.call(null,vec__13643__13644,1,null);

return cljs.core.assoc.call(null,m,v__13646,k__13645);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__13663 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____13648 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____13648))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____13648;
}
})()))
{var ks__13650 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__13649__13651 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__13652 = cljs.core.nth.call(null,vec__13649__13651,0,null);
var s__13653 = cljs.core.nth.call(null,vec__13649__13651,1,null);
var idx__13654 = clojure.set.index.call(null,r__13652,ks__13650);

return cljs.core.reduce.call(null,(function (ret,x){
var found__13655 = idx__13654.call(null,cljs.core.select_keys.call(null,x,ks__13650));

if(cljs.core.truth_(found__13655))
{return cljs.core.reduce.call(null,(function (p1__13638_SHARP_,p2__13639_SHARP_){
return cljs.core.conj.call(null,p1__13638_SHARP_,cljs.core.merge.call(null,p2__13639_SHARP_,x));
}),ret,found__13655);
} else
{return ret;
}
}),cljs.core.set([]),s__13653);
} else
{return cljs.core.set([]);
}
});
var join__13664 = (function (xrel,yrel,km){
var vec__13656__13657 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__13658 = cljs.core.nth.call(null,vec__13656__13657,0,null);
var s__13659 = cljs.core.nth.call(null,vec__13656__13657,1,null);
var k__13660 = cljs.core.nth.call(null,vec__13656__13657,2,null);
var idx__13661 = clojure.set.index.call(null,r__13658,cljs.core.vals.call(null,k__13660));

return cljs.core.reduce.call(null,(function (ret,x){
var found__13662 = idx__13661.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__13660)),k__13660));

if(cljs.core.truth_(found__13662))
{return cljs.core.reduce.call(null,(function (p1__13640_SHARP_,p2__13641_SHARP_){
return cljs.core.conj.call(null,p1__13640_SHARP_,cljs.core.merge.call(null,p2__13641_SHARP_,x));
}),ret,found__13662);
} else
{return ret;
}
}),cljs.core.set([]),s__13659);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__13663.call(this,xrel,yrel);
case  3 :
return join__13664.call(this,xrel,yrel,km);
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
var and__3546__auto____13667 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____13667))
{return cljs.core.every_QMARK_.call(null,(function (p1__13647_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__13647_SHARP_);
}),set1);
} else
{return and__3546__auto____13667;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____13668 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____13668))
{return cljs.core.every_QMARK_.call(null,(function (p1__13666_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__13666_SHARP_);
}),set2);
} else
{return and__3546__auto____13668;
}
});
