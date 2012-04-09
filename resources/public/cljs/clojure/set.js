goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__9941 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__9941,cljs.core.remove.call(null,(function (p1__9940_SHARP_){
return (max__9941 === p1__9940_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__9944 = (function (){
return cljs.core.set([]);
});
var union__9945 = (function (s1){
return s1;
});
var union__9946 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__9947 = (function() { 
var G__9949__delegate = function (s1,s2,sets){
var bubbled_sets__9943 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__9943),cljs.core.rest.call(null,bubbled_sets__9943));
};
var G__9949 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9949__delegate.call(this, s1, s2, sets);
};
G__9949.cljs$lang$maxFixedArity = 2;
G__9949.cljs$lang$applyTo = (function (arglist__9950){
var s1 = cljs.core.first(arglist__9950);
var s2 = cljs.core.first(cljs.core.next(arglist__9950));
var sets = cljs.core.rest(cljs.core.next(arglist__9950));
return G__9949__delegate.call(this, s1, s2, sets);
});
return G__9949;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__9944.call(this);
case  1 :
return union__9945.call(this,s1);
case  2 :
return union__9946.call(this,s1,s2);
default:
return union__9947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__9947.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__9952 = (function (s1){
return s1;
});
var intersection__9953 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__9956 = s2;
var G__9957 = s1;
s1 = G__9956;
s2 = G__9957;
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
var intersection__9954 = (function() { 
var G__9958__delegate = function (s1,s2,sets){
var bubbled_sets__9951 = clojure.set.bubble_max_key.call(null,(function (p1__9942_SHARP_){
return (- cljs.core.count.call(null,p1__9942_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__9951),cljs.core.rest.call(null,bubbled_sets__9951));
};
var G__9958 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9958__delegate.call(this, s1, s2, sets);
};
G__9958.cljs$lang$maxFixedArity = 2;
G__9958.cljs$lang$applyTo = (function (arglist__9959){
var s1 = cljs.core.first(arglist__9959);
var s2 = cljs.core.first(cljs.core.next(arglist__9959));
var sets = cljs.core.rest(cljs.core.next(arglist__9959));
return G__9958__delegate.call(this, s1, s2, sets);
});
return G__9958;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__9952.call(this,s1);
case  2 :
return intersection__9953.call(this,s1,s2);
default:
return intersection__9954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__9954.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__9960 = (function (s1){
return s1;
});
var difference__9961 = (function (s1,s2){
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
var difference__9962 = (function() { 
var G__9964__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__9964 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9964__delegate.call(this, s1, s2, sets);
};
G__9964.cljs$lang$maxFixedArity = 2;
G__9964.cljs$lang$applyTo = (function (arglist__9965){
var s1 = cljs.core.first(arglist__9965);
var s2 = cljs.core.first(cljs.core.next(arglist__9965));
var sets = cljs.core.rest(cljs.core.next(arglist__9965));
return G__9964__delegate.call(this, s1, s2, sets);
});
return G__9964;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__9960.call(this,s1);
case  2 :
return difference__9961.call(this,s1,s2);
default:
return difference__9962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__9962.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__9966_SHARP_){
return cljs.core.select_keys.call(null,p1__9966_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__9968){
var vec__9969__9970 = p__9968;
var old__9971 = cljs.core.nth.call(null,vec__9969__9970,0,null);
var new$__9972 = cljs.core.nth.call(null,vec__9969__9970,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____9973 = cljs.core.not_EQ_.call(null,old__9971,new$__9972);

if(cljs.core.truth_(and__3546__auto____9973))
{return cljs.core.contains_QMARK_.call(null,m,old__9971);
} else
{return and__3546__auto____9973;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__9972,cljs.core.get.call(null,m,old__9971)),old__9971);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__9967_SHARP_){
return clojure.set.rename_keys.call(null,p1__9967_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__9974 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__9974,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__9974,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__9979){
var vec__9980__9981 = p__9979;
var k__9982 = cljs.core.nth.call(null,vec__9980__9981,0,null);
var v__9983 = cljs.core.nth.call(null,vec__9980__9981,1,null);

return cljs.core.assoc.call(null,m,v__9983,k__9982);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__10000 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____9985 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____9985))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____9985;
}
})()))
{var ks__9987 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__9986__9988 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__9989 = cljs.core.nth.call(null,vec__9986__9988,0,null);
var s__9990 = cljs.core.nth.call(null,vec__9986__9988,1,null);
var idx__9991 = clojure.set.index.call(null,r__9989,ks__9987);

return cljs.core.reduce.call(null,(function (ret,x){
var found__9992 = idx__9991.call(null,cljs.core.select_keys.call(null,x,ks__9987));

if(cljs.core.truth_(found__9992))
{return cljs.core.reduce.call(null,(function (p1__9975_SHARP_,p2__9976_SHARP_){
return cljs.core.conj.call(null,p1__9975_SHARP_,cljs.core.merge.call(null,p2__9976_SHARP_,x));
}),ret,found__9992);
} else
{return ret;
}
}),cljs.core.set([]),s__9990);
} else
{return cljs.core.set([]);
}
});
var join__10001 = (function (xrel,yrel,km){
var vec__9993__9994 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__9995 = cljs.core.nth.call(null,vec__9993__9994,0,null);
var s__9996 = cljs.core.nth.call(null,vec__9993__9994,1,null);
var k__9997 = cljs.core.nth.call(null,vec__9993__9994,2,null);
var idx__9998 = clojure.set.index.call(null,r__9995,cljs.core.vals.call(null,k__9997));

return cljs.core.reduce.call(null,(function (ret,x){
var found__9999 = idx__9998.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__9997)),k__9997));

if(cljs.core.truth_(found__9999))
{return cljs.core.reduce.call(null,(function (p1__9977_SHARP_,p2__9978_SHARP_){
return cljs.core.conj.call(null,p1__9977_SHARP_,cljs.core.merge.call(null,p2__9978_SHARP_,x));
}),ret,found__9999);
} else
{return ret;
}
}),cljs.core.set([]),s__9996);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__10000.call(this,xrel,yrel);
case  3 :
return join__10001.call(this,xrel,yrel,km);
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
var and__3546__auto____10004 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10004))
{return cljs.core.every_QMARK_.call(null,(function (p1__9984_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__9984_SHARP_);
}),set1);
} else
{return and__3546__auto____10004;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____10005 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____10005))
{return cljs.core.every_QMARK_.call(null,(function (p1__10003_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__10003_SHARP_);
}),set2);
} else
{return and__3546__auto____10005;
}
});
