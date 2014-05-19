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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10658 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10658 = (function (f,fn_handler,meta10659){
this.f = f;
this.fn_handler = fn_handler;
this.meta10659 = meta10659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10658.cljs$lang$type = true;
cljs.core.async.t10658.cljs$lang$ctorStr = "cljs.core.async/t10658";
cljs.core.async.t10658.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10658");
});
cljs.core.async.t10658.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10660){var self__ = this;
var _10660__$1 = this;return self__.meta10659;
});
cljs.core.async.t10658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10660,meta10659__$1){var self__ = this;
var _10660__$1 = this;return (new cljs.core.async.t10658(self__.f,self__.fn_handler,meta10659__$1));
});
cljs.core.async.__GT_t10658 = (function __GT_t10658(f__$1,fn_handler__$1,meta10659){return (new cljs.core.async.t10658(f__$1,fn_handler__$1,meta10659));
});
}
return (new cljs.core.async.t10658(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10662 = buff;if(G__10662)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10662.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10662.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10662);
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
{var val_10663 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10663);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10663,ret){
return (function (){return fn1.call(null,val_10663);
});})(val_10663,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10664 = n;var x_10665 = 0;while(true){
if((x_10665 < n__4329__auto___10664))
{(a[x_10665] = 0);
{
var G__10666 = (x_10665 + 1);
x_10665 = G__10666;
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
var G__10667 = (i + 1);
i = G__10667;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10671 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10671 = (function (flag,alt_flag,meta10672){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10672 = meta10672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10671.cljs$lang$type = true;
cljs.core.async.t10671.cljs$lang$ctorStr = "cljs.core.async/t10671";
cljs.core.async.t10671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10671");
});})(flag))
;
cljs.core.async.t10671.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10673){var self__ = this;
var _10673__$1 = this;return self__.meta10672;
});})(flag))
;
cljs.core.async.t10671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10673,meta10672__$1){var self__ = this;
var _10673__$1 = this;return (new cljs.core.async.t10671(self__.flag,self__.alt_flag,meta10672__$1));
});})(flag))
;
cljs.core.async.__GT_t10671 = ((function (flag){
return (function __GT_t10671(flag__$1,alt_flag__$1,meta10672){return (new cljs.core.async.t10671(flag__$1,alt_flag__$1,meta10672));
});})(flag))
;
}
return (new cljs.core.async.t10671(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10677 = (function (cb,flag,alt_handler,meta10678){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
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
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10679){var self__ = this;
var _10679__$1 = this;return self__.meta10678;
});
cljs.core.async.t10677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10679,meta10678__$1){var self__ = this;
var _10679__$1 = this;return (new cljs.core.async.t10677(self__.cb,self__.flag,self__.alt_handler,meta10678__$1));
});
cljs.core.async.__GT_t10677 = (function __GT_t10677(cb__$1,flag__$1,alt_handler__$1,meta10678){return (new cljs.core.async.t10677(cb__$1,flag__$1,alt_handler__$1,meta10678));
});
}
return (new cljs.core.async.t10677(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10680_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10681_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10681_SHARP_,port], null));
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
var G__10682 = (i + 1);
i = G__10682;
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
var alts_BANG___delegate = function (ports,p__10683){var map__10685 = p__10683;var map__10685__$1 = ((cljs.core.seq_QMARK_.call(null,map__10685))?cljs.core.apply.call(null,cljs.core.hash_map,map__10685):map__10685);var opts = map__10685__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10683 = null;if (arguments.length > 1) {
  p__10683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10683);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10686){
var ports = cljs.core.first(arglist__10686);
var p__10683 = cljs.core.rest(arglist__10686);
return alts_BANG___delegate(ports,p__10683);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10694 = (function (ch,f,map_LT_,meta10695){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10695 = meta10695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10694.cljs$lang$type = true;
cljs.core.async.t10694.cljs$lang$ctorStr = "cljs.core.async/t10694";
cljs.core.async.t10694.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10694");
});
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10697 = (function (fn1,_,meta10695,ch,f,map_LT_,meta10698){
this.fn1 = fn1;
this._ = _;
this.meta10695 = meta10695;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10698 = meta10698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10697.cljs$lang$type = true;
cljs.core.async.t10697.cljs$lang$ctorStr = "cljs.core.async/t10697";
cljs.core.async.t10697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10697");
});})(___$1))
;
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10687_SHARP_){return f1.call(null,(((p1__10687_SHARP_ == null))?null:self__.f.call(null,p1__10687_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10699){var self__ = this;
var _10699__$1 = this;return self__.meta10698;
});})(___$1))
;
cljs.core.async.t10697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10699,meta10698__$1){var self__ = this;
var _10699__$1 = this;return (new cljs.core.async.t10697(self__.fn1,self__._,self__.meta10695,self__.ch,self__.f,self__.map_LT_,meta10698__$1));
});})(___$1))
;
cljs.core.async.__GT_t10697 = ((function (___$1){
return (function __GT_t10697(fn1__$1,___$2,meta10695__$1,ch__$2,f__$2,map_LT___$2,meta10698){return (new cljs.core.async.t10697(fn1__$1,___$2,meta10695__$1,ch__$2,f__$2,map_LT___$2,meta10698));
});})(___$1))
;
}
return (new cljs.core.async.t10697(fn1,___$1,self__.meta10695,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10696){var self__ = this;
var _10696__$1 = this;return self__.meta10695;
});
cljs.core.async.t10694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10696,meta10695__$1){var self__ = this;
var _10696__$1 = this;return (new cljs.core.async.t10694(self__.ch,self__.f,self__.map_LT_,meta10695__$1));
});
cljs.core.async.__GT_t10694 = (function __GT_t10694(ch__$1,f__$1,map_LT___$1,meta10695){return (new cljs.core.async.t10694(ch__$1,f__$1,map_LT___$1,meta10695));
});
}
return (new cljs.core.async.t10694(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10703 = (function (ch,f,map_GT_,meta10704){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10704 = meta10704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10703.cljs$lang$type = true;
cljs.core.async.t10703.cljs$lang$ctorStr = "cljs.core.async/t10703";
cljs.core.async.t10703.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10703");
});
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10705){var self__ = this;
var _10705__$1 = this;return self__.meta10704;
});
cljs.core.async.t10703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10705,meta10704__$1){var self__ = this;
var _10705__$1 = this;return (new cljs.core.async.t10703(self__.ch,self__.f,self__.map_GT_,meta10704__$1));
});
cljs.core.async.__GT_t10703 = (function __GT_t10703(ch__$1,f__$1,map_GT___$1,meta10704){return (new cljs.core.async.t10703(ch__$1,f__$1,map_GT___$1,meta10704));
});
}
return (new cljs.core.async.t10703(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10709 = (function (ch,p,filter_GT_,meta10710){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10710 = meta10710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10709.cljs$lang$type = true;
cljs.core.async.t10709.cljs$lang$ctorStr = "cljs.core.async/t10709";
cljs.core.async.t10709.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10709");
});
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10711){var self__ = this;
var _10711__$1 = this;return self__.meta10710;
});
cljs.core.async.t10709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10711,meta10710__$1){var self__ = this;
var _10711__$1 = this;return (new cljs.core.async.t10709(self__.ch,self__.p,self__.filter_GT_,meta10710__$1));
});
cljs.core.async.__GT_t10709 = (function __GT_t10709(ch__$1,p__$1,filter_GT___$1,meta10710){return (new cljs.core.async.t10709(ch__$1,p__$1,filter_GT___$1,meta10710));
});
}
return (new cljs.core.async.t10709(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___10794 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10794,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10794,out){
return (function (state_10773){var state_val_10774 = (state_10773[1]);if((state_val_10774 === 7))
{var inst_10769 = (state_10773[2]);var state_10773__$1 = state_10773;var statearr_10775_10795 = state_10773__$1;(statearr_10775_10795[2] = inst_10769);
(statearr_10775_10795[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 1))
{var state_10773__$1 = state_10773;var statearr_10776_10796 = state_10773__$1;(statearr_10776_10796[2] = null);
(statearr_10776_10796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 4))
{var inst_10755 = (state_10773[7]);var inst_10755__$1 = (state_10773[2]);var inst_10756 = (inst_10755__$1 == null);var state_10773__$1 = (function (){var statearr_10777 = state_10773;(statearr_10777[7] = inst_10755__$1);
return statearr_10777;
})();if(cljs.core.truth_(inst_10756))
{var statearr_10778_10797 = state_10773__$1;(statearr_10778_10797[1] = 5);
} else
{var statearr_10779_10798 = state_10773__$1;(statearr_10779_10798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 6))
{var inst_10755 = (state_10773[7]);var inst_10760 = p.call(null,inst_10755);var state_10773__$1 = state_10773;if(cljs.core.truth_(inst_10760))
{var statearr_10780_10799 = state_10773__$1;(statearr_10780_10799[1] = 8);
} else
{var statearr_10781_10800 = state_10773__$1;(statearr_10781_10800[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 3))
{var inst_10771 = (state_10773[2]);var state_10773__$1 = state_10773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10773__$1,inst_10771);
} else
{if((state_val_10774 === 2))
{var state_10773__$1 = state_10773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10773__$1,4,ch);
} else
{if((state_val_10774 === 11))
{var inst_10763 = (state_10773[2]);var state_10773__$1 = state_10773;var statearr_10782_10801 = state_10773__$1;(statearr_10782_10801[2] = inst_10763);
(statearr_10782_10801[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 9))
{var state_10773__$1 = state_10773;var statearr_10783_10802 = state_10773__$1;(statearr_10783_10802[2] = null);
(statearr_10783_10802[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 5))
{var inst_10758 = cljs.core.async.close_BANG_.call(null,out);var state_10773__$1 = state_10773;var statearr_10784_10803 = state_10773__$1;(statearr_10784_10803[2] = inst_10758);
(statearr_10784_10803[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 10))
{var inst_10766 = (state_10773[2]);var state_10773__$1 = (function (){var statearr_10785 = state_10773;(statearr_10785[8] = inst_10766);
return statearr_10785;
})();var statearr_10786_10804 = state_10773__$1;(statearr_10786_10804[2] = null);
(statearr_10786_10804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10774 === 8))
{var inst_10755 = (state_10773[7]);var state_10773__$1 = state_10773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10773__$1,11,out,inst_10755);
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
});})(c__5638__auto___10794,out))
;return ((function (switch__5623__auto__,c__5638__auto___10794,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10790 = [null,null,null,null,null,null,null,null,null];(statearr_10790[0] = state_machine__5624__auto__);
(statearr_10790[1] = 1);
return statearr_10790;
});
var state_machine__5624__auto____1 = (function (state_10773){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10791){if((e10791 instanceof Object))
{var ex__5627__auto__ = e10791;var statearr_10792_10805 = state_10773;(statearr_10792_10805[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10806 = state_10773;
state_10773 = G__10806;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10773){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10794,out))
})();var state__5640__auto__ = (function (){var statearr_10793 = f__5639__auto__.call(null);(statearr_10793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10794);
return statearr_10793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10794,out))
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
return (function (state_10972){var state_val_10973 = (state_10972[1]);if((state_val_10973 === 7))
{var inst_10968 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10974_11015 = state_10972__$1;(statearr_10974_11015[2] = inst_10968);
(statearr_10974_11015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 20))
{var inst_10938 = (state_10972[7]);var inst_10949 = (state_10972[2]);var inst_10950 = cljs.core.next.call(null,inst_10938);var inst_10924 = inst_10950;var inst_10925 = null;var inst_10926 = 0;var inst_10927 = 0;var state_10972__$1 = (function (){var statearr_10975 = state_10972;(statearr_10975[8] = inst_10926);
(statearr_10975[9] = inst_10949);
(statearr_10975[10] = inst_10924);
(statearr_10975[11] = inst_10925);
(statearr_10975[12] = inst_10927);
return statearr_10975;
})();var statearr_10976_11016 = state_10972__$1;(statearr_10976_11016[2] = null);
(statearr_10976_11016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 1))
{var state_10972__$1 = state_10972;var statearr_10977_11017 = state_10972__$1;(statearr_10977_11017[2] = null);
(statearr_10977_11017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 4))
{var inst_10913 = (state_10972[13]);var inst_10913__$1 = (state_10972[2]);var inst_10914 = (inst_10913__$1 == null);var state_10972__$1 = (function (){var statearr_10978 = state_10972;(statearr_10978[13] = inst_10913__$1);
return statearr_10978;
})();if(cljs.core.truth_(inst_10914))
{var statearr_10979_11018 = state_10972__$1;(statearr_10979_11018[1] = 5);
} else
{var statearr_10980_11019 = state_10972__$1;(statearr_10980_11019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 15))
{var state_10972__$1 = state_10972;var statearr_10984_11020 = state_10972__$1;(statearr_10984_11020[2] = null);
(statearr_10984_11020[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 21))
{var state_10972__$1 = state_10972;var statearr_10985_11021 = state_10972__$1;(statearr_10985_11021[2] = null);
(statearr_10985_11021[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 13))
{var inst_10926 = (state_10972[8]);var inst_10924 = (state_10972[10]);var inst_10925 = (state_10972[11]);var inst_10927 = (state_10972[12]);var inst_10934 = (state_10972[2]);var inst_10935 = (inst_10927 + 1);var tmp10981 = inst_10926;var tmp10982 = inst_10924;var tmp10983 = inst_10925;var inst_10924__$1 = tmp10982;var inst_10925__$1 = tmp10983;var inst_10926__$1 = tmp10981;var inst_10927__$1 = inst_10935;var state_10972__$1 = (function (){var statearr_10986 = state_10972;(statearr_10986[8] = inst_10926__$1);
(statearr_10986[14] = inst_10934);
(statearr_10986[10] = inst_10924__$1);
(statearr_10986[11] = inst_10925__$1);
(statearr_10986[12] = inst_10927__$1);
return statearr_10986;
})();var statearr_10987_11022 = state_10972__$1;(statearr_10987_11022[2] = null);
(statearr_10987_11022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 22))
{var state_10972__$1 = state_10972;var statearr_10988_11023 = state_10972__$1;(statearr_10988_11023[2] = null);
(statearr_10988_11023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 6))
{var inst_10913 = (state_10972[13]);var inst_10922 = f.call(null,inst_10913);var inst_10923 = cljs.core.seq.call(null,inst_10922);var inst_10924 = inst_10923;var inst_10925 = null;var inst_10926 = 0;var inst_10927 = 0;var state_10972__$1 = (function (){var statearr_10989 = state_10972;(statearr_10989[8] = inst_10926);
(statearr_10989[10] = inst_10924);
(statearr_10989[11] = inst_10925);
(statearr_10989[12] = inst_10927);
return statearr_10989;
})();var statearr_10990_11024 = state_10972__$1;(statearr_10990_11024[2] = null);
(statearr_10990_11024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 17))
{var inst_10938 = (state_10972[7]);var inst_10942 = cljs.core.chunk_first.call(null,inst_10938);var inst_10943 = cljs.core.chunk_rest.call(null,inst_10938);var inst_10944 = cljs.core.count.call(null,inst_10942);var inst_10924 = inst_10943;var inst_10925 = inst_10942;var inst_10926 = inst_10944;var inst_10927 = 0;var state_10972__$1 = (function (){var statearr_10991 = state_10972;(statearr_10991[8] = inst_10926);
(statearr_10991[10] = inst_10924);
(statearr_10991[11] = inst_10925);
(statearr_10991[12] = inst_10927);
return statearr_10991;
})();var statearr_10992_11025 = state_10972__$1;(statearr_10992_11025[2] = null);
(statearr_10992_11025[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 3))
{var inst_10970 = (state_10972[2]);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10972__$1,inst_10970);
} else
{if((state_val_10973 === 12))
{var inst_10958 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10993_11026 = state_10972__$1;(statearr_10993_11026[2] = inst_10958);
(statearr_10993_11026[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 2))
{var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10972__$1,4,in$);
} else
{if((state_val_10973 === 23))
{var inst_10966 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10994_11027 = state_10972__$1;(statearr_10994_11027[2] = inst_10966);
(statearr_10994_11027[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 19))
{var inst_10953 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10995_11028 = state_10972__$1;(statearr_10995_11028[2] = inst_10953);
(statearr_10995_11028[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 11))
{var inst_10938 = (state_10972[7]);var inst_10924 = (state_10972[10]);var inst_10938__$1 = cljs.core.seq.call(null,inst_10924);var state_10972__$1 = (function (){var statearr_10996 = state_10972;(statearr_10996[7] = inst_10938__$1);
return statearr_10996;
})();if(inst_10938__$1)
{var statearr_10997_11029 = state_10972__$1;(statearr_10997_11029[1] = 14);
} else
{var statearr_10998_11030 = state_10972__$1;(statearr_10998_11030[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 9))
{var inst_10960 = (state_10972[2]);var inst_10961 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10972__$1 = (function (){var statearr_10999 = state_10972;(statearr_10999[15] = inst_10960);
return statearr_10999;
})();if(cljs.core.truth_(inst_10961))
{var statearr_11000_11031 = state_10972__$1;(statearr_11000_11031[1] = 21);
} else
{var statearr_11001_11032 = state_10972__$1;(statearr_11001_11032[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 5))
{var inst_10916 = cljs.core.async.close_BANG_.call(null,out);var state_10972__$1 = state_10972;var statearr_11002_11033 = state_10972__$1;(statearr_11002_11033[2] = inst_10916);
(statearr_11002_11033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 14))
{var inst_10938 = (state_10972[7]);var inst_10940 = cljs.core.chunked_seq_QMARK_.call(null,inst_10938);var state_10972__$1 = state_10972;if(inst_10940)
{var statearr_11003_11034 = state_10972__$1;(statearr_11003_11034[1] = 17);
} else
{var statearr_11004_11035 = state_10972__$1;(statearr_11004_11035[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 16))
{var inst_10956 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_11005_11036 = state_10972__$1;(statearr_11005_11036[2] = inst_10956);
(statearr_11005_11036[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 10))
{var inst_10925 = (state_10972[11]);var inst_10927 = (state_10972[12]);var inst_10932 = cljs.core._nth.call(null,inst_10925,inst_10927);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,13,out,inst_10932);
} else
{if((state_val_10973 === 18))
{var inst_10938 = (state_10972[7]);var inst_10947 = cljs.core.first.call(null,inst_10938);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,20,out,inst_10947);
} else
{if((state_val_10973 === 8))
{var inst_10926 = (state_10972[8]);var inst_10927 = (state_10972[12]);var inst_10929 = (inst_10927 < inst_10926);var inst_10930 = inst_10929;var state_10972__$1 = state_10972;if(cljs.core.truth_(inst_10930))
{var statearr_11006_11037 = state_10972__$1;(statearr_11006_11037[1] = 10);
} else
{var statearr_11007_11038 = state_10972__$1;(statearr_11007_11038[1] = 11);
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
var state_machine__5624__auto____0 = (function (){var statearr_11011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11011[0] = state_machine__5624__auto__);
(statearr_11011[1] = 1);
return statearr_11011;
});
var state_machine__5624__auto____1 = (function (state_10972){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10972);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11012){if((e11012 instanceof Object))
{var ex__5627__auto__ = e11012;var statearr_11013_11039 = state_10972;(statearr_11013_11039[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11040 = state_10972;
state_10972 = G__11040;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10972){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11014 = f__5639__auto__.call(null);(statearr_11014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11014;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5638__auto___11135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11135){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11135){
return (function (state_11111){var state_val_11112 = (state_11111[1]);if((state_val_11112 === 7))
{var inst_11107 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11113_11136 = state_11111__$1;(statearr_11113_11136[2] = inst_11107);
(statearr_11113_11136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 1))
{var state_11111__$1 = state_11111;var statearr_11114_11137 = state_11111__$1;(statearr_11114_11137[2] = null);
(statearr_11114_11137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 4))
{var inst_11090 = (state_11111[7]);var inst_11090__$1 = (state_11111[2]);var inst_11091 = (inst_11090__$1 == null);var state_11111__$1 = (function (){var statearr_11115 = state_11111;(statearr_11115[7] = inst_11090__$1);
return statearr_11115;
})();if(cljs.core.truth_(inst_11091))
{var statearr_11116_11138 = state_11111__$1;(statearr_11116_11138[1] = 5);
} else
{var statearr_11117_11139 = state_11111__$1;(statearr_11117_11139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 13))
{var state_11111__$1 = state_11111;var statearr_11118_11140 = state_11111__$1;(statearr_11118_11140[2] = null);
(statearr_11118_11140[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 6))
{var inst_11090 = (state_11111[7]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11111__$1,11,to,inst_11090);
} else
{if((state_val_11112 === 3))
{var inst_11109 = (state_11111[2]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11111__$1,inst_11109);
} else
{if((state_val_11112 === 12))
{var state_11111__$1 = state_11111;var statearr_11119_11141 = state_11111__$1;(statearr_11119_11141[2] = null);
(statearr_11119_11141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 2))
{var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11111__$1,4,from);
} else
{if((state_val_11112 === 11))
{var inst_11100 = (state_11111[2]);var state_11111__$1 = state_11111;if(cljs.core.truth_(inst_11100))
{var statearr_11120_11142 = state_11111__$1;(statearr_11120_11142[1] = 12);
} else
{var statearr_11121_11143 = state_11111__$1;(statearr_11121_11143[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 9))
{var state_11111__$1 = state_11111;var statearr_11122_11144 = state_11111__$1;(statearr_11122_11144[2] = null);
(statearr_11122_11144[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 5))
{var state_11111__$1 = state_11111;if(cljs.core.truth_(close_QMARK_))
{var statearr_11123_11145 = state_11111__$1;(statearr_11123_11145[1] = 8);
} else
{var statearr_11124_11146 = state_11111__$1;(statearr_11124_11146[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 14))
{var inst_11105 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11125_11147 = state_11111__$1;(statearr_11125_11147[2] = inst_11105);
(statearr_11125_11147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 10))
{var inst_11097 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11126_11148 = state_11111__$1;(statearr_11126_11148[2] = inst_11097);
(statearr_11126_11148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 8))
{var inst_11094 = cljs.core.async.close_BANG_.call(null,to);var state_11111__$1 = state_11111;var statearr_11127_11149 = state_11111__$1;(statearr_11127_11149[2] = inst_11094);
(statearr_11127_11149[1] = 10);
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
});})(c__5638__auto___11135))
;return ((function (switch__5623__auto__,c__5638__auto___11135){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11131 = [null,null,null,null,null,null,null,null];(statearr_11131[0] = state_machine__5624__auto__);
(statearr_11131[1] = 1);
return statearr_11131;
});
var state_machine__5624__auto____1 = (function (state_11111){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11132){if((e11132 instanceof Object))
{var ex__5627__auto__ = e11132;var statearr_11133_11150 = state_11111;(statearr_11133_11150[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11151 = state_11111;
state_11111 = G__11151;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11111){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11135))
})();var state__5640__auto__ = (function (){var statearr_11134 = f__5639__auto__.call(null);(statearr_11134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11135);
return statearr_11134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11135))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5638__auto___11252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11252,tc,fc){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11252,tc,fc){
return (function (state_11227){var state_val_11228 = (state_11227[1]);if((state_val_11228 === 7))
{var inst_11223 = (state_11227[2]);var state_11227__$1 = state_11227;var statearr_11229_11253 = state_11227__$1;(statearr_11229_11253[2] = inst_11223);
(statearr_11229_11253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 1))
{var state_11227__$1 = state_11227;var statearr_11230_11254 = state_11227__$1;(statearr_11230_11254[2] = null);
(statearr_11230_11254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 4))
{var inst_11204 = (state_11227[7]);var inst_11204__$1 = (state_11227[2]);var inst_11205 = (inst_11204__$1 == null);var state_11227__$1 = (function (){var statearr_11231 = state_11227;(statearr_11231[7] = inst_11204__$1);
return statearr_11231;
})();if(cljs.core.truth_(inst_11205))
{var statearr_11232_11255 = state_11227__$1;(statearr_11232_11255[1] = 5);
} else
{var statearr_11233_11256 = state_11227__$1;(statearr_11233_11256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 13))
{var state_11227__$1 = state_11227;var statearr_11234_11257 = state_11227__$1;(statearr_11234_11257[2] = null);
(statearr_11234_11257[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 6))
{var inst_11204 = (state_11227[7]);var inst_11210 = p.call(null,inst_11204);var state_11227__$1 = state_11227;if(cljs.core.truth_(inst_11210))
{var statearr_11235_11258 = state_11227__$1;(statearr_11235_11258[1] = 9);
} else
{var statearr_11236_11259 = state_11227__$1;(statearr_11236_11259[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 3))
{var inst_11225 = (state_11227[2]);var state_11227__$1 = state_11227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11227__$1,inst_11225);
} else
{if((state_val_11228 === 12))
{var state_11227__$1 = state_11227;var statearr_11237_11260 = state_11227__$1;(statearr_11237_11260[2] = null);
(statearr_11237_11260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 2))
{var state_11227__$1 = state_11227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11227__$1,4,ch);
} else
{if((state_val_11228 === 11))
{var inst_11204 = (state_11227[7]);var inst_11214 = (state_11227[2]);var state_11227__$1 = state_11227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11227__$1,8,inst_11214,inst_11204);
} else
{if((state_val_11228 === 9))
{var state_11227__$1 = state_11227;var statearr_11238_11261 = state_11227__$1;(statearr_11238_11261[2] = tc);
(statearr_11238_11261[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 5))
{var inst_11207 = cljs.core.async.close_BANG_.call(null,tc);var inst_11208 = cljs.core.async.close_BANG_.call(null,fc);var state_11227__$1 = (function (){var statearr_11239 = state_11227;(statearr_11239[8] = inst_11207);
return statearr_11239;
})();var statearr_11240_11262 = state_11227__$1;(statearr_11240_11262[2] = inst_11208);
(statearr_11240_11262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 14))
{var inst_11221 = (state_11227[2]);var state_11227__$1 = state_11227;var statearr_11241_11263 = state_11227__$1;(statearr_11241_11263[2] = inst_11221);
(statearr_11241_11263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 10))
{var state_11227__$1 = state_11227;var statearr_11242_11264 = state_11227__$1;(statearr_11242_11264[2] = fc);
(statearr_11242_11264[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 8))
{var inst_11216 = (state_11227[2]);var state_11227__$1 = state_11227;if(cljs.core.truth_(inst_11216))
{var statearr_11243_11265 = state_11227__$1;(statearr_11243_11265[1] = 12);
} else
{var statearr_11244_11266 = state_11227__$1;(statearr_11244_11266[1] = 13);
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
});})(c__5638__auto___11252,tc,fc))
;return ((function (switch__5623__auto__,c__5638__auto___11252,tc,fc){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11248 = [null,null,null,null,null,null,null,null,null];(statearr_11248[0] = state_machine__5624__auto__);
(statearr_11248[1] = 1);
return statearr_11248;
});
var state_machine__5624__auto____1 = (function (state_11227){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11227);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11249){if((e11249 instanceof Object))
{var ex__5627__auto__ = e11249;var statearr_11250_11267 = state_11227;(statearr_11250_11267[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11268 = state_11227;
state_11227 = G__11268;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11227){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11252,tc,fc))
})();var state__5640__auto__ = (function (){var statearr_11251 = f__5639__auto__.call(null);(statearr_11251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11252);
return statearr_11251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11252,tc,fc))
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
return (function (state_11315){var state_val_11316 = (state_11315[1]);if((state_val_11316 === 7))
{var inst_11311 = (state_11315[2]);var state_11315__$1 = state_11315;var statearr_11317_11333 = state_11315__$1;(statearr_11317_11333[2] = inst_11311);
(statearr_11317_11333[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11316 === 6))
{var inst_11301 = (state_11315[7]);var inst_11304 = (state_11315[8]);var inst_11308 = f.call(null,inst_11301,inst_11304);var inst_11301__$1 = inst_11308;var state_11315__$1 = (function (){var statearr_11318 = state_11315;(statearr_11318[7] = inst_11301__$1);
return statearr_11318;
})();var statearr_11319_11334 = state_11315__$1;(statearr_11319_11334[2] = null);
(statearr_11319_11334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11316 === 5))
{var inst_11301 = (state_11315[7]);var state_11315__$1 = state_11315;var statearr_11320_11335 = state_11315__$1;(statearr_11320_11335[2] = inst_11301);
(statearr_11320_11335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11316 === 4))
{var inst_11304 = (state_11315[8]);var inst_11304__$1 = (state_11315[2]);var inst_11305 = (inst_11304__$1 == null);var state_11315__$1 = (function (){var statearr_11321 = state_11315;(statearr_11321[8] = inst_11304__$1);
return statearr_11321;
})();if(cljs.core.truth_(inst_11305))
{var statearr_11322_11336 = state_11315__$1;(statearr_11322_11336[1] = 5);
} else
{var statearr_11323_11337 = state_11315__$1;(statearr_11323_11337[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11316 === 3))
{var inst_11313 = (state_11315[2]);var state_11315__$1 = state_11315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11315__$1,inst_11313);
} else
{if((state_val_11316 === 2))
{var state_11315__$1 = state_11315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11315__$1,4,ch);
} else
{if((state_val_11316 === 1))
{var inst_11301 = init;var state_11315__$1 = (function (){var statearr_11324 = state_11315;(statearr_11324[7] = inst_11301);
return statearr_11324;
})();var statearr_11325_11338 = state_11315__$1;(statearr_11325_11338[2] = null);
(statearr_11325_11338[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11329 = [null,null,null,null,null,null,null,null,null];(statearr_11329[0] = state_machine__5624__auto__);
(statearr_11329[1] = 1);
return statearr_11329;
});
var state_machine__5624__auto____1 = (function (state_11315){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11315);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11330){if((e11330 instanceof Object))
{var ex__5627__auto__ = e11330;var statearr_11331_11339 = state_11315;(statearr_11331_11339[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11340 = state_11315;
state_11315 = G__11340;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11315){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11332 = f__5639__auto__.call(null);(statearr_11332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11332;
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
return (function (state_11414){var state_val_11415 = (state_11414[1]);if((state_val_11415 === 7))
{var inst_11396 = (state_11414[2]);var state_11414__$1 = state_11414;var statearr_11416_11439 = state_11414__$1;(statearr_11416_11439[2] = inst_11396);
(statearr_11416_11439[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 1))
{var inst_11390 = cljs.core.seq.call(null,coll);var inst_11391 = inst_11390;var state_11414__$1 = (function (){var statearr_11417 = state_11414;(statearr_11417[7] = inst_11391);
return statearr_11417;
})();var statearr_11418_11440 = state_11414__$1;(statearr_11418_11440[2] = null);
(statearr_11418_11440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 4))
{var inst_11391 = (state_11414[7]);var inst_11394 = cljs.core.first.call(null,inst_11391);var state_11414__$1 = state_11414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11414__$1,7,ch,inst_11394);
} else
{if((state_val_11415 === 13))
{var inst_11408 = (state_11414[2]);var state_11414__$1 = state_11414;var statearr_11419_11441 = state_11414__$1;(statearr_11419_11441[2] = inst_11408);
(statearr_11419_11441[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 6))
{var inst_11399 = (state_11414[2]);var state_11414__$1 = state_11414;if(cljs.core.truth_(inst_11399))
{var statearr_11420_11442 = state_11414__$1;(statearr_11420_11442[1] = 8);
} else
{var statearr_11421_11443 = state_11414__$1;(statearr_11421_11443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 3))
{var inst_11412 = (state_11414[2]);var state_11414__$1 = state_11414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11414__$1,inst_11412);
} else
{if((state_val_11415 === 12))
{var state_11414__$1 = state_11414;var statearr_11422_11444 = state_11414__$1;(statearr_11422_11444[2] = null);
(statearr_11422_11444[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 2))
{var inst_11391 = (state_11414[7]);var state_11414__$1 = state_11414;if(cljs.core.truth_(inst_11391))
{var statearr_11423_11445 = state_11414__$1;(statearr_11423_11445[1] = 4);
} else
{var statearr_11424_11446 = state_11414__$1;(statearr_11424_11446[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 11))
{var inst_11405 = cljs.core.async.close_BANG_.call(null,ch);var state_11414__$1 = state_11414;var statearr_11425_11447 = state_11414__$1;(statearr_11425_11447[2] = inst_11405);
(statearr_11425_11447[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 9))
{var state_11414__$1 = state_11414;if(cljs.core.truth_(close_QMARK_))
{var statearr_11426_11448 = state_11414__$1;(statearr_11426_11448[1] = 11);
} else
{var statearr_11427_11449 = state_11414__$1;(statearr_11427_11449[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 5))
{var inst_11391 = (state_11414[7]);var state_11414__$1 = state_11414;var statearr_11428_11450 = state_11414__$1;(statearr_11428_11450[2] = inst_11391);
(statearr_11428_11450[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 10))
{var inst_11410 = (state_11414[2]);var state_11414__$1 = state_11414;var statearr_11429_11451 = state_11414__$1;(statearr_11429_11451[2] = inst_11410);
(statearr_11429_11451[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11415 === 8))
{var inst_11391 = (state_11414[7]);var inst_11401 = cljs.core.next.call(null,inst_11391);var inst_11391__$1 = inst_11401;var state_11414__$1 = (function (){var statearr_11430 = state_11414;(statearr_11430[7] = inst_11391__$1);
return statearr_11430;
})();var statearr_11431_11452 = state_11414__$1;(statearr_11431_11452[2] = null);
(statearr_11431_11452[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11435 = [null,null,null,null,null,null,null,null];(statearr_11435[0] = state_machine__5624__auto__);
(statearr_11435[1] = 1);
return statearr_11435;
});
var state_machine__5624__auto____1 = (function (state_11414){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11414);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11436){if((e11436 instanceof Object))
{var ex__5627__auto__ = e11436;var statearr_11437_11453 = state_11414;(statearr_11437_11453[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11454 = state_11414;
state_11414 = G__11454;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11414){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11438 = f__5639__auto__.call(null);(statearr_11438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11438;
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
cljs.core.async.Mux = (function (){var obj11456 = {};return obj11456;
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
cljs.core.async.Mult = (function (){var obj11458 = {};return obj11458;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11680 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11680 = (function (cs,ch,mult,meta11681){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11681 = meta11681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11680.cljs$lang$type = true;
cljs.core.async.t11680.cljs$lang$ctorStr = "cljs.core.async/t11680";
cljs.core.async.t11680.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11680");
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11680.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11682){var self__ = this;
var _11682__$1 = this;return self__.meta11681;
});})(cs))
;
cljs.core.async.t11680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11682,meta11681__$1){var self__ = this;
var _11682__$1 = this;return (new cljs.core.async.t11680(self__.cs,self__.ch,self__.mult,meta11681__$1));
});})(cs))
;
cljs.core.async.__GT_t11680 = ((function (cs){
return (function __GT_t11680(cs__$1,ch__$1,mult__$1,meta11681){return (new cljs.core.async.t11680(cs__$1,ch__$1,mult__$1,meta11681));
});})(cs))
;
}
return (new cljs.core.async.t11680(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5638__auto___11901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11901,cs,m,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11901,cs,m,dchan,dctr,done){
return (function (state_11813){var state_val_11814 = (state_11813[1]);if((state_val_11814 === 7))
{var inst_11809 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11815_11902 = state_11813__$1;(statearr_11815_11902[2] = inst_11809);
(statearr_11815_11902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 20))
{var inst_11714 = (state_11813[7]);var inst_11724 = cljs.core.first.call(null,inst_11714);var inst_11725 = cljs.core.nth.call(null,inst_11724,0,null);var inst_11726 = cljs.core.nth.call(null,inst_11724,1,null);var state_11813__$1 = (function (){var statearr_11816 = state_11813;(statearr_11816[8] = inst_11725);
return statearr_11816;
})();if(cljs.core.truth_(inst_11726))
{var statearr_11817_11903 = state_11813__$1;(statearr_11817_11903[1] = 22);
} else
{var statearr_11818_11904 = state_11813__$1;(statearr_11818_11904[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 27))
{var inst_11761 = (state_11813[9]);var inst_11685 = (state_11813[10]);var inst_11756 = (state_11813[11]);var inst_11754 = (state_11813[12]);var inst_11761__$1 = cljs.core._nth.call(null,inst_11754,inst_11756);var inst_11762 = cljs.core.async.put_BANG_.call(null,inst_11761__$1,inst_11685,done);var state_11813__$1 = (function (){var statearr_11819 = state_11813;(statearr_11819[9] = inst_11761__$1);
return statearr_11819;
})();if(cljs.core.truth_(inst_11762))
{var statearr_11820_11905 = state_11813__$1;(statearr_11820_11905[1] = 30);
} else
{var statearr_11821_11906 = state_11813__$1;(statearr_11821_11906[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 1))
{var state_11813__$1 = state_11813;var statearr_11822_11907 = state_11813__$1;(statearr_11822_11907[2] = null);
(statearr_11822_11907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 24))
{var inst_11714 = (state_11813[7]);var inst_11731 = (state_11813[2]);var inst_11732 = cljs.core.next.call(null,inst_11714);var inst_11694 = inst_11732;var inst_11695 = null;var inst_11696 = 0;var inst_11697 = 0;var state_11813__$1 = (function (){var statearr_11823 = state_11813;(statearr_11823[13] = inst_11731);
(statearr_11823[14] = inst_11694);
(statearr_11823[15] = inst_11695);
(statearr_11823[16] = inst_11696);
(statearr_11823[17] = inst_11697);
return statearr_11823;
})();var statearr_11824_11908 = state_11813__$1;(statearr_11824_11908[2] = null);
(statearr_11824_11908[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 39))
{var state_11813__$1 = state_11813;var statearr_11828_11909 = state_11813__$1;(statearr_11828_11909[2] = null);
(statearr_11828_11909[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 4))
{var inst_11685 = (state_11813[10]);var inst_11685__$1 = (state_11813[2]);var inst_11686 = (inst_11685__$1 == null);var state_11813__$1 = (function (){var statearr_11829 = state_11813;(statearr_11829[10] = inst_11685__$1);
return statearr_11829;
})();if(cljs.core.truth_(inst_11686))
{var statearr_11830_11910 = state_11813__$1;(statearr_11830_11910[1] = 5);
} else
{var statearr_11831_11911 = state_11813__$1;(statearr_11831_11911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 15))
{var inst_11694 = (state_11813[14]);var inst_11695 = (state_11813[15]);var inst_11696 = (state_11813[16]);var inst_11697 = (state_11813[17]);var inst_11710 = (state_11813[2]);var inst_11711 = (inst_11697 + 1);var tmp11825 = inst_11694;var tmp11826 = inst_11695;var tmp11827 = inst_11696;var inst_11694__$1 = tmp11825;var inst_11695__$1 = tmp11826;var inst_11696__$1 = tmp11827;var inst_11697__$1 = inst_11711;var state_11813__$1 = (function (){var statearr_11832 = state_11813;(statearr_11832[18] = inst_11710);
(statearr_11832[14] = inst_11694__$1);
(statearr_11832[15] = inst_11695__$1);
(statearr_11832[16] = inst_11696__$1);
(statearr_11832[17] = inst_11697__$1);
return statearr_11832;
})();var statearr_11833_11912 = state_11813__$1;(statearr_11833_11912[2] = null);
(statearr_11833_11912[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 21))
{var inst_11735 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11837_11913 = state_11813__$1;(statearr_11837_11913[2] = inst_11735);
(statearr_11837_11913[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 31))
{var inst_11761 = (state_11813[9]);var inst_11765 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11766 = cljs.core.async.untap_STAR_.call(null,m,inst_11761);var state_11813__$1 = (function (){var statearr_11838 = state_11813;(statearr_11838[19] = inst_11765);
return statearr_11838;
})();var statearr_11839_11914 = state_11813__$1;(statearr_11839_11914[2] = inst_11766);
(statearr_11839_11914[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 32))
{var inst_11755 = (state_11813[20]);var inst_11753 = (state_11813[21]);var inst_11756 = (state_11813[11]);var inst_11754 = (state_11813[12]);var inst_11768 = (state_11813[2]);var inst_11769 = (inst_11756 + 1);var tmp11834 = inst_11755;var tmp11835 = inst_11753;var tmp11836 = inst_11754;var inst_11753__$1 = tmp11835;var inst_11754__$1 = tmp11836;var inst_11755__$1 = tmp11834;var inst_11756__$1 = inst_11769;var state_11813__$1 = (function (){var statearr_11840 = state_11813;(statearr_11840[22] = inst_11768);
(statearr_11840[20] = inst_11755__$1);
(statearr_11840[21] = inst_11753__$1);
(statearr_11840[11] = inst_11756__$1);
(statearr_11840[12] = inst_11754__$1);
return statearr_11840;
})();var statearr_11841_11915 = state_11813__$1;(statearr_11841_11915[2] = null);
(statearr_11841_11915[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 40))
{var inst_11781 = (state_11813[23]);var inst_11785 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11786 = cljs.core.async.untap_STAR_.call(null,m,inst_11781);var state_11813__$1 = (function (){var statearr_11842 = state_11813;(statearr_11842[24] = inst_11785);
return statearr_11842;
})();var statearr_11843_11916 = state_11813__$1;(statearr_11843_11916[2] = inst_11786);
(statearr_11843_11916[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 33))
{var inst_11772 = (state_11813[25]);var inst_11774 = cljs.core.chunked_seq_QMARK_.call(null,inst_11772);var state_11813__$1 = state_11813;if(inst_11774)
{var statearr_11844_11917 = state_11813__$1;(statearr_11844_11917[1] = 36);
} else
{var statearr_11845_11918 = state_11813__$1;(statearr_11845_11918[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 13))
{var inst_11704 = (state_11813[26]);var inst_11707 = cljs.core.async.close_BANG_.call(null,inst_11704);var state_11813__$1 = state_11813;var statearr_11846_11919 = state_11813__$1;(statearr_11846_11919[2] = inst_11707);
(statearr_11846_11919[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 22))
{var inst_11725 = (state_11813[8]);var inst_11728 = cljs.core.async.close_BANG_.call(null,inst_11725);var state_11813__$1 = state_11813;var statearr_11847_11920 = state_11813__$1;(statearr_11847_11920[2] = inst_11728);
(statearr_11847_11920[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 36))
{var inst_11772 = (state_11813[25]);var inst_11776 = cljs.core.chunk_first.call(null,inst_11772);var inst_11777 = cljs.core.chunk_rest.call(null,inst_11772);var inst_11778 = cljs.core.count.call(null,inst_11776);var inst_11753 = inst_11777;var inst_11754 = inst_11776;var inst_11755 = inst_11778;var inst_11756 = 0;var state_11813__$1 = (function (){var statearr_11848 = state_11813;(statearr_11848[20] = inst_11755);
(statearr_11848[21] = inst_11753);
(statearr_11848[11] = inst_11756);
(statearr_11848[12] = inst_11754);
return statearr_11848;
})();var statearr_11849_11921 = state_11813__$1;(statearr_11849_11921[2] = null);
(statearr_11849_11921[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 41))
{var inst_11772 = (state_11813[25]);var inst_11788 = (state_11813[2]);var inst_11789 = cljs.core.next.call(null,inst_11772);var inst_11753 = inst_11789;var inst_11754 = null;var inst_11755 = 0;var inst_11756 = 0;var state_11813__$1 = (function (){var statearr_11850 = state_11813;(statearr_11850[27] = inst_11788);
(statearr_11850[20] = inst_11755);
(statearr_11850[21] = inst_11753);
(statearr_11850[11] = inst_11756);
(statearr_11850[12] = inst_11754);
return statearr_11850;
})();var statearr_11851_11922 = state_11813__$1;(statearr_11851_11922[2] = null);
(statearr_11851_11922[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 43))
{var state_11813__$1 = state_11813;var statearr_11852_11923 = state_11813__$1;(statearr_11852_11923[2] = null);
(statearr_11852_11923[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 29))
{var inst_11797 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11853_11924 = state_11813__$1;(statearr_11853_11924[2] = inst_11797);
(statearr_11853_11924[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 44))
{var inst_11806 = (state_11813[2]);var state_11813__$1 = (function (){var statearr_11854 = state_11813;(statearr_11854[28] = inst_11806);
return statearr_11854;
})();var statearr_11855_11925 = state_11813__$1;(statearr_11855_11925[2] = null);
(statearr_11855_11925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 6))
{var inst_11745 = (state_11813[29]);var inst_11744 = cljs.core.deref.call(null,cs);var inst_11745__$1 = cljs.core.keys.call(null,inst_11744);var inst_11746 = cljs.core.count.call(null,inst_11745__$1);var inst_11747 = cljs.core.reset_BANG_.call(null,dctr,inst_11746);var inst_11752 = cljs.core.seq.call(null,inst_11745__$1);var inst_11753 = inst_11752;var inst_11754 = null;var inst_11755 = 0;var inst_11756 = 0;var state_11813__$1 = (function (){var statearr_11856 = state_11813;(statearr_11856[20] = inst_11755);
(statearr_11856[21] = inst_11753);
(statearr_11856[30] = inst_11747);
(statearr_11856[11] = inst_11756);
(statearr_11856[29] = inst_11745__$1);
(statearr_11856[12] = inst_11754);
return statearr_11856;
})();var statearr_11857_11926 = state_11813__$1;(statearr_11857_11926[2] = null);
(statearr_11857_11926[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 28))
{var inst_11772 = (state_11813[25]);var inst_11753 = (state_11813[21]);var inst_11772__$1 = cljs.core.seq.call(null,inst_11753);var state_11813__$1 = (function (){var statearr_11858 = state_11813;(statearr_11858[25] = inst_11772__$1);
return statearr_11858;
})();if(inst_11772__$1)
{var statearr_11859_11927 = state_11813__$1;(statearr_11859_11927[1] = 33);
} else
{var statearr_11860_11928 = state_11813__$1;(statearr_11860_11928[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 25))
{var inst_11755 = (state_11813[20]);var inst_11756 = (state_11813[11]);var inst_11758 = (inst_11756 < inst_11755);var inst_11759 = inst_11758;var state_11813__$1 = state_11813;if(cljs.core.truth_(inst_11759))
{var statearr_11861_11929 = state_11813__$1;(statearr_11861_11929[1] = 27);
} else
{var statearr_11862_11930 = state_11813__$1;(statearr_11862_11930[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 34))
{var state_11813__$1 = state_11813;var statearr_11863_11931 = state_11813__$1;(statearr_11863_11931[2] = null);
(statearr_11863_11931[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 17))
{var state_11813__$1 = state_11813;var statearr_11864_11932 = state_11813__$1;(statearr_11864_11932[2] = null);
(statearr_11864_11932[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 3))
{var inst_11811 = (state_11813[2]);var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11813__$1,inst_11811);
} else
{if((state_val_11814 === 12))
{var inst_11740 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11865_11933 = state_11813__$1;(statearr_11865_11933[2] = inst_11740);
(statearr_11865_11933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 2))
{var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11813__$1,4,ch);
} else
{if((state_val_11814 === 23))
{var state_11813__$1 = state_11813;var statearr_11866_11934 = state_11813__$1;(statearr_11866_11934[2] = null);
(statearr_11866_11934[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 35))
{var inst_11795 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11867_11935 = state_11813__$1;(statearr_11867_11935[2] = inst_11795);
(statearr_11867_11935[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 19))
{var inst_11714 = (state_11813[7]);var inst_11718 = cljs.core.chunk_first.call(null,inst_11714);var inst_11719 = cljs.core.chunk_rest.call(null,inst_11714);var inst_11720 = cljs.core.count.call(null,inst_11718);var inst_11694 = inst_11719;var inst_11695 = inst_11718;var inst_11696 = inst_11720;var inst_11697 = 0;var state_11813__$1 = (function (){var statearr_11868 = state_11813;(statearr_11868[14] = inst_11694);
(statearr_11868[15] = inst_11695);
(statearr_11868[16] = inst_11696);
(statearr_11868[17] = inst_11697);
return statearr_11868;
})();var statearr_11869_11936 = state_11813__$1;(statearr_11869_11936[2] = null);
(statearr_11869_11936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 11))
{var inst_11714 = (state_11813[7]);var inst_11694 = (state_11813[14]);var inst_11714__$1 = cljs.core.seq.call(null,inst_11694);var state_11813__$1 = (function (){var statearr_11870 = state_11813;(statearr_11870[7] = inst_11714__$1);
return statearr_11870;
})();if(inst_11714__$1)
{var statearr_11871_11937 = state_11813__$1;(statearr_11871_11937[1] = 16);
} else
{var statearr_11872_11938 = state_11813__$1;(statearr_11872_11938[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 9))
{var inst_11742 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11873_11939 = state_11813__$1;(statearr_11873_11939[2] = inst_11742);
(statearr_11873_11939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 5))
{var inst_11692 = cljs.core.deref.call(null,cs);var inst_11693 = cljs.core.seq.call(null,inst_11692);var inst_11694 = inst_11693;var inst_11695 = null;var inst_11696 = 0;var inst_11697 = 0;var state_11813__$1 = (function (){var statearr_11874 = state_11813;(statearr_11874[14] = inst_11694);
(statearr_11874[15] = inst_11695);
(statearr_11874[16] = inst_11696);
(statearr_11874[17] = inst_11697);
return statearr_11874;
})();var statearr_11875_11940 = state_11813__$1;(statearr_11875_11940[2] = null);
(statearr_11875_11940[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 14))
{var state_11813__$1 = state_11813;var statearr_11876_11941 = state_11813__$1;(statearr_11876_11941[2] = null);
(statearr_11876_11941[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 45))
{var inst_11803 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11877_11942 = state_11813__$1;(statearr_11877_11942[2] = inst_11803);
(statearr_11877_11942[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 26))
{var inst_11745 = (state_11813[29]);var inst_11799 = (state_11813[2]);var inst_11800 = cljs.core.seq.call(null,inst_11745);var state_11813__$1 = (function (){var statearr_11878 = state_11813;(statearr_11878[31] = inst_11799);
return statearr_11878;
})();if(inst_11800)
{var statearr_11879_11943 = state_11813__$1;(statearr_11879_11943[1] = 42);
} else
{var statearr_11880_11944 = state_11813__$1;(statearr_11880_11944[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 16))
{var inst_11714 = (state_11813[7]);var inst_11716 = cljs.core.chunked_seq_QMARK_.call(null,inst_11714);var state_11813__$1 = state_11813;if(inst_11716)
{var statearr_11881_11945 = state_11813__$1;(statearr_11881_11945[1] = 19);
} else
{var statearr_11882_11946 = state_11813__$1;(statearr_11882_11946[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 38))
{var inst_11792 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11883_11947 = state_11813__$1;(statearr_11883_11947[2] = inst_11792);
(statearr_11883_11947[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 30))
{var state_11813__$1 = state_11813;var statearr_11884_11948 = state_11813__$1;(statearr_11884_11948[2] = null);
(statearr_11884_11948[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 10))
{var inst_11695 = (state_11813[15]);var inst_11697 = (state_11813[17]);var inst_11703 = cljs.core._nth.call(null,inst_11695,inst_11697);var inst_11704 = cljs.core.nth.call(null,inst_11703,0,null);var inst_11705 = cljs.core.nth.call(null,inst_11703,1,null);var state_11813__$1 = (function (){var statearr_11885 = state_11813;(statearr_11885[26] = inst_11704);
return statearr_11885;
})();if(cljs.core.truth_(inst_11705))
{var statearr_11886_11949 = state_11813__$1;(statearr_11886_11949[1] = 13);
} else
{var statearr_11887_11950 = state_11813__$1;(statearr_11887_11950[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 18))
{var inst_11738 = (state_11813[2]);var state_11813__$1 = state_11813;var statearr_11888_11951 = state_11813__$1;(statearr_11888_11951[2] = inst_11738);
(statearr_11888_11951[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 42))
{var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11813__$1,45,dchan);
} else
{if((state_val_11814 === 37))
{var inst_11772 = (state_11813[25]);var inst_11781 = (state_11813[23]);var inst_11685 = (state_11813[10]);var inst_11781__$1 = cljs.core.first.call(null,inst_11772);var inst_11782 = cljs.core.async.put_BANG_.call(null,inst_11781__$1,inst_11685,done);var state_11813__$1 = (function (){var statearr_11889 = state_11813;(statearr_11889[23] = inst_11781__$1);
return statearr_11889;
})();if(cljs.core.truth_(inst_11782))
{var statearr_11890_11952 = state_11813__$1;(statearr_11890_11952[1] = 39);
} else
{var statearr_11891_11953 = state_11813__$1;(statearr_11891_11953[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11814 === 8))
{var inst_11696 = (state_11813[16]);var inst_11697 = (state_11813[17]);var inst_11699 = (inst_11697 < inst_11696);var inst_11700 = inst_11699;var state_11813__$1 = state_11813;if(cljs.core.truth_(inst_11700))
{var statearr_11892_11954 = state_11813__$1;(statearr_11892_11954[1] = 10);
} else
{var statearr_11893_11955 = state_11813__$1;(statearr_11893_11955[1] = 11);
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
});})(c__5638__auto___11901,cs,m,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___11901,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11897[0] = state_machine__5624__auto__);
(statearr_11897[1] = 1);
return statearr_11897;
});
var state_machine__5624__auto____1 = (function (state_11813){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11813);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11898){if((e11898 instanceof Object))
{var ex__5627__auto__ = e11898;var statearr_11899_11956 = state_11813;(statearr_11899_11956[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11957 = state_11813;
state_11813 = G__11957;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11813){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11901,cs,m,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_11900 = f__5639__auto__.call(null);(statearr_11900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11901);
return statearr_11900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11901,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11959 = {};return obj11959;
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
;var m = (function (){if(typeof cljs.core.async.t12079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12079 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12080){
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
this.meta12080 = meta12080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12079.cljs$lang$type = true;
cljs.core.async.t12079.cljs$lang$ctorStr = "cljs.core.async/t12079";
cljs.core.async.t12079.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12079");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12081){var self__ = this;
var _12081__$1 = this;return self__.meta12080;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12081,meta12080__$1){var self__ = this;
var _12081__$1 = this;return (new cljs.core.async.t12079(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12080__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12079 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12079(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12080){return (new cljs.core.async.t12079(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12080));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12079(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5638__auto___12198 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12151){var state_val_12152 = (state_12151[1]);if((state_val_12152 === 7))
{var inst_12095 = (state_12151[7]);var inst_12100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12095);var state_12151__$1 = state_12151;var statearr_12153_12199 = state_12151__$1;(statearr_12153_12199[2] = inst_12100);
(statearr_12153_12199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 20))
{var inst_12110 = (state_12151[8]);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12151__$1,23,out,inst_12110);
} else
{if((state_val_12152 === 1))
{var inst_12085 = (state_12151[9]);var inst_12085__$1 = calc_state.call(null);var inst_12086 = cljs.core.seq_QMARK_.call(null,inst_12085__$1);var state_12151__$1 = (function (){var statearr_12154 = state_12151;(statearr_12154[9] = inst_12085__$1);
return statearr_12154;
})();if(inst_12086)
{var statearr_12155_12200 = state_12151__$1;(statearr_12155_12200[1] = 2);
} else
{var statearr_12156_12201 = state_12151__$1;(statearr_12156_12201[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 24))
{var inst_12103 = (state_12151[10]);var inst_12095 = inst_12103;var state_12151__$1 = (function (){var statearr_12157 = state_12151;(statearr_12157[7] = inst_12095);
return statearr_12157;
})();var statearr_12158_12202 = state_12151__$1;(statearr_12158_12202[2] = null);
(statearr_12158_12202[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 4))
{var inst_12085 = (state_12151[9]);var inst_12091 = (state_12151[2]);var inst_12092 = cljs.core.get.call(null,inst_12091,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12093 = cljs.core.get.call(null,inst_12091,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12094 = cljs.core.get.call(null,inst_12091,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12095 = inst_12085;var state_12151__$1 = (function (){var statearr_12159 = state_12151;(statearr_12159[7] = inst_12095);
(statearr_12159[11] = inst_12093);
(statearr_12159[12] = inst_12094);
(statearr_12159[13] = inst_12092);
return statearr_12159;
})();var statearr_12160_12203 = state_12151__$1;(statearr_12160_12203[2] = null);
(statearr_12160_12203[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 15))
{var state_12151__$1 = state_12151;var statearr_12161_12204 = state_12151__$1;(statearr_12161_12204[2] = null);
(statearr_12161_12204[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 21))
{var inst_12103 = (state_12151[10]);var inst_12095 = inst_12103;var state_12151__$1 = (function (){var statearr_12162 = state_12151;(statearr_12162[7] = inst_12095);
return statearr_12162;
})();var statearr_12163_12205 = state_12151__$1;(statearr_12163_12205[2] = null);
(statearr_12163_12205[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 13))
{var inst_12147 = (state_12151[2]);var state_12151__$1 = state_12151;var statearr_12164_12206 = state_12151__$1;(statearr_12164_12206[2] = inst_12147);
(statearr_12164_12206[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 22))
{var inst_12145 = (state_12151[2]);var state_12151__$1 = state_12151;var statearr_12165_12207 = state_12151__$1;(statearr_12165_12207[2] = inst_12145);
(statearr_12165_12207[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 6))
{var inst_12149 = (state_12151[2]);var state_12151__$1 = state_12151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12151__$1,inst_12149);
} else
{if((state_val_12152 === 25))
{var state_12151__$1 = state_12151;var statearr_12166_12208 = state_12151__$1;(statearr_12166_12208[2] = null);
(statearr_12166_12208[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 17))
{var inst_12125 = (state_12151[14]);var state_12151__$1 = state_12151;var statearr_12167_12209 = state_12151__$1;(statearr_12167_12209[2] = inst_12125);
(statearr_12167_12209[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 3))
{var inst_12085 = (state_12151[9]);var state_12151__$1 = state_12151;var statearr_12168_12210 = state_12151__$1;(statearr_12168_12210[2] = inst_12085);
(statearr_12168_12210[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 12))
{var inst_12106 = (state_12151[15]);var inst_12111 = (state_12151[16]);var inst_12125 = (state_12151[14]);var inst_12125__$1 = inst_12106.call(null,inst_12111);var state_12151__$1 = (function (){var statearr_12169 = state_12151;(statearr_12169[14] = inst_12125__$1);
return statearr_12169;
})();if(cljs.core.truth_(inst_12125__$1))
{var statearr_12170_12211 = state_12151__$1;(statearr_12170_12211[1] = 17);
} else
{var statearr_12171_12212 = state_12151__$1;(statearr_12171_12212[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 2))
{var inst_12085 = (state_12151[9]);var inst_12088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12085);var state_12151__$1 = state_12151;var statearr_12172_12213 = state_12151__$1;(statearr_12172_12213[2] = inst_12088);
(statearr_12172_12213[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 23))
{var inst_12136 = (state_12151[2]);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12136))
{var statearr_12173_12214 = state_12151__$1;(statearr_12173_12214[1] = 24);
} else
{var statearr_12174_12215 = state_12151__$1;(statearr_12174_12215[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 19))
{var inst_12133 = (state_12151[2]);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12133))
{var statearr_12175_12216 = state_12151__$1;(statearr_12175_12216[1] = 20);
} else
{var statearr_12176_12217 = state_12151__$1;(statearr_12176_12217[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 11))
{var inst_12110 = (state_12151[8]);var inst_12116 = (inst_12110 == null);var state_12151__$1 = state_12151;if(cljs.core.truth_(inst_12116))
{var statearr_12177_12218 = state_12151__$1;(statearr_12177_12218[1] = 14);
} else
{var statearr_12178_12219 = state_12151__$1;(statearr_12178_12219[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 9))
{var inst_12103 = (state_12151[10]);var inst_12103__$1 = (state_12151[2]);var inst_12104 = cljs.core.get.call(null,inst_12103__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12105 = cljs.core.get.call(null,inst_12103__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12106 = cljs.core.get.call(null,inst_12103__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12151__$1 = (function (){var statearr_12179 = state_12151;(statearr_12179[15] = inst_12106);
(statearr_12179[10] = inst_12103__$1);
(statearr_12179[17] = inst_12105);
return statearr_12179;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12151__$1,10,inst_12104);
} else
{if((state_val_12152 === 5))
{var inst_12095 = (state_12151[7]);var inst_12098 = cljs.core.seq_QMARK_.call(null,inst_12095);var state_12151__$1 = state_12151;if(inst_12098)
{var statearr_12180_12220 = state_12151__$1;(statearr_12180_12220[1] = 7);
} else
{var statearr_12181_12221 = state_12151__$1;(statearr_12181_12221[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 14))
{var inst_12111 = (state_12151[16]);var inst_12118 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12111);var state_12151__$1 = state_12151;var statearr_12182_12222 = state_12151__$1;(statearr_12182_12222[2] = inst_12118);
(statearr_12182_12222[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 26))
{var inst_12141 = (state_12151[2]);var state_12151__$1 = state_12151;var statearr_12183_12223 = state_12151__$1;(statearr_12183_12223[2] = inst_12141);
(statearr_12183_12223[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 16))
{var inst_12121 = (state_12151[2]);var inst_12122 = calc_state.call(null);var inst_12095 = inst_12122;var state_12151__$1 = (function (){var statearr_12184 = state_12151;(statearr_12184[7] = inst_12095);
(statearr_12184[18] = inst_12121);
return statearr_12184;
})();var statearr_12185_12224 = state_12151__$1;(statearr_12185_12224[2] = null);
(statearr_12185_12224[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 10))
{var inst_12110 = (state_12151[8]);var inst_12111 = (state_12151[16]);var inst_12109 = (state_12151[2]);var inst_12110__$1 = cljs.core.nth.call(null,inst_12109,0,null);var inst_12111__$1 = cljs.core.nth.call(null,inst_12109,1,null);var inst_12112 = (inst_12110__$1 == null);var inst_12113 = cljs.core._EQ_.call(null,inst_12111__$1,change);var inst_12114 = (inst_12112) || (inst_12113);var state_12151__$1 = (function (){var statearr_12186 = state_12151;(statearr_12186[8] = inst_12110__$1);
(statearr_12186[16] = inst_12111__$1);
return statearr_12186;
})();if(cljs.core.truth_(inst_12114))
{var statearr_12187_12225 = state_12151__$1;(statearr_12187_12225[1] = 11);
} else
{var statearr_12188_12226 = state_12151__$1;(statearr_12188_12226[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 18))
{var inst_12106 = (state_12151[15]);var inst_12111 = (state_12151[16]);var inst_12105 = (state_12151[17]);var inst_12128 = cljs.core.empty_QMARK_.call(null,inst_12106);var inst_12129 = inst_12105.call(null,inst_12111);var inst_12130 = cljs.core.not.call(null,inst_12129);var inst_12131 = (inst_12128) && (inst_12130);var state_12151__$1 = state_12151;var statearr_12189_12227 = state_12151__$1;(statearr_12189_12227[2] = inst_12131);
(statearr_12189_12227[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12152 === 8))
{var inst_12095 = (state_12151[7]);var state_12151__$1 = state_12151;var statearr_12190_12228 = state_12151__$1;(statearr_12190_12228[2] = inst_12095);
(statearr_12190_12228[1] = 9);
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
});})(c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5623__auto__,c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12194[0] = state_machine__5624__auto__);
(statearr_12194[1] = 1);
return statearr_12194;
});
var state_machine__5624__auto____1 = (function (state_12151){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12151);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12195){if((e12195 instanceof Object))
{var ex__5627__auto__ = e12195;var statearr_12196_12229 = state_12151;(statearr_12196_12229[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12230 = state_12151;
state_12151 = G__12230;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5640__auto__ = (function (){var statearr_12197 = f__5639__auto__.call(null);(statearr_12197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12198);
return statearr_12197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12198,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12232 = {};return obj12232;
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
return (function (p1__12233_SHARP_){if(cljs.core.truth_(p1__12233_SHARP_.call(null,topic)))
{return p1__12233_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12233_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12356 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12357){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12357 = meta12357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12356.cljs$lang$type = true;
cljs.core.async.t12356.cljs$lang$ctorStr = "cljs.core.async/t12356";
cljs.core.async.t12356.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12356");
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12358){var self__ = this;
var _12358__$1 = this;return self__.meta12357;
});})(mults,ensure_mult))
;
cljs.core.async.t12356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12358,meta12357__$1){var self__ = this;
var _12358__$1 = this;return (new cljs.core.async.t12356(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12357__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12356 = ((function (mults,ensure_mult){
return (function __GT_t12356(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12357){return (new cljs.core.async.t12356(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12357));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12356(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5638__auto___12478 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12478,mults,ensure_mult,p){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12478,mults,ensure_mult,p){
return (function (state_12430){var state_val_12431 = (state_12430[1]);if((state_val_12431 === 7))
{var inst_12426 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12432_12479 = state_12430__$1;(statearr_12432_12479[2] = inst_12426);
(statearr_12432_12479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 20))
{var state_12430__$1 = state_12430;var statearr_12433_12480 = state_12430__$1;(statearr_12433_12480[2] = null);
(statearr_12433_12480[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 1))
{var state_12430__$1 = state_12430;var statearr_12434_12481 = state_12430__$1;(statearr_12434_12481[2] = null);
(statearr_12434_12481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 24))
{var inst_12409 = (state_12430[7]);var inst_12418 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12409);var state_12430__$1 = state_12430;var statearr_12435_12482 = state_12430__$1;(statearr_12435_12482[2] = inst_12418);
(statearr_12435_12482[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 4))
{var inst_12361 = (state_12430[8]);var inst_12361__$1 = (state_12430[2]);var inst_12362 = (inst_12361__$1 == null);var state_12430__$1 = (function (){var statearr_12436 = state_12430;(statearr_12436[8] = inst_12361__$1);
return statearr_12436;
})();if(cljs.core.truth_(inst_12362))
{var statearr_12437_12483 = state_12430__$1;(statearr_12437_12483[1] = 5);
} else
{var statearr_12438_12484 = state_12430__$1;(statearr_12438_12484[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 15))
{var inst_12403 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12439_12485 = state_12430__$1;(statearr_12439_12485[2] = inst_12403);
(statearr_12439_12485[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 21))
{var inst_12423 = (state_12430[2]);var state_12430__$1 = (function (){var statearr_12440 = state_12430;(statearr_12440[9] = inst_12423);
return statearr_12440;
})();var statearr_12441_12486 = state_12430__$1;(statearr_12441_12486[2] = null);
(statearr_12441_12486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 13))
{var inst_12385 = (state_12430[10]);var inst_12387 = cljs.core.chunked_seq_QMARK_.call(null,inst_12385);var state_12430__$1 = state_12430;if(inst_12387)
{var statearr_12442_12487 = state_12430__$1;(statearr_12442_12487[1] = 16);
} else
{var statearr_12443_12488 = state_12430__$1;(statearr_12443_12488[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 22))
{var inst_12415 = (state_12430[2]);var state_12430__$1 = state_12430;if(cljs.core.truth_(inst_12415))
{var statearr_12444_12489 = state_12430__$1;(statearr_12444_12489[1] = 23);
} else
{var statearr_12445_12490 = state_12430__$1;(statearr_12445_12490[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 6))
{var inst_12361 = (state_12430[8]);var inst_12411 = (state_12430[11]);var inst_12409 = (state_12430[7]);var inst_12409__$1 = topic_fn.call(null,inst_12361);var inst_12410 = cljs.core.deref.call(null,mults);var inst_12411__$1 = cljs.core.get.call(null,inst_12410,inst_12409__$1);var state_12430__$1 = (function (){var statearr_12446 = state_12430;(statearr_12446[11] = inst_12411__$1);
(statearr_12446[7] = inst_12409__$1);
return statearr_12446;
})();if(cljs.core.truth_(inst_12411__$1))
{var statearr_12447_12491 = state_12430__$1;(statearr_12447_12491[1] = 19);
} else
{var statearr_12448_12492 = state_12430__$1;(statearr_12448_12492[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 25))
{var inst_12420 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12449_12493 = state_12430__$1;(statearr_12449_12493[2] = inst_12420);
(statearr_12449_12493[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 17))
{var inst_12385 = (state_12430[10]);var inst_12394 = cljs.core.first.call(null,inst_12385);var inst_12395 = cljs.core.async.muxch_STAR_.call(null,inst_12394);var inst_12396 = cljs.core.async.close_BANG_.call(null,inst_12395);var inst_12397 = cljs.core.next.call(null,inst_12385);var inst_12371 = inst_12397;var inst_12372 = null;var inst_12373 = 0;var inst_12374 = 0;var state_12430__$1 = (function (){var statearr_12450 = state_12430;(statearr_12450[12] = inst_12373);
(statearr_12450[13] = inst_12372);
(statearr_12450[14] = inst_12374);
(statearr_12450[15] = inst_12396);
(statearr_12450[16] = inst_12371);
return statearr_12450;
})();var statearr_12451_12494 = state_12430__$1;(statearr_12451_12494[2] = null);
(statearr_12451_12494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 3))
{var inst_12428 = (state_12430[2]);var state_12430__$1 = state_12430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12430__$1,inst_12428);
} else
{if((state_val_12431 === 12))
{var inst_12405 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12452_12495 = state_12430__$1;(statearr_12452_12495[2] = inst_12405);
(statearr_12452_12495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 2))
{var state_12430__$1 = state_12430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12430__$1,4,ch);
} else
{if((state_val_12431 === 23))
{var state_12430__$1 = state_12430;var statearr_12453_12496 = state_12430__$1;(statearr_12453_12496[2] = null);
(statearr_12453_12496[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 19))
{var inst_12361 = (state_12430[8]);var inst_12411 = (state_12430[11]);var inst_12413 = cljs.core.async.muxch_STAR_.call(null,inst_12411);var state_12430__$1 = state_12430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12430__$1,22,inst_12413,inst_12361);
} else
{if((state_val_12431 === 11))
{var inst_12385 = (state_12430[10]);var inst_12371 = (state_12430[16]);var inst_12385__$1 = cljs.core.seq.call(null,inst_12371);var state_12430__$1 = (function (){var statearr_12454 = state_12430;(statearr_12454[10] = inst_12385__$1);
return statearr_12454;
})();if(inst_12385__$1)
{var statearr_12455_12497 = state_12430__$1;(statearr_12455_12497[1] = 13);
} else
{var statearr_12456_12498 = state_12430__$1;(statearr_12456_12498[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 9))
{var inst_12407 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12457_12499 = state_12430__$1;(statearr_12457_12499[2] = inst_12407);
(statearr_12457_12499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 5))
{var inst_12368 = cljs.core.deref.call(null,mults);var inst_12369 = cljs.core.vals.call(null,inst_12368);var inst_12370 = cljs.core.seq.call(null,inst_12369);var inst_12371 = inst_12370;var inst_12372 = null;var inst_12373 = 0;var inst_12374 = 0;var state_12430__$1 = (function (){var statearr_12458 = state_12430;(statearr_12458[12] = inst_12373);
(statearr_12458[13] = inst_12372);
(statearr_12458[14] = inst_12374);
(statearr_12458[16] = inst_12371);
return statearr_12458;
})();var statearr_12459_12500 = state_12430__$1;(statearr_12459_12500[2] = null);
(statearr_12459_12500[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 14))
{var state_12430__$1 = state_12430;var statearr_12463_12501 = state_12430__$1;(statearr_12463_12501[2] = null);
(statearr_12463_12501[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 16))
{var inst_12385 = (state_12430[10]);var inst_12389 = cljs.core.chunk_first.call(null,inst_12385);var inst_12390 = cljs.core.chunk_rest.call(null,inst_12385);var inst_12391 = cljs.core.count.call(null,inst_12389);var inst_12371 = inst_12390;var inst_12372 = inst_12389;var inst_12373 = inst_12391;var inst_12374 = 0;var state_12430__$1 = (function (){var statearr_12464 = state_12430;(statearr_12464[12] = inst_12373);
(statearr_12464[13] = inst_12372);
(statearr_12464[14] = inst_12374);
(statearr_12464[16] = inst_12371);
return statearr_12464;
})();var statearr_12465_12502 = state_12430__$1;(statearr_12465_12502[2] = null);
(statearr_12465_12502[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 10))
{var inst_12373 = (state_12430[12]);var inst_12372 = (state_12430[13]);var inst_12374 = (state_12430[14]);var inst_12371 = (state_12430[16]);var inst_12379 = cljs.core._nth.call(null,inst_12372,inst_12374);var inst_12380 = cljs.core.async.muxch_STAR_.call(null,inst_12379);var inst_12381 = cljs.core.async.close_BANG_.call(null,inst_12380);var inst_12382 = (inst_12374 + 1);var tmp12460 = inst_12373;var tmp12461 = inst_12372;var tmp12462 = inst_12371;var inst_12371__$1 = tmp12462;var inst_12372__$1 = tmp12461;var inst_12373__$1 = tmp12460;var inst_12374__$1 = inst_12382;var state_12430__$1 = (function (){var statearr_12466 = state_12430;(statearr_12466[12] = inst_12373__$1);
(statearr_12466[13] = inst_12372__$1);
(statearr_12466[14] = inst_12374__$1);
(statearr_12466[17] = inst_12381);
(statearr_12466[16] = inst_12371__$1);
return statearr_12466;
})();var statearr_12467_12503 = state_12430__$1;(statearr_12467_12503[2] = null);
(statearr_12467_12503[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 18))
{var inst_12400 = (state_12430[2]);var state_12430__$1 = state_12430;var statearr_12468_12504 = state_12430__$1;(statearr_12468_12504[2] = inst_12400);
(statearr_12468_12504[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12431 === 8))
{var inst_12373 = (state_12430[12]);var inst_12374 = (state_12430[14]);var inst_12376 = (inst_12374 < inst_12373);var inst_12377 = inst_12376;var state_12430__$1 = state_12430;if(cljs.core.truth_(inst_12377))
{var statearr_12469_12505 = state_12430__$1;(statearr_12469_12505[1] = 10);
} else
{var statearr_12470_12506 = state_12430__$1;(statearr_12470_12506[1] = 11);
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
});})(c__5638__auto___12478,mults,ensure_mult,p))
;return ((function (switch__5623__auto__,c__5638__auto___12478,mults,ensure_mult,p){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12474[0] = state_machine__5624__auto__);
(statearr_12474[1] = 1);
return statearr_12474;
});
var state_machine__5624__auto____1 = (function (state_12430){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12475){if((e12475 instanceof Object))
{var ex__5627__auto__ = e12475;var statearr_12476_12507 = state_12430;(statearr_12476_12507[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12508 = state_12430;
state_12430 = G__12508;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12430){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12478,mults,ensure_mult,p))
})();var state__5640__auto__ = (function (){var statearr_12477 = f__5639__auto__.call(null);(statearr_12477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12478);
return statearr_12477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12478,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5638__auto___12645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12615){var state_val_12616 = (state_12615[1]);if((state_val_12616 === 7))
{var state_12615__$1 = state_12615;var statearr_12617_12646 = state_12615__$1;(statearr_12617_12646[2] = null);
(statearr_12617_12646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 1))
{var state_12615__$1 = state_12615;var statearr_12618_12647 = state_12615__$1;(statearr_12618_12647[2] = null);
(statearr_12618_12647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 4))
{var inst_12579 = (state_12615[7]);var inst_12581 = (inst_12579 < cnt);var state_12615__$1 = state_12615;if(cljs.core.truth_(inst_12581))
{var statearr_12619_12648 = state_12615__$1;(statearr_12619_12648[1] = 6);
} else
{var statearr_12620_12649 = state_12615__$1;(statearr_12620_12649[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 15))
{var inst_12611 = (state_12615[2]);var state_12615__$1 = state_12615;var statearr_12621_12650 = state_12615__$1;(statearr_12621_12650[2] = inst_12611);
(statearr_12621_12650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 13))
{var inst_12604 = cljs.core.async.close_BANG_.call(null,out);var state_12615__$1 = state_12615;var statearr_12622_12651 = state_12615__$1;(statearr_12622_12651[2] = inst_12604);
(statearr_12622_12651[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 6))
{var state_12615__$1 = state_12615;var statearr_12623_12652 = state_12615__$1;(statearr_12623_12652[2] = null);
(statearr_12623_12652[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 3))
{var inst_12613 = (state_12615[2]);var state_12615__$1 = state_12615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12615__$1,inst_12613);
} else
{if((state_val_12616 === 12))
{var inst_12601 = (state_12615[8]);var inst_12601__$1 = (state_12615[2]);var inst_12602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12601__$1);var state_12615__$1 = (function (){var statearr_12624 = state_12615;(statearr_12624[8] = inst_12601__$1);
return statearr_12624;
})();if(cljs.core.truth_(inst_12602))
{var statearr_12625_12653 = state_12615__$1;(statearr_12625_12653[1] = 13);
} else
{var statearr_12626_12654 = state_12615__$1;(statearr_12626_12654[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 2))
{var inst_12578 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12579 = 0;var state_12615__$1 = (function (){var statearr_12627 = state_12615;(statearr_12627[7] = inst_12579);
(statearr_12627[9] = inst_12578);
return statearr_12627;
})();var statearr_12628_12655 = state_12615__$1;(statearr_12628_12655[2] = null);
(statearr_12628_12655[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 11))
{var inst_12579 = (state_12615[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12615,10,Object,null,9);var inst_12588 = chs__$1.call(null,inst_12579);var inst_12589 = done.call(null,inst_12579);var inst_12590 = cljs.core.async.take_BANG_.call(null,inst_12588,inst_12589);var state_12615__$1 = state_12615;var statearr_12629_12656 = state_12615__$1;(statearr_12629_12656[2] = inst_12590);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 9))
{var inst_12579 = (state_12615[7]);var inst_12592 = (state_12615[2]);var inst_12593 = (inst_12579 + 1);var inst_12579__$1 = inst_12593;var state_12615__$1 = (function (){var statearr_12630 = state_12615;(statearr_12630[7] = inst_12579__$1);
(statearr_12630[10] = inst_12592);
return statearr_12630;
})();var statearr_12631_12657 = state_12615__$1;(statearr_12631_12657[2] = null);
(statearr_12631_12657[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 5))
{var inst_12599 = (state_12615[2]);var state_12615__$1 = (function (){var statearr_12632 = state_12615;(statearr_12632[11] = inst_12599);
return statearr_12632;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12615__$1,12,dchan);
} else
{if((state_val_12616 === 14))
{var inst_12601 = (state_12615[8]);var inst_12606 = cljs.core.apply.call(null,f,inst_12601);var state_12615__$1 = state_12615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12615__$1,16,out,inst_12606);
} else
{if((state_val_12616 === 16))
{var inst_12608 = (state_12615[2]);var state_12615__$1 = (function (){var statearr_12633 = state_12615;(statearr_12633[12] = inst_12608);
return statearr_12633;
})();var statearr_12634_12658 = state_12615__$1;(statearr_12634_12658[2] = null);
(statearr_12634_12658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 10))
{var inst_12583 = (state_12615[2]);var inst_12584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12615__$1 = (function (){var statearr_12635 = state_12615;(statearr_12635[13] = inst_12583);
return statearr_12635;
})();var statearr_12636_12659 = state_12615__$1;(statearr_12636_12659[2] = inst_12584);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12616 === 8))
{var inst_12597 = (state_12615[2]);var state_12615__$1 = state_12615;var statearr_12637_12660 = state_12615__$1;(statearr_12637_12660[2] = inst_12597);
(statearr_12637_12660[1] = 5);
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
});})(c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12641[0] = state_machine__5624__auto__);
(statearr_12641[1] = 1);
return statearr_12641;
});
var state_machine__5624__auto____1 = (function (state_12615){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12642){if((e12642 instanceof Object))
{var ex__5627__auto__ = e12642;var statearr_12643_12661 = state_12615;(statearr_12643_12661[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12662 = state_12615;
state_12615 = G__12662;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12644 = f__5639__auto__.call(null);(statearr_12644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12645);
return statearr_12644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12645,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12770,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12770,out){
return (function (state_12746){var state_val_12747 = (state_12746[1]);if((state_val_12747 === 7))
{var inst_12725 = (state_12746[7]);var inst_12726 = (state_12746[8]);var inst_12725__$1 = (state_12746[2]);var inst_12726__$1 = cljs.core.nth.call(null,inst_12725__$1,0,null);var inst_12727 = cljs.core.nth.call(null,inst_12725__$1,1,null);var inst_12728 = (inst_12726__$1 == null);var state_12746__$1 = (function (){var statearr_12748 = state_12746;(statearr_12748[7] = inst_12725__$1);
(statearr_12748[8] = inst_12726__$1);
(statearr_12748[9] = inst_12727);
return statearr_12748;
})();if(cljs.core.truth_(inst_12728))
{var statearr_12749_12771 = state_12746__$1;(statearr_12749_12771[1] = 8);
} else
{var statearr_12750_12772 = state_12746__$1;(statearr_12750_12772[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 1))
{var inst_12717 = cljs.core.vec.call(null,chs);var inst_12718 = inst_12717;var state_12746__$1 = (function (){var statearr_12751 = state_12746;(statearr_12751[10] = inst_12718);
return statearr_12751;
})();var statearr_12752_12773 = state_12746__$1;(statearr_12752_12773[2] = null);
(statearr_12752_12773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 4))
{var inst_12718 = (state_12746[10]);var state_12746__$1 = state_12746;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12746__$1,7,inst_12718);
} else
{if((state_val_12747 === 6))
{var inst_12742 = (state_12746[2]);var state_12746__$1 = state_12746;var statearr_12753_12774 = state_12746__$1;(statearr_12753_12774[2] = inst_12742);
(statearr_12753_12774[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 3))
{var inst_12744 = (state_12746[2]);var state_12746__$1 = state_12746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12746__$1,inst_12744);
} else
{if((state_val_12747 === 2))
{var inst_12718 = (state_12746[10]);var inst_12720 = cljs.core.count.call(null,inst_12718);var inst_12721 = (inst_12720 > 0);var state_12746__$1 = state_12746;if(cljs.core.truth_(inst_12721))
{var statearr_12755_12775 = state_12746__$1;(statearr_12755_12775[1] = 4);
} else
{var statearr_12756_12776 = state_12746__$1;(statearr_12756_12776[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 11))
{var inst_12718 = (state_12746[10]);var inst_12735 = (state_12746[2]);var tmp12754 = inst_12718;var inst_12718__$1 = tmp12754;var state_12746__$1 = (function (){var statearr_12757 = state_12746;(statearr_12757[10] = inst_12718__$1);
(statearr_12757[11] = inst_12735);
return statearr_12757;
})();var statearr_12758_12777 = state_12746__$1;(statearr_12758_12777[2] = null);
(statearr_12758_12777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 9))
{var inst_12726 = (state_12746[8]);var state_12746__$1 = state_12746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12746__$1,11,out,inst_12726);
} else
{if((state_val_12747 === 5))
{var inst_12740 = cljs.core.async.close_BANG_.call(null,out);var state_12746__$1 = state_12746;var statearr_12759_12778 = state_12746__$1;(statearr_12759_12778[2] = inst_12740);
(statearr_12759_12778[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 10))
{var inst_12738 = (state_12746[2]);var state_12746__$1 = state_12746;var statearr_12760_12779 = state_12746__$1;(statearr_12760_12779[2] = inst_12738);
(statearr_12760_12779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12747 === 8))
{var inst_12718 = (state_12746[10]);var inst_12725 = (state_12746[7]);var inst_12726 = (state_12746[8]);var inst_12727 = (state_12746[9]);var inst_12730 = (function (){var c = inst_12727;var v = inst_12726;var vec__12723 = inst_12725;var cs = inst_12718;return ((function (c,v,vec__12723,cs,inst_12718,inst_12725,inst_12726,inst_12727,state_val_12747,c__5638__auto___12770,out){
return (function (p1__12663_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12663_SHARP_);
});
;})(c,v,vec__12723,cs,inst_12718,inst_12725,inst_12726,inst_12727,state_val_12747,c__5638__auto___12770,out))
})();var inst_12731 = cljs.core.filterv.call(null,inst_12730,inst_12718);var inst_12718__$1 = inst_12731;var state_12746__$1 = (function (){var statearr_12761 = state_12746;(statearr_12761[10] = inst_12718__$1);
return statearr_12761;
})();var statearr_12762_12780 = state_12746__$1;(statearr_12762_12780[2] = null);
(statearr_12762_12780[1] = 2);
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
});})(c__5638__auto___12770,out))
;return ((function (switch__5623__auto__,c__5638__auto___12770,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12766 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12766[0] = state_machine__5624__auto__);
(statearr_12766[1] = 1);
return statearr_12766;
});
var state_machine__5624__auto____1 = (function (state_12746){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12746);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12767){if((e12767 instanceof Object))
{var ex__5627__auto__ = e12767;var statearr_12768_12781 = state_12746;(statearr_12768_12781[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12782 = state_12746;
state_12746 = G__12782;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12746){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12770,out))
})();var state__5640__auto__ = (function (){var statearr_12769 = f__5639__auto__.call(null);(statearr_12769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12770);
return statearr_12769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12770,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12875,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12875,out){
return (function (state_12852){var state_val_12853 = (state_12852[1]);if((state_val_12853 === 7))
{var inst_12834 = (state_12852[7]);var inst_12834__$1 = (state_12852[2]);var inst_12835 = (inst_12834__$1 == null);var inst_12836 = cljs.core.not.call(null,inst_12835);var state_12852__$1 = (function (){var statearr_12854 = state_12852;(statearr_12854[7] = inst_12834__$1);
return statearr_12854;
})();if(inst_12836)
{var statearr_12855_12876 = state_12852__$1;(statearr_12855_12876[1] = 8);
} else
{var statearr_12856_12877 = state_12852__$1;(statearr_12856_12877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 1))
{var inst_12829 = 0;var state_12852__$1 = (function (){var statearr_12857 = state_12852;(statearr_12857[8] = inst_12829);
return statearr_12857;
})();var statearr_12858_12878 = state_12852__$1;(statearr_12858_12878[2] = null);
(statearr_12858_12878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 4))
{var state_12852__$1 = state_12852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12852__$1,7,ch);
} else
{if((state_val_12853 === 6))
{var inst_12847 = (state_12852[2]);var state_12852__$1 = state_12852;var statearr_12859_12879 = state_12852__$1;(statearr_12859_12879[2] = inst_12847);
(statearr_12859_12879[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 3))
{var inst_12849 = (state_12852[2]);var inst_12850 = cljs.core.async.close_BANG_.call(null,out);var state_12852__$1 = (function (){var statearr_12860 = state_12852;(statearr_12860[9] = inst_12849);
return statearr_12860;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12852__$1,inst_12850);
} else
{if((state_val_12853 === 2))
{var inst_12829 = (state_12852[8]);var inst_12831 = (inst_12829 < n);var state_12852__$1 = state_12852;if(cljs.core.truth_(inst_12831))
{var statearr_12861_12880 = state_12852__$1;(statearr_12861_12880[1] = 4);
} else
{var statearr_12862_12881 = state_12852__$1;(statearr_12862_12881[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 11))
{var inst_12829 = (state_12852[8]);var inst_12839 = (state_12852[2]);var inst_12840 = (inst_12829 + 1);var inst_12829__$1 = inst_12840;var state_12852__$1 = (function (){var statearr_12863 = state_12852;(statearr_12863[10] = inst_12839);
(statearr_12863[8] = inst_12829__$1);
return statearr_12863;
})();var statearr_12864_12882 = state_12852__$1;(statearr_12864_12882[2] = null);
(statearr_12864_12882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 9))
{var state_12852__$1 = state_12852;var statearr_12865_12883 = state_12852__$1;(statearr_12865_12883[2] = null);
(statearr_12865_12883[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 5))
{var state_12852__$1 = state_12852;var statearr_12866_12884 = state_12852__$1;(statearr_12866_12884[2] = null);
(statearr_12866_12884[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 10))
{var inst_12844 = (state_12852[2]);var state_12852__$1 = state_12852;var statearr_12867_12885 = state_12852__$1;(statearr_12867_12885[2] = inst_12844);
(statearr_12867_12885[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12853 === 8))
{var inst_12834 = (state_12852[7]);var state_12852__$1 = state_12852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12852__$1,11,out,inst_12834);
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
});})(c__5638__auto___12875,out))
;return ((function (switch__5623__auto__,c__5638__auto___12875,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12871 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12871[0] = state_machine__5624__auto__);
(statearr_12871[1] = 1);
return statearr_12871;
});
var state_machine__5624__auto____1 = (function (state_12852){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12852);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12872){if((e12872 instanceof Object))
{var ex__5627__auto__ = e12872;var statearr_12873_12886 = state_12852;(statearr_12873_12886[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12887 = state_12852;
state_12852 = G__12887;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12852){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12875,out))
})();var state__5640__auto__ = (function (){var statearr_12874 = f__5639__auto__.call(null);(statearr_12874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12875);
return statearr_12874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12875,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12984 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12984,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12984,out){
return (function (state_12959){var state_val_12960 = (state_12959[1]);if((state_val_12960 === 7))
{var inst_12954 = (state_12959[2]);var state_12959__$1 = state_12959;var statearr_12961_12985 = state_12959__$1;(statearr_12961_12985[2] = inst_12954);
(statearr_12961_12985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 1))
{var inst_12936 = null;var state_12959__$1 = (function (){var statearr_12962 = state_12959;(statearr_12962[7] = inst_12936);
return statearr_12962;
})();var statearr_12963_12986 = state_12959__$1;(statearr_12963_12986[2] = null);
(statearr_12963_12986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 4))
{var inst_12939 = (state_12959[8]);var inst_12939__$1 = (state_12959[2]);var inst_12940 = (inst_12939__$1 == null);var inst_12941 = cljs.core.not.call(null,inst_12940);var state_12959__$1 = (function (){var statearr_12964 = state_12959;(statearr_12964[8] = inst_12939__$1);
return statearr_12964;
})();if(inst_12941)
{var statearr_12965_12987 = state_12959__$1;(statearr_12965_12987[1] = 5);
} else
{var statearr_12966_12988 = state_12959__$1;(statearr_12966_12988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 6))
{var state_12959__$1 = state_12959;var statearr_12967_12989 = state_12959__$1;(statearr_12967_12989[2] = null);
(statearr_12967_12989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 3))
{var inst_12956 = (state_12959[2]);var inst_12957 = cljs.core.async.close_BANG_.call(null,out);var state_12959__$1 = (function (){var statearr_12968 = state_12959;(statearr_12968[9] = inst_12956);
return statearr_12968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12959__$1,inst_12957);
} else
{if((state_val_12960 === 2))
{var state_12959__$1 = state_12959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12959__$1,4,ch);
} else
{if((state_val_12960 === 11))
{var inst_12939 = (state_12959[8]);var inst_12948 = (state_12959[2]);var inst_12936 = inst_12939;var state_12959__$1 = (function (){var statearr_12969 = state_12959;(statearr_12969[10] = inst_12948);
(statearr_12969[7] = inst_12936);
return statearr_12969;
})();var statearr_12970_12990 = state_12959__$1;(statearr_12970_12990[2] = null);
(statearr_12970_12990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 9))
{var inst_12939 = (state_12959[8]);var state_12959__$1 = state_12959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12959__$1,11,out,inst_12939);
} else
{if((state_val_12960 === 5))
{var inst_12939 = (state_12959[8]);var inst_12936 = (state_12959[7]);var inst_12943 = cljs.core._EQ_.call(null,inst_12939,inst_12936);var state_12959__$1 = state_12959;if(inst_12943)
{var statearr_12972_12991 = state_12959__$1;(statearr_12972_12991[1] = 8);
} else
{var statearr_12973_12992 = state_12959__$1;(statearr_12973_12992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 10))
{var inst_12951 = (state_12959[2]);var state_12959__$1 = state_12959;var statearr_12974_12993 = state_12959__$1;(statearr_12974_12993[2] = inst_12951);
(statearr_12974_12993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12960 === 8))
{var inst_12936 = (state_12959[7]);var tmp12971 = inst_12936;var inst_12936__$1 = tmp12971;var state_12959__$1 = (function (){var statearr_12975 = state_12959;(statearr_12975[7] = inst_12936__$1);
return statearr_12975;
})();var statearr_12976_12994 = state_12959__$1;(statearr_12976_12994[2] = null);
(statearr_12976_12994[1] = 2);
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
});})(c__5638__auto___12984,out))
;return ((function (switch__5623__auto__,c__5638__auto___12984,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12980 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12980[0] = state_machine__5624__auto__);
(statearr_12980[1] = 1);
return statearr_12980;
});
var state_machine__5624__auto____1 = (function (state_12959){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12981){if((e12981 instanceof Object))
{var ex__5627__auto__ = e12981;var statearr_12982_12995 = state_12959;(statearr_12982_12995[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12996 = state_12959;
state_12959 = G__12996;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12959){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12984,out))
})();var state__5640__auto__ = (function (){var statearr_12983 = f__5639__auto__.call(null);(statearr_12983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12984);
return statearr_12983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12984,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13131,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13131,out){
return (function (state_13101){var state_val_13102 = (state_13101[1]);if((state_val_13102 === 7))
{var inst_13097 = (state_13101[2]);var state_13101__$1 = state_13101;var statearr_13103_13132 = state_13101__$1;(statearr_13103_13132[2] = inst_13097);
(statearr_13103_13132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 1))
{var inst_13064 = (new Array(n));var inst_13065 = inst_13064;var inst_13066 = 0;var state_13101__$1 = (function (){var statearr_13104 = state_13101;(statearr_13104[7] = inst_13066);
(statearr_13104[8] = inst_13065);
return statearr_13104;
})();var statearr_13105_13133 = state_13101__$1;(statearr_13105_13133[2] = null);
(statearr_13105_13133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 4))
{var inst_13069 = (state_13101[9]);var inst_13069__$1 = (state_13101[2]);var inst_13070 = (inst_13069__$1 == null);var inst_13071 = cljs.core.not.call(null,inst_13070);var state_13101__$1 = (function (){var statearr_13106 = state_13101;(statearr_13106[9] = inst_13069__$1);
return statearr_13106;
})();if(inst_13071)
{var statearr_13107_13134 = state_13101__$1;(statearr_13107_13134[1] = 5);
} else
{var statearr_13108_13135 = state_13101__$1;(statearr_13108_13135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 15))
{var inst_13091 = (state_13101[2]);var state_13101__$1 = state_13101;var statearr_13109_13136 = state_13101__$1;(statearr_13109_13136[2] = inst_13091);
(statearr_13109_13136[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 13))
{var state_13101__$1 = state_13101;var statearr_13110_13137 = state_13101__$1;(statearr_13110_13137[2] = null);
(statearr_13110_13137[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 6))
{var inst_13066 = (state_13101[7]);var inst_13087 = (inst_13066 > 0);var state_13101__$1 = state_13101;if(cljs.core.truth_(inst_13087))
{var statearr_13111_13138 = state_13101__$1;(statearr_13111_13138[1] = 12);
} else
{var statearr_13112_13139 = state_13101__$1;(statearr_13112_13139[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 3))
{var inst_13099 = (state_13101[2]);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13101__$1,inst_13099);
} else
{if((state_val_13102 === 12))
{var inst_13065 = (state_13101[8]);var inst_13089 = cljs.core.vec.call(null,inst_13065);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,15,out,inst_13089);
} else
{if((state_val_13102 === 2))
{var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,4,ch);
} else
{if((state_val_13102 === 11))
{var inst_13081 = (state_13101[2]);var inst_13082 = (new Array(n));var inst_13065 = inst_13082;var inst_13066 = 0;var state_13101__$1 = (function (){var statearr_13113 = state_13101;(statearr_13113[7] = inst_13066);
(statearr_13113[8] = inst_13065);
(statearr_13113[10] = inst_13081);
return statearr_13113;
})();var statearr_13114_13140 = state_13101__$1;(statearr_13114_13140[2] = null);
(statearr_13114_13140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 9))
{var inst_13065 = (state_13101[8]);var inst_13079 = cljs.core.vec.call(null,inst_13065);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,11,out,inst_13079);
} else
{if((state_val_13102 === 5))
{var inst_13066 = (state_13101[7]);var inst_13074 = (state_13101[11]);var inst_13065 = (state_13101[8]);var inst_13069 = (state_13101[9]);var inst_13073 = (inst_13065[inst_13066] = inst_13069);var inst_13074__$1 = (inst_13066 + 1);var inst_13075 = (inst_13074__$1 < n);var state_13101__$1 = (function (){var statearr_13115 = state_13101;(statearr_13115[11] = inst_13074__$1);
(statearr_13115[12] = inst_13073);
return statearr_13115;
})();if(cljs.core.truth_(inst_13075))
{var statearr_13116_13141 = state_13101__$1;(statearr_13116_13141[1] = 8);
} else
{var statearr_13117_13142 = state_13101__$1;(statearr_13117_13142[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 14))
{var inst_13094 = (state_13101[2]);var inst_13095 = cljs.core.async.close_BANG_.call(null,out);var state_13101__$1 = (function (){var statearr_13119 = state_13101;(statearr_13119[13] = inst_13094);
return statearr_13119;
})();var statearr_13120_13143 = state_13101__$1;(statearr_13120_13143[2] = inst_13095);
(statearr_13120_13143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 10))
{var inst_13085 = (state_13101[2]);var state_13101__$1 = state_13101;var statearr_13121_13144 = state_13101__$1;(statearr_13121_13144[2] = inst_13085);
(statearr_13121_13144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 8))
{var inst_13074 = (state_13101[11]);var inst_13065 = (state_13101[8]);var tmp13118 = inst_13065;var inst_13065__$1 = tmp13118;var inst_13066 = inst_13074;var state_13101__$1 = (function (){var statearr_13122 = state_13101;(statearr_13122[7] = inst_13066);
(statearr_13122[8] = inst_13065__$1);
return statearr_13122;
})();var statearr_13123_13145 = state_13101__$1;(statearr_13123_13145[2] = null);
(statearr_13123_13145[1] = 2);
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
});})(c__5638__auto___13131,out))
;return ((function (switch__5623__auto__,c__5638__auto___13131,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13127[0] = state_machine__5624__auto__);
(statearr_13127[1] = 1);
return statearr_13127;
});
var state_machine__5624__auto____1 = (function (state_13101){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13128){if((e13128 instanceof Object))
{var ex__5627__auto__ = e13128;var statearr_13129_13146 = state_13101;(statearr_13129_13146[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13147 = state_13101;
state_13101 = G__13147;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13131,out))
})();var state__5640__auto__ = (function (){var statearr_13130 = f__5639__auto__.call(null);(statearr_13130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13131);
return statearr_13130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13131,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13290,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13290,out){
return (function (state_13260){var state_val_13261 = (state_13260[1]);if((state_val_13261 === 7))
{var inst_13256 = (state_13260[2]);var state_13260__$1 = state_13260;var statearr_13262_13291 = state_13260__$1;(statearr_13262_13291[2] = inst_13256);
(statearr_13262_13291[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 1))
{var inst_13219 = [];var inst_13220 = inst_13219;var inst_13221 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13260__$1 = (function (){var statearr_13263 = state_13260;(statearr_13263[7] = inst_13221);
(statearr_13263[8] = inst_13220);
return statearr_13263;
})();var statearr_13264_13292 = state_13260__$1;(statearr_13264_13292[2] = null);
(statearr_13264_13292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 4))
{var inst_13224 = (state_13260[9]);var inst_13224__$1 = (state_13260[2]);var inst_13225 = (inst_13224__$1 == null);var inst_13226 = cljs.core.not.call(null,inst_13225);var state_13260__$1 = (function (){var statearr_13265 = state_13260;(statearr_13265[9] = inst_13224__$1);
return statearr_13265;
})();if(inst_13226)
{var statearr_13266_13293 = state_13260__$1;(statearr_13266_13293[1] = 5);
} else
{var statearr_13267_13294 = state_13260__$1;(statearr_13267_13294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 15))
{var inst_13250 = (state_13260[2]);var state_13260__$1 = state_13260;var statearr_13268_13295 = state_13260__$1;(statearr_13268_13295[2] = inst_13250);
(statearr_13268_13295[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 13))
{var state_13260__$1 = state_13260;var statearr_13269_13296 = state_13260__$1;(statearr_13269_13296[2] = null);
(statearr_13269_13296[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 6))
{var inst_13220 = (state_13260[8]);var inst_13245 = inst_13220.length;var inst_13246 = (inst_13245 > 0);var state_13260__$1 = state_13260;if(cljs.core.truth_(inst_13246))
{var statearr_13270_13297 = state_13260__$1;(statearr_13270_13297[1] = 12);
} else
{var statearr_13271_13298 = state_13260__$1;(statearr_13271_13298[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 3))
{var inst_13258 = (state_13260[2]);var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13260__$1,inst_13258);
} else
{if((state_val_13261 === 12))
{var inst_13220 = (state_13260[8]);var inst_13248 = cljs.core.vec.call(null,inst_13220);var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13260__$1,15,out,inst_13248);
} else
{if((state_val_13261 === 2))
{var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13260__$1,4,ch);
} else
{if((state_val_13261 === 11))
{var inst_13224 = (state_13260[9]);var inst_13228 = (state_13260[10]);var inst_13238 = (state_13260[2]);var inst_13239 = [];var inst_13240 = inst_13239.push(inst_13224);var inst_13220 = inst_13239;var inst_13221 = inst_13228;var state_13260__$1 = (function (){var statearr_13272 = state_13260;(statearr_13272[7] = inst_13221);
(statearr_13272[11] = inst_13238);
(statearr_13272[8] = inst_13220);
(statearr_13272[12] = inst_13240);
return statearr_13272;
})();var statearr_13273_13299 = state_13260__$1;(statearr_13273_13299[2] = null);
(statearr_13273_13299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 9))
{var inst_13220 = (state_13260[8]);var inst_13236 = cljs.core.vec.call(null,inst_13220);var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13260__$1,11,out,inst_13236);
} else
{if((state_val_13261 === 5))
{var inst_13221 = (state_13260[7]);var inst_13224 = (state_13260[9]);var inst_13228 = (state_13260[10]);var inst_13228__$1 = f.call(null,inst_13224);var inst_13229 = cljs.core._EQ_.call(null,inst_13228__$1,inst_13221);var inst_13230 = cljs.core.keyword_identical_QMARK_.call(null,inst_13221,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13231 = (inst_13229) || (inst_13230);var state_13260__$1 = (function (){var statearr_13274 = state_13260;(statearr_13274[10] = inst_13228__$1);
return statearr_13274;
})();if(cljs.core.truth_(inst_13231))
{var statearr_13275_13300 = state_13260__$1;(statearr_13275_13300[1] = 8);
} else
{var statearr_13276_13301 = state_13260__$1;(statearr_13276_13301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 14))
{var inst_13253 = (state_13260[2]);var inst_13254 = cljs.core.async.close_BANG_.call(null,out);var state_13260__$1 = (function (){var statearr_13278 = state_13260;(statearr_13278[13] = inst_13253);
return statearr_13278;
})();var statearr_13279_13302 = state_13260__$1;(statearr_13279_13302[2] = inst_13254);
(statearr_13279_13302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 10))
{var inst_13243 = (state_13260[2]);var state_13260__$1 = state_13260;var statearr_13280_13303 = state_13260__$1;(statearr_13280_13303[2] = inst_13243);
(statearr_13280_13303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13261 === 8))
{var inst_13220 = (state_13260[8]);var inst_13224 = (state_13260[9]);var inst_13228 = (state_13260[10]);var inst_13233 = inst_13220.push(inst_13224);var tmp13277 = inst_13220;var inst_13220__$1 = tmp13277;var inst_13221 = inst_13228;var state_13260__$1 = (function (){var statearr_13281 = state_13260;(statearr_13281[14] = inst_13233);
(statearr_13281[7] = inst_13221);
(statearr_13281[8] = inst_13220__$1);
return statearr_13281;
})();var statearr_13282_13304 = state_13260__$1;(statearr_13282_13304[2] = null);
(statearr_13282_13304[1] = 2);
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
});})(c__5638__auto___13290,out))
;return ((function (switch__5623__auto__,c__5638__auto___13290,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13286[0] = state_machine__5624__auto__);
(statearr_13286[1] = 1);
return statearr_13286;
});
var state_machine__5624__auto____1 = (function (state_13260){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13287){if((e13287 instanceof Object))
{var ex__5627__auto__ = e13287;var statearr_13288_13305 = state_13260;(statearr_13288_13305[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13306 = state_13260;
state_13260 = G__13306;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13260){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13290,out))
})();var state__5640__auto__ = (function (){var statearr_13289 = f__5639__auto__.call(null);(statearr_13289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13290);
return statearr_13289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13290,out))
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