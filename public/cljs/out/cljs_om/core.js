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
return (function (state_9529){var state_val_9530 = (state_9529[1]);if((state_val_9530 === 5))
{var inst_9524 = (state_9529[2]);var state_9529__$1 = (function (){var statearr_9531 = state_9529;(statearr_9531[7] = inst_9524);
return statearr_9531;
})();var statearr_9532_9542 = state_9529__$1;(statearr_9532_9542[2] = null);
(statearr_9532_9542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9530 === 4))
{var inst_9520 = (state_9529[2]);var inst_9521 = cljs.core.async.put_BANG_.call(null,to,inst_9520);var inst_9522 = cljs.core.async.timeout.call(null,ms);var state_9529__$1 = (function (){var statearr_9533 = state_9529;(statearr_9533[8] = inst_9521);
return statearr_9533;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9529__$1,5,inst_9522);
} else
{if((state_val_9530 === 3))
{var inst_9527 = (state_9529[2]);var state_9529__$1 = state_9529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9529__$1,inst_9527);
} else
{if((state_val_9530 === 2))
{var state_9529__$1 = state_9529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9529__$1,4,from);
} else
{if((state_val_9530 === 1))
{var state_9529__$1 = state_9529;var statearr_9534_9543 = state_9529__$1;(statearr_9534_9543[2] = null);
(statearr_9534_9543[1] = 2);
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
var state_machine__5624__auto____0 = (function (){var statearr_9538 = [null,null,null,null,null,null,null,null,null];(statearr_9538[0] = state_machine__5624__auto__);
(statearr_9538[1] = 1);
return statearr_9538;
});
var state_machine__5624__auto____1 = (function (state_9529){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9529);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9539){if((e9539 instanceof Object))
{var ex__5627__auto__ = e9539;var statearr_9540_9544 = state_9529;(statearr_9540_9544[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9545 = state_9529;
state_9529 = G__9545;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9529){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_9541 = f__5639__auto__.call(null);(statearr_9541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_9541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
cljs_om.core.fwd.call(null,cljs_om.core.tweets_chan,cljs_om.core.combined_tweets_chan,0);
cljs_om.core.fwd.call(null,cljs_om.core.prev_tweets_chan,cljs_om.core.combined_tweets_chan,10);
var c__5638__auto___9566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___9566){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___9566){
return (function (state_9554){var state_val_9555 = (state_9554[1]);if((state_val_9555 === 4))
{var inst_9548 = (state_9554[2]);var inst_9549 = cljs_om.tweets.add_tweet.call(null,inst_9548,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_9554__$1 = (function (){var statearr_9556 = state_9554;(statearr_9556[7] = inst_9549);
return statearr_9556;
})();var statearr_9557_9567 = state_9554__$1;(statearr_9557_9567[2] = null);
(statearr_9557_9567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9555 === 3))
{var inst_9552 = (state_9554[2]);var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9554__$1,inst_9552);
} else
{if((state_val_9555 === 2))
{var state_9554__$1 = state_9554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9554__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_9555 === 1))
{var state_9554__$1 = state_9554;var statearr_9558_9568 = state_9554__$1;(statearr_9558_9568[2] = null);
(statearr_9558_9568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5638__auto___9566))
;return ((function (switch__5623__auto__,c__5638__auto___9566){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9562 = [null,null,null,null,null,null,null,null];(statearr_9562[0] = state_machine__5624__auto__);
(statearr_9562[1] = 1);
return statearr_9562;
});
var state_machine__5624__auto____1 = (function (state_9554){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9563){if((e9563 instanceof Object))
{var ex__5627__auto__ = e9563;var statearr_9564_9569 = state_9554;(statearr_9564_9569[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9570 = state_9554;
state_9554 = G__9570;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9554){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___9566))
})();var state__5640__auto__ = (function (){var statearr_9565 = f__5639__auto__.call(null);(statearr_9565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___9566);
return statearr_9565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___9566))
);
cljs_om.core.start_search = (function start_search(search){return cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,search,cljs_om.core.tweets_chan);
});
cljs_om.core.start_search.call(null,cljs_om.util.search_hash.call(null));

//# sourceMappingURL=core.js.map