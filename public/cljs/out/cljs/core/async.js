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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10678 = (function (f,fn_handler,meta10679){
this.f = f;
this.fn_handler = fn_handler;
this.meta10679 = meta10679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10678.cljs$lang$type = true;
cljs.core.async.t10678.cljs$lang$ctorStr = "cljs.core.async/t10678";
cljs.core.async.t10678.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10678");
});
cljs.core.async.t10678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10680){var self__ = this;
var _10680__$1 = this;return self__.meta10679;
});
cljs.core.async.t10678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10680,meta10679__$1){var self__ = this;
var _10680__$1 = this;return (new cljs.core.async.t10678(self__.f,self__.fn_handler,meta10679__$1));
});
cljs.core.async.__GT_t10678 = (function __GT_t10678(f__$1,fn_handler__$1,meta10679){return (new cljs.core.async.t10678(f__$1,fn_handler__$1,meta10679));
});
}
return (new cljs.core.async.t10678(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10682 = buff;if(G__10682)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10682.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10682);
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
{var val_10683 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10683);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10683,ret){
return (function (){return fn1.call(null,val_10683);
});})(val_10683,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10684 = n;var x_10685 = 0;while(true){
if((x_10685 < n__4329__auto___10684))
{(a[x_10685] = 0);
{
var G__10686 = (x_10685 + 1);
x_10685 = G__10686;
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
var G__10687 = (i + 1);
i = G__10687;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10691 = (function (flag,alt_flag,meta10692){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10692 = meta10692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10691.cljs$lang$type = true;
cljs.core.async.t10691.cljs$lang$ctorStr = "cljs.core.async/t10691";
cljs.core.async.t10691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10691");
});})(flag))
;
cljs.core.async.t10691.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10693){var self__ = this;
var _10693__$1 = this;return self__.meta10692;
});})(flag))
;
cljs.core.async.t10691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10693,meta10692__$1){var self__ = this;
var _10693__$1 = this;return (new cljs.core.async.t10691(self__.flag,self__.alt_flag,meta10692__$1));
});})(flag))
;
cljs.core.async.__GT_t10691 = ((function (flag){
return (function __GT_t10691(flag__$1,alt_flag__$1,meta10692){return (new cljs.core.async.t10691(flag__$1,alt_flag__$1,meta10692));
});})(flag))
;
}
return (new cljs.core.async.t10691(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10697 = (function (cb,flag,alt_handler,meta10698){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10698 = meta10698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10697.cljs$lang$type = true;
cljs.core.async.t10697.cljs$lang$ctorStr = "cljs.core.async/t10697";
cljs.core.async.t10697.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10697");
});
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10699){var self__ = this;
var _10699__$1 = this;return self__.meta10698;
});
cljs.core.async.t10697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10699,meta10698__$1){var self__ = this;
var _10699__$1 = this;return (new cljs.core.async.t10697(self__.cb,self__.flag,self__.alt_handler,meta10698__$1));
});
cljs.core.async.__GT_t10697 = (function __GT_t10697(cb__$1,flag__$1,alt_handler__$1,meta10698){return (new cljs.core.async.t10697(cb__$1,flag__$1,alt_handler__$1,meta10698));
});
}
return (new cljs.core.async.t10697(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10700_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10701_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10701_SHARP_,port], null));
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
var G__10702 = (i + 1);
i = G__10702;
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
var alts_BANG___delegate = function (ports,p__10703){var map__10705 = p__10703;var map__10705__$1 = ((cljs.core.seq_QMARK_.call(null,map__10705))?cljs.core.apply.call(null,cljs.core.hash_map,map__10705):map__10705);var opts = map__10705__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10703 = null;if (arguments.length > 1) {
  p__10703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10703);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10706){
var ports = cljs.core.first(arglist__10706);
var p__10703 = cljs.core.rest(arglist__10706);
return alts_BANG___delegate(ports,p__10703);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10714 = (function (ch,f,map_LT_,meta10715){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10715 = meta10715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10714.cljs$lang$type = true;
cljs.core.async.t10714.cljs$lang$ctorStr = "cljs.core.async/t10714";
cljs.core.async.t10714.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10714");
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10717 = (function (fn1,_,meta10715,ch,f,map_LT_,meta10718){
this.fn1 = fn1;
this._ = _;
this.meta10715 = meta10715;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10718 = meta10718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10717.cljs$lang$type = true;
cljs.core.async.t10717.cljs$lang$ctorStr = "cljs.core.async/t10717";
cljs.core.async.t10717.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10717");
});})(___$1))
;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10707_SHARP_){return f1.call(null,(((p1__10707_SHARP_ == null))?null:self__.f.call(null,p1__10707_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10719){var self__ = this;
var _10719__$1 = this;return self__.meta10718;
});})(___$1))
;
cljs.core.async.t10717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10719,meta10718__$1){var self__ = this;
var _10719__$1 = this;return (new cljs.core.async.t10717(self__.fn1,self__._,self__.meta10715,self__.ch,self__.f,self__.map_LT_,meta10718__$1));
});})(___$1))
;
cljs.core.async.__GT_t10717 = ((function (___$1){
return (function __GT_t10717(fn1__$1,___$2,meta10715__$1,ch__$2,f__$2,map_LT___$2,meta10718){return (new cljs.core.async.t10717(fn1__$1,___$2,meta10715__$1,ch__$2,f__$2,map_LT___$2,meta10718));
});})(___$1))
;
}
return (new cljs.core.async.t10717(fn1,___$1,self__.meta10715,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10716){var self__ = this;
var _10716__$1 = this;return self__.meta10715;
});
cljs.core.async.t10714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10716,meta10715__$1){var self__ = this;
var _10716__$1 = this;return (new cljs.core.async.t10714(self__.ch,self__.f,self__.map_LT_,meta10715__$1));
});
cljs.core.async.__GT_t10714 = (function __GT_t10714(ch__$1,f__$1,map_LT___$1,meta10715){return (new cljs.core.async.t10714(ch__$1,f__$1,map_LT___$1,meta10715));
});
}
return (new cljs.core.async.t10714(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10723 = (function (ch,f,map_GT_,meta10724){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10724 = meta10724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10723.cljs$lang$type = true;
cljs.core.async.t10723.cljs$lang$ctorStr = "cljs.core.async/t10723";
cljs.core.async.t10723.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10723");
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10725){var self__ = this;
var _10725__$1 = this;return self__.meta10724;
});
cljs.core.async.t10723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10725,meta10724__$1){var self__ = this;
var _10725__$1 = this;return (new cljs.core.async.t10723(self__.ch,self__.f,self__.map_GT_,meta10724__$1));
});
cljs.core.async.__GT_t10723 = (function __GT_t10723(ch__$1,f__$1,map_GT___$1,meta10724){return (new cljs.core.async.t10723(ch__$1,f__$1,map_GT___$1,meta10724));
});
}
return (new cljs.core.async.t10723(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10729 = (function (ch,p,filter_GT_,meta10730){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10730 = meta10730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10729.cljs$lang$type = true;
cljs.core.async.t10729.cljs$lang$ctorStr = "cljs.core.async/t10729";
cljs.core.async.t10729.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10729");
});
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10731){var self__ = this;
var _10731__$1 = this;return self__.meta10730;
});
cljs.core.async.t10729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10731,meta10730__$1){var self__ = this;
var _10731__$1 = this;return (new cljs.core.async.t10729(self__.ch,self__.p,self__.filter_GT_,meta10730__$1));
});
cljs.core.async.__GT_t10729 = (function __GT_t10729(ch__$1,p__$1,filter_GT___$1,meta10730){return (new cljs.core.async.t10729(ch__$1,p__$1,filter_GT___$1,meta10730));
});
}
return (new cljs.core.async.t10729(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___10814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10814,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10814,out){
return (function (state_10793){var state_val_10794 = (state_10793[1]);if((state_val_10794 === 7))
{var inst_10789 = (state_10793[2]);var state_10793__$1 = state_10793;var statearr_10795_10815 = state_10793__$1;(statearr_10795_10815[2] = inst_10789);
(statearr_10795_10815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 1))
{var state_10793__$1 = state_10793;var statearr_10796_10816 = state_10793__$1;(statearr_10796_10816[2] = null);
(statearr_10796_10816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 4))
{var inst_10775 = (state_10793[7]);var inst_10775__$1 = (state_10793[2]);var inst_10776 = (inst_10775__$1 == null);var state_10793__$1 = (function (){var statearr_10797 = state_10793;(statearr_10797[7] = inst_10775__$1);
return statearr_10797;
})();if(cljs.core.truth_(inst_10776))
{var statearr_10798_10817 = state_10793__$1;(statearr_10798_10817[1] = 5);
} else
{var statearr_10799_10818 = state_10793__$1;(statearr_10799_10818[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 6))
{var inst_10775 = (state_10793[7]);var inst_10780 = p.call(null,inst_10775);var state_10793__$1 = state_10793;if(cljs.core.truth_(inst_10780))
{var statearr_10800_10819 = state_10793__$1;(statearr_10800_10819[1] = 8);
} else
{var statearr_10801_10820 = state_10793__$1;(statearr_10801_10820[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 3))
{var inst_10791 = (state_10793[2]);var state_10793__$1 = state_10793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10793__$1,inst_10791);
} else
{if((state_val_10794 === 2))
{var state_10793__$1 = state_10793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10793__$1,4,ch);
} else
{if((state_val_10794 === 11))
{var inst_10783 = (state_10793[2]);var state_10793__$1 = state_10793;var statearr_10802_10821 = state_10793__$1;(statearr_10802_10821[2] = inst_10783);
(statearr_10802_10821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 9))
{var state_10793__$1 = state_10793;var statearr_10803_10822 = state_10793__$1;(statearr_10803_10822[2] = null);
(statearr_10803_10822[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 5))
{var inst_10778 = cljs.core.async.close_BANG_.call(null,out);var state_10793__$1 = state_10793;var statearr_10804_10823 = state_10793__$1;(statearr_10804_10823[2] = inst_10778);
(statearr_10804_10823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 10))
{var inst_10786 = (state_10793[2]);var state_10793__$1 = (function (){var statearr_10805 = state_10793;(statearr_10805[8] = inst_10786);
return statearr_10805;
})();var statearr_10806_10824 = state_10793__$1;(statearr_10806_10824[2] = null);
(statearr_10806_10824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10794 === 8))
{var inst_10775 = (state_10793[7]);var state_10793__$1 = state_10793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10793__$1,11,out,inst_10775);
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
});})(c__5638__auto___10814,out))
;return ((function (switch__5623__auto__,c__5638__auto___10814,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10810 = [null,null,null,null,null,null,null,null,null];(statearr_10810[0] = state_machine__5624__auto__);
(statearr_10810[1] = 1);
return statearr_10810;
});
var state_machine__5624__auto____1 = (function (state_10793){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10811){if((e10811 instanceof Object))
{var ex__5627__auto__ = e10811;var statearr_10812_10825 = state_10793;(statearr_10812_10825[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10826 = state_10793;
state_10793 = G__10826;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10793){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10814,out))
})();var state__5640__auto__ = (function (){var statearr_10813 = f__5639__auto__.call(null);(statearr_10813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10814);
return statearr_10813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10814,out))
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
return (function (state_10992){var state_val_10993 = (state_10992[1]);if((state_val_10993 === 7))
{var inst_10988 = (state_10992[2]);var state_10992__$1 = state_10992;var statearr_10994_11035 = state_10992__$1;(statearr_10994_11035[2] = inst_10988);
(statearr_10994_11035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 20))
{var inst_10958 = (state_10992[7]);var inst_10969 = (state_10992[2]);var inst_10970 = cljs.core.next.call(null,inst_10958);var inst_10944 = inst_10970;var inst_10945 = null;var inst_10946 = 0;var inst_10947 = 0;var state_10992__$1 = (function (){var statearr_10995 = state_10992;(statearr_10995[8] = inst_10945);
(statearr_10995[9] = inst_10946);
(statearr_10995[10] = inst_10944);
(statearr_10995[11] = inst_10947);
(statearr_10995[12] = inst_10969);
return statearr_10995;
})();var statearr_10996_11036 = state_10992__$1;(statearr_10996_11036[2] = null);
(statearr_10996_11036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 1))
{var state_10992__$1 = state_10992;var statearr_10997_11037 = state_10992__$1;(statearr_10997_11037[2] = null);
(statearr_10997_11037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 4))
{var inst_10933 = (state_10992[13]);var inst_10933__$1 = (state_10992[2]);var inst_10934 = (inst_10933__$1 == null);var state_10992__$1 = (function (){var statearr_10998 = state_10992;(statearr_10998[13] = inst_10933__$1);
return statearr_10998;
})();if(cljs.core.truth_(inst_10934))
{var statearr_10999_11038 = state_10992__$1;(statearr_10999_11038[1] = 5);
} else
{var statearr_11000_11039 = state_10992__$1;(statearr_11000_11039[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 15))
{var state_10992__$1 = state_10992;var statearr_11004_11040 = state_10992__$1;(statearr_11004_11040[2] = null);
(statearr_11004_11040[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 21))
{var state_10992__$1 = state_10992;var statearr_11005_11041 = state_10992__$1;(statearr_11005_11041[2] = null);
(statearr_11005_11041[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 13))
{var inst_10945 = (state_10992[8]);var inst_10946 = (state_10992[9]);var inst_10944 = (state_10992[10]);var inst_10947 = (state_10992[11]);var inst_10954 = (state_10992[2]);var inst_10955 = (inst_10947 + 1);var tmp11001 = inst_10945;var tmp11002 = inst_10946;var tmp11003 = inst_10944;var inst_10944__$1 = tmp11003;var inst_10945__$1 = tmp11001;var inst_10946__$1 = tmp11002;var inst_10947__$1 = inst_10955;var state_10992__$1 = (function (){var statearr_11006 = state_10992;(statearr_11006[8] = inst_10945__$1);
(statearr_11006[9] = inst_10946__$1);
(statearr_11006[10] = inst_10944__$1);
(statearr_11006[14] = inst_10954);
(statearr_11006[11] = inst_10947__$1);
return statearr_11006;
})();var statearr_11007_11042 = state_10992__$1;(statearr_11007_11042[2] = null);
(statearr_11007_11042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 22))
{var state_10992__$1 = state_10992;var statearr_11008_11043 = state_10992__$1;(statearr_11008_11043[2] = null);
(statearr_11008_11043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 6))
{var inst_10933 = (state_10992[13]);var inst_10942 = f.call(null,inst_10933);var inst_10943 = cljs.core.seq.call(null,inst_10942);var inst_10944 = inst_10943;var inst_10945 = null;var inst_10946 = 0;var inst_10947 = 0;var state_10992__$1 = (function (){var statearr_11009 = state_10992;(statearr_11009[8] = inst_10945);
(statearr_11009[9] = inst_10946);
(statearr_11009[10] = inst_10944);
(statearr_11009[11] = inst_10947);
return statearr_11009;
})();var statearr_11010_11044 = state_10992__$1;(statearr_11010_11044[2] = null);
(statearr_11010_11044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 17))
{var inst_10958 = (state_10992[7]);var inst_10962 = cljs.core.chunk_first.call(null,inst_10958);var inst_10963 = cljs.core.chunk_rest.call(null,inst_10958);var inst_10964 = cljs.core.count.call(null,inst_10962);var inst_10944 = inst_10963;var inst_10945 = inst_10962;var inst_10946 = inst_10964;var inst_10947 = 0;var state_10992__$1 = (function (){var statearr_11011 = state_10992;(statearr_11011[8] = inst_10945);
(statearr_11011[9] = inst_10946);
(statearr_11011[10] = inst_10944);
(statearr_11011[11] = inst_10947);
return statearr_11011;
})();var statearr_11012_11045 = state_10992__$1;(statearr_11012_11045[2] = null);
(statearr_11012_11045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 3))
{var inst_10990 = (state_10992[2]);var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10992__$1,inst_10990);
} else
{if((state_val_10993 === 12))
{var inst_10978 = (state_10992[2]);var state_10992__$1 = state_10992;var statearr_11013_11046 = state_10992__$1;(statearr_11013_11046[2] = inst_10978);
(statearr_11013_11046[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 2))
{var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10992__$1,4,in$);
} else
{if((state_val_10993 === 23))
{var inst_10986 = (state_10992[2]);var state_10992__$1 = state_10992;var statearr_11014_11047 = state_10992__$1;(statearr_11014_11047[2] = inst_10986);
(statearr_11014_11047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 19))
{var inst_10973 = (state_10992[2]);var state_10992__$1 = state_10992;var statearr_11015_11048 = state_10992__$1;(statearr_11015_11048[2] = inst_10973);
(statearr_11015_11048[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 11))
{var inst_10944 = (state_10992[10]);var inst_10958 = (state_10992[7]);var inst_10958__$1 = cljs.core.seq.call(null,inst_10944);var state_10992__$1 = (function (){var statearr_11016 = state_10992;(statearr_11016[7] = inst_10958__$1);
return statearr_11016;
})();if(inst_10958__$1)
{var statearr_11017_11049 = state_10992__$1;(statearr_11017_11049[1] = 14);
} else
{var statearr_11018_11050 = state_10992__$1;(statearr_11018_11050[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 9))
{var inst_10980 = (state_10992[2]);var inst_10981 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10992__$1 = (function (){var statearr_11019 = state_10992;(statearr_11019[15] = inst_10980);
return statearr_11019;
})();if(cljs.core.truth_(inst_10981))
{var statearr_11020_11051 = state_10992__$1;(statearr_11020_11051[1] = 21);
} else
{var statearr_11021_11052 = state_10992__$1;(statearr_11021_11052[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 5))
{var inst_10936 = cljs.core.async.close_BANG_.call(null,out);var state_10992__$1 = state_10992;var statearr_11022_11053 = state_10992__$1;(statearr_11022_11053[2] = inst_10936);
(statearr_11022_11053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 14))
{var inst_10958 = (state_10992[7]);var inst_10960 = cljs.core.chunked_seq_QMARK_.call(null,inst_10958);var state_10992__$1 = state_10992;if(inst_10960)
{var statearr_11023_11054 = state_10992__$1;(statearr_11023_11054[1] = 17);
} else
{var statearr_11024_11055 = state_10992__$1;(statearr_11024_11055[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 16))
{var inst_10976 = (state_10992[2]);var state_10992__$1 = state_10992;var statearr_11025_11056 = state_10992__$1;(statearr_11025_11056[2] = inst_10976);
(statearr_11025_11056[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10993 === 10))
{var inst_10945 = (state_10992[8]);var inst_10947 = (state_10992[11]);var inst_10952 = cljs.core._nth.call(null,inst_10945,inst_10947);var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10992__$1,13,out,inst_10952);
} else
{if((state_val_10993 === 18))
{var inst_10958 = (state_10992[7]);var inst_10967 = cljs.core.first.call(null,inst_10958);var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10992__$1,20,out,inst_10967);
} else
{if((state_val_10993 === 8))
{var inst_10946 = (state_10992[9]);var inst_10947 = (state_10992[11]);var inst_10949 = (inst_10947 < inst_10946);var inst_10950 = inst_10949;var state_10992__$1 = state_10992;if(cljs.core.truth_(inst_10950))
{var statearr_11026_11057 = state_10992__$1;(statearr_11026_11057[1] = 10);
} else
{var statearr_11027_11058 = state_10992__$1;(statearr_11027_11058[1] = 11);
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
var state_machine__5624__auto____0 = (function (){var statearr_11031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11031[0] = state_machine__5624__auto__);
(statearr_11031[1] = 1);
return statearr_11031;
});
var state_machine__5624__auto____1 = (function (state_10992){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11032){if((e11032 instanceof Object))
{var ex__5627__auto__ = e11032;var statearr_11033_11059 = state_10992;(statearr_11033_11059[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11060 = state_10992;
state_10992 = G__11060;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10992){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11034 = f__5639__auto__.call(null);(statearr_11034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11034;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5638__auto___11155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11155){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11155){
return (function (state_11131){var state_val_11132 = (state_11131[1]);if((state_val_11132 === 7))
{var inst_11127 = (state_11131[2]);var state_11131__$1 = state_11131;var statearr_11133_11156 = state_11131__$1;(statearr_11133_11156[2] = inst_11127);
(statearr_11133_11156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 1))
{var state_11131__$1 = state_11131;var statearr_11134_11157 = state_11131__$1;(statearr_11134_11157[2] = null);
(statearr_11134_11157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 4))
{var inst_11110 = (state_11131[7]);var inst_11110__$1 = (state_11131[2]);var inst_11111 = (inst_11110__$1 == null);var state_11131__$1 = (function (){var statearr_11135 = state_11131;(statearr_11135[7] = inst_11110__$1);
return statearr_11135;
})();if(cljs.core.truth_(inst_11111))
{var statearr_11136_11158 = state_11131__$1;(statearr_11136_11158[1] = 5);
} else
{var statearr_11137_11159 = state_11131__$1;(statearr_11137_11159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 13))
{var state_11131__$1 = state_11131;var statearr_11138_11160 = state_11131__$1;(statearr_11138_11160[2] = null);
(statearr_11138_11160[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 6))
{var inst_11110 = (state_11131[7]);var state_11131__$1 = state_11131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11131__$1,11,to,inst_11110);
} else
{if((state_val_11132 === 3))
{var inst_11129 = (state_11131[2]);var state_11131__$1 = state_11131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11131__$1,inst_11129);
} else
{if((state_val_11132 === 12))
{var state_11131__$1 = state_11131;var statearr_11139_11161 = state_11131__$1;(statearr_11139_11161[2] = null);
(statearr_11139_11161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 2))
{var state_11131__$1 = state_11131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11131__$1,4,from);
} else
{if((state_val_11132 === 11))
{var inst_11120 = (state_11131[2]);var state_11131__$1 = state_11131;if(cljs.core.truth_(inst_11120))
{var statearr_11140_11162 = state_11131__$1;(statearr_11140_11162[1] = 12);
} else
{var statearr_11141_11163 = state_11131__$1;(statearr_11141_11163[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 9))
{var state_11131__$1 = state_11131;var statearr_11142_11164 = state_11131__$1;(statearr_11142_11164[2] = null);
(statearr_11142_11164[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 5))
{var state_11131__$1 = state_11131;if(cljs.core.truth_(close_QMARK_))
{var statearr_11143_11165 = state_11131__$1;(statearr_11143_11165[1] = 8);
} else
{var statearr_11144_11166 = state_11131__$1;(statearr_11144_11166[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 14))
{var inst_11125 = (state_11131[2]);var state_11131__$1 = state_11131;var statearr_11145_11167 = state_11131__$1;(statearr_11145_11167[2] = inst_11125);
(statearr_11145_11167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 10))
{var inst_11117 = (state_11131[2]);var state_11131__$1 = state_11131;var statearr_11146_11168 = state_11131__$1;(statearr_11146_11168[2] = inst_11117);
(statearr_11146_11168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11132 === 8))
{var inst_11114 = cljs.core.async.close_BANG_.call(null,to);var state_11131__$1 = state_11131;var statearr_11147_11169 = state_11131__$1;(statearr_11147_11169[2] = inst_11114);
(statearr_11147_11169[1] = 10);
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
});})(c__5638__auto___11155))
;return ((function (switch__5623__auto__,c__5638__auto___11155){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11151 = [null,null,null,null,null,null,null,null];(statearr_11151[0] = state_machine__5624__auto__);
(statearr_11151[1] = 1);
return statearr_11151;
});
var state_machine__5624__auto____1 = (function (state_11131){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11152){if((e11152 instanceof Object))
{var ex__5627__auto__ = e11152;var statearr_11153_11170 = state_11131;(statearr_11153_11170[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11171 = state_11131;
state_11131 = G__11171;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11131){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11155))
})();var state__5640__auto__ = (function (){var statearr_11154 = f__5639__auto__.call(null);(statearr_11154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11155);
return statearr_11154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11155))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5638__auto___11272 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11272,tc,fc){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11272,tc,fc){
return (function (state_11247){var state_val_11248 = (state_11247[1]);if((state_val_11248 === 7))
{var inst_11243 = (state_11247[2]);var state_11247__$1 = state_11247;var statearr_11249_11273 = state_11247__$1;(statearr_11249_11273[2] = inst_11243);
(statearr_11249_11273[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 1))
{var state_11247__$1 = state_11247;var statearr_11250_11274 = state_11247__$1;(statearr_11250_11274[2] = null);
(statearr_11250_11274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 4))
{var inst_11224 = (state_11247[7]);var inst_11224__$1 = (state_11247[2]);var inst_11225 = (inst_11224__$1 == null);var state_11247__$1 = (function (){var statearr_11251 = state_11247;(statearr_11251[7] = inst_11224__$1);
return statearr_11251;
})();if(cljs.core.truth_(inst_11225))
{var statearr_11252_11275 = state_11247__$1;(statearr_11252_11275[1] = 5);
} else
{var statearr_11253_11276 = state_11247__$1;(statearr_11253_11276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 13))
{var state_11247__$1 = state_11247;var statearr_11254_11277 = state_11247__$1;(statearr_11254_11277[2] = null);
(statearr_11254_11277[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 6))
{var inst_11224 = (state_11247[7]);var inst_11230 = p.call(null,inst_11224);var state_11247__$1 = state_11247;if(cljs.core.truth_(inst_11230))
{var statearr_11255_11278 = state_11247__$1;(statearr_11255_11278[1] = 9);
} else
{var statearr_11256_11279 = state_11247__$1;(statearr_11256_11279[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 3))
{var inst_11245 = (state_11247[2]);var state_11247__$1 = state_11247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11247__$1,inst_11245);
} else
{if((state_val_11248 === 12))
{var state_11247__$1 = state_11247;var statearr_11257_11280 = state_11247__$1;(statearr_11257_11280[2] = null);
(statearr_11257_11280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 2))
{var state_11247__$1 = state_11247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11247__$1,4,ch);
} else
{if((state_val_11248 === 11))
{var inst_11224 = (state_11247[7]);var inst_11234 = (state_11247[2]);var state_11247__$1 = state_11247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11247__$1,8,inst_11234,inst_11224);
} else
{if((state_val_11248 === 9))
{var state_11247__$1 = state_11247;var statearr_11258_11281 = state_11247__$1;(statearr_11258_11281[2] = tc);
(statearr_11258_11281[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 5))
{var inst_11227 = cljs.core.async.close_BANG_.call(null,tc);var inst_11228 = cljs.core.async.close_BANG_.call(null,fc);var state_11247__$1 = (function (){var statearr_11259 = state_11247;(statearr_11259[8] = inst_11227);
return statearr_11259;
})();var statearr_11260_11282 = state_11247__$1;(statearr_11260_11282[2] = inst_11228);
(statearr_11260_11282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 14))
{var inst_11241 = (state_11247[2]);var state_11247__$1 = state_11247;var statearr_11261_11283 = state_11247__$1;(statearr_11261_11283[2] = inst_11241);
(statearr_11261_11283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 10))
{var state_11247__$1 = state_11247;var statearr_11262_11284 = state_11247__$1;(statearr_11262_11284[2] = fc);
(statearr_11262_11284[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11248 === 8))
{var inst_11236 = (state_11247[2]);var state_11247__$1 = state_11247;if(cljs.core.truth_(inst_11236))
{var statearr_11263_11285 = state_11247__$1;(statearr_11263_11285[1] = 12);
} else
{var statearr_11264_11286 = state_11247__$1;(statearr_11264_11286[1] = 13);
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
});})(c__5638__auto___11272,tc,fc))
;return ((function (switch__5623__auto__,c__5638__auto___11272,tc,fc){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11268 = [null,null,null,null,null,null,null,null,null];(statearr_11268[0] = state_machine__5624__auto__);
(statearr_11268[1] = 1);
return statearr_11268;
});
var state_machine__5624__auto____1 = (function (state_11247){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object))
{var ex__5627__auto__ = e11269;var statearr_11270_11287 = state_11247;(statearr_11270_11287[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11288 = state_11247;
state_11247 = G__11288;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11272,tc,fc))
})();var state__5640__auto__ = (function (){var statearr_11271 = f__5639__auto__.call(null);(statearr_11271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11272);
return statearr_11271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11272,tc,fc))
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
return (function (state_11335){var state_val_11336 = (state_11335[1]);if((state_val_11336 === 7))
{var inst_11331 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11337_11353 = state_11335__$1;(statearr_11337_11353[2] = inst_11331);
(statearr_11337_11353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 6))
{var inst_11321 = (state_11335[7]);var inst_11324 = (state_11335[8]);var inst_11328 = f.call(null,inst_11321,inst_11324);var inst_11321__$1 = inst_11328;var state_11335__$1 = (function (){var statearr_11338 = state_11335;(statearr_11338[7] = inst_11321__$1);
return statearr_11338;
})();var statearr_11339_11354 = state_11335__$1;(statearr_11339_11354[2] = null);
(statearr_11339_11354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 5))
{var inst_11321 = (state_11335[7]);var state_11335__$1 = state_11335;var statearr_11340_11355 = state_11335__$1;(statearr_11340_11355[2] = inst_11321);
(statearr_11340_11355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 4))
{var inst_11324 = (state_11335[8]);var inst_11324__$1 = (state_11335[2]);var inst_11325 = (inst_11324__$1 == null);var state_11335__$1 = (function (){var statearr_11341 = state_11335;(statearr_11341[8] = inst_11324__$1);
return statearr_11341;
})();if(cljs.core.truth_(inst_11325))
{var statearr_11342_11356 = state_11335__$1;(statearr_11342_11356[1] = 5);
} else
{var statearr_11343_11357 = state_11335__$1;(statearr_11343_11357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 3))
{var inst_11333 = (state_11335[2]);var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11335__$1,inst_11333);
} else
{if((state_val_11336 === 2))
{var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11335__$1,4,ch);
} else
{if((state_val_11336 === 1))
{var inst_11321 = init;var state_11335__$1 = (function (){var statearr_11344 = state_11335;(statearr_11344[7] = inst_11321);
return statearr_11344;
})();var statearr_11345_11358 = state_11335__$1;(statearr_11345_11358[2] = null);
(statearr_11345_11358[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11349 = [null,null,null,null,null,null,null,null,null];(statearr_11349[0] = state_machine__5624__auto__);
(statearr_11349[1] = 1);
return statearr_11349;
});
var state_machine__5624__auto____1 = (function (state_11335){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11350){if((e11350 instanceof Object))
{var ex__5627__auto__ = e11350;var statearr_11351_11359 = state_11335;(statearr_11351_11359[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11360 = state_11335;
state_11335 = G__11360;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11335){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11352 = f__5639__auto__.call(null);(statearr_11352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11352;
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
return (function (state_11434){var state_val_11435 = (state_11434[1]);if((state_val_11435 === 7))
{var inst_11416 = (state_11434[2]);var state_11434__$1 = state_11434;var statearr_11436_11459 = state_11434__$1;(statearr_11436_11459[2] = inst_11416);
(statearr_11436_11459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 1))
{var inst_11410 = cljs.core.seq.call(null,coll);var inst_11411 = inst_11410;var state_11434__$1 = (function (){var statearr_11437 = state_11434;(statearr_11437[7] = inst_11411);
return statearr_11437;
})();var statearr_11438_11460 = state_11434__$1;(statearr_11438_11460[2] = null);
(statearr_11438_11460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 4))
{var inst_11411 = (state_11434[7]);var inst_11414 = cljs.core.first.call(null,inst_11411);var state_11434__$1 = state_11434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11434__$1,7,ch,inst_11414);
} else
{if((state_val_11435 === 13))
{var inst_11428 = (state_11434[2]);var state_11434__$1 = state_11434;var statearr_11439_11461 = state_11434__$1;(statearr_11439_11461[2] = inst_11428);
(statearr_11439_11461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 6))
{var inst_11419 = (state_11434[2]);var state_11434__$1 = state_11434;if(cljs.core.truth_(inst_11419))
{var statearr_11440_11462 = state_11434__$1;(statearr_11440_11462[1] = 8);
} else
{var statearr_11441_11463 = state_11434__$1;(statearr_11441_11463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 3))
{var inst_11432 = (state_11434[2]);var state_11434__$1 = state_11434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11434__$1,inst_11432);
} else
{if((state_val_11435 === 12))
{var state_11434__$1 = state_11434;var statearr_11442_11464 = state_11434__$1;(statearr_11442_11464[2] = null);
(statearr_11442_11464[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 2))
{var inst_11411 = (state_11434[7]);var state_11434__$1 = state_11434;if(cljs.core.truth_(inst_11411))
{var statearr_11443_11465 = state_11434__$1;(statearr_11443_11465[1] = 4);
} else
{var statearr_11444_11466 = state_11434__$1;(statearr_11444_11466[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 11))
{var inst_11425 = cljs.core.async.close_BANG_.call(null,ch);var state_11434__$1 = state_11434;var statearr_11445_11467 = state_11434__$1;(statearr_11445_11467[2] = inst_11425);
(statearr_11445_11467[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 9))
{var state_11434__$1 = state_11434;if(cljs.core.truth_(close_QMARK_))
{var statearr_11446_11468 = state_11434__$1;(statearr_11446_11468[1] = 11);
} else
{var statearr_11447_11469 = state_11434__$1;(statearr_11447_11469[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 5))
{var inst_11411 = (state_11434[7]);var state_11434__$1 = state_11434;var statearr_11448_11470 = state_11434__$1;(statearr_11448_11470[2] = inst_11411);
(statearr_11448_11470[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 10))
{var inst_11430 = (state_11434[2]);var state_11434__$1 = state_11434;var statearr_11449_11471 = state_11434__$1;(statearr_11449_11471[2] = inst_11430);
(statearr_11449_11471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11435 === 8))
{var inst_11411 = (state_11434[7]);var inst_11421 = cljs.core.next.call(null,inst_11411);var inst_11411__$1 = inst_11421;var state_11434__$1 = (function (){var statearr_11450 = state_11434;(statearr_11450[7] = inst_11411__$1);
return statearr_11450;
})();var statearr_11451_11472 = state_11434__$1;(statearr_11451_11472[2] = null);
(statearr_11451_11472[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_11455 = [null,null,null,null,null,null,null,null];(statearr_11455[0] = state_machine__5624__auto__);
(statearr_11455[1] = 1);
return statearr_11455;
});
var state_machine__5624__auto____1 = (function (state_11434){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11434);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11456){if((e11456 instanceof Object))
{var ex__5627__auto__ = e11456;var statearr_11457_11473 = state_11434;(statearr_11457_11473[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11474 = state_11434;
state_11434 = G__11474;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11434){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11458 = f__5639__auto__.call(null);(statearr_11458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11458;
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
cljs.core.async.Mux = (function (){var obj11476 = {};return obj11476;
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
cljs.core.async.Mult = (function (){var obj11478 = {};return obj11478;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11700 = (function (cs,ch,mult,meta11701){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11701 = meta11701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11700.cljs$lang$type = true;
cljs.core.async.t11700.cljs$lang$ctorStr = "cljs.core.async/t11700";
cljs.core.async.t11700.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11700");
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11700.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11702){var self__ = this;
var _11702__$1 = this;return self__.meta11701;
});})(cs))
;
cljs.core.async.t11700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11702,meta11701__$1){var self__ = this;
var _11702__$1 = this;return (new cljs.core.async.t11700(self__.cs,self__.ch,self__.mult,meta11701__$1));
});})(cs))
;
cljs.core.async.__GT_t11700 = ((function (cs){
return (function __GT_t11700(cs__$1,ch__$1,mult__$1,meta11701){return (new cljs.core.async.t11700(cs__$1,ch__$1,mult__$1,meta11701));
});})(cs))
;
}
return (new cljs.core.async.t11700(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5638__auto___11921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11921,cs,m,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11921,cs,m,dchan,dctr,done){
return (function (state_11833){var state_val_11834 = (state_11833[1]);if((state_val_11834 === 7))
{var inst_11829 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11835_11922 = state_11833__$1;(statearr_11835_11922[2] = inst_11829);
(statearr_11835_11922[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 20))
{var inst_11734 = (state_11833[7]);var inst_11744 = cljs.core.first.call(null,inst_11734);var inst_11745 = cljs.core.nth.call(null,inst_11744,0,null);var inst_11746 = cljs.core.nth.call(null,inst_11744,1,null);var state_11833__$1 = (function (){var statearr_11836 = state_11833;(statearr_11836[8] = inst_11745);
return statearr_11836;
})();if(cljs.core.truth_(inst_11746))
{var statearr_11837_11923 = state_11833__$1;(statearr_11837_11923[1] = 22);
} else
{var statearr_11838_11924 = state_11833__$1;(statearr_11838_11924[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 27))
{var inst_11774 = (state_11833[9]);var inst_11705 = (state_11833[10]);var inst_11776 = (state_11833[11]);var inst_11781 = (state_11833[12]);var inst_11781__$1 = cljs.core._nth.call(null,inst_11774,inst_11776);var inst_11782 = cljs.core.async.put_BANG_.call(null,inst_11781__$1,inst_11705,done);var state_11833__$1 = (function (){var statearr_11839 = state_11833;(statearr_11839[12] = inst_11781__$1);
return statearr_11839;
})();if(cljs.core.truth_(inst_11782))
{var statearr_11840_11925 = state_11833__$1;(statearr_11840_11925[1] = 30);
} else
{var statearr_11841_11926 = state_11833__$1;(statearr_11841_11926[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 1))
{var state_11833__$1 = state_11833;var statearr_11842_11927 = state_11833__$1;(statearr_11842_11927[2] = null);
(statearr_11842_11927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 24))
{var inst_11734 = (state_11833[7]);var inst_11751 = (state_11833[2]);var inst_11752 = cljs.core.next.call(null,inst_11734);var inst_11714 = inst_11752;var inst_11715 = null;var inst_11716 = 0;var inst_11717 = 0;var state_11833__$1 = (function (){var statearr_11843 = state_11833;(statearr_11843[13] = inst_11714);
(statearr_11843[14] = inst_11751);
(statearr_11843[15] = inst_11716);
(statearr_11843[16] = inst_11715);
(statearr_11843[17] = inst_11717);
return statearr_11843;
})();var statearr_11844_11928 = state_11833__$1;(statearr_11844_11928[2] = null);
(statearr_11844_11928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 39))
{var state_11833__$1 = state_11833;var statearr_11848_11929 = state_11833__$1;(statearr_11848_11929[2] = null);
(statearr_11848_11929[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 4))
{var inst_11705 = (state_11833[10]);var inst_11705__$1 = (state_11833[2]);var inst_11706 = (inst_11705__$1 == null);var state_11833__$1 = (function (){var statearr_11849 = state_11833;(statearr_11849[10] = inst_11705__$1);
return statearr_11849;
})();if(cljs.core.truth_(inst_11706))
{var statearr_11850_11930 = state_11833__$1;(statearr_11850_11930[1] = 5);
} else
{var statearr_11851_11931 = state_11833__$1;(statearr_11851_11931[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 15))
{var inst_11714 = (state_11833[13]);var inst_11716 = (state_11833[15]);var inst_11715 = (state_11833[16]);var inst_11717 = (state_11833[17]);var inst_11730 = (state_11833[2]);var inst_11731 = (inst_11717 + 1);var tmp11845 = inst_11714;var tmp11846 = inst_11716;var tmp11847 = inst_11715;var inst_11714__$1 = tmp11845;var inst_11715__$1 = tmp11847;var inst_11716__$1 = tmp11846;var inst_11717__$1 = inst_11731;var state_11833__$1 = (function (){var statearr_11852 = state_11833;(statearr_11852[13] = inst_11714__$1);
(statearr_11852[18] = inst_11730);
(statearr_11852[15] = inst_11716__$1);
(statearr_11852[16] = inst_11715__$1);
(statearr_11852[17] = inst_11717__$1);
return statearr_11852;
})();var statearr_11853_11932 = state_11833__$1;(statearr_11853_11932[2] = null);
(statearr_11853_11932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 21))
{var inst_11755 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11857_11933 = state_11833__$1;(statearr_11857_11933[2] = inst_11755);
(statearr_11857_11933[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 31))
{var inst_11781 = (state_11833[12]);var inst_11785 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11786 = cljs.core.async.untap_STAR_.call(null,m,inst_11781);var state_11833__$1 = (function (){var statearr_11858 = state_11833;(statearr_11858[19] = inst_11785);
return statearr_11858;
})();var statearr_11859_11934 = state_11833__$1;(statearr_11859_11934[2] = inst_11786);
(statearr_11859_11934[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 32))
{var inst_11775 = (state_11833[20]);var inst_11773 = (state_11833[21]);var inst_11774 = (state_11833[9]);var inst_11776 = (state_11833[11]);var inst_11788 = (state_11833[2]);var inst_11789 = (inst_11776 + 1);var tmp11854 = inst_11775;var tmp11855 = inst_11773;var tmp11856 = inst_11774;var inst_11773__$1 = tmp11855;var inst_11774__$1 = tmp11856;var inst_11775__$1 = tmp11854;var inst_11776__$1 = inst_11789;var state_11833__$1 = (function (){var statearr_11860 = state_11833;(statearr_11860[22] = inst_11788);
(statearr_11860[20] = inst_11775__$1);
(statearr_11860[21] = inst_11773__$1);
(statearr_11860[9] = inst_11774__$1);
(statearr_11860[11] = inst_11776__$1);
return statearr_11860;
})();var statearr_11861_11935 = state_11833__$1;(statearr_11861_11935[2] = null);
(statearr_11861_11935[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 40))
{var inst_11801 = (state_11833[23]);var inst_11805 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11806 = cljs.core.async.untap_STAR_.call(null,m,inst_11801);var state_11833__$1 = (function (){var statearr_11862 = state_11833;(statearr_11862[24] = inst_11805);
return statearr_11862;
})();var statearr_11863_11936 = state_11833__$1;(statearr_11863_11936[2] = inst_11806);
(statearr_11863_11936[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 33))
{var inst_11792 = (state_11833[25]);var inst_11794 = cljs.core.chunked_seq_QMARK_.call(null,inst_11792);var state_11833__$1 = state_11833;if(inst_11794)
{var statearr_11864_11937 = state_11833__$1;(statearr_11864_11937[1] = 36);
} else
{var statearr_11865_11938 = state_11833__$1;(statearr_11865_11938[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 13))
{var inst_11724 = (state_11833[26]);var inst_11727 = cljs.core.async.close_BANG_.call(null,inst_11724);var state_11833__$1 = state_11833;var statearr_11866_11939 = state_11833__$1;(statearr_11866_11939[2] = inst_11727);
(statearr_11866_11939[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 22))
{var inst_11745 = (state_11833[8]);var inst_11748 = cljs.core.async.close_BANG_.call(null,inst_11745);var state_11833__$1 = state_11833;var statearr_11867_11940 = state_11833__$1;(statearr_11867_11940[2] = inst_11748);
(statearr_11867_11940[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 36))
{var inst_11792 = (state_11833[25]);var inst_11796 = cljs.core.chunk_first.call(null,inst_11792);var inst_11797 = cljs.core.chunk_rest.call(null,inst_11792);var inst_11798 = cljs.core.count.call(null,inst_11796);var inst_11773 = inst_11797;var inst_11774 = inst_11796;var inst_11775 = inst_11798;var inst_11776 = 0;var state_11833__$1 = (function (){var statearr_11868 = state_11833;(statearr_11868[20] = inst_11775);
(statearr_11868[21] = inst_11773);
(statearr_11868[9] = inst_11774);
(statearr_11868[11] = inst_11776);
return statearr_11868;
})();var statearr_11869_11941 = state_11833__$1;(statearr_11869_11941[2] = null);
(statearr_11869_11941[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 41))
{var inst_11792 = (state_11833[25]);var inst_11808 = (state_11833[2]);var inst_11809 = cljs.core.next.call(null,inst_11792);var inst_11773 = inst_11809;var inst_11774 = null;var inst_11775 = 0;var inst_11776 = 0;var state_11833__$1 = (function (){var statearr_11870 = state_11833;(statearr_11870[20] = inst_11775);
(statearr_11870[21] = inst_11773);
(statearr_11870[9] = inst_11774);
(statearr_11870[11] = inst_11776);
(statearr_11870[27] = inst_11808);
return statearr_11870;
})();var statearr_11871_11942 = state_11833__$1;(statearr_11871_11942[2] = null);
(statearr_11871_11942[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 43))
{var state_11833__$1 = state_11833;var statearr_11872_11943 = state_11833__$1;(statearr_11872_11943[2] = null);
(statearr_11872_11943[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 29))
{var inst_11817 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11873_11944 = state_11833__$1;(statearr_11873_11944[2] = inst_11817);
(statearr_11873_11944[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 44))
{var inst_11826 = (state_11833[2]);var state_11833__$1 = (function (){var statearr_11874 = state_11833;(statearr_11874[28] = inst_11826);
return statearr_11874;
})();var statearr_11875_11945 = state_11833__$1;(statearr_11875_11945[2] = null);
(statearr_11875_11945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 6))
{var inst_11765 = (state_11833[29]);var inst_11764 = cljs.core.deref.call(null,cs);var inst_11765__$1 = cljs.core.keys.call(null,inst_11764);var inst_11766 = cljs.core.count.call(null,inst_11765__$1);var inst_11767 = cljs.core.reset_BANG_.call(null,dctr,inst_11766);var inst_11772 = cljs.core.seq.call(null,inst_11765__$1);var inst_11773 = inst_11772;var inst_11774 = null;var inst_11775 = 0;var inst_11776 = 0;var state_11833__$1 = (function (){var statearr_11876 = state_11833;(statearr_11876[29] = inst_11765__$1);
(statearr_11876[20] = inst_11775);
(statearr_11876[21] = inst_11773);
(statearr_11876[9] = inst_11774);
(statearr_11876[11] = inst_11776);
(statearr_11876[30] = inst_11767);
return statearr_11876;
})();var statearr_11877_11946 = state_11833__$1;(statearr_11877_11946[2] = null);
(statearr_11877_11946[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 28))
{var inst_11773 = (state_11833[21]);var inst_11792 = (state_11833[25]);var inst_11792__$1 = cljs.core.seq.call(null,inst_11773);var state_11833__$1 = (function (){var statearr_11878 = state_11833;(statearr_11878[25] = inst_11792__$1);
return statearr_11878;
})();if(inst_11792__$1)
{var statearr_11879_11947 = state_11833__$1;(statearr_11879_11947[1] = 33);
} else
{var statearr_11880_11948 = state_11833__$1;(statearr_11880_11948[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 25))
{var inst_11775 = (state_11833[20]);var inst_11776 = (state_11833[11]);var inst_11778 = (inst_11776 < inst_11775);var inst_11779 = inst_11778;var state_11833__$1 = state_11833;if(cljs.core.truth_(inst_11779))
{var statearr_11881_11949 = state_11833__$1;(statearr_11881_11949[1] = 27);
} else
{var statearr_11882_11950 = state_11833__$1;(statearr_11882_11950[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 34))
{var state_11833__$1 = state_11833;var statearr_11883_11951 = state_11833__$1;(statearr_11883_11951[2] = null);
(statearr_11883_11951[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 17))
{var state_11833__$1 = state_11833;var statearr_11884_11952 = state_11833__$1;(statearr_11884_11952[2] = null);
(statearr_11884_11952[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 3))
{var inst_11831 = (state_11833[2]);var state_11833__$1 = state_11833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11833__$1,inst_11831);
} else
{if((state_val_11834 === 12))
{var inst_11760 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11885_11953 = state_11833__$1;(statearr_11885_11953[2] = inst_11760);
(statearr_11885_11953[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 2))
{var state_11833__$1 = state_11833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11833__$1,4,ch);
} else
{if((state_val_11834 === 23))
{var state_11833__$1 = state_11833;var statearr_11886_11954 = state_11833__$1;(statearr_11886_11954[2] = null);
(statearr_11886_11954[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 35))
{var inst_11815 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11887_11955 = state_11833__$1;(statearr_11887_11955[2] = inst_11815);
(statearr_11887_11955[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 19))
{var inst_11734 = (state_11833[7]);var inst_11738 = cljs.core.chunk_first.call(null,inst_11734);var inst_11739 = cljs.core.chunk_rest.call(null,inst_11734);var inst_11740 = cljs.core.count.call(null,inst_11738);var inst_11714 = inst_11739;var inst_11715 = inst_11738;var inst_11716 = inst_11740;var inst_11717 = 0;var state_11833__$1 = (function (){var statearr_11888 = state_11833;(statearr_11888[13] = inst_11714);
(statearr_11888[15] = inst_11716);
(statearr_11888[16] = inst_11715);
(statearr_11888[17] = inst_11717);
return statearr_11888;
})();var statearr_11889_11956 = state_11833__$1;(statearr_11889_11956[2] = null);
(statearr_11889_11956[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 11))
{var inst_11714 = (state_11833[13]);var inst_11734 = (state_11833[7]);var inst_11734__$1 = cljs.core.seq.call(null,inst_11714);var state_11833__$1 = (function (){var statearr_11890 = state_11833;(statearr_11890[7] = inst_11734__$1);
return statearr_11890;
})();if(inst_11734__$1)
{var statearr_11891_11957 = state_11833__$1;(statearr_11891_11957[1] = 16);
} else
{var statearr_11892_11958 = state_11833__$1;(statearr_11892_11958[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 9))
{var inst_11762 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11893_11959 = state_11833__$1;(statearr_11893_11959[2] = inst_11762);
(statearr_11893_11959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 5))
{var inst_11712 = cljs.core.deref.call(null,cs);var inst_11713 = cljs.core.seq.call(null,inst_11712);var inst_11714 = inst_11713;var inst_11715 = null;var inst_11716 = 0;var inst_11717 = 0;var state_11833__$1 = (function (){var statearr_11894 = state_11833;(statearr_11894[13] = inst_11714);
(statearr_11894[15] = inst_11716);
(statearr_11894[16] = inst_11715);
(statearr_11894[17] = inst_11717);
return statearr_11894;
})();var statearr_11895_11960 = state_11833__$1;(statearr_11895_11960[2] = null);
(statearr_11895_11960[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 14))
{var state_11833__$1 = state_11833;var statearr_11896_11961 = state_11833__$1;(statearr_11896_11961[2] = null);
(statearr_11896_11961[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 45))
{var inst_11823 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11897_11962 = state_11833__$1;(statearr_11897_11962[2] = inst_11823);
(statearr_11897_11962[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 26))
{var inst_11765 = (state_11833[29]);var inst_11819 = (state_11833[2]);var inst_11820 = cljs.core.seq.call(null,inst_11765);var state_11833__$1 = (function (){var statearr_11898 = state_11833;(statearr_11898[31] = inst_11819);
return statearr_11898;
})();if(inst_11820)
{var statearr_11899_11963 = state_11833__$1;(statearr_11899_11963[1] = 42);
} else
{var statearr_11900_11964 = state_11833__$1;(statearr_11900_11964[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 16))
{var inst_11734 = (state_11833[7]);var inst_11736 = cljs.core.chunked_seq_QMARK_.call(null,inst_11734);var state_11833__$1 = state_11833;if(inst_11736)
{var statearr_11901_11965 = state_11833__$1;(statearr_11901_11965[1] = 19);
} else
{var statearr_11902_11966 = state_11833__$1;(statearr_11902_11966[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 38))
{var inst_11812 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11903_11967 = state_11833__$1;(statearr_11903_11967[2] = inst_11812);
(statearr_11903_11967[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 30))
{var state_11833__$1 = state_11833;var statearr_11904_11968 = state_11833__$1;(statearr_11904_11968[2] = null);
(statearr_11904_11968[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 10))
{var inst_11715 = (state_11833[16]);var inst_11717 = (state_11833[17]);var inst_11723 = cljs.core._nth.call(null,inst_11715,inst_11717);var inst_11724 = cljs.core.nth.call(null,inst_11723,0,null);var inst_11725 = cljs.core.nth.call(null,inst_11723,1,null);var state_11833__$1 = (function (){var statearr_11905 = state_11833;(statearr_11905[26] = inst_11724);
return statearr_11905;
})();if(cljs.core.truth_(inst_11725))
{var statearr_11906_11969 = state_11833__$1;(statearr_11906_11969[1] = 13);
} else
{var statearr_11907_11970 = state_11833__$1;(statearr_11907_11970[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 18))
{var inst_11758 = (state_11833[2]);var state_11833__$1 = state_11833;var statearr_11908_11971 = state_11833__$1;(statearr_11908_11971[2] = inst_11758);
(statearr_11908_11971[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 42))
{var state_11833__$1 = state_11833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11833__$1,45,dchan);
} else
{if((state_val_11834 === 37))
{var inst_11801 = (state_11833[23]);var inst_11792 = (state_11833[25]);var inst_11705 = (state_11833[10]);var inst_11801__$1 = cljs.core.first.call(null,inst_11792);var inst_11802 = cljs.core.async.put_BANG_.call(null,inst_11801__$1,inst_11705,done);var state_11833__$1 = (function (){var statearr_11909 = state_11833;(statearr_11909[23] = inst_11801__$1);
return statearr_11909;
})();if(cljs.core.truth_(inst_11802))
{var statearr_11910_11972 = state_11833__$1;(statearr_11910_11972[1] = 39);
} else
{var statearr_11911_11973 = state_11833__$1;(statearr_11911_11973[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11834 === 8))
{var inst_11716 = (state_11833[15]);var inst_11717 = (state_11833[17]);var inst_11719 = (inst_11717 < inst_11716);var inst_11720 = inst_11719;var state_11833__$1 = state_11833;if(cljs.core.truth_(inst_11720))
{var statearr_11912_11974 = state_11833__$1;(statearr_11912_11974[1] = 10);
} else
{var statearr_11913_11975 = state_11833__$1;(statearr_11913_11975[1] = 11);
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
});})(c__5638__auto___11921,cs,m,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___11921,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11917[0] = state_machine__5624__auto__);
(statearr_11917[1] = 1);
return statearr_11917;
});
var state_machine__5624__auto____1 = (function (state_11833){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11918){if((e11918 instanceof Object))
{var ex__5627__auto__ = e11918;var statearr_11919_11976 = state_11833;(statearr_11919_11976[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11977 = state_11833;
state_11833 = G__11977;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11833){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11921,cs,m,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_11920 = f__5639__auto__.call(null);(statearr_11920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11921);
return statearr_11920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11921,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11979 = {};return obj11979;
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
;var m = (function (){if(typeof cljs.core.async.t12099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12099 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12100){
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
this.meta12100 = meta12100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12099.cljs$lang$type = true;
cljs.core.async.t12099.cljs$lang$ctorStr = "cljs.core.async/t12099";
cljs.core.async.t12099.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12099");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12101){var self__ = this;
var _12101__$1 = this;return self__.meta12100;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12101,meta12100__$1){var self__ = this;
var _12101__$1 = this;return (new cljs.core.async.t12099(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12100__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12099 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12099(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12100){return (new cljs.core.async.t12099(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12100));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12099(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5638__auto___12218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12171){var state_val_12172 = (state_12171[1]);if((state_val_12172 === 7))
{var inst_12115 = (state_12171[7]);var inst_12120 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12115);var state_12171__$1 = state_12171;var statearr_12173_12219 = state_12171__$1;(statearr_12173_12219[2] = inst_12120);
(statearr_12173_12219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 20))
{var inst_12130 = (state_12171[8]);var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12171__$1,23,out,inst_12130);
} else
{if((state_val_12172 === 1))
{var inst_12105 = (state_12171[9]);var inst_12105__$1 = calc_state.call(null);var inst_12106 = cljs.core.seq_QMARK_.call(null,inst_12105__$1);var state_12171__$1 = (function (){var statearr_12174 = state_12171;(statearr_12174[9] = inst_12105__$1);
return statearr_12174;
})();if(inst_12106)
{var statearr_12175_12220 = state_12171__$1;(statearr_12175_12220[1] = 2);
} else
{var statearr_12176_12221 = state_12171__$1;(statearr_12176_12221[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 24))
{var inst_12123 = (state_12171[10]);var inst_12115 = inst_12123;var state_12171__$1 = (function (){var statearr_12177 = state_12171;(statearr_12177[7] = inst_12115);
return statearr_12177;
})();var statearr_12178_12222 = state_12171__$1;(statearr_12178_12222[2] = null);
(statearr_12178_12222[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 4))
{var inst_12105 = (state_12171[9]);var inst_12111 = (state_12171[2]);var inst_12112 = cljs.core.get.call(null,inst_12111,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12113 = cljs.core.get.call(null,inst_12111,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12114 = cljs.core.get.call(null,inst_12111,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12115 = inst_12105;var state_12171__$1 = (function (){var statearr_12179 = state_12171;(statearr_12179[11] = inst_12114);
(statearr_12179[7] = inst_12115);
(statearr_12179[12] = inst_12112);
(statearr_12179[13] = inst_12113);
return statearr_12179;
})();var statearr_12180_12223 = state_12171__$1;(statearr_12180_12223[2] = null);
(statearr_12180_12223[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 15))
{var state_12171__$1 = state_12171;var statearr_12181_12224 = state_12171__$1;(statearr_12181_12224[2] = null);
(statearr_12181_12224[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 21))
{var inst_12123 = (state_12171[10]);var inst_12115 = inst_12123;var state_12171__$1 = (function (){var statearr_12182 = state_12171;(statearr_12182[7] = inst_12115);
return statearr_12182;
})();var statearr_12183_12225 = state_12171__$1;(statearr_12183_12225[2] = null);
(statearr_12183_12225[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 13))
{var inst_12167 = (state_12171[2]);var state_12171__$1 = state_12171;var statearr_12184_12226 = state_12171__$1;(statearr_12184_12226[2] = inst_12167);
(statearr_12184_12226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 22))
{var inst_12165 = (state_12171[2]);var state_12171__$1 = state_12171;var statearr_12185_12227 = state_12171__$1;(statearr_12185_12227[2] = inst_12165);
(statearr_12185_12227[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 6))
{var inst_12169 = (state_12171[2]);var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12171__$1,inst_12169);
} else
{if((state_val_12172 === 25))
{var state_12171__$1 = state_12171;var statearr_12186_12228 = state_12171__$1;(statearr_12186_12228[2] = null);
(statearr_12186_12228[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 17))
{var inst_12145 = (state_12171[14]);var state_12171__$1 = state_12171;var statearr_12187_12229 = state_12171__$1;(statearr_12187_12229[2] = inst_12145);
(statearr_12187_12229[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 3))
{var inst_12105 = (state_12171[9]);var state_12171__$1 = state_12171;var statearr_12188_12230 = state_12171__$1;(statearr_12188_12230[2] = inst_12105);
(statearr_12188_12230[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 12))
{var inst_12145 = (state_12171[14]);var inst_12126 = (state_12171[15]);var inst_12131 = (state_12171[16]);var inst_12145__$1 = inst_12126.call(null,inst_12131);var state_12171__$1 = (function (){var statearr_12189 = state_12171;(statearr_12189[14] = inst_12145__$1);
return statearr_12189;
})();if(cljs.core.truth_(inst_12145__$1))
{var statearr_12190_12231 = state_12171__$1;(statearr_12190_12231[1] = 17);
} else
{var statearr_12191_12232 = state_12171__$1;(statearr_12191_12232[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 2))
{var inst_12105 = (state_12171[9]);var inst_12108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12105);var state_12171__$1 = state_12171;var statearr_12192_12233 = state_12171__$1;(statearr_12192_12233[2] = inst_12108);
(statearr_12192_12233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 23))
{var inst_12156 = (state_12171[2]);var state_12171__$1 = state_12171;if(cljs.core.truth_(inst_12156))
{var statearr_12193_12234 = state_12171__$1;(statearr_12193_12234[1] = 24);
} else
{var statearr_12194_12235 = state_12171__$1;(statearr_12194_12235[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 19))
{var inst_12153 = (state_12171[2]);var state_12171__$1 = state_12171;if(cljs.core.truth_(inst_12153))
{var statearr_12195_12236 = state_12171__$1;(statearr_12195_12236[1] = 20);
} else
{var statearr_12196_12237 = state_12171__$1;(statearr_12196_12237[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 11))
{var inst_12130 = (state_12171[8]);var inst_12136 = (inst_12130 == null);var state_12171__$1 = state_12171;if(cljs.core.truth_(inst_12136))
{var statearr_12197_12238 = state_12171__$1;(statearr_12197_12238[1] = 14);
} else
{var statearr_12198_12239 = state_12171__$1;(statearr_12198_12239[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 9))
{var inst_12123 = (state_12171[10]);var inst_12123__$1 = (state_12171[2]);var inst_12124 = cljs.core.get.call(null,inst_12123__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12125 = cljs.core.get.call(null,inst_12123__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12126 = cljs.core.get.call(null,inst_12123__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12171__$1 = (function (){var statearr_12199 = state_12171;(statearr_12199[10] = inst_12123__$1);
(statearr_12199[17] = inst_12125);
(statearr_12199[15] = inst_12126);
return statearr_12199;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12171__$1,10,inst_12124);
} else
{if((state_val_12172 === 5))
{var inst_12115 = (state_12171[7]);var inst_12118 = cljs.core.seq_QMARK_.call(null,inst_12115);var state_12171__$1 = state_12171;if(inst_12118)
{var statearr_12200_12240 = state_12171__$1;(statearr_12200_12240[1] = 7);
} else
{var statearr_12201_12241 = state_12171__$1;(statearr_12201_12241[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 14))
{var inst_12131 = (state_12171[16]);var inst_12138 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12131);var state_12171__$1 = state_12171;var statearr_12202_12242 = state_12171__$1;(statearr_12202_12242[2] = inst_12138);
(statearr_12202_12242[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 26))
{var inst_12161 = (state_12171[2]);var state_12171__$1 = state_12171;var statearr_12203_12243 = state_12171__$1;(statearr_12203_12243[2] = inst_12161);
(statearr_12203_12243[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 16))
{var inst_12141 = (state_12171[2]);var inst_12142 = calc_state.call(null);var inst_12115 = inst_12142;var state_12171__$1 = (function (){var statearr_12204 = state_12171;(statearr_12204[7] = inst_12115);
(statearr_12204[18] = inst_12141);
return statearr_12204;
})();var statearr_12205_12244 = state_12171__$1;(statearr_12205_12244[2] = null);
(statearr_12205_12244[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 10))
{var inst_12130 = (state_12171[8]);var inst_12131 = (state_12171[16]);var inst_12129 = (state_12171[2]);var inst_12130__$1 = cljs.core.nth.call(null,inst_12129,0,null);var inst_12131__$1 = cljs.core.nth.call(null,inst_12129,1,null);var inst_12132 = (inst_12130__$1 == null);var inst_12133 = cljs.core._EQ_.call(null,inst_12131__$1,change);var inst_12134 = (inst_12132) || (inst_12133);var state_12171__$1 = (function (){var statearr_12206 = state_12171;(statearr_12206[8] = inst_12130__$1);
(statearr_12206[16] = inst_12131__$1);
return statearr_12206;
})();if(cljs.core.truth_(inst_12134))
{var statearr_12207_12245 = state_12171__$1;(statearr_12207_12245[1] = 11);
} else
{var statearr_12208_12246 = state_12171__$1;(statearr_12208_12246[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 18))
{var inst_12125 = (state_12171[17]);var inst_12126 = (state_12171[15]);var inst_12131 = (state_12171[16]);var inst_12148 = cljs.core.empty_QMARK_.call(null,inst_12126);var inst_12149 = inst_12125.call(null,inst_12131);var inst_12150 = cljs.core.not.call(null,inst_12149);var inst_12151 = (inst_12148) && (inst_12150);var state_12171__$1 = state_12171;var statearr_12209_12247 = state_12171__$1;(statearr_12209_12247[2] = inst_12151);
(statearr_12209_12247[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12172 === 8))
{var inst_12115 = (state_12171[7]);var state_12171__$1 = state_12171;var statearr_12210_12248 = state_12171__$1;(statearr_12210_12248[2] = inst_12115);
(statearr_12210_12248[1] = 9);
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
});})(c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5623__auto__,c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12214[0] = state_machine__5624__auto__);
(statearr_12214[1] = 1);
return statearr_12214;
});
var state_machine__5624__auto____1 = (function (state_12171){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12215){if((e12215 instanceof Object))
{var ex__5627__auto__ = e12215;var statearr_12216_12249 = state_12171;(statearr_12216_12249[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12250 = state_12171;
state_12171 = G__12250;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12171){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5640__auto__ = (function (){var statearr_12217 = f__5639__auto__.call(null);(statearr_12217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12218);
return statearr_12217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12252 = {};return obj12252;
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
return (function (p1__12253_SHARP_){if(cljs.core.truth_(p1__12253_SHARP_.call(null,topic)))
{return p1__12253_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12253_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12376 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12377){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12377 = meta12377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12376.cljs$lang$type = true;
cljs.core.async.t12376.cljs$lang$ctorStr = "cljs.core.async/t12376";
cljs.core.async.t12376.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12376");
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12376.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12378){var self__ = this;
var _12378__$1 = this;return self__.meta12377;
});})(mults,ensure_mult))
;
cljs.core.async.t12376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12378,meta12377__$1){var self__ = this;
var _12378__$1 = this;return (new cljs.core.async.t12376(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12377__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12376 = ((function (mults,ensure_mult){
return (function __GT_t12376(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12377){return (new cljs.core.async.t12376(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12377));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12376(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5638__auto___12498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12498,mults,ensure_mult,p){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12498,mults,ensure_mult,p){
return (function (state_12450){var state_val_12451 = (state_12450[1]);if((state_val_12451 === 7))
{var inst_12446 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12452_12499 = state_12450__$1;(statearr_12452_12499[2] = inst_12446);
(statearr_12452_12499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 20))
{var state_12450__$1 = state_12450;var statearr_12453_12500 = state_12450__$1;(statearr_12453_12500[2] = null);
(statearr_12453_12500[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 1))
{var state_12450__$1 = state_12450;var statearr_12454_12501 = state_12450__$1;(statearr_12454_12501[2] = null);
(statearr_12454_12501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 24))
{var inst_12429 = (state_12450[7]);var inst_12438 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12429);var state_12450__$1 = state_12450;var statearr_12455_12502 = state_12450__$1;(statearr_12455_12502[2] = inst_12438);
(statearr_12455_12502[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 4))
{var inst_12381 = (state_12450[8]);var inst_12381__$1 = (state_12450[2]);var inst_12382 = (inst_12381__$1 == null);var state_12450__$1 = (function (){var statearr_12456 = state_12450;(statearr_12456[8] = inst_12381__$1);
return statearr_12456;
})();if(cljs.core.truth_(inst_12382))
{var statearr_12457_12503 = state_12450__$1;(statearr_12457_12503[1] = 5);
} else
{var statearr_12458_12504 = state_12450__$1;(statearr_12458_12504[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 15))
{var inst_12423 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12459_12505 = state_12450__$1;(statearr_12459_12505[2] = inst_12423);
(statearr_12459_12505[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 21))
{var inst_12443 = (state_12450[2]);var state_12450__$1 = (function (){var statearr_12460 = state_12450;(statearr_12460[9] = inst_12443);
return statearr_12460;
})();var statearr_12461_12506 = state_12450__$1;(statearr_12461_12506[2] = null);
(statearr_12461_12506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 13))
{var inst_12405 = (state_12450[10]);var inst_12407 = cljs.core.chunked_seq_QMARK_.call(null,inst_12405);var state_12450__$1 = state_12450;if(inst_12407)
{var statearr_12462_12507 = state_12450__$1;(statearr_12462_12507[1] = 16);
} else
{var statearr_12463_12508 = state_12450__$1;(statearr_12463_12508[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 22))
{var inst_12435 = (state_12450[2]);var state_12450__$1 = state_12450;if(cljs.core.truth_(inst_12435))
{var statearr_12464_12509 = state_12450__$1;(statearr_12464_12509[1] = 23);
} else
{var statearr_12465_12510 = state_12450__$1;(statearr_12465_12510[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 6))
{var inst_12431 = (state_12450[11]);var inst_12381 = (state_12450[8]);var inst_12429 = (state_12450[7]);var inst_12429__$1 = topic_fn.call(null,inst_12381);var inst_12430 = cljs.core.deref.call(null,mults);var inst_12431__$1 = cljs.core.get.call(null,inst_12430,inst_12429__$1);var state_12450__$1 = (function (){var statearr_12466 = state_12450;(statearr_12466[11] = inst_12431__$1);
(statearr_12466[7] = inst_12429__$1);
return statearr_12466;
})();if(cljs.core.truth_(inst_12431__$1))
{var statearr_12467_12511 = state_12450__$1;(statearr_12467_12511[1] = 19);
} else
{var statearr_12468_12512 = state_12450__$1;(statearr_12468_12512[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 25))
{var inst_12440 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12469_12513 = state_12450__$1;(statearr_12469_12513[2] = inst_12440);
(statearr_12469_12513[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 17))
{var inst_12405 = (state_12450[10]);var inst_12414 = cljs.core.first.call(null,inst_12405);var inst_12415 = cljs.core.async.muxch_STAR_.call(null,inst_12414);var inst_12416 = cljs.core.async.close_BANG_.call(null,inst_12415);var inst_12417 = cljs.core.next.call(null,inst_12405);var inst_12391 = inst_12417;var inst_12392 = null;var inst_12393 = 0;var inst_12394 = 0;var state_12450__$1 = (function (){var statearr_12470 = state_12450;(statearr_12470[12] = inst_12416);
(statearr_12470[13] = inst_12392);
(statearr_12470[14] = inst_12391);
(statearr_12470[15] = inst_12394);
(statearr_12470[16] = inst_12393);
return statearr_12470;
})();var statearr_12471_12514 = state_12450__$1;(statearr_12471_12514[2] = null);
(statearr_12471_12514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 3))
{var inst_12448 = (state_12450[2]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12450__$1,inst_12448);
} else
{if((state_val_12451 === 12))
{var inst_12425 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12472_12515 = state_12450__$1;(statearr_12472_12515[2] = inst_12425);
(statearr_12472_12515[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 2))
{var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12450__$1,4,ch);
} else
{if((state_val_12451 === 23))
{var state_12450__$1 = state_12450;var statearr_12473_12516 = state_12450__$1;(statearr_12473_12516[2] = null);
(statearr_12473_12516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 19))
{var inst_12431 = (state_12450[11]);var inst_12381 = (state_12450[8]);var inst_12433 = cljs.core.async.muxch_STAR_.call(null,inst_12431);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12450__$1,22,inst_12433,inst_12381);
} else
{if((state_val_12451 === 11))
{var inst_12405 = (state_12450[10]);var inst_12391 = (state_12450[14]);var inst_12405__$1 = cljs.core.seq.call(null,inst_12391);var state_12450__$1 = (function (){var statearr_12474 = state_12450;(statearr_12474[10] = inst_12405__$1);
return statearr_12474;
})();if(inst_12405__$1)
{var statearr_12475_12517 = state_12450__$1;(statearr_12475_12517[1] = 13);
} else
{var statearr_12476_12518 = state_12450__$1;(statearr_12476_12518[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 9))
{var inst_12427 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12477_12519 = state_12450__$1;(statearr_12477_12519[2] = inst_12427);
(statearr_12477_12519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 5))
{var inst_12388 = cljs.core.deref.call(null,mults);var inst_12389 = cljs.core.vals.call(null,inst_12388);var inst_12390 = cljs.core.seq.call(null,inst_12389);var inst_12391 = inst_12390;var inst_12392 = null;var inst_12393 = 0;var inst_12394 = 0;var state_12450__$1 = (function (){var statearr_12478 = state_12450;(statearr_12478[13] = inst_12392);
(statearr_12478[14] = inst_12391);
(statearr_12478[15] = inst_12394);
(statearr_12478[16] = inst_12393);
return statearr_12478;
})();var statearr_12479_12520 = state_12450__$1;(statearr_12479_12520[2] = null);
(statearr_12479_12520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 14))
{var state_12450__$1 = state_12450;var statearr_12483_12521 = state_12450__$1;(statearr_12483_12521[2] = null);
(statearr_12483_12521[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 16))
{var inst_12405 = (state_12450[10]);var inst_12409 = cljs.core.chunk_first.call(null,inst_12405);var inst_12410 = cljs.core.chunk_rest.call(null,inst_12405);var inst_12411 = cljs.core.count.call(null,inst_12409);var inst_12391 = inst_12410;var inst_12392 = inst_12409;var inst_12393 = inst_12411;var inst_12394 = 0;var state_12450__$1 = (function (){var statearr_12484 = state_12450;(statearr_12484[13] = inst_12392);
(statearr_12484[14] = inst_12391);
(statearr_12484[15] = inst_12394);
(statearr_12484[16] = inst_12393);
return statearr_12484;
})();var statearr_12485_12522 = state_12450__$1;(statearr_12485_12522[2] = null);
(statearr_12485_12522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 10))
{var inst_12392 = (state_12450[13]);var inst_12391 = (state_12450[14]);var inst_12394 = (state_12450[15]);var inst_12393 = (state_12450[16]);var inst_12399 = cljs.core._nth.call(null,inst_12392,inst_12394);var inst_12400 = cljs.core.async.muxch_STAR_.call(null,inst_12399);var inst_12401 = cljs.core.async.close_BANG_.call(null,inst_12400);var inst_12402 = (inst_12394 + 1);var tmp12480 = inst_12392;var tmp12481 = inst_12391;var tmp12482 = inst_12393;var inst_12391__$1 = tmp12481;var inst_12392__$1 = tmp12480;var inst_12393__$1 = tmp12482;var inst_12394__$1 = inst_12402;var state_12450__$1 = (function (){var statearr_12486 = state_12450;(statearr_12486[17] = inst_12401);
(statearr_12486[13] = inst_12392__$1);
(statearr_12486[14] = inst_12391__$1);
(statearr_12486[15] = inst_12394__$1);
(statearr_12486[16] = inst_12393__$1);
return statearr_12486;
})();var statearr_12487_12523 = state_12450__$1;(statearr_12487_12523[2] = null);
(statearr_12487_12523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 18))
{var inst_12420 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12488_12524 = state_12450__$1;(statearr_12488_12524[2] = inst_12420);
(statearr_12488_12524[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 8))
{var inst_12394 = (state_12450[15]);var inst_12393 = (state_12450[16]);var inst_12396 = (inst_12394 < inst_12393);var inst_12397 = inst_12396;var state_12450__$1 = state_12450;if(cljs.core.truth_(inst_12397))
{var statearr_12489_12525 = state_12450__$1;(statearr_12489_12525[1] = 10);
} else
{var statearr_12490_12526 = state_12450__$1;(statearr_12490_12526[1] = 11);
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
});})(c__5638__auto___12498,mults,ensure_mult,p))
;return ((function (switch__5623__auto__,c__5638__auto___12498,mults,ensure_mult,p){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12494[0] = state_machine__5624__auto__);
(statearr_12494[1] = 1);
return statearr_12494;
});
var state_machine__5624__auto____1 = (function (state_12450){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12450);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12495){if((e12495 instanceof Object))
{var ex__5627__auto__ = e12495;var statearr_12496_12527 = state_12450;(statearr_12496_12527[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12528 = state_12450;
state_12450 = G__12528;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12450){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12498,mults,ensure_mult,p))
})();var state__5640__auto__ = (function (){var statearr_12497 = f__5639__auto__.call(null);(statearr_12497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12498);
return statearr_12497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12498,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5638__auto___12665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12635){var state_val_12636 = (state_12635[1]);if((state_val_12636 === 7))
{var state_12635__$1 = state_12635;var statearr_12637_12666 = state_12635__$1;(statearr_12637_12666[2] = null);
(statearr_12637_12666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 1))
{var state_12635__$1 = state_12635;var statearr_12638_12667 = state_12635__$1;(statearr_12638_12667[2] = null);
(statearr_12638_12667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 4))
{var inst_12599 = (state_12635[7]);var inst_12601 = (inst_12599 < cnt);var state_12635__$1 = state_12635;if(cljs.core.truth_(inst_12601))
{var statearr_12639_12668 = state_12635__$1;(statearr_12639_12668[1] = 6);
} else
{var statearr_12640_12669 = state_12635__$1;(statearr_12640_12669[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 15))
{var inst_12631 = (state_12635[2]);var state_12635__$1 = state_12635;var statearr_12641_12670 = state_12635__$1;(statearr_12641_12670[2] = inst_12631);
(statearr_12641_12670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 13))
{var inst_12624 = cljs.core.async.close_BANG_.call(null,out);var state_12635__$1 = state_12635;var statearr_12642_12671 = state_12635__$1;(statearr_12642_12671[2] = inst_12624);
(statearr_12642_12671[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 6))
{var state_12635__$1 = state_12635;var statearr_12643_12672 = state_12635__$1;(statearr_12643_12672[2] = null);
(statearr_12643_12672[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 3))
{var inst_12633 = (state_12635[2]);var state_12635__$1 = state_12635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12635__$1,inst_12633);
} else
{if((state_val_12636 === 12))
{var inst_12621 = (state_12635[8]);var inst_12621__$1 = (state_12635[2]);var inst_12622 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12621__$1);var state_12635__$1 = (function (){var statearr_12644 = state_12635;(statearr_12644[8] = inst_12621__$1);
return statearr_12644;
})();if(cljs.core.truth_(inst_12622))
{var statearr_12645_12673 = state_12635__$1;(statearr_12645_12673[1] = 13);
} else
{var statearr_12646_12674 = state_12635__$1;(statearr_12646_12674[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 2))
{var inst_12598 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12599 = 0;var state_12635__$1 = (function (){var statearr_12647 = state_12635;(statearr_12647[9] = inst_12598);
(statearr_12647[7] = inst_12599);
return statearr_12647;
})();var statearr_12648_12675 = state_12635__$1;(statearr_12648_12675[2] = null);
(statearr_12648_12675[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 11))
{var inst_12599 = (state_12635[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12635,10,Object,null,9);var inst_12608 = chs__$1.call(null,inst_12599);var inst_12609 = done.call(null,inst_12599);var inst_12610 = cljs.core.async.take_BANG_.call(null,inst_12608,inst_12609);var state_12635__$1 = state_12635;var statearr_12649_12676 = state_12635__$1;(statearr_12649_12676[2] = inst_12610);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 9))
{var inst_12599 = (state_12635[7]);var inst_12612 = (state_12635[2]);var inst_12613 = (inst_12599 + 1);var inst_12599__$1 = inst_12613;var state_12635__$1 = (function (){var statearr_12650 = state_12635;(statearr_12650[7] = inst_12599__$1);
(statearr_12650[10] = inst_12612);
return statearr_12650;
})();var statearr_12651_12677 = state_12635__$1;(statearr_12651_12677[2] = null);
(statearr_12651_12677[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 5))
{var inst_12619 = (state_12635[2]);var state_12635__$1 = (function (){var statearr_12652 = state_12635;(statearr_12652[11] = inst_12619);
return statearr_12652;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12635__$1,12,dchan);
} else
{if((state_val_12636 === 14))
{var inst_12621 = (state_12635[8]);var inst_12626 = cljs.core.apply.call(null,f,inst_12621);var state_12635__$1 = state_12635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12635__$1,16,out,inst_12626);
} else
{if((state_val_12636 === 16))
{var inst_12628 = (state_12635[2]);var state_12635__$1 = (function (){var statearr_12653 = state_12635;(statearr_12653[12] = inst_12628);
return statearr_12653;
})();var statearr_12654_12678 = state_12635__$1;(statearr_12654_12678[2] = null);
(statearr_12654_12678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 10))
{var inst_12603 = (state_12635[2]);var inst_12604 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12635__$1 = (function (){var statearr_12655 = state_12635;(statearr_12655[13] = inst_12603);
return statearr_12655;
})();var statearr_12656_12679 = state_12635__$1;(statearr_12656_12679[2] = inst_12604);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 8))
{var inst_12617 = (state_12635[2]);var state_12635__$1 = state_12635;var statearr_12657_12680 = state_12635__$1;(statearr_12657_12680[2] = inst_12617);
(statearr_12657_12680[1] = 5);
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
});})(c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12661[0] = state_machine__5624__auto__);
(statearr_12661[1] = 1);
return statearr_12661;
});
var state_machine__5624__auto____1 = (function (state_12635){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12662){if((e12662 instanceof Object))
{var ex__5627__auto__ = e12662;var statearr_12663_12681 = state_12635;(statearr_12663_12681[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12682 = state_12635;
state_12635 = G__12682;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12635){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12664 = f__5639__auto__.call(null);(statearr_12664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12665);
return statearr_12664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12665,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12790,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12790,out){
return (function (state_12766){var state_val_12767 = (state_12766[1]);if((state_val_12767 === 7))
{var inst_12745 = (state_12766[7]);var inst_12746 = (state_12766[8]);var inst_12745__$1 = (state_12766[2]);var inst_12746__$1 = cljs.core.nth.call(null,inst_12745__$1,0,null);var inst_12747 = cljs.core.nth.call(null,inst_12745__$1,1,null);var inst_12748 = (inst_12746__$1 == null);var state_12766__$1 = (function (){var statearr_12768 = state_12766;(statearr_12768[7] = inst_12745__$1);
(statearr_12768[8] = inst_12746__$1);
(statearr_12768[9] = inst_12747);
return statearr_12768;
})();if(cljs.core.truth_(inst_12748))
{var statearr_12769_12791 = state_12766__$1;(statearr_12769_12791[1] = 8);
} else
{var statearr_12770_12792 = state_12766__$1;(statearr_12770_12792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 1))
{var inst_12737 = cljs.core.vec.call(null,chs);var inst_12738 = inst_12737;var state_12766__$1 = (function (){var statearr_12771 = state_12766;(statearr_12771[10] = inst_12738);
return statearr_12771;
})();var statearr_12772_12793 = state_12766__$1;(statearr_12772_12793[2] = null);
(statearr_12772_12793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 4))
{var inst_12738 = (state_12766[10]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12766__$1,7,inst_12738);
} else
{if((state_val_12767 === 6))
{var inst_12762 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12773_12794 = state_12766__$1;(statearr_12773_12794[2] = inst_12762);
(statearr_12773_12794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 3))
{var inst_12764 = (state_12766[2]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12766__$1,inst_12764);
} else
{if((state_val_12767 === 2))
{var inst_12738 = (state_12766[10]);var inst_12740 = cljs.core.count.call(null,inst_12738);var inst_12741 = (inst_12740 > 0);var state_12766__$1 = state_12766;if(cljs.core.truth_(inst_12741))
{var statearr_12775_12795 = state_12766__$1;(statearr_12775_12795[1] = 4);
} else
{var statearr_12776_12796 = state_12766__$1;(statearr_12776_12796[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 11))
{var inst_12738 = (state_12766[10]);var inst_12755 = (state_12766[2]);var tmp12774 = inst_12738;var inst_12738__$1 = tmp12774;var state_12766__$1 = (function (){var statearr_12777 = state_12766;(statearr_12777[10] = inst_12738__$1);
(statearr_12777[11] = inst_12755);
return statearr_12777;
})();var statearr_12778_12797 = state_12766__$1;(statearr_12778_12797[2] = null);
(statearr_12778_12797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 9))
{var inst_12746 = (state_12766[8]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,11,out,inst_12746);
} else
{if((state_val_12767 === 5))
{var inst_12760 = cljs.core.async.close_BANG_.call(null,out);var state_12766__$1 = state_12766;var statearr_12779_12798 = state_12766__$1;(statearr_12779_12798[2] = inst_12760);
(statearr_12779_12798[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 10))
{var inst_12758 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12780_12799 = state_12766__$1;(statearr_12780_12799[2] = inst_12758);
(statearr_12780_12799[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 8))
{var inst_12745 = (state_12766[7]);var inst_12738 = (state_12766[10]);var inst_12746 = (state_12766[8]);var inst_12747 = (state_12766[9]);var inst_12750 = (function (){var c = inst_12747;var v = inst_12746;var vec__12743 = inst_12745;var cs = inst_12738;return ((function (c,v,vec__12743,cs,inst_12745,inst_12738,inst_12746,inst_12747,state_val_12767,c__5638__auto___12790,out){
return (function (p1__12683_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12683_SHARP_);
});
;})(c,v,vec__12743,cs,inst_12745,inst_12738,inst_12746,inst_12747,state_val_12767,c__5638__auto___12790,out))
})();var inst_12751 = cljs.core.filterv.call(null,inst_12750,inst_12738);var inst_12738__$1 = inst_12751;var state_12766__$1 = (function (){var statearr_12781 = state_12766;(statearr_12781[10] = inst_12738__$1);
return statearr_12781;
})();var statearr_12782_12800 = state_12766__$1;(statearr_12782_12800[2] = null);
(statearr_12782_12800[1] = 2);
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
});})(c__5638__auto___12790,out))
;return ((function (switch__5623__auto__,c__5638__auto___12790,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12786 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12786[0] = state_machine__5624__auto__);
(statearr_12786[1] = 1);
return statearr_12786;
});
var state_machine__5624__auto____1 = (function (state_12766){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12766);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12787){if((e12787 instanceof Object))
{var ex__5627__auto__ = e12787;var statearr_12788_12801 = state_12766;(statearr_12788_12801[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12802 = state_12766;
state_12766 = G__12802;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12766){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12790,out))
})();var state__5640__auto__ = (function (){var statearr_12789 = f__5639__auto__.call(null);(statearr_12789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12790);
return statearr_12789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12790,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12895 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12895,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12895,out){
return (function (state_12872){var state_val_12873 = (state_12872[1]);if((state_val_12873 === 7))
{var inst_12854 = (state_12872[7]);var inst_12854__$1 = (state_12872[2]);var inst_12855 = (inst_12854__$1 == null);var inst_12856 = cljs.core.not.call(null,inst_12855);var state_12872__$1 = (function (){var statearr_12874 = state_12872;(statearr_12874[7] = inst_12854__$1);
return statearr_12874;
})();if(inst_12856)
{var statearr_12875_12896 = state_12872__$1;(statearr_12875_12896[1] = 8);
} else
{var statearr_12876_12897 = state_12872__$1;(statearr_12876_12897[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 1))
{var inst_12849 = 0;var state_12872__$1 = (function (){var statearr_12877 = state_12872;(statearr_12877[8] = inst_12849);
return statearr_12877;
})();var statearr_12878_12898 = state_12872__$1;(statearr_12878_12898[2] = null);
(statearr_12878_12898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 4))
{var state_12872__$1 = state_12872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12872__$1,7,ch);
} else
{if((state_val_12873 === 6))
{var inst_12867 = (state_12872[2]);var state_12872__$1 = state_12872;var statearr_12879_12899 = state_12872__$1;(statearr_12879_12899[2] = inst_12867);
(statearr_12879_12899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 3))
{var inst_12869 = (state_12872[2]);var inst_12870 = cljs.core.async.close_BANG_.call(null,out);var state_12872__$1 = (function (){var statearr_12880 = state_12872;(statearr_12880[9] = inst_12869);
return statearr_12880;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12872__$1,inst_12870);
} else
{if((state_val_12873 === 2))
{var inst_12849 = (state_12872[8]);var inst_12851 = (inst_12849 < n);var state_12872__$1 = state_12872;if(cljs.core.truth_(inst_12851))
{var statearr_12881_12900 = state_12872__$1;(statearr_12881_12900[1] = 4);
} else
{var statearr_12882_12901 = state_12872__$1;(statearr_12882_12901[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 11))
{var inst_12849 = (state_12872[8]);var inst_12859 = (state_12872[2]);var inst_12860 = (inst_12849 + 1);var inst_12849__$1 = inst_12860;var state_12872__$1 = (function (){var statearr_12883 = state_12872;(statearr_12883[8] = inst_12849__$1);
(statearr_12883[10] = inst_12859);
return statearr_12883;
})();var statearr_12884_12902 = state_12872__$1;(statearr_12884_12902[2] = null);
(statearr_12884_12902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 9))
{var state_12872__$1 = state_12872;var statearr_12885_12903 = state_12872__$1;(statearr_12885_12903[2] = null);
(statearr_12885_12903[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 5))
{var state_12872__$1 = state_12872;var statearr_12886_12904 = state_12872__$1;(statearr_12886_12904[2] = null);
(statearr_12886_12904[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 10))
{var inst_12864 = (state_12872[2]);var state_12872__$1 = state_12872;var statearr_12887_12905 = state_12872__$1;(statearr_12887_12905[2] = inst_12864);
(statearr_12887_12905[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12873 === 8))
{var inst_12854 = (state_12872[7]);var state_12872__$1 = state_12872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12872__$1,11,out,inst_12854);
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
});})(c__5638__auto___12895,out))
;return ((function (switch__5623__auto__,c__5638__auto___12895,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12891 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12891[0] = state_machine__5624__auto__);
(statearr_12891[1] = 1);
return statearr_12891;
});
var state_machine__5624__auto____1 = (function (state_12872){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12872);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12892){if((e12892 instanceof Object))
{var ex__5627__auto__ = e12892;var statearr_12893_12906 = state_12872;(statearr_12893_12906[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12907 = state_12872;
state_12872 = G__12907;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12872){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12895,out))
})();var state__5640__auto__ = (function (){var statearr_12894 = f__5639__auto__.call(null);(statearr_12894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12895);
return statearr_12894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12895,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13004 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13004,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13004,out){
return (function (state_12979){var state_val_12980 = (state_12979[1]);if((state_val_12980 === 7))
{var inst_12974 = (state_12979[2]);var state_12979__$1 = state_12979;var statearr_12981_13005 = state_12979__$1;(statearr_12981_13005[2] = inst_12974);
(statearr_12981_13005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 1))
{var inst_12956 = null;var state_12979__$1 = (function (){var statearr_12982 = state_12979;(statearr_12982[7] = inst_12956);
return statearr_12982;
})();var statearr_12983_13006 = state_12979__$1;(statearr_12983_13006[2] = null);
(statearr_12983_13006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 4))
{var inst_12959 = (state_12979[8]);var inst_12959__$1 = (state_12979[2]);var inst_12960 = (inst_12959__$1 == null);var inst_12961 = cljs.core.not.call(null,inst_12960);var state_12979__$1 = (function (){var statearr_12984 = state_12979;(statearr_12984[8] = inst_12959__$1);
return statearr_12984;
})();if(inst_12961)
{var statearr_12985_13007 = state_12979__$1;(statearr_12985_13007[1] = 5);
} else
{var statearr_12986_13008 = state_12979__$1;(statearr_12986_13008[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 6))
{var state_12979__$1 = state_12979;var statearr_12987_13009 = state_12979__$1;(statearr_12987_13009[2] = null);
(statearr_12987_13009[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 3))
{var inst_12976 = (state_12979[2]);var inst_12977 = cljs.core.async.close_BANG_.call(null,out);var state_12979__$1 = (function (){var statearr_12988 = state_12979;(statearr_12988[9] = inst_12976);
return statearr_12988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12979__$1,inst_12977);
} else
{if((state_val_12980 === 2))
{var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12979__$1,4,ch);
} else
{if((state_val_12980 === 11))
{var inst_12959 = (state_12979[8]);var inst_12968 = (state_12979[2]);var inst_12956 = inst_12959;var state_12979__$1 = (function (){var statearr_12989 = state_12979;(statearr_12989[7] = inst_12956);
(statearr_12989[10] = inst_12968);
return statearr_12989;
})();var statearr_12990_13010 = state_12979__$1;(statearr_12990_13010[2] = null);
(statearr_12990_13010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 9))
{var inst_12959 = (state_12979[8]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12979__$1,11,out,inst_12959);
} else
{if((state_val_12980 === 5))
{var inst_12956 = (state_12979[7]);var inst_12959 = (state_12979[8]);var inst_12963 = cljs.core._EQ_.call(null,inst_12959,inst_12956);var state_12979__$1 = state_12979;if(inst_12963)
{var statearr_12992_13011 = state_12979__$1;(statearr_12992_13011[1] = 8);
} else
{var statearr_12993_13012 = state_12979__$1;(statearr_12993_13012[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 10))
{var inst_12971 = (state_12979[2]);var state_12979__$1 = state_12979;var statearr_12994_13013 = state_12979__$1;(statearr_12994_13013[2] = inst_12971);
(statearr_12994_13013[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 8))
{var inst_12956 = (state_12979[7]);var tmp12991 = inst_12956;var inst_12956__$1 = tmp12991;var state_12979__$1 = (function (){var statearr_12995 = state_12979;(statearr_12995[7] = inst_12956__$1);
return statearr_12995;
})();var statearr_12996_13014 = state_12979__$1;(statearr_12996_13014[2] = null);
(statearr_12996_13014[1] = 2);
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
});})(c__5638__auto___13004,out))
;return ((function (switch__5623__auto__,c__5638__auto___13004,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13000 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13000[0] = state_machine__5624__auto__);
(statearr_13000[1] = 1);
return statearr_13000;
});
var state_machine__5624__auto____1 = (function (state_12979){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13001){if((e13001 instanceof Object))
{var ex__5627__auto__ = e13001;var statearr_13002_13015 = state_12979;(statearr_13002_13015[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13016 = state_12979;
state_12979 = G__13016;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12979){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13004,out))
})();var state__5640__auto__ = (function (){var statearr_13003 = f__5639__auto__.call(null);(statearr_13003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13004);
return statearr_13003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13004,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13151 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13151,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13151,out){
return (function (state_13121){var state_val_13122 = (state_13121[1]);if((state_val_13122 === 7))
{var inst_13117 = (state_13121[2]);var state_13121__$1 = state_13121;var statearr_13123_13152 = state_13121__$1;(statearr_13123_13152[2] = inst_13117);
(statearr_13123_13152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 1))
{var inst_13084 = (new Array(n));var inst_13085 = inst_13084;var inst_13086 = 0;var state_13121__$1 = (function (){var statearr_13124 = state_13121;(statearr_13124[7] = inst_13086);
(statearr_13124[8] = inst_13085);
return statearr_13124;
})();var statearr_13125_13153 = state_13121__$1;(statearr_13125_13153[2] = null);
(statearr_13125_13153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 4))
{var inst_13089 = (state_13121[9]);var inst_13089__$1 = (state_13121[2]);var inst_13090 = (inst_13089__$1 == null);var inst_13091 = cljs.core.not.call(null,inst_13090);var state_13121__$1 = (function (){var statearr_13126 = state_13121;(statearr_13126[9] = inst_13089__$1);
return statearr_13126;
})();if(inst_13091)
{var statearr_13127_13154 = state_13121__$1;(statearr_13127_13154[1] = 5);
} else
{var statearr_13128_13155 = state_13121__$1;(statearr_13128_13155[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 15))
{var inst_13111 = (state_13121[2]);var state_13121__$1 = state_13121;var statearr_13129_13156 = state_13121__$1;(statearr_13129_13156[2] = inst_13111);
(statearr_13129_13156[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 13))
{var state_13121__$1 = state_13121;var statearr_13130_13157 = state_13121__$1;(statearr_13130_13157[2] = null);
(statearr_13130_13157[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 6))
{var inst_13086 = (state_13121[7]);var inst_13107 = (inst_13086 > 0);var state_13121__$1 = state_13121;if(cljs.core.truth_(inst_13107))
{var statearr_13131_13158 = state_13121__$1;(statearr_13131_13158[1] = 12);
} else
{var statearr_13132_13159 = state_13121__$1;(statearr_13132_13159[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 3))
{var inst_13119 = (state_13121[2]);var state_13121__$1 = state_13121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13121__$1,inst_13119);
} else
{if((state_val_13122 === 12))
{var inst_13085 = (state_13121[8]);var inst_13109 = cljs.core.vec.call(null,inst_13085);var state_13121__$1 = state_13121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13121__$1,15,out,inst_13109);
} else
{if((state_val_13122 === 2))
{var state_13121__$1 = state_13121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13121__$1,4,ch);
} else
{if((state_val_13122 === 11))
{var inst_13101 = (state_13121[2]);var inst_13102 = (new Array(n));var inst_13085 = inst_13102;var inst_13086 = 0;var state_13121__$1 = (function (){var statearr_13133 = state_13121;(statearr_13133[7] = inst_13086);
(statearr_13133[10] = inst_13101);
(statearr_13133[8] = inst_13085);
return statearr_13133;
})();var statearr_13134_13160 = state_13121__$1;(statearr_13134_13160[2] = null);
(statearr_13134_13160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 9))
{var inst_13085 = (state_13121[8]);var inst_13099 = cljs.core.vec.call(null,inst_13085);var state_13121__$1 = state_13121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13121__$1,11,out,inst_13099);
} else
{if((state_val_13122 === 5))
{var inst_13086 = (state_13121[7]);var inst_13089 = (state_13121[9]);var inst_13094 = (state_13121[11]);var inst_13085 = (state_13121[8]);var inst_13093 = (inst_13085[inst_13086] = inst_13089);var inst_13094__$1 = (inst_13086 + 1);var inst_13095 = (inst_13094__$1 < n);var state_13121__$1 = (function (){var statearr_13135 = state_13121;(statearr_13135[11] = inst_13094__$1);
(statearr_13135[12] = inst_13093);
return statearr_13135;
})();if(cljs.core.truth_(inst_13095))
{var statearr_13136_13161 = state_13121__$1;(statearr_13136_13161[1] = 8);
} else
{var statearr_13137_13162 = state_13121__$1;(statearr_13137_13162[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 14))
{var inst_13114 = (state_13121[2]);var inst_13115 = cljs.core.async.close_BANG_.call(null,out);var state_13121__$1 = (function (){var statearr_13139 = state_13121;(statearr_13139[13] = inst_13114);
return statearr_13139;
})();var statearr_13140_13163 = state_13121__$1;(statearr_13140_13163[2] = inst_13115);
(statearr_13140_13163[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 10))
{var inst_13105 = (state_13121[2]);var state_13121__$1 = state_13121;var statearr_13141_13164 = state_13121__$1;(statearr_13141_13164[2] = inst_13105);
(statearr_13141_13164[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13122 === 8))
{var inst_13094 = (state_13121[11]);var inst_13085 = (state_13121[8]);var tmp13138 = inst_13085;var inst_13085__$1 = tmp13138;var inst_13086 = inst_13094;var state_13121__$1 = (function (){var statearr_13142 = state_13121;(statearr_13142[7] = inst_13086);
(statearr_13142[8] = inst_13085__$1);
return statearr_13142;
})();var statearr_13143_13165 = state_13121__$1;(statearr_13143_13165[2] = null);
(statearr_13143_13165[1] = 2);
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
});})(c__5638__auto___13151,out))
;return ((function (switch__5623__auto__,c__5638__auto___13151,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13147[0] = state_machine__5624__auto__);
(statearr_13147[1] = 1);
return statearr_13147;
});
var state_machine__5624__auto____1 = (function (state_13121){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13121);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13148){if((e13148 instanceof Object))
{var ex__5627__auto__ = e13148;var statearr_13149_13166 = state_13121;(statearr_13149_13166[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13167 = state_13121;
state_13121 = G__13167;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13121){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13151,out))
})();var state__5640__auto__ = (function (){var statearr_13150 = f__5639__auto__.call(null);(statearr_13150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13151);
return statearr_13150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13151,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___13310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___13310,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___13310,out){
return (function (state_13280){var state_val_13281 = (state_13280[1]);if((state_val_13281 === 7))
{var inst_13276 = (state_13280[2]);var state_13280__$1 = state_13280;var statearr_13282_13311 = state_13280__$1;(statearr_13282_13311[2] = inst_13276);
(statearr_13282_13311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 1))
{var inst_13239 = [];var inst_13240 = inst_13239;var inst_13241 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13280__$1 = (function (){var statearr_13283 = state_13280;(statearr_13283[7] = inst_13241);
(statearr_13283[8] = inst_13240);
return statearr_13283;
})();var statearr_13284_13312 = state_13280__$1;(statearr_13284_13312[2] = null);
(statearr_13284_13312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 4))
{var inst_13244 = (state_13280[9]);var inst_13244__$1 = (state_13280[2]);var inst_13245 = (inst_13244__$1 == null);var inst_13246 = cljs.core.not.call(null,inst_13245);var state_13280__$1 = (function (){var statearr_13285 = state_13280;(statearr_13285[9] = inst_13244__$1);
return statearr_13285;
})();if(inst_13246)
{var statearr_13286_13313 = state_13280__$1;(statearr_13286_13313[1] = 5);
} else
{var statearr_13287_13314 = state_13280__$1;(statearr_13287_13314[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 15))
{var inst_13270 = (state_13280[2]);var state_13280__$1 = state_13280;var statearr_13288_13315 = state_13280__$1;(statearr_13288_13315[2] = inst_13270);
(statearr_13288_13315[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 13))
{var state_13280__$1 = state_13280;var statearr_13289_13316 = state_13280__$1;(statearr_13289_13316[2] = null);
(statearr_13289_13316[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 6))
{var inst_13240 = (state_13280[8]);var inst_13265 = inst_13240.length;var inst_13266 = (inst_13265 > 0);var state_13280__$1 = state_13280;if(cljs.core.truth_(inst_13266))
{var statearr_13290_13317 = state_13280__$1;(statearr_13290_13317[1] = 12);
} else
{var statearr_13291_13318 = state_13280__$1;(statearr_13291_13318[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 3))
{var inst_13278 = (state_13280[2]);var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13280__$1,inst_13278);
} else
{if((state_val_13281 === 12))
{var inst_13240 = (state_13280[8]);var inst_13268 = cljs.core.vec.call(null,inst_13240);var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13280__$1,15,out,inst_13268);
} else
{if((state_val_13281 === 2))
{var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13280__$1,4,ch);
} else
{if((state_val_13281 === 11))
{var inst_13244 = (state_13280[9]);var inst_13248 = (state_13280[10]);var inst_13258 = (state_13280[2]);var inst_13259 = [];var inst_13260 = inst_13259.push(inst_13244);var inst_13240 = inst_13259;var inst_13241 = inst_13248;var state_13280__$1 = (function (){var statearr_13292 = state_13280;(statearr_13292[7] = inst_13241);
(statearr_13292[8] = inst_13240);
(statearr_13292[11] = inst_13260);
(statearr_13292[12] = inst_13258);
return statearr_13292;
})();var statearr_13293_13319 = state_13280__$1;(statearr_13293_13319[2] = null);
(statearr_13293_13319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 9))
{var inst_13240 = (state_13280[8]);var inst_13256 = cljs.core.vec.call(null,inst_13240);var state_13280__$1 = state_13280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13280__$1,11,out,inst_13256);
} else
{if((state_val_13281 === 5))
{var inst_13241 = (state_13280[7]);var inst_13244 = (state_13280[9]);var inst_13248 = (state_13280[10]);var inst_13248__$1 = f.call(null,inst_13244);var inst_13249 = cljs.core._EQ_.call(null,inst_13248__$1,inst_13241);var inst_13250 = cljs.core.keyword_identical_QMARK_.call(null,inst_13241,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13251 = (inst_13249) || (inst_13250);var state_13280__$1 = (function (){var statearr_13294 = state_13280;(statearr_13294[10] = inst_13248__$1);
return statearr_13294;
})();if(cljs.core.truth_(inst_13251))
{var statearr_13295_13320 = state_13280__$1;(statearr_13295_13320[1] = 8);
} else
{var statearr_13296_13321 = state_13280__$1;(statearr_13296_13321[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 14))
{var inst_13273 = (state_13280[2]);var inst_13274 = cljs.core.async.close_BANG_.call(null,out);var state_13280__$1 = (function (){var statearr_13298 = state_13280;(statearr_13298[13] = inst_13273);
return statearr_13298;
})();var statearr_13299_13322 = state_13280__$1;(statearr_13299_13322[2] = inst_13274);
(statearr_13299_13322[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 10))
{var inst_13263 = (state_13280[2]);var state_13280__$1 = state_13280;var statearr_13300_13323 = state_13280__$1;(statearr_13300_13323[2] = inst_13263);
(statearr_13300_13323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13281 === 8))
{var inst_13244 = (state_13280[9]);var inst_13248 = (state_13280[10]);var inst_13240 = (state_13280[8]);var inst_13253 = inst_13240.push(inst_13244);var tmp13297 = inst_13240;var inst_13240__$1 = tmp13297;var inst_13241 = inst_13248;var state_13280__$1 = (function (){var statearr_13301 = state_13280;(statearr_13301[7] = inst_13241);
(statearr_13301[14] = inst_13253);
(statearr_13301[8] = inst_13240__$1);
return statearr_13301;
})();var statearr_13302_13324 = state_13280__$1;(statearr_13302_13324[2] = null);
(statearr_13302_13324[1] = 2);
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
});})(c__5638__auto___13310,out))
;return ((function (switch__5623__auto__,c__5638__auto___13310,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_13306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13306[0] = state_machine__5624__auto__);
(statearr_13306[1] = 1);
return statearr_13306;
});
var state_machine__5624__auto____1 = (function (state_13280){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_13280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e13307){if((e13307 instanceof Object))
{var ex__5627__auto__ = e13307;var statearr_13308_13325 = state_13280;(statearr_13308_13325[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13326 = state_13280;
state_13280 = G__13326;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_13280){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_13280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___13310,out))
})();var state__5640__auto__ = (function (){var statearr_13309 = f__5639__auto__.call(null);(statearr_13309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___13310);
return statearr_13309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___13310,out))
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