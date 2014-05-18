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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10990 = (function (f,fn_handler,meta10991){
this.f = f;
this.fn_handler = fn_handler;
this.meta10991 = meta10991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10990.cljs$lang$type = true;
cljs.core.async.t10990.cljs$lang$ctorStr = "cljs.core.async/t10990";
cljs.core.async.t10990.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10990");
});
cljs.core.async.t10990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10992){var self__ = this;
var _10992__$1 = this;return self__.meta10991;
});
cljs.core.async.t10990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10992,meta10991__$1){var self__ = this;
var _10992__$1 = this;return (new cljs.core.async.t10990(self__.f,self__.fn_handler,meta10991__$1));
});
cljs.core.async.__GT_t10990 = (function __GT_t10990(f__$1,fn_handler__$1,meta10991){return (new cljs.core.async.t10990(f__$1,fn_handler__$1,meta10991));
});
}
return (new cljs.core.async.t10990(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10994 = buff;if(G__10994)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10994.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10994.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10994);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10994);
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
{var val_10995 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10995);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10995,ret){
return (function (){return fn1.call(null,val_10995);
});})(val_10995,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10996 = n;var x_10997 = 0;while(true){
if((x_10997 < n__4329__auto___10996))
{(a[x_10997] = 0);
{
var G__10998 = (x_10997 + 1);
x_10997 = G__10998;
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
var G__10999 = (i + 1);
i = G__10999;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11003 = (function (flag,alt_flag,meta11004){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11004 = meta11004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11003.cljs$lang$type = true;
cljs.core.async.t11003.cljs$lang$ctorStr = "cljs.core.async/t11003";
cljs.core.async.t11003.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11003");
});})(flag))
;
cljs.core.async.t11003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11005){var self__ = this;
var _11005__$1 = this;return self__.meta11004;
});})(flag))
;
cljs.core.async.t11003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11005,meta11004__$1){var self__ = this;
var _11005__$1 = this;return (new cljs.core.async.t11003(self__.flag,self__.alt_flag,meta11004__$1));
});})(flag))
;
cljs.core.async.__GT_t11003 = ((function (flag){
return (function __GT_t11003(flag__$1,alt_flag__$1,meta11004){return (new cljs.core.async.t11003(flag__$1,alt_flag__$1,meta11004));
});})(flag))
;
}
return (new cljs.core.async.t11003(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11009 = (function (cb,flag,alt_handler,meta11010){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11010 = meta11010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11009.cljs$lang$type = true;
cljs.core.async.t11009.cljs$lang$ctorStr = "cljs.core.async/t11009";
cljs.core.async.t11009.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11009");
});
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11011){var self__ = this;
var _11011__$1 = this;return self__.meta11010;
});
cljs.core.async.t11009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11011,meta11010__$1){var self__ = this;
var _11011__$1 = this;return (new cljs.core.async.t11009(self__.cb,self__.flag,self__.alt_handler,meta11010__$1));
});
cljs.core.async.__GT_t11009 = (function __GT_t11009(cb__$1,flag__$1,alt_handler__$1,meta11010){return (new cljs.core.async.t11009(cb__$1,flag__$1,alt_handler__$1,meta11010));
});
}
return (new cljs.core.async.t11009(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11012_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11012_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11013_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11013_SHARP_,port], null));
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
var G__11014 = (i + 1);
i = G__11014;
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
var alts_BANG___delegate = function (ports,p__11015){var map__11017 = p__11015;var map__11017__$1 = ((cljs.core.seq_QMARK_.call(null,map__11017))?cljs.core.apply.call(null,cljs.core.hash_map,map__11017):map__11017);var opts = map__11017__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11015 = null;if (arguments.length > 1) {
  p__11015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11015);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11018){
var ports = cljs.core.first(arglist__11018);
var p__11015 = cljs.core.rest(arglist__11018);
return alts_BANG___delegate(ports,p__11015);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11026 = (function (ch,f,map_LT_,meta11027){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11027 = meta11027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11026.cljs$lang$type = true;
cljs.core.async.t11026.cljs$lang$ctorStr = "cljs.core.async/t11026";
cljs.core.async.t11026.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11026");
});
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11029 = (function (fn1,_,meta11027,ch,f,map_LT_,meta11030){
this.fn1 = fn1;
this._ = _;
this.meta11027 = meta11027;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11030 = meta11030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11029.cljs$lang$type = true;
cljs.core.async.t11029.cljs$lang$ctorStr = "cljs.core.async/t11029";
cljs.core.async.t11029.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11029");
});})(___$1))
;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11019_SHARP_){return f1.call(null,(((p1__11019_SHARP_ == null))?null:self__.f.call(null,p1__11019_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11031){var self__ = this;
var _11031__$1 = this;return self__.meta11030;
});})(___$1))
;
cljs.core.async.t11029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11031,meta11030__$1){var self__ = this;
var _11031__$1 = this;return (new cljs.core.async.t11029(self__.fn1,self__._,self__.meta11027,self__.ch,self__.f,self__.map_LT_,meta11030__$1));
});})(___$1))
;
cljs.core.async.__GT_t11029 = ((function (___$1){
return (function __GT_t11029(fn1__$1,___$2,meta11027__$1,ch__$2,f__$2,map_LT___$2,meta11030){return (new cljs.core.async.t11029(fn1__$1,___$2,meta11027__$1,ch__$2,f__$2,map_LT___$2,meta11030));
});})(___$1))
;
}
return (new cljs.core.async.t11029(fn1,___$1,self__.meta11027,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11026.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11028){var self__ = this;
var _11028__$1 = this;return self__.meta11027;
});
cljs.core.async.t11026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11028,meta11027__$1){var self__ = this;
var _11028__$1 = this;return (new cljs.core.async.t11026(self__.ch,self__.f,self__.map_LT_,meta11027__$1));
});
cljs.core.async.__GT_t11026 = (function __GT_t11026(ch__$1,f__$1,map_LT___$1,meta11027){return (new cljs.core.async.t11026(ch__$1,f__$1,map_LT___$1,meta11027));
});
}
return (new cljs.core.async.t11026(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11035 = (function (ch,f,map_GT_,meta11036){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11036 = meta11036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11035.cljs$lang$type = true;
cljs.core.async.t11035.cljs$lang$ctorStr = "cljs.core.async/t11035";
cljs.core.async.t11035.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11035");
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11037){var self__ = this;
var _11037__$1 = this;return self__.meta11036;
});
cljs.core.async.t11035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11037,meta11036__$1){var self__ = this;
var _11037__$1 = this;return (new cljs.core.async.t11035(self__.ch,self__.f,self__.map_GT_,meta11036__$1));
});
cljs.core.async.__GT_t11035 = (function __GT_t11035(ch__$1,f__$1,map_GT___$1,meta11036){return (new cljs.core.async.t11035(ch__$1,f__$1,map_GT___$1,meta11036));
});
}
return (new cljs.core.async.t11035(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11041 = (function (ch,p,filter_GT_,meta11042){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11042 = meta11042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11041.cljs$lang$type = true;
cljs.core.async.t11041.cljs$lang$ctorStr = "cljs.core.async/t11041";
cljs.core.async.t11041.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11041");
});
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11043){var self__ = this;
var _11043__$1 = this;return self__.meta11042;
});
cljs.core.async.t11041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11043,meta11042__$1){var self__ = this;
var _11043__$1 = this;return (new cljs.core.async.t11041(self__.ch,self__.p,self__.filter_GT_,meta11042__$1));
});
cljs.core.async.__GT_t11041 = (function __GT_t11041(ch__$1,p__$1,filter_GT___$1,meta11042){return (new cljs.core.async.t11041(ch__$1,p__$1,filter_GT___$1,meta11042));
});
}
return (new cljs.core.async.t11041(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___11126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___11126,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___11126,out){
return (function (state_11105){var state_val_11106 = (state_11105[1]);if((state_val_11106 === 7))
{var inst_11101 = (state_11105[2]);var state_11105__$1 = state_11105;var statearr_11107_11127 = state_11105__$1;(statearr_11107_11127[2] = inst_11101);
(statearr_11107_11127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 1))
{var state_11105__$1 = state_11105;var statearr_11108_11128 = state_11105__$1;(statearr_11108_11128[2] = null);
(statearr_11108_11128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 4))
{var inst_11087 = (state_11105[7]);var inst_11087__$1 = (state_11105[2]);var inst_11088 = (inst_11087__$1 == null);var state_11105__$1 = (function (){var statearr_11109 = state_11105;(statearr_11109[7] = inst_11087__$1);
return statearr_11109;
})();if(cljs.core.truth_(inst_11088))
{var statearr_11110_11129 = state_11105__$1;(statearr_11110_11129[1] = 5);
} else
{var statearr_11111_11130 = state_11105__$1;(statearr_11111_11130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 6))
{var inst_11087 = (state_11105[7]);var inst_11092 = p.call(null,inst_11087);var state_11105__$1 = state_11105;if(cljs.core.truth_(inst_11092))
{var statearr_11112_11131 = state_11105__$1;(statearr_11112_11131[1] = 8);
} else
{var statearr_11113_11132 = state_11105__$1;(statearr_11113_11132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 3))
{var inst_11103 = (state_11105[2]);var state_11105__$1 = state_11105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11105__$1,inst_11103);
} else
{if((state_val_11106 === 2))
{var state_11105__$1 = state_11105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11105__$1,4,ch);
} else
{if((state_val_11106 === 11))
{var inst_11095 = (state_11105[2]);var state_11105__$1 = state_11105;var statearr_11114_11133 = state_11105__$1;(statearr_11114_11133[2] = inst_11095);
(statearr_11114_11133[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 9))
{var state_11105__$1 = state_11105;var statearr_11115_11134 = state_11105__$1;(statearr_11115_11134[2] = null);
(statearr_11115_11134[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 5))
{var inst_11090 = cljs.core.async.close_BANG_.call(null,out);var state_11105__$1 = state_11105;var statearr_11116_11135 = state_11105__$1;(statearr_11116_11135[2] = inst_11090);
(statearr_11116_11135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 10))
{var inst_11098 = (state_11105[2]);var state_11105__$1 = (function (){var statearr_11117 = state_11105;(statearr_11117[8] = inst_11098);
return statearr_11117;
})();var statearr_11118_11136 = state_11105__$1;(statearr_11118_11136[2] = null);
(statearr_11118_11136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11106 === 8))
{var inst_11087 = (state_11105[7]);var state_11105__$1 = state_11105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11105__$1,11,out,inst_11087);
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
});})(c__6291__auto___11126,out))
;return ((function (switch__6276__auto__,c__6291__auto___11126,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11122 = [null,null,null,null,null,null,null,null,null];(statearr_11122[0] = state_machine__6277__auto__);
(statearr_11122[1] = 1);
return statearr_11122;
});
var state_machine__6277__auto____1 = (function (state_11105){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11123){if((e11123 instanceof Object))
{var ex__6280__auto__ = e11123;var statearr_11124_11137 = state_11105;(statearr_11124_11137[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11138 = state_11105;
state_11105 = G__11138;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11105){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___11126,out))
})();var state__6293__auto__ = (function (){var statearr_11125 = f__6292__auto__.call(null);(statearr_11125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___11126);
return statearr_11125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___11126,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_11304){var state_val_11305 = (state_11304[1]);if((state_val_11305 === 7))
{var inst_11300 = (state_11304[2]);var state_11304__$1 = state_11304;var statearr_11306_11347 = state_11304__$1;(statearr_11306_11347[2] = inst_11300);
(statearr_11306_11347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 20))
{var inst_11270 = (state_11304[7]);var inst_11281 = (state_11304[2]);var inst_11282 = cljs.core.next.call(null,inst_11270);var inst_11256 = inst_11282;var inst_11257 = null;var inst_11258 = 0;var inst_11259 = 0;var state_11304__$1 = (function (){var statearr_11307 = state_11304;(statearr_11307[8] = inst_11281);
(statearr_11307[9] = inst_11258);
(statearr_11307[10] = inst_11256);
(statearr_11307[11] = inst_11259);
(statearr_11307[12] = inst_11257);
return statearr_11307;
})();var statearr_11308_11348 = state_11304__$1;(statearr_11308_11348[2] = null);
(statearr_11308_11348[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 1))
{var state_11304__$1 = state_11304;var statearr_11309_11349 = state_11304__$1;(statearr_11309_11349[2] = null);
(statearr_11309_11349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 4))
{var inst_11245 = (state_11304[13]);var inst_11245__$1 = (state_11304[2]);var inst_11246 = (inst_11245__$1 == null);var state_11304__$1 = (function (){var statearr_11310 = state_11304;(statearr_11310[13] = inst_11245__$1);
return statearr_11310;
})();if(cljs.core.truth_(inst_11246))
{var statearr_11311_11350 = state_11304__$1;(statearr_11311_11350[1] = 5);
} else
{var statearr_11312_11351 = state_11304__$1;(statearr_11312_11351[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 15))
{var state_11304__$1 = state_11304;var statearr_11316_11352 = state_11304__$1;(statearr_11316_11352[2] = null);
(statearr_11316_11352[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 21))
{var state_11304__$1 = state_11304;var statearr_11317_11353 = state_11304__$1;(statearr_11317_11353[2] = null);
(statearr_11317_11353[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 13))
{var inst_11258 = (state_11304[9]);var inst_11256 = (state_11304[10]);var inst_11259 = (state_11304[11]);var inst_11257 = (state_11304[12]);var inst_11266 = (state_11304[2]);var inst_11267 = (inst_11259 + 1);var tmp11313 = inst_11258;var tmp11314 = inst_11256;var tmp11315 = inst_11257;var inst_11256__$1 = tmp11314;var inst_11257__$1 = tmp11315;var inst_11258__$1 = tmp11313;var inst_11259__$1 = inst_11267;var state_11304__$1 = (function (){var statearr_11318 = state_11304;(statearr_11318[14] = inst_11266);
(statearr_11318[9] = inst_11258__$1);
(statearr_11318[10] = inst_11256__$1);
(statearr_11318[11] = inst_11259__$1);
(statearr_11318[12] = inst_11257__$1);
return statearr_11318;
})();var statearr_11319_11354 = state_11304__$1;(statearr_11319_11354[2] = null);
(statearr_11319_11354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 22))
{var state_11304__$1 = state_11304;var statearr_11320_11355 = state_11304__$1;(statearr_11320_11355[2] = null);
(statearr_11320_11355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 6))
{var inst_11245 = (state_11304[13]);var inst_11254 = f.call(null,inst_11245);var inst_11255 = cljs.core.seq.call(null,inst_11254);var inst_11256 = inst_11255;var inst_11257 = null;var inst_11258 = 0;var inst_11259 = 0;var state_11304__$1 = (function (){var statearr_11321 = state_11304;(statearr_11321[9] = inst_11258);
(statearr_11321[10] = inst_11256);
(statearr_11321[11] = inst_11259);
(statearr_11321[12] = inst_11257);
return statearr_11321;
})();var statearr_11322_11356 = state_11304__$1;(statearr_11322_11356[2] = null);
(statearr_11322_11356[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 17))
{var inst_11270 = (state_11304[7]);var inst_11274 = cljs.core.chunk_first.call(null,inst_11270);var inst_11275 = cljs.core.chunk_rest.call(null,inst_11270);var inst_11276 = cljs.core.count.call(null,inst_11274);var inst_11256 = inst_11275;var inst_11257 = inst_11274;var inst_11258 = inst_11276;var inst_11259 = 0;var state_11304__$1 = (function (){var statearr_11323 = state_11304;(statearr_11323[9] = inst_11258);
(statearr_11323[10] = inst_11256);
(statearr_11323[11] = inst_11259);
(statearr_11323[12] = inst_11257);
return statearr_11323;
})();var statearr_11324_11357 = state_11304__$1;(statearr_11324_11357[2] = null);
(statearr_11324_11357[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 3))
{var inst_11302 = (state_11304[2]);var state_11304__$1 = state_11304;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11304__$1,inst_11302);
} else
{if((state_val_11305 === 12))
{var inst_11290 = (state_11304[2]);var state_11304__$1 = state_11304;var statearr_11325_11358 = state_11304__$1;(statearr_11325_11358[2] = inst_11290);
(statearr_11325_11358[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 2))
{var state_11304__$1 = state_11304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11304__$1,4,in$);
} else
{if((state_val_11305 === 23))
{var inst_11298 = (state_11304[2]);var state_11304__$1 = state_11304;var statearr_11326_11359 = state_11304__$1;(statearr_11326_11359[2] = inst_11298);
(statearr_11326_11359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 19))
{var inst_11285 = (state_11304[2]);var state_11304__$1 = state_11304;var statearr_11327_11360 = state_11304__$1;(statearr_11327_11360[2] = inst_11285);
(statearr_11327_11360[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 11))
{var inst_11256 = (state_11304[10]);var inst_11270 = (state_11304[7]);var inst_11270__$1 = cljs.core.seq.call(null,inst_11256);var state_11304__$1 = (function (){var statearr_11328 = state_11304;(statearr_11328[7] = inst_11270__$1);
return statearr_11328;
})();if(inst_11270__$1)
{var statearr_11329_11361 = state_11304__$1;(statearr_11329_11361[1] = 14);
} else
{var statearr_11330_11362 = state_11304__$1;(statearr_11330_11362[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 9))
{var inst_11292 = (state_11304[2]);var inst_11293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11304__$1 = (function (){var statearr_11331 = state_11304;(statearr_11331[15] = inst_11292);
return statearr_11331;
})();if(cljs.core.truth_(inst_11293))
{var statearr_11332_11363 = state_11304__$1;(statearr_11332_11363[1] = 21);
} else
{var statearr_11333_11364 = state_11304__$1;(statearr_11333_11364[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 5))
{var inst_11248 = cljs.core.async.close_BANG_.call(null,out);var state_11304__$1 = state_11304;var statearr_11334_11365 = state_11304__$1;(statearr_11334_11365[2] = inst_11248);
(statearr_11334_11365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 14))
{var inst_11270 = (state_11304[7]);var inst_11272 = cljs.core.chunked_seq_QMARK_.call(null,inst_11270);var state_11304__$1 = state_11304;if(inst_11272)
{var statearr_11335_11366 = state_11304__$1;(statearr_11335_11366[1] = 17);
} else
{var statearr_11336_11367 = state_11304__$1;(statearr_11336_11367[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 16))
{var inst_11288 = (state_11304[2]);var state_11304__$1 = state_11304;var statearr_11337_11368 = state_11304__$1;(statearr_11337_11368[2] = inst_11288);
(statearr_11337_11368[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11305 === 10))
{var inst_11259 = (state_11304[11]);var inst_11257 = (state_11304[12]);var inst_11264 = cljs.core._nth.call(null,inst_11257,inst_11259);var state_11304__$1 = state_11304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11304__$1,13,out,inst_11264);
} else
{if((state_val_11305 === 18))
{var inst_11270 = (state_11304[7]);var inst_11279 = cljs.core.first.call(null,inst_11270);var state_11304__$1 = state_11304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11304__$1,20,out,inst_11279);
} else
{if((state_val_11305 === 8))
{var inst_11258 = (state_11304[9]);var inst_11259 = (state_11304[11]);var inst_11261 = (inst_11259 < inst_11258);var inst_11262 = inst_11261;var state_11304__$1 = state_11304;if(cljs.core.truth_(inst_11262))
{var statearr_11338_11369 = state_11304__$1;(statearr_11338_11369[1] = 10);
} else
{var statearr_11339_11370 = state_11304__$1;(statearr_11339_11370[1] = 11);
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
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11343[0] = state_machine__6277__auto__);
(statearr_11343[1] = 1);
return statearr_11343;
});
var state_machine__6277__auto____1 = (function (state_11304){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11304);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11344){if((e11344 instanceof Object))
{var ex__6280__auto__ = e11344;var statearr_11345_11371 = state_11304;(statearr_11345_11371[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11304);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11372 = state_11304;
state_11304 = G__11372;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11304){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_11346 = f__6292__auto__.call(null);(statearr_11346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_11346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6291__auto___11467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___11467){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___11467){
return (function (state_11443){var state_val_11444 = (state_11443[1]);if((state_val_11444 === 7))
{var inst_11439 = (state_11443[2]);var state_11443__$1 = state_11443;var statearr_11445_11468 = state_11443__$1;(statearr_11445_11468[2] = inst_11439);
(statearr_11445_11468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 1))
{var state_11443__$1 = state_11443;var statearr_11446_11469 = state_11443__$1;(statearr_11446_11469[2] = null);
(statearr_11446_11469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 4))
{var inst_11422 = (state_11443[7]);var inst_11422__$1 = (state_11443[2]);var inst_11423 = (inst_11422__$1 == null);var state_11443__$1 = (function (){var statearr_11447 = state_11443;(statearr_11447[7] = inst_11422__$1);
return statearr_11447;
})();if(cljs.core.truth_(inst_11423))
{var statearr_11448_11470 = state_11443__$1;(statearr_11448_11470[1] = 5);
} else
{var statearr_11449_11471 = state_11443__$1;(statearr_11449_11471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 13))
{var state_11443__$1 = state_11443;var statearr_11450_11472 = state_11443__$1;(statearr_11450_11472[2] = null);
(statearr_11450_11472[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 6))
{var inst_11422 = (state_11443[7]);var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11443__$1,11,to,inst_11422);
} else
{if((state_val_11444 === 3))
{var inst_11441 = (state_11443[2]);var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11443__$1,inst_11441);
} else
{if((state_val_11444 === 12))
{var state_11443__$1 = state_11443;var statearr_11451_11473 = state_11443__$1;(statearr_11451_11473[2] = null);
(statearr_11451_11473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 2))
{var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11443__$1,4,from);
} else
{if((state_val_11444 === 11))
{var inst_11432 = (state_11443[2]);var state_11443__$1 = state_11443;if(cljs.core.truth_(inst_11432))
{var statearr_11452_11474 = state_11443__$1;(statearr_11452_11474[1] = 12);
} else
{var statearr_11453_11475 = state_11443__$1;(statearr_11453_11475[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 9))
{var state_11443__$1 = state_11443;var statearr_11454_11476 = state_11443__$1;(statearr_11454_11476[2] = null);
(statearr_11454_11476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 5))
{var state_11443__$1 = state_11443;if(cljs.core.truth_(close_QMARK_))
{var statearr_11455_11477 = state_11443__$1;(statearr_11455_11477[1] = 8);
} else
{var statearr_11456_11478 = state_11443__$1;(statearr_11456_11478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 14))
{var inst_11437 = (state_11443[2]);var state_11443__$1 = state_11443;var statearr_11457_11479 = state_11443__$1;(statearr_11457_11479[2] = inst_11437);
(statearr_11457_11479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 10))
{var inst_11429 = (state_11443[2]);var state_11443__$1 = state_11443;var statearr_11458_11480 = state_11443__$1;(statearr_11458_11480[2] = inst_11429);
(statearr_11458_11480[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11444 === 8))
{var inst_11426 = cljs.core.async.close_BANG_.call(null,to);var state_11443__$1 = state_11443;var statearr_11459_11481 = state_11443__$1;(statearr_11459_11481[2] = inst_11426);
(statearr_11459_11481[1] = 10);
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
});})(c__6291__auto___11467))
;return ((function (switch__6276__auto__,c__6291__auto___11467){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11463 = [null,null,null,null,null,null,null,null];(statearr_11463[0] = state_machine__6277__auto__);
(statearr_11463[1] = 1);
return statearr_11463;
});
var state_machine__6277__auto____1 = (function (state_11443){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object))
{var ex__6280__auto__ = e11464;var statearr_11465_11482 = state_11443;(statearr_11465_11482[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11483 = state_11443;
state_11443 = G__11483;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11443){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___11467))
})();var state__6293__auto__ = (function (){var statearr_11466 = f__6292__auto__.call(null);(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___11467);
return statearr_11466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___11467))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6291__auto___11584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___11584,tc,fc){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___11584,tc,fc){
return (function (state_11559){var state_val_11560 = (state_11559[1]);if((state_val_11560 === 7))
{var inst_11555 = (state_11559[2]);var state_11559__$1 = state_11559;var statearr_11561_11585 = state_11559__$1;(statearr_11561_11585[2] = inst_11555);
(statearr_11561_11585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 1))
{var state_11559__$1 = state_11559;var statearr_11562_11586 = state_11559__$1;(statearr_11562_11586[2] = null);
(statearr_11562_11586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 4))
{var inst_11536 = (state_11559[7]);var inst_11536__$1 = (state_11559[2]);var inst_11537 = (inst_11536__$1 == null);var state_11559__$1 = (function (){var statearr_11563 = state_11559;(statearr_11563[7] = inst_11536__$1);
return statearr_11563;
})();if(cljs.core.truth_(inst_11537))
{var statearr_11564_11587 = state_11559__$1;(statearr_11564_11587[1] = 5);
} else
{var statearr_11565_11588 = state_11559__$1;(statearr_11565_11588[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 13))
{var state_11559__$1 = state_11559;var statearr_11566_11589 = state_11559__$1;(statearr_11566_11589[2] = null);
(statearr_11566_11589[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 6))
{var inst_11536 = (state_11559[7]);var inst_11542 = p.call(null,inst_11536);var state_11559__$1 = state_11559;if(cljs.core.truth_(inst_11542))
{var statearr_11567_11590 = state_11559__$1;(statearr_11567_11590[1] = 9);
} else
{var statearr_11568_11591 = state_11559__$1;(statearr_11568_11591[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 3))
{var inst_11557 = (state_11559[2]);var state_11559__$1 = state_11559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11559__$1,inst_11557);
} else
{if((state_val_11560 === 12))
{var state_11559__$1 = state_11559;var statearr_11569_11592 = state_11559__$1;(statearr_11569_11592[2] = null);
(statearr_11569_11592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 2))
{var state_11559__$1 = state_11559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11559__$1,4,ch);
} else
{if((state_val_11560 === 11))
{var inst_11536 = (state_11559[7]);var inst_11546 = (state_11559[2]);var state_11559__$1 = state_11559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11559__$1,8,inst_11546,inst_11536);
} else
{if((state_val_11560 === 9))
{var state_11559__$1 = state_11559;var statearr_11570_11593 = state_11559__$1;(statearr_11570_11593[2] = tc);
(statearr_11570_11593[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 5))
{var inst_11539 = cljs.core.async.close_BANG_.call(null,tc);var inst_11540 = cljs.core.async.close_BANG_.call(null,fc);var state_11559__$1 = (function (){var statearr_11571 = state_11559;(statearr_11571[8] = inst_11539);
return statearr_11571;
})();var statearr_11572_11594 = state_11559__$1;(statearr_11572_11594[2] = inst_11540);
(statearr_11572_11594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 14))
{var inst_11553 = (state_11559[2]);var state_11559__$1 = state_11559;var statearr_11573_11595 = state_11559__$1;(statearr_11573_11595[2] = inst_11553);
(statearr_11573_11595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 10))
{var state_11559__$1 = state_11559;var statearr_11574_11596 = state_11559__$1;(statearr_11574_11596[2] = fc);
(statearr_11574_11596[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11560 === 8))
{var inst_11548 = (state_11559[2]);var state_11559__$1 = state_11559;if(cljs.core.truth_(inst_11548))
{var statearr_11575_11597 = state_11559__$1;(statearr_11575_11597[1] = 12);
} else
{var statearr_11576_11598 = state_11559__$1;(statearr_11576_11598[1] = 13);
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
});})(c__6291__auto___11584,tc,fc))
;return ((function (switch__6276__auto__,c__6291__auto___11584,tc,fc){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11580 = [null,null,null,null,null,null,null,null,null];(statearr_11580[0] = state_machine__6277__auto__);
(statearr_11580[1] = 1);
return statearr_11580;
});
var state_machine__6277__auto____1 = (function (state_11559){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11559);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11581){if((e11581 instanceof Object))
{var ex__6280__auto__ = e11581;var statearr_11582_11599 = state_11559;(statearr_11582_11599[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11600 = state_11559;
state_11559 = G__11600;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11559){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___11584,tc,fc))
})();var state__6293__auto__ = (function (){var statearr_11583 = f__6292__auto__.call(null);(statearr_11583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___11584);
return statearr_11583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___11584,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_11647){var state_val_11648 = (state_11647[1]);if((state_val_11648 === 7))
{var inst_11643 = (state_11647[2]);var state_11647__$1 = state_11647;var statearr_11649_11665 = state_11647__$1;(statearr_11649_11665[2] = inst_11643);
(statearr_11649_11665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 6))
{var inst_11633 = (state_11647[7]);var inst_11636 = (state_11647[8]);var inst_11640 = f.call(null,inst_11633,inst_11636);var inst_11633__$1 = inst_11640;var state_11647__$1 = (function (){var statearr_11650 = state_11647;(statearr_11650[7] = inst_11633__$1);
return statearr_11650;
})();var statearr_11651_11666 = state_11647__$1;(statearr_11651_11666[2] = null);
(statearr_11651_11666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 5))
{var inst_11633 = (state_11647[7]);var state_11647__$1 = state_11647;var statearr_11652_11667 = state_11647__$1;(statearr_11652_11667[2] = inst_11633);
(statearr_11652_11667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 4))
{var inst_11636 = (state_11647[8]);var inst_11636__$1 = (state_11647[2]);var inst_11637 = (inst_11636__$1 == null);var state_11647__$1 = (function (){var statearr_11653 = state_11647;(statearr_11653[8] = inst_11636__$1);
return statearr_11653;
})();if(cljs.core.truth_(inst_11637))
{var statearr_11654_11668 = state_11647__$1;(statearr_11654_11668[1] = 5);
} else
{var statearr_11655_11669 = state_11647__$1;(statearr_11655_11669[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 3))
{var inst_11645 = (state_11647[2]);var state_11647__$1 = state_11647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11647__$1,inst_11645);
} else
{if((state_val_11648 === 2))
{var state_11647__$1 = state_11647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11647__$1,4,ch);
} else
{if((state_val_11648 === 1))
{var inst_11633 = init;var state_11647__$1 = (function (){var statearr_11656 = state_11647;(statearr_11656[7] = inst_11633);
return statearr_11656;
})();var statearr_11657_11670 = state_11647__$1;(statearr_11657_11670[2] = null);
(statearr_11657_11670[1] = 2);
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
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11661 = [null,null,null,null,null,null,null,null,null];(statearr_11661[0] = state_machine__6277__auto__);
(statearr_11661[1] = 1);
return statearr_11661;
});
var state_machine__6277__auto____1 = (function (state_11647){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11647);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11662){if((e11662 instanceof Object))
{var ex__6280__auto__ = e11662;var statearr_11663_11671 = state_11647;(statearr_11663_11671[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11672 = state_11647;
state_11647 = G__11672;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11647){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_11664 = f__6292__auto__.call(null);(statearr_11664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_11664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_11746){var state_val_11747 = (state_11746[1]);if((state_val_11747 === 7))
{var inst_11728 = (state_11746[2]);var state_11746__$1 = state_11746;var statearr_11748_11771 = state_11746__$1;(statearr_11748_11771[2] = inst_11728);
(statearr_11748_11771[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 1))
{var inst_11722 = cljs.core.seq.call(null,coll);var inst_11723 = inst_11722;var state_11746__$1 = (function (){var statearr_11749 = state_11746;(statearr_11749[7] = inst_11723);
return statearr_11749;
})();var statearr_11750_11772 = state_11746__$1;(statearr_11750_11772[2] = null);
(statearr_11750_11772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 4))
{var inst_11723 = (state_11746[7]);var inst_11726 = cljs.core.first.call(null,inst_11723);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11746__$1,7,ch,inst_11726);
} else
{if((state_val_11747 === 13))
{var inst_11740 = (state_11746[2]);var state_11746__$1 = state_11746;var statearr_11751_11773 = state_11746__$1;(statearr_11751_11773[2] = inst_11740);
(statearr_11751_11773[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 6))
{var inst_11731 = (state_11746[2]);var state_11746__$1 = state_11746;if(cljs.core.truth_(inst_11731))
{var statearr_11752_11774 = state_11746__$1;(statearr_11752_11774[1] = 8);
} else
{var statearr_11753_11775 = state_11746__$1;(statearr_11753_11775[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 3))
{var inst_11744 = (state_11746[2]);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11746__$1,inst_11744);
} else
{if((state_val_11747 === 12))
{var state_11746__$1 = state_11746;var statearr_11754_11776 = state_11746__$1;(statearr_11754_11776[2] = null);
(statearr_11754_11776[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 2))
{var inst_11723 = (state_11746[7]);var state_11746__$1 = state_11746;if(cljs.core.truth_(inst_11723))
{var statearr_11755_11777 = state_11746__$1;(statearr_11755_11777[1] = 4);
} else
{var statearr_11756_11778 = state_11746__$1;(statearr_11756_11778[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 11))
{var inst_11737 = cljs.core.async.close_BANG_.call(null,ch);var state_11746__$1 = state_11746;var statearr_11757_11779 = state_11746__$1;(statearr_11757_11779[2] = inst_11737);
(statearr_11757_11779[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 9))
{var state_11746__$1 = state_11746;if(cljs.core.truth_(close_QMARK_))
{var statearr_11758_11780 = state_11746__$1;(statearr_11758_11780[1] = 11);
} else
{var statearr_11759_11781 = state_11746__$1;(statearr_11759_11781[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 5))
{var inst_11723 = (state_11746[7]);var state_11746__$1 = state_11746;var statearr_11760_11782 = state_11746__$1;(statearr_11760_11782[2] = inst_11723);
(statearr_11760_11782[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 10))
{var inst_11742 = (state_11746[2]);var state_11746__$1 = state_11746;var statearr_11761_11783 = state_11746__$1;(statearr_11761_11783[2] = inst_11742);
(statearr_11761_11783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 8))
{var inst_11723 = (state_11746[7]);var inst_11733 = cljs.core.next.call(null,inst_11723);var inst_11723__$1 = inst_11733;var state_11746__$1 = (function (){var statearr_11762 = state_11746;(statearr_11762[7] = inst_11723__$1);
return statearr_11762;
})();var statearr_11763_11784 = state_11746__$1;(statearr_11763_11784[2] = null);
(statearr_11763_11784[1] = 2);
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
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_11767 = [null,null,null,null,null,null,null,null];(statearr_11767[0] = state_machine__6277__auto__);
(statearr_11767[1] = 1);
return statearr_11767;
});
var state_machine__6277__auto____1 = (function (state_11746){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_11746);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e11768){if((e11768 instanceof Object))
{var ex__6280__auto__ = e11768;var statearr_11769_11785 = state_11746;(statearr_11769_11785[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11786 = state_11746;
state_11746 = G__11786;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_11746){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_11746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_11770 = f__6292__auto__.call(null);(statearr_11770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_11770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
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
cljs.core.async.Mux = (function (){var obj11788 = {};return obj11788;
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
cljs.core.async.Mult = (function (){var obj11790 = {};return obj11790;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12012 = (function (cs,ch,mult,meta12013){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12013 = meta12013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12012.cljs$lang$type = true;
cljs.core.async.t12012.cljs$lang$ctorStr = "cljs.core.async/t12012";
cljs.core.async.t12012.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12012");
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12012.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12014){var self__ = this;
var _12014__$1 = this;return self__.meta12013;
});})(cs))
;
cljs.core.async.t12012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12014,meta12013__$1){var self__ = this;
var _12014__$1 = this;return (new cljs.core.async.t12012(self__.cs,self__.ch,self__.mult,meta12013__$1));
});})(cs))
;
cljs.core.async.__GT_t12012 = ((function (cs){
return (function __GT_t12012(cs__$1,ch__$1,mult__$1,meta12013){return (new cljs.core.async.t12012(cs__$1,ch__$1,mult__$1,meta12013));
});})(cs))
;
}
return (new cljs.core.async.t12012(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6291__auto___12233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___12233,cs,m,dchan,dctr,done){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___12233,cs,m,dchan,dctr,done){
return (function (state_12145){var state_val_12146 = (state_12145[1]);if((state_val_12146 === 7))
{var inst_12141 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12147_12234 = state_12145__$1;(statearr_12147_12234[2] = inst_12141);
(statearr_12147_12234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 20))
{var inst_12046 = (state_12145[7]);var inst_12056 = cljs.core.first.call(null,inst_12046);var inst_12057 = cljs.core.nth.call(null,inst_12056,0,null);var inst_12058 = cljs.core.nth.call(null,inst_12056,1,null);var state_12145__$1 = (function (){var statearr_12148 = state_12145;(statearr_12148[8] = inst_12057);
return statearr_12148;
})();if(cljs.core.truth_(inst_12058))
{var statearr_12149_12235 = state_12145__$1;(statearr_12149_12235[1] = 22);
} else
{var statearr_12150_12236 = state_12145__$1;(statearr_12150_12236[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 27))
{var inst_12093 = (state_12145[9]);var inst_12017 = (state_12145[10]);var inst_12086 = (state_12145[11]);var inst_12088 = (state_12145[12]);var inst_12093__$1 = cljs.core._nth.call(null,inst_12086,inst_12088);var inst_12094 = cljs.core.async.put_BANG_.call(null,inst_12093__$1,inst_12017,done);var state_12145__$1 = (function (){var statearr_12151 = state_12145;(statearr_12151[9] = inst_12093__$1);
return statearr_12151;
})();if(cljs.core.truth_(inst_12094))
{var statearr_12152_12237 = state_12145__$1;(statearr_12152_12237[1] = 30);
} else
{var statearr_12153_12238 = state_12145__$1;(statearr_12153_12238[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 1))
{var state_12145__$1 = state_12145;var statearr_12154_12239 = state_12145__$1;(statearr_12154_12239[2] = null);
(statearr_12154_12239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 24))
{var inst_12046 = (state_12145[7]);var inst_12063 = (state_12145[2]);var inst_12064 = cljs.core.next.call(null,inst_12046);var inst_12026 = inst_12064;var inst_12027 = null;var inst_12028 = 0;var inst_12029 = 0;var state_12145__$1 = (function (){var statearr_12155 = state_12145;(statearr_12155[13] = inst_12063);
(statearr_12155[14] = inst_12026);
(statearr_12155[15] = inst_12027);
(statearr_12155[16] = inst_12029);
(statearr_12155[17] = inst_12028);
return statearr_12155;
})();var statearr_12156_12240 = state_12145__$1;(statearr_12156_12240[2] = null);
(statearr_12156_12240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 39))
{var state_12145__$1 = state_12145;var statearr_12160_12241 = state_12145__$1;(statearr_12160_12241[2] = null);
(statearr_12160_12241[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 4))
{var inst_12017 = (state_12145[10]);var inst_12017__$1 = (state_12145[2]);var inst_12018 = (inst_12017__$1 == null);var state_12145__$1 = (function (){var statearr_12161 = state_12145;(statearr_12161[10] = inst_12017__$1);
return statearr_12161;
})();if(cljs.core.truth_(inst_12018))
{var statearr_12162_12242 = state_12145__$1;(statearr_12162_12242[1] = 5);
} else
{var statearr_12163_12243 = state_12145__$1;(statearr_12163_12243[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 15))
{var inst_12026 = (state_12145[14]);var inst_12027 = (state_12145[15]);var inst_12029 = (state_12145[16]);var inst_12028 = (state_12145[17]);var inst_12042 = (state_12145[2]);var inst_12043 = (inst_12029 + 1);var tmp12157 = inst_12026;var tmp12158 = inst_12027;var tmp12159 = inst_12028;var inst_12026__$1 = tmp12157;var inst_12027__$1 = tmp12158;var inst_12028__$1 = tmp12159;var inst_12029__$1 = inst_12043;var state_12145__$1 = (function (){var statearr_12164 = state_12145;(statearr_12164[18] = inst_12042);
(statearr_12164[14] = inst_12026__$1);
(statearr_12164[15] = inst_12027__$1);
(statearr_12164[16] = inst_12029__$1);
(statearr_12164[17] = inst_12028__$1);
return statearr_12164;
})();var statearr_12165_12244 = state_12145__$1;(statearr_12165_12244[2] = null);
(statearr_12165_12244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 21))
{var inst_12067 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12169_12245 = state_12145__$1;(statearr_12169_12245[2] = inst_12067);
(statearr_12169_12245[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 31))
{var inst_12093 = (state_12145[9]);var inst_12097 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12098 = cljs.core.async.untap_STAR_.call(null,m,inst_12093);var state_12145__$1 = (function (){var statearr_12170 = state_12145;(statearr_12170[19] = inst_12097);
return statearr_12170;
})();var statearr_12171_12246 = state_12145__$1;(statearr_12171_12246[2] = inst_12098);
(statearr_12171_12246[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 32))
{var inst_12087 = (state_12145[20]);var inst_12086 = (state_12145[11]);var inst_12085 = (state_12145[21]);var inst_12088 = (state_12145[12]);var inst_12100 = (state_12145[2]);var inst_12101 = (inst_12088 + 1);var tmp12166 = inst_12087;var tmp12167 = inst_12086;var tmp12168 = inst_12085;var inst_12085__$1 = tmp12168;var inst_12086__$1 = tmp12167;var inst_12087__$1 = tmp12166;var inst_12088__$1 = inst_12101;var state_12145__$1 = (function (){var statearr_12172 = state_12145;(statearr_12172[20] = inst_12087__$1);
(statearr_12172[22] = inst_12100);
(statearr_12172[11] = inst_12086__$1);
(statearr_12172[21] = inst_12085__$1);
(statearr_12172[12] = inst_12088__$1);
return statearr_12172;
})();var statearr_12173_12247 = state_12145__$1;(statearr_12173_12247[2] = null);
(statearr_12173_12247[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 40))
{var inst_12113 = (state_12145[23]);var inst_12117 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12118 = cljs.core.async.untap_STAR_.call(null,m,inst_12113);var state_12145__$1 = (function (){var statearr_12174 = state_12145;(statearr_12174[24] = inst_12117);
return statearr_12174;
})();var statearr_12175_12248 = state_12145__$1;(statearr_12175_12248[2] = inst_12118);
(statearr_12175_12248[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 33))
{var inst_12104 = (state_12145[25]);var inst_12106 = cljs.core.chunked_seq_QMARK_.call(null,inst_12104);var state_12145__$1 = state_12145;if(inst_12106)
{var statearr_12176_12249 = state_12145__$1;(statearr_12176_12249[1] = 36);
} else
{var statearr_12177_12250 = state_12145__$1;(statearr_12177_12250[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 13))
{var inst_12036 = (state_12145[26]);var inst_12039 = cljs.core.async.close_BANG_.call(null,inst_12036);var state_12145__$1 = state_12145;var statearr_12178_12251 = state_12145__$1;(statearr_12178_12251[2] = inst_12039);
(statearr_12178_12251[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 22))
{var inst_12057 = (state_12145[8]);var inst_12060 = cljs.core.async.close_BANG_.call(null,inst_12057);var state_12145__$1 = state_12145;var statearr_12179_12252 = state_12145__$1;(statearr_12179_12252[2] = inst_12060);
(statearr_12179_12252[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 36))
{var inst_12104 = (state_12145[25]);var inst_12108 = cljs.core.chunk_first.call(null,inst_12104);var inst_12109 = cljs.core.chunk_rest.call(null,inst_12104);var inst_12110 = cljs.core.count.call(null,inst_12108);var inst_12085 = inst_12109;var inst_12086 = inst_12108;var inst_12087 = inst_12110;var inst_12088 = 0;var state_12145__$1 = (function (){var statearr_12180 = state_12145;(statearr_12180[20] = inst_12087);
(statearr_12180[11] = inst_12086);
(statearr_12180[21] = inst_12085);
(statearr_12180[12] = inst_12088);
return statearr_12180;
})();var statearr_12181_12253 = state_12145__$1;(statearr_12181_12253[2] = null);
(statearr_12181_12253[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 41))
{var inst_12104 = (state_12145[25]);var inst_12120 = (state_12145[2]);var inst_12121 = cljs.core.next.call(null,inst_12104);var inst_12085 = inst_12121;var inst_12086 = null;var inst_12087 = 0;var inst_12088 = 0;var state_12145__$1 = (function (){var statearr_12182 = state_12145;(statearr_12182[20] = inst_12087);
(statearr_12182[11] = inst_12086);
(statearr_12182[21] = inst_12085);
(statearr_12182[27] = inst_12120);
(statearr_12182[12] = inst_12088);
return statearr_12182;
})();var statearr_12183_12254 = state_12145__$1;(statearr_12183_12254[2] = null);
(statearr_12183_12254[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 43))
{var state_12145__$1 = state_12145;var statearr_12184_12255 = state_12145__$1;(statearr_12184_12255[2] = null);
(statearr_12184_12255[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 29))
{var inst_12129 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12185_12256 = state_12145__$1;(statearr_12185_12256[2] = inst_12129);
(statearr_12185_12256[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 44))
{var inst_12138 = (state_12145[2]);var state_12145__$1 = (function (){var statearr_12186 = state_12145;(statearr_12186[28] = inst_12138);
return statearr_12186;
})();var statearr_12187_12257 = state_12145__$1;(statearr_12187_12257[2] = null);
(statearr_12187_12257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 6))
{var inst_12077 = (state_12145[29]);var inst_12076 = cljs.core.deref.call(null,cs);var inst_12077__$1 = cljs.core.keys.call(null,inst_12076);var inst_12078 = cljs.core.count.call(null,inst_12077__$1);var inst_12079 = cljs.core.reset_BANG_.call(null,dctr,inst_12078);var inst_12084 = cljs.core.seq.call(null,inst_12077__$1);var inst_12085 = inst_12084;var inst_12086 = null;var inst_12087 = 0;var inst_12088 = 0;var state_12145__$1 = (function (){var statearr_12188 = state_12145;(statearr_12188[20] = inst_12087);
(statearr_12188[30] = inst_12079);
(statearr_12188[29] = inst_12077__$1);
(statearr_12188[11] = inst_12086);
(statearr_12188[21] = inst_12085);
(statearr_12188[12] = inst_12088);
return statearr_12188;
})();var statearr_12189_12258 = state_12145__$1;(statearr_12189_12258[2] = null);
(statearr_12189_12258[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 28))
{var inst_12104 = (state_12145[25]);var inst_12085 = (state_12145[21]);var inst_12104__$1 = cljs.core.seq.call(null,inst_12085);var state_12145__$1 = (function (){var statearr_12190 = state_12145;(statearr_12190[25] = inst_12104__$1);
return statearr_12190;
})();if(inst_12104__$1)
{var statearr_12191_12259 = state_12145__$1;(statearr_12191_12259[1] = 33);
} else
{var statearr_12192_12260 = state_12145__$1;(statearr_12192_12260[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 25))
{var inst_12087 = (state_12145[20]);var inst_12088 = (state_12145[12]);var inst_12090 = (inst_12088 < inst_12087);var inst_12091 = inst_12090;var state_12145__$1 = state_12145;if(cljs.core.truth_(inst_12091))
{var statearr_12193_12261 = state_12145__$1;(statearr_12193_12261[1] = 27);
} else
{var statearr_12194_12262 = state_12145__$1;(statearr_12194_12262[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 34))
{var state_12145__$1 = state_12145;var statearr_12195_12263 = state_12145__$1;(statearr_12195_12263[2] = null);
(statearr_12195_12263[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 17))
{var state_12145__$1 = state_12145;var statearr_12196_12264 = state_12145__$1;(statearr_12196_12264[2] = null);
(statearr_12196_12264[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 3))
{var inst_12143 = (state_12145[2]);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12145__$1,inst_12143);
} else
{if((state_val_12146 === 12))
{var inst_12072 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12197_12265 = state_12145__$1;(statearr_12197_12265[2] = inst_12072);
(statearr_12197_12265[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 2))
{var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,4,ch);
} else
{if((state_val_12146 === 23))
{var state_12145__$1 = state_12145;var statearr_12198_12266 = state_12145__$1;(statearr_12198_12266[2] = null);
(statearr_12198_12266[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 35))
{var inst_12127 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12199_12267 = state_12145__$1;(statearr_12199_12267[2] = inst_12127);
(statearr_12199_12267[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 19))
{var inst_12046 = (state_12145[7]);var inst_12050 = cljs.core.chunk_first.call(null,inst_12046);var inst_12051 = cljs.core.chunk_rest.call(null,inst_12046);var inst_12052 = cljs.core.count.call(null,inst_12050);var inst_12026 = inst_12051;var inst_12027 = inst_12050;var inst_12028 = inst_12052;var inst_12029 = 0;var state_12145__$1 = (function (){var statearr_12200 = state_12145;(statearr_12200[14] = inst_12026);
(statearr_12200[15] = inst_12027);
(statearr_12200[16] = inst_12029);
(statearr_12200[17] = inst_12028);
return statearr_12200;
})();var statearr_12201_12268 = state_12145__$1;(statearr_12201_12268[2] = null);
(statearr_12201_12268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 11))
{var inst_12026 = (state_12145[14]);var inst_12046 = (state_12145[7]);var inst_12046__$1 = cljs.core.seq.call(null,inst_12026);var state_12145__$1 = (function (){var statearr_12202 = state_12145;(statearr_12202[7] = inst_12046__$1);
return statearr_12202;
})();if(inst_12046__$1)
{var statearr_12203_12269 = state_12145__$1;(statearr_12203_12269[1] = 16);
} else
{var statearr_12204_12270 = state_12145__$1;(statearr_12204_12270[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 9))
{var inst_12074 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12205_12271 = state_12145__$1;(statearr_12205_12271[2] = inst_12074);
(statearr_12205_12271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 5))
{var inst_12024 = cljs.core.deref.call(null,cs);var inst_12025 = cljs.core.seq.call(null,inst_12024);var inst_12026 = inst_12025;var inst_12027 = null;var inst_12028 = 0;var inst_12029 = 0;var state_12145__$1 = (function (){var statearr_12206 = state_12145;(statearr_12206[14] = inst_12026);
(statearr_12206[15] = inst_12027);
(statearr_12206[16] = inst_12029);
(statearr_12206[17] = inst_12028);
return statearr_12206;
})();var statearr_12207_12272 = state_12145__$1;(statearr_12207_12272[2] = null);
(statearr_12207_12272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 14))
{var state_12145__$1 = state_12145;var statearr_12208_12273 = state_12145__$1;(statearr_12208_12273[2] = null);
(statearr_12208_12273[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 45))
{var inst_12135 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12209_12274 = state_12145__$1;(statearr_12209_12274[2] = inst_12135);
(statearr_12209_12274[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 26))
{var inst_12077 = (state_12145[29]);var inst_12131 = (state_12145[2]);var inst_12132 = cljs.core.seq.call(null,inst_12077);var state_12145__$1 = (function (){var statearr_12210 = state_12145;(statearr_12210[31] = inst_12131);
return statearr_12210;
})();if(inst_12132)
{var statearr_12211_12275 = state_12145__$1;(statearr_12211_12275[1] = 42);
} else
{var statearr_12212_12276 = state_12145__$1;(statearr_12212_12276[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 16))
{var inst_12046 = (state_12145[7]);var inst_12048 = cljs.core.chunked_seq_QMARK_.call(null,inst_12046);var state_12145__$1 = state_12145;if(inst_12048)
{var statearr_12213_12277 = state_12145__$1;(statearr_12213_12277[1] = 19);
} else
{var statearr_12214_12278 = state_12145__$1;(statearr_12214_12278[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 38))
{var inst_12124 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12215_12279 = state_12145__$1;(statearr_12215_12279[2] = inst_12124);
(statearr_12215_12279[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 30))
{var state_12145__$1 = state_12145;var statearr_12216_12280 = state_12145__$1;(statearr_12216_12280[2] = null);
(statearr_12216_12280[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 10))
{var inst_12027 = (state_12145[15]);var inst_12029 = (state_12145[16]);var inst_12035 = cljs.core._nth.call(null,inst_12027,inst_12029);var inst_12036 = cljs.core.nth.call(null,inst_12035,0,null);var inst_12037 = cljs.core.nth.call(null,inst_12035,1,null);var state_12145__$1 = (function (){var statearr_12217 = state_12145;(statearr_12217[26] = inst_12036);
return statearr_12217;
})();if(cljs.core.truth_(inst_12037))
{var statearr_12218_12281 = state_12145__$1;(statearr_12218_12281[1] = 13);
} else
{var statearr_12219_12282 = state_12145__$1;(statearr_12219_12282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 18))
{var inst_12070 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12220_12283 = state_12145__$1;(statearr_12220_12283[2] = inst_12070);
(statearr_12220_12283[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 42))
{var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,45,dchan);
} else
{if((state_val_12146 === 37))
{var inst_12017 = (state_12145[10]);var inst_12104 = (state_12145[25]);var inst_12113 = (state_12145[23]);var inst_12113__$1 = cljs.core.first.call(null,inst_12104);var inst_12114 = cljs.core.async.put_BANG_.call(null,inst_12113__$1,inst_12017,done);var state_12145__$1 = (function (){var statearr_12221 = state_12145;(statearr_12221[23] = inst_12113__$1);
return statearr_12221;
})();if(cljs.core.truth_(inst_12114))
{var statearr_12222_12284 = state_12145__$1;(statearr_12222_12284[1] = 39);
} else
{var statearr_12223_12285 = state_12145__$1;(statearr_12223_12285[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 8))
{var inst_12029 = (state_12145[16]);var inst_12028 = (state_12145[17]);var inst_12031 = (inst_12029 < inst_12028);var inst_12032 = inst_12031;var state_12145__$1 = state_12145;if(cljs.core.truth_(inst_12032))
{var statearr_12224_12286 = state_12145__$1;(statearr_12224_12286[1] = 10);
} else
{var statearr_12225_12287 = state_12145__$1;(statearr_12225_12287[1] = 11);
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
});})(c__6291__auto___12233,cs,m,dchan,dctr,done))
;return ((function (switch__6276__auto__,c__6291__auto___12233,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_12229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12229[0] = state_machine__6277__auto__);
(statearr_12229[1] = 1);
return statearr_12229;
});
var state_machine__6277__auto____1 = (function (state_12145){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_12145);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e12230){if((e12230 instanceof Object))
{var ex__6280__auto__ = e12230;var statearr_12231_12288 = state_12145;(statearr_12231_12288[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12289 = state_12145;
state_12145 = G__12289;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_12145){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_12145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___12233,cs,m,dchan,dctr,done))
})();var state__6293__auto__ = (function (){var statearr_12232 = f__6292__auto__.call(null);(statearr_12232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___12233);
return statearr_12232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___12233,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12291 = {};return obj12291;
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
;var m = (function (){if(typeof cljs.core.async.t12411 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12411 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12412){
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
this.meta12412 = meta12412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12411.cljs$lang$type = true;
cljs.core.async.t12411.cljs$lang$ctorStr = "cljs.core.async/t12411";
cljs.core.async.t12411.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12411");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12413){var self__ = this;
var _12413__$1 = this;return self__.meta12412;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12413,meta12412__$1){var self__ = this;
var _12413__$1 = this;return (new cljs.core.async.t12411(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12412__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12411 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12411(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12412){return (new cljs.core.async.t12411(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12412));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12411(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6291__auto___12530 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12483){var state_val_12484 = (state_12483[1]);if((state_val_12484 === 7))
{var inst_12427 = (state_12483[7]);var inst_12432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12427);var state_12483__$1 = state_12483;var statearr_12485_12531 = state_12483__$1;(statearr_12485_12531[2] = inst_12432);
(statearr_12485_12531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 20))
{var inst_12442 = (state_12483[8]);var state_12483__$1 = state_12483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12483__$1,23,out,inst_12442);
} else
{if((state_val_12484 === 1))
{var inst_12417 = (state_12483[9]);var inst_12417__$1 = calc_state.call(null);var inst_12418 = cljs.core.seq_QMARK_.call(null,inst_12417__$1);var state_12483__$1 = (function (){var statearr_12486 = state_12483;(statearr_12486[9] = inst_12417__$1);
return statearr_12486;
})();if(inst_12418)
{var statearr_12487_12532 = state_12483__$1;(statearr_12487_12532[1] = 2);
} else
{var statearr_12488_12533 = state_12483__$1;(statearr_12488_12533[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 24))
{var inst_12435 = (state_12483[10]);var inst_12427 = inst_12435;var state_12483__$1 = (function (){var statearr_12489 = state_12483;(statearr_12489[7] = inst_12427);
return statearr_12489;
})();var statearr_12490_12534 = state_12483__$1;(statearr_12490_12534[2] = null);
(statearr_12490_12534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 4))
{var inst_12417 = (state_12483[9]);var inst_12423 = (state_12483[2]);var inst_12424 = cljs.core.get.call(null,inst_12423,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12425 = cljs.core.get.call(null,inst_12423,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12426 = cljs.core.get.call(null,inst_12423,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12427 = inst_12417;var state_12483__$1 = (function (){var statearr_12491 = state_12483;(statearr_12491[7] = inst_12427);
(statearr_12491[11] = inst_12425);
(statearr_12491[12] = inst_12424);
(statearr_12491[13] = inst_12426);
return statearr_12491;
})();var statearr_12492_12535 = state_12483__$1;(statearr_12492_12535[2] = null);
(statearr_12492_12535[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 15))
{var state_12483__$1 = state_12483;var statearr_12493_12536 = state_12483__$1;(statearr_12493_12536[2] = null);
(statearr_12493_12536[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 21))
{var inst_12435 = (state_12483[10]);var inst_12427 = inst_12435;var state_12483__$1 = (function (){var statearr_12494 = state_12483;(statearr_12494[7] = inst_12427);
return statearr_12494;
})();var statearr_12495_12537 = state_12483__$1;(statearr_12495_12537[2] = null);
(statearr_12495_12537[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 13))
{var inst_12479 = (state_12483[2]);var state_12483__$1 = state_12483;var statearr_12496_12538 = state_12483__$1;(statearr_12496_12538[2] = inst_12479);
(statearr_12496_12538[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 22))
{var inst_12477 = (state_12483[2]);var state_12483__$1 = state_12483;var statearr_12497_12539 = state_12483__$1;(statearr_12497_12539[2] = inst_12477);
(statearr_12497_12539[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 6))
{var inst_12481 = (state_12483[2]);var state_12483__$1 = state_12483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12483__$1,inst_12481);
} else
{if((state_val_12484 === 25))
{var state_12483__$1 = state_12483;var statearr_12498_12540 = state_12483__$1;(statearr_12498_12540[2] = null);
(statearr_12498_12540[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 17))
{var inst_12457 = (state_12483[14]);var state_12483__$1 = state_12483;var statearr_12499_12541 = state_12483__$1;(statearr_12499_12541[2] = inst_12457);
(statearr_12499_12541[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 3))
{var inst_12417 = (state_12483[9]);var state_12483__$1 = state_12483;var statearr_12500_12542 = state_12483__$1;(statearr_12500_12542[2] = inst_12417);
(statearr_12500_12542[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 12))
{var inst_12443 = (state_12483[15]);var inst_12438 = (state_12483[16]);var inst_12457 = (state_12483[14]);var inst_12457__$1 = inst_12438.call(null,inst_12443);var state_12483__$1 = (function (){var statearr_12501 = state_12483;(statearr_12501[14] = inst_12457__$1);
return statearr_12501;
})();if(cljs.core.truth_(inst_12457__$1))
{var statearr_12502_12543 = state_12483__$1;(statearr_12502_12543[1] = 17);
} else
{var statearr_12503_12544 = state_12483__$1;(statearr_12503_12544[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 2))
{var inst_12417 = (state_12483[9]);var inst_12420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12417);var state_12483__$1 = state_12483;var statearr_12504_12545 = state_12483__$1;(statearr_12504_12545[2] = inst_12420);
(statearr_12504_12545[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 23))
{var inst_12468 = (state_12483[2]);var state_12483__$1 = state_12483;if(cljs.core.truth_(inst_12468))
{var statearr_12505_12546 = state_12483__$1;(statearr_12505_12546[1] = 24);
} else
{var statearr_12506_12547 = state_12483__$1;(statearr_12506_12547[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 19))
{var inst_12465 = (state_12483[2]);var state_12483__$1 = state_12483;if(cljs.core.truth_(inst_12465))
{var statearr_12507_12548 = state_12483__$1;(statearr_12507_12548[1] = 20);
} else
{var statearr_12508_12549 = state_12483__$1;(statearr_12508_12549[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 11))
{var inst_12442 = (state_12483[8]);var inst_12448 = (inst_12442 == null);var state_12483__$1 = state_12483;if(cljs.core.truth_(inst_12448))
{var statearr_12509_12550 = state_12483__$1;(statearr_12509_12550[1] = 14);
} else
{var statearr_12510_12551 = state_12483__$1;(statearr_12510_12551[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 9))
{var inst_12435 = (state_12483[10]);var inst_12435__$1 = (state_12483[2]);var inst_12436 = cljs.core.get.call(null,inst_12435__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12437 = cljs.core.get.call(null,inst_12435__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12438 = cljs.core.get.call(null,inst_12435__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12483__$1 = (function (){var statearr_12511 = state_12483;(statearr_12511[17] = inst_12437);
(statearr_12511[16] = inst_12438);
(statearr_12511[10] = inst_12435__$1);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12483__$1,10,inst_12436);
} else
{if((state_val_12484 === 5))
{var inst_12427 = (state_12483[7]);var inst_12430 = cljs.core.seq_QMARK_.call(null,inst_12427);var state_12483__$1 = state_12483;if(inst_12430)
{var statearr_12512_12552 = state_12483__$1;(statearr_12512_12552[1] = 7);
} else
{var statearr_12513_12553 = state_12483__$1;(statearr_12513_12553[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 14))
{var inst_12443 = (state_12483[15]);var inst_12450 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12443);var state_12483__$1 = state_12483;var statearr_12514_12554 = state_12483__$1;(statearr_12514_12554[2] = inst_12450);
(statearr_12514_12554[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 26))
{var inst_12473 = (state_12483[2]);var state_12483__$1 = state_12483;var statearr_12515_12555 = state_12483__$1;(statearr_12515_12555[2] = inst_12473);
(statearr_12515_12555[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 16))
{var inst_12453 = (state_12483[2]);var inst_12454 = calc_state.call(null);var inst_12427 = inst_12454;var state_12483__$1 = (function (){var statearr_12516 = state_12483;(statearr_12516[7] = inst_12427);
(statearr_12516[18] = inst_12453);
return statearr_12516;
})();var statearr_12517_12556 = state_12483__$1;(statearr_12517_12556[2] = null);
(statearr_12517_12556[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 10))
{var inst_12442 = (state_12483[8]);var inst_12443 = (state_12483[15]);var inst_12441 = (state_12483[2]);var inst_12442__$1 = cljs.core.nth.call(null,inst_12441,0,null);var inst_12443__$1 = cljs.core.nth.call(null,inst_12441,1,null);var inst_12444 = (inst_12442__$1 == null);var inst_12445 = cljs.core._EQ_.call(null,inst_12443__$1,change);var inst_12446 = (inst_12444) || (inst_12445);var state_12483__$1 = (function (){var statearr_12518 = state_12483;(statearr_12518[8] = inst_12442__$1);
(statearr_12518[15] = inst_12443__$1);
return statearr_12518;
})();if(cljs.core.truth_(inst_12446))
{var statearr_12519_12557 = state_12483__$1;(statearr_12519_12557[1] = 11);
} else
{var statearr_12520_12558 = state_12483__$1;(statearr_12520_12558[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 18))
{var inst_12443 = (state_12483[15]);var inst_12437 = (state_12483[17]);var inst_12438 = (state_12483[16]);var inst_12460 = cljs.core.empty_QMARK_.call(null,inst_12438);var inst_12461 = inst_12437.call(null,inst_12443);var inst_12462 = cljs.core.not.call(null,inst_12461);var inst_12463 = (inst_12460) && (inst_12462);var state_12483__$1 = state_12483;var statearr_12521_12559 = state_12483__$1;(statearr_12521_12559[2] = inst_12463);
(statearr_12521_12559[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12484 === 8))
{var inst_12427 = (state_12483[7]);var state_12483__$1 = state_12483;var statearr_12522_12560 = state_12483__$1;(statearr_12522_12560[2] = inst_12427);
(statearr_12522_12560[1] = 9);
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
});})(c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6276__auto__,c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_12526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12526[0] = state_machine__6277__auto__);
(statearr_12526[1] = 1);
return statearr_12526;
});
var state_machine__6277__auto____1 = (function (state_12483){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_12483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e12527){if((e12527 instanceof Object))
{var ex__6280__auto__ = e12527;var statearr_12528_12561 = state_12483;(statearr_12528_12561[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12562 = state_12483;
state_12483 = G__12562;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_12483){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_12483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6293__auto__ = (function (){var statearr_12529 = f__6292__auto__.call(null);(statearr_12529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___12530);
return statearr_12529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___12530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12564 = {};return obj12564;
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
return (function (p1__12565_SHARP_){if(cljs.core.truth_(p1__12565_SHARP_.call(null,topic)))
{return p1__12565_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12565_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12688 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12689){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12689 = meta12689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12688.cljs$lang$type = true;
cljs.core.async.t12688.cljs$lang$ctorStr = "cljs.core.async/t12688";
cljs.core.async.t12688.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12688");
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12688.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12690){var self__ = this;
var _12690__$1 = this;return self__.meta12689;
});})(mults,ensure_mult))
;
cljs.core.async.t12688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12690,meta12689__$1){var self__ = this;
var _12690__$1 = this;return (new cljs.core.async.t12688(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12689__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12688 = ((function (mults,ensure_mult){
return (function __GT_t12688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12689){return (new cljs.core.async.t12688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12689));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12688(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6291__auto___12810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___12810,mults,ensure_mult,p){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___12810,mults,ensure_mult,p){
return (function (state_12762){var state_val_12763 = (state_12762[1]);if((state_val_12763 === 7))
{var inst_12758 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12764_12811 = state_12762__$1;(statearr_12764_12811[2] = inst_12758);
(statearr_12764_12811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 20))
{var state_12762__$1 = state_12762;var statearr_12765_12812 = state_12762__$1;(statearr_12765_12812[2] = null);
(statearr_12765_12812[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 1))
{var state_12762__$1 = state_12762;var statearr_12766_12813 = state_12762__$1;(statearr_12766_12813[2] = null);
(statearr_12766_12813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 24))
{var inst_12741 = (state_12762[7]);var inst_12750 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12741);var state_12762__$1 = state_12762;var statearr_12767_12814 = state_12762__$1;(statearr_12767_12814[2] = inst_12750);
(statearr_12767_12814[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 4))
{var inst_12693 = (state_12762[8]);var inst_12693__$1 = (state_12762[2]);var inst_12694 = (inst_12693__$1 == null);var state_12762__$1 = (function (){var statearr_12768 = state_12762;(statearr_12768[8] = inst_12693__$1);
return statearr_12768;
})();if(cljs.core.truth_(inst_12694))
{var statearr_12769_12815 = state_12762__$1;(statearr_12769_12815[1] = 5);
} else
{var statearr_12770_12816 = state_12762__$1;(statearr_12770_12816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 15))
{var inst_12735 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12771_12817 = state_12762__$1;(statearr_12771_12817[2] = inst_12735);
(statearr_12771_12817[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 21))
{var inst_12755 = (state_12762[2]);var state_12762__$1 = (function (){var statearr_12772 = state_12762;(statearr_12772[9] = inst_12755);
return statearr_12772;
})();var statearr_12773_12818 = state_12762__$1;(statearr_12773_12818[2] = null);
(statearr_12773_12818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 13))
{var inst_12717 = (state_12762[10]);var inst_12719 = cljs.core.chunked_seq_QMARK_.call(null,inst_12717);var state_12762__$1 = state_12762;if(inst_12719)
{var statearr_12774_12819 = state_12762__$1;(statearr_12774_12819[1] = 16);
} else
{var statearr_12775_12820 = state_12762__$1;(statearr_12775_12820[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 22))
{var inst_12747 = (state_12762[2]);var state_12762__$1 = state_12762;if(cljs.core.truth_(inst_12747))
{var statearr_12776_12821 = state_12762__$1;(statearr_12776_12821[1] = 23);
} else
{var statearr_12777_12822 = state_12762__$1;(statearr_12777_12822[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 6))
{var inst_12741 = (state_12762[7]);var inst_12693 = (state_12762[8]);var inst_12743 = (state_12762[11]);var inst_12741__$1 = topic_fn.call(null,inst_12693);var inst_12742 = cljs.core.deref.call(null,mults);var inst_12743__$1 = cljs.core.get.call(null,inst_12742,inst_12741__$1);var state_12762__$1 = (function (){var statearr_12778 = state_12762;(statearr_12778[7] = inst_12741__$1);
(statearr_12778[11] = inst_12743__$1);
return statearr_12778;
})();if(cljs.core.truth_(inst_12743__$1))
{var statearr_12779_12823 = state_12762__$1;(statearr_12779_12823[1] = 19);
} else
{var statearr_12780_12824 = state_12762__$1;(statearr_12780_12824[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 25))
{var inst_12752 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12781_12825 = state_12762__$1;(statearr_12781_12825[2] = inst_12752);
(statearr_12781_12825[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 17))
{var inst_12717 = (state_12762[10]);var inst_12726 = cljs.core.first.call(null,inst_12717);var inst_12727 = cljs.core.async.muxch_STAR_.call(null,inst_12726);var inst_12728 = cljs.core.async.close_BANG_.call(null,inst_12727);var inst_12729 = cljs.core.next.call(null,inst_12717);var inst_12703 = inst_12729;var inst_12704 = null;var inst_12705 = 0;var inst_12706 = 0;var state_12762__$1 = (function (){var statearr_12782 = state_12762;(statearr_12782[12] = inst_12704);
(statearr_12782[13] = inst_12728);
(statearr_12782[14] = inst_12705);
(statearr_12782[15] = inst_12706);
(statearr_12782[16] = inst_12703);
return statearr_12782;
})();var statearr_12783_12826 = state_12762__$1;(statearr_12783_12826[2] = null);
(statearr_12783_12826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 3))
{var inst_12760 = (state_12762[2]);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12762__$1,inst_12760);
} else
{if((state_val_12763 === 12))
{var inst_12737 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12784_12827 = state_12762__$1;(statearr_12784_12827[2] = inst_12737);
(statearr_12784_12827[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 2))
{var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12762__$1,4,ch);
} else
{if((state_val_12763 === 23))
{var state_12762__$1 = state_12762;var statearr_12785_12828 = state_12762__$1;(statearr_12785_12828[2] = null);
(statearr_12785_12828[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 19))
{var inst_12693 = (state_12762[8]);var inst_12743 = (state_12762[11]);var inst_12745 = cljs.core.async.muxch_STAR_.call(null,inst_12743);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12762__$1,22,inst_12745,inst_12693);
} else
{if((state_val_12763 === 11))
{var inst_12717 = (state_12762[10]);var inst_12703 = (state_12762[16]);var inst_12717__$1 = cljs.core.seq.call(null,inst_12703);var state_12762__$1 = (function (){var statearr_12786 = state_12762;(statearr_12786[10] = inst_12717__$1);
return statearr_12786;
})();if(inst_12717__$1)
{var statearr_12787_12829 = state_12762__$1;(statearr_12787_12829[1] = 13);
} else
{var statearr_12788_12830 = state_12762__$1;(statearr_12788_12830[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 9))
{var inst_12739 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12789_12831 = state_12762__$1;(statearr_12789_12831[2] = inst_12739);
(statearr_12789_12831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 5))
{var inst_12700 = cljs.core.deref.call(null,mults);var inst_12701 = cljs.core.vals.call(null,inst_12700);var inst_12702 = cljs.core.seq.call(null,inst_12701);var inst_12703 = inst_12702;var inst_12704 = null;var inst_12705 = 0;var inst_12706 = 0;var state_12762__$1 = (function (){var statearr_12790 = state_12762;(statearr_12790[12] = inst_12704);
(statearr_12790[14] = inst_12705);
(statearr_12790[15] = inst_12706);
(statearr_12790[16] = inst_12703);
return statearr_12790;
})();var statearr_12791_12832 = state_12762__$1;(statearr_12791_12832[2] = null);
(statearr_12791_12832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 14))
{var state_12762__$1 = state_12762;var statearr_12795_12833 = state_12762__$1;(statearr_12795_12833[2] = null);
(statearr_12795_12833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 16))
{var inst_12717 = (state_12762[10]);var inst_12721 = cljs.core.chunk_first.call(null,inst_12717);var inst_12722 = cljs.core.chunk_rest.call(null,inst_12717);var inst_12723 = cljs.core.count.call(null,inst_12721);var inst_12703 = inst_12722;var inst_12704 = inst_12721;var inst_12705 = inst_12723;var inst_12706 = 0;var state_12762__$1 = (function (){var statearr_12796 = state_12762;(statearr_12796[12] = inst_12704);
(statearr_12796[14] = inst_12705);
(statearr_12796[15] = inst_12706);
(statearr_12796[16] = inst_12703);
return statearr_12796;
})();var statearr_12797_12834 = state_12762__$1;(statearr_12797_12834[2] = null);
(statearr_12797_12834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 10))
{var inst_12704 = (state_12762[12]);var inst_12705 = (state_12762[14]);var inst_12706 = (state_12762[15]);var inst_12703 = (state_12762[16]);var inst_12711 = cljs.core._nth.call(null,inst_12704,inst_12706);var inst_12712 = cljs.core.async.muxch_STAR_.call(null,inst_12711);var inst_12713 = cljs.core.async.close_BANG_.call(null,inst_12712);var inst_12714 = (inst_12706 + 1);var tmp12792 = inst_12704;var tmp12793 = inst_12705;var tmp12794 = inst_12703;var inst_12703__$1 = tmp12794;var inst_12704__$1 = tmp12792;var inst_12705__$1 = tmp12793;var inst_12706__$1 = inst_12714;var state_12762__$1 = (function (){var statearr_12798 = state_12762;(statearr_12798[12] = inst_12704__$1);
(statearr_12798[14] = inst_12705__$1);
(statearr_12798[17] = inst_12713);
(statearr_12798[15] = inst_12706__$1);
(statearr_12798[16] = inst_12703__$1);
return statearr_12798;
})();var statearr_12799_12835 = state_12762__$1;(statearr_12799_12835[2] = null);
(statearr_12799_12835[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 18))
{var inst_12732 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12800_12836 = state_12762__$1;(statearr_12800_12836[2] = inst_12732);
(statearr_12800_12836[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 8))
{var inst_12705 = (state_12762[14]);var inst_12706 = (state_12762[15]);var inst_12708 = (inst_12706 < inst_12705);var inst_12709 = inst_12708;var state_12762__$1 = state_12762;if(cljs.core.truth_(inst_12709))
{var statearr_12801_12837 = state_12762__$1;(statearr_12801_12837[1] = 10);
} else
{var statearr_12802_12838 = state_12762__$1;(statearr_12802_12838[1] = 11);
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
});})(c__6291__auto___12810,mults,ensure_mult,p))
;return ((function (switch__6276__auto__,c__6291__auto___12810,mults,ensure_mult,p){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_12806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12806[0] = state_machine__6277__auto__);
(statearr_12806[1] = 1);
return statearr_12806;
});
var state_machine__6277__auto____1 = (function (state_12762){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_12762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e12807){if((e12807 instanceof Object))
{var ex__6280__auto__ = e12807;var statearr_12808_12839 = state_12762;(statearr_12808_12839[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12840 = state_12762;
state_12762 = G__12840;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_12762){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_12762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___12810,mults,ensure_mult,p))
})();var state__6293__auto__ = (function (){var statearr_12809 = f__6292__auto__.call(null);(statearr_12809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___12810);
return statearr_12809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___12810,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6291__auto___12977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12947){var state_val_12948 = (state_12947[1]);if((state_val_12948 === 7))
{var state_12947__$1 = state_12947;var statearr_12949_12978 = state_12947__$1;(statearr_12949_12978[2] = null);
(statearr_12949_12978[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 1))
{var state_12947__$1 = state_12947;var statearr_12950_12979 = state_12947__$1;(statearr_12950_12979[2] = null);
(statearr_12950_12979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 4))
{var inst_12911 = (state_12947[7]);var inst_12913 = (inst_12911 < cnt);var state_12947__$1 = state_12947;if(cljs.core.truth_(inst_12913))
{var statearr_12951_12980 = state_12947__$1;(statearr_12951_12980[1] = 6);
} else
{var statearr_12952_12981 = state_12947__$1;(statearr_12952_12981[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 15))
{var inst_12943 = (state_12947[2]);var state_12947__$1 = state_12947;var statearr_12953_12982 = state_12947__$1;(statearr_12953_12982[2] = inst_12943);
(statearr_12953_12982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 13))
{var inst_12936 = cljs.core.async.close_BANG_.call(null,out);var state_12947__$1 = state_12947;var statearr_12954_12983 = state_12947__$1;(statearr_12954_12983[2] = inst_12936);
(statearr_12954_12983[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 6))
{var state_12947__$1 = state_12947;var statearr_12955_12984 = state_12947__$1;(statearr_12955_12984[2] = null);
(statearr_12955_12984[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 3))
{var inst_12945 = (state_12947[2]);var state_12947__$1 = state_12947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12947__$1,inst_12945);
} else
{if((state_val_12948 === 12))
{var inst_12933 = (state_12947[8]);var inst_12933__$1 = (state_12947[2]);var inst_12934 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12933__$1);var state_12947__$1 = (function (){var statearr_12956 = state_12947;(statearr_12956[8] = inst_12933__$1);
return statearr_12956;
})();if(cljs.core.truth_(inst_12934))
{var statearr_12957_12985 = state_12947__$1;(statearr_12957_12985[1] = 13);
} else
{var statearr_12958_12986 = state_12947__$1;(statearr_12958_12986[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 2))
{var inst_12910 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12911 = 0;var state_12947__$1 = (function (){var statearr_12959 = state_12947;(statearr_12959[7] = inst_12911);
(statearr_12959[9] = inst_12910);
return statearr_12959;
})();var statearr_12960_12987 = state_12947__$1;(statearr_12960_12987[2] = null);
(statearr_12960_12987[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 11))
{var inst_12911 = (state_12947[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12947,10,Object,null,9);var inst_12920 = chs__$1.call(null,inst_12911);var inst_12921 = done.call(null,inst_12911);var inst_12922 = cljs.core.async.take_BANG_.call(null,inst_12920,inst_12921);var state_12947__$1 = state_12947;var statearr_12961_12988 = state_12947__$1;(statearr_12961_12988[2] = inst_12922);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12947__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 9))
{var inst_12911 = (state_12947[7]);var inst_12924 = (state_12947[2]);var inst_12925 = (inst_12911 + 1);var inst_12911__$1 = inst_12925;var state_12947__$1 = (function (){var statearr_12962 = state_12947;(statearr_12962[7] = inst_12911__$1);
(statearr_12962[10] = inst_12924);
return statearr_12962;
})();var statearr_12963_12989 = state_12947__$1;(statearr_12963_12989[2] = null);
(statearr_12963_12989[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 5))
{var inst_12931 = (state_12947[2]);var state_12947__$1 = (function (){var statearr_12964 = state_12947;(statearr_12964[11] = inst_12931);
return statearr_12964;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12947__$1,12,dchan);
} else
{if((state_val_12948 === 14))
{var inst_12933 = (state_12947[8]);var inst_12938 = cljs.core.apply.call(null,f,inst_12933);var state_12947__$1 = state_12947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12947__$1,16,out,inst_12938);
} else
{if((state_val_12948 === 16))
{var inst_12940 = (state_12947[2]);var state_12947__$1 = (function (){var statearr_12965 = state_12947;(statearr_12965[12] = inst_12940);
return statearr_12965;
})();var statearr_12966_12990 = state_12947__$1;(statearr_12966_12990[2] = null);
(statearr_12966_12990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 10))
{var inst_12915 = (state_12947[2]);var inst_12916 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12947__$1 = (function (){var statearr_12967 = state_12947;(statearr_12967[13] = inst_12915);
return statearr_12967;
})();var statearr_12968_12991 = state_12947__$1;(statearr_12968_12991[2] = inst_12916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12947__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12948 === 8))
{var inst_12929 = (state_12947[2]);var state_12947__$1 = state_12947;var statearr_12969_12992 = state_12947__$1;(statearr_12969_12992[2] = inst_12929);
(statearr_12969_12992[1] = 5);
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
});})(c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6276__auto__,c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_12973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12973[0] = state_machine__6277__auto__);
(statearr_12973[1] = 1);
return statearr_12973;
});
var state_machine__6277__auto____1 = (function (state_12947){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_12947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e12974){if((e12974 instanceof Object))
{var ex__6280__auto__ = e12974;var statearr_12975_12993 = state_12947;(statearr_12975_12993[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12994 = state_12947;
state_12947 = G__12994;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_12947){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_12947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6293__auto__ = (function (){var statearr_12976 = f__6292__auto__.call(null);(statearr_12976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___12977);
return statearr_12976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___12977,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___13102 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___13102,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___13102,out){
return (function (state_13078){var state_val_13079 = (state_13078[1]);if((state_val_13079 === 7))
{var inst_13058 = (state_13078[7]);var inst_13057 = (state_13078[8]);var inst_13057__$1 = (state_13078[2]);var inst_13058__$1 = cljs.core.nth.call(null,inst_13057__$1,0,null);var inst_13059 = cljs.core.nth.call(null,inst_13057__$1,1,null);var inst_13060 = (inst_13058__$1 == null);var state_13078__$1 = (function (){var statearr_13080 = state_13078;(statearr_13080[7] = inst_13058__$1);
(statearr_13080[9] = inst_13059);
(statearr_13080[8] = inst_13057__$1);
return statearr_13080;
})();if(cljs.core.truth_(inst_13060))
{var statearr_13081_13103 = state_13078__$1;(statearr_13081_13103[1] = 8);
} else
{var statearr_13082_13104 = state_13078__$1;(statearr_13082_13104[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 1))
{var inst_13049 = cljs.core.vec.call(null,chs);var inst_13050 = inst_13049;var state_13078__$1 = (function (){var statearr_13083 = state_13078;(statearr_13083[10] = inst_13050);
return statearr_13083;
})();var statearr_13084_13105 = state_13078__$1;(statearr_13084_13105[2] = null);
(statearr_13084_13105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 4))
{var inst_13050 = (state_13078[10]);var state_13078__$1 = state_13078;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13078__$1,7,inst_13050);
} else
{if((state_val_13079 === 6))
{var inst_13074 = (state_13078[2]);var state_13078__$1 = state_13078;var statearr_13085_13106 = state_13078__$1;(statearr_13085_13106[2] = inst_13074);
(statearr_13085_13106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 3))
{var inst_13076 = (state_13078[2]);var state_13078__$1 = state_13078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13078__$1,inst_13076);
} else
{if((state_val_13079 === 2))
{var inst_13050 = (state_13078[10]);var inst_13052 = cljs.core.count.call(null,inst_13050);var inst_13053 = (inst_13052 > 0);var state_13078__$1 = state_13078;if(cljs.core.truth_(inst_13053))
{var statearr_13087_13107 = state_13078__$1;(statearr_13087_13107[1] = 4);
} else
{var statearr_13088_13108 = state_13078__$1;(statearr_13088_13108[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 11))
{var inst_13050 = (state_13078[10]);var inst_13067 = (state_13078[2]);var tmp13086 = inst_13050;var inst_13050__$1 = tmp13086;var state_13078__$1 = (function (){var statearr_13089 = state_13078;(statearr_13089[10] = inst_13050__$1);
(statearr_13089[11] = inst_13067);
return statearr_13089;
})();var statearr_13090_13109 = state_13078__$1;(statearr_13090_13109[2] = null);
(statearr_13090_13109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 9))
{var inst_13058 = (state_13078[7]);var state_13078__$1 = state_13078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13078__$1,11,out,inst_13058);
} else
{if((state_val_13079 === 5))
{var inst_13072 = cljs.core.async.close_BANG_.call(null,out);var state_13078__$1 = state_13078;var statearr_13091_13110 = state_13078__$1;(statearr_13091_13110[2] = inst_13072);
(statearr_13091_13110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 10))
{var inst_13070 = (state_13078[2]);var state_13078__$1 = state_13078;var statearr_13092_13111 = state_13078__$1;(statearr_13092_13111[2] = inst_13070);
(statearr_13092_13111[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13079 === 8))
{var inst_13058 = (state_13078[7]);var inst_13059 = (state_13078[9]);var inst_13050 = (state_13078[10]);var inst_13057 = (state_13078[8]);var inst_13062 = (function (){var c = inst_13059;var v = inst_13058;var vec__13055 = inst_13057;var cs = inst_13050;return ((function (c,v,vec__13055,cs,inst_13058,inst_13059,inst_13050,inst_13057,state_val_13079,c__6291__auto___13102,out){
return (function (p1__12995_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12995_SHARP_);
});
;})(c,v,vec__13055,cs,inst_13058,inst_13059,inst_13050,inst_13057,state_val_13079,c__6291__auto___13102,out))
})();var inst_13063 = cljs.core.filterv.call(null,inst_13062,inst_13050);var inst_13050__$1 = inst_13063;var state_13078__$1 = (function (){var statearr_13093 = state_13078;(statearr_13093[10] = inst_13050__$1);
return statearr_13093;
})();var statearr_13094_13112 = state_13078__$1;(statearr_13094_13112[2] = null);
(statearr_13094_13112[1] = 2);
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
});})(c__6291__auto___13102,out))
;return ((function (switch__6276__auto__,c__6291__auto___13102,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_13098 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13098[0] = state_machine__6277__auto__);
(statearr_13098[1] = 1);
return statearr_13098;
});
var state_machine__6277__auto____1 = (function (state_13078){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_13078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e13099){if((e13099 instanceof Object))
{var ex__6280__auto__ = e13099;var statearr_13100_13113 = state_13078;(statearr_13100_13113[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13114 = state_13078;
state_13078 = G__13114;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_13078){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_13078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___13102,out))
})();var state__6293__auto__ = (function (){var statearr_13101 = f__6292__auto__.call(null);(statearr_13101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___13102);
return statearr_13101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___13102,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___13207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___13207,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___13207,out){
return (function (state_13184){var state_val_13185 = (state_13184[1]);if((state_val_13185 === 7))
{var inst_13166 = (state_13184[7]);var inst_13166__$1 = (state_13184[2]);var inst_13167 = (inst_13166__$1 == null);var inst_13168 = cljs.core.not.call(null,inst_13167);var state_13184__$1 = (function (){var statearr_13186 = state_13184;(statearr_13186[7] = inst_13166__$1);
return statearr_13186;
})();if(inst_13168)
{var statearr_13187_13208 = state_13184__$1;(statearr_13187_13208[1] = 8);
} else
{var statearr_13188_13209 = state_13184__$1;(statearr_13188_13209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 1))
{var inst_13161 = 0;var state_13184__$1 = (function (){var statearr_13189 = state_13184;(statearr_13189[8] = inst_13161);
return statearr_13189;
})();var statearr_13190_13210 = state_13184__$1;(statearr_13190_13210[2] = null);
(statearr_13190_13210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 4))
{var state_13184__$1 = state_13184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13184__$1,7,ch);
} else
{if((state_val_13185 === 6))
{var inst_13179 = (state_13184[2]);var state_13184__$1 = state_13184;var statearr_13191_13211 = state_13184__$1;(statearr_13191_13211[2] = inst_13179);
(statearr_13191_13211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 3))
{var inst_13181 = (state_13184[2]);var inst_13182 = cljs.core.async.close_BANG_.call(null,out);var state_13184__$1 = (function (){var statearr_13192 = state_13184;(statearr_13192[9] = inst_13181);
return statearr_13192;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13184__$1,inst_13182);
} else
{if((state_val_13185 === 2))
{var inst_13161 = (state_13184[8]);var inst_13163 = (inst_13161 < n);var state_13184__$1 = state_13184;if(cljs.core.truth_(inst_13163))
{var statearr_13193_13212 = state_13184__$1;(statearr_13193_13212[1] = 4);
} else
{var statearr_13194_13213 = state_13184__$1;(statearr_13194_13213[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 11))
{var inst_13161 = (state_13184[8]);var inst_13171 = (state_13184[2]);var inst_13172 = (inst_13161 + 1);var inst_13161__$1 = inst_13172;var state_13184__$1 = (function (){var statearr_13195 = state_13184;(statearr_13195[8] = inst_13161__$1);
(statearr_13195[10] = inst_13171);
return statearr_13195;
})();var statearr_13196_13214 = state_13184__$1;(statearr_13196_13214[2] = null);
(statearr_13196_13214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 9))
{var state_13184__$1 = state_13184;var statearr_13197_13215 = state_13184__$1;(statearr_13197_13215[2] = null);
(statearr_13197_13215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 5))
{var state_13184__$1 = state_13184;var statearr_13198_13216 = state_13184__$1;(statearr_13198_13216[2] = null);
(statearr_13198_13216[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 10))
{var inst_13176 = (state_13184[2]);var state_13184__$1 = state_13184;var statearr_13199_13217 = state_13184__$1;(statearr_13199_13217[2] = inst_13176);
(statearr_13199_13217[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13185 === 8))
{var inst_13166 = (state_13184[7]);var state_13184__$1 = state_13184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13184__$1,11,out,inst_13166);
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
});})(c__6291__auto___13207,out))
;return ((function (switch__6276__auto__,c__6291__auto___13207,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13203[0] = state_machine__6277__auto__);
(statearr_13203[1] = 1);
return statearr_13203;
});
var state_machine__6277__auto____1 = (function (state_13184){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_13184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object))
{var ex__6280__auto__ = e13204;var statearr_13205_13218 = state_13184;(statearr_13205_13218[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13219 = state_13184;
state_13184 = G__13219;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_13184){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_13184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___13207,out))
})();var state__6293__auto__ = (function (){var statearr_13206 = f__6292__auto__.call(null);(statearr_13206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___13207);
return statearr_13206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___13207,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___13316 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___13316,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___13316,out){
return (function (state_13291){var state_val_13292 = (state_13291[1]);if((state_val_13292 === 7))
{var inst_13286 = (state_13291[2]);var state_13291__$1 = state_13291;var statearr_13293_13317 = state_13291__$1;(statearr_13293_13317[2] = inst_13286);
(statearr_13293_13317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 1))
{var inst_13268 = null;var state_13291__$1 = (function (){var statearr_13294 = state_13291;(statearr_13294[7] = inst_13268);
return statearr_13294;
})();var statearr_13295_13318 = state_13291__$1;(statearr_13295_13318[2] = null);
(statearr_13295_13318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 4))
{var inst_13271 = (state_13291[8]);var inst_13271__$1 = (state_13291[2]);var inst_13272 = (inst_13271__$1 == null);var inst_13273 = cljs.core.not.call(null,inst_13272);var state_13291__$1 = (function (){var statearr_13296 = state_13291;(statearr_13296[8] = inst_13271__$1);
return statearr_13296;
})();if(inst_13273)
{var statearr_13297_13319 = state_13291__$1;(statearr_13297_13319[1] = 5);
} else
{var statearr_13298_13320 = state_13291__$1;(statearr_13298_13320[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 6))
{var state_13291__$1 = state_13291;var statearr_13299_13321 = state_13291__$1;(statearr_13299_13321[2] = null);
(statearr_13299_13321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 3))
{var inst_13288 = (state_13291[2]);var inst_13289 = cljs.core.async.close_BANG_.call(null,out);var state_13291__$1 = (function (){var statearr_13300 = state_13291;(statearr_13300[9] = inst_13288);
return statearr_13300;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13291__$1,inst_13289);
} else
{if((state_val_13292 === 2))
{var state_13291__$1 = state_13291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13291__$1,4,ch);
} else
{if((state_val_13292 === 11))
{var inst_13271 = (state_13291[8]);var inst_13280 = (state_13291[2]);var inst_13268 = inst_13271;var state_13291__$1 = (function (){var statearr_13301 = state_13291;(statearr_13301[7] = inst_13268);
(statearr_13301[10] = inst_13280);
return statearr_13301;
})();var statearr_13302_13322 = state_13291__$1;(statearr_13302_13322[2] = null);
(statearr_13302_13322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 9))
{var inst_13271 = (state_13291[8]);var state_13291__$1 = state_13291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13291__$1,11,out,inst_13271);
} else
{if((state_val_13292 === 5))
{var inst_13271 = (state_13291[8]);var inst_13268 = (state_13291[7]);var inst_13275 = cljs.core._EQ_.call(null,inst_13271,inst_13268);var state_13291__$1 = state_13291;if(inst_13275)
{var statearr_13304_13323 = state_13291__$1;(statearr_13304_13323[1] = 8);
} else
{var statearr_13305_13324 = state_13291__$1;(statearr_13305_13324[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 10))
{var inst_13283 = (state_13291[2]);var state_13291__$1 = state_13291;var statearr_13306_13325 = state_13291__$1;(statearr_13306_13325[2] = inst_13283);
(statearr_13306_13325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13292 === 8))
{var inst_13268 = (state_13291[7]);var tmp13303 = inst_13268;var inst_13268__$1 = tmp13303;var state_13291__$1 = (function (){var statearr_13307 = state_13291;(statearr_13307[7] = inst_13268__$1);
return statearr_13307;
})();var statearr_13308_13326 = state_13291__$1;(statearr_13308_13326[2] = null);
(statearr_13308_13326[1] = 2);
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
});})(c__6291__auto___13316,out))
;return ((function (switch__6276__auto__,c__6291__auto___13316,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_13312 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13312[0] = state_machine__6277__auto__);
(statearr_13312[1] = 1);
return statearr_13312;
});
var state_machine__6277__auto____1 = (function (state_13291){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_13291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e13313){if((e13313 instanceof Object))
{var ex__6280__auto__ = e13313;var statearr_13314_13327 = state_13291;(statearr_13314_13327[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13328 = state_13291;
state_13291 = G__13328;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_13291){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_13291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___13316,out))
})();var state__6293__auto__ = (function (){var statearr_13315 = f__6292__auto__.call(null);(statearr_13315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___13316);
return statearr_13315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___13316,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___13463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___13463,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___13463,out){
return (function (state_13433){var state_val_13434 = (state_13433[1]);if((state_val_13434 === 7))
{var inst_13429 = (state_13433[2]);var state_13433__$1 = state_13433;var statearr_13435_13464 = state_13433__$1;(statearr_13435_13464[2] = inst_13429);
(statearr_13435_13464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 1))
{var inst_13396 = (new Array(n));var inst_13397 = inst_13396;var inst_13398 = 0;var state_13433__$1 = (function (){var statearr_13436 = state_13433;(statearr_13436[7] = inst_13398);
(statearr_13436[8] = inst_13397);
return statearr_13436;
})();var statearr_13437_13465 = state_13433__$1;(statearr_13437_13465[2] = null);
(statearr_13437_13465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 4))
{var inst_13401 = (state_13433[9]);var inst_13401__$1 = (state_13433[2]);var inst_13402 = (inst_13401__$1 == null);var inst_13403 = cljs.core.not.call(null,inst_13402);var state_13433__$1 = (function (){var statearr_13438 = state_13433;(statearr_13438[9] = inst_13401__$1);
return statearr_13438;
})();if(inst_13403)
{var statearr_13439_13466 = state_13433__$1;(statearr_13439_13466[1] = 5);
} else
{var statearr_13440_13467 = state_13433__$1;(statearr_13440_13467[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 15))
{var inst_13423 = (state_13433[2]);var state_13433__$1 = state_13433;var statearr_13441_13468 = state_13433__$1;(statearr_13441_13468[2] = inst_13423);
(statearr_13441_13468[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 13))
{var state_13433__$1 = state_13433;var statearr_13442_13469 = state_13433__$1;(statearr_13442_13469[2] = null);
(statearr_13442_13469[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 6))
{var inst_13398 = (state_13433[7]);var inst_13419 = (inst_13398 > 0);var state_13433__$1 = state_13433;if(cljs.core.truth_(inst_13419))
{var statearr_13443_13470 = state_13433__$1;(statearr_13443_13470[1] = 12);
} else
{var statearr_13444_13471 = state_13433__$1;(statearr_13444_13471[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 3))
{var inst_13431 = (state_13433[2]);var state_13433__$1 = state_13433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13433__$1,inst_13431);
} else
{if((state_val_13434 === 12))
{var inst_13397 = (state_13433[8]);var inst_13421 = cljs.core.vec.call(null,inst_13397);var state_13433__$1 = state_13433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13433__$1,15,out,inst_13421);
} else
{if((state_val_13434 === 2))
{var state_13433__$1 = state_13433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13433__$1,4,ch);
} else
{if((state_val_13434 === 11))
{var inst_13413 = (state_13433[2]);var inst_13414 = (new Array(n));var inst_13397 = inst_13414;var inst_13398 = 0;var state_13433__$1 = (function (){var statearr_13445 = state_13433;(statearr_13445[7] = inst_13398);
(statearr_13445[8] = inst_13397);
(statearr_13445[10] = inst_13413);
return statearr_13445;
})();var statearr_13446_13472 = state_13433__$1;(statearr_13446_13472[2] = null);
(statearr_13446_13472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 9))
{var inst_13397 = (state_13433[8]);var inst_13411 = cljs.core.vec.call(null,inst_13397);var state_13433__$1 = state_13433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13433__$1,11,out,inst_13411);
} else
{if((state_val_13434 === 5))
{var inst_13398 = (state_13433[7]);var inst_13397 = (state_13433[8]);var inst_13406 = (state_13433[11]);var inst_13401 = (state_13433[9]);var inst_13405 = (inst_13397[inst_13398] = inst_13401);var inst_13406__$1 = (inst_13398 + 1);var inst_13407 = (inst_13406__$1 < n);var state_13433__$1 = (function (){var statearr_13447 = state_13433;(statearr_13447[11] = inst_13406__$1);
(statearr_13447[12] = inst_13405);
return statearr_13447;
})();if(cljs.core.truth_(inst_13407))
{var statearr_13448_13473 = state_13433__$1;(statearr_13448_13473[1] = 8);
} else
{var statearr_13449_13474 = state_13433__$1;(statearr_13449_13474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 14))
{var inst_13426 = (state_13433[2]);var inst_13427 = cljs.core.async.close_BANG_.call(null,out);var state_13433__$1 = (function (){var statearr_13451 = state_13433;(statearr_13451[13] = inst_13426);
return statearr_13451;
})();var statearr_13452_13475 = state_13433__$1;(statearr_13452_13475[2] = inst_13427);
(statearr_13452_13475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 10))
{var inst_13417 = (state_13433[2]);var state_13433__$1 = state_13433;var statearr_13453_13476 = state_13433__$1;(statearr_13453_13476[2] = inst_13417);
(statearr_13453_13476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13434 === 8))
{var inst_13397 = (state_13433[8]);var inst_13406 = (state_13433[11]);var tmp13450 = inst_13397;var inst_13397__$1 = tmp13450;var inst_13398 = inst_13406;var state_13433__$1 = (function (){var statearr_13454 = state_13433;(statearr_13454[7] = inst_13398);
(statearr_13454[8] = inst_13397__$1);
return statearr_13454;
})();var statearr_13455_13477 = state_13433__$1;(statearr_13455_13477[2] = null);
(statearr_13455_13477[1] = 2);
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
});})(c__6291__auto___13463,out))
;return ((function (switch__6276__auto__,c__6291__auto___13463,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_13459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13459[0] = state_machine__6277__auto__);
(statearr_13459[1] = 1);
return statearr_13459;
});
var state_machine__6277__auto____1 = (function (state_13433){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_13433);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e13460){if((e13460 instanceof Object))
{var ex__6280__auto__ = e13460;var statearr_13461_13478 = state_13433;(statearr_13461_13478[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13479 = state_13433;
state_13433 = G__13479;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_13433){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_13433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___13463,out))
})();var state__6293__auto__ = (function (){var statearr_13462 = f__6292__auto__.call(null);(statearr_13462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___13463);
return statearr_13462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___13463,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6291__auto___13622 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___13622,out){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___13622,out){
return (function (state_13592){var state_val_13593 = (state_13592[1]);if((state_val_13593 === 7))
{var inst_13588 = (state_13592[2]);var state_13592__$1 = state_13592;var statearr_13594_13623 = state_13592__$1;(statearr_13594_13623[2] = inst_13588);
(statearr_13594_13623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 1))
{var inst_13551 = [];var inst_13552 = inst_13551;var inst_13553 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13592__$1 = (function (){var statearr_13595 = state_13592;(statearr_13595[7] = inst_13553);
(statearr_13595[8] = inst_13552);
return statearr_13595;
})();var statearr_13596_13624 = state_13592__$1;(statearr_13596_13624[2] = null);
(statearr_13596_13624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 4))
{var inst_13556 = (state_13592[9]);var inst_13556__$1 = (state_13592[2]);var inst_13557 = (inst_13556__$1 == null);var inst_13558 = cljs.core.not.call(null,inst_13557);var state_13592__$1 = (function (){var statearr_13597 = state_13592;(statearr_13597[9] = inst_13556__$1);
return statearr_13597;
})();if(inst_13558)
{var statearr_13598_13625 = state_13592__$1;(statearr_13598_13625[1] = 5);
} else
{var statearr_13599_13626 = state_13592__$1;(statearr_13599_13626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 15))
{var inst_13582 = (state_13592[2]);var state_13592__$1 = state_13592;var statearr_13600_13627 = state_13592__$1;(statearr_13600_13627[2] = inst_13582);
(statearr_13600_13627[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 13))
{var state_13592__$1 = state_13592;var statearr_13601_13628 = state_13592__$1;(statearr_13601_13628[2] = null);
(statearr_13601_13628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 6))
{var inst_13552 = (state_13592[8]);var inst_13577 = inst_13552.length;var inst_13578 = (inst_13577 > 0);var state_13592__$1 = state_13592;if(cljs.core.truth_(inst_13578))
{var statearr_13602_13629 = state_13592__$1;(statearr_13602_13629[1] = 12);
} else
{var statearr_13603_13630 = state_13592__$1;(statearr_13603_13630[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 3))
{var inst_13590 = (state_13592[2]);var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13592__$1,inst_13590);
} else
{if((state_val_13593 === 12))
{var inst_13552 = (state_13592[8]);var inst_13580 = cljs.core.vec.call(null,inst_13552);var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13592__$1,15,out,inst_13580);
} else
{if((state_val_13593 === 2))
{var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13592__$1,4,ch);
} else
{if((state_val_13593 === 11))
{var inst_13556 = (state_13592[9]);var inst_13560 = (state_13592[10]);var inst_13570 = (state_13592[2]);var inst_13571 = [];var inst_13572 = inst_13571.push(inst_13556);var inst_13552 = inst_13571;var inst_13553 = inst_13560;var state_13592__$1 = (function (){var statearr_13604 = state_13592;(statearr_13604[7] = inst_13553);
(statearr_13604[11] = inst_13572);
(statearr_13604[8] = inst_13552);
(statearr_13604[12] = inst_13570);
return statearr_13604;
})();var statearr_13605_13631 = state_13592__$1;(statearr_13605_13631[2] = null);
(statearr_13605_13631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 9))
{var inst_13552 = (state_13592[8]);var inst_13568 = cljs.core.vec.call(null,inst_13552);var state_13592__$1 = state_13592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13592__$1,11,out,inst_13568);
} else
{if((state_val_13593 === 5))
{var inst_13553 = (state_13592[7]);var inst_13556 = (state_13592[9]);var inst_13560 = (state_13592[10]);var inst_13560__$1 = f.call(null,inst_13556);var inst_13561 = cljs.core._EQ_.call(null,inst_13560__$1,inst_13553);var inst_13562 = cljs.core.keyword_identical_QMARK_.call(null,inst_13553,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13563 = (inst_13561) || (inst_13562);var state_13592__$1 = (function (){var statearr_13606 = state_13592;(statearr_13606[10] = inst_13560__$1);
return statearr_13606;
})();if(cljs.core.truth_(inst_13563))
{var statearr_13607_13632 = state_13592__$1;(statearr_13607_13632[1] = 8);
} else
{var statearr_13608_13633 = state_13592__$1;(statearr_13608_13633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 14))
{var inst_13585 = (state_13592[2]);var inst_13586 = cljs.core.async.close_BANG_.call(null,out);var state_13592__$1 = (function (){var statearr_13610 = state_13592;(statearr_13610[13] = inst_13585);
return statearr_13610;
})();var statearr_13611_13634 = state_13592__$1;(statearr_13611_13634[2] = inst_13586);
(statearr_13611_13634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 10))
{var inst_13575 = (state_13592[2]);var state_13592__$1 = state_13592;var statearr_13612_13635 = state_13592__$1;(statearr_13612_13635[2] = inst_13575);
(statearr_13612_13635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13593 === 8))
{var inst_13552 = (state_13592[8]);var inst_13556 = (state_13592[9]);var inst_13560 = (state_13592[10]);var inst_13565 = inst_13552.push(inst_13556);var tmp13609 = inst_13552;var inst_13552__$1 = tmp13609;var inst_13553 = inst_13560;var state_13592__$1 = (function (){var statearr_13613 = state_13592;(statearr_13613[7] = inst_13553);
(statearr_13613[8] = inst_13552__$1);
(statearr_13613[14] = inst_13565);
return statearr_13613;
})();var statearr_13614_13636 = state_13592__$1;(statearr_13614_13636[2] = null);
(statearr_13614_13636[1] = 2);
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
});})(c__6291__auto___13622,out))
;return ((function (switch__6276__auto__,c__6291__auto___13622,out){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_13618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13618[0] = state_machine__6277__auto__);
(statearr_13618[1] = 1);
return statearr_13618;
});
var state_machine__6277__auto____1 = (function (state_13592){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_13592);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e13619){if((e13619 instanceof Object))
{var ex__6280__auto__ = e13619;var statearr_13620_13637 = state_13592;(statearr_13620_13637[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13638 = state_13592;
state_13592 = G__13638;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_13592){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_13592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___13622,out))
})();var state__6293__auto__ = (function (){var statearr_13621 = f__6292__auto__.call(null);(statearr_13621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___13622);
return statearr_13621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___13622,out))
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