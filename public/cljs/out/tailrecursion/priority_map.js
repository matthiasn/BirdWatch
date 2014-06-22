// Compiled by ClojureScript 0.0-2202
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item = cljs.core.first.call(null,cljs.core.val.call(null,f));if(cljs.core.truth_(self__.keyfn))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key.call(null,f)], null);
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set = cljs.core.val.call(null,f);var item = cljs.core.first.call(null,item_set);var priority_key = cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (coll__$1){
return (function iter__13865(s__13866){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__13866__$1 = s__13866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13866__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13872 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13872,0,null);var item_set = cljs.core.nth.call(null,vec__13872,1,null);var iterys__4194__auto__ = ((function (s__13866__$1,vec__13872,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function iter__13867(s__13868){return (new cljs.core.LazySeq(null,((function (s__13866__$1,vec__13872,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){var s__13868__$1 = s__13868;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13868__$1);if(temp__4126__auto____$1)
{var s__13868__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13868__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13868__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13870 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13869 = 0;while(true){
if((i__13869 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13869);cljs.core.chunk_append.call(null,b__13870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__13913 = (i__13869 + 1);
i__13869 = G__13913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13870),iter__13867.call(null,cljs.core.chunk_rest.call(null,s__13868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13870),null);
}
} else
{var item = cljs.core.first.call(null,s__13868__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__13867.call(null,cljs.core.rest.call(null,s__13868__$2)));
}
} else
{return null;
}
break;
}
});})(s__13866__$1,vec__13872,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__13866__$1,vec__13872,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13865.call(null,cljs.core.rest.call(null,s__13866__$1)));
} else
{{
var G__13914 = cljs.core.rest.call(null,s__13866__$1);
s__13866__$1 = G__13914;
continue;
}
}
} else
{return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;return iter__4198__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (coll__$1){
return (function iter__13873(s__13874){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__13874__$1 = s__13874;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13874__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13880 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13880,0,null);var item_set = cljs.core.nth.call(null,vec__13880,1,null);var iterys__4194__auto__ = ((function (s__13874__$1,vec__13880,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function iter__13875(s__13876){return (new cljs.core.LazySeq(null,((function (s__13874__$1,vec__13880,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){var s__13876__$1 = s__13876;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13876__$1);if(temp__4126__auto____$1)
{var s__13876__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13876__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13876__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13878 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13877 = 0;while(true){
if((i__13877 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13877);cljs.core.chunk_append.call(null,b__13878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__13915 = (i__13877 + 1);
i__13877 = G__13915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13878),iter__13875.call(null,cljs.core.chunk_rest.call(null,s__13876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13878),null);
}
} else
{var item = cljs.core.first.call(null,s__13876__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__13875.call(null,cljs.core.rest.call(null,s__13876__$2)));
}
} else
{return null;
}
break;
}
});})(s__13874__$1,vec__13880,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__13874__$1,vec__13880,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13873.call(null,cljs.core.rest.call(null,s__13874__$1)));
} else
{{
var G__13916 = cljs.core.rest.call(null,s__13874__$1);
s__13874__$1 = G__13916;
continue;
}
}
} else
{return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;return iter__4198__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var item_set = self__.priority__GT_set_of_items.call(null,priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4124__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4124__auto__))
{var current_priority = temp__4124__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$__$1;
} else
{var priority_key = self__.keyfn.call(null,priority);var current_priority_key = self__.keyfn.call(null,current_priority);var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else
{var priority_key = self__.keyfn.call(null,priority);return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (this$__$1){
return (function iter__13881(s__13882){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__13882__$1 = s__13882;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13882__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13888 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13888,0,null);var item_set = cljs.core.nth.call(null,vec__13888,1,null);var iterys__4194__auto__ = ((function (s__13882__$1,vec__13888,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function iter__13883(s__13884){return (new cljs.core.LazySeq(null,((function (s__13882__$1,vec__13888,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){var s__13884__$1 = s__13884;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13884__$1);if(temp__4126__auto____$1)
{var s__13884__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13884__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13884__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13886 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13885 = 0;while(true){
if((i__13885 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13885);cljs.core.chunk_append.call(null,b__13886,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__13917 = (i__13885 + 1);
i__13885 = G__13917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13886),iter__13883.call(null,cljs.core.chunk_rest.call(null,s__13884__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13886),null);
}
} else
{var item = cljs.core.first.call(null,s__13884__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__13883.call(null,cljs.core.rest.call(null,s__13884__$2)));
}
} else
{return null;
}
break;
}
});})(s__13882__$1,vec__13888,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__13882__$1,vec__13888,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13881.call(null,cljs.core.rest.call(null,s__13882__$1)));
} else
{{
var G__13918 = cljs.core.rest.call(null,s__13882__$1);
s__13882__$1 = G__13918;
continue;
}
}
} else
{return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;return iter__4198__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (this$__$1){
return (function iter__13889(s__13890){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__13890__$1 = s__13890;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13890__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13896 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13896,0,null);var item_set = cljs.core.nth.call(null,vec__13896,1,null);var iterys__4194__auto__ = ((function (s__13890__$1,vec__13896,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function iter__13891(s__13892){return (new cljs.core.LazySeq(null,((function (s__13890__$1,vec__13896,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){var s__13892__$1 = s__13892;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13892__$1);if(temp__4126__auto____$1)
{var s__13892__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13892__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13892__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13894 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13893 = 0;while(true){
if((i__13893 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13893);cljs.core.chunk_append.call(null,b__13894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__13919 = (i__13893 + 1);
i__13893 = G__13919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13894),iter__13891.call(null,cljs.core.chunk_rest.call(null,s__13892__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13894),null);
}
} else
{var item = cljs.core.first.call(null,s__13892__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__13891.call(null,cljs.core.rest.call(null,s__13892__$2)));
}
} else
{return null;
}
break;
}
});})(s__13890__$1,vec__13896,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__13890__$1,vec__13896,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13889.call(null,cljs.core.rest.call(null,s__13890__$1)));
} else
{{
var G__13920 = cljs.core.rest.call(null,s__13890__$1);
s__13890__$1 = G__13920;
continue;
}
}
} else
{return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;return iter__4198__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__13921 = null;
var G__13921__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__13921__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__13921 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__13921__2.call(this,self__,item);
case 3:
return G__13921__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__13921;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args13864){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13864)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));if(cljs.core.truth_(self__.keyfn))
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (sets,this$__$1){
return (function iter__13897(s__13898){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__13898__$1 = s__13898;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13898__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13904 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13904,0,null);var item_set = cljs.core.nth.call(null,vec__13904,1,null);var iterys__4194__auto__ = ((function (s__13898__$1,vec__13904,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function iter__13899(s__13900){return (new cljs.core.LazySeq(null,((function (s__13898__$1,vec__13904,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){var s__13900__$1 = s__13900;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13900__$1);if(temp__4126__auto____$1)
{var s__13900__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13900__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13900__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13902 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13901 = 0;while(true){
if((i__13901 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13901);cljs.core.chunk_append.call(null,b__13902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));
{
var G__13922 = (i__13901 + 1);
i__13901 = G__13922;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13902),iter__13899.call(null,cljs.core.chunk_rest.call(null,s__13900__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13902),null);
}
} else
{var item = cljs.core.first.call(null,s__13900__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),iter__13899.call(null,cljs.core.rest.call(null,s__13900__$2)));
}
} else
{return null;
}
break;
}
});})(s__13898__$1,vec__13904,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__13898__$1,vec__13904,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13897.call(null,cljs.core.rest.call(null,s__13898__$1)));
} else
{{
var G__13923 = cljs.core.rest.call(null,s__13898__$1);
s__13898__$1 = G__13923;
continue;
}
}
} else
{return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;return iter__4198__auto__.call(null,sets);
})());
} else
{return cljs.core.seq.call(null,(function (){var iter__4198__auto__ = ((function (sets,this$__$1){
return (function iter__13905(s__13906){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__13906__$1 = s__13906;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13906__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__13912 = cljs.core.first.call(null,xs__4624__auto__);var priority = cljs.core.nth.call(null,vec__13912,0,null);var item_set = cljs.core.nth.call(null,vec__13912,1,null);var iterys__4194__auto__ = ((function (s__13906__$1,vec__13912,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function iter__13907(s__13908){return (new cljs.core.LazySeq(null,((function (s__13906__$1,vec__13912,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){var s__13908__$1 = s__13908;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13908__$1);if(temp__4126__auto____$1)
{var s__13908__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13908__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13908__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13910 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13909 = 0;while(true){
if((i__13909 < size__4197__auto__))
{var item = cljs.core._nth.call(null,c__4196__auto__,i__13909);cljs.core.chunk_append.call(null,b__13910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__13924 = (i__13909 + 1);
i__13909 = G__13924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13910),iter__13907.call(null,cljs.core.chunk_rest.call(null,s__13908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13910),null);
}
} else
{var item = cljs.core.first.call(null,s__13908__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__13907.call(null,cljs.core.rest.call(null,s__13908__$2)));
}
} else
{return null;
}
break;
}
});})(s__13906__$1,vec__13912,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__13906__$1,vec__13912,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,item_set));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__13905.call(null,cljs.core.rest.call(null,s__13906__$1)));
} else
{{
var G__13925 = cljs.core.rest.call(null,s__13906__$1);
s__13906__$1 = G__13925;
continue;
}
}
} else
{return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;return iter__4198__auto__.call(null,sets);
})());
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function() {
var pm_empty_keyfn = null;
var pm_empty_keyfn__1 = (function (keyfn){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});
var pm_empty_keyfn__2 = (function (keyfn,comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});
pm_empty_keyfn = function(keyfn,comparator){
switch(arguments.length){
case 1:
return pm_empty_keyfn__1.call(this,keyfn);
case 2:
return pm_empty_keyfn__2.call(this,keyfn,comparator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = pm_empty_keyfn__1;
pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = pm_empty_keyfn__2;
return pm_empty_keyfn;
})()
;
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){if(cljs.core.map_QMARK_.call(null,elems))
{return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){
if(in$)
{{
var G__13926 = cljs.core.nnext.call(null,in$);
var G__13927 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__13926;
out = G__13927;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__13928){
var keyvals = cljs.core.seq(arglist__13928);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);while(true){
if(in$)
{{
var G__13929 = cljs.core.nnext.call(null,in$);
var G__13930 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__13929;
out = G__13930;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__13931){
var comparator = cljs.core.first(arglist__13931);
var keyvals = cljs.core.rest(arglist__13931);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied keyfn.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_keyfn = (function() { 
var priority_map_keyfn__delegate = function (keyfn,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);while(true){
if(in$)
{{
var G__13932 = cljs.core.nnext.call(null,in$);
var G__13933 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__13932;
out = G__13933;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_keyfn = function (keyfn,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_keyfn__delegate.call(this,keyfn,keyvals);};
priority_map_keyfn.cljs$lang$maxFixedArity = 1;
priority_map_keyfn.cljs$lang$applyTo = (function (arglist__13934){
var keyfn = cljs.core.first(arglist__13934);
var keyvals = cljs.core.rest(arglist__13934);
return priority_map_keyfn__delegate(keyfn,keyvals);
});
priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn__delegate;
return priority_map_keyfn;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied keyfn and comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_keyfn_by = (function() { 
var priority_map_keyfn_by__delegate = function (keyfn,comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);while(true){
if(in$)
{{
var G__13935 = cljs.core.nnext.call(null,in$);
var G__13936 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__13935;
out = G__13936;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_keyfn_by = function (keyfn,comparator,var_args){
var keyvals = null;if (arguments.length > 2) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return priority_map_keyfn_by__delegate.call(this,keyfn,comparator,keyvals);};
priority_map_keyfn_by.cljs$lang$maxFixedArity = 2;
priority_map_keyfn_by.cljs$lang$applyTo = (function (arglist__13937){
var keyfn = cljs.core.first(arglist__13937);
arglist__13937 = cljs.core.next(arglist__13937);
var comparator = cljs.core.first(arglist__13937);
var keyvals = cljs.core.rest(arglist__13937);
return priority_map_keyfn_by__delegate(keyfn,comparator,keyvals);
});
priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_keyfn_by__delegate;
return priority_map_keyfn_by;
})()
;

//# sourceMappingURL=priority_map.js.map