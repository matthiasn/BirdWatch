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
cljs_om.core.fwd = (function fwd(from,to,ms){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_9520){var state_val_9521 = (state_9520[1]);if((state_val_9521 === 5))
{var inst_9515 = (state_9520[2]);var state_9520__$1 = (function (){var statearr_9522 = state_9520;(statearr_9522[7] = inst_9515);
return statearr_9522;
})();var statearr_9523_9533 = state_9520__$1;(statearr_9523_9533[2] = null);
(statearr_9523_9533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9521 === 4))
{var inst_9511 = (state_9520[2]);var inst_9512 = cljs.core.async.put_BANG_.call(null,to,inst_9511);var inst_9513 = cljs.core.async.timeout.call(null,ms);var state_9520__$1 = (function (){var statearr_9524 = state_9520;(statearr_9524[8] = inst_9512);
return statearr_9524;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9520__$1,5,inst_9513);
} else
{if((state_val_9521 === 3))
{var inst_9518 = (state_9520[2]);var state_9520__$1 = state_9520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9520__$1,inst_9518);
} else
{if((state_val_9521 === 2))
{var state_9520__$1 = state_9520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9520__$1,4,from);
} else
{if((state_val_9521 === 1))
{var state_9520__$1 = state_9520;var statearr_9525_9534 = state_9520__$1;(statearr_9525_9534[2] = null);
(statearr_9525_9534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9529 = [null,null,null,null,null,null,null,null,null];(statearr_9529[0] = state_machine__5624__auto__);
(statearr_9529[1] = 1);
return statearr_9529;
});
var state_machine__5624__auto____1 = (function (state_9520){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9520);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9530){if((e9530 instanceof Object))
{var ex__5627__auto__ = e9530;var statearr_9531_9535 = state_9520;(statearr_9531_9535[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9536 = state_9520;
state_9520 = G__9536;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9520){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_9532 = f__5639__auto__.call(null);(statearr_9532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_9532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
cljs_om.core.fwd.call(null,cljs_om.core.tweets_chan,cljs_om.core.combined_tweets_chan,0);
cljs_om.core.fwd.call(null,cljs_om.core.prev_tweets_chan,cljs_om.core.combined_tweets_chan,10);
var c__5638__auto___9557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___9557){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___9557){
return (function (state_9545){var state_val_9546 = (state_9545[1]);if((state_val_9546 === 4))
{var inst_9539 = (state_9545[2]);var inst_9540 = cljs_om.tweets.add_tweet.call(null,inst_9539,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_9545__$1 = (function (){var statearr_9547 = state_9545;(statearr_9547[7] = inst_9540);
return statearr_9547;
})();var statearr_9548_9558 = state_9545__$1;(statearr_9548_9558[2] = null);
(statearr_9548_9558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9546 === 3))
{var inst_9543 = (state_9545[2]);var state_9545__$1 = state_9545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9545__$1,inst_9543);
} else
{if((state_val_9546 === 2))
{var state_9545__$1 = state_9545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9545__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_9546 === 1))
{var state_9545__$1 = state_9545;var statearr_9549_9559 = state_9545__$1;(statearr_9549_9559[2] = null);
(statearr_9549_9559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5638__auto___9557))
;return ((function (switch__5623__auto__,c__5638__auto___9557){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9553 = [null,null,null,null,null,null,null,null];(statearr_9553[0] = state_machine__5624__auto__);
(statearr_9553[1] = 1);
return statearr_9553;
});
var state_machine__5624__auto____1 = (function (state_9545){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9545);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9554){if((e9554 instanceof Object))
{var ex__5627__auto__ = e9554;var statearr_9555_9560 = state_9545;(statearr_9555_9560[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9561 = state_9545;
state_9545 = G__9561;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9545){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___9557))
})();var state__5640__auto__ = (function (){var statearr_9556 = f__5639__auto__.call(null);(statearr_9556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___9557);
return statearr_9556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___9557))
);
cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,cljs_om.util.search_hash.call(null),cljs_om.core.tweets_chan);

//# sourceMappingURL=core.js.map