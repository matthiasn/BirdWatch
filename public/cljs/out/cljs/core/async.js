// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10677 = (function (f,fn_handler,meta10678){
this.f = f;
this.fn_handler = fn_handler;
this.meta10678 = meta10678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10677.cljs$lang$type = true;
cljs.core.async.t10677.cljs$lang$ctorStr = "cljs.core.async/t10677";
cljs.core.async.t10677.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10677");
});
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10679){var self__ = this;
var _10679__$1 = this;return self__.meta10678;
});
cljs.core.async.t10677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10679,meta10678__$1){var self__ = this;
var _10679__$1 = this;return (new cljs.core.async.t10677(self__.f,self__.fn_handler,meta10678__$1));
});
cljs.core.async.__GT_t10677 = (function __GT_t10677(f__$1,fn_handler__$1,meta10678){return (new cljs.core.async.t10677(f__$1,fn_handler__$1,meta10678));
});
}
return (new cljs.core.async.t10677(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10681 = buff;if(G__10681)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10681.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10681);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10682 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10682);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10682,ret){
return (function (){return fn1.call(null,val_10682);
});})(val_10682,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10683 = n;var x_10684 = 0;while(true){
if((x_10684 < n__4329__auto___10683))
{(a[x_10684] = 0);
{
var G__10685 = (x_10684 + 1);
x_10684 = G__10685;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10686 = (i + 1);
i = G__10686;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10690 = (function (flag,alt_flag,meta10691){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10691 = meta10691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10690.cljs$lang$type = true;
cljs.core.async.t10690.cljs$lang$ctorStr = "cljs.core.async/t10690";
cljs.core.async.t10690.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10690");
});})(flag))
;
cljs.core.async.t10690.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10692){var self__ = this;
var _10692__$1 = this;return self__.meta10691;
});})(flag))
;
cljs.core.async.t10690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10692,meta10691__$1){var self__ = this;
var _10692__$1 = this;return (new cljs.core.async.t10690(self__.flag,self__.alt_flag,meta10691__$1));
});})(flag))
;
cljs.core.async.__GT_t10690 = ((function (flag){
return (function __GT_t10690(flag__$1,alt_flag__$1,meta10691){return (new cljs.core.async.t10690(flag__$1,alt_flag__$1,meta10691));
});})(flag))
;
}
return (new cljs.core.async.t10690(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10696 = (function (cb,flag,alt_handler,meta10697){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10697 = meta10697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10696.cljs$lang$type = true;
cljs.core.async.t10696.cljs$lang$ctorStr = "cljs.core.async/t10696";
cljs.core.async.t10696.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10696");
});
cljs.core.async.t10696.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10698){var self__ = this;
var _10698__$1 = this;return self__.meta10697;
});
cljs.core.async.t10696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10698,meta10697__$1){var self__ = this;
var _10698__$1 = this;return (new cljs.core.async.t10696(self__.cb,self__.flag,self__.alt_handler,meta10697__$1));
});
cljs.core.async.__GT_t10696 = (function __GT_t10696(cb__$1,flag__$1,alt_handler__$1,meta10697){return (new cljs.core.async.t10696(cb__$1,flag__$1,alt_handler__$1,meta10697));
});
}
return (new cljs.core.async.t10696(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10699_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10699_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10700_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10700_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10701 = (i + 1);
i = G__10701;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10702){var map__10704 = p__10702;var map__10704__$1 = ((cljs.core.seq_QMARK_.call(null,map__10704))?cljs.core.apply.call(null,cljs.core.hash_map,map__10704):map__10704);var opts = map__10704__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10702 = null;if (arguments.length > 1) {
  p__10702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10702);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10705){
var ports = cljs.core.first(arglist__10705);
var p__10702 = cljs.core.rest(arglist__10705);
return alts_BANG___delegate(ports,p__10702);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10713 = (function (ch,f,map_LT_,meta10714){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10714 = meta10714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10713.cljs$lang$type = true;
cljs.core.async.t10713.cljs$lang$ctorStr = "cljs.core.async/t10713";
cljs.core.async.t10713.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10713");
});
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10716 = (function (fn1,_,meta10714,ch,f,map_LT_,meta10717){
this.fn1 = fn1;
this._ = _;
this.meta10714 = meta10714;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10717 = meta10717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10716.cljs$lang$type = true;
cljs.core.async.t10716.cljs$lang$ctorStr = "cljs.core.async/t10716";
cljs.core.async.t10716.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10716");
});})(___$1))
;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10706_SHARP_){return f1.call(null,(((p1__10706_SHARP_ == null))?null:self__.f.call(null,p1__10706_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10718){var self__ = this;
var _10718__$1 = this;return self__.meta10717;
});})(___$1))
;
cljs.core.async.t10716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10718,meta10717__$1){var self__ = this;
var _10718__$1 = this;return (new cljs.core.async.t10716(self__.fn1,self__._,self__.meta10714,self__.ch,self__.f,self__.map_LT_,meta10717__$1));
});})(___$1))
;
cljs.core.async.__GT_t10716 = ((function (___$1){
return (function __GT_t10716(fn1__$1,___$2,meta10714__$1,ch__$2,f__$2,map_LT___$2,meta10717){return (new cljs.core.async.t10716(fn1__$1,___$2,meta10714__$1,ch__$2,f__$2,map_LT___$2,meta10717));
});})(___$1))
;
}
return (new cljs.core.async.t10716(fn1,___$1,self__.meta10714,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10715){var self__ = this;
var _10715__$1 = this;return self__.meta10714;
});
cljs.core.async.t10713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10715,meta10714__$1){var self__ = this;
var _10715__$1 = this;return (new cljs.core.async.t10713(self__.ch,self__.f,self__.map_LT_,meta10714__$1));
});
cljs.core.async.__GT_t10713 = (function __GT_t10713(ch__$1,f__$1,map_LT___$1,meta10714){return (new cljs.core.async.t10713(ch__$1,f__$1,map_LT___$1,meta10714));
});
}
return (new cljs.core.async.t10713(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10722 = (function (ch,f,map_GT_,meta10723){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10723 = meta10723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10722.cljs$lang$type = true;
cljs.core.async.t10722.cljs$lang$ctorStr = "cljs.core.async/t10722";
cljs.core.async.t10722.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10722");
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10724){var self__ = this;
var _10724__$1 = this;return self__.meta10723;
});
cljs.core.async.t10722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10724,meta10723__$1){var self__ = this;
var _10724__$1 = this;return (new cljs.core.async.t10722(self__.ch,self__.f,self__.map_GT_,meta10723__$1));
});
cljs.core.async.__GT_t10722 = (function __GT_t10722(ch__$1,f__$1,map_GT___$1,meta10723){return (new cljs.core.async.t10722(ch__$1,f__$1,map_GT___$1,meta10723));
});
}
return (new cljs.core.async.t10722(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10728 = (function (ch,p,filter_GT_,meta10729){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10729 = meta10729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10728.cljs$lang$type = true;
cljs.core.async.t10728.cljs$lang$ctorStr = "cljs.core.async/t10728";
cljs.core.async.t10728.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10728");
});
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10728.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10730){var self__ = this;
var _10730__$1 = this;return self__.meta10729;
});
cljs.core.async.t10728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10730,meta10729__$1){var self__ = this;
var _10730__$1 = this;return (new cljs.core.async.t10728(self__.ch,self__.p,self__.filter_GT_,meta10729__$1));
});
cljs.core.async.__GT_t10728 = (function __GT_t10728(ch__$1,p__$1,filter_GT___$1,meta10729){return (new cljs.core.async.t10728(ch__$1,p__$1,filter_GT___$1,meta10729));
});
}
return (new cljs.core.async.t10728(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___10813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10813,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10813,out){
return (function (state_10792){var state_val_10793 = (state_10792[1]);if((state_val_10793 === 7))
{var inst_10788 = (state_10792[2]);var state_10792__$1 = state_10792;var statearr_10794_10814 = state_10792__$1;(statearr_10794_10814[2] = inst_10788);
(statearr_10794_10814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 1))
{var state_10792__$1 = state_10792;var statearr_10795_10815 = state_10792__$1;(statearr_10795_10815[2] = null);
(statearr_10795_10815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 4))
{var inst_10774 = (state_10792[7]);var inst_10774__$1 = (state_10792[2]);var inst_10775 = (inst_10774__$1 == null);var state_10792__$1 = (function (){var statearr_10796 = state_10792;(statearr_10796[7] = inst_10774__$1);
return statearr_10796;
})();if(cljs.core.truth_(inst_10775))
{var statearr_10797_10816 = state_10792__$1;(statearr_10797_10816[1] = 5);
} else
{var statearr_10798_10817 = state_10792__$1;(statearr_10798_10817[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 6))
{var inst_10774 = (state_10792[7]);var inst_10779 = p.call(null,inst_10774);var state_10792__$1 = state_10792;if(cljs.core.truth_(inst_10779))
{var statearr_10799_10818 = state_10792__$1;(statearr_10799_10818[1] = 8);
} else
{var statearr_10800_10819 = state_10792__$1;(statearr_10800_10819[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 3))
{var inst_10790 = (state_10792[2]);var state_10792__$1 = state_10792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10792__$1,inst_10790);
} else
{if((state_val_10793 === 2))
{var state_10792__$1 = state_10792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10792__$1,4,ch);
} else
{if((state_val_10793 === 11))
{var inst_10782 = (state_10792[2]);var state_10792__$1 = state_10792;var statearr_10801_10820 = state_10792__$1;(statearr_10801_10820[2] = inst_10782);
(statearr_10801_10820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 9))
{var state_10792__$1 = state_10792;var statearr_10802_10821 = state_10792__$1;(statearr_10802_10821[2] = null);
(statearr_10802_10821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 5))
{var inst_10777 = cljs.core.async.close_BANG_.call(null,out);var state_10792__$1 = state_10792;var statearr_10803_10822 = state_10792__$1;(statearr_10803_10822[2] = inst_10777);
(statearr_10803_10822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 10))
{var inst_10785 = (state_10792[2]);var state_10792__$1 = (function (){var statearr_10804 = state_10792;(statearr_10804[8] = inst_10785);
return statearr_10804;
})();var statearr_10805_10823 = state_10792__$1;(statearr_10805_10823[2] = null);
(statearr_10805_10823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10793 === 8))
{var inst_10774 = (state_10792[7]);var state_10792__$1 = state_10792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10792__$1,11,out,inst_10774);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___10813,out))
;return ((function (switch__5623__auto__,c__5638__auto___10813,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10809 = [null,null,null,null,null,null,null,null,null];(statearr_10809[0] = state_machine__5624__auto__);
(statearr_10809[1] = 1);
return statearr_10809;
});
var state_machine__5624__auto____1 = (function (state_10792){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10810){if((e10810 instanceof Object))
{var ex__5627__auto__ = e10810;var statearr_10811_10824 = state_10792;(statearr_10811_10824[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10825 = state_10792;
state_10792 = G__10825;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10792){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10813,out))
})();var state__5640__auto__ = (function (){var statearr_10812 = f__5639__auto__.call(null);(statearr_10812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10813);
return statearr_10812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10813,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_10991){var state_val_10992 = (state_10991[1]);if((state_val_10992 === 7))
{var inst_10987 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_10993_11034 = state_10991__$1;(statearr_10993_11034[2] = inst_10987);
(statearr_10993_11034[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 20))
{var inst_10957 = (state_10991[7]);var inst_10968 = (state_10991[2]);var inst_10969 = cljs.core.next.call(null,inst_10957);var inst_10943 = inst_10969;var inst_10944 = null;var inst_10945 = 0;var inst_10946 = 0;var state_10991__$1 = (function (){var statearr_10994 = state_10991;(statearr_10994[8] = inst_10945);
(statearr_10994[9] = inst_10946);
(statearr_10994[10] = inst_10944);
(statearr_10994[11] = inst_10968);
(statearr_10994[12] = inst_10943);
return statearr_10994;
})();var statearr_10995_11035 = state_10991__$1;(statearr_10995_11035[2] = null);
(statearr_10995_11035[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 1))
{var state_10991__$1 = state_10991;var statearr_10996_11036 = state_10991__$1;(statearr_10996_11036[2] = null);
(statearr_10996_11036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 4))
{var inst_10932 = (state_10991[13]);var inst_10932__$1 = (state_10991[2]);var inst_10933 = (inst_10932__$1 == null);var state_10991__$1 = (function (){var statearr_10997 = state_10991;(statearr_10997[13] = inst_10932__$1);
return statearr_10997;
})();if(cljs.core.truth_(inst_10933))
{var statearr_10998_11037 = state_10991__$1;(statearr_10998_11037[1] = 5);
} else
{var statearr_10999_11038 = state_10991__$1;(statearr_10999_11038[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 15))
{var state_10991__$1 = state_10991;var statearr_11003_11039 = state_10991__$1;(statearr_11003_11039[2] = null);
(statearr_11003_11039[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 21))
{var state_10991__$1 = state_10991;var statearr_11004_11040 = state_10991__$1;(statearr_11004_11040[2] = null);
(statearr_11004_11040[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 13))
{var inst_10945 = (state_10991[8]);var inst_10946 = (state_10991[9]);var inst_10944 = (state_10991[10]);var inst_10943 = (state_10991[12]);var inst_10953 = (state_10991[2]);var inst_10954 = (inst_10946 + 1);var tmp11000 = inst_10945;var tmp11001 = inst_10944;var tmp11002 = inst_10943;var inst_10943__$1 = tmp11002;var inst_10944__$1 = tmp11001;var inst_10945__$1 = tmp11000;var inst_10946__$1 = inst_10954;var state_10991__$1 = (function (){var statearr_11005 = state_10991;(statearr_11005[8] = inst_10945__$1);
(statearr_11005[9] = inst_10946__$1);
(statearr_11005[14] = inst_10953);
(statearr_11005[10] = inst_10944__$1);
(statearr_11005[12] = inst_10943__$1);
return statearr_11005;
})();var statearr_11006_11041 = state_10991__$1;(statearr_11006_11041[2] = null);
(statearr_11006_11041[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 22))
{var state_10991__$1 = state_10991;var statearr_11007_11042 = state_10991__$1;(statearr_11007_11042[2] = null);
(statearr_11007_11042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 6))
{var inst_10932 = (state_10991[13]);var inst_10941 = f.call(null,inst_10932);var inst_10942 = cljs.core.seq.call(null,inst_10941);var inst_10943 = inst_10942;var inst_10944 = null;var inst_10945 = 0;var inst_10946 = 0;var state_10991__$1 = (function (){var statearr_11008 = state_10991;(statearr_11008[8] = inst_10945);
(statearr_11008[9] = inst_10946);
(statearr_11008[10] = inst_10944);
(statearr_11008[12] = inst_10943);
return statearr_11008;
})();var statearr_11009_11043 = state_10991__$1;(statearr_11009_11043[2] = null);
(statearr_11009_11043[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 17))
{var inst_10957 = (state_10991[7]);var inst_10961 = cljs.core.chunk_first.call(null,inst_10957);var inst_10962 = cljs.core.chunk_rest.call(null,inst_10957);var inst_10963 = cljs.core.count.call(null,inst_10961);var inst_10943 = inst_10962;var inst_10944 = inst_10961;var inst_10945 = inst_10963;var inst_10946 = 0;var state_10991__$1 = (function (){var statearr_11010 = state_10991;(statearr_11010[8] = inst_10945);
(statearr_11010[9] = inst_10946);
(statearr_11010[10] = inst_10944);
(statearr_11010[12] = inst_10943);
return statearr_11010;
})();var statearr_11011_11044 = state_10991__$1;(statearr_11011_11044[2] = null);
(statearr_11011_11044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 3))
{var inst_10989 = (state_10991[2]);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10991__$1,inst_10989);
} else
{if((state_val_10992 === 12))
{var inst_10977 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_11012_11045 = state_10991__$1;(statearr_11012_11045[2] = inst_10977);
(statearr_11012_11045[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 2))
{var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10991__$1,4,in$);
} else
{if((state_val_10992 === 23))
{var inst_10985 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_11013_11046 = state_10991__$1;(statearr_11013_11046[2] = inst_10985);
(statearr_11013_11046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 19))
{var inst_10972 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_11014_11047 = state_10991__$1;(statearr_11014_11047[2] = inst_10972);
(statearr_11014_11047[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 11))
{var inst_10943 = (state_10991[12]);var inst_10957 = (state_10991[7]);var inst_10957__$1 = cljs.core.seq.call(null,inst_10943);var state_10991__$1 = (function (){var statearr_11015 = state_10991;(statearr_11015[7] = inst_10957__$1);
return statearr_11015;
})();if(inst_10957__$1)
{var statearr_11016_11048 = state_10991__$1;(statearr_11016_11048[1] = 14);
} else
{var statearr_11017_11049 = state_10991__$1;(statearr_11017_11049[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 9))
{var inst_10979 = (state_10991[2]);var inst_10980 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10991__$1 = (function (){var statearr_11018 = state_10991;(statearr_11018[15] = inst_10979);
return statearr_11018;
})();if(cljs.core.truth_(inst_10980))
{var statearr_11019_11050 = state_10991__$1;(statearr_11019_11050[1] = 21);
} else
{var statearr_11020_11051 = state_10991__$1;(statearr_11020_11051[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 5))
{var inst_10935 = cljs.core.async.close_BANG_.call(null,out);var state_10991__$1 = state_10991;var statearr_11021_11052 = state_10991__$1;(statearr_11021_11052[2] = inst_10935);
(statearr_11021_11052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 14))
{var inst_10957 = (state_10991[7]);var inst_10959 = cljs.core.chunked_seq_QMARK_.call(null,inst_10957);var state_10991__$1 = state_10991;if(inst_10959)
{var statearr_11022_11053 = state_10991__$1;(statearr_11022_11053[1] = 17);
} else
{var statearr_11023_11054 = state_10991__$1;(statearr_11023_11054[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 16))
{var inst_10975 = (state_10991[2]);var state_10991__$1 = state_10991;var statearr_11024_11055 = state_10991__$1;(statearr_11024_11055[2] = inst_10975);
(statearr_11024_11055[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10992 === 10))
{var inst_10946 = (state_10991[9]);var inst_10944 = (state_10991[10]);var inst_10951 = cljs.core._nth.call(null,inst_10944,inst_10946);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10991__$1,13,out,inst_10951);
} else
{if((state_val_10992 === 18))
{var inst_10957 = (state_10991[7]);var inst_10966 = cljs.core.first.call(null,inst_10957);var state_10991__$1 = state_10991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10991__$1,20,out,inst_10966);
} else
{if((state_val_10992 === 8))
{var inst_10945 = (state_10991[8]);var inst_10946 = (state_10991[9]);var inst_10948 = (inst_10946 < inst_10945);var inst_10949 = inst_10948;var state_10991__$1 = state_10991;if(cljs.core.truth_(inst_10949))
{var statearr_11025_11056 = state_10991__$1;(statearr_11025_11056[1] = 10);
} else
{var statearr_11026_11057 = state_10991__$1;(statearr_11026_11057[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11030[0] = state_machine__5624__auto__);
(statearr_11030[1] = 1);
return statearr_11030;
});
var state_machine__5624__auto____1 = (function (state_10991){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11031){if((e11031 instanceof Object))
{var ex__5627__auto__ = e11031;var statearr_11032_11058 = state_10991;(statearr_11032_11058[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11059 = state_10991;
state_10991 = G__11059;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11033 = f__5639__auto__.call(null);(statearr_11033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5638__auto___11154 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11154){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11154){
return (function (state_11130){var state_val_11131 = (state_11130[1]);if((state_val_11131 === 7))
{var inst_11126 = (state_11130[2]);var state_11130__$1 = state_11130;var statearr_11132_11155 = state_11130__$1;(statearr_11132_11155[2] = inst_11126);
(statearr_11132_11155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 1))
{var state_11130__$1 = state_11130;var statearr_11133_11156 = state_11130__$1;(statearr_11133_11156[2] = null);
(statearr_11133_11156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 4))
{var inst_11109 = (state_11130[7]);var inst_11109__$1 = (state_11130[2]);var inst_11110 = (inst_11109__$1 == null);var state_11130__$1 = (function (){var statearr_11134 = state_11130;(statearr_11134[7] = inst_11109__$1);
return statearr_11134;
})();if(cljs.core.truth_(inst_11110))
{var statearr_11135_11157 = state_11130__$1;(statearr_11135_11157[1] = 5);
} else
{var statearr_11136_11158 = state_11130__$1;(statearr_11136_11158[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 13))
{var state_11130__$1 = state_11130;var statearr_11137_11159 = state_11130__$1;(statearr_11137_11159[2] = null);
(statearr_11137_11159[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 6))
{var inst_11109 = (state_11130[7]);var state_11130__$1 = state_11130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11130__$1,11,to,inst_11109);
} else
{if((state_val_11131 === 3))
{var inst_11128 = (state_11130[2]);var state_11130__$1 = state_11130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11130__$1,inst_11128);
} else
{if((state_val_11131 === 12))
{var state_11130__$1 = state_11130;var statearr_11138_11160 = state_11130__$1;(statearr_11138_11160[2] = null);
(statearr_11138_11160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 2))
{var state_11130__$1 = state_11130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11130__$1,4,from);
} else
{if((state_val_11131 === 11))
{var inst_11119 = (state_11130[2]);var state_11130__$1 = state_11130;if(cljs.core.truth_(inst_11119))
{var statearr_11139_11161 = state_11130__$1;(statearr_11139_11161[1] = 12);
} else
{var statearr_11140_11162 = state_11130__$1;(statearr_11140_11162[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 9))
{var state_11130__$1 = state_11130;var statearr_11141_11163 = state_11130__$1;(statearr_11141_11163[2] = null);
(statearr_11141_11163[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 5))
{var state_11130__$1 = state_11130;if(cljs.core.truth_(close_QMARK_))
{var statearr_11142_11164 = state_11130__$1;(statearr_11142_11164[1] = 8);
} else
{var statearr_11143_11165 = state_11130__$1;(statearr_11143_11165[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 14))
{var inst_11124 = (state_11130[2]);var state_11130__$1 = state_11130;var statearr_11144_11166 = state_11130__$1;(statearr_11144_11166[2] = inst_11124);
(statearr_11144_11166[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 10))
{var inst_11116 = (state_11130[2]);var state_11130__$1 = state_11130;var statearr_11145_11167 = state_11130__$1;(statearr_11145_11167[2] = inst_11116);
(statearr_11145_11167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11131 === 8))
{var inst_11113 = cljs.core.async.close_BANG_.call(null,to);var state_11130__$1 = state_11130;var statearr_11146_11168 = state_11130__$1;(statearr_11146_11168[2] = inst_11113);
(statearr_11146_11168[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___11154))
;return ((function (switch__5623__auto__,c__5638__auto___11154){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11150 = [null,null,null,null,null,null,null,null];(statearr_11150[0] = state_machine__5624__auto__);
(statearr_11150[1] = 1);
return statearr_11150;
});
var state_machine__5624__auto____1 = (function (state_11130){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11130);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11151){if((e11151 instanceof Object))
{var ex__5627__auto__ = e11151;var statearr_11152_11169 = state_11130;(statearr_11152_11169[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11130);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11170 = state_11130;
state_11130 = G__11170;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11130){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11154))
})();var state__5640__auto__ = (function (){var statearr_11153 = f__5639__auto__.call(null);(statearr_11153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11154);
return statearr_11153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11154))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5638__auto___11271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11271,tc,fc){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11271,tc,fc){
return (function (state_11246){var state_val_11247 = (state_11246[1]);if((state_val_11247 === 7))
{var inst_11242 = (state_11246[2]);var state_11246__$1 = state_11246;var statearr_11248_11272 = state_11246__$1;(statearr_11248_11272[2] = inst_11242);
(statearr_11248_11272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 1))
{var state_11246__$1 = state_11246;var statearr_11249_11273 = state_11246__$1;(statearr_11249_11273[2] = null);
(statearr_11249_11273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 4))
{var inst_11223 = (state_11246[7]);var inst_11223__$1 = (state_11246[2]);var inst_11224 = (inst_11223__$1 == null);var state_11246__$1 = (function (){var statearr_11250 = state_11246;(statearr_11250[7] = inst_11223__$1);
return statearr_11250;
})();if(cljs.core.truth_(inst_11224))
{var statearr_11251_11274 = state_11246__$1;(statearr_11251_11274[1] = 5);
} else
{var statearr_11252_11275 = state_11246__$1;(statearr_11252_11275[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 13))
{var state_11246__$1 = state_11246;var statearr_11253_11276 = state_11246__$1;(statearr_11253_11276[2] = null);
(statearr_11253_11276[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 6))
{var inst_11223 = (state_11246[7]);var inst_11229 = p.call(null,inst_11223);var state_11246__$1 = state_11246;if(cljs.core.truth_(inst_11229))
{var statearr_11254_11277 = state_11246__$1;(statearr_11254_11277[1] = 9);
} else
{var statearr_11255_11278 = state_11246__$1;(statearr_11255_11278[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 3))
{var inst_11244 = (state_11246[2]);var state_11246__$1 = state_11246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11246__$1,inst_11244);
} else
{if((state_val_11247 === 12))
{var state_11246__$1 = state_11246;var statearr_11256_11279 = state_11246__$1;(statearr_11256_11279[2] = null);
(statearr_11256_11279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 2))
{var state_11246__$1 = state_11246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11246__$1,4,ch);
} else
{if((state_val_11247 === 11))
{var inst_11223 = (state_11246[7]);var inst_11233 = (state_11246[2]);var state_11246__$1 = state_11246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11246__$1,8,inst_11233,inst_11223);
} else
{if((state_val_11247 === 9))
{var state_11246__$1 = state_11246;var statearr_11257_11280 = state_11246__$1;(statearr_11257_11280[2] = tc);
(statearr_11257_11280[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 5))
{var inst_11226 = cljs.core.async.close_BANG_.call(null,tc);var inst_11227 = cljs.core.async.close_BANG_.call(null,fc);var state_11246__$1 = (function (){var statearr_11258 = state_11246;(statearr_11258[8] = inst_11226);
return statearr_11258;
})();var statearr_11259_11281 = state_11246__$1;(statearr_11259_11281[2] = inst_11227);
(statearr_11259_11281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 14))
{var inst_11240 = (state_11246[2]);var state_11246__$1 = state_11246;var statearr_11260_11282 = state_11246__$1;(statearr_11260_11282[2] = inst_11240);
(statearr_11260_11282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 10))
{var state_11246__$1 = state_11246;var statearr_11261_11283 = state_11246__$1;(statearr_11261_11283[2] = fc);
(statearr_11261_11283[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11247 === 8))
{var inst_11235 = (state_11246[2]);var state_11246__$1 = state_11246;if(cljs.core.truth_(inst_11235))
{var statearr_11262_11284 = state_11246__$1;(statearr_11262_11284[1] = 12);
} else
{var statearr_11263_11285 = state_11246__$1;(statearr_11263_11285[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___11271,tc,fc))
;return ((function (switch__5623__auto__,c__5638__auto___11271,tc,fc){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11267 = [null,null,null,null,null,null,null,null,null];(statearr_11267[0] = state_machine__5624__auto__);
(statearr_11267[1] = 1);
return statearr_11267;
});
var state_machine__5624__auto____1 = (function (state_11246){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11268){if((e11268 instanceof Object))
{var ex__5627__auto__ = e11268;var statearr_11269_11286 = state_11246;(statearr_11269_11286[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11287 = state_11246;
state_11246 = G__11287;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11246){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11271,tc,fc))
})();var state__5640__auto__ = (function (){var statearr_11270 = f__5639__auto__.call(null);(statearr_11270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11271);
return statearr_11270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11271,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_11334){var state_val_11335 = (state_11334[1]);if((state_val_11335 === 7))
{var inst_11330 = (state_11334[2]);var state_11334__$1 = state_11334;var statearr_11336_11352 = state_11334__$1;(statearr_11336_11352[2] = inst_11330);
(statearr_11336_11352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 6))
{var inst_11323 = (state_11334[7]);var inst_11320 = (state_11334[8]);var inst_11327 = f.call(null,inst_11320,inst_11323);var inst_11320__$1 = inst_11327;var state_11334__$1 = (function (){var statearr_11337 = state_11334;(statearr_11337[8] = inst_11320__$1);
return statearr_11337;
})();var statearr_11338_11353 = state_11334__$1;(statearr_11338_11353[2] = null);
(statearr_11338_11353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 5))
{var inst_11320 = (state_11334[8]);var state_11334__$1 = state_11334;var statearr_11339_11354 = state_11334__$1;(statearr_11339_11354[2] = inst_11320);
(statearr_11339_11354[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 4))
{var inst_11323 = (state_11334[7]);var inst_11323__$1 = (state_11334[2]);var inst_11324 = (inst_11323__$1 == null);var state_11334__$1 = (function (){var statearr_11340 = state_11334;(statearr_11340[7] = inst_11323__$1);
return statearr_11340;
})();if(cljs.core.truth_(inst_11324))
{var statearr_11341_11355 = state_11334__$1;(statearr_11341_11355[1] = 5);
} else
{var statearr_11342_11356 = state_11334__$1;(statearr_11342_11356[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11335 === 3))
{var inst_11332 = (state_11334[2]);var state_11334__$1 = state_11334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11334__$1,inst_11332);
} else
{if((state_val_11335 === 2))
{var state_11334__$1 = state_11334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11334__$1,4,ch);
} else
{if((state_val_11335 === 1))
{var inst_11320 = init;var state_11334__$1 = (function (){var statearr_11343 = state_11334;(statearr_11343[8] = inst_11320);
return statearr_11343;
})();var statearr_11344_11357 = state_11334__$1;(statearr_11344_11357[2] = null);
(statearr_11344_11357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11348 = [null,null,null,null,null,null,null,null,null];(statearr_11348[0] = state_machine__5624__auto__);
(statearr_11348[1] = 1);
return statearr_11348;
});
var state_machine__5624__auto____1 = (function (state_11334){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11334);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object))
{var ex__5627__auto__ = e11349;var statearr_11350_11358 = state_11334;(statearr_11350_11358[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11359 = state_11334;
state_11334 = G__11359;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11334){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11351 = f__5639__auto__.call(null);(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_11433){var state_val_11434 = (state_11433[1]);if((state_val_11434 === 7))
{var inst_11415 = (state_11433[2]);var state_11433__$1 = state_11433;var statearr_11435_11458 = state_11433__$1;(statearr_11435_11458[2] = inst_11415);
(statearr_11435_11458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 1))
{var inst_11409 = cljs.core.seq.call(null,coll);var inst_11410 = inst_11409;var state_11433__$1 = (function (){var statearr_11436 = state_11433;(statearr_11436[7] = inst_11410);
return statearr_11436;
})();var statearr_11437_11459 = state_11433__$1;(statearr_11437_11459[2] = null);
(statearr_11437_11459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 4))
{var inst_11410 = (state_11433[7]);var inst_11413 = cljs.core.first.call(null,inst_11410);var state_11433__$1 = state_11433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11433__$1,7,ch,inst_11413);
} else
{if((state_val_11434 === 13))
{var inst_11427 = (state_11433[2]);var state_11433__$1 = state_11433;var statearr_11438_11460 = state_11433__$1;(statearr_11438_11460[2] = inst_11427);
(statearr_11438_11460[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 6))
{var inst_11418 = (state_11433[2]);var state_11433__$1 = state_11433;if(cljs.core.truth_(inst_11418))
{var statearr_11439_11461 = state_11433__$1;(statearr_11439_11461[1] = 8);
} else
{var statearr_11440_11462 = state_11433__$1;(statearr_11440_11462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 3))
{var inst_11431 = (state_11433[2]);var state_11433__$1 = state_11433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11433__$1,inst_11431);
} else
{if((state_val_11434 === 12))
{var state_11433__$1 = state_11433;var statearr_11441_11463 = state_11433__$1;(statearr_11441_11463[2] = null);
(statearr_11441_11463[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 2))
{var inst_11410 = (state_11433[7]);var state_11433__$1 = state_11433;if(cljs.core.truth_(inst_11410))
{var statearr_11442_11464 = state_11433__$1;(statearr_11442_11464[1] = 4);
} else
{var statearr_11443_11465 = state_11433__$1;(statearr_11443_11465[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 11))
{var inst_11424 = cljs.core.async.close_BANG_.call(null,ch);var state_11433__$1 = state_11433;var statearr_11444_11466 = state_11433__$1;(statearr_11444_11466[2] = inst_11424);
(statearr_11444_11466[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 9))
{var state_11433__$1 = state_11433;if(cljs.core.truth_(close_QMARK_))
{var statearr_11445_11467 = state_11433__$1;(statearr_11445_11467[1] = 11);
} else
{var statearr_11446_11468 = state_11433__$1;(statearr_11446_11468[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 5))
{var inst_11410 = (state_11433[7]);var state_11433__$1 = state_11433;var statearr_11447_11469 = state_11433__$1;(statearr_11447_11469[2] = inst_11410);
(statearr_11447_11469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 10))
{var inst_11429 = (state_11433[2]);var state_11433__$1 = state_11433;var statearr_11448_11470 = state_11433__$1;(statearr_11448_11470[2] = inst_11429);
(statearr_11448_11470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11434 === 8))
{var inst_11410 = (state_11433[7]);var inst_11420 = cljs.core.next.call(null,inst_11410);var inst_11410__$1 = inst_11420;var state_11433__$1 = (function (){var statearr_11449 = state_11433;(statearr_11449[7] = inst_11410__$1);
return statearr_11449;
})();var statearr_11450_11471 = state_11433__$1;(statearr_11450_11471[2] = null);
(statearr_11450_11471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11454 = [null,null,null,null,null,null,null,null];(statearr_11454[0] = state_machine__5624__auto__);
(statearr_11454[1] = 1);
return statearr_11454;
});
var state_machine__5624__auto____1 = (function (state_11433){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11455){if((e11455 instanceof Object))
{var ex__5627__auto__ = e11455;var statearr_11456_11472 = state_11433;(statearr_11456_11472[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11473 = state_11433;
state_11433 = G__11473;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11433){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11457 = f__5639__auto__.call(null);(statearr_11457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11475 = {};return obj11475;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11477 = {};return obj11477;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11699 = (function (cs,ch,mult,meta11700){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11700 = meta11700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11699.cljs$lang$type = true;
cljs.core.async.t11699.cljs$lang$ctorStr = "cljs.core.async/t11699";
cljs.core.async.t11699.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11699");
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11699.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11701){var self__ = this;
var _11701__$1 = this;return self__.meta11700;
});})(cs))
;
cljs.core.async.t11699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11701,meta11700__$1){var self__ = this;
var _11701__$1 = this;return (new cljs.core.async.t11699(self__.cs,self__.ch,self__.mult,meta11700__$1));
});})(cs))
;
cljs.core.async.__GT_t11699 = ((function (cs){
return (function __GT_t11699(cs__$1,ch__$1,mult__$1,meta11700){return (new cljs.core.async.t11699(cs__$1,ch__$1,mult__$1,meta11700));
});})(cs))
;
}
return (new cljs.core.async.t11699(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5638__auto___11920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11920,cs,m,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11920,cs,m,dchan,dctr,done){
return (function (state_11832){var state_val_11833 = (state_11832[1]);if((state_val_11833 === 7))
{var inst_11828 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11834_11921 = state_11832__$1;(statearr_11834_11921[2] = inst_11828);
(statearr_11834_11921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 20))
{var inst_11733 = (state_11832[7]);var inst_11743 = cljs.core.first.call(null,inst_11733);var inst_11744 = cljs.core.nth.call(null,inst_11743,0,null);var inst_11745 = cljs.core.nth.call(null,inst_11743,1,null);var state_11832__$1 = (function (){var statearr_11835 = state_11832;(statearr_11835[8] = inst_11744);
return statearr_11835;
})();if(cljs.core.truth_(inst_11745))
{var statearr_11836_11922 = state_11832__$1;(statearr_11836_11922[1] = 22);
} else
{var statearr_11837_11923 = state_11832__$1;(statearr_11837_11923[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 27))
{var inst_11775 = (state_11832[9]);var inst_11773 = (state_11832[10]);var inst_11704 = (state_11832[11]);var inst_11780 = (state_11832[12]);var inst_11780__$1 = cljs.core._nth.call(null,inst_11773,inst_11775);var inst_11781 = cljs.core.async.put_BANG_.call(null,inst_11780__$1,inst_11704,done);var state_11832__$1 = (function (){var statearr_11838 = state_11832;(statearr_11838[12] = inst_11780__$1);
return statearr_11838;
})();if(cljs.core.truth_(inst_11781))
{var statearr_11839_11924 = state_11832__$1;(statearr_11839_11924[1] = 30);
} else
{var statearr_11840_11925 = state_11832__$1;(statearr_11840_11925[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 1))
{var state_11832__$1 = state_11832;var statearr_11841_11926 = state_11832__$1;(statearr_11841_11926[2] = null);
(statearr_11841_11926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 24))
{var inst_11733 = (state_11832[7]);var inst_11750 = (state_11832[2]);var inst_11751 = cljs.core.next.call(null,inst_11733);var inst_11713 = inst_11751;var inst_11714 = null;var inst_11715 = 0;var inst_11716 = 0;var state_11832__$1 = (function (){var statearr_11842 = state_11832;(statearr_11842[13] = inst_11713);
(statearr_11842[14] = inst_11714);
(statearr_11842[15] = inst_11750);
(statearr_11842[16] = inst_11716);
(statearr_11842[17] = inst_11715);
return statearr_11842;
})();var statearr_11843_11927 = state_11832__$1;(statearr_11843_11927[2] = null);
(statearr_11843_11927[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 39))
{var state_11832__$1 = state_11832;var statearr_11847_11928 = state_11832__$1;(statearr_11847_11928[2] = null);
(statearr_11847_11928[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 4))
{var inst_11704 = (state_11832[11]);var inst_11704__$1 = (state_11832[2]);var inst_11705 = (inst_11704__$1 == null);var state_11832__$1 = (function (){var statearr_11848 = state_11832;(statearr_11848[11] = inst_11704__$1);
return statearr_11848;
})();if(cljs.core.truth_(inst_11705))
{var statearr_11849_11929 = state_11832__$1;(statearr_11849_11929[1] = 5);
} else
{var statearr_11850_11930 = state_11832__$1;(statearr_11850_11930[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 15))
{var inst_11713 = (state_11832[13]);var inst_11714 = (state_11832[14]);var inst_11716 = (state_11832[16]);var inst_11715 = (state_11832[17]);var inst_11729 = (state_11832[2]);var inst_11730 = (inst_11716 + 1);var tmp11844 = inst_11713;var tmp11845 = inst_11714;var tmp11846 = inst_11715;var inst_11713__$1 = tmp11844;var inst_11714__$1 = tmp11845;var inst_11715__$1 = tmp11846;var inst_11716__$1 = inst_11730;var state_11832__$1 = (function (){var statearr_11851 = state_11832;(statearr_11851[13] = inst_11713__$1);
(statearr_11851[14] = inst_11714__$1);
(statearr_11851[18] = inst_11729);
(statearr_11851[16] = inst_11716__$1);
(statearr_11851[17] = inst_11715__$1);
return statearr_11851;
})();var statearr_11852_11931 = state_11832__$1;(statearr_11852_11931[2] = null);
(statearr_11852_11931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 21))
{var inst_11754 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11856_11932 = state_11832__$1;(statearr_11856_11932[2] = inst_11754);
(statearr_11856_11932[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 31))
{var inst_11780 = (state_11832[12]);var inst_11784 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11785 = cljs.core.async.untap_STAR_.call(null,m,inst_11780);var state_11832__$1 = (function (){var statearr_11857 = state_11832;(statearr_11857[19] = inst_11784);
return statearr_11857;
})();var statearr_11858_11933 = state_11832__$1;(statearr_11858_11933[2] = inst_11785);
(statearr_11858_11933[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 32))
{var inst_11775 = (state_11832[9]);var inst_11773 = (state_11832[10]);var inst_11772 = (state_11832[20]);var inst_11774 = (state_11832[21]);var inst_11787 = (state_11832[2]);var inst_11788 = (inst_11775 + 1);var tmp11853 = inst_11773;var tmp11854 = inst_11772;var tmp11855 = inst_11774;var inst_11772__$1 = tmp11854;var inst_11773__$1 = tmp11853;var inst_11774__$1 = tmp11855;var inst_11775__$1 = inst_11788;var state_11832__$1 = (function (){var statearr_11859 = state_11832;(statearr_11859[9] = inst_11775__$1);
(statearr_11859[10] = inst_11773__$1);
(statearr_11859[20] = inst_11772__$1);
(statearr_11859[22] = inst_11787);
(statearr_11859[21] = inst_11774__$1);
return statearr_11859;
})();var statearr_11860_11934 = state_11832__$1;(statearr_11860_11934[2] = null);
(statearr_11860_11934[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 40))
{var inst_11800 = (state_11832[23]);var inst_11804 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11805 = cljs.core.async.untap_STAR_.call(null,m,inst_11800);var state_11832__$1 = (function (){var statearr_11861 = state_11832;(statearr_11861[24] = inst_11804);
return statearr_11861;
})();var statearr_11862_11935 = state_11832__$1;(statearr_11862_11935[2] = inst_11805);
(statearr_11862_11935[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 33))
{var inst_11791 = (state_11832[25]);var inst_11793 = cljs.core.chunked_seq_QMARK_.call(null,inst_11791);var state_11832__$1 = state_11832;if(inst_11793)
{var statearr_11863_11936 = state_11832__$1;(statearr_11863_11936[1] = 36);
} else
{var statearr_11864_11937 = state_11832__$1;(statearr_11864_11937[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 13))
{var inst_11723 = (state_11832[26]);var inst_11726 = cljs.core.async.close_BANG_.call(null,inst_11723);var state_11832__$1 = state_11832;var statearr_11865_11938 = state_11832__$1;(statearr_11865_11938[2] = inst_11726);
(statearr_11865_11938[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 22))
{var inst_11744 = (state_11832[8]);var inst_11747 = cljs.core.async.close_BANG_.call(null,inst_11744);var state_11832__$1 = state_11832;var statearr_11866_11939 = state_11832__$1;(statearr_11866_11939[2] = inst_11747);
(statearr_11866_11939[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 36))
{var inst_11791 = (state_11832[25]);var inst_11795 = cljs.core.chunk_first.call(null,inst_11791);var inst_11796 = cljs.core.chunk_rest.call(null,inst_11791);var inst_11797 = cljs.core.count.call(null,inst_11795);var inst_11772 = inst_11796;var inst_11773 = inst_11795;var inst_11774 = inst_11797;var inst_11775 = 0;var state_11832__$1 = (function (){var statearr_11867 = state_11832;(statearr_11867[9] = inst_11775);
(statearr_11867[10] = inst_11773);
(statearr_11867[20] = inst_11772);
(statearr_11867[21] = inst_11774);
return statearr_11867;
})();var statearr_11868_11940 = state_11832__$1;(statearr_11868_11940[2] = null);
(statearr_11868_11940[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 41))
{var inst_11791 = (state_11832[25]);var inst_11807 = (state_11832[2]);var inst_11808 = cljs.core.next.call(null,inst_11791);var inst_11772 = inst_11808;var inst_11773 = null;var inst_11774 = 0;var inst_11775 = 0;var state_11832__$1 = (function (){var statearr_11869 = state_11832;(statearr_11869[9] = inst_11775);
(statearr_11869[10] = inst_11773);
(statearr_11869[20] = inst_11772);
(statearr_11869[21] = inst_11774);
(statearr_11869[27] = inst_11807);
return statearr_11869;
})();var statearr_11870_11941 = state_11832__$1;(statearr_11870_11941[2] = null);
(statearr_11870_11941[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 43))
{var state_11832__$1 = state_11832;var statearr_11871_11942 = state_11832__$1;(statearr_11871_11942[2] = null);
(statearr_11871_11942[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 29))
{var inst_11816 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11872_11943 = state_11832__$1;(statearr_11872_11943[2] = inst_11816);
(statearr_11872_11943[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 44))
{var inst_11825 = (state_11832[2]);var state_11832__$1 = (function (){var statearr_11873 = state_11832;(statearr_11873[28] = inst_11825);
return statearr_11873;
})();var statearr_11874_11944 = state_11832__$1;(statearr_11874_11944[2] = null);
(statearr_11874_11944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 6))
{var inst_11764 = (state_11832[29]);var inst_11763 = cljs.core.deref.call(null,cs);var inst_11764__$1 = cljs.core.keys.call(null,inst_11763);var inst_11765 = cljs.core.count.call(null,inst_11764__$1);var inst_11766 = cljs.core.reset_BANG_.call(null,dctr,inst_11765);var inst_11771 = cljs.core.seq.call(null,inst_11764__$1);var inst_11772 = inst_11771;var inst_11773 = null;var inst_11774 = 0;var inst_11775 = 0;var state_11832__$1 = (function (){var statearr_11875 = state_11832;(statearr_11875[9] = inst_11775);
(statearr_11875[10] = inst_11773);
(statearr_11875[20] = inst_11772);
(statearr_11875[21] = inst_11774);
(statearr_11875[29] = inst_11764__$1);
(statearr_11875[30] = inst_11766);
return statearr_11875;
})();var statearr_11876_11945 = state_11832__$1;(statearr_11876_11945[2] = null);
(statearr_11876_11945[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 28))
{var inst_11791 = (state_11832[25]);var inst_11772 = (state_11832[20]);var inst_11791__$1 = cljs.core.seq.call(null,inst_11772);var state_11832__$1 = (function (){var statearr_11877 = state_11832;(statearr_11877[25] = inst_11791__$1);
return statearr_11877;
})();if(inst_11791__$1)
{var statearr_11878_11946 = state_11832__$1;(statearr_11878_11946[1] = 33);
} else
{var statearr_11879_11947 = state_11832__$1;(statearr_11879_11947[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 25))
{var inst_11775 = (state_11832[9]);var inst_11774 = (state_11832[21]);var inst_11777 = (inst_11775 < inst_11774);var inst_11778 = inst_11777;var state_11832__$1 = state_11832;if(cljs.core.truth_(inst_11778))
{var statearr_11880_11948 = state_11832__$1;(statearr_11880_11948[1] = 27);
} else
{var statearr_11881_11949 = state_11832__$1;(statearr_11881_11949[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 34))
{var state_11832__$1 = state_11832;var statearr_11882_11950 = state_11832__$1;(statearr_11882_11950[2] = null);
(statearr_11882_11950[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 17))
{var state_11832__$1 = state_11832;var statearr_11883_11951 = state_11832__$1;(statearr_11883_11951[2] = null);
(statearr_11883_11951[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 3))
{var inst_11830 = (state_11832[2]);var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11832__$1,inst_11830);
} else
{if((state_val_11833 === 12))
{var inst_11759 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11884_11952 = state_11832__$1;(statearr_11884_11952[2] = inst_11759);
(statearr_11884_11952[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 2))
{var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,4,ch);
} else
{if((state_val_11833 === 23))
{var state_11832__$1 = state_11832;var statearr_11885_11953 = state_11832__$1;(statearr_11885_11953[2] = null);
(statearr_11885_11953[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 35))
{var inst_11814 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11886_11954 = state_11832__$1;(statearr_11886_11954[2] = inst_11814);
(statearr_11886_11954[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 19))
{var inst_11733 = (state_11832[7]);var inst_11737 = cljs.core.chunk_first.call(null,inst_11733);var inst_11738 = cljs.core.chunk_rest.call(null,inst_11733);var inst_11739 = cljs.core.count.call(null,inst_11737);var inst_11713 = inst_11738;var inst_11714 = inst_11737;var inst_11715 = inst_11739;var inst_11716 = 0;var state_11832__$1 = (function (){var statearr_11887 = state_11832;(statearr_11887[13] = inst_11713);
(statearr_11887[14] = inst_11714);
(statearr_11887[16] = inst_11716);
(statearr_11887[17] = inst_11715);
return statearr_11887;
})();var statearr_11888_11955 = state_11832__$1;(statearr_11888_11955[2] = null);
(statearr_11888_11955[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 11))
{var inst_11713 = (state_11832[13]);var inst_11733 = (state_11832[7]);var inst_11733__$1 = cljs.core.seq.call(null,inst_11713);var state_11832__$1 = (function (){var statearr_11889 = state_11832;(statearr_11889[7] = inst_11733__$1);
return statearr_11889;
})();if(inst_11733__$1)
{var statearr_11890_11956 = state_11832__$1;(statearr_11890_11956[1] = 16);
} else
{var statearr_11891_11957 = state_11832__$1;(statearr_11891_11957[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 9))
{var inst_11761 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11892_11958 = state_11832__$1;(statearr_11892_11958[2] = inst_11761);
(statearr_11892_11958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 5))
{var inst_11711 = cljs.core.deref.call(null,cs);var inst_11712 = cljs.core.seq.call(null,inst_11711);var inst_11713 = inst_11712;var inst_11714 = null;var inst_11715 = 0;var inst_11716 = 0;var state_11832__$1 = (function (){var statearr_11893 = state_11832;(statearr_11893[13] = inst_11713);
(statearr_11893[14] = inst_11714);
(statearr_11893[16] = inst_11716);
(statearr_11893[17] = inst_11715);
return statearr_11893;
})();var statearr_11894_11959 = state_11832__$1;(statearr_11894_11959[2] = null);
(statearr_11894_11959[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 14))
{var state_11832__$1 = state_11832;var statearr_11895_11960 = state_11832__$1;(statearr_11895_11960[2] = null);
(statearr_11895_11960[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 45))
{var inst_11822 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11896_11961 = state_11832__$1;(statearr_11896_11961[2] = inst_11822);
(statearr_11896_11961[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 26))
{var inst_11764 = (state_11832[29]);var inst_11818 = (state_11832[2]);var inst_11819 = cljs.core.seq.call(null,inst_11764);var state_11832__$1 = (function (){var statearr_11897 = state_11832;(statearr_11897[31] = inst_11818);
return statearr_11897;
})();if(inst_11819)
{var statearr_11898_11962 = state_11832__$1;(statearr_11898_11962[1] = 42);
} else
{var statearr_11899_11963 = state_11832__$1;(statearr_11899_11963[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 16))
{var inst_11733 = (state_11832[7]);var inst_11735 = cljs.core.chunked_seq_QMARK_.call(null,inst_11733);var state_11832__$1 = state_11832;if(inst_11735)
{var statearr_11900_11964 = state_11832__$1;(statearr_11900_11964[1] = 19);
} else
{var statearr_11901_11965 = state_11832__$1;(statearr_11901_11965[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 38))
{var inst_11811 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11902_11966 = state_11832__$1;(statearr_11902_11966[2] = inst_11811);
(statearr_11902_11966[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 30))
{var state_11832__$1 = state_11832;var statearr_11903_11967 = state_11832__$1;(statearr_11903_11967[2] = null);
(statearr_11903_11967[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 10))
{var inst_11714 = (state_11832[14]);var inst_11716 = (state_11832[16]);var inst_11722 = cljs.core._nth.call(null,inst_11714,inst_11716);var inst_11723 = cljs.core.nth.call(null,inst_11722,0,null);var inst_11724 = cljs.core.nth.call(null,inst_11722,1,null);var state_11832__$1 = (function (){var statearr_11904 = state_11832;(statearr_11904[26] = inst_11723);
return statearr_11904;
})();if(cljs.core.truth_(inst_11724))
{var statearr_11905_11968 = state_11832__$1;(statearr_11905_11968[1] = 13);
} else
{var statearr_11906_11969 = state_11832__$1;(statearr_11906_11969[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 18))
{var inst_11757 = (state_11832[2]);var state_11832__$1 = state_11832;var statearr_11907_11970 = state_11832__$1;(statearr_11907_11970[2] = inst_11757);
(statearr_11907_11970[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 42))
{var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,45,dchan);
} else
{if((state_val_11833 === 37))
{var inst_11791 = (state_11832[25]);var inst_11704 = (state_11832[11]);var inst_11800 = (state_11832[23]);var inst_11800__$1 = cljs.core.first.call(null,inst_11791);var inst_11801 = cljs.core.async.put_BANG_.call(null,inst_11800__$1,inst_11704,done);var state_11832__$1 = (function (){var statearr_11908 = state_11832;(statearr_11908[23] = inst_11800__$1);
return statearr_11908;
})();if(cljs.core.truth_(inst_11801))
{var statearr_11909_11971 = state_11832__$1;(statearr_11909_11971[1] = 39);
} else
{var statearr_11910_11972 = state_11832__$1;(statearr_11910_11972[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11833 === 8))
{var inst_11716 = (state_11832[16]);var inst_11715 = (state_11832[17]);var inst_11718 = (inst_11716 < inst_11715);var inst_11719 = inst_11718;var state_11832__$1 = state_11832;if(cljs.core.truth_(inst_11719))
{var statearr_11911_11973 = state_11832__$1;(statearr_11911_11973[1] = 10);
} else
{var statearr_11912_11974 = state_11832__$1;(statearr_11912_11974[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___11920,cs,m,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___11920,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11916[0] = state_machine__5624__auto__);
(statearr_11916[1] = 1);
return statearr_11916;
});
var state_machine__5624__auto____1 = (function (state_11832){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11917){if((e11917 instanceof Object))
{var ex__5627__auto__ = e11917;var statearr_11918_11975 = state_11832;(statearr_11918_11975[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11976 = state_11832;
state_11832 = G__11976;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11832){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11920,cs,m,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_11919 = f__5639__auto__.call(null);(statearr_11919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11920);
return statearr_11919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11920,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11978 = {};return obj11978;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12098 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12099){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12099 = meta12099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12098.cljs$lang$type = true;
cljs.core.async.t12098.cljs$lang$ctorStr = "cljs.core.async/t12098";
cljs.core.async.t12098.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12098");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12100){var self__ = this;
var _12100__$1 = this;return self__.meta12099;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12100,meta12099__$1){var self__ = this;
var _12100__$1 = this;return (new cljs.core.async.t12098(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12099__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12098 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12098(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12099){return (new cljs.core.async.t12098(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12099));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12098(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5638__auto___12217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12170){var state_val_12171 = (state_12170[1]);if((state_val_12171 === 7))
{var inst_12114 = (state_12170[7]);var inst_12119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12114);var state_12170__$1 = state_12170;var statearr_12172_12218 = state_12170__$1;(statearr_12172_12218[2] = inst_12119);
(statearr_12172_12218[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 20))
{var inst_12129 = (state_12170[8]);var state_12170__$1 = state_12170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12170__$1,23,out,inst_12129);
} else
{if((state_val_12171 === 1))
{var inst_12104 = (state_12170[9]);var inst_12104__$1 = calc_state.call(null);var inst_12105 = cljs.core.seq_QMARK_.call(null,inst_12104__$1);var state_12170__$1 = (function (){var statearr_12173 = state_12170;(statearr_12173[9] = inst_12104__$1);
return statearr_12173;
})();if(inst_12105)
{var statearr_12174_12219 = state_12170__$1;(statearr_12174_12219[1] = 2);
} else
{var statearr_12175_12220 = state_12170__$1;(statearr_12175_12220[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 24))
{var inst_12122 = (state_12170[10]);var inst_12114 = inst_12122;var state_12170__$1 = (function (){var statearr_12176 = state_12170;(statearr_12176[7] = inst_12114);
return statearr_12176;
})();var statearr_12177_12221 = state_12170__$1;(statearr_12177_12221[2] = null);
(statearr_12177_12221[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 4))
{var inst_12104 = (state_12170[9]);var inst_12110 = (state_12170[2]);var inst_12111 = cljs.core.get.call(null,inst_12110,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12112 = cljs.core.get.call(null,inst_12110,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12113 = cljs.core.get.call(null,inst_12110,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12114 = inst_12104;var state_12170__$1 = (function (){var statearr_12178 = state_12170;(statearr_12178[11] = inst_12111);
(statearr_12178[7] = inst_12114);
(statearr_12178[12] = inst_12112);
(statearr_12178[13] = inst_12113);
return statearr_12178;
})();var statearr_12179_12222 = state_12170__$1;(statearr_12179_12222[2] = null);
(statearr_12179_12222[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 15))
{var state_12170__$1 = state_12170;var statearr_12180_12223 = state_12170__$1;(statearr_12180_12223[2] = null);
(statearr_12180_12223[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 21))
{var inst_12122 = (state_12170[10]);var inst_12114 = inst_12122;var state_12170__$1 = (function (){var statearr_12181 = state_12170;(statearr_12181[7] = inst_12114);
return statearr_12181;
})();var statearr_12182_12224 = state_12170__$1;(statearr_12182_12224[2] = null);
(statearr_12182_12224[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 13))
{var inst_12166 = (state_12170[2]);var state_12170__$1 = state_12170;var statearr_12183_12225 = state_12170__$1;(statearr_12183_12225[2] = inst_12166);
(statearr_12183_12225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 22))
{var inst_12164 = (state_12170[2]);var state_12170__$1 = state_12170;var statearr_12184_12226 = state_12170__$1;(statearr_12184_12226[2] = inst_12164);
(statearr_12184_12226[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 6))
{var inst_12168 = (state_12170[2]);var state_12170__$1 = state_12170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12170__$1,inst_12168);
} else
{if((state_val_12171 === 25))
{var state_12170__$1 = state_12170;var statearr_12185_12227 = state_12170__$1;(statearr_12185_12227[2] = null);
(statearr_12185_12227[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 17))
{var inst_12144 = (state_12170[14]);var state_12170__$1 = state_12170;var statearr_12186_12228 = state_12170__$1;(statearr_12186_12228[2] = inst_12144);
(statearr_12186_12228[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 3))
{var inst_12104 = (state_12170[9]);var state_12170__$1 = state_12170;var statearr_12187_12229 = state_12170__$1;(statearr_12187_12229[2] = inst_12104);
(statearr_12187_12229[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 12))
{var inst_12125 = (state_12170[15]);var inst_12130 = (state_12170[16]);var inst_12144 = (state_12170[14]);var inst_12144__$1 = inst_12125.call(null,inst_12130);var state_12170__$1 = (function (){var statearr_12188 = state_12170;(statearr_12188[14] = inst_12144__$1);
return statearr_12188;
})();if(cljs.core.truth_(inst_12144__$1))
{var statearr_12189_12230 = state_12170__$1;(statearr_12189_12230[1] = 17);
} else
{var statearr_12190_12231 = state_12170__$1;(statearr_12190_12231[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 2))
{var inst_12104 = (state_12170[9]);var inst_12107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12104);var state_12170__$1 = state_12170;var statearr_12191_12232 = state_12170__$1;(statearr_12191_12232[2] = inst_12107);
(statearr_12191_12232[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 23))
{var inst_12155 = (state_12170[2]);var state_12170__$1 = state_12170;if(cljs.core.truth_(inst_12155))
{var statearr_12192_12233 = state_12170__$1;(statearr_12192_12233[1] = 24);
} else
{var statearr_12193_12234 = state_12170__$1;(statearr_12193_12234[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 19))
{var inst_12152 = (state_12170[2]);var state_12170__$1 = state_12170;if(cljs.core.truth_(inst_12152))
{var statearr_12194_12235 = state_12170__$1;(statearr_12194_12235[1] = 20);
} else
{var statearr_12195_12236 = state_12170__$1;(statearr_12195_12236[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 11))
{var inst_12129 = (state_12170[8]);var inst_12135 = (inst_12129 == null);var state_12170__$1 = state_12170;if(cljs.core.truth_(inst_12135))
{var statearr_12196_12237 = state_12170__$1;(statearr_12196_12237[1] = 14);
} else
{var statearr_12197_12238 = state_12170__$1;(statearr_12197_12238[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 9))
{var inst_12122 = (state_12170[10]);var inst_12122__$1 = (state_12170[2]);var inst_12123 = cljs.core.get.call(null,inst_12122__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12124 = cljs.core.get.call(null,inst_12122__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12125 = cljs.core.get.call(null,inst_12122__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12170__$1 = (function (){var statearr_12198 = state_12170;(statearr_12198[10] = inst_12122__$1);
(statearr_12198[15] = inst_12125);
(statearr_12198[17] = inst_12124);
return statearr_12198;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12170__$1,10,inst_12123);
} else
{if((state_val_12171 === 5))
{var inst_12114 = (state_12170[7]);var inst_12117 = cljs.core.seq_QMARK_.call(null,inst_12114);var state_12170__$1 = state_12170;if(inst_12117)
{var statearr_12199_12239 = state_12170__$1;(statearr_12199_12239[1] = 7);
} else
{var statearr_12200_12240 = state_12170__$1;(statearr_12200_12240[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 14))
{var inst_12130 = (state_12170[16]);var inst_12137 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12130);var state_12170__$1 = state_12170;var statearr_12201_12241 = state_12170__$1;(statearr_12201_12241[2] = inst_12137);
(statearr_12201_12241[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 26))
{var inst_12160 = (state_12170[2]);var state_12170__$1 = state_12170;var statearr_12202_12242 = state_12170__$1;(statearr_12202_12242[2] = inst_12160);
(statearr_12202_12242[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 16))
{var inst_12140 = (state_12170[2]);var inst_12141 = calc_state.call(null);var inst_12114 = inst_12141;var state_12170__$1 = (function (){var statearr_12203 = state_12170;(statearr_12203[7] = inst_12114);
(statearr_12203[18] = inst_12140);
return statearr_12203;
})();var statearr_12204_12243 = state_12170__$1;(statearr_12204_12243[2] = null);
(statearr_12204_12243[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 10))
{var inst_12129 = (state_12170[8]);var inst_12130 = (state_12170[16]);var inst_12128 = (state_12170[2]);var inst_12129__$1 = cljs.core.nth.call(null,inst_12128,0,null);var inst_12130__$1 = cljs.core.nth.call(null,inst_12128,1,null);var inst_12131 = (inst_12129__$1 == null);var inst_12132 = cljs.core._EQ_.call(null,inst_12130__$1,change);var inst_12133 = (inst_12131) || (inst_12132);var state_12170__$1 = (function (){var statearr_12205 = state_12170;(statearr_12205[8] = inst_12129__$1);
(statearr_12205[16] = inst_12130__$1);
return statearr_12205;
})();if(cljs.core.truth_(inst_12133))
{var statearr_12206_12244 = state_12170__$1;(statearr_12206_12244[1] = 11);
} else
{var statearr_12207_12245 = state_12170__$1;(statearr_12207_12245[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 18))
{var inst_12125 = (state_12170[15]);var inst_12130 = (state_12170[16]);var inst_12124 = (state_12170[17]);var inst_12147 = cljs.core.empty_QMARK_.call(null,inst_12125);var inst_12148 = inst_12124.call(null,inst_12130);var inst_12149 = cljs.core.not.call(null,inst_12148);var inst_12150 = (inst_12147) && (inst_12149);var state_12170__$1 = state_12170;var statearr_12208_12246 = state_12170__$1;(statearr_12208_12246[2] = inst_12150);
(statearr_12208_12246[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12171 === 8))
{var inst_12114 = (state_12170[7]);var state_12170__$1 = state_12170;var statearr_12209_12247 = state_12170__$1;(statearr_12209_12247[2] = inst_12114);
(statearr_12209_12247[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5623__auto__,c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12213[0] = state_machine__5624__auto__);
(statearr_12213[1] = 1);
return statearr_12213;
});
var state_machine__5624__auto____1 = (function (state_12170){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12214){if((e12214 instanceof Object))
{var ex__5627__auto__ = e12214;var statearr_12215_12248 = state_12170;(statearr_12215_12248[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12249 = state_12170;
state_12170 = G__12249;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12170){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5640__auto__ = (function (){var statearr_12216 = f__5639__auto__.call(null);(statearr_12216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12217);
return statearr_12216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12217,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12251 = {};return obj12251;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3481__auto__,mults){
return (function (p1__12252_SHARP_){if(cljs.core.truth_(p1__12252_SHARP_.call(null,topic)))
{return p1__12252_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12252_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12375 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12376){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12376 = meta12376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12375.cljs$lang$type = true;
cljs.core.async.t12375.cljs$lang$ctorStr = "cljs.core.async/t12375";
cljs.core.async.t12375.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12375");
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12377){var self__ = this;
var _12377__$1 = this;return self__.meta12376;
});})(mults,ensure_mult))
;
cljs.core.async.t12375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12377,meta12376__$1){var self__ = this;
var _12377__$1 = this;return (new cljs.core.async.t12375(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12376__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12375 = ((function (mults,ensure_mult){
return (function __GT_t12375(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12376){return (new cljs.core.async.t12375(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12376));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12375(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5638__auto___12497 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12497,mults,ensure_mult,p){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12497,mults,ensure_mult,p){
return (function (state_12449){var state_val_12450 = (state_12449[1]);if((state_val_12450 === 7))
{var inst_12445 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12451_12498 = state_12449__$1;(statearr_12451_12498[2] = inst_12445);
(statearr_12451_12498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 20))
{var state_12449__$1 = state_12449;var statearr_12452_12499 = state_12449__$1;(statearr_12452_12499[2] = null);
(statearr_12452_12499[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 1))
{var state_12449__$1 = state_12449;var statearr_12453_12500 = state_12449__$1;(statearr_12453_12500[2] = null);
(statearr_12453_12500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 24))
{var inst_12428 = (state_12449[7]);var inst_12437 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12428);var state_12449__$1 = state_12449;var statearr_12454_12501 = state_12449__$1;(statearr_12454_12501[2] = inst_12437);
(statearr_12454_12501[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 4))
{var inst_12380 = (state_12449[8]);var inst_12380__$1 = (state_12449[2]);var inst_12381 = (inst_12380__$1 == null);var state_12449__$1 = (function (){var statearr_12455 = state_12449;(statearr_12455[8] = inst_12380__$1);
return statearr_12455;
})();if(cljs.core.truth_(inst_12381))
{var statearr_12456_12502 = state_12449__$1;(statearr_12456_12502[1] = 5);
} else
{var statearr_12457_12503 = state_12449__$1;(statearr_12457_12503[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 15))
{var inst_12422 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12458_12504 = state_12449__$1;(statearr_12458_12504[2] = inst_12422);
(statearr_12458_12504[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 21))
{var inst_12442 = (state_12449[2]);var state_12449__$1 = (function (){var statearr_12459 = state_12449;(statearr_12459[9] = inst_12442);
return statearr_12459;
})();var statearr_12460_12505 = state_12449__$1;(statearr_12460_12505[2] = null);
(statearr_12460_12505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 13))
{var inst_12404 = (state_12449[10]);var inst_12406 = cljs.core.chunked_seq_QMARK_.call(null,inst_12404);var state_12449__$1 = state_12449;if(inst_12406)
{var statearr_12461_12506 = state_12449__$1;(statearr_12461_12506[1] = 16);
} else
{var statearr_12462_12507 = state_12449__$1;(statearr_12462_12507[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 22))
{var inst_12434 = (state_12449[2]);var state_12449__$1 = state_12449;if(cljs.core.truth_(inst_12434))
{var statearr_12463_12508 = state_12449__$1;(statearr_12463_12508[1] = 23);
} else
{var statearr_12464_12509 = state_12449__$1;(statearr_12464_12509[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 6))
{var inst_12380 = (state_12449[8]);var inst_12428 = (state_12449[7]);var inst_12430 = (state_12449[11]);var inst_12428__$1 = topic_fn.call(null,inst_12380);var inst_12429 = cljs.core.deref.call(null,mults);var inst_12430__$1 = cljs.core.get.call(null,inst_12429,inst_12428__$1);var state_12449__$1 = (function (){var statearr_12465 = state_12449;(statearr_12465[7] = inst_12428__$1);
(statearr_12465[11] = inst_12430__$1);
return statearr_12465;
})();if(cljs.core.truth_(inst_12430__$1))
{var statearr_12466_12510 = state_12449__$1;(statearr_12466_12510[1] = 19);
} else
{var statearr_12467_12511 = state_12449__$1;(statearr_12467_12511[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 25))
{var inst_12439 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12468_12512 = state_12449__$1;(statearr_12468_12512[2] = inst_12439);
(statearr_12468_12512[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 17))
{var inst_12404 = (state_12449[10]);var inst_12413 = cljs.core.first.call(null,inst_12404);var inst_12414 = cljs.core.async.muxch_STAR_.call(null,inst_12413);var inst_12415 = cljs.core.async.close_BANG_.call(null,inst_12414);var inst_12416 = cljs.core.next.call(null,inst_12404);var inst_12390 = inst_12416;var inst_12391 = null;var inst_12392 = 0;var inst_12393 = 0;var state_12449__$1 = (function (){var statearr_12469 = state_12449;(statearr_12469[12] = inst_12415);
(statearr_12469[13] = inst_12390);
(statearr_12469[14] = inst_12392);
(statearr_12469[15] = inst_12391);
(statearr_12469[16] = inst_12393);
return statearr_12469;
})();var statearr_12470_12513 = state_12449__$1;(statearr_12470_12513[2] = null);
(statearr_12470_12513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 3))
{var inst_12447 = (state_12449[2]);var state_12449__$1 = state_12449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12449__$1,inst_12447);
} else
{if((state_val_12450 === 12))
{var inst_12424 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12471_12514 = state_12449__$1;(statearr_12471_12514[2] = inst_12424);
(statearr_12471_12514[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 2))
{var state_12449__$1 = state_12449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12449__$1,4,ch);
} else
{if((state_val_12450 === 23))
{var state_12449__$1 = state_12449;var statearr_12472_12515 = state_12449__$1;(statearr_12472_12515[2] = null);
(statearr_12472_12515[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 19))
{var inst_12380 = (state_12449[8]);var inst_12430 = (state_12449[11]);var inst_12432 = cljs.core.async.muxch_STAR_.call(null,inst_12430);var state_12449__$1 = state_12449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12449__$1,22,inst_12432,inst_12380);
} else
{if((state_val_12450 === 11))
{var inst_12390 = (state_12449[13]);var inst_12404 = (state_12449[10]);var inst_12404__$1 = cljs.core.seq.call(null,inst_12390);var state_12449__$1 = (function (){var statearr_12473 = state_12449;(statearr_12473[10] = inst_12404__$1);
return statearr_12473;
})();if(inst_12404__$1)
{var statearr_12474_12516 = state_12449__$1;(statearr_12474_12516[1] = 13);
} else
{var statearr_12475_12517 = state_12449__$1;(statearr_12475_12517[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 9))
{var inst_12426 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12476_12518 = state_12449__$1;(statearr_12476_12518[2] = inst_12426);
(statearr_12476_12518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 5))
{var inst_12387 = cljs.core.deref.call(null,mults);var inst_12388 = cljs.core.vals.call(null,inst_12387);var inst_12389 = cljs.core.seq.call(null,inst_12388);var inst_12390 = inst_12389;var inst_12391 = null;var inst_12392 = 0;var inst_12393 = 0;var state_12449__$1 = (function (){var statearr_12477 = state_12449;(statearr_12477[13] = inst_12390);
(statearr_12477[14] = inst_12392);
(statearr_12477[15] = inst_12391);
(statearr_12477[16] = inst_12393);
return statearr_12477;
})();var statearr_12478_12519 = state_12449__$1;(statearr_12478_12519[2] = null);
(statearr_12478_12519[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 14))
{var state_12449__$1 = state_12449;var statearr_12482_12520 = state_12449__$1;(statearr_12482_12520[2] = null);
(statearr_12482_12520[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 16))
{var inst_12404 = (state_12449[10]);var inst_12408 = cljs.core.chunk_first.call(null,inst_12404);var inst_12409 = cljs.core.chunk_rest.call(null,inst_12404);var inst_12410 = cljs.core.count.call(null,inst_12408);var inst_12390 = inst_12409;var inst_12391 = inst_12408;var inst_12392 = inst_12410;var inst_12393 = 0;var state_12449__$1 = (function (){var statearr_12483 = state_12449;(statearr_12483[13] = inst_12390);
(statearr_12483[14] = inst_12392);
(statearr_12483[15] = inst_12391);
(statearr_12483[16] = inst_12393);
return statearr_12483;
})();var statearr_12484_12521 = state_12449__$1;(statearr_12484_12521[2] = null);
(statearr_12484_12521[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 10))
{var inst_12390 = (state_12449[13]);var inst_12392 = (state_12449[14]);var inst_12391 = (state_12449[15]);var inst_12393 = (state_12449[16]);var inst_12398 = cljs.core._nth.call(null,inst_12391,inst_12393);var inst_12399 = cljs.core.async.muxch_STAR_.call(null,inst_12398);var inst_12400 = cljs.core.async.close_BANG_.call(null,inst_12399);var inst_12401 = (inst_12393 + 1);var tmp12479 = inst_12390;var tmp12480 = inst_12392;var tmp12481 = inst_12391;var inst_12390__$1 = tmp12479;var inst_12391__$1 = tmp12481;var inst_12392__$1 = tmp12480;var inst_12393__$1 = inst_12401;var state_12449__$1 = (function (){var statearr_12485 = state_12449;(statearr_12485[17] = inst_12400);
(statearr_12485[13] = inst_12390__$1);
(statearr_12485[14] = inst_12392__$1);
(statearr_12485[15] = inst_12391__$1);
(statearr_12485[16] = inst_12393__$1);
return statearr_12485;
})();var statearr_12486_12522 = state_12449__$1;(statearr_12486_12522[2] = null);
(statearr_12486_12522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 18))
{var inst_12419 = (state_12449[2]);var state_12449__$1 = state_12449;var statearr_12487_12523 = state_12449__$1;(statearr_12487_12523[2] = inst_12419);
(statearr_12487_12523[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12450 === 8))
{var inst_12392 = (state_12449[14]);var inst_12393 = (state_12449[16]);var inst_12395 = (inst_12393 < inst_12392);var inst_12396 = inst_12395;var state_12449__$1 = state_12449;if(cljs.core.truth_(inst_12396))
{var statearr_12488_12524 = state_12449__$1;(statearr_12488_12524[1] = 10);
} else
{var statearr_12489_12525 = state_12449__$1;(statearr_12489_12525[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___12497,mults,ensure_mult,p))
;return ((function (switch__5623__auto__,c__5638__auto___12497,mults,ensure_mult,p){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12493[0] = state_machine__5624__auto__);
(statearr_12493[1] = 1);
return statearr_12493;
});
var state_machine__5624__auto____1 = (function (state_12449){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12494){if((e12494 instanceof Object))
{var ex__5627__auto__ = e12494;var statearr_12495_12526 = state_12449;(statearr_12495_12526[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12527 = state_12449;
state_12449 = G__12527;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12449){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12497,mults,ensure_mult,p))
})();var state__5640__auto__ = (function (){var statearr_12496 = f__5639__auto__.call(null);(statearr_12496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12497);
return statearr_12496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12497,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5638__auto___12664 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12634){var state_val_12635 = (state_12634[1]);if((state_val_12635 === 7))
{var state_12634__$1 = state_12634;var statearr_12636_12665 = state_12634__$1;(statearr_12636_12665[2] = null);
(statearr_12636_12665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 1))
{var state_12634__$1 = state_12634;var statearr_12637_12666 = state_12634__$1;(statearr_12637_12666[2] = null);
(statearr_12637_12666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 4))
{var inst_12598 = (state_12634[7]);var inst_12600 = (inst_12598 < cnt);var state_12634__$1 = state_12634;if(cljs.core.truth_(inst_12600))
{var statearr_12638_12667 = state_12634__$1;(statearr_12638_12667[1] = 6);
} else
{var statearr_12639_12668 = state_12634__$1;(statearr_12639_12668[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 15))
{var inst_12630 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12640_12669 = state_12634__$1;(statearr_12640_12669[2] = inst_12630);
(statearr_12640_12669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 13))
{var inst_12623 = cljs.core.async.close_BANG_.call(null,out);var state_12634__$1 = state_12634;var statearr_12641_12670 = state_12634__$1;(statearr_12641_12670[2] = inst_12623);
(statearr_12641_12670[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 6))
{var state_12634__$1 = state_12634;var statearr_12642_12671 = state_12634__$1;(statearr_12642_12671[2] = null);
(statearr_12642_12671[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 3))
{var inst_12632 = (state_12634[2]);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12634__$1,inst_12632);
} else
{if((state_val_12635 === 12))
{var inst_12620 = (state_12634[8]);var inst_12620__$1 = (state_12634[2]);var inst_12621 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12620__$1);var state_12634__$1 = (function (){var statearr_12643 = state_12634;(statearr_12643[8] = inst_12620__$1);
return statearr_12643;
})();if(cljs.core.truth_(inst_12621))
{var statearr_12644_12672 = state_12634__$1;(statearr_12644_12672[1] = 13);
} else
{var statearr_12645_12673 = state_12634__$1;(statearr_12645_12673[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 2))
{var inst_12597 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12598 = 0;var state_12634__$1 = (function (){var statearr_12646 = state_12634;(statearr_12646[9] = inst_12597);
(statearr_12646[7] = inst_12598);
return statearr_12646;
})();var statearr_12647_12674 = state_12634__$1;(statearr_12647_12674[2] = null);
(statearr_12647_12674[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 11))
{var inst_12598 = (state_12634[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12634,10,Object,null,9);var inst_12607 = chs__$1.call(null,inst_12598);var inst_12608 = done.call(null,inst_12598);var inst_12609 = cljs.core.async.take_BANG_.call(null,inst_12607,inst_12608);var state_12634__$1 = state_12634;var statearr_12648_12675 = state_12634__$1;(statearr_12648_12675[2] = inst_12609);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12634__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 9))
{var inst_12598 = (state_12634[7]);var inst_12611 = (state_12634[2]);var inst_12612 = (inst_12598 + 1);var inst_12598__$1 = inst_12612;var state_12634__$1 = (function (){var statearr_12649 = state_12634;(statearr_12649[7] = inst_12598__$1);
(statearr_12649[10] = inst_12611);
return statearr_12649;
})();var statearr_12650_12676 = state_12634__$1;(statearr_12650_12676[2] = null);
(statearr_12650_12676[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 5))
{var inst_12618 = (state_12634[2]);var state_12634__$1 = (function (){var statearr_12651 = state_12634;(statearr_12651[11] = inst_12618);
return statearr_12651;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12634__$1,12,dchan);
} else
{if((state_val_12635 === 14))
{var inst_12620 = (state_12634[8]);var inst_12625 = cljs.core.apply.call(null,f,inst_12620);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12634__$1,16,out,inst_12625);
} else
{if((state_val_12635 === 16))
{var inst_12627 = (state_12634[2]);var state_12634__$1 = (function (){var statearr_12652 = state_12634;(statearr_12652[12] = inst_12627);
return statearr_12652;
})();var statearr_12653_12677 = state_12634__$1;(statearr_12653_12677[2] = null);
(statearr_12653_12677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 10))
{var inst_12602 = (state_12634[2]);var inst_12603 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12634__$1 = (function (){var statearr_12654 = state_12634;(statearr_12654[13] = inst_12602);
return statearr_12654;
})();var statearr_12655_12678 = state_12634__$1;(statearr_12655_12678[2] = inst_12603);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12634__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 8))
{var inst_12616 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12656_12679 = state_12634__$1;(statearr_12656_12679[2] = inst_12616);
(statearr_12656_12679[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12660[0] = state_machine__5624__auto__);
(statearr_12660[1] = 1);
return statearr_12660;
});
var state_machine__5624__auto____1 = (function (state_12634){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12661){if((e12661 instanceof Object))
{var ex__5627__auto__ = e12661;var statearr_12662_12680 = state_12634;(statearr_12662_12680[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12681 = state_12634;
state_12634 = G__12681;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12634){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12663 = f__5639__auto__.call(null);(statearr_12663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12664);
return statearr_12663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12664,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12789,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12789,out){
return (function (state_12765){var state_val_12766 = (state_12765[1]);if((state_val_12766 === 7))
{var inst_12745 = (state_12765[7]);var inst_12744 = (state_12765[8]);var inst_12744__$1 = (state_12765[2]);var inst_12745__$1 = cljs.core.nth.call(null,inst_12744__$1,0,null);var inst_12746 = cljs.core.nth.call(null,inst_12744__$1,1,null);var inst_12747 = (inst_12745__$1 == null);var state_12765__$1 = (function (){var statearr_12767 = state_12765;(statearr_12767[7] = inst_12745__$1);
(statearr_12767[9] = inst_12746);
(statearr_12767[8] = inst_12744__$1);
return statearr_12767;
})();if(cljs.core.truth_(inst_12747))
{var statearr_12768_12790 = state_12765__$1;(statearr_12768_12790[1] = 8);
} else
{var statearr_12769_12791 = state_12765__$1;(statearr_12769_12791[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 1))
{var inst_12736 = cljs.core.vec.call(null,chs);var inst_12737 = inst_12736;var state_12765__$1 = (function (){var statearr_12770 = state_12765;(statearr_12770[10] = inst_12737);
return statearr_12770;
})();var statearr_12771_12792 = state_12765__$1;(statearr_12771_12792[2] = null);
(statearr_12771_12792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 4))
{var inst_12737 = (state_12765[10]);var state_12765__$1 = state_12765;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12765__$1,7,inst_12737);
} else
{if((state_val_12766 === 6))
{var inst_12761 = (state_12765[2]);var state_12765__$1 = state_12765;var statearr_12772_12793 = state_12765__$1;(statearr_12772_12793[2] = inst_12761);
(statearr_12772_12793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 3))
{var inst_12763 = (state_12765[2]);var state_12765__$1 = state_12765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12765__$1,inst_12763);
} else
{if((state_val_12766 === 2))
{var inst_12737 = (state_12765[10]);var inst_12739 = cljs.core.count.call(null,inst_12737);var inst_12740 = (inst_12739 > 0);var state_12765__$1 = state_12765;if(cljs.core.truth_(inst_12740))
{var statearr_12774_12794 = state_12765__$1;(statearr_12774_12794[1] = 4);
} else
{var statearr_12775_12795 = state_12765__$1;(statearr_12775_12795[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 11))
{var inst_12737 = (state_12765[10]);var inst_12754 = (state_12765[2]);var tmp12773 = inst_12737;var inst_12737__$1 = tmp12773;var state_12765__$1 = (function (){var statearr_12776 = state_12765;(statearr_12776[10] = inst_12737__$1);
(statearr_12776[11] = inst_12754);
return statearr_12776;
})();var statearr_12777_12796 = state_12765__$1;(statearr_12777_12796[2] = null);
(statearr_12777_12796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 9))
{var inst_12745 = (state_12765[7]);var state_12765__$1 = state_12765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12765__$1,11,out,inst_12745);
} else
{if((state_val_12766 === 5))
{var inst_12759 = cljs.core.async.close_BANG_.call(null,out);var state_12765__$1 = state_12765;var statearr_12778_12797 = state_12765__$1;(statearr_12778_12797[2] = inst_12759);
(statearr_12778_12797[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 10))
{var inst_12757 = (state_12765[2]);var state_12765__$1 = state_12765;var statearr_12779_12798 = state_12765__$1;(statearr_12779_12798[2] = inst_12757);
(statearr_12779_12798[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12766 === 8))
{var inst_12737 = (state_12765[10]);var inst_12745 = (state_12765[7]);var inst_12746 = (state_12765[9]);var inst_12744 = (state_12765[8]);var inst_12749 = (function (){var c = inst_12746;var v = inst_12745;var vec__12742 = inst_12744;var cs = inst_12737;return ((function (c,v,vec__12742,cs,inst_12737,inst_12745,inst_12746,inst_12744,state_val_12766,c__5638__auto___12789,out){
return (function (p1__12682_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12682_SHARP_);
});
;})(c,v,vec__12742,cs,inst_12737,inst_12745,inst_12746,inst_12744,state_val_12766,c__5638__auto___12789,out))
})();var inst_12750 = cljs.core.filterv.call(null,inst_12749,inst_12737);var inst_12737__$1 = inst_12750;var state_12765__$1 = (function (){var statearr_12780 = state_12765;(statearr_12780[10] = inst_12737__$1);
return statearr_12780;
})();var statearr_12781_12799 = state_12765__$1;(statearr_12781_12799[2] = null);
(statearr_12781_12799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___12789,out))
;return ((function (switch__5623__auto__,c__5638__auto___12789,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12785 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12785[0] = state_machine__5624__auto__);
(statearr_12785[1] = 1);
return statearr_12785;
});
var state_machine__5624__auto____1 = (function (state_12765){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12765);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object))
{var ex__5627__auto__ = e12786;var statearr_12787_12800 = state_12765;(statearr_12787_12800[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12801 = state_12765;
state_12765 = G__12801;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12765){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12789,out))
})();var state__5640__auto__ = (function (){var statearr_12788 = f__5639__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12789);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12789,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12894,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12894,out){
return (function (state_12871){var state_val_12872 = (state_12871[1]);if((state_val_12872 === 7))
{var inst_12853 = (state_12871[7]);var inst_12853__$1 = (state_12871[2]);var inst_12854 = (inst_12853__$1 == null);var inst_12855 = cljs.core.not.call(null,inst_12854);var state_12871__$1 = (function (){var statearr_12873 = state_12871;(statearr_12873[7] = inst_12853__$1);
return statearr_12873;
})();if(inst_12855)
{var statearr_12874_12895 = state_12871__$1;(statearr_12874_12895[1] = 8);
} else
{var statearr_12875_12896 = state_12871__$1;(statearr_12875_12896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 1))
{var inst_12848 = 0;var state_12871__$1 = (function (){var statearr_12876 = state_12871;(statearr_12876[8] = inst_12848);
return statearr_12876;
})();var statearr_12877_12897 = state_12871__$1;(statearr_12877_12897[2] = null);
(statearr_12877_12897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 4))
{var state_12871__$1 = state_12871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12871__$1,7,ch);
} else
{if((state_val_12872 === 6))
{var inst_12866 = (state_12871[2]);var state_12871__$1 = state_12871;var statearr_12878_12898 = state_12871__$1;(statearr_12878_12898[2] = inst_12866);
(statearr_12878_12898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 3))
{var inst_12868 = (state_12871[2]);var inst_12869 = cljs.core.async.close_BANG_.call(null,out);var state_12871__$1 = (function (){var statearr_12879 = state_12871;(statearr_12879[9] = inst_12868);
return statearr_12879;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12871__$1,inst_12869);
} else
{if((state_val_12872 === 2))
{var inst_12848 = (state_12871[8]);var inst_12850 = (inst_12848 < n);var state_12871__$1 = state_12871;if(cljs.core.truth_(inst_12850))
{var statearr_12880_12899 = state_12871__$1;(statearr_12880_12899[1] = 4);
} else
{var statearr_12881_12900 = state_12871__$1;(statearr_12881_12900[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 11))
{var inst_12848 = (state_12871[8]);var inst_12858 = (state_12871[2]);var inst_12859 = (inst_12848 + 1);var inst_12848__$1 = inst_12859;var state_12871__$1 = (function (){var statearr_12882 = state_12871;(statearr_12882[10] = inst_12858);
(statearr_12882[8] = inst_12848__$1);
return statearr_12882;
})();var statearr_12883_12901 = state_12871__$1;(statearr_12883_12901[2] = null);
(statearr_12883_12901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 9))
{var state_12871__$1 = state_12871;var statearr_12884_12902 = state_12871__$1;(statearr_12884_12902[2] = null);
(statearr_12884_12902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 5))
{var state_12871__$1 = state_12871;var statearr_12885_12903 = state_12871__$1;(statearr_12885_12903[2] = null);
(statearr_12885_12903[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 10))
{var inst_12863 = (state_12871[2]);var state_12871__$1 = state_12871;var statearr_12886_12904 = state_12871__$1;(statearr_12886_12904[2] = inst_12863);
(statearr_12886_12904[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12872 === 8))
{var inst_12853 = (state_12871[7]);var state_12871__$1 = state_12871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12871__$1,11,out,inst_12853);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___12894,out))
;return ((function (switch__5623__auto__,c__5638__auto___12894,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12890 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12890[0] = state_machine__5624__auto__);
(statearr_12890[1] = 1);
return statearr_12890;
});
var state_machine__5624__auto____1 = (function (state_12871){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12871);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12891){if((e12891 instanceof Object))
{var ex__5627__auto__ = e12891;var statearr_12892_12905 = state_12871;(statearr_12892_12905[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12906 = state_12871;
state_12871 = G__12906;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12871){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12894,out))
})();var state__5640__auto__ = (function (){var statearr_12893 = f__5639__auto__.call(null);(statearr_12893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12894);
return statearr_12893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12894,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13003 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13003,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13003,out){
return (function (state_12978){var state_val_12979 = (state_12978[1]);if((state_val_12979 === 7))
{var inst_12973 = (state_12978[2]);var state_12978__$1 = state_12978;var statearr_12980_13004 = state_12978__$1;(statearr_12980_13004[2] = inst_12973);
(statearr_12980_13004[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 1))
{var inst_12955 = null;var state_12978__$1 = (function (){var statearr_12981 = state_12978;(statearr_12981[7] = inst_12955);
return statearr_12981;
})();var statearr_12982_13005 = state_12978__$1;(statearr_12982_13005[2] = null);
(statearr_12982_13005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 4))
{var inst_12958 = (state_12978[8]);var inst_12958__$1 = (state_12978[2]);var inst_12959 = (inst_12958__$1 == null);var inst_12960 = cljs.core.not.call(null,inst_12959);var state_12978__$1 = (function (){var statearr_12983 = state_12978;(statearr_12983[8] = inst_12958__$1);
return statearr_12983;
})();if(inst_12960)
{var statearr_12984_13006 = state_12978__$1;(statearr_12984_13006[1] = 5);
} else
{var statearr_12985_13007 = state_12978__$1;(statearr_12985_13007[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 6))
{var state_12978__$1 = state_12978;var statearr_12986_13008 = state_12978__$1;(statearr_12986_13008[2] = null);
(statearr_12986_13008[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 3))
{var inst_12975 = (state_12978[2]);var inst_12976 = cljs.core.async.close_BANG_.call(null,out);var state_12978__$1 = (function (){var statearr_12987 = state_12978;(statearr_12987[9] = inst_12975);
return statearr_12987;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12978__$1,inst_12976);
} else
{if((state_val_12979 === 2))
{var state_12978__$1 = state_12978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12978__$1,4,ch);
} else
{if((state_val_12979 === 11))
{var inst_12958 = (state_12978[8]);var inst_12967 = (state_12978[2]);var inst_12955 = inst_12958;var state_12978__$1 = (function (){var statearr_12988 = state_12978;(statearr_12988[10] = inst_12967);
(statearr_12988[7] = inst_12955);
return statearr_12988;
})();var statearr_12989_13009 = state_12978__$1;(statearr_12989_13009[2] = null);
(statearr_12989_13009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 9))
{var inst_12958 = (state_12978[8]);var state_12978__$1 = state_12978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12978__$1,11,out,inst_12958);
} else
{if((state_val_12979 === 5))
{var inst_12955 = (state_12978[7]);var inst_12958 = (state_12978[8]);var inst_12962 = cljs.core._EQ_.call(null,inst_12958,inst_12955);var state_12978__$1 = state_12978;if(inst_12962)
{var statearr_12991_13010 = state_12978__$1;(statearr_12991_13010[1] = 8);
} else
{var statearr_12992_13011 = state_12978__$1;(statearr_12992_13011[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 10))
{var inst_12970 = (state_12978[2]);var state_12978__$1 = state_12978;var statearr_12993_13012 = state_12978__$1;(statearr_12993_13012[2] = inst_12970);
(statearr_12993_13012[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12979 === 8))
{var inst_12955 = (state_12978[7]);var tmp12990 = inst_12955;var inst_12955__$1 = tmp12990;var state_12978__$1 = (function (){var statearr_12994 = state_12978;(statearr_12994[7] = inst_12955__$1);
return statearr_12994;
})();var statearr_12995_13013 = state_12978__$1;(statearr_12995_13013[2] = null);
(statearr_12995_13013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___13003,out))
;return ((function (switch__5623__auto__,c__5638__auto___13003,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12999 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12999[0] = state_machine__5624__auto__);
(statearr_12999[1] = 1);
return statearr_12999;
});
var state_machine__5624__auto____1 = (function (state_12978){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12978);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13000){if((e13000 instanceof Object))
{var ex__5627__auto__ = e13000;var statearr_13001_13014 = state_12978;(statearr_13001_13014[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12978);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13015 = state_12978;
state_12978 = G__13015;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12978){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13003,out))
})();var state__5640__auto__ = (function (){var statearr_13002 = f__5639__auto__.call(null);(statearr_13002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13003);
return statearr_13002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13003,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13150 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13150,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13150,out){
return (function (state_13120){var state_val_13121 = (state_13120[1]);if((state_val_13121 === 7))
{var inst_13116 = (state_13120[2]);var state_13120__$1 = state_13120;var statearr_13122_13151 = state_13120__$1;(statearr_13122_13151[2] = inst_13116);
(statearr_13122_13151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 1))
{var inst_13083 = (new Array(n));var inst_13084 = inst_13083;var inst_13085 = 0;var state_13120__$1 = (function (){var statearr_13123 = state_13120;(statearr_13123[7] = inst_13084);
(statearr_13123[8] = inst_13085);
return statearr_13123;
})();var statearr_13124_13152 = state_13120__$1;(statearr_13124_13152[2] = null);
(statearr_13124_13152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 4))
{var inst_13088 = (state_13120[9]);var inst_13088__$1 = (state_13120[2]);var inst_13089 = (inst_13088__$1 == null);var inst_13090 = cljs.core.not.call(null,inst_13089);var state_13120__$1 = (function (){var statearr_13125 = state_13120;(statearr_13125[9] = inst_13088__$1);
return statearr_13125;
})();if(inst_13090)
{var statearr_13126_13153 = state_13120__$1;(statearr_13126_13153[1] = 5);
} else
{var statearr_13127_13154 = state_13120__$1;(statearr_13127_13154[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 15))
{var inst_13110 = (state_13120[2]);var state_13120__$1 = state_13120;var statearr_13128_13155 = state_13120__$1;(statearr_13128_13155[2] = inst_13110);
(statearr_13128_13155[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 13))
{var state_13120__$1 = state_13120;var statearr_13129_13156 = state_13120__$1;(statearr_13129_13156[2] = null);
(statearr_13129_13156[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 6))
{var inst_13085 = (state_13120[8]);var inst_13106 = (inst_13085 > 0);var state_13120__$1 = state_13120;if(cljs.core.truth_(inst_13106))
{var statearr_13130_13157 = state_13120__$1;(statearr_13130_13157[1] = 12);
} else
{var statearr_13131_13158 = state_13120__$1;(statearr_13131_13158[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 3))
{var inst_13118 = (state_13120[2]);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13120__$1,inst_13118);
} else
{if((state_val_13121 === 12))
{var inst_13084 = (state_13120[7]);var inst_13108 = cljs.core.vec.call(null,inst_13084);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13120__$1,15,out,inst_13108);
} else
{if((state_val_13121 === 2))
{var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13120__$1,4,ch);
} else
{if((state_val_13121 === 11))
{var inst_13100 = (state_13120[2]);var inst_13101 = (new Array(n));var inst_13084 = inst_13101;var inst_13085 = 0;var state_13120__$1 = (function (){var statearr_13132 = state_13120;(statearr_13132[7] = inst_13084);
(statearr_13132[10] = inst_13100);
(statearr_13132[8] = inst_13085);
return statearr_13132;
})();var statearr_13133_13159 = state_13120__$1;(statearr_13133_13159[2] = null);
(statearr_13133_13159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 9))
{var inst_13084 = (state_13120[7]);var inst_13098 = cljs.core.vec.call(null,inst_13084);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13120__$1,11,out,inst_13098);
} else
{if((state_val_13121 === 5))
{var inst_13084 = (state_13120[7]);var inst_13093 = (state_13120[11]);var inst_13085 = (state_13120[8]);var inst_13088 = (state_13120[9]);var inst_13092 = (inst_13084[inst_13085] = inst_13088);var inst_13093__$1 = (inst_13085 + 1);var inst_13094 = (inst_13093__$1 < n);var state_13120__$1 = (function (){var statearr_13134 = state_13120;(statearr_13134[11] = inst_13093__$1);
(statearr_13134[12] = inst_13092);
return statearr_13134;
})();if(cljs.core.truth_(inst_13094))
{var statearr_13135_13160 = state_13120__$1;(statearr_13135_13160[1] = 8);
} else
{var statearr_13136_13161 = state_13120__$1;(statearr_13136_13161[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 14))
{var inst_13113 = (state_13120[2]);var inst_13114 = cljs.core.async.close_BANG_.call(null,out);var state_13120__$1 = (function (){var statearr_13138 = state_13120;(statearr_13138[13] = inst_13113);
return statearr_13138;
})();var statearr_13139_13162 = state_13120__$1;(statearr_13139_13162[2] = inst_13114);
(statearr_13139_13162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 10))
{var inst_13104 = (state_13120[2]);var state_13120__$1 = state_13120;var statearr_13140_13163 = state_13120__$1;(statearr_13140_13163[2] = inst_13104);
(statearr_13140_13163[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 8))
{var inst_13084 = (state_13120[7]);var inst_13093 = (state_13120[11]);var tmp13137 = inst_13084;var inst_13084__$1 = tmp13137;var inst_13085 = inst_13093;var state_13120__$1 = (function (){var statearr_13141 = state_13120;(statearr_13141[7] = inst_13084__$1);
(statearr_13141[8] = inst_13085);
return statearr_13141;
})();var statearr_13142_13164 = state_13120__$1;(statearr_13142_13164[2] = null);
(statearr_13142_13164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___13150,out))
;return ((function (switch__5623__auto__,c__5638__auto___13150,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13146[0] = state_machine__5624__auto__);
(statearr_13146[1] = 1);
return statearr_13146;
});
var state_machine__5624__auto____1 = (function (state_13120){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13120);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13147){if((e13147 instanceof Object))
{var ex__5627__auto__ = e13147;var statearr_13148_13165 = state_13120;(statearr_13148_13165[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13120);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13166 = state_13120;
state_13120 = G__13166;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13120){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13150,out))
})();var state__5640__auto__ = (function (){var statearr_13149 = f__5639__auto__.call(null);(statearr_13149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13150);
return statearr_13149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13150,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13309 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13309,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13309,out){
return (function (state_13279){var state_val_13280 = (state_13279[1]);if((state_val_13280 === 7))
{var inst_13275 = (state_13279[2]);var state_13279__$1 = state_13279;var statearr_13281_13310 = state_13279__$1;(statearr_13281_13310[2] = inst_13275);
(statearr_13281_13310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 1))
{var inst_13238 = [];var inst_13239 = inst_13238;var inst_13240 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13279__$1 = (function (){var statearr_13282 = state_13279;(statearr_13282[7] = inst_13239);
(statearr_13282[8] = inst_13240);
return statearr_13282;
})();var statearr_13283_13311 = state_13279__$1;(statearr_13283_13311[2] = null);
(statearr_13283_13311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 4))
{var inst_13243 = (state_13279[9]);var inst_13243__$1 = (state_13279[2]);var inst_13244 = (inst_13243__$1 == null);var inst_13245 = cljs.core.not.call(null,inst_13244);var state_13279__$1 = (function (){var statearr_13284 = state_13279;(statearr_13284[9] = inst_13243__$1);
return statearr_13284;
})();if(inst_13245)
{var statearr_13285_13312 = state_13279__$1;(statearr_13285_13312[1] = 5);
} else
{var statearr_13286_13313 = state_13279__$1;(statearr_13286_13313[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 15))
{var inst_13269 = (state_13279[2]);var state_13279__$1 = state_13279;var statearr_13287_13314 = state_13279__$1;(statearr_13287_13314[2] = inst_13269);
(statearr_13287_13314[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 13))
{var state_13279__$1 = state_13279;var statearr_13288_13315 = state_13279__$1;(statearr_13288_13315[2] = null);
(statearr_13288_13315[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 6))
{var inst_13239 = (state_13279[7]);var inst_13264 = inst_13239.length;var inst_13265 = (inst_13264 > 0);var state_13279__$1 = state_13279;if(cljs.core.truth_(inst_13265))
{var statearr_13289_13316 = state_13279__$1;(statearr_13289_13316[1] = 12);
} else
{var statearr_13290_13317 = state_13279__$1;(statearr_13290_13317[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 3))
{var inst_13277 = (state_13279[2]);var state_13279__$1 = state_13279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13279__$1,inst_13277);
} else
{if((state_val_13280 === 12))
{var inst_13239 = (state_13279[7]);var inst_13267 = cljs.core.vec.call(null,inst_13239);var state_13279__$1 = state_13279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13279__$1,15,out,inst_13267);
} else
{if((state_val_13280 === 2))
{var state_13279__$1 = state_13279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13279__$1,4,ch);
} else
{if((state_val_13280 === 11))
{var inst_13247 = (state_13279[10]);var inst_13243 = (state_13279[9]);var inst_13257 = (state_13279[2]);var inst_13258 = [];var inst_13259 = inst_13258.push(inst_13243);var inst_13239 = inst_13258;var inst_13240 = inst_13247;var state_13279__$1 = (function (){var statearr_13291 = state_13279;(statearr_13291[11] = inst_13259);
(statearr_13291[12] = inst_13257);
(statearr_13291[7] = inst_13239);
(statearr_13291[8] = inst_13240);
return statearr_13291;
})();var statearr_13292_13318 = state_13279__$1;(statearr_13292_13318[2] = null);
(statearr_13292_13318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 9))
{var inst_13239 = (state_13279[7]);var inst_13255 = cljs.core.vec.call(null,inst_13239);var state_13279__$1 = state_13279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13279__$1,11,out,inst_13255);
} else
{if((state_val_13280 === 5))
{var inst_13247 = (state_13279[10]);var inst_13240 = (state_13279[8]);var inst_13243 = (state_13279[9]);var inst_13247__$1 = f.call(null,inst_13243);var inst_13248 = cljs.core._EQ_.call(null,inst_13247__$1,inst_13240);var inst_13249 = cljs.core.keyword_identical_QMARK_.call(null,inst_13240,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13250 = (inst_13248) || (inst_13249);var state_13279__$1 = (function (){var statearr_13293 = state_13279;(statearr_13293[10] = inst_13247__$1);
return statearr_13293;
})();if(cljs.core.truth_(inst_13250))
{var statearr_13294_13319 = state_13279__$1;(statearr_13294_13319[1] = 8);
} else
{var statearr_13295_13320 = state_13279__$1;(statearr_13295_13320[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 14))
{var inst_13272 = (state_13279[2]);var inst_13273 = cljs.core.async.close_BANG_.call(null,out);var state_13279__$1 = (function (){var statearr_13297 = state_13279;(statearr_13297[13] = inst_13272);
return statearr_13297;
})();var statearr_13298_13321 = state_13279__$1;(statearr_13298_13321[2] = inst_13273);
(statearr_13298_13321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 10))
{var inst_13262 = (state_13279[2]);var state_13279__$1 = state_13279;var statearr_13299_13322 = state_13279__$1;(statearr_13299_13322[2] = inst_13262);
(statearr_13299_13322[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13280 === 8))
{var inst_13239 = (state_13279[7]);var inst_13247 = (state_13279[10]);var inst_13243 = (state_13279[9]);var inst_13252 = inst_13239.push(inst_13243);var tmp13296 = inst_13239;var inst_13239__$1 = tmp13296;var inst_13240 = inst_13247;var state_13279__$1 = (function (){var statearr_13300 = state_13279;(statearr_13300[7] = inst_13239__$1);
(statearr_13300[14] = inst_13252);
(statearr_13300[8] = inst_13240);
return statearr_13300;
})();var statearr_13301_13323 = state_13279__$1;(statearr_13301_13323[2] = null);
(statearr_13301_13323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___13309,out))
;return ((function (switch__5623__auto__,c__5638__auto___13309,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13305[0] = state_machine__5624__auto__);
(statearr_13305[1] = 1);
return statearr_13305;
});
var state_machine__5624__auto____1 = (function (state_13279){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13279);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13306){if((e13306 instanceof Object))
{var ex__5627__auto__ = e13306;var statearr_13307_13324 = state_13279;(statearr_13307_13324[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13279);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13325 = state_13279;
state_13279 = G__13325;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13279){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13309,out))
})();var state__5640__auto__ = (function (){var statearr_13308 = f__5639__auto__.call(null);(statearr_13308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13309);
return statearr_13308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13309,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map