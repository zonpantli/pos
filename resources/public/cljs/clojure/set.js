goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__7265 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__7265,cljs.core.remove.call(null,(function (p1__7264_SHARP_){
return (max__7265 === p1__7264_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__7268 = (function (){
return cljs.core.set([]);
});
var union__7269 = (function (s1){
return s1;
});
var union__7270 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__7271 = (function() { 
var G__7273__delegate = function (s1,s2,sets){
var bubbled_sets__7267 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__7267),cljs.core.rest.call(null,bubbled_sets__7267));
};
var G__7273 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7273__delegate.call(this, s1, s2, sets);
};
G__7273.cljs$lang$maxFixedArity = 2;
G__7273.cljs$lang$applyTo = (function (arglist__7274){
var s1 = cljs.core.first(arglist__7274);
var s2 = cljs.core.first(cljs.core.next(arglist__7274));
var sets = cljs.core.rest(cljs.core.next(arglist__7274));
return G__7273__delegate.call(this, s1, s2, sets);
});
return G__7273;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__7268.call(this);
case  1 :
return union__7269.call(this,s1);
case  2 :
return union__7270.call(this,s1,s2);
default:
return union__7271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__7271.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__7276 = (function (s1){
return s1;
});
var intersection__7277 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__7280 = s2;
var G__7281 = s1;
s1 = G__7280;
s2 = G__7281;
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
var intersection__7278 = (function() { 
var G__7282__delegate = function (s1,s2,sets){
var bubbled_sets__7275 = clojure.set.bubble_max_key.call(null,(function (p1__7266_SHARP_){
return (- cljs.core.count.call(null,p1__7266_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__7275),cljs.core.rest.call(null,bubbled_sets__7275));
};
var G__7282 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7282__delegate.call(this, s1, s2, sets);
};
G__7282.cljs$lang$maxFixedArity = 2;
G__7282.cljs$lang$applyTo = (function (arglist__7283){
var s1 = cljs.core.first(arglist__7283);
var s2 = cljs.core.first(cljs.core.next(arglist__7283));
var sets = cljs.core.rest(cljs.core.next(arglist__7283));
return G__7282__delegate.call(this, s1, s2, sets);
});
return G__7282;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__7276.call(this,s1);
case  2 :
return intersection__7277.call(this,s1,s2);
default:
return intersection__7278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__7278.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__7284 = (function (s1){
return s1;
});
var difference__7285 = (function (s1,s2){
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
var difference__7286 = (function() { 
var G__7288__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__7288 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7288__delegate.call(this, s1, s2, sets);
};
G__7288.cljs$lang$maxFixedArity = 2;
G__7288.cljs$lang$applyTo = (function (arglist__7289){
var s1 = cljs.core.first(arglist__7289);
var s2 = cljs.core.first(cljs.core.next(arglist__7289));
var sets = cljs.core.rest(cljs.core.next(arglist__7289));
return G__7288__delegate.call(this, s1, s2, sets);
});
return G__7288;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__7284.call(this,s1);
case  2 :
return difference__7285.call(this,s1,s2);
default:
return difference__7286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__7286.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__7290_SHARP_){
return cljs.core.select_keys.call(null,p1__7290_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__7292){
var vec__7293__7294 = p__7292;
var old__7295 = cljs.core.nth.call(null,vec__7293__7294,0,null);
var new$__7296 = cljs.core.nth.call(null,vec__7293__7294,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____7297 = cljs.core.not_EQ_.call(null,old__7295,new$__7296);

if(cljs.core.truth_(and__3546__auto____7297))
{return cljs.core.contains_QMARK_.call(null,m,old__7295);
} else
{return and__3546__auto____7297;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__7296,cljs.core.get.call(null,m,old__7295)),old__7295);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__7291_SHARP_){
return clojure.set.rename_keys.call(null,p1__7291_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__7298 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__7298,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__7298,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__7303){
var vec__7304__7305 = p__7303;
var k__7306 = cljs.core.nth.call(null,vec__7304__7305,0,null);
var v__7307 = cljs.core.nth.call(null,vec__7304__7305,1,null);

return cljs.core.assoc.call(null,m,v__7307,k__7306);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__7324 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____7309 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____7309))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____7309;
}
})()))
{var ks__7311 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__7310__7312 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__7313 = cljs.core.nth.call(null,vec__7310__7312,0,null);
var s__7314 = cljs.core.nth.call(null,vec__7310__7312,1,null);
var idx__7315 = clojure.set.index.call(null,r__7313,ks__7311);

return cljs.core.reduce.call(null,(function (ret,x){
var found__7316 = idx__7315.call(null,cljs.core.select_keys.call(null,x,ks__7311));

if(cljs.core.truth_(found__7316))
{return cljs.core.reduce.call(null,(function (p1__7299_SHARP_,p2__7300_SHARP_){
return cljs.core.conj.call(null,p1__7299_SHARP_,cljs.core.merge.call(null,p2__7300_SHARP_,x));
}),ret,found__7316);
} else
{return ret;
}
}),cljs.core.set([]),s__7314);
} else
{return cljs.core.set([]);
}
});
var join__7325 = (function (xrel,yrel,km){
var vec__7317__7318 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__7319 = cljs.core.nth.call(null,vec__7317__7318,0,null);
var s__7320 = cljs.core.nth.call(null,vec__7317__7318,1,null);
var k__7321 = cljs.core.nth.call(null,vec__7317__7318,2,null);
var idx__7322 = clojure.set.index.call(null,r__7319,cljs.core.vals.call(null,k__7321));

return cljs.core.reduce.call(null,(function (ret,x){
var found__7323 = idx__7322.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__7321)),k__7321));

if(cljs.core.truth_(found__7323))
{return cljs.core.reduce.call(null,(function (p1__7301_SHARP_,p2__7302_SHARP_){
return cljs.core.conj.call(null,p1__7301_SHARP_,cljs.core.merge.call(null,p2__7302_SHARP_,x));
}),ret,found__7323);
} else
{return ret;
}
}),cljs.core.set([]),s__7320);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__7324.call(this,xrel,yrel);
case  3 :
return join__7325.call(this,xrel,yrel,km);
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
var and__3546__auto____7328 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____7328))
{return cljs.core.every_QMARK_.call(null,(function (p1__7308_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__7308_SHARP_);
}),set1);
} else
{return and__3546__auto____7328;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____7329 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____7329))
{return cljs.core.every_QMARK_.call(null,(function (p1__7327_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__7327_SHARP_);
}),set2);
} else
{return and__3546__auto____7329;
}
});
