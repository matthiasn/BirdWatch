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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10873 = (function (f,fn_handler,meta10874){
this.f = f;
this.fn_handler = fn_handler;
this.meta10874 = meta10874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10873.cljs$lang$type = true;
cljs.core.async.t10873.cljs$lang$ctorStr = "cljs.core.async/t10873";
cljs.core.async.t10873.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10873");
});
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10875){var self__ = this;
var _10875__$1 = this;return self__.meta10874;
});
cljs.core.async.t10873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10875,meta10874__$1){var self__ = this;
var _10875__$1 = this;return (new cljs.core.async.t10873(self__.f,self__.fn_handler,meta10874__$1));
});
cljs.core.async.__GT_t10873 = (function __GT_t10873(f__$1,fn_handler__$1,meta10874){return (new cljs.core.async.t10873(f__$1,fn_handler__$1,meta10874));
});
}
return (new cljs.core.async.t10873(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10877 = buff;if(G__10877)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10877.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10877.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10877);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10877);
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
{var val_10878 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10878);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10878,ret){
return (function (){return fn1.call(null,val_10878);
});})(val_10878,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10879 = n;var x_10880 = 0;while(true){
if((x_10880 < n__4329__auto___10879))
{(a[x_10880] = 0);
{
var G__10881 = (x_10880 + 1);
x_10880 = G__10881;
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
var G__10882 = (i + 1);
i = G__10882;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10886 = (function (flag,alt_flag,meta10887){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10887 = meta10887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10886.cljs$lang$type = true;
cljs.core.async.t10886.cljs$lang$ctorStr = "cljs.core.async/t10886";
cljs.core.async.t10886.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10886");
});})(flag))
;
cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10888){var self__ = this;
var _10888__$1 = this;return self__.meta10887;
});})(flag))
;
cljs.core.async.t10886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10888,meta10887__$1){var self__ = this;
var _10888__$1 = this;return (new cljs.core.async.t10886(self__.flag,self__.alt_flag,meta10887__$1));
});})(flag))
;
cljs.core.async.__GT_t10886 = ((function (flag){
return (function __GT_t10886(flag__$1,alt_flag__$1,meta10887){return (new cljs.core.async.t10886(flag__$1,alt_flag__$1,meta10887));
});})(flag))
;
}
return (new cljs.core.async.t10886(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10892 = (function (cb,flag,alt_handler,meta10893){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10893 = meta10893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10892.cljs$lang$type = true;
cljs.core.async.t10892.cljs$lang$ctorStr = "cljs.core.async/t10892";
cljs.core.async.t10892.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10892");
});
cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10894){var self__ = this;
var _10894__$1 = this;return self__.meta10893;
});
cljs.core.async.t10892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10894,meta10893__$1){var self__ = this;
var _10894__$1 = this;return (new cljs.core.async.t10892(self__.cb,self__.flag,self__.alt_handler,meta10893__$1));
});
cljs.core.async.__GT_t10892 = (function __GT_t10892(cb__$1,flag__$1,alt_handler__$1,meta10893){return (new cljs.core.async.t10892(cb__$1,flag__$1,alt_handler__$1,meta10893));
});
}
return (new cljs.core.async.t10892(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10895_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10895_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10896_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10896_SHARP_,port], null));
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
var G__10897 = (i + 1);
i = G__10897;
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
var alts_BANG___delegate = function (ports,p__10898){var map__10900 = p__10898;var map__10900__$1 = ((cljs.core.seq_QMARK_.call(null,map__10900))?cljs.core.apply.call(null,cljs.core.hash_map,map__10900):map__10900);var opts = map__10900__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10898 = null;if (arguments.length > 1) {
  p__10898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10898);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10901){
var ports = cljs.core.first(arglist__10901);
var p__10898 = cljs.core.rest(arglist__10901);
return alts_BANG___delegate(ports,p__10898);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10909 = (function (ch,f,map_LT_,meta10910){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10910 = meta10910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10909.cljs$lang$type = true;
cljs.core.async.t10909.cljs$lang$ctorStr = "cljs.core.async/t10909";
cljs.core.async.t10909.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10909");
});
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10912 = (function (fn1,_,meta10910,ch,f,map_LT_,meta10913){
this.fn1 = fn1;
this._ = _;
this.meta10910 = meta10910;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10913 = meta10913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10912.cljs$lang$type = true;
cljs.core.async.t10912.cljs$lang$ctorStr = "cljs.core.async/t10912";
cljs.core.async.t10912.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10912");
});})(___$1))
;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10902_SHARP_){return f1.call(null,(((p1__10902_SHARP_ == null))?null:self__.f.call(null,p1__10902_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10914){var self__ = this;
var _10914__$1 = this;return self__.meta10913;
});})(___$1))
;
cljs.core.async.t10912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10914,meta10913__$1){var self__ = this;
var _10914__$1 = this;return (new cljs.core.async.t10912(self__.fn1,self__._,self__.meta10910,self__.ch,self__.f,self__.map_LT_,meta10913__$1));
});})(___$1))
;
cljs.core.async.__GT_t10912 = ((function (___$1){
return (function __GT_t10912(fn1__$1,___$2,meta10910__$1,ch__$2,f__$2,map_LT___$2,meta10913){return (new cljs.core.async.t10912(fn1__$1,___$2,meta10910__$1,ch__$2,f__$2,map_LT___$2,meta10913));
});})(___$1))
;
}
return (new cljs.core.async.t10912(fn1,___$1,self__.meta10910,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10909.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10911){var self__ = this;
var _10911__$1 = this;return self__.meta10910;
});
cljs.core.async.t10909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10911,meta10910__$1){var self__ = this;
var _10911__$1 = this;return (new cljs.core.async.t10909(self__.ch,self__.f,self__.map_LT_,meta10910__$1));
});
cljs.core.async.__GT_t10909 = (function __GT_t10909(ch__$1,f__$1,map_LT___$1,meta10910){return (new cljs.core.async.t10909(ch__$1,f__$1,map_LT___$1,meta10910));
});
}
return (new cljs.core.async.t10909(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10918 = (function (ch,f,map_GT_,meta10919){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10919 = meta10919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10918.cljs$lang$type = true;
cljs.core.async.t10918.cljs$lang$ctorStr = "cljs.core.async/t10918";
cljs.core.async.t10918.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10918");
});
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10920){var self__ = this;
var _10920__$1 = this;return self__.meta10919;
});
cljs.core.async.t10918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10920,meta10919__$1){var self__ = this;
var _10920__$1 = this;return (new cljs.core.async.t10918(self__.ch,self__.f,self__.map_GT_,meta10919__$1));
});
cljs.core.async.__GT_t10918 = (function __GT_t10918(ch__$1,f__$1,map_GT___$1,meta10919){return (new cljs.core.async.t10918(ch__$1,f__$1,map_GT___$1,meta10919));
});
}
return (new cljs.core.async.t10918(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10924 = (function (ch,p,filter_GT_,meta10925){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10925 = meta10925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10924.cljs$lang$type = true;
cljs.core.async.t10924.cljs$lang$ctorStr = "cljs.core.async/t10924";
cljs.core.async.t10924.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10924");
});
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10926){var self__ = this;
var _10926__$1 = this;return self__.meta10925;
});
cljs.core.async.t10924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10926,meta10925__$1){var self__ = this;
var _10926__$1 = this;return (new cljs.core.async.t10924(self__.ch,self__.p,self__.filter_GT_,meta10925__$1));
});
cljs.core.async.__GT_t10924 = (function __GT_t10924(ch__$1,p__$1,filter_GT___$1,meta10925){return (new cljs.core.async.t10924(ch__$1,p__$1,filter_GT___$1,meta10925));
});
}
return (new cljs.core.async.t10924(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___11009 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___11009,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___11009,out){
return (function (state_10988){var state_val_10989 = (state_10988[1]);if((state_val_10989 === 7))
{var inst_10984 = (state_10988[2]);var state_10988__$1 = state_10988;var statearr_10990_11010 = state_10988__$1;(statearr_10990_11010[2] = inst_10984);
(statearr_10990_11010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 1))
{var state_10988__$1 = state_10988;var statearr_10991_11011 = state_10988__$1;(statearr_10991_11011[2] = null);
(statearr_10991_11011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 4))
{var inst_10970 = (state_10988[7]);var inst_10970__$1 = (state_10988[2]);var inst_10971 = (inst_10970__$1 == null);var state_10988__$1 = (function (){var statearr_10992 = state_10988;(statearr_10992[7] = inst_10970__$1);
return statearr_10992;
})();if(cljs.core.truth_(inst_10971))
{var statearr_10993_11012 = state_10988__$1;(statearr_10993_11012[1] = 5);
} else
{var statearr_10994_11013 = state_10988__$1;(statearr_10994_11013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 6))
{var inst_10970 = (state_10988[7]);var inst_10975 = p.call(null,inst_10970);var state_10988__$1 = state_10988;if(cljs.core.truth_(inst_10975))
{var statearr_10995_11014 = state_10988__$1;(statearr_10995_11014[1] = 8);
} else
{var statearr_10996_11015 = state_10988__$1;(statearr_10996_11015[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 3))
{var inst_10986 = (state_10988[2]);var state_10988__$1 = state_10988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10988__$1,inst_10986);
} else
{if((state_val_10989 === 2))
{var state_10988__$1 = state_10988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10988__$1,4,ch);
} else
{if((state_val_10989 === 11))
{var inst_10978 = (state_10988[2]);var state_10988__$1 = state_10988;var statearr_10997_11016 = state_10988__$1;(statearr_10997_11016[2] = inst_10978);
(statearr_10997_11016[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 9))
{var state_10988__$1 = state_10988;var statearr_10998_11017 = state_10988__$1;(statearr_10998_11017[2] = null);
(statearr_10998_11017[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 5))
{var inst_10973 = cljs.core.async.close_BANG_.call(null,out);var state_10988__$1 = state_10988;var statearr_10999_11018 = state_10988__$1;(statearr_10999_11018[2] = inst_10973);
(statearr_10999_11018[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 10))
{var inst_10981 = (state_10988[2]);var state_10988__$1 = (function (){var statearr_11000 = state_10988;(statearr_11000[8] = inst_10981);
return statearr_11000;
})();var statearr_11001_11019 = state_10988__$1;(statearr_11001_11019[2] = null);
(statearr_11001_11019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10989 === 8))
{var inst_10970 = (state_10988[7]);var state_10988__$1 = state_10988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10988__$1,11,out,inst_10970);
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
});})(c__6889__auto___11009,out))
;return ((function (switch__6825__auto__,c__6889__auto___11009,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11005 = [null,null,null,null,null,null,null,null,null];(statearr_11005[0] = state_machine__6826__auto__);
(statearr_11005[1] = 1);
return statearr_11005;
});
var state_machine__6826__auto____1 = (function (state_10988){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_10988);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11006){if((e11006 instanceof Object))
{var ex__6829__auto__ = e11006;var statearr_11007_11020 = state_10988;(statearr_11007_11020[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11021 = state_10988;
state_10988 = G__11021;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_10988){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_10988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___11009,out))
})();var state__6891__auto__ = (function (){var statearr_11008 = f__6890__auto__.call(null);(statearr_11008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___11009);
return statearr_11008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___11009,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6889__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto__){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto__){
return (function (state_11187){var state_val_11188 = (state_11187[1]);if((state_val_11188 === 7))
{var inst_11183 = (state_11187[2]);var state_11187__$1 = state_11187;var statearr_11189_11230 = state_11187__$1;(statearr_11189_11230[2] = inst_11183);
(statearr_11189_11230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 20))
{var inst_11153 = (state_11187[7]);var inst_11164 = (state_11187[2]);var inst_11165 = cljs.core.next.call(null,inst_11153);var inst_11139 = inst_11165;var inst_11140 = null;var inst_11141 = 0;var inst_11142 = 0;var state_11187__$1 = (function (){var statearr_11190 = state_11187;(statearr_11190[8] = inst_11139);
(statearr_11190[9] = inst_11142);
(statearr_11190[10] = inst_11164);
(statearr_11190[11] = inst_11140);
(statearr_11190[12] = inst_11141);
return statearr_11190;
})();var statearr_11191_11231 = state_11187__$1;(statearr_11191_11231[2] = null);
(statearr_11191_11231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 1))
{var state_11187__$1 = state_11187;var statearr_11192_11232 = state_11187__$1;(statearr_11192_11232[2] = null);
(statearr_11192_11232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 4))
{var inst_11128 = (state_11187[13]);var inst_11128__$1 = (state_11187[2]);var inst_11129 = (inst_11128__$1 == null);var state_11187__$1 = (function (){var statearr_11193 = state_11187;(statearr_11193[13] = inst_11128__$1);
return statearr_11193;
})();if(cljs.core.truth_(inst_11129))
{var statearr_11194_11233 = state_11187__$1;(statearr_11194_11233[1] = 5);
} else
{var statearr_11195_11234 = state_11187__$1;(statearr_11195_11234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 15))
{var state_11187__$1 = state_11187;var statearr_11199_11235 = state_11187__$1;(statearr_11199_11235[2] = null);
(statearr_11199_11235[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 21))
{var state_11187__$1 = state_11187;var statearr_11200_11236 = state_11187__$1;(statearr_11200_11236[2] = null);
(statearr_11200_11236[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 13))
{var inst_11139 = (state_11187[8]);var inst_11142 = (state_11187[9]);var inst_11140 = (state_11187[11]);var inst_11141 = (state_11187[12]);var inst_11149 = (state_11187[2]);var inst_11150 = (inst_11142 + 1);var tmp11196 = inst_11139;var tmp11197 = inst_11140;var tmp11198 = inst_11141;var inst_11139__$1 = tmp11196;var inst_11140__$1 = tmp11197;var inst_11141__$1 = tmp11198;var inst_11142__$1 = inst_11150;var state_11187__$1 = (function (){var statearr_11201 = state_11187;(statearr_11201[8] = inst_11139__$1);
(statearr_11201[9] = inst_11142__$1);
(statearr_11201[14] = inst_11149);
(statearr_11201[11] = inst_11140__$1);
(statearr_11201[12] = inst_11141__$1);
return statearr_11201;
})();var statearr_11202_11237 = state_11187__$1;(statearr_11202_11237[2] = null);
(statearr_11202_11237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 22))
{var state_11187__$1 = state_11187;var statearr_11203_11238 = state_11187__$1;(statearr_11203_11238[2] = null);
(statearr_11203_11238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 6))
{var inst_11128 = (state_11187[13]);var inst_11137 = f.call(null,inst_11128);var inst_11138 = cljs.core.seq.call(null,inst_11137);var inst_11139 = inst_11138;var inst_11140 = null;var inst_11141 = 0;var inst_11142 = 0;var state_11187__$1 = (function (){var statearr_11204 = state_11187;(statearr_11204[8] = inst_11139);
(statearr_11204[9] = inst_11142);
(statearr_11204[11] = inst_11140);
(statearr_11204[12] = inst_11141);
return statearr_11204;
})();var statearr_11205_11239 = state_11187__$1;(statearr_11205_11239[2] = null);
(statearr_11205_11239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 17))
{var inst_11153 = (state_11187[7]);var inst_11157 = cljs.core.chunk_first.call(null,inst_11153);var inst_11158 = cljs.core.chunk_rest.call(null,inst_11153);var inst_11159 = cljs.core.count.call(null,inst_11157);var inst_11139 = inst_11158;var inst_11140 = inst_11157;var inst_11141 = inst_11159;var inst_11142 = 0;var state_11187__$1 = (function (){var statearr_11206 = state_11187;(statearr_11206[8] = inst_11139);
(statearr_11206[9] = inst_11142);
(statearr_11206[11] = inst_11140);
(statearr_11206[12] = inst_11141);
return statearr_11206;
})();var statearr_11207_11240 = state_11187__$1;(statearr_11207_11240[2] = null);
(statearr_11207_11240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 3))
{var inst_11185 = (state_11187[2]);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11187__$1,inst_11185);
} else
{if((state_val_11188 === 12))
{var inst_11173 = (state_11187[2]);var state_11187__$1 = state_11187;var statearr_11208_11241 = state_11187__$1;(statearr_11208_11241[2] = inst_11173);
(statearr_11208_11241[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 2))
{var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11187__$1,4,in$);
} else
{if((state_val_11188 === 23))
{var inst_11181 = (state_11187[2]);var state_11187__$1 = state_11187;var statearr_11209_11242 = state_11187__$1;(statearr_11209_11242[2] = inst_11181);
(statearr_11209_11242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 19))
{var inst_11168 = (state_11187[2]);var state_11187__$1 = state_11187;var statearr_11210_11243 = state_11187__$1;(statearr_11210_11243[2] = inst_11168);
(statearr_11210_11243[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 11))
{var inst_11139 = (state_11187[8]);var inst_11153 = (state_11187[7]);var inst_11153__$1 = cljs.core.seq.call(null,inst_11139);var state_11187__$1 = (function (){var statearr_11211 = state_11187;(statearr_11211[7] = inst_11153__$1);
return statearr_11211;
})();if(inst_11153__$1)
{var statearr_11212_11244 = state_11187__$1;(statearr_11212_11244[1] = 14);
} else
{var statearr_11213_11245 = state_11187__$1;(statearr_11213_11245[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 9))
{var inst_11175 = (state_11187[2]);var inst_11176 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11187__$1 = (function (){var statearr_11214 = state_11187;(statearr_11214[15] = inst_11175);
return statearr_11214;
})();if(cljs.core.truth_(inst_11176))
{var statearr_11215_11246 = state_11187__$1;(statearr_11215_11246[1] = 21);
} else
{var statearr_11216_11247 = state_11187__$1;(statearr_11216_11247[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 5))
{var inst_11131 = cljs.core.async.close_BANG_.call(null,out);var state_11187__$1 = state_11187;var statearr_11217_11248 = state_11187__$1;(statearr_11217_11248[2] = inst_11131);
(statearr_11217_11248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 14))
{var inst_11153 = (state_11187[7]);var inst_11155 = cljs.core.chunked_seq_QMARK_.call(null,inst_11153);var state_11187__$1 = state_11187;if(inst_11155)
{var statearr_11218_11249 = state_11187__$1;(statearr_11218_11249[1] = 17);
} else
{var statearr_11219_11250 = state_11187__$1;(statearr_11219_11250[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 16))
{var inst_11171 = (state_11187[2]);var state_11187__$1 = state_11187;var statearr_11220_11251 = state_11187__$1;(statearr_11220_11251[2] = inst_11171);
(statearr_11220_11251[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11188 === 10))
{var inst_11142 = (state_11187[9]);var inst_11140 = (state_11187[11]);var inst_11147 = cljs.core._nth.call(null,inst_11140,inst_11142);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,13,out,inst_11147);
} else
{if((state_val_11188 === 18))
{var inst_11153 = (state_11187[7]);var inst_11162 = cljs.core.first.call(null,inst_11153);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,20,out,inst_11162);
} else
{if((state_val_11188 === 8))
{var inst_11142 = (state_11187[9]);var inst_11141 = (state_11187[12]);var inst_11144 = (inst_11142 < inst_11141);var inst_11145 = inst_11144;var state_11187__$1 = state_11187;if(cljs.core.truth_(inst_11145))
{var statearr_11221_11252 = state_11187__$1;(statearr_11221_11252[1] = 10);
} else
{var statearr_11222_11253 = state_11187__$1;(statearr_11222_11253[1] = 11);
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
});})(c__6889__auto__))
;return ((function (switch__6825__auto__,c__6889__auto__){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11226[0] = state_machine__6826__auto__);
(statearr_11226[1] = 1);
return statearr_11226;
});
var state_machine__6826__auto____1 = (function (state_11187){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_11187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11227){if((e11227 instanceof Object))
{var ex__6829__auto__ = e11227;var statearr_11228_11254 = state_11187;(statearr_11228_11254[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11255 = state_11187;
state_11187 = G__11255;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto__))
})();var state__6891__auto__ = (function (){var statearr_11229 = f__6890__auto__.call(null);(statearr_11229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto__);
return statearr_11229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto__))
);
return c__6889__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6889__auto___11350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___11350){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___11350){
return (function (state_11326){var state_val_11327 = (state_11326[1]);if((state_val_11327 === 7))
{var inst_11322 = (state_11326[2]);var state_11326__$1 = state_11326;var statearr_11328_11351 = state_11326__$1;(statearr_11328_11351[2] = inst_11322);
(statearr_11328_11351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 1))
{var state_11326__$1 = state_11326;var statearr_11329_11352 = state_11326__$1;(statearr_11329_11352[2] = null);
(statearr_11329_11352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 4))
{var inst_11305 = (state_11326[7]);var inst_11305__$1 = (state_11326[2]);var inst_11306 = (inst_11305__$1 == null);var state_11326__$1 = (function (){var statearr_11330 = state_11326;(statearr_11330[7] = inst_11305__$1);
return statearr_11330;
})();if(cljs.core.truth_(inst_11306))
{var statearr_11331_11353 = state_11326__$1;(statearr_11331_11353[1] = 5);
} else
{var statearr_11332_11354 = state_11326__$1;(statearr_11332_11354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 13))
{var state_11326__$1 = state_11326;var statearr_11333_11355 = state_11326__$1;(statearr_11333_11355[2] = null);
(statearr_11333_11355[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 6))
{var inst_11305 = (state_11326[7]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11326__$1,11,to,inst_11305);
} else
{if((state_val_11327 === 3))
{var inst_11324 = (state_11326[2]);var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11326__$1,inst_11324);
} else
{if((state_val_11327 === 12))
{var state_11326__$1 = state_11326;var statearr_11334_11356 = state_11326__$1;(statearr_11334_11356[2] = null);
(statearr_11334_11356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 2))
{var state_11326__$1 = state_11326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11326__$1,4,from);
} else
{if((state_val_11327 === 11))
{var inst_11315 = (state_11326[2]);var state_11326__$1 = state_11326;if(cljs.core.truth_(inst_11315))
{var statearr_11335_11357 = state_11326__$1;(statearr_11335_11357[1] = 12);
} else
{var statearr_11336_11358 = state_11326__$1;(statearr_11336_11358[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 9))
{var state_11326__$1 = state_11326;var statearr_11337_11359 = state_11326__$1;(statearr_11337_11359[2] = null);
(statearr_11337_11359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 5))
{var state_11326__$1 = state_11326;if(cljs.core.truth_(close_QMARK_))
{var statearr_11338_11360 = state_11326__$1;(statearr_11338_11360[1] = 8);
} else
{var statearr_11339_11361 = state_11326__$1;(statearr_11339_11361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 14))
{var inst_11320 = (state_11326[2]);var state_11326__$1 = state_11326;var statearr_11340_11362 = state_11326__$1;(statearr_11340_11362[2] = inst_11320);
(statearr_11340_11362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 10))
{var inst_11312 = (state_11326[2]);var state_11326__$1 = state_11326;var statearr_11341_11363 = state_11326__$1;(statearr_11341_11363[2] = inst_11312);
(statearr_11341_11363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11327 === 8))
{var inst_11309 = cljs.core.async.close_BANG_.call(null,to);var state_11326__$1 = state_11326;var statearr_11342_11364 = state_11326__$1;(statearr_11342_11364[2] = inst_11309);
(statearr_11342_11364[1] = 10);
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
});})(c__6889__auto___11350))
;return ((function (switch__6825__auto__,c__6889__auto___11350){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11346 = [null,null,null,null,null,null,null,null];(statearr_11346[0] = state_machine__6826__auto__);
(statearr_11346[1] = 1);
return statearr_11346;
});
var state_machine__6826__auto____1 = (function (state_11326){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_11326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object))
{var ex__6829__auto__ = e11347;var statearr_11348_11365 = state_11326;(statearr_11348_11365[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11366 = state_11326;
state_11326 = G__11366;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___11350))
})();var state__6891__auto__ = (function (){var statearr_11349 = f__6890__auto__.call(null);(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___11350);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___11350))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6889__auto___11467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___11467,tc,fc){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___11467,tc,fc){
return (function (state_11442){var state_val_11443 = (state_11442[1]);if((state_val_11443 === 7))
{var inst_11438 = (state_11442[2]);var state_11442__$1 = state_11442;var statearr_11444_11468 = state_11442__$1;(statearr_11444_11468[2] = inst_11438);
(statearr_11444_11468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 1))
{var state_11442__$1 = state_11442;var statearr_11445_11469 = state_11442__$1;(statearr_11445_11469[2] = null);
(statearr_11445_11469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 4))
{var inst_11419 = (state_11442[7]);var inst_11419__$1 = (state_11442[2]);var inst_11420 = (inst_11419__$1 == null);var state_11442__$1 = (function (){var statearr_11446 = state_11442;(statearr_11446[7] = inst_11419__$1);
return statearr_11446;
})();if(cljs.core.truth_(inst_11420))
{var statearr_11447_11470 = state_11442__$1;(statearr_11447_11470[1] = 5);
} else
{var statearr_11448_11471 = state_11442__$1;(statearr_11448_11471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 13))
{var state_11442__$1 = state_11442;var statearr_11449_11472 = state_11442__$1;(statearr_11449_11472[2] = null);
(statearr_11449_11472[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 6))
{var inst_11419 = (state_11442[7]);var inst_11425 = p.call(null,inst_11419);var state_11442__$1 = state_11442;if(cljs.core.truth_(inst_11425))
{var statearr_11450_11473 = state_11442__$1;(statearr_11450_11473[1] = 9);
} else
{var statearr_11451_11474 = state_11442__$1;(statearr_11451_11474[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 3))
{var inst_11440 = (state_11442[2]);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11442__$1,inst_11440);
} else
{if((state_val_11443 === 12))
{var state_11442__$1 = state_11442;var statearr_11452_11475 = state_11442__$1;(statearr_11452_11475[2] = null);
(statearr_11452_11475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 2))
{var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11442__$1,4,ch);
} else
{if((state_val_11443 === 11))
{var inst_11419 = (state_11442[7]);var inst_11429 = (state_11442[2]);var state_11442__$1 = state_11442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11442__$1,8,inst_11429,inst_11419);
} else
{if((state_val_11443 === 9))
{var state_11442__$1 = state_11442;var statearr_11453_11476 = state_11442__$1;(statearr_11453_11476[2] = tc);
(statearr_11453_11476[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 5))
{var inst_11422 = cljs.core.async.close_BANG_.call(null,tc);var inst_11423 = cljs.core.async.close_BANG_.call(null,fc);var state_11442__$1 = (function (){var statearr_11454 = state_11442;(statearr_11454[8] = inst_11422);
return statearr_11454;
})();var statearr_11455_11477 = state_11442__$1;(statearr_11455_11477[2] = inst_11423);
(statearr_11455_11477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 14))
{var inst_11436 = (state_11442[2]);var state_11442__$1 = state_11442;var statearr_11456_11478 = state_11442__$1;(statearr_11456_11478[2] = inst_11436);
(statearr_11456_11478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 10))
{var state_11442__$1 = state_11442;var statearr_11457_11479 = state_11442__$1;(statearr_11457_11479[2] = fc);
(statearr_11457_11479[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11443 === 8))
{var inst_11431 = (state_11442[2]);var state_11442__$1 = state_11442;if(cljs.core.truth_(inst_11431))
{var statearr_11458_11480 = state_11442__$1;(statearr_11458_11480[1] = 12);
} else
{var statearr_11459_11481 = state_11442__$1;(statearr_11459_11481[1] = 13);
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
});})(c__6889__auto___11467,tc,fc))
;return ((function (switch__6825__auto__,c__6889__auto___11467,tc,fc){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11463 = [null,null,null,null,null,null,null,null,null];(statearr_11463[0] = state_machine__6826__auto__);
(statearr_11463[1] = 1);
return statearr_11463;
});
var state_machine__6826__auto____1 = (function (state_11442){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_11442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object))
{var ex__6829__auto__ = e11464;var statearr_11465_11482 = state_11442;(statearr_11465_11482[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11483 = state_11442;
state_11442 = G__11483;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_11442){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_11442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___11467,tc,fc))
})();var state__6891__auto__ = (function (){var statearr_11466 = f__6890__auto__.call(null);(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___11467);
return statearr_11466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___11467,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6889__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto__){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto__){
return (function (state_11530){var state_val_11531 = (state_11530[1]);if((state_val_11531 === 7))
{var inst_11526 = (state_11530[2]);var state_11530__$1 = state_11530;var statearr_11532_11548 = state_11530__$1;(statearr_11532_11548[2] = inst_11526);
(statearr_11532_11548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11531 === 6))
{var inst_11519 = (state_11530[7]);var inst_11516 = (state_11530[8]);var inst_11523 = f.call(null,inst_11516,inst_11519);var inst_11516__$1 = inst_11523;var state_11530__$1 = (function (){var statearr_11533 = state_11530;(statearr_11533[8] = inst_11516__$1);
return statearr_11533;
})();var statearr_11534_11549 = state_11530__$1;(statearr_11534_11549[2] = null);
(statearr_11534_11549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11531 === 5))
{var inst_11516 = (state_11530[8]);var state_11530__$1 = state_11530;var statearr_11535_11550 = state_11530__$1;(statearr_11535_11550[2] = inst_11516);
(statearr_11535_11550[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11531 === 4))
{var inst_11519 = (state_11530[7]);var inst_11519__$1 = (state_11530[2]);var inst_11520 = (inst_11519__$1 == null);var state_11530__$1 = (function (){var statearr_11536 = state_11530;(statearr_11536[7] = inst_11519__$1);
return statearr_11536;
})();if(cljs.core.truth_(inst_11520))
{var statearr_11537_11551 = state_11530__$1;(statearr_11537_11551[1] = 5);
} else
{var statearr_11538_11552 = state_11530__$1;(statearr_11538_11552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11531 === 3))
{var inst_11528 = (state_11530[2]);var state_11530__$1 = state_11530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11530__$1,inst_11528);
} else
{if((state_val_11531 === 2))
{var state_11530__$1 = state_11530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11530__$1,4,ch);
} else
{if((state_val_11531 === 1))
{var inst_11516 = init;var state_11530__$1 = (function (){var statearr_11539 = state_11530;(statearr_11539[8] = inst_11516);
return statearr_11539;
})();var statearr_11540_11553 = state_11530__$1;(statearr_11540_11553[2] = null);
(statearr_11540_11553[1] = 2);
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
});})(c__6889__auto__))
;return ((function (switch__6825__auto__,c__6889__auto__){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11544 = [null,null,null,null,null,null,null,null,null];(statearr_11544[0] = state_machine__6826__auto__);
(statearr_11544[1] = 1);
return statearr_11544;
});
var state_machine__6826__auto____1 = (function (state_11530){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_11530);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11545){if((e11545 instanceof Object))
{var ex__6829__auto__ = e11545;var statearr_11546_11554 = state_11530;(statearr_11546_11554[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11555 = state_11530;
state_11530 = G__11555;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_11530){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_11530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto__))
})();var state__6891__auto__ = (function (){var statearr_11547 = f__6890__auto__.call(null);(statearr_11547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto__);
return statearr_11547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto__))
);
return c__6889__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6889__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto__){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto__){
return (function (state_11629){var state_val_11630 = (state_11629[1]);if((state_val_11630 === 7))
{var inst_11611 = (state_11629[2]);var state_11629__$1 = state_11629;var statearr_11631_11654 = state_11629__$1;(statearr_11631_11654[2] = inst_11611);
(statearr_11631_11654[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 1))
{var inst_11605 = cljs.core.seq.call(null,coll);var inst_11606 = inst_11605;var state_11629__$1 = (function (){var statearr_11632 = state_11629;(statearr_11632[7] = inst_11606);
return statearr_11632;
})();var statearr_11633_11655 = state_11629__$1;(statearr_11633_11655[2] = null);
(statearr_11633_11655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 4))
{var inst_11606 = (state_11629[7]);var inst_11609 = cljs.core.first.call(null,inst_11606);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11629__$1,7,ch,inst_11609);
} else
{if((state_val_11630 === 13))
{var inst_11623 = (state_11629[2]);var state_11629__$1 = state_11629;var statearr_11634_11656 = state_11629__$1;(statearr_11634_11656[2] = inst_11623);
(statearr_11634_11656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 6))
{var inst_11614 = (state_11629[2]);var state_11629__$1 = state_11629;if(cljs.core.truth_(inst_11614))
{var statearr_11635_11657 = state_11629__$1;(statearr_11635_11657[1] = 8);
} else
{var statearr_11636_11658 = state_11629__$1;(statearr_11636_11658[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 3))
{var inst_11627 = (state_11629[2]);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11629__$1,inst_11627);
} else
{if((state_val_11630 === 12))
{var state_11629__$1 = state_11629;var statearr_11637_11659 = state_11629__$1;(statearr_11637_11659[2] = null);
(statearr_11637_11659[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 2))
{var inst_11606 = (state_11629[7]);var state_11629__$1 = state_11629;if(cljs.core.truth_(inst_11606))
{var statearr_11638_11660 = state_11629__$1;(statearr_11638_11660[1] = 4);
} else
{var statearr_11639_11661 = state_11629__$1;(statearr_11639_11661[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 11))
{var inst_11620 = cljs.core.async.close_BANG_.call(null,ch);var state_11629__$1 = state_11629;var statearr_11640_11662 = state_11629__$1;(statearr_11640_11662[2] = inst_11620);
(statearr_11640_11662[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 9))
{var state_11629__$1 = state_11629;if(cljs.core.truth_(close_QMARK_))
{var statearr_11641_11663 = state_11629__$1;(statearr_11641_11663[1] = 11);
} else
{var statearr_11642_11664 = state_11629__$1;(statearr_11642_11664[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 5))
{var inst_11606 = (state_11629[7]);var state_11629__$1 = state_11629;var statearr_11643_11665 = state_11629__$1;(statearr_11643_11665[2] = inst_11606);
(statearr_11643_11665[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 10))
{var inst_11625 = (state_11629[2]);var state_11629__$1 = state_11629;var statearr_11644_11666 = state_11629__$1;(statearr_11644_11666[2] = inst_11625);
(statearr_11644_11666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11630 === 8))
{var inst_11606 = (state_11629[7]);var inst_11616 = cljs.core.next.call(null,inst_11606);var inst_11606__$1 = inst_11616;var state_11629__$1 = (function (){var statearr_11645 = state_11629;(statearr_11645[7] = inst_11606__$1);
return statearr_11645;
})();var statearr_11646_11667 = state_11629__$1;(statearr_11646_11667[2] = null);
(statearr_11646_11667[1] = 2);
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
});})(c__6889__auto__))
;return ((function (switch__6825__auto__,c__6889__auto__){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_11650 = [null,null,null,null,null,null,null,null];(statearr_11650[0] = state_machine__6826__auto__);
(statearr_11650[1] = 1);
return statearr_11650;
});
var state_machine__6826__auto____1 = (function (state_11629){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_11629);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object))
{var ex__6829__auto__ = e11651;var statearr_11652_11668 = state_11629;(statearr_11652_11668[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11669 = state_11629;
state_11629 = G__11669;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_11629){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_11629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto__))
})();var state__6891__auto__ = (function (){var statearr_11653 = f__6890__auto__.call(null);(statearr_11653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto__);
return statearr_11653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto__))
);
return c__6889__auto__;
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
cljs.core.async.Mux = (function (){var obj11671 = {};return obj11671;
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
cljs.core.async.Mult = (function (){var obj11673 = {};return obj11673;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11895 = (function (cs,ch,mult,meta11896){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11896 = meta11896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11895.cljs$lang$type = true;
cljs.core.async.t11895.cljs$lang$ctorStr = "cljs.core.async/t11895";
cljs.core.async.t11895.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11895");
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11895.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11897){var self__ = this;
var _11897__$1 = this;return self__.meta11896;
});})(cs))
;
cljs.core.async.t11895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11897,meta11896__$1){var self__ = this;
var _11897__$1 = this;return (new cljs.core.async.t11895(self__.cs,self__.ch,self__.mult,meta11896__$1));
});})(cs))
;
cljs.core.async.__GT_t11895 = ((function (cs){
return (function __GT_t11895(cs__$1,ch__$1,mult__$1,meta11896){return (new cljs.core.async.t11895(cs__$1,ch__$1,mult__$1,meta11896));
});})(cs))
;
}
return (new cljs.core.async.t11895(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6889__auto___12116 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___12116,cs,m,dchan,dctr,done){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___12116,cs,m,dchan,dctr,done){
return (function (state_12028){var state_val_12029 = (state_12028[1]);if((state_val_12029 === 7))
{var inst_12024 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12030_12117 = state_12028__$1;(statearr_12030_12117[2] = inst_12024);
(statearr_12030_12117[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 20))
{var inst_11929 = (state_12028[7]);var inst_11939 = cljs.core.first.call(null,inst_11929);var inst_11940 = cljs.core.nth.call(null,inst_11939,0,null);var inst_11941 = cljs.core.nth.call(null,inst_11939,1,null);var state_12028__$1 = (function (){var statearr_12031 = state_12028;(statearr_12031[8] = inst_11940);
return statearr_12031;
})();if(cljs.core.truth_(inst_11941))
{var statearr_12032_12118 = state_12028__$1;(statearr_12032_12118[1] = 22);
} else
{var statearr_12033_12119 = state_12028__$1;(statearr_12033_12119[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 27))
{var inst_11971 = (state_12028[9]);var inst_11969 = (state_12028[10]);var inst_11900 = (state_12028[11]);var inst_11976 = (state_12028[12]);var inst_11976__$1 = cljs.core._nth.call(null,inst_11969,inst_11971);var inst_11977 = cljs.core.async.put_BANG_.call(null,inst_11976__$1,inst_11900,done);var state_12028__$1 = (function (){var statearr_12034 = state_12028;(statearr_12034[12] = inst_11976__$1);
return statearr_12034;
})();if(cljs.core.truth_(inst_11977))
{var statearr_12035_12120 = state_12028__$1;(statearr_12035_12120[1] = 30);
} else
{var statearr_12036_12121 = state_12028__$1;(statearr_12036_12121[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 1))
{var state_12028__$1 = state_12028;var statearr_12037_12122 = state_12028__$1;(statearr_12037_12122[2] = null);
(statearr_12037_12122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 24))
{var inst_11929 = (state_12028[7]);var inst_11946 = (state_12028[2]);var inst_11947 = cljs.core.next.call(null,inst_11929);var inst_11909 = inst_11947;var inst_11910 = null;var inst_11911 = 0;var inst_11912 = 0;var state_12028__$1 = (function (){var statearr_12038 = state_12028;(statearr_12038[13] = inst_11909);
(statearr_12038[14] = inst_11912);
(statearr_12038[15] = inst_11946);
(statearr_12038[16] = inst_11910);
(statearr_12038[17] = inst_11911);
return statearr_12038;
})();var statearr_12039_12123 = state_12028__$1;(statearr_12039_12123[2] = null);
(statearr_12039_12123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 39))
{var state_12028__$1 = state_12028;var statearr_12043_12124 = state_12028__$1;(statearr_12043_12124[2] = null);
(statearr_12043_12124[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 4))
{var inst_11900 = (state_12028[11]);var inst_11900__$1 = (state_12028[2]);var inst_11901 = (inst_11900__$1 == null);var state_12028__$1 = (function (){var statearr_12044 = state_12028;(statearr_12044[11] = inst_11900__$1);
return statearr_12044;
})();if(cljs.core.truth_(inst_11901))
{var statearr_12045_12125 = state_12028__$1;(statearr_12045_12125[1] = 5);
} else
{var statearr_12046_12126 = state_12028__$1;(statearr_12046_12126[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 15))
{var inst_11909 = (state_12028[13]);var inst_11912 = (state_12028[14]);var inst_11910 = (state_12028[16]);var inst_11911 = (state_12028[17]);var inst_11925 = (state_12028[2]);var inst_11926 = (inst_11912 + 1);var tmp12040 = inst_11909;var tmp12041 = inst_11910;var tmp12042 = inst_11911;var inst_11909__$1 = tmp12040;var inst_11910__$1 = tmp12041;var inst_11911__$1 = tmp12042;var inst_11912__$1 = inst_11926;var state_12028__$1 = (function (){var statearr_12047 = state_12028;(statearr_12047[13] = inst_11909__$1);
(statearr_12047[14] = inst_11912__$1);
(statearr_12047[16] = inst_11910__$1);
(statearr_12047[17] = inst_11911__$1);
(statearr_12047[18] = inst_11925);
return statearr_12047;
})();var statearr_12048_12127 = state_12028__$1;(statearr_12048_12127[2] = null);
(statearr_12048_12127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 21))
{var inst_11950 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12052_12128 = state_12028__$1;(statearr_12052_12128[2] = inst_11950);
(statearr_12052_12128[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 31))
{var inst_11976 = (state_12028[12]);var inst_11980 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11981 = cljs.core.async.untap_STAR_.call(null,m,inst_11976);var state_12028__$1 = (function (){var statearr_12053 = state_12028;(statearr_12053[19] = inst_11980);
return statearr_12053;
})();var statearr_12054_12129 = state_12028__$1;(statearr_12054_12129[2] = inst_11981);
(statearr_12054_12129[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 32))
{var inst_11968 = (state_12028[20]);var inst_11971 = (state_12028[9]);var inst_11970 = (state_12028[21]);var inst_11969 = (state_12028[10]);var inst_11983 = (state_12028[2]);var inst_11984 = (inst_11971 + 1);var tmp12049 = inst_11968;var tmp12050 = inst_11970;var tmp12051 = inst_11969;var inst_11968__$1 = tmp12049;var inst_11969__$1 = tmp12051;var inst_11970__$1 = tmp12050;var inst_11971__$1 = inst_11984;var state_12028__$1 = (function (){var statearr_12055 = state_12028;(statearr_12055[20] = inst_11968__$1);
(statearr_12055[9] = inst_11971__$1);
(statearr_12055[21] = inst_11970__$1);
(statearr_12055[10] = inst_11969__$1);
(statearr_12055[22] = inst_11983);
return statearr_12055;
})();var statearr_12056_12130 = state_12028__$1;(statearr_12056_12130[2] = null);
(statearr_12056_12130[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 40))
{var inst_11996 = (state_12028[23]);var inst_12000 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12001 = cljs.core.async.untap_STAR_.call(null,m,inst_11996);var state_12028__$1 = (function (){var statearr_12057 = state_12028;(statearr_12057[24] = inst_12000);
return statearr_12057;
})();var statearr_12058_12131 = state_12028__$1;(statearr_12058_12131[2] = inst_12001);
(statearr_12058_12131[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 33))
{var inst_11987 = (state_12028[25]);var inst_11989 = cljs.core.chunked_seq_QMARK_.call(null,inst_11987);var state_12028__$1 = state_12028;if(inst_11989)
{var statearr_12059_12132 = state_12028__$1;(statearr_12059_12132[1] = 36);
} else
{var statearr_12060_12133 = state_12028__$1;(statearr_12060_12133[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 13))
{var inst_11919 = (state_12028[26]);var inst_11922 = cljs.core.async.close_BANG_.call(null,inst_11919);var state_12028__$1 = state_12028;var statearr_12061_12134 = state_12028__$1;(statearr_12061_12134[2] = inst_11922);
(statearr_12061_12134[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 22))
{var inst_11940 = (state_12028[8]);var inst_11943 = cljs.core.async.close_BANG_.call(null,inst_11940);var state_12028__$1 = state_12028;var statearr_12062_12135 = state_12028__$1;(statearr_12062_12135[2] = inst_11943);
(statearr_12062_12135[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 36))
{var inst_11987 = (state_12028[25]);var inst_11991 = cljs.core.chunk_first.call(null,inst_11987);var inst_11992 = cljs.core.chunk_rest.call(null,inst_11987);var inst_11993 = cljs.core.count.call(null,inst_11991);var inst_11968 = inst_11992;var inst_11969 = inst_11991;var inst_11970 = inst_11993;var inst_11971 = 0;var state_12028__$1 = (function (){var statearr_12063 = state_12028;(statearr_12063[20] = inst_11968);
(statearr_12063[9] = inst_11971);
(statearr_12063[21] = inst_11970);
(statearr_12063[10] = inst_11969);
return statearr_12063;
})();var statearr_12064_12136 = state_12028__$1;(statearr_12064_12136[2] = null);
(statearr_12064_12136[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 41))
{var inst_11987 = (state_12028[25]);var inst_12003 = (state_12028[2]);var inst_12004 = cljs.core.next.call(null,inst_11987);var inst_11968 = inst_12004;var inst_11969 = null;var inst_11970 = 0;var inst_11971 = 0;var state_12028__$1 = (function (){var statearr_12065 = state_12028;(statearr_12065[20] = inst_11968);
(statearr_12065[9] = inst_11971);
(statearr_12065[21] = inst_11970);
(statearr_12065[10] = inst_11969);
(statearr_12065[27] = inst_12003);
return statearr_12065;
})();var statearr_12066_12137 = state_12028__$1;(statearr_12066_12137[2] = null);
(statearr_12066_12137[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 43))
{var state_12028__$1 = state_12028;var statearr_12067_12138 = state_12028__$1;(statearr_12067_12138[2] = null);
(statearr_12067_12138[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 29))
{var inst_12012 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12068_12139 = state_12028__$1;(statearr_12068_12139[2] = inst_12012);
(statearr_12068_12139[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 44))
{var inst_12021 = (state_12028[2]);var state_12028__$1 = (function (){var statearr_12069 = state_12028;(statearr_12069[28] = inst_12021);
return statearr_12069;
})();var statearr_12070_12140 = state_12028__$1;(statearr_12070_12140[2] = null);
(statearr_12070_12140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 6))
{var inst_11960 = (state_12028[29]);var inst_11959 = cljs.core.deref.call(null,cs);var inst_11960__$1 = cljs.core.keys.call(null,inst_11959);var inst_11961 = cljs.core.count.call(null,inst_11960__$1);var inst_11962 = cljs.core.reset_BANG_.call(null,dctr,inst_11961);var inst_11967 = cljs.core.seq.call(null,inst_11960__$1);var inst_11968 = inst_11967;var inst_11969 = null;var inst_11970 = 0;var inst_11971 = 0;var state_12028__$1 = (function (){var statearr_12071 = state_12028;(statearr_12071[20] = inst_11968);
(statearr_12071[9] = inst_11971);
(statearr_12071[21] = inst_11970);
(statearr_12071[10] = inst_11969);
(statearr_12071[29] = inst_11960__$1);
(statearr_12071[30] = inst_11962);
return statearr_12071;
})();var statearr_12072_12141 = state_12028__$1;(statearr_12072_12141[2] = null);
(statearr_12072_12141[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 28))
{var inst_11968 = (state_12028[20]);var inst_11987 = (state_12028[25]);var inst_11987__$1 = cljs.core.seq.call(null,inst_11968);var state_12028__$1 = (function (){var statearr_12073 = state_12028;(statearr_12073[25] = inst_11987__$1);
return statearr_12073;
})();if(inst_11987__$1)
{var statearr_12074_12142 = state_12028__$1;(statearr_12074_12142[1] = 33);
} else
{var statearr_12075_12143 = state_12028__$1;(statearr_12075_12143[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 25))
{var inst_11971 = (state_12028[9]);var inst_11970 = (state_12028[21]);var inst_11973 = (inst_11971 < inst_11970);var inst_11974 = inst_11973;var state_12028__$1 = state_12028;if(cljs.core.truth_(inst_11974))
{var statearr_12076_12144 = state_12028__$1;(statearr_12076_12144[1] = 27);
} else
{var statearr_12077_12145 = state_12028__$1;(statearr_12077_12145[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 34))
{var state_12028__$1 = state_12028;var statearr_12078_12146 = state_12028__$1;(statearr_12078_12146[2] = null);
(statearr_12078_12146[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 17))
{var state_12028__$1 = state_12028;var statearr_12079_12147 = state_12028__$1;(statearr_12079_12147[2] = null);
(statearr_12079_12147[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 3))
{var inst_12026 = (state_12028[2]);var state_12028__$1 = state_12028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12028__$1,inst_12026);
} else
{if((state_val_12029 === 12))
{var inst_11955 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12080_12148 = state_12028__$1;(statearr_12080_12148[2] = inst_11955);
(statearr_12080_12148[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 2))
{var state_12028__$1 = state_12028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12028__$1,4,ch);
} else
{if((state_val_12029 === 23))
{var state_12028__$1 = state_12028;var statearr_12081_12149 = state_12028__$1;(statearr_12081_12149[2] = null);
(statearr_12081_12149[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 35))
{var inst_12010 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12082_12150 = state_12028__$1;(statearr_12082_12150[2] = inst_12010);
(statearr_12082_12150[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 19))
{var inst_11929 = (state_12028[7]);var inst_11933 = cljs.core.chunk_first.call(null,inst_11929);var inst_11934 = cljs.core.chunk_rest.call(null,inst_11929);var inst_11935 = cljs.core.count.call(null,inst_11933);var inst_11909 = inst_11934;var inst_11910 = inst_11933;var inst_11911 = inst_11935;var inst_11912 = 0;var state_12028__$1 = (function (){var statearr_12083 = state_12028;(statearr_12083[13] = inst_11909);
(statearr_12083[14] = inst_11912);
(statearr_12083[16] = inst_11910);
(statearr_12083[17] = inst_11911);
return statearr_12083;
})();var statearr_12084_12151 = state_12028__$1;(statearr_12084_12151[2] = null);
(statearr_12084_12151[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 11))
{var inst_11909 = (state_12028[13]);var inst_11929 = (state_12028[7]);var inst_11929__$1 = cljs.core.seq.call(null,inst_11909);var state_12028__$1 = (function (){var statearr_12085 = state_12028;(statearr_12085[7] = inst_11929__$1);
return statearr_12085;
})();if(inst_11929__$1)
{var statearr_12086_12152 = state_12028__$1;(statearr_12086_12152[1] = 16);
} else
{var statearr_12087_12153 = state_12028__$1;(statearr_12087_12153[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 9))
{var inst_11957 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12088_12154 = state_12028__$1;(statearr_12088_12154[2] = inst_11957);
(statearr_12088_12154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 5))
{var inst_11907 = cljs.core.deref.call(null,cs);var inst_11908 = cljs.core.seq.call(null,inst_11907);var inst_11909 = inst_11908;var inst_11910 = null;var inst_11911 = 0;var inst_11912 = 0;var state_12028__$1 = (function (){var statearr_12089 = state_12028;(statearr_12089[13] = inst_11909);
(statearr_12089[14] = inst_11912);
(statearr_12089[16] = inst_11910);
(statearr_12089[17] = inst_11911);
return statearr_12089;
})();var statearr_12090_12155 = state_12028__$1;(statearr_12090_12155[2] = null);
(statearr_12090_12155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 14))
{var state_12028__$1 = state_12028;var statearr_12091_12156 = state_12028__$1;(statearr_12091_12156[2] = null);
(statearr_12091_12156[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 45))
{var inst_12018 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12092_12157 = state_12028__$1;(statearr_12092_12157[2] = inst_12018);
(statearr_12092_12157[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 26))
{var inst_11960 = (state_12028[29]);var inst_12014 = (state_12028[2]);var inst_12015 = cljs.core.seq.call(null,inst_11960);var state_12028__$1 = (function (){var statearr_12093 = state_12028;(statearr_12093[31] = inst_12014);
return statearr_12093;
})();if(inst_12015)
{var statearr_12094_12158 = state_12028__$1;(statearr_12094_12158[1] = 42);
} else
{var statearr_12095_12159 = state_12028__$1;(statearr_12095_12159[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 16))
{var inst_11929 = (state_12028[7]);var inst_11931 = cljs.core.chunked_seq_QMARK_.call(null,inst_11929);var state_12028__$1 = state_12028;if(inst_11931)
{var statearr_12096_12160 = state_12028__$1;(statearr_12096_12160[1] = 19);
} else
{var statearr_12097_12161 = state_12028__$1;(statearr_12097_12161[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 38))
{var inst_12007 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12098_12162 = state_12028__$1;(statearr_12098_12162[2] = inst_12007);
(statearr_12098_12162[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 30))
{var state_12028__$1 = state_12028;var statearr_12099_12163 = state_12028__$1;(statearr_12099_12163[2] = null);
(statearr_12099_12163[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 10))
{var inst_11912 = (state_12028[14]);var inst_11910 = (state_12028[16]);var inst_11918 = cljs.core._nth.call(null,inst_11910,inst_11912);var inst_11919 = cljs.core.nth.call(null,inst_11918,0,null);var inst_11920 = cljs.core.nth.call(null,inst_11918,1,null);var state_12028__$1 = (function (){var statearr_12100 = state_12028;(statearr_12100[26] = inst_11919);
return statearr_12100;
})();if(cljs.core.truth_(inst_11920))
{var statearr_12101_12164 = state_12028__$1;(statearr_12101_12164[1] = 13);
} else
{var statearr_12102_12165 = state_12028__$1;(statearr_12102_12165[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 18))
{var inst_11953 = (state_12028[2]);var state_12028__$1 = state_12028;var statearr_12103_12166 = state_12028__$1;(statearr_12103_12166[2] = inst_11953);
(statearr_12103_12166[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 42))
{var state_12028__$1 = state_12028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12028__$1,45,dchan);
} else
{if((state_val_12029 === 37))
{var inst_11900 = (state_12028[11]);var inst_11987 = (state_12028[25]);var inst_11996 = (state_12028[23]);var inst_11996__$1 = cljs.core.first.call(null,inst_11987);var inst_11997 = cljs.core.async.put_BANG_.call(null,inst_11996__$1,inst_11900,done);var state_12028__$1 = (function (){var statearr_12104 = state_12028;(statearr_12104[23] = inst_11996__$1);
return statearr_12104;
})();if(cljs.core.truth_(inst_11997))
{var statearr_12105_12167 = state_12028__$1;(statearr_12105_12167[1] = 39);
} else
{var statearr_12106_12168 = state_12028__$1;(statearr_12106_12168[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12029 === 8))
{var inst_11912 = (state_12028[14]);var inst_11911 = (state_12028[17]);var inst_11914 = (inst_11912 < inst_11911);var inst_11915 = inst_11914;var state_12028__$1 = state_12028;if(cljs.core.truth_(inst_11915))
{var statearr_12107_12169 = state_12028__$1;(statearr_12107_12169[1] = 10);
} else
{var statearr_12108_12170 = state_12028__$1;(statearr_12108_12170[1] = 11);
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
});})(c__6889__auto___12116,cs,m,dchan,dctr,done))
;return ((function (switch__6825__auto__,c__6889__auto___12116,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_12112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12112[0] = state_machine__6826__auto__);
(statearr_12112[1] = 1);
return statearr_12112;
});
var state_machine__6826__auto____1 = (function (state_12028){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_12028);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e12113){if((e12113 instanceof Object))
{var ex__6829__auto__ = e12113;var statearr_12114_12171 = state_12028;(statearr_12114_12171[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12172 = state_12028;
state_12028 = G__12172;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_12028){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_12028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___12116,cs,m,dchan,dctr,done))
})();var state__6891__auto__ = (function (){var statearr_12115 = f__6890__auto__.call(null);(statearr_12115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___12116);
return statearr_12115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___12116,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12174 = {};return obj12174;
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
;var m = (function (){if(typeof cljs.core.async.t12294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12294 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12295){
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
this.meta12295 = meta12295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12294.cljs$lang$type = true;
cljs.core.async.t12294.cljs$lang$ctorStr = "cljs.core.async/t12294";
cljs.core.async.t12294.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12294");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12296){var self__ = this;
var _12296__$1 = this;return self__.meta12295;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12296,meta12295__$1){var self__ = this;
var _12296__$1 = this;return (new cljs.core.async.t12294(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12295__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12294 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12295){return (new cljs.core.async.t12294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12295));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12294(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6889__auto___12413 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12366){var state_val_12367 = (state_12366[1]);if((state_val_12367 === 7))
{var inst_12310 = (state_12366[7]);var inst_12315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12310);var state_12366__$1 = state_12366;var statearr_12368_12414 = state_12366__$1;(statearr_12368_12414[2] = inst_12315);
(statearr_12368_12414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 20))
{var inst_12325 = (state_12366[8]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,23,out,inst_12325);
} else
{if((state_val_12367 === 1))
{var inst_12300 = (state_12366[9]);var inst_12300__$1 = calc_state.call(null);var inst_12301 = cljs.core.seq_QMARK_.call(null,inst_12300__$1);var state_12366__$1 = (function (){var statearr_12369 = state_12366;(statearr_12369[9] = inst_12300__$1);
return statearr_12369;
})();if(inst_12301)
{var statearr_12370_12415 = state_12366__$1;(statearr_12370_12415[1] = 2);
} else
{var statearr_12371_12416 = state_12366__$1;(statearr_12371_12416[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 24))
{var inst_12318 = (state_12366[10]);var inst_12310 = inst_12318;var state_12366__$1 = (function (){var statearr_12372 = state_12366;(statearr_12372[7] = inst_12310);
return statearr_12372;
})();var statearr_12373_12417 = state_12366__$1;(statearr_12373_12417[2] = null);
(statearr_12373_12417[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 4))
{var inst_12300 = (state_12366[9]);var inst_12306 = (state_12366[2]);var inst_12307 = cljs.core.get.call(null,inst_12306,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12308 = cljs.core.get.call(null,inst_12306,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12309 = cljs.core.get.call(null,inst_12306,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12310 = inst_12300;var state_12366__$1 = (function (){var statearr_12374 = state_12366;(statearr_12374[11] = inst_12307);
(statearr_12374[7] = inst_12310);
(statearr_12374[12] = inst_12308);
(statearr_12374[13] = inst_12309);
return statearr_12374;
})();var statearr_12375_12418 = state_12366__$1;(statearr_12375_12418[2] = null);
(statearr_12375_12418[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 15))
{var state_12366__$1 = state_12366;var statearr_12376_12419 = state_12366__$1;(statearr_12376_12419[2] = null);
(statearr_12376_12419[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 21))
{var inst_12318 = (state_12366[10]);var inst_12310 = inst_12318;var state_12366__$1 = (function (){var statearr_12377 = state_12366;(statearr_12377[7] = inst_12310);
return statearr_12377;
})();var statearr_12378_12420 = state_12366__$1;(statearr_12378_12420[2] = null);
(statearr_12378_12420[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 13))
{var inst_12362 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12379_12421 = state_12366__$1;(statearr_12379_12421[2] = inst_12362);
(statearr_12379_12421[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 22))
{var inst_12360 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12380_12422 = state_12366__$1;(statearr_12380_12422[2] = inst_12360);
(statearr_12380_12422[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 6))
{var inst_12364 = (state_12366[2]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else
{if((state_val_12367 === 25))
{var state_12366__$1 = state_12366;var statearr_12381_12423 = state_12366__$1;(statearr_12381_12423[2] = null);
(statearr_12381_12423[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 17))
{var inst_12340 = (state_12366[14]);var state_12366__$1 = state_12366;var statearr_12382_12424 = state_12366__$1;(statearr_12382_12424[2] = inst_12340);
(statearr_12382_12424[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 3))
{var inst_12300 = (state_12366[9]);var state_12366__$1 = state_12366;var statearr_12383_12425 = state_12366__$1;(statearr_12383_12425[2] = inst_12300);
(statearr_12383_12425[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 12))
{var inst_12326 = (state_12366[15]);var inst_12340 = (state_12366[14]);var inst_12321 = (state_12366[16]);var inst_12340__$1 = inst_12321.call(null,inst_12326);var state_12366__$1 = (function (){var statearr_12384 = state_12366;(statearr_12384[14] = inst_12340__$1);
return statearr_12384;
})();if(cljs.core.truth_(inst_12340__$1))
{var statearr_12385_12426 = state_12366__$1;(statearr_12385_12426[1] = 17);
} else
{var statearr_12386_12427 = state_12366__$1;(statearr_12386_12427[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 2))
{var inst_12300 = (state_12366[9]);var inst_12303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12300);var state_12366__$1 = state_12366;var statearr_12387_12428 = state_12366__$1;(statearr_12387_12428[2] = inst_12303);
(statearr_12387_12428[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 23))
{var inst_12351 = (state_12366[2]);var state_12366__$1 = state_12366;if(cljs.core.truth_(inst_12351))
{var statearr_12388_12429 = state_12366__$1;(statearr_12388_12429[1] = 24);
} else
{var statearr_12389_12430 = state_12366__$1;(statearr_12389_12430[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 19))
{var inst_12348 = (state_12366[2]);var state_12366__$1 = state_12366;if(cljs.core.truth_(inst_12348))
{var statearr_12390_12431 = state_12366__$1;(statearr_12390_12431[1] = 20);
} else
{var statearr_12391_12432 = state_12366__$1;(statearr_12391_12432[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 11))
{var inst_12325 = (state_12366[8]);var inst_12331 = (inst_12325 == null);var state_12366__$1 = state_12366;if(cljs.core.truth_(inst_12331))
{var statearr_12392_12433 = state_12366__$1;(statearr_12392_12433[1] = 14);
} else
{var statearr_12393_12434 = state_12366__$1;(statearr_12393_12434[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 9))
{var inst_12318 = (state_12366[10]);var inst_12318__$1 = (state_12366[2]);var inst_12319 = cljs.core.get.call(null,inst_12318__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12320 = cljs.core.get.call(null,inst_12318__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12321 = cljs.core.get.call(null,inst_12318__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12366__$1 = (function (){var statearr_12394 = state_12366;(statearr_12394[17] = inst_12320);
(statearr_12394[10] = inst_12318__$1);
(statearr_12394[16] = inst_12321);
return statearr_12394;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12366__$1,10,inst_12319);
} else
{if((state_val_12367 === 5))
{var inst_12310 = (state_12366[7]);var inst_12313 = cljs.core.seq_QMARK_.call(null,inst_12310);var state_12366__$1 = state_12366;if(inst_12313)
{var statearr_12395_12435 = state_12366__$1;(statearr_12395_12435[1] = 7);
} else
{var statearr_12396_12436 = state_12366__$1;(statearr_12396_12436[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 14))
{var inst_12326 = (state_12366[15]);var inst_12333 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12326);var state_12366__$1 = state_12366;var statearr_12397_12437 = state_12366__$1;(statearr_12397_12437[2] = inst_12333);
(statearr_12397_12437[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 26))
{var inst_12356 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12398_12438 = state_12366__$1;(statearr_12398_12438[2] = inst_12356);
(statearr_12398_12438[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 16))
{var inst_12336 = (state_12366[2]);var inst_12337 = calc_state.call(null);var inst_12310 = inst_12337;var state_12366__$1 = (function (){var statearr_12399 = state_12366;(statearr_12399[7] = inst_12310);
(statearr_12399[18] = inst_12336);
return statearr_12399;
})();var statearr_12400_12439 = state_12366__$1;(statearr_12400_12439[2] = null);
(statearr_12400_12439[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 10))
{var inst_12326 = (state_12366[15]);var inst_12325 = (state_12366[8]);var inst_12324 = (state_12366[2]);var inst_12325__$1 = cljs.core.nth.call(null,inst_12324,0,null);var inst_12326__$1 = cljs.core.nth.call(null,inst_12324,1,null);var inst_12327 = (inst_12325__$1 == null);var inst_12328 = cljs.core._EQ_.call(null,inst_12326__$1,change);var inst_12329 = (inst_12327) || (inst_12328);var state_12366__$1 = (function (){var statearr_12401 = state_12366;(statearr_12401[15] = inst_12326__$1);
(statearr_12401[8] = inst_12325__$1);
return statearr_12401;
})();if(cljs.core.truth_(inst_12329))
{var statearr_12402_12440 = state_12366__$1;(statearr_12402_12440[1] = 11);
} else
{var statearr_12403_12441 = state_12366__$1;(statearr_12403_12441[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 18))
{var inst_12320 = (state_12366[17]);var inst_12326 = (state_12366[15]);var inst_12321 = (state_12366[16]);var inst_12343 = cljs.core.empty_QMARK_.call(null,inst_12321);var inst_12344 = inst_12320.call(null,inst_12326);var inst_12345 = cljs.core.not.call(null,inst_12344);var inst_12346 = (inst_12343) && (inst_12345);var state_12366__$1 = state_12366;var statearr_12404_12442 = state_12366__$1;(statearr_12404_12442[2] = inst_12346);
(statearr_12404_12442[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 8))
{var inst_12310 = (state_12366[7]);var state_12366__$1 = state_12366;var statearr_12405_12443 = state_12366__$1;(statearr_12405_12443[2] = inst_12310);
(statearr_12405_12443[1] = 9);
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
});})(c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6825__auto__,c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_12409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12409[0] = state_machine__6826__auto__);
(statearr_12409[1] = 1);
return statearr_12409;
});
var state_machine__6826__auto____1 = (function (state_12366){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_12366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e12410){if((e12410 instanceof Object))
{var ex__6829__auto__ = e12410;var statearr_12411_12444 = state_12366;(statearr_12411_12444[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12445 = state_12366;
state_12366 = G__12445;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6891__auto__ = (function (){var statearr_12412 = f__6890__auto__.call(null);(statearr_12412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___12413);
return statearr_12412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___12413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12447 = {};return obj12447;
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
return (function (p1__12448_SHARP_){if(cljs.core.truth_(p1__12448_SHARP_.call(null,topic)))
{return p1__12448_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12448_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12571 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12572){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12572 = meta12572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12571.cljs$lang$type = true;
cljs.core.async.t12571.cljs$lang$ctorStr = "cljs.core.async/t12571";
cljs.core.async.t12571.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12571");
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12571.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12573){var self__ = this;
var _12573__$1 = this;return self__.meta12572;
});})(mults,ensure_mult))
;
cljs.core.async.t12571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12573,meta12572__$1){var self__ = this;
var _12573__$1 = this;return (new cljs.core.async.t12571(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12572__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12571 = ((function (mults,ensure_mult){
return (function __GT_t12571(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12572){return (new cljs.core.async.t12571(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12572));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12571(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6889__auto___12693 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___12693,mults,ensure_mult,p){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___12693,mults,ensure_mult,p){
return (function (state_12645){var state_val_12646 = (state_12645[1]);if((state_val_12646 === 7))
{var inst_12641 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12647_12694 = state_12645__$1;(statearr_12647_12694[2] = inst_12641);
(statearr_12647_12694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 20))
{var state_12645__$1 = state_12645;var statearr_12648_12695 = state_12645__$1;(statearr_12648_12695[2] = null);
(statearr_12648_12695[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 1))
{var state_12645__$1 = state_12645;var statearr_12649_12696 = state_12645__$1;(statearr_12649_12696[2] = null);
(statearr_12649_12696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 24))
{var inst_12624 = (state_12645[7]);var inst_12633 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12624);var state_12645__$1 = state_12645;var statearr_12650_12697 = state_12645__$1;(statearr_12650_12697[2] = inst_12633);
(statearr_12650_12697[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 4))
{var inst_12576 = (state_12645[8]);var inst_12576__$1 = (state_12645[2]);var inst_12577 = (inst_12576__$1 == null);var state_12645__$1 = (function (){var statearr_12651 = state_12645;(statearr_12651[8] = inst_12576__$1);
return statearr_12651;
})();if(cljs.core.truth_(inst_12577))
{var statearr_12652_12698 = state_12645__$1;(statearr_12652_12698[1] = 5);
} else
{var statearr_12653_12699 = state_12645__$1;(statearr_12653_12699[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 15))
{var inst_12618 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12654_12700 = state_12645__$1;(statearr_12654_12700[2] = inst_12618);
(statearr_12654_12700[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 21))
{var inst_12638 = (state_12645[2]);var state_12645__$1 = (function (){var statearr_12655 = state_12645;(statearr_12655[9] = inst_12638);
return statearr_12655;
})();var statearr_12656_12701 = state_12645__$1;(statearr_12656_12701[2] = null);
(statearr_12656_12701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 13))
{var inst_12600 = (state_12645[10]);var inst_12602 = cljs.core.chunked_seq_QMARK_.call(null,inst_12600);var state_12645__$1 = state_12645;if(inst_12602)
{var statearr_12657_12702 = state_12645__$1;(statearr_12657_12702[1] = 16);
} else
{var statearr_12658_12703 = state_12645__$1;(statearr_12658_12703[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 22))
{var inst_12630 = (state_12645[2]);var state_12645__$1 = state_12645;if(cljs.core.truth_(inst_12630))
{var statearr_12659_12704 = state_12645__$1;(statearr_12659_12704[1] = 23);
} else
{var statearr_12660_12705 = state_12645__$1;(statearr_12660_12705[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 6))
{var inst_12576 = (state_12645[8]);var inst_12624 = (state_12645[7]);var inst_12626 = (state_12645[11]);var inst_12624__$1 = topic_fn.call(null,inst_12576);var inst_12625 = cljs.core.deref.call(null,mults);var inst_12626__$1 = cljs.core.get.call(null,inst_12625,inst_12624__$1);var state_12645__$1 = (function (){var statearr_12661 = state_12645;(statearr_12661[7] = inst_12624__$1);
(statearr_12661[11] = inst_12626__$1);
return statearr_12661;
})();if(cljs.core.truth_(inst_12626__$1))
{var statearr_12662_12706 = state_12645__$1;(statearr_12662_12706[1] = 19);
} else
{var statearr_12663_12707 = state_12645__$1;(statearr_12663_12707[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 25))
{var inst_12635 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12664_12708 = state_12645__$1;(statearr_12664_12708[2] = inst_12635);
(statearr_12664_12708[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 17))
{var inst_12600 = (state_12645[10]);var inst_12609 = cljs.core.first.call(null,inst_12600);var inst_12610 = cljs.core.async.muxch_STAR_.call(null,inst_12609);var inst_12611 = cljs.core.async.close_BANG_.call(null,inst_12610);var inst_12612 = cljs.core.next.call(null,inst_12600);var inst_12586 = inst_12612;var inst_12587 = null;var inst_12588 = 0;var inst_12589 = 0;var state_12645__$1 = (function (){var statearr_12665 = state_12645;(statearr_12665[12] = inst_12587);
(statearr_12665[13] = inst_12588);
(statearr_12665[14] = inst_12611);
(statearr_12665[15] = inst_12589);
(statearr_12665[16] = inst_12586);
return statearr_12665;
})();var statearr_12666_12709 = state_12645__$1;(statearr_12666_12709[2] = null);
(statearr_12666_12709[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 3))
{var inst_12643 = (state_12645[2]);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12645__$1,inst_12643);
} else
{if((state_val_12646 === 12))
{var inst_12620 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12667_12710 = state_12645__$1;(statearr_12667_12710[2] = inst_12620);
(statearr_12667_12710[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 2))
{var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12645__$1,4,ch);
} else
{if((state_val_12646 === 23))
{var state_12645__$1 = state_12645;var statearr_12668_12711 = state_12645__$1;(statearr_12668_12711[2] = null);
(statearr_12668_12711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 19))
{var inst_12576 = (state_12645[8]);var inst_12626 = (state_12645[11]);var inst_12628 = cljs.core.async.muxch_STAR_.call(null,inst_12626);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12645__$1,22,inst_12628,inst_12576);
} else
{if((state_val_12646 === 11))
{var inst_12600 = (state_12645[10]);var inst_12586 = (state_12645[16]);var inst_12600__$1 = cljs.core.seq.call(null,inst_12586);var state_12645__$1 = (function (){var statearr_12669 = state_12645;(statearr_12669[10] = inst_12600__$1);
return statearr_12669;
})();if(inst_12600__$1)
{var statearr_12670_12712 = state_12645__$1;(statearr_12670_12712[1] = 13);
} else
{var statearr_12671_12713 = state_12645__$1;(statearr_12671_12713[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 9))
{var inst_12622 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12672_12714 = state_12645__$1;(statearr_12672_12714[2] = inst_12622);
(statearr_12672_12714[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 5))
{var inst_12583 = cljs.core.deref.call(null,mults);var inst_12584 = cljs.core.vals.call(null,inst_12583);var inst_12585 = cljs.core.seq.call(null,inst_12584);var inst_12586 = inst_12585;var inst_12587 = null;var inst_12588 = 0;var inst_12589 = 0;var state_12645__$1 = (function (){var statearr_12673 = state_12645;(statearr_12673[12] = inst_12587);
(statearr_12673[13] = inst_12588);
(statearr_12673[15] = inst_12589);
(statearr_12673[16] = inst_12586);
return statearr_12673;
})();var statearr_12674_12715 = state_12645__$1;(statearr_12674_12715[2] = null);
(statearr_12674_12715[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 14))
{var state_12645__$1 = state_12645;var statearr_12678_12716 = state_12645__$1;(statearr_12678_12716[2] = null);
(statearr_12678_12716[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 16))
{var inst_12600 = (state_12645[10]);var inst_12604 = cljs.core.chunk_first.call(null,inst_12600);var inst_12605 = cljs.core.chunk_rest.call(null,inst_12600);var inst_12606 = cljs.core.count.call(null,inst_12604);var inst_12586 = inst_12605;var inst_12587 = inst_12604;var inst_12588 = inst_12606;var inst_12589 = 0;var state_12645__$1 = (function (){var statearr_12679 = state_12645;(statearr_12679[12] = inst_12587);
(statearr_12679[13] = inst_12588);
(statearr_12679[15] = inst_12589);
(statearr_12679[16] = inst_12586);
return statearr_12679;
})();var statearr_12680_12717 = state_12645__$1;(statearr_12680_12717[2] = null);
(statearr_12680_12717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 10))
{var inst_12587 = (state_12645[12]);var inst_12588 = (state_12645[13]);var inst_12589 = (state_12645[15]);var inst_12586 = (state_12645[16]);var inst_12594 = cljs.core._nth.call(null,inst_12587,inst_12589);var inst_12595 = cljs.core.async.muxch_STAR_.call(null,inst_12594);var inst_12596 = cljs.core.async.close_BANG_.call(null,inst_12595);var inst_12597 = (inst_12589 + 1);var tmp12675 = inst_12587;var tmp12676 = inst_12588;var tmp12677 = inst_12586;var inst_12586__$1 = tmp12677;var inst_12587__$1 = tmp12675;var inst_12588__$1 = tmp12676;var inst_12589__$1 = inst_12597;var state_12645__$1 = (function (){var statearr_12681 = state_12645;(statearr_12681[12] = inst_12587__$1);
(statearr_12681[13] = inst_12588__$1);
(statearr_12681[17] = inst_12596);
(statearr_12681[15] = inst_12589__$1);
(statearr_12681[16] = inst_12586__$1);
return statearr_12681;
})();var statearr_12682_12718 = state_12645__$1;(statearr_12682_12718[2] = null);
(statearr_12682_12718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 18))
{var inst_12615 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12683_12719 = state_12645__$1;(statearr_12683_12719[2] = inst_12615);
(statearr_12683_12719[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 8))
{var inst_12588 = (state_12645[13]);var inst_12589 = (state_12645[15]);var inst_12591 = (inst_12589 < inst_12588);var inst_12592 = inst_12591;var state_12645__$1 = state_12645;if(cljs.core.truth_(inst_12592))
{var statearr_12684_12720 = state_12645__$1;(statearr_12684_12720[1] = 10);
} else
{var statearr_12685_12721 = state_12645__$1;(statearr_12685_12721[1] = 11);
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
});})(c__6889__auto___12693,mults,ensure_mult,p))
;return ((function (switch__6825__auto__,c__6889__auto___12693,mults,ensure_mult,p){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_12689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12689[0] = state_machine__6826__auto__);
(statearr_12689[1] = 1);
return statearr_12689;
});
var state_machine__6826__auto____1 = (function (state_12645){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_12645);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e12690){if((e12690 instanceof Object))
{var ex__6829__auto__ = e12690;var statearr_12691_12722 = state_12645;(statearr_12691_12722[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12723 = state_12645;
state_12645 = G__12723;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_12645){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_12645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___12693,mults,ensure_mult,p))
})();var state__6891__auto__ = (function (){var statearr_12692 = f__6890__auto__.call(null);(statearr_12692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___12693);
return statearr_12692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___12693,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6889__auto___12860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12830){var state_val_12831 = (state_12830[1]);if((state_val_12831 === 7))
{var state_12830__$1 = state_12830;var statearr_12832_12861 = state_12830__$1;(statearr_12832_12861[2] = null);
(statearr_12832_12861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 1))
{var state_12830__$1 = state_12830;var statearr_12833_12862 = state_12830__$1;(statearr_12833_12862[2] = null);
(statearr_12833_12862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 4))
{var inst_12794 = (state_12830[7]);var inst_12796 = (inst_12794 < cnt);var state_12830__$1 = state_12830;if(cljs.core.truth_(inst_12796))
{var statearr_12834_12863 = state_12830__$1;(statearr_12834_12863[1] = 6);
} else
{var statearr_12835_12864 = state_12830__$1;(statearr_12835_12864[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 15))
{var inst_12826 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12836_12865 = state_12830__$1;(statearr_12836_12865[2] = inst_12826);
(statearr_12836_12865[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 13))
{var inst_12819 = cljs.core.async.close_BANG_.call(null,out);var state_12830__$1 = state_12830;var statearr_12837_12866 = state_12830__$1;(statearr_12837_12866[2] = inst_12819);
(statearr_12837_12866[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 6))
{var state_12830__$1 = state_12830;var statearr_12838_12867 = state_12830__$1;(statearr_12838_12867[2] = null);
(statearr_12838_12867[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 3))
{var inst_12828 = (state_12830[2]);var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12830__$1,inst_12828);
} else
{if((state_val_12831 === 12))
{var inst_12816 = (state_12830[8]);var inst_12816__$1 = (state_12830[2]);var inst_12817 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12816__$1);var state_12830__$1 = (function (){var statearr_12839 = state_12830;(statearr_12839[8] = inst_12816__$1);
return statearr_12839;
})();if(cljs.core.truth_(inst_12817))
{var statearr_12840_12868 = state_12830__$1;(statearr_12840_12868[1] = 13);
} else
{var statearr_12841_12869 = state_12830__$1;(statearr_12841_12869[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 2))
{var inst_12793 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12794 = 0;var state_12830__$1 = (function (){var statearr_12842 = state_12830;(statearr_12842[9] = inst_12793);
(statearr_12842[7] = inst_12794);
return statearr_12842;
})();var statearr_12843_12870 = state_12830__$1;(statearr_12843_12870[2] = null);
(statearr_12843_12870[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 11))
{var inst_12794 = (state_12830[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12830,10,Object,null,9);var inst_12803 = chs__$1.call(null,inst_12794);var inst_12804 = done.call(null,inst_12794);var inst_12805 = cljs.core.async.take_BANG_.call(null,inst_12803,inst_12804);var state_12830__$1 = state_12830;var statearr_12844_12871 = state_12830__$1;(statearr_12844_12871[2] = inst_12805);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12830__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 9))
{var inst_12794 = (state_12830[7]);var inst_12807 = (state_12830[2]);var inst_12808 = (inst_12794 + 1);var inst_12794__$1 = inst_12808;var state_12830__$1 = (function (){var statearr_12845 = state_12830;(statearr_12845[7] = inst_12794__$1);
(statearr_12845[10] = inst_12807);
return statearr_12845;
})();var statearr_12846_12872 = state_12830__$1;(statearr_12846_12872[2] = null);
(statearr_12846_12872[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 5))
{var inst_12814 = (state_12830[2]);var state_12830__$1 = (function (){var statearr_12847 = state_12830;(statearr_12847[11] = inst_12814);
return statearr_12847;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12830__$1,12,dchan);
} else
{if((state_val_12831 === 14))
{var inst_12816 = (state_12830[8]);var inst_12821 = cljs.core.apply.call(null,f,inst_12816);var state_12830__$1 = state_12830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12830__$1,16,out,inst_12821);
} else
{if((state_val_12831 === 16))
{var inst_12823 = (state_12830[2]);var state_12830__$1 = (function (){var statearr_12848 = state_12830;(statearr_12848[12] = inst_12823);
return statearr_12848;
})();var statearr_12849_12873 = state_12830__$1;(statearr_12849_12873[2] = null);
(statearr_12849_12873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 10))
{var inst_12798 = (state_12830[2]);var inst_12799 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12830__$1 = (function (){var statearr_12850 = state_12830;(statearr_12850[13] = inst_12798);
return statearr_12850;
})();var statearr_12851_12874 = state_12830__$1;(statearr_12851_12874[2] = inst_12799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12830__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12831 === 8))
{var inst_12812 = (state_12830[2]);var state_12830__$1 = state_12830;var statearr_12852_12875 = state_12830__$1;(statearr_12852_12875[2] = inst_12812);
(statearr_12852_12875[1] = 5);
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
});})(c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6825__auto__,c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_12856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12856[0] = state_machine__6826__auto__);
(statearr_12856[1] = 1);
return statearr_12856;
});
var state_machine__6826__auto____1 = (function (state_12830){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_12830);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e12857){if((e12857 instanceof Object))
{var ex__6829__auto__ = e12857;var statearr_12858_12876 = state_12830;(statearr_12858_12876[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12877 = state_12830;
state_12830 = G__12877;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_12830){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_12830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6891__auto__ = (function (){var statearr_12859 = f__6890__auto__.call(null);(statearr_12859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___12860);
return statearr_12859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___12860,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___12985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___12985,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___12985,out){
return (function (state_12961){var state_val_12962 = (state_12961[1]);if((state_val_12962 === 7))
{var inst_12940 = (state_12961[7]);var inst_12941 = (state_12961[8]);var inst_12940__$1 = (state_12961[2]);var inst_12941__$1 = cljs.core.nth.call(null,inst_12940__$1,0,null);var inst_12942 = cljs.core.nth.call(null,inst_12940__$1,1,null);var inst_12943 = (inst_12941__$1 == null);var state_12961__$1 = (function (){var statearr_12963 = state_12961;(statearr_12963[7] = inst_12940__$1);
(statearr_12963[9] = inst_12942);
(statearr_12963[8] = inst_12941__$1);
return statearr_12963;
})();if(cljs.core.truth_(inst_12943))
{var statearr_12964_12986 = state_12961__$1;(statearr_12964_12986[1] = 8);
} else
{var statearr_12965_12987 = state_12961__$1;(statearr_12965_12987[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 1))
{var inst_12932 = cljs.core.vec.call(null,chs);var inst_12933 = inst_12932;var state_12961__$1 = (function (){var statearr_12966 = state_12961;(statearr_12966[10] = inst_12933);
return statearr_12966;
})();var statearr_12967_12988 = state_12961__$1;(statearr_12967_12988[2] = null);
(statearr_12967_12988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 4))
{var inst_12933 = (state_12961[10]);var state_12961__$1 = state_12961;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12961__$1,7,inst_12933);
} else
{if((state_val_12962 === 6))
{var inst_12957 = (state_12961[2]);var state_12961__$1 = state_12961;var statearr_12968_12989 = state_12961__$1;(statearr_12968_12989[2] = inst_12957);
(statearr_12968_12989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 3))
{var inst_12959 = (state_12961[2]);var state_12961__$1 = state_12961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12961__$1,inst_12959);
} else
{if((state_val_12962 === 2))
{var inst_12933 = (state_12961[10]);var inst_12935 = cljs.core.count.call(null,inst_12933);var inst_12936 = (inst_12935 > 0);var state_12961__$1 = state_12961;if(cljs.core.truth_(inst_12936))
{var statearr_12970_12990 = state_12961__$1;(statearr_12970_12990[1] = 4);
} else
{var statearr_12971_12991 = state_12961__$1;(statearr_12971_12991[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 11))
{var inst_12933 = (state_12961[10]);var inst_12950 = (state_12961[2]);var tmp12969 = inst_12933;var inst_12933__$1 = tmp12969;var state_12961__$1 = (function (){var statearr_12972 = state_12961;(statearr_12972[11] = inst_12950);
(statearr_12972[10] = inst_12933__$1);
return statearr_12972;
})();var statearr_12973_12992 = state_12961__$1;(statearr_12973_12992[2] = null);
(statearr_12973_12992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 9))
{var inst_12941 = (state_12961[8]);var state_12961__$1 = state_12961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12961__$1,11,out,inst_12941);
} else
{if((state_val_12962 === 5))
{var inst_12955 = cljs.core.async.close_BANG_.call(null,out);var state_12961__$1 = state_12961;var statearr_12974_12993 = state_12961__$1;(statearr_12974_12993[2] = inst_12955);
(statearr_12974_12993[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 10))
{var inst_12953 = (state_12961[2]);var state_12961__$1 = state_12961;var statearr_12975_12994 = state_12961__$1;(statearr_12975_12994[2] = inst_12953);
(statearr_12975_12994[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12962 === 8))
{var inst_12940 = (state_12961[7]);var inst_12942 = (state_12961[9]);var inst_12933 = (state_12961[10]);var inst_12941 = (state_12961[8]);var inst_12945 = (function (){var c = inst_12942;var v = inst_12941;var vec__12938 = inst_12940;var cs = inst_12933;return ((function (c,v,vec__12938,cs,inst_12940,inst_12942,inst_12933,inst_12941,state_val_12962,c__6889__auto___12985,out){
return (function (p1__12878_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12878_SHARP_);
});
;})(c,v,vec__12938,cs,inst_12940,inst_12942,inst_12933,inst_12941,state_val_12962,c__6889__auto___12985,out))
})();var inst_12946 = cljs.core.filterv.call(null,inst_12945,inst_12933);var inst_12933__$1 = inst_12946;var state_12961__$1 = (function (){var statearr_12976 = state_12961;(statearr_12976[10] = inst_12933__$1);
return statearr_12976;
})();var statearr_12977_12995 = state_12961__$1;(statearr_12977_12995[2] = null);
(statearr_12977_12995[1] = 2);
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
});})(c__6889__auto___12985,out))
;return ((function (switch__6825__auto__,c__6889__auto___12985,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_12981 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12981[0] = state_machine__6826__auto__);
(statearr_12981[1] = 1);
return statearr_12981;
});
var state_machine__6826__auto____1 = (function (state_12961){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_12961);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e12982){if((e12982 instanceof Object))
{var ex__6829__auto__ = e12982;var statearr_12983_12996 = state_12961;(statearr_12983_12996[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12997 = state_12961;
state_12961 = G__12997;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_12961){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_12961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___12985,out))
})();var state__6891__auto__ = (function (){var statearr_12984 = f__6890__auto__.call(null);(statearr_12984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___12985);
return statearr_12984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___12985,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___13090 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___13090,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___13090,out){
return (function (state_13067){var state_val_13068 = (state_13067[1]);if((state_val_13068 === 7))
{var inst_13049 = (state_13067[7]);var inst_13049__$1 = (state_13067[2]);var inst_13050 = (inst_13049__$1 == null);var inst_13051 = cljs.core.not.call(null,inst_13050);var state_13067__$1 = (function (){var statearr_13069 = state_13067;(statearr_13069[7] = inst_13049__$1);
return statearr_13069;
})();if(inst_13051)
{var statearr_13070_13091 = state_13067__$1;(statearr_13070_13091[1] = 8);
} else
{var statearr_13071_13092 = state_13067__$1;(statearr_13071_13092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 1))
{var inst_13044 = 0;var state_13067__$1 = (function (){var statearr_13072 = state_13067;(statearr_13072[8] = inst_13044);
return statearr_13072;
})();var statearr_13073_13093 = state_13067__$1;(statearr_13073_13093[2] = null);
(statearr_13073_13093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 4))
{var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13067__$1,7,ch);
} else
{if((state_val_13068 === 6))
{var inst_13062 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13074_13094 = state_13067__$1;(statearr_13074_13094[2] = inst_13062);
(statearr_13074_13094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 3))
{var inst_13064 = (state_13067[2]);var inst_13065 = cljs.core.async.close_BANG_.call(null,out);var state_13067__$1 = (function (){var statearr_13075 = state_13067;(statearr_13075[9] = inst_13064);
return statearr_13075;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13067__$1,inst_13065);
} else
{if((state_val_13068 === 2))
{var inst_13044 = (state_13067[8]);var inst_13046 = (inst_13044 < n);var state_13067__$1 = state_13067;if(cljs.core.truth_(inst_13046))
{var statearr_13076_13095 = state_13067__$1;(statearr_13076_13095[1] = 4);
} else
{var statearr_13077_13096 = state_13067__$1;(statearr_13077_13096[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 11))
{var inst_13044 = (state_13067[8]);var inst_13054 = (state_13067[2]);var inst_13055 = (inst_13044 + 1);var inst_13044__$1 = inst_13055;var state_13067__$1 = (function (){var statearr_13078 = state_13067;(statearr_13078[10] = inst_13054);
(statearr_13078[8] = inst_13044__$1);
return statearr_13078;
})();var statearr_13079_13097 = state_13067__$1;(statearr_13079_13097[2] = null);
(statearr_13079_13097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 9))
{var state_13067__$1 = state_13067;var statearr_13080_13098 = state_13067__$1;(statearr_13080_13098[2] = null);
(statearr_13080_13098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 5))
{var state_13067__$1 = state_13067;var statearr_13081_13099 = state_13067__$1;(statearr_13081_13099[2] = null);
(statearr_13081_13099[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 10))
{var inst_13059 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13082_13100 = state_13067__$1;(statearr_13082_13100[2] = inst_13059);
(statearr_13082_13100[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 8))
{var inst_13049 = (state_13067[7]);var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,11,out,inst_13049);
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
});})(c__6889__auto___13090,out))
;return ((function (switch__6825__auto__,c__6889__auto___13090,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_13086 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13086[0] = state_machine__6826__auto__);
(statearr_13086[1] = 1);
return statearr_13086;
});
var state_machine__6826__auto____1 = (function (state_13067){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_13067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e13087){if((e13087 instanceof Object))
{var ex__6829__auto__ = e13087;var statearr_13088_13101 = state_13067;(statearr_13088_13101[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13102 = state_13067;
state_13067 = G__13102;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_13067){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_13067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___13090,out))
})();var state__6891__auto__ = (function (){var statearr_13089 = f__6890__auto__.call(null);(statearr_13089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___13090);
return statearr_13089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___13090,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___13199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___13199,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___13199,out){
return (function (state_13174){var state_val_13175 = (state_13174[1]);if((state_val_13175 === 7))
{var inst_13169 = (state_13174[2]);var state_13174__$1 = state_13174;var statearr_13176_13200 = state_13174__$1;(statearr_13176_13200[2] = inst_13169);
(statearr_13176_13200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 1))
{var inst_13151 = null;var state_13174__$1 = (function (){var statearr_13177 = state_13174;(statearr_13177[7] = inst_13151);
return statearr_13177;
})();var statearr_13178_13201 = state_13174__$1;(statearr_13178_13201[2] = null);
(statearr_13178_13201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 4))
{var inst_13154 = (state_13174[8]);var inst_13154__$1 = (state_13174[2]);var inst_13155 = (inst_13154__$1 == null);var inst_13156 = cljs.core.not.call(null,inst_13155);var state_13174__$1 = (function (){var statearr_13179 = state_13174;(statearr_13179[8] = inst_13154__$1);
return statearr_13179;
})();if(inst_13156)
{var statearr_13180_13202 = state_13174__$1;(statearr_13180_13202[1] = 5);
} else
{var statearr_13181_13203 = state_13174__$1;(statearr_13181_13203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 6))
{var state_13174__$1 = state_13174;var statearr_13182_13204 = state_13174__$1;(statearr_13182_13204[2] = null);
(statearr_13182_13204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 3))
{var inst_13171 = (state_13174[2]);var inst_13172 = cljs.core.async.close_BANG_.call(null,out);var state_13174__$1 = (function (){var statearr_13183 = state_13174;(statearr_13183[9] = inst_13171);
return statearr_13183;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13174__$1,inst_13172);
} else
{if((state_val_13175 === 2))
{var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13174__$1,4,ch);
} else
{if((state_val_13175 === 11))
{var inst_13154 = (state_13174[8]);var inst_13163 = (state_13174[2]);var inst_13151 = inst_13154;var state_13174__$1 = (function (){var statearr_13184 = state_13174;(statearr_13184[7] = inst_13151);
(statearr_13184[10] = inst_13163);
return statearr_13184;
})();var statearr_13185_13205 = state_13174__$1;(statearr_13185_13205[2] = null);
(statearr_13185_13205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 9))
{var inst_13154 = (state_13174[8]);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,11,out,inst_13154);
} else
{if((state_val_13175 === 5))
{var inst_13151 = (state_13174[7]);var inst_13154 = (state_13174[8]);var inst_13158 = cljs.core._EQ_.call(null,inst_13154,inst_13151);var state_13174__$1 = state_13174;if(inst_13158)
{var statearr_13187_13206 = state_13174__$1;(statearr_13187_13206[1] = 8);
} else
{var statearr_13188_13207 = state_13174__$1;(statearr_13188_13207[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 10))
{var inst_13166 = (state_13174[2]);var state_13174__$1 = state_13174;var statearr_13189_13208 = state_13174__$1;(statearr_13189_13208[2] = inst_13166);
(statearr_13189_13208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13175 === 8))
{var inst_13151 = (state_13174[7]);var tmp13186 = inst_13151;var inst_13151__$1 = tmp13186;var state_13174__$1 = (function (){var statearr_13190 = state_13174;(statearr_13190[7] = inst_13151__$1);
return statearr_13190;
})();var statearr_13191_13209 = state_13174__$1;(statearr_13191_13209[2] = null);
(statearr_13191_13209[1] = 2);
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
});})(c__6889__auto___13199,out))
;return ((function (switch__6825__auto__,c__6889__auto___13199,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_13195 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13195[0] = state_machine__6826__auto__);
(statearr_13195[1] = 1);
return statearr_13195;
});
var state_machine__6826__auto____1 = (function (state_13174){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_13174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e13196){if((e13196 instanceof Object))
{var ex__6829__auto__ = e13196;var statearr_13197_13210 = state_13174;(statearr_13197_13210[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13211 = state_13174;
state_13174 = G__13211;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_13174){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_13174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___13199,out))
})();var state__6891__auto__ = (function (){var statearr_13198 = f__6890__auto__.call(null);(statearr_13198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___13199);
return statearr_13198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___13199,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___13346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___13346,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___13346,out){
return (function (state_13316){var state_val_13317 = (state_13316[1]);if((state_val_13317 === 7))
{var inst_13312 = (state_13316[2]);var state_13316__$1 = state_13316;var statearr_13318_13347 = state_13316__$1;(statearr_13318_13347[2] = inst_13312);
(statearr_13318_13347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 1))
{var inst_13279 = (new Array(n));var inst_13280 = inst_13279;var inst_13281 = 0;var state_13316__$1 = (function (){var statearr_13319 = state_13316;(statearr_13319[7] = inst_13281);
(statearr_13319[8] = inst_13280);
return statearr_13319;
})();var statearr_13320_13348 = state_13316__$1;(statearr_13320_13348[2] = null);
(statearr_13320_13348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 4))
{var inst_13284 = (state_13316[9]);var inst_13284__$1 = (state_13316[2]);var inst_13285 = (inst_13284__$1 == null);var inst_13286 = cljs.core.not.call(null,inst_13285);var state_13316__$1 = (function (){var statearr_13321 = state_13316;(statearr_13321[9] = inst_13284__$1);
return statearr_13321;
})();if(inst_13286)
{var statearr_13322_13349 = state_13316__$1;(statearr_13322_13349[1] = 5);
} else
{var statearr_13323_13350 = state_13316__$1;(statearr_13323_13350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 15))
{var inst_13306 = (state_13316[2]);var state_13316__$1 = state_13316;var statearr_13324_13351 = state_13316__$1;(statearr_13324_13351[2] = inst_13306);
(statearr_13324_13351[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 13))
{var state_13316__$1 = state_13316;var statearr_13325_13352 = state_13316__$1;(statearr_13325_13352[2] = null);
(statearr_13325_13352[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 6))
{var inst_13281 = (state_13316[7]);var inst_13302 = (inst_13281 > 0);var state_13316__$1 = state_13316;if(cljs.core.truth_(inst_13302))
{var statearr_13326_13353 = state_13316__$1;(statearr_13326_13353[1] = 12);
} else
{var statearr_13327_13354 = state_13316__$1;(statearr_13327_13354[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 3))
{var inst_13314 = (state_13316[2]);var state_13316__$1 = state_13316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13316__$1,inst_13314);
} else
{if((state_val_13317 === 12))
{var inst_13280 = (state_13316[8]);var inst_13304 = cljs.core.vec.call(null,inst_13280);var state_13316__$1 = state_13316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13316__$1,15,out,inst_13304);
} else
{if((state_val_13317 === 2))
{var state_13316__$1 = state_13316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13316__$1,4,ch);
} else
{if((state_val_13317 === 11))
{var inst_13296 = (state_13316[2]);var inst_13297 = (new Array(n));var inst_13280 = inst_13297;var inst_13281 = 0;var state_13316__$1 = (function (){var statearr_13328 = state_13316;(statearr_13328[7] = inst_13281);
(statearr_13328[10] = inst_13296);
(statearr_13328[8] = inst_13280);
return statearr_13328;
})();var statearr_13329_13355 = state_13316__$1;(statearr_13329_13355[2] = null);
(statearr_13329_13355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 9))
{var inst_13280 = (state_13316[8]);var inst_13294 = cljs.core.vec.call(null,inst_13280);var state_13316__$1 = state_13316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13316__$1,11,out,inst_13294);
} else
{if((state_val_13317 === 5))
{var inst_13289 = (state_13316[11]);var inst_13281 = (state_13316[7]);var inst_13284 = (state_13316[9]);var inst_13280 = (state_13316[8]);var inst_13288 = (inst_13280[inst_13281] = inst_13284);var inst_13289__$1 = (inst_13281 + 1);var inst_13290 = (inst_13289__$1 < n);var state_13316__$1 = (function (){var statearr_13330 = state_13316;(statearr_13330[11] = inst_13289__$1);
(statearr_13330[12] = inst_13288);
return statearr_13330;
})();if(cljs.core.truth_(inst_13290))
{var statearr_13331_13356 = state_13316__$1;(statearr_13331_13356[1] = 8);
} else
{var statearr_13332_13357 = state_13316__$1;(statearr_13332_13357[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 14))
{var inst_13309 = (state_13316[2]);var inst_13310 = cljs.core.async.close_BANG_.call(null,out);var state_13316__$1 = (function (){var statearr_13334 = state_13316;(statearr_13334[13] = inst_13309);
return statearr_13334;
})();var statearr_13335_13358 = state_13316__$1;(statearr_13335_13358[2] = inst_13310);
(statearr_13335_13358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 10))
{var inst_13300 = (state_13316[2]);var state_13316__$1 = state_13316;var statearr_13336_13359 = state_13316__$1;(statearr_13336_13359[2] = inst_13300);
(statearr_13336_13359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13317 === 8))
{var inst_13289 = (state_13316[11]);var inst_13280 = (state_13316[8]);var tmp13333 = inst_13280;var inst_13280__$1 = tmp13333;var inst_13281 = inst_13289;var state_13316__$1 = (function (){var statearr_13337 = state_13316;(statearr_13337[7] = inst_13281);
(statearr_13337[8] = inst_13280__$1);
return statearr_13337;
})();var statearr_13338_13360 = state_13316__$1;(statearr_13338_13360[2] = null);
(statearr_13338_13360[1] = 2);
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
});})(c__6889__auto___13346,out))
;return ((function (switch__6825__auto__,c__6889__auto___13346,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_13342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13342[0] = state_machine__6826__auto__);
(statearr_13342[1] = 1);
return statearr_13342;
});
var state_machine__6826__auto____1 = (function (state_13316){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_13316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e13343){if((e13343 instanceof Object))
{var ex__6829__auto__ = e13343;var statearr_13344_13361 = state_13316;(statearr_13344_13361[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13362 = state_13316;
state_13316 = G__13362;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_13316){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_13316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___13346,out))
})();var state__6891__auto__ = (function (){var statearr_13345 = f__6890__auto__.call(null);(statearr_13345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___13346);
return statearr_13345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___13346,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6889__auto___13505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___13505,out){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___13505,out){
return (function (state_13475){var state_val_13476 = (state_13475[1]);if((state_val_13476 === 7))
{var inst_13471 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13477_13506 = state_13475__$1;(statearr_13477_13506[2] = inst_13471);
(statearr_13477_13506[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 1))
{var inst_13434 = [];var inst_13435 = inst_13434;var inst_13436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13475__$1 = (function (){var statearr_13478 = state_13475;(statearr_13478[7] = inst_13436);
(statearr_13478[8] = inst_13435);
return statearr_13478;
})();var statearr_13479_13507 = state_13475__$1;(statearr_13479_13507[2] = null);
(statearr_13479_13507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 4))
{var inst_13439 = (state_13475[9]);var inst_13439__$1 = (state_13475[2]);var inst_13440 = (inst_13439__$1 == null);var inst_13441 = cljs.core.not.call(null,inst_13440);var state_13475__$1 = (function (){var statearr_13480 = state_13475;(statearr_13480[9] = inst_13439__$1);
return statearr_13480;
})();if(inst_13441)
{var statearr_13481_13508 = state_13475__$1;(statearr_13481_13508[1] = 5);
} else
{var statearr_13482_13509 = state_13475__$1;(statearr_13482_13509[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 15))
{var inst_13465 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13483_13510 = state_13475__$1;(statearr_13483_13510[2] = inst_13465);
(statearr_13483_13510[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 13))
{var state_13475__$1 = state_13475;var statearr_13484_13511 = state_13475__$1;(statearr_13484_13511[2] = null);
(statearr_13484_13511[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 6))
{var inst_13435 = (state_13475[8]);var inst_13460 = inst_13435.length;var inst_13461 = (inst_13460 > 0);var state_13475__$1 = state_13475;if(cljs.core.truth_(inst_13461))
{var statearr_13485_13512 = state_13475__$1;(statearr_13485_13512[1] = 12);
} else
{var statearr_13486_13513 = state_13475__$1;(statearr_13486_13513[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 3))
{var inst_13473 = (state_13475[2]);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13475__$1,inst_13473);
} else
{if((state_val_13476 === 12))
{var inst_13435 = (state_13475[8]);var inst_13463 = cljs.core.vec.call(null,inst_13435);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,15,out,inst_13463);
} else
{if((state_val_13476 === 2))
{var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13475__$1,4,ch);
} else
{if((state_val_13476 === 11))
{var inst_13439 = (state_13475[9]);var inst_13443 = (state_13475[10]);var inst_13453 = (state_13475[2]);var inst_13454 = [];var inst_13455 = inst_13454.push(inst_13439);var inst_13435 = inst_13454;var inst_13436 = inst_13443;var state_13475__$1 = (function (){var statearr_13487 = state_13475;(statearr_13487[7] = inst_13436);
(statearr_13487[11] = inst_13455);
(statearr_13487[12] = inst_13453);
(statearr_13487[8] = inst_13435);
return statearr_13487;
})();var statearr_13488_13514 = state_13475__$1;(statearr_13488_13514[2] = null);
(statearr_13488_13514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 9))
{var inst_13435 = (state_13475[8]);var inst_13451 = cljs.core.vec.call(null,inst_13435);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,11,out,inst_13451);
} else
{if((state_val_13476 === 5))
{var inst_13436 = (state_13475[7]);var inst_13439 = (state_13475[9]);var inst_13443 = (state_13475[10]);var inst_13443__$1 = f.call(null,inst_13439);var inst_13444 = cljs.core._EQ_.call(null,inst_13443__$1,inst_13436);var inst_13445 = cljs.core.keyword_identical_QMARK_.call(null,inst_13436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13446 = (inst_13444) || (inst_13445);var state_13475__$1 = (function (){var statearr_13489 = state_13475;(statearr_13489[10] = inst_13443__$1);
return statearr_13489;
})();if(cljs.core.truth_(inst_13446))
{var statearr_13490_13515 = state_13475__$1;(statearr_13490_13515[1] = 8);
} else
{var statearr_13491_13516 = state_13475__$1;(statearr_13491_13516[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 14))
{var inst_13468 = (state_13475[2]);var inst_13469 = cljs.core.async.close_BANG_.call(null,out);var state_13475__$1 = (function (){var statearr_13493 = state_13475;(statearr_13493[13] = inst_13468);
return statearr_13493;
})();var statearr_13494_13517 = state_13475__$1;(statearr_13494_13517[2] = inst_13469);
(statearr_13494_13517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 10))
{var inst_13458 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13495_13518 = state_13475__$1;(statearr_13495_13518[2] = inst_13458);
(statearr_13495_13518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 8))
{var inst_13439 = (state_13475[9]);var inst_13443 = (state_13475[10]);var inst_13435 = (state_13475[8]);var inst_13448 = inst_13435.push(inst_13439);var tmp13492 = inst_13435;var inst_13435__$1 = tmp13492;var inst_13436 = inst_13443;var state_13475__$1 = (function (){var statearr_13496 = state_13475;(statearr_13496[7] = inst_13436);
(statearr_13496[8] = inst_13435__$1);
(statearr_13496[14] = inst_13448);
return statearr_13496;
})();var statearr_13497_13519 = state_13475__$1;(statearr_13497_13519[2] = null);
(statearr_13497_13519[1] = 2);
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
});})(c__6889__auto___13505,out))
;return ((function (switch__6825__auto__,c__6889__auto___13505,out){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_13501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13501[0] = state_machine__6826__auto__);
(statearr_13501[1] = 1);
return statearr_13501;
});
var state_machine__6826__auto____1 = (function (state_13475){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_13475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e13502){if((e13502 instanceof Object))
{var ex__6829__auto__ = e13502;var statearr_13503_13520 = state_13475;(statearr_13503_13520[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13521 = state_13475;
state_13475 = G__13521;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_13475){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_13475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___13505,out))
})();var state__6891__auto__ = (function (){var statearr_13504 = f__6890__auto__.call(null);(statearr_13504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___13505);
return statearr_13504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___13505,out))
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