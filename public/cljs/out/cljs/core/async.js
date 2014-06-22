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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10758 = (function (f,fn_handler,meta10759){
this.f = f;
this.fn_handler = fn_handler;
this.meta10759 = meta10759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10758.cljs$lang$type = true;
cljs.core.async.t10758.cljs$lang$ctorStr = "cljs.core.async/t10758";
cljs.core.async.t10758.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10758");
});
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10760){var self__ = this;
var _10760__$1 = this;return self__.meta10759;
});
cljs.core.async.t10758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10760,meta10759__$1){var self__ = this;
var _10760__$1 = this;return (new cljs.core.async.t10758(self__.f,self__.fn_handler,meta10759__$1));
});
cljs.core.async.__GT_t10758 = (function __GT_t10758(f__$1,fn_handler__$1,meta10759){return (new cljs.core.async.t10758(f__$1,fn_handler__$1,meta10759));
});
}
return (new cljs.core.async.t10758(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10762 = buff;if(G__10762)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10762.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10762.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10762);
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
{var val_10763 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10763);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10763,ret){
return (function (){return fn1.call(null,val_10763);
});})(val_10763,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10764 = n;var x_10765 = 0;while(true){
if((x_10765 < n__4329__auto___10764))
{(a[x_10765] = 0);
{
var G__10766 = (x_10765 + 1);
x_10765 = G__10766;
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
var G__10767 = (i + 1);
i = G__10767;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10771 = (function (flag,alt_flag,meta10772){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10772 = meta10772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10771.cljs$lang$type = true;
cljs.core.async.t10771.cljs$lang$ctorStr = "cljs.core.async/t10771";
cljs.core.async.t10771.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10771");
});})(flag))
;
cljs.core.async.t10771.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10773){var self__ = this;
var _10773__$1 = this;return self__.meta10772;
});})(flag))
;
cljs.core.async.t10771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10773,meta10772__$1){var self__ = this;
var _10773__$1 = this;return (new cljs.core.async.t10771(self__.flag,self__.alt_flag,meta10772__$1));
});})(flag))
;
cljs.core.async.__GT_t10771 = ((function (flag){
return (function __GT_t10771(flag__$1,alt_flag__$1,meta10772){return (new cljs.core.async.t10771(flag__$1,alt_flag__$1,meta10772));
});})(flag))
;
}
return (new cljs.core.async.t10771(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10777 = (function (cb,flag,alt_handler,meta10778){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10778 = meta10778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10777.cljs$lang$type = true;
cljs.core.async.t10777.cljs$lang$ctorStr = "cljs.core.async/t10777";
cljs.core.async.t10777.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10777");
});
cljs.core.async.t10777.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10779){var self__ = this;
var _10779__$1 = this;return self__.meta10778;
});
cljs.core.async.t10777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10779,meta10778__$1){var self__ = this;
var _10779__$1 = this;return (new cljs.core.async.t10777(self__.cb,self__.flag,self__.alt_handler,meta10778__$1));
});
cljs.core.async.__GT_t10777 = (function __GT_t10777(cb__$1,flag__$1,alt_handler__$1,meta10778){return (new cljs.core.async.t10777(cb__$1,flag__$1,alt_handler__$1,meta10778));
});
}
return (new cljs.core.async.t10777(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10780_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10780_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10781_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10781_SHARP_,port], null));
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
var G__10782 = (i + 1);
i = G__10782;
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
var alts_BANG___delegate = function (ports,p__10783){var map__10785 = p__10783;var map__10785__$1 = ((cljs.core.seq_QMARK_.call(null,map__10785))?cljs.core.apply.call(null,cljs.core.hash_map,map__10785):map__10785);var opts = map__10785__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10783 = null;if (arguments.length > 1) {
  p__10783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10783);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10786){
var ports = cljs.core.first(arglist__10786);
var p__10783 = cljs.core.rest(arglist__10786);
return alts_BANG___delegate(ports,p__10783);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10794 = (function (ch,f,map_LT_,meta10795){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10795 = meta10795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10794.cljs$lang$type = true;
cljs.core.async.t10794.cljs$lang$ctorStr = "cljs.core.async/t10794";
cljs.core.async.t10794.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10794");
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10797 = (function (fn1,_,meta10795,ch,f,map_LT_,meta10798){
this.fn1 = fn1;
this._ = _;
this.meta10795 = meta10795;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10798 = meta10798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10797.cljs$lang$type = true;
cljs.core.async.t10797.cljs$lang$ctorStr = "cljs.core.async/t10797";
cljs.core.async.t10797.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10797");
});})(___$1))
;
cljs.core.async.t10797.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10797.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10787_SHARP_){return f1.call(null,(((p1__10787_SHARP_ == null))?null:self__.f.call(null,p1__10787_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10799){var self__ = this;
var _10799__$1 = this;return self__.meta10798;
});})(___$1))
;
cljs.core.async.t10797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10799,meta10798__$1){var self__ = this;
var _10799__$1 = this;return (new cljs.core.async.t10797(self__.fn1,self__._,self__.meta10795,self__.ch,self__.f,self__.map_LT_,meta10798__$1));
});})(___$1))
;
cljs.core.async.__GT_t10797 = ((function (___$1){
return (function __GT_t10797(fn1__$1,___$2,meta10795__$1,ch__$2,f__$2,map_LT___$2,meta10798){return (new cljs.core.async.t10797(fn1__$1,___$2,meta10795__$1,ch__$2,f__$2,map_LT___$2,meta10798));
});})(___$1))
;
}
return (new cljs.core.async.t10797(fn1,___$1,self__.meta10795,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10794.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10796){var self__ = this;
var _10796__$1 = this;return self__.meta10795;
});
cljs.core.async.t10794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10796,meta10795__$1){var self__ = this;
var _10796__$1 = this;return (new cljs.core.async.t10794(self__.ch,self__.f,self__.map_LT_,meta10795__$1));
});
cljs.core.async.__GT_t10794 = (function __GT_t10794(ch__$1,f__$1,map_LT___$1,meta10795){return (new cljs.core.async.t10794(ch__$1,f__$1,map_LT___$1,meta10795));
});
}
return (new cljs.core.async.t10794(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10803 = (function (ch,f,map_GT_,meta10804){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10804 = meta10804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10803.cljs$lang$type = true;
cljs.core.async.t10803.cljs$lang$ctorStr = "cljs.core.async/t10803";
cljs.core.async.t10803.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10803");
});
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10805){var self__ = this;
var _10805__$1 = this;return self__.meta10804;
});
cljs.core.async.t10803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10805,meta10804__$1){var self__ = this;
var _10805__$1 = this;return (new cljs.core.async.t10803(self__.ch,self__.f,self__.map_GT_,meta10804__$1));
});
cljs.core.async.__GT_t10803 = (function __GT_t10803(ch__$1,f__$1,map_GT___$1,meta10804){return (new cljs.core.async.t10803(ch__$1,f__$1,map_GT___$1,meta10804));
});
}
return (new cljs.core.async.t10803(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10809 = (function (ch,p,filter_GT_,meta10810){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10810 = meta10810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10809.cljs$lang$type = true;
cljs.core.async.t10809.cljs$lang$ctorStr = "cljs.core.async/t10809";
cljs.core.async.t10809.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10809");
});
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10809.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10811){var self__ = this;
var _10811__$1 = this;return self__.meta10810;
});
cljs.core.async.t10809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10811,meta10810__$1){var self__ = this;
var _10811__$1 = this;return (new cljs.core.async.t10809(self__.ch,self__.p,self__.filter_GT_,meta10810__$1));
});
cljs.core.async.__GT_t10809 = (function __GT_t10809(ch__$1,p__$1,filter_GT___$1,meta10810){return (new cljs.core.async.t10809(ch__$1,p__$1,filter_GT___$1,meta10810));
});
}
return (new cljs.core.async.t10809(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___10894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10894,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10894,out){
return (function (state_10873){var state_val_10874 = (state_10873[1]);if((state_val_10874 === 7))
{var inst_10869 = (state_10873[2]);var state_10873__$1 = state_10873;var statearr_10875_10895 = state_10873__$1;(statearr_10875_10895[2] = inst_10869);
(statearr_10875_10895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 1))
{var state_10873__$1 = state_10873;var statearr_10876_10896 = state_10873__$1;(statearr_10876_10896[2] = null);
(statearr_10876_10896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 4))
{var inst_10855 = (state_10873[7]);var inst_10855__$1 = (state_10873[2]);var inst_10856 = (inst_10855__$1 == null);var state_10873__$1 = (function (){var statearr_10877 = state_10873;(statearr_10877[7] = inst_10855__$1);
return statearr_10877;
})();if(cljs.core.truth_(inst_10856))
{var statearr_10878_10897 = state_10873__$1;(statearr_10878_10897[1] = 5);
} else
{var statearr_10879_10898 = state_10873__$1;(statearr_10879_10898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 6))
{var inst_10855 = (state_10873[7]);var inst_10860 = p.call(null,inst_10855);var state_10873__$1 = state_10873;if(cljs.core.truth_(inst_10860))
{var statearr_10880_10899 = state_10873__$1;(statearr_10880_10899[1] = 8);
} else
{var statearr_10881_10900 = state_10873__$1;(statearr_10881_10900[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 3))
{var inst_10871 = (state_10873[2]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10873__$1,inst_10871);
} else
{if((state_val_10874 === 2))
{var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10873__$1,4,ch);
} else
{if((state_val_10874 === 11))
{var inst_10863 = (state_10873[2]);var state_10873__$1 = state_10873;var statearr_10882_10901 = state_10873__$1;(statearr_10882_10901[2] = inst_10863);
(statearr_10882_10901[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 9))
{var state_10873__$1 = state_10873;var statearr_10883_10902 = state_10873__$1;(statearr_10883_10902[2] = null);
(statearr_10883_10902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 5))
{var inst_10858 = cljs.core.async.close_BANG_.call(null,out);var state_10873__$1 = state_10873;var statearr_10884_10903 = state_10873__$1;(statearr_10884_10903[2] = inst_10858);
(statearr_10884_10903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 10))
{var inst_10866 = (state_10873[2]);var state_10873__$1 = (function (){var statearr_10885 = state_10873;(statearr_10885[8] = inst_10866);
return statearr_10885;
})();var statearr_10886_10904 = state_10873__$1;(statearr_10886_10904[2] = null);
(statearr_10886_10904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 8))
{var inst_10855 = (state_10873[7]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10873__$1,11,out,inst_10855);
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
});})(c__5638__auto___10894,out))
;return ((function (switch__5623__auto__,c__5638__auto___10894,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10890 = [null,null,null,null,null,null,null,null,null];(statearr_10890[0] = state_machine__5624__auto__);
(statearr_10890[1] = 1);
return statearr_10890;
});
var state_machine__5624__auto____1 = (function (state_10873){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10891){if((e10891 instanceof Object))
{var ex__5627__auto__ = e10891;var statearr_10892_10905 = state_10873;(statearr_10892_10905[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10906 = state_10873;
state_10873 = G__10906;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10873){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10894,out))
})();var state__5640__auto__ = (function (){var statearr_10893 = f__5639__auto__.call(null);(statearr_10893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10894);
return statearr_10893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10894,out))
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
return (function (state_11072){var state_val_11073 = (state_11072[1]);if((state_val_11073 === 7))
{var inst_11068 = (state_11072[2]);var state_11072__$1 = state_11072;var statearr_11074_11115 = state_11072__$1;(statearr_11074_11115[2] = inst_11068);
(statearr_11074_11115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 20))
{var inst_11038 = (state_11072[7]);var inst_11049 = (state_11072[2]);var inst_11050 = cljs.core.next.call(null,inst_11038);var inst_11024 = inst_11050;var inst_11025 = null;var inst_11026 = 0;var inst_11027 = 0;var state_11072__$1 = (function (){var statearr_11075 = state_11072;(statearr_11075[8] = inst_11027);
(statearr_11075[9] = inst_11049);
(statearr_11075[10] = inst_11025);
(statearr_11075[11] = inst_11026);
(statearr_11075[12] = inst_11024);
return statearr_11075;
})();var statearr_11076_11116 = state_11072__$1;(statearr_11076_11116[2] = null);
(statearr_11076_11116[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 1))
{var state_11072__$1 = state_11072;var statearr_11077_11117 = state_11072__$1;(statearr_11077_11117[2] = null);
(statearr_11077_11117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 4))
{var inst_11013 = (state_11072[13]);var inst_11013__$1 = (state_11072[2]);var inst_11014 = (inst_11013__$1 == null);var state_11072__$1 = (function (){var statearr_11078 = state_11072;(statearr_11078[13] = inst_11013__$1);
return statearr_11078;
})();if(cljs.core.truth_(inst_11014))
{var statearr_11079_11118 = state_11072__$1;(statearr_11079_11118[1] = 5);
} else
{var statearr_11080_11119 = state_11072__$1;(statearr_11080_11119[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 15))
{var state_11072__$1 = state_11072;var statearr_11084_11120 = state_11072__$1;(statearr_11084_11120[2] = null);
(statearr_11084_11120[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 21))
{var state_11072__$1 = state_11072;var statearr_11085_11121 = state_11072__$1;(statearr_11085_11121[2] = null);
(statearr_11085_11121[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 13))
{var inst_11027 = (state_11072[8]);var inst_11025 = (state_11072[10]);var inst_11026 = (state_11072[11]);var inst_11024 = (state_11072[12]);var inst_11034 = (state_11072[2]);var inst_11035 = (inst_11027 + 1);var tmp11081 = inst_11025;var tmp11082 = inst_11026;var tmp11083 = inst_11024;var inst_11024__$1 = tmp11083;var inst_11025__$1 = tmp11081;var inst_11026__$1 = tmp11082;var inst_11027__$1 = inst_11035;var state_11072__$1 = (function (){var statearr_11086 = state_11072;(statearr_11086[14] = inst_11034);
(statearr_11086[8] = inst_11027__$1);
(statearr_11086[10] = inst_11025__$1);
(statearr_11086[11] = inst_11026__$1);
(statearr_11086[12] = inst_11024__$1);
return statearr_11086;
})();var statearr_11087_11122 = state_11072__$1;(statearr_11087_11122[2] = null);
(statearr_11087_11122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 22))
{var state_11072__$1 = state_11072;var statearr_11088_11123 = state_11072__$1;(statearr_11088_11123[2] = null);
(statearr_11088_11123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 6))
{var inst_11013 = (state_11072[13]);var inst_11022 = f.call(null,inst_11013);var inst_11023 = cljs.core.seq.call(null,inst_11022);var inst_11024 = inst_11023;var inst_11025 = null;var inst_11026 = 0;var inst_11027 = 0;var state_11072__$1 = (function (){var statearr_11089 = state_11072;(statearr_11089[8] = inst_11027);
(statearr_11089[10] = inst_11025);
(statearr_11089[11] = inst_11026);
(statearr_11089[12] = inst_11024);
return statearr_11089;
})();var statearr_11090_11124 = state_11072__$1;(statearr_11090_11124[2] = null);
(statearr_11090_11124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 17))
{var inst_11038 = (state_11072[7]);var inst_11042 = cljs.core.chunk_first.call(null,inst_11038);var inst_11043 = cljs.core.chunk_rest.call(null,inst_11038);var inst_11044 = cljs.core.count.call(null,inst_11042);var inst_11024 = inst_11043;var inst_11025 = inst_11042;var inst_11026 = inst_11044;var inst_11027 = 0;var state_11072__$1 = (function (){var statearr_11091 = state_11072;(statearr_11091[8] = inst_11027);
(statearr_11091[10] = inst_11025);
(statearr_11091[11] = inst_11026);
(statearr_11091[12] = inst_11024);
return statearr_11091;
})();var statearr_11092_11125 = state_11072__$1;(statearr_11092_11125[2] = null);
(statearr_11092_11125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 3))
{var inst_11070 = (state_11072[2]);var state_11072__$1 = state_11072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11072__$1,inst_11070);
} else
{if((state_val_11073 === 12))
{var inst_11058 = (state_11072[2]);var state_11072__$1 = state_11072;var statearr_11093_11126 = state_11072__$1;(statearr_11093_11126[2] = inst_11058);
(statearr_11093_11126[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 2))
{var state_11072__$1 = state_11072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11072__$1,4,in$);
} else
{if((state_val_11073 === 23))
{var inst_11066 = (state_11072[2]);var state_11072__$1 = state_11072;var statearr_11094_11127 = state_11072__$1;(statearr_11094_11127[2] = inst_11066);
(statearr_11094_11127[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 19))
{var inst_11053 = (state_11072[2]);var state_11072__$1 = state_11072;var statearr_11095_11128 = state_11072__$1;(statearr_11095_11128[2] = inst_11053);
(statearr_11095_11128[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 11))
{var inst_11038 = (state_11072[7]);var inst_11024 = (state_11072[12]);var inst_11038__$1 = cljs.core.seq.call(null,inst_11024);var state_11072__$1 = (function (){var statearr_11096 = state_11072;(statearr_11096[7] = inst_11038__$1);
return statearr_11096;
})();if(inst_11038__$1)
{var statearr_11097_11129 = state_11072__$1;(statearr_11097_11129[1] = 14);
} else
{var statearr_11098_11130 = state_11072__$1;(statearr_11098_11130[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 9))
{var inst_11060 = (state_11072[2]);var inst_11061 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11072__$1 = (function (){var statearr_11099 = state_11072;(statearr_11099[15] = inst_11060);
return statearr_11099;
})();if(cljs.core.truth_(inst_11061))
{var statearr_11100_11131 = state_11072__$1;(statearr_11100_11131[1] = 21);
} else
{var statearr_11101_11132 = state_11072__$1;(statearr_11101_11132[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 5))
{var inst_11016 = cljs.core.async.close_BANG_.call(null,out);var state_11072__$1 = state_11072;var statearr_11102_11133 = state_11072__$1;(statearr_11102_11133[2] = inst_11016);
(statearr_11102_11133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 14))
{var inst_11038 = (state_11072[7]);var inst_11040 = cljs.core.chunked_seq_QMARK_.call(null,inst_11038);var state_11072__$1 = state_11072;if(inst_11040)
{var statearr_11103_11134 = state_11072__$1;(statearr_11103_11134[1] = 17);
} else
{var statearr_11104_11135 = state_11072__$1;(statearr_11104_11135[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 16))
{var inst_11056 = (state_11072[2]);var state_11072__$1 = state_11072;var statearr_11105_11136 = state_11072__$1;(statearr_11105_11136[2] = inst_11056);
(statearr_11105_11136[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11073 === 10))
{var inst_11027 = (state_11072[8]);var inst_11025 = (state_11072[10]);var inst_11032 = cljs.core._nth.call(null,inst_11025,inst_11027);var state_11072__$1 = state_11072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11072__$1,13,out,inst_11032);
} else
{if((state_val_11073 === 18))
{var inst_11038 = (state_11072[7]);var inst_11047 = cljs.core.first.call(null,inst_11038);var state_11072__$1 = state_11072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11072__$1,20,out,inst_11047);
} else
{if((state_val_11073 === 8))
{var inst_11027 = (state_11072[8]);var inst_11026 = (state_11072[11]);var inst_11029 = (inst_11027 < inst_11026);var inst_11030 = inst_11029;var state_11072__$1 = state_11072;if(cljs.core.truth_(inst_11030))
{var statearr_11106_11137 = state_11072__$1;(statearr_11106_11137[1] = 10);
} else
{var statearr_11107_11138 = state_11072__$1;(statearr_11107_11138[1] = 11);
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
var state_machine__5624__auto____0 = (function (){var statearr_11111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11111[0] = state_machine__5624__auto__);
(statearr_11111[1] = 1);
return statearr_11111;
});
var state_machine__5624__auto____1 = (function (state_11072){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11112){if((e11112 instanceof Object))
{var ex__5627__auto__ = e11112;var statearr_11113_11139 = state_11072;(statearr_11113_11139[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11140 = state_11072;
state_11072 = G__11140;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11072){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11114 = f__5639__auto__.call(null);(statearr_11114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11114;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5638__auto___11235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11235){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11235){
return (function (state_11211){var state_val_11212 = (state_11211[1]);if((state_val_11212 === 7))
{var inst_11207 = (state_11211[2]);var state_11211__$1 = state_11211;var statearr_11213_11236 = state_11211__$1;(statearr_11213_11236[2] = inst_11207);
(statearr_11213_11236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 1))
{var state_11211__$1 = state_11211;var statearr_11214_11237 = state_11211__$1;(statearr_11214_11237[2] = null);
(statearr_11214_11237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 4))
{var inst_11190 = (state_11211[7]);var inst_11190__$1 = (state_11211[2]);var inst_11191 = (inst_11190__$1 == null);var state_11211__$1 = (function (){var statearr_11215 = state_11211;(statearr_11215[7] = inst_11190__$1);
return statearr_11215;
})();if(cljs.core.truth_(inst_11191))
{var statearr_11216_11238 = state_11211__$1;(statearr_11216_11238[1] = 5);
} else
{var statearr_11217_11239 = state_11211__$1;(statearr_11217_11239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 13))
{var state_11211__$1 = state_11211;var statearr_11218_11240 = state_11211__$1;(statearr_11218_11240[2] = null);
(statearr_11218_11240[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 6))
{var inst_11190 = (state_11211[7]);var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11211__$1,11,to,inst_11190);
} else
{if((state_val_11212 === 3))
{var inst_11209 = (state_11211[2]);var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11211__$1,inst_11209);
} else
{if((state_val_11212 === 12))
{var state_11211__$1 = state_11211;var statearr_11219_11241 = state_11211__$1;(statearr_11219_11241[2] = null);
(statearr_11219_11241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 2))
{var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11211__$1,4,from);
} else
{if((state_val_11212 === 11))
{var inst_11200 = (state_11211[2]);var state_11211__$1 = state_11211;if(cljs.core.truth_(inst_11200))
{var statearr_11220_11242 = state_11211__$1;(statearr_11220_11242[1] = 12);
} else
{var statearr_11221_11243 = state_11211__$1;(statearr_11221_11243[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 9))
{var state_11211__$1 = state_11211;var statearr_11222_11244 = state_11211__$1;(statearr_11222_11244[2] = null);
(statearr_11222_11244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 5))
{var state_11211__$1 = state_11211;if(cljs.core.truth_(close_QMARK_))
{var statearr_11223_11245 = state_11211__$1;(statearr_11223_11245[1] = 8);
} else
{var statearr_11224_11246 = state_11211__$1;(statearr_11224_11246[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 14))
{var inst_11205 = (state_11211[2]);var state_11211__$1 = state_11211;var statearr_11225_11247 = state_11211__$1;(statearr_11225_11247[2] = inst_11205);
(statearr_11225_11247[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 10))
{var inst_11197 = (state_11211[2]);var state_11211__$1 = state_11211;var statearr_11226_11248 = state_11211__$1;(statearr_11226_11248[2] = inst_11197);
(statearr_11226_11248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 8))
{var inst_11194 = cljs.core.async.close_BANG_.call(null,to);var state_11211__$1 = state_11211;var statearr_11227_11249 = state_11211__$1;(statearr_11227_11249[2] = inst_11194);
(statearr_11227_11249[1] = 10);
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
});})(c__5638__auto___11235))
;return ((function (switch__5623__auto__,c__5638__auto___11235){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11231 = [null,null,null,null,null,null,null,null];(statearr_11231[0] = state_machine__5624__auto__);
(statearr_11231[1] = 1);
return statearr_11231;
});
var state_machine__5624__auto____1 = (function (state_11211){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11232){if((e11232 instanceof Object))
{var ex__5627__auto__ = e11232;var statearr_11233_11250 = state_11211;(statearr_11233_11250[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11251 = state_11211;
state_11211 = G__11251;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11211){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11235))
})();var state__5640__auto__ = (function (){var statearr_11234 = f__5639__auto__.call(null);(statearr_11234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11235);
return statearr_11234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11235))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5638__auto___11352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11352,tc,fc){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11352,tc,fc){
return (function (state_11327){var state_val_11328 = (state_11327[1]);if((state_val_11328 === 7))
{var inst_11323 = (state_11327[2]);var state_11327__$1 = state_11327;var statearr_11329_11353 = state_11327__$1;(statearr_11329_11353[2] = inst_11323);
(statearr_11329_11353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 1))
{var state_11327__$1 = state_11327;var statearr_11330_11354 = state_11327__$1;(statearr_11330_11354[2] = null);
(statearr_11330_11354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 4))
{var inst_11304 = (state_11327[7]);var inst_11304__$1 = (state_11327[2]);var inst_11305 = (inst_11304__$1 == null);var state_11327__$1 = (function (){var statearr_11331 = state_11327;(statearr_11331[7] = inst_11304__$1);
return statearr_11331;
})();if(cljs.core.truth_(inst_11305))
{var statearr_11332_11355 = state_11327__$1;(statearr_11332_11355[1] = 5);
} else
{var statearr_11333_11356 = state_11327__$1;(statearr_11333_11356[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 13))
{var state_11327__$1 = state_11327;var statearr_11334_11357 = state_11327__$1;(statearr_11334_11357[2] = null);
(statearr_11334_11357[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 6))
{var inst_11304 = (state_11327[7]);var inst_11310 = p.call(null,inst_11304);var state_11327__$1 = state_11327;if(cljs.core.truth_(inst_11310))
{var statearr_11335_11358 = state_11327__$1;(statearr_11335_11358[1] = 9);
} else
{var statearr_11336_11359 = state_11327__$1;(statearr_11336_11359[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 3))
{var inst_11325 = (state_11327[2]);var state_11327__$1 = state_11327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11327__$1,inst_11325);
} else
{if((state_val_11328 === 12))
{var state_11327__$1 = state_11327;var statearr_11337_11360 = state_11327__$1;(statearr_11337_11360[2] = null);
(statearr_11337_11360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 2))
{var state_11327__$1 = state_11327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11327__$1,4,ch);
} else
{if((state_val_11328 === 11))
{var inst_11304 = (state_11327[7]);var inst_11314 = (state_11327[2]);var state_11327__$1 = state_11327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11327__$1,8,inst_11314,inst_11304);
} else
{if((state_val_11328 === 9))
{var state_11327__$1 = state_11327;var statearr_11338_11361 = state_11327__$1;(statearr_11338_11361[2] = tc);
(statearr_11338_11361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 5))
{var inst_11307 = cljs.core.async.close_BANG_.call(null,tc);var inst_11308 = cljs.core.async.close_BANG_.call(null,fc);var state_11327__$1 = (function (){var statearr_11339 = state_11327;(statearr_11339[8] = inst_11307);
return statearr_11339;
})();var statearr_11340_11362 = state_11327__$1;(statearr_11340_11362[2] = inst_11308);
(statearr_11340_11362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 14))
{var inst_11321 = (state_11327[2]);var state_11327__$1 = state_11327;var statearr_11341_11363 = state_11327__$1;(statearr_11341_11363[2] = inst_11321);
(statearr_11341_11363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 10))
{var state_11327__$1 = state_11327;var statearr_11342_11364 = state_11327__$1;(statearr_11342_11364[2] = fc);
(statearr_11342_11364[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11328 === 8))
{var inst_11316 = (state_11327[2]);var state_11327__$1 = state_11327;if(cljs.core.truth_(inst_11316))
{var statearr_11343_11365 = state_11327__$1;(statearr_11343_11365[1] = 12);
} else
{var statearr_11344_11366 = state_11327__$1;(statearr_11344_11366[1] = 13);
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
});})(c__5638__auto___11352,tc,fc))
;return ((function (switch__5623__auto__,c__5638__auto___11352,tc,fc){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11348 = [null,null,null,null,null,null,null,null,null];(statearr_11348[0] = state_machine__5624__auto__);
(statearr_11348[1] = 1);
return statearr_11348;
});
var state_machine__5624__auto____1 = (function (state_11327){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11327);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object))
{var ex__5627__auto__ = e11349;var statearr_11350_11367 = state_11327;(statearr_11350_11367[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11327);
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
var G__11368 = state_11327;
state_11327 = G__11368;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11327){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11352,tc,fc))
})();var state__5640__auto__ = (function (){var statearr_11351 = f__5639__auto__.call(null);(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11352);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11352,tc,fc))
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
return (function (state_11415){var state_val_11416 = (state_11415[1]);if((state_val_11416 === 7))
{var inst_11411 = (state_11415[2]);var state_11415__$1 = state_11415;var statearr_11417_11433 = state_11415__$1;(statearr_11417_11433[2] = inst_11411);
(statearr_11417_11433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11416 === 6))
{var inst_11401 = (state_11415[7]);var inst_11404 = (state_11415[8]);var inst_11408 = f.call(null,inst_11401,inst_11404);var inst_11401__$1 = inst_11408;var state_11415__$1 = (function (){var statearr_11418 = state_11415;(statearr_11418[7] = inst_11401__$1);
return statearr_11418;
})();var statearr_11419_11434 = state_11415__$1;(statearr_11419_11434[2] = null);
(statearr_11419_11434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11416 === 5))
{var inst_11401 = (state_11415[7]);var state_11415__$1 = state_11415;var statearr_11420_11435 = state_11415__$1;(statearr_11420_11435[2] = inst_11401);
(statearr_11420_11435[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11416 === 4))
{var inst_11404 = (state_11415[8]);var inst_11404__$1 = (state_11415[2]);var inst_11405 = (inst_11404__$1 == null);var state_11415__$1 = (function (){var statearr_11421 = state_11415;(statearr_11421[8] = inst_11404__$1);
return statearr_11421;
})();if(cljs.core.truth_(inst_11405))
{var statearr_11422_11436 = state_11415__$1;(statearr_11422_11436[1] = 5);
} else
{var statearr_11423_11437 = state_11415__$1;(statearr_11423_11437[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11416 === 3))
{var inst_11413 = (state_11415[2]);var state_11415__$1 = state_11415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11415__$1,inst_11413);
} else
{if((state_val_11416 === 2))
{var state_11415__$1 = state_11415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11415__$1,4,ch);
} else
{if((state_val_11416 === 1))
{var inst_11401 = init;var state_11415__$1 = (function (){var statearr_11424 = state_11415;(statearr_11424[7] = inst_11401);
return statearr_11424;
})();var statearr_11425_11438 = state_11415__$1;(statearr_11425_11438[2] = null);
(statearr_11425_11438[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11429 = [null,null,null,null,null,null,null,null,null];(statearr_11429[0] = state_machine__5624__auto__);
(statearr_11429[1] = 1);
return statearr_11429;
});
var state_machine__5624__auto____1 = (function (state_11415){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11430){if((e11430 instanceof Object))
{var ex__5627__auto__ = e11430;var statearr_11431_11439 = state_11415;(statearr_11431_11439[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11440 = state_11415;
state_11415 = G__11440;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11415){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11432 = f__5639__auto__.call(null);(statearr_11432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11432;
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
return (function (state_11514){var state_val_11515 = (state_11514[1]);if((state_val_11515 === 7))
{var inst_11496 = (state_11514[2]);var state_11514__$1 = state_11514;var statearr_11516_11539 = state_11514__$1;(statearr_11516_11539[2] = inst_11496);
(statearr_11516_11539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 1))
{var inst_11490 = cljs.core.seq.call(null,coll);var inst_11491 = inst_11490;var state_11514__$1 = (function (){var statearr_11517 = state_11514;(statearr_11517[7] = inst_11491);
return statearr_11517;
})();var statearr_11518_11540 = state_11514__$1;(statearr_11518_11540[2] = null);
(statearr_11518_11540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 4))
{var inst_11491 = (state_11514[7]);var inst_11494 = cljs.core.first.call(null,inst_11491);var state_11514__$1 = state_11514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11514__$1,7,ch,inst_11494);
} else
{if((state_val_11515 === 13))
{var inst_11508 = (state_11514[2]);var state_11514__$1 = state_11514;var statearr_11519_11541 = state_11514__$1;(statearr_11519_11541[2] = inst_11508);
(statearr_11519_11541[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 6))
{var inst_11499 = (state_11514[2]);var state_11514__$1 = state_11514;if(cljs.core.truth_(inst_11499))
{var statearr_11520_11542 = state_11514__$1;(statearr_11520_11542[1] = 8);
} else
{var statearr_11521_11543 = state_11514__$1;(statearr_11521_11543[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 3))
{var inst_11512 = (state_11514[2]);var state_11514__$1 = state_11514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11514__$1,inst_11512);
} else
{if((state_val_11515 === 12))
{var state_11514__$1 = state_11514;var statearr_11522_11544 = state_11514__$1;(statearr_11522_11544[2] = null);
(statearr_11522_11544[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 2))
{var inst_11491 = (state_11514[7]);var state_11514__$1 = state_11514;if(cljs.core.truth_(inst_11491))
{var statearr_11523_11545 = state_11514__$1;(statearr_11523_11545[1] = 4);
} else
{var statearr_11524_11546 = state_11514__$1;(statearr_11524_11546[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 11))
{var inst_11505 = cljs.core.async.close_BANG_.call(null,ch);var state_11514__$1 = state_11514;var statearr_11525_11547 = state_11514__$1;(statearr_11525_11547[2] = inst_11505);
(statearr_11525_11547[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 9))
{var state_11514__$1 = state_11514;if(cljs.core.truth_(close_QMARK_))
{var statearr_11526_11548 = state_11514__$1;(statearr_11526_11548[1] = 11);
} else
{var statearr_11527_11549 = state_11514__$1;(statearr_11527_11549[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 5))
{var inst_11491 = (state_11514[7]);var state_11514__$1 = state_11514;var statearr_11528_11550 = state_11514__$1;(statearr_11528_11550[2] = inst_11491);
(statearr_11528_11550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 10))
{var inst_11510 = (state_11514[2]);var state_11514__$1 = state_11514;var statearr_11529_11551 = state_11514__$1;(statearr_11529_11551[2] = inst_11510);
(statearr_11529_11551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11515 === 8))
{var inst_11491 = (state_11514[7]);var inst_11501 = cljs.core.next.call(null,inst_11491);var inst_11491__$1 = inst_11501;var state_11514__$1 = (function (){var statearr_11530 = state_11514;(statearr_11530[7] = inst_11491__$1);
return statearr_11530;
})();var statearr_11531_11552 = state_11514__$1;(statearr_11531_11552[2] = null);
(statearr_11531_11552[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11535 = [null,null,null,null,null,null,null,null];(statearr_11535[0] = state_machine__5624__auto__);
(statearr_11535[1] = 1);
return statearr_11535;
});
var state_machine__5624__auto____1 = (function (state_11514){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11536){if((e11536 instanceof Object))
{var ex__5627__auto__ = e11536;var statearr_11537_11553 = state_11514;(statearr_11537_11553[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11554 = state_11514;
state_11514 = G__11554;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11514){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11538 = f__5639__auto__.call(null);(statearr_11538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11538;
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
cljs.core.async.Mux = (function (){var obj11556 = {};return obj11556;
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
cljs.core.async.Mult = (function (){var obj11558 = {};return obj11558;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11780 = (function (cs,ch,mult,meta11781){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11781 = meta11781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11780.cljs$lang$type = true;
cljs.core.async.t11780.cljs$lang$ctorStr = "cljs.core.async/t11780";
cljs.core.async.t11780.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11780");
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11780.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11782){var self__ = this;
var _11782__$1 = this;return self__.meta11781;
});})(cs))
;
cljs.core.async.t11780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11782,meta11781__$1){var self__ = this;
var _11782__$1 = this;return (new cljs.core.async.t11780(self__.cs,self__.ch,self__.mult,meta11781__$1));
});})(cs))
;
cljs.core.async.__GT_t11780 = ((function (cs){
return (function __GT_t11780(cs__$1,ch__$1,mult__$1,meta11781){return (new cljs.core.async.t11780(cs__$1,ch__$1,mult__$1,meta11781));
});})(cs))
;
}
return (new cljs.core.async.t11780(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5638__auto___12001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12001,cs,m,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12001,cs,m,dchan,dctr,done){
return (function (state_11913){var state_val_11914 = (state_11913[1]);if((state_val_11914 === 7))
{var inst_11909 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11915_12002 = state_11913__$1;(statearr_11915_12002[2] = inst_11909);
(statearr_11915_12002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 20))
{var inst_11814 = (state_11913[7]);var inst_11824 = cljs.core.first.call(null,inst_11814);var inst_11825 = cljs.core.nth.call(null,inst_11824,0,null);var inst_11826 = cljs.core.nth.call(null,inst_11824,1,null);var state_11913__$1 = (function (){var statearr_11916 = state_11913;(statearr_11916[8] = inst_11825);
return statearr_11916;
})();if(cljs.core.truth_(inst_11826))
{var statearr_11917_12003 = state_11913__$1;(statearr_11917_12003[1] = 22);
} else
{var statearr_11918_12004 = state_11913__$1;(statearr_11918_12004[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 27))
{var inst_11785 = (state_11913[9]);var inst_11861 = (state_11913[10]);var inst_11854 = (state_11913[11]);var inst_11856 = (state_11913[12]);var inst_11861__$1 = cljs.core._nth.call(null,inst_11854,inst_11856);var inst_11862 = cljs.core.async.put_BANG_.call(null,inst_11861__$1,inst_11785,done);var state_11913__$1 = (function (){var statearr_11919 = state_11913;(statearr_11919[10] = inst_11861__$1);
return statearr_11919;
})();if(cljs.core.truth_(inst_11862))
{var statearr_11920_12005 = state_11913__$1;(statearr_11920_12005[1] = 30);
} else
{var statearr_11921_12006 = state_11913__$1;(statearr_11921_12006[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 1))
{var state_11913__$1 = state_11913;var statearr_11922_12007 = state_11913__$1;(statearr_11922_12007[2] = null);
(statearr_11922_12007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 24))
{var inst_11814 = (state_11913[7]);var inst_11831 = (state_11913[2]);var inst_11832 = cljs.core.next.call(null,inst_11814);var inst_11794 = inst_11832;var inst_11795 = null;var inst_11796 = 0;var inst_11797 = 0;var state_11913__$1 = (function (){var statearr_11923 = state_11913;(statearr_11923[13] = inst_11795);
(statearr_11923[14] = inst_11794);
(statearr_11923[15] = inst_11797);
(statearr_11923[16] = inst_11796);
(statearr_11923[17] = inst_11831);
return statearr_11923;
})();var statearr_11924_12008 = state_11913__$1;(statearr_11924_12008[2] = null);
(statearr_11924_12008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 39))
{var state_11913__$1 = state_11913;var statearr_11928_12009 = state_11913__$1;(statearr_11928_12009[2] = null);
(statearr_11928_12009[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 4))
{var inst_11785 = (state_11913[9]);var inst_11785__$1 = (state_11913[2]);var inst_11786 = (inst_11785__$1 == null);var state_11913__$1 = (function (){var statearr_11929 = state_11913;(statearr_11929[9] = inst_11785__$1);
return statearr_11929;
})();if(cljs.core.truth_(inst_11786))
{var statearr_11930_12010 = state_11913__$1;(statearr_11930_12010[1] = 5);
} else
{var statearr_11931_12011 = state_11913__$1;(statearr_11931_12011[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 15))
{var inst_11795 = (state_11913[13]);var inst_11794 = (state_11913[14]);var inst_11797 = (state_11913[15]);var inst_11796 = (state_11913[16]);var inst_11810 = (state_11913[2]);var inst_11811 = (inst_11797 + 1);var tmp11925 = inst_11795;var tmp11926 = inst_11794;var tmp11927 = inst_11796;var inst_11794__$1 = tmp11926;var inst_11795__$1 = tmp11925;var inst_11796__$1 = tmp11927;var inst_11797__$1 = inst_11811;var state_11913__$1 = (function (){var statearr_11932 = state_11913;(statearr_11932[13] = inst_11795__$1);
(statearr_11932[14] = inst_11794__$1);
(statearr_11932[15] = inst_11797__$1);
(statearr_11932[16] = inst_11796__$1);
(statearr_11932[18] = inst_11810);
return statearr_11932;
})();var statearr_11933_12012 = state_11913__$1;(statearr_11933_12012[2] = null);
(statearr_11933_12012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 21))
{var inst_11835 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11937_12013 = state_11913__$1;(statearr_11937_12013[2] = inst_11835);
(statearr_11937_12013[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 31))
{var inst_11861 = (state_11913[10]);var inst_11865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11866 = cljs.core.async.untap_STAR_.call(null,m,inst_11861);var state_11913__$1 = (function (){var statearr_11938 = state_11913;(statearr_11938[19] = inst_11865);
return statearr_11938;
})();var statearr_11939_12014 = state_11913__$1;(statearr_11939_12014[2] = inst_11866);
(statearr_11939_12014[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 32))
{var inst_11855 = (state_11913[20]);var inst_11853 = (state_11913[21]);var inst_11854 = (state_11913[11]);var inst_11856 = (state_11913[12]);var inst_11868 = (state_11913[2]);var inst_11869 = (inst_11856 + 1);var tmp11934 = inst_11855;var tmp11935 = inst_11853;var tmp11936 = inst_11854;var inst_11853__$1 = tmp11935;var inst_11854__$1 = tmp11936;var inst_11855__$1 = tmp11934;var inst_11856__$1 = inst_11869;var state_11913__$1 = (function (){var statearr_11940 = state_11913;(statearr_11940[20] = inst_11855__$1);
(statearr_11940[22] = inst_11868);
(statearr_11940[21] = inst_11853__$1);
(statearr_11940[11] = inst_11854__$1);
(statearr_11940[12] = inst_11856__$1);
return statearr_11940;
})();var statearr_11941_12015 = state_11913__$1;(statearr_11941_12015[2] = null);
(statearr_11941_12015[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 40))
{var inst_11881 = (state_11913[23]);var inst_11885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11886 = cljs.core.async.untap_STAR_.call(null,m,inst_11881);var state_11913__$1 = (function (){var statearr_11942 = state_11913;(statearr_11942[24] = inst_11885);
return statearr_11942;
})();var statearr_11943_12016 = state_11913__$1;(statearr_11943_12016[2] = inst_11886);
(statearr_11943_12016[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 33))
{var inst_11872 = (state_11913[25]);var inst_11874 = cljs.core.chunked_seq_QMARK_.call(null,inst_11872);var state_11913__$1 = state_11913;if(inst_11874)
{var statearr_11944_12017 = state_11913__$1;(statearr_11944_12017[1] = 36);
} else
{var statearr_11945_12018 = state_11913__$1;(statearr_11945_12018[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 13))
{var inst_11804 = (state_11913[26]);var inst_11807 = cljs.core.async.close_BANG_.call(null,inst_11804);var state_11913__$1 = state_11913;var statearr_11946_12019 = state_11913__$1;(statearr_11946_12019[2] = inst_11807);
(statearr_11946_12019[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 22))
{var inst_11825 = (state_11913[8]);var inst_11828 = cljs.core.async.close_BANG_.call(null,inst_11825);var state_11913__$1 = state_11913;var statearr_11947_12020 = state_11913__$1;(statearr_11947_12020[2] = inst_11828);
(statearr_11947_12020[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 36))
{var inst_11872 = (state_11913[25]);var inst_11876 = cljs.core.chunk_first.call(null,inst_11872);var inst_11877 = cljs.core.chunk_rest.call(null,inst_11872);var inst_11878 = cljs.core.count.call(null,inst_11876);var inst_11853 = inst_11877;var inst_11854 = inst_11876;var inst_11855 = inst_11878;var inst_11856 = 0;var state_11913__$1 = (function (){var statearr_11948 = state_11913;(statearr_11948[20] = inst_11855);
(statearr_11948[21] = inst_11853);
(statearr_11948[11] = inst_11854);
(statearr_11948[12] = inst_11856);
return statearr_11948;
})();var statearr_11949_12021 = state_11913__$1;(statearr_11949_12021[2] = null);
(statearr_11949_12021[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 41))
{var inst_11872 = (state_11913[25]);var inst_11888 = (state_11913[2]);var inst_11889 = cljs.core.next.call(null,inst_11872);var inst_11853 = inst_11889;var inst_11854 = null;var inst_11855 = 0;var inst_11856 = 0;var state_11913__$1 = (function (){var statearr_11950 = state_11913;(statearr_11950[27] = inst_11888);
(statearr_11950[20] = inst_11855);
(statearr_11950[21] = inst_11853);
(statearr_11950[11] = inst_11854);
(statearr_11950[12] = inst_11856);
return statearr_11950;
})();var statearr_11951_12022 = state_11913__$1;(statearr_11951_12022[2] = null);
(statearr_11951_12022[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 43))
{var state_11913__$1 = state_11913;var statearr_11952_12023 = state_11913__$1;(statearr_11952_12023[2] = null);
(statearr_11952_12023[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 29))
{var inst_11897 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11953_12024 = state_11913__$1;(statearr_11953_12024[2] = inst_11897);
(statearr_11953_12024[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 44))
{var inst_11906 = (state_11913[2]);var state_11913__$1 = (function (){var statearr_11954 = state_11913;(statearr_11954[28] = inst_11906);
return statearr_11954;
})();var statearr_11955_12025 = state_11913__$1;(statearr_11955_12025[2] = null);
(statearr_11955_12025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 6))
{var inst_11845 = (state_11913[29]);var inst_11844 = cljs.core.deref.call(null,cs);var inst_11845__$1 = cljs.core.keys.call(null,inst_11844);var inst_11846 = cljs.core.count.call(null,inst_11845__$1);var inst_11847 = cljs.core.reset_BANG_.call(null,dctr,inst_11846);var inst_11852 = cljs.core.seq.call(null,inst_11845__$1);var inst_11853 = inst_11852;var inst_11854 = null;var inst_11855 = 0;var inst_11856 = 0;var state_11913__$1 = (function (){var statearr_11956 = state_11913;(statearr_11956[29] = inst_11845__$1);
(statearr_11956[20] = inst_11855);
(statearr_11956[21] = inst_11853);
(statearr_11956[30] = inst_11847);
(statearr_11956[11] = inst_11854);
(statearr_11956[12] = inst_11856);
return statearr_11956;
})();var statearr_11957_12026 = state_11913__$1;(statearr_11957_12026[2] = null);
(statearr_11957_12026[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 28))
{var inst_11872 = (state_11913[25]);var inst_11853 = (state_11913[21]);var inst_11872__$1 = cljs.core.seq.call(null,inst_11853);var state_11913__$1 = (function (){var statearr_11958 = state_11913;(statearr_11958[25] = inst_11872__$1);
return statearr_11958;
})();if(inst_11872__$1)
{var statearr_11959_12027 = state_11913__$1;(statearr_11959_12027[1] = 33);
} else
{var statearr_11960_12028 = state_11913__$1;(statearr_11960_12028[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 25))
{var inst_11855 = (state_11913[20]);var inst_11856 = (state_11913[12]);var inst_11858 = (inst_11856 < inst_11855);var inst_11859 = inst_11858;var state_11913__$1 = state_11913;if(cljs.core.truth_(inst_11859))
{var statearr_11961_12029 = state_11913__$1;(statearr_11961_12029[1] = 27);
} else
{var statearr_11962_12030 = state_11913__$1;(statearr_11962_12030[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 34))
{var state_11913__$1 = state_11913;var statearr_11963_12031 = state_11913__$1;(statearr_11963_12031[2] = null);
(statearr_11963_12031[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 17))
{var state_11913__$1 = state_11913;var statearr_11964_12032 = state_11913__$1;(statearr_11964_12032[2] = null);
(statearr_11964_12032[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 3))
{var inst_11911 = (state_11913[2]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11913__$1,inst_11911);
} else
{if((state_val_11914 === 12))
{var inst_11840 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11965_12033 = state_11913__$1;(statearr_11965_12033[2] = inst_11840);
(statearr_11965_12033[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 2))
{var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,4,ch);
} else
{if((state_val_11914 === 23))
{var state_11913__$1 = state_11913;var statearr_11966_12034 = state_11913__$1;(statearr_11966_12034[2] = null);
(statearr_11966_12034[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 35))
{var inst_11895 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11967_12035 = state_11913__$1;(statearr_11967_12035[2] = inst_11895);
(statearr_11967_12035[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 19))
{var inst_11814 = (state_11913[7]);var inst_11818 = cljs.core.chunk_first.call(null,inst_11814);var inst_11819 = cljs.core.chunk_rest.call(null,inst_11814);var inst_11820 = cljs.core.count.call(null,inst_11818);var inst_11794 = inst_11819;var inst_11795 = inst_11818;var inst_11796 = inst_11820;var inst_11797 = 0;var state_11913__$1 = (function (){var statearr_11968 = state_11913;(statearr_11968[13] = inst_11795);
(statearr_11968[14] = inst_11794);
(statearr_11968[15] = inst_11797);
(statearr_11968[16] = inst_11796);
return statearr_11968;
})();var statearr_11969_12036 = state_11913__$1;(statearr_11969_12036[2] = null);
(statearr_11969_12036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 11))
{var inst_11794 = (state_11913[14]);var inst_11814 = (state_11913[7]);var inst_11814__$1 = cljs.core.seq.call(null,inst_11794);var state_11913__$1 = (function (){var statearr_11970 = state_11913;(statearr_11970[7] = inst_11814__$1);
return statearr_11970;
})();if(inst_11814__$1)
{var statearr_11971_12037 = state_11913__$1;(statearr_11971_12037[1] = 16);
} else
{var statearr_11972_12038 = state_11913__$1;(statearr_11972_12038[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 9))
{var inst_11842 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11973_12039 = state_11913__$1;(statearr_11973_12039[2] = inst_11842);
(statearr_11973_12039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 5))
{var inst_11792 = cljs.core.deref.call(null,cs);var inst_11793 = cljs.core.seq.call(null,inst_11792);var inst_11794 = inst_11793;var inst_11795 = null;var inst_11796 = 0;var inst_11797 = 0;var state_11913__$1 = (function (){var statearr_11974 = state_11913;(statearr_11974[13] = inst_11795);
(statearr_11974[14] = inst_11794);
(statearr_11974[15] = inst_11797);
(statearr_11974[16] = inst_11796);
return statearr_11974;
})();var statearr_11975_12040 = state_11913__$1;(statearr_11975_12040[2] = null);
(statearr_11975_12040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 14))
{var state_11913__$1 = state_11913;var statearr_11976_12041 = state_11913__$1;(statearr_11976_12041[2] = null);
(statearr_11976_12041[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 45))
{var inst_11903 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11977_12042 = state_11913__$1;(statearr_11977_12042[2] = inst_11903);
(statearr_11977_12042[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 26))
{var inst_11845 = (state_11913[29]);var inst_11899 = (state_11913[2]);var inst_11900 = cljs.core.seq.call(null,inst_11845);var state_11913__$1 = (function (){var statearr_11978 = state_11913;(statearr_11978[31] = inst_11899);
return statearr_11978;
})();if(inst_11900)
{var statearr_11979_12043 = state_11913__$1;(statearr_11979_12043[1] = 42);
} else
{var statearr_11980_12044 = state_11913__$1;(statearr_11980_12044[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 16))
{var inst_11814 = (state_11913[7]);var inst_11816 = cljs.core.chunked_seq_QMARK_.call(null,inst_11814);var state_11913__$1 = state_11913;if(inst_11816)
{var statearr_11981_12045 = state_11913__$1;(statearr_11981_12045[1] = 19);
} else
{var statearr_11982_12046 = state_11913__$1;(statearr_11982_12046[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 38))
{var inst_11892 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11983_12047 = state_11913__$1;(statearr_11983_12047[2] = inst_11892);
(statearr_11983_12047[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 30))
{var state_11913__$1 = state_11913;var statearr_11984_12048 = state_11913__$1;(statearr_11984_12048[2] = null);
(statearr_11984_12048[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 10))
{var inst_11795 = (state_11913[13]);var inst_11797 = (state_11913[15]);var inst_11803 = cljs.core._nth.call(null,inst_11795,inst_11797);var inst_11804 = cljs.core.nth.call(null,inst_11803,0,null);var inst_11805 = cljs.core.nth.call(null,inst_11803,1,null);var state_11913__$1 = (function (){var statearr_11985 = state_11913;(statearr_11985[26] = inst_11804);
return statearr_11985;
})();if(cljs.core.truth_(inst_11805))
{var statearr_11986_12049 = state_11913__$1;(statearr_11986_12049[1] = 13);
} else
{var statearr_11987_12050 = state_11913__$1;(statearr_11987_12050[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 18))
{var inst_11838 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11988_12051 = state_11913__$1;(statearr_11988_12051[2] = inst_11838);
(statearr_11988_12051[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 42))
{var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,45,dchan);
} else
{if((state_val_11914 === 37))
{var inst_11785 = (state_11913[9]);var inst_11872 = (state_11913[25]);var inst_11881 = (state_11913[23]);var inst_11881__$1 = cljs.core.first.call(null,inst_11872);var inst_11882 = cljs.core.async.put_BANG_.call(null,inst_11881__$1,inst_11785,done);var state_11913__$1 = (function (){var statearr_11989 = state_11913;(statearr_11989[23] = inst_11881__$1);
return statearr_11989;
})();if(cljs.core.truth_(inst_11882))
{var statearr_11990_12052 = state_11913__$1;(statearr_11990_12052[1] = 39);
} else
{var statearr_11991_12053 = state_11913__$1;(statearr_11991_12053[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 8))
{var inst_11797 = (state_11913[15]);var inst_11796 = (state_11913[16]);var inst_11799 = (inst_11797 < inst_11796);var inst_11800 = inst_11799;var state_11913__$1 = state_11913;if(cljs.core.truth_(inst_11800))
{var statearr_11992_12054 = state_11913__$1;(statearr_11992_12054[1] = 10);
} else
{var statearr_11993_12055 = state_11913__$1;(statearr_11993_12055[1] = 11);
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
});})(c__5638__auto___12001,cs,m,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12001,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11997[0] = state_machine__5624__auto__);
(statearr_11997[1] = 1);
return statearr_11997;
});
var state_machine__5624__auto____1 = (function (state_11913){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11998){if((e11998 instanceof Object))
{var ex__5627__auto__ = e11998;var statearr_11999_12056 = state_11913;(statearr_11999_12056[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12057 = state_11913;
state_11913 = G__12057;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11913){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12001,cs,m,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12000 = f__5639__auto__.call(null);(statearr_12000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12001);
return statearr_12000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12001,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12059 = {};return obj12059;
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
;var m = (function (){if(typeof cljs.core.async.t12179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12179 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12180){
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
this.meta12180 = meta12180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12179.cljs$lang$type = true;
cljs.core.async.t12179.cljs$lang$ctorStr = "cljs.core.async/t12179";
cljs.core.async.t12179.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12179");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12181){var self__ = this;
var _12181__$1 = this;return self__.meta12180;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12181,meta12180__$1){var self__ = this;
var _12181__$1 = this;return (new cljs.core.async.t12179(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12180__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12179 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12180){return (new cljs.core.async.t12179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12180));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12179(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5638__auto___12298 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12251){var state_val_12252 = (state_12251[1]);if((state_val_12252 === 7))
{var inst_12195 = (state_12251[7]);var inst_12200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12195);var state_12251__$1 = state_12251;var statearr_12253_12299 = state_12251__$1;(statearr_12253_12299[2] = inst_12200);
(statearr_12253_12299[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 20))
{var inst_12210 = (state_12251[8]);var state_12251__$1 = state_12251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12251__$1,23,out,inst_12210);
} else
{if((state_val_12252 === 1))
{var inst_12185 = (state_12251[9]);var inst_12185__$1 = calc_state.call(null);var inst_12186 = cljs.core.seq_QMARK_.call(null,inst_12185__$1);var state_12251__$1 = (function (){var statearr_12254 = state_12251;(statearr_12254[9] = inst_12185__$1);
return statearr_12254;
})();if(inst_12186)
{var statearr_12255_12300 = state_12251__$1;(statearr_12255_12300[1] = 2);
} else
{var statearr_12256_12301 = state_12251__$1;(statearr_12256_12301[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 24))
{var inst_12203 = (state_12251[10]);var inst_12195 = inst_12203;var state_12251__$1 = (function (){var statearr_12257 = state_12251;(statearr_12257[7] = inst_12195);
return statearr_12257;
})();var statearr_12258_12302 = state_12251__$1;(statearr_12258_12302[2] = null);
(statearr_12258_12302[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 4))
{var inst_12185 = (state_12251[9]);var inst_12191 = (state_12251[2]);var inst_12192 = cljs.core.get.call(null,inst_12191,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12193 = cljs.core.get.call(null,inst_12191,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12194 = cljs.core.get.call(null,inst_12191,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12195 = inst_12185;var state_12251__$1 = (function (){var statearr_12259 = state_12251;(statearr_12259[11] = inst_12192);
(statearr_12259[12] = inst_12193);
(statearr_12259[13] = inst_12194);
(statearr_12259[7] = inst_12195);
return statearr_12259;
})();var statearr_12260_12303 = state_12251__$1;(statearr_12260_12303[2] = null);
(statearr_12260_12303[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 15))
{var state_12251__$1 = state_12251;var statearr_12261_12304 = state_12251__$1;(statearr_12261_12304[2] = null);
(statearr_12261_12304[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 21))
{var inst_12203 = (state_12251[10]);var inst_12195 = inst_12203;var state_12251__$1 = (function (){var statearr_12262 = state_12251;(statearr_12262[7] = inst_12195);
return statearr_12262;
})();var statearr_12263_12305 = state_12251__$1;(statearr_12263_12305[2] = null);
(statearr_12263_12305[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 13))
{var inst_12247 = (state_12251[2]);var state_12251__$1 = state_12251;var statearr_12264_12306 = state_12251__$1;(statearr_12264_12306[2] = inst_12247);
(statearr_12264_12306[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 22))
{var inst_12245 = (state_12251[2]);var state_12251__$1 = state_12251;var statearr_12265_12307 = state_12251__$1;(statearr_12265_12307[2] = inst_12245);
(statearr_12265_12307[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 6))
{var inst_12249 = (state_12251[2]);var state_12251__$1 = state_12251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12251__$1,inst_12249);
} else
{if((state_val_12252 === 25))
{var state_12251__$1 = state_12251;var statearr_12266_12308 = state_12251__$1;(statearr_12266_12308[2] = null);
(statearr_12266_12308[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 17))
{var inst_12225 = (state_12251[14]);var state_12251__$1 = state_12251;var statearr_12267_12309 = state_12251__$1;(statearr_12267_12309[2] = inst_12225);
(statearr_12267_12309[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 3))
{var inst_12185 = (state_12251[9]);var state_12251__$1 = state_12251;var statearr_12268_12310 = state_12251__$1;(statearr_12268_12310[2] = inst_12185);
(statearr_12268_12310[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 12))
{var inst_12211 = (state_12251[15]);var inst_12206 = (state_12251[16]);var inst_12225 = (state_12251[14]);var inst_12225__$1 = inst_12206.call(null,inst_12211);var state_12251__$1 = (function (){var statearr_12269 = state_12251;(statearr_12269[14] = inst_12225__$1);
return statearr_12269;
})();if(cljs.core.truth_(inst_12225__$1))
{var statearr_12270_12311 = state_12251__$1;(statearr_12270_12311[1] = 17);
} else
{var statearr_12271_12312 = state_12251__$1;(statearr_12271_12312[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 2))
{var inst_12185 = (state_12251[9]);var inst_12188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12185);var state_12251__$1 = state_12251;var statearr_12272_12313 = state_12251__$1;(statearr_12272_12313[2] = inst_12188);
(statearr_12272_12313[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 23))
{var inst_12236 = (state_12251[2]);var state_12251__$1 = state_12251;if(cljs.core.truth_(inst_12236))
{var statearr_12273_12314 = state_12251__$1;(statearr_12273_12314[1] = 24);
} else
{var statearr_12274_12315 = state_12251__$1;(statearr_12274_12315[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 19))
{var inst_12233 = (state_12251[2]);var state_12251__$1 = state_12251;if(cljs.core.truth_(inst_12233))
{var statearr_12275_12316 = state_12251__$1;(statearr_12275_12316[1] = 20);
} else
{var statearr_12276_12317 = state_12251__$1;(statearr_12276_12317[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 11))
{var inst_12210 = (state_12251[8]);var inst_12216 = (inst_12210 == null);var state_12251__$1 = state_12251;if(cljs.core.truth_(inst_12216))
{var statearr_12277_12318 = state_12251__$1;(statearr_12277_12318[1] = 14);
} else
{var statearr_12278_12319 = state_12251__$1;(statearr_12278_12319[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 9))
{var inst_12203 = (state_12251[10]);var inst_12203__$1 = (state_12251[2]);var inst_12204 = cljs.core.get.call(null,inst_12203__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12205 = cljs.core.get.call(null,inst_12203__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12206 = cljs.core.get.call(null,inst_12203__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12251__$1 = (function (){var statearr_12279 = state_12251;(statearr_12279[16] = inst_12206);
(statearr_12279[17] = inst_12205);
(statearr_12279[10] = inst_12203__$1);
return statearr_12279;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12251__$1,10,inst_12204);
} else
{if((state_val_12252 === 5))
{var inst_12195 = (state_12251[7]);var inst_12198 = cljs.core.seq_QMARK_.call(null,inst_12195);var state_12251__$1 = state_12251;if(inst_12198)
{var statearr_12280_12320 = state_12251__$1;(statearr_12280_12320[1] = 7);
} else
{var statearr_12281_12321 = state_12251__$1;(statearr_12281_12321[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 14))
{var inst_12211 = (state_12251[15]);var inst_12218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12211);var state_12251__$1 = state_12251;var statearr_12282_12322 = state_12251__$1;(statearr_12282_12322[2] = inst_12218);
(statearr_12282_12322[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 26))
{var inst_12241 = (state_12251[2]);var state_12251__$1 = state_12251;var statearr_12283_12323 = state_12251__$1;(statearr_12283_12323[2] = inst_12241);
(statearr_12283_12323[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 16))
{var inst_12221 = (state_12251[2]);var inst_12222 = calc_state.call(null);var inst_12195 = inst_12222;var state_12251__$1 = (function (){var statearr_12284 = state_12251;(statearr_12284[18] = inst_12221);
(statearr_12284[7] = inst_12195);
return statearr_12284;
})();var statearr_12285_12324 = state_12251__$1;(statearr_12285_12324[2] = null);
(statearr_12285_12324[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 10))
{var inst_12211 = (state_12251[15]);var inst_12210 = (state_12251[8]);var inst_12209 = (state_12251[2]);var inst_12210__$1 = cljs.core.nth.call(null,inst_12209,0,null);var inst_12211__$1 = cljs.core.nth.call(null,inst_12209,1,null);var inst_12212 = (inst_12210__$1 == null);var inst_12213 = cljs.core._EQ_.call(null,inst_12211__$1,change);var inst_12214 = (inst_12212) || (inst_12213);var state_12251__$1 = (function (){var statearr_12286 = state_12251;(statearr_12286[15] = inst_12211__$1);
(statearr_12286[8] = inst_12210__$1);
return statearr_12286;
})();if(cljs.core.truth_(inst_12214))
{var statearr_12287_12325 = state_12251__$1;(statearr_12287_12325[1] = 11);
} else
{var statearr_12288_12326 = state_12251__$1;(statearr_12288_12326[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 18))
{var inst_12211 = (state_12251[15]);var inst_12206 = (state_12251[16]);var inst_12205 = (state_12251[17]);var inst_12228 = cljs.core.empty_QMARK_.call(null,inst_12206);var inst_12229 = inst_12205.call(null,inst_12211);var inst_12230 = cljs.core.not.call(null,inst_12229);var inst_12231 = (inst_12228) && (inst_12230);var state_12251__$1 = state_12251;var statearr_12289_12327 = state_12251__$1;(statearr_12289_12327[2] = inst_12231);
(statearr_12289_12327[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12252 === 8))
{var inst_12195 = (state_12251[7]);var state_12251__$1 = state_12251;var statearr_12290_12328 = state_12251__$1;(statearr_12290_12328[2] = inst_12195);
(statearr_12290_12328[1] = 9);
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
});})(c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5623__auto__,c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12294[0] = state_machine__5624__auto__);
(statearr_12294[1] = 1);
return statearr_12294;
});
var state_machine__5624__auto____1 = (function (state_12251){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12295){if((e12295 instanceof Object))
{var ex__5627__auto__ = e12295;var statearr_12296_12329 = state_12251;(statearr_12296_12329[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12330 = state_12251;
state_12251 = G__12330;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12251){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5640__auto__ = (function (){var statearr_12297 = f__5639__auto__.call(null);(statearr_12297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12298);
return statearr_12297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12298,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12332 = {};return obj12332;
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
return (function (p1__12333_SHARP_){if(cljs.core.truth_(p1__12333_SHARP_.call(null,topic)))
{return p1__12333_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12333_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12456 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12457){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12457 = meta12457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12456.cljs$lang$type = true;
cljs.core.async.t12456.cljs$lang$ctorStr = "cljs.core.async/t12456";
cljs.core.async.t12456.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12456");
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12456.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12458){var self__ = this;
var _12458__$1 = this;return self__.meta12457;
});})(mults,ensure_mult))
;
cljs.core.async.t12456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12458,meta12457__$1){var self__ = this;
var _12458__$1 = this;return (new cljs.core.async.t12456(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12457__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12456 = ((function (mults,ensure_mult){
return (function __GT_t12456(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12457){return (new cljs.core.async.t12456(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12457));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12456(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5638__auto___12578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12578,mults,ensure_mult,p){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12578,mults,ensure_mult,p){
return (function (state_12530){var state_val_12531 = (state_12530[1]);if((state_val_12531 === 7))
{var inst_12526 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12532_12579 = state_12530__$1;(statearr_12532_12579[2] = inst_12526);
(statearr_12532_12579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 20))
{var state_12530__$1 = state_12530;var statearr_12533_12580 = state_12530__$1;(statearr_12533_12580[2] = null);
(statearr_12533_12580[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 1))
{var state_12530__$1 = state_12530;var statearr_12534_12581 = state_12530__$1;(statearr_12534_12581[2] = null);
(statearr_12534_12581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 24))
{var inst_12509 = (state_12530[7]);var inst_12518 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12509);var state_12530__$1 = state_12530;var statearr_12535_12582 = state_12530__$1;(statearr_12535_12582[2] = inst_12518);
(statearr_12535_12582[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 4))
{var inst_12461 = (state_12530[8]);var inst_12461__$1 = (state_12530[2]);var inst_12462 = (inst_12461__$1 == null);var state_12530__$1 = (function (){var statearr_12536 = state_12530;(statearr_12536[8] = inst_12461__$1);
return statearr_12536;
})();if(cljs.core.truth_(inst_12462))
{var statearr_12537_12583 = state_12530__$1;(statearr_12537_12583[1] = 5);
} else
{var statearr_12538_12584 = state_12530__$1;(statearr_12538_12584[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 15))
{var inst_12503 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12539_12585 = state_12530__$1;(statearr_12539_12585[2] = inst_12503);
(statearr_12539_12585[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 21))
{var inst_12523 = (state_12530[2]);var state_12530__$1 = (function (){var statearr_12540 = state_12530;(statearr_12540[9] = inst_12523);
return statearr_12540;
})();var statearr_12541_12586 = state_12530__$1;(statearr_12541_12586[2] = null);
(statearr_12541_12586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 13))
{var inst_12485 = (state_12530[10]);var inst_12487 = cljs.core.chunked_seq_QMARK_.call(null,inst_12485);var state_12530__$1 = state_12530;if(inst_12487)
{var statearr_12542_12587 = state_12530__$1;(statearr_12542_12587[1] = 16);
} else
{var statearr_12543_12588 = state_12530__$1;(statearr_12543_12588[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 22))
{var inst_12515 = (state_12530[2]);var state_12530__$1 = state_12530;if(cljs.core.truth_(inst_12515))
{var statearr_12544_12589 = state_12530__$1;(statearr_12544_12589[1] = 23);
} else
{var statearr_12545_12590 = state_12530__$1;(statearr_12545_12590[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 6))
{var inst_12461 = (state_12530[8]);var inst_12511 = (state_12530[11]);var inst_12509 = (state_12530[7]);var inst_12509__$1 = topic_fn.call(null,inst_12461);var inst_12510 = cljs.core.deref.call(null,mults);var inst_12511__$1 = cljs.core.get.call(null,inst_12510,inst_12509__$1);var state_12530__$1 = (function (){var statearr_12546 = state_12530;(statearr_12546[11] = inst_12511__$1);
(statearr_12546[7] = inst_12509__$1);
return statearr_12546;
})();if(cljs.core.truth_(inst_12511__$1))
{var statearr_12547_12591 = state_12530__$1;(statearr_12547_12591[1] = 19);
} else
{var statearr_12548_12592 = state_12530__$1;(statearr_12548_12592[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 25))
{var inst_12520 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12549_12593 = state_12530__$1;(statearr_12549_12593[2] = inst_12520);
(statearr_12549_12593[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 17))
{var inst_12485 = (state_12530[10]);var inst_12494 = cljs.core.first.call(null,inst_12485);var inst_12495 = cljs.core.async.muxch_STAR_.call(null,inst_12494);var inst_12496 = cljs.core.async.close_BANG_.call(null,inst_12495);var inst_12497 = cljs.core.next.call(null,inst_12485);var inst_12471 = inst_12497;var inst_12472 = null;var inst_12473 = 0;var inst_12474 = 0;var state_12530__$1 = (function (){var statearr_12550 = state_12530;(statearr_12550[12] = inst_12474);
(statearr_12550[13] = inst_12471);
(statearr_12550[14] = inst_12496);
(statearr_12550[15] = inst_12473);
(statearr_12550[16] = inst_12472);
return statearr_12550;
})();var statearr_12551_12594 = state_12530__$1;(statearr_12551_12594[2] = null);
(statearr_12551_12594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 3))
{var inst_12528 = (state_12530[2]);var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12530__$1,inst_12528);
} else
{if((state_val_12531 === 12))
{var inst_12505 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12552_12595 = state_12530__$1;(statearr_12552_12595[2] = inst_12505);
(statearr_12552_12595[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 2))
{var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12530__$1,4,ch);
} else
{if((state_val_12531 === 23))
{var state_12530__$1 = state_12530;var statearr_12553_12596 = state_12530__$1;(statearr_12553_12596[2] = null);
(statearr_12553_12596[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 19))
{var inst_12461 = (state_12530[8]);var inst_12511 = (state_12530[11]);var inst_12513 = cljs.core.async.muxch_STAR_.call(null,inst_12511);var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12530__$1,22,inst_12513,inst_12461);
} else
{if((state_val_12531 === 11))
{var inst_12471 = (state_12530[13]);var inst_12485 = (state_12530[10]);var inst_12485__$1 = cljs.core.seq.call(null,inst_12471);var state_12530__$1 = (function (){var statearr_12554 = state_12530;(statearr_12554[10] = inst_12485__$1);
return statearr_12554;
})();if(inst_12485__$1)
{var statearr_12555_12597 = state_12530__$1;(statearr_12555_12597[1] = 13);
} else
{var statearr_12556_12598 = state_12530__$1;(statearr_12556_12598[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 9))
{var inst_12507 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12557_12599 = state_12530__$1;(statearr_12557_12599[2] = inst_12507);
(statearr_12557_12599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 5))
{var inst_12468 = cljs.core.deref.call(null,mults);var inst_12469 = cljs.core.vals.call(null,inst_12468);var inst_12470 = cljs.core.seq.call(null,inst_12469);var inst_12471 = inst_12470;var inst_12472 = null;var inst_12473 = 0;var inst_12474 = 0;var state_12530__$1 = (function (){var statearr_12558 = state_12530;(statearr_12558[12] = inst_12474);
(statearr_12558[13] = inst_12471);
(statearr_12558[15] = inst_12473);
(statearr_12558[16] = inst_12472);
return statearr_12558;
})();var statearr_12559_12600 = state_12530__$1;(statearr_12559_12600[2] = null);
(statearr_12559_12600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 14))
{var state_12530__$1 = state_12530;var statearr_12563_12601 = state_12530__$1;(statearr_12563_12601[2] = null);
(statearr_12563_12601[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 16))
{var inst_12485 = (state_12530[10]);var inst_12489 = cljs.core.chunk_first.call(null,inst_12485);var inst_12490 = cljs.core.chunk_rest.call(null,inst_12485);var inst_12491 = cljs.core.count.call(null,inst_12489);var inst_12471 = inst_12490;var inst_12472 = inst_12489;var inst_12473 = inst_12491;var inst_12474 = 0;var state_12530__$1 = (function (){var statearr_12564 = state_12530;(statearr_12564[12] = inst_12474);
(statearr_12564[13] = inst_12471);
(statearr_12564[15] = inst_12473);
(statearr_12564[16] = inst_12472);
return statearr_12564;
})();var statearr_12565_12602 = state_12530__$1;(statearr_12565_12602[2] = null);
(statearr_12565_12602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 10))
{var inst_12474 = (state_12530[12]);var inst_12471 = (state_12530[13]);var inst_12473 = (state_12530[15]);var inst_12472 = (state_12530[16]);var inst_12479 = cljs.core._nth.call(null,inst_12472,inst_12474);var inst_12480 = cljs.core.async.muxch_STAR_.call(null,inst_12479);var inst_12481 = cljs.core.async.close_BANG_.call(null,inst_12480);var inst_12482 = (inst_12474 + 1);var tmp12560 = inst_12471;var tmp12561 = inst_12473;var tmp12562 = inst_12472;var inst_12471__$1 = tmp12560;var inst_12472__$1 = tmp12562;var inst_12473__$1 = tmp12561;var inst_12474__$1 = inst_12482;var state_12530__$1 = (function (){var statearr_12566 = state_12530;(statearr_12566[12] = inst_12474__$1);
(statearr_12566[13] = inst_12471__$1);
(statearr_12566[15] = inst_12473__$1);
(statearr_12566[16] = inst_12472__$1);
(statearr_12566[17] = inst_12481);
return statearr_12566;
})();var statearr_12567_12603 = state_12530__$1;(statearr_12567_12603[2] = null);
(statearr_12567_12603[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 18))
{var inst_12500 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12568_12604 = state_12530__$1;(statearr_12568_12604[2] = inst_12500);
(statearr_12568_12604[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 8))
{var inst_12474 = (state_12530[12]);var inst_12473 = (state_12530[15]);var inst_12476 = (inst_12474 < inst_12473);var inst_12477 = inst_12476;var state_12530__$1 = state_12530;if(cljs.core.truth_(inst_12477))
{var statearr_12569_12605 = state_12530__$1;(statearr_12569_12605[1] = 10);
} else
{var statearr_12570_12606 = state_12530__$1;(statearr_12570_12606[1] = 11);
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
});})(c__5638__auto___12578,mults,ensure_mult,p))
;return ((function (switch__5623__auto__,c__5638__auto___12578,mults,ensure_mult,p){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12574[0] = state_machine__5624__auto__);
(statearr_12574[1] = 1);
return statearr_12574;
});
var state_machine__5624__auto____1 = (function (state_12530){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object))
{var ex__5627__auto__ = e12575;var statearr_12576_12607 = state_12530;(statearr_12576_12607[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12608 = state_12530;
state_12530 = G__12608;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12530){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12578,mults,ensure_mult,p))
})();var state__5640__auto__ = (function (){var statearr_12577 = f__5639__auto__.call(null);(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12578);
return statearr_12577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12578,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5638__auto___12745 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12715){var state_val_12716 = (state_12715[1]);if((state_val_12716 === 7))
{var state_12715__$1 = state_12715;var statearr_12717_12746 = state_12715__$1;(statearr_12717_12746[2] = null);
(statearr_12717_12746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 1))
{var state_12715__$1 = state_12715;var statearr_12718_12747 = state_12715__$1;(statearr_12718_12747[2] = null);
(statearr_12718_12747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 4))
{var inst_12679 = (state_12715[7]);var inst_12681 = (inst_12679 < cnt);var state_12715__$1 = state_12715;if(cljs.core.truth_(inst_12681))
{var statearr_12719_12748 = state_12715__$1;(statearr_12719_12748[1] = 6);
} else
{var statearr_12720_12749 = state_12715__$1;(statearr_12720_12749[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 15))
{var inst_12711 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12721_12750 = state_12715__$1;(statearr_12721_12750[2] = inst_12711);
(statearr_12721_12750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 13))
{var inst_12704 = cljs.core.async.close_BANG_.call(null,out);var state_12715__$1 = state_12715;var statearr_12722_12751 = state_12715__$1;(statearr_12722_12751[2] = inst_12704);
(statearr_12722_12751[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 6))
{var state_12715__$1 = state_12715;var statearr_12723_12752 = state_12715__$1;(statearr_12723_12752[2] = null);
(statearr_12723_12752[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 3))
{var inst_12713 = (state_12715[2]);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,inst_12713);
} else
{if((state_val_12716 === 12))
{var inst_12701 = (state_12715[8]);var inst_12701__$1 = (state_12715[2]);var inst_12702 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12701__$1);var state_12715__$1 = (function (){var statearr_12724 = state_12715;(statearr_12724[8] = inst_12701__$1);
return statearr_12724;
})();if(cljs.core.truth_(inst_12702))
{var statearr_12725_12753 = state_12715__$1;(statearr_12725_12753[1] = 13);
} else
{var statearr_12726_12754 = state_12715__$1;(statearr_12726_12754[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 2))
{var inst_12678 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12679 = 0;var state_12715__$1 = (function (){var statearr_12727 = state_12715;(statearr_12727[9] = inst_12678);
(statearr_12727[7] = inst_12679);
return statearr_12727;
})();var statearr_12728_12755 = state_12715__$1;(statearr_12728_12755[2] = null);
(statearr_12728_12755[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 11))
{var inst_12679 = (state_12715[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12715,10,Object,null,9);var inst_12688 = chs__$1.call(null,inst_12679);var inst_12689 = done.call(null,inst_12679);var inst_12690 = cljs.core.async.take_BANG_.call(null,inst_12688,inst_12689);var state_12715__$1 = state_12715;var statearr_12729_12756 = state_12715__$1;(statearr_12729_12756[2] = inst_12690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 9))
{var inst_12679 = (state_12715[7]);var inst_12692 = (state_12715[2]);var inst_12693 = (inst_12679 + 1);var inst_12679__$1 = inst_12693;var state_12715__$1 = (function (){var statearr_12730 = state_12715;(statearr_12730[7] = inst_12679__$1);
(statearr_12730[10] = inst_12692);
return statearr_12730;
})();var statearr_12731_12757 = state_12715__$1;(statearr_12731_12757[2] = null);
(statearr_12731_12757[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 5))
{var inst_12699 = (state_12715[2]);var state_12715__$1 = (function (){var statearr_12732 = state_12715;(statearr_12732[11] = inst_12699);
return statearr_12732;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12715__$1,12,dchan);
} else
{if((state_val_12716 === 14))
{var inst_12701 = (state_12715[8]);var inst_12706 = cljs.core.apply.call(null,f,inst_12701);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12715__$1,16,out,inst_12706);
} else
{if((state_val_12716 === 16))
{var inst_12708 = (state_12715[2]);var state_12715__$1 = (function (){var statearr_12733 = state_12715;(statearr_12733[12] = inst_12708);
return statearr_12733;
})();var statearr_12734_12758 = state_12715__$1;(statearr_12734_12758[2] = null);
(statearr_12734_12758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 10))
{var inst_12683 = (state_12715[2]);var inst_12684 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12715__$1 = (function (){var statearr_12735 = state_12715;(statearr_12735[13] = inst_12683);
return statearr_12735;
})();var statearr_12736_12759 = state_12715__$1;(statearr_12736_12759[2] = inst_12684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 8))
{var inst_12697 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12737_12760 = state_12715__$1;(statearr_12737_12760[2] = inst_12697);
(statearr_12737_12760[1] = 5);
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
});})(c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12741[0] = state_machine__5624__auto__);
(statearr_12741[1] = 1);
return statearr_12741;
});
var state_machine__5624__auto____1 = (function (state_12715){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12742){if((e12742 instanceof Object))
{var ex__5627__auto__ = e12742;var statearr_12743_12761 = state_12715;(statearr_12743_12761[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12762 = state_12715;
state_12715 = G__12762;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12744 = f__5639__auto__.call(null);(statearr_12744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12745);
return statearr_12744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12745,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12870,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12870,out){
return (function (state_12846){var state_val_12847 = (state_12846[1]);if((state_val_12847 === 7))
{var inst_12826 = (state_12846[7]);var inst_12825 = (state_12846[8]);var inst_12825__$1 = (state_12846[2]);var inst_12826__$1 = cljs.core.nth.call(null,inst_12825__$1,0,null);var inst_12827 = cljs.core.nth.call(null,inst_12825__$1,1,null);var inst_12828 = (inst_12826__$1 == null);var state_12846__$1 = (function (){var statearr_12848 = state_12846;(statearr_12848[9] = inst_12827);
(statearr_12848[7] = inst_12826__$1);
(statearr_12848[8] = inst_12825__$1);
return statearr_12848;
})();if(cljs.core.truth_(inst_12828))
{var statearr_12849_12871 = state_12846__$1;(statearr_12849_12871[1] = 8);
} else
{var statearr_12850_12872 = state_12846__$1;(statearr_12850_12872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 1))
{var inst_12817 = cljs.core.vec.call(null,chs);var inst_12818 = inst_12817;var state_12846__$1 = (function (){var statearr_12851 = state_12846;(statearr_12851[10] = inst_12818);
return statearr_12851;
})();var statearr_12852_12873 = state_12846__$1;(statearr_12852_12873[2] = null);
(statearr_12852_12873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 4))
{var inst_12818 = (state_12846[10]);var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12846__$1,7,inst_12818);
} else
{if((state_val_12847 === 6))
{var inst_12842 = (state_12846[2]);var state_12846__$1 = state_12846;var statearr_12853_12874 = state_12846__$1;(statearr_12853_12874[2] = inst_12842);
(statearr_12853_12874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 3))
{var inst_12844 = (state_12846[2]);var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12846__$1,inst_12844);
} else
{if((state_val_12847 === 2))
{var inst_12818 = (state_12846[10]);var inst_12820 = cljs.core.count.call(null,inst_12818);var inst_12821 = (inst_12820 > 0);var state_12846__$1 = state_12846;if(cljs.core.truth_(inst_12821))
{var statearr_12855_12875 = state_12846__$1;(statearr_12855_12875[1] = 4);
} else
{var statearr_12856_12876 = state_12846__$1;(statearr_12856_12876[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 11))
{var inst_12818 = (state_12846[10]);var inst_12835 = (state_12846[2]);var tmp12854 = inst_12818;var inst_12818__$1 = tmp12854;var state_12846__$1 = (function (){var statearr_12857 = state_12846;(statearr_12857[10] = inst_12818__$1);
(statearr_12857[11] = inst_12835);
return statearr_12857;
})();var statearr_12858_12877 = state_12846__$1;(statearr_12858_12877[2] = null);
(statearr_12858_12877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 9))
{var inst_12826 = (state_12846[7]);var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12846__$1,11,out,inst_12826);
} else
{if((state_val_12847 === 5))
{var inst_12840 = cljs.core.async.close_BANG_.call(null,out);var state_12846__$1 = state_12846;var statearr_12859_12878 = state_12846__$1;(statearr_12859_12878[2] = inst_12840);
(statearr_12859_12878[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 10))
{var inst_12838 = (state_12846[2]);var state_12846__$1 = state_12846;var statearr_12860_12879 = state_12846__$1;(statearr_12860_12879[2] = inst_12838);
(statearr_12860_12879[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12847 === 8))
{var inst_12827 = (state_12846[9]);var inst_12818 = (state_12846[10]);var inst_12826 = (state_12846[7]);var inst_12825 = (state_12846[8]);var inst_12830 = (function (){var c = inst_12827;var v = inst_12826;var vec__12823 = inst_12825;var cs = inst_12818;return ((function (c,v,vec__12823,cs,inst_12827,inst_12818,inst_12826,inst_12825,state_val_12847,c__5638__auto___12870,out){
return (function (p1__12763_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12763_SHARP_);
});
;})(c,v,vec__12823,cs,inst_12827,inst_12818,inst_12826,inst_12825,state_val_12847,c__5638__auto___12870,out))
})();var inst_12831 = cljs.core.filterv.call(null,inst_12830,inst_12818);var inst_12818__$1 = inst_12831;var state_12846__$1 = (function (){var statearr_12861 = state_12846;(statearr_12861[10] = inst_12818__$1);
return statearr_12861;
})();var statearr_12862_12880 = state_12846__$1;(statearr_12862_12880[2] = null);
(statearr_12862_12880[1] = 2);
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
});})(c__5638__auto___12870,out))
;return ((function (switch__5623__auto__,c__5638__auto___12870,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12866 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12866[0] = state_machine__5624__auto__);
(statearr_12866[1] = 1);
return statearr_12866;
});
var state_machine__5624__auto____1 = (function (state_12846){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12867){if((e12867 instanceof Object))
{var ex__5627__auto__ = e12867;var statearr_12868_12881 = state_12846;(statearr_12868_12881[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12882 = state_12846;
state_12846 = G__12882;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12846){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12870,out))
})();var state__5640__auto__ = (function (){var statearr_12869 = f__5639__auto__.call(null);(statearr_12869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12870);
return statearr_12869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12870,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12975,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12975,out){
return (function (state_12952){var state_val_12953 = (state_12952[1]);if((state_val_12953 === 7))
{var inst_12934 = (state_12952[7]);var inst_12934__$1 = (state_12952[2]);var inst_12935 = (inst_12934__$1 == null);var inst_12936 = cljs.core.not.call(null,inst_12935);var state_12952__$1 = (function (){var statearr_12954 = state_12952;(statearr_12954[7] = inst_12934__$1);
return statearr_12954;
})();if(inst_12936)
{var statearr_12955_12976 = state_12952__$1;(statearr_12955_12976[1] = 8);
} else
{var statearr_12956_12977 = state_12952__$1;(statearr_12956_12977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 1))
{var inst_12929 = 0;var state_12952__$1 = (function (){var statearr_12957 = state_12952;(statearr_12957[8] = inst_12929);
return statearr_12957;
})();var statearr_12958_12978 = state_12952__$1;(statearr_12958_12978[2] = null);
(statearr_12958_12978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 4))
{var state_12952__$1 = state_12952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12952__$1,7,ch);
} else
{if((state_val_12953 === 6))
{var inst_12947 = (state_12952[2]);var state_12952__$1 = state_12952;var statearr_12959_12979 = state_12952__$1;(statearr_12959_12979[2] = inst_12947);
(statearr_12959_12979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 3))
{var inst_12949 = (state_12952[2]);var inst_12950 = cljs.core.async.close_BANG_.call(null,out);var state_12952__$1 = (function (){var statearr_12960 = state_12952;(statearr_12960[9] = inst_12949);
return statearr_12960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12952__$1,inst_12950);
} else
{if((state_val_12953 === 2))
{var inst_12929 = (state_12952[8]);var inst_12931 = (inst_12929 < n);var state_12952__$1 = state_12952;if(cljs.core.truth_(inst_12931))
{var statearr_12961_12980 = state_12952__$1;(statearr_12961_12980[1] = 4);
} else
{var statearr_12962_12981 = state_12952__$1;(statearr_12962_12981[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 11))
{var inst_12929 = (state_12952[8]);var inst_12939 = (state_12952[2]);var inst_12940 = (inst_12929 + 1);var inst_12929__$1 = inst_12940;var state_12952__$1 = (function (){var statearr_12963 = state_12952;(statearr_12963[8] = inst_12929__$1);
(statearr_12963[10] = inst_12939);
return statearr_12963;
})();var statearr_12964_12982 = state_12952__$1;(statearr_12964_12982[2] = null);
(statearr_12964_12982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 9))
{var state_12952__$1 = state_12952;var statearr_12965_12983 = state_12952__$1;(statearr_12965_12983[2] = null);
(statearr_12965_12983[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 5))
{var state_12952__$1 = state_12952;var statearr_12966_12984 = state_12952__$1;(statearr_12966_12984[2] = null);
(statearr_12966_12984[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 10))
{var inst_12944 = (state_12952[2]);var state_12952__$1 = state_12952;var statearr_12967_12985 = state_12952__$1;(statearr_12967_12985[2] = inst_12944);
(statearr_12967_12985[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 8))
{var inst_12934 = (state_12952[7]);var state_12952__$1 = state_12952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12952__$1,11,out,inst_12934);
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
});})(c__5638__auto___12975,out))
;return ((function (switch__5623__auto__,c__5638__auto___12975,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12971 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12971[0] = state_machine__5624__auto__);
(statearr_12971[1] = 1);
return statearr_12971;
});
var state_machine__5624__auto____1 = (function (state_12952){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12952);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12972){if((e12972 instanceof Object))
{var ex__5627__auto__ = e12972;var statearr_12973_12986 = state_12952;(statearr_12973_12986[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12952);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12987 = state_12952;
state_12952 = G__12987;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12952){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12975,out))
})();var state__5640__auto__ = (function (){var statearr_12974 = f__5639__auto__.call(null);(statearr_12974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12975);
return statearr_12974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12975,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13084,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13084,out){
return (function (state_13059){var state_val_13060 = (state_13059[1]);if((state_val_13060 === 7))
{var inst_13054 = (state_13059[2]);var state_13059__$1 = state_13059;var statearr_13061_13085 = state_13059__$1;(statearr_13061_13085[2] = inst_13054);
(statearr_13061_13085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 1))
{var inst_13036 = null;var state_13059__$1 = (function (){var statearr_13062 = state_13059;(statearr_13062[7] = inst_13036);
return statearr_13062;
})();var statearr_13063_13086 = state_13059__$1;(statearr_13063_13086[2] = null);
(statearr_13063_13086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 4))
{var inst_13039 = (state_13059[8]);var inst_13039__$1 = (state_13059[2]);var inst_13040 = (inst_13039__$1 == null);var inst_13041 = cljs.core.not.call(null,inst_13040);var state_13059__$1 = (function (){var statearr_13064 = state_13059;(statearr_13064[8] = inst_13039__$1);
return statearr_13064;
})();if(inst_13041)
{var statearr_13065_13087 = state_13059__$1;(statearr_13065_13087[1] = 5);
} else
{var statearr_13066_13088 = state_13059__$1;(statearr_13066_13088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 6))
{var state_13059__$1 = state_13059;var statearr_13067_13089 = state_13059__$1;(statearr_13067_13089[2] = null);
(statearr_13067_13089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 3))
{var inst_13056 = (state_13059[2]);var inst_13057 = cljs.core.async.close_BANG_.call(null,out);var state_13059__$1 = (function (){var statearr_13068 = state_13059;(statearr_13068[9] = inst_13056);
return statearr_13068;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13059__$1,inst_13057);
} else
{if((state_val_13060 === 2))
{var state_13059__$1 = state_13059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13059__$1,4,ch);
} else
{if((state_val_13060 === 11))
{var inst_13039 = (state_13059[8]);var inst_13048 = (state_13059[2]);var inst_13036 = inst_13039;var state_13059__$1 = (function (){var statearr_13069 = state_13059;(statearr_13069[10] = inst_13048);
(statearr_13069[7] = inst_13036);
return statearr_13069;
})();var statearr_13070_13090 = state_13059__$1;(statearr_13070_13090[2] = null);
(statearr_13070_13090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 9))
{var inst_13039 = (state_13059[8]);var state_13059__$1 = state_13059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13059__$1,11,out,inst_13039);
} else
{if((state_val_13060 === 5))
{var inst_13036 = (state_13059[7]);var inst_13039 = (state_13059[8]);var inst_13043 = cljs.core._EQ_.call(null,inst_13039,inst_13036);var state_13059__$1 = state_13059;if(inst_13043)
{var statearr_13072_13091 = state_13059__$1;(statearr_13072_13091[1] = 8);
} else
{var statearr_13073_13092 = state_13059__$1;(statearr_13073_13092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 10))
{var inst_13051 = (state_13059[2]);var state_13059__$1 = state_13059;var statearr_13074_13093 = state_13059__$1;(statearr_13074_13093[2] = inst_13051);
(statearr_13074_13093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13060 === 8))
{var inst_13036 = (state_13059[7]);var tmp13071 = inst_13036;var inst_13036__$1 = tmp13071;var state_13059__$1 = (function (){var statearr_13075 = state_13059;(statearr_13075[7] = inst_13036__$1);
return statearr_13075;
})();var statearr_13076_13094 = state_13059__$1;(statearr_13076_13094[2] = null);
(statearr_13076_13094[1] = 2);
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
});})(c__5638__auto___13084,out))
;return ((function (switch__5623__auto__,c__5638__auto___13084,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13080 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13080[0] = state_machine__5624__auto__);
(statearr_13080[1] = 1);
return statearr_13080;
});
var state_machine__5624__auto____1 = (function (state_13059){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13059);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13081){if((e13081 instanceof Object))
{var ex__5627__auto__ = e13081;var statearr_13082_13095 = state_13059;(statearr_13082_13095[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13096 = state_13059;
state_13059 = G__13096;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13059){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13084,out))
})();var state__5640__auto__ = (function (){var statearr_13083 = f__5639__auto__.call(null);(statearr_13083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13084);
return statearr_13083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13084,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13231,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13231,out){
return (function (state_13201){var state_val_13202 = (state_13201[1]);if((state_val_13202 === 7))
{var inst_13197 = (state_13201[2]);var state_13201__$1 = state_13201;var statearr_13203_13232 = state_13201__$1;(statearr_13203_13232[2] = inst_13197);
(statearr_13203_13232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 1))
{var inst_13164 = (new Array(n));var inst_13165 = inst_13164;var inst_13166 = 0;var state_13201__$1 = (function (){var statearr_13204 = state_13201;(statearr_13204[7] = inst_13166);
(statearr_13204[8] = inst_13165);
return statearr_13204;
})();var statearr_13205_13233 = state_13201__$1;(statearr_13205_13233[2] = null);
(statearr_13205_13233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 4))
{var inst_13169 = (state_13201[9]);var inst_13169__$1 = (state_13201[2]);var inst_13170 = (inst_13169__$1 == null);var inst_13171 = cljs.core.not.call(null,inst_13170);var state_13201__$1 = (function (){var statearr_13206 = state_13201;(statearr_13206[9] = inst_13169__$1);
return statearr_13206;
})();if(inst_13171)
{var statearr_13207_13234 = state_13201__$1;(statearr_13207_13234[1] = 5);
} else
{var statearr_13208_13235 = state_13201__$1;(statearr_13208_13235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 15))
{var inst_13191 = (state_13201[2]);var state_13201__$1 = state_13201;var statearr_13209_13236 = state_13201__$1;(statearr_13209_13236[2] = inst_13191);
(statearr_13209_13236[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 13))
{var state_13201__$1 = state_13201;var statearr_13210_13237 = state_13201__$1;(statearr_13210_13237[2] = null);
(statearr_13210_13237[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 6))
{var inst_13166 = (state_13201[7]);var inst_13187 = (inst_13166 > 0);var state_13201__$1 = state_13201;if(cljs.core.truth_(inst_13187))
{var statearr_13211_13238 = state_13201__$1;(statearr_13211_13238[1] = 12);
} else
{var statearr_13212_13239 = state_13201__$1;(statearr_13212_13239[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 3))
{var inst_13199 = (state_13201[2]);var state_13201__$1 = state_13201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13201__$1,inst_13199);
} else
{if((state_val_13202 === 12))
{var inst_13165 = (state_13201[8]);var inst_13189 = cljs.core.vec.call(null,inst_13165);var state_13201__$1 = state_13201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13201__$1,15,out,inst_13189);
} else
{if((state_val_13202 === 2))
{var state_13201__$1 = state_13201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13201__$1,4,ch);
} else
{if((state_val_13202 === 11))
{var inst_13181 = (state_13201[2]);var inst_13182 = (new Array(n));var inst_13165 = inst_13182;var inst_13166 = 0;var state_13201__$1 = (function (){var statearr_13213 = state_13201;(statearr_13213[7] = inst_13166);
(statearr_13213[8] = inst_13165);
(statearr_13213[10] = inst_13181);
return statearr_13213;
})();var statearr_13214_13240 = state_13201__$1;(statearr_13214_13240[2] = null);
(statearr_13214_13240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 9))
{var inst_13165 = (state_13201[8]);var inst_13179 = cljs.core.vec.call(null,inst_13165);var state_13201__$1 = state_13201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13201__$1,11,out,inst_13179);
} else
{if((state_val_13202 === 5))
{var inst_13166 = (state_13201[7]);var inst_13165 = (state_13201[8]);var inst_13174 = (state_13201[11]);var inst_13169 = (state_13201[9]);var inst_13173 = (inst_13165[inst_13166] = inst_13169);var inst_13174__$1 = (inst_13166 + 1);var inst_13175 = (inst_13174__$1 < n);var state_13201__$1 = (function (){var statearr_13215 = state_13201;(statearr_13215[11] = inst_13174__$1);
(statearr_13215[12] = inst_13173);
return statearr_13215;
})();if(cljs.core.truth_(inst_13175))
{var statearr_13216_13241 = state_13201__$1;(statearr_13216_13241[1] = 8);
} else
{var statearr_13217_13242 = state_13201__$1;(statearr_13217_13242[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 14))
{var inst_13194 = (state_13201[2]);var inst_13195 = cljs.core.async.close_BANG_.call(null,out);var state_13201__$1 = (function (){var statearr_13219 = state_13201;(statearr_13219[13] = inst_13194);
return statearr_13219;
})();var statearr_13220_13243 = state_13201__$1;(statearr_13220_13243[2] = inst_13195);
(statearr_13220_13243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 10))
{var inst_13185 = (state_13201[2]);var state_13201__$1 = state_13201;var statearr_13221_13244 = state_13201__$1;(statearr_13221_13244[2] = inst_13185);
(statearr_13221_13244[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13202 === 8))
{var inst_13165 = (state_13201[8]);var inst_13174 = (state_13201[11]);var tmp13218 = inst_13165;var inst_13165__$1 = tmp13218;var inst_13166 = inst_13174;var state_13201__$1 = (function (){var statearr_13222 = state_13201;(statearr_13222[7] = inst_13166);
(statearr_13222[8] = inst_13165__$1);
return statearr_13222;
})();var statearr_13223_13245 = state_13201__$1;(statearr_13223_13245[2] = null);
(statearr_13223_13245[1] = 2);
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
});})(c__5638__auto___13231,out))
;return ((function (switch__5623__auto__,c__5638__auto___13231,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13227[0] = state_machine__5624__auto__);
(statearr_13227[1] = 1);
return statearr_13227;
});
var state_machine__5624__auto____1 = (function (state_13201){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13201);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13228){if((e13228 instanceof Object))
{var ex__5627__auto__ = e13228;var statearr_13229_13246 = state_13201;(statearr_13229_13246[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13247 = state_13201;
state_13201 = G__13247;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13201){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13231,out))
})();var state__5640__auto__ = (function (){var statearr_13230 = f__5639__auto__.call(null);(statearr_13230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13231);
return statearr_13230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13231,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13390,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13390,out){
return (function (state_13360){var state_val_13361 = (state_13360[1]);if((state_val_13361 === 7))
{var inst_13356 = (state_13360[2]);var state_13360__$1 = state_13360;var statearr_13362_13391 = state_13360__$1;(statearr_13362_13391[2] = inst_13356);
(statearr_13362_13391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 1))
{var inst_13319 = [];var inst_13320 = inst_13319;var inst_13321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13360__$1 = (function (){var statearr_13363 = state_13360;(statearr_13363[7] = inst_13320);
(statearr_13363[8] = inst_13321);
return statearr_13363;
})();var statearr_13364_13392 = state_13360__$1;(statearr_13364_13392[2] = null);
(statearr_13364_13392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 4))
{var inst_13324 = (state_13360[9]);var inst_13324__$1 = (state_13360[2]);var inst_13325 = (inst_13324__$1 == null);var inst_13326 = cljs.core.not.call(null,inst_13325);var state_13360__$1 = (function (){var statearr_13365 = state_13360;(statearr_13365[9] = inst_13324__$1);
return statearr_13365;
})();if(inst_13326)
{var statearr_13366_13393 = state_13360__$1;(statearr_13366_13393[1] = 5);
} else
{var statearr_13367_13394 = state_13360__$1;(statearr_13367_13394[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 15))
{var inst_13350 = (state_13360[2]);var state_13360__$1 = state_13360;var statearr_13368_13395 = state_13360__$1;(statearr_13368_13395[2] = inst_13350);
(statearr_13368_13395[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 13))
{var state_13360__$1 = state_13360;var statearr_13369_13396 = state_13360__$1;(statearr_13369_13396[2] = null);
(statearr_13369_13396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 6))
{var inst_13320 = (state_13360[7]);var inst_13345 = inst_13320.length;var inst_13346 = (inst_13345 > 0);var state_13360__$1 = state_13360;if(cljs.core.truth_(inst_13346))
{var statearr_13370_13397 = state_13360__$1;(statearr_13370_13397[1] = 12);
} else
{var statearr_13371_13398 = state_13360__$1;(statearr_13371_13398[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 3))
{var inst_13358 = (state_13360[2]);var state_13360__$1 = state_13360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13360__$1,inst_13358);
} else
{if((state_val_13361 === 12))
{var inst_13320 = (state_13360[7]);var inst_13348 = cljs.core.vec.call(null,inst_13320);var state_13360__$1 = state_13360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13360__$1,15,out,inst_13348);
} else
{if((state_val_13361 === 2))
{var state_13360__$1 = state_13360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13360__$1,4,ch);
} else
{if((state_val_13361 === 11))
{var inst_13328 = (state_13360[10]);var inst_13324 = (state_13360[9]);var inst_13338 = (state_13360[2]);var inst_13339 = [];var inst_13340 = inst_13339.push(inst_13324);var inst_13320 = inst_13339;var inst_13321 = inst_13328;var state_13360__$1 = (function (){var statearr_13372 = state_13360;(statearr_13372[11] = inst_13340);
(statearr_13372[12] = inst_13338);
(statearr_13372[7] = inst_13320);
(statearr_13372[8] = inst_13321);
return statearr_13372;
})();var statearr_13373_13399 = state_13360__$1;(statearr_13373_13399[2] = null);
(statearr_13373_13399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 9))
{var inst_13320 = (state_13360[7]);var inst_13336 = cljs.core.vec.call(null,inst_13320);var state_13360__$1 = state_13360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13360__$1,11,out,inst_13336);
} else
{if((state_val_13361 === 5))
{var inst_13328 = (state_13360[10]);var inst_13321 = (state_13360[8]);var inst_13324 = (state_13360[9]);var inst_13328__$1 = f.call(null,inst_13324);var inst_13329 = cljs.core._EQ_.call(null,inst_13328__$1,inst_13321);var inst_13330 = cljs.core.keyword_identical_QMARK_.call(null,inst_13321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13331 = (inst_13329) || (inst_13330);var state_13360__$1 = (function (){var statearr_13374 = state_13360;(statearr_13374[10] = inst_13328__$1);
return statearr_13374;
})();if(cljs.core.truth_(inst_13331))
{var statearr_13375_13400 = state_13360__$1;(statearr_13375_13400[1] = 8);
} else
{var statearr_13376_13401 = state_13360__$1;(statearr_13376_13401[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 14))
{var inst_13353 = (state_13360[2]);var inst_13354 = cljs.core.async.close_BANG_.call(null,out);var state_13360__$1 = (function (){var statearr_13378 = state_13360;(statearr_13378[13] = inst_13353);
return statearr_13378;
})();var statearr_13379_13402 = state_13360__$1;(statearr_13379_13402[2] = inst_13354);
(statearr_13379_13402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 10))
{var inst_13343 = (state_13360[2]);var state_13360__$1 = state_13360;var statearr_13380_13403 = state_13360__$1;(statearr_13380_13403[2] = inst_13343);
(statearr_13380_13403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13361 === 8))
{var inst_13320 = (state_13360[7]);var inst_13328 = (state_13360[10]);var inst_13324 = (state_13360[9]);var inst_13333 = inst_13320.push(inst_13324);var tmp13377 = inst_13320;var inst_13320__$1 = tmp13377;var inst_13321 = inst_13328;var state_13360__$1 = (function (){var statearr_13381 = state_13360;(statearr_13381[7] = inst_13320__$1);
(statearr_13381[14] = inst_13333);
(statearr_13381[8] = inst_13321);
return statearr_13381;
})();var statearr_13382_13404 = state_13360__$1;(statearr_13382_13404[2] = null);
(statearr_13382_13404[1] = 2);
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
});})(c__5638__auto___13390,out))
;return ((function (switch__5623__auto__,c__5638__auto___13390,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13386[0] = state_machine__5624__auto__);
(statearr_13386[1] = 1);
return statearr_13386;
});
var state_machine__5624__auto____1 = (function (state_13360){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13387){if((e13387 instanceof Object))
{var ex__5627__auto__ = e13387;var statearr_13388_13405 = state_13360;(statearr_13388_13405[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13406 = state_13360;
state_13360 = G__13406;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13360){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13390,out))
})();var state__5640__auto__ = (function (){var statearr_13389 = f__5639__auto__.call(null);(statearr_13389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13390);
return statearr_13389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13390,out))
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