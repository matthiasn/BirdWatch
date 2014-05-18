// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_om.tweets');
goog.require('cljs_om.tweets');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_om.timeseries');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('om.core');
goog.require('cljs_om.timeseries');
goog.require('om.core');
goog.require('cljs_om.ui');
goog.require('cljs_om.util');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.core.app_state = cljs.core.atom.call(null,cljs_om.util.initial_state.call(null));
om.core.root.call(null,cljs_om.ui.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
om.core.root.call(null,cljs_om.ui.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
om.core.root.call(null,cljs_om.ui.search_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("search")], null));
om.core.root.call(null,cljs_om.ui.sort_buttons_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("sort-buttons")], null));
cljs_om.core.cloud_elem = document.getElementById("wordCloud");
cljs_om.core.cloud_w = (cljs_om.core.cloud_elem["offsetWidth"]);
cljs_om.core.word_cloud = BirdWatch.WordCloud(cljs_om.core.cloud_w,(cljs_om.core.cloud_w * 0.7),250,(function (e){return null;
}),"#wordCloud");
setInterval((function (){return cljs_om.timeseries.update.call(null,cljs_om.timeseries.graph_with_legend);
}),5000);
setInterval((function (){return BirdWatch.updateBarchart(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,25,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)))));
}),1000);
cljs_om.core.tweets_chan = cljs.core.async.chan.call(null,10000);
cljs_om.core.prev_tweets_chan = cljs.core.async.chan.call(null,100000);
cljs_om.core.combined_tweets_chan = cljs.core.async.chan.call(null,1);
cljs_om.core.fwd = (function fwd(from,to,ms){var c__6136__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto__){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto__){
return (function (state_9410){var state_val_9411 = (state_9410[1]);if((state_val_9411 === 5))
{var inst_9405 = (state_9410[2]);var state_9410__$1 = (function (){var statearr_9412 = state_9410;(statearr_9412[7] = inst_9405);
return statearr_9412;
})();var statearr_9413_9423 = state_9410__$1;(statearr_9413_9423[2] = null);
(statearr_9413_9423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9411 === 4))
{var inst_9401 = (state_9410[2]);var inst_9402 = cljs.core.async.put_BANG_.call(null,to,inst_9401);var inst_9403 = cljs.core.async.timeout.call(null,ms);var state_9410__$1 = (function (){var statearr_9414 = state_9410;(statearr_9414[8] = inst_9402);
return statearr_9414;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9410__$1,5,inst_9403);
} else
{if((state_val_9411 === 3))
{var inst_9408 = (state_9410[2]);var state_9410__$1 = state_9410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9410__$1,inst_9408);
} else
{if((state_val_9411 === 2))
{var state_9410__$1 = state_9410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9410__$1,4,from);
} else
{if((state_val_9411 === 1))
{var state_9410__$1 = state_9410;var statearr_9415_9424 = state_9410__$1;(statearr_9415_9424[2] = null);
(statearr_9415_9424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6136__auto__))
;return ((function (switch__6072__auto__,c__6136__auto__){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9419 = [null,null,null,null,null,null,null,null,null];(statearr_9419[0] = state_machine__6073__auto__);
(statearr_9419[1] = 1);
return statearr_9419;
});
var state_machine__6073__auto____1 = (function (state_9410){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9410);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9420){if((e9420 instanceof Object))
{var ex__6076__auto__ = e9420;var statearr_9421_9425 = state_9410;(statearr_9421_9425[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9426 = state_9410;
state_9410 = G__9426;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9410){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto__))
})();var state__6138__auto__ = (function (){var statearr_9422 = f__6137__auto__.call(null);(statearr_9422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto__);
return statearr_9422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
});})(c__6136__auto__))
);
return c__6136__auto__;
});
cljs_om.core.fwd.call(null,cljs_om.core.tweets_chan,cljs_om.core.combined_tweets_chan,0);
cljs_om.core.fwd.call(null,cljs_om.core.prev_tweets_chan,cljs_om.core.combined_tweets_chan,10);
var c__6136__auto___9447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto___9447){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___9447){
return (function (state_9435){var state_val_9436 = (state_9435[1]);if((state_val_9436 === 4))
{var inst_9429 = (state_9435[2]);var inst_9430 = cljs_om.tweets.add_tweet.call(null,inst_9429,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_9435__$1 = (function (){var statearr_9437 = state_9435;(statearr_9437[7] = inst_9430);
return statearr_9437;
})();var statearr_9438_9448 = state_9435__$1;(statearr_9438_9448[2] = null);
(statearr_9438_9448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 3))
{var inst_9433 = (state_9435[2]);var state_9435__$1 = state_9435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9435__$1,inst_9433);
} else
{if((state_val_9436 === 2))
{var state_9435__$1 = state_9435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9435__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_9436 === 1))
{var state_9435__$1 = state_9435;var statearr_9439_9449 = state_9435__$1;(statearr_9439_9449[2] = null);
(statearr_9439_9449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6136__auto___9447))
;return ((function (switch__6072__auto__,c__6136__auto___9447){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9443 = [null,null,null,null,null,null,null,null];(statearr_9443[0] = state_machine__6073__auto__);
(statearr_9443[1] = 1);
return statearr_9443;
});
var state_machine__6073__auto____1 = (function (state_9435){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9444){if((e9444 instanceof Object))
{var ex__6076__auto__ = e9444;var statearr_9445_9450 = state_9435;(statearr_9445_9450[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9451 = state_9435;
state_9435 = G__9451;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9435){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___9447))
})();var state__6138__auto__ = (function (){var statearr_9446 = f__6137__auto__.call(null);(statearr_9446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___9447);
return statearr_9446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
});})(c__6136__auto___9447))
);
cljs_om.core.ajax_results_chan = cljs.core.async.chan.call(null);
var c__6136__auto___9543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6136__auto___9543){
return (function (){var f__6137__auto__ = (function (){var switch__6072__auto__ = ((function (c__6136__auto___9543){
return (function (state_9508){var state_val_9509 = (state_9508[1]);if((state_val_9509 === 7))
{var inst_9466 = (state_9508[7]);var inst_9467 = (state_9508[8]);var inst_9464 = (state_9508[9]);var inst_9465 = (state_9508[10]);var inst_9472 = cljs.core._nth.call(null,inst_9465,inst_9467);var inst_9473 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_9472);var inst_9474 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_9473);var inst_9475 = (inst_9467 + 1);var tmp9510 = inst_9466;var tmp9511 = inst_9464;var tmp9512 = inst_9465;var inst_9464__$1 = tmp9511;var inst_9465__$1 = tmp9512;var inst_9466__$1 = tmp9510;var inst_9467__$1 = inst_9475;var state_9508__$1 = (function (){var statearr_9513 = state_9508;(statearr_9513[11] = inst_9474);
(statearr_9513[7] = inst_9466__$1);
(statearr_9513[8] = inst_9467__$1);
(statearr_9513[9] = inst_9464__$1);
(statearr_9513[10] = inst_9465__$1);
return statearr_9513;
})();var statearr_9514_9544 = state_9508__$1;(statearr_9514_9544[2] = null);
(statearr_9514_9544[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 1))
{var state_9508__$1 = state_9508;var statearr_9515_9545 = state_9508__$1;(statearr_9515_9545[2] = null);
(statearr_9515_9545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 4))
{var inst_9454 = (state_9508[2]);var inst_9455 = JSON.parse.call(null,inst_9454);var inst_9456 = cljs.core.js__GT_clj.call(null,inst_9455,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_9461 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_9456);var inst_9462 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_9461);var inst_9463 = cljs.core.seq.call(null,inst_9462);var inst_9464 = inst_9463;var inst_9465 = null;var inst_9466 = 0;var inst_9467 = 0;var state_9508__$1 = (function (){var statearr_9516 = state_9508;(statearr_9516[7] = inst_9466);
(statearr_9516[8] = inst_9467);
(statearr_9516[9] = inst_9464);
(statearr_9516[10] = inst_9465);
return statearr_9516;
})();var statearr_9517_9546 = state_9508__$1;(statearr_9517_9546[2] = null);
(statearr_9517_9546[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 15))
{var inst_9493 = (state_9508[2]);var state_9508__$1 = state_9508;var statearr_9518_9547 = state_9508__$1;(statearr_9518_9547[2] = inst_9493);
(statearr_9518_9547[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 13))
{var inst_9478 = (state_9508[12]);var inst_9482 = cljs.core.chunk_first.call(null,inst_9478);var inst_9483 = cljs.core.chunk_rest.call(null,inst_9478);var inst_9484 = cljs.core.count.call(null,inst_9482);var inst_9464 = inst_9483;var inst_9465 = inst_9482;var inst_9466 = inst_9484;var inst_9467 = 0;var state_9508__$1 = (function (){var statearr_9519 = state_9508;(statearr_9519[7] = inst_9466);
(statearr_9519[8] = inst_9467);
(statearr_9519[9] = inst_9464);
(statearr_9519[10] = inst_9465);
return statearr_9519;
})();var statearr_9520_9548 = state_9508__$1;(statearr_9520_9548[2] = null);
(statearr_9520_9548[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 6))
{var inst_9500 = (state_9508[2]);var inst_9501 = cljs.core.async.timeout.call(null,1000);var state_9508__$1 = (function (){var statearr_9521 = state_9508;(statearr_9521[13] = inst_9500);
return statearr_9521;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9508__$1,16,inst_9501);
} else
{if((state_val_9509 === 3))
{var inst_9506 = (state_9508[2]);var state_9508__$1 = state_9508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9508__$1,inst_9506);
} else
{if((state_val_9509 === 12))
{var inst_9496 = (state_9508[2]);var state_9508__$1 = state_9508;var statearr_9522_9549 = state_9508__$1;(statearr_9522_9549[2] = inst_9496);
(statearr_9522_9549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 2))
{var state_9508__$1 = state_9508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9508__$1,4,cljs_om.core.ajax_results_chan);
} else
{if((state_val_9509 === 11))
{var state_9508__$1 = state_9508;var statearr_9523_9550 = state_9508__$1;(statearr_9523_9550[2] = null);
(statearr_9523_9550[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 9))
{var inst_9498 = (state_9508[2]);var state_9508__$1 = state_9508;var statearr_9524_9551 = state_9508__$1;(statearr_9524_9551[2] = inst_9498);
(statearr_9524_9551[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 5))
{var inst_9466 = (state_9508[7]);var inst_9467 = (state_9508[8]);var inst_9469 = (inst_9467 < inst_9466);var inst_9470 = inst_9469;var state_9508__$1 = state_9508;if(cljs.core.truth_(inst_9470))
{var statearr_9525_9552 = state_9508__$1;(statearr_9525_9552[1] = 7);
} else
{var statearr_9526_9553 = state_9508__$1;(statearr_9526_9553[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 14))
{var inst_9478 = (state_9508[12]);var inst_9487 = cljs.core.first.call(null,inst_9478);var inst_9488 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_9487);var inst_9489 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_9488);var inst_9490 = cljs.core.next.call(null,inst_9478);var inst_9464 = inst_9490;var inst_9465 = null;var inst_9466 = 0;var inst_9467 = 0;var state_9508__$1 = (function (){var statearr_9527 = state_9508;(statearr_9527[7] = inst_9466);
(statearr_9527[8] = inst_9467);
(statearr_9527[9] = inst_9464);
(statearr_9527[14] = inst_9489);
(statearr_9527[10] = inst_9465);
return statearr_9527;
})();var statearr_9528_9554 = state_9508__$1;(statearr_9528_9554[2] = null);
(statearr_9528_9554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 16))
{var inst_9503 = (state_9508[2]);var state_9508__$1 = (function (){var statearr_9529 = state_9508;(statearr_9529[15] = inst_9503);
return statearr_9529;
})();var statearr_9530_9555 = state_9508__$1;(statearr_9530_9555[2] = null);
(statearr_9530_9555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 10))
{var inst_9478 = (state_9508[12]);var inst_9480 = cljs.core.chunked_seq_QMARK_.call(null,inst_9478);var state_9508__$1 = state_9508;if(inst_9480)
{var statearr_9531_9556 = state_9508__$1;(statearr_9531_9556[1] = 13);
} else
{var statearr_9532_9557 = state_9508__$1;(statearr_9532_9557[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9509 === 8))
{var inst_9478 = (state_9508[12]);var inst_9464 = (state_9508[9]);var inst_9478__$1 = cljs.core.seq.call(null,inst_9464);var state_9508__$1 = (function (){var statearr_9533 = state_9508;(statearr_9533[12] = inst_9478__$1);
return statearr_9533;
})();if(inst_9478__$1)
{var statearr_9534_9558 = state_9508__$1;(statearr_9534_9558[1] = 10);
} else
{var statearr_9535_9559 = state_9508__$1;(statearr_9535_9559[1] = 11);
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
});})(c__6136__auto___9543))
;return ((function (switch__6072__auto__,c__6136__auto___9543){
return (function() {
var state_machine__6073__auto__ = null;
var state_machine__6073__auto____0 = (function (){var statearr_9539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9539[0] = state_machine__6073__auto__);
(statearr_9539[1] = 1);
return statearr_9539;
});
var state_machine__6073__auto____1 = (function (state_9508){while(true){
var ret_value__6074__auto__ = (function (){try{while(true){
var result__6075__auto__ = switch__6072__auto__.call(null,state_9508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6075__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6075__auto__;
}
break;
}
}catch (e9540){if((e9540 instanceof Object))
{var ex__6076__auto__ = e9540;var statearr_9541_9560 = state_9508;(statearr_9541_9560[5] = ex__6076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6074__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9561 = state_9508;
state_9508 = G__9561;
continue;
}
} else
{return ret_value__6074__auto__;
}
break;
}
});
state_machine__6073__auto__ = function(state_9508){
switch(arguments.length){
case 0:
return state_machine__6073__auto____0.call(this);
case 1:
return state_machine__6073__auto____1.call(this,state_9508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6073__auto____0;
state_machine__6073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6073__auto____1;
return state_machine__6073__auto__;
})()
;})(switch__6072__auto__,c__6136__auto___9543))
})();var state__6138__auto__ = (function (){var statearr_9542 = f__6137__auto__.call(null);(statearr_9542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6136__auto___9543);
return statearr_9542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6138__auto__);
});})(c__6136__auto___9543))
);
cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,cljs_om.util.search_hash.call(null),cljs_om.core.tweets_chan,cljs_om.core.ajax_results_chan);

//# sourceMappingURL=core.js.map